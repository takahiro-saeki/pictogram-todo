const CACHE_STATIC_VERSION = 'static-v1';
const CACHE_DYNAMIC_VERSION = 'dynamic-v1';

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing Service Worker...');
  event.waitUntil(
    caches.open(CACHE_STATIC_VERSION).then(cache => {
      console.log('[Service Worker] Precaching App...');
      cache.addAll(['/', '/app.js', '/icons/favicon.ico']);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[Service Worker] Activating Service Worker...');
  event.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_STATIC_VERSION && key !== CACHE_DYNAMIC_VERSION) {
            console.log('[Service Worker] Removing old cache...');
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('[Service Worker] Fetching something ...');
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response;
      } else {
        return fetch(event.request)
          .then(res => {
            return caches.open(CACHE_DYNAMIC_VERSION).then(cache => {
              cache.put(event.request.url, res.clone());
              return res;
            });
          })
          .catch(() => console.log('error occurred'));
      }
    })
  );
});
