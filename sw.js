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
    "url": "webpack-runtime-fc2bfccda05202adf90b.js"
  },
  {
    "url": "app-de725c379a1ad6efbbdb.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-be5ba3d6c002f01ca007.js"
  },
  {
    "url": "index.html",
    "revision": "2d8d37e48127b66e0850469af67a997b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "4f7c8e22f2e923b7232f3681f1feaaf9"
  },
  {
    "url": "13.8b84b84b14e839fcad0a.css"
  },
  {
    "url": "component---src-pages-index-js.eb4241e29bc4a8cbf0d4.css"
  },
  {
    "url": "0.9eed7b7c04e053b2e9b5.css"
  },
  {
    "url": "component---src-pages-index-js-9cf1835dfd44aabbad99.js"
  },
  {
    "url": "2-bec653b9e6d938c25270.js"
  },
  {
    "url": "0-fdfc82a86233a5e3c48a.js"
  },
  {
    "url": "3-27f474db566d0034db27.js"
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
