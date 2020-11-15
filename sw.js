var CACHE_NAME = "Covid19-cache";
var urlsToCache = ["./", "/index.html", "/information.html", "/about.html", "/bundle.js", "/manifest.json"];

self.addEventListener("install", function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
            console.log("Opened cache");
            return cache.addAll(urlsToCache);
        }),
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function (response) {
                // Cache hit - return response
                if (response) {
                    return response;
                }

                return fetch(event.request).then(function (response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== "basic") {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, responseToCache);
                    });

                    return response;
                });
            })
            .catch(function () {
                // If both fail, show a generic fallback:
                return caches.match("./index.html");
                // However, in reality you'd have many different
                // fallbacks, depending on URL & headers.
                // Eg, a fallback silhouette image for avatars.
            }),
    );
});

self.addEventListener("activate", function (event) {
    var cacheWhitelist = CACHE_NAME;

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cache) {
                    if (cacheWhitelist.indexOf(cache) === -1) {
                        return caches.delete(cache);
                    }
                }),
            );
        }),
    );
});
