/* AksharaNova Study Coach: a local rule engine. Uses only this phone's practice data. Nothing is sent anywhere. */
(function(){
const ST={MASTERED:['🟢 బాగా వచ్చు','🟢 Mastered'],NEEDS_PRACTICE:['🟡 ఇంకొంచెం ప్రాక్టీస్','🟡 Needs practice'],WEAK:['🟠 బలపరచాలి','🟠 Needs work'],CRITICAL:['🔴 ముందు ఇది చూద్దాం',"🔴 Let's fix this first"],NEW:['⚪ ఇంకా తెలియదు','⚪ Not enough data yet']};
const ENC=[['తప్పులు నేర్చుకునే మెట్లు 🌱','Mistakes are steps to learning 🌱'],['ఈరోజు ప్రయత్నించారు - అదే గొప్ప!','You tried today - that is great!'],['కొంచెం కొంచెంగా మెరుగవుతున్నారు 🌟','You are getting better bit by bit 🌟']];
const CORE=['maths','science','social','english','telugu'];
const DAY=864e5;
function band(c){return c<=2?10:c<=5?15:c<=8?20:25}
function view(X){
 const {word,esc,W,LS_,topics,load,nav,SFX,toast,shell,topBar,wireTop,c}=X;
 const L=(a,b)=>word(a,b);
 const st=AKNP.stats(),mins=+(localStorage.getItem('akn.coachmin')||30);
 const nm=r=>{try{const t=topics(r.s,r.c).find(x=>x.id===r.id);return t?W(t):r.id}catch(e){return r.id}};
 const sj=s=>LS_[s]?(LS_[s].i+' '+W(LS_[s])):s;
 const now=Date.now();
 // priority: weakness x recency, topics with enough data only
 const pr=r=>{const wk=r.m==null?0.5:(100-r.m)/100;const rc=1+0.5*Math.min(30,Math.max(0,(now-(r.ts||now))/DAY))/30;return 100*0.7*wk*rc};
 const rowsC=st.rows.filter(r=>!/^dg_/.test(r.id));const weak=rowsC.filter(r=>r.st==='WEAK'||r.st==='CRITICAL').sort((a,b)=>pr(b)-pr(a));
 const rev=st.rev.filter(r=>!/^dg_/.test(r.id)).sort((a,b)=>(a.ts||0)-(b.ts||0));
 const mist=st.mist;
 const enough=st.answered>=10&&(weak.length||rev.length||mist.length);
 // build today's plan
 const blocks=[];
 if(enough){
  let left=mins;const cap=band(c);
  const haveRev=rev.length>0,haveMist=mist.length>0;
  let revM=haveRev?Math.max(5,Math.round(mins*0.15/5)*5):0,misM=haveMist?Math.max(5,Math.round(mins*0.15/5)*5):0,miniM=mins>=30?5:0;
  if(mins<=15){revM=haveRev&&!weak.length?5:(haveRev?5:0);misM=0;miniM=0}
  let topicM=Math.max(5,mins-revM-misM-miniM);
  const tw=weak.length?weak:rev;
  let i=0;while(topicM>=5&&i<tw.length&&i<4){const r=tw[i++];const m=tw.length<2?Math.min(topicM,Math.max(cap,topicM)):Math.min(cap,topicM>=10&&i===1?Math.max(10,Math.round(topicM*0.6/5)*5):topicM);const mm=Math.min(m,topicM);
   if(mm>=10&&r.st!=='NEEDS_PRACTICE'&&mins>=30)blocks.push({t:'concept',m:Math.round(mm*0.35/5)*5||5,r});
   blocks.push({t:'practice',m:mm>=10&&mins>=30?mm-(Math.round(mm*0.35/5)*5||5):mm,r});topicM-=mm}
  if(revM&&rev.length){blocks.push({t:'revision',m:revM,r:rev[0]})}
  if(misM)blocks.push({t:'mistakes',m:misM});
  if(miniM)blocks.push({t:'mini',m:miniM,r:(weak[0]||rev[0])});
 }
 const BT={concept:['పాఠం చూడండి','Learn the concept'],practice:['ప్రాక్టీస్','Practice'],revision:['రివిజన్','Revision'],mistakes:['నా తప్పులు','My mistakes'],mini:['మినీ టెస్ట్','Mini test']};
 const IC={concept:'📖',practice:'🎯',revision:'🔁',mistakes:'🧩',mini:'📝'};
 const why=r=>{if(!r)return '';const t=r.m!=null?r.m+'%':'';return r.st==='WEAK'||r.st==='CRITICAL'?L(`${nm(r)}లో మీ స్కోరు ${t}. ఇక్కడ ప్రాక్టీస్ చేస్తే ఎక్కువ లాభం.`,`Your ${nm(r)} score is ${t}. Practice here gives the biggest gain.`):L(`${nm(r)} రివిజన్ సమయం వచ్చింది.`,`${nm(r)} is due for revision.`)};
 const blk=(b,i)=>`<button class="lr-row cc-b" data-i="${i}" style="--c:#7c4dff"><span>${IC[b.t]}</span><div><b>${b.m} ${L('ని','min')} · ${L(BT[b.t][0],BT[b.t][1])}</b><br><small>${b.r?esc(sj(b.r.s))+' · '+esc(nm(b.r)):''}</small></div></button>`;
 // profile
 const prof=CORE.map(s=>{const rs=rowsC.filter(r=>r.s===s&&r.st!=='NEW');if(!rs.length)return '';const g=a=>a.slice(0,3).map(r=>esc(nm(r))).join(', ')||'–';return `<p style="margin:6px 0"><b>${esc(sj(s))}</b><br><small>🟢 ${L('బలం','Strong')}: ${g(rs.filter(r=>r.st==='MASTERED'))}<br>🟡 ${L('మధ్యస్థం','Medium')}: ${g(rs.filter(r=>r.st==='NEEDS_PRACTICE'))}<br>🟠 ${L('ఇంకొంచెం ప్రాక్టీస్','Needs practice')}: ${g(rs.filter(r=>r.st==='WEAK'||r.st==='CRITICAL'))}</small></p>`}).join('');
 const dgs=[];CORE.forEach(s=>{(window.__DIAG&&window.__DIAG[s+':'+c]||[]).forEach(t=>dgs.push({s,t}))});
 const done=(AKNP.diagDone&&AKNP.diagDone())||{};
 const msg=ENC[new Date().getDate()%ENC.length];
 shell(topBar('🧭 '+L('స్టడీ కోచ్','Study Coach'))+`
 <p class="lr-sub">${L(msg[0],msg[1])}</p>
 <div class="lr-card"><h3 style="margin-top:0">📅 ${L('ఈరోజు ప్లాన్','Today\'s plan')} - ${mins} ${L('నిమిషాలు','minutes')}</h3>
 <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px">${[15,30,45,60].map(m=>`<button class="lr-chip cc-m${m===mins?' on':''}" data-m="${m}" style="width:auto;padding:0 12px">${m}</button>`).join('')}</div>
 ${enough?(blocks.map(blk).join('')+(weak[0]?`<p class="lr-note" style="text-align:left">💡 ${esc(why(weak[0]))}</p>`:rev[0]?`<p class="lr-note" style="text-align:left">💡 ${esc(why(rev[0]))}</p>`:'')):`<p class="lr-note" style="text-align:left">${L('ఇంకా తగినంత సమాచారం లేదు. ముందు నిర్ధారణ పరీక్ష లేదా కొన్ని ప్రాక్టీస్ ప్రశ్నలు చేయండి, అప్పుడు సరైన సలహా ఇస్తాను.',"I don't have enough practice data yet. Do the diagnostic or a few practice questions, then I can give real advice.")}</p>`}</div>
 <div class="lr-card"><h3 style="margin-top:0">🧪 ${L('నా లెర్నింగ్ ప్రొఫైల్ · నిర్ధారణ పరీక్ష','My Learning Profile · Diagnostic')} (${L('తరగతి','Class')} ${c})</h3>
 <p class="lr-note" style="text-align:left">${L('స్థాయి తెలుసుకోవడానికి మాత్రమే. "తెలియదు" అంటే తప్పు కాదు. మార్కుల భయం వద్దు.','Just to find your level. No marks pressure.')}</p>
 ${dgs.length?dgs.map((d,i)=>`<button class="lr-row cc-d" data-i="${i}" style="--c:${LS_[d.s]?LS_[d.s].c:'#38d9f8'}"><span>${d.t.i||'🧪'}</span><div><b>${esc(W(d.t))}</b><br><small>${esc(sj(d.s))}${done[d.t.id]!=null?' · ✅ '+done[d.t.id]+'%':''}</small></div></button>`).join(''):`<p class="lr-note">${L('ఈ తరగతికి పరీక్ష త్వరలో','Diagnostic for this class coming soon')}</p>`}
 ${prof?`<div style="margin-top:8px">${prof}</div>`:''}</div>
 ${weak.length?`<div class="lr-card"><h3 style="margin-top:0">🌱 ${L('ఎందుకు బలహీనం?','Why weak?')}</h3>${weak.slice(0,5).map(r=>`<p style="margin:6px 0"><b>${esc(sj(r.s))} · ${esc(nm(r))}</b><br><small>${L(ST[r.st][0],ST[r.st][1])} · ${r.m}% · ${r.n} ${L('ప్రశ్నలు','answers')}</small></p>`).join('')}</div>`:''}
 <div class="lr-card"><h3 style="margin-top:0">📈 ${L('నా వివరాలు','My numbers')}</h3><p style="margin:4px 0">🔥 ${L('రోజుల వరుస','Day streak')}: <b>${st.streak}</b> · 🎯 ${L('కచ్చితత్వం','Accuracy')}: <b>${st.acc==null?'–':st.acc+'%'}</b> · 🧩 ${L('తప్పులు','Mistakes')}: <b>${mist.length}</b></p></div>
 <p class="lr-note">${L('స్టడీ కోచ్ ఈ ఫోన్‌లోని మీ ప్రాక్టీస్ ఆధారంగా మాత్రమే సలహా ఇస్తుంది. ఏదీ బయటకు వెళ్ళదు.','Study Coach advises only from the practice on this phone. Nothing leaves your device.')}</p>`);
 wireTop();
 document.querySelectorAll('.cc-m').forEach(b=>b.onclick=()=>{SFX.tap();localStorage.setItem('akn.coachmin',b.dataset.m);view(X)});
 document.querySelectorAll('.cc-d').forEach(b=>b.onclick=()=>{SFX.tap();const d=dgs[+b.dataset.i];X.startDiag(d.s,c,d.t)});
 document.querySelectorAll('.cc-b').forEach(b=>b.onclick=()=>{SFX.tap();const k=blocks[+b.dataset.i];if(k.t==='mistakes')return X.mist();const r=k.r;load(r.s).then(()=>{const i=topics(r.s,r.c).findIndex(x=>x.id===r.id);if(i<0){toast(L('అంశం దొరకలేదు','Topic not found'));return}if(k.t==='concept')nav({v:'topic',s:r.s,c:r.c,ti:i});else X.quiz(r.s,r.c,i)})});
}
window.AKNC={view};LD.reg('coach',1);
})();
