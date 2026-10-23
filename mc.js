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
 +listenBtn(isTe()?['(a+b)² = a² + 2ab + b²','చదరపు చిత్రంలో నాలుగు భాగాలు: a వర్గం, రెండు ab భాగాలు, b వర్గం','ఆకుపచ్చ రెండు భాగాలే 2ab']:['(a+b) squared equals a squared plus 2ab plus b squared','The square picture has 4 areas: a squared, two a-b strips, and b squared','The two green strips are the 2ab part'],'aplusb-pic');
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
 {q:['సౌరకుటుంబ కేంద్రంలో ఏమి ఉంది?','What is at the centre of the solar system?'],o:['భూమి§Earth','సూర్యుడు§The Sun','చంద్రుడు§The Moon','బృహస్పతి§Jupiter'],a:1},
 {q:['సౌరకుటుంబంలో గ్రహాలు ఎన్ని?','How many planets are there?'],o:['7','9','8','10'],a:2},
 {q:['సూర్యునికి మూడో గ్రహం ఏది?','Which is the third planet from the Sun?'],o:['శుక్రుడు§Venus','అంగారకుడు§Mars','భూమి§Earth','బుధుడు§Mercury'],a:2},
 {q:['అతిపెద్ద గ్రహం ఏది?','Which is the biggest planet?'],o:['శని§Saturn','బృహస్పతి§Jupiter','నెప్ట్యూన్§Neptune','భూమి§Earth'],a:1},
 {q:['ప్రసిద్ధ ఉంగరాలు ఉన్న గ్రహం?','Which planet has famous rings?'],o:['శని§Saturn','అంగారకుడు§Mars','శుక్రుడు§Venus','బుధుడు§Mercury'],a:0},
 {q:['పగలు - రాత్రి ఎందుకు ఏర్పడతాయి?','Why do day and night happen?'],o:['సూర్యుడు భూమి చుట్టూ తిరుగుతాడు§The Sun goes around Earth','భూమి తన అక్షంపై తిరుగుతుంది§Earth spins on its axis','చంద్రుడు సూర్యుని కప్పుతాడు§The Moon covers the Sun','మేఘాల వల్ల§Because of clouds'],a:1}],
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
 {q:['హిమాలయాలు భారతదేశానికి ఏ దిక్కున ఉన్నాయి?','On which side of India are the Himalayas?'],o:['దక్షిణం§South','తూర్పు§East','ఉత్తరం§North','పశ్చిమం§West'],a:2},
 {q:['ఉత్తర మైదానాలు ఏ నదుల వల్ల సారవంతమయ్యాయి?','Which rivers made the Northern Plains fertile?'],o:['గోదావరి, కృష్ణా§Godavari, Krishna','గంగా, బ్రహ్మపుత్ర§Ganga, Brahmaputra','కావేరి, తుంగభద్ర§Kaveri, Tungabhadra','నర్మద, తాపీ§Narmada, Tapi'],a:1},
 {q:['బొగ్గు, ఇనుము వంటి ఖనిజాలకు ఏ భూస్వరూపం ప్రసిద్ధం?','Which landform is famous for coal and iron?'],o:['దక్కన్ పీఠభూమి§Deccan Plateau','ఉత్తర మైదానాలు§Northern Plains','తీరప్రాంతాలు§Coastal plains','ద్వీపాలు§Islands'],a:0},
 {q:['లక్షద్వీపం ద్వీపాలు ఏ సముద్రంలో ఉన్నాయి?','Lakshadweep islands lie in which sea?'],o:['బంగాళాఖాతం§Bay of Bengal','హిందూ మహాసముద్రం§Indian Ocean','అరబ్బీ సముద్రం§Arabian Sea','ఎర్ర సముద్రం§Red Sea'],a:2},
 {q:['అండమాన్ నికోబార్ ద్వీపాలు ఎక్కడ ఉన్నాయి?','Where are the Andaman & Nicobar islands?'],o:['అరబ్బీ సముద్రం§Arabian Sea','బంగాళాఖాతం§Bay of Bengal','మన్నార్ అఖాతం§Gulf of Mannar','కాంబే అఖాతం§Gulf of Khambhat'],a:1},
 {q:['భారతదేశంలో అత్యధిక ధాన్యం పండే ప్రాంతం?','Which region grows most of India\'s grain?'],o:['హిమాలయ పర్వతాలు§Himalayan mountains','ఉత్తర మైదానాలు§Northern Plains','తార్ ఎడారి§Thar desert','ద్వీపాలు§Islands'],a:1}],
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
 {q:['She ___ to school daily.','She ___ to school daily.'],o:['go','goes','went','will go'],a:1},
 {q:['We ___ cricket yesterday.','We ___ cricket yesterday.'],o:['play','will play','played','plays'],a:2},
 {q:['I ___ you tomorrow.','I ___ you tomorrow.'],o:['will help','helped','helps','helping'],a:0},
 {q:['"రేపు" (tomorrow) అనే పదం ఏ కాలం సూచిస్తుంది?','The word "tomorrow" signals which tense?'],o:['గతం§Past','వర్తమానం§Present','భవిష్యత్§Future','ఏదీకాదు§None'],a:2},
 {q:['"write" యొక్క V2 రూపం?','What is the V2 (past) form of "write"?'],o:['writed','wrote','written','writes'],a:1},
 {q:['ఏ వాక్యం ప్రస్తుత అలవాటును చెబుతుంది?','Which sentence shows a present habit?'],o:['He drank milk yesterday.§He drank milk yesterday.','He will drink milk tomorrow.§He will drink milk tomorrow.','He drinks milk every morning.§He drinks milk every morning.','He is drinking milk now.§He is drinking milk now.'],a:2}],
SUMM:[['మూడు ప్రధాన కాలాలు: Present (V1), Past (V2), Future (will + V1).','Three main tenses: Present (V1), Past (V2), Future (will + V1).'],['He/She/It తో ప్రస్తుత కాలంలో క్రియకు -s/-es: she goes, he plays.','With he/she/it in the present, the verb takes -s/-es: she goes, he plays.'],['సూచక పదాలు గుర్తు పెట్టుకో: every day → present, yesterday → past, tomorrow → future.','Remember signal words: every day → present, yesterday → past, tomorrow → future.'],['ముందు సూచక పదం చూసి, ఆ తర్వాత క్రియ రూపం ఎంచుకో — రెండు మార్కుల పొరపాట్లు తప్పతాయి!','Read the signal word first, then pick the verb form — no more tense mistakes!']],
MAP:{center:'⏳ మూడు కాలాలు',rows:[
 ['🟢','Present = V1 (అలవాట్లు)','Present = V1 (habits)'],
 ['🟠','Past = V2 (జరిగిపోయినవి)','Past = V2 (finished)'],
 ['🔵','Future = will + V1 (రాబోయేవి)','Future = will + V1 (coming)'],
 ['👤','He/She/It + s: she goes','He/She/It + s: she goes'],
 ['🔑','yesterday→Past · every day→Present · tomorrow→Future','yesterday→Past · every day→Present · tomorrow→Future']]}};
