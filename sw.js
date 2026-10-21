/* 对议牌 4.5 · 离线缓存 | Councils 4.5 offline cache */
const VERSION = "councils-4.5.0";
const CORE = [
  "./",
  "./index.html",
  "./index.en.html",
  "./manifest.webmanifest",
  "./manifest.en.webmanifest",
  "./icon.svg",
  "./characters/deepseek.png",
  "./characters/whale-logo.png",
  "./characters/cards/j.png",
  "./characters/cards/q.png",
  "./characters/cards/k.png",
  "./characters/cards/joker-big.png",
  "./characters/cards/joker-small.png",
  "./characters/cards/pip-whale.webp",
];
const IMAGE_CACHE = "councils-images-v1";
const MAX_IMAGES = 90;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(VERSION).then((cache) =>
      Promise.all(
        CORE.map((url) =>
          cache.add(new Request(url, { cache: "reload" })).catch(() => null),
        ),
      ),
    ).then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== VERSION && k !== IMAGE_CACHE)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

async function trim(cache) {
  const keys = await cache.keys();
  if (keys.length <= MAX_IMAGES) return;
  await Promise.all(keys.slice(0, keys.length - MAX_IMAGES).map((k) => cache.delete(k)));
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (req.headers.has("range")) return;

  if (req.mode === "navigate") {
    const page = url.pathname.endsWith("/index.en.html") ? "./index.en.html" : "./index.html";
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(VERSION).then((c) => c.put(page, copy)).catch(() => {});
          return res;
        })
        .catch(() =>
          caches.match(req).then((r) => r || caches.match(page) || caches.match("./index.html")),
        ),
    );
    return;
  }

  if (/\.(png|jpe?g|webp|gif|svg|css|js|woff2?)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(
        (hit) =>
          hit ||
          fetch(req).then((res) => {
            if (res && res.ok) {
              const copy = res.clone();
              caches.open(IMAGE_CACHE).then((c) =>
                c.put(req, copy).then(() => trim(c)).catch(() => {}),
              );
            }
            return res;
          }),
      ),
    );
  }
});
