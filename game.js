const stages = [
 {unit:"UNIT I · CELL STRUCTURE",title:"The clustered cocci",clue:"EVIDENCE 01",prompt:"A reference isolate is described by Gram stain and two preliminary bench tests. Which organism best fits this profile?",evidenceTitle:"MICROSCOPY & BENCH TESTS / MQ-001-A",evidence:"SIMULATED REFERENCE PROFILE: Gram-positive cocci in clusters; catalase-positive; coagulase-positive. This is consistent with Staphylococcus aureus, but a real identification requires a validated laboratory workflow.",hint:"Staphylococcus aureus typically appears as Gram-positive cocci in clusters and is catalase-positive and coagulase-positive.",choices:[
 {text:"Escherichia coli, a Gram-negative rod commonly capable of lactose fermentation.",why:"E. coli is a Gram-negative rod, not Gram-positive cocci in clusters."},
 {text:"Staphylococcus aureus, typically Gram-positive cocci in clusters, catalase-positive and coagulase-positive.",correct:true,why:"Correct. This profile is characteristic of S. aureus. Bench-test patterns support a presumptive identification, not a substitute for the laboratory's validated species-identification procedure."},
 {text:"Streptococcus pyogenes, typically catalase-negative cocci arranged in chains.",why:"Streptococci are typically catalase-negative and commonly appear in chains or pairs."},
 {text:"Staphylococcus epidermidis, usually coagulase-negative.",why:"S. epidermidis is a coagulase-negative staphylococcus, so the coagulase-positive result points away from it."}
 ]},
 {unit:"UNIT II · DIVERSITY & GROWTH",title:"A familiar laboratory rod",clue:"EVIDENCE 02",prompt:"The reference isolate is Escherichia coli. Which description correctly combines its usual cell type with the meaning of the culture curve?",evidenceTitle:"CULTURE REPORT / MQ-001-B",evidence:"SIMULATED REFERENCE PROFILE: E. coli is a Gram-negative rod and a facultative anaerobe; many common strains ferment lactose. In this batch-culture trace, viable counts rise and later plateau.",hint:"A plateau in a typical batch culture is consistent with stationary phase; it does not mean every cell has died.",choices:[
 {text:"E. coli is an obligate aerobe and cannot grow without oxygen.",why:"E. coli is facultatively anaerobic and can grow with or without oxygen using different metabolic strategies."},
 {text:"E. coli is a Gram-negative rod and facultative anaerobe; the plateau is consistent with stationary phase.",correct:true,why:"Correct. E. coli is a Gram-negative rod and facultative anaerobe. A batch-culture plateau is consistent with stationary phase, when population growth slows and division and death may approach balance."},
 {text:"The plateau proves all cells are dead and the species is identified by its curve.",why:"A stationary-phase plateau does not mean all cells have died, and growth curves are not species-specific."},
 {text:"E. coli is a Gram-positive spore-forming coccus.",why:"E. coli is a Gram-negative rod and does not form endospores."}
 ]},
 {unit:"UNIT III · MICROBIAL METABOLISM",title:"The lactic-acid producer",clue:"EVIDENCE 03",prompt:"A food-fermentation isolate is identified as Lactiplantibacillus plantarum, formerly called Lactobacillus plantarum. Which feature profile is accurate?",evidenceTitle:"FERMENTATION NOTE / MQ-001-C",evidence:"SIMULATED REFERENCE PROFILE: L. plantarum is a Gram-positive, rod-shaped, non-spore-forming lactic-acid bacterium. It is facultatively anaerobic and facultatively heterofermentative; products depend on strain and conditions.",hint:"Lactiplantibacillus plantarum is a Gram-positive rod and produces lactic acid. Its metabolism can vary with substrate and conditions.",choices:[
 {text:"A Gram-negative, endospore-forming obligate aerobe.",why:"L. plantarum is Gram-positive, non-spore-forming and lactic-acid-producing."},
 {text:"A virus that ferments sugars independently of host cells.",why:"L. plantarum is a bacterium, not a virus. Viruses do not carry out independent cellular fermentation."},
 {text:"A Gram-positive, non-spore-forming rod that can produce lactic acid; metabolism varies with conditions.",correct:true,why:"Correct. L. plantarum is a Gram-positive, rod-shaped, non-spore-forming lactic-acid bacterium. It is facultatively anaerobic and facultatively heterofermentative."},
 {text:"A Gram-positive coccus that forms heat-resistant endospores.",why:"L. plantarum is rod-shaped and non-spore-forming."}
 ]},
 {unit:"UNIT IV · MICROBIAL GENETICS",title:"The plasmid-associated marker",clue:"EVIDENCE 04",prompt:"The reference isolate is Klebsiella pneumoniae, and a resistance-associated marker is detected on a plasmid. Which conclusion is justified?",evidenceTitle:"GENETIC EVIDENCE / MQ-001-D",evidence:"SIMULATED REFERENCE PROFILE: K. pneumoniae is a Gram-negative, encapsulated rod and facultative anaerobe. Some strains carry plasmids with antimicrobial-resistance genes; transfer has not been demonstrated in this scenario.",hint:"Conjugation can transfer plasmids between compatible bacteria, but detecting a plasmid does not prove a transfer event or its direction.",choices:[
 {text:"The plasmid proves which patient transmitted the organism to another patient.",why:"A plasmid marker alone cannot establish transmission direction or person-to-person linkage."},
 {text:"Transformation always requires a bacteriophage.",why:"Transformation is uptake of free DNA. Bacteriophage-mediated transfer is transduction."},
 {text:"K. pneumoniae is a Gram-positive coccus, so the result must be contamination.",why:"K. pneumoniae is a Gram-negative, encapsulated rod. A plasmid finding alone does not establish contamination."},
 {text:"Conjugation is one possible plasmid-transfer route, but this result alone does not prove it occurred.",correct:true,why:"Correct. Plasmids can carry resistance genes, and conjugation is one possible horizontal-transfer route. This result alone does not prove transfer occurred."}
 ]},
 {unit:"UNIT V · MICROBIAL ECOLOGY",title:"A water-system organism",clue:"EVIDENCE 05",prompt:"The organism under investigation is Legionella pneumophila. A hospital water outlet and patient-associated samples have preliminary similarity. What is the strongest defensible interpretation?",evidenceTitle:"WATER-SYSTEM REVIEW / MQ-001-E",evidence:"SIMULATED REFERENCE PROFILE: L. pneumophila is associated with human-made water systems and can multiply in certain free-living amoebae. Exposure can occur when contaminated water generates aerosols. The profiles have not undergone confirmatory comparison.",hint:"Water-system ecology makes the outlet a plausible lead, but preliminary similarity alone does not prove a source or direction of transmission.",choices:[
 {text:"The outlet is a plausible lead for investigation, but preliminary similarity does not prove it caused the cases.",correct:true,why:"Correct. Legionella can grow in human-made water systems and spread through aerosols. Source attribution requires appropriate sampling, validated comparisons, timelines and epidemiological context."},
 {text:"Every water outlet containing Legionella proves it caused all nearby pneumonia cases.",why:"Detection alone does not prove exposure, infection or causation. Concentration, exposure, clinical evidence and validated comparisons matter."},
 {text:"Legionella is a virus with no bacterial cell structure.",why:"L. pneumophila is a bacterium. It can replicate intracellularly in hosts such as amoebae and human macrophages, but it is not a virus."},
 {text:"Environmental sampling can never help investigate Legionella.",why:"Environmental sampling can be important for water-system investigations when designed and interpreted appropriately."}
 ]},
 {unit:"UNIT VI · MICROBIAL CONTROL",title:"The biological indicator",clue:"EVIDENCE 06",prompt:"A sterilization record names Geobacillus stearothermophilus spores in a biological indicator for a steam sterilizer. Why is this organism used?",evidenceTitle:"STERILIZATION MONITOR / MQ-001-F",evidence:"SIMULATED REFERENCE PROFILE: G. stearothermophilus is a thermophilic, endospore-forming bacterium. Its resistant spores are used in biological indicators to monitor suitable steam-sterilization processes.",hint:"Biological indicators challenge a sterilization process with resistant spores. They complement, rather than replace, mechanical and chemical monitoring.",choices:[
 {text:"Its spores provide a resistant biological challenge for monitoring an appropriate steam-sterilization process.",correct:true,why:"Correct. G. stearothermophilus spores are used in biological indicators for steam sterilization because they challenge the process with resistant spores. Follow the indicator instructions and validated protocols."},
 {text:"It is a virus that survives because it has no proteins.",why:"G. stearothermophilus is a bacterium that forms endospores, not a virus."},
 {text:"Finding the species in the record proves every instrument in the load is sterile.",why:"A biological indicator must be interpreted with the cycle, instructions and other monitoring data; its mention alone does not prove a successful cycle."},
 {text:"Any surface disinfectant reliably destroys every bacterial endospore.",why:"Disinfection is not interchangeable with sterilization. Ordinary surface disinfection does not guarantee destruction of endospores."}
 ]}
];

