self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('store-cache').then(cache => {
      return cache.addAll([
        '/login.html',
        '/inspector.html',
        '/logo.png',
        '/p1.jpg',
        '/manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
