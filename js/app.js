const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const outbreakCases = {
  poultry: {
    number: "001",
    title: "The Backyard Poultry Investigation",
    organism: "Salmonella",
    sourceName: "CDC investigation update, September 29, 2025",
    sourceUrl: "https://www.cdc.gov/salmonella/outbreaks/mbandaka-05-01/investigation.html",
    sourceNote: "The CDC reported 559 people infected across 48 states. Epidemiological, laboratory, and traceback data indicated that contact with backyard poultry was making people sick. This report covered multiple Salmonella serotypes, not one single strain.",
    briefingTitle: "An exposure pattern emerges.",
    briefingLead: "Public-health investigators combine reports from affected people, laboratory results, and traceback information. No single evidence type should be treated as the whole investigation.",
    briefingCards: [
      ["EXPOSURE", "Ask what people had in common", "Investigators compare reported activities and exposures among people who became ill. An association is informative, but it is not by itself proof of the exact route for every person."],
      ["LABORATORY", "Compare confirmed infections", "Laboratory testing identifies Salmonella infections and can help distinguish outbreak strains. A genus-level result alone does not establish the source."],
      ["TRACEBACK", "Follow the evidence to its source", "Traceback and exposure investigations can connect cases to a shared source. Here, the CDC reported that several lines of evidence implicated contact with backyard poultry."]
    ],
    evidence: [
      {tag:"EVIDENCE A / CASE COUNTS",title:"559 people reported across 48 states",detail:"The CDC's September 29, 2025 update reported 559 people infected with one of the investigated Salmonella serotypes in 48 states. The report warned that the true number was likely higher because not everyone is tested or reported."},
      {tag:"EVIDENCE B / EXPOSURE HISTORIES",title:"Contact with backyard poultry was identified",detail:"Public-health teams collected exposure histories from people who became ill. The CDC's overall assessment identified contact with backyard poultry as the source linked to these outbreaks."},
      {tag:"EVIDENCE C / CONVERGING METHODS",title:"Epidemiological, laboratory, and traceback data agreed",detail:"The investigation did not rely on a single observation. The CDC described converging evidence from epidemiology, laboratory testing, and traceback work. The report covered multiple Salmonella serotypes."}
    ],
    question: {
      prompt:"Which conclusion best matches the published evidence?",
      options:[
        {id:"a",text:"Every backyard chicken carries the outbreak strain, so all poultry contact is equally risky.",correct:false,feedback:"The report linked these outbreaks to contact with backyard poultry, but it does not establish that every bird carries the outbreak strain or that every contact results in infection."},
        {id:"b",text:"Multiple lines of evidence linked the investigated Salmonella outbreaks to contact with backyard poultry, while the true case count may be higher.",correct:true,feedback:"Supported. This closely reflects the CDC's findings while preserving an important limitation: reported cases are not necessarily all cases, and the investigation involved multiple Salmonella serotypes."},
        {id:"c",text:"The number of reported cases proves that poultry contact was the only possible exposure for every patient.",correct:false,feedback:"The investigation identified a source association, not proof that every patient's history was identical. Reported counts and source attribution should not be stretched beyond the report."}
      ]
    }
  },
  eggs: {
    number: "002",
    title: "The Contaminated Egg Trail",
    organism: "Salmonella Enteritidis",
    sourceName: "CDC investigation update, July 10, 2025",
    sourceUrl: "https://www.cdc.gov/salmonella/outbreaks/eggs-06-25/investigation.html",
    sourceNote: "The CDC reported 134 people in 10 states. Epidemiological, laboratory, and traceback data linked the outbreak to eggs distributed by August Egg Company. The investigation is marked over in the source report.",
    briefingTitle: "Follow the food supply chain.",
    briefingLead: "Foodborne outbreak teams compare what people ate, what the laboratory identifies, and where the suspected product travelled. A source attribution is strongest when independent evidence lines agree.",
    briefingCards: [
      ["EPIDEMIOLOGY", "Look for shared food exposures", "Interviews can reveal that people who became ill ate a common product. Recall bias and incomplete interviews can limit this evidence."],
      ["LABORATORY", "Check the organism identified", "The CDC investigated Salmonella Enteritidis infections. Identifying the pathogen helps define the outbreak, but does not alone identify the contaminated food."],
      ["TRACEBACK", "Connect product distribution records", "Traceback information links food products to suppliers and distribution routes. The CDC's final investigation connected the outbreak to eggs distributed by August Egg Company."]
    ],
    evidence: [
      {tag:"EVIDENCE A / SURVEILLANCE",title:"134 people reported in 10 states",detail:"The CDC's July 10, 2025 report counted 134 people infected with Salmonella Enteritidis in 10 states. The report noted that the true number of illnesses was likely higher."},
      {tag:"EVIDENCE B / OUTCOME",title:"38 of 112 people with information were hospitalized",detail:"The source report says 38 of the 112 people for whom hospitalization information was available were hospitalized. This is a subset with available information, not a complete clinical profile of every reported case."},
      {tag:"EVIDENCE C / TRACEBACK",title:"Eggs distributed by August Egg Company were implicated",detail:"The CDC stated that epidemiological, laboratory, and traceback data showed that eggs distributed by August Egg Company were contaminated with Salmonella Enteritidis and made people sick."}
    ],
    question: {
      prompt:"What makes the source attribution persuasive in this investigation?",
      options:[
        {id:"a",text:"The case count alone proves which supplier caused the outbreak.",correct:false,feedback:"A case count describes the scale of the event; it does not identify a supplier. Source attribution depends on combining different evidence types."},
        {id:"b",text:"Epidemiological, laboratory, and traceback findings converged on eggs distributed by the named company.",correct:true,feedback:"Supported. The CDC explicitly described those three lines of evidence as connecting the outbreak to eggs distributed by August Egg Company."},
        {id:"c",text:"Hospitalization figures alone identify the contaminated food.",correct:false,feedback:"Hospitalization information describes severity among people with available data. It cannot independently identify the food vehicle or supplier."}
      ]
    }
  },
  cholera: {
    number: "003",
    title: "The Cholera Surveillance Ledger",
    organism: "Vibrio cholerae",
    sourceName: "WHO multi-country cholera situation report, August 28, 2025",
    sourceUrl: "https://www.who.int/publications/m/item/multi-country-outbreak-of-cholera--external-situation-report--29--28-august-2025",
    sourceNote: "The WHO report summarized cases reported across multiple countries through July 27, 2025. These are surveillance totals across a multi-country emergency, not a single local cluster or a controlled experiment.",
    briefingTitle: "Read the ledger, mind the limits.",
    briefingLead: "Surveillance reports help teams describe where and when disease is reported. Reported totals depend on case definitions, access to testing, reporting systems, and delays.",
    briefingCards: [
      ["SURVEILLANCE", "A reported case is a recorded case", "Surveillance counts help describe the burden seen by reporting systems. They may not capture every infection in the population."],
      ["TRANSMISSION", "Cholera is associated with contaminated water or food", "Vibrio cholerae can spread through ingestion of contaminated water or food. A country-level case total alone does not identify the exposure route for a particular person."],
      ["INTERPRETATION", "Separate trend description from causal claims", "Situation reports can guide public-health action, but interpreting a trend requires attention to reporting changes, population movement, and the context of each setting."]
    ],
    evidence: [
      {tag:"EVIDENCE A / REPORTED BURDEN",title:"382,718 cases reported through July 27, 2025",detail:"WHO's August 28, 2025 situation report recorded 382,718 cholera cases reported from 31 countries from January 1 to July 27, 2025."},
      {tag:"EVIDENCE B / REPORTED OUTCOMES",title:"4,478 deaths reported in the same period",detail:"The same report recorded 4,478 deaths. These are reported surveillance totals, not a direct measurement of every infection or death occurring during that period."},
      {tag:"EVIDENCE C / DATA LIMITATION",title:"The figures combine multiple countries and reporting systems",detail:"A multi-country summary describes a broad public-health situation. It cannot by itself show that every case had the same exposure, that reporting was equally complete everywhere, or that one intervention caused a change in totals."}
    ],
    question: {
      prompt:"What is the most careful interpretation of these WHO figures?",
      options:[
        {id:"a",text:"The reported totals describe the recorded burden across countries, but underreporting and differences in surveillance limit direct comparisons.",correct:true,feedback:"Supported. The figures are important surveillance evidence, but reporting completeness and context matter. They do not count every infection or explain every individual transmission event."},
        {id:"b",text:"The figures prove that every reported case came from one contaminated water source.",correct:false,feedback:"A multi-country total does not identify a single shared source. Cholera transmission must be investigated in local contexts using exposure and environmental evidence."},
        {id:"c",text:"The death-to-case ratio is an exact measure of the risk faced by every person in every country.",correct:false,feedback:"A crude ratio of reported totals is not an individual's risk estimate. Case definitions, reporting completeness, access to care, and local conditions differ."}
      ]
    }
  }
};

