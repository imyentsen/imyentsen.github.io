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
    "url": "webpack-runtime-91fb1cc75d3e3ace7e3a.js"
  },
  {
    "url": "app-0cba91c95e68eae39656.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-be5ba3d6c002f01ca007.js"
  },
  {
    "url": "index.html",
    "revision": "6b209fb90484aef248edf605db51c5d3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "e257f071754156cee1fec64716c5d4a5"
  },
  {
    "url": "1.d314c88ed0397c5267a4.css"
  },
  {
    "url": "component---src-pages-index-js.2b84e039eea6d940e711.css"
  },
  {
    "url": "0.aefded8783a7349a3218.css"
  },
  {
    "url": "component---src-pages-index-js-5b1f605dadb37515cdc2.js"
  },
  {
    "url": "2-114f2d60efbf8d337186.js"
  },
  {
    "url": "0-2d68d67db191537bee7d.js"
  },
  {
    "url": "3-ad66e40b37844ce7c32a.js"
  },
  {
    "url": "1-37d72297ed1774da366e.js"
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
