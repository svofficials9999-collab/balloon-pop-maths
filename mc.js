/* SV80-MC master-class patch — multi-class hub. Each class: picture, real life, flashcards, mind map, quiz, summary. */
(function(){
var st=document.createElement("style");
st.textContent="\n#svmc-btn{background:linear-gradient(135deg,#ffd23f,#ff8a00)!important;color:#3a1c00!important;font-weight:900!important}\n#svmc-ov{position:fixed;inset:0;z-index:950;background:#0c1022;display:none;flex-direction:column}\n#svmc-ov.on{display:flex}\n#svmc-ov .mc-head{display:flex;align-items:center;gap:10px;padding:12px 14px 6px;max-width:480px;margin:0 auto;width:100%}\n#svmc-ov .mc-t{flex:1;text-align:center;font-size:16px;font-weight:800;color:#ffe27a}\n#svmc-ov .mc-hb{border:1px solid #505a80;background:#1d2440;color:#fff;border-radius:12px;padding:9px 13px;font-weight:800;font-size:15px}\n#svmc-tabs{display:flex;gap:6px;overflow-x:auto;padding:6px 12px;max-width:480px;margin:0 auto;width:100%}\n#svmc-tabs button{flex:none;border:1px solid #3d4878;background:#1d2440;color:#cdd5f2;border-radius:20px;padding:8px 12px;font-size:12px;font-weight:700}\n#svmc-tabs button.on{background:#aff7d2;color:#112638;border-color:#aff7d2}\n#svmc-body{flex:1;overflow:auto;padding:8px 14px 20px;max-width:480px;margin:0 auto;width:100%}\n.mc-card{background:#171e38;border:1px solid #333d61;border-radius:16px;padding:14px;margin-bottom:10px}\n.mc-card h3{margin:0 0 8px;font-size:15px;color:#aff7d2}\n.mc-card p,.mc-card li{font-size:14px;line-height:1.6;color:#dde3f7}\n.mc-formula{font-size:20px;font-weight:900;text-align:center;color:#ffe27a;margin:10px 0;font-family:Georgia,serif}\n#mc-svg,.mc-svg2{width:100%;height:auto;display:block;border-radius:12px}\n.mc-fl{display:flex;gap:10px;align-items:center;justify-content:center;margin:8px 0}\n.mc-fcard{width:100%;max-width:300px;min-height:150px;border-radius:16px;border:2px solid #ffd76a;background:#232c4e;color:#fff;font-size:16px;font-weight:700;padding:14px;display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.5}\n.mc-fcard.back{background:#16342e;border-color:#3ddc84}\n.mc-q{font-size:15px;font-weight:700;margin:10px 0;color:#fff}\n.mc-opt{display:block;width:100%;text-align:left;margin:6px 0;border:2px solid #3d4878;background:#232c4e;color:#fff;border-radius:12px;padding:11px 12px;font-size:14px}\n.mc-opt.ok{border-color:#3ddc84;background:#14532d}\n.mc-opt.bad{border-color:#ff5f6d;background:#5f1a24;animation:mcshake .4s ease}\n@keyframes mcshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}\n.mc-map{display:flex;flex-direction:column;align-items:center;gap:8px}\n.mc-node{border-radius:14px;padding:10px 14px;font-size:13px;font-weight:700;text-align:center;max-width:320px}\n.mc-center{background:linear-gradient(135deg,#ffd23f,#ff8a00);color:#3a1c00;font-size:15px}\n.mc-branch{background:#232c4e;border:1px solid #4a5680;color:#dde3f7}\n.mc-branch small{display:block;font-weight:400;color:#aab3d6;margin-top:3px;line-height:1.4}\n.mc-line{width:2px;height:12px;background:#4a5680}\n.mc-btn{border:0;border-radius:13px;padding:11px 16px;font-size:14px;font-weight:800;min-height:44px;background:#aff7d2;color:#112638}\n.mc-btn.sec{background:#293451;color:#fff}\n.mc-listen{position:sticky;bottom:8px;float:right}\n";
document.head.appendChild(st);
var dv=document.createElement("div");
dv.id="svmc-ov";dv.setAttribute("aria-hidden","true");
document.body.appendChild(dv);

(function(){
if(window.__svmc)return;window.__svmc=1;
function isTe(){try{return (typeof S!=='undefined'&&S&&S.lang)?S.lang==='te':true}catch(e){return true}}
function SND(k){try{var x=(typeof SFX!=='undefined')?SFX:window.SFX;if(!x)return;if(k==='pop')x.pop();else if(k==='nope')x.wrong();else x.tap()}catch(e){}}
var T={
tabs:[['🔲 చిత్రం','🔲 Picture'],['🌍 జీవితంలో','🌍 Real life'],['🃏 ఫ్లాష్‌కార్డ్స్','🃏 Flashcards'],['🧠 మైండ్ మ్యాప్','🧠 Mind map'],['❓ క్విజ్','❓ Quiz'],['📄 సారాంశం','📄 Summary']],
listen:['🔊 వినండి','🔊 Listen'],stop:['⏹ ఆపు','⏹ Stop'],back:['వెనుక్కి','Back'],
score:['స్కోరు','Score'],again:['మళ్లీ ప్రయత్నించండి','Try again'],next:['తర్వాత','Next'],prev:['ముందు','Back'],flip:['తిప్పండి','Flip'],
hubTitle:['🎓 మాస్టర్ క్లాసులు','🎓 Master Classes'],
hubSub:['ఒక్కో ముఖ్యమైన అంశానికి లోతైన పాఠం — చిత్రం, జీవిత ఉదాహరణలు, ఫ్లాష్‌కార్డ్స్, మైండ్ మ్యాప్, క్విజ్.','One key idea at a time, taught deeply — picture, real life, flashcards, mind map, quiz.'],
avail:['ఇప్పుడు అందుబాటులో','Available now'],
soon:['త్వరలో — మరిన్ని మాస్టర్ క్లాసులు వస్తున్నాయి','Coming soon — more master classes']};
function L(k){var a=T[k];return a[isTe()?0:1]}
/* ---------- Class 1: (a+b)² (Maths, custom interactive picture) ---------- */
var APLUSB={
id:'aplusb',icon:'🧮',custom:true,
te:'(a+b)² వర్గ సూత్రం',en:'(a+b)² — the square formula',
meta:['గణితం · తరగతి 8 · చిత్రం + క్విజ్','Maths · Class 8 · picture + quiz'],
title:['🎓 (a+b)² మాస్టర్ క్లాస్','🎓 (a+b)² Master Class'],
REAL:[
 {t:['వేగంగా లెక్క: 103²','Fast maths: 103²'],b:['103 = 100+3 అని వ్రాయండి. 103² = 100² + 2×100×3 + 3² = 10000 + 600 + 9 = 10609. కేలిక్యులేటర్ లేకుండా సెకన్లలో!','Write 103 = 100+3. Then 103² = 100² + 2×100×3 + 3² = 10000 + 600 + 9 = 10609. Seconds, no calculator!']},
 {t:['గది/టైల్స్ లెక్క','Room and tiles'],b:['గది పొడవు, వెడల్పు రెండింటికీ కొంత జోడించినప్పుడు కొత్త వైశాల్యం = పాత వైశాల్యం + రెండు అదనపు భాగాలు + చిన్న మూల. టైల్స్ ఎన్ని కావాలో లెక్కేసేటప్పుడు ఇదే సూత్రం వాడతారు.','When both sides of a room grow a little, the new area = old area + two extra strips + a small corner. Tile estimators use exactly this formula.']},
 {t:['పొలం/ప్లాట్ కొలత','Field or plot measure'],b:['చదరపు ప్లాట్ వైపు 20 మీ నుండి 22 మీ అయితే వైశాల్యం 400 నుండి 484 చ.మీ — పెరుగుదల 2×20×2 + 2² = 84 చ.మీ. అంచనా వేయడం త్వరగా అవుతుంది.','If a square plot side goes from 20 m to 22 m, the area goes from 400 to 484 sq m — the growth is 2×20×2 + 2² = 84 sq m. Quick estimates become easy.']},
 {t:['5తో అయ్యే సంఖ్యల వర్గం','Squaring numbers ending in 5'],b:['25² = (20+5)² = 400 + 200 + 25 = 625. 85² కూడా అలాగే: (80+5)² = 6400+800+25 = 7225.','25² = (20+5)² = 400 + 200 + 25 = 625. Same for 85² = (80+5)² = 6400+800+25 = 7225.']}],
CARDS:[
 [['(a+b)² సూత్రం','(a+b)² formula'],['a² + 2ab + b²','a² + 2ab + b²']],
 [['మొదటి పదం','First term'],['మొదటిదాని వర్గం: a²','Square of the first: a²']],
 [['మధ్య పదం','Middle term'],['రెండింటి లబ్దం × 2: 2ab','Twice their product: 2ab']],
 [['చివరి పదం','Last term'],['రెండోదాని వర్గం: b²','Square of the second: b²']],
 [['12² = (10+2)² = ?','12² = (10+2)² = ?'],['100 + 40 + 4 = 144','100 + 40 + 4 = 144']],
 [['అతిపెద్ద పొరపాటు','Biggest mistake'],['(a+b)² ≠ a² + b². మధ్యలో 2ab తప్పకుండా ఉంటుంది!','(a+b)² ≠ a² + b². The middle 2ab is always there!']]],
QUIZ:[
 {q:['(a+b)² విస్తరణ ఏది?','Which is the expansion of (a+b)²?'],o:[['a² + b²','a² + b²'],['a² + 2ab + b²','a² + 2ab + b²'],['2a² + 2b²','2a² + 2b²'],['a² − 2ab + b²','a² − 2ab + b²']],a:1},
 {q:['(x+5)² లో మధ్య పదం ఏమిటి?','What is the middle term in (x+5)²?'],o:[['5x','5x'],['25','25'],['10x','10x'],['x²','x²']],a:2},
 {q:['101² = ? (100+1 అని ఆలోచించండి)','101² = ? (think 100+1)'],o:[['10201','10201'],['10001','10001'],['1021','1021'],['12101','12101']],a:0},
 {q:['రేణు "21² = 400 + 41" అని వ్రాశింది. ఎక్కడ తప్పు?','Renu wrote 21² = 400 + 41. Where is the slip?'],o:[['అది సరియైనదే','It is correct'],['2×20×1 = 40 మరిచింది','She forgot 2×20×1 = 40'],['20² తప్పు','20² is wrong'],['1² తప్పు','1² is wrong']],a:1},
 {q:['ఒక చదరపు పొలం వైపు 30 మీ. ప్రతి వైపు 2 మీ పెరిగితే కొత్త వైశాల్యం?','A square field side is 30 m. Each side grows by 2 m. New area?'],o:[['904 చ.మీ','904 sq m'],['960 చ.మీ','960 sq m'],['1024 చ.మీ','1024 sq m'],['964 చ.మీ','964 sq m']],a:2},
 {q:['45² = (40+5)² = ?','45² = (40+5)² = ?'],o:[['2025','2025'],['1625','1625'],['2005','2005'],['2125','2125']],a:0}],
SUMM:[['(a+b)² = a² + 2ab + b² — మూడు భాగాలు: మొదటిది వర్గం, రెండింటి రెట్టింపు లబ్దం, రెండోది వర్గం.','(a+b)² = a² + 2ab + b² — three parts: square of first, twice the product, square of last.'],['చదరపు చిత్రంలో 4 భాగాలుగా చూపవచ్చు: a², ab, ab, b².','In a square picture it shows as 4 areas: a², ab, ab, b².'],['రోజువారీ లెక్కల్లో (103², 45², టైల్స్, ప్లాట్లు) నేరుగా వాడవచ్చు.','Use it directly in daily maths: 103², 45², tiles, plots.'],['గుర్తుంచుకోండి: (a+b)² అంటే a² + b² కాదు — మధ్య 2ab తప్పనిసరి!','Remember: (a+b)² is NOT a² + b² — the middle 2ab is a must!']],
MAP:{center:'(a+b)²',rows:[
 ['a² + 2ab + b²','సూత్రం','Formula'],
 ['🔲','చదరపు చిత్రంలో 4 భాగాలు','4 areas in the square picture'],
 ['🌍','లెక్కలు, టైల్స్, ప్లాట్లు, 5-ముగింపులు','Sums, tiles, plots, numbers ending in 5'],
 ['⚠️','(a+b)² ≠ a² + b²','(a+b)² ≠ a² + b²'],
 ['🎯','103² = 10609 వంటి వేగ లెక్కలు','Fast ones like 103² = 10609']]}};
var mcA=3,mcB=2;
function visual(){
 var a=mcA,b=mcB,tot=a+b,S=260,sa=a*S/tot,sb=b*S/tot;
 function ctl(k,v,lab){return '<div style="display:flex;align-items:center;gap:8px;justify-content:center;margin:4px 0"><b>'+lab+' = '+v+'</b><button class="mc-btn sec" style="min-height:34px;padding:4px 12px" onclick="window.__mcStep(\''+k+'\',-1)">−</button><button class="mc-btn sec" style="min-height:34px;padding:4px 12px" onclick="window.__mcStep(\''+k+'\',1)">+</button></div>'}
 return '<div class="mc-card"><h3>'+(isTe()?'చదరపు చిత్రం — ఎందుకు 2ab వస్తుంది':'The square picture — why 2ab appears')+'</h3>'
 +ctl('a',a,'a')+ctl('b',b,'b')
 +'<svg id="mc-svg" viewBox="0 0 260 260">'
 +'<rect x="0" y="0" width="'+sa+'" height="'+sa+'" fill="#ff6b81" stroke="#0c1022" stroke-width="3"/>'
 +'<rect x="'+sa+'" y="0" width="'+sb+'" height="'+sa+'" fill="#4cd97b" stroke="#0c1022" stroke-width="3"/>'
 +'<rect x="0" y="'+sa+'" width="'+sa+'" height="'+sb+'" fill="#4cd97b" stroke="#0c1022" stroke-width="3"/>'
 +'<rect x="'+sa+'" y="'+sa+'" width="'+sb+'" height="'+sb+'" fill="#5aa9ff" stroke="#0c1022" stroke-width="3"/>'
 +'<text x="'+sa/2+'" y="'+sa/2+'" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">a²='+(a*a)+'</text>'
 +'<text x="'+(sa+sb/2)+'" y="'+sa/2+'" text-anchor="middle" font-size="14" font-weight="900" fill="#083">ab='+(a*b)+'</text>'
 +'<text x="'+sa/2+'" y="'+(sa+sb/2)+'" text-anchor="middle" font-size="14" font-weight="900" fill="#083">ab='+(a*b)+'</text>'
 +'<text x="'+(sa+sb/2)+'" y="'+(sa+sb/2)+'" text-anchor="middle" font-size="18" font-weight="900" fill="#fff">b²='+(b*b)+'</text>'
 +'</svg>'
 +'<div class="mc-formula">('+a+'+'+b+')² = '+a*a+' + '+(2*a*b)+' + '+(b*b)+' = '+(tot*tot)+'</div>'
 +'<p style="text-align:center">'+(isTe()?'ఆకుపచ్చ రెండు భాగాలే 2ab! అవి లేకుండా a² + b² మాత్రమే చేస్తే వైశాల్యం తగ్గిపోతుంది.':'The two green parts are 2ab! Without them, a² + b² alone falls short.')+'</p></div>'
 +listenBtn(isTe()?['(a+b)² = a² + 2ab + b²','చదరపు చిత్రంలో నాలుగు భాగాలు: a వర్గం, రెండు ab భాగాలు, b వర్గం','ఆకుపచ్చ రెండు భాగాలే 2ab']:['(a+b) squared equals a squared plus 2ab plus b squared','The square picture has 4 areas: a squared, two a-b strips, and b squared','The two green strips are the 2ab part']);
}
/* ---------- Class 2: Solar System (Science) ---------- */
function svgSolar(){
 var P=[['బుధుడు','#9c9c9c',26,5],['శుక్రుడు','#e8b26a',40,6],['భూమి','#4c8dff',54,6],['అంగారకుడు','#e06a5a',68,5],['బృహస్పతి','#e0a458',86,10],['శని','#e8d27a',104,9],['యురేనస్','#8fe3e8',120,7],['నెప్ట్యూన్','#6f8dff',134,7]];
 var s='<svg class="mc-svg2" viewBox="0 0 300 300"><rect width="300" height="300" fill="#0b1030" rx="12"/>';
 s+='<circle cx="150" cy="150" r="17" fill="#ffcf3f"/><text x="150" y="154" text-anchor="middle" font-size="9" font-weight="900" fill="#7a4a00">సూర్యుడు</text>';
 for(var i=0;i<P.length;i++){var p=P[i],r=p[2],ang=(i*45+15)*Math.PI/180,x=150+r*Math.cos(ang),y=150+r*Math.sin(ang);
  s+='<circle cx="150" cy="150" r="'+r+'" fill="none" stroke="#334" stroke-width="1"/>';
  s+='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="'+p[3]+'" fill="'+p[1]+'"/>';
  s+='<text x="'+x.toFixed(1)+'" y="'+(y-p[3]-4).toFixed(1)+'" text-anchor="middle" font-size="8.5" fill="#cdd5f2">'+p[0]+'</text>'}
 return s+'</svg>';
}
var SOLAR={
id:'solar',icon:'🪐',
te:'సౌరకుటుంబం',en:'The Solar System',
meta:['సైన్స్ · తరగతి 6 · చిత్రం + క్విజ్','Science · Class 6 · picture + quiz'],
title:['🪐 సౌరకుటుంబం మాస్టర్ క్లాస్','🪐 Solar System Master Class'],
PIC:{h:['కేంద్రంలో సూర్యుడు, చుట్టూ 8 గ్రహాలు','The Sun at the centre, 8 planets around it'],svg:svgSolar,cap:['క్రమం: బుధుడు → శుక్రుడు → భూమి → అంగారకుడు → బృహస్పతి → శని → యురేనస్ → నెప్ట్యూన్','Order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'],
 listen:[['సౌరకుటుంబంలో సూర్యుడు కేంద్రం','ఎనిమిది గ్రహాలు సూర్యుని చుట్టూ కక్ష్యల్లో తిరుగుతాయి','భూమి మూడో గ్రహం'],['The Sun is the centre of the solar system','Eight planets move around the Sun in orbits','Earth is the third planet']]},
REAL:[
 {t:['పగలు - రాత్రి ఎలా?','Why day and night?'],b:['భూమి తన అక్షంపై తిరుగుతుంది (స్వయం భ్రమణం). సూర్యునికి ఎదురుగా ఉన్న భాగానికి పగలు, వెనుక భాగానికి రాత్రి. ఒక భ్రమణం = 24 గంటలు.','Earth spins on its axis (rotation). The side facing the Sun has day, the far side has night. One spin = 24 hours.']},
 {t:['ఋతువులు ఎలా వస్తాయి?','How do seasons come?'],b:['భూమి అక్షం కొంత వాలుతూ సూర్యుని చుట్టూ తిరుగుతుంది (పరిభ్రమణం, 365 రోజులు). ఏ భాగం సూర్యుని వైపు వాలుతుందో అక్కడ వేసవి, దూరంగా ఉంటే శీతాకాలం.','Earth revolves around the Sun (365 days) with a tilted axis. The part tilted towards the Sun gets summer; tilted away, winter.']},
 {t:['గ్రహణాలు','Eclipses'],b:['సూర్యుడు, చంద్రుడు, భూమి ఒకే గీతలోకి వస్తే నీడల వల్ల గ్రహణం ఏర్పడుతుంది — ఇదే భూమి గుండ్రనిదని పురాతన శాస్త్రవేత్తలు రుజువు చేశారు.','When the Sun, Moon and Earth line up, shadows cause eclipses — ancient scientists used this to prove Earth is round.']},
 {t:['ఉపగ్రహాలు, GPS, వాతావరణం','Satellites, GPS, weather'],b:['మనుషులు పంపిన ఉపగ్రహాలు కూడా ఇదే గురుత్వ నియమంతో భూమి చుట్టూ తిరుగుతాయి — మీ ఫోన్ GPS, TV, వాతావరణ సూచనలు అన్నీ వీటివల్లే.','Man-made satellites circle Earth by the same gravity rule — your phone GPS, TV and weather forecasts all depend on them.']}],
CARDS:[
 [['సూర్యుడు ఏమిటి?','What is the Sun?'],['ఒక నక్షత్రం — స్వయం ప్రకాశకం','A star — it makes its own light']],
 [['గ్రహాలు ఎన్ని?','How many planets?'],['8 గ్రహాలు','8 planets']],
 [['క్రమం గుర్తు పెట్టుకో','Remember the order'],['బుధ, శుక్ర, భూ, అంగారక, బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్','Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune']],
 [['అతిపెద్ద గ్రహం','The biggest planet'],['బృహస్పతి (Jupiter)','Jupiter']],
 [['ఉంగరాల గ్రహం','The ringed planet'],['శని — మంచు, రాయి కణాల ఉంగరాలు','Saturn — rings of ice and rock']],
 [['భూమి ప్రత్యేకత','What makes Earth special'],['జీవం ఉన్న ఏకైక గ్రహం (మనకు తెలిసినవరకు)','The only planet known to have life']]],
QUIZ:[
 {q:['సౌరకుటుంబ కేంద్రంలో ఏమి ఉంది?','What is at the centre of the solar system?'],o:[['భూమి§Earth','సూర్యుడు§The Sun','చంద్రుడు§The Moon','బృహస్పతి§Jupiter']],a:1},
 {q:['సౌరకుటుంబంలో గ్రహాలు ఎన్ని?','How many planets are there?'],o:[['7','9','8','10']],a:2},
 {q:['సూర్యునికి మూడో గ్రహం ఏది?','Which is the third planet from the Sun?'],o:[['శుక్రుడు§Venus','అంగారకుడు§Mars','భూమి§Earth','బుధుడు§Mercury']],a:2},
 {q:['అతిపెద్ద గ్రహం ఏది?','Which is the biggest planet?'],o:[['శని§Saturn','బృహస్పతి§Jupiter','నెప్ట్యూన్§Neptune','భూమి§Earth']],a:1},
 {q:['ప్రసిద్ధ ఉంగరాలు ఉన్న గ్రహం?','Which planet has famous rings?'],o:[['శని§Saturn','అంగారకుడు§Mars','శుక్రుడు§Venus','బుధుడు§Mercury']],a:0},
 {q:['పగలు - రాత్రి ఎందుకు ఏర్పడతాయి?','Why do day and night happen?'],o:[['సూర్యుడు భూమి చుట్టూ తిరుగుతాడు§The Sun goes around Earth','భూమి తన అక్షంపై తిరుగుతుంది§Earth spins on its axis','చంద్రుడు సూర్యుని కప్పుతాడు§The Moon covers the Sun','మేఘాల వల్ల§Because of clouds']],a:1}],
SUMM:[['సూర్యుడు ఒక నక్షత్రం; సౌరకుటుంబ కేంద్రం. 8 గ్రహాలు దాని చుట్టూ కక్ష్యల్లో తిరుగుతాయి.','The Sun is a star at the centre. 8 planets orbit it.'],['క్రమం: బుధ, శుక్ర, భూమి, అంగారక, బృహస్పతి, శని, యురేనస్, నెప్ట్యూన్.','Order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.'],['భూమి మూడో గ్రహం — జీవం ఉన్న ఏకైక గ్రహం. పగలు-రాత్రి భూమి స్వయం భ్రమణం వల్లే.','Earth is the third planet — the only one with life. Day and night come from its spin.'],['గ్రహాలు స్వయంగా వెలుగనివ్వవు; సూర్యుని కాంతిని ప్రతిబింబిస్తాయి.','Planets do not glow on their own; they reflect sunlight.']],
MAP:{center:'🪐 సౌరకుటుంబం',rows:[
 ['☀️','సూర్యుడు = కేంద్ర నక్షత్రం','The Sun = the central star'],
 ['8','8 గ్రహాలు — క్రమం గుర్తు','8 planets — know the order'],
 ['🌍','భూమి = 3వ గ్రహం, జీవం','Earth = 3rd planet, has life'],
 ['🔄','స్వయం భ్రమణం → పగలు/రాత్రి; పరిభ్రమణం → సంవత్సరం','Spin → day/night; revolution → year'],
 ['💍','బృహస్పతి అతిపెద్దది; శనికి ఉంగరాలు','Jupiter is biggest; Saturn has rings']]}};
/* ---------- Class 3: Physical Features of India (Social) ---------- */
function svgIndia(){
 return '<svg class="mc-svg2" viewBox="0 0 300 260">'
 +'<rect width="300" height="260" fill="#0b1030" rx="12"/>'
 +'<polygon points="0,62 30,22 60,57 90,17 120,52 150,12 180,52 210,20 240,57 270,27 300,62 300,88 0,88" fill="#dfe9ff"/>'
 +'<text x="150" y="80" text-anchor="middle" font-size="11" font-weight="800" fill="#27407a">హిమాలయాలు · Himalayas</text>'
 +'<rect x="0" y="88" width="300" height="54" fill="#3f9e4d"/>'
 +'<text x="150" y="116" text-anchor="middle" font-size="11" font-weight="800" fill="#eafce9">ఉత్తర మైదానాలు · Northern Plains</text>'
 +'<text x="150" y="130" text-anchor="middle" font-size="9" fill="#dff">గంగా · యమునా · బ్రహ్మపుత్ర</text>'
 +'<polygon points="60,142 240,142 268,202 32,202" fill="#a06a3c"/>'
 +'<text x="150" y="176" text-anchor="middle" font-size="11" font-weight="800" fill="#ffe9d2">దక్కన్ పీఠభూమి · Deccan Plateau</text>'
 +'<rect x="0" y="202" width="300" height="58" fill="#164b7a"/>'
 +'<path d="M0,218 q15,-8 30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0 t30,0" stroke="#9fd8ff" fill="none" stroke-width="2"/>'
 +'<circle cx="272" cy="236" r="3" fill="#ffd76a"/><circle cx="262" cy="247" r="3" fill="#ffd76a"/><circle cx="282" cy="247" r="3" fill="#ffd76a"/>'
 +'<text x="140" y="248" text-anchor="middle" font-size="10" fill="#cfeaff">తీరప్రాంతాలు + ద్వీపాలు · Coasts & Islands</text>'
 +'</svg>';
}
var INDIAGEO={
id:'indiageo',icon:'⛰️',
te:'భారత భూస్వరూపం',en:'Physical Features of India',
meta:['సోషల్ · తరగతి 7 · చిత్రం + క్విజ్','Social · Class 7 · picture + quiz'],
title:['⛰️ భారత భూస్వరూపం మాస్టర్ క్లాస్','⛰️ Physical Features of India Master Class'],
PIC:{h:['ఉత్తరం నుండి దక్షిణానికి నాలుగు భూస్వరూపాలు','Four landforms, north to south'],svg:svgIndia,cap:['హిమాలయాలు → ఉత్తర మైదానాలు → దక్కన్ పీఠభూమి → తీరప్రాంతాలు, ద్వీపాలు','Himalayas → Northern Plains → Deccan Plateau → Coasts & Islands'],
 listen:[['భారతదేశంలో నాలుగు ప్రధాన భూస్వరూపాలు ఉన్నాయి','ఉత్తరాన హిమాలయాలు, మధ్యలో మైదానాలు, దక్షిణాన పీఠభూమి, అంచున తీరప్రాంతాలు'],['India has four main landforms','The Himalayas in the north, plains in the middle, the plateau in the south, and coasts along the edges']]},
REAL:[
 {t:['మన అన్నం మైదానాల నుండి','Our food comes from the plains'],b:['గంగా-బ్రహ్మపుత్ర మైదానాలు మంచి నీరు, వంకర నేలతో అత్యంత సారవంతమైనవి. భారతదేశంలో అత్యధిక ధాన్యం, పంటలు ఇక్కడే పండుతాయి; అందుకే జనసాంద్రత ఎక్కువ.','The Ganga-Brahmaputra plains are very fertile with water and fine soil. Most of the country\'s grain grows here, so these plains are also the most crowded.']},
 {t:['హిమాలయాలు = నదుల పుట్టుక','The Himalayas give us rivers'],b:['గంగా, యమునా, బ్రహ్మపుత్ర వంటి శాశ్వత నదులు హిమాలయ మంచు కరగడంతో పుడతాయి. హిమాలయాలు రుతుపవనాలను ఆపి వర్షాలు కురిపిస్తాయి.','Perennial rivers like the Ganga, Yamuna and Brahmaputra are born from Himalayan ice. The mountains also block monsoon winds and bring rain.']},
 {t:['పీఠభూమి = ఖనిజాల బంగారం','The plateau is a mineral treasure'],b:['దక్కన్ పీఠభూమి చాలా పురాతన భూభాగం. బొగ్గు, ఇనుము, ఇతర ఖనిజాలు ఇక్కడ దొరుకుతాయి — జార్ఖండ్, ఛత్తీస్‌గఢ్ వంటి ప్రాంతాలు గనులకు ప్రసిద్ధం.','The Deccan Plateau is a very old landmass. Coal, iron and other minerals are found here — regions like Jharkhand and Chhattisgarh are famous for mines.']},
 {t:['తీరం = చేపలు, ఓడరేవులు, ఉప్పు','Coasts mean fish, ports, salt'],b:['తూర్పు, పశ్చిమ తీరాల వెంట చేపల వేట, ఓడరేవులు (విశాఖపట్నం, ముంబై), సముద్ర ఉప్పు తయారీ జరుగుతాయి.','Along the east and west coasts we get fishing, big ports (Visakhapatnam, Mumbai) and sea-salt making.']}],
CARDS:[
 [['హిమాలయాలు ఎక్కడ?','Where are the Himalayas?'],['భారతదేశ ఉత్తర సరిహద్దు','Along India\'s northern border']],
 [['మైదానాలు ఏ నదుల వల్ల ఏర్పడ్డాయి?','Which rivers made the plains?'],['గంగా, యమునా, బ్రహ్మపుత్ర','The Ganga, Yamuna and Brahmaputra']],
 [['పీఠభూమి ప్రత్యేకత','What is special about the plateau?'],['చాలా పురాతన భూభాగం; ఖనిజాలు ఎక్కువ','Very old land; rich in minerals']],
 [['పశ్చిమ కనుమలు','The Western Ghats'],['పీఠభూమి పశ్చిమ అంచు పర్వతాలు','Mountains along the plateau\'s western edge']],
 [['తీరప్రాంతాలు','The coastal plains'],['తూర్పు + పశ్చిమ — సముద్రం అంచున ఫ్లాట్ భూమి','East + west — flat land along the sea']],
 [['ద్వీపాలు','The islands'],['అండమాన్ నికోబార్ (బంగాళాఖాతం), లక్షద్వీపం (అరబ్బీ సముద్రం)','Andaman & Nicobar (Bay of Bengal), Lakshadweep (Arabian Sea)']]],
QUIZ:[
 {q:['హిమాలయాలు భారతదేశానికి ఏ దిక్కున ఉన్నాయి?','On which side of India are the Himalayas?'],o:[['దక్షిణం§South','తూర్పు§East','ఉత్తరం§North','పశ్చిమం§West']],a:2},
 {q:['ఉత్తర మైదానాలు ఏ నదుల వల్ల సారవంతమయ్యాయి?','Which rivers made the Northern Plains fertile?'],o:[['గోదావరి, కృష్ణా§Godavari, Krishna','గంగా, బ్రహ్మపుత్ర§Ganga, Brahmaputra','కావేరి, తుంగభద్ర§Kaveri, Tungabhadra','నర్మద, తాపీ§Narmada, Tapi']],a:1},
 {q:['బొగ్గు, ఇనుము వంటి ఖనిజాలకు ఏ భూస్వరూపం ప్రసిద్ధం?','Which landform is famous for coal and iron?'],o:[['దక్కన్ పీఠభూమి§Deccan Plateau','ఉత్తర మైదానాలు§Northern Plains','తీరప్రాంతాలు§Coastal plains','ద్వీపాలు§Islands']],a:0},
 {q:['లక్షద్వీపం ద్వీపాలు ఏ సముద్రంలో ఉన్నాయి?','Lakshadweep islands lie in which sea?'],o:[['బంగాళాఖాతం§Bay of Bengal','హిందూ మహాసముద్రం§Indian Ocean','అరబ్బీ సముద్రం§Arabian Sea','ఎర్ర సముద్రం§Red Sea']],a:2},
 {q:['అండమాన్ నికోబార్ ద్వీపాలు ఎక్కడ ఉన్నాయి?','Where are the Andaman & Nicobar islands?'],o:[['అరబ్బీ సముద్రం§Arabian Sea','బంగాళాఖాతం§Bay of Bengal','మన్నార్ అఖాతం§Gulf of Mannar','కాంబే అఖాతం§Gulf of Khambhat']],a:1},
 {q:['భారతదేశంలో అత్యధిక ధాన్యం పండే ప్రాంతం?','Which region grows most of India\'s grain?'],o:[['హిమాలయ పర్వతాలు§Himalayan mountains','ఉత్తర మైదానాలు§Northern Plains','తార్ ఎడారి§Thar desert','ద్వీపాలు§Islands']],a:1}],
SUMM:[['భారతదేశంలో నాలుగు ప్రధాన భూస్వరూపాలు: హిమాలయాలు, ఉత్తర మైదానాలు, దక్కన్ పీఠభూమి, తీరప్రాంతాలు + ద్వీపాలు.','India has four main landforms: the Himalayas, the Northern Plains, the Deccan Plateau, and the coasts & islands.'],['హిమాలయాలు ఉత్తరాన; అక్కడి మంచు కరగడంతో పెద్ద నదులు పుడతాయి.','The Himalayas are in the north; melting ice there births great rivers.'],['మైదానాలు సారవంతమైనవి — అన్నం పంటలు; పీఠభూమి పురాతనమైనది — ఖనిజాలు.','The plains are fertile — food crops; the plateau is ancient — minerals.'],['ప్రతి భూస్వరూపం అక్కడి ప్రజల జీవన విధానాన్ని, పనిని తీర్చిదిద్దుతుంది.','Each landform shapes the life and work of the people living there.']],
MAP:{center:'⛰️ భారత భూస్వరూపం',rows:[
 ['⛰️','ఉత్తరం: హిమాలయాలు — నదుల పుట్టుక','North: the Himalayas — birth of rivers'],
 ['🌾','మధ్య: మైదానాలు — సారవంతమైనవి','Middle: plains — very fertile'],
 ['🟤','దక్షిణం: పీఠభూమి — ఖనిజాలు','South: plateau — minerals'],
 ['🌊','అంచులు: తీరాలు + ద్వీపాలు','Edges: coasts + islands'],
 ['🧭','భూమి ఆకారం జీవితాన్ని తీర్చిదిద్దుతుంది','Land shapes life']]}};
/* ---------- Class 4: Simple Tenses (English) ---------- */
function svgTenses(){
 return '<svg class="mc-svg2" viewBox="0 0 300 150">'
 +'<rect width="300" height="150" fill="#0b1030" rx="12"/>'
 +'<line x1="20" y1="60" x2="272" y2="60" stroke="#8fa3e8" stroke-width="3"/>'
 +'<polygon points="272,53 288,60 272,67" fill="#8fa3e8"/>'
 +'<circle cx="60" cy="60" r="9" fill="#ff9d5a"/><circle cx="150" cy="60" r="9" fill="#4cd97b"/><circle cx="240" cy="60" r="9" fill="#5aa9ff"/>'
 +'<text x="60" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="#ffcf9d">గతం · Past</text>'
 +'<text x="150" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="#b6f7cd">వర్తమానం · Present</text>'
 +'<text x="240" y="40" text-anchor="middle" font-size="10" font-weight="800" fill="#bcd8ff">భవిష్యత్ · Future</text>'
 +'<text x="60" y="88" text-anchor="middle" font-size="9" fill="#dde3f7">walked · V2</text>'
 +'<text x="150" y="88" text-anchor="middle" font-size="9" fill="#dde3f7">walk / walks · V1</text>'
 +'<text x="240" y="88" text-anchor="middle" font-size="9" fill="#dde3f7">will walk · will+V1</text>'
 +'<text x="150" y="122" text-anchor="middle" font-size="10" fill="#ffe27a">నిన్న ← నేడు → రేపు</text>'
 +'</svg>';
}
var TENSES={
id:'tenses',icon:'⏳',
te:'కాలాలు (Tenses)',en:'Simple Tenses',
meta:['ఇంగ్లీష్ · తరగతి 6 · చిత్రం + క్విజ్','English · Class 6 · picture + quiz'],
title:['⏳ కాలాలు మాస్టర్ క్లాస్','⏳ Simple Tenses Master Class'],
PIC:{h:['సమయ గీతపై మూడు కాలాలు','Three tenses on the timeline'],svg:svgTenses,cap:['V1 = ప్రస్తుతం · V2 = గతం · will + V1 = భవిష్యత్','V1 = present · V2 = past · will + V1 = future'],
 listen:[['మూడు ప్రధాన కాలాలు: గతం, వర్తమానం, భవిష్యత్','గతానికి V2, వర్తమానానికి V1, భవిష్యత్తుకు will V1 వాడతాము'],['There are three main tenses: past, present and future','We use V2 for past, V1 for present, and will plus V1 for future']]},
REAL:[
 {t:['రోజువారీ అలవాట్లు = Present','Daily habits = Present'],b:['"I wake up at 6." "She goes to school daily." అలవాట్లు, నిత్యం జరిగే పనులు ప్రస్తుత కాలంలో చెబుతాం. He/She/It తో క్రియకు -s/-es చేరుతుంది.','"I wake up at 6." "She goes to school daily." Habits and daily actions take the present tense. With he/she/it the verb takes -s or -es.']},
 {t:['నిన్నటి విషయాలు = Past','Yesterday\'s things = Past'],b:['"We played cricket yesterday." "అమ్మమ్మ కథ చెప్పింది — Grandma told a story." గతంలో జరిగినవి చెప్పడానికి V2 (played, told, went) వాడతాం.','"We played cricket yesterday." For things that already happened we use V2 — played, told, went.']},
 {t:['రేపటి ప్రణాళిక = Future','Tomorrow\'s plan = Future'],b:['"We will visit grandma tomorrow." "రేపు వర్షం పడుతుంది — It will rain tomorrow." ముందు జరిగేదానికి will + V1 వాడతాం.','"We will visit grandma tomorrow." For things yet to happen we use will + V1.']},
 {t:['సూచక పదాలు గుర్తించు','Spot the signal words'],b:['every day, always → Present · yesterday, last week → Past · tomorrow, next year → Future. ఈ పదాలు చూస్తేనే కాలం అర్థమవుతుంది!','every day, always → Present · yesterday, last week → Past · tomorrow, next year → Future. These words tell you the tense!']}],
CARDS:[
 [['Present (వర్తమానం)','Present'],['V1 — go, play, eat (అలవాట్లు, నిజాలు)','V1 — go, play, eat (habits, facts)']],
 [['Past (గతం)','Past'],['V2 — went, played, ate (జరిగిపోయినవి)','V2 — went, played, ate (finished actions)']],
 [['Future (భవిష్యత్)','Future'],['will + V1 — will go, will play','will + V1 — will go, will play']],
 [['He/She/It నియమం','The he/she/it rule'],['Present లో క్రియకు -s/-es: she goes, he plays','In the present the verb takes -s/-es: she goes, he plays']],
 [['yesterday చూస్తే...','When you see yesterday...'],['Past! V2 వాడు — I walked yesterday.','Past! Use V2 — I walked yesterday.']],
 [['tomorrow చూస్తే...','When you see tomorrow...'],['Future! will+V1 — I will walk tomorrow.','Future! will + V1 — I will walk tomorrow.']]],
QUIZ:[
 {q:['She ___ to school daily.','She ___ to school daily.'],o:[['go','goes','went','will go']],a:1},
 {q:['We ___ cricket yesterday.','We ___ cricket yesterday.'],o:[['play','will play','played','plays']],a:2},
 {q:['I ___ you tomorrow.','I ___ you tomorrow.'],o:[['will help','helped','helps','helping']],a:0},
 {q:['"రేపు" (tomorrow) అనే పదం ఏ కాలం సూచిస్తుంది?','The word "tomorrow" signals which tense?'],o:[['గతం§Past','వర్తమానం§Present','భవిష్యత్§Future','ఏదీకాదు§None']],a:2},
 {q:['"write" యొక్క V2 రూపం?','What is the V2 (past) form of "write"?'],o:[['writed','wrote','written','writes']],a:1},
 {q:['ఏ వాక్యం ప్రస్తుత అలవాటును చెబుతుంది?','Which sentence shows a present habit?'],o:[['He drank milk yesterday.§He drank milk yesterday.','He will drink milk tomorrow.§He will drink milk tomorrow.','He drinks milk every morning.§He drinks milk every morning.','He is drinking milk now.§He is drinking milk now.']],a:2}],
SUMM:[['మూడు ప్రధాన కాలాలు: Present (V1), Past (V2), Future (will + V1).','Three main tenses: Present (V1), Past (V2), Future (will + V1).'],['He/She/It తో ప్రస్తుత కాలంలో క్రియకు -s/-es: she goes, he plays.','With he/she/it in the present, the verb takes -s/-es: she goes, he plays.'],['సూచక పదాలు గుర్తు పెట్టుకో: every day → present, yesterday → past, tomorrow → future.','Remember signal words: every day → present, yesterday → past, tomorrow → future.'],['ముందు సూచక పదం చూసి, ఆ తర్వాత క్రియ రూపం ఎంచుకో — రెండు మార్కుల పొరపాట్లు తప్పతాయి!','Read the signal word first, then pick the verb form — no more tense mistakes!']],
MAP:{center:'⏳ మూడు కాలాలు',rows:[
 ['🟢','Present = V1 (అలవాట్లు)','Present = V1 (habits)'],
 ['🟠','Past = V2 (జరిగిపోయినవి)','Past = V2 (finished)'],
 ['🔵','Future = will + V1 (రాబోయేవి)','Future = will + V1 (coming)'],
 ['👤','He/She/It + s: she goes','He/She/It + s: she goes'],
 ['🔑','yesterday→Past · every day→Present · tomorrow→Future','yesterday→Past · every day→Present · tomorrow→Future']]}};
/* ---------- Engine ---------- */
var ov=document.getElementById('svmc-ov'),cur=0,qi=0,qScore=0,cardI=0,cardFlip=false,inList=true,curCls=APLUSB;
function el(id){return document.getElementById(id)}
function OL(x){var p=Array.isArray(x)?x:String(x).split('§');return isTe()?p[0]:(p[1]||p[0])}
function listenBtn(lines){
 return '<button class="mc-btn sec mc-listen" onclick="(function(b){if(b.__on){b.__on=false;b.textContent=b.dataset.l;window.speechSynthesis.cancel()}else{b.__on=true;b.textContent=b.dataset.s;var u=new SpeechSynthesisUtterance(b.dataset.txt);u.lang=b.dataset.lang;speechSynthesis.cancel();speechSynthesis.speak(u);u.onend=function(){b.__on=false;b.textContent=b.dataset.l}}})(this)" data-l="'+L('listen')+'" data-s="'+L('stop')+'" data-lang="'+(isTe()?'te-IN':'en-IN')+'" data-txt="'+lines.join('. ').replace(/"/g,'')+'">'+L('listen')+'</button>';
}
function stopSpeak(){try{speechSynthesis.cancel()}catch(e){}}
function picGeneric(){
 var P=curCls.PIC;
 return '<div class="mc-card"><h3>'+P.h[isTe()?0:1]+'</h3>'+P.svg()+'<div class="mc-formula" style="font-size:15px;line-height:1.5">'+P.cap[isTe()?0:1]+'</div></div>'
 +listenBtn(P.listen[isTe()?0:1]);
}
function realLife(){
 return curCls.REAL.map(function(r){return '<div class="mc-card"><h3>'+OL(r.t)+'</h3><p>'+OL(r.b)+'</p></div>'}).join('')
 +listenBtn(curCls.REAL.map(function(r){return OL(r.t)+'. '+OL(r.b)}));
}
function flash(){
 var CARDS=curCls.CARDS,c=CARDS[cardI];
 return '<div class="mc-card" style="text-align:center"><h3>'+T.tabs[2][isTe()?0:1]+'</h3>'
 +'<button class="mc-fcard '+(cardFlip?'back':'')+'" onclick="window.__mcFlip()">'+(cardFlip?OL(c[1]):OL(c[0]))+'</button>'
 +'<p style="color:#9aa5cf;font-size:12px">'+(cardI+1)+' / '+CARDS.length+'</p>'
 +'<div style="display:flex;gap:8px;justify-content:center"><button class="mc-btn sec" onclick="window.__mcCard(-1)">'+L('prev')+'</button><button class="mc-btn" onclick="window.__mcFlip()">'+L('flip')+'</button><button class="mc-btn sec" onclick="window.__mcCard(1)">'+L('next')+'</button></div></div>'
 +listenBtn(CARDS.map(function(x){return OL(x[0])+'. '+OL(x[1])}));
}
function mmap(){
 var M=curCls.MAP;
 return '<div class="mc-card"><div class="mc-map"><div class="mc-node mc-center">'+M.center+'</div>'
 +M.rows.map(function(x){return '<div class="mc-line"></div><div class="mc-node mc-branch"><b>'+x[0]+'</b><small>'+(isTe()?x[1]:x[2])+'</small></div>'}).join('')
 +'</div></div>'+listenBtn([curCls.title[isTe()?0:1]].concat(M.rows.map(function(x){return isTe()?x[1]:x[2]})));
}
function quiz(){
 var QUIZ=curCls.QUIZ;
 if(qi>=QUIZ.length){
  var ok=qScore>=QUIZ.length-1;
  return '<div class="mc-card" style="text-align:center"><h3>'+L('score')+': '+qScore+' / '+QUIZ.length+'</h3><p style="font-size:24px">'+(ok?'🌟':'💪')+'</p><p>'+(ok?(isTe()?'అద్భుతం! పూర్తిగా అర్థమయింది.':'Excellent! You own this.'):(isTe()?'మళ్లీ చదివి ప్రయత్నించండి!':'Review and try again!'))+'</p><button class="mc-btn" onclick="window.__mcQuizR()">'+L('again')+'</button></div>';
 }
 var q=QUIZ[qi];
 return '<div class="mc-card"><p style="color:#9aa5cf;font-size:12px">'+(qi+1)+' / '+QUIZ.length+' · '+L('score')+': '+qScore+'</p><div class="mc-q">'+OL(q.q)+'</div>'
 +q.o.map(function(o,i){return '<button class="mc-opt" onclick="window.__mcAns('+i+',this)">'+OL(o)+'</button>'}).join('')+'</div>';
}
function summary(){
 return '<div class="mc-card"><h3>📄 '+T.tabs[5][isTe()?0:1]+'</h3><ul style="margin:0;padding-left:18px">'
 +curCls.SUMM.map(function(s){return '<li>'+OL(s)+'</li>'}).join('')+'</ul></div>'
 +listenBtn(curCls.SUMM.map(function(s){return OL(s)}));
}
function renderBody(){
 var b=el('svmc-body');
 b.innerHTML=[function(){return curCls.custom?visual():picGeneric()},realLife,flash,mmap,quiz,summary][cur]();
}
window.__mcStep=function(k,d){if(k==='a')mcA=Math.min(9,Math.max(1,mcA+d));else mcB=Math.min(9,Math.max(1,mcB+d));SND('ui');renderBody()};
window.__mcFlip=function(){cardFlip=!cardFlip;SND('ui');renderBody()};
window.__mcCard=function(d){cardI=(cardI+d+curCls.CARDS.length)%curCls.CARDS.length;cardFlip=false;SND('ui');renderBody()};
window.__mcQuizR=function(){qi=0;qScore=0;renderHead()};
window.__mcAns=function(i,btn){
 var QUIZ=curCls.QUIZ,q=QUIZ[qi];if(btn.disabled)return;
 var ok=i===q.a;
 [...el('svmc-body').querySelectorAll('.mc-opt')].forEach(function(o,j){o.disabled=true;if(j===q.a)o.classList.add('ok')});
 if(ok){qScore++;SND('pop')}else{SND('nope');btn.classList.add('bad')}
 setTimeout(function(){qi++;renderBody()},900);
};
function renderHead(){
 inList=false;
 ov.innerHTML='<div class="mc-head"><button class="mc-hb" id="mc-back" aria-label="'+L('back')+'">←</button><div class="mc-t">'+curCls.title[isTe()?0:1]+'</div><button class="mc-hb" id="mc-lang">'+(isTe()?'EN':'తె')+'</button></div><div id="svmc-tabs"></div><div id="svmc-body"></div>';
 el('mc-back').onclick=function(){stopSpeak();renderList()};
 el('mc-lang').onclick=function(){try{document.getElementById('blang').click()}catch(e){}setTimeout(renderHead,150)};
 var tabs=el('svmc-tabs');tabs.innerHTML='';
 T.tabs.forEach(function(t,i){var b=document.createElement('button');b.textContent=t[isTe()?0:1];if(i===cur)b.className='on';b.onclick=function(){cur=i;qi=0;qScore=0;renderHead()};tabs.appendChild(b)});
 renderBody();
}
var CLASSES=[APLUSB,SOLAR,INDIAGEO,TENSES];
var MCSOON=[['🪷','తెలుగు','Telugu'],['➕','మరిన్ని గణితం','More maths'],['🇮🇳','హిందీ','Hindi'],['🌏','జనరల్ నాలెడ్జ్','GK']];
function renderList(){
 inList=true;stopSpeak();
 ov.innerHTML='<div class="mc-head"><button class="mc-hb" id="mc-back" aria-label="close">✕</button><div class="mc-t">'+L('hubTitle')+'</div><button class="mc-hb" id="mc-lang">'+(isTe()?'EN':'తె')+'</button></div><div id="svmc-body"></div>';
 el('mc-back').onclick=closeMc;
 el('mc-lang').onclick=function(){try{document.getElementById('blang').click()}catch(e){}setTimeout(function(){paintBtn();renderList()},150)};
 var h='<div class="mc-card"><p style="margin:0">'+L('hubSub')+'</p></div>';
 h+='<div class="mc-card"><h3>'+L('avail')+'</h3>';
 CLASSES.forEach(function(c,i){
  h+='<button class="mc-opt" data-mc="'+i+'" style="font-size:15px;font-weight:800">'+c.icon+' '+(isTe()?c.te:c.en)+'<br><small style="font-weight:600;color:#aab3d6">'+c.meta[isTe()?0:1]+'</small></button>';
 });
 h+='</div><div class="mc-card"><h3>'+L('soon')+'</h3><div class="mc-map" style="flex-direction:row;flex-wrap:wrap;justify-content:center">'
 +MCSOON.map(function(s){return '<span class="mc-node mc-branch" style="opacity:.6">'+s[0]+' '+(isTe()?s[1]:s[2])+'</span>'}).join('')+'</div></div>';
 var b=el('svmc-body');b.innerHTML=h;
 [...b.querySelectorAll('[data-mc]')].forEach(function(btn){btn.onclick=function(){SND('ui');curCls=CLASSES[+btn.dataset.mc];cur=0;qi=0;qScore=0;cardI=0;cardFlip=false;renderHead()}});
}
function openMc(){renderList();ov.classList.add('on');ov.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}
function closeMc(){stopSpeak();ov.classList.remove('on');ov.setAttribute('aria-hidden','true');document.body.style.overflow=''}
var mcBtn=document.createElement('button');
mcBtn.id='svmc-btn';mcBtn.className='small-btn premium-feature';
function paintBtn(){
 mcBtn.innerHTML='<span style="display:block;font-size:15px;font-weight:900;line-height:1.3">'+(isTe()?'🎓 మాస్టర్ క్లాసులు':'🎓 Master Classes')+'</span><span style="display:block;font-size:11px;font-weight:800;opacity:.92;line-height:1.35;margin-top:2px">'+(isTe()?'Master Classes — గణితం · సైన్స్ · సోషల్ · ఇంగ్లీష్':'Deep lessons — Maths · Science · Social · English')+'</span>';
}
paintBtn();
mcBtn.onclick=function(){SND('ui');openMc()};
function hook(){
 var g=document.querySelector('.hgrid');
 if(g&&!g.querySelector('#svmc-btn'))g.appendChild(mcBtn);
}
new MutationObserver(hook).observe(document.body,{childList:true,subtree:true});
hook();
var langBtn=document.getElementById('blang');
if(langBtn)langBtn.addEventListener('click',function(){paintBtn();if(ov.classList.contains('on'))setTimeout(function(){inList?renderList():renderHead()},120)});
})();
})();
