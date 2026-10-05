(function(){
let UID=0;
const NS='#7ab9ff',TX='#f6f8ff',FILLS='rgba(122,185,255,.14)';
const n=v=>Math.round(v*100)/100;
const rad=d=>d*Math.PI/180;
function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]))}
function html(spec,W,lang){
 if(!spec)return '';
 const L=spec.labels||{};
 const lab=k=>{if(k==null)return '';const o=L[k];if(o&&typeof o==='object')return W(o);return String(k)};
 const id='dg'+(++UID);
 const caption=spec.caption?`<div class="dg-cap">${esc(W(spec.caption))}</div>`:'';
 const parts=spec.variants&&spec.variants.length?spec.variants.map(v=>({els:v.elements,cap:v.label})):[{els:spec.elements,cap:null}];
 let out='';
 parts.forEach((p,pi)=>{out+=svg(p.els,spec,lab,id+'_'+pi,W)+(p.cap?`<div class="dg-cap">${esc(W(p.cap))}</div>`:'')});
 return `<div class="lr-card dg">${caption}${out}</div>`;
}
function T(x,y,s,o){o=o||{};s=s==null?'':String(s);if(!s)return '';let fs=o.fs||4.4;const mw=o.mw||112;const anchor=o.a||'middle';
 const cpl=Math.max(4,Math.floor(mw/(fs*.56)));let lines=[s];
 if(s.length>cpl){lines=[];let cur='';s.split(/\s+/).forEach(w=>{if(cur&&(cur+' '+w).length>cpl){lines.push(cur);cur=w}else cur=cur?cur+' '+w:w});if(cur)lines.push(cur);
  if(lines.length>3||lines.some(l=>l.length>cpl*1.15)){fs=Math.max(3.2,fs*.85);}}
 const lw=Math.max.apply(null,lines.map(l=>l.length))*fs*.56;
 if(anchor==='middle'){x=Math.max(-6+lw/2,Math.min(106-lw/2,x))}
 return lines.map((l,k)=>`<text x="${n(x)}" y="${n(y+k*fs*1.2)}" text-anchor="${anchor}" font-size="${n(fs)}" fill="${o.c||TX}" font-weight="${o.w||600}">${esc(l)}</text>`).join('');}
