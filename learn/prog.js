/* AksharaNova on-device progress engine. All data stays on this phone (localStorage), keyed by a random local profile id. No login, no phone number, nothing is sent anywhere. */
(function(){
const LSg=k=>{try{return localStorage.getItem(k)}catch(e){return null}},LSs=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const J=(k,d)=>{try{const v=JSON.parse(LSg(k));return v==null?d:v}catch(e){return d}};
const day=(t)=>{const d=new Date(t||Date.now());return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0')};
const nid=()=>'prof_'+Math.random().toString(36).slice(2,8)+Date.now().toString(36).slice(-3);
function profiles(){let p=J('akn.profiles',null);if(!Array.isArray(p)||!p.length){const id=nid();p=[{id,name:''}];LSs('akn.profiles',JSON.stringify(p));LSs('akn.activeProfile',id)}return p}
function active(){const p=profiles();const a=LSg('akn.activeProfile');return (p.find(x=>x.id===a)||p[0]).id}
const dk=()=>'akn.pd.'+active();
let D=null,DK='';
function data(){const k=dk();if(D&&DK===k)return D;DK=k;D=J(k,null)||{t:{},att:[],mist:[],bm:[],days:{},tests:[],last:null};['t','days'].forEach(x=>{if(!D[x])D[x]={}});['att','mist','bm','tests'].forEach(x=>{if(!D[x])D[x]=[]});return D}
const save=()=>{if(D)LSs(dk(),JSON.stringify(D))};
const hs=s=>{let h=5381;s=String(s);for(let i=0;i<s.length;i++)h=((h<<5)+h+s.charCodeAt(i))|0;return (h>>>0).toString(36)};
const tk=(s,c,t)=>s+'-'+c+'-'+t.id;
// per-topic status from the last 10 scored answers: recent answers weigh more, never one wrong answer
function status(k){const d=data();const a=d.att.filter(x=>x.k===k).slice(-10).reverse();const n=a.length;const sess=new Set(a.map(x=>x.d)).size;if(n<6||sess<1)return {st:'NEW',m:null,n};let w=0,s=0;a.forEach((x,i)=>{const wi=Math.pow(.85,i);w+=wi;s+=wi*(x.ok?1:0)});const M=100*s/w;let T=0;const all=d.att.filter(x=>x.k===k).slice(-10);if(all.length>=8){const r=all.slice(-5).filter(x=>x.ok).length/5*100,p=all.slice(0,all.length-5);T=r-(p.filter(x=>x.ok).length/p.length*100)}const Me=Math.max(0,Math.min(100,M+.3*Math.max(-15,Math.min(15,T))));let st;if(Me>=85&&T>-10)st='MASTERED';else if(Me>=65)st='PRACTICE';else if(Me>=40)st='WEAK';else st=(n>=8&&sess>=2)?'CRITICAL':'WEAK';return {st,m:Math.round(Me),n}}
const API={
 profiles,active,
 addProfile(name){const p=profiles();const id=nid();p.push({id,name:String(name||'').slice(0,20)});LSs('akn.profiles',JSON.stringify(p));LSs('akn.activeProfile',id);D=null;return id},
 switchTo(id){LSs('akn.activeProfile',id);D=null},
 rename(id,name){const p=profiles();const x=p.find(y=>y.id===id);if(x){x.name=String(name||'').slice(0,20);LSs('akn.profiles',JSON.stringify(p))}},
 ans(s,c,t,q,ok,picked){const d=data(),k=tk(s,c,t),dd=day();d.att.push({k,q:hs(q.key||q.q.en),ok:ok?1:0,d:dd,ts:Date.now()});if(d.att.length>600)d.att=d.att.slice(-600);const o=d.days[dd]||(d.days[dd]={n:0,ok:0});o.n++;if(ok)o.ok++;
  const qk=hs(q.key||q.q.en);let m=d.mist.find(x=>x.q===qk&&(ok||x.k===k));if(!ok){if(!m){m={q:qk,k,s,c,ti:t.id,qt:q.q,a:q.opts[q.ai],o:q.opts,ai:q.ai,x:q.x||null,n:0,ok2:0,res:0};d.mist.push(m);if(d.mist.length>150)d.mist=d.mist.slice(-150)}m.n++;m.ok2=0;m.res=0;m.ts=Date.now()}else if(m&&!m.res){m.ok2++;if(m.ok2>=2)m.res=1}save()},
 fin(s,c,t,pct,n,ok,ti){const d=data(),k=t?tk(s,c,t):null;if(t){const o=d.t[k]||(d.t[k]={att:0,best:0,h:[]});o.att++;o.best=Math.max(o.best,pct);o.h.push(pct);if(o.h.length>12)o.h=o.h.slice(-12);o.ts=Date.now();o.d=day();d.last={s,c,ti,id:t.id,te:t.te,en:t.en}}else{d.tests.push({s,c,pct,n,ok,d:day()});if(d.tests.length>60)d.tests=d.tests.slice(-60)}save()},
 view(s,c,t){if(!t)return;const d=data();d.last={s,c,ti:-1,id:t.id,te:t.te,en:t.en};save()},
 last(){return data().last},
 isBm(s,c,id){return data().bm.some(x=>x.s===s&&x.c===c&&x.id===id)},
 toggleBm(s,c,t){const d=data();const i=d.bm.findIndex(x=>x.s===s&&x.c===c&&x.id===t.id);if(i>=0)d.bm.splice(i,1);else d.bm.push({s,c,id:t.id,te:t.te,en:t.en});save();return i<0},
 bms(){return data().bm},
 status,
 stats(){const d=data();let n=0,ok=0;Object.values(d.days).forEach(x=>{n+=x.n;ok+=x.ok});const acc=n?Math.round(ok*100/n):null;
  // streak: a day counts at 10+ answers; one rest day per 7 keeps it
  let st=0,rest=0,cur=new Date();const cnt=x=>(d.days[day(x)]||{n:0}).n>=10;if(!cnt(cur))cur.setDate(cur.getDate()-1);let gap=0;for(let i=0;i<400;i++){if(cnt(cur)){st++;gap=0;rest=0}else{gap++;rest++;if(rest>1||st===0)break;}cur.setDate(cur.getDate()-1)}
  const topics={};d.att.forEach(x=>{(topics[x.k]=topics[x.k]||1)});const rows=Object.keys(topics).filter(k=>!/-test$/.test(k)).map(k=>{const p=k.split('-');const sub=p[0],c=+p[1],id=p.slice(2).join('-');return {k,s:sub,c,id,...status(k),ts:(d.t[k]||{}).ts||0,best:(d.t[k]||{}).best||0}});
  const now=Date.now(),DAY=864e5;const rev=rows.filter(r=>d.t[r.k]&&d.t[r.k].best>=70&&r.st!=='WEAK'&&r.st!=='CRITICAL'&&now-(d.t[r.k].ts||0)>2*DAY);
  return {answered:n,acc,streak:st,rows,weak:rows.filter(r=>r.st==='WEAK'||r.st==='CRITICAL'),rev,done:Object.keys(d.t).filter(k=>d.t[k].best>=70).length,tests:d.tests.slice(-8).reverse(),mist:d.mist.filter(m=>!m.res),bm:d.bm}},
 diagDone(id,pct){const d=data();if(!d.dg)d.dg={};if(id===undefined)return d.dg;d.dg[id]=pct;save()},
 practiceMistakes(){return data().mist.filter(m=>!m.res)}
};
window.AKNP=API;LD.reg('prog',1);
})();
