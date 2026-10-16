const $ = (selector) => document.querySelector(selector);

const state = {
  score: Number(localStorage.getItem("mq-score") || 0),
  complete: localStorage.getItem("mq-case-001-complete") === "true",
  selected: null
};

const caseFiles = {
  evidence: [
    {
      tag: "EVIDENCE A / MICROSCOPY",
      title: "A cell-like shape is visible",
      detail: "Under the microscope, the sample contains small cell-like structures. The image alone does not establish the organism's species or cell-envelope chemistry.",
    },
    {
      tag: "EVIDENCE B / GRAM STAIN",
      title: "Most visible cells appear Gram-negative",
      detail: "The stained preparation is pink/red. This is consistent with Gram-negative staining behaviour, but technique and sample quality can affect the result.",
    },
    {
      tag: "EVIDENCE C / QUALITY CONTROL",
      title: "The control slide is poorly stained",
      detail: "The known control on the same run is inconsistent. That weakens confidence in the unknown sample's result and makes repeating the stain an important next step.",
    }
  ],
  question: {
    prompt: "What is the most scientifically defensible next step?",
    options: [
      { id: "a", text: "Name the species immediately because pink staining uniquely identifies it.", correct: false, feedback: "A Gram stain does not uniquely identify a species. This conclusion goes beyond what the evidence can support." },
      { id: "b", text: "Repeat the Gram stain with a reliable control, then use additional tests if needed.", correct: true, feedback: "Correct. The poor control makes the current run unreliable. Repeat the procedure with quality control before interpreting the result, then combine independent evidence to narrow the identification." },
      { id: "c", text: "Conclude that the sample has no cell wall because the stain is pink.", correct: false, feedback: "Pink/red staining is not evidence that a cell lacks a wall. Gram-negative bacteria have a cell wall containing a thin peptidoglycan layer plus an outer membrane." },
      { id: "d", text: "Discard the microscopy result and assume the organism is a virus.", correct: false, feedback: "The observations do not justify calling the sample a virus. Viruses are not cells and require different methods of detection and characterization." }
    ]
  }
};

function updateScore() {
  $("#score").textContent = String(state.score).padStart(3, "0");
  localStorage.setItem("mq-score", String(state.score));
}
function updateProgress() {
  const label = state.complete ? "CASE COMPLETED" : "IN PROGRESS";
  $("#case-progress").textContent = label;
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}
function openCase() {
  $("#investigation").classList.remove("hidden");
  $("#investigation").scrollIntoView({ behavior: "smooth", block: "start" });
  $("#investigation-content").focus({ preventScroll: true });
}
function closeCase() {
  $("#investigation").classList.add("hidden");
  $("#case-files").scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderEvidence() {
  const content = $("#investigation-content");
  content.innerHTML = `
    <div class="content-kicker"><span class="kicker-icon">FIELD NOTE</span> PHASE 02: EVIDENCE REVIEW</div>
    <h2>Read the results. Check their limits.</h2>
    <p class="lead">Review each item before making a decision. In a real investigation, a result is only as trustworthy as the method and controls behind it.</p>
    <div class="evidence-list">
      ${caseFiles.evidence.map(item => `<article class="evidence-item"><span class="evidence-tag">${item.tag}</span><h3>${item.title}</h3><p>${item.detail}</p></article>`).join("")}
    </div>
    <div class="science-note"><span class="note-icon">!</span><p><strong>YOUR TASK</strong><br>Choose the next action that best protects the validity of your conclusion. You are not being asked to guess the organism's identity.</p></div>
    <div class="content-footer"><span>PHASE 02 / 03</span><button class="button button-primary" id="to-conclusion">FORM A CONCLUSION →</button></div>`;
  $("#to-conclusion").addEventListener("click", renderQuestion);
  updateProtocol(1);
  content.focus({ preventScroll: true });
}
function renderQuestion() {
  const content = $("#investigation-content");
  const q = caseFiles.question;
  content.innerHTML = `
    <div class="content-kicker"><span class="kicker-icon">FIELD NOTE</span> PHASE 03: YOUR CONCLUSION</div>
    <h2>What should the investigator do next?</h2>
    <p class="lead">Select one answer. Your feedback will explain the scientific reasoning, not just mark the choice right or wrong.</p>
    <div class="question-block"><span class="evidence-tag">DECISION POINT 01</span><h3>${q.prompt}</h3><div class="answer-options">
      ${q.options.map((option, index) => `<button class="answer-option" data-option="${option.id}" aria-pressed="false"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option.text}</span></button>`).join("")}
    </div><div id="answer-feedback" aria-live="polite"></div></div>
    <div class="content-footer"><span>PHASE 03 / 03</span><span>SCIENTIFIC REASONING / QUALITY CONTROL</span></div>`;
  content.querySelectorAll("[data-option]").forEach(button => {
    button.addEventListener("click", () => chooseAnswer(button.dataset.option));
  });
  updateProtocol(2);
  content.focus({ preventScroll: true });
}
function chooseAnswer(id) {
  const q = caseFiles.question;
  const answer = q.options.find(option => option.id === id);
  const buttons = document.querySelectorAll("[data-option]");
  buttons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.option === id));
    button.disabled = true;
  });
  const feedback = $("#answer-feedback");
  feedback.className = `feedback ${answer.correct ? "" : "incorrect"}`;
  feedback.innerHTML = `<strong>${answer.correct ? "✓ CONCLUSION SUPPORTED" : "↻ RECONSIDER THE EVIDENCE"}</strong><p>${answer.feedback}</p>`;
  if (answer.correct) {
    if (!state.complete) {
      state.score += 100;
      state.complete = true;
      localStorage.setItem("mq-case-001-complete", "true");
      showToast("+100 POINTS : CASE 001 COMPLETE");
    } else {
      showToast("CASE ALREADY COMPLETED : REVIEW THE REASONING");
    }
    updateScore();
    updateProgress();
    const footer = $(".content-footer");
    const restart = document.createElement("button");
    restart.className = "button button-secondary";
    restart.textContent = "REVIEW THE EVIDENCE ↻";
    restart.addEventListener("click", renderEvidence);
    footer.appendChild(restart);
  } else {
    const retry = document.createElement("button");
    retry.className = "button button-secondary";
    retry.style.marginTop = "12px";
    retry.textContent = "TRY ANOTHER ANSWER ↻";
    retry.addEventListener("click", renderQuestion);
    feedback.appendChild(retry);
  }
}
function updateProtocol(activeIndex) {
  document.querySelectorAll(".protocol-step").forEach((step, index) => {
    step.classList.toggle("active", index === activeIndex);
  });
}
$("#start-investigation").addEventListener("click", openCase);
$("#specimen-hotspot").addEventListener("click", openCase);
$("#open-case").addEventListener("click", openCase);
$("#close-case").addEventListener("click", closeCase);
$("#to-evidence").addEventListener("click", renderEvidence);
updateScore();
updateProgress();