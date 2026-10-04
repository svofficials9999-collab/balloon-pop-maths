/* AksharaNova Learn: class 1-10 practice-first learning (added in v3). Subject data lives in ./learn/<subject>.js */
(function(){
'use strict';
const D={};
window.LD={reg(s,d){D[s]=d}};
const bo=s=>{s=String(s);if(s.indexOf('\u00A7')<0&&s.indexOf('~')>0){const p=s.split('~');return {te:p[0],en:p[1]}}return bi(s)};
const bi=s=>{const p=String(s).split('\u00A7');return p.length>1?{te:p[0],en:p[1]}:{te:String(s),en:String(s)}};
const W=o=>(o&&(o[S.lang]||o.te||o.en))||'';
const SUBS=['telugu','english','maths','science','social','current'];
const LS_={telugu:{i:'🪷',te:'తెలుగు',en:'Telugu',c:'#ff375f'},english:{i:'🔤',te:'ఇంగ్లీష్',en:'English',c:'#0a84ff'},maths:{i:'➕',te:'గణితం',en:'Maths',c:'#ff9f0a'},science:{i:'🔬',te:'సైన్స్',en:'Science',c:'#30d158'},social:{i:'🏛️',te:'సాంఘిక శాస్త్రం',en:'Social Studies',c:'#ffd60a'},current:{i:'📰',te:'వర్తమాన అంశాలు',en:'Current Affairs',c:'#64d2ff'}};
let LP=readStore('bm2-learn',{t:{},cls:5});
if(!LP.t)LP.t={};
const saveL=()=>LS.set('bm2-learn',JSON.stringify(LP));
let active=false,V={v:'hub',c:LP.cls||S.cls||5},Q=null,loadP={};
function load(s){
 if(D[s])return Promise.resolve();
 return loadP[s]||(loadP[s]=new Promise((res,rej)=>{const e=document.createElement('script');e.src='./learn/'+s+'.js?v='+VER;e.onload=()=>D[s]?res():rej();e.onerror=()=>{loadP[s]=null;rej()};document.head.appendChild(e)}));
}
function topics(s,c){const d=D[s];if(!d)return[];return s==='current'?(d.all||[]):(d[c]||[])}
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
trig3:(en,a)=>{const m=/(\d+)\/(\d+)/.exec(en);if(!m)return null;const o=+m[1],h=+m[2],ad=Math.round(Math.sqrt(h*h-o*o));return `${o}/${ad}`===a?E(`ఎదుటి భుజం ${o}, కర్ణం ${h}. ప్రక్క భుజం² = ${h}² − ${o}² = ${ad*ad}, ప్రక్క భుజం = ${ad}. tan A = ${o}/${ad}`,`Opposite ${o}, hypotenuse ${h}. Adjacent² = ${h}² − ${o}² = ${ad*ad}, so adjacent = ${ad}. tan A = ${o}/${ad}`):null},
trig4:(en,a)=>{const n=nn(en)[0];return 90-n===+a?E(`sin θ = cos(90° − θ) కాబట్టి 90 − ${n} = ${a}`,`sin θ = cos(90° − θ), so 90 − ${n} = ${a}`):null},
};return(name,en,a)=>{const f=F[name];if(!f)return null;try{return f(en,a)}catch(e){return null}}})();

