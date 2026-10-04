const ROOT=new URL('./',self.location.href).href;
const PREFIX='balloon-pop-'+new URL(ROOT).pathname+'-';
const CACHE=PREFIX+'v1.0.0';
const SHELL=[ROOT,new URL('index.html',ROOT).href,new URL('manifest.webmanifest',ROOT).href,new URL('icon.svg',ROOT).href];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
// Network-first: online users always get the newest version; offline falls back to cache.
self.addEventListener('fetch',e=>{const r=e.request;const u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(ROOT))return;
 if(u.searchParams.has('_v')){e.respondWith(fetch(r,{cache:'no-store'}));return}
 e.respondWith(fetch(r,{cache:'no-store'}).then(res=>{if(res&&res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(u.origin+u.pathname.replace(/index\.html$/,''),cp.clone()).then(()=>c.put(r,cp)))}return res}).catch(()=>caches.match(r,{ignoreSearch:true}).then(m=>m||caches.match(new URL('index.html',ROOT).href))))});
