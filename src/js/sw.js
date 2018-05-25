var CACHE_NAME = 'cache-v1';
var urlsToCache = [
  '/',
  '/index.html',
  '/bundle.js',
  '/material.min.css',
  '/material.min.js',
  '/favicon.ico'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      console.log('Opened cache');
      return cache.addAll(urlsToCache);
    })
  );
});