/* ---------- Class 5: Telugu Sandhi (Telugu grammar) ---------- */
function svgSandhi(){
 return '<svg class="mc-svg2" viewBox="0 0 300 190">'
 +'<rect width="300" height="190" fill="#0b1030" rx="12"/>'
 +'<text x="150" y="26" text-anchor="middle" font-size="12" font-weight="800" fill="#ffe27a">పదం + పదం = కలిసిన పదం</text>'
 +'<rect x="14" y="44" width="272" height="34" rx="10" fill="#232c4e"/><text x="150" y="66" text-anchor="middle" font-size="13" fill="#dde3f7">విద్య + ఆలయం = <tspan fill="#aff7d2" font-weight="900">విద్యాలయం</tspan></text>'
 +'<rect x="14" y="88" width="272" height="34" rx="10" fill="#232c4e"/><text x="150" y="110" text-anchor="middle" font-size="13" fill="#dde3f7">దేవ + ఇంద్రుడు = <tspan fill="#aff7d2" font-weight="900">దేవేంద్రుడు</tspan></text>'
 +'<rect x="14" y="132" width="272" height="34" rx="10" fill="#232c4e"/><text x="150" y="154" text-anchor="middle" font-size="13" fill="#dde3f7">ప్రతి + ఒక్కరు = <tspan fill="#aff7d2" font-weight="900">ప్రతియొక్కరు</tspan></text>'
 +'<text x="150" y="182" text-anchor="middle" font-size="9.5" fill="#8fa3e8">కలిసిన చోట అక్షరం మారుతుంది — అదే సంధి!</text>'
 +'</svg>';
}
var SANDHI={
id:'sandhi',icon:'🪷',
te:'సంధులు (పదాలు కలపడం)',en:'Sandhi — Joining Words',
meta:['తెలుగు · తరగతి 7 · చిత్రం + క్విజ్','Telugu · Class 7 · picture + quiz'],
title:['🪷 సంధులు మాస్టర్ క్లాస్','🪷 Sandhi Master Class'],
PIC:{h:['రెండు పదాలు కలిసినప్పుడు ఏమవుతుంది?','What happens when two words join?'],svg:svgSandhi,cap:['సంధి = పదాలు కలిసిన చోట వచ్చే అక్షర మార్పు','Sandhi = the letter change where two words join'],
 listen:[['సంధి అంటే రెండు పదాలు కలిసినప్పుడు అక్షరాలు మారడం','విద్య ఆలయం కలిపి విద్యాలయం','దేవ ఇంద్రుడు కలిపి దేవేంద్రుడు'],['Sandhi means letters changing when two words join','vidya plus aalayam becomes vidyaalayam','deva plus indrudu becomes devendrudu']]},
REAL:[
 {t:['మనం రోజూ వాడే సంధులు','Sandhis we use every day'],b:['విద్యాలయం, మహర్షి, దేవాలయం, ప్రతియొక్కరు — ఇవన్నీ సంధితో ఏర్పడిన పదాలే! మనం రోజూ మాట్లాడే మాటల్లో సంధులు ఎన్నో ఉన్నాయి.','Vidyalayam, maharshi, devalayam, pratiyokkaru — all these are sandhi words. Our daily speech is full of them.']},
 {t:['పరీక్షలో మార్కులు దెంతులు','Exam marks from sandhi'],b:['"విద్యాలయం సంధి చేయండి" అంటే విద్య + ఆలయం అని విడదీయాలి. "దేవేంద్రుడు" అంటే దేవ + ఇంద్రుడు. విడదీత, కలపడం — రెండూ వస్తాయి.','If the exam says "split vidyalayam", answer vidya + aalayam. Joining and splitting both come as questions.']},
 {t:['పేర్లలో కూడా సంధి','Sandhi hides in names too'],b:['రవి + ఇంద్రుడు = రవీంద్రుడు (రవీంద్ర), సుర + ఇంద్రుడు = సురేంద్రుడు (సురేంద్ర). పేర్లు విన్నప్పుడు సంధి గుర్తుపట్టవచ్చు.','Ravi + indrudu = Raveendrudu, Sura + indrudu = Surendrudu. You can spot sandhi inside common names.']},
 {t:['రాయడంలో జాగ్రత్త','Careful while writing'],b:['"విద్య ఆలయం" వేర్వేరుగా రాసినా అర్థం అదే; కానీ కలిపి రాస్తే సరైన రూపం విద్యాలయం. పొడవు అక్షరం మరిచిపోకూడదు!','Writing vidya aalayam separately gives the same meaning, but joined, the correct form is vidyaalayam — do not drop the long aa!']}],
CARDS:[
 [['సంధి అంటే?','What is sandhi?'],['పదాలు కలిసిన చోట అక్షర మార్పు','The letter change where words join']],
 [['సవర్ణదీర్ఘ సంధి','Savarna-deergha sandhi'],['అ + అ = ఆ: విద్య + ఆలయం = విద్యాలయం','a + a = aa: vidya + aalayam = vidyaalayam']],
 [['గుణసంధి','Guna sandhi'],['అ + ఇ = ఏ: దేవ + ఇంద్రుడు = దేవేంద్రుడు','a + i = e: deva + indrudu = devendrudu']],
 [['గుణసంధి మరో ఉదాహరణ','One more guna example'],['అ + ఋ = అర్: మహా + ఋషి = మహర్షి','a + ru = ar: maha + rishi = maharshi']],
 [['యణాదేశ సంధి','Yanaadesha sandhi'],['ఇ + ఒ = యొ: ప్రతి + ఒక్కరు = ప్రతియొక్కరు','i + o = yo: prati + okkaru = pratiyokkaru']],
 [['విడదీయడం (విగ్రహం)','Splitting (vigraham)'],['విద్యాలయం = విద్య + ఆలయం','vidyaalayam = vidya + aalayam']]],
QUIZ:[
 {q:['విద్యాలయం = విద్య + ?','Vidyalayam = vidya + ?'],o:['ఆలయం','అలయం','ఇలయం','ఉలయం'],a:0},
 {q:['దేవ + ఇంద్రుడు కలిపితే ఏమవుతుంది?','Deva + indrudu gives?'],o:['దేవింద్రుడు','దేవేంద్రుడు','దేవంద్రుడు','దేవీంద్రుడు'],a:1},
 {q:['మహా + ఋషి = ?','Maha + rishi = ?'],o:['మహర్షి','మహాఋషి','మహేర్షి','మహార్షి'],a:0},
 {q:['ప్రతి + ఒక్కరు = ?','Prati + okkaru = ?'],o:['ప్రతివొక్కరు','ప్రతిఒక్కరు','ప్రతియొక్కరు','ప్రతేక్కరు'],a:2},
 {q:['అ + అ కలిస్తే ఏమవుతుంది? (సవర్ణదీర్ఘం)','a + a becomes? (savarna-deergha)'],o:['ఇ','ఆ','ఏ','ఓ'],a:1},
 {q:['సంధి అంటే ఏమిటి?','What is sandhi?'],o:['పదాలు కలిసిన చోట అక్షర మార్పు§The letter change where words join','పదాలు వేరు చేయడం§Splitting words','కొత్త పదాలు కనిపెట్టడం§Inventing new words','పదాల అర్థం మారడం§Changing word meanings'],a:0}],
SUMM:[['సంధి = రెండు పదాలు కలిసిన చోట వచ్చే అక్షర మార్పు.','Sandhi = the letter change where two words join.'],['సవర్ణదీర్ఘం: అ+అ=ఆ (విద్యాలయం); గుణసంధి: అ+ఇ=ఏ (దేవేంద్రుడు), అ+ఋ=అర్ (మహర్షి).','Savarna: a+a=aa (vidyaalayam); Guna: a+i=e (devendrudu), a+ru=ar (maharshi).'],['యణాదేశం: ఇ+ఒ=యొ (ప్రతియొక్కరు).','Yanaadesha: i+o=yo (pratiyokkaru).'],['కలపడం (సంధి), విడదీయడం (విగ్రహం) — రెండూ ప్రాక్టీస్ చేయి, పరీక్షలో రెండూ అడుగుతారు.','Practice both joining (sandhi) and splitting (vigraham) — exams ask both.']],
MAP:{center:'🪷 సంధి',rows:[
 ['🔗','పదం + పదం = కలిసిన పదం','Word + word = joined word'],
 ['ఆ','అ+అ=ఆ: విద్యాలయం','a+a=aa: vidyaalayam'],
 ['ఏ','అ+ఇ=ఏ: దేవేంద్రుడు','a+i=e: devendrudu'],
 ['యొ','ఇ+ఒ=యొ: ప్రతియొక్కరు','i+o=yo: pratiyokkaru'],
 ['✍️','కలపడం + విడదీయడం రెండూ నేర్చుకో','Learn both joining and splitting']]}};
