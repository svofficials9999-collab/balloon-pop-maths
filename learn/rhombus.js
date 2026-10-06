/* Rhombus Master: drag-the-vertex diagram, live formulas and step-by-step solver. Runs on device. Class ladder is a custom progression, not official SCERT chapters. */
(function(){
function view(X,v){
 const {word,esc,W,shell,topBar,wireTop,nav,SFX,toast,load,topics}=X;const L=(a,b)=>word(a,b);
 let p=6,q=4; // half diagonals in cm
 const css='<style>.rb-svg{width:100%;max-width:360px;display:block;margin:6px auto;touch-action:none;background:#0d1230;border-radius:16px;border:1px solid #7ab9ff55}.rb-h{cursor:grab;fill:#ffd600;stroke:#fff;stroke-width:2}.rb-tab{width:100%;border-collapse:collapse;font-size:14px}.rb-tab td{padding:4px 6px;border-bottom:1px solid #ffffff22}.rb-tab td:last-child{text-align:right;font-weight:800;color:#7df9ff}.rb-st p{margin:4px 0}</style>';
 const classes=[1,2,3,4,5,6,7,8,9,10];
 shell(topBar('🔷 '+L('రాంబస్ మాస్టర్','Rhombus Master'))+css+`
 <p class="lr-sub">${L('చుక్కలను లాగి రాంబస్ ఆకారం మార్చండి. సూత్రాలు వెంటనే మారతాయి.','Drag the yellow dots to reshape the rhombus. The formulas update at once.')}</p>
 <div class="lr-card"><svg id="rb" class="rb-svg" viewBox="0 0 320 240"></svg>
 <table class="rb-tab" id="rbt"></table></div>
 <div class="lr-card"><h3 style="margin-top:0">📐 ${L('సూత్రాలు','Formulas')}</h3>
 <p style="margin:4px 0">• ${L('నాలుగు భుజాలు సమానం: a','All four sides are equal: a')}</p>
 <p style="margin:4px 0">• ${L('చుట్టుకొలత = 4 × a','Perimeter = 4 × a')}</p>
 <p style="margin:4px 0">• ${L('వైశాల్యం = ½ × d₁ × d₂','Area = ½ × d₁ × d₂')}</p>
 <p style="margin:4px 0">• ${L('కర్ణాలు లంబంగా కలుస్తాయి, ఒకదాన్ని ఒకటి సమద్విఖండన చేస్తాయి','Diagonals cross at 90° and bisect each other')}</p>
 <p style="margin:4px 0">• a² = (d₁/2)² + (d₂/2)²</p>
 <p style="margin:4px 0">• ${L('ఎదురు కోణాలు సమానం, ఆనుకున్న కోణాల మొత్తం 180°','Opposite angles are equal; adjacent angles add to 180°')}</p></div>
 <div class="lr-card rb-st" id="rbs"></div>
 <div class="lr-card"><h3 style="margin-top:0">🎓 ${L('తరగతి వారీగా నేర్చుకోండి','Learn class by class')}</h3><p class="lr-note" style="text-align:left">${L('ఇది మా సొంత క్రమం, అధికారిక SCERT అధ్యాయాలు కాదు.','This is our own progression, not official SCERT chapters.')}</p>
 <div class="lr-chips">${classes.map(c=>`<button class="lr-chip rb-c" data-c="${c}">${c}</button>`).join('')}</div></div>`);
 wireTop();
 const svg=document.getElementById('rb'),S=14,cx=160,cy=120;
 const f=n=>Math.round(n*10)/10;
 function draw(){
  const a=Math.sqrt(p*p+q*q),d1=2*p,d2=2*q,per=4*a,ar=d1*d2/2,ang=2*Math.atan2(q,p)*180/Math.PI;
  const X1=cx-p*S,X2=cx+p*S,Y1=cy-q*S,Y2=cy+q*S;
  svg.innerHTML=`<polygon points="${cx},${Y1} ${X2},${cy} ${cx},${Y2} ${X1},${cy}" fill="#7c4dff55" stroke="#00e5ff" stroke-width="3"/><line x1="${X1}" y1="${cy}" x2="${X2}" y2="${cy}" stroke="#ff4ecd" stroke-width="2" stroke-dasharray="5 4"/><line x1="${cx}" y1="${Y1}" x2="${cx}" y2="${Y2}" stroke="#76ff03" stroke-width="2" stroke-dasharray="5 4"/><rect x="${cx}" y="${cy-9}" width="9" height="9" fill="none" stroke="#fff"/><text x="${(cx+X2)/2+4}" y="${cy+16}" fill="#ff9fe8" font-size="12">d₁/2=${f(p)}</text><text x="${cx+6}" y="${(cy+Y1)/2}" fill="#b6ff7a" font-size="12">d₂/2=${f(q)}</text><text x="${(cx+X2)/2+8}" y="${(Y1+cy)/2-4}" fill="#fff" font-size="13" font-weight="700">a=${f(a)}</text><circle class="rb-h" id="hx" cx="${X2}" cy="${cy}" r="14"/><circle class="rb-h" id="hy" cx="${cx}" cy="${Y1}" r="14"/><circle cx="${X1}" cy="${cy}" r="5" fill="#fff"/><circle cx="${cx}" cy="${Y2}" r="5" fill="#fff"/>`;
  document.getElementById('rbt').innerHTML=[[L('కర్ణం d₁','Diagonal d₁'),f(d1)+' cm'],[L('కర్ణం d₂','Diagonal d₂'),f(d2)+' cm'],[L('భుజం a','Side a'),f(a)+' cm'],[L('చుట్టుకొలత','Perimeter'),f(per)+' cm'],[L('వైశాల్యం','Area'),f(ar)+' cm²'],[L('కోణాలు','Angles'),f(ang)+'° / '+f(180-ang)+'°']].map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');
  document.getElementById('rbs').innerHTML=`<h3 style="margin-top:0">🪜 ${L('అడుగులవారీ సాధన','Step by step')}</h3><p>${L('ఇచ్చినవి','Given')}: d₁ = ${f(d1)}, d₂ = ${f(d2)} cm</p><p>1. ${L('వైశాల్యం = ½ × d₁ × d₂','Area = ½ × d₁ × d₂')} = ½ × ${f(d1)} × ${f(d2)} = <b>${f(ar)} cm²</b></p><p>2. ${L('సగం కర్ణాలు','Half diagonals')}: ${f(p)}, ${f(q)}</p><p>3. a² = ${f(p)}² + ${f(q)}² = ${f(p*p+q*q)} → a = <b>${f(a)} cm</b></p><p>4. ${L('చుట్టుకొలత = 4 × a','Perimeter = 4 × a')} = 4 × ${f(a)} = <b>${f(per)} cm</b></p>`;
  wire();
 }
 let drag=null;
 function pt(e){const r=svg.getBoundingClientRect();return {x:(e.clientX-r.left)*320/r.width,y:(e.clientY-r.top)*240/r.height}}
 function wire(){['hx','hy'].forEach(id=>{const h=document.getElementById(id);h.onpointerdown=e=>{drag=id;try{svg.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault()}})}
 svg.onpointermove=e=>{if(!drag)return;const o=pt(e);if(drag==='hx')p=Math.max(2,Math.min(10.5,Math.round((o.x-cx)/S*10)/10));else q=Math.max(2,Math.min(7.5,Math.round((cy-o.y)/S*10)/10));draw()};
 svg.onpointerup=svg.onpointercancel=()=>{drag=null};
 draw();
 document.querySelectorAll('.rb-c').forEach(b=>b.onclick=()=>{SFX.tap();const c=+b.dataset.c;load('maths').then(()=>{const i=topics('maths',c).findIndex(x=>x.id==='m'+c+'_rhombus');if(i>=0)nav({v:'topic',s:'maths',c,ti:i});else toast(L('త్వరలో','Coming soon'))})});
}
window.AKNR={view};LD.reg('rhombus',1);
})();
