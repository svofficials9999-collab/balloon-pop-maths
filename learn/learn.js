/* AksharaNova Learn: class 1-10 practice-first learning (added in v3). Subject data lives in ./learn/<subject>.js */
(function(){
'use strict';
const D={};
const EX={};const OVR={};const HID={};const DGX={};const DGA={solar5:'solarsystem'};window.__DIAG={};window.LD={diag(s,cl,t){cl.forEach(c=>{(__DIAG[s+':'+c]=__DIAG[s+':'+c]||[]).push(t)})},dg(o){Object.keys(o).forEach(k=>{const b=k.replace(/(#|--)\d+$/,'');(DGX[b]=DGX[b]||[]).push(o[k])})},reg(s,d){D[s]=d},add(s,cl,t){cl.forEach(c=>{(EX[s+':'+c]=EX[s+':'+c]||[]).push(Object.assign({},t,{cl}))})},hide(s,ids){ids.forEach(i=>HID[s+':'+i]=1)},ov(s,cl,t){OVR[s+':'+t.id]=Object.assign({},t,{cl});LD.add(s,cl,t)}};
const bo=s=>{s=String(s);if(s.indexOf('\u00A7')<0&&s.indexOf('~')>0){const p=s.split('~');return {te:p[0],en:p[1]}}return bi(s)};
const bi=s=>{const p=String(s).split('\u00A7');return p.length>1?{te:p[0],en:p[1]}:{te:String(s),en:String(s)}};
const W=o=>(o&&(o[S.lang]||o.te||o.en))||'';
const SUBS=['telugu','english','maths','science','social','current','hindi','gk'];const SUBCLS={hindi:[1,2,3,4,5,6,7,8,9,10],gk:[6,7,8,9,10]};
const LS_={telugu:{i:'🪷',te:'తెలుగు',en:'Telugu',c:'#ff375f'},english:{i:'🔤',te:'ఇంగ్లీష్',en:'English',c:'#0a84ff'},maths:{i:'➕',te:'గణితం',en:'Maths',c:'#ff9f0a'},science:{i:'🔬',te:'సైన్స్',en:'Science',c:'#30d158'},social:{i:'🏛️',te:'సాంఘిక శాస్త్రం',en:'Social Studies',c:'#ffd60a'},current:{i:'📰',te:'వర్తమాన అంశాలు',en:'Current Affairs',c:'#64d2ff'},hindi:{i:'🇮🇳',te:'హిందీ',en:'Hindi',c:'#ff6bd6'},gk:{i:'🧠',te:'జనరల్ నాలెడ్జ్',en:'General Knowledge',c:'#bf5af2'}};
let LP=readStore('bm2-learn',{t:{},cls:5});
if(!LP.t)LP.t={};
const saveL=()=>LS.set('bm2-learn',JSON.stringify(LP));
let active=false,V={v:'hub',c:LP.cls||S.cls||5},Q=null,loadP={};
const BANKS=['prog','pk89','pk88','pk87','pk86','pk85','pk84','pk83','pk82','pk81','pk80','pk79','pk78','pk77','pk76','pk75','pk74','pk73','pk72','pk71','pk70','pk69','pk68','pk67','pk66','pk65','pk64','pk63','pk62','pk61','pk60','pk59','pk58','pk57','pk56','pk55','pk54','pk53','pk52','pk51','pk50','pk49','pk48','pk47','pk46','pk45','pk43','pk42','pk41','pk40','pk39','pk38','pk37','pk36','pk35','pk34','pk33','pk32','pk31','pk30','pk29','pk27','pk28','pk18','pk19','pk20','pk21','pk22','pk23','pk24','pk25','pk26','pk17','pk01','pk02','pk03','pk04','pk05','pk06','pk07','pk08','pk09','pk10','pk11','pk12','pk13','pk14','pk15','pk16','bank','bsci','bsci2','bsci3','bsci4','bsci5','bsoc','bgk','bmat','beng','btel','btel2','btel3','btel4','btel5','btel6','btel7','btel8','btel9','bsoc2','bmat2','bmat3','diag','dgm1','dgm2','dgm3','dgm5','dgm6','dgm7','dgm8','dgm9','bgk2','bgk3','bgk4','bgk5','bgk6','bsci6','beng2','dgm13','btel10','bgk7','dgm14','bmat5','bsoc5','bsci7','dgm15','bgk8','bgk9','bsoc6','bsx79a','bsx79b','dgm16','dgm17','dgm18','bsoc7','bsoc8','dgm19','dgm20','bsoc9','dgm21','bsx79c','bsx79d','dgm22','dgm23','bsoc10','dgm24','bsx79e','bsx79f','dgm25','dgm26','bsoc11','dgm27','beng3','bsci8','bsx10a','btel11','dgm28','dgm29','bgk10','bsoc12','bmat6','dgm30','bmx6exta','bgk11','bgk12','bmx910f','bmx78f','bmat15b1','bmat15b2','bmat15b3','bsx10b','dgm31','dgm32','dgm33','bsx8a','bsx8b','bsx10c','dgm34','dgm35','dgm36','bsx10d','bsx10e','dgm37','dgm38','bsx10f','dgm39','bevs16a','dgm40','bevs16b','bevs16c','bevs16d','bevs16e','bevs16f','beng4','bmat15b4','dgm41','btel12','bmat15b5','btel13','bmat15b6','dgm42','dgm43','dgm44','dgm45','dgm46','dgm10','bsx9a','bsx9b','dgm11','dgm12','bsoc3','bsoc4','btel1b','bmat4'];
function load(s){return BANKS.includes(s)?loadRaw(s):loadRaw(s).then(()=>Promise.all(BANKS.map(b=>loadRaw(b).catch(()=>0))))}
function loadRaw(s){
 if(D[s])return Promise.resolve();
 return loadP[s]||(loadP[s]=new Promise((res,rej)=>{const e=document.createElement('script');e.src='./learn/'+s+'.js?v='+VER;e.onload=()=>D[s]?res():rej();e.onerror=()=>{loadP[s]=null;rej()};document.head.appendChild(e)}));
}
function topics(s,c){const d=D[s];if(!d)return[];if(s==='current')return d.all||[];const l=(d[c]||[]).concat(EX[s+':'+c]||[]),seen={},o=[];l.forEach(x=>{if(x.id&&HID[s+':'+x.id])return;const ov=x.id&&OVR[s+':'+x.id];const r=(ov&&ov.cl.includes(c))?ov:x;const k=r.id||Math.random();if(k in seen)return;seen[k]=1;o.push(r)});return o}
const tkey=(s,c,t)=>s+'-'+(s==='current'?0:c)+'-'+t.id;
function pq(str){const p=str.split('|');return {q:bi(p[0]),opts:[p[1],p[2],p[3],p[4]].map(bo),ai:0,x:p[5]?bi(p[5]):null,key:p[0]}}
function shufOpts(o){const idx=shuf([0,1,2,3]);return {q:o.q,opts:idx.map(i=>o.opts[i]),ai:idx.indexOf(o.ai),x:o.x||null,key:o.key||o.q.en}}
// ---------- extra generators: return {q,a,w:[3 wrong],x} ----------
const f2=(a,b)=>{const g=gcd(a,b);return g===b?`${a/g}`:`${a/g}/${b/g}`};
const S3=(ans,list)=>[...new Set(list.map(String))].filter(v=>v!==String(ans)).slice(0,3);
const LG={
 cnt:m=>{const n=rnd(2,m);return num(T(`${'🍎'.repeat(n)} ఇవి ఎన్ని?`,`How many? ${'🍎'.repeat(n)}`),n,null)},
 after:m=>{const n=rnd(1,m-1);return num(T(`${n} తరువాత వచ్చే సంఖ్య ఏది?`,`What comes after ${n}?`),n+1,T(`${n} తరువాత ${n+1} వస్తుంది`,`${n+1} comes right after ${n}`))},
 before:m=>{const n=rnd(2,m);return num(T(`${n} కంటే ముందు వచ్చే సంఖ్య ఏది?`,`What comes before ${n}?`),n-1,T(`${n} కంటే ముందు ${n-1}`,`${n-1} comes just before ${n}`))},
 between:m=>{const n=rnd(2,m-1);return num(T(`${n-1} మరియు ${n+1} మధ్య సంఖ్య ఏది?`,`Which number is between ${n-1} and ${n+1}?`),n,null)},
 table:(a,b)=>{const t=rnd(a,b),k=rnd(1,10);return num(`${t} \u00D7 ${k} = ?`,t*k,T(`${t} ని ${k} సార్లు కలిపితే ${t*k}`,`${t} taken ${k} times is ${t*k}`))},
 tens:()=>{const n=rnd(11,99);return num(T(`${n} లో పదుల స్థానంలో అంకె ఏది?`,`In ${n}, which digit is in the tens place?`),Math.floor(n/10),null)},
 hund:()=>{const n=rnd(101,999);return num(T(`${n} లో వందల స్థానంలో అంకె ఏది?`,`In ${n}, which digit is in the hundreds place?`),Math.floor(n/100),null)},
 thou:()=>{const n=rnd(1001,9999);return num(T(`${n} లో వేల స్థానంలో అంకె ఏది?`,`In ${n}, which digit is in the thousands place?`),Math.floor(n/1000),null)},
 expand:()=>{const n=rnd(100,999);const a=Math.floor(n/100)*100,b=Math.floor(n/10)%10*10,c=n%10;return {q:same(`${n} = ${a} + ${b} + ?`),a:String(c),w:near(c,false),x:same(`${n} = ${a} + ${b} + ${c}`)}},
 fadd:()=>{const d=rnd(4,12),a=rnd(1,d-3),b=rnd(1,d-1-a);const s=a+b;const ans=f2(s,d);return {q:same(`${a}/${d} + ${b}/${d} = ?`),a:ans,w:S3(ans,[`${a}/${d}`,`${s}/${d*2}`,`${s+1}/${d}`,`${Math.max(1,s-1)}/${d}`,`${a*b}/${d}`,`${s+2}/${d}`]),x:T(`హారం ఒకటే కాబట్టి లవాలు కలపండి: ${a}+${b}=${s}`,`Same denominator, so add the numerators: ${a}+${b}=${s}`)}},
 fsub:()=>{const d=rnd(5,12),a=rnd(3,d-1),b=rnd(1,a-1);const s=a-b;const ans=f2(s,d);return {q:same(`${a}/${d} ${MI} ${b}/${d} = ?`),a:ans,w:S3(ans,[`${a}/${d}`,`${s}/${d*2}`,`${a+b}/${d}`,`${s+1}/${d}`,`${b}/${d}`,`${s+2}/${d}`]),x:T(`లవాలను తీసివేయండి: ${a}${MI}${b}=${s}`,`Subtract the numerators: ${a}${MI}${b}=${s}`)}},
 fadd2:()=>{const p=pick([[2,3],[2,4],[3,4],[2,5],[3,6],[4,6],[2,6],[3,5]]);const d1=p[0],d2=p[1];const dd=d1*d2/gcd(d1,d2);const n=dd/d1+dd/d2;const ans=f2(n,dd);return {q:same(`1/${d1} + 1/${d2} = ?`),a:ans,w:S3(ans,[`2/${d1+d2}`,`${n+1}/${dd}`,`${n}/${dd+1}`,`${Math.max(1,n-1)}/${dd}`,`${n+2}/${dd}`,`1/${d1+d2}`]),x:T(`హారాలు సమానం చేయండి: క.సా.గు = ${dd}`,`Make the denominators equal: LCM = ${dd}`)}},
 dec_add:()=>{const a=rnd(11,99),b=rnd(11,99);const s=a+b;const d=v=>(v/10).toFixed(1);return {q:same(`${d(a)} + ${d(b)} = ?`),a:d(s),w:S3(d(s),[d(s+1),d(s-1),d(s+10),d(s-10),d(s+5)]),x:same(`${d(a)} + ${d(b)} = ${d(s)}`)}},
 dec_sub:()=>{const a=rnd(51,99),b=rnd(11,50);const s=a-b;const d=v=>(v/10).toFixed(1);return {q:same(`${d(a)} ${MI} ${d(b)} = ?`),a:d(s),w:S3(d(s),[d(s+1),d(s-1),d(s+10),d(s+5),d(s-10)]),x:same(`${d(a)} ${MI} ${d(b)} = ${d(s)}`)}},
 money:()=>{const p=rnd(2,9)*5,q=rnd(1,9)*5,pay=Math.ceil((p+q+1)/50)*50;return num(T(`₹${p} పెన్ను, ₹${q} పుస్తకం కొన్నారు. ₹${pay} ఇస్తే చిల్లర ఎంత?`,`A pen costs ₹${p} and a book ₹${q}. You pay ₹${pay}. How much change?`),pay-p-q,T(`${pay} ${MI} (${p}+${q}) = ${pay-p-q}`,`${pay} ${MI} (${p}+${q}) = ${pay-p-q}`))},
 conv:()=>{const k=pick([['మీటర్లు','metres','సెం.మీ','cm',100],['కి.మీ','km','మీటర్లు','m',1000],['కిలోలు','kg','గ్రాములు','g',1000],['లీటర్లు','litres','మి.లీ','ml',1000]]);const n=rnd(2,9);return num(T(`${n} ${k[0]} = ? ${k[2]}`,`${n} ${k[1]} = ? ${k[3]}`),n*k[4],T(`1 ${k[0]} = ${k[4]} ${k[2]}`,`1 ${k[1]} = ${k[4]} ${k[3]}`))},
 time:()=>{const h=rnd(1,5),m=pick([15,30,45]);return num(T(`${h} గంటల ${m} నిమిషాలు = ? నిమిషాలు`,`${h} hours ${m} minutes = ? minutes`),h*60+m,same(`${h}\u00D760 + ${m}`))},
 comp:()=>{const a=rnd(10,80);const c=pick([[90,'పూరక','complementary'],[180,'సంపూరక','supplementary']]);return num(T(`${a}° కోణానికి ${c[1]} కోణం ఎంత (డిగ్రీలు)?`,`What is the ${c[2]} angle of ${a}° (in degrees)?`),c[0]-a,same(`${c[0]} ${MI} ${a} = ${c[0]-a}`))},
 vert:()=>{const a=rnd(20,150);return num(T(`రెండు రేఖలు ఖండించుకున్నాయి. ఒక కోణం ${a}° అయితే ఎదుటి (శీర్షాభిముఖ) కోణం ఎంత?`,`Two lines cross. One angle is ${a}°. What is the vertically opposite angle?`),a,T('శీర్షాభిముఖ కోణాలు సమానం','Vertically opposite angles are equal'))},
 pl:()=>{const cp=rnd(5,40)*10,pr=pick([10,20,25,50]);return num(T(`కొన్న ధర ₹${cp}, ${pr}% లాభం. అమ్మిన ధర ఎంత?`,`Cost price ₹${cp}, profit ${pr}%. What is the selling price?`),cp+cp*pr/100,same(`${cp} + ${cp*pr/100} = ${cp+cp*pr/100}`))},
 disc:()=>{const mp=pick([200,400,500,800,1000,1200]);const d=pick([10,20,25,50]);return num(T(`ధర ₹${mp}, ${d}% తగ్గింపు. చెల్లించాల్సింది ఎంత?`,`Marked price ₹${mp}, ${d}% discount. How much to pay?`),mp-mp*d/100,same(`${mp} ${MI} ${mp*d/100} = ${mp-mp*d/100}`))},
 ci:()=>{const P=pick([1000,2000,5000]),R=pick([10,20]);const A=Math.round(P*(1+R/100)*(1+R/100));return num(T(`అసలు ₹${P}, రేటు ${R}%, 2 సం.లకు చక్రవడ్డీతో మొత్తం ఎంత?`,`₹${P} at ${R}% compound interest for 2 years: total amount?`),A,same('A = P(1+R/100)\u00B2'))},
 exp:()=>{const a=pick([2,3,5,10]),m=rnd(2,5),n=rnd(2,5);return {q:same(`${a}^${m} \u00D7 ${a}^${n} = ${a}^?`),a:String(m+n),w:near(m+n,false),x:T(`ఒకే ఆధారం కాబట్టి ఘాతాలు కలపండి: ${m}+${n}`,`Same base, so add the powers: ${m}+${n}`)}},
 exp0:()=>{const a=rnd(2,99);return {q:same(`${a}\u2070 = ?`),a:'1',w:['0',String(a),'${a}\u00B2'.replace('${a}',a)],x:T('0 కాని ఏ సంఖ్య శూన్య ఘాతమైనా 1','Any non-zero number to the power 0 is 1')}},
 ident:()=>{const a=rnd(2,9),b=rnd(1,6);return num(`(${a}+${b})\u00B2 = ?`,(a+b)*(a+b),same(`a\u00B2+2ab+b\u00B2 = ${a*a}+${2*a*b}+${b*b}`))},
 cuboid:()=>{const l=rnd(2,9),b=rnd(2,6),h=rnd(2,6);return num(T(`దీర్ఘఘనం ${l}\u00D7${b}\u00D7${h}. ఘనపరిమాణం?`,`Cuboid ${l}\u00D7${b}\u00D7${h}. Volume?`),l*b*h,same('V = l \u00D7 b \u00D7 h'))},
 cuboidS:()=>{const l=rnd(2,9),b=rnd(2,6),h=rnd(2,6);return num(T(`దీర్ఘఘనం ${l}\u00D7${b}\u00D7${h}. సంపూర్ణ తల వైశాల్యం?`,`Cuboid ${l}\u00D7${b}\u00D7${h}. Total surface area?`),2*(l*b+b*h+h*l),same('2(lb + bh + hl)'))},
 sphere:()=>{if(Math.random()<.5){const r=21;return num(T(`గోళం వ్యాసార్థం ${r}. ఘనపరిమాణం? (\u03C0=22/7)`,`Sphere radius ${r}. Volume? (\u03C0=22/7)`),4*22*r*r*r/21,T(`V = 4/3 \u03C0r\u00B3 = 4/3 \u00D7 22/7 \u00D7 ${r}\u00B3 = ${4*22*r*r*r/21}`,`V = 4/3 \u03C0r\u00B3 = 4/3 \u00D7 22/7 \u00D7 ${r}\u00B3 = ${4*22*r*r*r/21}`))}const r=pick([7,14,21]);return num(T(`గోళం వ్యాసార్థం ${r}. ఉపరితల వైశాల్యం? (\u03C0=22/7)`,`Sphere radius ${r}. Surface area? (\u03C0=22/7)`),88*r*r/7,T(`S = 4\u03C0r\u00B2 = 4 \u00D7 22/7 \u00D7 ${r}\u00B2 = ${88*r*r/7}`,`S = 4\u03C0r\u00B2 = 4 \u00D7 22/7 \u00D7 ${r}\u00B2 = ${88*r*r/7}`))},
 cone:()=>{const r=pick([7,14]),h=rnd(1,6)*3;return num(T(`శంకువు వ్యాసార్థం ${r}, ఎత్తు ${h}. ఘనపరిమాణం? (\u03C0=22/7)`,`Cone radius ${r}, height ${h}. Volume? (\u03C0=22/7)`),22*r*r*h/21,same('V = 1/3 \u03C0r\u00B2h'))},
 median:()=>{const a=shuf([rnd(1,9),rnd(10,19),rnd(20,29),rnd(30,39),rnd(40,49)]);const m=[...a].sort((x,y)=>x-y)[2];return num(T(`${a.join(', ')} ల మధ్యగతం (median) ఎంత?`,`Median of ${a.join(', ')}`),m,T('క్రమంలో పెట్టి మధ్య విలువ తీసుకోండి','Arrange in order, take the middle value'))},
 mode:()=>{const m=rnd(2,9);const a=shuf([m,m,m,m+1,m+2,m+3,m+1]);return num(T(`${a.join(', ')} ల బాహుళకం (mode) ఎంత?`,`Mode of ${a.join(', ')}`),m,T('ఎక్కువసార్లు వచ్చే విలువ','The value that appears most often'))},
 midpt:()=>{const x1=rnd(-5,4)*2,y1=rnd(-5,4)*2,x2=rnd(-5,4)*2,y2=rnd(-5,4)*2;const mx=(x1+x2)/2,my=(y1+y2)/2;const a=`(${fmt(mx)}, ${fmt(my)})`;return {q:same(`(${fmt(x1)}, ${fmt(y1)}), (${fmt(x2)}, ${fmt(y2)}) Midpoint?`),a,w:S3(a,[`(${fmt(mx+1)}, ${fmt(my)})`,`(${fmt(mx)}, ${fmt(my+1)})`,`(${fmt(x1+x2)}, ${fmt(y1+y2)})`,`(${fmt(mx+2)}, ${fmt(my-1)})`,`(${fmt(mx-1)}, ${fmt(my+2)})`]),x:same('((x\u2081+x\u2082)/2 , (y\u2081+y\u2082)/2)')}},
 pair:()=>{const x=rnd(1,9),y=rnd(1,9);return num(T(`x + y = ${x+y}, x ${MI} y = ${x-y} అయితే x = ?`,`If x + y = ${x+y} and x ${MI} y = ${x-y}, then x = ?`),x,T(`కలిపితే 2x = ${2*x}`,`Adding both: 2x = ${2*x}`),true)},
 euclid:()=>{const b=rnd(3,9),q=rnd(2,9),r=rnd(1,b-1);const a=b*q+r;return num(T(`${a} ను ${b} తో భాగిస్తే శేషం ఎంత?`,`Remainder when ${a} is divided by ${b}?`),r,same(`${a} = ${b}\u00D7${q} + ${r}`))},
 poly2:()=>{const p=rnd(1,6),q=rnd(1,6);return num(T(`x\u00B2 ${MI} ${p+q}x + ${p*q} శూన్యాల మొత్తం ఎంత?`,`Sum of zeros of x\u00B2 ${MI} ${p+q}x + ${p*q}`),p+q,T('శూన్యాల మొత్తం = \u2212b/a','Sum of zeros = \u2212b/a'))},
 sets:()=>{const a=rnd(8,20),b=rnd(8,20),i=rnd(1,6);return num(T(`n(A)=${a}, n(B)=${b}, n(A\u2229B)=${i}. n(A\u222AB) ఎంత?`,`n(A)=${a}, n(B)=${b}, n(A\u2229B)=${i}. n(A\u222AB)=?`),a+b-i,same('n(A\u222AB) = n(A)+n(B)\u2212n(A\u2229B)'))},
 similar:()=>{const k=rnd(2,5),a=rnd(2,6);return num(T(`రెండు సరూప త్రిభుజాల భుజాల నిష్పత్తి 1:${k}. చిన్నదాని భుజం ${a} అయితే పెద్దదాని సంబంధ భుజం?`,`Two similar triangles have sides in ratio 1:${k}. The small side is ${a}. Matching side of the larger one?`),a*k,null)},
 tang:()=>{const t=pick([[3,4,5],[5,12,13],[8,15,17],[6,8,10]]);return num(T(`వృత్త వ్యాసార్థం ${t[0]}. కేంద్రం నుండి ${t[2]} దూరంలోని బిందువు నుండి స్పర్శరేఖ పొడవు?`,`Circle radius ${t[0]}. A point is ${t[2]} from the centre. Length of the tangent from it?`),t[1],same('t\u00B2 = d\u00B2 \u2212 r\u00B2'))},
 trig3:()=>{const p=pick([[3,4,5],[5,12,13],[8,15,17]]);const ans=`${p[0]}/${p[1]}`;return {q:T(`sin A = ${p[0]}/${p[2]} అయితే tan A = ?`,`If sin A = ${p[0]}/${p[2]}, then tan A = ?`),a:ans,w:[`${p[1]}/${p[0]}`,`${p[1]}/${p[2]}`,`${p[2]}/${p[0]}`],x:T(`ఎదుటి భుజం ${p[0]}, కర్ణం ${p[2]}, ప్రక్క భుజం ${p[1]}. tan = ఎదుటి/ప్రక్క`,`opposite ${p[0]}, hypotenuse ${p[2]}, adjacent ${p[1]}. tan = opposite/adjacent`)}},
 trig4:()=>{const a=rnd(10,80);return {q:same(`sin ${a}\u00B0 = cos ?\u00B0`),a:String(90-a),w:near(90-a,false),x:same('sin \u03B8 = cos (90\u00B0\u2212\u03B8)')}},
 trig5:()=>{const k=pick([[0,'0','1'],[30,'1/2','\u221A3/2'],[45,'1/\u221A2','1/\u221A2'],[60,'\u221A3/2','1/2'],[90,'1','0']]);const f=pick(['sin','cos']);const ans=f==='sin'?k[1]:k[2];const pool=['0','1/2','1/\u221A2','\u221A3/2','1','\u221A3'].filter(v=>v!==ans);return {q:same(`${f} ${k[0]}\u00B0 = ?`),a:ans,w:shuf(pool).slice(0,3),x:null}},
 trig6:()=>{const A=pick([[30,'1/\u221A3'],[45,'1'],[60,'\u221A3']]);const wr=['0','1/2','\u221A3/2','1','\u221A3','1/\u221A3'].filter(v=>v!==A[1]);return {q:same(`tan ${A[0]}\u00B0 = ?`),a:A[1],w:shuf(wr).slice(0,3),x:null}},
 trig7:()=>{const d=pick([10,20,30,50]);const k=pick([[45,`${d}`],[60,`${d}\u221A3`],[30,`${d}/\u221A3`]]);return {q:T(`చెట్టు మొదలు నుండి ${d} మీ. దూరంలో నేలపై నిలబడి చూస్తే శిఖరం ${k[0]}° ఉన్నతి కోణంలో కనిపించింది. చెట్టు ఎత్తు (మీ.)?`,`From ${d} m away from the foot of a tree, its top is seen at an angle of elevation of ${k[0]}°. Height of the tree (m)?`),a:k[1],w:S3(k[1],[`${d}\u221A3`,`${d}/\u221A3`,`${d}`,`${d*2}`,`${d}\u221A2`]),x:same(`h = ${d} \u00D7 tan ${k[0]}\u00B0 = ${k[1]}`)}},
 trigid:()=>pick([{q:same('1 + tan\u00B2\u03B8 = ?'),a:'sec\u00B2\u03B8',w:['cos\u00B2\u03B8','cosec\u00B2\u03B8','tan\u00B2\u03B8'],x:same('1 + tan\u00B2\u03B8 = sec\u00B2\u03B8')},{q:same('sin\u00B2\u03B8 + cos\u00B2\u03B8 = ?'),a:'1',w:['0','2','sin \u03B8'],x:T('ప్రాథమిక త్రికోణమితీయ సర్వసమీకరణం','The basic trigonometric identity')},{q:same('1 + cot\u00B2\u03B8 = ?'),a:'cosec\u00B2\u03B8',w:['sec\u00B2\u03B8','sin\u00B2\u03B8','cot\u00B2\u03B8'],x:same('1 + cot\u00B2\u03B8 = cosec\u00B2\u03B8')},{q:same('tan \u03B8 = ?'),a:'sin \u03B8 / cos \u03B8',w:['cos \u03B8 / sin \u03B8','1 / sin \u03B8','sin \u03B8 \u00D7 cos \u03B8'],x:null}]),
 shapes:()=>{const s=pick([['త్రిభుజం','triangle',3],['చతురస్రం','square',4],['పంచభుజి','pentagon',5],['షడ్భుజి','hexagon',6]]);return num(T(`${s[0]} కు ఎన్ని భుజాలు?`,`How many sides does a ${s[1]} have?`),s[2],null)},
 clock:()=>{const h=rnd(1,12);return num(T(`చిన్న ముల్లు ${h} మీద, పెద్ద ముల్లు 12 మీద ఉంటే సమయం ఎంత గంటలు?`,`The short hand is on ${h} and the long hand on 12. What o'clock is it?`),h,null)}
};
const XP=(()=>{
const N=s=>(s.match(/-?\d+(?:\.\d+)?/g)||[]).map(Number);
const gc=(a,b)=>b?gc(b,a%b):a;
const E=(te,en)=>({te,en});
const F={
cnt:(n,a)=>E(`లెక్కిస్తే ${a} ఉన్నాయి`,`Count them one by one: there are ${a}`),
between:(n,a)=>E(`${n[0]} తరువాత ${a}, ${a} తరువాత ${n[1]}`,`${n[0]}, ${a}, ${n[1]} come one after another`),
shapes:(n,a)=>E(`ఈ ఆకారానికి ${a} భుజాలు`,`This shape has ${a} sides`),
clock:(n,a)=>E(`చిన్న ముల్లు ${a} మీద, పెద్ద ముల్లు 12 మీద ఉంటే ${a} గంటలు`,`Short hand on ${a} and long hand on 12 means ${a} o'clock`),
tens:(n,a)=>E(`కుడివైపు నుండి రెండవ అంకె పదుల స్థానం`,`The second digit from the right is the tens place`),
hund:(n,a)=>E(`కుడివైపు నుండి మూడవ అంకె వందల స్థానం`,`The third digit from the right is the hundreds place`),
thou:(n,a)=>E(`కుడివైపు నుండి నాల్గవ అంకె వేల స్థానం`,`The fourth digit from the right is the thousands place`),
big:(n,a)=>E(`పెద్ద సంఖ్య: పదుల అంకె పెద్దదైతే ఆ సంఖ్య పెద్దది`,`Compare the tens digits first; the larger tens digit wins`),
small:(n,a)=>E(`చిన్న సంఖ్య: పదుల అంకె చిన్నదైతే ఆ సంఖ్య చిన్నది`,`Compare the tens digits first; the smaller tens digit wins`),
even:(n,a)=>E(`సరి సంఖ్య చివరి అంకె 0, 2, 4, 6, 8`,`An even number ends in 0, 2, 4, 6 or 8`),
odd:(n,a)=>E(`బేసి సంఖ్య చివరి అంకె 1, 3, 5, 7, 9`,`An odd number ends in 1, 3, 5, 7 or 9`),
skip:(n,a)=>{const d=n[1]-n[0];return n.length>=3&&n[2]-n[1]===d&&n[2]+d===a?E(`ప్రతిసారీ ${d} కలుపుతాం: ${n[2]} + ${d} = ${a}`,`Add ${d} each time: ${n[2]} + ${d} = ${a}`):null},
round10:(n,a)=>E(`చివరి అంకె 5 లేదా అంతకంటే ఎక్కువైతే పైకి, లేకపోతే కిందికి. ${n[0]} → ${a}`,`Last digit 5 or more rounds up, otherwise down: ${n[0]} → ${a}`),
round100:(n,a)=>E(`చివరి రెండు అంకెలు 50 లేదా ఎక్కువైతే పైకి. ${n[0]} → ${a}`,`Last two digits 50 or more round up, otherwise down: ${n[0]} → ${a}`),
frac:(n,a)=>{const m=(/(\d+)\/(\d+) of (\d+)/.exec(n._s)||[]);return m[3]&&(+m[3])/(+m[2])*(+m[1])===a?E(`${m[3]} ÷ ${m[2]} = ${m[3]/m[2]}, ${m[3]/m[2]} × ${m[1]} = ${a}`,`${m[3]} ÷ ${m[2]} = ${m[3]/m[2]}, then ${m[3]/m[2]} × ${m[1]} = ${a}`):null},
rectP:(n,a)=>n[0]&&2*(n[0]+n[1])===a?E(`చుట్టుకొలత = 2 × (పొడవు + వెడల్పు) = 2 × (${n[0]} + ${n[1]}) = ${a}`,`Perimeter = 2 × (length + width) = 2 × (${n[0]} + ${n[1]}) = ${a}`):null,
rectA:(n,a)=>n[0]*n[1]===a?E(`వైశాల్యం = పొడవు × వెడల్పు = ${n[0]} × ${n[1]} = ${a}`,`Area = length × width = ${n[0]} × ${n[1]} = ${a}`):null,
sqA:(n,a)=>n[0]*n[0]===a?E(`వైశాల్యం = భుజం × భుజం = ${n[0]} × ${n[0]} = ${a}`,`Area = side × side = ${n[0]} × ${n[0]} = ${a}`):null,
hcf:(n,a)=>gc(n[0],n[1])===a?E(`${n[0]}, ${n[1]} లను భాగించే అతి పెద్ద సంఖ్య ${a}`,`The largest number dividing both ${n[0]} and ${n[1]} is ${a}`):null,
lcm:(n,a)=>n[0]*n[1]/gc(n[0],n[1])===a?E(`క.సా.గు = (${n[0]} × ${n[1]}) ÷ గ.సా.భా ${gc(n[0],n[1])} = ${a}`,`LCM = (${n[0]} × ${n[1]}) ÷ HCF ${gc(n[0],n[1])} = ${a}`):null,
pct:(n,a)=>n[0]*n[1]/100===a?E(`${n[0]}% × ${n[1]} = ${n[0]}/100 × ${n[1]} = ${a}`,`${n[0]}% of ${n[1]} = ${n[0]}/100 × ${n[1]} = ${a}`):null,
triA:(n,a)=>n[0]*n[1]/2===a?E(`వైశాల్యం = ½ × భూమి × ఎత్తు = ½ × ${n[0]} × ${n[1]} = ${a}`,`Area = ½ × base × height = ½ × ${n[0]} × ${n[1]} = ${a}`):null,
ratio:(n,a)=>{const g=gc(n[0],n[1]);return `${n[0]/g} : ${n[1]/g}`===a?E(`ఇద్దరినీ ${g} తో భాగిస్తే ${a}`,`Divide both by ${g} to get ${a}`):null},
angle3:(n,a)=>180-n[0]-n[1]===a?E(`త్రిభుజ కోణాల మొత్తం 180°. 180 − ${n[0]} − ${n[1]} = ${a}`,`Angles of a triangle add to 180°. 180 − ${n[0]} − ${n[1]} = ${a}`):null,
si:(n,a)=>n[0]*n[1]*n[2]/100===a?E(`SI = P × R × T ÷ 100 = ${n[0]} × ${n[1]} × ${n[2]} ÷ 100 = ${a}`,`SI = P × R × T ÷ 100 = ${n[0]} × ${n[1]} × ${n[2]} ÷ 100 = ${a}`):null,
circA:(n,a)=>22*n[0]*n[0]/7===a?E(`వైశాల్యం = πr² = 22/7 × ${n[0]} × ${n[0]} = ${a}`,`Area = πr² = 22/7 × ${n[0]} × ${n[0]} = ${a}`):null,
circC:(n,a)=>2*22*n[0]/7===a?E(`చుట్టుకొలత = 2πr = 2 × 22/7 × ${n[0]} = ${a}`,`Circumference = 2πr = 2 × 22/7 × ${n[0]} = ${a}`):null,
sqdiff:(n,a)=>n[0]*n[0]-n[1]*n[1]===a?E(`${n[0]}² = ${n[0]*n[0]}, ${n[1]}² = ${n[1]*n[1]}; ${n[0]*n[0]} − ${n[1]*n[1]} = ${a}`,`${n[0]}² = ${n[0]*n[0]} and ${n[1]}² = ${n[1]*n[1]}, so the difference is ${a}`):null,
cyl:(n,a)=>22*n[0]*n[0]*n[1]/7===a?E(`ఘనపరిమాణం = πr²h = 22/7 × ${n[0]}² × ${n[1]} = ${a}`,`Volume = πr²h = 22/7 × ${n[0]}² × ${n[1]} = ${a}`):null,
zero:(n,a)=>E(`బహుపది = 0 అని వ్రాసి x కోసం సాధించండి: x = ${a}`,`Put the polynomial equal to 0 and solve: x = ${a}`),
dist:(n,a)=>{const p=n,dx=p[2]-p[0],dy=p[3]-p[1];return Math.sqrt(dx*dx+dy*dy)===a?E(`దూరం = √[(${p[2]}−${p[0]})² + (${p[3]}−${p[1]})²] = √(${dx*dx}+${dy*dy}) = ${a}`,`Distance = √[(${p[2]}−${p[0]})² + (${p[3]}−${p[1]})²] = √(${dx*dx}+${dy*dy}) = ${a}`):null},
pyth:(n,a)=>Math.sqrt(n[0]*n[0]+n[1]*n[1])===a?E(`కర్ణం² = ${n[0]}² + ${n[1]}² = ${n[0]*n[0]+n[1]*n[1]}, కర్ణం = ${a}`,`Hypotenuse² = ${n[0]}² + ${n[1]}² = ${n[0]*n[0]+n[1]*n[1]}, so it is ${a}`):null,
poly:(n,a)=>(n[0]-2)*180===a?E(`మొత్తం = (భుజాలు − 2) × 180° = (${n[0]} − 2) × 180 = ${a}`,`Sum = (sides − 2) × 180° = (${n[0]} − 2) × 180 = ${a}`):null,
mean:(n,a)=>{const s=n.reduce((x,y)=>x+y,0);return s/n.length===a?E(`సగటు = మొత్తం ÷ సంఖ్యల సంఖ్య = ${s} ÷ ${n.length} = ${a}`,`Mean = sum ÷ count = ${s} ÷ ${n.length} = ${a}`):null},
apsum:(n,a)=>n[0]*(n[0]+1)/2===a?E(`మొత్తం = n(n+1)/2 = ${n[0]} × ${n[0]+1} ÷ 2 = ${a}`,`Sum = n(n+1)/2 = ${n[0]} × ${n[0]+1} ÷ 2 = ${a}`):null,
similar:(n,a)=>{const m=/ratio (\d+):(\d+)/.exec(n._s);return m&&n[n.length-1]*(+m[2])/(+m[1])===a?E(`భుజాల నిష్పత్తి ${m[1]}:${m[2]}. ${n[n.length-1]} × ${m[2]} ÷ ${m[1]} = ${a}`,`Sides are in ratio ${m[1]}:${m[2]}. ${n[n.length-1]} × ${m[2]} ÷ ${m[1]} = ${a}`):null},
prob:(n,a)=>{const g=gc(n[0],n[0]+n[1]);return `${n[0]/g}/${(n[0]+n[1])/g}`===a||`${n[0]}/${n[0]+n[1]}`===a?E(`సంభావ్యత = అనుకూల ÷ మొత్తం = ${n[0]} ÷ ${n[0]+n[1]} = ${a}`,`Probability = favourable ÷ total = ${n[0]} ÷ ${n[0]+n[1]} = ${a}`):null},

eq1:(n,a,en)=>{const m=/(\d+)x\s*([+−-])\s*(\d+)\s*=\s*([−-]?\d+)/.exec(en);if(!m)return null;const A=+m[1],B=(m[2]==='+'?1:-1)*+m[3],C=+m[4].replace('−','-');if((C-B)/A!==a)return null;const op=B>=0?`${C} − ${B}`:`${C} + ${-B}`;return E(`ముందు స్థిర సంఖ్యను అటు తీసుకెళ్ళండి: ${A}x = ${op} = ${C-B}. ఇప్పుడు x = ${C-B} ÷ ${A} = ${a}`,`Move the constant across: ${A}x = ${op} = ${C-B}. Then x = ${C-B} ÷ ${A} = ${a}`)},
quad:(n,a,en)=>{const m=/x²\s*([−-])\s*(\d+)x\s*\+\s*(\d+)/.exec(en);if(!m)return null;const b=+m[2],c=+m[3];for(let p=1;p<=b;p++){const q=b-p;if(p*q===c&&Math.max(p,q)===a){const lo=Math.min(p,q);return E(`(x − ${lo})(x − ${a}) = 0 కాబట్టి x = ${lo} లేదా ${a}. పెద్ద మూలం = ${a}`,`(x − ${lo})(x − ${a}) = 0, so x = ${lo} or ${a}. The larger root is ${a}`)}}return null},
polyv:(n,a,en)=>{const m=/(\d+)x²\s*\+\s*(\d+)x\s*\+\s*(\d+) when x = (\d+)/.exec(en);if(!m)return null;const[A,B,C,X]=m.slice(1).map(Number);if(A*X*X+B*X+C!==a)return null;return E(`x = ${X} పెడితే ${A}×${X*X} + ${B}×${X} + ${C} = ${A*X*X} + ${B*X} + ${C} = ${a}`,`Put x = ${X}: ${A}×${X*X} + ${B}×${X} + ${C} = ${A*X*X} + ${B*X} + ${C} = ${a}`)},
ap:(n,a,en)=>{const m=/^(\d+), (\d+), (\d+), \.\.\..*?(\d+)(?:st|nd|rd|th) term/.exec(en);if(!m)return null;const[f,s,t,k]=m.slice(1).map(Number),d=s-f;if(t-s!==d||f+(k-1)*d!==a)return null;return E(`d = ${s} − ${f} = ${d}. ${k}వ పదం = a + (n−1)d = ${f} + ${k-1}×${d} = ${a}`,`d = ${s} − ${f} = ${d}. ${k}th term = a + (n−1)d = ${f} + ${k-1}×${d} = ${a}`)},
trig5:(n,a,en)=>{const m=/(sin|cos|tan) (\d+)°/.exec(en);if(!m)return null;const T_={sin:{0:'0',30:'1/2',45:'1/√2',60:'√3/2',90:'1'},cos:{0:'1',30:'√3/2',45:'1/√2',60:'1/2',90:'0'},tan:{0:'0',30:'1/√3',45:'1',60:'√3',90:'undefined'}};const v=T_[m[1]][m[2]];return String(v)===String(a)?E(`ప్రామాణిక విలువల పట్టిక ప్రకారం ${m[1]} ${m[2]}° = ${a}`,`From the standard values table, ${m[1]} ${m[2]}° = ${a}`):null},
trigid:(n,a)=>E(`నిర్వచనం: tan θ = sin θ ÷ cos θ`,`Identity: tan θ = sin θ ÷ cos θ`),
};
F.trig6=F.trig5;F.eq2=F.eq1;
return(name,o,en,a)=>{const f=F[name];if(!f)return null;const n=N(en);n._s=en;const av=(typeof a==='string'&&/^[−-]?\d+(\.\d+)?$/.test(a))?+a.replace('−','-'):a;try{return f(n,av,en)}catch(e){return null}};
})();


const XO=(()=>{const E=(te,en)=>({te,en});const g=(a,b)=>b?g(b,a%b):a;const nn=s=>(s.match(/-?\d+(?:\.\d+)?/g)||[]).map(Number);const U=s=>s.replace(/\u2212/g,'-');
const F={
sq:(en,a)=>{const n=nn(en)[0];return n*n===+a?E(`${n}² = ${n} × ${n} = ${a}`,`${n}² = ${n} × ${n} = ${a}`):null},
cube:(en,a)=>{const n=nn(en)[0];return n*n*n===+a?E(`${n}³ = ${n} × ${n} × ${n} = ${n*n} × ${n} = ${a}`,`${n}³ = ${n} × ${n} × ${n} = ${n*n} × ${n} = ${a}`):null},
sqrt:(en,a)=>{const n=nn(en)[0];return a*a===n?E(`${a} × ${a} = ${n}, కాబట్టి √${n} = ${a}`,`${a} × ${a} = ${n}, so √${n} = ${a}`):null},
cbrt:(en,a)=>{const n=nn(en)[0];return a*a*a===n?E(`${a} × ${a} × ${a} = ${n}, కాబట్టి ∛${n} = ${a}`,`${a} × ${a} × ${a} = ${n}, so ∛${n} = ${a}`):null},
pow:(en,a)=>{const m=/(\d+)\^(\d+)/.exec(en);if(!m)return null;const b=+m[1],e=+m[2];return Math.pow(b,e)===+a?E(`${b} ను ${e} సార్లు గుణించండి: ${Array(e).fill(b).join(' × ')} = ${a}`,`Multiply ${b} by itself ${e} times: ${Array(e).fill(b).join(' × ')} = ${a}`):null},
time:(en,a)=>{const n=nn(en);return n[0]*60+n[1]===+a?E(`${n[0]} × 60 = ${n[0]*60}, ${n[0]*60} + ${n[1]} = ${a}`,`${n[0]} × 60 = ${n[0]*60}, then ${n[0]*60} + ${n[1]} = ${a}`):null},
fadd2:(en,a)=>{const n=nn(en);const d1=n[1],d2=n[3];const l=d1*d2/g(d1,d2);const nu=l/d1+l/d2;return `${nu/g(nu,l)}/${l/g(nu,l)}`===a||(g(nu,l)===1&&`${nu}/${l}`===a)?E(`క.సా.గు = ${l}. 1/${d1} = ${l/d1}/${l}, 1/${d2} = ${l/d2}/${l}. కలిపితే ${nu}/${l}${nu/g(nu,l)!==nu?' = '+a:''}`,`LCM = ${l}. 1/${d1} = ${l/d1}/${l} and 1/${d2} = ${l/d2}/${l}. Add: ${nu}/${l}${nu/g(nu,l)!==nu?' = '+a:''}`):null},
ci:(en,a)=>{const m=/₹(\d+).*?(\d+)%/.exec(en);if(!m)return null;const P=+m[1],R=+m[2];const y1=P*(1+R/100);const y2=y1*(1+R/100);return Math.round(y2)===+a?E(`ఒక సంవత్సరం తరువాత ${P} × ${1+R/100} = ${y1}. రెండో సంవత్సరం ${y1} × ${1+R/100} = ${a}`,`After year 1: ${P} × ${1+R/100} = ${y1}. After year 2: ${y1} × ${1+R/100} = ${a}`):null},
cuboid:(en,a)=>{const n=nn(en.replace(/×/g,' '));return n[0]*n[1]*n[2]===+a?E(`ఘనపరిమాణం = l × b × h = ${n[0]} × ${n[1]} × ${n[2]} = ${a}`,`Volume = l × b × h = ${n[0]} × ${n[1]} × ${n[2]} = ${a}`):null},
cuboidS:(en,a)=>{const n=nn(en.replace(/×/g,' '));const[l,b,h]=n;return 2*(l*b+b*h+h*l)===+a?E(`2(lb + bh + hl) = 2(${l*b} + ${b*h} + ${h*l}) = 2 × ${l*b+b*h+h*l} = ${a}`,`2(lb + bh + hl) = 2(${l*b} + ${b*h} + ${h*l}) = 2 × ${l*b+b*h+h*l} = ${a}`):null},
cone:(en,a)=>{const n=nn(en);const r=n[0],h=n[1];return 22*r*r*h/21===+a?E(`V = ⅓πr²h = ⅓ × 22/7 × ${r}² × ${h} = ${a}`,`V = ⅓πr²h = ⅓ × 22/7 × ${r}² × ${h} = ${a}`):null},
median:(en,a)=>{const n=nn(en).sort((x,y)=>x-y);return n[2]===+a?E(`క్రమంలో: ${n.join(', ')}. మధ్య విలువ ${a}`,`In order: ${n.join(', ')}. The middle value is ${a}`):null},
mode:(en,a)=>{const n=nn(en);const c=n.filter(v=>v===+a).length;return c>=2?E(`${a} ${c} సార్లు వచ్చింది, అందరికంటే ఎక్కువ`,`${a} appears ${c} times, more than any other value`):null},
midpt:(en,a)=>{const n=nn(U(en));const[x1,y1,x2,y2]=n;const f=v=>String(v).replace('-','\u2212');return `(${f((x1+x2)/2)}, ${f((y1+y2)/2)})`===a?(()=>{const q=v=>v<0?'('+v+')':v;const t=`((${q(x1)}+${q(x2)})/2, (${q(y1)}+${q(y2)})/2) = ${a}`;return E(t,t)})():null},
pair:(en,a)=>{const n=nn(U(en));const s=n[0],d=n[1];return (s+d)/2===+a?E(`సమీకరణాలు కలిపితే 2x = ${s} + ${d < 0 ? '('+d+')' : d} = ${s+d}, కాబట్టి x = ${a}`,`Add both equations: 2x = ${s} + ${d < 0 ? '('+d+')' : d} = ${s+d}, so x = ${a}`):null},
poly2:(en,a)=>{const m=/x²\s*[−-]\s*(\d+)x/.exec(en);return m&&+m[1]===+a?E(`శూన్యాల మొత్తం = −b/a = −(−${a})/1 = ${a}`,`Sum of zeros = −b/a = −(−${a})/1 = ${a}`):null},
sets:(en,a)=>{const n=nn(en.replace(/n\(A∩B\)|n\(A∪B\)|n\(A\)|n\(B\)/g,m=>m.replace(/[^∩∪AB]/g,'#')));const m=/n\(A\)=(\d+), n\(B\)=(\d+), n\(A∩B\)=(\d+)/.exec(en);if(!m)return null;const[A,B,I]=m.slice(1).map(Number);return A+B-I===+a?E(`n(A∪B) = n(A) + n(B) − n(A∩B) = ${A} + ${B} − ${I} = ${a}`,`n(A∪B) = n(A) + n(B) − n(A∩B) = ${A} + ${B} − ${I} = ${a}`):null},
tang:(en,a)=>{const n=nn(en);const r=n[0],d=n[1];return Math.sqrt(d*d-r*r)===+a?E(`t² = d² − r² = ${d}² − ${r}² = ${d*d} − ${r*r} = ${d*d-r*r}, కాబట్టి t = ${a}`,`t² = d² − r² = ${d}² − ${r}² = ${d*d} − ${r*r} = ${d*d-r*r}, so t = ${a}`):null},
trig:(en,a)=>{const m=/^(sin|cos|tan) (\d+)°/.exec(en);if(!m)return null;const T={'sin 0':'0','sin 30':'1/2','sin 45':'1/√2','sin 60':'√3/2','sin 90':'1','cos 0':'1','cos 30':'√3/2','cos 45':'1/√2','cos 60':'1/2','cos 90':'0','tan 0':'0','tan 30':'1/√3','tan 45':'1','tan 60':'√3','tan 90':'నిర్వచించబడదు'};const k=m[1]+' '+m[2];if(T[k]!==a)return null;const e=m[1]==='tan'?(m[2]==='45'?' (sin45 ÷ cos45 = 1)':' (sin ÷ cos)'):'';return E(`ప్రామాణిక విలువల పట్టిక ప్రకారం ${m[1]} ${m[2]}° = ${a}${e}`,`From the standard values table, ${m[1]} ${m[2]}° = ${a}${e}`)},
disc:(en,a)=>{const m=/of (-?\d+)x² ([+−-]) (\d+)x ([+−-]) (\d+)/.exec(en);if(!m)return null;const A=+m[1],B=(m[2]==='+'?1:-1)*+m[3],C=(m[4]==='+'?1:-1)*+m[5];if(B*B-4*A*C!==+String(a).replace(/\u2212/,"-"))return null;return E(`b² − 4ac = (${B})² − 4(${A})(${C}) = ${B*B} − ${4*A*C} = ${a}`,`b² − 4ac = (${B})² − 4(${A})(${C}) = ${B*B} − ${4*A*C} = ${a}`)},
speed:(en,a)=>{const m=/Speed (\d+) km\/h for (\d+) hours/.exec(en);if(!m||m[1]*m[2]!==+a)return null;return E(`దూరం = వేగం × కాలం = ${m[1]} × ${m[2]} = ${a} కి.మీ`,`Distance = speed × time = ${m[1]} × ${m[2]} = ${a} km`)},
trig3:(en,a)=>{const m=/(\d+)\/(\d+)/.exec(en);if(!m)return null;const o=+m[1],h=+m[2],ad=Math.round(Math.sqrt(h*h-o*o));return `${o}/${ad}`===a?E(`ఎదుటి భుజం ${o}, కర్ణం ${h}. ప్రక్క భుజం² = ${h}² − ${o}² = ${ad*ad}, ప్రక్క భుజం = ${ad}. tan A = ${o}/${ad}`,`Opposite ${o}, hypotenuse ${h}. Adjacent² = ${h}² − ${o}² = ${ad*ad}, so adjacent = ${ad}. tan A = ${o}/${ad}`):null},
trig4:(en,a)=>{const n=nn(en)[0];return 90-n===+a?E(`sin θ = cos(90° − θ) కాబట్టి 90 − ${n} = ${a}`,`sin θ = cos(90° − θ), so 90 − ${n} = ${a}`):null},
};return(name,en,a)=>{const f=F[name];if(!f)return null;try{return f(en,a)}catch(e){return null}}})();

window.LD._t=()=>({D,fromSpec,EX});
window.LD.why=(nm,o)=>{try{const q=typeof o.q==='string'?same(o.q):o.q;let x=null;if(o.x&&typeof o.x==='object')x=o.x;else if(typeof o.x==='string')x=same(o.x.indexOf('=')>=0?o.x:o.x+' = '+o.a);const y=XO(nm,q.en,String(o.a));if(y)x=y;if(!x)x=XP(nm,o,q.en,String(o.a));return x}catch(e){return null}};
function fromSpec(sp){
 const parts=sp.split(':');const nm_=parts[0];const args=(parts[1]||'').split(',').filter(z=>z!=='').map(Number);
 const fn=LG[nm_]||GN[nm_];if(!fn)throw new Error('no generator '+nm_);
 for(let k=0;k<15;k++){
  const o=fn(...args);const q=typeof o.q==='string'?same(o.q):o.q;
  const opts=[...new Set([o.a,...o.w].map(String))];if(opts.length<4||String(o.a)!==opts[0])continue;
  const four=shuf([opts[0],...shuf(opts.slice(1)).slice(0,3)]);
  let x=null;if(o.x&&typeof o.x==='object')x=o.x;else if(typeof o.x==='string')x=same(o.x.indexOf('=')>=0?o.x:o.x+' = '+o.a);{const y=XO(nm_,q.en,String(o.a));if(y)x=y}if(!x)x=XP(nm_,o,q.en,String(o.a));
  return {q,opts:four.map(v=>T(v,v)),ai:four.indexOf(String(o.a)),x,key:q.en};
 }
 throw new Error('bad options '+sp);
}
function round(s,c,t,n){
 const out=[];const st=shuf((t.q||[]).map(pq));
 if(t.g&&t.g.length){out.push(...st.slice(0,Math.min(3,st.length)));let tr=0;while(out.length<n&&tr++<300){const o=fromSpec(pick(t.g));if(!out.some(z=>z.q.en===o.q.en))out.push(o)}}
 else out.push(...st.slice(0,n));
 return shuf(out.map(shufOpts));
}
function testRound(s,c,n){const ts=topics(s,c);const pool=[];ts.forEach(t=>pool.push(...round(s,c,t,Math.ceil(n/Math.max(1,ts.length))+2)));return shuf(pool).slice(0,n)}
// ---------- styles ----------
const css=document.createElement('style');css.textContent=`
.lrn{background:radial-gradient(ellipse at 10% 0,#263676 0,transparent 52%),radial-gradient(ellipse at 95% 48%,#402969 0,transparent 55%),#10152d;color:#f1f4ff}
.lr-scroll{flex:1;overflow-y:auto;padding:10px 14px calc(18px + env(safe-area-inset-bottom,0));-webkit-overflow-scrolling:touch;user-select:text;-webkit-user-select:text}
.lr-top{display:flex;align-items:center;gap:8px;margin-bottom:8px}.lr-top h1{flex:1;margin:0;font-size:19px;text-align:center;line-height:1.25;color:#f4f5ff;text-shadow:0 0 18px #73d9ff55}
.gk-tabs{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;margin:10px 0 4px}.gk-tab{min-height:44px;border-radius:14px;border:1px solid #fff6;color:#fff;font-weight:800;font-size:12px;padding:4px 2px;background:linear-gradient(135deg,#2b3a78,#3d2b78);text-shadow:0 1px 2px #0008}.gk-tab:nth-child(2){background:linear-gradient(135deg,#ff6d00,#ff1744)}.gk-tab:nth-child(3){background:linear-gradient(135deg,#ff9100,#1b9e4b)}.gk-tab:nth-child(4){background:linear-gradient(135deg,#00b0ff,#7c4dff)}.gk-tab:nth-child(1){background:linear-gradient(135deg,#7c4dff,#d500f9)}.gk-tab.on{outline:2px solid #fff;box-shadow:0 0 14px #fff8}.lr-ib{background:#202b50;border:1px solid #7ab9ff55;color:#f6f8ff;border-radius:12px;min-width:42px;height:42px;font-size:18px;font-weight:800;padding:0 10px}#rd{background:linear-gradient(120deg,#00e5ff,#7c4dff,#ff4df0,#00e5ff);background-size:250% 100%;border:1px solid #fff8;color:#fff;text-shadow:0 1px 3px #0009;padding:0 16px;box-shadow:0 0 14px #7c4dffaa,0 3px 0 #070b1c;animation:spdBg 6s linear infinite}.lr-ib:not(#rd):active,#rd:active{transform:scale(.96)}
.lr-sub{text-align:center;color:#bcd2ff;font-size:13px;margin:0 0 8px}
.lr-h{margin:12px 0 6px;color:#8bebf6;font-size:13px;letter-spacing:1px;font-weight:800}
.lr-chips{display:grid;grid-template-columns:repeat(5,1fr);gap:7px}.lr-chip{height:46px;border-radius:12px;background:#202b50;color:#f6f8ff;font-size:19px;font-weight:800;border:1px solid #7ab9ff55;box-shadow:0 3px 0 #070b1c;position:relative}.lr-chip.on{background:linear-gradient(135deg,#35cbe0,#6773f4);color:#08132b}.lr-chip small{position:absolute;right:4px;bottom:1px;font-size:9px;font-weight:700}
.lr-subs{display:grid;grid-template-columns:1fr 1fr;gap:9px}.lr-sc{background:#202b50;border:1px solid #7ab9ff55;border-top:4px solid var(--c);border-radius:16px;padding:10px 8px;text-align:center;font-weight:800;font-size:15px;min-height:88px;display:flex;flex-direction:column;align-items:center;gap:3px;box-shadow:0 3px 0 #070b1c;color:#f6f8ff}.lr-sc span{font-size:28px}.lr-sc small{font-size:11px;font-weight:600;color:#bcd2ff}
.lr-bar{height:6px;background:#394567;border-radius:6px;overflow:hidden;width:100%;margin-top:4px}.lr-bar i{display:block;height:100%;background:linear-gradient(90deg,#56d6cf,#ad8aff)}
.dg-cap{font-size:12px;color:#cfe3ff;text-align:center;margin:4px 0}
.lr-card{background:#1d2545;border:1px solid #a599ff55;border-radius:16px;padding:12px 14px;margin:8px 0;text-align:left;line-height:1.6;font-size:15px}
.lr-card h3{margin:8px 0 4px;font-size:15px;color:#ffe192}.lr-card p{margin:4px 0}.lr-card .ex{background:#12193a;border-left:3px solid #56d6cf;padding:6px 10px;border-radius:8px;margin:6px 0;font-weight:700}
.lr-card.hl{border-color:#56d6cf88}
.lr-row{display:flex;align-items:center;gap:10px;width:100%;background:#202b50;border:1px solid #7ab9ff55;border-radius:14px;padding:10px 12px;margin:7px 0;text-align:left;color:#f6f8ff;box-shadow:0 3px 0 #070b1c}.lr-row .ic{font-size:26px;flex:none;width:34px;text-align:center}.lr-row .tx{flex:1;font-weight:800;font-size:15px;line-height:1.3}.lr-row .tx small{display:block;font-weight:500;color:#bcd2ff;font-size:12px}.lr-row .st{flex:none;font-size:12px;letter-spacing:1px;text-align:right}
.lr-go{display:block;width:100%;min-height:52px;border-radius:26px;margin:12px 0 4px;background:linear-gradient(110deg,#6c64ed,#b652d5,#ef7190);color:#fff;font-size:19px;font-weight:900;box-shadow:0 4px 0 #33245f}.lr-go.alt{background:linear-gradient(110deg,#25577b,#20747b);box-shadow:0 4px 0 #102c46;font-size:16px;min-height:46px}.lr-go:active{transform:translateY(3px)}
.lr-q{position:relative;background:#f5f7ff;color:#162955;border-radius:18px;padding:14px 50px 14px 14px;margin:8px 0;font-weight:900;font-size:19px;line-height:1.4;border:1px solid #9ecbff;box-shadow:0 3px 16px #67c8ff22;overflow-wrap:anywhere;min-height:70px;display:flex;align-items:center}.lr-q .sp{position:absolute;right:8px;top:8px;background:#162955;color:#fff;border-radius:50%;width:36px;height:36px;font-size:16px}
.lr-opts{display:grid;gap:9px}.lr-o{display:flex;align-items:center;gap:10px;text-align:left;background:#202b50;color:#f6f8ff;border:2px solid #7ab9ff66;border-radius:14px;padding:12px;min-height:54px;font-size:17px;font-weight:700;box-shadow:0 3px 0 #070b1c;overflow-wrap:anywhere}.lr-o b{flex:none;width:28px;height:28px;border-radius:50%;background:#394567;display:flex;align-items:center;justify-content:center;font-size:14px}
.lr-o.right{border-color:#00ff6a;background:#06210f;box-shadow:0 0 16px #00ff6aaa,inset 0 0 12px #00ff6a44}.lr-o.right b{background:#00ff6a;color:#04210f}.lr-o.wrongp{border-color:#ff3b3b;background:#240606;box-shadow:0 0 16px #ff0000aa,inset 0 0 12px #ff000044}.lr-o.wrongp b{background:#ff3b3b;color:#fff}.lr-o.dim{opacity:.45}
.lr-fb{margin-top:12px;border-radius:16px;padding:10px 14px;text-align:center;line-height:1.5;animation:fbin .28s ease-out}.lr-fb.ok{background:#031a0e;border:2px solid #00ff6a;box-shadow:0 0 18px #00ff6acc,inset 0 0 14px #00ff6a44}.lr-fb.bad{background:#1c0303;border:2px solid #ff3b3b;box-shadow:0 0 18px #ff0000cc,inset 0 0 14px #ff000055}
.lr-fb .hd{font-size:20px;font-weight:900}.lr-fb.ok .hd{color:#39ff88;text-shadow:0 0 8px #00ff6a}.lr-fb.bad .hd{color:#ff6b6b;text-shadow:0 0 8px #ff0000}.lr-fb p{margin:4px 0;font-size:15px}.lr-fb .why{background:#ffffff14;border-radius:10px;padding:6px 10px;text-align:left}
.lr-next{display:block;width:100%;min-height:48px;margin-top:10px;border-radius:14px;font-size:17px;font-weight:900;background:linear-gradient(135deg,#06210f,#0a1a2e);border:2px solid #00ff6a;color:#eafff3;text-shadow:0 0 8px #00ff6a;box-shadow:0 0 14px #00ff6aaa}.lr-fb.bad .lr-next{border-color:#ff3b3b;text-shadow:0 0 8px #ff3b3b;background:linear-gradient(135deg,#240606,#10122a);box-shadow:0 0 14px #ff0000aa}
.lr-big{font-size:64px;text-align:center;margin:6px 0}.lr-stars{font-size:34px;text-align:center;letter-spacing:6px}.lr-pct{text-align:center;font-size:44px;font-weight:900;color:#ffe192}
.lr-mis{list-style:none;padding:0;margin:0}.lr-mis li{padding:8px 0;border-top:1px solid #ffffff22;font-size:14px;line-height:1.4}.lr-mis b{color:#39ff88}
.lrn .lr-scroll{zoom:.9}.lr-fb .why{font-size:12.5px;opacity:0;animation:whyin .45s ease .7s forwards;margin:6px 0 2px;color:#cfe3ff}@keyframes whyin{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:none}}@media (prefers-reduced-motion:reduce){.lr-fb .why{animation-delay:0s}}
.lr-sc{background:linear-gradient(155deg,color-mix(in srgb,var(--c) 34%,#1c2550) 0,#172043 62%,#121936 100%);border-color:color-mix(in srgb,var(--c) 55%,#7ab9ff44);box-shadow:0 0 16px color-mix(in srgb,var(--c) 38%,transparent),0 3px 0 #070b1c;position:relative;overflow:hidden}
.lr-sc::after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 85% 8%,color-mix(in srgb,var(--c) 45%,transparent),transparent 55%);pointer-events:none}
.lr-sc span{filter:drop-shadow(0 0 8px var(--c))}
.lr-row{background:linear-gradient(100deg,color-mix(in srgb,var(--c,#7ab9ff) 22%,#1d2650) 0,#1a2248 55%);border-left:4px solid var(--c,#7ab9ff);box-shadow:0 0 12px color-mix(in srgb,var(--c,#7ab9ff) 25%,transparent)}
.lr-chip.on{box-shadow:0 0 16px #38d9f8aa}
.lr-top h1{background:linear-gradient(90deg,#8bebf6,#c3a6ff,#ff9bd2);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.lr-h{background:linear-gradient(90deg,#8bebf6,#b9a6ff);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent}
.lr-bar i{background:linear-gradient(90deg,#00ff9d,#38d9f8,#b46bff)!important}
.lr-o:not(.right):not(.wrongp){background:linear-gradient(100deg,#222d5c,#1b2349)}.lr-o:not(.right):not(.wrongp):nth-child(1) b{background:#ff5d8f}.lr-o:not(.right):not(.wrongp):nth-child(2) b{background:#38d9f8}.lr-o:not(.right):not(.wrongp):nth-child(3) b{background:#ffd34d}.lr-o:not(.right):not(.wrongp):nth-child(4) b{background:#a77bff}
.lrn{background:radial-gradient(ellipse at 8% 0,#2f4bb0aa 0,transparent 50%),radial-gradient(ellipse at 100% 40%,#6a2fa0aa 0,transparent 55%),radial-gradient(ellipse at 20% 100%,#0e6a7a88 0,transparent 50%),#0e1330!important}
.lr-go{box-shadow:0 0 20px #b46bff88,0 4px 0 #2a1650}
.lr-search{width:100%;box-sizing:border-box;margin:8px 0;padding:12px 14px;border-radius:14px;border:1.5px solid #4a5aa8;background:#0f1633;color:#fff;font-size:16px;outline:none}.lr-search:focus{border-color:#7ab9ff;box-shadow:0 0 14px #3b82f655}
.lr-note{font-size:12px;color:#9fb5e6;text-align:center;margin:10px 0}
.learn-cta{margin:10px 0 2px!important}
`;document.head.appendChild(css);
// ---------- helpers ----------
const stars=n=>'⭐'.repeat(n)+'☆'.repeat(3-n);
function md(s){return esc(s).replace(/\*\*(.+?)\*\*/g,'<b>$1</b>')}
function shell(h){root.innerHTML=`<div class="game lrn"><div class="lr-scroll" id="lrs">${h}</div></div>`}
function topBar(title,back){return `<div class="lr-top">${back===false?'':'<button class="lr-ib" id="lb" aria-label="Back">\u2039</button>'}<h1>${title}</h1><button class="lr-ib" id="ll" aria-label="Language">🌐</button></div>`}
function wireTop(){const b=$('#lb');if(b)b.onclick=()=>{SFX.tap();history.back()};const l=$('#ll');if(l)l.onclick=()=>{S.lang=S.lang==='te'?'en':'te';save();document.documentElement.lang=S.lang;SFX.tap();render(V)}}
function nav(v){V=Object.assign({},v);try{history.pushState({svLearn:V},'',location.href)}catch(e){}render(V)}
const stat=(s,c,t)=>LP.t[tkey(s,c,t)]||{best:0,stars:0,att:0};
function clsOf(s,t){if(t.cl)return t.cl;const r=[];if(t.id&&s!=='current')for(let c=1;c<=10;c++)if(topics(s,c).some(x=>x.id===t.id))r.push(c);return r}
const clsTag=(s,t,c)=>{const l=clsOf(s,t);return l.length>1?' · '+(t.cl?word('సూచించిన తరగతులు','Suggested classes'):word('తరగతులు','Classes'))+': '+l.join(', '):''};
function subjProgress(s,c){const ts=topics(s,c);return {done:ts.filter(t=>stat(s,c,t).stars>0).length,total:ts.length}}
function classDone(c){let d=0;SUBS.forEach(s=>{if(s!=='current')topics(s,c).forEach(t=>{if(stat(s,c,t).stars>0)d++})});return d}
const totalStars=()=>Object.values(LP.t).reduce((a,b)=>a+(b.stars||0),0);
let audP=null;function loadAud(){return audP||(audP=fetch('./learn/audio/index.json?v='+Date.now()).then(r=>r.ok?r.json():{}).catch(()=>[]))}
function speak(text,math){const l=vlang(!!math);if(!l){toast(word('ఈ ఫోన్‌లో తెలుగు వాయిస్ లేదు','No Telugu voice on this phone'));return}const was=S.voice;S.voice=true;try{say(text,l)}finally{S.voice=was}}
async function shareText(msg){const url=location.origin+location.pathname;try{if(navigator.share){await navigator.share({text:msg,url});return}}catch(e){if(e&&e.name==='AbortError')return}window.open('https://wa.me/?text='+encodeURIComponent(msg+' '+url),'_blank')}
// ---------- v3.3 search: all subjects, Telugu + English + transliteration, typo tolerant, offline ----------
const KG=[
['rational','rationals','akaraniya','అకరణీయ','సాధ్య'],['rhombus','rombus','రాంబస్','రాంబస్సు','సమచతుర్భుజం','parallelogram','trapezium','trapezoid','quadrilateral','quadrilaterals','చతుర్భుజం','చతుర్భుజాలు','chaturbhuja'],['trigonometry','trigonometric','trikonamiti','త్రికోణమితి'],
['grammar','vyakaranam','vyakarana','vyakaranamu','వ్యాకరణం','వ్యాకరణ'],
['chandassu','chandas','chandhassu','chandam','prosody','ఛందస్సు','ఛందస్'],
['alankaralu','alankaram','alankara','simile','metaphor','upama','rupakam','అలంకారాలు','అలంకారం','ఉపమ','రూపకం'],
['sandhulu','sandhi','sandhilu','సంధులు','సంధి'],
['samasalu','samasam','samasa','compound','సమాసాలు','సమాసం'],
['tense','tenses','kalalu','కాలాలు'],
['noun','nouns','namavachakam','నామవాచకం'],['pronoun','pronouns','sarvanamam','సర్వనామం'],['verb','verbs','kriya','క్రియ','క్రియలు'],['adjective','adjectives','visheshanam','విశేషణం'],['adverb','adverbs','kriyavisheshanam'],
['phrase','phrases','idiom','idioms','vakyam','జాతీయాలు','jateeyalu','నుడికారాలు'],['punctuation','viramachinhalu','విరామ'],['preposition','prepositions','article','articles'],['vocabulary','padalu','పదాలు','synonym','synonyms','antonym','antonyms','paryayapadalu','పర్యాయ','విరుద్ధ'],
['addition','kudika','kudhika','కూడిక'],['subtraction','subtract','teesivesta','minus','తీసివేత'],['multiplication','multiply','gunakaram','gunakara','tables','గుణకారం','ఎక్కాలు','ekkalu'],['division','divide','bhagaharam','భాగహారం'],
['fraction','fractions','bhinnalu','భిన్నాలు'],['decimal','decimals','dashamamsam','దశాంశ'],['duration','samayam','clock','calendar','సమయం','కాలమానం'],
['geometry','rekhaganitam','shapes','shape','akaralu','రేఖాగణితం','ఆకారాలు'],['trigonometry','trignometry','trigonometri','trig','sin','cos','tan','sine','cosine','tangent','త్రికోణమితి'],
['algebra','beejaganitam','bijaganitam','equation','equations','బీజగణితం','సమీకరణ'],['mensuration','area','perimeter','volume','kshetraganitam','వైశాల్యం','చుట్టుకొలత','ఘనపరిమాణం'],
['percent','percentage','percentages','shatam','శాతం'],['ratio','ratios','proportion','anupatam','అనుపాతం'],['interest','vaddi','వడ్డీ'],
['statistics','median','sankhyakasastram','సాంఖ్యక'],['probability','sambhavyata','సంభావ్యత'],['polynomial','polynomials','bahupadulu','బహుపది','బహుపదులు'],
['quadratic','dvighata','ద్విఘాత'],['progression','progressions','sequence','arithmetic','sredi','శ్రేఢి'],['circle','circles','vruttam','వృత్తం','వృత్తాలు'],['triangle','triangles','trikonam','pythagoras','త్రిభుజం','త్రిభుజాలు'],
['angle','angles','kosham','కోణం','కోణాలు'],['coordinate','coordinates','graph','graphs'],['number','numbers','sankhya','sankhyalu','prime','factors','hcf','lcm','సంఖ్యలు','సంఖ్య'],
['light','lens','lenses','mirror','reflection','refraction','kantri','kataka','కాంతి','కటకం','కటకాలు'],['electricity','electric','circuit','vidyut','విద్యుత్'],['force','motion','newton','gravity','gurutvakarshana','గురుత్వాకర్షణ'],
['plant','plants','mokkalu','photosynthesis','మొక్కలు','మొక్క'],['animal','animals','jantuvulu','జంతువులు'],['organs','digestion','respiration','sariram','శరీరం'],['acid','acids','base','bases','amlam','ksharam','ఆమ్లం','క్షారం','ఆమ్లాలు'],
['atom','atoms','molecule','paramanuvu','పరమాణువు'],['water','neeru','నీరు','నీటి'],['air','gali','గాలి'],['food','nutrition','vitamin','vitamins','aaharam','ఆహారం'],['metal','metals','lohalu','లోహాలు'],
['space','planet','planets','solar','graham','grahalu','గ్రహాలు','అంతరిక్ష','isro','ఇస్రో'],['environment','pollution','paryavaranam','పర్యావరణం'],['sound','shabdam','శబ్దం'],['physics','bhautika','భౌతిక'],['chemistry','rasayana','రసాయన'],['biology','jeeva','జీవ'],
['british','angleyulu','anglo','colonial','ఆంగ్లేయులు','బ్రిటిష్'],['history','charitra','చరిత్ర'],['geography','bhugolam','map','maps','భూగోళం','చిత్రపటం'],['civics','polity','constitution','government','rajyangam','prabhutvam','రాజ్యాంగం','ప్రభుత్వం'],['economics','arthasastram','అర్థశాస్త్రం'],
['telangana','తెలంగాణ'],['india','bharat','bharatha','భారత','భారతదేశం'],['mughal','mughals','mogalulu','మొగలులు'],['river','rivers','nadulu','నదులు'],['district','districts','jillalu','జిల్లాలు'],['independence','swatantram','swatantryam','freedom','స్వాతంత్ర్యం'],
['affairs','news','gk','varthalu','వార్తలు']];
const normS=s=>String(s||'').toLowerCase().replace(/[\u200c\u200d]/g,'');
const toks=s=>normS(s).split(/[^\p{L}\p{M}\p{N}]+/u).filter(Boolean);
const isLat=w=>/^[a-z0-9]+$/.test(w);
function lev(a,b,m){if(Math.abs(a.length-b.length)>m)return m+1;let p=[];for(let j=0;j<=b.length;j++)p[j]=j;for(let i=1;i<=a.length;i++){let c=[i],mn=i;for(let j=1;j<=b.length;j++){const v=Math.min(p[j]+1,c[j-1]+1,p[j-1]+(a[i-1]===b[j-1]?0:1));c[j]=v;if(v<mn)mn=v}if(mn>m)return m+1;p=c}return p[b.length]}
function wmatch(q,w){if(q===w)return true;if(isLat(q)&&isLat(w)){if(q.length>=4&&w.startsWith(q))return true;if(w.length>=6&&q.startsWith(w))return true;const m=q.length>=8?2:q.length>=5?1:0;return m>0&&q[0]===w[0]&&lev(q,w,m)<=m}if(!isLat(q)&&!isLat(w)&&q.length>=3&&w.length>=3){const a=q.slice(0,Math.max(3,q.length-2)),b=w.slice(0,Math.max(3,w.length-2));return w.startsWith(a)||(w.length>=6&&q.startsWith(b))}return false}
function expand(q){const out=new Set([q]);KG.forEach(g=>{if(g.some(w=>wmatch(q,normS(w))))g.forEach(w=>out.add(normS(w)))});return [...out]}
const TAGS={'telugu:ach':'వ్యాకరణం vyakaranam grammar అక్షరమాల','telugu:gun':'వ్యాకరణం vyakaranam grammar','telugu:vach':'వ్యాకరణం vyakaranam grammar','telugu:vyat':'వ్యాకరణం vyakaranam grammar','telugu:nama':'వ్యాకరణం vyakaranam grammar','telugu:paryaya':'వ్యాకరణం vyakaranam synonyms పర్యాయపదాలు','telugu:ling':'వ్యాకరణం vyakaranam grammar','telugu:kalam':'వ్యాకరణం vyakaranam grammar tense కాలాలు','telugu:vibh5':'వ్యాకరణం vyakaranam grammar','telugu:jatiya':'జాతీయాలు సామెతలు proverbs','telugu:sandhi':'వ్యాకరణం vyakaranam grammar','telugu:sava':'వ్యాకరణం vyakaranam grammar','telugu:samasa':'వ్యాకరణం vyakaranam grammar','telugu:vibh10':'వ్యాకరణం vyakaranam grammar','telugu:alank':'వ్యాకరణం vyakaranam','telugu:alank2':'వ్యాకరణం vyakaranam','telugu:chand':'ఛందస్సు chandassu padyam పద్యం','telugu:padya':'ఛందస్సు chandassu padyam పద్యం','telugu:chand10':'ఛందస్సు chandassu padyam పద్యం','social:ind8':'british angleyulu ఆంగ్లేయులు company independence freedom swatantram స్వాతంత్ర్యం history charitra','social:hist7':'mughal mughals history charitra','social:hist6':'history charitra ancient','social:world9':'history charitra world','social:nat10':'independence freedom history charitra','social:tel5':'history charitra telangana','social:const8':'civics polity constitution','social:gov4':'civics polity government','social:civ7':'civics polity','social:earth6':'geography bhugolam map','social:geo4':'geography bhugolam map','social:eco9':'economics civics','social:eco10':'economics geography','science:acid':'chemistry rasayana','science:atom9':'chemistry rasayana','science:lab8':'chemistry rasayana','science:force8':'physics bhautika','science:motion9':'physics bhautika','science:light10':'physics bhautika','science:elec10':'physics bhautika','science:magnet':'physics bhautika','science:cell':'biology jeeva','science:plant1':'biology jeeva','science:digest':'biology jeeva'};
const SUBTAG={current:'current affairs news gk varthalu వార్తలు samanya general knowledge సామాన్య',english:'english grammar ఇంగ్లీష్',telugu:'telugu తెలుగు',maths:'maths math ganitam గణితం',science:'science vignanam సైన్స్ విజ్ఞానం',social:'social samajika సాంఘిక'};
let SIDX=null;
function buildIdx(){if(SIDX)return SIDX;SIDX=[];SUBS.forEach(s=>{if(!D[s])return;const cl=s==='current'?[0]:[1,2,3,4,5,6,7,8,9,10];cl.forEach(c=>topics(s,c).forEach((t,ti)=>{const title=normS(t.te+' '+t.en+' '+(t.id||'')+' '+(TAGS[s+':'+t.id]||'')+' '+(SUBTAG[s]||''));const body=normS((t.n||[]).join(' ')+' '+(t.q||[]).map(x=>String(x).split('|')[0]).join(' '));SIDX.push({s,c,ti,t,title:title+' '+normS(t.kw||''),tw:toks(title+' '+(t.kw||'')),body})}))});return SIDX}
function scoreTopic(e,terms){let sc=0;let ti=0;for(const tm of terms){let b=0;if(tm.length>=2){if(tm.length>=(isLat(tm)?4:3)&&e.title.includes(tm))b=Math.max(b,6);else if(e.tw.some(w=>wmatch(tm,w)))b=Math.max(b,5);if(!b&&tm.length>=(isLat(tm)?4:3)&&e.body.includes(tm))b=2}if(ti++===0&&b>=5)b+=3;sc=Math.max(sc,b)}return sc}
function runSearch(raw,cls){const qt=toks(raw);if(!qt.length)return null;const idx=buildIdx();const groups=qt.map(expand);const res=[];idx.forEach(e=>{let tot=0,hit=0;groups.forEach((g,gi)=>{const sc=scoreTopic(e,g);if(sc){hit++;tot+=sc}});if(hit)res.push({e,tot,hit,full:hit===groups.length})});let R2=res;if(res.some(r=>r.tot>=5))R2=res.filter(r=>r.tot>=5||r.hit>1);const full=R2.filter(r=>r.full);const use=full.length?full:R2;use.forEach(r=>{r.k=r.tot+(r.e.c===cls||r.e.c===0?1.5:0)});use.sort((a,b)=>b.k-a.k);return {full:!!full.length,list:use.slice(0,60)}}
function reqBtn(q){return `<div class="lr-card">${word('ఈ అంశం కావాలా? సేవ్ చేస్తే త్వరలో చేరుస్తాం.','Want this topic? Save a request and we will add it soon.')}<br><button class="lr-row" id="sq-req" data-q="${esc(q)}" style="--c:#56d6cf"><span class="ic">📝</span><span class="tx">${word('ఈ అంశం కావాలి','Request this topic')}</span></button></div>`}
const FORM='https://docs.google.com/forms/d/e/1FAIpQLSfZBj4tCyYL65LLw6aAZP88Fs0GAIhphMHSyHT86_Ut-84aKg/formResponse';
function sendReq(q){try{if(!q||q.length<3||q.length>80||!navigator.onLine)return;const k='aksharanova.topicsent';const a=JSON.parse(localStorage.getItem(k)||'[]');const n=q.toLowerCase();if(a.includes(n))return;a.push(n);localStorage.setItem(k,JSON.stringify(a.slice(-100)));const b=new URLSearchParams();b.set('entry.1036119480',q);b.set('entry.840461729','class '+(LP.cls||'?')+' / '+S.lang);fetch(FORM,{method:'POST',mode:'no-cors',body:b}).catch(()=>{})}catch(e){}}
function saveReq(q){sendReq(q);try{const a=JSON.parse(localStorage.getItem('aksharanova.topicreq')||'[]');if(!a.includes(q))a.push(q);localStorage.setItem('aksharanova.topicreq',JSON.stringify(a.slice(-50)));toast(word('సేవ్ అయింది ✅','Saved ✅'))}catch(e){}}
function searchHTML(r,cls){const q=String(window.__lastQ||'');const pre=/rhomb|rombus|రాంబస్|రాంబస/i.test(q)?`<div class="lr-card" style="text-align:center"><h3 style="margin:0 0 6px">🔷 ${word('రాంబస్','Rhombus')}</h3><p class="lr-note">${word('మీ తరగతిని ఎంచుకోండి','Pick your class')}</p><div class="lr-chips">${[1,2,3,4,5,6,7,8,9,10].map(n=>`<button class="lr-chip rb-sc" data-c="${n}">${n}</button>`).join('')}</div></div>`:'';return pre+searchHTML0(r,cls)}
function searchHTML0(r,cls){if(!r)return '';if(!r.list.length){let sug='';try{SUBS.slice(0,5).forEach(sb=>{const m=LS_[sb];const ts=topics(sb,cls).slice(0,2);ts.forEach((t,ti)=>{sug+=`<button class="lr-row sr-go" data-s="${sb}" data-c="${cls}" data-i="${ti}" style="--c:${m.c}"><span class="ic">${t.i||'📘'}</span><span class="tx">${esc(W(t))}<small>${esc(W(m))} · ${word('తరగతి','Class')} ${cls}</small></span></button>`})})}catch(e){}return `<div class="lr-card"><h3 style="margin-top:0">📝 ${word('మీ అంశం సేవ్ అయింది','Your topic is saved')}</h3><p>${word('ఈ అంశానికి పూర్తి పాఠం సిద్ధమవుతోంది - త్వరలో వస్తుంది. ఈలోగా మీ తరగతి పాఠాలు చూడండి, లేదా ఇంకో పదం (ఉదా: నది, గుణకారం, కిరణజన్య సంయోగక్రియ) వాడండి.','A full lesson for this topic is being prepared and will arrive soon. Meanwhile try your class lessons below, or another word (e.g. river, multiplication, photosynthesis).')}</p></div>`+sug+reqBtn(window.__lastQ||'')}
 let h=r.full?'':`<div class="lr-card">${word('సరిగ్గా సరిపోయేది లేదు. దగ్గరి అంశాలు:','No exact match. Nearest topics:')}</div>`;const by={};r.list.forEach(x=>{(by[x.e.s]=by[x.e.s]||[]).push(x)});
 SUBS.forEach(s=>{if(!by[s])return;const m=LS_[s];h+=`<div class="lr-h">${m.i} ${esc(W(m))}</div>`;by[s].slice(0,12).forEach(x=>{const e=x.e;h+=`<button class="lr-row sr-go" data-s="${e.s}" data-c="${e.c||cls}" data-i="${e.ti}" style="--c:${m.c}"><span class="ic">${e.t.i||'📘'}</span><span class="tx">${esc(W(e.t))}<small>${esc(W(m))} · ${e.s==='current'?word('అన్ని తరగతులు','All classes'):word('తరగతి','Class')+' '+e.c+clsTag(e.s,e.t,e.c)}</small></span></button>`})});if(!r.full)h+=reqBtn(window.__lastQ||'');return h}
// ---------- v3.3 diagrams (simple, checked SVG) ----------
const DGW=(a,b)=>word(a,b);
const svgW=(inner,cap)=>`<div class="lr-card dg"><svg viewBox="0 0 220 160" role="img" aria-label="${esc(cap)}" style="width:100%;max-width:300px;display:block;margin:0 auto" font-family="sans-serif" font-size="11" fill="#dfe8ff" stroke-linecap="round">${inner}</svg><div class="lr-sub" style="margin:4px 0 0">${esc(cap)}</div></div>`;
const SVGS={
rt:()=>svgW(`<polygon points="30,130 170,130 170,35" fill="#16224a" stroke="#56d6ff" stroke-width="2"/><polyline points="158,130 158,118 170,118" fill="none" stroke="#ffe192" stroke-width="1.5"/><path d="M52,130 A22,22 0 0 0 50,121" fill="none" stroke="#ff9f0a" stroke-width="1.5"/><text x="56" y="125" fill="#ff9f0a">θ</text><text x="76" y="76" fill="#ffe192" transform="rotate(-34 76 76)">${DGW('కర్ణం','hypotenuse')}</text><text x="176" y="88" fill="#7fe0a0">${DGW('ఎదుటి','opp')}</text><text x="78" y="148" fill="#7fe0a0">${DGW('ప్రక్క','adj')}</text><text x="20" y="136">A</text><text x="172" y="145">B</text><text x="172" y="32">C</text>`,DGW('లంబకోణ త్రిభుజం: కర్ణం లంబకోణానికి ఎదురుగా; θ కి ఎదుటి, ప్రక్క భుజాలు','Right triangle: hypotenuse faces the right angle; opposite and adjacent are named from angle θ')),
ang:()=>svgW(`<g stroke="#56d6ff" stroke-width="2" fill="none"><polyline points="45,60 10,60 38,36"/><polyline points="120,60 85,60 85,24"/><polyline points="195,60 160,60 140,34"/><polyline points="45,140 10,140 80,140"/></g><g fill="#ffe192" text-anchor="middle"><text x="30" y="80">${DGW('90° కంటే తక్కువ','< 90°')}</text><text x="100" y="80">90°</text><text x="170" y="80">${DGW('90°–180°','90°–180°')}</text><text x="45" y="158">180° ${DGW('(సరళ కోణం)','(straight)')}</text></g>`,DGW('కోణాల రకాలు: అల్ప, లంబ, అధిక, సరళ','Angle types: acute, right, obtuse, straight')),
lens:()=>svgW(`<g stroke="#9fb5e6" stroke-width="1"><line x1="5" y1="40" x2="215" y2="40" stroke-dasharray="3 3"/><line x1="5" y1="120" x2="215" y2="120" stroke-dasharray="3 3"/></g><g stroke="#ffd166" stroke-width="1.6" fill="none"><path d="M60,20 Q75,40 60,60 Q45,40 60,20" fill="#27407a"/><line x1="20" y1="30" x2="60" y2="30"/><line x1="60" y1="30" x2="100" y2="40"/><line x1="20" y1="50" x2="60" y2="50"/><line x1="60" y1="50" x2="100" y2="40"/></g><circle cx="100" cy="40" r="2.5" fill="#ff9f0a"/><text x="96" y="30" fill="#ff9f0a">F</text><text x="30" y="12">${DGW('కుంభాకార: కలుస్తాయి','Convex: converge')}</text><g stroke="#ffd166" stroke-width="1.6" fill="none"><path d="M45,100 Q60,110 75,100 Q62,120 75,140 Q60,130 45,140 Q58,120 45,100" fill="#27407a"/><line x1="15" y1="110" x2="62" y2="110"/><line x1="62" y1="110" x2="100" y2="98"/><line x1="15" y1="130" x2="62" y2="130"/><line x1="62" y1="130" x2="100" y2="142"/></g><text x="30" y="92">${DGW('పుటాకార: వ్యాపిస్తాయి','Concave: diverge')}</text>`,DGW('కటకాలు: కుంభాకారం కాంతిని కలుపుతుంది, పుటాకారం వ్యాపింపజేస్తుంది','Lenses: convex converges light, concave spreads it')),
circ:()=>svgW(`<circle cx="110" cy="80" r="55" fill="#16224a" stroke="#56d6ff" stroke-width="2"/><line x1="55" y1="80" x2="165" y2="80" stroke="#ffe192" stroke-width="1.5"/><line x1="110" y1="80" x2="150" y2="42" stroke="#ff9f0a" stroke-width="1.5"/><line x1="70" y1="45" x2="160" y2="108" stroke="#7fe0a0" stroke-width="1.5"/><circle cx="110" cy="80" r="2.5" fill="#fff"/><text x="104" y="95">O</text><text x="62" y="75" fill="#ffe192">${DGW('వ్యాసం','diameter')}</text><text x="128" y="55" fill="#ff9f0a">${DGW('వ్యాసార్ధం','radius')}</text><text x="120" y="118" fill="#7fe0a0">${DGW('జ్య','chord')}</text>`,DGW('వృత్తం: వ్యాసం = 2 × వ్యాసార్ధం; జ్య వృత్తంపై రెండు బిందువులను కలుపుతుంది','Circle: diameter = 2 × radius; a chord joins two points on the circle')),
tan:()=>svgW(`<circle cx="95" cy="80" r="48" fill="#16224a" stroke="#56d6ff" stroke-width="2"/><line x1="143" y1="20" x2="143" y2="140" stroke="#ffe192" stroke-width="2"/><line x1="95" y1="80" x2="143" y2="80" stroke="#ff9f0a" stroke-width="1.5"/><polyline points="133,80 133,90 143,90" fill="none" stroke="#7fe0a0" stroke-width="1.5"/><circle cx="95" cy="80" r="2.5" fill="#fff"/><text x="90" y="96">O</text><text x="147" y="78">P</text><text x="147" y="34" fill="#ffe192">${DGW('స్పర్శరేఖ','tangent')}</text><text x="108" y="74" fill="#ff9f0a">r</text>`,DGW('స్పర్శ బిందువు వద్ద వ్యాసార్ధం స్పర్శరేఖకు లంబంగా ఉంటుంది','At the point of contact the radius is perpendicular to the tangent')),
quad:()=>svgW(`<g stroke="#9fb5e6" stroke-width="1.5"><line x1="110" y1="10" x2="110" y2="150"/><line x1="15" y1="80" x2="205" y2="80"/></g><g fill="#ffe192" text-anchor="middle"><text x="160" y="45">I (+,+)</text><text x="60" y="45">II (−,+)</text><text x="60" y="120">III (−,−)</text><text x="160" y="120">IV (+,−)</text></g><text x="196" y="94">x</text><text x="114" y="18">y</text><text x="114" y="94">O</text>`,DGW('నిరూపక తలం: నాలుగు పాదాలు','Coordinate plane: four quadrants'))
};
const DIAG={'maths:geo9':['rt'],'maths:trig10':['rt'],'maths:geo6':['ang'],'science:lab10':['lens'],'science:light10':['lens'],'maths:men10':['circ'],'maths:si7':['circ'],'maths:sim10':['tan'],'maths:coord9':['quad'],'maths:cg10':['quad']};
const diagHTML=(s,t)=>(DIAG[s+':'+t.id]||[]).map(k=>{try{return SVGS[k]()}catch(e){return ''}}).join('')+(window.DG&&DGX[DGA[t.id]||t.id]?DGX[DGA[t.id]||t.id].map(sp=>{try{return DG.html(sp,W)}catch(e){return ''}}).join(''):'');
// ---------- views ----------
function render(v){try{SS&&SS.cancel()}catch(e){}({hub:hubView,subj:subjView,topic:topicView,quiz:quizView,result:resultView,prog:progView,coach:coachView,exam:examView}[v.v]||hubView)(v)}
function hubView(v){
 const c=v.c;LP.cls=c;saveL();
 const cards=SUBS.filter(s=>!SUBCLS[s]||SUBCLS[s].includes(c)).map(s=>{const m=LS_[s];const p=subjProgress(s,c);return `<button class="lr-sc" data-s="${s}" style="--c:${m.c}"><span>${m.i}</span>${W(m)}<small>${s==='current'?word('అన్ని తరగతులకు','For everyone'):(p.total?`${p.done}/${p.total} ⭐`:word('నేర్చుకోండి','Learn'))}</small></button>`}).join('');
 let ch='';for(let i=1;i<=10;i++){const d=classDone(i);ch+=`<button class="lr-chip${i===c?' on':''}" data-c="${i}">${i}${d?`<small>⭐${d}</small>`:''}</button>`}
 shell(topBar('📚 '+word('నేర్చుకో · అక్షరనోవా','Learn · AksharaNova'))+`<p class="lr-sub">⭐ ${totalStars()} ${word('స్టార్స్','stars')} · ${word('ముందు ప్రాక్టీస్, అవసరమైతే పాఠం','Practice first, theory when you need it')}</p>
 ${progBtns()}<input id="sq" class="lr-search" type="search" autocomplete="off" placeholder="🔍 ${word('ఏ అంశమైనా వెతకండి: chandassu, trigonometry, British...','Search any topic: chandassu, trigonometry, British...')}"><div id="sr"></div>
 <div class="lr-h">${word('తరగతి ఎంచుకోండి','CHOOSE YOUR CLASS')}</div><div class="lr-chips">${ch}</div>
 <div class="lr-h">${word('విషయం ఎంచుకోండి','CHOOSE A SUBJECT')} · ${word('తరగతి','Class')} ${c}</div><div class="lr-subs">${cards}</div>
 <button class="lr-go alt" id="shr">📤 ${word('స్నేహితులకు, గ్రామ గ్రూపులకు షేర్ చేయండి','Share with friends and village groups')}</button>
 <p class="lr-note">${word('ప్రకటనలు లేవు · లాగిన్ లేదు · మీ ప్రగతి ఈ ఫోన్‌లోనే','No ads · No login · Your progress stays on this phone')}</p>`);
 wireTop();
 {const inp=$('#sq'),box=$('#sr');let tm=0,ld=null;const go=()=>{const q=inp.value.trim();if(!q){box.innerHTML='';return}const run=()=>{if(inp.value.trim()!==q)return;window.__lastQ=q;const __r=runSearch(q,c);box.innerHTML=searchHTML(__r,c);if(__r&&!__r.list.length&&q.length>=4)setTimeout(()=>{if(inp.value.trim()===q)sendReq(q)},1500);{const rb=box.querySelector('#sq-req');if(rb)rb.onclick=()=>{SFX.tap();saveReq(rb.dataset.q)}};box.querySelectorAll('.sr-go').forEach(b=>b.onclick=()=>{SFX.tap();const s=b.dataset.s,cc=+b.dataset.c;LP.cls=s==='current'?LP.cls:cc;saveL();nav({v:'topic',s,c:cc,ti:+b.dataset.i})})};if(SUBS.every(s=>D[s])&&D.bank)run();else{box.innerHTML=`<div class="lr-card">${word('వెతుకుతోంది…','Searching…')}</div>`;ld=ld||Promise.all(SUBS.concat(['bank']).map(s=>load(s).catch(()=>0))).then(()=>{SIDX=null});ld.then(run)}};inp.oninput=()=>{clearTimeout(tm);tm=setTimeout(go,180)};if(window.__pendingQ){inp.value=window.__pendingQ;window.__pendingQ='';go()}if(window.__focusQ){window.__focusQ=0;try{inp.focus()}catch(e){}}}
 {const pg=$('#pgo');if(pg)pg.onclick=()=>{SFX.tap();nav({v:'prog'})};const ee=$('#exh');if(ee)ee.onclick=()=>{SFX.tap();nav({v:'exam'})};const cc=$('#cch');if(cc)cc.onclick=()=>{SFX.tap();nav({v:'coach'})};const cn=$('#cnt');if(cn)cn.onclick=()=>{SFX.tap();const L=AKNP.last();load(L.s).then(()=>{const ts=topics(L.s,L.c);const i=ts.findIndex(x=>x.id===L.id);if(i>=0)nav({v:'topic',s:L.s,c:L.c,ti:i})})}}
 document.querySelectorAll('.lr-chip').forEach(b=>b.onclick=()=>{SFX.tap();V={v:'hub',c:+b.dataset.c};try{history.replaceState({svLearn:V},'',location.href)}catch(e){}hubView(V)});
 document.querySelectorAll('.lr-sc').forEach(b=>b.onclick=()=>{SFX.tap();openSubj(b.dataset.s,c)});
 $('#shr').onclick=()=>shareText(word('అక్షరనోవా: 1 నుండి 10వ తరగతి వరకు తెలుగు, ఇంగ్లీష్, గణితం, సైన్స్, సాంఘిక శాస్త్రం ప్రాక్టీస్ యాప్. ఉచితం, లాగిన్ లేదు.','AksharaNova: free Class 1-10 practice app for Telugu, English, Maths, Science and Social. No login.'));
}

function progBtns(){if(!window.AKNP){if(!window.__pgl){window.__pgl=1;loadRaw('prog').then(()=>{if(V&&V.v==='hub')hubView(V)}).catch(()=>{})}return ''}let L=null;try{L=AKNP.last()}catch(e){}
 return `<button class="lr-go" id="pgo" style="margin-top:6px">📊 ${word('నా ప్రగతి','My Progress')}</button><button class="lr-go" id="cch" style="margin-top:6px;background:linear-gradient(90deg,#00c853,#00e5ff)">🧭 ${word('స్టడీ కోచ్','Study Coach')}</button><button class="lr-go" id="exh" style="margin-top:6px;background:linear-gradient(90deg,#ff9f0a,#ff4ecd)">🎓 ${word('పరీక్ష సిద్ధత · మోడల్ పేపర్లు','Exam Prep · Model Papers')}</button>${L&&LS_[L.s]?`<button class="lr-go alt" id="cnt">▶ ${word('కొనసాగించండి','Continue')}: ${esc(W(L))}</button>`:''}`}
function progView(v){
 if(!window.AKNP){loadRaw('prog').then(()=>progView(v));return}
 const st=AKNP.stats(),P=AKNP.profiles(),act=AKNP.active();const lab={WEAK:word('బలహీనం','Weak'),CRITICAL:word('ముఖ్యం: ఎక్కువ ప్రాక్టీస్','Needs lots of practice')};
 const nm=p=>p.name||word('విద్యార్థి','Student')+' '+(P.indexOf(p)+1);
 const row=r=>{const m=LS_[r.s];if(!m)return '';return `<button class="lr-row pg-go" data-s="${r.s}" data-c="${r.c}" data-id="${esc(r.id)}" style="--c:${m.c}"><span>${m.i}</span><div><b>${esc(r.te?W(r):r.id)}</b><br><small>${word("తరగతి","Class")} ${r.c}${r.m!=null?' · '+r.m+'%':''}</small></div></button>`};
 const nameOf=r=>{try{const t=topics(r.s,r.c).find(x=>x.id===r.id);if(t){r.te=t.te;r.en=t.en}}catch(e){}return r};
 const sec=(h,l,f)=>l.length?`<div class="lr-card"><h3 style="margin-top:0">${h} (${l.length})</h3>${l.slice(0,8).map(f).join('')}</div>`:'';
 const bmRow=b=>{const m=LS_[b.s];return m?`<button class="lr-row pg-go" data-s="${b.s}" data-c="${b.c}" data-id="${esc(b.id)}" style="--c:${m.c}"><span>⭐</span><div><b>${esc(W(b))}</b><br><small>${m.i} ${esc(W(m))} · ${word('తరగతి','Class')} ${b.c}</small></div></button>`:''};
 shell(topBar('📊 '+word('నా ప్రగతి','My Progress'))+`
 <div class="lr-card"><div style="display:flex;gap:6px;flex-wrap:wrap">${P.map(p=>`<button class="lr-chip pg-pf${p.id===act?' on':''}" data-id="${p.id}" style="width:auto;padding:0 12px">👤 ${esc(nm(p))}</button>`).join('')}<button class="lr-chip" id="pg-add" style="width:auto;padding:0 12px">＋ ${word('కొత్త','New')}</button><button class="lr-chip" id="pg-ren" style="width:auto;padding:0 12px">✏️</button></div><small>${word('ఈ ఫోన్‌లో మాత్రమే సేవ్ అవుతుంది · లాగిన్ కాదు','Saved on this phone only · not a login')}</small></div>
 <div class="lr-subs" style="grid-template-columns:repeat(2,1fr)"><div class="lr-sc" style="--c:#38d9f8"><span>🎯</span>${st.acc==null?'–':st.acc+'%'}<small>${word('కచ్చితత్వం','Accuracy')}</small></div><div class="lr-sc" style="--c:#ff9f0a"><span>🔥</span>${st.streak}<small>${word('రోజుల వరుస','Day streak')}</small></div><div class="lr-sc" style="--c:#30d158"><span>✅</span>${st.done}<small>${word('పూర్తయిన అంశాలు','Completed topics')}</small></div><div class="lr-sc" style="--c:#b46bff"><span>📝</span>${st.answered}<small>${word('సమాధానాలు','Answers')}</small></div></div>
 ${sec('🌱 '+word('బలహీన అంశాలు','Weak topics'),st.weak.map(nameOf),row)}
 ${sec('🔁 '+word('రివిజన్ అంశాలు','Revision topics'),st.rev.map(nameOf),row)}
 ${sec('⭐ '+word('బుక్‌మార్క్స్','Bookmarks'),st.bm,bmRow)}
 ${st.tests.length?`<div class="lr-card"><h3 style="margin-top:0">📝 ${word('టెస్ట్ స్కోర్లు','Test scores')}</h3>${st.tests.map(t=>`<p style="margin:4px 0">${esc(LS_[t.s]?W(LS_[t.s]):t.s)} · ${word('తరగతి','Class')} ${t.c}: <b>${t.pct}%</b> <small>${t.d}</small></p>`).join('')}</div>`:''}
 ${st.mist.length?`<button class="lr-go" id="pg-mist">🧩 ${word('నా తప్పులు ప్రాక్టీస్','Practice my mistakes')} (${st.mist.length})</button>`:''}
 ${!st.answered?`<p class="lr-note">${word('ప్రాక్టీస్ మొదలుపెట్టండి, ఇక్కడ మీ ప్రగతి కనిపిస్తుంది','Start practising and your progress will show here')}</p>`:''}`);
 wireTop();
 document.querySelectorAll('.pg-pf').forEach(b=>b.onclick=()=>{SFX.tap();AKNP.switchTo(b.dataset.id);progView(v)});
 $('#pg-add').onclick=()=>{const n=prompt(word('పేరు (ఐచ్ఛికం)','Name (optional)'),'');if(n===null)return;AKNP.addProfile(n);progView(v)};
 $('#pg-ren').onclick=()=>{const p=P.find(x=>x.id===act);const n=prompt(word('పేరు మార్చండి','Rename'),p&&p.name||'');if(n===null)return;AKNP.rename(act,n);progView(v)};
 document.querySelectorAll('.pg-go').forEach(b=>b.onclick=()=>{SFX.tap();const sb=b.dataset.s,cc=+b.dataset.c,id=b.dataset.id;load(sb).then(()=>{const i=topics(sb,cc).findIndex(x=>x.id===id);if(i>=0)nav({v:'topic',s:sb,c:cc,ti:i});else toast(word('అంశం దొరకలేదు','Topic not found'))})});
 const pm=$('#pg-mist');if(pm)pm.onclick=()=>{SFX.tap();pracMist()};
}
function pracMist(){const ms=AKNP.practiceMistakes().slice(-10);const list=ms.filter(m=>m.o&&m.qt).map(m=>{const idx=shuf([0,1,2,3]);return {q:m.qt,opts:idx.map(i=>m.o[i]),ai:idx.indexOf(m.ai),x:m.x,key:(m.qt&&m.qt.en)||''}});if(!list.length){toast(word('తప్పులు లేవు 🎉','No mistakes to practise 🎉'));return}const s0=ms[0].s;Q={s:s0,c:ms[0].c,ti:-1,list,i:0,ok:0,miss:[],lock:false,mm:1};nav({v:'quiz',s:s0,c:ms[0].c,ti:-1})}
document.addEventListener('click',e=>{const b0=e.target&&e.target.closest&&e.target.closest('.rb-sc');if(b0){SFX.tap();const c=+b0.dataset.c;load('maths').then(()=>{const i=topics('maths',c).findIndex(x=>x.id==='m'+c+'_rhombus');if(i>=0)nav({v:'topic',s:'maths',c,ti:i})})}});
function examView(v){loadRaw('exam').then(()=>Promise.all(AKNX.files.map(loadRaw))).then(()=>{AKNX.view({word,esc,W,shell,topBar,wireTop,nav,SFX,toast},v)}).catch(()=>toast(word('లోడ్ కాలేదు','Could not load')))}
function coachView(v){Promise.all([loadRaw('coach'),loadRaw('pk44')].concat(SUBS.map(x=>load(x).catch(()=>0)))).then(()=>{AKNC.view({word,esc,W,LS_,topics,load,nav,SFX,toast,shell,topBar,wireTop,c:(LP.cls||1),mist:pracMist,quiz:startQuiz,startDiag(s,c,t){let list;try{list=round(s,c,t,10)}catch(e){toast('Error');return}if(!list.length)return;Q={s,c,ti:-1,list,i:0,ok:0,miss:[],lock:false,dg:t};nav({v:'quiz',s,c,ti:-1})}})}).catch(()=>toast(word('లోడ్ కాలేదు','Could not load')))}

const SOON=[];
function openSubj(s,c){if(SOON.includes(s)&&!D[s]){toast(word('త్వరలో వస్తోంది! ఇప్పుడు గణితం, సాంఘిక శాస్త్రం నేర్చుకోండి 🚀','Coming very soon! Try Maths or Social now 🚀'),3200);return}toast(word('లోడ్ అవుతోంది…','Loading…'),900);load(s).then(()=>nav({v:'subj',s,c})).catch(()=>toast(word('ఒకసారి ఇంటర్నెట్ కావాలి. తరువాత ఆఫ్‌లైన్‌లో కూడా పనిచేస్తుంది.','Needs internet once. After that it works offline too.'),3500))}
function gkArea(t){const id=t.id||'';const x=(id+' '+(t.en||'')+' '+(t.kw||'')).toLowerCase();if(/telangana|hyderabad|kakatiya|ramappa|bathukamma|bonalu|medaram|sammakka|charminar|golconda|nizam/.test(x)&&/^gk_|telangana/.test(id))return 'tg';if(!/^gk_/.test(id))return '';if(/^gk_(country_|united_nations|who$|world_|nobel|economics_memorial|olympic|international_days|latitude|longitude)/.test(id))return 'world';return 'india'}
function subjView(v){
 const {s,c}=v;const m=LS_[s];const ts=topics(s,c);
 const gkT=(s==='social'&&v.gk)||'all';const rows=ts.map((t,i)=>{if(gkT!=='all'&&gkArea(t)!==gkT)return '';const st=stat(s,c,t);return `<button class="lr-row" data-i="${i}" style="--c:${LS_[s]?LS_[s].c:'#7ab9ff'}"><span class="ic">${t.i||'📘'}</span><span class="tx">${esc(W(t))}<small>${st.att?word('ఉత్తమం','Best')+' '+st.best+'%':word('కొత్త','New')}</small></span><span class="st">${stars(st.stars)}</span></button>`}).join('');
 shell(topBar(`${m.i} ${W(m)}${s==='current'?'':' · '+word('తరగతి','Class')+' '+c}`)+
  (s==='current'?'':`<div class="lr-chips" style="grid-template-columns:repeat(10,1fr);gap:4px">${[1,2,3,4,5,6,7,8,9,10].map(i=>`<button class="lr-chip${i===c?' on':''}" style="height:36px;font-size:15px" data-c="${i}">${i}</button>`).join('')}</div>`)+
  `${s==='social'?`<div class="gk-tabs">${[['all','📚',word('అన్నీ','All')],['tg','📍',word('తెలంగాణ','Telangana')],['india','🇮🇳',word('భారతదేశం','India')],['world','🌍',word('ప్రపంచం','World')]].map(x=>`<button class="gk-tab${gkT===x[0]?' on':''}" data-gk="${x[0]}">${x[1]} ${x[2]}</button>`).join('')}</div><div class="sm" style="font-size:12px;opacity:.8;margin:2px 0 6px">${word('GK అంశాలను తెలంగాణ / భారతదేశం / ప్రపంచం వారీగా చూడండి','Browse General Knowledge topics by Telangana / India / World')}</div>`:''}`+`<div class="lr-h">${word('అంశాలు · ఒక్కొక్కటి ప్రాక్టీస్ చేయండి','TOPICS · PRACTICE EACH ONE')}</div>${rows||`<div class="lr-card">${word('ఈ తరగతికి అంశాలు త్వరలో వస్తాయి.','Topics for this class are coming soon.')}</div>`}
  ${ts.length?`<button class="lr-go" id="ct">🎯 ${word('తరగతి టెస్ట్ · అన్ని అంశాలు కలిపి (15)','Class test · all topics mixed (15)')}</button>`:''}`);
 wireTop();
 document.querySelectorAll('.lr-chip').forEach(b=>b.onclick=()=>{SFX.tap();const nc=+b.dataset.c;LP.cls=nc;saveL();V={v:'subj',s,c:nc,gk:v.gk};try{history.replaceState({svLearn:V},'',location.href)}catch(e){}render(V)});
 document.querySelectorAll('.lr-row').forEach(b=>b.onclick=()=>{SFX.tap();nav({v:'topic',s,c,ti:+b.dataset.i})});
 document.querySelectorAll('.gk-tab').forEach(b=>b.onclick=()=>{SFX.tap();V={v:'subj',s,c,gk:b.dataset.gk};try{history.replaceState({svLearn:V},'',location.href)}catch(e){}render(V)});
 const ct=$('#ct');if(ct)ct.onclick=()=>{SFX.tap();startQuiz(s,c,-1)};
}
function flowHTML(t){const f=t.fl;if(!f||!f.steps)return '';const st=f.steps.map(x=>W(bi(x)));const n=st.length,w=300,bh=34,gap=22,h=n*bh+(n-1)*gap+(f.loop?30:8);const cols=['#1d6fd1','#12a37f','#d98a00','#a14fd6','#d1493f','#2a9fb5'];let g='';st.forEach((x,i)=>{const y=4+i*(bh+gap);g+=`<rect x="8" y="${y}" width="${w-16}" height="${bh}" rx="10" fill="${cols[i%6]}" fill-opacity=".28" stroke="${cols[i%6]}" stroke-width="1.5"/><foreignObject x="12" y="${y}" width="${w-24}" height="${bh}"><div xmlns="http://www.w3.org/1999/xhtml" style="height:${bh}px;display:flex;align-items:center;justify-content:center;text-align:center;font:600 12px sans-serif;color:#eaf0ff;line-height:1.15">${esc(x)}</div></foreignObject>`;if(i<n-1)g+=`<path d="M${w/2},${y+bh+2} v${gap-8}" stroke="#ffe192" stroke-width="2"/><path d="M${w/2-5},${y+bh+gap-9} l5,6 l5,-6" fill="none" stroke="#ffe192" stroke-width="2"/>`});if(f.loop)g+=`<text x="${w/2}" y="${h-8}" text-anchor="middle" font-size="11" fill="#ffe192">↻ ${esc(W(bi(f.loop)))}</text>`;return `<div class="lr-card dg"><h3 style="margin-top:0">🖼️ ${word('చిత్రం / రేఖాచిత్రం','Diagram')}</h3><svg viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(W(bi(f.cap||'')))}" style="width:100%;max-width:420px;display:block;margin:0 auto">${g}</svg><div class="lr-sub" style="margin:4px 0 0">${esc(W(bi(f.cap||'')))}</div></div>`}
function revHTML(t){const out=[];(t.n||[]).forEach(x=>{const z=W(bi(x));if(/^[#>] /.test(z))return;const f=z.split(/(?<=[.।?!])\s/)[0];if(f&&out.length<5)out.push(f)});if(out.length<2)return '';return `<details class="lr-card"><summary style="cursor:pointer;font-weight:700;color:#ffe192">⚡ ${word('త్వరిత పునశ్చరణ','Quick revision')}</summary><ul style="margin:6px 0 0 18px;padding:0">${out.map(x=>'<li>'+md(x)+'</li>').join('')}</ul></details>`}
function examHTML(t){if(!t.ex)return '';return `<div class="lr-card"><h3 style="margin-top:0">📝 ${word('పరీక్షలో రాసే జవాబు','Exam answer')}</h3><p>${md(W(bi(t.ex)))}</p></div>`}
function topicView(v){
 const {s,c,ti}=v;const t=topics(s,c)[ti];if(!t){hubView({v:'hub',c});return}const m=LS_[s];
 const notes=(t.n||[]).map(x=>{const txt=W(bi(x));if(txt.startsWith('# '))return `<h3>${esc(txt.slice(2))}</h3>`;if(txt.startsWith('> '))return `<div class="ex">${md(txt.slice(2))}</div>`;return `<p>${md(txt)}</p>`}).join('');
 shell(topBar(`${t.i||'📘'} ${esc(W(t))}`)+`<p class="lr-sub">${m.i} ${W(m)}${s==='current'?'':' · '+word('తరగతి','Class')+' '+c+clsTag(s,t,c)}</p>
  <button class="lr-go" id="pr">✍ ${word('ప్రాక్టీస్ మొదలుపెట్టండి','Start practice')}</button>
  <div class="lr-card hl"><h3 style="margin-top:0">📖 ${word('ముఖ్యాంశాలు','Key points')}</h3>${notes||'<p>\u2013</p>'}<button class="lr-ib" id="rd" style="margin-top:6px">🔊 ${word('వినండి','Listen')}</button><button class="lr-ib" id="rdv" style="margin-top:6px;margin-left:6px" aria-label="Change voice">🎙️ ${word('వాయిస్ మార్చు','Voice')}</button></div>${diagHTML(s,t)}${flowHTML(t)}${examHTML(t)}${revHTML(t)}
  <button class="lr-go alt" id="pr2">✍ ${word('ప్రాక్టీస్','Practice')}</button>`);
 wireTop();
 if(/^m\d+_rhombus$/.test(t.id)){const pr0=document.getElementById('pr');if(pr0){const bx=document.createElement('div');bx.className='lr-card';bx.id='rbw';pr0.insertAdjacentElement('afterend',bx);loadRaw('rhombus').then(()=>AKNR.widget(bx,{word},c)).catch(()=>{bx.remove()})}}
  try{if(window.AKNP){AKNP.view(s,c,t);const tp=document.querySelector('.lr-top');if(tp){const bb=document.createElement('button');bb.className='lr-ib';bb.setAttribute('aria-label','Bookmark');const pb=()=>{bb.textContent=AKNP.isBm(s,c,t.id)?'★':'☆'};pb();bb.onclick=()=>{SFX.tap();const on=AKNP.toggleBm(s,c,t);pb();toast(on?word('బుక్‌మార్క్ చేశారు ⭐','Bookmarked ⭐'):word('బుక్‌మార్క్ తీసేశారు','Bookmark removed'),1200)};tp.insertBefore(bb,tp.lastElementChild)}}}catch(e){}
 const go=()=>{SFX.tap();startQuiz(s,c,ti)};$('#pr').onclick=go;$('#pr2').onclick=go;
 $('#rdv').onclick=()=>{const lg=S.lang==='te'?'te':'en';const r=window.__cycleVoice&&window.__cycleVoice(lg);if(!r){toast(word('ఈ ఫోన్‌లో మరో వాయిస్ లేదు','No other voice on this phone'));return}toast('🎙️ '+r.n+'/'+r.of,1800);speak(lg==='te'?'నమస్కారం, నేను మీకు చదివి వినిపిస్తాను.':'Hello, I will read this lesson to you.',false)};
 $('#rd').onclick=()=>{const txt=(t.n||[]).map(x=>W(bi(x)).replace(/^[#>] /,'').replace(/\*\*/g,'')).join('. ');const fb=()=>toast(word('వాయిస్ పాఠం త్వరలో వస్తుంది','Voice lesson coming soon'));const ak=(S.lang==='te'||s==='hindi')?t.id:t.id+'__en';if(!t.id||!/^[A-Za-z0-9_-]+$/.test(t.id))return fb();loadAud().then(m=>{if(!m||!m[ak])return fb();try{SS&&SS.cancel()}catch(e){}if(window.__aud){try{window.__aud.pause()}catch(e){}}const go=()=>{const src=window.__AUD&&window.__AUD[ak];if(!src)return fb();try{const c=m[ak];for(const k in window.__AUD)if(m[k]!==c)delete window.__AUD[k]}catch(e){}const a=new Audio(src);window.__aud=a;a.onerror=fb;const p=a.play();if(p&&p.catch)p.catch(fb)};if(window.__AUD&&window.__AUD[ak])return go();const sc=document.createElement('script');sc.src='./learn/audio/'+m[ak]+'.js?v='+(window.__AV||1);sc.onload=()=>{go();try{sc.remove()}catch(e){}};sc.onerror=fb;document.head.appendChild(sc)}).catch(fb)};
 /*old*/ window.__unused=()=>speak((t.n||[]).map(x=>W(bi(x)).replace(/^[#>] /,'').replace(/\*\*/g,'')).join('. '),s==='maths');
}
function startQuiz(s,c,ti){
 let list;try{list=ti<0?testRound(s,c,15):round(s,c,topics(s,c)[ti],10)}catch(e){toast('Error: '+e.message,4000);return}
 if(!list.length){toast(word('ప్రశ్నలు త్వరలో','Questions coming soon'));return}
 Q={s,c,ti,list,i:0,ok:0,miss:[],lock:false};nav({v:'quiz',s,c,ti});
}
function quizView(v){
 if(!Q||Q.s!==v.s||Q.i>=Q.list.length){V=v.ti>=0?{v:'topic',s:v.s,c:v.c,ti:v.ti}:{v:'subj',s:v.s,c:v.c};render(V);return}
 const q=Q.list[Q.i],n=Q.list.length;Q.lock=false;
 shell(`<div class="lr-top"><button class="lr-ib" id="lb">\u2715</button><h1>${Q.i+1} / ${n}</h1><span class="lr-ib" style="display:flex;align-items:center">⭐ ${Q.ok}</span></div><div class="lr-bar"><i style="width:${Math.round(Q.i/n*100)}%"></i></div>
 <div class="lr-q"><span>${esc(W(q.q))}</span></div>
 <div class="lr-opts">${q.opts.map((o,i)=>`<button class="lr-o" data-i="${i}"><b>${'ABCD'[i]}</b><span>${esc(W(o))}</span></button>`).join('')}</div><div id="fb"></div>`);
 $('#lb').onclick=()=>{SFX.tap();if(confirm(word('ప్రాక్టీస్ ఆపేయాలా?','Stop this practice?')))history.back()};
 
 document.querySelectorAll('.lr-o').forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){
 if(!Q||Q.lock)return;Q.lock=true;const q=Q.list[Q.i];const ok=i===q.ai;
 document.querySelectorAll('.lr-o').forEach((b,j)=>{b.disabled=true;if(j===q.ai)b.classList.add('right');else if(j===i)b.classList.add('wrongp');else b.classList.add('dim')});
 if(ok){Q.ok++;SFX.pop();vib(25)}else{SFX.wrong();vib([60,40,60]);Q.miss.push(q)}
 try{window.AKNP&&AKNP.ans(Q.s,Q.c,Q.ti>=0?topics(Q.s,Q.c)[Q.ti]:(Q.dg||{id:'test'}),q,ok,i)}catch(e){}progress.answered++;if(ok){progress.correct++;progress.stars++}const day=dateKey();if(!progress.days.includes(day))progress.days.push(day);storeProgress();
 const last=Q.i>=Q.list.length-1;
 $('#fb').innerHTML=`<div class="lr-fb ${ok?'ok':'bad'}"><div class="hd">${ok?word('శభాష్! ⭐','Well done! ⭐'):word('పర్వాలేదు, నేర్చుకుందాం 🌱','Not yet, let us learn 🌱')}</div>${ok?'':`<p>${word('సరైన సమాధానం','Correct answer')}: <b>${esc(W(q.opts[q.ai]))}</b></p>`}${q.x?`<p class="why">(${esc(W(q.x))})</p>`:''}<button class="lr-next" id="nx">${last?word('ఫలితం చూడండి ▶','See result ▶'):word('తరువాత ప్రశ్న ▶','Next ▶')}</button></div>`;
 $('#nx').onclick=()=>{SFX.tap();if(last)finish();else{Q.i++;quizView(V)}};
 try{$('#nx').scrollIntoView({behavior:'smooth',block:'end'})}catch(e){}
}
function finish(){
 const n=Q.list.length,pct=Math.round(Q.ok*100/n),st=pct>=90?3:pct>=70?2:pct>=50?1:0;if(Q.dg){try{AKNP.diagDone(Q.dg.id,pct)}catch(e){}}
 if(Q.ti>=0){const t=topics(Q.s,Q.c)[Q.ti],k=tkey(Q.s,Q.c,t),o=LP.t[k]||{best:0,stars:0,att:0};o.att++;o.best=Math.max(o.best,pct);o.stars=Math.max(o.stars,st);LP.t[k]=o;saveL()}
 try{if(window.AKNP&&!Q.mm)AKNP.fin(Q.s,Q.c,Q.ti>=0?topics(Q.s,Q.c)[Q.ti]:null,pct,n,Q.ok,Q.ti)}catch(e){}progress.sessions++;storeProgress();Q.pct=pct;Q.st=st;if(st>=2)SFX.level();
 V={v:'result',s:Q.s,c:Q.c,ti:Q.ti};try{history.replaceState({svLearn:V},'',location.href)}catch(e){}resultView(V);
}
function resultView(v){
 if(!Q||Q.pct==null){hubView({v:'hub',c:LP.cls||5});return}
 const {s,c,ti}=Q;const m=LS_[s];const n=Q.list.length;const ts=topics(s,c);const t=ti>=0?ts[ti]:null;
 const msg=Q.st===3?word('అద్భుతం! 🏆','Brilliant! 🏆'):Q.st===2?word('చాలా బాగుంది! 🎉','Very good! 🎉'):Q.st===1?word('మంచి ప్రయత్నం 👍','Good try 👍'):word('మళ్ళీ ప్రయత్నించండి, తప్పక వస్తుంది 💪','Try again, you will get it 💪');
 const mis=Q.miss.map(q=>`<li>${esc(W(q.q))}<br>✔ <b>${esc(W(q.opts[q.ai]))}</b>${q.x?`<br><small>💡 ${esc(W(q.x))}</small>`:''}</li>`).join('');
 const hasNext=ti>=0&&ti<ts.length-1;
 shell(topBar(`${m.i} ${t?esc(W(t)):word('తరగతి టెస్ట్','Class test')}`)+`<div class="lr-big">${Q.st>=2?'🎉':Q.st===1?'👍':'🌱'}</div><div class="lr-pct">${Q.ok} / ${n}</div><div class="lr-stars">${stars(Q.st)}</div><p class="lr-sub">${msg}</p>
 ${mis?`<div class="lr-card"><h3 style="margin-top:0">${word('ఈ ప్రశ్నలు మళ్ళీ చూడండి','Review these')}</h3><ul class="lr-mis">${mis}</ul></div>`:''}
 <button class="lr-go" id="ag">🔁 ${word('మళ్ళీ ప్రాక్టీస్','Practice again')}</button>
 ${hasNext?`<button class="lr-go alt" id="nt">➡ ${word('తరువాత అంశం','Next topic')}</button>`:''}
 <button class="lr-go alt" id="sh">📤 ${word('స్కోర్ షేర్ చేయండి','Share score')}</button>
 <button class="lr-go alt" id="bk">📚 ${word('అంశాల జాబితా','Topic list')}</button>`);
 wireTop();
 $('#ag').onclick=()=>{SFX.tap();startQuiz(s,c,ti)};
 const nt=$('#nt');if(nt)nt.onclick=()=>{SFX.tap();nav({v:'topic',s,c,ti:ti+1})};
 $('#sh').onclick=()=>shareText(word(`నేను అక్షరనోవాలో ${W(m)} ${t?'· '+W(t):''} లో ${Q.ok}/${n} స్కోర్ చేశాను! మీరూ ప్రయత్నించండి:`,`I scored ${Q.ok}/${n} in ${W(m)} ${t?'· '+W(t):''} on AksharaNova! Try it:`));
 $('#bk').onclick=()=>{SFX.tap();nav({v:'subj',s,c})};
}
// ---------- navigation ----------
let lastLang=S.lang;
window.addEventListener('popstate',e=>{
 const st=e.state;
 if(st&&st.svLearn){active=true;let v=st.svLearn;if(v.v==='quiz'||v.v==='result')v=v.ti>=0?{v:'topic',s:v.s,c:v.c,ti:v.ti}:{v:'subj',s:v.s,c:v.c};V=v;lastLang=S.lang;
  const need=v.s&&v.s!=='hub'&&!D[v.s];if(need)load(v.s).then(()=>render(v)).catch(()=>{V={v:'hub',c:LP.cls||5};render(V)});else render(v)}
 else if(active){active=false;if(S.lang!==lastLang){S.lang=lastLang;save();document.documentElement.lang=S.lang;home()}}
});
function open(hash){
 active=true;lastLang=S.lang;let v={v:'hub',c:LP.cls||S.cls||5};
 const m=/^#learn\/(\w+)(?:\/(\d+))?/.exec(hash||'');
 const go=()=>{try{history.pushState({svLearn:v},'',location.href)}catch(e){}V=v;render(v)};
 if(m&&(m[1]==='coach'||m[1]==='exam')){v={v:m[1],c:v.c};go();return}
 if(m&&LS_[m[1]]){const s=m[1],c=m[2]?Math.max(1,Math.min(10,+m[2])):v.c;v={v:'subj',s,c};load(s).then(go).catch(()=>{v={v:'hub',c};go()});return}
 go();
}
window.LearnApp={open,D,LG,fromSpec,round,topics,SUBS,load,pq};
window.LearnApp.selfTest=async function(){
 const rep={errors:[],totalQ:0,totalTopics:0,subjects:{}};
 for(const s of SUBS){await load(s).catch(()=>rep.errors.push('load fail '+s));
  const cls=s==='current'?[0]:[1,2,3,4,5,6,7,8,9,10];const sr={topics:0,q:0};
  for(const c of cls){for(const t of topics(s,c)){rep.totalTopics++;sr.topics++;
    if(!t.id||!t.te||!t.en)rep.errors.push(`${s}-${c}: topic missing id/te/en ${t.id}`);
    (t.q||[]).forEach((x,k)=>{sr.q++;rep.totalQ++;const p=x.split('|');if(p.length<5||p.length>6){rep.errors.push(`${s}-${c}-${t.id} q${k}: ${p.length} fields: ${x.slice(0,40)}`);return}
     const o=pq(x);if(new Set(o.opts.map(z=>z.te+'/'+z.en)).size<4)rep.errors.push(`${s}-${c}-${t.id} q${k}: duplicate options: ${x.slice(0,50)}`);
     if(o.opts.some(z=>!z.te.trim()||!z.en.trim())||!o.q.te.trim())rep.errors.push(`${s}-${c}-${t.id} q${k}: empty text`)});
    for(const g of (t.g||[])){for(let r=0;r<40;r++){try{const o=fromSpec(g);if(o.ai<0)rep.errors.push(`${s}-${c}-${t.id}: gen ${g} bad ai`)}catch(e){rep.errors.push(`${s}-${c}-${t.id}: gen ${g} ${e.message}`);break}}}
    if(!(t.q||[]).length&&!(t.g||[]).length)rep.errors.push(`${s}-${c}-${t.id}: no questions`);
    try{if(round(s,c,t,10).length<4)rep.errors.push(`${s}-${c}-${t.id}: round too short`)}catch(e){rep.errors.push(`${s}-${c}-${t.id}: round ${e.message}`)}
  }}rep.subjects[s]=sr}
 return rep;
};
})();