window.LD._t=()=>({D,fromSpec});
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
.lr-ib{background:#202b50;border:1px solid #7ab9ff55;color:#f6f8ff;border-radius:12px;min-width:42px;height:42px;font-size:18px;font-weight:800;padding:0 10px}
.lr-sub{text-align:center;color:#bcd2ff;font-size:13px;margin:0 0 8px}
.lr-h{margin:12px 0 6px;color:#8bebf6;font-size:13px;letter-spacing:1px;font-weight:800}
.lr-chips{display:grid;grid-template-columns:repeat(5,1fr);gap:7px}.lr-chip{height:46px;border-radius:12px;background:#202b50;color:#f6f8ff;font-size:19px;font-weight:800;border:1px solid #7ab9ff55;box-shadow:0 3px 0 #070b1c;position:relative}.lr-chip.on{background:linear-gradient(135deg,#35cbe0,#6773f4);color:#08132b}.lr-chip small{position:absolute;right:4px;bottom:1px;font-size:9px;font-weight:700}
.lr-subs{display:grid;grid-template-columns:1fr 1fr;gap:9px}.lr-sc{background:#202b50;border:1px solid #7ab9ff55;border-top:4px solid var(--c);border-radius:16px;padding:10px 8px;text-align:center;font-weight:800;font-size:15px;min-height:88px;display:flex;flex-direction:column;align-items:center;gap:3px;box-shadow:0 3px 0 #070b1c;color:#f6f8ff}.lr-sc span{font-size:28px}.lr-sc small{font-size:11px;font-weight:600;color:#bcd2ff}
.lr-bar{height:6px;background:#394567;border-radius:6px;overflow:hidden;width:100%;margin-top:4px}.lr-bar i{display:block;height:100%;background:linear-gradient(90deg,#56d6cf,#ad8aff)}
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
function subjProgress(s,c){const ts=topics(s,c);return {done:ts.filter(t=>stat(s,c,t).stars>0).length,total:ts.length}}
function classDone(c){let d=0;SUBS.forEach(s=>{if(s!=='current')topics(s,c).forEach(t=>{if(stat(s,c,t).stars>0)d++})});return d}
const totalStars=()=>Object.values(LP.t).reduce((a,b)=>a+(b.stars||0),0);
function speak(text,math){const l=vlang(!!math);if(!l){toast(word('ఈ ఫోన్‌లో తెలుగు వాయిస్ లేదు','No Telugu voice on this phone'));return}const was=S.voice;S.voice=true;try{say(text,l)}finally{S.voice=was}}
async function shareText(msg){const url=location.origin+location.pathname;try{if(navigator.share){await navigator.share({text:msg,url});return}}catch(e){if(e&&e.name==='AbortError')return}window.open('https://wa.me/?text='+encodeURIComponent(msg+' '+url),'_blank')}
// ---------- views ----------
function render(v){try{SS&&SS.cancel()}catch(e){}({hub:hubView,subj:subjView,topic:topicView,quiz:quizView,result:resultView}[v.v]||hubView)(v)}
function hubView(v){
 const c=v.c;LP.cls=c;saveL();
 const cards=SUBS.map(s=>{const m=LS_[s];const p=subjProgress(s,c);return `<button class="lr-sc" data-s="${s}" style="--c:${m.c}"><span>${m.i}</span>${W(m)}<small>${s==='current'?word('అన్ని తరగతులకు','For everyone'):(p.total?`${p.done}/${p.total} ⭐`:word('నేర్చుకోండి','Learn'))}</small></button>`}).join('');
 let ch='';for(let i=1;i<=10;i++){const d=classDone(i);ch+=`<button class="lr-chip${i===c?' on':''}" data-c="${i}">${i}${d?`<small>⭐${d}</small>`:''}</button>`}
 shell(topBar('📚 '+word('నేర్చుకో · అక్షరనోవా','Learn · AksharaNova'))+`<p class="lr-sub">⭐ ${totalStars()} ${word('స్టార్స్','stars')} · ${word('ముందు ప్రాక్టీస్, అవసరమైతే పాఠం','Practice first, theory when you need it')}</p>
 <div class="lr-h">${word('తరగతి ఎంచుకోండి','CHOOSE YOUR CLASS')}</div><div class="lr-chips">${ch}</div>
 <div class="lr-h">${word('విషయం ఎంచుకోండి','CHOOSE A SUBJECT')} · ${word('తరగతి','Class')} ${c}</div><div class="lr-subs">${cards}</div>
 <button class="lr-go alt" id="shr">📤 ${word('స్నేహితులకు, గ్రామ గ్రూపులకు షేర్ చేయండి','Share with friends and village groups')}</button>
 <p class="lr-note">${word('ప్రకటనలు లేవు · లాగిన్ లేదు · మీ ప్రగతి ఈ ఫోన్‌లోనే','No ads · No login · Your progress stays on this phone')}</p>`);
 wireTop();
 document.querySelectorAll('.lr-chip').forEach(b=>b.onclick=()=>{SFX.tap();V={v:'hub',c:+b.dataset.c};try{history.replaceState({svLearn:V},'',location.href)}catch(e){}hubView(V)});
 document.querySelectorAll('.lr-sc').forEach(b=>b.onclick=()=>{SFX.tap();openSubj(b.dataset.s,c)});
 $('#shr').onclick=()=>shareText(word('అక్షరనోవా: 1 నుండి 10వ తరగతి వరకు తెలుగు, ఇంగ్లీష్, గణితం, సైన్స్, సాంఘిక శాస్త్రం ప్రాక్టీస్ యాప్. ఉచితం, లాగిన్ లేదు.','AksharaNova: free Class 1-10 practice app for Telugu, English, Maths, Science and Social. No login.'));
}
const SOON=['science','current'];
function openSubj(s,c){if(SOON.includes(s)&&!D[s]){toast(word('త్వరలో వస్తోంది! ఇప్పుడు గణితం, సాంఘిక శాస్త్రం నేర్చుకోండి 🚀','Coming very soon! Try Maths or Social now 🚀'),3200);return}toast(word('లోడ్ అవుతోంది…','Loading…'),900);load(s).then(()=>nav({v:'subj',s,c})).catch(()=>toast(word('ఒకసారి ఇంటర్నెట్ కావాలి. తరువాత ఆఫ్‌లైన్‌లో కూడా పనిచేస్తుంది.','Needs internet once. After that it works offline too.'),3500))}
function subjView(v){
 const {s,c}=v;const m=LS_[s];const ts=topics(s,c);
 const rows=ts.map((t,i)=>{const st=stat(s,c,t);return `<button class="lr-row" data-i="${i}"><span class="ic">${t.i||'📘'}</span><span class="tx">${esc(W(t))}<small>${st.att?word('ఉత్తమం','Best')+' '+st.best+'%':word('కొత్త','New')}</small></span><span class="st">${stars(st.stars)}</span></button>`}).join('');
 shell(topBar(`${m.i} ${W(m)}${s==='current'?'':' · '+word('తరగతి','Class')+' '+c}`)+
  (s==='current'?'':`<div class="lr-chips" style="grid-template-columns:repeat(10,1fr);gap:4px">${[1,2,3,4,5,6,7,8,9,10].map(i=>`<button class="lr-chip${i===c?' on':''}" style="height:36px;font-size:15px" data-c="${i}">${i}</button>`).join('')}</div>`)+
  `<div class="lr-h">${word('అంశాలు · ఒక్కొక్కటి ప్రాక్టీస్ చేయండి','TOPICS · PRACTICE EACH ONE')}</div>${rows||`<div class="lr-card">${word('ఈ తరగతికి అంశాలు త్వరలో వస్తాయి.','Topics for this class are coming soon.')}</div>`}
  ${ts.length?`<button class="lr-go" id="ct">🎯 ${word('తరగతి టెస్ట్ · అన్ని అంశాలు కలిపి (15)','Class test · all topics mixed (15)')}</button>`:''}`);
 wireTop();
 document.querySelectorAll('.lr-chip').forEach(b=>b.onclick=()=>{SFX.tap();const nc=+b.dataset.c;LP.cls=nc;saveL();V={v:'subj',s,c:nc};try{history.replaceState({svLearn:V},'',location.href)}catch(e){}render(V)});
 document.querySelectorAll('.lr-row').forEach(b=>b.onclick=()=>{SFX.tap();nav({v:'topic',s,c,ti:+b.dataset.i})});
 const ct=$('#ct');if(ct)ct.onclick=()=>{SFX.tap();startQuiz(s,c,-1)};
}
function topicView(v){
 const {s,c,ti}=v;const t=topics(s,c)[ti];if(!t){hubView({v:'hub',c});return}const m=LS_[s];
 const notes=(t.n||[]).map(x=>{const txt=W(bi(x));if(txt.startsWith('# '))return `<h3>${esc(txt.slice(2))}</h3>`;if(txt.startsWith('> '))return `<div class="ex">${md(txt.slice(2))}</div>`;return `<p>${md(txt)}</p>`}).join('');
 shell(topBar(`${t.i||'📘'} ${esc(W(t))}`)+`<p class="lr-sub">${m.i} ${W(m)}${s==='current'?'':' · '+word('తరగతి','Class')+' '+c}</p>
  <button class="lr-go" id="pr">✍ ${word('ప్రాక్టీస్ మొదలుపెట్టండి','Start practice')}</button>
  <div class="lr-card hl"><h3 style="margin-top:0">📖 ${word('ముఖ్యాంశాలు','Key points')}</h3>${notes||'<p>\u2013</p>'}<button class="lr-ib" id="rd" style="margin-top:6px">🔊 ${word('వినండి','Listen')}</button></div>
  <button class="lr-go alt" id="pr2">✍ ${word('ప్రాక్టీస్','Practice')}</button>`);
 wireTop();
 const go=()=>{SFX.tap();startQuiz(s,c,ti)};$('#pr').onclick=go;$('#pr2').onclick=go;
 $('#rd').onclick=()=>speak((t.n||[]).map(x=>W(bi(x)).replace(/^[#>] /,'').replace(/\*\*/g,'')).join('. '),s==='maths');
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
 <div class="lr-q"><span>${esc(W(q.q))}</span><button class="sp" id="sp" aria-label="Read aloud">🔊</button></div>
 <div class="lr-opts">${q.opts.map((o,i)=>`<button class="lr-o" data-i="${i}"><b>${'ABCD'[i]}</b><span>${esc(W(o))}</span></button>`).join('')}</div><div id="fb"></div>`);
 $('#lb').onclick=()=>{SFX.tap();if(confirm(word('ప్రాక్టీస్ ఆపేయాలా?','Stop this practice?')))history.back()};
 $('#sp').onclick=()=>speak(W(q.q),Q.s==='maths');
 document.querySelectorAll('.lr-o').forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){
 if(!Q||Q.lock)return;Q.lock=true;const q=Q.list[Q.i];const ok=i===q.ai;
 document.querySelectorAll('.lr-o').forEach((b,j)=>{b.disabled=true;if(j===q.ai)b.classList.add('right');else if(j===i)b.classList.add('wrongp');else b.classList.add('dim')});
 if(ok){Q.ok++;SFX.pop();vib(25)}else{SFX.wrong();vib([60,40,60]);Q.miss.push(q)}
 progress.answered++;if(ok){progress.correct++;progress.stars++}const day=dateKey();if(!progress.days.includes(day))progress.days.push(day);storeProgress();
 const last=Q.i>=Q.list.length-1;
 $('#fb').innerHTML=`<div class="lr-fb ${ok?'ok':'bad'}"><div class="hd">${ok?word('శభాష్! ⭐','Well done! ⭐'):word('పర్వాలేదు, నేర్చుకుందాం 🌱','Not yet, let us learn 🌱')}</div>${ok?'':`<p>${word('సరైన సమాధానం','Correct answer')}: <b>${esc(W(q.opts[q.ai]))}</b></p>`}${q.x?`<p class="why">(${esc(W(q.x))})</p>`:''}<button class="lr-next" id="nx">${last?word('ఫలితం చూడండి ▶','See result ▶'):word('తరువాత ప్రశ్న ▶','Next ▶')}</button></div>`;
 $('#nx').onclick=()=>{SFX.tap();if(last)finish();else{Q.i++;quizView(V)}};
 try{$('#nx').scrollIntoView({behavior:'smooth',block:'end'})}catch(e){}
}
function finish(){
 const n=Q.list.length,pct=Math.round(Q.ok*100/n),st=pct>=90?3:pct>=70?2:pct>=50?1:0;
 if(Q.ti>=0){const t=topics(Q.s,Q.c)[Q.ti],k=tkey(Q.s,Q.c,t),o=LP.t[k]||{best:0,stars:0,att:0};o.att++;o.best=Math.max(o.best,pct);o.stars=Math.max(o.stars,st);LP.t[k]=o;saveL()}
 progress.sessions++;storeProgress();Q.pct=pct;Q.st=st;if(st>=2)SFX.level();
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