/* ---------- Class 6: Pythagoras (Maths) ---------- */
function svgPyth(){
 return '<svg class="mc-svg2" viewBox="0 0 300 250">'
 +'<rect width="300" height="250" fill="#0b1030" rx="12"/>'
 +'<rect x="30" y="140" width="90" height="90" fill="#ff6b81" opacity=".85"/><text x="75" y="190" text-anchor="middle" font-size="13" font-weight="900" fill="#fff">3²=9</text>'
 +'<rect x="120" y="170" width="120" height="60" fill="#4cd97b" opacity=".85"/><text x="180" y="205" text-anchor="middle" font-size="13" font-weight="900" fill="#063">4²=16</text>'
 +'<polygon points="120,140 120,170 240,170" fill="#232c4e" stroke="#ffd76a" stroke-width="2"/>'
 +'<rect x="120" y="160" width="10" height="10" fill="none" stroke="#ffd76a" stroke-width="1.5"/>'
 +'<text x="112" y="158" text-anchor="end" font-size="11" fill="#dde3f7">3</text>'
 +'<text x="180" y="186" text-anchor="middle" font-size="11" fill="#063" font-weight="700">4</text>'
 +'<polygon points="120,140 240,170 120,170" fill="none" stroke="#5aa9ff" stroke-width="3"/>'
 +'<text x="185" y="148" text-anchor="middle" font-size="11" fill="#9cc4ff">5 (కర్ణం)</text>'
 +'<text x="150" y="30" text-anchor="middle" font-size="14" font-weight="900" fill="#ffe27a">3² + 4² = 5²  →  9 + 16 = 25</text>'
 +'<text x="150" y="55" text-anchor="middle" font-size="11" fill="#dde3f7">లంబకోణ త్రిభుజంలోనే పనిచేస్తుంది!</text>'
 +'</svg>';
}
var PYTH={
id:'pyth',icon:'📐',
te:'పైథాగరస్ సిద్ధాంతం',en:'Pythagoras Theorem',
meta:['గణితం · తరగతి 8 · చిత్రం + క్విజ్','Maths · Class 8 · picture + quiz'],
title:['📐 పైథాగరస్ మాస్టర్ క్లాస్','📐 Pythagoras Master Class'],
PIC:{h:['3-4-5 త్రిభుజం: చిన్న వర్గాలు కలిస్తే పెద్ద వర్గం','The 3-4-5 triangle: small squares add to the big one'],svg:svgPyth,cap:['a² + b² = c² — కర్ణం వర్గం = మిగతా రెండు భుజాల వర్గాల మొత్తం','a² + b² = c² — hypotenuse square = sum of the other two squares'],
 listen:[['లంబకోణ త్రిభుజంలో కర్ణం వర్గం మిగతా రెండు భుజాల వర్గాల మొత్తానికి సమానం','మూడు నాలుగు ఐదు అతి ప్రసిద్ధ త్రిభుజం'],['In a right triangle, the hypotenuse square equals the sum of the other two squares','Three four five is the most famous triangle']]},
REAL:[
 {t:['గోడకు ఆనించిన నిచ్చెన','A ladder against the wall'],b:['నిచ్చెన పొడవు 5 మీ, గోడకు కాలువ 3 మీ దూరంలో ఉంటే ఎంత ఎత్తు వరకు చేరుతుంది? 5² − 3² = 16 → √16 = 4 మీ!','A 5 m ladder stands 3 m from a wall. How high does it reach? 5² − 3² = 16, so the answer is 4 m.']},
 {t:['TV / ఫోన్ స్క్రీన్ కొలత','TV and phone screen size'],b:['స్క్రీన్ సైజు ఎల్లప్పుడూ కర్ణంలో (డయాగనల్) చెబుతారు — 55 అంగుళాల TV అంటే మూల నుండి మూలకు కొలత.','Screen size is always the diagonal — a 55 inch TV is measured corner to corner.']},
 {t:['నేరుగా దగ్గరి దారి','The shortcut across'],b:['చతురస్రాకార మైదానంలో రెండు వైపులా నడిస్తే 3+4=7 మీ; కొలత దాటి (కర్ణం) వెళ్తే 5 మీ మాత్రమే — 2 మీ ఆదా!','Walking around a 3-4 field takes 7 m; crossing the diagonal takes just 5 m — you save 2 m.']},
 {t:['కూలి/కార్పెంటర్ గుర్తు','The masons trick'],b:['గోడలు లంబకోణంలో ఉన్నాయా అని చూడటానికి కూలిలు 3-4-5 కొలత వాడతారు — టేపుతో 3, 4 కొనలు కొనిసి మూడోది 5 అయితే కోణం సరిగ్గా ఉంటుంది.','Masons use the 3-4-5 measure to check right angles — if the third side reads 5, the corner is perfectly square.']}],
CARDS:[
 [['సూత్రం','The formula'],['a² + b² = c²','a² + b² = c²']],
 [['కర్ణం (c)','The hypotenuse (c)'],['లంబకోణానికి ఎదురుగా ఉండే అతి పొడవైన భుజం','The longest side, opposite the right angle']],
 [['ప్రసిద్ధ త్రిభుజం','The famous triangle'],['3, 4, 5 — కచ్చితంగా గుర్తు','3, 4, 5 — know it by heart']],
 [['ఎప్పుడు వాడాలి?','When can you use it?'],['లంబకోణ త్రిభుజాల్లో మాత్రమే!','Right-angled triangles only!']],
 [['మరో త్రిభుజం','Another triple'],['6, 8, 10 (3-4-5 × 2)','6, 8, 10 (3-4-5 times 2)']],
 [['అతిపెద్ద పొరపాటు','Biggest mistake'],['c² కాకుండా c అడుగుతున్నారేమో చూడు — √ మర్చిపోకు!','If they ask for c, do not forget the square root!']]],
QUIZ:[
 {q:['పైథాగరస్ సూత్రం ఏది?','Which is the Pythagoras formula?'],o:['a² + b² = c²','a + b = c','a² − b² = c²','2a + 2b = c'],a:0},
 {q:['కర్ణం అంటే?','What is the hypotenuse?'],o:['అతి చిన్న భుజం§The shortest side','లంబకోణానికి ఎదురుగా ఉండే అతి పొడవైన భుజం§The longest side, opposite the right angle','భూమి వైపు భుజం§The bottom side','ఏ భుజమైనా§Any side'],a:1},
 {q:['భుజాలు 3, 4 అయితే కర్ణం ఎంత?','If the sides are 3 and 4, the hypotenuse is?'],o:['7','25','5','12'],a:2},
 {q:['పైథాగరస్ సిద్ధాంతం ఏ త్రిభుజాలకు వర్తిస్తుంది?','The theorem works for which triangles?'],o:['అన్ని త్రిభుజాలు§All triangles','లంబకోణ త్రిభుజాలు మాత్రమే§Right-angled triangles only','సమబాహు త్రిభుజాలు§Equilateral triangles','సమద్విబాహు త్రిభుజాలు§Isosceles triangles'],a:1},
 {q:['6, 8, ? — మూడో భుజం ఎంత?','6, 8, ? — what is the third side?'],o:['10','14','9','12'],a:0},
 {q:['కర్ణం 13, ఒక భుజం 5 అయితే మరో భుజం?','Hypotenuse 13, one side 5 — the other side?'],o:['8','12','11','√18'],a:1}],
SUMM:[['లంబకోణ త్రిభుజంలో: a² + b² = c² (c = కర్ణం, అతి పొడవైన భుజం).','In a right triangle: a² + b² = c² (c = hypotenuse, the longest side).'],['3-4-5 గుర్తు పెట్టుకో — దాని గుణకాలు (6-8-10, 9-12-15) కూడా త్రిభుజాలే.','Remember 3-4-5 — its multiples (6-8-10, 9-12-15) also work.'],['కర్ణం కావాలంటే వర్గాలు కూడి √ పెట్టు; భుజం కావాలంటే c² నుండి తీసివేసి √ పెట్టు.','For the hypotenuse, add the squares and root; for a side, subtract from c² and root.'],['నిచ్చెన, స్క్రీన్, దగ్గరి దారి, కూలి కొలత — నిజ జీవితంలో నేరుగా వాడవచ్చు.','Ladders, screens, shortcuts, masonry — you can use it directly in real life.']],
MAP:{center:'📐 a² + b² = c²',rows:[
 ['📐','లంబకోణ త్రిభుజాల్లో మాత్రమే','Right triangles only'],
 ['🎯','కర్ణం = అతి పొడవైన భుజం','Hypotenuse = longest side'],
 ['3️⃣','3-4-5 ప్రసిద్ధ త్రిభుజం','3-4-5 the famous triple'],
 ['🪜','నిచ్చెన, స్క్రీన్, దగ్గరి దారి','Ladder, screen, shortcut'],
 ['⚠️','√ మర్చిపోకు!','Do not forget the square root!']]}};
