const staticDevPLC = "dev-PLC-site-v1";
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/index.js",
  "/images/lawnCare.jpg",
  "/js/home.json",
  "/js/about.json",
  "/js/services.json",
  "/js/testimonials.json"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevPLCtates).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});
