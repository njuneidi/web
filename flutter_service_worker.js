'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "920a11de313bfb8d93d81f4a3a5b71b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "384adab191a0dba0bfe4f3496aa80de5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "520daf1f9c1222359eb8a8bbcb44aac3",
".git/logs/refs/heads/master": "520daf1f9c1222359eb8a8bbcb44aac3",
".git/objects/89/4e76c4cef8f2d133df1b6320074aa616be01f4": "7c0370d372b3bca283dcf209a2a33c1c",
".git/objects/dd/38c7aa5efd11cb6c9b0930b279ea8994986957": "214eba57d2cb3de287d160b22e267f3a",
".git/objects/e1/c11be098cef8cfeb905a4f4214e7a7806d05cb": "5de3c3e809067bcfc4258b7f29d82ce8",
".git/refs/heads/master": "6f1bbc38f64ef51d39cbba9db88e7e22",
"assets/AssetManifest.json": "c868407790fe4c1d144de7a245e5b9a4",
"assets/assets/images/2.0x/flutter_logo.png": "4efb9624185aff46ca4bf5ab96496736",
"assets/assets/images/3.0x/flutter_logo.png": "b8ead818b15b6518ac627b53376b42f2",
"assets/assets/images/aboutUs.png": "59529e34fd9a736cc01776857c7e7bbe",
"assets/assets/images/favorite.png": "d35134fe7c20dd25b6b40a6e0b253325",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/home.png": "e3f4194350c6081ae70947439d45551f",
"assets/assets/images/home3.png": "20df676129740f21f4130ab669550f2d",
"assets/assets/images/icons8-about-us-58.png": "200b301b6b38f9e3ba4c405a289aee26",
"assets/assets/images/icons8-settings-48.png": "dd65d3968087f296b56970f835baba41",
"assets/assets/images/logo.png": "fbf5c3d3821e691ba5011f7c868dce81",
"assets/assets/images/p1.jpg": "9d8cce5b35ee3dcdbfe3360cee107901",
"assets/assets/images/pages/p1.jpg": "9d8cce5b35ee3dcdbfe3360cee107901",
"assets/assets/images/pages/p10.jpg": "6ddecffd6acc8f7162cc25821a68418a",
"assets/assets/images/pages/p11.jpg": "f299f11ebb283002b6daa9fb43890f62",
"assets/assets/images/pages/p12.jpg": "c68dd21a2eceaff2db713bddd79bd85f",
"assets/assets/images/pages/p13.jpg": "8a984af77a1eb87e63dc926520e9731e",
"assets/assets/images/pages/p14.jpg": "2549c0422e8112f600895cf0162d4d23",
"assets/assets/images/pages/p15.jpg": "c8c84274d8fba69c5b3ae5a2e6a8e100",
"assets/assets/images/pages/p16.jpg": "c2b34ba7a2f33bff36a4039d46228c50",
"assets/assets/images/pages/p17.jpg": "b350bb65f184cde715c3d323d38da786",
"assets/assets/images/pages/p18.jpg": "5521e43a0246179d497b9b7d57f265bc",
"assets/assets/images/pages/p19.jpg": "bb6fe813aa9a2ee7f2bfe2e1ef00961c",
"assets/assets/images/pages/p2.jpg": "9752df2981064cbe822f5b21b6af2903",
"assets/assets/images/pages/p20.jpg": "6bba21ab8aca0a8b93fbd2411318e858",
"assets/assets/images/pages/p21.jpg": "7610dac1124dcaf6b3ae3c486634c926",
"assets/assets/images/pages/p22.jpg": "5e74efa6b627c5434e9bce28ce302589",
"assets/assets/images/pages/p23.jpg": "41bf8c6ac902f3035dd7f774b9eea5be",
"assets/assets/images/pages/p24.jpg": "537f40a734909d5a840f35a2494e2e7d",
"assets/assets/images/pages/p25.jpg": "9218b68a761cfac0657dc78ae429fe8b",
"assets/assets/images/pages/p26.jpg": "dcc8fc999f4e158d9fe81416d8a60e6e",
"assets/assets/images/pages/p27.jpg": "2b23596e2e268fe098b9ee74e03f5aec",
"assets/assets/images/pages/p28.jpg": "b1c6fee564d992b17505bb4e38cd79f4",
"assets/assets/images/pages/p29.jpg": "e28d737714866d7fe9f4a06b7b002884",
"assets/assets/images/pages/p3.jpg": "cd8c87baf8a42b00ef2f136f72ef16de",
"assets/assets/images/pages/p30.jpg": "631bc0f1c835ec4091bc517ee86d7f02",
"assets/assets/images/pages/p31.jpg": "269158bc27ca045738f47e723adafbdb",
"assets/assets/images/pages/p32.jpg": "69978b31b427034070a9ed802c986632",
"assets/assets/images/pages/p33.jpg": "c245e75cec051852128679951bf7859c",
"assets/assets/images/pages/p4.jpg": "b8c4e82454d96d09d2661bce71b44416",
"assets/assets/images/pages/p5.jpg": "5df73b61acdcc6886475c3877092283d",
"assets/assets/images/pages/p6.jpg": "7408314ea65b71d9dcfc640cdb841a1d",
"assets/assets/images/pages/p7.jpg": "0d6ccbd565fb40da78c3156831679eef",
"assets/assets/images/pages/p8.jpg": "687bd1f09026964662ea4c5d085b2d30",
"assets/assets/images/pages/p9.jpg": "5f41d5317d6da759e94376a6d3ec340c",
"assets/assets/images/settings.png": "636f40a4b62a9aae86cecaf1e2aafa8a",
"assets/assets/images/splash.png": "6335cd74e90da375d7362c73da988af9",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "17eb9f93bbb87027ab14db37267b1af4",
"assets/shaders/ink_sparkle.frag": "e8313b10f32f480b6de77d905249f192",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "bc67c2d1a36747dd03f36a2372f29d37",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "2a38a964d31c050d6e18d622610bb07b",
"icons/Icon-512.png": "abb0db963ec019e2501e283696150409",
"icons/Icon-maskable-192.png": "2a38a964d31c050d6e18d622610bb07b",
"icons/Icon-maskable-512.png": "abb0db963ec019e2501e283696150409",
"index.html": "da01189aaacf0f33fbaebc480ae7d684",
"/": "da01189aaacf0f33fbaebc480ae7d684",
"main.dart.js": "e65ec322fb3e8ecb27e0db3509867890",
"manifest.json": "7f83b4fc42a253eedc0405ffe6745c9f",
"README.md": "e660fecadca5b67b99f83e21535e9bb8",
"splash/img/light-background.png": "6335cd74e90da375d7362c73da988af9",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "78accff22beb7ef068999d99adff10b6",
"version.json": "626d07dab661c4d991002b1eaa6bffab"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
