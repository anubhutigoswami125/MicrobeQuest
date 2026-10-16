(() => {
  const overlay = document.getElementById("outbreak-intro");
  if (!overlay) return;
  const panels = [...overlay.querySelectorAll("[data-intro-panel]")];
  const stepLabel = document.getElementById("intro-step");
  const next = document.getElementById("intro-next");
  const skip = document.getElementById("intro-skip");
  const nudge = document.getElementById("tour-nudge");
  const tourButton = document.getElementById("take-tour");
  let index = 0;

  function renderPanel() {
    panels.forEach((panel, i) => { panel.hidden = i !== index; });
    stepLabel.textContent = "PANEL " + (index + 1) + " / " + panels.length;
    next.textContent = index === panels.length - 1 ? "ASSIGNMENT ACCEPTED →" : "NEXT PANEL →";
  }
  function closeIntro() {
    overlay.hidden = true;
    showTourNudge();
  }
  function showTourNudge() {
    nudge.hidden = false;
    if (tourButton) tourButton.classList.add("outbreak-tour-highlight");
  }
  function hideTourNudge() {
    nudge.hidden = true;
    if (tourButton) tourButton.classList.remove("outbreak-tour-highlight");
  }

  next.addEventListener("click", () => {
    if (index < panels.length - 1) { index += 1; renderPanel(); }
    else closeIntro();
  });
  skip.addEventListener("click", closeIntro);
  document.getElementById("tour-nudge-dismiss").addEventListener("click", hideTourNudge);
  document.getElementById("tour-nudge-start").addEventListener("click", () => {
    hideTourNudge();
    if (tourButton) tourButton.click();
    else document.getElementById("hero-tour")?.click();
  });
  tourButton?.addEventListener("click", hideTourNudge);
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !overlay.hidden) closeIntro();
  });
  renderPanel();
  overlay.hidden = false;
})();
