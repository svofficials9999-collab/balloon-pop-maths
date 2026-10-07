(function(){
if(window.__sugg)return;window.__sugg=1;
var U='https://docs.google.com/forms/d/e/1FAIpQLSfziZOGZFiRFR6QhTFWjFZtK59_7VB4QphbfpVBt1qciC9Sfw/formResponse';
var css='#sgfab{position:fixed;left:10px;bottom:calc(10px + env(safe-area-inset-bottom,0px));z-index:40;width:40px;height:40px;border-radius:50%;border:1.5px solid #ffffffaa;background:linear-gradient(135deg,#ffd600,#ff4df0 55%,#7c4dff);color:#fff;font-size:20px;box-shadow:0 0 14px #ff4df0aa;cursor:pointer;padding:0;opacity:.92}'+
'#sgov{position:fixed;inset:0;z-index:99999;background:radial-gradient(circle at 20% 0,#2b1d6b,#0a0f2a 70%);overflow:auto;-webkit-overflow-scrolling:touch;font-family:system-ui,sans-serif;color:#fff}'+
'#sgov .sgb{max-width:480px;margin:0 auto;padding:16px 16px 40px}'+
'#sgov h2{margin:6px 0 4px;font-size:24px;background:linear-gradient(90deg,#00e5ff,#ff4df0,#ffd600,#00e5ff);background-size:300% 100%;-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;animation:sgh 5s linear infinite}'+
'@keyframes sgh{to{background-position:300% 0}}'+
'#sgov p{margin:0 0 12px;color:#e4eeff;font-size:15px;line-height:1.5}'+
'#sgov label{display:block;margin:12px 0 5px;font-weight:800;font-size:15px;color:#8bebf6}'+
'#sgov input,#sgov textarea{width:100%;box-sizing:border-box;border-radius:14px;border:1.5px solid #7c4dffcc;background:#0f1633;color:#fff;font-size:17px;padding:12px;outline:none;box-shadow:0 0 10px #7c4dff44}'+
'#sgov textarea{min-height:130px;resize:vertical}#sgov input:focus,#sgov textarea:focus{border-color:#00e5ff;box-shadow:0 0 14px #00e5ff88}'+
'#sgov .sgs{display:block;width:100%;margin-top:16px;min-height:54px;border-radius:27px;border:1.5px solid #ffffffaa;color:#fff;font-size:19px;font-weight:900;background:linear-gradient(110deg,#00e5ff,#7c4dff,#ff4df0,#ffd600);background-size:260% 100%;box-shadow:0 0 20px #b46bff99;animation:sgh 4s linear infinite;cursor:pointer}'+
'#sgov .sgx{position:absolute;top:10px;right:12px;width:42px;height:42px;border-radius:50%;border:1.5px solid #ffffff88;background:#ffffff18;color:#fff;font-size:20px;cursor:pointer}'+
'#sgov .sgm{margin-top:12px;text-align:center;font-weight:800;font-size:16px;min-height:22px}'+
'.sgbtn{display:block;width:calc(100% - 4px);margin:10px 2px;min-height:56px;border-radius:18px;border:4px solid #ffd600;outline:2px solid #00e5ff;outline-offset:3px;color:#fff;font-size:18px;font-weight:900;text-shadow:0 2px 4px #000a;background:linear-gradient(110deg,#00c853,#00e5ff,#2979ff,#00c853);background-size:260% 100%;box-shadow:0 0 22px #ffd600cc,0 0 40px #00e5ff77,inset 0 0 14px #ffffff55;animation:sgh 5s linear infinite;cursor:pointer;padding:8px 12px}'+
'@media (prefers-reduced-motion:reduce){#sgov h2,#sgov .sgs,.sgbtn{animation:none}}';
var st=document.createElement('style');st.textContent=css;document.head.appendChild(st);
function open(){if(document.getElementById('sgov'))return;
var d=document.createElement('div');d.id='sgov';
d.innerHTML='<button class="sgx" aria-label="Close">✕</button><div class="sgb"><h2>💡 సూచనల పెట్టె · Suggestion Box</h2><p>కొత్త టాపిక్, కోర్సు లేదా మార్పు కావాలా? ఇక్కడ రాయండి. మేము చదువుతాం! <br>Want a new topic, course or fix? Write it here. We read every one.</p>'+
'<label>మీ పేరు (ఐచ్ఛికం) · Your name (optional)</label><input id="sgn" maxlength="80" autocomplete="name">'+
'<label>తరగతి / కోర్సు (ఐచ్ఛికం) · Class / course (optional)</label><input id="sgc" maxlength="80">'+
'<label>మీ సూచన (తప్పనిసరి) · Your suggestion (required)</label><textarea id="sgt" maxlength="1500"></textarea>'+
'<div style="display:none"><input id="sgh" tabindex="-1" autocomplete="off"></div>'+
'<button class="sgs" id="sgs">🚀 పంపండి · Send</button><div class="sgm" id="sgm"></div></div>';
document.body.appendChild(d);document.body.style.overflow='hidden';
function close(){d.remove();document.body.style.overflow='';}
d.querySelector('.sgx').onclick=close;
document.getElementById('sgs').onclick=function(){var t=document.getElementById('sgt').value.trim(),m=document.getElementById('sgm');
if(document.getElementById('sgh').value)return;
if(t.length<3){m.style.color='#ffd166';m.textContent='దయచేసి సూచన రాయండి · Please write your suggestion';return}
var last=+localStorage.getItem('an_sg_t')||0;if(Date.now()-last<20000){m.style.color='#ffd166';m.textContent='కొద్దిసేపు ఆగండి · Please wait a few seconds';return}
var b=document.getElementById('sgs');b.disabled=true;m.style.color='#8bebf6';m.textContent='… ';
var f=new URLSearchParams();f.append('entry.1042647611',document.getElementById('sgn').value.trim().slice(0,80));f.append('entry.1599796149',document.getElementById('sgc').value.trim().slice(0,80));f.append('entry.1795780490',t.slice(0,1500));
fetch(U,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:f.toString()}).then(function(){localStorage.setItem('an_sg_t',Date.now());m.style.color='#7cff8a';m.textContent='ధన్యవాదాలు! 🎉 మీ సూచన అందింది · Thank you! Received.';document.getElementById('sgt').value='';b.disabled=false;setTimeout(close,2600)}).catch(function(){m.style.color='#ff8a8a';m.textContent='ఇంటర్నెట్ సమస్య, మళ్లీ ప్రయత్నించండి · Network issue, try again';b.disabled=false})}}
window.openSuggest=open;
if(!window.koreSay){var __kb=null;window.koreSay=function(id,fb){try{speechSynthesis.cancel()}catch(e){}if(__kb){try{__kb.pause()}catch(e){}}const bad=()=>{if(fb)fb()};fetch('../learn/audio/index.json?v='+Date.now()).then(r=>r.json()).then(m=>{if(!m[id])return bad();const go=()=>{const s=window.__AUD&&window.__AUD[id];if(!s)return bad();try{const c=m[id];for(const k in window.__AUD)if(m[k]!==c)delete window.__AUD[k]}catch(x){}__kb=new Audio(s);__kb.onerror=bad;const p=__kb.play();if(p&&p.catch)p.catch(bad)};if(window.__AUD&&window.__AUD[id])return go();const e=document.createElement('script');e.src='../learn/audio/'+m[id]+'.js';e.onload=()=>{go();try{e.remove()}catch(x){}};e.onerror=bad;document.head.appendChild(e)}).catch(bad)};}
function fab(){var on=!document.getElementById('field')&&!document.getElementById('sgov')&&!document.querySelector('.home #sgbox');var f=document.getElementById('sgfab');if(on&&!f){f=document.createElement('button');f.id='sgfab';f.title='Suggestion Box';f.setAttribute('aria-label','Suggestion Box');f.innerHTML='<svg aria-hidden="true" viewBox="0 0 24 24" width="22" height="22"><path d="M7 18h10M8 21h8M9 15c0-3-4-3-4-7a7 7 0 0 1 14 0c0 4-4 4-4 7Z" fill="none" stroke="white" stroke-width="2"/></svg>';f.onclick=open;document.body.appendChild(f)}else if(!on&&f){f.remove()}}
function homeBtn(){var h=document.querySelector('.home');if(!h||h.querySelector('#sgbox'))return;var r=h.querySelector('.row');var b=document.createElement('button');b.className='sgbtn';b.id='sgbox';b.innerHTML='💡 సూచనల పెట్టె · Suggestion Box';b.onclick=open;if(r)r.insertAdjacentElement('afterend',b);else h.appendChild(b)}
var t=0;function run(){t=0;try{homeBtn();fab()}catch(e){}}
new MutationObserver(function(){if(!t)t=setTimeout(run,300)}).observe(document.documentElement,{childList:true,subtree:true});run();
})();
