const ROOT=new URL('./',self.location.href).href;
const PREFIX='balloon-pop-'+new URL(ROOT).pathname+'-';
const CACHE=PREFIX+'v3.7.0-learn';
const SHELL=[ROOT,new URL('index.html',ROOT).href,new URL('manifest.webmanifest',ROOT).href,new URL('icon.svg',ROOT).href,...['learn.js','maths.js','social.js','english.js','telugu.js','science.js','current.js'].map(f=>new URL('learn/'+f,ROOT).href)];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>Promise.all(SHELL.map(async u=>{const fresh=new URL(u);fresh.searchParams.set('_v','3.7.0-learn');const r=await fetch(fresh.href,{cache:'no-store'});if(!r.ok)throw new Error('App shell unavailable');await c.put(u,r)}))).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
// Keep each response under its own URL. Only HTML navigations update the app shell.
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==self.location.origin||!u.href.startsWith(ROOT))return;
 if(u.searchParams.has('_v')){e.respondWith(fetch(r,{cache:'no-store'}));return}
 e.respondWith((async()=>{const cache=await caches.open(CACHE);try{const fresh=new URL(r.url);if(r.mode==='navigate')fresh.searchParams.set('_v','3.7.0-learn');const res=await fetch(r.mode==='navigate'?fresh.href:r,{cache:'no-store'});if(res.ok){await cache.put(r,res.clone());if(r.mode==='navigate'){await cache.put(ROOT,res.clone());await cache.put(new URL('index.html',ROOT).href,res.clone())}}return res}catch(err){const hit=await cache.match(r,{ignoreSearch:true});if(hit)return hit;if(r.mode==='navigate')return (await cache.match(ROOT))||(await cache.match(new URL('index.html',ROOT).href));return Response.error()}})())
});
