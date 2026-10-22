/* SV80-MC master-class patch */
(function(){
var st=document.createElement("style");
st.textContent="\n#svmc-btn{background:linear-gradient(135deg,#ffd23f,#ff8a00)!important;color:#3a1c00!important;font-weight:900!important}\n#svmc-ov{position:fixed;inset:0;z-index:950;background:#0c1022;display:none;flex-direction:column}\n#svmc-ov.on{display:flex}\n#svmc-ov .mc-head{display:flex;align-items:center;gap:10px;padding:12px 14px 6px;max-width:480px;margin:0 auto;width:100%}\n#svmc-ov .mc-t{flex:1;text-align:center;font-size:16px;font-weight:800;color:#ffe27a}\n#svmc-ov .mc-hb{border:1px solid #505a80;background:#1d2440;color:#fff;border-radius:12px;padding:9px 13px;font-weight:800;font-size:15px}\n#svmc-tabs{display:flex;gap:6px;overflow-x:auto;padding:6px 12px;max-width:480px;margin:0 auto;width:100%}\n#svmc-tabs button{flex:none;border:1px solid #3d4878;background:#1d2440;color:#cdd5f2;border-radius:20px;padding:8px 12px;font-size:12px;font-weight:700}\n#svmc-tabs button.on{background:#aff7d2;color:#112638;border-color:#aff7d2}\n#svmc-body{flex:1;overflow:auto;padding:8px 14px 20px;max-width:480px;margin:0 auto;width:100%}\n.mc-card{background:#171e38;border:1px solid #333d61;border-radius:16px;padding:14px;margin-bottom:10px}\n.mc-card h3{margin:0 0 8px;font-size:15px;color:#aff7d2}\n.mc-card p,.mc-card li{font-size:14px;line-height:1.6;color:#dde3f7}\n.mc-formula{font-size:20px;font-weight:900;text-align:center;color:#ffe27a;margin:10px 0;font-family:Georgia,serif}\n#mc-svg{width:100%;height:auto;display:block}\n.mc-fl{display:flex;gap:10px;align-items:center;justify-content:center;margin:8px 0}\n.mc-fcard{width:100%;max-width:300px;min-height:150px;border-radius:16px;border:2px solid #ffd76a;background:#232c4e;color:#fff;font-size:16px;font-weight:700;padding:14px;display:flex;align-items:center;justify-content:center;text-align:center;line-height:1.5}\n.mc-fcard.back{background:#16342e;border-color:#3ddc84}\n.mc-q{font-size:15px;font-weight:700;margin:10px 0;color:#fff}\n.mc-opt{display:block;width:100%;text-align:left;margin:6px 0;border:2px solid #3d4878;background:#232c4e;color:#fff;border-radius:12px;padding:11px 12px;font-size:14px}\n.mc-opt.ok{border-color:#3ddc84;background:#14532d}\n.mc-opt.bad{border-color:#ff5f6d;background:#5f1a24;animation:mcshake .4s ease}\n@keyframes mcshake{0%,100%{transform:translateX(0)}25%{transform:translateX(-5px)}75%{transform:translateX(5px)}}\n.mc-map{display:flex;flex-direction:column;align-items:center;gap:8px}\n.mc-node{border-radius:14px;padding:10px 14px;font-size:13px;font-weight:700;text-align:center;max-width:320px}\n.mc-center{background:linear-gradient(135deg,#ffd23f,#ff8a00);color:#3a1c00;font-size:15px}\n.mc-branch{background:#232c4e;border:1px solid #4a5680;color:#dde3f7}\n.mc-branch small{display:block;font-weight:400;color:#aab3d6;margin-top:3px;line-height:1.4}\n.mc-line{width:2px;height:12px;background:#4a5680}\n.mc-btn{border:0;border-radius:13px;padding:11px 16px;font-size:14px;font-weight:800;min-height:44px;background:#aff7d2;color:#112638}\n.mc-btn.sec{background:#293451;color:#fff}\n.mc-listen{position:sticky;bottom:8px;float:right}\n";
document.head.appendChild(st);
var dv=document.createElement("div");
dv.id="svmc-ov";dv.setAttribute("aria-hidden","true");
document.body.appendChild(dv);

(function(){
if(window.__svmc)return;window.__svmc=1;
function isTe(){try{return (typeof S!=='undefined'&&S&&S.lang)?S.lang==='te':true}catch(e){return true}}
function SND(k){try{if(typeof sfx==='function')sfx(k)}catch(e){}}
var T={
title:['🎓 (a+b)² మాస్టర్ క్లాస్','🎓 (a+b)² Master Class'],
hubTitle:['🎓 మాస్టర్ క్లాసులు','🎓 Master Classes'],
hubSub:['ఒక్కో ముఖ్యమైన అంశానికి లోతైన పాఠం — చిత్రం, జీవిత ఉదాహరణలు, ఫ్లాష్‌కార్డ్స్, మైండ్ మ్యాప్, క్విజ్.','One key idea at a time, taught deeply — picture, real life, flashcards, mind map, quiz.'],
avail:['ఇప్పుడు అందుబాటులో','Available now'],
soon:['త్వరలో — మరిన్ని మాస్టర్ క్లాసులు వస్తున్నాయి','Coming soon — more master classes'],
tabs:[['🔲 చిత్రం','🔲 Picture'],['🌍 జీవితంలో','🌍 Real life'],['🃏 ఫ్లాష్‌కార్డ్స్','🃏 Flashcards'],['🧠 మైండ్ మ్యాప్','🧠 Mind map'],['❓ క్విజ్','❓ Quiz'],['📄 సారాంశం','📄 Summary']],
listen:['🔊 వినండి','🔊 Listen'],stop:['⏹ ఆపు','⏹ Stop'],back:['వెనుక్కి','Back'],
score:['స్కోరు','Score'],again:['మళ్లీ ప్రయత్నించండి','Try again'],next:['తర్వాత','Next'],prev:['ముందు','Back'],flip:['తిప్పండి','Flip']};
function L(k){var a=T[k];return a[isTe()?0:1]}
var REAL=[
 {t:['వేగంగా లెక్క: 103²','Fast maths: 103²'],b:['103 = 100+3 అని వ్రాయండి. 103² = 100² + 2×100×3 + 3² = 10000 + 600 + 9 = 10609. కేలిక్యులేటర్ లేకుండా సెకన్లలో!','Write 103 = 100+3. Then 103² = 100² + 2×100×3 + 3² = 10000 + 600 + 9 = 10609. Seconds, no calculator!']},
 {t:['గడి/టైల్స్ లెక్క','Room and tiles'],b:['గది పొడవు, వెడల్పు రెండింటికీ కొంత జోడించినప్పుడు కొత్త వైశాల్యం = పాత వైశాల్యం + రెండు అదనపు భాగాలు + చిన్న మూల. టైల్స్ ఎన్ని కావాలో లెక్కేసేటప్పుడు ఇదే సూత్రం వాడతారు.','When both sides of a room grow a little, the new area = old area + two extra strips + a small corner. Tile estimators use exactly this formula.']},
 {t:['పొలం/ప్లాట్ కొలత','Field or plot measure'],b:['చదరపు ప్లాట్ వైపు 20 మీ నుండి 22 మీ అయితే వైశాల్యం 400 నుండి 484 చ.మీ — పెరుగుదల 2×20×2 + 2² = 84 చ.మీ. అంచనా వేయడం త్వరగా అవుతుంది.','If a square plot side goes from 20 m to 22 m, the area goes from 400 to 484 sq m — the growth is 2×20×2 + 2² = 84 sq m. Quick estimates become easy.']},
 {t:['5తో అయ్యే సంఖ్యల వర్గం','Squaring numbers ending in 5'],b:['25² = (20+5)² = 400 + 200 + 25 = 625. 85² కూడా అలాగే: (80+5)² = 6400+800+25 = 7225.','25² = (20+5)² = 400 + 200 + 25 = 625. Same for 85² = (80+5)² = 6400+800+25 = 7225.']}];
var CARDS=[
 [['(a+b)² సూత్రం','(a+b)² formula'],['a² + 2ab + b²','a² + 2ab + b²']],
 [['మొదటి పదం','First term'],['మొదటిదాని వర్గం: a²','Square of the first: a²']],
 [['మధ్య పదం','Middle term'],['రెండింటి లబ్దం × 2: 2ab','Twice their product: 2ab']],
 [['చివరి పదం','Last term'],['రెండోదాని వర్గం: b²','Square of the second: b²']],
 [['12² = (10+2)² = ?','12² = (10+2)² = ?'],['100 + 40 + 4 = 144','100 + 40 + 4 = 144']],
 [['అతిపెద్ద పొరపాటు','Biggest mistake'],['(a+b)² ≠ a² + b². మధ్యలో 2ab తప్పకుండా ఉంటుంది!','(a+b)² ≠ a² + b². The middle 2ab is always there!']]];
var QUIZ=[
 {q:['(a+b)² విస్తరణ ఏది?','Which is the expansion of (a+b)²?'],o:[['a² + b²','a² + b²'],['a² + 2ab + b²','a² + 2ab + b²'],['2a² + 2b²','2a² + 2b²'],['a² − 2ab + b²','a² − 2ab + b²']],a:1},
 {q:['(x+5)² లో మధ్య పదం ఏమిటి?','What is the middle term in (x+5)²?'],o:[['5x','5x'],['25','25'],['10x','10x'],['x²','x²']],a:2},
 {q:['101² = ? (100+1 అని ఆలోచించండి)','101² = ? (think 100+1)'],o:[['10201','10201'],['10001','10001'],['1021','1021'],['12101','12101']],a:0},
 {q:['రేణు "21² = 400 + 41" అని వ్రాశింది. ఎక్కడ తప్పు?','Renu wrote 21² = 400 + 41. Where is the slip?'],o:[['అది సరియైనదే','It is correct'],['2×20×1 = 40 మరిచింది','She forgot 2×20×1 = 40'],['20² తప్పు','20² is wrong'],['1² తప్పు','1² is wrong']],a:1},
 {q:['ఒక చదరపు పొలం వైపు 30 మీ. ప్రతి వైపు 2 మీ పెరిగితే కొత్త వైశాల్యం?','A square field side is 30 m. Each side grows by 2 m. New area?'],o:[['904 చ.మీ','904 sq m'],['960 చ.మీ','960 sq m'],['1024 చ.మీ','1024 sq m'],['964 చ.మీ','964 sq m']],a:2},
 {q:['45² = (40+5)² = ?','45² = (40+5)² = ?'],o:[['2025','2025'],['1625','1625'],['2005','2005'],['2125','2125']],a:0}];
var SUMM=[['(a+b)² = a² + 2ab + b² — మూడు భాగాలు: మొదటిది వర్గం, రెండింటి రెట్టింపు లబ్దం, రెండోది వర్గం.','(a+b)² = a² + 2ab + b² — three parts: square of first, twice the product, square of last.'],['చదరపు చిత్రంలో 4 భాగాలుగా చూపవచ్చు: a², ab, ab, b².','In a square picture it shows as 4 areas: a², ab, ab, b².'],['రోజువారీ లెక్కల్లో (103², 45², టైల్స్, ప్లాట్లు) నేరుగా వాడవచ్చు.','Use it directly in daily maths: 103², 45², tiles, plots.'],['గుర్తుంచుకోండి: (a+b)² అంటే a² + b² కాదు — మధ్య 2ab తప్పనిసరి!','Remember: (a+b)² is NOT a² + b² — the middle 2ab is a must!']];
var MCLIST=[{icon:'🧮',te:'(a+b)² వర్గ సూత్రం',en:'(a+b)² — the square formula',meta:['గణితం · తరగతి 8 · చిత్రం + క్విజ్','Maths · Class 8 · picture + quiz']}];
var MCSOON=[['🔬','సైన్స్','Science'],['🏛️','సాంఘిక శాస్త్రం','Social'],['🔤','ఇంగ్లీష్','English'],['🪷','తెలుగు','Telugu'],['➕','మరిన్ని గణితం','More maths']];
var ov=document.getElementById('svmc-ov'),cur=0,qi=0,qScore=0,cardI=0,cardFlip=false,mcA=3,mcB=2,inList=true;
function el(id){return document.getElementById(id)}
function renderHead(){
 inList=false;
 ov.innerHTML='<div class="mc-head"><button class="mc-hb" id="mc-back" aria-label="'+L('back')+'">←</button><div class="mc-t">'+T.title[isTe()?0:1]+'</div><button class="mc-hb" id="mc-lang">'+(isTe()?'EN':'తె')+'</button></div><div id="svmc-tabs"></div><div id="svmc-body"></div>';
 el('mc-back').onclick=function(){stopSpeak();renderList()};
 el('mc-lang').onclick=function(){try{document.getElementById('blang').click()}catch(e){}setTimeout(renderHead,150)};
 var tabs=el('svmc-tabs');tabs.innerHTML='';
 T.tabs.forEach(function(t,i){var b=document.createElement('button');b.textContent=t[isTe()?0:1];if(i===cur)b.className='on';b.onclick=function(){cur=i;qi=0;qScore=0;renderHead()};tabs.appendChild(b)});
 renderBody();
}
function speakLines(lines){
 try{
  if(!('speechSynthesis' in window))return false;
  speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(lines.join('. '));
  u.lang=isTe()?'te-IN':'en-IN';u.rate=.95;
  speechSynthesis.speak(u);return true;
 }catch(e){return false}
}
function stopSpeak(){try{speechSynthesis.cancel()}catch(e){}}
function listenBtn(lines){
 return '<button class="mc-btn sec mc-listen" onclick="(function(b){if(b.__on){b.__on=false;b.textContent=b.dataset.l;window.speechSynthesis.cancel()}else{b.__on=true;b.textContent=b.dataset.s;var u=new SpeechSynthesisUtterance(b.dataset.txt);u.lang=b.dataset.lang;speechSynthesis.cancel();speechSynthesis.speak(u);u.onend=function(){b.__on=false;b.textContent=b.dataset.l}}})(this)" data-l="'+L('listen')+'" data-s="'+L('stop')+'" data-lang="'+(isTe()?'te-IN':'en-IN')+'" data-txt="'+lines.join('. ').replace(/"/g,'')+'">'+L('listen')+'</button>';
}
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
function realLife(){
 return REAL.map(function(r){return '<div class="mc-card"><h3>'+r.t[isTe()?0:1]+'</h3><p>'+r.b[isTe()?0:1]+'</p></div>'}).join('')
 +listenBtn(REAL.map(function(r){return r.t[isTe()?0:1]+'. '+r.b[isTe()?0:1]}));
}
function flash(){
 var c=CARDS[cardI];
 return '<div class="mc-card" style="text-align:center"><h3>'+T.tabs[2][isTe()?0:1]+'</h3>'
 +'<button class="mc-fcard '+(cardFlip?'back':'')+'" onclick="window.__mcFlip()">'+(cardFlip?c[1][isTe()?0:1]:c[0][isTe()?0:1])+'</button>'
 +'<p style="color:#9aa5cf;font-size:12px">'+(cardI+1)+' / '+CARDS.length+'</p>'
 +'<div style="display:flex;gap:8px;justify-content:center"><button class="mc-btn sec" onclick="window.__mcCard(-1)">'+L('prev')+'</button><button class="mc-btn" onclick="window.__mcFlip()">'+L('flip')+'</button><button class="mc-btn sec" onclick="window.__mcCard(1)">'+L('next')+'</button></div></div>'
 +listenBtn(CARDS.map(function(x){return x[0][isTe()?0:1]+'. '+x[1][isTe()?0:1]}));
}
function mmap(){
 var B=[
  ['a² + 2ab + b²','సూత్రం','Formula'],
  ['🔲','చదరపు చిత్రంలో 4 భాగాలు','4 areas in the square picture'],
  ['🌍','లెక్కలు, టైల్స్, ప్లాట్లు, 5-ముగింపులు','Sums, tiles, plots, numbers ending in 5'],
  ['⚠️','(a+b)² ≠ a² + b²','(a+b)² ≠ a² + b²'],
  ['🎯','103² = 10609 వంటి వేగ లెక్కలు','Fast ones like 103² = 10609']];
 return '<div class="mc-card"><div class="mc-map"><div class="mc-node mc-center">(a+b)²</div>'
 +B.map(function(x){return '<div class="mc-line"></div><div class="mc-node mc-branch"><b>'+x[0]+'</b><small>'+(isTe()?x[1]:x[2])+'</small></div>'}).join('')
 +'</div></div>'+listenBtn([T.title[isTe()?0:1]].concat(B.map(function(x){return isTe()?x[1]:x[2]})));
}
function quiz(){
 if(qi>=QUIZ.length){
  var ok=qScore>=QUIZ.length-1;
  return '<div class="mc-card" style="text-align:center"><h3>'+L('score')+': '+qScore+' / '+QUIZ.length+'</h3><p style="font-size:24px">'+(ok?'🌟':'💪')+'</p><p>'+(ok?(isTe()?'అద్భుతం! సూత్రం పూర్తిగా అర్థమయింది.':'Excellent! You own this formula.'):(isTe()?'మళ్లీ చదివి ప్రయత్నించండి!':'Review and try again!'))+'</p><button class="mc-btn" onclick="window.__mcQuizR()">'+L('again')+'</button></div>';
 }
 var q=QUIZ[qi];
 return '<div class="mc-card"><p style="color:#9aa5cf;font-size:12px">'+(qi+1)+' / '+QUIZ.length+' · '+L('score')+': '+qScore+'</p><div class="mc-q">'+q.q[isTe()?0:1]+'</div>'
 +q.o.map(function(o,i){return '<button class="mc-opt" onclick="window.__mcAns('+i+',this)">'+o[isTe()?0:1]+'</button>'}).join('')+'</div>';
}
function summary(){
 return '<div class="mc-card"><h3>📄 '+T.tabs[5][isTe()?0:1]+'</h3><ul style="margin:0;padding-left:18px">'
 +SUMM.map(function(s){return '<li>'+s[isTe()?0:1]+'</li>'}).join('')+'</ul></div>'
 +listenBtn(SUMM.map(function(s){return s[isTe()?0:1]}));
}
function renderBody(){
 var b=el('svmc-body');
 b.innerHTML=[visual,realLife,flash,mmap,quiz,summary][cur]();
}
window.__mcStep=function(k,d){if(k==='a')mcA=Math.min(9,Math.max(1,mcA+d));else mcB=Math.min(9,Math.max(1,mcB+d));SND('ui');renderBody()};
window.__mcFlip=function(){cardFlip=!cardFlip;SND('ui');renderBody()};
window.__mcCard=function(d){cardI=(cardI+d+CARDS.length)%CARDS.length;cardFlip=false;SND('ui');renderBody()};
window.__mcQuizR=function(){qi=0;qScore=0;renderHead()};
window.__mcAns=function(i,btn){
 var q=QUIZ[qi];if(btn.disabled)return;
 var ok=i===q.a;
 [...el('svmc-body').querySelectorAll('.mc-opt')].forEach(function(o,j){o.disabled=true;if(j===q.a)o.classList.add('ok')});
 if(ok){qScore++;SND('pop')}else{SND('nope');btn.classList.add('bad')}
 setTimeout(function(){qi++;renderBody()},900);
};
function renderList(){
 inList=true;stopSpeak();
 ov.innerHTML='<div class="mc-head"><button class="mc-hb" id="mc-back" aria-label="close">✕</button><div class="mc-t">'+L('hubTitle')+'</div><button class="mc-hb" id="mc-lang">'+(isTe()?'EN':'తె')+'</button></div><div id="svmc-body"></div>';
 el('mc-back').onclick=closeMc;
 el('mc-lang').onclick=function(){try{document.getElementById('blang').click()}catch(e){}setTimeout(function(){paintBtn();renderList()},150)};
 var h='<div class="mc-card"><p style="margin:0">'+L('hubSub')+'</p></div>';
 h+='<div class="mc-card"><h3>'+L('avail')+'</h3>';
 MCLIST.forEach(function(c,i){
  h+='<button class="mc-opt" data-mc="'+i+'" style="font-size:15px;font-weight:800">'+c.icon+' '+(isTe()?c.te:c.en)+'<br><small style="font-weight:600;color:#aab3d6">'+c.meta[isTe()?0:1]+'</small></button>';
 });
 h+='</div><div class="mc-card"><h3>'+L('soon')+'</h3><div class="mc-map" style="flex-direction:row;flex-wrap:wrap;justify-content:center">'
 +MCSOON.map(function(s){return '<span class="mc-node mc-branch" style="opacity:.6">'+s[0]+' '+(isTe()?s[1]:s[2])+'</span>'}).join('')+'</div></div>';
 var b=el('svmc-body');b.innerHTML=h;
 [...b.querySelectorAll('[data-mc]')].forEach(function(btn){btn.onclick=function(){SND('ui');cur=0;qi=0;qScore=0;renderHead()}});
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
