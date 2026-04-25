// ═══════════════════════════════════════════════════════════════════════════
// SERVICE WORKER — caches everything for offline use
// Version: bump this number whenever you update your files, so the
// cache refreshes on next open. e.g. "portrait-builder-v2"
// ═══════════════════════════════════════════════════════════════════════════
const CACHE_NAME = "portrait-builder-v4";

// ★ List every file the app needs to work offline.
// Add each of your PNG image paths here exactly as they appear in app.js.
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./inter-mush.woff2",

  // ★ Hair PNGs — add/remove to match your HAIR_OPTIONS in app.js
  "./images/hair-1.png",
  "./images/hair-2.png",
  "./images/hair-3.png",
  "./images/hair-4.png",
  "./images/hair-5.png",
  "./images/hair-6.png",
  "./images/hair-7.png",
  "./images/hair-8.png",

  // ★ Clothes PNGs
  "./images/clothes-1.png",
  "./images/clothes-2.png",
  "./images/clothes-3.png",
  "./images/clothes-4.png",
  "./images/clothes-5.png",
  "./images/clothes-6.png",

  // ★ Accessory PNGs
  "./images/acc-party-hat.png",
  "./images/acc-crown.png",
  "./images/acc-bow.png",
  "./images/acc-glasses.png",
  "./images/acc-bunny.png",
];

// Install: cache all files
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache files individually so one missing file doesn't break everything
      return Promise.allSettled(
        FILES_TO_CACHE.map(file =>
          cache.add(file).catch(() => {
            console.warn("Could not cache:", file);
          })
        )
      );
    }).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache, fall back to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request).catch(() => {
        // If totally offline and not cached, return a transparent PNG for images
        if (event.request.destination === "image") {
          return new Response(
            '<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"></svg>',
            { headers: { "Content-Type": "image/svg+xml" } }
          );
        }
      });
    })
  );
});
