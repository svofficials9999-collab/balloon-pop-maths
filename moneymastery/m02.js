ఆటోమేటిక్ ట్రాన్స్‌ఫర్ పెట్టండి.","Set an automatic transfer."],["ఒక ఖర్చు తగ్గించండి.","Cut one expense."],["కొనే ముందు 24 గంటల నియమం పాటించండి.","Use the 24-hour rule."],["ఎమర్జెన్సీ ఫండ్ లక్ష్యం.","Emergency fund target."],["వారం సమీక్ష.","Week 2 review."],
// week3 debt & credit
["అప్పుల జాబితా.","Debts list."],["వడ్డీ రేట్లు రాయండి.","Note interest rates."],["క్రెడిట్ స్కోర్ చూడండి.","Check credit score."],["అవలాంచ్ లేదా స్నోబాల్ ఎంచుకోండి.","Pick avalanche or snowball."],["అదనపు చెల్లింపు చేయండి.","Make an extra payment."],["కార్డ్ గడువు రిమైండర్.","Card due-date reminder."],["వారం సమీక్ష.","Week 3 review."],
// week4 protect
["ఆరోగ్య బీమా సమీక్ష.","Review health cover."],["టర్మ్ బీమా అవసరమా చూడండి.","Check if term cover is needed."],["నామినీలు తనిఖీ చేయండి.","Check nominees."],["UPI భద్రత సెట్టింగ్స్.","UPI security settings."],["స్కామ్ హెచ్చరికలు చదవండి.","Read scam alerts."],["ముఖ్య పత్రాలు ఒకచోట చేర్చండి.","Gather key documents."],["వారం సమీక్ష.","Week 4 review."],
// week5 grow
["ద్రవ్యోల్బణం గురించి ఆలోచించండి.","Think about inflation."],["చక్రవడ్డీ కాలిక్యులేటర్.","Compounding calculator."],["SIP కాలిక్యులేటర్.","SIP calculator."],["SEBI పెట్టుబడిదారుల సైట్ చదవండి.","Read SEBI investor site."],["రిస్క్ సామర్థ్యం రాయండి.","Write your risk comfort."],["పెట్టుబడి లక్ష్యాలు రాయండి.","Write investing goals."],["వారం సమీక్ష.","Week 5 review."],
// week6 future
["పన్ను పత్రాలు సిద్ధం చేయండి.","Organise tax papers."],["రిటైర్మెంట్ అంచనా.","Retirement estimate."],["పిల్లలకు డబ్బు పాఠం.","Money lesson for kids."],["వ్యాపార/ఇంటి డబ్బు వేరు చేయండి.","Separate business and home money."],["1 సంవత్సర ప్లాన్ రాయండి.","Write a 1-year plan."],["5 సంవత్సర ప్లాన్ రాయండి.","Write a 5-year plan."],["42 రోజుల సమీక్ష మరియు కొనసాగింపు.","42-day review and next steps."]
];
const SOURCES=[
["G20/OECD INFE Core Competencies Framework on Financial Literacy for Adults (2016)","https://g20.utoronto.ca/2016/Core-Competencies-Framework-Adults.pdf"],
["India: National Strategy for Financial Education 2020-25 (NCFE)","https://ncfe.org.in/nsfe-2020-25/"],
["Jump$tart / CEE National Standards for Personal Financial Education (USA)","https://www.jumpstart.org/education/national-standards/"],
["SEBI Investor Awareness and Financial Education booklet","https://investor.sebi.gov.in/"],
["RBI Complaints and Ombudsman","https://rbi.org.in/Scripts/Complaints.aspx"],
["DICGC deposit insurance FAQs (Rs 5 lakh)","https://www.dicgc.org.in/FAQs"],
["Income Tax India: 80C limit Rs 1,50,000","https://www.incometaxindia.gov.in/w/tax-benefits-due-to-life-insurance-policy-health-insurance-policy-and-expenditure-on-medical-treatment"],
["Dept of Economic Affairs: small savings interest rates","https://dea.gov.in/budget-division/475"]
];
const HOME_URL="https://svofficials9999-collab.github.io/balloon-pop-maths/";
const LS={get(k,d){try{const v=localStorage.getItem('mm_'+k);return v?JSON.parse(v):d}catch(e){return d}},set(k,v){try{localStorage.setItem('mm_'+k,JSON.stringify(v))}catch(e){}}};
let st={lang:LS.get('lang','both'),xp:LS.get('xp',0),steps:LS.get('steps',{}),quiz:LS.get('quiz',{}),ch:LS.get('ch',{c21:[],c30:[],c42:[]}),tools:LS.get('tools',{})};
function save(){['lang','xp','steps','quiz','ch','tools'].forEach(k=>LS.set(k,st[k]))}
const CH={c21:{n:[ "21 రోజుల అలవాటు ఛాలెంజ్","21-Day Habit Challenge"],d:DAYS,ic:"🔥"},c30:{n:["30 రోజుల మనీ రీసెట్","30-Day Money Reset"],d:DAYS30,ic:"📅"},c42:{n:["42 రోజుల వెల్త్ జర్నీ","42-Day Wealth Journey"],d:DAYS42,ic:"🚀"}};
const $=s=>document.querySelector(s),app=$('#app');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function bi(p,cls){const te=`<span class="te">${esc(p[0])}</span>`,en=`<span class="en">${esc(p[1])}</span>`;
 if(st.lang==='te')return `<span class="${cls||''}">${te}</span>`;if(st.lang==='en')return `<span class="${cls||''}">${en}</span>`;return `<span class="${cls||''}">${te}<br>${en}</span>`}
