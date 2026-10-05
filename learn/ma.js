(function(){'use strict';
// AksharaNova Martial Arts (M1). Non-contact movement and stance lessons. 2D animated pose figure, not video.
const KEY='aksharanova.ma.v1';
const L=(te,en)=>{try{return S.lang==='te'?te:en}catch(e){return en}};
const E=x=>String(x).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const today=()=>{const d=new Date();return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const REDUCE=()=>{try{return matchMedia('(prefers-reduced-motion: reduce)').matches}catch(e){return false}};
let D={done:{},xp:0,streak:0,last:'',age:'9',safe:0,days:{}},ov=null,st=null,anim=null;
function load(){try{const j=JSON.parse(localStorage.getItem(KEY)||'null');if(j)D=Object.assign(D,j)}catch(e){}}
function save(){try{localStorage.setItem(KEY,JSON.stringify(D))}catch(e){}}
// ---------- figure: 2-bone IK legs, FK arms. Pose = {hy,fl,fr,bl,br,fly,fry,t,a:[l1,l2,r1,r2]}; angle 0 = straight down, + = toward screen right
const UA=17,FA=15,TH=25,SH=25,TO=32,GY=110;
const rad=d=>d*Math.PI/180;
function leg(hx,hy,fx,fy,bend){let dx=fx-hx,dy=fy-hy,d=Math.hypot(dx,dy);const m=TH+SH-0.01;if(d>m){dx*=m/d;dy*=m/d;d=m}const a=(TH*TH-SH*SH+d*d)/(2*d),h=Math.sqrt(Math.max(0,TH*TH-a*a));const mx=hx+dx*a/d,my=hy+dy*a/d;const nx=-dy/d,ny=dx/d;const c1=[mx+nx*h,my+ny*h],c2=[mx-nx*h,my-ny*h];const k=((c1[0]-mx)*bend>=(c2[0]-mx)*bend)?c1:c2;return {k,f:[hx+dx,hy+dy]}}
function fig(p){const hx=50,hy=p.hy,t=rad(p.t||0);const neck=[hx+TO*Math.sin(t),hy-TO*Math.cos(t)];const sw=9;const nx=Math.cos(t),ny=Math.sin(t);const sL=[neck[0]-sw*nx,neck[1]-sw*ny],sR=[neck[0]+sw*nx,neck[1]+sw*ny];
 const hpL=[hx-5,hy],hpR=[hx+5,hy];const lL=leg(hpL[0],hy,hx+p.fl,GY-(p.fly||0),p.bl),lR=leg(hpR[0],hy,hx+p.fr,GY-(p.fry||0),p.br);
 const arm=(s,a1,a2)=>{const e=[s[0]+UA*Math.sin(rad(a1)),s[1]+UA*Math.cos(rad(a1))];const h=[e[0]+FA*Math.sin(rad(a2)),e[1]+FA*Math.cos(rad(a2))];return {e,h}};
 const aL=arm(sL,p.a[0],p.a[1]),aR=arm(sR,p.a[2],p.a[3]);const head=[neck[0]+7*Math.sin(t),neck[1]-7*Math.cos(t)];
 return {neck,sL,sR,hpL,hpR,lL,lR,aL,aR,head,hip:[hx,hy]}}
function svgFigStick(p,color){const f=fig(p),P=a=>a[0].toFixed(1)+','+a[1].toFixed(1);const ln=(a,b,w,c)=>`<line x1="${a[0].toFixed(1)}" y1="${a[1].toFixed(1)}" x2="${b[0].toFixed(1)}" y2="${b[1].toFixed(1)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
 const c=color||'#7cf0c2',c2='#4da3ff';
 return `<svg viewBox="0 0 100 120" class="mafig" role="img" aria-label="${L('శిక్షకుని భంగిమ','Instructor pose')}"><ellipse cx="50" cy="112" rx="34" ry="3" fill="#000" opacity=".35"/><line x1="8" y1="111" x2="92" y2="111" stroke="#7ab9ff" stroke-opacity=".35" stroke-width=".8"/>`
 +ln(f.hpL,f.lL.k,4.4,c2)+ln(f.lL.k,f.lL.f,4,c2)+`<circle cx="${f.lL.f[0].toFixed(1)}" cy="${f.lL.f[1].toFixed(1)}" r="2.6" fill="${c2}"/>`
 +ln(f.hpR,f.lR.k,4.4,c2)+ln(f.lR.k,f.lR.f,4,c2)+`<circle cx="${f.lR.f[0].toFixed(1)}" cy="${f.lR.f[1].toFixed(1)}" r="2.6" fill="${c2}"/>`
 +ln(f.hip,f.neck,6.4,c)+ln(f.sL,f.sR,5,c)+ln(f.hpL,f.hpR,5,c)
 +ln(f.sL,f.aL.e,3.6,'#ffb84d')+ln(f.aL.e,f.aL.h,3.2,'#ffb84d')+`<circle cx="${f.aL.h[0].toFixed(1)}" cy="${f.aL.h[1].toFixed(1)}" r="2.3" fill="#ffd9a0"/>`
 +ln(f.sR,f.aR.e,3.6,'#ffb84d')+ln(f.aR.e,f.aR.h,3.2,'#ffb84d')+`<circle cx="${f.aR.h[0].toFixed(1)}" cy="${f.aR.h[1].toFixed(1)}" r="2.3" fill="#ffd9a0"/>`
 +`<circle cx="${f.head[0].toFixed(1)}" cy="${f.head[1].toFixed(1)}" r="6.2" fill="#ffe0bd" stroke="${c}" stroke-width="1.2"/></svg>`}

// Illustrated karate-gi figure: tapered limbs, shading, belt, hair, face. Still a 2D illustration (not photo or video).
function svgFig(p){const f=fig(p),n=v=>v.toFixed(1);
 const limb=(a,b,w1,w2,fill)=>{const dx=b[0]-a[0],dy=b[1]-a[1],d=Math.hypot(dx,dy)||1,nx=-dy/d,ny=dx/d;return `<circle cx="${n(a[0])}" cy="${n(a[1])}" r="${w1}" fill="${fill}"/><circle cx="${n(b[0])}" cy="${n(b[1])}" r="${w2}" fill="${fill}"/><path d="M${n(a[0]+nx*w1)},${n(a[1]+ny*w1)} L${n(b[0]+nx*w2)},${n(b[1]+ny*w2)} L${n(b[0]-nx*w2)},${n(b[1]-ny*w2)} L${n(a[0]-nx*w1)},${n(a[1]-ny*w1)}Z" fill="${fill}"/><path d="M${n(a[0]+nx*w1)},${n(a[1]+ny*w1)} L${n(b[0]+nx*w2)},${n(b[1]+ny*w2)} M${n(a[0]-nx*w1)},${n(a[1]-ny*w1)} L${n(b[0]-nx*w2)},${n(b[1]-ny*w2)}" stroke="#8b97b3" stroke-width=".5" fill="none"/>`};
 const G='url(#gi)',skin='url(#sk)',leg=(h,l)=>limb(h,l.k,5.4,4.6,G)+limb(l.k,l.f,4.6,3.2,G)+`<ellipse cx="${n(l.f[0]+1.2)}" cy="${n(l.f[1]+.8)}" rx="4.4" ry="2.1" fill="${skin}" stroke="#a9744f" stroke-width=".4"/>`;
 const arm=(s0,a)=>limb(s0,a.e,3.8,3.2,G)+limb(a.e,a.h,3.2,2.4,G)+`<circle cx="${n(a.h[0])}" cy="${n(a.h[1])}" r="2.5" fill="${skin}" stroke="#a9744f" stroke-width=".4"/>`;
 const hx=f.hip[0],hy=f.hip[1],nk=f.neck,t=Math.atan2(nk[0]-hx,hy-nk[1]);
 const torso=`<path d="M${n(f.sL[0]-1)},${n(f.sL[1]-1)} L${n(f.sR[0]+1)},${n(f.sR[1]-1)} L${n(f.hpR[0]+3)},${n(f.hpR[1]+1)} L${n(f.hpL[0]-3)},${n(f.hpL[1]+1)}Z" fill="${G}" stroke="#8b97b3" stroke-width=".5" stroke-linejoin="round"/>`;
 const bx=(f.hpL[0]+f.hpR[0])/2,by=f.hpL[1]-1.2,belt=`<path d="M${n(f.hpL[0]-3.2)},${n(by-1.6)} L${n(f.hpR[0]+3.2)},${n(by-1.6)} L${n(f.hpR[0]+3.2)},${n(by+1.8)} L${n(f.hpL[0]-3.2)},${n(by+1.8)}Z" fill="#14161f"/><path d="M${n(bx)},${n(by+1.5)} l-1.6,5 M${n(bx)},${n(by+1.5)} l2,4.5" stroke="#14161f" stroke-width="1.3" stroke-linecap="round"/>`;
 const vneck=`<path d="M${n(nk[0]-3)},${n(nk[1]+.5)} L${n(bx)},${n(by-2)} L${n(nk[0]+3)},${n(nk[1]+.5)}" fill="none" stroke="#8b97b3" stroke-width=".6"/>`;
 const hd=f.head,hr=6.1;
 const head=`<rect x="${n(nk[0]-2)}" y="${n(nk[1]-3)}" width="4" height="5" rx="1.5" fill="${skin}"/><ellipse cx="${n(hd[0])}" cy="${n(hd[1])}" rx="${hr-.6}" ry="${hr}" fill="${skin}" stroke="#a9744f" stroke-width=".4" transform="rotate(${n(t*57.3)} ${n(hd[0])} ${n(hd[1])})"/><path d="M${n(hd[0]-hr+.4)},${n(hd[1]-.5)} A${hr-.4},${hr+.4} 0 0 1 ${n(hd[0]+hr-.4)},${n(hd[1]-.5)} Q${n(hd[0])},${n(hd[1]-3.4)} ${n(hd[0]-hr+.4)},${n(hd[1]-.5)}Z" fill="#15131a" transform="rotate(${n(t*57.3)} ${n(hd[0])} ${n(hd[1])})"/><circle cx="${n(hd[0]-2)}" cy="${n(hd[1]+.8)}" r=".6" fill="#2a1d14"/><circle cx="${n(hd[0]+2)}" cy="${n(hd[1]+.8)}" r=".6" fill="#2a1d14"/><path d="M${n(hd[0]-1.4)},${n(hd[1]+3)} Q${n(hd[0])},${n(hd[1]+4)} ${n(hd[0]+1.4)},${n(hd[1]+3)}" fill="none" stroke="#8a4b3a" stroke-width=".5"/>`;
 return `<svg viewBox="0 0 100 120" class="mafig" role="img" aria-label="${L('శిక్షకుని భంగిమ (చిత్రం)','Instructor pose (illustration)')}"><defs><linearGradient id="gi" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#cfd6e6"/><stop offset=".45" stop-color="#ffffff"/><stop offset="1" stop-color="#b9c2d8"/></linearGradient><linearGradient id="sk" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f3c9a2"/><stop offset="1" stop-color="#d49a6e"/></linearGradient><radialGradient id="fl" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#7ab9ff" stop-opacity=".35"/><stop offset="1" stop-color="#7ab9ff" stop-opacity="0"/></radialGradient></defs><rect x="0" y="100" width="100" height="20" fill="#0f1a3c"/><ellipse cx="50" cy="111" rx="38" ry="5" fill="url(#fl)"/><ellipse cx="50" cy="111.5" rx="26" ry="2.6" fill="#000" opacity=".4"/>`
 +arm(f.sL,f.aL)+leg(f.hpL,f.lL)+leg(f.hpR,f.lR)+torso+vneck+belt+arm(f.sR,f.aR)+head+`</svg>`}
// poses: f = front view, s = side view (figure faces right)
const PO={
 ready:{f:{hy:62,fl:-6,fr:6,bl:-1,br:1,t:0,a:[-8,-5,8,5]},s:{hy:62,fl:-3,fr:4,bl:1,br:1,t:0,a:[-6,-3,6,3]}},
 salute:{f:{hy:62,fl:-6,fr:6,bl:-1,br:1,t:0,a:[-30,70,30,-70]},s:{hy:62,fl:-3,fr:4,bl:1,br:1,t:0,a:[20,95,20,95]}},
 horse:{f:{hy:84,fl:-26,fr:26,bl:-1,br:1,t:0,a:[-25,150,25,-150]},s:{hy:74,fl:-4,fr:4,bl:1,br:1,t:0,a:[-25,150,-25,150]}},
 bow:{f:{hy:76,fl:-30,fr:30,bl:-1,br:1,t:0,a:[-25,150,25,-150]},s:{hy:78,fl:-34,fr:24,bl:1,br:1,t:0,a:[-30,150,-30,150]}},
 empty:{f:{hy:80,fl:-4,fr:10,bl:-1,br:1,fry:0,t:0,a:[-20,150,20,-150]},s:{hy:80,fl:-4,fr:24,bl:1,br:1,t:0,a:[-30,150,-30,150]}},
 stork:{f:{hy:62,fl:-3,fr:10,bl:-1,br:1,fry:24,t:0,a:[-50,-20,50,20]},s:{hy:62,fl:0,fr:12,bl:1,br:1,fry:26,t:0,a:[-35,-10,35,10]}},
 inhale:{f:{hy:64,fl:-8,fr:8,bl:-1,br:1,t:0,a:[-150,-170,150,170]},s:{hy:64,fl:-3,fr:4,bl:1,br:1,t:0,a:[150,170,150,170]}},
 exhale:{f:{hy:66,fl:-8,fr:8,bl:-1,br:1,t:0,a:[-35,15,35,-15]},s:{hy:66,fl:-3,fr:4,bl:1,br:1,t:0,a:[40,0,40,0]}},
 stretch:{f:{hy:64,fl:-10,fr:10,bl:-1,br:1,t:0,a:[-100,-60,100,60]},s:{hy:64,fl:-3,fr:4,bl:1,br:1,t:14,a:[110,130,110,130]}}
};
const lerp=(a,b,u)=>a+(b-a)*u;
function mix(p,q,u){const o={};['hy','fl','fr','t','fly','fry'].forEach(k=>{o[k]=lerp(p[k]||0,q[k]||0,u)});o.bl=p.bl;o.br=p.br;o.a=p.a.map((v,i)=>lerp(v,q.a[i],u));return o}
// ---------- lessons (Level 1 Beginner, non-contact). Telugu text is not teacher-reviewed.
const T=(te,en)=>({te,en});
const LES=[
{id:'safe',ic:'🛡️',n:T('భద్రత మరియు సన్నాహం','Safety and warm-up'),keys:['ready','stretch','ready'],hold:10,
 sum:T('ప్రాక్టీస్ ముందు ఖాళీ స్థలం, పెద్దల అనుమతి, సన్నాహం ముఖ్యం.','Before practice: clear space, a grown-up knows, and a gentle warm-up.'),
 steps:[T('జారని నేలపై ఖాళీ స్థలం ఎంచుకోండి.','Pick a clear, non-slip space.'),T('పెద్దలకు చెప్పండి. నొప్పి వస్తే ఆపండి.','Tell a grown-up. Stop if anything hurts.'),T('చేతులు పైకి సాగదీసి, నెమ్మదిగా శ్వాస తీసుకోండి.','Reach up, stretch, breathe slowly.')],
 tips:T('నొప్పి వస్తే వెంటనే ఆపండి. నీరు తాగండి.','Stop at once if you feel pain. Drink water.'),
 q:[{q:T('ప్రాక్టీస్ మొదలు పెట్టే ముందు ఏమి చేయాలి?','What should you do before practising?'),o:[T('సన్నాహం, ఖాళీ స్థలం','Warm up and clear space'),T('వేగంగా దూకడం','Jump around fast'),T('నీరు తాగకపోవడం','Skip water'),T('ఒంటరిగా కఠినంగా చేయడం','Push hard alone')],a:0},{q:T('నొప్పి వస్తే?','If something hurts?'),o:[T('ఆపి, పెద్దలకు చెప్పాలి','Stop and tell a grown-up'),T('ఇంకా గట్టిగా చేయాలి','Push harder'),T('పట్టించుకోకూడదు','Ignore it'),T('వేగం పెంచాలి','Go faster')],a:0}]},
{id:'salute',ic:'🙏',n:T('నమస్కారం మరియు గౌరవం','Salute and respect'),keys:['ready','salute','ready'],hold:8,
 sum:T('శిక్షకునికి, స్నేహితులకు గౌరవం చూపడం అభ్యాసంలో మొదటి పాఠం.','Showing respect to teachers and friends is the first lesson.'),
 steps:[T('నిటారుగా నిలబడండి, పాదాలు కలిపి.','Stand tall, feet together.'),T('చేతులు ఛాతీ ముందుకు తెచ్చి, తల కొద్దిగా వంచండి.','Bring hands to chest, nod gently.'),T('చేతులు కిందకు వదలండి.','Lower hands to the sides.')],
 tips:T('ఇది గౌరవానికి గుర్తు, పోటీ కాదు.','It is a sign of respect, not a contest.'),
 q:[{q:T('నమస్కారం దేనికి గుర్తు?','What does the salute show?'),o:[T('గౌరవం','Respect'),T('కోపం','Anger'),T('భయం','Fear'),T('పోటీ','Rivalry')],a:0},{q:T('నమస్కారంలో చేతులు ఎక్కడ ఉంటాయి?','Where are the hands?'),o:[T('ఛాతీ ముందు','In front of the chest'),T('తల వెనుక','Behind the head'),T('నేలపై','On the floor'),T('నడుము వెనుక','Behind the back')],a:0}]},
{id:'ready',ic:'🧍',n:T('సిద్ధ స్థితి (నిలబడటం)','Ready stance'),keys:['ready'],hold:15,
 sum:T('నిటారు వెన్ను, భుజాల వెడల్పున పాదాలు, ప్రశాంతమైన శ్వాస.','Straight back, feet shoulder width, calm breath.'),
 steps:[T('పాదాలు భుజాల వెడల్పున ఉంచండి.','Feet shoulder width apart.'),T('మోకాళ్ళు కొద్దిగా వంచండి.','Soften the knees.'),T('భుజాలు వదులుగా, చూపు ముందుకు.','Relax shoulders, look ahead.')],
 tips:T('మోకాళ్ళను లాక్ చేయకండి.','Do not lock your knees.'),
 q:[{q:T('పాదాల దూరం?','Foot distance?'),o:[T('భుజాల వెడల్పు','Shoulder width'),T('చాలా దగ్గర','Very close'),T('చాలా దూరం','Very wide'),T('ఒక్క కాలు','One foot')],a:0},{q:T('మోకాళ్ళు ఎలా ఉండాలి?','Knees should be?'),o:[T('కొద్దిగా వంచి','Slightly soft'),T('గట్టిగా లాక్','Locked'),T('లోపలికి','Inward'),T('పూర్తిగా వంచి','Fully bent')],a:0}]},
{id:'horse',ic:'🐴',n:T('అశ్వ స్థితి (హార్స్ స్టాన్స్)','Horse stance'),keys:['ready','horse'],hold:15,
 sum:T('పాదాలు వెడల్పుగా, మోకాళ్ళు కాలి వేళ్ళ వైపు, వెన్ను నిటారు. బలం మరియు సమతుల్యం పెరుగుతాయి.','Feet wide, knees toward the toes, back straight. Builds leg strength and balance.'),
 steps:[T('పాదాలు భుజాల కంటే వెడల్పుగా ఉంచండి.','Feet wider than shoulders.'),T('మోకాళ్ళు కాలి వేళ్ళ దిశలో వంచండి.','Bend knees over the toes.'),T('వెన్ను నిటారుగా, పిడికిళ్ళు నడుము దగ్గర.','Straight back, fists at the waist.')],
 tips:T('మోకాళ్ళు లోపలికి కూలకూడదు. కొద్దిసేపే చేయండి.','Knees must not fall inward. Hold only briefly.'),
 q:[{q:T('మోకాళ్ళు ఏ దిశలో?','Which way do knees point?'),o:[T('కాలి వేళ్ళ వైపు','Toward the toes'),T('లోపలికి','Inward'),T('వెనక్కి','Backward'),T('ఎటైనా','Anywhere')],a:0},{q:T('వెన్ను ఎలా?','Back?'),o:[T('నిటారుగా','Straight'),T('వంగి','Bent'),T('వెనక్కి వాలి','Leaning back'),T('ముందుకు వాలి','Leaning forward')],a:0}]},
{id:'bow',ic:'🏹',n:T('ధనుస్సు స్థితి (బో స్టాన్స్)','Bow stance'),keys:['ready','bow'],hold:12,
 sum:T('ముందు కాలు వంగి, వెనుక కాలు నిటారుగా. బరువు ముందు కాలుపై ఎక్కువ.','Front knee bent, back leg straight. More weight on the front leg.'),
 steps:[T('ఒక అడుగు ముందుకు వేయండి.','Step one foot forward.'),T('ముందు మోకాలు వంచండి.','Bend the front knee.'),T('వెనుక కాలు నిటారుగా, వెన్ను నిటారుగా.','Back leg straight, back upright.')],
 tips:T('ముందు మోకాలు కాలి వేళ్ళను మించకూడదు.','Front knee stays over the foot, not past the toes.'),
 q:[{q:T('ఏ కాలు వంగి ఉంటుంది?','Which leg is bent?'),o:[T('ముందు కాలు','Front leg'),T('వెనుక కాలు','Back leg'),T('రెండూ','Both'),T('ఏదీ కాదు','Neither')],a:0},{q:T('వెనుక కాలు?','Back leg?'),o:[T('నిటారుగా','Straight'),T('వంచి','Bent'),T('ఎత్తి','Lifted'),T('కదులుతూ','Moving')],a:0}]},
{id:'empty',ic:'🪶',n:T('ఖాళీ స్థితి (ఎంప్టీ స్టాన్స్)','Empty stance'),keys:['ready','empty'],hold:10,
 sum:T('బరువు వెనుక కాలుపై, ముందు కాలు తేలికగా. సమతుల్యం, చురుకుదనం నేర్పుతుంది.','Weight on the back leg, front toe light. Teaches balance and lightness.'),
 steps:[T('బరువు వెనుక కాలుపైకి మార్చండి.','Shift weight to the back leg.'),T('ముందు కాలు తేలికగా ముందుకు.','Front foot rests lightly ahead.'),T('వెన్ను నిటారుగా ఉంచండి.','Keep the back upright.')],
 tips:T('పడిపోతే గోడ ఆసరా తీసుకోండి.','Use a wall for support if you wobble.'),
 q:[{q:T('బరువు ఎక్కడ?','Where is the weight?'),o:[T('వెనుక కాలు','Back leg'),T('ముందు కాలు','Front leg'),T('రెండు సమానం','Equal'),T('చేతులపై','On hands')],a:0},{q:T('ఇది ఏమి నేర్పుతుంది?','It teaches?'),o:[T('సమతుల్యం','Balance'),T('గట్టిగా దూకడం','Hard jumping'),T('పరుగు','Running'),T('భారం ఎత్తడం','Heavy lifting')],a:0}]},
{id:'stork',ic:'🦩',n:T('ఒంటికాలి సమతుల్యం','One-leg balance'),keys:['ready','stork'],hold:8,
 sum:T('ఒక కాలిపై నిలబడి సమతుల్యం పెంచుకోండి. గోడ ఆసరా తీసుకోవచ్చు.','Stand on one leg to build balance. A wall can help.'),
 steps:[T('ఒక చేతితో గోడను పట్టుకోండి.','Hold a wall with one hand.'),T('ఒక కాలు మెల్లగా ఎత్తండి.','Slowly lift one foot.'),T('ఒక చోట చూసి శ్వాస తీసుకోండి.','Look at one spot and breathe.')],
 tips:T('రెండు కాళ్ళతో మార్చి చేయండి.','Switch legs and repeat.'),
 q:[{q:T('సమతుల్యానికి ఏది సహాయం?','What helps balance?'),o:[T('ఒక చోట చూడటం','Looking at one spot'),T('కళ్ళు మూయడం','Closing eyes'),T('వేగంగా తిరగడం','Spinning'),T('గట్టిగా ఊపిరి ఆపడం','Holding breath')],a:0},{q:T('ఇంకొక కాలుతో?','Other leg?'),o:[T('మార్చి చేయాలి','Switch and repeat'),T('వద్దు','Skip it'),T('రెట్టింపు చేయాలి','Double only one'),T('వేగంగా','Hurry')],a:0}]},
{id:'breath',ic:'🌬️',n:T('శ్వాస (క్విగాంగ్ శైలి)','Breathing (Qigong style)'),keys:['ready','inhale','exhale','inhale','exhale'],hold:20,
 sum:T('చేతులు పైకి లేపుతూ శ్వాస తీసుకోండి, కిందకు దించుతూ వదలండి. మనసు ప్రశాంతమవుతుంది.','Raise arms as you breathe in, lower as you breathe out. Calms the mind.'),
 steps:[T('ముక్కుతో నెమ్మదిగా శ్వాస తీసుకోండి.','Breathe in slowly through the nose.'),T('చేతులు పక్కల నుండి పైకి.','Arms rise to the sides.'),T('శ్వాస వదులుతూ చేతులు కిందకు.','Breathe out and lower the arms.')],
 tips:T('కళ్ళు తిరిగితే ఆపి కూర్చోండి.','If dizzy, stop and sit down.'),
 q:[{q:T('శ్వాస తీసుకునేటప్పుడు చేతులు?','Arms when breathing in?'),o:[T('పైకి','Rise up'),T('కిందకు','Go down'),T('వెనక్కి','Go back'),T('కదలవు','Stay still')],a:0},{q:T('కళ్ళు తిరిగితే?','If you feel dizzy?'),o:[T('ఆపి కూర్చోవాలి','Stop and sit'),T('కొనసాగించాలి','Continue'),T('వేగం పెంచాలి','Speed up'),T('పరుగెత్తాలి','Run')],a:0}]}
];
const COMING=[['🥋',T('మధ్యస్థ స్థాయి 2','Level 2 Intermediate')],['🏆',T('ఉన్నత స్థాయి 3','Level 3 Advanced')],['☯️',T('తాయ్ చీ పరిచయం','Tai Chi intro')],['🐉',T('షావోలిన్ పరిచయం','Shaolin intro')],['🌿',T('వుషు పరిచయం','Wushu intro')],['🤲',T('వింగ్ చున్ పరిచయం','Wing Chun intro')],['🛡️',T('సాండా (బోధకుని పర్యవేక్షణలో మాత్రమే)','Sanda (instructor-supervised only)')],['🌬️',T('క్విగాంగ్','Qigong')]];
const BADGES=[[1,'🥉',T('మొదటి పాఠం','First lesson')],[3,'🥈',T('3 పాఠాలు','3 lessons')],[5,'🥇',T('5 పాఠాలు','5 lessons')],[8,'🏅',T('స్థాయి 1 పాఠాలన్నీ','All Level 1 lessons')]];
// ---------- ui
const css=`#ma{position:fixed;inset:0;z-index:9992;background:#0b1230;color:#f6f8ff;overflow:auto;font-family:inherit}#ma .w{max-width:560px;margin:0 auto;padding:12px 12px 80px}#ma h2{margin:8px 0}#ma .c{background:#18204a;border:1px solid #7ab9ff44;border-radius:16px;padding:12px;margin:10px 0}#ma .b{background:#1d6fd1;color:#fff;border:0;border-radius:12px;padding:11px 14px;font-size:15px;font-weight:700;margin:4px 4px 4px 0;min-height:44px}#ma .b.g{background:#2a3566}#ma .b.ok{background:#12a37f}#ma .top{display:flex;justify-content:space-between}#ma .row{display:flex;gap:8px;flex-wrap:wrap}#ma .les{display:flex;align-items:center;gap:10px;width:100%;text-align:left;background:#202b50;border:1px solid #7ab9ff55;border-radius:14px;padding:11px;margin:7px 0;color:#f6f8ff;font-size:15px;min-height:48px}#ma .les .ic{font-size:24px}#ma .sm{font-size:12px;opacity:.8}#ma .mafig{width:100%;max-width:300px;display:block;margin:6px auto;background:radial-gradient(circle at 50% 30%,#1b2a5e,#0e1534);border-radius:16px}#ma .cm{opacity:.55}#ma .warn{border-color:#ffb84d99;background:#2b2314}#ma .bar{height:8px;background:#2a3566;border-radius:6px;overflow:hidden}#ma .bar>i{display:block;height:100%;background:linear-gradient(90deg,#7cf0c2,#4da3ff)}`;
let ov2=null;
function render(h){ov.innerHTML='<div class="w">'+h+'</div>';ov.scrollTop=0}
const top=(back)=>`<div class="top"><button class="b g" data-a="${back||'home'}">← ${L('వెనుకకు','Back')}</button><button class="b g" data-a="close">✕</button></div>`;
const ageT=()=>({'6':L('6-9 ఏళ్ళు','Ages 6-9'),'9':L('9-12 ఏళ్ళు','Ages 9-12'),'13':L('13+ ఏళ్ళు','Ages 13+')}[D.age]);
const holdFor=(l)=>Math.round(l.hold*(D.age==='6'?.6:D.age==='13'?1.4:1));
function level(){return D.xp>=60?3:D.xp>=25?2:1}
function home(){stopAnim();const n=Object.keys(D.done).length;
 let h=top('close0')+`<h2>🥋 ${L('మార్షల్ ఆర్ట్స్','Martial Arts')} · ${L('స్థాయి 1','Level 1')}</h2><p class="sm">${L('నిటారు స్థితులు, శ్వాస, సమతుల్యం. ఇది సంప్రదాయ కళల పరిచయం - పోరాటం కాదు.','Stances, breathing and balance. A gentle intro to traditional arts, not fighting.')}</p>`;
 h+=`<div class="c warn"><b>🛡️ ${L('ముఖ్యమైన గమనిక','Important')}</b><p style="margin:6px 0">${L('ఇక్కడ ఉన్నది 2D యానిమేటెడ్ బొమ్మ (వీడియో కాదు). నిజమైన పద్ధతులు అర్హత కలిగిన బోధకుని వద్ద నేర్చుకోండి. భాగస్వామి సాధనలు, సాండా బోధకుని పర్యవేక్షణలో మాత్రమే.','The instructor is a 2D animated pose figure, not video. Learn real techniques from a qualified instructor. Partner drills and Sanda only with a supervised instructor.')} <a style="color:#7cf0c2" href="https://www.healthychildren.org/English/healthy-living/sports/Pages/Martial-Arts.aspx" target="_blank" rel="noopener">healthychildren.org</a></p></div>`;
 h+=`<div class="c"><b>${L('వయస్సు విధానం','Age mode')}</b><div class="row">${['6','9','13'].map(a=>`<button class="b ${D.age===a?'ok':'g'}" data-a="age" data-v="${a}">${a==='6'?L('6-9','6-9'):a==='9'?L('9-12','9-12'):'13+'}</button>`).join('')}</div><div class="sm">${L('చిన్నవారికి తక్కువ సమయం, సరళ పదాలు.','Shorter holds and simpler words for younger kids.')}</div></div>`;
 h+=`<div class="c"><div class="row" style="justify-content:space-between"><span>⭐ XP <b>${D.xp}</b></span><span>🔥 ${L('రోజులు','Streak')} <b>${D.streak}</b></span><span>${n}/${LES.length}</span></div><div class="bar" style="margin-top:8px"><i style="width:${Math.round(n/LES.length*100)}%"></i></div></div>`;
 h+=`<h3>${L('స్థాయి 1 - ప్రారంభకులు (భంగిమలు మాత్రమే)','Level 1 - Beginner (non-contact forms only)')}</h3>`;
 LES.forEach((l,i)=>{h+=`<button class="les" data-a="lesson" data-v="${i}"><span class="ic">${l.ic}</span><span style="flex:1">${i+1}. ${E(L(l.n.te,l.n.en))}</span><span>${D.done[l.id]?'✅':'▶'}</span></button>`});
 h+=`<div class="c"><b>🎖️ ${L('బ్యాడ్జీలు (యాప్ పాఠం పూర్తి)','Badges (app lesson completion)')}</b><div class="row" style="margin-top:6px">${BADGES.map(b=>`<span style="opacity:${n>=b[0]?1:.35}">${b[1]} ${L(b[2].te,b[2].en)}</span>`).join(' ')}</div><div class="sm">${L('బ్యాడ్జీలు యాప్ పాఠాలు పూర్తి చేసినందుకే - నైపుణ్య పరీక్ష కాదు.','Badges mean app lessons completed. They do not assess skill or readiness to spar.')}</div></div>`;
 h+=`<h3>${L('త్వరలో','Coming soon')}</h3><div class="c cm">${COMING.map(c=>`<div>${c[0]} ${L(c[1].te,c[1].en)}</div>`).join('')}<div class="sm" style="margin-top:6px">${L('సంప్రదింపు అంశాలు XP లేదా వయస్సుతో తెరవబడవు.','Contact content is never unlocked by XP or age.')}</div></div>`;
 h+=`<button class="b" data-a="videos">🎥 ${L('నిజమైన శిక్షణ వీడియోలు','Real Training Videos')}</button> `;
 h+=`<button class="b g" data-a="parent">👪 ${L('తల్లిదండ్రుల వీక్షణ','Parent view')}</button>`;
 render(h)}
function parent(){const n=Object.keys(D.done).length;render(top()+`<h2>👪 ${L('తల్లిదండ్రుల వీక్షణ','Parent view')}</h2><div class="c"><p>${L('పూర్తయిన పాఠాలు','Lessons completed')}: <b>${n}/${LES.length}</b> · XP ${D.xp} · ${ageT()}</p>${LES.map(l=>`<div>${D.done[l.id]?'✅':'⬜'} ${E(L(l.n.te,l.n.en))}</div>`).join('')}</div><div class="c warn"><p>${L('ఇది యాప్ పాఠాల పురోగతి మాత్రమే. నిజమైన శిక్షణకు అర్హత కలిగిన బోధకుడు అవసరం. భాగస్వామి సాధనలు, సాండా కోసం బోధకుని పర్యవేక్షణ తప్పనిసరి.','This tracks app lessons only. Real training needs a qualified instructor. Partner drills and Sanda need supervision.')}</p></div>`)}
// lesson with safety gate
function lesson(i){stopAnim();const l=LES[i];if(!D.safe){gate(i);return}
 st={i,view:'f',k:0,u:1,playing:false,slow:false};
 let h=top()+`<h2>${l.ic} ${E(L(l.n.te,l.n.en))}</h2><p>${E(L(l.sum.te,l.sum.en))}</p><div id="mafg"></div>${VMAP[i]!==undefined?`<button class="b ok" data-a="vopen" data-v="${VMAP[i]}">🎥 ${L('నిజమైన వీడియో చూడండి','Watch the real video')}</button>`:''}
 <div class="row"><button class="b" data-a="play">▶ ${L('ప్లే','Play')}</button><button class="b g" data-a="pause">⏸ ${L('ఆపు','Pause')}</button><button class="b g" data-a="replay">↺ ${L('మళ్ళీ','Replay')}</button><button class="b g" data-a="step">⏭ ${L('తదుపరి భంగిమ','Step')}</button><button class="b g" data-a="slow" id="masl">🐢 ${L('నెమ్మదిగా','Slow')}</button><button class="b g" data-a="view" id="mavw">${L('ముందు వీక్షణ','Front view')}</button><button class="b g" data-a="speak">🔊 ${L('వినండి','Listen')}</button></div>
 <div class="c"><b>${L('చేయండి','Steps')}</b><ol>${l.steps.map(s=>`<li>${E(L(s.te,s.en))}</li>`).join('')}</ol><p class="sm">💡 ${E(L(l.tips.te,l.tips.en))}</p></div>
 <div class="c"><b>⏱️ ${L('ప్రాక్టీస్ టైమర్','Practice timer')}: ${holdFor(l)} ${L('సెక.','sec')}</b><div class="bar" style="margin:8px 0"><i id="matb" style="width:0"></i></div><button class="b ok" data-a="timer">${L('ప్రారంభించు','Start')}</button> <span id="matt" class="sm"></span></div>
 <button class="b" data-a="quiz" data-v="${i}">❓ ${L('చిన్న క్విజ్','Quick quiz')}</button>`;
 render(h);drawStatic();}
function gate(i){render(top()+`<h2>🛡️ ${L('ప్రాక్టీస్ ముందు','Before you practise')}</h2><div class="c warn"><ul><li>${L('ఖాళీ, జారని స్థలం.','Clear, non-slip space.')}</li><li>${L('పెద్దలకు తెలియాలి (13 లోపు వారికి).','A grown-up should know (under 13).')}</li><li>${L('నొప్పి వస్తే ఆపండి. నీరు తాగండి.','Stop if it hurts. Drink water.')}</li><li>${L('భాగస్వామితో సాధన, సాండా వద్దు - బోధకుని పర్యవేక్షణలో మాత్రమే.','No partner drills or sparring here - only with a qualified instructor.')}</li><li>${L('ఇక్కడ ఆయుధాలు, గాయం చేసే పద్ధతులు ఉండవు.','No weapons or techniques meant to injure are taught here.')}</li></ul></div><button class="b ok" data-a="agree" data-v="${i}">✅ ${L('అర్థమైంది, కొనసాగించు','I understand, continue')}</button>`)}
function frames(){const l=LES[st.i];return l.keys.map(k=>PO[k][st.view])}
function drawPose(p){const e=document.getElementById('mafg');if(e)e.innerHTML=svgFig(p)}
function drawStatic(){const f=frames();drawPose(f[Math.min(st.k,f.length-1)])}
function stopAnim(){if(anim){cancelAnimationFrame(anim);anim=null}if(st)st.playing=false}
function tween(from,to,ms,done){if(REDUCE()||ms<=0){drawPose(to);done&&done();return}const t0=performance.now();const tick=now=>{if(!st||!st.playing){return}const u=Math.min(1,(now-t0)/ms),s=u<.5?2*u*u:1-Math.pow(-2*u+2,2)/2;drawPose(mix(from,to,s));if(u<1)anim=requestAnimationFrame(tick);else{anim=null;done&&done()}};anim=requestAnimationFrame(tick)}
function play(){const f=frames();if(f.length<2){drawStatic();return}stopAnim();st.playing=true;let k=0;const next=()=>{if(!st||!st.playing)return;if(k>=f.length-1){st.playing=false;st.k=f.length-1;return}const a=f[k],b=f[k+1];k++;tween(a,b,(st.slow?2600:1300),()=>{setTimeout(next,REDUCE()?900:(st.slow?900:400))})};drawPose(f[0]);setTimeout(next,300)}
function step(){stopAnim();const f=frames();st.k=(st.k+1)%f.length;drawPose(f[st.k])}
function speak(){try{const l=LES[st.i];const txt=L(l.n.te,l.n.en)+'. '+L(l.sum.te,l.sum.en)+' '+l.steps.map(s=>L(s.te,s.en)).join(' ');speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(txt);u.lang=S.lang==='te'?'te-IN':'en-IN';u.rate=.85;speechSynthesis.speak(u)}catch(e){}}
let tm=null;function timer(){const l=LES[st.i];clearInterval(tm);const tot=holdFor(l);let r=tot;const bar=document.getElementById('matb'),tt=document.getElementById('matt');const f=frames();drawPose(f[f.length-1]);tm=setInterval(()=>{r--;if(bar)bar.style.width=Math.round((tot-r)/tot*100)+'%';if(tt)tt.textContent=r>0?r+' '+L('సెక.','sec'):L('బాగుంది! 👏 ఇప్పుడు వదలండి.','Well done! Release gently.');if(r<=0){clearInterval(tm);tm=null}},1000);if(tt)tt.textContent=r+' '+L('సెక.','sec')}
// quiz
function quiz(i){stopAnim();const l=LES[i];st={i,qi:0,right:0,quiz:1};qshow()}
function qshow(){const l=LES[st.i],q=l.q[st.qi];const ord=q.o.map((o,j)=>j);let h=top('lesson:'+st.i)+`<div class="sm">${l.ic} ${st.qi+1}/${l.q.length}</div><div class="c"><b>${E(L(q.q.te,q.q.en))}</b></div>`;ord.sort((a,b)=>((a*7+st.qi*3+st.i)%5)-((b*7+st.qi*3+st.i)%5));ord.forEach(j=>{h+=`<button class="les" data-a="ans" data-v="${j}">${E(L(q.o[j].te,q.o[j].en))}</button>`});render(h)}
function ans(j){const l=LES[st.i],q=l.q[st.qi];const ok=j===q.a;if(ok)st.right++;st.qi++;const more=st.qi<l.q.length;let h=`<div class="c ${ok?'':'warn'}"><b>${ok?'✅ '+L('సరైనది!','Correct!'):'❌ '+L('సరైన జవాబు','Right answer')+': '+E(L(q.o[q.a].te,q.o[q.a].en))}</b></div>`;h+=more?`<button class="b" data-a="qnext">${L('తదుపరి','Next')} →</button>`:`<button class="b ok" data-a="finish">${L('పూర్తి','Finish')} →</button>`;render(h)}
function finish(){const l=LES[st.i];const first=!D.done[l.id];D.done[l.id]=today();if(first){D.xp+=10+st.right*5;}const t=today();if(D.last!==t){const y=new Date();y.setDate(y.getDate()-1);const ys=y.getFullYear()+'-'+String(y.getMonth()+1).padStart(2,'0')+'-'+String(y.getDate()).padStart(2,'0');D.streak=D.last===ys?D.streak+1:1;D.last=t}save();const n=Object.keys(D.done).length;const nb=BADGES.filter(b=>n===b[0]).map(b=>b[1]+' '+L(b[2].te,b[2].en));
 render(`<h2>🎉 ${L('పాఠం పూర్తి','Lesson complete')}</h2><div class="c"><p>${st.right}/${l.q.length} ${L('సరైనవి','correct')}${first?' · +'+(10+st.right*5)+' XP':''}</p>${nb.length?`<p>🎖️ ${nb.join(', ')}</p><p class="sm">${L('"యాప్ పాఠం పూర్తి" బ్యాడ్జీ - నైపుణ్య ధృవీకరణ కాదు.','"App lesson completion" badge, not an assessment of skill.')}</p>`:''}</div><button class="b" data-a="home">${L('పాఠాల జాబితా','Lesson list')}</button>${st.i+1<LES.length?`<button class="b ok" data-a="lesson" data-v="${st.i+1}">${L('తదుపరి పాఠం','Next lesson')} →</button>`:''}`)}
function click(ev){const b=ev.target.closest('[data-a]');if(!b)return;const a=b.dataset.a,v=b.dataset.v;try{SFX.tap()}catch(e){}
 if(a==='close'||a==='close0'){close();return}
 if(a==='home'){clearInterval(tm);home();return}
 if(a==='back'){history.back();return}
 if(a==='age'){D.age=v;save();home();return}
 if(a==='lesson'){clearInterval(tm);if(v!==undefined&&!/^\d+$/.test(v)&&v.startsWith('lesson:')){lesson(+v.slice(7))}else lesson(+v);return}
 if(a.startsWith('lesson:')){lesson(+a.slice(7));return}
 if(a==='agree'){D.safe=1;save();lesson(+v);return}
 if(a==='play'){play();return}if(a==='pause'){stopAnim();return}
 if(a==='replay'){stopAnim();st.k=0;st.playing=true;play();return}
 if(a==='step'){step();return}
 if(a==='slow'){st.slow=!st.slow;b.classList.toggle('ok',st.slow);return}
 if(a==='view'){st.view=st.view==='f'?'s':'f';b.textContent=st.view==='f'?L('ముందు వీక్షణ','Front view'):L('పక్క వీక్షణ','Side view');stopAnim();drawStatic();return}
 if(a==='speak'){speak();return}
 if(a==='timer'){timer();return}
 if(a==='quiz'){quiz(+v);return}
 if(a==='ans'){ans(+v);return}if(a==='qnext'){qshow();return}if(a==='finish'){finish();return}
 if(a==='parent'){parent();return}if(a==='videos'){loadVid();return}if(a==='vopen'){const k=+v;(window.MartialVideos?Promise.resolve():new Promise(r=>{loadVid();const t=setInterval(()=>{if(window.MartialVideos){clearInterval(t);r()}},100)})).then(()=>window.MartialVideos.tech(k));return}}
function onPop(){if(ov)close(true)}
function close(fromPop){clearInterval(tm);stopAnim();try{speechSynthesis.cancel()}catch(e){}if(ov){ov.remove();ov=null}window.removeEventListener('popstate',onPop);if(!fromPop){try{if(location.hash==='#martial')history.back()}catch(e){}}}
function open(){if(ov)return;load();if(!document.getElementById('macss')){const s=document.createElement('style');s.id='macss';s.textContent=css;document.head.appendChild(s)}ov=document.createElement('div');ov.id='ma';document.body.appendChild(ov);ov.addEventListener('click',click);window.addEventListener('popstate',onPop);try{history.pushState({ma:1},'','#martial')}catch(e){}home()}
function selfTest(){const r=[];const ck=(n,c)=>r.push((c?'ok ':'FAIL ')+n);LES.forEach(l=>{ck(l.id+' keys',l.keys.every(k=>PO[k]&&PO[k].f&&PO[k].s));ck(l.id+' quiz',l.q.length>=2&&l.q.every(q=>q.o.length===4&&q.a>=0&&q.a<4))});Object.keys(PO).forEach(k=>['f','s'].forEach(v=>{const f=fig(PO[k][v]);ck(k+v,[f.head,f.lL.f,f.lR.f,f.aL.h,f.aR.h].every(p=>isFinite(p[0])&&isFinite(p[1])))}));return r}
const VMAP={2:0,3:0,4:14,5:14,6:7};let vl=null;function loadVid(){if(window.MartialVideos){window.MartialVideos.open();return}(vl||(vl=new Promise((res,rej)=>{const e=document.createElement('script');e.src='./learn/mavid.js?v='+(typeof VER!=='undefined'?VER:'');e.onload=res;e.onerror=()=>{vl=null;rej()};document.head.appendChild(e)}))).then(()=>window.MartialVideos.open()).catch(()=>{})}
window.MartialApp={open,selfTest,svgFig,PO,LES,loadVid,_i:{render:h=>render(h),top,L,E,lesson:i=>lesson(i),get D(){return D}}};
})();