(function initCellField(){
 const canvas=document.getElementById("cellField");if(!canvas)return;
 const ctx=canvas.getContext("2d");if(!ctx)return;
 const reduce=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;
 const palette=[["#f3b7ca","#fff2e9","#b94e6a"],["#b9e2f4","#f4fbff","#548eaa"],["#b9dba9","#f4f8df","#54875d"],["#f5d66f","#fff7d4","#b78335"],["#f1a16e","#fff0d9","#b65f49"],["#c9b9e9","#f8f0ff","#8065a6"]];
 let w=0,h=0,dpr=1,mouse={x:-1000,y:-1000,active:false},last=0;
 const cells=Array.from({length:19},(_,i)=>({x:Math.random(),y:Math.random(),r:20+Math.random()*38,vx:(Math.random()-.5)*.00014,vy:(Math.random()-.5)*.00012,phase:Math.random()*6.28,color:palette[i%palette.length]}));
 function resize(){dpr=Math.min(window.devicePixelRatio||1,1.7);w=window.innerWidth;h=window.innerHeight;canvas.width=Math.round(w*dpr);canvas.height=Math.round(h*dpr);canvas.style.width=w+"px";canvas.style.height=h+"px";ctx.setTransform(dpr,0,0,dpr,0,0);}
 window.addEventListener("resize",resize,{passive:true});
 window.addEventListener("pointermove",e=>{mouse.x=e.clientX;mouse.y=e.clientY;mouse.active=true;},{passive:true});
 window.addEventListener("pointerleave",()=>{mouse.active=false;},{passive:true});resize();
 function draw(now){
  const dt=Math.min(40,now-(last||now));last=now;ctx.clearRect(0,0,w,h);
  cells.forEach(c=>{
   c.phase+=dt*.00045;
   if(!reduce){c.x+=c.vx*dt;c.y+=c.vy*dt;if(c.x<-.1)c.x=1.1;if(c.x>1.1)c.x=-.1;if(c.y<-.1)c.y=1.1;if(c.y>1.1)c.y=-.1;}
   const x=c.x*w+Math.sin(c.phase)*8,y=c.y*h+Math.cos(c.phase*.83)*9,dx=mouse.x-x,dy=mouse.y-y,dist=Math.hypot(dx,dy),influence=mouse.active?Math.max(0,1-dist/210):0,pulse=reduce?0:Math.sin(c.phase*1.4)*.05,sx=c.r*(1+pulse+influence*.48),sy=c.r*(1-pulse+influence*.3);
   const points=Array.from({length:10},(_,k)=>{const a=k*Math.PI*2/10;const wobble=1+(reduce?0:.105*Math.sin(c.phase*1.7+k*2.15))+influence*.09*Math.sin(k*1.7+c.phase);return{x:Math.cos(a)*sx*wobble,y:Math.sin(a)*sy*wobble};});
   ctx.save();ctx.translate(x,y);ctx.rotate(Math.atan2(dy,dx)*.09+c.phase*.18);
   ctx.beginPath();for(let k=0;k<points.length;k++){const p=points[k],q=points[(k+1)%points.length],mx=(p.x+q.x)/2,my=(p.y+q.y)/2;if(k===0)ctx.moveTo(mx,my);ctx.quadraticCurveTo(p.x,p.y,mx,my);}ctx.closePath();
   const grad=ctx.createRadialGradient(-sx*.35,-sy*.42,1,0,0,sx*1.35);grad.addColorStop(0,c.color[1]);grad.addColorStop(.48,c.color[0]);grad.addColorStop(1,c.color[2]);ctx.fillStyle=grad;ctx.globalAlpha=.42+influence*.2;ctx.fill();ctx.lineWidth=1;ctx.strokeStyle=c.color[2];ctx.globalAlpha=.2+influence*.25;ctx.stroke();
   ctx.beginPath();ctx.ellipse(-sx*.28,-sy*.34,sx*.29,sy*.17,-.4,0,Math.PI*2);ctx.fillStyle="#fff";ctx.globalAlpha=.36+influence*.25;ctx.fill();ctx.restore();
  });
  if(!reduce)requestAnimationFrame(draw);
 }
 draw(0);if(reduce)canvas.style.opacity=".24";
})();
let activeChoices = [];
const $ = id => document.getElementById(id);
let current = 0, score = 0, answered = false, hintUsed = false, attempts = 0;
const evidenceLog = [];
const referenceMicrobeShapes=["coccus","spirillum","paramecium","bacillus","vibrio","spore"];
const caseMicrobeShapes=["coccus","bacillus","bacillus","bacillus","bacillus","spore"];
const referenceMicrobeColors=[
 {main:"#f3b7ca",light:"#fff2e9",deep:"#b94e6a"},
 {main:"#b9e2f4",light:"#f4fbff",deep:"#548eaa"},
 {main:"#b9dba9",light:"#f4f8df",deep:"#54875d"},
 {main:"#f5d66f",light:"#fff7d4",deep:"#b78335"},
 {main:"#f1a16e",light:"#fff0d9",deep:"#b65f49"},
 {main:"#c9b9e9",light:"#f8f0ff",deep:"#8065a6"},
 {main:"#ef9cab",light:"#fff0f3",deep:"#a83c5c"}
];
let lastReferenceMicrobeColor=-1;
function updateReferenceMicrobe(stageIndex=null){
 const microbe=$("referenceMicrobe");if(!microbe)return;
 const shape=stageIndex===null?referenceMicrobeShapes[Math.floor(Math.random()*referenceMicrobeShapes.length)]:caseMicrobeShapes[stageIndex]||"bacillus";
 microbe.className="specimen shape-"+shape;
 let colorIndex=Math.floor(Math.random()*referenceMicrobeColors.length);
 if(referenceMicrobeColors.length>1&&colorIndex===lastReferenceMicrobeColor)colorIndex=(colorIndex+1+Math.floor(Math.random()*(referenceMicrobeColors.length-1)))%referenceMicrobeColors.length;
 lastReferenceMicrobeColor=colorIndex;
 const color=referenceMicrobeColors[colorIndex];
 microbe.style.setProperty("--microbe-main",color.main);
 microbe.style.setProperty("--microbe-light",color.light);
 microbe.style.setProperty("--microbe-deep",color.deep);
 microbe.setAttribute("aria-label","Interactive illustrative "+shape+" microbe specimen");
}
updateReferenceMicrobe();
function renderStage(){
 const s = stages[current]; updateReferenceMicrobe(current); answered = false; hintUsed = false;
 $("stageTitle").textContent = s.title; $("unitTag").textContent = s.unit; $("clueTag").textContent = s.clue;
 $("questionTitle").textContent = s.prompt; $("questionText").textContent = "Review the simulated evidence, then choose the conclusion best supported by the information provided.";
 $("evidenceCard").innerHTML = "<strong></strong><p></p>"; $("evidenceCard").querySelector("strong").textContent=s.evidenceTitle; $("evidenceCard").querySelector("p").textContent=s.evidence;
 $("choices").innerHTML = ""; $("feedback").className="feedback hidden"; $("feedback").textContent=""; $("hintText").className="hint-text hidden"; $("hintText").textContent="";
 $("hintBtn").classList.remove("hidden"); $("nextBtn").classList.add("hidden"); $("nextBtn").textContent=current===stages.length-1?"View final debrief →":"Next evidence →";
 $("progressText").textContent="STAGE "+String(current+1).padStart(2,"0")+" / 06"; $("progressFill").style.width=((current+1)/stages.length*100)+"%";
 activeChoices=s.choices.slice(); for(let i=activeChoices.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));const tmp=activeChoices[i];activeChoices[i]=activeChoices[j];activeChoices[j]=tmp;}
 activeChoices.forEach((choice,i)=>{const b=document.createElement("button");b.className="choice";b.type="button";const letter=document.createElement("span");letter.className="choice-letter";letter.textContent=String.fromCharCode(65+i);const label=document.createElement("span");label.textContent=choice.text;b.append(letter,label);b.addEventListener("click",()=>selectChoice(i,b));$("choices").appendChild(b)});
 if(window.renderEvidenceRoom)window.renderEvidenceRoom(current,s);
}
function selectChoice(index,button){
 if(answered)return; answered=true; attempts++;
 const s=stages[current], choice=activeChoices[index], correct=!!choice.correct;
 if(correct){score+=hintUsed?7:10;button.classList.add("correct")}else{button.classList.add("incorrect");$("choices").querySelectorAll(".choice").forEach((b,i)=>{if(activeChoices[i].correct)b.classList.add("correct")})}
 $("choices").querySelectorAll("button").forEach(b=>b.disabled=true);
 const fb=$("feedback");fb.classList.remove("hidden");fb.classList.toggle("is-wrong",!correct);
 const title=document.createElement("strong");title.textContent=correct?(hintUsed?"SUPPORTED CONCLUSION · HINT USED":"SUPPORTED CONCLUSION · +10 POINTS"):"REVIEW THE EVIDENCE · CORRECT ANSWER REVEALED";
 const body=document.createElement("span");body.textContent=correct?choice.why:activeChoices.find(c=>c.correct).why;fb.replaceChildren(title,body);
 if(!correct){const explanation=document.createElement("p");explanation.style.margin="10px 0 0";explanation.style.color="#70433b";explanation.textContent="Best-supported option: "+activeChoices.find(c=>c.correct).text;fb.appendChild(explanation)}
 evidenceLog.push({unit:s.unit,summary:correct?"Supported conclusion":"Reviewed correction"});updateLog();
 $("scoreValue").textContent=String(score).padStart(3,"0");logEvent("answer",{stage_number:current+1,is_correct:correct,score,attempts});$("hintBtn").classList.add("hidden");$("nextBtn").classList.remove("hidden");
}
function updateLog(){
 const log=$("evidenceLog");log.innerHTML="";
 evidenceLog.forEach(item=>{const d=document.createElement("div");d.className="log-item";const b=document.createElement("b");b.style.display="block";b.style.color="#b52835";b.style.fontSize="9px";b.style.marginBottom="3px";b.textContent=item.unit;const span=document.createElement("span");span.textContent=item.summary;d.append(b,span);log.appendChild(d)});
}
function showDebrief(){
 const evidenceRoom=$("evidenceRoom");if(evidenceRoom)evidenceRoom.classList.add("hidden");
 logEvent("complete",{stage_number:6,score,attempts});
 $("stageTitle").textContent="Case debrief";$("unitTag").textContent="INVESTIGATION COMPLETE";$("clueTag").textContent="FINAL REPORT";
 $("questionTitle").textContent="A strong investigation separates evidence from certainty.";
 $("questionText").textContent="You have completed six linked BTY323 challenges. Your score reflects supported answers, not clinical competence.";
 $("evidenceCard").innerHTML="";const strong=document.createElement("strong");strong.textContent="FINAL REPORT / MQ-001";const p=document.createElement("p");p.textContent="The simulated case does not provide enough validated evidence to name a definitive source or real pathogen. The correct scientific outcome is to identify plausible hypotheses, state what remains unknown, and recommend appropriate confirmatory investigation and infection-control review."; $("evidenceCard").append(strong,p);
 $("choices").innerHTML="";const report=document.createElement("div");report.className="evidence-card";const h=document.createElement("strong");h.textContent="YOUR PERFORMANCE";const body=document.createElement("p");body.textContent="Score: "+score+" / 60 points · Stages completed: 6 · Choices attempted: "+attempts+". "+(score>=50?"Excellent evidence discipline: keep questioning what the data can and cannot establish.":score>=35?"Good foundation. Review the explanations and revisit distinctions between similar concepts.":"Use the debrief to strengthen the core concepts, then replay and compare your reasoning.");report.append(h,body);$("choices").append(report);
 const notes=document.createElement("div");notes.className="feedback";const t=document.createElement("strong");t.textContent="SCIENTIFIC TAKEAWAYS";const ul=document.createElement("ul");ul.style.paddingLeft="18px";ul.style.margin="8px 0";ul.style.lineHeight="1.9";["A clue is not the same as a confirmed identification.","Fermentation and anaerobic respiration are not interchangeable.","Transformation, transduction and conjugation are distinct mechanisms.","Similar environmental profiles do not prove transmission direction.","Sterilization and disinfection have different goals.","Real diagnosis and outbreak control require validated methods and qualified professionals."].forEach(x=>{const li=document.createElement("li");li.textContent=x;ul.appendChild(li)});notes.replaceChildren(t,ul);$("choices").append(notes);
 $("hintBtn").classList.add("hidden");$("nextBtn").classList.add("hidden");const restart=document.createElement("button");restart.className="btn btn-primary";restart.textContent="Restart investigation ↻";restart.addEventListener("click",()=>{logEvent("restart",{stage_number:6,score,attempts});current=0;score=0;attempts=0;evidenceLog.length=0;updateLog();if(window.resetEvidenceRoom)window.resetEvidenceRoom();$("scoreValue").textContent="000";renderStage();$("game").scrollIntoView({behavior:"auto",block:"start"})});$("stage-controls");const controls=document.querySelector(".stage-controls");controls.replaceChildren(restart);
 $("progressText").textContent="CASE CLOSED";$("progressFill").style.width="100%";
}
const participantStorageKey="microbequestParticipantId";
function getParticipantId(){try{const id=Number(localStorage.getItem(participantStorageKey));return Number.isSafeInteger(id)&&id>0?id:null}catch(e){return null}}
async function logEvent(eventType,extra={}){
 const participantId=getParticipantId();if(!participantId)return;
 const payload={participant_id:participantId,event_type:eventType,stage_number:extra.stage_number===undefined?Math.min(current+1,6):extra.stage_number,score:extra.score===undefined?score:extra.score,attempts:extra.attempts===undefined?attempts:extra.attempts,timestamp:new Date().toISOString()};
 if(typeof extra.is_correct==="boolean")payload.is_correct=extra.is_correct;
 try{const key="microbequestLearningEvents";const events=JSON.parse(localStorage.getItem(key)||"[]");events.push(payload);localStorage.setItem(key,JSON.stringify(events.slice(-500)))}catch(e){}
}
function startInvestigation(){
 $("registrationModal").classList.add("hidden");
 $("game").classList.remove("hidden");renderStage();logEvent("start",{stage_number:1,score:0,attempts:0});
 $("game").scrollIntoView({behavior:"auto",block:"start"});
 window.dispatchEvent(new CustomEvent("mq:investigation-started"));
}
function openRegistration(){ $("registrationModal").classList.remove("hidden"); $("regName").focus(); }
$("registerNavBtn").addEventListener("click",openRegistration);
$("registerHeroBtn").addEventListener("click",openRegistration);
$("startBtn").addEventListener("click",()=>{
 if(getParticipantId()){startInvestigation();return}
 openRegistration();
});
$("closeRegistration").addEventListener("click",()=>$("registrationModal").classList.add("hidden"));
$("registrationModal").addEventListener("click",e=>{if(e.target===$("registrationModal"))$("registrationModal").classList.add("hidden")});
$("registrationForm").addEventListener("submit",e=>{
 e.preventDefault();
 const form=$("registrationForm"),button=$("registrationSubmit"),status=$("registrationStatus");
 button.disabled=true;status.textContent="Saving on this device…";
 const payload={full_name:$("regName").value.trim(),email:$("regEmail").value.trim(),programme:$("regProgramme").value,institution:$("regInstitution").value.trim(),study_year:$("regYear").value,consent:$("regConsent").checked};
 try{
  if(!$("regConsent").checked)throw new Error("Consent is required to continue.");
  const participantId=Date.now();
  localStorage.setItem(participantStorageKey,String(participantId));
  localStorage.setItem("microbequestRegistration",JSON.stringify({...payload,participant_id:participantId,registered_at:new Date().toISOString()}));
  form.reset();status.textContent="";
  startInvestigation();
 }catch(error){status.textContent="This browser could not save your registration. Enable local storage and try again."}
 finally{button.disabled=false}
});
$("hintBtn").addEventListener("click",()=>{if(hintUsed)return;hintUsed=true;$("hintText").textContent=stages[current].hint;$("hintText").classList.remove("hidden");$("hintBtn").textContent="Hint revealed · scoring reduced";logEvent("hint",{stage_number:current+1,score,attempts})});
$("nextBtn").addEventListener("click",()=>{if(!answered)return;if(current<stages.length-1){current++;renderStage();$("game").scrollIntoView({behavior:"smooth",block:"start"})}else{showDebrief();$("game").scrollIntoView({behavior:"smooth",block:"start"})}});

