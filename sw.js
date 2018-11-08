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
    "url": "webpack-runtime-d8ca20b58007e6c1fc5b.js"
  },
  {
    "url": "app-de725c379a1ad6efbbdb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-be5ba3d6c002f01ca007.js"
  },
  {
    "url": "index.html",
    "revision": "fe48505cd5b270611cbc32955de48a91"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "12d71eff38c25b74a3fc30fe9f9b70be"
  },
  {
    "url": "13.8b84b84b14e839fcad0a.css"
  },
  {
    "url": "component---src-pages-index-js.c08a9fd6466a0f64983d.css"
  },
  {
    "url": "0.9eed7b7c04e053b2e9b5.css"
  },
  {
    "url": "component---src-pages-index-js-c846fafd1a45433d78d5.js"
  },
  {
    "url": "2-ff158475eaee89ddc1f6.js"
  },
  {
    "url": "0-e8df25986337f2b82882.js"
  },
  {
    "url": "3-e7793322dae774b46ffb.js"
  },
  {
    "url": "13-4e11b8c50ab874b59666.js"
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
    "revision": "2230e2a3af1231d6b5e3be5dd86a9d3e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
