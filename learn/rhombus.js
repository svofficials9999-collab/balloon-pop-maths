/* Rhombus interactive, embedded in each class rhombus topic. Level follows class. On device, no network. */
(function(){
function widget(el,X,c){
 const {word}=X;const L=(a,b)=>word(a,b);
 const lv=c<=2?1:c<=4?2:c<=6?3:c<=8?4:5;
 const simple=lv<=2;
 let p=simple?4.8:6,q=simple?3.6:4,A=6;
 const S=14,cx=160,cy=120;const f=n=>Math.round(n*10)/10;
 el.innerHTML=`<style>.rb-svg{width:100%;max-width:340px;display:block;margin:6px auto;touch-action:none;background:#0d1230;border-radius:16px;border:1px solid #7ab9ff55}.rb-h{cursor:grab;fill:#ffd600;stroke:#fff;stroke-width:2}.rb-tab{width:100%;border-collapse:collapse;font-size:14px}.rb-tab td{padding:4px 6px;border-bottom:1px solid #ffffff22}.rb-tab td:last-child{text-align:right;font-weight:800;color:#7df9ff}.rb-st p{margin:4px 0}</style>
 <h3 style="margin-top:0">🔷 ${L('రాంబస్ ఇంటరాక్టివ్','Rhombus interactive')}</h3>
 <p class="lr-note" style="text-align:left">${simple?L('పసుపు చుక్కను లాగి భుజం పొడవు మార్చండి.','Drag the yellow dot to change the side length.'):L('పసుపు చుక్కలను లాగి ఆకారం మార్చండి. విలువలు వెంటనే మారతాయి.','Drag the yellow dots to reshape it. The values update at once.')}</p>
 <svg id="rb" class="rb-svg" viewBox="0 0 320 240"></svg><table class="rb-tab" id="rbt"></table>
 ${lv>=3?`<div style="margin-top:8px"><b>📐 ${L('సూత్రాలు','Formulas')}</b><div id="rbf"></div></div>`:''}
 ${lv>=4?'<div class="rb-st" id="rbs" style="margin-top:8px"></div>':''}`;
 const svg=el.querySelector('#rb');
 function rows(a,d1,d2,per,ar,ang){
  const r=[[L('భుజం a','Side a'),f(a)+' cm']];
  if(lv>=2)r.push([L('చుట్టుకొలత','Perimeter'),f(per)+' cm']);
  if(lv>=3){r.push([L('కర్ణం d₁','Diagonal d₁'),f(d1)+' cm']);r.push([L('కర్ణం d₂','Diagonal d₂'),f(d2)+' cm']);r.push([L('కోణాలు','Angles'),f(ang)+'° / '+f(180-ang)+'°'])}
  if(lv>=4)r.push([L('వైశాల్యం','Area'),f(ar)+' cm²']);
  return r;
 }
 function draw(){
  let a,pp=p,qq=q;
  if(simple){pp=0.8*A;qq=0.6*A;a=A}else a=Math.sqrt(p*p+q*q);
  const d1=2*pp,d2=2*qq,per=4*a,ar=d1*d2/2,ang=2*Math.atan2(qq,pp)*180/Math.PI;
  const sc=simple?S*1.0:S,X1=cx-pp*sc,X2=cx+pp*sc,Y1=cy-qq*sc,Y2=cy+qq*sc;
  svg.innerHTML=`<polygon points="${cx},${Y1} ${X2},${cy} ${cx},${Y2} ${X1},${cy}" fill="#7c4dff55" stroke="#00e5ff" stroke-width="3"/>`+
   (lv>=3?`<line x1="${X1}" y1="${cy}" x2="${X2}" y2="${cy}" stroke="#ff4ecd" stroke-width="2" stroke-dasharray="5 4"/><line x1="${cx}" y1="${Y1}" x2="${cx}" y2="${Y2}" stroke="#76ff03" stroke-width="2" stroke-dasharray="5 4"/><rect x="${cx}" y="${cy-9}" width="9" height="9" fill="none" stroke="#fff"/>`:'')+
   `<text x="${(cx+X2)/2+8}" y="${(Y1+cy)/2-6}" fill="#fff" font-size="13" font-weight="700">a=${f(a)}</text>`+
   (lv>=3?`<text x="${(cx+X2)/2-8}" y="${cy+16}" fill="#ff9fe8" font-size="12">d₁/2=${f(pp)}</text><text x="${cx+6}" y="${(cy+Y1)/2+22}" fill="#b6ff7a" font-size="12">d₂/2=${f(qq)}</text>`:'')+
   `<circle class="rb-h" id="hx" cx="${X2}" cy="${cy}" r="14"/>`+(simple?'':`<circle class="rb-h" id="hy" cx="${cx}" cy="${Y1}" r="14"/>`)+`<circle cx="${X1}" cy="${cy}" r="5" fill="#fff"/><circle cx="${cx}" cy="${Y2}" r="5" fill="#fff"/>`;
  el.querySelector('#rbt').innerHTML=rows(a,d1,d2,per,ar,ang).map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join('');
  const F=el.querySelector('#rbf');if(F){let h=`<p style="margin:4px 0">• ${L('నాలుగు భుజాలు సమానం','All four sides are equal')}; ${L('చుట్టుకొలత = 4 × a','Perimeter = 4 × a')}</p><p style="margin:4px 0">• ${L('కర్ణాలు లంబంగా కలిసి ఒకదాన్నొకటి సమభాగం చేస్తాయి','Diagonals cross at 90° and bisect each other')}</p><p style="margin:4px 0">• ${L('ఎదురు కోణాలు సమానం; ఆనుకున్న కోణాల మొత్తం 180°','Opposite angles are equal; adjacent angles add to 180°')}</p>`;
   if(lv>=4)h+=`<p style="margin:4px 0">• ${L('వైశాల్యం = ½ × d₁ × d₂','Area = ½ × d₁ × d₂')}</p>`;
   if(lv>=5)h+=`<p style="margin:4px 0">• a² = (d₁/2)² + (d₂/2)²</p>`;F.innerHTML=h}
  const ST=el.querySelector('#rbs');if(ST){ST.innerHTML=`<b>🪜 ${L('అడుగులవారీ సాధన','Step by step')}</b><p>${L('ఇచ్చినవి','Given')}: d₁ = ${f(d1)}, d₂ = ${f(d2)} cm</p><p>1. ${L('వైశాల్యం = ½ × d₁ × d₂','Area = ½ × d₁ × d₂')} = ½ × ${f(d1)} × ${f(d2)} = <b>${f(ar)} cm²</b></p>`+(lv>=5?`<p>2. a² = ${f(pp)}² + ${f(qq)}² = ${f(pp*pp+qq*qq)} → a = <b>${f(a)} cm</b></p><p>3. ${L('చుట్టుకొలత = 4 × a','Perimeter = 4 × a')} = <b>${f(per)} cm</b></p>`:`<p>2. ${L('చుట్టుకొలత = 4 × a','Perimeter = 4 × a')} = <b>${f(per)} cm</b></p>`)}
  wire();
 }
 let drag=null;
 function pt(e){const r=svg.getBoundingClientRect();return{x:(e.clientX-r.left)*320/r.width,y:(e.clientY-r.top)*240/r.height}}
 function wire(){['hx','hy'].forEach(id=>{const h=svg.querySelector('#'+id);if(h)h.onpointerdown=e=>{drag=id;try{svg.setPointerCapture(e.pointerId)}catch(x){}e.preventDefault()}})}
 svg.onpointermove=e=>{if(!drag)return;const o=pt(e);
  if(simple){const a=Math.round((o.x-cx)/(0.8*S));A=Math.max(2,Math.min(10,a))}
  else if(drag==='hx')p=Math.max(2,Math.min(10.5,Math.round((o.x-cx)/S*10)/10));else q=Math.max(2,Math.min(7.5,Math.round((cy-o.y)/S*10)/10));draw()};
 svg.onpointerup=svg.onpointercancel=()=>{drag=null};
 draw();
}
window.AKNR={widget};LD.reg("rhombus",1);
})();
