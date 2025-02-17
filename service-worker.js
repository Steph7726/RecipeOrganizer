// service-worker.js
const CACHE_NAME = "recipe-organizer-cache-v3";
const FILES_TO_CACHE = [
  // HTML files
  "/html/index.html",
  "/html/tasks.html",

  // CSS files
  "/css/style.css",

  // JavaScript files
  "/app.js",
  "/js/signIn.js",
  "/js/tasks.js",
  "/js/firebase.js",

  // Manifest
  "/manifest.json",
];

// ✅ INSTALL: Cache all necessary files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching offline content");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activate immediately after install
});

// ✅ ACTIVATE: Clear old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) =>
      Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[Service Worker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim(); // Become active immediately
});

// ✅ FETCH: Serve from cache or fetch from network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() => caches.match("/html/index.html"))
      );
    })
  );
});