const fmt=n=>'₹'+Math.round(n).toLocaleString('en-IN');
let view='home',param=null,voices=[];
function loadV(){try{voices=speechSynthesis.getVoices()}catch(e){voices=[]}}
try{speechSynthesis.onvoiceschanged=loadV;loadV()}catch(e){}
function pick(lang){const pre=lang.slice(0,2);let c=voices.filter(v=>v.lang&&v.lang.replace('_','-').toLowerCase().startsWith(lang.toLowerCase()));if(!c.length)c=voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith(pre));
 if(!c.length&&pre==='te')c=voices.filter(v=>v.lang&&v.lang.toLowerCase().startsWith('hi'));
 const f=c.find(v=>/female|heera|veena|lekha|swara|neerja|priya|kalpana|shruti|google/i.test(v.name));return f||c[0]||null}
function say(pairs){try{speechSynthesis.cancel();loadV();const q=[];pairs.forEach(p=>{if(st.lang!=='en')q.push([p[0],'te-IN']);if(st.lang!=='te')q.push([p[1],'en-IN'])});
 q.forEach(([t,l])=>{const u=new SpeechSynthesisUtterance(t);u.lang=l;const v=pick(l);if(v)u.voice=v;u.rate=.9;u.pitch=1.1;speechSynthesis.speak(u)})}catch(e){}}
function stop(){try{speechSynthesis.cancel()}catch(e){}}
function addXP(n){st.xp+=n;save()}
const lvl=()=>Math.floor(st.xp/100)+1;
function badges(){const m=Object.keys(st.quiz).filter(k=>st.quiz[k]>=1).length,b=[];
 const days=Object.values(st.ch).reduce((a,x)=>a+x.length,0);
 b.push(["🌟","మొదటి అడుగు","First Step",st.xp>0],["📘","5 మాడ్యూల్స్","5 Modules",m>=5],["📚","15 మాడ్యూల్స్","15 Modules",m>=15],["🎓","అన్ని మాడ్యూల్స్","All Modules",m>=MODS.length],
 ["🧮","కాలిక్యులేటర్ వాడారు","Used a Calculator",Object.keys(st.tools).length>0],["🔥","7 రోజులు పూర్తి","7 Challenge Days",days>=7],["🏅","21 రోజులు పూర్తి","21-Day Complete",st.ch.c21.length>=21],["📅","30 రోజులు పూర్తి","30-Day Complete",st.ch.c30.length>=30],["🚀","42 రోజులు పూర్తి","42-Day Complete",st.ch.c42.length>=42]);return b}
