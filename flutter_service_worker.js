'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "13cba1329934b7d83ec0d88bb9c7f550",
"/": "13cba1329934b7d83ec0d88bb9c7f550",
"main.dart.js": "48721b6b52b19f26e18759e50ca17e7a",
"favicon.png": "f41797550af9b952fedab4f853ddd3ff",
"icons/Icon-192.png": "8daeb0dc054e39186aea293e10d42d6c",
"icons/Icon-512.png": "ac6f521dce1505235c9eccb90876a325",
"manifest.json": "f33a50c1a8c38a0618dda176f0927dc5",
"assets/LICENSE": "4077b509cf33712b22a96895e0a93136",
"assets/AssetManifest.json": "ecca4ecec941d431cd1ffa9ba2884a1f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/img/boton_01": "3854b251fe0f8651a747f266d0dd6bcc",
"assets/assets/img/pngwave.png": "d4c1bbded285ba7de086f79c1e38411d",
"assets/assets/audio/ussr_anthem.mp3": "0b88e0d70fcc66274a7def7e18a80f99"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