/* ---------- Class 7: Hindi letters and everyday words (Hindi) ---------- */
function svgHindi(){
 return '<svg class="mc-svg2" viewBox="0 0 300 190">'
 +'<rect width="300" height="190" fill="#0b1030" rx="12"/>'
 +'<text x="150" y="24" text-anchor="middle" font-size="12" font-weight="800" fill="#ffe27a">स्वर (అచ్చులు) — Vowels</text>'
 +'<g font-size="22" font-weight="900" text-anchor="middle">'
 +'<rect x="18" y="38" width="52" height="44" rx="10" fill="#232c4e"/><text x="44" y="68" fill="#aff7d2">अ</text>'
 +'<rect x="78" y="38" width="52" height="44" rx="10" fill="#232c4e"/><text x="104" y="68" fill="#aff7d2">आ</text>'
 +'<rect x="138" y="38" width="52" height="44" rx="10" fill="#232c4e"/><text x="164" y="68" fill="#aff7d2">इ</text>'
 +'<rect x="198" y="38" width="52" height="44" rx="10" fill="#232c4e"/><text x="224" y="68" fill="#aff7d2">ई</text>'
 +'<rect x="48" y="92" width="52" height="44" rx="10" fill="#232c4e"/><text x="74" y="122" fill="#ffd76a">उ</text>'
 +'<rect x="108" y="92" width="52" height="44" rx="10" fill="#232c4e"/><text x="134" y="122" fill="#ffd76a">ऊ</text>'
 +'<rect x="168" y="92" width="52" height="44" rx="10" fill="#232c4e"/><text x="194" y="122" fill="#ffd76a">ए</text>'
 +'</g>'
 +'<text x="150" y="160" text-anchor="middle" font-size="11" fill="#dde3f7">अ = అ · आ = ఆ · इ = ఇ · ई = ఈ · उ = ఉ · ऊ = ఊ · ए = ఏ</text>'
 +'<text x="150" y="180" text-anchor="middle" font-size="9.5" fill="#8fa3e8">దేవనాగరి లిపిలో హిందీ రాస్తారు</text>'
 +'</svg>';
}
var HINDI={
id:'hindi',icon:'🇮🇳',
te:'హిందీ అక్షరాలు & మాటలు',en:'Hindi Letters & Words',
meta:['హిందీ · తరగతి 6 · చిత్రం + క్విజ్','Hindi · Class 6 · picture + quiz'],
title:['🇮🇳 హిందీ మాస్టర్ క్లాస్','🇮🇳 Hindi Master Class'],
PIC:{h:['దేవనాగరి అక్షరాలు మన అక్షరాల్లాగే','Devanagari letters look like ours'],svg:svgHindi,cap:['स्वर = అచ్చులు · व्यंजन = హల్లులు','Swar = vowels · Vyanjan = consonants'],
 listen:[['హిందీ దేవనాగరి లిపిలో రాస్తారు. स्वर అంటే అచ్చులు, व्यंजन అంటే హల్లులు.','అ చూసి అ అని, आ చూసి ఆ అని చదవాలి — చాలా అక్షరాలు మన తెలుగు ధ్వనుల్లాగే ఉంటాయి.'],['Hindi is written in the Devanagari script. Swar means vowels and vyanjan means consonants.','Read अ as a and आ as aa — many sounds match Telugu sounds.']]},
REAL:[
 {t:['మొదటి పలకరింపు: नमस्ते','First greeting: namaste'],b:['హిందీలో ఎవర్ని కలిసినా "नमस्ते" అంటారు — మన "నమస్తే" లాగే. జోడించిన చేతులతో చెబితే మర్యాద.','In Hindi everyone is greeted with "namaste", just like our namaste. Join your palms for respect.']},
 {t:['రోజువారీ పదాలు','Everyday words'],b:['पानी = నీళ్లు · किताब = పుస్తకం · स्कूल = పాఠశాల · दोस्त = స్నేహితుడు · घर = ఇల్లు. ఇవి తెలిస్తే హిందీ సినిమా, పాటలు అర్థమవుతాయి!','paani = water · kitaab = book · school = school · dost = friend · ghar = home. Know these and Hindi songs start making sense!']},
 {t:['నీ పేరు చెప్పడం','Saying your name'],b:['"मेरा नाम राम है" = నా పేరు రామ్. మీ పేరు పెట్టి ప్రాక్టీస్ చేయండి: "मेरा नाम ___ है"','"mera naam Ram hai" means my name is Ram. Practice with your own name: mera naam ___ hai.']},
 {t:['లెక్కలు १-५','Numbers 1 to 5'],b:['१ एक (ఒకటి) · २ दो (రెండు) · ३ तीन (మూడు) · ४ चार (నాలుగు) · ५ पांच (ఐదు). హిందీ అంకెలు కొంచెం భిన్నంగా కనిపిస్తాయి కానీ ధ్వని సులభం.','1 ek · 2 do · 3 teen · 4 chaar · 5 paanch. Hindi digits look different but the sounds are easy.']}],
CARDS:[
 [['स्वर (అచ్చులు)','Swar (vowels)'],['अ ఆ इ ఈ उ ऊ ए ఏ ऐ ఓ औ','a aa i ee u oo e ai o au']],
 [['व्यंजन (హల్లులు)','Vyanjan (consonants)'],['क ख ग घ — తెలుగు క ఖ గ ఘ లాగే','ka kha ga gha — like Telugu ka kha ga gha']],
 [['नमस्ते','Namaste'],['పలకరింపు — hello / నమస్తే','A greeting — hello / namaste']],
 [['पानी','Paani'],['నీళ్లు — water','Water']],
 [['धन्यवाद्','Dhanyavaad'],['ధన్యవాదాలు — thank you','Thank you']],
 [['मेरा नाम ___ है','Mera naam ___ hai'],['నా పేరు ___ — my name is ___','My name is ___']]],
QUIZ:[
 {q:['हिंदी ఏ లిపిలో రాస్తారు?','Hindi is written in which script?'],o:['తెలుగు§Telugu','देवनागरि§Devanagari','రోమన్§Roman','అరబిక్§Arabic'],a:1},
 {q:['"पानी" అంటే ఏమిటి?','What does "paani" mean?'],o:['పుస్తకం§Book','నీళ్లు§Water','ఇల్లు§Home','స్నేహితుడు§Friend'],a:1},
 {q:['"नमस्ते" ఎప్పుడు అంటారు?','When do we say "namaste"?'],o:['వెళ్తున్నప్పుడు మాత్రమే§Only while leaving','కలిసినప్పుడు పలకరింపుగా§As a greeting when meeting','కోపంగా ఉన్నప్పుడు§When angry','నవ్వినప్పుడు§When laughing'],a:1},
 {q:['"मेरा नाम सीता है" — ఇక్కడ "मेरा नाम" అంటే?','In "mera naam Sita hai", what does "mera naam" mean?'],o:['నా పేరు§My name','నా ఇల్లు§My home','నా పాఠశాల§My school','నా పుస్తకం§My book'],a:0},
 {q:['హిందీలో "दो" (२) అంటే?','What is "do" (२) in Hindi?'],o:['ఒకటి§One','మూడు§Three','రెండు§Two','ఐదు§Five'],a:2},
 {q:['"धन्यवाद्" కు సరైన తెలుగు అర్థం?','The right Telugu meaning of "dhanyavaad"?'],o:['శుభోదయం§Good morning','ధన్యవాదాలు§Thank you','విడాకులు§Goodbye','మళ్లీ కలుద్దాం§See you again'],a:1}],
SUMM:[['हिंदी దేవనాగరి లిపిలో రాస్తారు; स्वर = అచ్చులు, व्यंजन = హల్లులు.','Hindi is written in Devanagari; swar means vowels, vyanjan means consonants.'],['చాలా హిందీ ధ్వనులు తెలుగులోనే ఉన్నాయి: अ=అ, क=క, म=మ — భయం వద్దు, నేర్చుకోవడం సులభం.','Most Hindi sounds exist in Telugu: a=అ, ka=క, ma=మ — it is easier than it looks.'],['రోజువారీ పదాలు: पानी నీళ్లు, किताब పుస్తకం, दोस्त స్నేహితుడు, घर ఇల్లు, धन्यवाद् ధన్యవాదాలు.','Everyday words: paani water, kitaab book, dost friend, ghar home, dhanyavaad thank you.'],['"मेरा नाम ___ है" అంటే నా పేరు ___ — మొదటి హిందీ వాక్యం రేపే ప్రాక్టీస్ చేయండి!','"mera naam ___ hai" means my name is ___ — practice your first Hindi sentence today!']],
MAP:{center:'🇮🇳 హిందీ మొదటి అడుగులు',rows:[
 ['✍️','లిపి: देवनागरी','Script: Devanagari'],
 ['🔤','स्वर అచ్చులు · व्यंजन హల్లులు','Swar vowels · Vyanjan consonants'],
 ['🙏','नमस्ते = పలకరింపు','Namaste = greeting'],
 ['💧','पानी నీళ్లు · किताब పుస్తకం','Paani water · Kitaab book'],
 ['🗣️','मेरा नाम ___ है = నా పేరు ___','Mera naam ___ hai = my name is ___']]}};
