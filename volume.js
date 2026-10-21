/* AksharaNova Listen-voice volume control (add-only). One saved volume for recorded lesson clips and read-aloud voice. Does not change existing layout or playback code. */
(function(){
'use strict';
if(window.__aknVol)return;
var KEY='akn.vol';
function clamp(v){v=parseFloat(v);if(isNaN(v))return 1;if(v<0)return 0;if(v>1)return 1;return v}
function get(){try{var s=localStorage.getItem(KEY);return s==null?1:clamp(s)}catch(e){return 1}}
var clips=[];
function apply(){
 var v=get();
 clips=clips.filter(function(a){return a&&!a.ended});
 clips.forEach(function(a){try{a.volume=v}catch(e){}});
 try{if(window.__kc)window.__kc.volume=v}catch(e){}
}
function set(v){try{localStorage.setItem(KEY,String(clamp(v)))}catch(e){}apply()}
try{
 var OA=window.Audio;
 if(OA){
  window.Audio=function(){
   var a=new (Function.prototype.bind.apply(OA,[null].concat([].slice.call(arguments))));
   try{a.volume=get()}catch(e){}
   clips.push(a);
   return a;
  };
  window.Audio.prototype=OA.prototype;
 }
}catch(e){}
try{
 if(window.speechSynthesis&&window.speechSynthesis.speak){
  var os=window.speechSynthesis.speak.bind(window.speechSynthesis);
  window.speechSynthesis.speak=function(u){try{u.volume=get()}catch(e){}return os(u)};
 }
}catch(e){}
window.__aknVol={get:get,set:set};
function ready(fn){if(document.body){fn()}else{document.addEventListener('DOMContentLoaded',fn)}}
ready(function(){
try{
 var css=
 '.akn-vol-btn{position:fixed;left:14px;bottom:calc(14px + env(safe-area-inset-bottom,0px));width:56px;height:56px;border-radius:50%;border:2px solid #d9fcff;color:#fff;background:radial-gradient(circle at 30% 20%,#57eeff,#157ab5 35%,#6b24b5 68%,#131236);box-shadow:0 0 8px #c9fbff,0 0 20px #00d9ff70;display:flex;align-items:center;justify-content:center;font-size:24px;cursor:pointer;z-index:9989;padding:0;font-family:system-ui,sans-serif;-webkit-tap-highlight-color:transparent}'
 +'.akn-vol-btn:active{transform:scale(.94)}'
 +'.akn-vol-btn:focus-visible{outline:3px solid #ffdf61;outline-offset:4px}'
 +'.akn-vol-panel{position:fixed;left:14px;bottom:calc(80px + env(safe-area-inset-bottom,0px));width:230px;background:linear-gradient(120deg,#302049f5,#112f48f5);color:#ffe98a;border:1px solid #ffcf6dcc;border-radius:14px;padding:12px 14px;z-index:9991;box-shadow:0 6px 24px rgba(0,0,0,.55);font-family:"Noto Sans Telugu","Nirmala UI",system-ui,sans-serif}'
 +'.akn-vol-panel b{display:block;font-size:13px;margin-bottom:8px;letter-spacing:.3px}'
 +'.akn-vol-row{display:flex;align-items:center;gap:10px}'
 +'.akn-vol-row input[type=range]{flex:1;accent-color:#42d9cc;height:28px}'
 +'.akn-vol-pct{font-size:13px;font-weight:800;min-width:42px;text-align:right;color:#aef3ff}';
 var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
 var b=document.createElement('button');
 b.type='button';b.className='akn-vol-btn';b.id='akn-vol-btn';
 b.textContent='\uD83D\uDD0A';
 b.setAttribute('aria-label','Volume / \u0C35\u0C3E\u0C32\u0C4D\u0C2F\u0C42\u0C2E\u0C4D');
 var panel=document.createElement('div');
 panel.className='akn-vol-panel';panel.style.display='none';
 var lab=document.createElement('b');lab.textContent='\u0C35\u0C3E\u0C32\u0C4D\u0C2F\u0C42\u0C2E\u0C4D \u00B7 Listen Volume';
 var row=document.createElement('div');row.className='akn-vol-row';
 var rng=document.createElement('input');
 rng.type='range';rng.min='0';rng.max='100';rng.step='5';
 rng.value=String(Math.round(get()*100));
 rng.setAttribute('aria-label','Volume');
 var pct=document.createElement('span');pct.className='akn-vol-pct';pct.textContent=rng.value+'%';
 rng.addEventListener('input',function(){pct.textContent=rng.value+'%';set(rng.value/100)});
 row.appendChild(rng);row.appendChild(pct);
 panel.appendChild(lab);panel.appendChild(row);
 var open=false;
 function toggle(){open=!open;panel.style.display=open?'block':'none'}
 b.addEventListener('click',function(ev){ev.stopPropagation();toggle()});
 panel.addEventListener('click',function(ev){ev.stopPropagation()});
 document.addEventListener('click',function(){if(open){open=false;panel.style.display='none'}});
 document.body.appendChild(b);document.body.appendChild(panel);
}catch(e){}
});
})();
