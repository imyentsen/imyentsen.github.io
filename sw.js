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
    "url": "webpack-runtime-8acfe92385bc09c070bb.js"
  },
  {
    "url": "app-421e1374f6049ae5ed3e.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d19ece59521715589c1d.js"
  },
  {
    "url": "index.html",
    "revision": "b0b755aedd7dd396065c0e42bbef85dc"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2ae6162a5f6cc46d5b4303b2c3ddc33a"
  },
  {
    "url": "1.364028c755ca3e18094a.css"
  },
  {
    "url": "component---src-pages-index-js.9a0d40668043eb2c89ca.css"
  },
  {
    "url": "0.4fec2ccc2fd2b19f504d.css"
  },
  {
    "url": "13.3cb1c16f0cd210f8801c.css"
  },
  {
    "url": "component---src-pages-index-js-fd6283d3a173fef2190b.js"
  },
  {
    "url": "2-991d1ff73e47fe8d7dc4.js"
  },
  {
    "url": "0-f6a397063e498126d613.js"
  },
  {
    "url": "13-7e85ff8dc3fc50aacd35.js"
  },
  {
    "url": "1-2fd564cab64a4ad6562d.js"
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
