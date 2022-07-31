"use-strict";

// Update this variable when changing any cached files
const CACHE_NAME = "static-cache-v1";

const CACHED_FILES = [
    "/offline.html"
];

self.addEventListener("install", (event) => {
    console.log("[ServiceWorker] Install");

    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log("[ServiceWorker] Pre-caching");
            return cache.addAll(CACHED_FILES);
        })
    );

    self.skipWaiting();
});

self.addEventListener("activate", (event) => {
    console.log("[ServiceWorker] Activate");

    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log("[ServiceWorker] Removing old cache", key);
                    return caches.delete(key);
                }
            }));
        })
    );

    self.clients.claim();
});

self.addEventListener("fetch", (event) => {
    console.log("[ServiceWorker] Fetch", event.request.url);
    // Return if this event is not a page navigation
    if (event.request.mode !== "navigate") return;
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match("offline.html");
                    });
            })
    );
});