'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "92891fdfdd8c3f9d1d925d55483c5224",
".git/config": "3fa4a49b3a44e7c021fb54663fe88fdd",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a8517f78826f18946f68bbc8aa996bc1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/index": "afc3745b2e58b0dab77b8708bb002de3",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "41a97f83cbc3e9ab7ae55b1e7f70ebb8",
".git/logs/refs/heads/main": "18517596252e685da6e0678c1967007e",
".git/logs/refs/remotes/origin/main": "12ab178af708410d84b63d2e4dc56a5e",
".git/objects/01/2a82c69552c099576269e2cb50ea54e082ad11": "cf4d821d77533196f8316c722cce794f",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/03/f1a87211f1dfdc6a4de4422b0488d6a4de59ba": "3f4f15e45104a42cedaeef6601092b34",
".git/objects/06/9ce531ebe286cc749d86efb058f846dfbac393": "174e8498adacde60d11e1ac1bf71cc45",
".git/objects/09/550e1d5ed4837307f51a2e7790b50dae15fb10": "c1fd603ef06e356d7ddf6b4a8b3b068f",
".git/objects/09/678f05cfc097305946bf0024de3a6f30ebc363": "f7e0c26f197d1b2b261bee8cda63e12d",
".git/objects/0a/a8c71e34a5c052d041d528046a52a55e114964": "806e3e1287b25c730a10804bb03f2239",
".git/objects/12/c03095a55b973ab6947153ef8a98b1ba5aaf32": "e9da2cfc89b1c561a4ac579ed0d86f3e",
".git/objects/16/0fdb11ae97a031e4463c6e2737a4aa512c26f9": "0f856c92e6fa7f20a12cad03a656d419",
".git/objects/16/ce9861fc4ac5ccdebb2a6fdd726b637252632f": "c685bf5fd8060d0aa24f4bd0104c6d8a",
".git/objects/1d/341fa7322e8eddebef9569e1bfdacad660d361": "604c5efd6cdef4d1e7172536b6e36a3b",
".git/objects/24/3572ea3ab0ed44bf3cbc093c5806f3f2f84f5a": "994814beaa117c93d1f73ed3ad077632",
".git/objects/2a/9fb5c3db0e36a8be3a6c1a3b3ce26366c8e0f9": "69a5f78e869eebef6abd8e273e4071b9",
".git/objects/2c/cc3f5bed35cba85bf342ee7ea0d17527fe9e30": "6b8eadb9ea98bd132a5fde5daf32a366",
".git/objects/2d/6281d5ec790750fea34d3ea5b116d655b31806": "2548ffbe4005539bf1b9bdd4b2d42e3e",
".git/objects/2d/b2db9f1392372a0516aa3af388e3ae84a8162c": "37892e75063c3a76c9a026ed6946cea7",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/7fc652572c5351824749f1470cfbbb5d36a5c0": "d8378b63269287805a33ef46ddb392f8",
".git/objects/32/ffc2cc1d3fe015969a1041c26edbd59affcc8f": "109ac03f24cf57fc77af73ae9ceba314",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/38/09415a27af8d5dc84e3200d395e044522b5631": "d6e56e9f768716ba9852bd4abee801ec",
".git/objects/3c/e7701d550fad1b6f6f73e0211f230791c17f06": "52e327caabb01437cd3cce4ff14c54fe",
".git/objects/43/247d287e9118e396100ecec31c3d8fd80f31de": "ec512d74b27884b8880c070d452ae984",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/224a719de402e1b812fbae26dadcd0f42bff8a": "c84abfcabe8e183a8366c7e714d783da",
".git/objects/4c/6e6f5ab2fedbd18f2cd8cfdc08e42341d8b7a5": "a35afd0026b21baac9bad76fa1900f18",
".git/objects/52/40b53c26b47d0e1e410b981e60cbf83e514d46": "a1706fc2fab5adf5f6b62762b8184373",
".git/objects/54/0b8d6ef8c479a669b99d1f0732afda8f6f9464": "2d0b1bb509c8abc9851ab3e16586ced9",
".git/objects/5b/79ab84758e838c94f5e1499266d67348048deb": "f1ea9952701c82a3c69cbd686859469f",
".git/objects/5d/03346c61aac7ab38b30d75eea4df83375d0066": "1688c85d0fdd7130593332627517ed6b",
".git/objects/5d/db3b757f4feb9b27041668f00994fd966ec755": "9f8359b41e92a2ec36ebc24521e77616",
".git/objects/5e/61423b4bbacd968bba728b89fa2298ff0654b7": "e294de3be7d4ed1d160384314a81efa6",
".git/objects/61/20d419f5bb46f261850254973e6df5f2b863c7": "ec18401d7fcc24d8ff621ed43a60979b",
".git/objects/67/374a8dbb4d389a32982ef79243f244f505e2bc": "95aa51d4b1f5ee3f0a8f7e6c633e5f07",
".git/objects/6c/6b70c1c78ec55ccb3d874026242509afe5f1ab": "a33f83651f79da2a97e33e03e833425c",
".git/objects/71/5e163d6116ccb25632012a5458c10fcc89c6cc": "91d62f48d6d75f9b0c12c5e211abbe29",
".git/objects/71/9965a93c9d8ec9d07863426ceb2b6891f0d02a": "29c132c1454e678695fdd35080fda1ba",
".git/objects/74/c2aa505d2d10903e7e74ef20df2a4e62e4230a": "fbf4f5ca719722ce9e5f8d2c4be1b2ac",
".git/objects/74/f75a4bcc069bef63ced2027fb8e7b408c9181a": "b1c2b475ec8c914c31f66ac65633760b",
".git/objects/78/fd8bc2c4f28f42f6a58b641b7a0744a1884575": "9aaa95113e16b08d9001d5b8f569d1d2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/dd394dd1174d32f978116293ae160e461f1e7d": "d23cc3d3f4864c9a3a9b6acec7c21eb5",
".git/objects/7c/4c0b935f0b8267bd588fc566a694db37f56e1d": "e015b528f076f8952f57e570ed959e14",
".git/objects/7e/2d64d3ee4257e5aaa29a11fbcf4f93cd6fdf8b": "25fe981cd8ee775534e313f5b610d5e9",
".git/objects/81/8e378dfe2a0e3896a470a16b6172f13272324f": "6db830d2a15056a6c26f1b28c120db03",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/dae4ff870a6d7d4bb0ccf5fc5d1f7e56d0614e": "f185acf8a51e643c402b81e1b7cf5aae",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/ce9ba441437fe438ab36769454d900db355d8b": "81638ceb5d134a9482e36f35168a7993",
".git/objects/90/0d68b32079c5e1da64449ec1e819dc29e9b5ce": "8402676c7021dd9761a46050c832d387",
".git/objects/90/e654477d70b483330813a57e39d54b64c8b15e": "982e00e4e3ef32acf116d5257526d013",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/94/21253b24970eaa82204febd8cbb6d14471a102": "36846613505ebfc1d156dab95c06fcbb",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/45f9d4acca369f70b8ead530fd059b09a2f3d5": "cef152931f2e6ce8ae51d66d7808c86e",
".git/objects/a6/33f0ea6e900b7fb0d33ad4aecf01cf7888785e": "19bf77358ea68be184443a1ca5f541b8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/f2a8b60b6cb735c819b24674246293e57fad58": "202fbbd176ff86edd732e72e1f66946a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/ae/0365e96efcfb1850ff02791b530b3e5e03cff3": "b355d6826f731345762f31250d2ab6cd",
".git/objects/ae/91cb90bbd43f511fc5bc07e3012d442c90c761": "0c30ec0b816b52e46769b0cd43dd5168",
".git/objects/af/8281e9733dbdce71166a49f5bb976f710476ae": "980b13934c40bc2331c43e4941a2424e",
".git/objects/b2/8fbb0617cae851d1c9b9aeaa54c4a235a8973c": "c6ab897dd4966f2ef903dc69c7d5e459",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/265a2a512e7d563d69f35b71a7177cb4ab0fd3": "c982799e48afaf96d587708d47ddd66d",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/e64372b5a3ed28003b22c51f58b6637b2d9fbc": "1e97ddc4eb21a9d78726a9a7cb3d6d7a",
".git/objects/c3/8a962ac375f925c9a64035676eef7a0ca9962f": "fd6bf219f18600c4455c1979757dff3a",
".git/objects/ca/f38f09045c59d077c67bb3b48e726f30fde113": "1b2fa5360ea0995212f4b356fd021739",
".git/objects/d3/7c7960d56f62ee2eee1a1da9d52c5b6368bf1f": "e481131d7896f8db1ec1550d44f18b49",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/a0f4af70a3834233e4d06155479b16d0f09cff": "94ea3f8134ed81beb039c51dd03e99c0",
".git/objects/d9/1add7455ac18559d307371afdfc924550ea596": "1957faa9405ace4cac7e156e2ca22864",
".git/objects/db/24289e37980dd19774e2665f2f51c1500651c3": "3dcb8ce4eb5c8699fe38d7aea118d213",
".git/objects/db/c0a8c1ba4ba4a05564994ebe987c9485ff4d2a": "61c9a19267270dfde2d426546e7ad8d4",
".git/objects/dd/300834d339924d8480cbbd8fc0a0c5a6a3d28d": "128687bdf848ecaaa8ec1e8edc9c6f93",
".git/objects/dd/9f55f233f8a3225e3aef6eedaf633ead613b27": "d98a2fbe0363f45d0c7dbd5c8b5e12f5",
".git/objects/dd/a4908b561fbb9f0a9b64857a82167241a309c5": "c48ee055448509395f9940e35dc35889",
".git/objects/e0/eb1a98bf873ee680844dd197fa806774387e00": "36e9e769e2aae5200a2bff0c5ded3c88",
".git/objects/e1/b82c9932bb327db7f2ddd96806423e56a6de54": "91874d10a7face1ed9b7070687cbf831",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/b23bd8b2cfbb6ee9df44f99b023e5e11194e3b": "24ba8e30edfcf4b0859c3db69a53142d",
".git/objects/eb/7aa1f84197dad11f942129300bd2ca16f1801c": "ac67c71773f9fcd163a4900ee09eee2d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c84f007acbade55d3d66abbe0515b2a66fcd8d": "3af3baebf7b7d8400ac7ee13399efed6",
".git/objects/ef/372afc1939abac4e32483645591c19ab25aecf": "a6b323e1d30f28e67c1d983f2854e2ba",
".git/objects/f0/728ec648b3e19dea695562ad234cdb9b84ef80": "7b2892645d913dc36506099aa688dfbc",
".git/objects/f2/5ea78b3a1e8ae805dc8c3fc95ad2d64e839eef": "9f79a41beff0b91f2bc7fa2effbf8ca7",
".git/objects/f2/750f218baa9453aabf4a9db8195085bbe1e3bc": "006d3bd1cdd8ae2f2f3d439342508dac",
".git/objects/f4/86bba08a1f7697b0d40492aaa448f6ef96d565": "f41db97443ead0e472e5f683c4d987eb",
".git/objects/fb/d3c8101c3c44b1fb1c2e2e42a4cd2da303643f": "8bdfd9e8b296f15140c9b5df57171677",
".git/refs/heads/main": "97e3d29c3705333cc594ab13dff137b5",
".git/refs/remotes/origin/main": "97e3d29c3705333cc594ab13dff137b5",
"assets/AssetManifest.json": "59805ab76e257ebdfca8ba0d0aadb1ff",
"assets/assets/fonts/DancingScript-VariableFont_wght.ttf": "796bdaef35c72bb17246391811a5d7c1",
"assets/assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/assets/images/1.jpg": "633d8d2482bc8251f6a61d910d7ccc54",
"assets/assets/images/2.png": "02c5df5b76a9f31ea70248e4e9644a57",
"assets/FontManifest.json": "948f64bbed62985c28a6c55d301d22f3",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "811fb6bac9ab90da0e0fd3e0bf0fd4a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "faf0bcc88ddf73736c58bece52d0574d",
"/": "faf0bcc88ddf73736c58bece52d0574d",
"main.dart.js": "eb3fc54087ac39b834252cc937520a81",
"manifest.json": "6b4a082223e4e2108578c55bf56462a1",
"splash/img/dark-1x.png": "741c884ef43617a4aa81b59e8a44b7d8",
"splash/img/dark-2x.png": "4bd340c58978a35bebb13e77fb312513",
"splash/img/dark-3x.png": "3a9d51a1efa1c5da2e97e45f6a05a8d8",
"splash/img/dark-4x.png": "a4887f4b376051975fe7689c1ad6ed09",
"splash/img/light-1x.png": "741c884ef43617a4aa81b59e8a44b7d8",
"splash/img/light-2x.png": "4bd340c58978a35bebb13e77fb312513",
"splash/img/light-3x.png": "3a9d51a1efa1c5da2e97e45f6a05a8d8",
"splash/img/light-4x.png": "a4887f4b376051975fe7689c1ad6ed09",
"splash/style.css": "5316d0e76bea1fa44468c35077dd3a39",
"version.json": "eb63010742f068252498f37e560c7509"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
