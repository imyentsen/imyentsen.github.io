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
    "url": "webpack-runtime-c1a502d8b08d0256d0a0.js"
  },
  {
    "url": "app-f7ab61323dbabb65cbe4.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-d19ece59521715589c1d.js"
  },
  {
    "url": "index.html",
    "revision": "3e060cc4182868bab7c2d8a3eefdce5b"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "16bcbdfa040aa8dc91d9c02e2702a116"
  },
  {
    "url": "1.2ef1eed7e71d8b39830f.css"
  },
  {
    "url": "component---src-pages-index-js.4d045ae1e726f81d5fd8.css"
  },
  {
    "url": "0.7695a784a59698787c5d.css"
  },
  {
    "url": "12.eb295e5512d473642017.css"
  },
  {
    "url": "component---src-pages-index-js-cd968b61700c15e59ae7.js"
  },
  {
    "url": "2-76e9847427d58ea6d320.js"
  },
  {
    "url": "0-f8ce8a42968540568de3.js"
  },
  {
    "url": "12-0a5c01ecebfe6c216729.js"
  },
  {
    "url": "1-6f9e97e0f688f5cd2823.js"
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
