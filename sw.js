const ROOT=new URL('./',self.location.href).href;
const PREFIX='balloon-pop-'+new URL(ROOT).pathname+'-';
const CACHE=PREFIX+'v2.0.2-back';
const SHELL=[ROOT,new URL('index.html',ROOT).href,new URL('manifest.webmanifest',ROOT).href,new URL('icon.svg',ROOT).href];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Keep each response under its own URL. Only HTML navigations update the app shell.
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(ROOT))return;
 if(u.searchParams.has('_v')){e.respondWith(fetch(r,{cache:'no-store'}));return}
 e.respondWith((async()=>{const cache=await caches.open(CACHE);try{const res=await fetch(r,{cache:'no-store'});if(res.ok){await cache.put(r,res.clone());if(r.mode==='navigate'){await cache.put(ROOT,res.clone());await cache.put(new URL('index.html',ROOT).href,res.clone())}}return res}catch(err){const hit=await cache.match(r,{ignoreSearch:true});if(hit)return hit;if(r.mode==='navigate')return (await cache.match(ROOT))||(await cache.match(new URL('index.html',ROOT).href));return Response.error()}})())
});
