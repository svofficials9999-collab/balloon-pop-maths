/* AksharaNova app lock. Device-only gate (no backend). Config line below changes the PIN. */
(function(){

var K='akn.unlock',M='akn.mobile',A='akn.pinfail',T='akn.pinwait',OK='m1';
var d=document,ls=window.localStorage;
function get(k){try{return ls.getItem(k)}catch(e){return null}}
function set(k,v){try{ls.setItem(k,v)}catch(e){}}
if(get(K)===OK&&/^[6-9][0-9]{5,9}$/.test(get(M)||''))return;
var base=(d.currentScript&&d.currentScript.src||'').replace(/lock\.js.*$/,'');
var st=d.createElement('style');
st.textContent='html.akl body>*:not(#akl){display:none!important}html.akl,html.akl body{background:#050816!important;overflow:hidden!important}#akl{position:fixed;inset:0;z-index:2147483647;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;padding:16px;background:radial-gradient(1200px 600px at 50% -10%,#1b1450 0%,#070b1f 55%,#03040c 100%);color:#e8f6ff;font-family:system-ui,-apple-system,"Noto Sans Telugu","Nirmala UI",sans-serif;user-select:none;-webkit-user-select:none;touch-action:manipulation}#akl *{box-sizing:border-box}#akl img{width:84px;height:84px;filter:drop-shadow(0 0 18px #00e5ff)}#akl h1{margin:0;font-size:22px;letter-spacing:.5px;text-align:center;background:linear-gradient(90deg,#00e5ff,#c77dff,#ff4ecd);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none}#akl p{margin:0;text-align:center;color:#9fb4d8;font-size:14px}#akl .dots{display:flex;gap:12px;margin:6px 0}#akl .dots i{width:16px;height:16px;border-radius:50%;border:2px solid #00e5ff;box-shadow:0 0 10px #00e5ff55}#akl .dots i.on{background:#00e5ff;box-shadow:0 0 16px #00e5ff}#akl .pad{display:grid;grid-template-columns:repeat(3,76px);gap:12px}#akl button{height:64px;border-radius:18px;border:1.5px solid #6a5cff;background:linear-gradient(180deg,#171b4a,#0d1033);color:#fff;font-size:26px;font-weight:700;box-shadow:0 0 14px #6a5cff55,inset 0 0 12px #00e5ff22;cursor:pointer;font-family:inherit}#akl button:active{transform:scale(.94);background:#2a2f86}#akl button.sp{font-size:18px;border-color:#ff4ecd;box-shadow:0 0 14px #ff4ecd55}#akl .msg{min-height:20px;color:#ff7aa8;font-size:14px;font-weight:700;text-align:center}#akl.sh .dots{animation:aklsh .4s}@keyframes aklsh{20%{transform:translateX(-10px)}40%{transform:translateX(10px)}60%{transform:translateX(-8px)}80%{transform:translateX(8px)}}';
(d.head||d.documentElement).appendChild(st);
d.documentElement.classList.add('akl');
var v='',busy=false,box,num,msg;
function te(a,b){return(d.documentElement.lang==='en')?b:a+' · '+b}
function build(){
 box=d.createElement('div');box.id='akl';
 box.innerHTML='<img alt="" src="'+base+'learn/logo.svg"><h1>SV AKSHARANOVA</h1><p>'+te('మీ మొబైల్ నంబర్ ఇవ్వండి (కనీసం మొదటి 6 అంకెలు)','Enter your mobile number (at least the first 6 digits)')+'</p><div class="num" style="min-height:36px;font-size:28px;font-weight:800;letter-spacing:3px;color:#00e5ff;text-shadow:0 0 14px #00e5ff88">&nbsp;</div><div class="msg"></div><div class="pad">'+[1,2,3,4,5,6,7,8,9].map(function(n){return'<button data-k="'+n+'">'+n+'</button>'}).join('')+'<button class="sp" data-k="x">⌫</button><button data-k="0">0</button><button class="sp" data-k="ok">🔓</button></div><p style="font-size:12px">'+te('మీ నంబర్ ఈ ఫోన్‌లోనే ఉంటుంది','Your number stays on this phone')+'</p><p style="font-size:11px;letter-spacing:2px;color:#9fb4d8;margin-top:4px">'+te('యజమాని','OWNER')+'</p><p style="font-size:22px;font-weight:900;letter-spacing:3px;background:linear-gradient(90deg,#00e5ff,#c77dff,#ff4ecd);-webkit-background-clip:text;background-clip:text;color:transparent;text-shadow:none;filter:drop-shadow(0 0 8px #c77dff88)">D SRINIVAS</p>';
 d.body.appendChild(box);num=box.querySelector('.num');msg=box.querySelector('.msg');
 box.addEventListener('click',function(e){var b=e.target.closest('button');if(b)key(b.getAttribute('data-k'))});
}
function paint(){num.innerHTML=v?v.replace(/(\d{5})(?=\d)/,'$1 '):'&nbsp;'}
function key(k){if(busy)return;if(k==='x'){v=v.slice(0,-1)}else if(k==='ok'){check();return}else if(v.length<10){v+=k}paint()}
d.addEventListener('keydown',function(e){if(!box)return;if(/^[0-9]$/.test(e.key))key(e.key);else if(e.key==='Backspace')key('x');else if(e.key==='Enter')key('ok')});
function wait(){var w=+get(T)||0,n=w-Date.now();return n>0?Math.ceil(n/1000):0}
function valid(n){if(!/^[6-9][0-9]{5,9}$/.test(n))return false;var f=n.slice(0,6);if(/^(\d)\1{5}$/.test(f))return false;if('0123456789'.indexOf(f)>-1||'9876543210'.indexOf(f)>-1)return false;return true}
function check(){
 var w=wait();if(w){msg.textContent=te('కొంచెం ఆగండి','Please wait')+' '+w+'s';return}
 if(v.length<6){msg.textContent=te('కనీసం 6 అంకెలు ఇవ్వండి','Enter at least 6 digits');return}
 if(valid(v)){set(M,v);try{set('akn.profile',JSON.stringify({mobile:v,since:new Date().toISOString().slice(0,10)}))}catch(e){}set(K,OK);set(A,'0');window.AKN_MOBILE=v;d.documentElement.classList.remove('akl');if(box)box.remove();st.remove();return}
 var f=(+get(A)||0)+1;set(A,String(f));if(f>=5)set(T,String(Date.now()+Math.min(600,30*(f-4))*1000));v='';paint();msg.textContent=te('సరైన మొబైల్ నంబర్ ఇవ్వండి','Enter a valid mobile number');box.classList.remove('sh');void box.offsetWidth;box.classList.add('sh');
}
function go(){build()}
if(d.body)go();else d.addEventListener('DOMContentLoaded',go);
})();