function nav(v,p){stop();view=v;param=p;render();window.scrollTo(0,0)}
function back(){if(view==='quiz')nav('mod',param);else if(view==='home')location.href=HOME_URL;else if(view==='chd')nav('chs');else nav('home')}
function head(title){return `<div class="bar"><button class="nb" onclick="back()" aria-label="Back">⬅️ <small>Back / వెనుకకు</small></button><button class="nb" onclick="location.href='${HOME_URL}'" aria-label="Home">🏠 <small>Home / హోమ్</small></button></div>${title?`<h2>${title}</h2>`:''}`}
const DISC='<div class="disc">⚠️ '+esc('విద్య కోసం మాత్రమే. ఆర్థిక సలహా కాదు. నిర్ణయాలకు ముందు SEBI రిజిస్టర్డ్ సలహాదారును సంప్రదించండి. రాబడికి హామీ లేదు.')+'<br>Educational only, not financial advice. Consult a SEBI-registered advisor before decisions. Returns are never guaranteed.</div>';
function render(){
 if(view==='home')return home();if(view==='mod')return mod();if(view==='quiz')return quiz();if(view==='tools')return tools();if(view==='chs')return chs();if(view==='chd')return chd();if(view==='badges')return bdg();if(view==='src')return src()}
function langBar(){return `<div class="lang">${[['te','తెలుగు'],['en','English'],['both','Both']].map(l=>`<button class="${st.lang===l[0]?'on':''}" onclick="st.lang='${l[0]}';save();render()">${l[1]}</button>`).join('')}</div>`}
function home(){const done=Object.keys(st.quiz).filter(k=>st.quiz[k]>=1).length,pct=Math.round(done/MODS.length*100);
 app.innerHTML=`<div class="bar"><button class="nb" onclick="location.href='${HOME_URL}'">🏠 <small>Home / హోమ్</small></button></div>
 <h1>💎 Money Mastery<br><small>మనీ మాస్టరీ</small></h1><p class="sub">${bi(["డబ్బు నిర్వహణ మరియు సంపద నిర్మాణం: ఉచిత పూర్తి కోర్సు","Money management and wealth building: a full free course"])}</p>${langBar()}
 <div class="card stat"><div>⭐ XP <b>${st.xp}</b></div><div>Lv <b>${lvl()}</b></div><div>📘 <b>${done}/${MODS.length}</b></div></div><div class="pb"><i style="width:${pct}%"></i></div>
 <div class="grid">
 <button class="tile" onclick="nav('chs')">🔥${bi(["ఛాలెంజ్‌లు 21/30/42","Challenges 21/30/42"])}</button>
 <button class="tile" onclick="nav('tools')">🧮${bi(["కాలిక్యులేటర్లు","Calculators"])}</button>
 <button class="tile" onclick="nav('badges')">🏅${bi(["బ్యాడ్జ్‌లు","Badges"])}</button>
 <button class="tile" onclick="nav('src')">📚${bi(["మూలాలు","Sources"])}</button></div>
 <h3>${bi(["క్లాసులు / మాడ్యూల్స్","Classes / Modules"])}</h3>
 ${MODS.map((m,i)=>`<button class="row" onclick="nav('mod',${i})"><span class="ic">${m.i}</span><span class="tx"><small>${i+1}</small> ${bi(m.t)}</span><span class="ck">${st.quiz[i]>=1?'✅':'▶'}</span></button>`).join('')}${DISC}`}