/* ---------- Class 8: India national symbols (GK) ---------- */
function svgGK(){
 var sp='';for(var i=0;i<12;i++){var a=i*30*Math.PI/180;var x1=150+6*Math.cos(a),y1=95+6*Math.sin(a),x2=150+15*Math.cos(a),y2=95+15*Math.sin(a);sp+='<line x1="'+x1.toFixed(1)+'" y1="'+y1.toFixed(1)+'" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'" stroke="#2b5ea7" stroke-width="1.6"/>';}
 return '<svg class="mc-svg2" viewBox="0 0 300 190">'
 +'<rect width="300" height="190" fill="#0b1030" rx="12"/>'
 +'<rect x="70" y="40" width="160" height="110" rx="6" fill="#f4f6ff" stroke="#4a5680"/>'
 +'<rect x="70" y="40" width="160" height="37" fill="#ff9933"/>'
 +'<rect x="70" y="113" width="160" height="37" fill="#138808"/>'
 +'<circle cx="150" cy="95" r="16" fill="none" stroke="#2b5ea7" stroke-width="2.5"/>'+sp
 +'<text x="150" y="26" text-anchor="middle" font-size="12" font-weight="800" fill="#ffe27a">త్రివర్ణ పతాకం — The Tricolour</text>'
 +'<text x="150" y="168" text-anchor="middle" font-size="10" fill="#dde3f7">కేసరి · తెలుపు · ఆకుపచ్చ + నీలి అశోక చక్రం (24 అరలు)</text>'
 +'<text x="150" y="183" text-anchor="middle" font-size="9" fill="#8fa3e8">Saffron · White · Green + navy Ashoka Chakra (24 spokes)</text>'
 +'</svg>';
}
var GKC={
id:'gkindia',icon:'🌏',
te:'భారత జాతీయ చిహ్నాలు',en:'India: National Symbols',
meta:['జనరల్ నాలెడ్జ్ · తరగతి 6 · చిత్రం + క్విజ్','GK · Class 6 · picture + quiz'],
title:['🌏 జాతీయ చిహ్నాలు మాస్టర్ క్లాస్','🌏 National Symbols Master Class'],
PIC:{h:['త్రివర్ణ పతాకం మన గర్వం','The Tricolour is our pride'],svg:svgGK,cap:['24 అరల అశోక చక్రం = ధర్మం ఎప్పటికీ తిరగాలి','24 spokes of the Ashoka Chakra = righteousness must keep moving'],
 listen:[['భారత జాతీయ పతాకాన్ని త్రివర్ణ పతాకం అంటారు. కేసరి, తెలుపు, ఆకుపచ్చ రంగులు, మధ్యలో 24 అరల నీలి అశోక చక్రం.','కేసరి ధైర్యాన్ని, తెలుపు శాంతిని, ఆకుపచ్చ సిరిసంపదలను చెబుతాయి.'],['The Indian national flag is called the Tricolour. It has saffron, white and green bands with a 24-spoke navy Ashoka Chakra in the middle.','Saffron stands for courage, white for peace, and green for prosperity.']]},
REAL:[
 {t:['జెండా ఎగరవేసినప్పుడు','When the flag is hoisted'],b:['స్వాతంత్ర్య దినోత్సవం (ఆగష్టు 15), గణతంత్ర దినోత్సవం (జనవరి 26) రోజుల్లా జెండా ఎగరవేసి జాతీయ గీతం పాడతాం. జెండా భూమిని తాకకూడదు.','On Independence Day (Aug 15) and Republic Day (Jan 26) we hoist the flag and sing the anthem. The flag must never touch the ground.']},
 {t:['జాతీయ గీతం పాడటం','Singing the anthem'],b:['"జనగణమన" — రవీంద్రనాథ్ ఠాకూర్ రాశారు. పాడటానికి సుమారు 52 సెకన్లు. స్కూళ్లలో ప్రార్థన సమయంలో గౌరవంగా నిలబడి పాడతాం.','"Jana Gana Mana" was written by Rabindranath Tagore. It takes about 52 seconds to sing. We stand respectfully while it plays.']},
 {t:['జంతువులు, పక్షులు చుట్టూ','Animals and birds around us'],b:['జాతీయ జంతువు బెంగాల్ పులి — జూలో చూడొచ్చు. జాతీయ పక్షి నెమలి — వానకాలంలో డ్యాన్స్ చేస్తుంది. జాతీయ పువ్వు తామర — చెరువుల్లో పూయుంటుంది.','The national animal is the Bengal tiger, the national bird is the peacock, and the national flower is the lotus. You can spot all three in India.']},
 {t:['చెట్టు, పండు, నది','Tree, fruit and river'],b:['జాతీయ చెట్టు మర్రి (బర్గద్) — విస్తారంగా పెరుగుతుంది. జాతీయ పండు మామిడి. జాతీయ నది గంగ — ఉత్తరాదిని ప్రవహిస్తుంది.','The national tree is the banyan, the national fruit is the mango, and the national river is the Ganga.']}],
CARDS:[
 [['జాతీయ పతాకం','National flag'],['త్రివర్ణం: కేసరి, తెలుపు, ఆకుపచ్చ + అశోక చక్రం','Tricolour: saffron, white, green + Ashoka Chakra']],
 [['జాతీయ గీతం','National anthem'],['జనగణమన — రచయిత రవీంద్రనాథ్ ఠాకూర్','Jana Gana Mana by Rabindranath Tagore']],
 [['జాతీయ జంతువు','National animal'],['బెంగాల్ పులి (tiger)','Bengal tiger']],
 [['జాతీయ పక్షి','National bird'],['నెమలి (peacock)','Peacock']],
 [['జాతీయ పువ్వు','National flower'],['తామర (lotus)','Lotus']],
 [['జాతీయ చెట్టు','National tree'],['మర్రి చెట్టు (banyan)','Banyan tree']]],
QUIZ:[
 {q:['మన జెండాలో మధ్యలో ఉన్న నీలి చక్రాన్ని ఏమంటారు?','What is the navy wheel in the middle of our flag called?'],o:['సూర్య చక్రం§Surya Chakra','అశోక చక్రం§Ashoka Chakra','గాంధీ చక్రం§Gandhi Chakra','నేర్చు చక్రం§Navy wheel'],a:1},
 {q:['అశోక చక్రంలో ఎన్ని అరలు ఉంటాయి?','How many spokes does the Ashoka Chakra have?'],o:['12','18','24','30'],a:2},
 {q:['మన జాతీయ గీతం "జనగణమన" ఎవరు రాశారు?','Who wrote our national anthem "Jana Gana Mana"?'],o:['బంకిం చంద్ర చటర్జీ§Bankim Chandra Chatterjee','రవీంద్రనాథ్ ఠాకూర్§Rabindranath Tagore','మహాత్మా గాంధీ§Mahatma Gandhi','సుభాష్ చంద్రబోస్§Subhas Chandra Bose'],a:1},
 {q:['భారత జాతీయ జంతువు ఏది?','What is the national animal of India?'],o:['సింహం§Lion','ఏనుగు§Elephant','బెంగాల్ పులి§Bengal tiger','చిరుత§Leopard'],a:2},
 {q:['జాతీయ పువ్వు ఏది?','Which is the national flower?'],o:['గులాబీ§Rose','తామర§Lotus','బంతి§Marigold','మల్లె§Jasmine'],a:1},
 {q:['జెండాలో కేసరి (orange) రంగు దేన్ని సూచిస్తుంది?','What does the saffron band of the flag stand for?'],o:['శాంతి§Peace','ధైర్యం, త్యాగం§Courage and sacrifice','సిరిసంపదలు§Prosperity','చదువు§Education'],a:1}],
SUMM:[['జాతీయ పతాకం = త్రివర్ణం: కేసరి (ధైర్యం), తెలుపు (శాంతి), ఆకుపచ్చ (సిరిసంపదలు); మధ్యలో 24 అరల నీలి అశోక చక్రం.','The Tricolour: saffron for courage, white for peace, green for prosperity, with the 24-spoke navy Ashoka Chakra at the centre.'],['జాతీయ గీతం "జనగణమన" రవీంద్రనాథ్ ఠాకూర్ రాశారు; జాతీయ గానం "వందేమాతరం" బంకిం చంద్ర చటర్జీ రాశారు.','The anthem Jana Gana Mana is by Tagore; the national song Vande Mataram is by Bankim Chandra Chatterjee.'],['జంతువు పులి · పక్షి నెమలి · పువ్వు తామర · పండు మామిడి · చెట్టు మర్రి · నది గంగ.','Animal tiger · bird peacock · flower lotus · fruit mango · tree banyan · river Ganga.'],['జెండా గౌరవం: భూమిని తాకకూడదు, పళ్లు చిరిగిపోయిన జెండాను వాడకూడదు.','Respect the flag: it must never touch the ground, and a torn flag must not be used.']],
MAP:{center:'🌏 జాతీయ చిహ్నాలు',rows:[
 ['🚩','పతాకం: త్రివర్ణం + అశోక చక్రం (24 అరలు)','Flag: Tricolour + 24-spoke Chakra'],
 ['🎵','గీతం జనగణమన · గానం వందేమాతరం','Anthem Jana Gana Mana · Song Vande Mataram'],
 ['🐯','జంతువు పులి · పక్షి నెమలి','Animal tiger · bird peacock'],
 ['🌸','పువ్వు తామర · చెట్టు మర్రి','Flower lotus · tree banyan'],
 ['🥭','పండు మామిడి · నది గంగ','Fruit mango · river Ganga']]}};
/* ---------- Engine ---------- */
var ov=document.getElementById('svmc-ov'),cur=0,qi=0,qScore=0,cardI=0,cardFlip=false,inList=true,curCls=APLUSB;
function el(id){return document.getElementById(id)}
function OL(x){var p=Array.isArray(x)?x:String(x).split('§');return isTe()?p[0]:(p[1]||p[0])}
function listenBtn(lines,key){
 return '<button class="mc-btn sec mc-listen" data-key="'+(key||'')+'" onclick="__mcListen(this)" data-l="'+L('listen')+'" data-s="'+L('stop')+'" data-lang="'+(isTe()?'te-IN':'en-IN')+'" data-txt="'+lines.join('. ').replace(/"/g,'')+'">'+L('listen')+'</button>';
}
window.__mcAudioEl=null;
function __mcSha(s){try{return crypto.subtle.digest('SHA-256',new TextEncoder().encode(s)).then(function(b){return Array.from(new Uint8Array(b)).map(function(x){return x.toString(16).padStart(2,'0')}).join('').slice(0,10)}).catch(function(){return null})}catch(e){return Promise.resolve(null)}}
window.__mcListen=function(b){
 if(b.__on){b.__on=false;b.textContent=b.dataset.l;try{speechSynthesis.cancel()}catch(e){}if(window.__mcAudioEl){try{window.__mcAudioEl.pause()}catch(e){}window.__mcAudioEl=null;}return}
 b.__on=true;b.textContent=b.dataset.s;
 var txt=b.dataset.txt;
 var tts=function(){try{var u=new SpeechSynthesisUtterance(txt);u.lang=b.dataset.lang;speechSynthesis.cancel();speechSynthesis.speak(u);u.onend=function(){b.__on=false;b.textContent=b.dataset.l}}catch(e){b.__on=false;b.textContent=b.dataset.l}};
 if(b.dataset.lang!=='te-IN'||!b.dataset.key){tts();return}
 __mcSha(txt).then(function(h){
  if(!b.__on)return;
  if(!h){tts();return}
  var el=new Audio('audio/mc-'+b.dataset.key+'-'+h+'-te.mp3');
  window.__mcAudioEl=el;
  var settled=false,wd=null;
  var bad=function(){if(settled)return;settled=true;if(wd)clearTimeout(wd);try{el.pause()}catch(e){}if(window.__mcAudioEl===el)window.__mcAudioEl=null;if(b.__on)tts()};
  el.onerror=bad;
  el.onended=function(){if(settled)return;settled=true;if(wd)clearTimeout(wd);window.__mcAudioEl=null;b.__on=false;b.textContent=b.dataset.l};
  var p=el.play();if(p&&p.catch)p.catch(bad);
  wd=setTimeout(function(){try{if(!settled&&!el.paused&&el.currentTime===0)bad()}catch(e){}},2500);
 }).catch(function(){if(b.__on)tts()});
};
function stopSpeak(){try{speechSynthesis.cancel()}catch(e){}if(window.__mcAudioEl){try{window.__mcAudioEl.pause()}catch(e){}window.__mcAudioEl=null;}try{document.querySelectorAll('.mc-listen').forEach(function(b){if(b.__on){b.__on=false;b.textContent=b.dataset.l}})}catch(e){}}
function picGeneric(){
 var P=curCls.PIC;
 return '<div class="mc-card"><h3>'+P.h[isTe()?0:1]+'</h3>'+P.svg()+'<div class="mc-formula" style="font-size:15px;line-height:1.5">'+P.cap[isTe()?0:1]+'</div></div>'
 +listenBtn(P.listen[isTe()?0:1],curCls.id+'-pic');
}
function realLife(){
 return curCls.REAL.map(function(r){return '<div class="mc-card"><h3>'+OL(r.t)+'</h3><p>'+OL(r.b)+'</p></div>'}).join('')
 +listenBtn(curCls.REAL.map(function(r){return OL(r.t)+'. '+OL(r.b)}),curCls.id+'-real');
}
function flash(){
 var CARDS=curCls.CARDS,c=CARDS[cardI];
 return '<div class="mc-card" style="text-align:center"><h3>'+T.tabs[2][isTe()?0:1]+'</h3>'
 +'<button class="mc-fcard '+(cardFlip?'back':'')+'" onclick="window.__mcFlip()">'+(cardFlip?OL(c[1]):OL(c[0]))+'</button>'
 +'<p style="color:#9aa5cf;font-size:12px">'+(cardI+1)+' / '+CARDS.length+'</p>'
 +'<div style="display:flex;gap:8px;justify-content:center"><button class="mc-btn sec" onclick="window.__mcCard(-1)">'+L('prev')+'</button><button class="mc-btn" onclick="window.__mcFlip()">'+L('flip')+'</button><button class="mc-btn sec" onclick="window.__mcCard(1)">'+L('next')+'</button></div></div>'
 +listenBtn(CARDS.map(function(x){return OL(x[0])+'. '+OL(x[1])}),curCls.id+'-cards');
}
function mmap(){
 var M=curCls.MAP;
 return '<div class="mc-card"><div class="mc-map"><div class="mc-node mc-center">'+M.center+'</div>'
 +M.rows.map(function(x){return '<div class="mc-line"></div><div class="mc-node mc-branch"><b>'+x[0]+'</b><small>'+(isTe()?x[1]:x[2])+'</small></div>'}).join('')
 +'</div></div>'+listenBtn([curCls.title[isTe()?0:1]].concat(M.rows.map(function(x){return isTe()?x[1]:x[2]})),curCls.id+'-map');
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
 +listenBtn(curCls.SUMM.map(function(s){return OL(s)}),curCls.id+'-summ');
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
/* ---------- Class 9: Percentage (Maths) ---------- */
function svgPercent(){
 var s='<svg class="mc-svg2" viewBox="0 0 300 330"><rect width="300" height="330" fill="#0b1030" rx="12"/>';
 for(var r=0;r<10;r++)for(var c=0;c<10;c++){var i=r*10+c;var fill=i<40?'#4cd97b':'#232c4e';
  s+='<rect x="'+(20+c*26)+'" y="'+(32+r*26)+'" width="23" height="23" rx="4" fill="'+fill+'" stroke="#3d4878" stroke-width="1"/>'}
 s+='<text x="150" y="20" text-anchor="middle" font-size="14" font-weight="900" fill="#ffe27a">100 గడుల్లో 40 రంగులవి = 40%</text>';
 s+='<text x="150" y="316" text-anchor="middle" font-size="12.5" fill="#dde3f7">ప్రతి గడి సరిగ్గా 1% — మొత్తం 100 గడులు, 40 రంగులవి!</text></svg>';
 return s;
}
var PERCENT={
id:'percent',icon:'📊',
te:'శాతం (పర్సంటేజ్)',en:'Percentage',
meta:['గణితం · తరగతి 7 · చిత్రం + క్విజ్','Maths · Class 7 · picture + quiz'],
title:['📊 శాతం మాస్టర్ క్లాస్','📊 Percentage Master Class'],
PIC:{h:['100 గడుల్లో ఎన్ని రంగులవో చూడండి','Count the coloured cells out of 100'],svg:svgPercent,cap:['శాతం అంటే "ప్రతి వందలో ఎంత" — % గుర్తు అదే చెబుతుంది','Percentage means "how many out of every hundred" — the % sign says exactly that'],
 listen:[['శాతం అంటే ప్రతి వందలో ఎంత','యాభై శాతం అంటే వందలో యాభై, అంటే సగం','పది శాతం అంటే వందలో పది'],['Percentage means how many out of every hundred','Fifty percent means fifty out of a hundred, that is half','Ten percent means ten out of a hundred']]},
REAL:[
 {t:['దుకాణంలో డిస్కౌంట్','Shop discount'],b:['₹500 చొక్కాపై 40% తగ్గింపు అంటే ప్రతి ₹100లో ₹40 తగ్గింపు — మొత్తం ₹200 తగ్గి, చెల్లించాల్సింది ₹300 మాత్రమే.','40% off on a ₹500 shirt means ₹40 off per ₹100 — ₹200 off in total, so you pay just ₹300.']},
 {t:['మార్కులు శాతంలో','Marks in percent'],b:['50 మార్కుల పరీక్షలో 40 వస్తే, అదే 100కు 80 — అంటే 80%. ఏ పరీక్ష అయినా శాతంతో పోల్చవచ్చు.','40 out of 50 in a test is the same as 80 out of 100 — 80%. Percent lets you compare any two exams.']},
 {t:['ఫోన్ బ్యాటరీ','Phone battery'],b:['బ్యాటరీ 25% అంటే నిండుగా ఉన్న దానిలో నాలుగో వంతు మాత్రమే మిగిలింది — చార్జ్ పెట్టే సమయం ఆసన్నమైంది!','A battery at 25% has just one quarter of full charge left — time to plug in soon!']},
 {t:['వడ్డీ, పొదుపు','Interest and savings'],b:['బ్యాంక్ సంవత్సరానికి 6% వడ్డీ అంటే ₹100 పొదుపుపై ఏటా ₹6. ₹1,000 ఉంటే ₹60 — శాతం తెలిస్తే వడ్డీ లెక్క సులభం.','6% yearly interest means ₹6 a year on every ₹100 saved — ₹60 on ₹1,000. Percent makes interest easy.']}],
CARDS:[
 [['శాతం అంటే?','What is percent?'],['ప్రతి వందలో ఎంత (per hundred)','How many out of every hundred']],
 [['% గుర్తు','The % sign'],['వంద (100) తో పోల్చిన కొలమానం','A measure compared to 100']],
 [['50% = ?','50% = ?'],['1/2 — సగం','1/2 — one half']],
 [['25% = ?','25% = ?'],['1/4 — పావు వంతు','1/4 — one quarter']],
 [['10% = ?','10% = ?'],['1/10 — పదో వంతు','1/10 — one tenth']],
 [['"యొక్క" అంటే గుణకారం','"Of" means multiply'],['40% of 500 = 40/100 × 500 = 200','40% of 500 = 40/100 × 500 = 200']]],
QUIZ:[
 {q:['200లో 50% ఎంత?','What is 50% of 200?'],o:['50','100','150','25'],a:1},
 {q:['80లో 25% ఎంత?','What is 25% of 80?'],o:['25','40','20','10'],a:2},
 {q:['350లో 10% ఎంత?','What is 10% of 350?'],o:['35','70','10','3.5'],a:0},
 {q:['శాతం అంటే ఏమిటి?','What does percentage mean?'],o:['ప్రతి పదిలో ఎంత§How many out of ten','ప్రతి వందలో ఎంత§How many out of every hundred','మొత్తం ఎంత§The total amount','వంద రెట్లు§A hundred times more'],a:1},
 {q:['3/4 భిన్నాన్ని శాతంగా రాస్తే?','What is the fraction 3/4 as a percent?'],o:['34%','50%','25%','75%'],a:3},
 {q:['₹600 వస్తువుపై 20% తగ్గింపు = ఎంత తగ్గింపు?','20% off on a ₹600 item = how much off?'],o:['₹20','₹60','₹120','₹200'],a:2}],
SUMM:[['శాతం = ప్రతి వందలో ఎంత; % గుర్తు వందనే సూచిస్తుంది.','Percentage = how many out of every hundred; the % sign stands for the hundred.'],['50% = 1/2, 25% = 1/4, 10% = 1/10 — ఇవి గుర్తుంచుకుంటే చాలా లెక్కలు సులభం.','50% = 1/2, 25% = 1/4, 10% = 1/10 — remembering these makes most sums easy.'],['ఏ సంఖ్యలోనైనా శాతం కావాలంటే: శాతం/100 × ఆ సంఖ్య.','To find a percent of any number: percent/100 × that number.'],['డిస్కౌంట్, మార్కులు, బ్యాటరీ, వడ్డీ — అన్ని చోట్ల శాతమే!','Discounts, marks, battery, interest — percent is everywhere!']],
MAP:{center:'📊 శాతం',rows:[
 ['💯','ప్రతి వందలో ఎంత','How many per hundred'],
 ['½','50% = సగం, 25% = పావు','50% = half, 25% = quarter'],
 ['✖️','శాతం/100 × సంఖ్య','percent/100 × number'],
 ['🏷️','డిస్కౌంట్, మార్కులు, వడ్డీ','Discounts, marks, interest'],
 ['⚠️','10% కాదు 1% కాదు గందరగోళం — గడులు లెక్కపెట్టు','Do not mix up 10% and 1% — count the cells']]}};
/* ---------- Class 10: Water Cycle (Science) ---------- */
function svgWater(){
 return '<svg class="mc-svg2" viewBox="0 0 300 250"><rect width="300" height="250" fill="#0b1030" rx="12"/>'
 +'<defs>'
 +'<marker id="awUp" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#7fd4ff"/></marker>'
 +'<marker id="awDn" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#9cc4ff"/></marker>'
 +'<marker id="awCl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="#bfe0ff"/></marker>'
 +'</defs>'
 +'<circle cx="50" cy="40" r="20" fill="#ffcf3f"/><text x="50" y="44" text-anchor="middle" font-size="11" font-weight="900" fill="#7a4a00">సూర్యుడు</text>'
 +'<ellipse cx="212" cy="52" rx="54" ry="19" fill="#cdd5f2"/><ellipse cx="186" cy="43" rx="30" ry="14" fill="#e8ecf9"/>'
 +'<text x="212" y="56" text-anchor="middle" font-size="11" font-weight="900" fill="#33415c">సంఘననం</text>'
 +'<path d="M90 195 L150 115 L202 195 Z" fill="#3d4a70"/><path d="M140 123 L150 109 L160 123 Z" fill="#fff"/>'
 +'<rect x="0" y="195" width="300" height="55" fill="#1d5f9e"/><text x="30" y="228" font-size="11.5" font-weight="700" fill="#bfe0ff">సముద్రం / చెరువు</text>'
 +'<path d="M68 185 C73 145 88 112 118 86" fill="none" stroke="#7fd4ff" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#awUp)"/>'
 +'<text x="66" y="128" font-size="11.5" font-weight="700" fill="#7fd4ff">ఆవిరైపోవడం</text>'
 +'<path d="M238 74 C254 100 246 142 220 168" fill="none" stroke="#9cc4ff" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#awDn)"/>'
 +'<text x="236" y="128" font-size="11.5" font-weight="700" fill="#9cc4ff" text-anchor="start">వర్షం</text>'
 +'<line x1="200" y1="80" x2="192" y2="110" stroke="#7fd4ff" stroke-width="2"/><line x1="220" y1="82" x2="212" y2="112" stroke="#7fd4ff" stroke-width="2"/><line x1="240" y1="80" x2="232" y2="110" stroke="#7fd4ff" stroke-width="2"/>'
 +'<path d="M185 206 C145 212 100 212 62 206" fill="none" stroke="#bfe0ff" stroke-width="3" stroke-dasharray="6 5" marker-end="url(#awCl)"/>'
 +'<text x="118" y="243" font-size="11.5" font-weight="700" fill="#bfe0ff">సేకరణ</text>'
 +'</svg>';
}
var WATER={
id:'watercycle',icon:'💧',
te:'జలచక్రం',en:'The Water Cycle',
meta:['సైన్స్ · తరగతి 5 · చిత్రం + క్విజ్','Science · Class 5 · picture + quiz'],
title:['💧 జలచక్రం మాస్టర్ క్లాస్','💧 Water Cycle Master Class'],
PIC:{h:['నీరు ఎగిసి, కురిసి, మళ్లీ తిరిగే ప్రయాణం','The journey of water — up, down and back again'],svg:svgWater,cap:['ఆవిరైపోవడం → సంఘననం → వర్షపాతం → సేకరణ — ఇదే చక్రం!','Evaporation → condensation → precipitation → collection — the same cycle!'],
 listen:[['సూర్యుడి వేడితో నీరు ఆవిరవుతుంది','పైకి వెళ్లిన ఆవిరి చల్లబడి మేఘాలవుతుంది','మేఘాల నుండి వర్షం కురిసి నీరు మళ్లీ చేరుతుంది'],['The Sun heats water and it evaporates','The vapour cools high up and forms clouds','Rain falls from clouds and the water returns']]},
REAL:[
 {t:['బట్టలు ఎండలో ఆరడం','Clothes drying in the sun'],b:['తడి బట్టల్లోని నీరు సూర్యుడి వేడితో ఆవిరై గాలిలో కలిసిపోతుంది — ఇదే ఆవిరైపోవడం. గాలి, వేడి ఎక్కువైతే త్వరగా ఆరతాయి.','Water in wet clothes turns to vapour in the Sun\'s heat and joins the air — that is evaporation. Wind and heat dry them faster.']},
 {t:['మరిగే పాత్ర మూతపై చినుకులు','Drops on a boiling pot lid'],b:['ఆవిరి చల్లటి మూతను తాకగానే చిన్న నీటి బిందువులవుతుంది — ఇదే సంఘననం. మేఘాలు కూడా ఇలాగే ఏర్పడతాయి.','When vapour touches the cool lid it becomes tiny water drops — that is condensation. Clouds form the same way.']},
 {t:['వర్షం ఎలా కురుస్తుంది','How rain falls'],b:['మేఘాల్లో నీటి బిందువులు, మంచు కణాలు పెరిగి బరువైతే అవి కింద పడతాయి - దీన్నే వర్షపాతం అంటారు. మేఘాలు అలా ఏర్పడినప్పుడే వర్షం వస్తుంది; ప్రతి వేడి రోజు తరువాత వాన తప్పకుండా వస్తుందనే నియమం లేదు.','In clouds, water droplets and ice crystals grow until they are heavy enough to fall - that is precipitation. Rain comes only when clouds grow that way; it does not have to rain after every hot day.']},
 {t:['బావి, భూగర్భ జలం','Wells and groundwater'],b:['కురిసిన వర్షంలో కొంత నేలలోకి ఇంకి భూగర్భ జలంగా మారుతుంది - మన బావులు, బోర్లు ఈ నీటిని ఇస్తాయి. అందుకే వర్షపు నీటిని సంరక్షించి నేలలోకి ఇంకేలా చేయడం ముఖ్యం.','Some of the rain soaks into the ground and becomes groundwater - our wells and borewells draw from it. That is why saving rainwater and helping it soak into the soil matters.']}],
CARDS:[
 [['ఆవిరైపోవడం','Evaporation'],['వేడితో నీరు ఆవిరిగా మారడం','Water turning into vapour by heat']],
 [['సంఘననం','Condensation'],['ఆవిరి చల్లబడి చిన్న బిందువులు/మేఘాలు కావడం','Vapour cooling into tiny drops or clouds']],
 [['వర్షపాతం','Precipitation'],['మేఘాల నుండి వర్షం, మంచు కురవడం','Rain or snow falling from clouds']],
 [['సేకరణ','Collection'],['నీరు నదులు, చెరువులు, సముద్రాల్లో చేరడం','Water gathering in rivers, lakes and seas']],
 [['చక్రానికి యంత్రం?','What powers the cycle?'],['సూర్యుడి శక్తి పైకి లేపుతుంది, గురుత్వం కిందకు లాగుతుంది','The Sun\'s energy lifts, gravity pulls down']],
 [['నీరు కోల్పోతుందా?','Is water ever lost?'],['నీరు రూపు మారుతూ గాలిలో, నేలపై, నేలలో తిరుగుతూనే ఉంటుంది','Water keeps changing form and moving through air, land and ground']]],
QUIZ:[
 {q:['సూర్యుడి వేడితో నీరు ఏమవుతుంది?','What happens to water in the Sun\'s heat?'],o:['మంచుగా మారుతుంది§It turns to ice','ఆవిరైపోతుంది§It evaporates','మట్టిగా మారుతుంది§It turns to soil','అదృశ్యమై పోతుంది§It disappears forever'],a:1},
 {q:['మేఘాలు ఎలా ఏర్పడతాయి?','How do clouds form?'],o:['నీటి ఆవిరి పైకి వెళ్లి చల్లబడటంతో§Water vapour rises and cools','సముద్రం పైకి ఎగరడంతో§The sea flies up','గాలి నీలిగా మారడంతో§Air turns blue','మంచు కరగడంతో§Ice melts in the sky'],a:0},
 {q:['మేఘాల నుండి నీరు కురవడాన్ని ఏమంటారు?','What is water falling from clouds called?'],o:['ఆవిరైపోవడం§Evaporation','సంఘననం§Condensation','వర్షపాతం§Precipitation','సేకరణ§Collection'],a:2},
 {q:['జలచక్రానికి అవసరమైన ప్రధాన శక్తి ఏది?','What is the main power for the water cycle?'],o:['గాలి§Wind','సూర్యుడు§The Sun','చంద్రుడు§The Moon','చెట్లు§Trees'],a:1},
 {q:['తడి బట్టలు ఎండలో ఎందుకు ఆరతాయి?','Why do wet clothes dry in the sun?'],o:['నీరు ఆవిరైపోవడం వల్ల§Because water evaporates','నీరు మంచుగా మారడం వల్ల§Because water freezes','గాలి నీరు తాగేయడం వల్ల§Because wind drinks the water','బట్టలు నీటిని పీల్చడం వల్ల§Because clothes soak it back'],a:0},
 {q:['భూమిపై నీటి గురించి సరైనది ఏది?','Which is true about Earth\'s water?'],o:['ప్రతిరోజూ కొత్త నీరు పుడుతుంది§New water is born daily','నీరు శాశ్వతంగా పోతుంది§Water is lost forever','అదే నీరు చక్రంగా మళ్లీ మళ్లీ తిరుగుతుంది§The same water cycles again and again','వర్షం నీరు వాడలేము§Rain water cannot be used'],a:2}],
SUMM:[['జలచక్రం నాలుగు అడుగులు: ఆవిరైపోవడం → సంఘననం → వర్షపాతం → సేకరణ.','The water cycle has four steps: evaporation → condensation → precipitation → collection.'],['సూర్యుడి శక్తి ఆవిరిని పైకి లేపుతుంది; గురుత్వం నీటిని కిందకు లాగుతుంది.','The Sun\'s energy lifts the vapour up; gravity pulls the water down.'],['నీరు ఆవిరి, ద్రవం, మంచు రూపాలు మారుతూ గాలిలో, నేలపై, నేలలో తిరుగుతూనే ఉంటుంది - దీన్నే జలచక్రం అంటారు.','Water keeps changing between vapour, liquid and ice and moves through the air, the surface and the ground - that is the water cycle.'],['బట్టలు ఆరడం, పాత్ర మూతపై చినుకులు — ఇలా రోజువారీ జీవితంలోనే జలచక్రం కనిపిస్తుంది.','Drying clothes and drops on a pot lid — the water cycle shows up in daily life.']],
MAP:{center:'💧 జలచక్రం',rows:[
 ['☀️','సూర్యుడు + గురుత్వం','Sun + gravity'],
 ['⬆️','ఆవిరైపోవడం: నీరు పైకి','Evaporation: water rises'],
 ['☁️','సంఘననం: మేఘాలు','Condensation: clouds form'],
 ['🌧️','వర్షపాతం → సేకరణ','Precipitation → collection'],
 ['🔁','అదే నీరు మళ్లీ మళ్లీ','The same water, again and again']]}};
var CLASSES=[APLUSB,SOLAR,INDIAGEO,TENSES,SANDHI,PYTH,HINDI,GKC,PERCENT,WATER];
var MCSOON=[['➕','మరిన్ని గణితం','More maths'],['🧪','మరిన్ని సైన్స్','More science'],['📖','మరిన్ని ఇంగ్లీష్','More English']];
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