const state = {
  score: Number(localStorage.getItem("mq-score") || 0),
  completed: Object.fromEntries(Object.keys(outbreakCases).map(id => [id, localStorage.getItem(`mq-case-${id}-complete`) === "true"])),
  activeCaseId: "poultry"
};

function activeCase() { return outbreakCases[state.activeCaseId]; }
function updateScore() {
  $("#score").textContent = String(state.score).padStart(3, "0");
  localStorage.setItem("mq-score", String(state.score));
}
function updateProgress() {
  $$("[data-case-progress]").forEach(el => {
    const id = el.dataset.caseProgress;
    el.textContent = state.completed[id] ? "CASE COMPLETED" : "NOT STARTED";
  });
}
function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}
function openCase(id = "poultry") {
  state.activeCaseId = outbreakCases[id] ? id : "poultry";
  const current = activeCase();
  $("#investigation-title").textContent = current.title;
  $("#investigation .investigation-topline .eyebrow").textContent = `CASE ${current.number} / SOURCE-BASED INVESTIGATION`;
  $("#investigation").classList.remove("hidden");
  renderBriefing();
  $("#investigation").scrollIntoView({ behavior: "smooth", block: "start" });
  $("#investigation-content").focus({ preventScroll: true });
}
function closeCase() {
  $("#investigation").classList.add("hidden");
  $("#case-files").scrollIntoView({ behavior: "smooth", block: "start" });
}
function renderBriefing() {
  const current = activeCase();
  const content = $("#investigation-content");
  content.innerHTML = `
    <div class="content-kicker"><span class="kicker-icon">FIELD NOTE ${current.number}</span> PHASE 01: SOURCE BRIEFING</div>
    <h2>${current.briefingTitle}</h2>
    <p class="lead">${current.briefingLead}</p>
    <div class="briefing-grid">
      ${current.briefingCards.map((card, i) => `<article class="briefing-card"><div class="briefing-symbol">${String(i + 1).padStart(2,"0")}</div><h3>${card[1]}</h3><p>${card[2]}</p></article>`).join("")}
    </div>
    <div class="science-note"><span class="note-icon">i</span><p><strong>SOURCE NOTE</strong><br>${current.sourceNote} <a href="${current.sourceUrl}" target="_blank" rel="noreferrer">Read the original public-health report.</a></p></div>
    <div class="content-footer"><span>PHASE 01 / 03</span><button class="button button-primary" id="to-evidence">OPEN THE EVIDENCE LEDGER</button></div>`;
  $("#to-evidence").addEventListener("click", renderEvidence);
  updateProtocol(0);
}
function renderEvidence() {
  const current = activeCase();
  const content = $("#investigation-content");
  content.innerHTML = `
    <div class="content-kicker"><span class="kicker-icon">FIELD NOTE ${current.number}</span> PHASE 02: EVIDENCE REVIEW</div>
    <h2>Read the record. Check its limits.</h2>
    <p class="lead">These summaries are based on the linked source report. Open the original record to inspect the context and wording.</p>
    <div class="evidence-list">
      ${current.evidence.map(item => `<article class="evidence-item"><span class="evidence-tag">${item.tag}</span><h3>${item.title}</h3><p>${item.detail}</p></article>`).join("")}
    </div>
    <div class="science-note"><span class="note-icon">i</span><p><strong>PRIMARY SOURCE</strong><br><a href="${current.sourceUrl}" target="_blank" rel="noreferrer">${current.sourceName}</a><br>Distinguish a published finding from your own interpretation.</p></div>
    <div class="content-footer"><span>PHASE 02 / 03</span><button class="button button-primary" id="to-conclusion">FORM A CONCLUSION</button></div>`;
  $("#to-conclusion").addEventListener("click", renderQuestion);
  updateProtocol(1);
  content.focus({ preventScroll: true });
}
function renderQuestion() {
  const current = activeCase();
  const content = $("#investigation-content");
  const q = current.question;
  content.innerHTML = `
    <div class="content-kicker"><span class="kicker-icon">FIELD NOTE ${current.number}</span> PHASE 03: YOUR CONCLUSION</div>
    <h2>What does the evidence support?</h2>
    <p class="lead">Select the most defensible interpretation. Feedback explains how the choice aligns with the published record.</p>
    <div class="question-block"><span class="evidence-tag">DECISION POINT ${current.number}</span><h3>${q.prompt}</h3><div class="answer-options">
      ${q.options.map((option, index) => `<button class="answer-option" data-option="${option.id}" aria-pressed="false"><span class="option-letter">${String.fromCharCode(65 + index)}</span><span>${option.text}</span></button>`).join("")}
    </div><div id="answer-feedback" aria-live="polite"></div></div>
    <div class="content-footer"><span>PHASE 03 / 03</span><a class="text-button source-link" href="${current.sourceUrl}" target="_blank" rel="noreferrer">CHECK THE ORIGINAL REPORT</a></div>`;
  content.querySelectorAll("[data-option]").forEach(button => button.addEventListener("click", () => chooseAnswer(button.dataset.option)));
  updateProtocol(2);
  content.focus({ preventScroll: true });
}
function chooseAnswer(id) {
  const current = activeCase();
  const answer = current.question.options.find(option => option.id === id);
  const buttons = $$("[data-option]");
  buttons.forEach(button => {
    button.setAttribute("aria-pressed", String(button.dataset.option === id));
    button.disabled = true;
  });
  const feedback = $("#answer-feedback");
  feedback.className = `feedback ${answer.correct ? "" : "incorrect"}`;
  feedback.innerHTML = `<strong>${answer.correct ? "CONCLUSION SUPPORTED" : "RECONSIDER THE EVIDENCE"}</strong><p>${answer.feedback}</p>`;
  if (answer.correct) {
    if (!state.completed[state.activeCaseId]) {
      state.score += 100;
      state.completed[state.activeCaseId] = true;
      localStorage.setItem(`mq-case-${state.activeCaseId}-complete`, "true");
      showToast(`+100 POINTS : CASE ${current.number} COMPLETE`);
    } else {
      showToast("CASE ALREADY COMPLETED : REVIEW THE REASONING");
    }
    updateScore();
    updateProgress();
    const footer = $(".content-footer");
    const review = document.createElement("button");
    review.className = "button button-secondary";
    review.textContent = "REVIEW THE EVIDENCE";
    review.addEventListener("click", renderEvidence);
    footer.appendChild(review);
  } else {
    const retry = document.createElement("button");
    retry.className = "button button-secondary";
    retry.style.marginTop = "12px";
    retry.textContent = "TRY ANOTHER ANSWER";
    retry.addEventListener("click", renderQuestion);
    feedback.appendChild(retry);
  }
}
function updateProtocol(activeIndex) {
  $$(".protocol-step").forEach((step, index) => step.classList.toggle("active", index === activeIndex));
}
$("#start-investigation").addEventListener("click", () => openCase("poultry"));
$("#specimen-hotspot").addEventListener("click", () => openCase("poultry"));
$$("[data-case-id]").forEach(button => button.addEventListener("click", () => openCase(button.dataset.caseId)));
$("#close-case").addEventListener("click", closeCase);
$("#to-evidence").addEventListener("click", renderEvidence);
updateScore();
updateProgress();
