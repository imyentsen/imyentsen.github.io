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
    "url": "webpack-runtime-ad83cd13bf12285cb634.js"
  },
  {
    "url": "app-973e44235a3c494d1e00.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d19ece59521715589c1d.js"
  },
  {
    "url": "index.html",
    "revision": "338f2bac8031502e4e058963e5d816d3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "ec3f9da51beab5a2d34f6789dcf503c4"
  },
  {
    "url": "1.570c3917677773149826.css"
  },
  {
    "url": "component---src-pages-index-js.de2620e92707398de5be.css"
  },
  {
    "url": "0.5dd481189c9f6bdb60c8.css"
  },
  {
    "url": "12.3af4c4eb1996eb603a75.css"
  },
  {
    "url": "component---src-pages-index-js-90acc750bc4786babf06.js"
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
    "url": "1-e70ad8d792b62149555f.js"
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
