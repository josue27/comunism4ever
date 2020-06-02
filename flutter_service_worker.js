'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "26a7261125aeead51fd65aa011a282e2",
"/": "26a7261125aeead51fd65aa011a282e2",
"main.dart.js": "a065d1d15e9e17a7df82cad0f370abb3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "f33a50c1a8c38a0618dda176f0927dc5",
"assets/LICENSE": "645a727d627fab34d2cf95d286fc4ffa",
"assets/AssetManifest.json": "ecca4ecec941d431cd1ffa9ba2884a1f",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/img/boton_01": "e1b36703a2dee1e9add038fb9afc6a29",
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