function mod(){const m=MODS[param],rd=st.steps[param]||[];
 app.innerHTML=head(`${m.i} ${bi(m.t)}`)+langBar()+`<div class="act"><button class="lb" style="background:linear-gradient(135deg,#00e5ff,#7c4dff 55%,#ff4fd8);color:#fff;border:0" onclick="koreSay('mm${param+1}')">🎧 పరిచయం వినండి / Listen intro</button></div>`+m.s.map((s,j)=>`<div class="card"><div class="stp">${j+1}</div>${bi(s)}<div class="act"><button class="lb" onclick="say([MODS[${param}].s[${j}]]);mark(${j})">🔊 Listen / వినండి</button></div></div>`).join('')+
 `<div class="act"><button class="lb" onclick="say(MODS[${param}].s);">🔊 Listen all / అన్నీ వినండి</button><button class="lb" onclick="stop()">⏹ Stop</button></div>`+(m.tool?`<button class="go alt" onclick="nav('tools')">🧮 ${bi(["కాలిక్యులేటర్ తెరవండి","Open calculator"])}</button>`:'')+
 `<button class="go" onclick="nav('quiz',${param})">📝 ${bi(["క్విజ్ ప్రారంభించండి","Start Quiz"])}</button>${DISC}`}
function mark(j){const a=st.steps[param]||(st.steps[param]=[]);if(!a.includes(j)){a.push(j);addXP(5)}}
let qa=[];
function quiz(){const m=MODS[param];qa=[];app.innerHTML=head('📝 '+bi(m.t))+langBar()+m.q.map((q,i)=>`<div class="card" id="q${i}">${bi([q[0],q[1]],'qq')}${q[2].map((o,k)=>`<button class="opt" onclick="ans(${i},${k})">${bi(o)}</button>`).join('')}</div>`).join('')+`<div id="res"></div>`}
function ans(i,k){if(qa[i]!==undefined)return;const q=MODS[param].q[i];qa[i]=k;const box=$('#q'+i);[...box.querySelectorAll('.opt')].forEach((b,n)=>{if(n===q[3])b.classList.add('ok');else if(n===k)b.classList.add('bad');b.disabled=true});
 if(qa.filter(x=>x!==undefined).length===MODS[param].q.length){const sc=qa.filter((a,n)=>a===MODS[param].q[n][3]).length,tot=MODS[param].q.length,pass=sc/tot;
  if(pass>=.5&&!(st.quiz[param]>=1)){st.quiz[param]=1;addXP(20)}else if(!st.quiz[param])st.quiz[param]=0;save();
  $('#res').innerHTML=`<div class="card big">${sc}/${tot} ${pass>=.5?'🎉':'💪'}<br>${bi(pass>=.5?["బాగుంది! +20 XP","Well done! +20 XP"]:["మళ్లీ ప్రయత్నించండి","Try again"])}</div><button class="go" onclick="nav('quiz',${param})">🔁 Retry</button><button class="go alt" onclick="nav('home')">🏠 ${bi(["మాడ్యూల్స్","Modules"])}</button>`}}
