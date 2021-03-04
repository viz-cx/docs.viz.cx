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
    "revision": "a8231b6cef3cba6b366e9fc47db2d5de"
  },
  {
    "url": "accounts.html",
    "revision": "82d0f7076c6e2010f0b0c7ecfc2a6bbe"
  },
  {
    "url": "assets/css/0.styles.27bcd639.css",
    "revision": "38a59c89c9343dbedf7a82811165576c"
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
    "url": "assets/js/10.68616d5b.js",
    "revision": "86a7b2afce34a417d88bff165f6785d0"
  },
  {
    "url": "assets/js/11.1bf7582a.js",
    "revision": "c2cb3a60dfe552ad528e3fa7f30adfb0"
  },
  {
    "url": "assets/js/12.25d8a30e.js",
    "revision": "9a735205d3fb44eda166af950028c830"
  },
  {
    "url": "assets/js/13.75863cd9.js",
    "revision": "7500a4cec81a8e8b4877bd1fac33754e"
  },
  {
    "url": "assets/js/14.e7c97f42.js",
    "revision": "fe91ccc5fc83d4fcd33d4657f3eb1dd1"
  },
  {
    "url": "assets/js/15.7dfc3d71.js",
    "revision": "10bbf1fcfaa22cabfafa72050f72136a"
  },
  {
    "url": "assets/js/16.ae2922d8.js",
    "revision": "bf0e432deb232e2fa49223f760c74a80"
  },
  {
    "url": "assets/js/17.58b37a68.js",
    "revision": "7b40046fd51eb7a6b1f94b309b4935a6"
  },
  {
    "url": "assets/js/18.d61c503c.js",
    "revision": "48285f9261d6307159658b6c67a7af65"
  },
  {
    "url": "assets/js/19.d9ef863c.js",
    "revision": "8ee4d1b7f86803d4dcecb92507a14f80"
  },
  {
    "url": "assets/js/2.8bc9e3d1.js",
    "revision": "42a9b8ebc6303022b4ff0e7071244de4"
  },
  {
    "url": "assets/js/20.d0454b92.js",
    "revision": "58b7a1c3bf8b4136ccb7c09ab3ee75ec"
  },
  {
    "url": "assets/js/21.09267b3b.js",
    "revision": "926b75241fa826e333dc2c9c65512da2"
  },
  {
    "url": "assets/js/22.011f1946.js",
    "revision": "c760debc55ab5687e02b77aa5a7ee982"
  },
  {
    "url": "assets/js/23.d72bbffa.js",
    "revision": "f0f86bd447c99b7a98c96ad9d379ced8"
  },
  {
    "url": "assets/js/24.72597d59.js",
    "revision": "63713357f434690ed8bfc695149c3fda"
  },
  {
    "url": "assets/js/25.a7c53f2b.js",
    "revision": "59e4e844a50b438f90d4fffc789d81a9"
  },
  {
    "url": "assets/js/26.66ea2534.js",
    "revision": "1d23636e6b9715c519c62697de635274"
  },
  {
    "url": "assets/js/27.9a2c3efb.js",
    "revision": "ffc7fb9a65e5d60e7bdc05b69834b4ec"
  },
  {
    "url": "assets/js/28.d96b5347.js",
    "revision": "689e31aed71505f2ad82e4422fb45f71"
  },
  {
    "url": "assets/js/29.2622459c.js",
    "revision": "a27543f8068e52ca2ef3320adeaaa191"
  },
  {
    "url": "assets/js/3.2ec72489.js",
    "revision": "2c1a56a2b7a04c14148764b535a0f67a"
  },
  {
    "url": "assets/js/30.8814a997.js",
    "revision": "64eb33691e21a85662274461097ef069"
  },
  {
    "url": "assets/js/31.a44978fd.js",
    "revision": "871d5bedcbf62eca3d296b75dd5777a6"
  },
  {
    "url": "assets/js/32.42ae932b.js",
    "revision": "d77ef0997cec2eaa2b7d0a041d2f0d11"
  },
  {
    "url": "assets/js/33.75affae7.js",
    "revision": "ef151d88ad346e5dbb20a6befffa09be"
  },
  {
    "url": "assets/js/34.bc1c8313.js",
    "revision": "88bfd00381b6f2ce32f373e376c2d515"
  },
  {
    "url": "assets/js/35.e3e1a6ce.js",
    "revision": "2e0ecb84595b0b6c3a2c4ea56830217d"
  },
  {
    "url": "assets/js/36.8f7a4337.js",
    "revision": "5026fa6f181fe382db745967d8095bac"
  },
  {
    "url": "assets/js/37.d0d2de53.js",
    "revision": "41f16721523612fb4223540563ff167b"
  },
  {
    "url": "assets/js/38.08734400.js",
    "revision": "5280c9b65fbea4aeea6fd765154a3720"
  },
  {
    "url": "assets/js/4.f2c2064a.js",
    "revision": "2c933e2cb4854c44f12759211954979f"
  },
  {
    "url": "assets/js/5.52db2006.js",
    "revision": "4eeca17226d389230386fa7a25c68622"
  },
  {
    "url": "assets/js/6.1cd02814.js",
    "revision": "705d4f924069644259a950d62c0fce36"
  },
  {
    "url": "assets/js/7.22659111.js",
    "revision": "c684d2d4a3f10c55e6e3f077a3a63c0a"
  },
  {
    "url": "assets/js/8.7519d0fb.js",
    "revision": "ec113fa903a274a6ae7e43fa7dc92971"
  },
  {
    "url": "assets/js/9.244bca6e.js",
    "revision": "e42ad58003a0c3f9f69acb5f4603baa6"
  },
  {
    "url": "assets/js/app.43f0668e.js",
    "revision": "bbff9ad0d588f85123d41db4a236ed25"
  },
  {
    "url": "bandwidth.html",
    "revision": "932bd94e96be1498d7a6d60e75a0c9ff"
  },
  {
    "url": "check.html",
    "revision": "ec79fe099eef5c1e0951ae578db52767"
  },
  {
    "url": "economy.html",
    "revision": "ae87b4ebfa05cebbfb7e78ce53582180"
  },
  {
    "url": "escrow.html",
    "revision": "07636d3afb927a111992e9a79814599c"
  },
  {
    "url": "glossary.html",
    "revision": "a430f30fc26b24cd9753d65511780aef"
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
    "revision": "44e2fc4899d59a6fd87bfd780eff664f"
  },
  {
    "url": "links.html",
    "revision": "dc341919ca60367d5a524530c9dca747"
  },
  {
    "url": "logo.png",
    "revision": "6c652b9174dcf144ea60fe510cb6872f"
  },
  {
    "url": "ru/accounts.html",
    "revision": "04da3a2473db03716ec469d8ea98146e"
  },
  {
    "url": "ru/bandwidth.html",
    "revision": "20895ddcb90a766bed466526802424cc"
  },
  {
    "url": "ru/check.html",
    "revision": "119c03423e04589dc9d42536196e0775"
  },
  {
    "url": "ru/cookbook/basic-concept.html",
    "revision": "11ba01b8c533313f5bcba76fe235d37b"
  },
  {
    "url": "ru/cookbook/code-examples.html",
    "revision": "07acb74995a6525b7e249711cd8bba60"
  },
  {
    "url": "ru/cookbook/economy.html",
    "revision": "dc32ea9a89e41e563c79617f0661366a"
  },
  {
    "url": "ru/cookbook/libraries.html",
    "revision": "d623f440be2ea7a78f9b8c40d1c74d16"
  },
  {
    "url": "ru/cookbook/node-types.html",
    "revision": "fc05381a2ec6c6bcbf4d7efefe400911"
  },
  {
    "url": "ru/cookbook/object-structures.html",
    "revision": "226732bbd1fd91f68fe3b942c4c15235"
  },
  {
    "url": "ru/cookbook/operations.html",
    "revision": "1e48c304d9597b2235e70aaa9dee61af"
  },
  {
    "url": "ru/cookbook/plugins-api.html",
    "revision": "9db9d84271e9f15ec46e579113544c80"
  },
  {
    "url": "ru/cookbook/state.html",
    "revision": "397b918f76d6bb05f034dd9511f92488"
  },
  {
    "url": "ru/cookbook/transaction-formatting.html",
    "revision": "64171f86a7391b48cbc15010bb25d139"
  },
  {
    "url": "ru/economy.html",
    "revision": "fe342e5a1d388e02be6bb6fe03f67763"
  },
  {
    "url": "ru/escrow.html",
    "revision": "49b4d6f29f94136a5693f27e582b9a10"
  },
  {
    "url": "ru/glossary.html",
    "revision": "5951ed39f18bad3c867fd411dfd82d80"
  },
  {
    "url": "ru/index.html",
    "revision": "86cbfd3276ea08e55f63c7e3bb58bd86"
  },
  {
    "url": "ru/links.html",
    "revision": "7b3206b3cd1268a8e5be9d72ca380815"
  },
  {
    "url": "ru/subscriptions.html",
    "revision": "d3693458e834eef59ccd33ecd47bbf4f"
  },
  {
    "url": "ru/witnesses.html",
    "revision": "e463cb2fdda04eed469e01214eb997ab"
  },
  {
    "url": "subscriptions.html",
    "revision": "48cf183e1f1cd1a9be5038c4f63ac62c"
  },
  {
    "url": "witnesses.html",
    "revision": "22b3d4cb68dbc62f30272edaa1b6187a"
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
