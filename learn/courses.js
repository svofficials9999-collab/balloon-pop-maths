(function(){'use strict';
// AksharaNova Courses hub. Add a course by adding a row; URL courses open in the same tab so Back returns here.
const TE=()=>{try{return S.lang==='te'}catch(e){return true}};
const E=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const C=window.COURSES=window.COURSES||[
{id:'ma',ic:'🥋',te:'మార్షల్ ఆర్ట్స్',en:'Martial Arts',d:['నాన్-కాంటాక్ట్ భంగిమలు, శ్వాస, సమతుల్యత','Non-contact stances, breathing and balance'],act:'martial'},
{id:'md',ic:'🧘',te:'ధ్యానం పూర్తి కోర్సు',en:'Meditation full course',d:['20 మాడ్యూళ్ళు, తెలుగు + English','20 modules, Telugu + English'],act:'meditation'},
{id:'iq',ic:'🧠',te:'మైండ్ IQ',en:'MIND IQ',d:['మనస్తత్వ శాస్త్రం, తర్కం, జ్ఞాపకశక్తి','Psychology, logic and memory'],url:'./mindiq/'},
{id:'cs',ic:'🛡️',te:'సైబర్ సేఫ్టీ',en:'Cyber Safety',d:['ఆన్‌లైన్ భద్రత, విద్యార్థులు మరియు కుటుంబాలకు','Online safety for students and families'],url:'./cybersafe/'},
{id:'mm',ic:'💰',te:'మనీ మాస్టరీ',en:'Money Mastery',d:['డబ్బు, పొదుపు, బడ్జెట్, కాలిక్యులేటర్లు, ఛాలెంజ్‌లు','Money, saving, budgeting, calculators and challenges'],url:'./moneymastery/'},
{id:'tm',ic:'⏱️',te:'టైమ్ మేనేజ్‌మెంట్',en:'Time Management',d:['సమయం ప్రణాళిక, అలవాట్లు, ఏకాగ్రత','Plan your time, build habits and focus'],url:'./timemgmt/'},
{id:'sp',ic:'⚡',te:'స్పీడ్ రీడింగ్',en:'Speed Reading',d:['వేగంగా చదవడం, ప్రశ్నలతో','Read faster with questions'],act:'speed'},
{id:'pz',ic:'🧩',te:'పజిల్స్',en:'Puzzles',d:['బుద్ధికి పదునుపెట్టే ఆటలు','Fun puzzles'],act:'puzzles'},
{id:'pg',ic:'👪',te:'తల్లిదండ్రులు & విద్యార్థుల గైడ్',en:'Parents & Students Guide',d:['టైమ్‌టేబుల్స్, చిట్కాలు','Timetables and tips'],act:'parents'}];
let ov=null;
const css=`#cr{position:fixed;inset:0;z-index:9991;background:radial-gradient(circle at 50% 0,#1b2a5e,#0b1230 60%);color:#f6f8ff;overflow:auto;font-family:inherit}#cr .w{max-width:560px;margin:0 auto;padding:12px 12px 80px}#cr .b{background:#2a3566;color:#fff;border:0;border-radius:12px;padding:11px 14px;font-size:15px;font-weight:700;min-height:44px}#cr .les{display:flex;align-items:center;gap:12px;width:100%;text-align:left;background:#202b50;border:1px solid #7ab9ff66;border-radius:16px;padding:12px;margin:8px 0;color:#f6f8ff;min-height:56px}#cr .les .ic{font-size:30px}#cr .les.soon{opacity:.6}#cr .p1{font-size:16px;font-weight:700}#cr .p2{font-size:13px;opacity:.8}#cr .tag{font-size:11px;background:#ffb84d33;border:1px solid #ffb84d88;border-radius:8px;padding:2px 6px}`;
function go(c){if(c.url){location.href=c.url;return}
 if(['martial','meditation','puzzles'].indexOf(c.act)>=0&&ov){hid=true;ov.style.display='none';const f2={martial:()=>window.openMartial&&openMartial(),meditation:()=>window.openMeditation&&openMeditation(),puzzles:()=>window.openPuzzles&&openPuzzles()}[c.act];setTimeout(()=>f2&&f2(),60);return}
 close();const f={martial:()=>window.openMartial&&openMartial(),meditation:()=>window.openMeditation&&openMeditation(),puzzles:()=>window.openPuzzles&&openPuzzles(),speed:()=>{const b=document.querySelector('#speed-btn');b&&b.click()},parents:()=>{const b=document.querySelector('#par-btn');b&&b.click()}}[c.act];setTimeout(()=>f&&f(),60)}
function render(){let h=`<div style="display:flex;justify-content:space-between"><button class="b" data-a="close">← ${TE()?'వెనుకకు':'Back'}</button><button class="b" data-a="close">✕</button></div><h2>📚 ${TE()?'కోర్సులు · Courses':'Courses · కోర్సులు'}</h2>`;
 C.forEach((c,i)=>{const soon=c.soon&&!c.url;h+=`<button class="les ${soon?'soon':''}" data-a="go" data-v="${i}" ${soon?'disabled':''}><span class="ic">${c.ic}</span><span style="flex:1"><div class="p1">${E(TE()?c.te:c.en)}</div><div class="p2">${E(TE()?c.en:c.te)}</div><div class="p2">${E(TE()?c.d[0]:c.d[1])}</div></span>${soon?`<span class="tag">${TE()?'త్వరలో':'Soon'}</span>`:'<span>▶</span>'}</button>`});
 ov.innerHTML='<div class="w">'+h+'</div>'}
function click(e){const t=e.target.closest('[data-a]');if(!t)return;try{SFX.tap()}catch(x){}if(t.dataset.a==='close')close();else if(t.dataset.a==='go')go(C[+t.dataset.v])}
let hid=false;function onPop(){if(!ov)return;if(location.hash==='#courses'){if(hid){hid=false;ov.style.display='';render()}}else if(!/^#(martial|meditation|puzzles)/.test(location.hash))close(true)}
function close(fp){hid=false;if(ov){ov.remove();ov=null}window.removeEventListener('popstate',onPop);if(!fp){try{if(location.hash==='#courses')history.back()}catch(e){}}}
function open(){if(ov)return;if(!document.getElementById('crcss')){const s=document.createElement('style');s.id='crcss';s.textContent=css;document.head.appendChild(s)}ov=document.createElement('div');ov.id='cr';document.body.appendChild(ov);ov.addEventListener('click',click);window.addEventListener('popstate',onPop);try{history.pushState({cr:1},'','#courses')}catch(e){}render()}
window.CoursesApp={open,list:C};
})();