function chs(){app.innerHTML=head('🔥 '+bi(["ఛాలెంజ్ జర్నీలు","Challenge Journeys"]))+langBar()+Object.keys(CH).map(k=>{const c=CH[k],n=st.ch[k].length;return `<button class="row" onclick="nav('chd','${k}')"><span class="ic">${c.ic}</span><span class="tx">${bi(c.n)}<br><small>${n}/${c.d.length}</small></span><span class="ck">▶</span></button><div class="pb"><i style="width:${Math.round(n/c.d.length*100)}%"></i></div>`}).join('')+`<p class="sub">${bi(["ప్రతి రోజు ఒక చిన్న పని. ఒక రోజు మిస్ అయినా మళ్లీ కొనసాగించండి.","One small task a day. If you miss a day, simply continue."])}</p>`+DISC}
function chd(){const c=CH[param],done=st.ch[param];app.innerHTML=head(c.ic+' '+bi(c.n))+langBar()+`<div class="pb"><i style="width:${Math.round(done.length/c.d.length*100)}%"></i></div><p class="sub">${done.length}/${c.d.length}</p>`+c.d.map((d,i)=>`<label class="day ${done.includes(i)?'dn':''}"><input type="checkbox" ${done.includes(i)?'checked':''} onchange="tog('${param}',${i})"><span class="dn1">${i+1}</span><span>${bi(d)}</span><button class="lb sm" onclick="event.preventDefault();say([CH['${param}'].d[${i}]])">🔊</button></label>`).join('')+DISC}
function tog(k,i){const a=st.ch[k],p=a.indexOf(i);if(p<0){a.push(i);addXP(10)}else a.splice(p,1);save();const y=window.scrollY;chd();window.scrollTo(0,y)}
function num(id){return Math.max(0,parseFloat(($('#'+id).value||'0').replace(/,/g,''))||0)}
function bind(){}
function tools(){app.innerHTML=head('🧮 '+bi(["కాలిక్యులేటర్లు","Calculators"]))+langBar()+
`<div class="card"><h3>${bi(["EMI కాలిక్యులేటర్","EMI Calculator"])}</h3><label>${bi(["లోన్ మొత్తం ₹","Loan amount ₹"])}<input id="e1" type="number" inputmode="decimal" value="500000"></label><label>${bi(["వడ్డీ % సంవత్సరానికి","Interest % per year"])}<input id="e2" type="number" inputmode="decimal" value="10"></label><label>${bi(["నెలలు","Months"])}<input id="e3" type="number" inputmode="numeric" value="36"></label><button class="go" onclick="calcE()">${bi(["లెక్కించు","Calculate"])}</button><div id="eo" class="out"></div></div>
<div class="card"><h3>${bi(["SIP కాలిక్యులేటర్ (ఉదాహరణ)","SIP Calculator (illustration)"])}</h3><label>${bi(["నెలకు ₹","Monthly ₹"])}<input id="s1" type="number" inputmode="decimal" value="5000"></label><label>${bi(["ఊహించిన వార్షిక రాబడి %","Assumed yearly return %"])}<input id="s2" type="number" inputmode="decimal" value="10"></label><label>${bi(["సంవత్సరాలు","Years"])}<input id="s3" type="number" inputmode="numeric" value="10"></label><button class="go" onclick="calcS()">${bi(["లెక్కించు","Calculate"])}</button><div id="so" class="out"></div></div>
<div class="card"><h3>${bi(["చక్రవడ్డీ కాలిక్యులేటర్","Compounding Calculator"])}</h3><label>${bi(["ప్రారంభ మొత్తం ₹","Starting amount ₹"])}<input id="c1" type="number" inputmode="decimal" value="10000"></label><label>${bi(["వార్షిక వడ్డీ %","Yearly rate %"])}<input id="c2" type="number" inputmode="decimal" value="7"></label><label>${bi(["సంవత్సరాలు","Years"])}<input id="c3" type="number" inputmode="numeric" value="20"></label><button class="go" onclick="calcC()">${bi(["లెక్కించు","Calculate"])}</button><div id="co" class="out"></div></div>
<p class="sub">${bi(["ఇవి ఉదాహరణ లెక్కలు మాత్రమే, నిజమైన రాబడికి హామీ కాదు.","These are illustrations only, not promises of real returns."])}</p>`+DISC}
function used(k){st.tools[k]=1;save()}
function calcE(){const P=num('e1'),R=num('e2'),n=Math.round(num('e3'));let o;if(!P||!n){o='—'}else{const r=R/1200;const e=r?P*r*Math.pow(1+r,n)/(Math.pow(1+r,n)-1):P/n;const t=e*n;o=`EMI: <b>${fmt(e)}</b><br>Total / మొత్తం: <b>${fmt(t)}</b><br>Interest / వడ్డీ: <b>${fmt(t-P)}</b>`}$('#eo').innerHTML=o;used('emi')}
function calcS(){const P=num('s1'),R=num('s2'),y=num('s3'),n=Math.round(y*12);let o;if(!P||!n){o='—'}else{const r=R/1200;const fv=r?P*((Math.pow(1+r,n)-1)/r)*(1+r):P*n;o=`Invested / పెట్టుబడి: <b>${fmt(P*n)}</b><br>Illustrative value / ఉదాహరణ విలువ: <b>${fmt(fv)}</b><br><small>Not guaranteed / హామీ కాదు</small>`}$('#so').innerHTML=o;used('sip')}
function calcC(){const P=num('c1'),R=num('c2'),y=num('c3');let o;if(!P){o='—'}else{const fv=P*Math.pow(1+R/100,y);o=`Value / విలువ: <b>${fmt(fv)}</b><br>Gain / పెరుగుదల: <b>${fmt(fv-P)}</b>`+(R>0?`<br>Rule of 72 / రూల్ 72: ~<b>${(72/R).toFixed(1)}</b> yrs/ఏళ్లు`:'')}$('#co').innerHTML=o;used('comp')}
function bdg(){app.innerHTML=head('🏅 '+bi(["బ్యాడ్జ్‌లు","Badges"]))+`<div class="card stat"><div>⭐ XP <b>${st.xp}</b></div><div>Lv <b>${lvl()}</b></div></div><div class="grid">`+badges().map(b=>`<div class="tile ${b[3]?'':'lock'}">${b[3]?b[0]:'🔒'}${bi([b[1],b[2]])}</div>`).join('')+'</div>'}
function src(){app.innerHTML=head('📚 '+bi(["మూలాలు & గమనిక","Sources & Note"]))+`<div class="card">${bi(["ఈ కోర్సు అంతర్జాతీయ మరియు భారతీయ ఆర్థిక విద్య ప్రమాణాల (OECD/INFE, భారత NSFE, Jump$tart) అంశాలను అనుసరిస్తుంది. సంఖ్యలు (80C ₹1.5 లక్షలు, DICGC ₹5 లక్షలు, PPF 7.1%) అక్టోబర్ 2026లో అధికారిక వనరులతో సరిచూశాం. నియమాలు మారవచ్చు, అధికారిక సైట్ చూడండి.","This course follows themes from international and Indian financial education frameworks (OECD/INFE, India NSFE, Jump$tart). Figures (80C ₹1.5 lakh, DICGC ₹5 lakh, PPF 7.1%) were checked against official sources in Oct 2026. Rules change, so check the official site."])}</div>`+
 SOURCES.map(s=>`<div class="card sm">${esc(s[0])}<br><code>${esc(s[1])}</code></div>`).join('')+DISC}
window.addEventListener('error',e=>{});render();

let __ka=null;function koreSay(id,fb){try{speechSynthesis.cancel()}catch(e){}if(__ka){try{__ka.pause()}catch(e){}}const bad=()=>{if(fb)fb()};fetch('../learn/audio/index.json?v='+Date.now()).then(r=>r.json()).then(m=>{if(!m[id])return bad();const go=()=>{const s=window.__AUD&&window.__AUD[id];if(!s)return bad();try{const c=m[id];for(const k in window.__AUD)if(m[k]!==c)delete window.__AUD[k]}catch(x){}__ka=new Audio(s);__ka.onerror=bad;const p=__ka.play();if(p&&p.catch)p.catch(bad)};if(window.__AUD&&window.__AUD[id])return go();const e=document.createElement('script');e.src='../learn/audio/'+m[id]+'.js';e.onload=()=>{go();try{e.remove()}catch(x){}};e.onerror=bad;document.head.appendChild(e)}).catch(bad)}