// Scroll-led section reveals inspired by presentation slide transitions.
(function initScrollStory(){
 const targets=[...document.querySelectorAll(".hero-copy,.case-visual,.unit-strip,.game,.method-note,.credits")];
 targets.forEach((el,i)=>{if(!el.classList.contains("hero-copy")&&!el.classList.contains("case-visual"))el.classList.add("js-reveal");el.style.setProperty("--reveal-delay",`${Math.min(i%3,2)*110}ms`)});
 if(!("IntersectionObserver" in window)){targets.forEach(el=>el.classList.add("is-visible"));return}
 const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-visible");observer.unobserve(entry.target)}})},{threshold:.12,rootMargin:"0px 0px -7% 0px"});
 targets.filter(el=>el.classList.contains("js-reveal")).forEach(el=>observer.observe(el));
 const heroCopy=document.querySelector(".hero-copy");if(heroCopy)heroCopy.classList.add("is-visible");
})();

// Animate individual scrapbook pieces, not only whole sections, as they enter the viewport.
(function initIndividualScrollPieces(){
 const pieces=[...document.querySelectorAll(".hero-copy h1,.hero-sub,.hero-body,.hero-actions,.disclaimer,.scan-label,.crosshair,.unit-chip,.game-top > div,.case-sidebar > div,.stage-panel > *, .method-note > div,.method-code,.credits-kicker,.credits h2,.credits-byline,.credits-details > div")];
 pieces.forEach((el,i)=>{
  el.classList.add("scroll-piece");
  el.style.setProperty("--piece-delay",`${(i%5)*85}ms`);
  el.style.setProperty("--piece-x",i%2===0?"-16px":"16px");
  if(el.matches(".scan-label,.unit-chip,.credits-details > div"))el.style.setProperty("--piece-rotate",i%2===0?"-1.5deg":"1.5deg");
 });
 if(!("IntersectionObserver" in window)||window.matchMedia("(prefers-reduced-motion: reduce)").matches){pieces.forEach(el=>el.classList.add("piece-visible"));return;}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("piece-visible");observer.unobserve(entry.target);}}),{threshold:.08,rootMargin:"0px 0px -4% 0px"});
 pieces.forEach(el=>observer.observe(el));
})();