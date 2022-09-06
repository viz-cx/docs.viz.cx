/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "70f174332008136a51f18d66d9d4f3ab"
  },
  {
    "url": "accounts.html",
    "revision": "1cdae526e5bf96f354c68dfae018aaab"
  },
  {
    "url": "assets/css/0.styles.738122f3.css",
    "revision": "e1e5c8925ac61f8a11e23705f8f4e170"
  },
  {
    "url": "assets/img/bandwidth_viz_ru.ff3233ad.png",
    "revision": "ff3233ad88ea9a2070c24586e06c3b22"
  },
  {
    "url": "assets/img/bandwidth_viz.ff3233ad.png",
    "revision": "ff3233ad88ea9a2070c24586e06c3b22"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/viz_architecture_ru.bf11ed1a.png",
    "revision": "bf11ed1a507160838061acf4a3b1e700"
  },
  {
    "url": "assets/img/viz_architecture.72ab2d71.png",
    "revision": "72ab2d715fe29993a05da5412297a435"
  },
  {
    "url": "assets/js/10.c24707df.js",
    "revision": "caa2d82f9e5b82ef16419e01a96c7531"
  },
  {
    "url": "assets/js/11.23bccd07.js",
    "revision": "2b3d4b2cf158e51eaa1027b955673be3"
  },
  {
    "url": "assets/js/12.142dca8d.js",
    "revision": "00bebbd4891fbb1819ceffcfddb773b4"
  },
  {
    "url": "assets/js/13.5dcd2c0b.js",
    "revision": "57884658cdd1cd03a382bb6a095a41a8"
  },
  {
    "url": "assets/js/14.a1f35fc0.js",
    "revision": "7cf612f46ed5acf08f6a041a5fef5b64"
  },
  {
    "url": "assets/js/15.08b53a29.js",
    "revision": "54063ec93a2e289080b2c8cf5c6a0038"
  },
  {
    "url": "assets/js/16.e17d5773.js",
    "revision": "a42368be3ede5b2e5e922535ff928ef8"
  },
  {
    "url": "assets/js/17.b1754228.js",
    "revision": "2f1fd10a092d1ea085940c0711558406"
  },
  {
    "url": "assets/js/18.6cc65b07.js",
    "revision": "a3fc41313b93984963b790df4c5c1143"
  },
  {
    "url": "assets/js/19.84ace823.js",
    "revision": "37c7b2d33ad084b2d2a9b1b528166b37"
  },
  {
    "url": "assets/js/2.5ba55769.js",
    "revision": "f0a46053c01283131c83398ddfaf1749"
  },
  {
    "url": "assets/js/20.200f3bc5.js",
    "revision": "f6c1508689f538a0ea54e0b7faf61c1b"
  },
  {
    "url": "assets/js/21.0dfe603c.js",
    "revision": "9164797f024933ba8d9a8c22a360ceaf"
  },
  {
    "url": "assets/js/22.bd560a9e.js",
    "revision": "f40bc2d5ad5e6e3989f2a66fade733c9"
  },
  {
    "url": "assets/js/23.c2f89be8.js",
    "revision": "ebc3bbd16b743c0867327a22b8678926"
  },
  {
    "url": "assets/js/24.0087319d.js",
    "revision": "4b6f0859a0e517651d4f884a0ae5b941"
  },
  {
    "url": "assets/js/25.b54a8576.js",
    "revision": "23b8a9280a2cfb1598ce766055105b90"
  },
  {
    "url": "assets/js/26.7716133d.js",
    "revision": "e71a8a1614df33b05491d8268c5e31af"
  },
  {
    "url": "assets/js/27.79dd78f1.js",
    "revision": "b558824ae4e70d808670e844428fa524"
  },
  {
    "url": "assets/js/28.900b71f4.js",
    "revision": "603c4f4430d64079da68d36f5d54e7f7"
  },
  {
    "url": "assets/js/29.a7be1b6c.js",
    "revision": "1fa65877f9df451a4b8d57307779c7f6"
  },
  {
    "url": "assets/js/3.eb6b60a6.js",
    "revision": "c58625f16c977845df3f42b366b3ffa8"
  },
  {
    "url": "assets/js/30.9670a848.js",
    "revision": "f46d1cba46754157900add72a00a8932"
  },
  {
    "url": "assets/js/31.700b18a0.js",
    "revision": "0cad2c6807df4a3574a51ea91babc808"
  },
  {
    "url": "assets/js/32.ad18f75e.js",
    "revision": "bf4df6b494b73ce0e19f7d7418d58dd3"
  },
  {
    "url": "assets/js/33.aa7a9639.js",
    "revision": "14b6bf332dab20f89d254633ff4cd67c"
  },
  {
    "url": "assets/js/34.2957158f.js",
    "revision": "60dc7df735185b967aba9c2f85fb9b4c"
  },
  {
    "url": "assets/js/35.de13f76c.js",
    "revision": "96d1d2ef95bef0e823455290089b29e6"
  },
  {
    "url": "assets/js/36.e4334454.js",
    "revision": "d7cbd390a0b91106d46a422a6ff0d184"
  },
  {
    "url": "assets/js/37.cdb373b7.js",
    "revision": "622cd66953ba39900e9abaeb283b7ff2"
  },
  {
    "url": "assets/js/38.23498cd5.js",
    "revision": "008590e25f0836a6f468810fbae3d923"
  },
  {
    "url": "assets/js/4.f66fdf58.js",
    "revision": "de54907b13c382a11f914d1274437f77"
  },
  {
    "url": "assets/js/5.934014ca.js",
    "revision": "8ab14b72d07617147feb03226c694469"
  },
  {
    "url": "assets/js/6.8d699738.js",
    "revision": "9ae8ac340de9a6063f7127ca940c4a13"
  },
  {
    "url": "assets/js/7.0e3b8f7f.js",
    "revision": "87feefd5bfb43a186cd5caa3d8f6ea27"
  },
  {
    "url": "assets/js/8.b7f3d1be.js",
    "revision": "6326e2621f52eab4777a7ebddd7dc1b4"
  },
  {
    "url": "assets/js/9.249ed28f.js",
    "revision": "a8eaeda63f5cb42c27dd4161cf165f5f"
  },
  {
    "url": "assets/js/app.b39bded2.js",
    "revision": "36a38666ba30004a4f29675d2b64848e"
  },
  {
    "url": "bandwidth.html",
    "revision": "151541cd6acb81033c066df82f24d41b"
  },
  {
    "url": "check.html",
    "revision": "de768bd7d38ddaf006d27db4a3c69242"
  },
  {
    "url": "economy.html",
    "revision": "f021cf1cd8d135d2437ddd18832648f5"
  },
  {
    "url": "escrow.html",
    "revision": "f3a19fd939c45ba0900d262d736efcad"
  },
  {
    "url": "glossary.html",
    "revision": "3de8ab8d2e3a0606524a917c499efbc7"
  },
  {
    "url": "icons/android-launchericon-144-144.png",
    "revision": "3d71d797d63fce8d2fc4593f20474578"
  },
  {
    "url": "icons/android-launchericon-192-192.png",
    "revision": "a187c3cb7d2850d8d2ad309383069a12"
  },
  {
    "url": "icons/android-launchericon-512-512.png",
    "revision": "2f237735be36c0a65016355344898b93"
  },
  {
    "url": "icons/ios-appicon-152-152.png",
    "revision": "7ab21321f466b31ce7dd4cae70de547e"
  },
  {
    "url": "index.html",
    "revision": "2302d387bccdbb1ee1cccece61996d52"
  },
  {
    "url": "links.html",
    "revision": "dddd7001eec762fbb617e075bb59db28"
  },
  {
    "url": "logo.png",
    "revision": "6c652b9174dcf144ea60fe510cb6872f"
  },
  {
    "url": "ru/accounts.html",
    "revision": "cc50f2860d450c779dc1668a9a99f676"
  },
  {
    "url": "ru/bandwidth.html",
    "revision": "5d26868dc67291c89efb4739a7beeff7"
  },
  {
    "url": "ru/check.html",
    "revision": "9b515d9c7014a3a41bb11ba7a2ca7a83"
  },
  {
    "url": "ru/cookbook/basic-concept.html",
    "revision": "b9f5f6aaf093b3ce70e0a789eb78bb02"
  },
  {
    "url": "ru/cookbook/code-examples.html",
    "revision": "fe05ac9a8f2df3260162c0aeb2d5db66"
  },
  {
    "url": "ru/cookbook/economy.html",
    "revision": "3909c7751890d4fd4c04f853a9df836c"
  },
  {
    "url": "ru/cookbook/libraries.html",
    "revision": "fce9dd4da40b20f30e8e2fc10e119152"
  },
  {
    "url": "ru/cookbook/node-types.html",
    "revision": "2c0491bff42f194f8531234851f1c056"
  },
  {
    "url": "ru/cookbook/object-structures.html",
    "revision": "6fbb9ab12e2b332c9f6aee6e45de6d62"
  },
  {
    "url": "ru/cookbook/operations.html",
    "revision": "216bd97534255a26eb5a2910b0994336"
  },
  {
    "url": "ru/cookbook/plugins-api.html",
    "revision": "b53a24b84c2ccb225aaf2d77c8016695"
  },
  {
    "url": "ru/cookbook/state.html",
    "revision": "d51a5d86094585f6c94c8aa44b1d6d2b"
  },
  {
    "url": "ru/cookbook/transaction-formatting.html",
    "revision": "1326c90113e2b9f3d6a8515325a8c0d7"
  },
  {
    "url": "ru/economy.html",
    "revision": "43193554b389f38ffd6302fd356bb3a6"
  },
  {
    "url": "ru/escrow.html",
    "revision": "25a9e241fbc04a7fe8be7df1451bae95"
  },
  {
    "url": "ru/glossary.html",
    "revision": "304b4becdd1bc7760921cfc7fa6a2e4f"
  },
  {
    "url": "ru/index.html",
    "revision": "31f06d17e50c491c740a17ba1d987ce4"
  },
  {
    "url": "ru/links.html",
    "revision": "b82a7dd45390c7a4fb1914fa6ffaf8d6"
  },
  {
    "url": "ru/subscriptions.html",
    "revision": "2d5e8e40a4d5779b46b1adb3a881952f"
  },
  {
    "url": "ru/witnesses.html",
    "revision": "bd0f37470d92664531995c5c6399a374"
  },
  {
    "url": "subscriptions.html",
    "revision": "e48d8ba3cd85f14eb6cee72e06e1cba7"
  },
  {
    "url": "witnesses.html",
    "revision": "a75351bdf2d318ac453248f4fe0daa05"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
