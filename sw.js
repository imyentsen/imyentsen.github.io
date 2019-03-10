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
    "url": "webpack-runtime-e60f34885a7e19937890.js"
  },
  {
    "url": "app-a64e3ac9219109c697ca.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d19ece59521715589c1d.js"
  },
  {
    "url": "index.html",
    "revision": "e0ac7e3e39f782a97f6b50101d8ca2d9"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bed4a8bc128a8944e22a656efe4d8abe"
  },
  {
    "url": "1.7e05af77d01c24794273.css"
  },
  {
    "url": "component---src-pages-index-js.f7d761660e907cbed2a1.css"
  },
  {
    "url": "0.31f565f95036d8acf4b8.css"
  },
  {
    "url": "12.4deaedcee9de96ce3874.css"
  },
  {
    "url": "component---src-pages-index-js-0aa361add2fa04718a1a.js"
  },
  {
    "url": "2-17d73d10cdfc00df4c83.js"
  },
  {
    "url": "0-741f6ae3ab78456f3694.js"
  },
  {
    "url": "12-878099f9dccc6641c8e9.js"
  },
  {
    "url": "1-a60be72cfaa88eb22b0b.js"
  },
  {
    "url": "static/d/615/path---index-6a9-midpf1VX6MyOxlwuMKm0P1PnVQ.json",
    "revision": "e3e6db1f857fbf91188334f21eb5893d"
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
