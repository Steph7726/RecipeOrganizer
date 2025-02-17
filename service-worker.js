const CACHE_NAME = "recipe-organizer-cache-v2";
const FILES_TO_CACHE = [
  // HTML files
  "/RecipeOrganizer/",
  "/RecipeOrganizer/index.html",
  "/RecipeOrganizer/tasks.html",

  // CSS files
  "/RecipeOrganizer/css/style.css",

  // JavaScript files
  "/RecipeOrganizer/app.js",
  "/RecipeOrganizer/js/signIn.js",
  "/RecipeOrganizer/js/tasks.js",
  "/RecipeOrganizer/js/firebase.js",

  // Manifest and Icons
  "/RecipeOrganizer/manifest.json",
];

// 🟢 INSTALL: Cache all necessary files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching offline content");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting(); // Activate immediately after install
});

// 🟠 ACTIVATE: Clear old caches
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

// 🟡 FETCH: Serve from cache or fetch from network
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return (
        response ||
        fetch(event.request).catch(() =>
          caches.match("/RecipeOrganizer/index.html")
        )
      );
    })
  );
});
