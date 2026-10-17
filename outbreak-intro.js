/* First-visit incident comic and guided-tour callout. */
(function(){
  const intro=document.getElementById("outbreakIntro");
  const continueBtn=document.getElementById("introContinue");
  const skipBtn=document.getElementById("introSkip");
  const nudge=document.getElementById("tourNudge");
  const tourButton=document.getElementById("takeTour");
  const dismiss=document.getElementById("nudgeDismiss");
  if(!intro||!nudge||!tourButton)return;
  let returnFocus=null;
  function seen(){try{return localStorage.getItem("mqIncidentIntroSeen")==="true";}catch(e){return false;}}
  function markSeen(){try{localStorage.setItem("mqIncidentIntroSeen","true");}catch(e){}}
  function showNudge(){
    nudge.hidden=false;
    tourButton.classList.add("tour-button-highlight");
    tourButton.setAttribute("aria-describedby","tourNudge");
  }
  function closeIntro(){
    intro.hidden=true;
    markSeen();
    showNudge();
    tourButton.focus({preventScroll:true});
  }
  function hideNudge(){
    nudge.hidden=true;
    tourButton.classList.remove("tour-button-highlight");
    tourButton.removeAttribute("aria-describedby");
  }
  if(true){
    intro.hidden=false;
    returnFocus=document.activeElement;
    setTimeout(function(){continueBtn.focus({preventScroll:true});},0);
  }else{
    intro.hidden=true;
    nudge.hidden=true;
  }
  continueBtn.addEventListener("click",closeIntro);
  skipBtn.addEventListener("click",closeIntro);
  dismiss.addEventListener("click",hideNudge);
  tourButton.addEventListener("click",hideNudge);
  document.getElementById("heroTour")?.addEventListener("click",hideNudge);
  intro.addEventListener("keydown",function(e){
    if(e.key==="Escape"){e.preventDefault();closeIntro();}
  });
})();