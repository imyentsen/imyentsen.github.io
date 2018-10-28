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

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-769e9d9cf62fb2c6cadf.js"
  },
  {
    "url": "app-0cba91c95e68eae39656.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-be5ba3d6c002f01ca007.js"
  },
  {
    "url": "index.html",
    "revision": "867c9750b018424cf4ba387e40e54976"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "091a267f6bda01d406c349872317bd69"
  },
  {
    "url": "1.4562aec74627f09fdebb.css"
  },
  {
    "url": "component---src-pages-index-js.613db89be2940ea88014.css"
  },
  {
    "url": "0.f8d6244153f9c53eed75.css"
  },
  {
    "url": "component---src-pages-index-js-75bca253781cbecab146.js"
  },
  {
    "url": "2-114f2d60efbf8d337186.js"
  },
  {
    "url": "0-2764c3f761d16c230a83.js"
  },
  {
    "url": "3-a2d92b3293c96b8a9416.js"
  },
  {
    "url": "1-51b7b665bfe35dc39ae7.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.json",
    "revision": "b773e901ef06ac93343dc05e67540787"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "91ead8e7a60e3e2eacad116f82a8fe63"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
