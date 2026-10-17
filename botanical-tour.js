/* Optional keyboard-accessible tour for MicrobeQuest. Does not submit or store tour-specific personal data. */
(function(){
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
  const panel=$("#botanicalTour");
  if(!panel||panel.dataset.ready)return;
  panel.dataset.ready="true";
  const title=$("#tourTitle"),copy=$("#tourCopy"),count=$("#tourCount"),progress=$("#tourProgress"),back=$("#tourBack"),next=$("#tourNext"),skip=$("#tourSkip");
  const steps=[
    {target:".hero-copy",title:"Welcome to MicrobeQuest",copy:"This is a guided microbiology learning experience. The interactive hospital scenario is fictional; use the primary-source reading in the project notes when you need documented outbreak facts."},
    {target:".unit-strip",title:"Follow the six-unit map",copy:"The investigation moves through cell structure, diversity and growth, metabolism, genetics, ecology, and microbial control. Each stage pairs a question with evidence and an explanation."},
    {target:"#documented-outbreaks",title:"Browse documented outbreak records",copy:"These archival files link to real CDC and WHO reports, with dates, locations, pathogens, and stated limits. They are reference records; the six-stage interactive hospital scenario remains a separate fictional teaching simulation."},
    {target:"#startBtn",title:"Begin an investigation",copy:"Start to enter the case. Registration and explicit consent are required before the game begins, and the tour never bypasses that step.",next:()=>{
      if(!$("#game").classList.contains("hidden"))return 5;
      $("#startBtn").click();
      if(getParticipantId()){return 5;}
      waitingForRegistration=true;
      return 4;
    }},
    {target:".registration-panel",title:"Registration and consent",copy:"Complete the required fields and read the consent statement. The tour pauses here until the existing registration flow succeeds; you can also skip the tour or close registration.",wait:true},
    {target:".stage-panel",title:"Read each stage carefully",copy:"Read the question and evidence card before selecting an answer. The six-stage teaching scenario is designed to practise microbiology concepts, not to diagnose a real patient or name a real outbreak."},
    {target:".er-tabs",title:"Open the Evidence Room",copy:"Use Explore to inspect objects and collect clues. The Board records relationships, Timeline lets you reorder case events, and Hypotheses lets you compare support, contradiction, and uncertainty.",next:()=>{const b=$('.er-tabs [data-tab="board"]');if(b)b.click();return 7;}},
    {target:"#erBoard",title:"Connect evidence on the board",copy:"Collect clues first, pin them to the board, then select two notes and choose whether their relationship supports, contradicts, or may relate. A drawn connection is your reasoning—not proof of causation.",next:()=>{const b=$('.er-tabs [data-tab="timeline"]');if(b)b.click();return 8;}},
    {target:"#erTimeline",title:"Reconstruct the sequence",copy:"Use the arrow controls to arrange the fictional case records chronologically. Check the order and review the feedback; do not infer dates that the case file does not provide.",next:()=>{const b=$('.er-tabs [data-tab="hypothesis"]');if(b)b.click();return 9;}},
    {target:"#erHypotheses",title:"Compare working hypotheses",copy:"Choose a hypothesis and review which collected clues support it, contradict it, or remain inconclusive. Update your interpretation as you gather more evidence.",next:()=>{const b=$('.er-tabs [data-tab="explore"]');if(b)b.click();return 10;}},
    {target:".stage-controls",title:"Hints and scoring",copy:"Reveal a hint when needed. A correct answer normally earns 10 points; with a hint, it earns 7. Feedback appears after you answer, and the score stays visible in the case sidebar."},
    {target:".method-note",title:"Debrief, limits and sources",copy:"After the sixth stage, use the final debrief to review your score and scientific takeaways, then replay if you want to practise again. The project notes at the bottom link to CDC and WHO primary-source outbreak reports."}
  ];
  let index=0,target=null,returnFocus=null,waitingForRegistration=false;
  function getParticipantId(){try{const n=Number(localStorage.getItem("microbequestParticipantId"));return Number.isSafeInteger(n)&&n>0?n:null;}catch(e){return null;}}
  function clearTarget(){if(target){target.classList.remove("tour-target-active");target.removeAttribute("aria-describedby");target=null;}}
  function position(){
    if(!target||panel.hidden)return;
    const r=target.getBoundingClientRect(),p=panel.getBoundingClientRect(),m=12;
    let left=Math.max(m,Math.min(innerWidth-p.width-m,r.left+(r.width-p.width)/2));
    let top=r.bottom+12;
    if(top+p.height>innerHeight-m)top=r.top-p.height-12;
    top=Math.max(m,Math.min(top,innerHeight-p.height-m));
    panel.style.left=left+"px";panel.style.top=top+"px";
  }
  function show(i){
    clearTarget();index=Math.max(0,Math.min(i,steps.length-1));
    const s=steps[index];let el=$(s.target);
    if(el&&el.closest(".hidden"))el=null;
    if(!el)el=$("#hero");
    target=el;target.classList.add("tour-target-active");target.setAttribute("aria-describedby","botanicalTour");
    panel.hidden=false;
    count.textContent="STEP "+(index+1)+" OF "+steps.length;
    title.textContent=s.title;copy.textContent=s.copy;
    progress.style.width=((index+1)/steps.length*100)+"%";
    back.disabled=index===0||waitingForRegistration;
    next.disabled=!!s.wait&&waitingForRegistration;
    next.textContent=index===steps.length-1?"Finish":"Next →";
    target.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth",block:"center",inline:"nearest"});
    requestAnimationFrame(position);
  }
  function finish(completed){
    clearTarget();panel.hidden=true;panel.style.left="";panel.style.top="";
    waitingForRegistration=false;
    if(completed){try{localStorage.setItem("mqBotanicalTourComplete","true");}catch(e){}}
    if(returnFocus&&returnFocus.isConnected)returnFocus.focus({preventScroll:true});
  }
  function advance(){
    if(waitingForRegistration)return;
    const s=steps[index];
    if(index===steps.length-1){finish(true);return;}
    if(s.next){
      const n=s.next();
      if(n===4){show(4);next.disabled=true;return;}
      show(typeof n==="number"?n:index+1);return;
    }
    show(index+1);
  }
  function launch(){returnFocus=document.activeElement;waitingForRegistration=false;show(0);}
  $("#takeTour").addEventListener("click",launch);
  $("#heroTour").addEventListener("click",launch);
  next.addEventListener("click",advance);
  back.addEventListener("click",()=>{if(waitingForRegistration)return;if(index===5&&getParticipantId())show(3);else if(index>0)show(index-1);});
  skip.addEventListener("click",()=>finish(false));
  $("#tourClose").addEventListener("click",()=>finish(false));
  document.addEventListener("keydown",e=>{if(panel.hidden)return;if(e.key==="Escape"){finish(false);}else if(e.key==="ArrowRight"&&!next.disabled){advance();}else if(e.key==="ArrowLeft"&&!back.disabled&&index>0){if(index===5&&getParticipantId())show(3);else show(index-1);}});
  window.addEventListener("resize",position);
  window.addEventListener("scroll",position,{passive:true});
  window.addEventListener("mq:investigation-started",()=>{
    if(!waitingForRegistration)return;
    waitingForRegistration=false;
    show(5);
  });
  try{if(localStorage.getItem("mqBotanicalTourComplete")==="true")$("#takeTour").setAttribute("aria-label","Restart the website tour");}catch(e){}
})();