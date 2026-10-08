/* AksharaNova Exam Prep: model papers, practice, mock tests. All on device. Labels are never mixed: Model Paper / Practice / Mock Test / Generated paper. Nothing here is an official or previous-year paper. */
(function(){
const FILES=['exd1','exd2'];
const UPD=[]; // manual exam-updates list: {te,en,date,url}
const EXN={'SSC Telangana':['SSC తెలంగాణ - 10వ తరగతి','SSC Telangana - Class 10','🏫'],'CBSE':['CBSE - 10వ తరగతి','CBSE - Class 10','📘'],'Navodaya (JNVST) style':['నవోదయ (6వ తరగతి ప్రవేశం) ప్రాక్టీస్','Navodaya (Class 6 entry) practice','🧭']};
const LBL={'Model Paper':['📝 మోడల్ పేపర్','📝 Model Paper'],'Practice':['🎯 ప్రాక్టీస్','🎯 Practice']};
let RUN=null,TM=0;
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
const sk=()=>'akn.exam.'+(window.AKNP?AKNP.active():'x');
const getS=()=>{try{return JSON.parse(localStorage.getItem(sk()))||[]}catch(e){return[]}};
const putS=r=>{try{const a=getS();a.push(r);localStorage.setItem(sk(),JSON.stringify(a.slice(-40)))}catch(e){}};
function view(X,v){
 clearInterval(TM);
 const {word,esc,W,shell,topBar,wireTop,nav,SFX,toast}=X;const L=(a,b)=>word(a,b);
 const P=window.EXD||[];
 if(v.run&&RUN)return runView(X,v);
 if(v.e){const ps=P.filter(p=>p.ex===v.e);const n=EXN[v.e]||[v.e,v.e,'🎓'];
  const lk=[...new Set(ps.flatMap(p=>p.lk||[]))];
  shell(topBar(n[2]+' '+L(n[0],n[1]))+`${ps.map((p,pi)=>{const lb=LBL[p.lb]||[p.lb,p.lb];const nq=p.t.reduce((a,t)=>a+t.qs.length,0);return `<div class="lr-card"><h3 style="margin-top:0">${esc(L(p.te,p.en))}</h3>
   <p style="margin:4px 0"><span class="lr-chip on" style="display:inline-block;width:auto;padding:2px 10px;min-height:0;height:auto">${L(lb[0],lb[1])}</span> <small>${nq} ${L('ప్రశ్నలు','questions')}</small></p>
   <p class="lr-note" style="text-align:left">${L('SV అక్షరనోవా రాసిన సొంత ప్రశ్నలు. అధికారిక లేదా గత సంవత్సరం పేపర్ కాదు.','Original questions written for SV AksharaNova. Not an official or previous-year paper.')}</p>
   ${p.t.map((t,ti)=>`<button class="lr-row ex-t" data-p="${pi}" data-t="${ti}" style="--c:#7c4dff"><span>🎯</span><div><b>${esc(L(t.te,t.en))}</b><br><small>${L('ప్రాక్టీస్','Practice')} · ${t.qs.length} ${L('ప్రశ్నలు','Q')}</small></div></button>`).join('')}
   <button class="lr-go ex-g" data-p="${pi}" style="margin-top:6px">📄 ${L('మోడల్ పేపర్ తయారు చేయండి ('+Math.min(20,nq)+' ప్రశ్నలు)','Generate a model paper ('+Math.min(20,nq)+' questions)')}</button>
   <button class="lr-go alt ex-m" data-p="${pi}">⏱ ${L('మాక్ టెస్ట్ (సమయంతో)','Mock Test (timed)')}</button></div>`}).join('')}
   ${lk.length?`<div class="lr-card"><h3 style="margin-top:0">🔗 ${L('అధికారిక సైట్లు (లింక్ మాత్రమే)','Official sites (link only)')}</h3>${lk.map(u=>`<p style="margin:6px 0;word-break:break-all"><a href="${esc(u)}" target="_blank" rel="noopener noreferrer" style="color:#7df9ff">${esc(u)}</a></p>`).join('')}<p class="lr-note" style="text-align:left">${L('అసలు పరీక్ష తేదీలు, బ్లూప్రింట్ ఈ సైట్లలో చూడండి. యాప్‌లోని మార్కుల విభజన అధికారికం కాదు.','Check exact dates and the marks blueprint on these sites. Marks patterns in this app are not official.')}</p></div>`:`<p class="lr-note">${L('అధికారిక పేపర్ నమూనా ఇంకా ధృవీకరించలేదు. అధికారిక సైట్‌లో చూడండి.','The official paper pattern is not verified in this app. Please check the official site.')}</p>`}`);
  wireTop();
  const run=(p,qs,o)=>{const items=qs.map(q=>{const idx=shuf([0,1,2,3]);return {q:L(q[0],q[1]),o:idx.map(i=>{const s=String(q[2][i]);const k=s.indexOf('§');return k>=0?{te:s.slice(0,k),en:s.slice(k+1)}:{te:s,en:s}}),ai:idx.indexOf(0),e:L(q[3],q[4])}});RUN=Object.assign({e:v.e,p,items,i:0,ok:0,ans:[],start:Date.now()},o);nav({v:'exam',e:v.e,run:1})};
  document.querySelectorAll('.ex-t').forEach(b=>b.onclick=()=>{SFX.tap();const p=ps[+b.dataset.p],t=p.t[+b.dataset.t];run(p,shuf(t.qs).slice(0,10),{kind:'prac',lb:LBL.Practice,title:L(t.te,t.en),fb:1,sec:0})});
  document.querySelectorAll('.ex-g').forEach(b=>b.onclick=()=>{SFX.tap();const p=ps[+b.dataset.p];const all=shuf(p.t.flatMap(t=>t.qs)).slice(0,20);run(p,all,{kind:'paper',lb:LBL['Model Paper'],title:'SV AKSHARANOVA MODEL PAPER',sub:L(p.te,p.en),fb:0,sec:0})});
  document.querySelectorAll('.ex-m').forEach(b=>b.onclick=()=>{SFX.tap();const p=ps[+b.dataset.p];const all=shuf(p.t.flatMap(t=>t.qs)).slice(0,20);run(p,all,{kind:'mock',lb:['⏱ మాక్ టెస్ట్','⏱ Mock Test'],title:L('మాక్ టెస్ట్','Mock Test'),sub:L(p.te,p.en),fb:0,sec:all.length*60})});
  return}
 // hub
 const exs=[...new Set(P.map(p=>p.ex))];const sc=getS().slice(-5).reverse();
 shell(topBar('🎓 '+L('పరీక్ష సిద్ధత · మోడల్ పేపర్లు','Exam Prep · Model Papers'))+`
 <p class="lr-sub">${L('ప్రతి పేపర్‌కు స్పష్టమైన లేబుల్ ఉంటుంది: మోడల్ పేపర్, ప్రాక్టీస్, మాక్ టెస్ట్. అధికారిక పేపర్లను ఇక్కడ ఉంచం, లింక్ మాత్రమే.','Every paper has a clear label: Model Paper, Practice, Mock Test. Official papers are not hosted here, only linked.')}</p>
 ${exs.map(e=>{const n=EXN[e]||[e,e,'🎓'];const k=P.filter(p=>p.ex===e);return `<button class="lr-go ex-e" data-e="${esc(e)}" style="margin:6px 0;min-height:56px">${n[2]} ${L(n[0],n[1])}<br><small>${k.length} ${L('సబ్జెక్టులు','subjects')}</small></button>`}).join('')}
 <div class="lr-card"><h3 style="margin-top:0">📣 ${L('పరీక్ష అప్‌డేట్స్','Exam updates')}</h3>${UPD.length?UPD.map(u=>`<p style="margin:6px 0"><b>${esc(L(u.te,u.en))}</b> <small>${esc(u.date||'')}</small>${u.url?` <a href="${esc(u.url)}" target="_blank" rel="noopener noreferrer" style="color:#7df9ff">🔗</a>`:''}</p>`).join(''):`<p class="lr-note" style="text-align:left">${L('తేదీలు ఇక్కడ చేర్చబడతాయి. అప్పటివరకు అధికారిక సైట్లు చూడండి.','Dates will be added here. Until then, check the official sites.')}</p>`}</div>
 ${sc.length?`<div class="lr-card"><h3 style="margin-top:0">📊 ${L('నా స్కోర్లు','My scores')}</h3>${sc.map(r=>`<p style="margin:4px 0"><b>${r.pct}%</b> · ${esc(r.t)} <small>${r.d}</small></p>`).join('')}</div>`:''}`);
 wireTop();
 document.querySelectorAll('.ex-e').forEach(b=>b.onclick=()=>{SFX.tap();nav({v:'exam',e:b.dataset.e})});
}
function runView(X,v){
 const {word,esc,W,shell,topBar,wireTop,nav,SFX,toast}=X;const L=(a,b)=>word(a,b);const R=RUN;
 if(R.i>=R.items.length)return done(X,v,false);
 const it=R.items[R.i];const lb=R.lb;
 shell(topBar(esc(R.title))+`<p class="lr-sub"><b>${L(lb[0],lb[1])}</b>${R.sub?' · '+esc(R.sub):''}<br>${R.i+1}/${R.items.length}${R.sec?` · ⏱ <span id="ex-t"></span>`:''}</p>
 <div class="lr-card"><div class="lr-q"><span style="white-space:pre-line">${esc(it.q)}</span></div></div>
 <div class="lr-opts">${it.o.map((o,j)=>`<button class="lr-o ex-o" data-j="${j}"><b>${'ABCD'[j]}</b><span>${esc(W(o))}</span></button>`).join('')}</div><div id="fb"></div>`);
 wireTop();
 if(R.sec){const tick=()=>{const left=Math.max(0,R.sec-Math.round((Date.now()-R.start)/1000));const el=document.getElementById('ex-t');if(el)el.textContent=Math.floor(left/60)+':'+String(left%60).padStart(2,'0');if(!left){clearInterval(TM);done(X,v,true)}};tick();TM=setInterval(tick,1000)}
 let locked=false;
 const next=()=>{R.i++;runView(X,v)};
 document.querySelectorAll('.ex-o').forEach(b=>b.onclick=()=>{if(locked)return;locked=true;SFX.tap();const j=+b.dataset.j;const ok=j===it.ai;R.ans.push(j);if(ok)R.ok++;
  if(R.fb){document.querySelectorAll('.ex-o').forEach((x,k)=>{x.disabled=true;if(k===it.ai)x.classList.add('right');else if(k===j)x.classList.add('wrongp');else x.classList.add('dim')});
   document.getElementById('fb').innerHTML=`<div class="lr-fb ${ok?'ok':'bad'}"><div class="hd">${ok?L('శభాష్! ⭐','Well done! ⭐'):L('పర్వాలేదు, నేర్చుకుందాం 🌱','Not yet, let us learn 🌱')}</div>${ok?'':`<p>${L('సరైన సమాధానం','Correct answer')}: <b>${esc(W(it.o[it.ai]))}</b></p>`}<p class="why">(${esc(it.e)})</p><button class="lr-next" id="nx">${L('తరువాత ▶','Next ▶')}</button></div>`;document.getElementById('nx').onclick=()=>{SFX.tap();next()}}
  else{b.classList.add('on');setTimeout(next,250)}});
}
function done(X,v,timeUp){
 clearInterval(TM);const {word,esc,W,shell,topBar,wireTop,nav,SFX}=X;const L=(a,b)=>word(a,b);const R=RUN;
 const n=R.items.length,pct=Math.round(R.ok*100/n);
 if(!R.saved){R.saved=1;const d=new Date();putS({pct,t:(R.sub||R.title),k:R.kind,d:d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')})}
 const used=Math.round((Date.now()-R.start)/60000);
 shell(topBar(L('ఫలితం','Result'))+`<div class="lr-card" style="text-align:center"><div style="font-size:44px;font-weight:900">${pct}%</div><p style="margin:4px 0">${R.ok}/${n} ${L('సరైనవి','correct')}${R.sec?` · ${used} ${L('నిమిషాలు','min')}`:''}</p>${timeUp?`<p class="lr-note">${L('సమయం ముగిసింది','Time is up')}</p>`:''}<p class="lr-note">${L(R.lb[0],R.lb[1])} · ${esc(R.title)}</p></div>
 ${R.items.map((it,i)=>{const a=R.ans[i];const ok=a===it.ai;return `<div class="lr-card"><p style="margin:0"><b>${i+1}. ${esc(it.q)}</b></p><p style="margin:4px 0">${a==null?'⚪ '+L('సమాధానం లేదు','Not answered'):(ok?'✅ ':'❌ ')+esc(W(it.o[a]))}</p>${ok?'':`<p style="margin:4px 0">✔ <b>${esc(W(it.o[it.ai]))}</b></p>`}<p class="why" style="margin:4px 0"><small>${esc(it.e)}</small></p></div>`}).join('')}
 <button class="lr-go" id="ex-back">${L('పరీక్ష సిద్ధత మెనూ','Back to Exam Prep')}</button>`);
 wireTop();document.getElementById('ex-back').onclick=()=>{SFX.tap();RUN=null;nav({v:'exam'})};
}
window.AKNX={view,files:FILES};LD.reg('exam',1);
})();
