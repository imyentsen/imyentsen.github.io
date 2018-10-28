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
    "url": "webpack-runtime-bab8d0a411c8e44099c0.js"
  },
  {
    "url": "app-973e44235a3c494d1e00.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d19ece59521715589c1d.js"
  },
  {
    "url": "index.html",
    "revision": "b2a45cd58f09ba4bef31c5cafdd2cfeb"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f61d4e70877663dd743a46159002b0bb"
  },
  {
    "url": "1.98c7276a2586c886e477.css"
  },
  {
    "url": "component---src-pages-index-js.f97cc6c6bd8d6e53ef6b.css"
  },
  {
    "url": "0.83fae7d483723d43b371.css"
  },
  {
    "url": "12.63ad5a151047c4dbdbd9.css"
  },
  {
    "url": "component---src-pages-index-js-d801b97900d9c983adc0.js"
  },
  {
    "url": "2-4d3610355948d1391caf.js"
  },
  {
    "url": "0-5b346f37c257f4bbf260.js"
  },
  {
    "url": "12-d3cd1215ef68d3ea4f60.js"
  },
  {
    "url": "1-0fb305b7a439be301192.js"
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
