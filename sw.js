const CACHE='shelf-v1';
const ASSETS=['./index.html','./manifest.json','./icon.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>{
  if(e.request.url.includes('openfoodfacts')||e.request.url.includes('anthropic')||e.request.url.includes('fonts.google')||e.request.url.includes('unpkg.com')) return;
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});
