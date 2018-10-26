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
    "url": "webpack-runtime-d0ac90d47ced2c864a80.js"
  },
  {
    "url": "app-973e44235a3c494d1e00.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d19ece59521715589c1d.js"
  },
  {
    "url": "index.html",
    "revision": "1e077cd174ded10b324b5abc20e18091"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "9f3b7a90b6ff20d6c319b422bc226fb3"
  },
  {
    "url": "1.c8f0b6308bca4c189f5c.css"
  },
  {
    "url": "component---src-pages-index-js.f6bc7ccad27330089392.css"
  },
  {
    "url": "0.5dd481189c9f6bdb60c8.css"
  },
  {
    "url": "12.3af4c4eb1996eb603a75.css"
  },
  {
    "url": "component---src-pages-index-js-52ca482b08039a449b08.js"
  },
  {
    "url": "2-dcd6d3d7c078082957f6.js"
  },
  {
    "url": "0-e36aeaff24fb092da728.js"
  },
  {
    "url": "12-8843d90c486b6022735e.js"
  },
  {
    "url": "1-3c66271a1adbbc3cbbe5.js"
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
    "revision": "c73aa06221fbe2de9b098b9a52971476"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