function light(c){if(!c||c[0]!=='#')return false;let h=c.slice(1);if(h.length===3)h=h.split('').map(x=>x+x).join('');if(h.length!==6)return false;const r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);return (0.299*r+0.587*g+0.114*b)>170}
function wrap(s,mw,fs){const cpl=Math.max(3,Math.floor(mw/(fs*.56)));const out=[];let cur='';String(s).split(/\s+/).forEach(w=>{while(w.length>cpl){if(cur){out.push(cur);cur=''}out.push(w.slice(0,cpl));w=w.slice(cpl)}if(cur&&(cur+' '+w).length>cpl){out.push(cur);cur=w}else cur=cur?cur+' '+w:w});if(cur)out.push(cur);return out}
function svg(els,spec,lab,id,W){
 let g='',H=116,mk=false;
 const type=spec.type;
 if(type==='chart'&&els&&!Array.isArray(els))g+=chart(els,spec,W);
 else if(type==='number-line'&&els&&!Array.isArray(els)){g+=numline(els,lab);H=els.grid?112:60}
 else if(Array.isArray(els)){
  let ty=6;const placed=[];
  const PR={polygon:0,sector:0,rect:0,circle:1,ellipse:1,cube:1,cuboid:1,cylinder:1,cone:1,sphere:1,sectors_shaded:1,clock:1,table:1,segment:2,ray:2,line:2,polyline:2,arc:3,tick:3,right_angle_mark:3,point:4,text:5};
  const ord=els.map((e,i)=>[e,i]).sort((a,b)=>((PR[a[0].kind]!=null?PR[a[0].kind]:2)-(PR[b[0].kind]!=null?PR[b[0].kind]:2))||(a[1]-b[1])).map(x=>x[0]);
  const PAL=['#4da3ff','#ffb84d','#7cf0c2','#ff8fa3','#c79bff','#ffe066'];let si=0;
  ord.forEach((e,i)=>{try{
   const k=e.kind,lb=lab(e.label);
   const SC=e.stroke||NS,SW=e.width||1.3;const st=`stroke="${SC}" stroke-width="${SW}" fill="none"`+(e.dashed?' stroke-dasharray="2.5 2"':'');
   if(k==='polygon'&&e.points){const pts=e.points;g+=`<polygon points="${pts.map(p=>n(p[0])+','+n(p[1])).join(' ')}" stroke="${SC}" stroke-width="${SW}" fill="${e.fill||FILLS}"${e.dashed?' stroke-dasharray="2.5 2"':''}/>`;const cx=pts.reduce((a,p)=>a+p[0],0)/pts.length,cy=pts.reduce((a,p)=>a+p[1],0)/pts.length,my=Math.max.apply(null,pts.map(p=>p[1]));g+=lb.length<=3?T(cx,cy+1.5,lb):T(cx,my+5,lb,{mw:34,fs:3.8})}
   else if(k==='rect'){g+=`<rect x="${n(e.x)}" y="${n(e.y)}" width="${n(e.w)}" height="${n(e.h)}" stroke="${SC}" stroke-width="${e.width||1.1}" fill="${e.fill||FILLS}"${e.dashed?' stroke-dasharray="2.5 2"':''}/>`;g+=(lb.length<=3||e.w>=50)?T(e.x+e.w/2,e.y+e.h/2+1.5,lb,{fs:e.w<12?3:4.4,mw:e.w}):T(e.x+e.w/2,e.y+e.h+5,lb,{mw:34,fs:3.8})}
   else if(k==='circle'){g+=`<circle cx="${n(e.cx)}" cy="${n(e.cy)}" r="${n(e.r)}" stroke="${SC}" stroke-width="${e.width||1.1}" fill="${e.fill||FILLS}"${e.dashed?' stroke-dasharray="2.5 2"':''}/>`;g+=lb.length<=3?T(e.cx,e.cy+1.5,lb,{fs:e.r<6?3:4.4}):T(e.cx,e.cy+e.r+5,lb,{mw:34,fs:3.8})}
   else if(k==='segment'||k==='ray'||k==='line'){
    const f=e.from,t=e.to;let a=e.arrow;if(a===true)a='end';if(k==='line')a='both';else if(k==='ray'&&!a)a='end';
    let m='';if(a==='end'||a==='both'){m+=` marker-end="url(#${id}a)"`;mk=true}if(a==='both'){m+=` marker-start="url(#${id}a)"`;mk=true}
    g+=`<line x1="${n(f[0])}" y1="${n(f[1])}" x2="${n(t[0])}" y2="${n(t[1])}" ${st}${m}/>`;
    if(e.endpoints){[f,t].forEach((q,qi)=>{if(e.endpoints===true||e.endpoints==='both'||(e.endpoints==='start'&&qi===0))g+=`<circle cx="${n(q[0])}" cy="${n(q[1])}" r="1.5" fill="${NS}"/>`})}
    if(lb){const mx=(f[0]+t[0])/2,my=(f[1]+t[1])/2;g+=T(mx,my-2.5,lb,{fs:4})}}
   else if(k==='arc'){const a1=rad(e.from_deg),a2=rad(e.to_deg);const x1=e.cx+e.r*Math.cos(a1),y1=e.cy-e.r*Math.sin(a1),x2=e.cx+e.r*Math.cos(a2),y2=e.cy-e.r*Math.sin(a2);const sw=e.to_deg-e.from_deg;g+=`<path d="M${n(x1)},${n(y1)} A${n(e.r)},${n(e.r)} 0 ${Math.abs(sw)>180?1:0} ${sw>0?0:1} ${n(x2)},${n(y2)}" stroke="#ffb84d" stroke-width="1.2" fill="none"/>`;g+=T(e.cx+e.r*1.6*Math.cos((a1+a2)/2),e.cy-e.r*1.6*Math.sin((a1+a2)/2)+1.5,lb,{fs:3.6})}
   else if(k==='ellipse'){g+=`<ellipse cx="${n(e.cx)}" cy="${n(e.cy)}" rx="${n(e.rx)}" ry="${n(e.ry)}"${e.rot_deg?` transform="rotate(${e.rot_deg} ${n(e.cx)} ${n(e.cy)})"`:''} stroke="${SC}" stroke-width="${e.width||1.1}" fill="${e.fill||FILLS}"${e.dashed?' stroke-dasharray="2.5 2"':''}/>`;if(lb)g+=T(e.cx,e.cy+1.5,lb,{fs:3.6,mw:e.rx*1.8})}
   else if(k==='polyline'&&e.points){g+=`<polyline points="${e.points.map(p=>n(p[0])+','+n(p[1])).join(' ')}" ${st} stroke-linejoin="round"/>`}
   else if(k==='sector'){const a0=rad(e.from_deg),a1=rad(e.to_deg),sw=e.to_deg-e.from_deg;const P=a=>[e.cx+e.r*Math.cos(a),e.cy-e.r*Math.sin(a)];const p0=P(a0),p1=P(a1);const col=e.fill||PAL[si++%6];g+=`<path d="M${n(e.cx)},${n(e.cy)} L${n(p0[0])},${n(p0[1])} A${n(e.r)},${n(e.r)} 0 ${Math.abs(sw)>180?1:0} ${sw>0?0:1} ${n(p1[0])},${n(p1[1])} Z" fill="${col}" fill-opacity=".7" stroke="${NS}" stroke-width="1"/>`;if(lb){const am=(a0+a1)/2;g+=T(e.cx+e.r*.6*Math.cos(am),e.cy-e.r*.6*Math.sin(am)+1.5,lb,{fs:3.8,mw:e.r*.9})}}
   else if(k==='tick'&&e.at){const dx=e.to[0]-e.from[0],dy=e.to[1]-e.from[1],L=Math.hypot(dx,dy)||1,ux=dx/L,uy=dy/L,nx=-uy,ny=ux,c=e.count||1;for(let j=0;j<c;j++){const off=(j-(c-1)/2)*2.2;const mx=e.at[0]+ux*off,my=e.at[1]+uy*off;g+=`<line x1="${n(mx-nx*2.2)}" y1="${n(my-ny*2.2)}" x2="${n(mx+nx*2.2)}" y2="${n(my+ny*2.2)}" stroke="#ffb84d" stroke-width="1.1"/>`}}
   else if(k==='right_angle_mark'&&e.at&&e.arms){const v=e.arms.map(a=>{const dx=a[0]-e.at[0],dy=a[1]-e.at[1],L=Math.hypot(dx,dy)||1;return [dx/L*5,dy/L*5]});g+=`<path d="M${n(e.at[0]+v[0][0])},${n(e.at[1]+v[0][1])} L${n(e.at[0]+v[0][0]+v[1][0])},${n(e.at[1]+v[0][1]+v[1][1])} L${n(e.at[0]+v[1][0])},${n(e.at[1]+v[1][1])}" stroke="#ffb84d" stroke-width="1.1" fill="none"/>`}
   else if(k==='point'){g+=`<circle cx="${n(e.x)}" cy="${n(e.y)}" r="1.6" fill="#ffb84d"/>`;g+=T(e.x+3,e.y-3,lb,{a:'start',fs:4})}
   else if(k==='text'){let bx=null;els.forEach(r=>{if(r.kind==='rect'&&e.x>=r.x&&e.x<=r.x+r.w&&e.y>=r.y&&e.y<=r.y+r.h&&(!bx||r.w*r.h<bx.w*bx.h))bx=r});
    if(bx&&lb){let fs=4.4,lines;for(;fs>2.6;fs-=.3){lines=wrap(lb,bx.w-2.5,fs);if(lines.length*fs*1.2<=bx.h-1.5)break}lines=wrap(lb,bx.w-2.5,fs);const y0=bx.y+bx.h/2-(lines.length-1)*fs*.6+fs*.35;g+=lines.map((l,j)=>`<text x="${n(bx.x+bx.w/2)}" y="${n(y0+j*fs*1.2)}" text-anchor="middle" font-size="${n(fs)}" fill="${light(bx.fill)?'#10163a':TX}" font-weight="600">${esc(l)}</text>`).join('')}
    else if(lb){const fs=3.8,ls=wrap(lb,60,fs),w=Math.max.apply(null,ls.map(l=>l.length))*fs*.56,h=ls.length*fs*1.2;let x=Math.max(-6+w/2,Math.min(106-w/2,e.x)),y=e.y;for(let tr=0;tr<6;tr++){const hit=placed.find(b=>Math.abs(b.x-x)<(b.w+w)/2+.5&&Math.abs(b.y-y)<(b.h+h)/2);if(!hit)break;y=hit.y+(hit.h+h)/2+.4}placed.push({x,y,w,h});g+=ls.map((l,j)=>`<text x="${n(x)}" y="${n(y+j*fs*1.2)}" text-anchor="middle" font-size="${fs}" fill="${TX}" font-weight="600">${esc(l)}</text>`).join('')}}
   else if(k==='right_angle_mark'&&e.x!=null){const s=e.size||5;g+=`<path d="M${n(e.x)},${n(e.y-s)} h${s} v${s}" stroke="#ffb84d" stroke-width="1.1" fill="none"/>`}
   else if(k==='sectors_shaded'){const tot=e.total||1,a0=rad(e.from_deg),a1=rad(e.to_deg);const P=(a)=>[e.cx+e.r*Math.cos(a),e.cy+e.r*Math.sin(a)];const p0=P(a0),p1=P(a1);const big=Math.abs(e.to_deg-e.from_deg)>180?1:0;g+=`<circle cx="${n(e.cx)}" cy="${n(e.cy)}" r="${n(e.r)}" stroke="${NS}" stroke-width="1.1" fill="none"/>`;g+=`<path d="M${n(e.cx)},${n(e.cy)} L${n(p0[0])},${n(p0[1])} A${n(e.r)},${n(e.r)} 0 ${big} 1 ${n(p1[0])},${n(p1[1])} Z" fill="${e.fill||'#ffb84d'}" fill-opacity=".75" stroke="${NS}" stroke-width="1"/>`;for(let j=0;j<tot;j++){const a=a0+j*2*Math.PI/tot;g+=`<line x1="${n(e.cx)}" y1="${n(e.cy)}" x2="${n(e.cx+e.r*Math.cos(a))}" y2="${n(e.cy+e.r*Math.sin(a))}" stroke="${NS}" stroke-width=".7"/>`}}
   else if(k==='clock'){const r=e.r,cx=e.cx,cy=e.cy;g+=`<circle cx="${cx}" cy="${cy}" r="${r}" fill="rgba(122,185,255,.1)" stroke="${NS}" stroke-width="1.5"/>`;for(let h=1;h<=12;h++){const a=rad(h*30);g+=T(cx+(r-6)*Math.sin(a),cy-(r-6)*Math.cos(a)+1.6,String(h),{fs:5})}for(let j=0;j<60;j++){const a=rad(j*6),r1=j%5?r-1.6:r-3;g+=`<line x1="${n(cx+r*Math.sin(a))}" y1="${n(cy-r*Math.cos(a))}" x2="${n(cx+r1*Math.sin(a))}" y2="${n(cy-r1*Math.cos(a))}" stroke="${NS}" stroke-width=".6"/>`}[['hour_hand','#ffb84d',2.4],['minute_hand','#7cf0c2',1.6]].forEach(([hk,c,w])=>{const h=e[hk];if(h&&h.to)g+=`<line x1="${cx}" y1="${cy}" x2="${n(h.to[0])}" y2="${n(h.to[1])}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`});g+=`<circle cx="${cx}" cy="${cy}" r="2" fill="${TX}"/>`}
   else if(k==='table'){const cols=e.columns||[],vals=e.digits||e.values||[];const cw=Math.min(14,96/Math.max(1,cols.length));const x0=(100-cw*cols.length)/2;cols.forEach((c,j)=>{g+=`<rect x="${n(x0+j*cw)}" y="${ty}" width="${n(cw)}" height="9" fill="rgba(122,185,255,.25)" stroke="${NS}" stroke-width=".7"/>`+T(x0+j*cw+cw/2,ty+6,c,{fs:Math.min(4.4,cw*.42)});g+=`<rect x="${n(x0+j*cw)}" y="${ty+9}" width="${n(cw)}" height="10" fill="none" stroke="${NS}" stroke-width=".7"/>`+T(x0+j*cw+cw/2,ty+16,vals[j]==null?'':vals[j],{fs:Math.min(5.4,cw*.5),c:'#ffb84d'})});ty+=26;H=Math.max(H,ty+6)}
   else if(k==='cube'){const s=e.size,o=s*.35;g+=`<rect x="${e.x}" y="${e.y+o}" width="${s}" height="${s}" ${st} fill="${FILLS}"/><path d="M${e.x},${e.y+o} l${o},${-o} h${s} v${s} l${-o},${o} M${e.x+s},${e.y+o} l${o},${-o}" ${st}/>`+T(e.x+s/2,e.y+o+s+6,lab(e.label),{mw:36,fs:3.8})}
   else if(k==='cuboid'){const o=e.d;g+=`<rect x="${e.x}" y="${e.y+o}" width="${e.w}" height="${e.h}" ${st} fill="${FILLS}"/><path d="M${e.x},${e.y+o} l${o},${-o} h${e.w} v${e.h} l${-o},${o} M${e.x+e.w},${e.y+o} l${o},${-o}" ${st}/>`+T(e.x+e.w/2,e.y+o+e.h+6,lab(e.label),{mw:40,fs:3.8})}
   else if(k==='cylinder'){g+=`<path d="M${e.cx-e.rx},${e.cy} v${e.h} a${e.rx},${e.ry} 0 0 0 ${2*e.rx},0 v${-e.h}" ${st}/><ellipse cx="${e.cx}" cy="${e.cy}" rx="${e.rx}" ry="${e.ry}" ${st} fill="${FILLS}"/>`+T(e.cx,e.cy+e.h+e.ry+6,lab(e.label),{mw:36,fs:3.8})}
   else if(k==='cone'){g+=`<path d="M${e.cx-e.rx},${e.cy} a${e.rx},${e.ry} 0 0 0 ${2*e.rx},0 L${e.cx},${e.cy-e.h} Z" ${st} fill="${FILLS}"/><ellipse cx="${e.cx}" cy="${e.cy}" rx="${e.rx}" ry="${e.ry}" ${st} stroke-dasharray="2 1.5"/>`+T(e.cx,e.cy+e.ry+6,lab(e.label),{mw:36,fs:3.8})}
   else if(k==='sphere'){g+=`<circle cx="${e.cx}" cy="${e.cy}" r="${e.r}" ${st} fill="${FILLS}"/><ellipse cx="${e.cx}" cy="${e.cy}" rx="${e.r}" ry="${n(e.r*.3)}" ${st} stroke-dasharray="2 1.5"/>`+T(e.cx,e.cy+e.r+6,lab(e.label),{mw:36,fs:3.8})}
  }catch(x){}});
 }
 const defs=mk?`<defs><marker id="${id}a" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="${NS}"/></marker></defs>`:'';
 return `<svg class="dg-svg" viewBox="-10 -2 120 ${H}" role="img" style="width:100%;max-width:380px;display:block;margin:8px auto">${defs}${g}</svg>`;
}
function chart(e,spec,W){
 const cats=e.categories||[],vals=e.values||[];const mx=Math.max.apply(null,vals.concat([1]));const step=mx>20?10:mx>10?2:1;const top=Math.ceil(mx/step)*step;const x0=16,x1=96,y0=78,y1=10;let g='';
 for(let v=0;v<=top;v+=step){const y=y0-(y0-y1)*v/top;g+=`<line x1="${x0}" y1="${n(y)}" x2="${x1}" y2="${n(y)}" stroke="${NS}" stroke-opacity=".25" stroke-width=".5"/>`+T(x0-2,y+1.5,v,{a:'end',fs:3.6})}
 const bw=(x1-x0)/Math.max(1,cats.length);const cols=['#1d6fd1','#12a37f','#d98a00','#a14fd6','#d1493f','#2a9fb5'];
 cats.forEach((c,i)=>{const h=(y0-y1)*vals[i]/top;g+=`<rect x="${n(x0+i*bw+bw*.18)}" y="${n(y0-h)}" width="${n(bw*.64)}" height="${n(h)}" rx="1" fill="${cols[i%6]}"/>`+T(x0+i*bw+bw/2,y0-h-1.5,vals[i],{fs:3.8})+T(x0+i*bw+bw/2,y0+6,c,{fs:3.6})});
 g+=`<line x1="${x0}" y1="${y0}" x2="${x1}" y2="${y0}" stroke="${NS}" stroke-width="1"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y1}" stroke="${NS}" stroke-width="1"/>`;
 if(spec.axes){g+=T(56,95,W(spec.axes.x),{fs:4});g+=`<text transform="translate(-2,44) rotate(-90)" text-anchor="middle" font-size="4" fill="${TX}">${esc(W(spec.axes.y))}</text>`}
 return g;
}
function numline(e,lab){
 const x0=6,x1=94,y=24;let g=`<line x1="${x0}" y1="${y}" x2="${x1}" y2="${y}" stroke="${NS}" stroke-width="1.3"/>`;const rng=(e.to-e.from)||1;const X=v=>x0+(x1-x0)*(v-e.from)/rng;
 (e.ticks||[]).forEach(t=>{g+=`<line x1="${n(X(t))}" y1="${y-2.5}" x2="${n(X(t))}" y2="${y+2.5}" stroke="${NS}" stroke-width="1"/>`+T(X(t),y+9,t,{fs:3.4})});
 (e.marks||[]).forEach((m,i)=>{const x=X(m.at);g+=`<circle cx="${n(x)}" cy="${y}" r="2" fill="#ffb84d"/>`+T(x,y-6-(i%2)*5,lab(m.label),{fs:3.6,c:'#ffb84d'})});
 if(e.grid){const rows=e.grid.rows||10,cols=e.grid.cols||10,sh=e.grid.shaded||0,cs=5,gx=(100-cols*cs)/2,gy=44;for(let r=0;r<rows;r++)for(let c=0;c<cols;c++){const idx=r*cols+c;g+=`<rect x="${gx+c*cs}" y="${gy+r*cs}" width="${cs}" height="${cs}" fill="${idx<sh?'#ffb84d':'none'}" fill-opacity=".8" stroke="${NS}" stroke-width=".4"/>`}}
 return g;
}
window.DG={html};
LD.reg('diag',1);
})();
