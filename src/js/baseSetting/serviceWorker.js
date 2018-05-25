document.addEventListener('install', e => {
  console.log('[ServiceWorker] Install');
});

document.addEventListener('activate', e => {
  console.log('[ServiceWorker] Activate');
});
