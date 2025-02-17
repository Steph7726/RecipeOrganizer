const CACHE_NAME = "recipe-organizer-cache-v1";
const FILES_TO_CACHE = [
  //cache
  "/RecipeOrganizer",
  "/RecipeOrganizer/index.html",
  "/RecipeOrganizer/style.css",
  "/RecipeOrganizer/app.js",
  "/RecipeOrganizer/manifest.json",
  //"/First-PWA/icons/icon-128.png",
  //"/First-PWA/icons/icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(FILES_TO_CACHE))
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
