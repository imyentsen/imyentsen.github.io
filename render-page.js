(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/@reach/router/index.js"), require("fs"), require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/lodash.js"), require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/get.js"), require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/map.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/Users/ansinlau/Dropbox/website/current/dev/node_modules/@reach/router/index.js", "fs", "/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/lodash.js", "/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/get.js", "/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/map.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/@reach/router/index.js"), require("fs"), require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/lodash.js"), require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/get.js"), require("/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/map.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/Users/ansinlau/Dropbox/website/current/dev/node_modules/@reach/router/index.js"], root["fs"], root["/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/lodash.js"], root["/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/get.js"], root["/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/map.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_lodash_get__, __WEBPACK_EXTERNAL_MODULE_lodash_map__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js":
/*!********************************************************************!*\
  !*** ./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _require=__webpack_require__(/*! react-hot-loader/root */ "./node_modules/react-hot-loader/root.js"),hot=_require.hot;// prefer default export if available
var preferDefault=function preferDefault(m){return m&&m.default||m;};exports.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":hot(preferDefault(__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/app-shell.js */ "./node_modules/gatsby-plugin-offline/app-shell.js"))),"component---src-pages-about-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/about.js */ "./src/pages/about.js"))),"component---src-pages-fakeindex-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/fakeindex.js */ "./src/pages/fakeindex.js"))),"component---src-pages-how-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/how.js */ "./src/pages/how.js"))),"component---src-pages-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/index.js */ "./src/pages/index.js"))),"component---src-pages-project-thur-soc-components-calendar-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/project/thur_soc/components/calendar/index.js */ "./src/pages/project/thur_soc/components/calendar/index.js"))),"component---src-pages-project-thur-soc-components-collapse-collapse-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/project/thur_soc/components/collapse/collapse.js */ "./src/pages/project/thur_soc/components/collapse/collapse.js"))),"component---src-pages-project-thur-soc-components-collapse-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/project/thur_soc/components/collapse/index.js */ "./src/pages/project/thur_soc/components/collapse/index.js"))),"component---src-pages-project-thur-soc-components-poster-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/project/thur_soc/components/poster/index.js */ "./src/pages/project/thur_soc/components/poster/index.js"))),"component---src-pages-project-thur-soc-components-poster-src-pic-top-left-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/project/thur_soc/components/poster/src/PicTopLeft.js */ "./src/pages/project/thur_soc/components/poster/src/PicTopLeft.js"))),"component---src-pages-project-thur-soc-components-poster-src-pic-top-right-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/project/thur_soc/components/poster/src/PicTopRight.js */ "./src/pages/project/thur_soc/components/poster/src/PicTopRight.js"))),"component---src-pages-project-thur-soc-index-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/project/thur_soc/index.js */ "./src/pages/project/thur_soc/index.js"))),"component---src-pages-updates-js":hot(preferDefault(__webpack_require__(/*! ./src/pages/updates.js */ "./src/pages/updates.js"))),"component---src-templates-index-js":hot(preferDefault(__webpack_require__(/*! ./src/templates/index.js */ "./src/templates/index.js")))};

/***/ }),

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var plugins=[{plugin:__webpack_require__(/*! ./node_modules/gatsby-remark-images-grid/gatsby-ssr */ "./node_modules/gatsby-remark-images-grid/gatsby-ssr.js"),options:{"plugins":[],"className":"grid-image","gridGap":"15px","margin":"15px auto","showCaptions":"true"}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),options:{"plugins":[],"name":"Ansin Lau","short_name":"Ansin","description":"Portfolio of Ansin Lau","homepage_url":"https://imyentsen.github.io","start_url":"/","background_color":"#fff","theme_color":"#ff786e","display":"standalone","icons":[{"src":"/img/android-chrome-192x192.png","sizes":"192x192","type":"image/png"},{"src":"/img/android-chrome-512x512.png","sizes":"512x512","type":"image/png"}],"cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":null}},{plugin:__webpack_require__(/*! ./node_modules/@wyze/gatsby-plugin-google-analytics/gatsby-ssr */ "./node_modules/@wyze/gatsby-plugin-google-analytics/gatsby-ssr.js"),options:{"plugins":[],"trackingId":"UA-130617271-1"}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-google-fonts/gatsby-ssr */ "./node_modules/gatsby-plugin-google-fonts/gatsby-ssr.js"),options:{"plugins":[],"fonts":["Sora:400,700","Noto Sans TC:700","Kameron:700","Pragati Narrow:700"]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-offline/gatsby-ssr */ "./node_modules/gatsby-plugin-offline/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-sitemap/gatsby-ssr */ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js"),options:{"plugins":[]}},{plugin:__webpack_require__(/*! ./node_modules/gatsby-plugin-styled-components/gatsby-ssr */ "./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js"),options:{"plugins":[]}}];// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]
var apis=__webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js");// Run the specified API in any plugins that have implemented it
module.exports=function(api,args,defaultReturn,argTransform){if(!apis[api]){console.log("This API doesn't exist",api);}// Run each plugin in series.
// eslint-disable-next-line no-undef
var results=plugins.map(function(plugin){if(!plugin.plugin[api]){return undefined;}var result=plugin.plugin[api](args,plugin.options);if(result&&argTransform){args=argTransform({args:args,result:result});}return result;});// Filter out undefined results.
results=results.filter(function(result){return typeof result!=="undefined";});if(results.length>0){return results;}else{return[defaultReturn];}};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */ /**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */exports.replaceRenderer=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // Import React so that you can use JSX in HeadComponents
 * const React = require("react")
 *
 * const HtmlAttributes = {
 *   lang: "en"
 * }
 *
 * const HeadComponents = [
 *   <script key="my-script" src="https://gatsby.dev/my-script" />
 * ]
 *
 * const BodyAttributes = {
 *   "data-theme": "dark"
 * }
 *
 * exports.onRenderBody = ({
 *   setHeadComponents,
 *   setHtmlAttributes,
 *   setBodyAttributes
 * }, pluginOptions) => {
 *   setHtmlAttributes(HtmlAttributes)
 *   setHeadComponents(HeadComponents)
 *   setBodyAttributes(BodyAttributes)
 * }
 */exports.onRenderBody=true;/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */exports.onPreRenderHTML=true;/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */exports.wrapPageElement=true;/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */exports.wrapRootElement=true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function HTML(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html",props.htmlAttributes,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),props.headComponents),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body",props.bodyAttributes,props.preBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:"body",id:"___gatsby",dangerouslySetInnerHTML:{__html:props.body}}),props.postBodyComponents));}

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");
var emitter=Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, grabMatchParams, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grabMatchParams", function() { return grabMatchParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");
var pathCache=new Map();var matchPaths=[];var trimPathname=function trimPathname(rawPathname){var pathname=decodeURIComponent(rawPathname);// Remove the pathPrefix from the pathname.
var trimmedPathname=Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_1__["default"])(pathname,"")// Remove any hashfragment
.split("#")[0]// Remove search query
.split("?")[0];return trimmedPathname;};function absolutify(path){// If it's already absolute, return as-is
if(path.startsWith("/")||path.startsWith("https://")||path.startsWith("http://")){return path;}// Calculate path relative to current location, adding a trailing slash to
// match behavior of @reach/router
return new URL(path,window.location.href+(window.location.href.endsWith("/")?"":"/")).pathname;}/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */var setMatchPaths=function setMatchPaths(value){matchPaths=value;};/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */var findMatchPath=function findMatchPath(rawPathname){var trimmedPathname=cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref){var path=_ref.path,matchPath=_ref.matchPath;return{path:matchPath,originalPath:path};});var path=Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(pickPaths,trimmedPathname);if(path){return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(path.route.originalPath);}return null;};/**
 * Return a matchpath params from reach/router rules
 * if `match-paths.json` contains `{ ":bar/*foo" }`, and the path is /baz/zaz/zoo
 * then it returns
 *  { bar: baz, foo: zaz/zoo }
 *
 * @param {string} rawPathname A raw pathname
 * @return {object}
 */var grabMatchParams=function grabMatchParams(rawPathname){var trimmedPathname=cleanPath(rawPathname);var pickPaths=matchPaths.map(function(_ref2){var path=_ref2.path,matchPath=_ref2.matchPath;return{path:matchPath,originalPath:path};});var path=Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_0__["pick"])(pickPaths,trimmedPathname);if(path){return path.params;}return{};};// Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`
var findPath=function findPath(rawPathname){var trimmedPathname=trimPathname(absolutify(rawPathname));if(pathCache.has(trimmedPathname)){return pathCache.get(trimmedPathname);}var foundPath=findMatchPath(trimmedPathname);if(!foundPath){foundPath=cleanPath(rawPathname);}pathCache.set(trimmedPathname,foundPath);return foundPath;};/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */var cleanPath=function cleanPath(rawPathname){var trimmedPathname=trimPathname(absolutify(rawPathname));var foundPath=trimmedPathname;if(foundPath==="/index.html"){foundPath="/";}foundPath=Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_2__["default"])(foundPath);return foundPath;};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, useScrollRestoration, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname, unstable_collectionGraphql */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unstable_collectionGraphql", function() { return unstable_collectionGraphql; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_1__["navigateTo"]; });

/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby-react-router-scroll */ "./node_modules/gatsby-react-router-scroll/index.js");
/* harmony import */ var gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollRestoration", function() { return gatsby_react_router_scroll__WEBPACK_IMPORTED_MODULE_2__["useScrollRestoration"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");
var prefetchPathname=_loader__WEBPACK_IMPORTED_MODULE_4__["default"].enqueue;var StaticQueryContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext({});function StaticQueryDataRenderer(_ref){var staticQueryData=_ref.staticQueryData,data=_ref.data,query=_ref.query,render=_ref.render;var finalData=data?data.data:staticQueryData[query]&&staticQueryData[query].data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,finalData&&render(finalData),!finalData&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Loading (StaticQuery)"));}var StaticQuery=function StaticQuery(props){var data=props.data,query=props.query,render=props.render,children=props.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryContext.Consumer,null,function(staticQueryData){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StaticQueryDataRenderer,{data:data,query:query,render:render||children,staticQueryData:staticQueryData});});};var useStaticQuery=function useStaticQuery(query){var _context$query;if(typeof react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext!=="function"&&"production"==="development"){throw new Error("You're likely using a version of React that doesn't support Hooks\n"+"Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");}var context=react__WEBPACK_IMPORTED_MODULE_0___default.a.useContext(StaticQueryContext);// query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
// to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
// catch the misuse of the API and give proper direction
if(isNaN(Number(query))){throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`"+query+"`);\n");}if(context===null||context===void 0?void 0:(_context$query=context[query])===null||_context$query===void 0?void 0:_context$query.data){return context[query].data;}else{throw new Error("The result of this StaticQuery could not be fetched.\n\n"+"This is likely a bug in Gatsby and if refreshing the page does not fix it, "+"please open an issue in https://github.com/gatsbyjs/gatsby/issues");}};function graphql(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls "+"are supposed to only be evaluated at compile time, and then compiled away. "+"Unfortunately, something went wrong and the query was left in the compiled code.\n\n"+"Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");}function unstable_collectionGraphql(){// TODO: Strip this out of the component and throw error if it gets called
return null;}

/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: PageResourceStatus, BaseLoader, ProdLoader, setLoader, publicLoader, default, getStaticQueryResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return PageResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticQueryResults", function() { return getStaticQueryResults; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");
/**
 * Available resource loading statuses
 */var PageResourceStatus={/**
   * At least one of critical resources failed to load
   */Error:"error",/**
   * Resources loaded successfully
   */Success:"success"};var preferDefault=function preferDefault(m){return m&&m.default||m;};var stripSurroundingSlashes=function stripSurroundingSlashes(s){s=s[0]==="/"?s.slice(1):s;s=s.endsWith("/")?s.slice(0,-1):s;return s;};var createPageDataUrl=function createPageDataUrl(path){var fixedPath=path==="/"?"index":stripSurroundingSlashes(path);return ""+"/page-data/"+fixedPath+"/page-data.json";};function doFetch(url,method){if(method===void 0){method="GET";}return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open(method,url,true);req.onreadystatechange=function(){if(req.readyState==4){resolve(req);}};req.send(null);});}var doesConnectionSupportPrefetch=function doesConnectionSupportPrefetch(){if("connection"in navigator&&typeof navigator.connection!=="undefined"){if((navigator.connection.effectiveType||"").includes("2g")){return false;}if(navigator.connection.saveData){return false;}}return true;};var toPageResources=function toPageResources(pageData,component){if(component===void 0){component=null;}var page={componentChunkName:pageData.componentChunkName,path:pageData.path,webpackCompilationHash:pageData.webpackCompilationHash,matchPath:pageData.matchPath,staticQueryHashes:pageData.staticQueryHashes};return{component:component,json:pageData.result,page:page};};var BaseLoader=/*#__PURE__*/function(){function BaseLoader(loadComponent,matchPaths){this.inFlightNetworkRequests=new Map();// Map of pagePath -> Page. Where Page is an object with: {
//   status: PageResourceStatus.Success || PageResourceStatus.Error,
//   payload: PageResources, // undefined if PageResourceStatus.Error
// }
// PageResources is {
//   component,
//   json: pageData.result,
//   page: {
//     componentChunkName,
//     path,
//     webpackCompilationHash,
//     staticQueryHashes
//   },
//   staticQueryResults
// }
this.pageDb=new Map();this.inFlightDb=new Map();this.staticQueryDb={};this.pageDataDb=new Map();this.prefetchTriggered=new Set();this.prefetchCompleted=new Set();this.loadComponent=loadComponent;Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["setMatchPaths"])(matchPaths);}var _proto=BaseLoader.prototype;_proto.memoizedGet=function memoizedGet(url){var _this=this;var inFlightPromise=this.inFlightNetworkRequests.get(url);if(!inFlightPromise){inFlightPromise=doFetch(url,"GET");this.inFlightNetworkRequests.set(url,inFlightPromise);}// Prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
return inFlightPromise.then(function(response){_this.inFlightNetworkRequests.delete(url);return response;}).catch(function(err){_this.inFlightNetworkRequests.delete(url);throw err;});};_proto.setApiRunner=function setApiRunner(apiRunner){this.apiRunner=apiRunner;this.prefetchDisabled=apiRunner("disableCorePrefetching").some(function(a){return a;});};_proto.fetchPageDataJson=function fetchPageDataJson(loadObj){var _this2=this;var pagePath=loadObj.pagePath,_loadObj$retries=loadObj.retries,retries=_loadObj$retries===void 0?0:_loadObj$retries;var url=createPageDataUrl(pagePath);return this.memoizedGet(url).then(function(req){var status=req.status,responseText=req.responseText;// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.path===undefined){throw new Error("not a valid pageData response");}return Object.assign(loadObj,{status:PageResourceStatus.Success,payload:jsonPayload});}catch(err){// continue regardless of error
}}// Handle 404
if(status===404||status===200){// If the request was for a 404 page and it doesn't exist, we're done
if(pagePath==="/404.html"){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Need some code here to cache the 404 request. In case
// multiple loadPageDataJsons result in 404s
return _this2.fetchPageDataJson(Object.assign(loadObj,{pagePath:"/404.html",notFound:true}));}// handle 500 response (Unrecoverable)
if(status===500){return Object.assign(loadObj,{status:PageResourceStatus.Error});}// Handle everything else, including status === 0, and 503s. Should retry
if(retries<3){return _this2.fetchPageDataJson(Object.assign(loadObj,{retries:retries+1}));}// Retried 3 times already, result is an error.
return Object.assign(loadObj,{status:PageResourceStatus.Error});});};_proto.loadPageDataJson=function loadPageDataJson(rawPath){var _this3=this;var pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["findPath"])(rawPath);if(this.pageDataDb.has(pagePath)){return Promise.resolve(this.pageDataDb.get(pagePath));}return this.fetchPageDataJson({pagePath:pagePath}).then(function(pageData){_this3.pageDataDb.set(pagePath,pageData);return pageData;});};_proto.findMatchPath=function findMatchPath(rawPath){return Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["findMatchPath"])(rawPath);}// TODO check all uses of this and whether they use undefined for page resources not exist
;_proto.loadPage=function loadPage(rawPath){var _this4=this;var pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){var page=this.pageDb.get(pagePath);return Promise.resolve(page.payload);}if(this.inFlightDb.has(pagePath)){return this.inFlightDb.get(pagePath);}var inFlightPromise=Promise.all([this.loadAppData(),this.loadPageDataJson(pagePath)]).then(function(allData){var result=allData[1];if(result.status===PageResourceStatus.Error){return{status:PageResourceStatus.Error};}var pageData=result.payload;var _pageData=pageData,componentChunkName=_pageData.componentChunkName,_pageData$staticQuery=_pageData.staticQueryHashes,staticQueryHashes=_pageData$staticQuery===void 0?[]:_pageData$staticQuery;var finalResult={};var componentChunkPromise=_this4.loadComponent(componentChunkName).then(function(component){finalResult.createdAt=new Date();var pageResources;if(!component){finalResult.status=PageResourceStatus.Error;}else{finalResult.status=PageResourceStatus.Success;if(result.notFound===true){finalResult.notFound=true;}pageData=Object.assign(pageData,{webpackCompilationHash:allData[0]?allData[0].webpackCompilationHash:""});pageResources=toPageResources(pageData,component);}// undefined if final result is an error
return pageResources;});var staticQueryBatchPromise=Promise.all(staticQueryHashes.map(function(staticQueryHash){// Check for cache in case this static query result has already been loaded
if(_this4.staticQueryDb[staticQueryHash]){var jsonPayload=_this4.staticQueryDb[staticQueryHash];return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};}return _this4.memoizedGet(""+"/page-data/sq/d/"+staticQueryHash+".json").then(function(req){var jsonPayload=JSON.parse(req.responseText);return{staticQueryHash:staticQueryHash,jsonPayload:jsonPayload};});})).then(function(staticQueryResults){var staticQueryResultsMap={};staticQueryResults.forEach(function(_ref){var staticQueryHash=_ref.staticQueryHash,jsonPayload=_ref.jsonPayload;staticQueryResultsMap[staticQueryHash]=jsonPayload;_this4.staticQueryDb[staticQueryHash]=jsonPayload;});return staticQueryResultsMap;});return Promise.all([componentChunkPromise,staticQueryBatchPromise]).then(function(_ref2){var pageResources=_ref2[0],staticQueryResults=_ref2[1];var payload;if(pageResources){payload=Object.assign({},pageResources,{staticQueryResults:staticQueryResults});finalResult.payload=payload;_emitter__WEBPACK_IMPORTED_MODULE_3__["default"].emit("onPostLoadPageResources",{page:payload,pageResources:payload});}_this4.pageDb.set(pagePath,finalResult);return payload;});});inFlightPromise.then(function(response){_this4.inFlightDb.delete(pagePath);}).catch(function(error){_this4.inFlightDb.delete(pagePath);throw error;});this.inFlightDb.set(pagePath,inFlightPromise);return inFlightPromise;}// returns undefined if loading page ran into errors
;_proto.loadPageSync=function loadPageSync(rawPath){var pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["findPath"])(rawPath);if(this.pageDb.has(pagePath)){var pageData=this.pageDb.get(pagePath).payload;return pageData;}return undefined;};_proto.shouldPrefetch=function shouldPrefetch(pagePath){// Skip prefetching if we know user is on slow or constrained connection
if(!doesConnectionSupportPrefetch()){return false;}// Check if the page exists.
if(this.pageDb.has(pagePath)){return false;}return true;};_proto.prefetch=function prefetch(pagePath){var _this5=this;if(!this.shouldPrefetch(pagePath)){return false;}// Tell plugins with custom prefetching logic that they should start
// prefetching this path.
if(!this.prefetchTriggered.has(pagePath)){this.apiRunner("onPrefetchPathname",{pathname:pagePath});this.prefetchTriggered.add(pagePath);}// If a plugin has disabled core prefetching, stop now.
if(this.prefetchDisabled){return false;}var realPath=Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["findPath"])(pagePath);// Todo make doPrefetch logic cacheable
// eslint-disable-next-line consistent-return
this.doPrefetch(realPath).then(function(){if(!_this5.prefetchCompleted.has(pagePath)){_this5.apiRunner("onPostPrefetchPathname",{pathname:pagePath});_this5.prefetchCompleted.add(pagePath);}});return true;};_proto.doPrefetch=function doPrefetch(pagePath){throw new Error("doPrefetch not implemented");};_proto.hovering=function hovering(rawPath){this.loadPage(rawPath);};_proto.getResourceURLsForPathname=function getResourceURLsForPathname(rawPath){var pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["findPath"])(rawPath);var page=this.pageDataDb.get(pagePath);if(page){var pageResources=toPageResources(page.payload);return[].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(createComponentUrls(pageResources.page.componentChunkName)),[createPageDataUrl(pagePath)]);}else{return null;}};_proto.isPageNotFound=function isPageNotFound(rawPath){var pagePath=Object(_find_path__WEBPACK_IMPORTED_MODULE_4__["findPath"])(rawPath);var page=this.pageDb.get(pagePath);return!page||page.notFound;};_proto.loadAppData=function loadAppData(retries){var _this6=this;if(retries===void 0){retries=0;}return this.memoizedGet(""+"/page-data/app-data.json").then(function(req){var status=req.status,responseText=req.responseText;var appData;if(status!==200&&retries<3){// Retry 3 times incase of non-200 responses
return _this6.loadAppData(retries+1);}// Handle 200
if(status===200){try{var jsonPayload=JSON.parse(responseText);if(jsonPayload.webpackCompilationHash===undefined){throw new Error("not a valid app-data response");}appData=jsonPayload;}catch(err){// continue regardless of error
}}return appData;});};return BaseLoader;}();var createComponentUrls=function createComponentUrls(componentChunkName){return(window.___chunkMapping[componentChunkName]||[]).map(function(chunk){return ""+chunk;});};var ProdLoader=/*#__PURE__*/function(_BaseLoader){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ProdLoader,_BaseLoader);function ProdLoader(asyncRequires,matchPaths){var loadComponent=function loadComponent(chunkName){return asyncRequires.components[chunkName]?asyncRequires.components[chunkName]().then(preferDefault)// loader will handle the case when component is null
.catch(function(){return null;}):Promise.resolve();};return _BaseLoader.call(this,loadComponent,matchPaths)||this;}var _proto2=ProdLoader.prototype;_proto2.doPrefetch=function doPrefetch(pagePath){var _this7=this;var pageDataUrl=createPageDataUrl(pagePath);return Object(_prefetch__WEBPACK_IMPORTED_MODULE_2__["default"])(pageDataUrl,{crossOrigin:"anonymous",as:"fetch"}).then(function(){return(// This was just prefetched, so will return a response from
// the cache instead of making another request to the server
_this7.loadPageDataJson(pagePath));}).then(function(result){if(result.status!==PageResourceStatus.Success){return Promise.resolve();}var pageData=result.payload;var chunkName=pageData.componentChunkName;var componentUrls=createComponentUrls(chunkName);return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_2__["default"])).then(function(){return pageData;});});};_proto2.loadPageDataJson=function loadPageDataJson(rawPath){return _BaseLoader.prototype.loadPageDataJson.call(this,rawPath).then(function(data){if(data.notFound){// check if html file exist using HEAD request:
// if it does we should navigate to it instead of showing 404
return doFetch(rawPath,"HEAD").then(function(req){if(req.status===200){// page (.html file) actually exist (or we asked for 404 )
// returning page resources status as errored to trigger
// regular browser navigation to given page
return{status:PageResourceStatus.Error};}// if HEAD request wasn't 200, return notFound result
// and show 404 page
return data;});}return data;});};return ProdLoader;}(BaseLoader);var instance;var setLoader=function setLoader(_loader){instance=_loader;};var publicLoader={// Deprecated methods. As far as we're aware, these are only used by
// core gatsby and the offline plugin, however there's a very small
// chance they're called by others.
getResourcesForPathname:function getResourcesForPathname(rawPath){console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");return instance.i.loadPage(rawPath);},getResourcesForPathnameSync:function getResourcesForPathnameSync(rawPath){console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");return instance.i.loadPageSync(rawPath);},enqueue:function enqueue(rawPath){return instance.prefetch(rawPath);},// Real methods
getResourceURLsForPathname:function getResourceURLsForPathname(rawPath){return instance.getResourceURLsForPathname(rawPath);},loadPage:function loadPage(rawPath){return instance.loadPage(rawPath);},loadPageSync:function loadPageSync(rawPath){return instance.loadPageSync(rawPath);},prefetch:function prefetch(rawPath){return instance.prefetch(rawPath);},isPageNotFound:function isPageNotFound(rawPath){return instance.isPageNotFound(rawPath);},hovering:function hovering(rawPath){return instance.hovering(rawPath);},loadAppData:function loadAppData(){return instance.loadAppData();}};/* harmony default export */ __webpack_exports__["default"] = (publicLoader);function getStaticQueryResults(){return instance.staticQueryDb;}

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(path){if(path===undefined){return path;}if(path==="/"){return"/";}if(path.charAt(path.length-1)==="/"){return path.slice(0,-1);}return path;});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var support=function support(feature){if(typeof document==="undefined"){return false;}var fakeLink=document.createElement("link");try{if(fakeLink.relList&&typeof fakeLink.relList.supports==="function"){return fakeLink.relList.supports(feature);}}catch(err){return false;}return false;};var linkPrefetchStrategy=function linkPrefetchStrategy(url,options){return new Promise(function(resolve,reject){if(typeof document==="undefined"){reject();return;}var link=document.createElement("link");link.setAttribute("rel","prefetch");link.setAttribute("href",url);Object.keys(options).forEach(function(key){link.setAttribute(key,options[key]);});link.onload=resolve;link.onerror=reject;var parentElement=document.getElementsByTagName("head")[0]||document.getElementsByName("script")[0].parentNode;parentElement.appendChild(link);});};var xhrPrefetchStrategy=function xhrPrefetchStrategy(url){return new Promise(function(resolve,reject){var req=new XMLHttpRequest();req.open("GET",url,true);req.onload=function(){if(req.status===200){resolve();}else{reject();}};req.send(null);});};var supportedPrefetchStrategy=support("prefetch")?linkPrefetchStrategy:xhrPrefetchStrategy;var preFetched={};var prefetch=function prefetch(url,options){return new Promise(function(resolve){if(preFetched[url]){resolve();return;}supportedPrefetchStrategy(url,options).then(function(){resolve();preFetched[url]=true;}).catch(function(){});// 404s are logged to the console anyway
});};/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault=function preferDefault(m){return m&&m.default||m;};if(false){}else if(false){}else{module.exports=function(){return null;};}

/***/ }),

/***/ "./.cache/route-announcer-props.js":
/*!*****************************************!*\
  !*** ./.cache/route-announcer-props.js ***!
  \*****************************************/
/*! exports provided: RouteAnnouncerProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteAnnouncerProps", function() { return RouteAnnouncerProps; });
// This is extracted to separate module because it's shared
// between browser and SSR code
var RouteAnnouncerProps={id:"gatsby-announcer",style:{position:"absolute",top:0,width:1,height:1,padding:0,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",border:0},"aria-live":"assertive","aria-atomic":"true"};

/***/ }),

/***/ "./.cache/static-entry.js":
/*!********************************!*\
  !*** ./.cache/static-entry.js ***!
  \********************************/
/*! exports provided: sanitizeComponents, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeComponents", function() { return sanitizeComponents; });
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
var React=__webpack_require__(/*! react */ "react");var fs=__webpack_require__(/*! fs */ "fs");var _require=__webpack_require__(/*! path */ "path"),join=_require.join;var _require2=__webpack_require__(/*! react-dom/server */ "react-dom/server"),renderToString=_require2.renderToString,renderToStaticMarkup=_require2.renderToStaticMarkup;var _require3=__webpack_require__(/*! @reach/router */ "@reach/router"),ServerLocation=_require3.ServerLocation,Router=_require3.Router,isRedirect=_require3.isRedirect;var _require4=__webpack_require__(/*! lodash */ "lodash"),get=_require4.get,merge=_require4.merge,isObject=_require4.isObject,flatten=_require4.flatten,uniqBy=_require4.uniqBy,flattenDeep=_require4.flattenDeep,replace=_require4.replace,concat=_require4.concat,memoize=_require4.memoize;var _require5=__webpack_require__(/*! ./route-announcer-props */ "./.cache/route-announcer-props.js"),RouteAnnouncerProps=_require5.RouteAnnouncerProps;var apiRunner=__webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");var syncRequires=__webpack_require__(/*! $virtual/sync-requires */ "./.cache/_this_is_virtual_fs_path_/$virtual/sync-requires.js");var _require6=__webpack_require__(/*! gatsby/package.json */ "./node_modules/gatsby/package.json"),gatsbyVersion=_require6.version;var _require7=__webpack_require__(/*! ./find-path */ "./.cache/find-path.js"),grabMatchParams=_require7.grabMatchParams;var stats=JSON.parse(fs.readFileSync(process.cwd()+"/public/webpack.stats.json","utf-8"));var chunkMapping=JSON.parse(fs.readFileSync(process.cwd()+"/public/chunk-map.json","utf-8"));// const testRequireError = require("./test-require-error")
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.
var testRequireError=function testRequireError(moduleName,err){var regex=new RegExp("Error: Cannot find module\\s."+moduleName);var firstLine=err.toString().split("\n")[0];return regex.test(firstLine);};var Html;try{Html=__webpack_require__(/*! ../src/html */ "./src/html.js");}catch(err){if(testRequireError("../src/html",err)){Html=__webpack_require__(/*! ./default-html */ "./.cache/default-html.js");}else{throw err;}}Html=Html&&Html.__esModule?Html.default:Html;var getPageDataPath=function getPageDataPath(path){var fixedPagePath=path==="/"?"index":path;return join("page-data",fixedPagePath,"page-data.json");};var getPageDataUrl=function getPageDataUrl(pagePath){var pageDataPath=getPageDataPath(pagePath);return ""+"/"+pageDataPath;};var getStaticQueryUrl=function getStaticQueryUrl(hash){return ""+"/page-data/sq/d/"+hash+".json";};var getPageData=function getPageData(pagePath){var pageDataPath=getPageDataPath(pagePath);var absolutePageDataPath=join(process.cwd(),"public",pageDataPath);var pageDataRaw=fs.readFileSync(absolutePageDataPath);try{return JSON.parse(pageDataRaw.toString());}catch(err){return null;}};var appDataPath=join("page-data","app-data.json");var getAppDataUrl=memoize(function(){var appData;try{var absoluteAppDataPath=join(process.cwd(),"public",appDataPath);var appDataRaw=fs.readFileSync(absoluteAppDataPath);appData=JSON.parse(appDataRaw.toString());if(!appData){return null;}}catch(err){return null;}return ""+"/"+appDataPath;});var loadPageDataSync=function loadPageDataSync(pagePath){var pageDataPath=getPageDataPath(pagePath);var pageDataFile=join(process.cwd(),"public",pageDataPath);try{var pageDataJson=fs.readFileSync(pageDataFile);return JSON.parse(pageDataJson);}catch(error){// not an error if file is not found. There's just no page data
return null;}};var createElement=React.createElement;var sanitizeComponents=function sanitizeComponents(components){var componentsArray=ensureArray(components);return componentsArray.map(function(component){// Ensure manifest is always loaded from content server
// And not asset server when an assetPrefix is used
if(false){}return component;});};var ensureArray=function ensureArray(components){if(Array.isArray(components)){// remove falsy items and flatten
return flattenDeep(components.filter(function(val){return Array.isArray(val)?val.length>0:val;}));}else{// we also accept single components, so we need to handle this case as well
return components?[components]:[];}};/* harmony default export */ __webpack_exports__["default"] = (function(pagePath,callback){var _postBodyComponents;var bodyHtml="";var headComponents=[/*#__PURE__*/React.createElement("meta",{name:"generator",content:"Gatsby "+gatsbyVersion,key:"generator-"+gatsbyVersion})];var htmlAttributes={};var bodyAttributes={};var preBodyComponents=[];var postBodyComponents=[];var bodyProps={};var replaceBodyHTMLString=function replaceBodyHTMLString(body){bodyHtml=body;};var setHeadComponents=function setHeadComponents(components){headComponents=headComponents.concat(sanitizeComponents(components));};var setHtmlAttributes=function setHtmlAttributes(attributes){htmlAttributes=merge(htmlAttributes,attributes);};var setBodyAttributes=function setBodyAttributes(attributes){bodyAttributes=merge(bodyAttributes,attributes);};var setPreBodyComponents=function setPreBodyComponents(components){preBodyComponents=preBodyComponents.concat(sanitizeComponents(components));};var setPostBodyComponents=function setPostBodyComponents(components){postBodyComponents=postBodyComponents.concat(sanitizeComponents(components));};var setBodyProps=function setBodyProps(props){bodyProps=merge({},bodyProps,props);};var getHeadComponents=function getHeadComponents(){return headComponents;};var replaceHeadComponents=function replaceHeadComponents(components){headComponents=sanitizeComponents(components);};var getPreBodyComponents=function getPreBodyComponents(){return preBodyComponents;};var replacePreBodyComponents=function replacePreBodyComponents(components){preBodyComponents=sanitizeComponents(components);};var getPostBodyComponents=function getPostBodyComponents(){return postBodyComponents;};var replacePostBodyComponents=function replacePostBodyComponents(components){postBodyComponents=sanitizeComponents(components);};var pageData=getPageData(pagePath);var pageDataUrl=getPageDataUrl(pagePath);var appDataUrl=getAppDataUrl();var componentChunkName=pageData.componentChunkName,_pageData$staticQuery=pageData.staticQueryHashes,staticQueryHashes=_pageData$staticQuery===void 0?[]:_pageData$staticQuery;var staticQueryUrls=staticQueryHashes.map(getStaticQueryUrl);var RouteHandler=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(RouteHandler,_React$Component);function RouteHandler(){return _React$Component.apply(this,arguments)||this;}var _proto=RouteHandler.prototype;_proto.render=function render(){var _pageData$result,_pageData$result$page;var props=Object.assign({},this.props,pageData.result,{params:Object.assign({},grabMatchParams(this.props.location.pathname),((_pageData$result=pageData.result)===null||_pageData$result===void 0?void 0:(_pageData$result$page=_pageData$result.pageContext)===null||_pageData$result$page===void 0?void 0:_pageData$result$page.__params)||{}),// pathContext was deprecated in v2. Renamed to pageContext
pathContext:pageData.result?pageData.result.pageContext:undefined});var pageElement=createElement(syncRequires.components[componentChunkName],props);var wrappedPage=apiRunner("wrapPageElement",{element:pageElement,props:props},pageElement,function(_ref){var result=_ref.result;return{element:result,props:props};}).pop();return wrappedPage;};return RouteHandler;}(React.Component);var routerElement=/*#__PURE__*/React.createElement(ServerLocation,{url:""+""+pagePath},/*#__PURE__*/React.createElement(Router,{id:"gatsby-focus-wrapper",baseuri:""},/*#__PURE__*/React.createElement(RouteHandler,{path:"/*"})),/*#__PURE__*/React.createElement("div",RouteAnnouncerProps));var bodyComponent=apiRunner("wrapRootElement",{element:routerElement,pathname:pagePath},routerElement,function(_ref2){var result=_ref2.result;return{element:result,pathname:pagePath};}).pop();// Let the site or plugin render the page component.
apiRunner("replaceRenderer",{bodyComponent:bodyComponent,replaceBodyHTMLString:replaceBodyHTMLString,setHeadComponents:setHeadComponents,setHtmlAttributes:setHtmlAttributes,setBodyAttributes:setBodyAttributes,setPreBodyComponents:setPreBodyComponents,setPostBodyComponents:setPostBodyComponents,setBodyProps:setBodyProps,pathname:pagePath,pathPrefix:""});// If no one stepped up, we'll handle it.
if(!bodyHtml){try{bodyHtml=renderToString(bodyComponent);}catch(e){// ignore @reach/router redirect errors
if(!isRedirect(e))throw e;}}// Create paths to scripts
var scriptsAndStyles=flatten(["app",componentChunkName].map(function(s){var fetchKey="assetsByChunkName["+s+"]";var chunks=get(stats,fetchKey);var namedChunkGroups=get(stats,"namedChunkGroups");if(!chunks){return null;}chunks=chunks.map(function(chunk){if(chunk==="/"){return null;}return{rel:"preload",name:chunk};});namedChunkGroups[s].assets.forEach(function(asset){return chunks.push({rel:"preload",name:asset});});var childAssets=namedChunkGroups[s].childAssets;var _loop=function _loop(rel){chunks=concat(chunks,childAssets[rel].map(function(chunk){return{rel:rel,name:chunk};}));};for(var rel in childAssets){_loop(rel);}return chunks;})).filter(function(s){return isObject(s);}).sort(function(s1,s2){return s1.rel=="preload"?-1:1;});// given priority to preload
scriptsAndStyles=uniqBy(scriptsAndStyles,function(item){return item.name;});var scripts=scriptsAndStyles.filter(function(script){return script.name&&script.name.endsWith(".js");});var styles=scriptsAndStyles.filter(function(style){return style.name&&style.name.endsWith(".css");});apiRunner("onRenderBody",{setHeadComponents:setHeadComponents,setHtmlAttributes:setHtmlAttributes,setBodyAttributes:setBodyAttributes,setPreBodyComponents:setPreBodyComponents,setPostBodyComponents:setPostBodyComponents,setBodyProps:setBodyProps,pathname:pagePath,loadPageDataSync:loadPageDataSync,bodyHtml:bodyHtml,scripts:scripts,styles:styles,pathPrefix:""});scripts.slice(0).reverse().forEach(function(script){// Add preload/prefetch <link>s for scripts.
headComponents.push(/*#__PURE__*/React.createElement("link",{as:"script",rel:script.rel,key:script.name,href:""+"/"+script.name}));});if(pageData){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:pageDataUrl,href:pageDataUrl,crossOrigin:"anonymous"}));}staticQueryUrls.forEach(function(staticQueryUrl){return headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:staticQueryUrl,href:staticQueryUrl,crossOrigin:"anonymous"}));});if(appDataUrl){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"fetch",rel:"preload",key:appDataUrl,href:appDataUrl,crossOrigin:"anonymous"}));}styles.slice(0).reverse().forEach(function(style){// Add <link>s for styles that should be prefetched
// otherwise, inline as a <style> tag
if(style.rel==="prefetch"){headComponents.push(/*#__PURE__*/React.createElement("link",{as:"style",rel:style.rel,key:style.name,href:""+"/"+style.name}));}else{headComponents.unshift(/*#__PURE__*/React.createElement("style",{"data-href":""+"/"+style.name,dangerouslySetInnerHTML:{__html:fs.readFileSync(join(process.cwd(),"public",style.name),"utf-8")}}));}});// Add page metadata for the current page
var windowPageData="/*<![CDATA[*/window.pagePath=\""+pagePath+"\";/*]]>*/";postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:"script-loader",id:"gatsby-script-loader",dangerouslySetInnerHTML:{__html:windowPageData}}));// Add chunk mapping metadata
var scriptChunkMapping="/*<![CDATA[*/window.___chunkMapping="+JSON.stringify(chunkMapping)+";/*]]>*/";postBodyComponents.push(/*#__PURE__*/React.createElement("script",{key:"chunk-mapping",id:"gatsby-chunk-mapping",dangerouslySetInnerHTML:{__html:scriptChunkMapping}}));var bodyScripts=[];if(chunkMapping["polyfill"]){chunkMapping["polyfill"].forEach(function(script){var scriptPath=""+""+script;bodyScripts.push(/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,noModule:true}));});}// Filter out prefetched bundles as adding them as a script tag
// would force high priority fetching.
bodyScripts=bodyScripts.concat(scripts.filter(function(s){return s.rel!=="prefetch";}).map(function(s){var scriptPath=""+"/"+JSON.stringify(s.name).slice(1,-1);return/*#__PURE__*/React.createElement("script",{key:scriptPath,src:scriptPath,async:true});}));(_postBodyComponents=postBodyComponents).push.apply(_postBodyComponents,Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(bodyScripts));apiRunner("onPreRenderHTML",{getHeadComponents:getHeadComponents,replaceHeadComponents:replaceHeadComponents,getPreBodyComponents:getPreBodyComponents,replacePreBodyComponents:replacePreBodyComponents,getPostBodyComponents:getPostBodyComponents,replacePostBodyComponents:replacePostBodyComponents,pathname:pagePath,pathPrefix:""});var html="<!DOCTYPE html>"+renderToStaticMarkup(/*#__PURE__*/React.createElement(Html,Object.assign({},bodyProps,{headComponents:headComponents,htmlAttributes:htmlAttributes,bodyAttributes:bodyAttributes,preBodyComponents:preBodyComponents,postBodyComponents:postBodyComponents,body:bodyHtml,path:pagePath})));callback(null,html);});

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stripPrefix; });
/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */function stripPrefix(str,prefix){if(prefix===void 0){prefix="";}if(!prefix){return str;}if(str===prefix){return"/";}if(str.startsWith(prefix+"/")){return str.slice(prefix.length);}return str;}

/***/ }),

/***/ "./gatsby-config.js":
/*!**************************!*\
  !*** ./gatsby-config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__dirname) {module.exports={siteMetadata:{title:'Ansin',description:"Ansin's portfolio",siteUrl:'https://imyentsen.github.io',author:'Ansinlau',twitter:'Ansinlau',adsense:'',image:'/img/og-image.jpg'},pathPrefix:'/',plugins:['gatsby-transformer-sharp','gatsby-plugin-sharp',{resolve:'gatsby-transformer-remark',options:{plugins:[{resolve:'gatsby-remark-images-grid',options:{className:'grid-image',gridGap:'15px',margin:'15px auto',showCaptions:'true'}},{resolve:'gatsby-remark-images',options:{maxWidth:2000,linkImagesToOriginal:false,wrapperStyle:'margin-bottom: 1.0725rem;'}},{resolve:'gatsby-remark-responsive-iframe',options:{wrapperStyle:'margin-bottom: 1.0725rem; margin-top: 1.0725rem;'}},'gatsby-remark-prismjs','gatsby-remark-copy-linked-files','gatsby-remark-smartypants',{resolve:"gatsby-plugin-alias-imports",options:{alias:{'@style':__dirname+"/src/style"}}}]}},{resolve:"gatsby-source-filesystem",options:{path:"./src/data/"}},{resolve:'gatsby-source-filesystem',options:{path:__dirname+"/content/images/",name:'images'}},{resolve:'gatsby-source-filesystem',options:{path:__dirname+"/content/posts/",name:'posts'}},"gatsby-transformer-json",{resolve:"gatsby-plugin-manifest",options:{name:'Ansin Lau',short_name:'Ansin',description:'Portfolio of Ansin Lau',homepage_url:'https://imyentsen.github.io',start_url:'/',background_color:'#fff',theme_color:'#ff786e',display:'standalone',icons:[{src:'/img/android-chrome-192x192.png',sizes:'192x192',type:'image/png'},{src:'/img/android-chrome-512x512.png',sizes:'512x512',type:'image/png'}]}},{resolve:'@wyze/gatsby-plugin-google-analytics',options:{trackingId:'UA-130617271-1'}},{resolve:'gatsby-plugin-netlify',options:{mergeSecurityHeaders:true,mergeLinkHeaders:true,mergeCachingHeaders:true}},{resolve:"gatsby-plugin-google-fonts",options:{fonts:["Sora:400,700","Noto Sans TC:700","Kameron:700","Pragati Narrow:700"]}},'gatsby-plugin-catch-links','gatsby-plugin-offline','gatsby-plugin-react-helmet','gatsby-plugin-react-next','gatsby-plugin-sass','gatsby-plugin-sitemap','gatsby-plugin-twitter','gatsby-plugin-styled-components']};
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _emotion_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @emotion/memoize */ "./node_modules/@emotion/memoize/dist/memoize.esm.js");


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var index = Object(_emotion_memoize__WEBPACK_IMPORTED_MODULE_0__["default"])(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "./node_modules/@emotion/memoize/dist/memoize.esm.js":
/*!***********************************************************!*\
  !*** ./node_modules/@emotion/memoize/dist/memoize.esm.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ __webpack_exports__["default"] = (memoize);


/***/ }),

/***/ "./node_modules/@emotion/stylis/dist/stylis.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/@emotion/stylis/dist/stylis.esm.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ __webpack_exports__["default"] = (stylis_min);


/***/ }),

/***/ "./node_modules/@emotion/unitless/dist/unitless.esm.js":
/*!*************************************************************!*\
  !*** ./node_modules/@emotion/unitless/dist/unitless.esm.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ __webpack_exports__["default"] = (unitlessKeys);


/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  false ? undefined : (0, _invariant2.default)(false) : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/@wyze/gatsby-plugin-google-analytics/gatsby-ssr.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@wyze/gatsby-plugin-google-analytics/gatsby-ssr.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var n=__webpack_require__(/*! react */ "react"),r=function(n){return"object"==typeof n&&!1===Array.isArray(n)&&null!==n;},e=function(n){return"string"==typeof n&&n.length>0;},t=function(r){return n.createElement("script",{async:!0,src:r.source});};exports.onRenderBody=function(o,i){var a=o.setPostBodyComponents,s=void 0===i?{}:i,u=s.anonymize,c=void 0===u||u,g=s.gaPlugins,p=s.respectDNT,l=void 0===p||p,f=s.trackingId,y=function(n){var t=n.gaPlugins,o=n.respectDNT,i=n.trackingId;if("boolean"!=typeof n.anonymize)return new Error("Must supply `anonymize` option as a boolean.");if(r(t)){var a=t.config,s=t.sources;if(!(Array.isArray(s)&&s.length>0))return new Error("Must supply `gaPlugins.sources` option with atleast one source.");if(!(Array.isArray(a)&&a.length>0))return new Error("Must supply `gaPlugins.config` option with atleast one config item.");var u=a.map(function(n,t){if(r(n)){if(!e(n.name))return new Error("Must supply `gaPlugins.config["+t+"].name` option as a string.");if(!r(n.options))return new Error("Must supply `gaPlugins.config["+t+"].options` option as an object.");}if(!e(n)&&!r(n))return new Error("Must supply `gaPlugins.config["+t+"]` option as a string.");}).filter(function(n){return n instanceof Error;});if(void 0!==u[0])return u[0];}else if(void 0!==t)return new Error("Must supply `gaPlugins` option as an object.");return"boolean"!=typeof o?new Error("Must supply `respectDNT` option as a boolean."):e(i)?void 0:new Error("Must supply `trackingId` option as a string.");}({anonymize:c,gaPlugins:g,respectDNT:l,trackingId:f});if(y)throw y;if(false){}var m=function(n){return"string"==typeof n?"":","+(r=n.options,e=Math.random().toString(36).substring(2),t=[],JSON.stringify(r,function(n,r){return Array.isArray(r)&&"@@/ga-function"===r[0]?"@@/ga-"+e+"/F"+(t.push(Function.apply(void 0,r[1]))-1):r;}).replace(new RegExp('"@@/ga-'+e+'/F(\\d+)"',"g"),function(n,r){return t[r].toString().replace(/(function) anonymous(\()/g,"$1$2").replace(new RegExp("/\\*``\\*/","g"),"");}).replace(/"(\w+)"\s*:/g,"$1:"));var r,e,t;},w=g&&g.config.map(function(n){return"ga('require','"+function(n){return"string"==typeof n?n:n.name;}(n)+"'"+m(n)+");";}).join(""),d=g&&g.sources.map(function(r){return n.createElement(t,{source:r});}),E=("\nwindow.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;\nga('create','"+f+"','auto');\n"+(w||"")+"\n"+(l?"ga('require','dnt');":"")+"\n"+(c?"ga('set','anonymizeIp',1);":"")+"\n").replace(/\n/g,"");a([n.createElement("script",{dangerouslySetInnerHTML:{__html:E}}),n.createElement(t,{source:"//www.google-analytics.com/analytics.js"}),l&&n.createElement(t,{source:"//storage.googleapis.com/outfox/dnt_min.js"})].concat(d||[]));};

/***/ }),

/***/ "./node_modules/animate.css/animate.css":
/*!**********************************************!*\
  !*** ./node_modules/animate.css/animate.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/animate.css/animate.min.css":
/*!**************************************************!*\
  !*** ./node_modules/animate.css/animate.min.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/balanced-match/index.js":
/*!**********************************************!*\
  !*** ./node_modules/balanced-match/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = balanced;
function balanced(a, b, str) {
  if (a instanceof RegExp) a = maybeMatch(a, str);
  if (b instanceof RegExp) b = maybeMatch(b, str);

  var r = range(a, b, str);

  return r && {
    start: r[0],
    end: r[1],
    pre: str.slice(0, r[0]),
    body: str.slice(r[0] + a.length, r[1]),
    post: str.slice(r[1] + b.length)
  };
}

function maybeMatch(reg, str) {
  var m = str.match(reg);
  return m ? m[0] : null;
}

balanced.range = range;
function range(a, b, str) {
  var begs, beg, left, right, result;
  var ai = str.indexOf(a);
  var bi = str.indexOf(b, ai + 1);
  var i = ai;

  if (ai >= 0 && bi > 0) {
    begs = [];
    left = str.length;

    while (i >= 0 && !result) {
      if (i == ai) {
        begs.push(i);
        ai = str.indexOf(a, i + 1);
      } else if (begs.length == 1) {
        result = [ begs.pop(), bi ];
      } else {
        beg = begs.pop();
        if (beg < left) {
          left = beg;
          right = bi;
        }

        bi = str.indexOf(b, i + 1);
      }

      i = ai < bi && ai >= 0 ? ai : bi;
    }

    if (begs.length) {
      result = [ left, right ];
    }
  }

  return result;
}


/***/ }),

/***/ "./node_modules/brace-expansion/index.js":
/*!***********************************************!*\
  !*** ./node_modules/brace-expansion/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var concatMap = __webpack_require__(/*! concat-map */ "./node_modules/concat-map/index.js");
var balanced = __webpack_require__(/*! balanced-match */ "./node_modules/balanced-match/index.js");

module.exports = expandTop;

var escSlash = '\0SLASH'+Math.random()+'\0';
var escOpen = '\0OPEN'+Math.random()+'\0';
var escClose = '\0CLOSE'+Math.random()+'\0';
var escComma = '\0COMMA'+Math.random()+'\0';
var escPeriod = '\0PERIOD'+Math.random()+'\0';

function numeric(str) {
  return parseInt(str, 10) == str
    ? parseInt(str, 10)
    : str.charCodeAt(0);
}

function escapeBraces(str) {
  return str.split('\\\\').join(escSlash)
            .split('\\{').join(escOpen)
            .split('\\}').join(escClose)
            .split('\\,').join(escComma)
            .split('\\.').join(escPeriod);
}

function unescapeBraces(str) {
  return str.split(escSlash).join('\\')
            .split(escOpen).join('{')
            .split(escClose).join('}')
            .split(escComma).join(',')
            .split(escPeriod).join('.');
}


// Basically just str.split(","), but handling cases
// where we have nested braced sections, which should be
// treated as individual members, like {a,{b,c},d}
function parseCommaParts(str) {
  if (!str)
    return [''];

  var parts = [];
  var m = balanced('{', '}', str);

  if (!m)
    return str.split(',');

  var pre = m.pre;
  var body = m.body;
  var post = m.post;
  var p = pre.split(',');

  p[p.length-1] += '{' + body + '}';
  var postParts = parseCommaParts(post);
  if (post.length) {
    p[p.length-1] += postParts.shift();
    p.push.apply(p, postParts);
  }

  parts.push.apply(parts, p);

  return parts;
}

function expandTop(str) {
  if (!str)
    return [];

  // I don't know why Bash 4.3 does this, but it does.
  // Anything starting with {} will have the first two bytes preserved
  // but *only* at the top level, so {},a}b will not expand to anything,
  // but a{},b}c will be expanded to [a}c,abc].
  // One could argue that this is a bug in Bash, but since the goal of
  // this module is to match Bash's rules, we escape a leading {}
  if (str.substr(0, 2) === '{}') {
    str = '\\{\\}' + str.substr(2);
  }

  return expand(escapeBraces(str), true).map(unescapeBraces);
}

function identity(e) {
  return e;
}

function embrace(str) {
  return '{' + str + '}';
}
function isPadded(el) {
  return /^-?0\d/.test(el);
}

function lte(i, y) {
  return i <= y;
}
function gte(i, y) {
  return i >= y;
}

function expand(str, isTop) {
  var expansions = [];

  var m = balanced('{', '}', str);
  if (!m || /\$$/.test(m.pre)) return [str];

  var isNumericSequence = /^-?\d+\.\.-?\d+(?:\.\.-?\d+)?$/.test(m.body);
  var isAlphaSequence = /^[a-zA-Z]\.\.[a-zA-Z](?:\.\.-?\d+)?$/.test(m.body);
  var isSequence = isNumericSequence || isAlphaSequence;
  var isOptions = m.body.indexOf(',') >= 0;
  if (!isSequence && !isOptions) {
    // {a},b}
    if (m.post.match(/,.*\}/)) {
      str = m.pre + '{' + m.body + escClose + m.post;
      return expand(str);
    }
    return [str];
  }

  var n;
  if (isSequence) {
    n = m.body.split(/\.\./);
  } else {
    n = parseCommaParts(m.body);
    if (n.length === 1) {
      // x{{a,b}}y ==> x{a}y x{b}y
      n = expand(n[0], false).map(embrace);
      if (n.length === 1) {
        var post = m.post.length
          ? expand(m.post, false)
          : [''];
        return post.map(function(p) {
          return m.pre + n[0] + p;
        });
      }
    }
  }

  // at this point, n is the parts, and we know it's not a comma set
  // with a single entry.

  // no need to expand pre, since it is guaranteed to be free of brace-sets
  var pre = m.pre;
  var post = m.post.length
    ? expand(m.post, false)
    : [''];

  var N;

  if (isSequence) {
    var x = numeric(n[0]);
    var y = numeric(n[1]);
    var width = Math.max(n[0].length, n[1].length)
    var incr = n.length == 3
      ? Math.abs(numeric(n[2]))
      : 1;
    var test = lte;
    var reverse = y < x;
    if (reverse) {
      incr *= -1;
      test = gte;
    }
    var pad = n.some(isPadded);

    N = [];

    for (var i = x; test(i, y); i += incr) {
      var c;
      if (isAlphaSequence) {
        c = String.fromCharCode(i);
        if (c === '\\')
          c = '';
      } else {
        c = String(i);
        if (pad) {
          var need = width - c.length;
          if (need > 0) {
            var z = new Array(need + 1).join('0');
            if (i < 0)
              c = '-' + z + c.slice(1);
            else
              c = z + c;
          }
        }
      }
      N.push(c);
    }
  } else {
    N = concatMap(n, function(el) { return expand(el, false) });
  }

  for (var j = 0; j < N.length; j++) {
    for (var k = 0; k < post.length; k++) {
      var expansion = pre + N[j] + post[k];
      if (!isTop || isSequence || expansion)
        expansions.push(expansion);
    }
  }

  return expansions;
}



/***/ }),

/***/ "./node_modules/concat-map/index.js":
/*!******************************************!*\
  !*** ./node_modules/concat-map/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (xs, fn) {
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        var x = fn(xs[i], i);
        if (isArray(x)) res.push.apply(res, x);
        else res.push(x);
    }
    return res;
};

var isArray = Array.isArray || function (xs) {
    return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "./node_modules/detect-passive-events/lib/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafrex/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "./node_modules/emergence.js/src/emergence.js":
/*!****************************************************!*\
  !*** ./node_modules/emergence.js/src/emergence.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  // AMD
  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return factory(root);
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function(root) {

  'use strict';

  var emergence = {};
  var poll, container, throttle, reset, handheld, elemCushion, offsetTop, offsetRight, offsetBottom, offsetLeft;
  var callback = function() {};

  // Browser feature test to include any browser APIs required for >= IE8
  // @return {bool} true if supported, otherwise false
  var cutsTheMustard = function() {
    return 'querySelectorAll' in document ? true : false;
  };

  // Checks if user is on a handheld
  // @return {bool} true if it's a handheld, otherwise false
  var isHandheld = function() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(
      navigator.userAgent
    );
  };

  // Get the offset of a DOM Element
  // @param {DOMElement} elem the container or element
  // @return {int} the top, left, width and height values in pixels
  var getElemOffset = function(elem) {

    // Width and height of container or element
    var w = elem.offsetWidth;
    var h = elem.offsetHeight;

    // Default top and left position of container or element
    var topPos = 0;
    var leftPos = 0;

    // Get total distance of container or element to document's top and left origin
    do {
      if (!isNaN(elem.offsetTop)) {
        topPos += elem.offsetTop;
      }
      if (!isNaN(elem.offsetLeft)) {
        leftPos += elem.offsetLeft;
      }
    } while ((elem = elem.offsetParent) !== null);

    // Return dimensions and position
    return {
      width: w,
      height: h,
      top: topPos,
      left: leftPos
    };
  };

  // Get the custom container size if provided, otherwise the documents
  // @return {int} the width and height in pixels
  var getContainerSize = function(container) {
    var w, h;

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      w = container.clientWidth;
      h = container.clientHeight;
    } else {
      w = window.innerWidth || document.documentElement.clientWidth;
      h = window.innerHeight || document.documentElement.clientHeight;
    }

    return {
      width: w,
      height: h
    };
  };

  // Get the X and Y scroll positions
  // @return {int} the X and Y values in pixels
  var getContainerScroll = function(container) {

    // If custom container is provided in options
    // Else use window or document
    if (container !== window) {
      return {
        x: container.scrollLeft + getElemOffset(container).left,
        y: container.scrollTop + getElemOffset(container).top
      };
    } else {
      return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
      };
    }
  };

  // Check if element's closest parent is hidden (display: none)
  // @param {DOMElement} elem the element
  // @return {bool} true if hidden, false otherwise
  var isHidden = function(elem) {
    return elem.offsetParent === null;
  };

  // Check if element is visible
  // @param {DOMElement} elem the element
  var isVisible = function(elem) {

    // Discontinue if element's closest parent is hidden
    if (isHidden(elem)) {
      return false;
    }

    // Get information from element and container
    var elemOffset = getElemOffset(elem);
    var containerSize = getContainerSize(container);
    var containerScroll = getContainerScroll(container);

    // Determine element size
    var elemWidth = elemOffset.width;
    var elemHeight = elemOffset.height;

    // Determine element position from rect points
    var elemTop = elemOffset.top;
    var elemLeft = elemOffset.left;
    var elemBottom = elemTop + elemHeight;
    var elemRight = elemLeft + elemWidth;

    // Determine boundaries of container and element
    // @return {bool} true if element is found within boundaries, otherwise false
    var checkBoundaries = function() {

      // Determine element boundaries including custom cushion
      var eTop = elemTop + elemHeight * elemCushion;
      var eRight = elemRight - elemWidth * elemCushion;
      var eBottom = elemBottom - elemHeight * elemCushion;
      var eLeft = elemLeft + elemWidth * elemCushion;

      // Determine container boundaries including custom offset
      var cTop = containerScroll.y + offsetTop;
      var cRight = containerScroll.x - offsetRight + containerSize.width;
      var cBottom = containerScroll.y - offsetBottom + containerSize.height;
      var cLeft = containerScroll.x + offsetLeft;

      return (eTop < cBottom && eBottom > cTop && eLeft < cRight && eRight > cLeft);
    };

    return checkBoundaries();
  };

  // Engage emergence through a throttling method for performance
  var emergenceThrottle = function() {
    if (!!poll) {
      return;
    }
    clearTimeout(poll);
    poll = setTimeout(function() {
      emergence.engage();
      poll = null;
    }, throttle);
  };

  // Initialize emergence with options, do feature test and create event listeners
  // @param {Object} options Custom settings
  emergence.init = function(options) {
    options = options || {};

    // Function to return an integer
    var optionInt = function(option, fallback) {
      return parseInt(option || fallback, 10);
    };

    // Function to return a floating point number
    var optionFloat = function(option, fallback) {
      return parseFloat(option || fallback);
    };

    // Default options
    container = options.container || window; // window or document by default
    reset = typeof options.reset !== 'undefined' ? options.reset : true; // true by default
    handheld = typeof options.handheld !== 'undefined' ? options.handheld : true; // true by default
    throttle = optionInt(options.throttle, 250); // 250 by default
    elemCushion = optionFloat(options.elemCushion, 0.15); // 0.15 by default
    offsetTop = optionInt(options.offsetTop, 0); // 0 by default
    offsetRight = optionInt(options.offsetRight, 0); // 0 by default
    offsetBottom = optionInt(options.offsetBottom, 0); // 0 by default
    offsetLeft = optionInt(options.offsetLeft, 0); // 0 by default
    callback = options.callback || callback;

    // If browser doesn't pass feature test
    if (!cutsTheMustard()) {

      // Provide message in console.log
      console.log('Emergence.js is not supported in this browser.');

    }
    // If this is handheld device AND handheld option is true
    // OR not a handheld device
    else if ((isHandheld() && handheld) || !isHandheld()) {

      // Add '.emergence' class to document for conditional CSS
      document.documentElement.className += ' emergence';

      // If browser supports addEventListener
      // Else use attachEvent
      if (window.addEventListener) {

        // Add event listeners for load, scroll and resize events
        window.addEventListener('load', emergenceThrottle, false);
        container.addEventListener('scroll', emergenceThrottle, false);
        container.addEventListener('resize', emergenceThrottle, false);

      } else {

        // Attach events for legacy load method, scroll and resize events
        document.attachEvent('onreadystatechange', function() {
          if (document.readyState === 'complete') { emergenceThrottle(); }
        });
        container.attachEvent('onscroll', emergenceThrottle);
        container.attachEvent('onresize', emergenceThrottle);

      }
    }
  };

  // Engage emergence
  emergence.engage = function() {
    var nodes = document.querySelectorAll('[data-emergence]');
    var length = nodes.length;
    var elem;

    // Loop through objects with data-emergence attribute
    for (var i = 0; i < length; i++) {
      elem = nodes[i];

      // If element is visible
      if (isVisible(elem)) {

        // Change the state of the attribute to 'visible'
        elem.setAttribute('data-emergence', 'visible');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Callback for when element is visible
        callback(elem, 'visible');

      } else if (reset === true) {

        // Else if element is hidden and reset
        // Change the state of the attribute to 'hidden'
        elem.setAttribute('data-emergence', 'hidden');

        // Hack to repaint attribute in IE8
        elem.className = elem.className;

        // Create callback
        callback(elem, 'reset');

      } else if (reset === false) {

        // Else if element is hidden and NOT reset
        // Create callback
        callback(elem, 'noreset');

      }
    }
    
    // If no data-emergence attributes are found
    // Disengage emergence
    if (!length) {
      emergence.disengage();
    }
  };

  // Disengage emergence
  emergence.disengage = function() {

    // If browser supports removeEventListener
    // Else use detachEvent
    if (window.removeEventListener) {

      // Remove event listeners scroll and resize events
      container.removeEventListener('scroll', emergenceThrottle, false);
      container.removeEventListener('resize', emergenceThrottle, false);

    } else {

      // Detach scroll and resize events
      container.detachEvent('onscroll', emergenceThrottle);
      container.detachEvent('onresize', emergenceThrottle);

    }

    // Clear timeout from throttle
    clearTimeout(poll);
  };

  return emergence;
});


/***/ }),

/***/ "./node_modules/font-awesome/css/font-awesome.css":
/*!********************************************************!*\
  !*** ./node_modules/font-awesome/css/font-awesome.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/gatsby-image/index.js":
/*!********************************************!*\
  !*** ./node_modules/gatsby-image/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.default=void 0;var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/gatsby-image/node_modules/prop-types/index.js"));var logDeprecationNotice=function logDeprecationNotice(prop,replacement){if(true){return;}console.log("\n    The \""+prop+"\" prop is now deprecated and will be removed in the next major version\n    of \"gatsby-image\".\n    ");if(replacement){console.log("Please use "+replacement+" instead of \""+prop+"\".");}};// Handle legacy props during their deprecation phase
var convertProps=function convertProps(props){var convertedProps=(0,_extends2.default)({},props);var resolutions=convertedProps.resolutions,sizes=convertedProps.sizes,critical=convertedProps.critical;if(resolutions){convertedProps.fixed=resolutions;delete convertedProps.resolutions;}if(sizes){convertedProps.fluid=sizes;delete convertedProps.sizes;}if(critical){logDeprecationNotice("critical","the native \"loading\" attribute");convertedProps.loading="eager";}// convert fluid & fixed to arrays so we only have to work with arrays
if(convertedProps.fluid){convertedProps.fluid=groupByMedia([].concat(convertedProps.fluid));}if(convertedProps.fixed){convertedProps.fixed=groupByMedia([].concat(convertedProps.fixed));}return convertedProps;};/**
 * Checks if fluid or fixed are art-direction arrays.
 *
 * @param currentData  {{media?: string}[]}   The props to check for images.
 * @return {boolean}
 */var hasArtDirectionSupport=function hasArtDirectionSupport(currentData){return!!currentData&&Array.isArray(currentData)&&currentData.some(function(image){return typeof image.media!=="undefined";});};/**
 * Tries to detect if a media query matches the current viewport.
 * @property media   {{media?: string}}  A media query string.
 * @return {boolean}
 */var matchesMedia=function matchesMedia(_ref){var media=_ref.media;return media?isBrowser&&!!window.matchMedia(media).matches:false;};/**
 * Find the source of an image to use as a key in the image cache.
 * Use `the first image in either `fixed` or `fluid`
 * @param {{fluid: {src: string, media?: string}[], fixed: {src: string, media?: string}[]}} args
 * @return {string}
 */var getImageSrcKey=function getImageSrcKey(_ref2){var fluid=_ref2.fluid,fixed=_ref2.fixed;var data=fluid?getCurrentSrcData(fluid):getCurrentSrcData(fixed);return data.src;};/**
 * Returns the current src - Preferably with art-direction support.
 * @param currentData  {{media?: string}[], maxWidth?: Number, maxHeight?: Number}   The fluid or fixed image array.
 * @return {{src: string, media?: string, maxWidth?: Number, maxHeight?: Number}}
 */var getCurrentSrcData=function getCurrentSrcData(currentData){if(isBrowser&&hasArtDirectionSupport(currentData)){// Do we have an image for the current Viewport?
var foundMedia=currentData.findIndex(matchesMedia);if(foundMedia!==-1){return currentData[foundMedia];}// No media matches, select first element without a media condition
var noMedia=currentData.findIndex(function(image){return typeof image.media==="undefined";});if(noMedia!==-1){return currentData[noMedia];}}// Else return the first image.
return currentData[0];};// Cache if we've seen an image before so we don't bother with
// lazy-loading & fading in on subsequent mounts.
var imageCache=Object.create({});var inImageCache=function inImageCache(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);return imageCache[src]||false;};var activateCacheForImage=function activateCacheForImage(props){var convertedProps=convertProps(props);// Find src
var src=getImageSrcKey(convertedProps);imageCache[src]=true;};// Native lazy-loading support: https://addyosmani.com/blog/lazy-loading/
var hasNativeLazyLoadSupport=typeof HTMLImageElement!=="undefined"&&"loading"in HTMLImageElement.prototype;var isBrowser=typeof window!=="undefined";var hasIOSupport=isBrowser&&window.IntersectionObserver;var io;var listeners=new WeakMap();function getIO(){if(typeof io==="undefined"&&typeof window!=="undefined"&&window.IntersectionObserver){io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(listeners.has(entry.target)){var cb=listeners.get(entry.target);// Edge doesn't currently support isIntersecting, so also test for an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(entry.target);listeners.delete(entry.target);cb();}}});},{rootMargin:"200px"});}return io;}function generateImageSources(imageVariants){return imageVariants.map(function(_ref3){var src=_ref3.src,srcSet=_ref3.srcSet,srcSetWebp=_ref3.srcSetWebp,media=_ref3.media,sizes=_ref3.sizes;return/*#__PURE__*/_react.default.createElement(_react.default.Fragment,{key:src},srcSetWebp&&/*#__PURE__*/_react.default.createElement("source",{type:"image/webp",media:media,srcSet:srcSetWebp,sizes:sizes}),/*#__PURE__*/_react.default.createElement("source",{media:media,srcSet:srcSet,sizes:sizes}));});}// Return an array ordered by elements having a media prop, does not use
// native sort, as a stable sort is not guaranteed by all browsers/versions
function groupByMedia(imageVariants){var withMedia=[];var without=[];imageVariants.forEach(function(variant){return(variant.media?withMedia:without).push(variant);});if(without.length>1&&"production"!=="production"){console.warn("We've found "+without.length+" sources without a media property. They might be ignored by the browser, see: https://www.gatsbyjs.org/packages/gatsby-image/#art-directing-multiple-images");}return[].concat(withMedia,without);}function generateTracedSVGSources(imageVariants){return imageVariants.map(function(_ref4){var src=_ref4.src,media=_ref4.media,tracedSVG=_ref4.tracedSVG;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:tracedSVG});});}function generateBase64Sources(imageVariants){return imageVariants.map(function(_ref5){var src=_ref5.src,media=_ref5.media,base64=_ref5.base64;return/*#__PURE__*/_react.default.createElement("source",{key:src,media:media,srcSet:base64});});}function generateNoscriptSource(_ref6,isWebp){var srcSet=_ref6.srcSet,srcSetWebp=_ref6.srcSetWebp,media=_ref6.media,sizes=_ref6.sizes;var src=isWebp?srcSetWebp:srcSet;var mediaAttr=media?"media=\""+media+"\" ":"";var typeAttr=isWebp?"type='image/webp' ":"";var sizesAttr=sizes?"sizes=\""+sizes+"\" ":"";return"<source "+typeAttr+mediaAttr+"srcset=\""+src+"\" "+sizesAttr+"/>";}function generateNoscriptSources(imageVariants){return imageVariants.map(function(variant){return(variant.srcSetWebp?generateNoscriptSource(variant,true):"")+generateNoscriptSource(variant);}).join("");}var listenToIntersections=function listenToIntersections(el,cb){var observer=getIO();if(observer){observer.observe(el);listeners.set(el,cb);}return function(){observer.unobserve(el);listeners.delete(el);};};var noscriptImg=function noscriptImg(props){// Check if prop exists before adding each attribute to the string output below to prevent
// HTML validation issues caused by empty values like width="" and height=""
var src=props.src?"src=\""+props.src+"\" ":"src=\"\" ";// required attribute
var sizes=props.sizes?"sizes=\""+props.sizes+"\" ":"";var srcSet=props.srcSet?"srcset=\""+props.srcSet+"\" ":"";var title=props.title?"title=\""+props.title+"\" ":"";var alt=props.alt?"alt=\""+props.alt+"\" ":"alt=\"\" ";// required attribute
var width=props.width?"width=\""+props.width+"\" ":"";var height=props.height?"height=\""+props.height+"\" ":"";var crossOrigin=props.crossOrigin?"crossorigin=\""+props.crossOrigin+"\" ":"";var loading=props.loading?"loading=\""+props.loading+"\" ":"";var draggable=props.draggable?"draggable=\""+props.draggable+"\" ":"";var sources=generateNoscriptSources(props.imageVariants);return"<picture>"+sources+"<img "+loading+width+height+sizes+srcSet+src+alt+title+crossOrigin+draggable+"style=\"position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center\"/></picture>";};// Earlier versions of gatsby-image during the 2.x cycle did not wrap
// the `Img` component in a `picture` element. This maintains compatibility
// until a breaking change can be introduced in the next major release
var Placeholder=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var src=props.src,imageVariants=props.imageVariants,generateSources=props.generateSources,spreadProps=props.spreadProps,ariaHidden=props.ariaHidden;var baseImage=/*#__PURE__*/_react.default.createElement(Img,(0,_extends2.default)({ref:ref,src:src},spreadProps,{ariaHidden:ariaHidden}));return imageVariants.length>1?/*#__PURE__*/_react.default.createElement("picture",null,generateSources(imageVariants),baseImage):baseImage;});var Img=/*#__PURE__*/_react.default.forwardRef(function(props,ref){var sizes=props.sizes,srcSet=props.srcSet,src=props.src,style=props.style,onLoad=props.onLoad,onError=props.onError,loading=props.loading,draggable=props.draggable,ariaHidden=props.ariaHidden,otherProps=(0,_objectWithoutPropertiesLoose2.default)(props,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return/*#__PURE__*/_react.default.createElement("img",(0,_extends2.default)({"aria-hidden":ariaHidden,sizes:sizes,srcSet:srcSet,src:src},otherProps,{onLoad:onLoad,onError:onError,ref:ref,loading:loading,draggable:draggable,style:(0,_extends2.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},style)}));});Img.propTypes={style:_propTypes.default.object,onError:_propTypes.default.func,onLoad:_propTypes.default.func};var Image=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(Image,_React$Component);function Image(props){var _this;_this=_React$Component.call(this,props)||this;// If this image has already been loaded before then we can assume it's
// already in the browser cache so it's cheap to just show directly.
_this.seenBefore=isBrowser&&inImageCache(props);_this.isCritical=props.loading==="eager"||props.critical;_this.addNoScript=!(_this.isCritical&&!props.fadeIn);_this.useIOSupport=!hasNativeLazyLoadSupport&&hasIOSupport&&!_this.isCritical&&!_this.seenBefore;var isVisible=_this.isCritical||isBrowser&&(hasNativeLazyLoadSupport||!_this.useIOSupport);_this.state={isVisible:isVisible,imgLoaded:false,imgCached:false,fadeIn:!_this.seenBefore&&props.fadeIn};_this.imageRef=/*#__PURE__*/_react.default.createRef();_this.placeholderRef=props.placeholderRef||/*#__PURE__*/_react.default.createRef();_this.handleImageLoaded=_this.handleImageLoaded.bind((0,_assertThisInitialized2.default)(_this));_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=Image.prototype;_proto.componentDidMount=function componentDidMount(){if(this.state.isVisible&&typeof this.props.onStartLoad==="function"){this.props.onStartLoad({wasCached:inImageCache(this.props)});}if(this.isCritical){var img=this.imageRef.current;if(img&&img.complete){this.handleImageLoaded();}}};_proto.componentWillUnmount=function componentWillUnmount(){if(this.cleanUpListeners){this.cleanUpListeners();}}// Specific to IntersectionObserver based lazy-load support
;_proto.handleRef=function handleRef(ref){var _this2=this;if(this.useIOSupport&&ref){this.cleanUpListeners=listenToIntersections(ref,function(){var imageInCache=inImageCache(_this2.props);if(!_this2.state.isVisible&&typeof _this2.props.onStartLoad==="function"){_this2.props.onStartLoad({wasCached:imageInCache});}// imgCached and imgLoaded must update after isVisible,
// Once isVisible is true, imageRef becomes accessible, which imgCached needs access to.
// imgLoaded and imgCached are in a 2nd setState call to be changed together,
// avoiding initiating unnecessary animation frames from style changes.
_this2.setState({isVisible:true},function(){_this2.setState({imgLoaded:imageInCache,// `currentSrc` should be a string, but can be `undefined` in IE,
// !! operator validates the value is not undefined/null/""
// for lazyloaded components this might be null
// TODO fix imgCached behaviour as it's now false when it's lazyloaded
imgCached:!!(_this2.imageRef.current&&_this2.imageRef.current.currentSrc)});});});}};_proto.handleImageLoaded=function handleImageLoaded(){activateCacheForImage(this.props);this.setState({imgLoaded:true});if(this.props.onLoad){this.props.onLoad();}};_proto.render=function render(){var _convertProps=convertProps(this.props),title=_convertProps.title,alt=_convertProps.alt,className=_convertProps.className,_convertProps$style=_convertProps.style,style=_convertProps$style===void 0?{}:_convertProps$style,_convertProps$imgStyl=_convertProps.imgStyle,imgStyle=_convertProps$imgStyl===void 0?{}:_convertProps$imgStyl,_convertProps$placeho=_convertProps.placeholderStyle,placeholderStyle=_convertProps$placeho===void 0?{}:_convertProps$placeho,placeholderClassName=_convertProps.placeholderClassName,fluid=_convertProps.fluid,fixed=_convertProps.fixed,backgroundColor=_convertProps.backgroundColor,durationFadeIn=_convertProps.durationFadeIn,Tag=_convertProps.Tag,itemProp=_convertProps.itemProp,loading=_convertProps.loading,draggable=_convertProps.draggable;var shouldReveal=this.state.fadeIn===false||this.state.imgLoaded;var shouldFadeIn=this.state.fadeIn===true&&!this.state.imgCached;var imageStyle=(0,_extends2.default)({opacity:shouldReveal?1:0,transition:shouldFadeIn?"opacity "+durationFadeIn+"ms":"none"},imgStyle);var bgColor=typeof backgroundColor==="boolean"?"lightgray":backgroundColor;var delayHideStyle={transitionDelay:durationFadeIn+"ms"};var imagePlaceholderStyle=(0,_extends2.default)({opacity:this.state.imgLoaded?0:1},shouldFadeIn&&delayHideStyle,imgStyle,placeholderStyle);var placeholderImageProps={title:title,alt:!this.state.isVisible?alt:"",style:imagePlaceholderStyle,className:placeholderClassName,itemProp:itemProp};if(fluid){var imageVariants=fluid;var image=getCurrentSrcData(fluid);return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:(0,_extends2.default)({position:"relative",overflow:"hidden",maxWidth:image.maxWidth?image.maxWidth+"px":null,maxHeight:image.maxHeight?image.maxHeight+"px":null},style),ref:this.handleRef,key:"fluid-"+JSON.stringify(image.srcSet)},/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,style:{width:"100%",paddingBottom:100/image.aspectRatio+"%"}}),bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,position:"absolute",top:0,bottom:0,opacity:!this.state.imgLoaded?1:0,right:0,left:0},shouldFadeIn&&delayHideStyle)}),image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.base64,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateBase64Sources}),image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,sizes:image.sizes,src:image.src,crossOrigin:this.props.crossOrigin,srcSet:image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},image,{imageVariants:imageVariants}))}}));}if(fixed){var _imageVariants=fixed;var _image=getCurrentSrcData(fixed);var divStyle=(0,_extends2.default)({position:"relative",overflow:"hidden",display:"inline-block",width:_image.width,height:_image.height},style);if(style.display==="inherit"){delete divStyle.display;}return/*#__PURE__*/_react.default.createElement(Tag,{className:(className?className:"")+" gatsby-image-wrapper",style:divStyle,ref:this.handleRef,key:"fixed-"+JSON.stringify(_image.srcSet)},bgColor&&/*#__PURE__*/_react.default.createElement(Tag,{"aria-hidden":true,title:title,style:(0,_extends2.default)({backgroundColor:bgColor,width:_image.width,opacity:!this.state.imgLoaded?1:0,height:_image.height},shouldFadeIn&&delayHideStyle)}),_image.base64&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:_image.base64,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateBase64Sources}),_image.tracedSVG&&/*#__PURE__*/_react.default.createElement(Placeholder,{ariaHidden:true,ref:this.placeholderRef,src:_image.tracedSVG,spreadProps:placeholderImageProps,imageVariants:_imageVariants,generateSources:generateTracedSVGSources}),this.state.isVisible&&/*#__PURE__*/_react.default.createElement("picture",null,generateImageSources(_imageVariants),/*#__PURE__*/_react.default.createElement(Img,{alt:alt,title:title,width:_image.width,height:_image.height,sizes:_image.sizes,src:_image.src,crossOrigin:this.props.crossOrigin,srcSet:_image.srcSet,style:imageStyle,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:itemProp,loading:loading,draggable:draggable})),this.addNoScript&&/*#__PURE__*/_react.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:noscriptImg((0,_extends2.default)({alt:alt,title:title,loading:loading},_image,{imageVariants:_imageVariants}))}}));}return null;};return Image;}(_react.default.Component);Image.defaultProps={fadeIn:true,durationFadeIn:500,alt:"",Tag:"div",// We set it to `lazy` by default because it's best to default to a performant
// setting and let the user "opt out" to `eager`
loading:"lazy"};var fixedObject=_propTypes.default.shape({width:_propTypes.default.number.isRequired,height:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string});var fluidObject=_propTypes.default.shape({aspectRatio:_propTypes.default.number.isRequired,src:_propTypes.default.string.isRequired,srcSet:_propTypes.default.string.isRequired,sizes:_propTypes.default.string.isRequired,base64:_propTypes.default.string,tracedSVG:_propTypes.default.string,srcWebp:_propTypes.default.string,srcSetWebp:_propTypes.default.string,media:_propTypes.default.string,maxWidth:_propTypes.default.number,maxHeight:_propTypes.default.number});// If you modify these propTypes, please don't forget to update following files as well:
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/index.d.ts
// https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-image/README.md#gatsby-image-props
// https://github.com/gatsbyjs/gatsby/blob/master/docs/docs/gatsby-image.md#gatsby-image-props
Image.propTypes={resolutions:fixedObject,sizes:fluidObject,fixed:_propTypes.default.oneOfType([fixedObject,_propTypes.default.arrayOf(fixedObject)]),fluid:_propTypes.default.oneOfType([fluidObject,_propTypes.default.arrayOf(fluidObject)]),fadeIn:_propTypes.default.bool,durationFadeIn:_propTypes.default.number,title:_propTypes.default.string,alt:_propTypes.default.string,className:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.object]),// Support Glamor's css prop.
critical:_propTypes.default.bool,crossOrigin:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),style:_propTypes.default.object,imgStyle:_propTypes.default.object,placeholderStyle:_propTypes.default.object,placeholderClassName:_propTypes.default.string,backgroundColor:_propTypes.default.oneOfType([_propTypes.default.string,_propTypes.default.bool]),onLoad:_propTypes.default.func,onError:_propTypes.default.func,onStartLoad:_propTypes.default.func,Tag:_propTypes.default.string,itemProp:_propTypes.default.string,loading:_propTypes.default.oneOf(["auto","lazy","eager"]),draggable:_propTypes.default.bool};var _default=Image;exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-image/node_modules/prop-types/factoryWithThrowingShims.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/gatsby-image/node_modules/prop-types/factoryWithThrowingShims.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/gatsby-image/node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){// It is still safe when called from React.
return;}var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;};shim.isRequired=shim;function getShim(){return shim;};// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),

/***/ "./node_modules/gatsby-image/node_modules/prop-types/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-image/node_modules/prop-types/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(false){ var throwOnDirectAccess, ReactIs; }else{// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
module.exports=__webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/gatsby-image/node_modules/prop-types/factoryWithThrowingShims.js")();}

/***/ }),

/***/ "./node_modules/gatsby-image/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/gatsby-image/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.withPrefix=withPrefix;exports.withAssetPrefix=withAssetPrefix;exports.navigateTo=exports.replace=exports.push=exports.navigate=exports.default=void 0;var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js"));var _assertThisInitialized2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _propTypes=_interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/gatsby-link/node_modules/prop-types/index.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _router=__webpack_require__(/*! @reach/router */ "@reach/router");var _utils=__webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");var _parsePath=__webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");exports.parsePath=_parsePath.parsePath;var isAbsolutePath=function isAbsolutePath(path){return path===null||path===void 0?void 0:path.startsWith("/");};function withPrefix(path,prefix){var _ref,_prefix;if(prefix===void 0){prefix=getGlobalBasePrefix();}if(!isLocalLink(path)){return path;}if(path.startsWith("./")||path.startsWith("../")){return path;}var base=(_ref=(_prefix=prefix)!==null&&_prefix!==void 0?_prefix:getGlobalPathPrefix())!==null&&_ref!==void 0?_ref:"/";return""+((base===null||base===void 0?void 0:base.endsWith("/"))?base.slice(0,-1):base)+(path.startsWith("/")?path:"/"+path);}// These global values are wrapped in typeof clauses to ensure the values exist.
// This is especially problematic in unit testing of this component.
var getGlobalPathPrefix=function getGlobalPathPrefix(){return  false?undefined:"";};var getGlobalBasePrefix=function getGlobalBasePrefix(){return  false?undefined:"";};var isLocalLink=function isLocalLink(path){return path&&!path.startsWith("http://")&&!path.startsWith("https://")&&!path.startsWith("//");};function withAssetPrefix(path){return withPrefix(path,getGlobalPathPrefix());}function absolutify(path,current){// If it's already absolute, return as-is
if(isAbsolutePath(path)){return path;}return(0,_utils.resolve)(path,current);}var rewriteLinkPath=function rewriteLinkPath(path,relativeTo){if(typeof path==="number"){return path;}if(!isLocalLink(path)){return path;}return isAbsolutePath(path)?withPrefix(path):absolutify(path,relativeTo);};var NavLinkPropTypes={activeClassName:_propTypes.default.string,activeStyle:_propTypes.default.object,partiallyActive:_propTypes.default.bool};// Set up IntersectionObserver
var createIntersectionObserver=function createIntersectionObserver(el,cb){var io=new window.IntersectionObserver(function(entries){entries.forEach(function(entry){if(el===entry.target){// Check if element is within viewport, remove listener, destroy observer, and run link callback.
// MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
if(entry.isIntersecting||entry.intersectionRatio>0){io.unobserve(el);io.disconnect();cb();}}});});// Add element to the observer
io.observe(el);return{instance:io,el:el};};var GatsbyLink=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2.default)(GatsbyLink,_React$Component);function GatsbyLink(props){var _this;_this=_React$Component.call(this,props)||this;// Default to no support for IntersectionObserver
_this.defaultGetProps=function(_ref2){var isPartiallyCurrent=_ref2.isPartiallyCurrent,isCurrent=_ref2.isCurrent;if(_this.props.partiallyActive?isPartiallyCurrent:isCurrent){return{className:[_this.props.className,_this.props.activeClassName].filter(Boolean).join(" "),style:(0,_extends2.default)({},_this.props.style,_this.props.activeStyle)};}return null;};var IOSupported=false;if(typeof window!=="undefined"&&window.IntersectionObserver){IOSupported=true;}_this.state={IOSupported:IOSupported};_this.handleRef=_this.handleRef.bind((0,_assertThisInitialized2.default)(_this));return _this;}var _proto=GatsbyLink.prototype;_proto.componentDidUpdate=function componentDidUpdate(prevProps,prevState){// Preserve non IO functionality if no support
if(this.props.to!==prevProps.to&&!this.state.IOSupported){___loader.enqueue((0,_parsePath.parsePath)(rewriteLinkPath(this.props.to,window.location.pathname)).pathname);}};_proto.componentDidMount=function componentDidMount(){// Preserve non IO functionality if no support
if(!this.state.IOSupported){___loader.enqueue((0,_parsePath.parsePath)(rewriteLinkPath(this.props.to,window.location.pathname)).pathname);}};_proto.componentWillUnmount=function componentWillUnmount(){if(!this.io){return;}var _this$io=this.io,instance=_this$io.instance,el=_this$io.el;instance.unobserve(el);instance.disconnect();};_proto.handleRef=function handleRef(ref){var _this2=this;if(this.props.innerRef&&this.props.innerRef.hasOwnProperty("current")){this.props.innerRef.current=ref;}else if(this.props.innerRef){this.props.innerRef(ref);}if(this.state.IOSupported&&ref){// If IO supported and element reference found, setup Observer functionality
this.io=createIntersectionObserver(ref,function(){___loader.enqueue((0,_parsePath.parsePath)(rewriteLinkPath(_this2.props.to,window.location.pathname)).pathname);});}};_proto.render=function render(){var _this3=this;var _this$props=this.props,to=_this$props.to,_this$props$getProps=_this$props.getProps,getProps=_this$props$getProps===void 0?this.defaultGetProps:_this$props$getProps,_onClick=_this$props.onClick,_onMouseEnter=_this$props.onMouseEnter,$activeClassName=_this$props.activeClassName,$activeStyle=_this$props.activeStyle,$innerRef=_this$props.innerRef,partiallyActive=_this$props.partiallyActive,state=_this$props.state,replace=_this$props.replace,rest=(0,_objectWithoutPropertiesLoose2.default)(_this$props,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","partiallyActive","state","replace"]);if(false){}return/*#__PURE__*/_react.default.createElement(_router.Location,null,function(_ref3){var location=_ref3.location;var prefixedTo=rewriteLinkPath(to,location.pathname);return isLocalLink(prefixedTo)?/*#__PURE__*/_react.default.createElement(_router.Link,(0,_extends2.default)({to:prefixedTo,state:state,getProps:getProps,innerRef:_this3.handleRef,onMouseEnter:function onMouseEnter(e){if(_onMouseEnter){_onMouseEnter(e);}___loader.hovering((0,_parsePath.parsePath)(prefixedTo).pathname);},onClick:function onClick(e){if(_onClick){_onClick(e);}if(e.button===0&&// ignore right clicks
!_this3.props.target&&// let browser handle "target=_blank"
!e.defaultPrevented&&// onClick prevented default
!e.metaKey&&// ignore clicks with modifier keys...
!e.altKey&&!e.ctrlKey&&!e.shiftKey){e.preventDefault();var shouldReplace=replace;var isCurrent=encodeURI(prefixedTo)===window.location.pathname;if(typeof replace!=="boolean"&&isCurrent){shouldReplace=true;}// Make sure the necessary scripts and data are
// loaded before continuing.
window.___navigate(prefixedTo,{state:state,replace:shouldReplace});}return true;}},rest)):/*#__PURE__*/_react.default.createElement("a",(0,_extends2.default)({href:prefixedTo},rest));});};return GatsbyLink;}(_react.default.Component);GatsbyLink.propTypes=(0,_extends2.default)({},NavLinkPropTypes,{onClick:_propTypes.default.func,to:_propTypes.default.string.isRequired,replace:_propTypes.default.bool,state:_propTypes.default.object});var showDeprecationWarning=function showDeprecationWarning(functionName,altFunctionName,version){return console.warn("The \""+functionName+"\" method is now deprecated and will be removed in Gatsby v"+version+". Please use \""+altFunctionName+"\" instead.");};var _default=/*#__PURE__*/_react.default.forwardRef(function(props,ref){return/*#__PURE__*/_react.default.createElement(GatsbyLink,(0,_extends2.default)({innerRef:ref},props));});exports.default=_default;var navigate=function navigate(to,options){window.___navigate(rewriteLinkPath(to,window.location.pathname),options);};exports.navigate=navigate;var push=function push(to){showDeprecationWarning("push","navigate",3);window.___push(rewriteLinkPath(to,window.location.pathname));};exports.push=push;var replace=function replace(to){showDeprecationWarning("replace","navigate",3);window.___replace(rewriteLinkPath(to,window.location.pathname));};// TODO: Remove navigateTo for Gatsby v3
exports.replace=replace;var navigateTo=function navigateTo(to){showDeprecationWarning("navigateTo","navigate",3);return push(to);};exports.navigateTo=navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/node_modules/prop-types/factoryWithThrowingShims.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/gatsby-link/node_modules/prop-types/factoryWithThrowingShims.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ReactPropTypesSecret=__webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/gatsby-link/node_modules/prop-types/lib/ReactPropTypesSecret.js");function emptyFunction(){}function emptyFunctionWithReset(){}emptyFunctionWithReset.resetWarningCache=emptyFunction;module.exports=function(){function shim(props,propName,componentName,location,propFullName,secret){if(secret===ReactPropTypesSecret){// It is still safe when called from React.
return;}var err=new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. '+'Use PropTypes.checkPropTypes() to call them. '+'Read more at http://fb.me/use-check-prop-types');err.name='Invariant Violation';throw err;};shim.isRequired=shim;function getShim(){return shim;};// Important!
// Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
var ReactPropTypes={array:shim,bool:shim,func:shim,number:shim,object:shim,string:shim,symbol:shim,any:shim,arrayOf:getShim,element:shim,elementType:shim,instanceOf:getShim,node:shim,objectOf:getShim,oneOf:getShim,oneOfType:getShim,shape:getShim,exact:getShim,checkPropTypes:emptyFunctionWithReset,resetWarningCache:emptyFunction};ReactPropTypes.PropTypes=ReactPropTypes;return ReactPropTypes;};

/***/ }),

/***/ "./node_modules/gatsby-link/node_modules/prop-types/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-link/node_modules/prop-types/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */if(false){ var throwOnDirectAccess, ReactIs; }else{// By explicitly using `prop-types` you are opting into new production behavior.
// http://fb.me/prop-types-in-prod
module.exports=__webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/gatsby-link/node_modules/prop-types/factoryWithThrowingShims.js")();}

/***/ }),

/***/ "./node_modules/gatsby-link/node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/gatsby-link/node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ReactPropTypesSecret='SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';module.exports=ReactPropTypesSecret;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.parsePath=parsePath;function parsePath(path){var pathname=path||"/";var search="";var hash="";var hashIndex=pathname.indexOf("#");if(hashIndex!==-1){hash=pathname.substr(hashIndex);pathname=pathname.substr(0,hashIndex);}var searchIndex=pathname.indexOf("?");if(searchIndex!==-1){search=pathname.substr(searchIndex);pathname=pathname.substr(0,searchIndex);}return{pathname:pathname,search:search==="?"?"":search,hash:hash==="#"?"":hash};}

/***/ }),

/***/ "./node_modules/gatsby-plugin-google-fonts/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-google-fonts/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _react=__webpack_require__(/*! react */ "react");var _react2=_interopRequireDefault(_react);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}var format=function format(string){return string.split(' ').map(function(s){return s.replace(/^\w/,function(s){return s.toUpperCase();});}).join(' ');};var getFonts=function getFonts(options){return options.fonts.map(format).join('|').replace(/ /g,'+');};function getDisplay(options){return options.display?'&display='+options.display:'';}exports.onRenderBody=function(_ref,options){var setHeadComponents=_ref.setHeadComponents;var link='https://fonts.googleapis.com/css?family='+getFonts(options)+getDisplay(options);setHeadComponents([_react2.default.createElement('link',{key:'fonts',href:link,rel:'stylesheet'})]);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _path=_interopRequireDefault(__webpack_require__(/*! path */ "path"));exports.favicons=[{src:"favicon-32x32.png",sizes:"32x32",type:"image/png"}];// default icons for generating icons
exports.defaultIcons=[{src:"icons/icon-48x48.png",sizes:"48x48",type:"image/png"},{src:"icons/icon-72x72.png",sizes:"72x72",type:"image/png"},{src:"icons/icon-96x96.png",sizes:"96x96",type:"image/png"},{src:"icons/icon-144x144.png",sizes:"144x144",type:"image/png"},{src:"icons/icon-192x192.png",sizes:"192x192",type:"image/png"},{src:"icons/icon-256x256.png",sizes:"256x256",type:"image/png"},{src:"icons/icon-384x384.png",sizes:"384x384",type:"image/png"},{src:"icons/icon-512x512.png",sizes:"512x512",type:"image/png"}];/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */exports.doesIconExist=function doesIconExist(srcIcon){try{return _fs.default.statSync(srcIcon).isFile();}catch(e){if(e.code!=="ENOENT"){throw e;}return false;}};/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */exports.addDigestToPath=function(path,digest,method){if(method==="name"){var parsedPath=_path.default.parse(path);return parsedPath.dir+"/"+parsedPath.name+"-"+digest+parsedPath.ext;}if(method==="query"){return path+"?v="+digest;}return path;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _interopRequireWildcard=__webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");var React=_interopRequireWildcard(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _common=__webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");var _getManifestPathname=_interopRequireDefault(__webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js"));// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,_ref2){var setHeadComponents=_ref.setHeadComponents,_ref$pathname=_ref.pathname,pathname=_ref$pathname===void 0?"/":_ref$pathname;var localize=_ref2.localize,legacy=_ref2.legacy,cacheBusting=_ref2.cache_busting_mode,cacheDigest=_ref2.cacheDigest,icon=_ref2.icon,pluginIcons=_ref2.icons,insertFaviconLinkTag=_ref2.include_favicon,insertMetaTag=_ref2.theme_color_in_head,theme_color=_ref2.theme_color,crossOrigin=_ref2.crossOrigin;// We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.
var headComponents=[];var srcIconExists=!!icon;var icons=pluginIcons||_common.defaultIcons;var manifestFileName=(0,_getManifestPathname.default)(pathname,localize);// If icons were generated, also add a favicon link.
if(srcIconExists){if(insertFaviconLinkTag){_common.favicons.forEach(function(favicon){headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-icon-link",rel:"icon",href:withPrefix((0,_common.addDigestToPath)(favicon.src,cacheDigest,cacheBusting))}));});}}// Add manifest link tag.
headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-link",rel:"manifest",href:withPrefix("/"+manifestFileName),crossOrigin:crossOrigin}));// The user has an option to opt out of the theme_color meta tag being inserted into the head.
if(theme_color&&insertMetaTag){headComponents.push(/*#__PURE__*/React.createElement("meta",{key:"gatsby-plugin-manifest-meta",name:"theme-color",content:theme_color}));}if(legacy){icons.forEach(function(icon){headComponents.push(/*#__PURE__*/React.createElement("link",{key:"gatsby-plugin-manifest-apple-touch-icon-"+icon.sizes,rel:"apple-touch-icon",sizes:icon.sizes,href:withPrefix((0,_common.addDigestToPath)(icon.src,cacheDigest,srcIconExists?cacheBusting:"none"))}));});}setHeadComponents(headComponents);return true;};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.default=void 0;/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @return string
 */var _default=function _default(pathname,localizedManifests){var defaultFilename="manifest.webmanifest";if(!Array.isArray(localizedManifests)){return defaultFilename;}var localizedManifest=localizedManifests.find(function(app){return pathname.startsWith(app.start_url);});if(!localizedManifest){return defaultFilename;}return"manifest_"+localizedManifest.lang+".webmanifest";};exports.default=_default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/app-shell.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/app-shell.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports["default"]=void 0;var _inheritsLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var AppShell=/*#__PURE__*/function(_React$Component){(0,_inheritsLoose2["default"])(AppShell,_React$Component);function AppShell(){return _React$Component.apply(this,arguments)||this;}var _proto=AppShell.prototype;_proto.render=function render(){return _react["default"].createElement(_react["default"].Fragment,null);};return AppShell;}(_react["default"].Component);var _default=AppShell;exports["default"]=_default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onPreRenderHTML=void 0;var onPreRenderHTML=function onPreRenderHTML(_ref){var getHeadComponents=_ref.getHeadComponents,pathname=_ref.pathname,replaceHeadComponents=_ref.replaceHeadComponents;if(pathname!=="/offline-plugin-app-shell-fallback/")return;var headComponents=getHeadComponents();var filteredHeadComponents=headComponents.filter(function(_ref2){var type=_ref2.type,props=_ref2.props;return!(type==="link"&&props.as==="fetch"&&props.rel==="preload"&&(props.href.startsWith("/static/d/")||props.href.startsWith("/page-data/")));});replaceHeadComponents(filteredHeadComponents);};exports.onPreRenderHTML=onPreRenderHTML;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.onRenderBody=void 0;var _reactHelmet=__webpack_require__(/*! react-helmet */ "react-helmet");var onRenderBody=function onRenderBody(_ref){var setHeadComponents=_ref.setHeadComponents,setHtmlAttributes=_ref.setHtmlAttributes,setBodyAttributes=_ref.setBodyAttributes;var helmet=_reactHelmet.Helmet.renderStatic();// These action functions were added partway through the Gatsby 1.x cycle.
if(setHtmlAttributes){setHtmlAttributes(helmet.htmlAttributes.toComponent());}if(setBodyAttributes){setBodyAttributes(helmet.bodyAttributes.toComponent());}setHeadComponents([helmet.title.toComponent(),helmet.link.toComponent(),helmet.meta.toComponent(),helmet.noscript.toComponent(),helmet.script.toComponent(),helmet.style.toComponent(),helmet.base.toComponent()]);};exports.onRenderBody=onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js"));var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _gatsby=__webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");var _internals=__webpack_require__(/*! ./internals */ "./node_modules/gatsby-plugin-sitemap/internals.js");// TODO: remove for v3
var withPrefix=_gatsby.withAssetPrefix||_gatsby.withPrefix;exports.onRenderBody=function(_ref,pluginOptions){var setHeadComponents=_ref.setHeadComponents;var _defaultOptions$plugi=(0,_extends2.default)({},_internals.defaultOptions,pluginOptions),output=_defaultOptions$plugi.output,createLinkInHead=_defaultOptions$plugi.createLinkInHead;if(!createLinkInHead){return;}if(output.charAt(0)!=="/"){output="/"+output;}setHeadComponents([/*#__PURE__*/_react.default.createElement("link",{key:"gatsby-plugin-sitemap",rel:"sitemap",type:"application/xml",href:withPrefix(output)})]);};

/***/ }),

/***/ "./node_modules/gatsby-plugin-sitemap/internals.js":
/*!*********************************************************!*\
  !*** ./node_modules/gatsby-plugin-sitemap/internals.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");exports.__esModule=true;exports.filterQuery=filterQuery;exports.defaultOptions=exports.renameFile=exports.writeFile=exports.withoutTrailingSlash=void 0;var _extends2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js"));var _objectWithoutPropertiesLoose2=_interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));var _fs=_interopRequireDefault(__webpack_require__(/*! fs */ "fs"));var _pify=_interopRequireDefault(__webpack_require__(/*! pify */ "./node_modules/pify/index.js"));var _minimatch=_interopRequireDefault(__webpack_require__(/*! minimatch */ "./node_modules/minimatch/minimatch.js"));var withoutTrailingSlash=function withoutTrailingSlash(path){return path==="/"?path:path.replace(/\/$/,"");};exports.withoutTrailingSlash=withoutTrailingSlash;var writeFile=(0,_pify.default)(_fs.default.writeFile);exports.writeFile=writeFile;var renameFile=(0,_pify.default)(_fs.default.rename);exports.renameFile=renameFile;function filterQuery(results,excludes,pathPrefix,resolveSiteUrl){var _allSitePage;if(resolveSiteUrl===void 0){resolveSiteUrl=defaultOptions.resolveSiteUrl;}var errors=results.errors,data=results.data;if(errors){throw new Error(errors.join(", "));}var allSitePage=data.allSitePage,otherData=(0,_objectWithoutPropertiesLoose2.default)(data,["allSitePage"]);var _getNodes=getNodes(allSitePage),allPages=_getNodes.allPages,originalType=_getNodes.originalType;// Removing excluded paths
allPages=allPages.filter(function(page){return!excludes.some(function(excludedRoute){return(0,_minimatch.default)(withoutTrailingSlash(page.path),withoutTrailingSlash(excludedRoute));});});// Add path prefix
allPages=allPages.map(function(page){page.path=(pathPrefix+page.path).replace(/^\/\//g,"/");return page;});// siteUrl Validation
var siteUrl=resolveSiteUrl(data);if(!siteUrl||siteUrl.trim().length==0){throw new Error("SiteMetaData 'siteUrl' property is required and cannot be left empty. Check out the documentation to see a working example: https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/#how-to-use");}// remove trailing slash of siteUrl
siteUrl=withoutTrailingSlash(siteUrl);return(0,_extends2.default)({},otherData,{allSitePage:(_allSitePage={},_allSitePage[originalType]=originalType==="nodes"?allPages:allPages.map(function(page){return{node:page};}),_allSitePage),site:{siteMetadata:{siteUrl:siteUrl}}});}var defaultOptions={query:"\n    {\n      site {\n        siteMetadata {\n          siteUrl\n        }\n      }\n\n      allSitePage {\n        edges {\n          node {\n            path\n          }\n        }\n      }\n  }",output:"/sitemap.xml",exclude:["/dev-404-page","/404","/404.html","/offline-plugin-app-shell-fallback"],createLinkInHead:true,serialize:function serialize(_ref){var site=_ref.site,allSitePage=_ref.allSitePage;var _getNodes2=getNodes(allSitePage),allPages=_getNodes2.allPages;return allPages===null||allPages===void 0?void 0:allPages.map(function(page){var _site$siteMetadata$si,_site$siteMetadata;return{url:""+((_site$siteMetadata$si=(_site$siteMetadata=site.siteMetadata)===null||_site$siteMetadata===void 0?void 0:_site$siteMetadata.siteUrl)!==null&&_site$siteMetadata$si!==void 0?_site$siteMetadata$si:"")+page.path,changefreq:"daily",priority:0.7};});},resolveSiteUrl:function resolveSiteUrl(data){return data.site.siteMetadata.siteUrl;}};exports.defaultOptions=defaultOptions;function getNodes(results){if("nodes"in results){return{allPages:results.nodes,originalType:"nodes"};}if("edges"in results){var _results$edges;return{allPages:results===null||results===void 0?void 0:(_results$edges=results.edges)===null||_results$edges===void 0?void 0:_results$edges.map(function(edge){return edge.node;}),originalType:"edges"};}throw new Error("[gatsby-plugin-sitemap]: Plugin is unsure how to handle the results of your query, you'll need to write custom page filter and serializer in your gatsby config");}

/***/ }),

/***/ "./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-styled-components/gatsby-ssr.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var _interopRequireDefault=__webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");var _react=_interopRequireDefault(__webpack_require__(/*! react */ "react"));var _styledComponents=__webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");var sheetByPathname=new Map();// eslint-disable-next-line react/prop-types,react/display-name
exports.wrapRootElement=function(_ref){var element=_ref.element,pathname=_ref.pathname;var sheet=new _styledComponents.ServerStyleSheet();sheetByPathname.set(pathname,sheet);return/*#__PURE__*/_react.default.createElement(_styledComponents.StyleSheetManager,{sheet:sheet.instance},element);};exports.onRenderBody=function(_ref2){var setHeadComponents=_ref2.setHeadComponents,pathname=_ref2.pathname;var sheet=sheetByPathname.get(pathname);if(sheet){setHeadComponents([sheet.getStyleElement()]);sheetByPathname.delete(pathname);}};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = exports.ScrollContainer = exports.ScrollContext = void 0;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

exports.ScrollContext = _scrollHandler.ScrollHandler;

var _scrollContainer = __webpack_require__(/*! ./scroll-container */ "./node_modules/gatsby-react-router-scroll/scroll-container.js");

exports.ScrollContainer = _scrollContainer.ScrollContainer;

var _useScrollRestoration = __webpack_require__(/*! ./use-scroll-restoration */ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js");

exports.useScrollRestoration = _useScrollRestoration.useScrollRestoration;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-container.js":
/*!*********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-container.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollContainer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

// TODO: In Gatsby v3, this file should be removed.
// We are deprecating this in V2 in favor of useScrollRestoration
var propTypes = {
  scrollKey: _propTypes.default.string.isRequired,
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired
};
var hasNotWarnedDeprecation = true;

var ScrollContainerImplementation = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollContainerImplementation, _React$Component);

  function ScrollContainerImplementation(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    if (false) {}

    return _this;
  }

  var _proto = ScrollContainerImplementation.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // eslint-disable-next-line react/no-find-dom-node
    var node = _reactDom.default.findDOMNode(this);

    var _this$props = this.props,
        location = _this$props.location,
        scrollKey = _this$props.scrollKey;
    if (!node) return;
    node.addEventListener("scroll", function () {
      _this2.props.context.save(location, scrollKey, node.scrollTop);
    });
    var position = this.props.context.read(location, scrollKey);
    node.scrollTo(0, position || 0);
  };

  _proto.render = function render() {
    return this.props.children;
  };

  return ScrollContainerImplementation;
}(React.Component);

var ScrollContainer = function ScrollContainer(props) {
  return /*#__PURE__*/React.createElement(_router.Location, null, function (_ref) {
    var location = _ref.location;
    return /*#__PURE__*/React.createElement(_scrollHandler.ScrollContext.Consumer, null, function (context) {
      return /*#__PURE__*/React.createElement(ScrollContainerImplementation, (0, _extends2.default)({}, props, {
        context: context,
        location: location
      }));
    });
  });
};

exports.ScrollContainer = ScrollContainer;
ScrollContainer.propTypes = propTypes;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/scroll-handler.js":
/*!*******************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/scroll-handler.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.ScrollHandler = exports.ScrollContext = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _sessionStorage = __webpack_require__(/*! ./session-storage */ "./node_modules/gatsby-react-router-scroll/session-storage.js");

var ScrollContext = /*#__PURE__*/React.createContext(new _sessionStorage.SessionStorage());
exports.ScrollContext = ScrollContext;
ScrollContext.displayName = "GatsbyScrollContext";

var ScrollHandler = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(ScrollHandler, _React$Component);

  function ScrollHandler() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this._stateStorage = new _sessionStorage.SessionStorage();

    _this.scrollListener = function () {
      var key = _this.props.location.key;

      if (key) {
        _this._stateStorage.save(_this.props.location, key, window.scrollY);
      }
    };

    _this.windowScroll = function (position, prevProps) {
      if (_this.shouldUpdateScroll(prevProps, _this.props)) {
        window.scrollTo(0, position);
      }
    };

    _this.scrollToHash = function (hash, prevProps) {
      var node = document.getElementById(hash.substring(1));

      if (node && _this.shouldUpdateScroll(prevProps, _this.props)) {
        node.scrollIntoView();
      }
    };

    _this.shouldUpdateScroll = function (prevRouterProps, routerProps) {
      var shouldUpdateScroll = _this.props.shouldUpdateScroll;

      if (!shouldUpdateScroll) {
        return true;
      } // Hack to allow accessing this._stateStorage.


      return shouldUpdateScroll.call((0, _assertThisInitialized2.default)(_this), prevRouterProps, routerProps);
    };

    return _this;
  }

  var _proto = ScrollHandler.prototype;

  _proto.componentDidMount = function componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
    var scrollPosition;
    var _this$props$location = this.props.location,
        key = _this$props$location.key,
        hash = _this$props$location.hash;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (scrollPosition) {
      this.windowScroll(scrollPosition, undefined);
    } else if (hash) {
      this.scrollToHash(decodeURI(hash), undefined);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props$location2 = this.props.location,
        hash = _this$props$location2.hash,
        key = _this$props$location2.key;
    var scrollPosition;

    if (key) {
      scrollPosition = this._stateStorage.read(this.props.location, key);
    }

    if (hash && scrollPosition === 0) {
      this.scrollToHash(decodeURI(hash), prevProps);
    } else {
      this.windowScroll(scrollPosition, prevProps);
    }
  };

  _proto.render = function render() {
    return /*#__PURE__*/React.createElement(ScrollContext.Provider, {
      value: this._stateStorage
    }, this.props.children);
  };

  return ScrollHandler;
}(React.Component);

exports.ScrollHandler = ScrollHandler;
ScrollHandler.propTypes = {
  shouldUpdateScroll: _propTypes.default.func,
  children: _propTypes.default.element.isRequired,
  location: _propTypes.default.object.isRequired
};

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/session-storage.js":
/*!********************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/session-storage.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.SessionStorage = void 0;
var STATE_KEY_PREFIX = "@@scroll|";
var GATSBY_ROUTER_SCROLL_STATE = "___GATSBY_REACT_ROUTER_SCROLL";

var SessionStorage = /*#__PURE__*/function () {
  function SessionStorage() {}

  var _proto = SessionStorage.prototype;

  _proto.read = function read(location, key) {
    var stateKey = this.getStateKey(location, key);

    try {
      var value = window.sessionStorage.getItem(stateKey);
      return value ? JSON.parse(value) : 0;
    } catch (e) {
      if (false) {}

      if (window && window[GATSBY_ROUTER_SCROLL_STATE] && window[GATSBY_ROUTER_SCROLL_STATE][stateKey]) {
        return window[GATSBY_ROUTER_SCROLL_STATE][stateKey];
      }

      return 0;
    }
  };

  _proto.save = function save(location, key, value) {
    var stateKey = this.getStateKey(location, key);
    var storedValue = JSON.stringify(value);

    try {
      window.sessionStorage.setItem(stateKey, storedValue);
    } catch (e) {
      if (window && window[GATSBY_ROUTER_SCROLL_STATE]) {
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      } else {
        window[GATSBY_ROUTER_SCROLL_STATE] = {};
        window[GATSBY_ROUTER_SCROLL_STATE][stateKey] = JSON.parse(storedValue);
      }

      if (false) {}
    }
  };

  _proto.getStateKey = function getStateKey(location, key) {
    var stateKeyBase = "" + STATE_KEY_PREFIX + location.pathname;
    return key === null || typeof key === "undefined" ? stateKeyBase : stateKeyBase + "|" + key;
  };

  return SessionStorage;
}();

exports.SessionStorage = SessionStorage;

/***/ }),

/***/ "./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby-react-router-scroll/use-scroll-restoration.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useScrollRestoration = useScrollRestoration;

var _scrollHandler = __webpack_require__(/*! ./scroll-handler */ "./node_modules/gatsby-react-router-scroll/scroll-handler.js");

var _react = __webpack_require__(/*! react */ "react");

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

function useScrollRestoration(identifier) {
  var location = (0, _router.useLocation)();
  var state = (0, _react.useContext)(_scrollHandler.ScrollContext);
  var ref = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(function () {
    if (ref.current) {
      var position = state.read(location, identifier);
      ref.current.scrollTo(0, position || 0);
    }
  }, []);
  return {
    ref: ref,
    onScroll: function onScroll() {
      if (ref.current) {
        state.save(location, identifier, ref.current.scrollTop);
      }
    }
  };
}

/***/ }),

/***/ "./node_modules/gatsby-remark-images-grid/gatsby-ssr.js":
/*!**************************************************************!*\
  !*** ./node_modules/gatsby-remark-images-grid/gatsby-ssr.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const React=__webpack_require__(/*! react */ "react");exports.onRenderBody=({setHeadComponents},pluginOptions)=>{const className=pluginOptions.className?pluginOptions.className:"gatsbyRemarkImagesGrid";return setHeadComponents([React.createElement("style",{key:`gatsby-remark-images-grid`,type:"text/css"},`
        .${className} {
          ${pluginOptions.margin?`margin: ${pluginOptions.margin}`:""};
        }

        .${className}-grid {
          display: grid;
          min-height: 0;
          min-width: 0;
          ${pluginOptions.gridGap?`grid-gap: ${pluginOptions.gridGap}`:""};
        }

        .${className}-figcaption {
          text-align: center;
        }
      `)]);};

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return Object(_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || Object(_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Object(_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js":
/*!****************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/extends.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/typeof.js":
/*!***************************************************************************!*\
  !*** ./node_modules/gatsby/node_modules/@babel/runtime/helpers/typeof.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/gatsby/package.json":
/*!******************************************!*\
  !*** ./node_modules/gatsby/package.json ***!
  \******************************************/
/*! exports provided: _args, _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _spec, _where, author, bin, bugs, dependencies, description, devDependencies, engines, files, gitHead, homepage, keywords, license, main, module, name, peerDependencies, repository, resolutions, scripts, types, version, yargs, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_args\":[[\"gatsby@2.25.1\",\"/Users/ansinlau/Dropbox/website/current/dev\"]],\"_from\":\"gatsby@2.25.1\",\"_id\":\"gatsby@2.25.1\",\"_inBundle\":false,\"_integrity\":\"sha512-2MLGL0MooLGmGQhSjIjq+mH95lE3PbrtZ8xgcmN1JOsjR/dJ+Fx/BoZC3CdqPku/zflMNlCb99vuB2HQaXiRdg==\",\"_location\":\"/gatsby\",\"_phantomChildren\":{\"@hapi/joi\":\"15.1.1\",\"@sideway/address\":\"4.1.0\",\"@sideway/formula\":\"3.0.0\",\"@sideway/pinpoint\":\"2.0.0\",\"@types/common-tags\":\"1.8.0\",\"@types/history\":\"4.7.6\",\"@types/react\":\"16.9.43\",\"acorn-jsx\":\"5.2.0\",\"ansi-styles\":\"3.2.1\",\"array.prototype.flatmap\":\"1.2.3\",\"better-opn\":\"2.1.1\",\"call-bind\":\"1.0.0\",\"camelcase\":\"5.3.1\",\"clipboardy\":\"2.3.0\",\"common-tags\":\"1.8.0\",\"configstore\":\"5.0.1\",\"convert-hrtime\":\"3.0.0\",\"decamelize\":\"1.2.0\",\"decode-uri-component\":\"0.2.0\",\"deep-is\":\"0.1.3\",\"define-properties\":\"1.1.3\",\"envinfo\":\"7.7.3\",\"escape-string-regexp\":\"1.0.5\",\"eslint-utils\":\"1.4.3\",\"eslint-visitor-keys\":\"1.0.0\",\"esquery\":\"1.3.1\",\"estraverse\":\"4.2.0\",\"esutils\":\"2.0.2\",\"external-editor\":\"3.1.0\",\"fast-json-stable-stringify\":\"2.0.0\",\"fast-levenshtein\":\"2.0.6\",\"flatted\":\"2.0.2\",\"fs-exists-cached\":\"1.0.0\",\"fs.realpath\":\"1.0.0\",\"function-bind\":\"1.1.1\",\"functional-red-black-tree\":\"1.0.1\",\"gatsby-recipes\":\"0.2.36\",\"gatsby-telemetry\":\"1.3.39\",\"globals\":\"11.7.0\",\"has\":\"1.0.3\",\"human-signals\":\"1.1.1\",\"ignore\":\"4.0.6\",\"import-fresh\":\"3.2.1\",\"imurmurhash\":\"0.1.4\",\"inflight\":\"1.0.6\",\"inherits\":\"2.0.3\",\"is-core-module\":\"2.0.0\",\"is-date-object\":\"1.0.1\",\"is-extglob\":\"2.1.1\",\"is-string\":\"1.0.5\",\"is-valid-path\":\"0.1.1\",\"isexe\":\"2.0.0\",\"js-tokens\":\"4.0.0\",\"js-yaml\":\"3.13.1\",\"jsesc\":\"2.5.1\",\"json-stable-stringify-without-jsonify\":\"1.0.1\",\"jsonfile\":\"4.0.0\",\"levn\":\"0.3.0\",\"loose-envify\":\"1.4.0\",\"meant\":\"1.0.2\",\"merge-stream\":\"2.0.0\",\"minimatch\":\"3.0.4\",\"mkdirp\":\"0.5.5\",\"natural-compare\":\"1.4.0\",\"nice-try\":\"1.0.5\",\"node-object-hash\":\"2.0.0\",\"object-assign\":\"4.1.1\",\"object-inspect\":\"1.8.0\",\"object.entries\":\"1.1.2\",\"object.fromentries\":\"2.0.2\",\"once\":\"1.4.0\",\"opentracing\":\"0.14.4\",\"path-is-absolute\":\"1.0.1\",\"path-key\":\"2.0.1\",\"path-parse\":\"1.0.6\",\"picomatch\":\"2.2.2\",\"prelude-ls\":\"1.1.2\",\"pretty-error\":\"2.1.2\",\"progress\":\"2.0.3\",\"prompts\":\"2.4.0\",\"proper-lockfile\":\"4.1.1\",\"pump\":\"3.0.0\",\"react-is\":\"16.13.1\",\"redux\":\"4.0.5\",\"regexpp\":\"2.0.1\",\"require-directory\":\"2.1.1\",\"resolve-cwd\":\"3.0.0\",\"run-async\":\"2.4.1\",\"rxjs\":\"6.6.0\",\"set-blocking\":\"2.0.0\",\"shebang-command\":\"1.2.0\",\"source-map\":\"0.5.7\",\"split-on-first\":\"1.1.0\",\"stack-trace\":\"0.0.10\",\"string.prototype.matchall\":\"4.0.2\",\"string.prototype.trimend\":\"1.0.1\",\"string.prototype.trimstart\":\"1.0.1\",\"strip-final-newline\":\"2.0.0\",\"supports-color\":\"5.5.0\",\"table\":\"5.4.6\",\"text-table\":\"0.2.0\",\"through\":\"2.3.8\",\"to-fast-properties\":\"2.0.0\",\"type-check\":\"0.3.2\",\"type-fest\":\"0.8.1\",\"universalify\":\"0.1.2\",\"update-notifier\":\"4.1.3\",\"uri-js\":\"4.2.2\",\"which\":\"1.3.1\",\"which-module\":\"2.0.0\",\"word-wrap\":\"1.2.3\",\"xdg-basedir\":\"4.0.0\",\"yoga-layout-prebuilt\":\"1.10.0\",\"yurnalist\":\"1.1.2\"},\"_requested\":{\"type\":\"version\",\"registry\":true,\"raw\":\"gatsby@2.25.1\",\"name\":\"gatsby\",\"escapedName\":\"gatsby\",\"rawSpec\":\"2.25.1\",\"saveSpec\":null,\"fetchSpec\":\"2.25.1\"},\"_requiredBy\":[\"/\"],\"_resolved\":\"https://registry.npmjs.org/gatsby/-/gatsby-2.25.1.tgz\",\"_spec\":\"2.25.1\",\"_where\":\"/Users/ansinlau/Dropbox/website/current/dev\",\"author\":{\"name\":\"Kyle Mathews\",\"email\":\"mathews.kyle@gmail.com\"},\"bin\":{\"gatsby\":\"cli.js\"},\"bugs\":{\"url\":\"https://github.com/gatsbyjs/gatsby/issues\"},\"dependencies\":{\"@babel/code-frame\":\"^7.10.4\",\"@babel/core\":\"^7.11.6\",\"@babel/parser\":\"^7.11.5\",\"@babel/runtime\":\"^7.11.2\",\"@babel/traverse\":\"^7.11.5\",\"@babel/types\":\"^7.11.5\",\"@hapi/joi\":\"^15.1.1\",\"@mikaelkristiansson/domready\":\"^1.0.10\",\"@nodelib/fs.walk\":\"^1.2.4\",\"@pieh/friendly-errors-webpack-plugin\":\"1.7.0-chalk-2\",\"@pmmmwh/react-refresh-webpack-plugin\":\"^0.4.1\",\"@reach/router\":\"^1.3.4\",\"@types/http-proxy\":\"^1.17.4\",\"@typescript-eslint/eslint-plugin\":\"^2.24.0\",\"@typescript-eslint/parser\":\"^2.24.0\",\"address\":\"1.1.2\",\"autoprefixer\":\"^9.8.4\",\"axios\":\"^0.20.0\",\"babel-core\":\"7.0.0-bridge.0\",\"babel-eslint\":\"^10.1.0\",\"babel-loader\":\"^8.1.0\",\"babel-plugin-add-module-exports\":\"^0.3.3\",\"babel-plugin-dynamic-import-node\":\"^2.3.3\",\"babel-plugin-lodash\":\"3.3.4\",\"babel-plugin-remove-graphql-queries\":\"^2.9.20\",\"babel-preset-gatsby\":\"^0.5.15\",\"better-opn\":\"^2.0.0\",\"better-queue\":\"^3.8.10\",\"bluebird\":\"^3.7.2\",\"body-parser\":\"^1.19.0\",\"browserslist\":\"^4.12.2\",\"cache-manager\":\"^2.11.1\",\"cache-manager-fs-hash\":\"^0.0.9\",\"chalk\":\"^2.4.2\",\"chokidar\":\"^3.4.2\",\"common-tags\":\"^1.8.0\",\"compression\":\"^1.7.4\",\"convert-hrtime\":\"^3.0.0\",\"copyfiles\":\"^2.3.0\",\"core-js\":\"^3.6.5\",\"cors\":\"^2.8.5\",\"css-loader\":\"^1.0.1\",\"date-fns\":\"^2.14.0\",\"debug\":\"^3.2.6\",\"del\":\"^5.1.0\",\"detect-port\":\"^1.3.0\",\"devcert\":\"^1.1.3\",\"dotenv\":\"^8.2.0\",\"eslint\":\"^6.8.0\",\"eslint-config-react-app\":\"^5.2.1\",\"eslint-loader\":\"^2.2.1\",\"eslint-plugin-flowtype\":\"^3.13.0\",\"eslint-plugin-graphql\":\"^4.0.0\",\"eslint-plugin-import\":\"^2.22.0\",\"eslint-plugin-jsx-a11y\":\"^6.3.1\",\"eslint-plugin-react\":\"^7.20.6\",\"eslint-plugin-react-hooks\":\"^1.7.0\",\"event-source-polyfill\":\"^1.0.15\",\"execa\":\"^4.0.3\",\"express\":\"^4.17.1\",\"express-graphql\":\"^0.9.0\",\"fastest-levenshtein\":\"^1.0.12\",\"file-loader\":\"^1.1.11\",\"find-cache-dir\":\"^3.3.1\",\"fs-exists-cached\":\"1.0.0\",\"fs-extra\":\"^8.1.0\",\"gatsby-cli\":\"^2.12.115\",\"gatsby-core-utils\":\"^1.3.23\",\"gatsby-graphiql-explorer\":\"^0.4.15\",\"gatsby-legacy-polyfills\":\"^0.0.6\",\"gatsby-link\":\"^2.4.16\",\"gatsby-plugin-page-creator\":\"^2.3.34\",\"gatsby-plugin-typescript\":\"^2.5.0\",\"gatsby-plugin-utils\":\"^0.2.40\",\"gatsby-react-router-scroll\":\"^3.0.15\",\"gatsby-telemetry\":\"^1.3.39\",\"glob\":\"^7.1.6\",\"got\":\"8.3.2\",\"graphql\":\"^14.6.0\",\"graphql-compose\":\"^6.3.8\",\"graphql-playground-middleware-express\":\"^1.7.18\",\"hasha\":\"^5.2.0\",\"http-proxy\":\"^1.18.1\",\"invariant\":\"^2.2.4\",\"is-relative\":\"^1.0.0\",\"is-relative-url\":\"^3.0.0\",\"jest-worker\":\"^24.9.0\",\"joi\":\"^17.2.1\",\"json-loader\":\"^0.5.7\",\"json-stringify-safe\":\"^5.0.1\",\"latest-version\":\"5.1.0\",\"lodash\":\"^4.17.20\",\"md5-file\":\"^5.0.0\",\"meant\":\"^1.0.1\",\"micromatch\":\"^4.0.2\",\"mime\":\"^2.4.6\",\"mini-css-extract-plugin\":\"^0.11.2\",\"mitt\":\"^1.2.0\",\"mkdirp\":\"^0.5.1\",\"moment\":\"^2.27.0\",\"name-all-modules-plugin\":\"^1.0.1\",\"normalize-path\":\"^3.0.0\",\"null-loader\":\"^3.0.0\",\"opentracing\":\"^0.14.4\",\"optimize-css-assets-webpack-plugin\":\"^5.0.3\",\"p-defer\":\"^3.0.0\",\"parseurl\":\"^1.3.3\",\"physical-cpu-count\":\"^2.0.0\",\"pnp-webpack-plugin\":\"^1.6.4\",\"postcss-flexbugs-fixes\":\"^4.2.1\",\"postcss-loader\":\"^3.0.0\",\"prompts\":\"^2.3.2\",\"prop-types\":\"^15.7.2\",\"query-string\":\"^6.13.1\",\"raw-loader\":\"^0.5.1\",\"react-dev-utils\":\"^4.2.3\",\"react-error-overlay\":\"^6.0.7\",\"react-hot-loader\":\"^4.12.21\",\"react-refresh\":\"^0.8.3\",\"redux\":\"^4.0.5\",\"redux-thunk\":\"^2.3.0\",\"semver\":\"^7.3.2\",\"shallow-compare\":\"^1.2.2\",\"signal-exit\":\"^3.0.3\",\"slugify\":\"^1.4.4\",\"socket.io\":\"^2.3.0\",\"socket.io-client\":\"2.3.0\",\"st\":\"^2.0.0\",\"stack-trace\":\"^0.0.10\",\"string-similarity\":\"^1.2.2\",\"style-loader\":\"^0.23.1\",\"terser-webpack-plugin\":\"^2.3.8\",\"tmp\":\"^0.2.1\",\"true-case-path\":\"^2.2.1\",\"type-of\":\"^2.0.1\",\"url-loader\":\"^1.1.2\",\"util.promisify\":\"^1.0.1\",\"uuid\":\"3.4.0\",\"v8-compile-cache\":\"^1.1.2\",\"webpack\":\"^4.44.1\",\"webpack-dev-middleware\":\"^3.7.2\",\"webpack-dev-server\":\"^3.11.0\",\"webpack-hot-middleware\":\"^2.25.0\",\"webpack-merge\":\"^4.2.2\",\"webpack-stats-plugin\":\"^0.3.2\",\"webpack-virtual-modules\":\"^0.2.2\",\"xstate\":\"^4.11.0\",\"yaml-loader\":\"^0.6.0\"},\"description\":\"Blazing fast modern site generator for React\",\"devDependencies\":{\"@babel/cli\":\"^7.11.6\",\"@babel/runtime\":\"^7.11.2\",\"@types/hapi__joi\":\"^16.0.12\",\"@types/micromatch\":\"^4.0.1\",\"@types/normalize-path\":\"^3.0.0\",\"@types/reach__router\":\"^1.3.5\",\"@types/semver\":\"^7.1.0\",\"@types/signal-exit\":\"^3.0.0\",\"@types/socket.io\":\"^2.1.4\",\"@types/string-similarity\":\"^3.0.0\",\"@types/tmp\":\"^0.2.0\",\"@types/webpack-dev-middleware\":\"^3.7.1\",\"@types/webpack-virtual-modules\":\"^0.1.0\",\"babel-preset-gatsby-package\":\"^0.5.3\",\"cross-env\":\"^7.0.2\",\"documentation\":\"^12.3.0\",\"enhanced-resolve\":\"^4.2.0\",\"eslint-plugin-jsx-a11y\":\"^6.3.1\",\"react\":\"^16.12.0\",\"react-dom\":\"^16.12.0\",\"rimraf\":\"^3.0.2\",\"typescript\":\"^3.9.5\",\"xhr-mock\":\"^2.5.1\",\"zipkin\":\"^0.22.0\",\"zipkin-javascript-opentracing\":\"^3.0.0\",\"zipkin-transport-http\":\"^0.22.0\"},\"engines\":{\"node\":\">=10.13.0\"},\"files\":[\"apis.json\",\"ipc.json\",\"cache-dir/\",\"cli.js\",\"dist/\",\"gatsby-admin-public/\",\"graphql.js\",\"graphql.d.ts\",\"index.d.ts\",\"scripts/postinstall.js\",\"utils.js\",\"internal.js\",\"internal.d.ts\",\"!**/__tests__/\"],\"gitHead\":\"6615dbb12f8eca13da26bb25f82d4bd1785c5c3a\",\"homepage\":\"https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby#readme\",\"keywords\":[\"blog\",\"generator\",\"jekyll\",\"markdown\",\"react\",\"ssg\",\"website\"],\"license\":\"MIT\",\"main\":\"cache-dir/commonjs/gatsby-browser-entry.js\",\"module\":\"cache-dir/gatsby-browser-entry.js\",\"name\":\"gatsby\",\"peerDependencies\":{\"react\":\"^16.4.2\",\"react-dom\":\"^16.4.2\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/gatsbyjs/gatsby.git\"},\"resolutions\":{\"graphql\":\"^14.6.0\",\"@mdx-js/mdx\":\"^2.0.0-next.3\",\"@mdx-js/react\":\"^2.0.0-next.3\",\"@mdx-js/runtime\":\"^2.0.0-next.3\",\"remark-mdx\":\"^2.0.0-next.3\",\"remark-mdxjs\":\"^2.0.0-next.3\"},\"scripts\":{\"build\":\"npm run build:types && npm run build:src && npm run build:internal-plugins && npm run build:rawfiles && npm run build:cjs\",\"build:cjs\":\"babel cache-dir --out-dir cache-dir/commonjs --ignore \\\"**/__tests__\\\" --ignore \\\"**/__mocks__\\\"\",\"build:internal-plugins\":\"copyfiles -u 1 src/internal-plugins/**/package.json dist\",\"build:rawfiles\":\"copyfiles -u 1 src/internal-plugins/**/raw_* dist\",\"build:src\":\"babel src --out-dir dist --source-maps --verbose --ignore \\\"**/gatsby-cli.js,src/internal-plugins/dev-404-page/raw_dev-404-page.js,**/__tests__,**/__mocks__\\\" --extensions \\\".ts,.js\\\"\",\"build:types\":\"tsc --emitDeclarationOnly --declaration --declarationDir dist\",\"clean-test-bundles\":\"find test/ -type f -name bundle.js* -exec rm -rf {} +\",\"postbuild\":\"node scripts/output-api-file.js && yarn workspace gatsby-admin build\",\"postinstall\":\"node scripts/postinstall.js\",\"prebuild\":\"rimraf dist && rimraf cache-dir/commonjs\",\"prepare\":\"cross-env NODE_ENV=production npm run build\",\"watch\":\"rimraf dist && mkdir dist && npm run build:internal-plugins && npm run build:rawfiles && npm run build:src -- --watch\"},\"types\":\"index.d.ts\",\"version\":\"2.25.1\",\"yargs\":{\"boolean-negation\":false}}");

/***/ }),

/***/ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var reactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "production";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/lodash.throttle/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.throttle/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),

/***/ "./node_modules/minimatch/minimatch.js":
/*!*********************************************!*\
  !*** ./node_modules/minimatch/minimatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = minimatch
minimatch.Minimatch = Minimatch

var path = { sep: '/' }
try {
  path = __webpack_require__(/*! path */ "path")
} catch (er) {}

var GLOBSTAR = minimatch.GLOBSTAR = Minimatch.GLOBSTAR = {}
var expand = __webpack_require__(/*! brace-expansion */ "./node_modules/brace-expansion/index.js")

var plTypes = {
  '!': { open: '(?:(?!(?:', close: '))[^/]*?)'},
  '?': { open: '(?:', close: ')?' },
  '+': { open: '(?:', close: ')+' },
  '*': { open: '(?:', close: ')*' },
  '@': { open: '(?:', close: ')' }
}

// any single thing other than /
// don't need to escape / when using new RegExp()
var qmark = '[^/]'

// * => any number of characters
var star = qmark + '*?'

// ** when dots are allowed.  Anything goes, except .. and .
// not (^ or / followed by one or two dots followed by $ or /),
// followed by anything, any number of times.
var twoStarDot = '(?:(?!(?:\\\/|^)(?:\\.{1,2})($|\\\/)).)*?'

// not a ^ or / followed by a dot,
// followed by anything, any number of times.
var twoStarNoDot = '(?:(?!(?:\\\/|^)\\.).)*?'

// characters that need to be escaped in RegExp.
var reSpecials = charSet('().*{}+?[]^$\\!')

// "abc" -> { a:true, b:true, c:true }
function charSet (s) {
  return s.split('').reduce(function (set, c) {
    set[c] = true
    return set
  }, {})
}

// normalizes slashes.
var slashSplit = /\/+/

minimatch.filter = filter
function filter (pattern, options) {
  options = options || {}
  return function (p, i, list) {
    return minimatch(p, pattern, options)
  }
}

function ext (a, b) {
  a = a || {}
  b = b || {}
  var t = {}
  Object.keys(b).forEach(function (k) {
    t[k] = b[k]
  })
  Object.keys(a).forEach(function (k) {
    t[k] = a[k]
  })
  return t
}

minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return minimatch

  var orig = minimatch

  var m = function minimatch (p, pattern, options) {
    return orig.minimatch(p, pattern, ext(def, options))
  }

  m.Minimatch = function Minimatch (pattern, options) {
    return new orig.Minimatch(pattern, ext(def, options))
  }

  return m
}

Minimatch.defaults = function (def) {
  if (!def || !Object.keys(def).length) return Minimatch
  return minimatch.defaults(def).Minimatch
}

function minimatch (p, pattern, options) {
  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}

  // shortcut: comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    return false
  }

  // "" only matches ""
  if (pattern.trim() === '') return p === ''

  return new Minimatch(pattern, options).match(p)
}

function Minimatch (pattern, options) {
  if (!(this instanceof Minimatch)) {
    return new Minimatch(pattern, options)
  }

  if (typeof pattern !== 'string') {
    throw new TypeError('glob pattern string required')
  }

  if (!options) options = {}
  pattern = pattern.trim()

  // windows support: need to use /, not \
  if (path.sep !== '/') {
    pattern = pattern.split(path.sep).join('/')
  }

  this.options = options
  this.set = []
  this.pattern = pattern
  this.regexp = null
  this.negate = false
  this.comment = false
  this.empty = false

  // make the set of regexps etc.
  this.make()
}

Minimatch.prototype.debug = function () {}

Minimatch.prototype.make = make
function make () {
  // don't do it more than once.
  if (this._made) return

  var pattern = this.pattern
  var options = this.options

  // empty patterns and comments match nothing.
  if (!options.nocomment && pattern.charAt(0) === '#') {
    this.comment = true
    return
  }
  if (!pattern) {
    this.empty = true
    return
  }

  // step 1: figure out negation, etc.
  this.parseNegate()

  // step 2: expand braces
  var set = this.globSet = this.braceExpand()

  if (options.debug) this.debug = console.error

  this.debug(this.pattern, set)

  // step 3: now we have a set, so turn each one into a series of path-portion
  // matching patterns.
  // These will be regexps, except in the case of "**", which is
  // set to the GLOBSTAR object for globstar behavior,
  // and will not contain any / characters
  set = this.globParts = set.map(function (s) {
    return s.split(slashSplit)
  })

  this.debug(this.pattern, set)

  // glob --> regexps
  set = set.map(function (s, si, set) {
    return s.map(this.parse, this)
  }, this)

  this.debug(this.pattern, set)

  // filter out everything that didn't compile properly.
  set = set.filter(function (s) {
    return s.indexOf(false) === -1
  })

  this.debug(this.pattern, set)

  this.set = set
}

Minimatch.prototype.parseNegate = parseNegate
function parseNegate () {
  var pattern = this.pattern
  var negate = false
  var options = this.options
  var negateOffset = 0

  if (options.nonegate) return

  for (var i = 0, l = pattern.length
    ; i < l && pattern.charAt(i) === '!'
    ; i++) {
    negate = !negate
    negateOffset++
  }

  if (negateOffset) this.pattern = pattern.substr(negateOffset)
  this.negate = negate
}

// Brace expansion:
// a{b,c}d -> abd acd
// a{b,}c -> abc ac
// a{0..3}d -> a0d a1d a2d a3d
// a{b,c{d,e}f}g -> abg acdfg acefg
// a{b,c}d{e,f}g -> abdeg acdeg abdeg abdfg
//
// Invalid sets are not expanded.
// a{2..}b -> a{2..}b
// a{b}c -> a{b}c
minimatch.braceExpand = function (pattern, options) {
  return braceExpand(pattern, options)
}

Minimatch.prototype.braceExpand = braceExpand

function braceExpand (pattern, options) {
  if (!options) {
    if (this instanceof Minimatch) {
      options = this.options
    } else {
      options = {}
    }
  }

  pattern = typeof pattern === 'undefined'
    ? this.pattern : pattern

  if (typeof pattern === 'undefined') {
    throw new TypeError('undefined pattern')
  }

  if (options.nobrace ||
    !pattern.match(/\{.*\}/)) {
    // shortcut. no need to expand.
    return [pattern]
  }

  return expand(pattern)
}

// parse a component of the expanded set.
// At this point, no pattern may contain "/" in it
// so we're going to return a 2d array, where each entry is the full
// pattern, split on '/', and then turned into a regular expression.
// A regexp is made at the end which joins each array with an
// escaped /, and another full one which joins each regexp with |.
//
// Following the lead of Bash 4.1, note that "**" only has special meaning
// when it is the *only* thing in a path portion.  Otherwise, any series
// of * is equivalent to a single *.  Globstar behavior is enabled by
// default, and can be disabled by setting options.noglobstar.
Minimatch.prototype.parse = parse
var SUBPARSE = {}
function parse (pattern, isSub) {
  if (pattern.length > 1024 * 64) {
    throw new TypeError('pattern is too long')
  }

  var options = this.options

  // shortcuts
  if (!options.noglobstar && pattern === '**') return GLOBSTAR
  if (pattern === '') return ''

  var re = ''
  var hasMagic = !!options.nocase
  var escaping = false
  // ? => one single character
  var patternListStack = []
  var negativeLists = []
  var stateChar
  var inClass = false
  var reClassStart = -1
  var classStart = -1
  // . and .. never match anything that doesn't start with .,
  // even when options.dot is set.
  var patternStart = pattern.charAt(0) === '.' ? '' // anything
  // not (start or / followed by . or .. followed by / or end)
  : options.dot ? '(?!(?:^|\\\/)\\.{1,2}(?:$|\\\/))'
  : '(?!\\.)'
  var self = this

  function clearStateChar () {
    if (stateChar) {
      // we had some state-tracking character
      // that wasn't consumed by this pass.
      switch (stateChar) {
        case '*':
          re += star
          hasMagic = true
        break
        case '?':
          re += qmark
          hasMagic = true
        break
        default:
          re += '\\' + stateChar
        break
      }
      self.debug('clearStateChar %j %j', stateChar, re)
      stateChar = false
    }
  }

  for (var i = 0, len = pattern.length, c
    ; (i < len) && (c = pattern.charAt(i))
    ; i++) {
    this.debug('%s\t%s %s %j', pattern, i, re, c)

    // skip over any that are escaped.
    if (escaping && reSpecials[c]) {
      re += '\\' + c
      escaping = false
      continue
    }

    switch (c) {
      case '/':
        // completely not allowed, even escaped.
        // Should already be path-split by now.
        return false

      case '\\':
        clearStateChar()
        escaping = true
      continue

      // the various stateChar values
      // for the "extglob" stuff.
      case '?':
      case '*':
      case '+':
      case '@':
      case '!':
        this.debug('%s\t%s %s %j <-- stateChar', pattern, i, re, c)

        // all of those are literals inside a class, except that
        // the glob [!a] means [^a] in regexp
        if (inClass) {
          this.debug('  in class')
          if (c === '!' && i === classStart + 1) c = '^'
          re += c
          continue
        }

        // if we already have a stateChar, then it means
        // that there was something like ** or +? in there.
        // Handle the stateChar, then proceed with this one.
        self.debug('call clearStateChar %j', stateChar)
        clearStateChar()
        stateChar = c
        // if extglob is disabled, then +(asdf|foo) isn't a thing.
        // just clear the statechar *now*, rather than even diving into
        // the patternList stuff.
        if (options.noext) clearStateChar()
      continue

      case '(':
        if (inClass) {
          re += '('
          continue
        }

        if (!stateChar) {
          re += '\\('
          continue
        }

        patternListStack.push({
          type: stateChar,
          start: i - 1,
          reStart: re.length,
          open: plTypes[stateChar].open,
          close: plTypes[stateChar].close
        })
        // negation is (?:(?!js)[^/]*)
        re += stateChar === '!' ? '(?:(?!(?:' : '(?:'
        this.debug('plType %j %j', stateChar, re)
        stateChar = false
      continue

      case ')':
        if (inClass || !patternListStack.length) {
          re += '\\)'
          continue
        }

        clearStateChar()
        hasMagic = true
        var pl = patternListStack.pop()
        // negation is (?:(?!js)[^/]*)
        // The others are (?:<pattern>)<type>
        re += pl.close
        if (pl.type === '!') {
          negativeLists.push(pl)
        }
        pl.reEnd = re.length
      continue

      case '|':
        if (inClass || !patternListStack.length || escaping) {
          re += '\\|'
          escaping = false
          continue
        }

        clearStateChar()
        re += '|'
      continue

      // these are mostly the same in regexp and glob
      case '[':
        // swallow any state-tracking char before the [
        clearStateChar()

        if (inClass) {
          re += '\\' + c
          continue
        }

        inClass = true
        classStart = i
        reClassStart = re.length
        re += c
      continue

      case ']':
        //  a right bracket shall lose its special
        //  meaning and represent itself in
        //  a bracket expression if it occurs
        //  first in the list.  -- POSIX.2 2.8.3.2
        if (i === classStart + 1 || !inClass) {
          re += '\\' + c
          escaping = false
          continue
        }

        // handle the case where we left a class open.
        // "[z-a]" is valid, equivalent to "\[z-a\]"
        if (inClass) {
          // split where the last [ was, make sure we don't have
          // an invalid re. if so, re-walk the contents of the
          // would-be class to re-translate any characters that
          // were passed through as-is
          // TODO: It would probably be faster to determine this
          // without a try/catch and a new RegExp, but it's tricky
          // to do safely.  For now, this is safe and works.
          var cs = pattern.substring(classStart + 1, i)
          try {
            RegExp('[' + cs + ']')
          } catch (er) {
            // not a valid class!
            var sp = this.parse(cs, SUBPARSE)
            re = re.substr(0, reClassStart) + '\\[' + sp[0] + '\\]'
            hasMagic = hasMagic || sp[1]
            inClass = false
            continue
          }
        }

        // finish up the class.
        hasMagic = true
        inClass = false
        re += c
      continue

      default:
        // swallow any state char that wasn't consumed
        clearStateChar()

        if (escaping) {
          // no need
          escaping = false
        } else if (reSpecials[c]
          && !(c === '^' && inClass)) {
          re += '\\'
        }

        re += c

    } // switch
  } // for

  // handle the case where we left a class open.
  // "[abc" is valid, equivalent to "\[abc"
  if (inClass) {
    // split where the last [ was, and escape it
    // this is a huge pita.  We now have to re-walk
    // the contents of the would-be class to re-translate
    // any characters that were passed through as-is
    cs = pattern.substr(classStart + 1)
    sp = this.parse(cs, SUBPARSE)
    re = re.substr(0, reClassStart) + '\\[' + sp[0]
    hasMagic = hasMagic || sp[1]
  }

  // handle the case where we had a +( thing at the *end*
  // of the pattern.
  // each pattern list stack adds 3 chars, and we need to go through
  // and escape any | chars that were passed through as-is for the regexp.
  // Go through and escape them, taking care not to double-escape any
  // | chars that were already escaped.
  for (pl = patternListStack.pop(); pl; pl = patternListStack.pop()) {
    var tail = re.slice(pl.reStart + pl.open.length)
    this.debug('setting tail', re, pl)
    // maybe some even number of \, then maybe 1 \, followed by a |
    tail = tail.replace(/((?:\\{2}){0,64})(\\?)\|/g, function (_, $1, $2) {
      if (!$2) {
        // the | isn't already escaped, so escape it.
        $2 = '\\'
      }

      // need to escape all those slashes *again*, without escaping the
      // one that we need for escaping the | character.  As it works out,
      // escaping an even number of slashes can be done by simply repeating
      // it exactly after itself.  That's why this trick works.
      //
      // I am sorry that you have to see this.
      return $1 + $1 + $2 + '|'
    })

    this.debug('tail=%j\n   %s', tail, tail, pl, re)
    var t = pl.type === '*' ? star
      : pl.type === '?' ? qmark
      : '\\' + pl.type

    hasMagic = true
    re = re.slice(0, pl.reStart) + t + '\\(' + tail
  }

  // handle trailing things that only matter at the very end.
  clearStateChar()
  if (escaping) {
    // trailing \\
    re += '\\\\'
  }

  // only need to apply the nodot start if the re starts with
  // something that could conceivably capture a dot
  var addPatternStart = false
  switch (re.charAt(0)) {
    case '.':
    case '[':
    case '(': addPatternStart = true
  }

  // Hack to work around lack of negative lookbehind in JS
  // A pattern like: *.!(x).!(y|z) needs to ensure that a name
  // like 'a.xyz.yz' doesn't match.  So, the first negative
  // lookahead, has to look ALL the way ahead, to the end of
  // the pattern.
  for (var n = negativeLists.length - 1; n > -1; n--) {
    var nl = negativeLists[n]

    var nlBefore = re.slice(0, nl.reStart)
    var nlFirst = re.slice(nl.reStart, nl.reEnd - 8)
    var nlLast = re.slice(nl.reEnd - 8, nl.reEnd)
    var nlAfter = re.slice(nl.reEnd)

    nlLast += nlAfter

    // Handle nested stuff like *(*.js|!(*.json)), where open parens
    // mean that we should *not* include the ) in the bit that is considered
    // "after" the negated section.
    var openParensBefore = nlBefore.split('(').length - 1
    var cleanAfter = nlAfter
    for (i = 0; i < openParensBefore; i++) {
      cleanAfter = cleanAfter.replace(/\)[+*?]?/, '')
    }
    nlAfter = cleanAfter

    var dollar = ''
    if (nlAfter === '' && isSub !== SUBPARSE) {
      dollar = '$'
    }
    var newRe = nlBefore + nlFirst + nlAfter + dollar + nlLast
    re = newRe
  }

  // if the re is not "" at this point, then we need to make sure
  // it doesn't match against an empty path part.
  // Otherwise a/* will match a/, which it should not.
  if (re !== '' && hasMagic) {
    re = '(?=.)' + re
  }

  if (addPatternStart) {
    re = patternStart + re
  }

  // parsing just a piece of a larger pattern.
  if (isSub === SUBPARSE) {
    return [re, hasMagic]
  }

  // skip the regexp for non-magical patterns
  // unescape anything in it, though, so that it'll be
  // an exact match against a file etc.
  if (!hasMagic) {
    return globUnescape(pattern)
  }

  var flags = options.nocase ? 'i' : ''
  try {
    var regExp = new RegExp('^' + re + '$', flags)
  } catch (er) {
    // If it was an invalid regular expression, then it can't match
    // anything.  This trick looks for a character after the end of
    // the string, which is of course impossible, except in multi-line
    // mode, but it's not a /m regex.
    return new RegExp('$.')
  }

  regExp._glob = pattern
  regExp._src = re

  return regExp
}

minimatch.makeRe = function (pattern, options) {
  return new Minimatch(pattern, options || {}).makeRe()
}

Minimatch.prototype.makeRe = makeRe
function makeRe () {
  if (this.regexp || this.regexp === false) return this.regexp

  // at this point, this.set is a 2d array of partial
  // pattern strings, or "**".
  //
  // It's better to use .match().  This function shouldn't
  // be used, really, but it's pretty convenient sometimes,
  // when you just want to work with a regex.
  var set = this.set

  if (!set.length) {
    this.regexp = false
    return this.regexp
  }
  var options = this.options

  var twoStar = options.noglobstar ? star
    : options.dot ? twoStarDot
    : twoStarNoDot
  var flags = options.nocase ? 'i' : ''

  var re = set.map(function (pattern) {
    return pattern.map(function (p) {
      return (p === GLOBSTAR) ? twoStar
      : (typeof p === 'string') ? regExpEscape(p)
      : p._src
    }).join('\\\/')
  }).join('|')

  // must match entire pattern
  // ending in a * or ** will make it less strict.
  re = '^(?:' + re + ')$'

  // can match anything, as long as it's not this.
  if (this.negate) re = '^(?!' + re + ').*$'

  try {
    this.regexp = new RegExp(re, flags)
  } catch (ex) {
    this.regexp = false
  }
  return this.regexp
}

minimatch.match = function (list, pattern, options) {
  options = options || {}
  var mm = new Minimatch(pattern, options)
  list = list.filter(function (f) {
    return mm.match(f)
  })
  if (mm.options.nonull && !list.length) {
    list.push(pattern)
  }
  return list
}

Minimatch.prototype.match = match
function match (f, partial) {
  this.debug('match', f, this.pattern)
  // short-circuit in the case of busted things.
  // comments, etc.
  if (this.comment) return false
  if (this.empty) return f === ''

  if (f === '/' && partial) return true

  var options = this.options

  // windows: need to use /, not \
  if (path.sep !== '/') {
    f = f.split(path.sep).join('/')
  }

  // treat the test path as a set of pathparts.
  f = f.split(slashSplit)
  this.debug(this.pattern, 'split', f)

  // just ONE of the pattern sets in this.set needs to match
  // in order for it to be valid.  If negating, then just one
  // match means that we have failed.
  // Either way, return on the first hit.

  var set = this.set
  this.debug(this.pattern, 'set', set)

  // Find the basename of the path by looking for the last non-empty segment
  var filename
  var i
  for (i = f.length - 1; i >= 0; i--) {
    filename = f[i]
    if (filename) break
  }

  for (i = 0; i < set.length; i++) {
    var pattern = set[i]
    var file = f
    if (options.matchBase && pattern.length === 1) {
      file = [filename]
    }
    var hit = this.matchOne(file, pattern, partial)
    if (hit) {
      if (options.flipNegate) return true
      return !this.negate
    }
  }

  // didn't get any hits.  this is success if it's a negative
  // pattern, failure otherwise.
  if (options.flipNegate) return false
  return this.negate
}

// set partial to true to test if, for example,
// "/a/b" matches the start of "/*/b/*/d"
// Partial means, if you run out of file before you run
// out of pattern, then that's fine, as long as all
// the parts match.
Minimatch.prototype.matchOne = function (file, pattern, partial) {
  var options = this.options

  this.debug('matchOne',
    { 'this': this, file: file, pattern: pattern })

  this.debug('matchOne', file.length, pattern.length)

  for (var fi = 0,
      pi = 0,
      fl = file.length,
      pl = pattern.length
      ; (fi < fl) && (pi < pl)
      ; fi++, pi++) {
    this.debug('matchOne loop')
    var p = pattern[pi]
    var f = file[fi]

    this.debug(pattern, p, f)

    // should be impossible.
    // some invalid regexp stuff in the set.
    if (p === false) return false

    if (p === GLOBSTAR) {
      this.debug('GLOBSTAR', [pattern, p, f])

      // "**"
      // a/**/b/**/c would match the following:
      // a/b/x/y/z/c
      // a/x/y/z/b/c
      // a/b/x/b/x/c
      // a/b/c
      // To do this, take the rest of the pattern after
      // the **, and see if it would match the file remainder.
      // If so, return success.
      // If not, the ** "swallows" a segment, and try again.
      // This is recursively awful.
      //
      // a/**/b/**/c matching a/b/x/y/z/c
      // - a matches a
      // - doublestar
      //   - matchOne(b/x/y/z/c, b/**/c)
      //     - b matches b
      //     - doublestar
      //       - matchOne(x/y/z/c, c) -> no
      //       - matchOne(y/z/c, c) -> no
      //       - matchOne(z/c, c) -> no
      //       - matchOne(c, c) yes, hit
      var fr = fi
      var pr = pi + 1
      if (pr === pl) {
        this.debug('** at the end')
        // a ** at the end will just swallow the rest.
        // We have found a match.
        // however, it will not swallow /.x, unless
        // options.dot is set.
        // . and .. are *never* matched by **, for explosively
        // exponential reasons.
        for (; fi < fl; fi++) {
          if (file[fi] === '.' || file[fi] === '..' ||
            (!options.dot && file[fi].charAt(0) === '.')) return false
        }
        return true
      }

      // ok, let's see if we can swallow whatever we can.
      while (fr < fl) {
        var swallowee = file[fr]

        this.debug('\nglobstar while', file, fr, pattern, pr, swallowee)

        // XXX remove this slice.  Just pass the start index.
        if (this.matchOne(file.slice(fr), pattern.slice(pr), partial)) {
          this.debug('globstar found match!', fr, fl, swallowee)
          // found a match.
          return true
        } else {
          // can't swallow "." or ".." ever.
          // can only swallow ".foo" when explicitly asked.
          if (swallowee === '.' || swallowee === '..' ||
            (!options.dot && swallowee.charAt(0) === '.')) {
            this.debug('dot detected!', file, fr, pattern, pr)
            break
          }

          // ** swallows a segment, and continue.
          this.debug('globstar swallow a segment, and continue')
          fr++
        }
      }

      // no match was found.
      // However, in partial mode, we can't say this is necessarily over.
      // If there's more *pattern* left, then
      if (partial) {
        // ran out of file
        this.debug('\n>>> no match, partial?', file, fr, pattern, pr)
        if (fr === fl) return true
      }
      return false
    }

    // something other than **
    // non-magic patterns just have to match exactly
    // patterns with magic have been turned into regexps.
    var hit
    if (typeof p === 'string') {
      if (options.nocase) {
        hit = f.toLowerCase() === p.toLowerCase()
      } else {
        hit = f === p
      }
      this.debug('string match', p, f, hit)
    } else {
      hit = f.match(p)
      this.debug('pattern match', p, f, hit)
    }

    if (!hit) return false
  }

  // Note: ending in / means that we'll get a final ""
  // at the end of the pattern.  This can only match a
  // corresponding "" at the end of the file.
  // If the file ends in /, then it can only match a
  // a pattern that ends in /, unless the pattern just
  // doesn't have any more for it. But, a/b/ should *not*
  // match "a/b/*", even though "" matches against the
  // [^/]*? pattern, except in partial mode, where it might
  // simply not be reached yet.
  // However, a/b/ should still satisfy a/*

  // now either we fell off the end of the pattern, or we're done.
  if (fi === fl && pi === pl) {
    // ran out of pattern and filename at the same time.
    // an exact hit!
    return true
  } else if (fi === fl) {
    // ran out of file, but still had pattern left.
    // this is ok if we're doing the match as part of
    // a glob fs traversal.
    return partial
  } else if (pi === pl) {
    // ran out of pattern, still have file left.
    // this is only acceptable if we're on the very last
    // empty segment of a file with a trailing slash.
    // a/* should match a/b/
    var emptyFileEnd = (fi === fl - 1) && (file[fi] === '')
    return emptyFileEnd
  }

  // should be unreachable.
  throw new Error('wtf?')
}

// replace stuff like \* with *
function globUnescape (s) {
  return s.replace(/\\(.)/g, '$1')
}

function regExpEscape (s) {
  return s.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/modern-normalize/modern-normalize.css":
/*!************************************************************!*\
  !*** ./node_modules/modern-normalize/modern-normalize.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/pify/index.js":
/*!************************************!*\
  !*** ./node_modules/pify/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const processFn = (fn, opts) => function () {
	const P = opts.promiseModule;
	const args = new Array(arguments.length);

	for (let i = 0; i < arguments.length; i++) {
		args[i] = arguments[i];
	}

	return new P((resolve, reject) => {
		if (opts.errorFirst) {
			args.push(function (err, result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 1; i < arguments.length; i++) {
						results[i - 1] = arguments[i];
					}

					if (err) {
						results.unshift(err);
						reject(results);
					} else {
						resolve(results);
					}
				} else if (err) {
					reject(err);
				} else {
					resolve(result);
				}
			});
		} else {
			args.push(function (result) {
				if (opts.multiArgs) {
					const results = new Array(arguments.length - 1);

					for (let i = 0; i < arguments.length; i++) {
						results[i] = arguments[i];
					}

					resolve(results);
				} else {
					resolve(result);
				}
			});
		}

		fn.apply(this, args);
	});
};

module.exports = (obj, opts) => {
	opts = Object.assign({
		exclude: [/.+(Sync|Stream)$/],
		errorFirst: true,
		promiseModule: Promise
	}, opts);

	const filter = key => {
		const match = pattern => typeof pattern === 'string' ? key === pattern : pattern.test(key);
		return opts.include ? opts.include.some(match) : !opts.exclude.some(match);
	};

	let ret;
	if (typeof obj === 'function') {
		ret = function () {
			if (opts.excludeMain) {
				return obj.apply(this, arguments);
			}

			return processFn(obj, opts).apply(this, arguments);
		};
	} else {
		ret = Object.create(Object.getPrototypeOf(obj));
	}

	for (const key in obj) { // eslint-disable-line guard-for-in
		const x = obj[key];
		ret[key] = typeof x === 'function' && filter(key) ? processFn(x, opts) : x;
	}

	return ret;
};


/***/ }),

/***/ "./node_modules/prismjs/themes/prism-okaidia.css":
/*!*******************************************************!*\
  !*** ./node_modules/prismjs/themes/prism-okaidia.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/prismjs/themes/prism.css":
/*!***********************************************!*\
  !*** ./node_modules/prismjs/themes/prism.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/prop-types/factoryWithThrowingShims.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithThrowingShims.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");

function emptyFunction() {}

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, isValidElement, REACT_ELEMENT_TYPE; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(/*! ./factoryWithThrowingShims */ "./node_modules/prop-types/factoryWithThrowingShims.js")();
}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/qr.js/lib/8BitByte.js":
/*!********************************************!*\
  !*** ./node_modules/qr.js/lib/8BitByte.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mode = __webpack_require__(/*! ./mode */ "./node_modules/qr.js/lib/mode.js");

function QR8bitByte(data) {
	this.mode = mode.MODE_8BIT_BYTE;
	this.data = data;
}

QR8bitByte.prototype = {

	getLength : function(buffer) {
		return this.data.length;
	},
	
	write : function(buffer) {
		for (var i = 0; i < this.data.length; i++) {
			// not JIS ...
			buffer.put(this.data.charCodeAt(i), 8);
		}
	}
};

module.exports = QR8bitByte;



/***/ }),

/***/ "./node_modules/qr.js/lib/BitBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/qr.js/lib/BitBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function QRBitBuffer() {
	this.buffer = new Array();
	this.length = 0;
}

QRBitBuffer.prototype = {

	get : function(index) {
		var bufIndex = Math.floor(index / 8);
		return ( (this.buffer[bufIndex] >>> (7 - index % 8) ) & 1) == 1;
	},
	
	put : function(num, length) {
		for (var i = 0; i < length; i++) {
			this.putBit( ( (num >>> (length - i - 1) ) & 1) == 1);
		}
	},
	
	getLengthInBits : function() {
		return this.length;
	},
	
	putBit : function(bit) {
	
		var bufIndex = Math.floor(this.length / 8);
		if (this.buffer.length <= bufIndex) {
			this.buffer.push(0);
		}
	
		if (bit) {
			this.buffer[bufIndex] |= (0x80 >>> (this.length % 8) );
		}
	
		this.length++;
	}
};

module.exports = QRBitBuffer;


/***/ }),

/***/ "./node_modules/qr.js/lib/ErrorCorrectLevel.js":
/*!*****************************************************!*\
  !*** ./node_modules/qr.js/lib/ErrorCorrectLevel.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	L : 1,
	M : 0,
	Q : 3,
	H : 2
};



/***/ }),

/***/ "./node_modules/qr.js/lib/Polynomial.js":
/*!**********************************************!*\
  !*** ./node_modules/qr.js/lib/Polynomial.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var math = __webpack_require__(/*! ./math */ "./node_modules/qr.js/lib/math.js");

function QRPolynomial(num, shift) {

	if (num.length == undefined) {
		throw new Error(num.length + "/" + shift);
	}

	var offset = 0;

	while (offset < num.length && num[offset] == 0) {
		offset++;
	}

	this.num = new Array(num.length - offset + shift);
	for (var i = 0; i < num.length - offset; i++) {
		this.num[i] = num[i + offset];
	}
}

QRPolynomial.prototype = {

	get : function(index) {
		return this.num[index];
	},
	
	getLength : function() {
		return this.num.length;
	},
	
	multiply : function(e) {
	
		var num = new Array(this.getLength() + e.getLength() - 1);
	
		for (var i = 0; i < this.getLength(); i++) {
			for (var j = 0; j < e.getLength(); j++) {
				num[i + j] ^= math.gexp(math.glog(this.get(i) ) + math.glog(e.get(j) ) );
			}
		}
	
		return new QRPolynomial(num, 0);
	},
	
	mod : function(e) {
	
		if (this.getLength() - e.getLength() < 0) {
			return this;
		}
	
		var ratio = math.glog(this.get(0) ) - math.glog(e.get(0) );
	
		var num = new Array(this.getLength() );
		
		for (var i = 0; i < this.getLength(); i++) {
			num[i] = this.get(i);
		}
		
		for (var i = 0; i < e.getLength(); i++) {
			num[i] ^= math.gexp(math.glog(e.get(i) ) + ratio);
		}
	
		// recursive call
		return new QRPolynomial(num, 0).mod(e);
	}
};

module.exports = QRPolynomial;


/***/ }),

/***/ "./node_modules/qr.js/lib/QRCode.js":
/*!******************************************!*\
  !*** ./node_modules/qr.js/lib/QRCode.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var BitByte = __webpack_require__(/*! ./8BitByte */ "./node_modules/qr.js/lib/8BitByte.js");
var RSBlock = __webpack_require__(/*! ./RSBlock */ "./node_modules/qr.js/lib/RSBlock.js");
var BitBuffer = __webpack_require__(/*! ./BitBuffer */ "./node_modules/qr.js/lib/BitBuffer.js");
var util = __webpack_require__(/*! ./util */ "./node_modules/qr.js/lib/util.js");
var Polynomial = __webpack_require__(/*! ./Polynomial */ "./node_modules/qr.js/lib/Polynomial.js");

function QRCode(typeNumber, errorCorrectLevel) {
	this.typeNumber = typeNumber;
	this.errorCorrectLevel = errorCorrectLevel;
	this.modules = null;
	this.moduleCount = 0;
	this.dataCache = null;
	this.dataList = [];
}

// for client side minification
var proto = QRCode.prototype;

proto.addData = function(data) {
	var newData = new BitByte(data);
	this.dataList.push(newData);
	this.dataCache = null;
};

proto.isDark = function(row, col) {
	if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
		throw new Error(row + "," + col);
	}
	return this.modules[row][col];
};

proto.getModuleCount = function() {
	return this.moduleCount;
};

proto.make = function() {
	// Calculate automatically typeNumber if provided is < 1
	if (this.typeNumber < 1 ){
		var typeNumber = 1;
		for (typeNumber = 1; typeNumber < 40; typeNumber++) {
			var rsBlocks = RSBlock.getRSBlocks(typeNumber, this.errorCorrectLevel);

			var buffer = new BitBuffer();
			var totalDataCount = 0;
			for (var i = 0; i < rsBlocks.length; i++) {
				totalDataCount += rsBlocks[i].dataCount;
			}

			for (var i = 0; i < this.dataList.length; i++) {
				var data = this.dataList[i];
				buffer.put(data.mode, 4);
				buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
				data.write(buffer);
			}
			if (buffer.getLengthInBits() <= totalDataCount * 8)
				break;
		}
		this.typeNumber = typeNumber;
	}
	this.makeImpl(false, this.getBestMaskPattern() );
};

proto.makeImpl = function(test, maskPattern) {
	
	this.moduleCount = this.typeNumber * 4 + 17;
	this.modules = new Array(this.moduleCount);
	
	for (var row = 0; row < this.moduleCount; row++) {
		
		this.modules[row] = new Array(this.moduleCount);
		
		for (var col = 0; col < this.moduleCount; col++) {
			this.modules[row][col] = null;//(col + row) % 3;
		}
	}

	this.setupPositionProbePattern(0, 0);
	this.setupPositionProbePattern(this.moduleCount - 7, 0);
	this.setupPositionProbePattern(0, this.moduleCount - 7);
	this.setupPositionAdjustPattern();
	this.setupTimingPattern();
	this.setupTypeInfo(test, maskPattern);
	
	if (this.typeNumber >= 7) {
		this.setupTypeNumber(test);
	}

	if (this.dataCache == null) {
		this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
	}

	this.mapData(this.dataCache, maskPattern);
};

proto.setupPositionProbePattern = function(row, col)  {
	
	for (var r = -1; r <= 7; r++) {
		
		if (row + r <= -1 || this.moduleCount <= row + r) continue;
		
		for (var c = -1; c <= 7; c++) {
			
			if (col + c <= -1 || this.moduleCount <= col + c) continue;
			
			if ( (0 <= r && r <= 6 && (c == 0 || c == 6) )
					|| (0 <= c && c <= 6 && (r == 0 || r == 6) )
					|| (2 <= r && r <= 4 && 2 <= c && c <= 4) ) {
				this.modules[row + r][col + c] = true;
			} else {
				this.modules[row + r][col + c] = false;
			}
		}		
	}		
};

proto.getBestMaskPattern = function() {

	var minLostPoint = 0;
	var pattern = 0;

	for (var i = 0; i < 8; i++) {
		
		this.makeImpl(true, i);

		var lostPoint = util.getLostPoint(this);

		if (i == 0 || minLostPoint >  lostPoint) {
			minLostPoint = lostPoint;
			pattern = i;
		}
	}

	return pattern;
};

proto.createMovieClip = function(target_mc, instance_name, depth) {

	var qr_mc = target_mc.createEmptyMovieClip(instance_name, depth);
	var cs = 1;

	this.make();

	for (var row = 0; row < this.modules.length; row++) {
		
		var y = row * cs;
		
		for (var col = 0; col < this.modules[row].length; col++) {

			var x = col * cs;
			var dark = this.modules[row][col];
		
			if (dark) {
				qr_mc.beginFill(0, 100);
				qr_mc.moveTo(x, y);
				qr_mc.lineTo(x + cs, y);
				qr_mc.lineTo(x + cs, y + cs);
				qr_mc.lineTo(x, y + cs);
				qr_mc.endFill();
			}
		}
	}
	
	return qr_mc;
};

proto.setupTimingPattern = function() {
	
	for (var r = 8; r < this.moduleCount - 8; r++) {
		if (this.modules[r][6] != null) {
			continue;
		}
		this.modules[r][6] = (r % 2 == 0);
	}

	for (var c = 8; c < this.moduleCount - 8; c++) {
		if (this.modules[6][c] != null) {
			continue;
		}
		this.modules[6][c] = (c % 2 == 0);
	}
};

proto.setupPositionAdjustPattern = function() {

	var pos = util.getPatternPosition(this.typeNumber);
	
	for (var i = 0; i < pos.length; i++) {
	
		for (var j = 0; j < pos.length; j++) {
		
			var row = pos[i];
			var col = pos[j];
			
			if (this.modules[row][col] != null) {
				continue;
			}
			
			for (var r = -2; r <= 2; r++) {
			
				for (var c = -2; c <= 2; c++) {
				
					if (r == -2 || r == 2 || c == -2 || c == 2
							|| (r == 0 && c == 0) ) {
						this.modules[row + r][col + c] = true;
					} else {
						this.modules[row + r][col + c] = false;
					}
				}
			}
		}
	}
};

proto.setupTypeNumber = function(test) {

	var bits = util.getBCHTypeNumber(this.typeNumber);

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = mod;
	}

	for (var i = 0; i < 18; i++) {
		var mod = (!test && ( (bits >> i) & 1) == 1);
		this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = mod;
	}
};

proto.setupTypeInfo = function(test, maskPattern) {

	var data = (this.errorCorrectLevel << 3) | maskPattern;
	var bits = util.getBCHTypeInfo(data);

	// vertical		
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);

		if (i < 6) {
			this.modules[i][8] = mod;
		} else if (i < 8) {
			this.modules[i + 1][8] = mod;
		} else {
			this.modules[this.moduleCount - 15 + i][8] = mod;
		}
	}

	// horizontal
	for (var i = 0; i < 15; i++) {

		var mod = (!test && ( (bits >> i) & 1) == 1);
		
		if (i < 8) {
			this.modules[8][this.moduleCount - i - 1] = mod;
		} else if (i < 9) {
			this.modules[8][15 - i - 1 + 1] = mod;
		} else {
			this.modules[8][15 - i - 1] = mod;
		}
	}

	// fixed module
	this.modules[this.moduleCount - 8][8] = (!test);
};

proto.mapData = function(data, maskPattern) {
	
	var inc = -1;
	var row = this.moduleCount - 1;
	var bitIndex = 7;
	var byteIndex = 0;
	
	for (var col = this.moduleCount - 1; col > 0; col -= 2) {

		if (col == 6) col--;

		while (true) {

			for (var c = 0; c < 2; c++) {
				
				if (this.modules[row][col - c] == null) {
					
					var dark = false;

					if (byteIndex < data.length) {
						dark = ( ( (data[byteIndex] >>> bitIndex) & 1) == 1);
					}

					var mask = util.getMask(maskPattern, row, col - c);

					if (mask) {
						dark = !dark;
					}
					
					this.modules[row][col - c] = dark;
					bitIndex--;

					if (bitIndex == -1) {
						byteIndex++;
						bitIndex = 7;
					}
				}
			}
							
			row += inc;

			if (row < 0 || this.moduleCount <= row) {
				row -= inc;
				inc = -inc;
				break;
			}
		}
	}
};

QRCode.PAD0 = 0xEC;
QRCode.PAD1 = 0x11;

QRCode.createData = function(typeNumber, errorCorrectLevel, dataList) {
	
	var rsBlocks = RSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
	
	var buffer = new BitBuffer();
	
	for (var i = 0; i < dataList.length; i++) {
		var data = dataList[i];
		buffer.put(data.mode, 4);
		buffer.put(data.getLength(), util.getLengthInBits(data.mode, typeNumber) );
		data.write(buffer);
	}

	// calc num max data.
	var totalDataCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalDataCount += rsBlocks[i].dataCount;
	}

	if (buffer.getLengthInBits() > totalDataCount * 8) {
		throw new Error("code length overflow. ("
			+ buffer.getLengthInBits()
			+ ">"
			+  totalDataCount * 8
			+ ")");
	}

	// end code
	if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
		buffer.put(0, 4);
	}

	// padding
	while (buffer.getLengthInBits() % 8 != 0) {
		buffer.putBit(false);
	}

	// padding
	while (true) {
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD0, 8);
		
		if (buffer.getLengthInBits() >= totalDataCount * 8) {
			break;
		}
		buffer.put(QRCode.PAD1, 8);
	}

	return QRCode.createBytes(buffer, rsBlocks);
};

QRCode.createBytes = function(buffer, rsBlocks) {

	var offset = 0;
	
	var maxDcCount = 0;
	var maxEcCount = 0;
	
	var dcdata = new Array(rsBlocks.length);
	var ecdata = new Array(rsBlocks.length);
	
	for (var r = 0; r < rsBlocks.length; r++) {

		var dcCount = rsBlocks[r].dataCount;
		var ecCount = rsBlocks[r].totalCount - dcCount;

		maxDcCount = Math.max(maxDcCount, dcCount);
		maxEcCount = Math.max(maxEcCount, ecCount);
		
		dcdata[r] = new Array(dcCount);
		
		for (var i = 0; i < dcdata[r].length; i++) {
			dcdata[r][i] = 0xff & buffer.buffer[i + offset];
		}
		offset += dcCount;
		
		var rsPoly = util.getErrorCorrectPolynomial(ecCount);
		var rawPoly = new Polynomial(dcdata[r], rsPoly.getLength() - 1);

		var modPoly = rawPoly.mod(rsPoly);
		ecdata[r] = new Array(rsPoly.getLength() - 1);
		for (var i = 0; i < ecdata[r].length; i++) {
            var modIndex = i + modPoly.getLength() - ecdata[r].length;
			ecdata[r][i] = (modIndex >= 0)? modPoly.get(modIndex) : 0;
		}

	}
	
	var totalCodeCount = 0;
	for (var i = 0; i < rsBlocks.length; i++) {
		totalCodeCount += rsBlocks[i].totalCount;
	}

	var data = new Array(totalCodeCount);
	var index = 0;

	for (var i = 0; i < maxDcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < dcdata[r].length) {
				data[index++] = dcdata[r][i];
			}
		}
	}

	for (var i = 0; i < maxEcCount; i++) {
		for (var r = 0; r < rsBlocks.length; r++) {
			if (i < ecdata[r].length) {
				data[index++] = ecdata[r][i];
			}
		}
	}

	return data;
};

module.exports = QRCode;



/***/ }),

/***/ "./node_modules/qr.js/lib/RSBlock.js":
/*!*******************************************!*\
  !*** ./node_modules/qr.js/lib/RSBlock.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// ErrorCorrectLevel
var ECL = __webpack_require__(/*! ./ErrorCorrectLevel */ "./node_modules/qr.js/lib/ErrorCorrectLevel.js");

function QRRSBlock(totalCount, dataCount) {
	this.totalCount = totalCount;
	this.dataCount  = dataCount;
}

QRRSBlock.RS_BLOCK_TABLE = [

	// L
	// M
	// Q
	// H

	// 1
	[1, 26, 19],
	[1, 26, 16],
	[1, 26, 13],
	[1, 26, 9],
	
	// 2
	[1, 44, 34],
	[1, 44, 28],
	[1, 44, 22],
	[1, 44, 16],

	// 3
	[1, 70, 55],
	[1, 70, 44],
	[2, 35, 17],
	[2, 35, 13],

	// 4		
	[1, 100, 80],
	[2, 50, 32],
	[2, 50, 24],
	[4, 25, 9],
	
	// 5
	[1, 134, 108],
	[2, 67, 43],
	[2, 33, 15, 2, 34, 16],
	[2, 33, 11, 2, 34, 12],
	
	// 6
	[2, 86, 68],
	[4, 43, 27],
	[4, 43, 19],
	[4, 43, 15],
	
	// 7		
	[2, 98, 78],
	[4, 49, 31],
	[2, 32, 14, 4, 33, 15],
	[4, 39, 13, 1, 40, 14],
	
	// 8
	[2, 121, 97],
	[2, 60, 38, 2, 61, 39],
	[4, 40, 18, 2, 41, 19],
	[4, 40, 14, 2, 41, 15],
	
	// 9
	[2, 146, 116],
	[3, 58, 36, 2, 59, 37],
	[4, 36, 16, 4, 37, 17],
	[4, 36, 12, 4, 37, 13],
	
	// 10		
	[2, 86, 68, 2, 87, 69],
	[4, 69, 43, 1, 70, 44],
	[6, 43, 19, 2, 44, 20],
	[6, 43, 15, 2, 44, 16],

	// 11
	[4, 101, 81],
	[1, 80, 50, 4, 81, 51],
	[4, 50, 22, 4, 51, 23],
	[3, 36, 12, 8, 37, 13],

	// 12
	[2, 116, 92, 2, 117, 93],
	[6, 58, 36, 2, 59, 37],
	[4, 46, 20, 6, 47, 21],
	[7, 42, 14, 4, 43, 15],

	// 13
	[4, 133, 107],
	[8, 59, 37, 1, 60, 38],
	[8, 44, 20, 4, 45, 21],
	[12, 33, 11, 4, 34, 12],

	// 14
	[3, 145, 115, 1, 146, 116],
	[4, 64, 40, 5, 65, 41],
	[11, 36, 16, 5, 37, 17],
	[11, 36, 12, 5, 37, 13],

	// 15
	[5, 109, 87, 1, 110, 88],
	[5, 65, 41, 5, 66, 42],
	[5, 54, 24, 7, 55, 25],
	[11, 36, 12],

	// 16
	[5, 122, 98, 1, 123, 99],
	[7, 73, 45, 3, 74, 46],
	[15, 43, 19, 2, 44, 20],
	[3, 45, 15, 13, 46, 16],

	// 17
	[1, 135, 107, 5, 136, 108],
	[10, 74, 46, 1, 75, 47],
	[1, 50, 22, 15, 51, 23],
	[2, 42, 14, 17, 43, 15],

	// 18
	[5, 150, 120, 1, 151, 121],
	[9, 69, 43, 4, 70, 44],
	[17, 50, 22, 1, 51, 23],
	[2, 42, 14, 19, 43, 15],

	// 19
	[3, 141, 113, 4, 142, 114],
	[3, 70, 44, 11, 71, 45],
	[17, 47, 21, 4, 48, 22],
	[9, 39, 13, 16, 40, 14],

	// 20
	[3, 135, 107, 5, 136, 108],
	[3, 67, 41, 13, 68, 42],
	[15, 54, 24, 5, 55, 25],
	[15, 43, 15, 10, 44, 16],

	// 21
	[4, 144, 116, 4, 145, 117],
	[17, 68, 42],
	[17, 50, 22, 6, 51, 23],
	[19, 46, 16, 6, 47, 17],

	// 22
	[2, 139, 111, 7, 140, 112],
	[17, 74, 46],
	[7, 54, 24, 16, 55, 25],
	[34, 37, 13],

	// 23
	[4, 151, 121, 5, 152, 122],
	[4, 75, 47, 14, 76, 48],
	[11, 54, 24, 14, 55, 25],
	[16, 45, 15, 14, 46, 16],

	// 24
	[6, 147, 117, 4, 148, 118],
	[6, 73, 45, 14, 74, 46],
	[11, 54, 24, 16, 55, 25],
	[30, 46, 16, 2, 47, 17],

	// 25
	[8, 132, 106, 4, 133, 107],
	[8, 75, 47, 13, 76, 48],
	[7, 54, 24, 22, 55, 25],
	[22, 45, 15, 13, 46, 16],

	// 26
	[10, 142, 114, 2, 143, 115],
	[19, 74, 46, 4, 75, 47],
	[28, 50, 22, 6, 51, 23],
	[33, 46, 16, 4, 47, 17],

	// 27
	[8, 152, 122, 4, 153, 123],
	[22, 73, 45, 3, 74, 46],
	[8, 53, 23, 26, 54, 24],
	[12, 45, 15, 28, 46, 16],

	// 28
	[3, 147, 117, 10, 148, 118],
	[3, 73, 45, 23, 74, 46],
	[4, 54, 24, 31, 55, 25],
	[11, 45, 15, 31, 46, 16],

	// 29
	[7, 146, 116, 7, 147, 117],
	[21, 73, 45, 7, 74, 46],
	[1, 53, 23, 37, 54, 24],
	[19, 45, 15, 26, 46, 16],

	// 30
	[5, 145, 115, 10, 146, 116],
	[19, 75, 47, 10, 76, 48],
	[15, 54, 24, 25, 55, 25],
	[23, 45, 15, 25, 46, 16],

	// 31
	[13, 145, 115, 3, 146, 116],
	[2, 74, 46, 29, 75, 47],
	[42, 54, 24, 1, 55, 25],
	[23, 45, 15, 28, 46, 16],

	// 32
	[17, 145, 115],
	[10, 74, 46, 23, 75, 47],
	[10, 54, 24, 35, 55, 25],
	[19, 45, 15, 35, 46, 16],

	// 33
	[17, 145, 115, 1, 146, 116],
	[14, 74, 46, 21, 75, 47],
	[29, 54, 24, 19, 55, 25],
	[11, 45, 15, 46, 46, 16],

	// 34
	[13, 145, 115, 6, 146, 116],
	[14, 74, 46, 23, 75, 47],
	[44, 54, 24, 7, 55, 25],
	[59, 46, 16, 1, 47, 17],

	// 35
	[12, 151, 121, 7, 152, 122],
	[12, 75, 47, 26, 76, 48],
	[39, 54, 24, 14, 55, 25],
	[22, 45, 15, 41, 46, 16],

	// 36
	[6, 151, 121, 14, 152, 122],
	[6, 75, 47, 34, 76, 48],
	[46, 54, 24, 10, 55, 25],
	[2, 45, 15, 64, 46, 16],

	// 37
	[17, 152, 122, 4, 153, 123],
	[29, 74, 46, 14, 75, 47],
	[49, 54, 24, 10, 55, 25],
	[24, 45, 15, 46, 46, 16],

	// 38
	[4, 152, 122, 18, 153, 123],
	[13, 74, 46, 32, 75, 47],
	[48, 54, 24, 14, 55, 25],
	[42, 45, 15, 32, 46, 16],

	// 39
	[20, 147, 117, 4, 148, 118],
	[40, 75, 47, 7, 76, 48],
	[43, 54, 24, 22, 55, 25],
	[10, 45, 15, 67, 46, 16],

	// 40
	[19, 148, 118, 6, 149, 119],
	[18, 75, 47, 31, 76, 48],
	[34, 54, 24, 34, 55, 25],
	[20, 45, 15, 61, 46, 16]
];

QRRSBlock.getRSBlocks = function(typeNumber, errorCorrectLevel) {
	
	var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
	
	if (rsBlock == undefined) {
		throw new Error("bad rs block @ typeNumber:" + typeNumber + "/errorCorrectLevel:" + errorCorrectLevel);
	}

	var length = rsBlock.length / 3;
	
	var list = new Array();
	
	for (var i = 0; i < length; i++) {

		var count = rsBlock[i * 3 + 0];
		var totalCount = rsBlock[i * 3 + 1];
		var dataCount  = rsBlock[i * 3 + 2];

		for (var j = 0; j < count; j++) {
			list.push(new QRRSBlock(totalCount, dataCount) );	
		}
	}
	
	return list;
}

QRRSBlock.getRsBlockTable = function(typeNumber, errorCorrectLevel) {

	switch(errorCorrectLevel) {
	case ECL.L :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
	case ECL.M :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
	case ECL.Q :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
	case ECL.H :
		return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
	default :
		return undefined;
	}
}

module.exports = QRRSBlock;


/***/ }),

/***/ "./node_modules/qr.js/lib/math.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/math.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var QRMath = {

	glog : function(n) {
	
		if (n < 1) {
			throw new Error("glog(" + n + ")");
		}
		
		return QRMath.LOG_TABLE[n];
	},
	
	gexp : function(n) {
	
		while (n < 0) {
			n += 255;
		}
	
		while (n >= 256) {
			n -= 255;
		}
	
		return QRMath.EXP_TABLE[n];
	},
	
	EXP_TABLE : new Array(256),
	
	LOG_TABLE : new Array(256)

};
	
for (var i = 0; i < 8; i++) {
	QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
	QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4]
		^ QRMath.EXP_TABLE[i - 5]
		^ QRMath.EXP_TABLE[i - 6]
		^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
	QRMath.LOG_TABLE[QRMath.EXP_TABLE[i] ] = i;
}

module.exports = QRMath;


/***/ }),

/***/ "./node_modules/qr.js/lib/mode.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/mode.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	MODE_NUMBER :		1 << 0,
	MODE_ALPHA_NUM : 	1 << 1,
	MODE_8BIT_BYTE : 	1 << 2,
	MODE_KANJI :		1 << 3
};


/***/ }),

/***/ "./node_modules/qr.js/lib/util.js":
/*!****************************************!*\
  !*** ./node_modules/qr.js/lib/util.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Mode = __webpack_require__(/*! ./mode */ "./node_modules/qr.js/lib/mode.js");
var Polynomial = __webpack_require__(/*! ./Polynomial */ "./node_modules/qr.js/lib/Polynomial.js");
var math = __webpack_require__(/*! ./math */ "./node_modules/qr.js/lib/math.js");

var QRMaskPattern = {
	PATTERN000 : 0,
	PATTERN001 : 1,
	PATTERN010 : 2,
	PATTERN011 : 3,
	PATTERN100 : 4,
	PATTERN101 : 5,
	PATTERN110 : 6,
	PATTERN111 : 7
};

var QRUtil = {

    PATTERN_POSITION_TABLE : [
	    [],
	    [6, 18],
	    [6, 22],
	    [6, 26],
	    [6, 30],
	    [6, 34],
	    [6, 22, 38],
	    [6, 24, 42],
	    [6, 26, 46],
	    [6, 28, 50],
	    [6, 30, 54],		
	    [6, 32, 58],
	    [6, 34, 62],
	    [6, 26, 46, 66],
	    [6, 26, 48, 70],
	    [6, 26, 50, 74],
	    [6, 30, 54, 78],
	    [6, 30, 56, 82],
	    [6, 30, 58, 86],
	    [6, 34, 62, 90],
	    [6, 28, 50, 72, 94],
	    [6, 26, 50, 74, 98],
	    [6, 30, 54, 78, 102],
	    [6, 28, 54, 80, 106],
	    [6, 32, 58, 84, 110],
	    [6, 30, 58, 86, 114],
	    [6, 34, 62, 90, 118],
	    [6, 26, 50, 74, 98, 122],
	    [6, 30, 54, 78, 102, 126],
	    [6, 26, 52, 78, 104, 130],
	    [6, 30, 56, 82, 108, 134],
	    [6, 34, 60, 86, 112, 138],
	    [6, 30, 58, 86, 114, 142],
	    [6, 34, 62, 90, 118, 146],
	    [6, 30, 54, 78, 102, 126, 150],
	    [6, 24, 50, 76, 102, 128, 154],
	    [6, 28, 54, 80, 106, 132, 158],
	    [6, 32, 58, 84, 110, 136, 162],
	    [6, 26, 54, 82, 110, 138, 166],
	    [6, 30, 58, 86, 114, 142, 170]
    ],

    G15 : (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
    G18 : (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
    G15_MASK : (1 << 14) | (1 << 12) | (1 << 10)	| (1 << 4) | (1 << 1),

    getBCHTypeInfo : function(data) {
	    var d = data << 10;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
		    d ^= (QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) ) ); 	
	    }
	    return ( (data << 10) | d) ^ QRUtil.G15_MASK;
    },

    getBCHTypeNumber : function(data) {
	    var d = data << 12;
	    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
		    d ^= (QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) ) ); 	
	    }
	    return (data << 12) | d;
    },

    getBCHDigit : function(data) {

	    var digit = 0;

	    while (data != 0) {
		    digit++;
		    data >>>= 1;
	    }

	    return digit;
    },

    getPatternPosition : function(typeNumber) {
	    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1];
    },

    getMask : function(maskPattern, i, j) {
	    
	    switch (maskPattern) {
		    
	    case QRMaskPattern.PATTERN000 : return (i + j) % 2 == 0;
	    case QRMaskPattern.PATTERN001 : return i % 2 == 0;
	    case QRMaskPattern.PATTERN010 : return j % 3 == 0;
	    case QRMaskPattern.PATTERN011 : return (i + j) % 3 == 0;
	    case QRMaskPattern.PATTERN100 : return (Math.floor(i / 2) + Math.floor(j / 3) ) % 2 == 0;
	    case QRMaskPattern.PATTERN101 : return (i * j) % 2 + (i * j) % 3 == 0;
	    case QRMaskPattern.PATTERN110 : return ( (i * j) % 2 + (i * j) % 3) % 2 == 0;
	    case QRMaskPattern.PATTERN111 : return ( (i * j) % 3 + (i + j) % 2) % 2 == 0;

	    default :
		    throw new Error("bad maskPattern:" + maskPattern);
	    }
    },

    getErrorCorrectPolynomial : function(errorCorrectLength) {

	    var a = new Polynomial([1], 0);

	    for (var i = 0; i < errorCorrectLength; i++) {
		    a = a.multiply(new Polynomial([1, math.gexp(i)], 0) );
	    }

	    return a;
    },

    getLengthInBits : function(mode, type) {

	    if (1 <= type && type < 10) {

		    // 1 - 9

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 10;
		    case Mode.MODE_ALPHA_NUM 	: return 9;
		    case Mode.MODE_8BIT_BYTE	: return 8;
		    case Mode.MODE_KANJI  	: return 8;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else if (type < 27) {

		    // 10 - 26

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 12;
		    case Mode.MODE_ALPHA_NUM 	: return 11;
		    case Mode.MODE_8BIT_BYTE	: return 16;
		    case Mode.MODE_KANJI  	: return 10;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else if (type < 41) {

		    // 27 - 40

		    switch(mode) {
		    case Mode.MODE_NUMBER 	: return 14;
		    case Mode.MODE_ALPHA_NUM	: return 13;
		    case Mode.MODE_8BIT_BYTE	: return 16;
		    case Mode.MODE_KANJI  	: return 12;
		    default :
			    throw new Error("mode:" + mode);
		    }

	    } else {
		    throw new Error("type:" + type);
	    }
    },

    getLostPoint : function(qrCode) {
	    
	    var moduleCount = qrCode.getModuleCount();
	    
	    var lostPoint = 0;
	    
	    // LEVEL1
	    
	    for (var row = 0; row < moduleCount; row++) {

		    for (var col = 0; col < moduleCount; col++) {

			    var sameCount = 0;
			    var dark = qrCode.isDark(row, col);

				for (var r = -1; r <= 1; r++) {

				    if (row + r < 0 || moduleCount <= row + r) {
					    continue;
				    }

				    for (var c = -1; c <= 1; c++) {

					    if (col + c < 0 || moduleCount <= col + c) {
						    continue;
					    }

					    if (r == 0 && c == 0) {
						    continue;
					    }

					    if (dark == qrCode.isDark(row + r, col + c) ) {
						    sameCount++;
					    }
				    }
			    }

			    if (sameCount > 5) {
				    lostPoint += (3 + sameCount - 5);
			    }
		    }
	    }

	    // LEVEL2

	    for (var row = 0; row < moduleCount - 1; row++) {
		    for (var col = 0; col < moduleCount - 1; col++) {
			    var count = 0;
			    if (qrCode.isDark(row,     col    ) ) count++;
			    if (qrCode.isDark(row + 1, col    ) ) count++;
			    if (qrCode.isDark(row,     col + 1) ) count++;
			    if (qrCode.isDark(row + 1, col + 1) ) count++;
			    if (count == 0 || count == 4) {
				    lostPoint += 3;
			    }
		    }
	    }

	    // LEVEL3

	    for (var row = 0; row < moduleCount; row++) {
		    for (var col = 0; col < moduleCount - 6; col++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row, col + 1)
					    &&  qrCode.isDark(row, col + 2)
					    &&  qrCode.isDark(row, col + 3)
					    &&  qrCode.isDark(row, col + 4)
					    && !qrCode.isDark(row, col + 5)
					    &&  qrCode.isDark(row, col + 6) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount - 6; row++) {
			    if (qrCode.isDark(row, col)
					    && !qrCode.isDark(row + 1, col)
					    &&  qrCode.isDark(row + 2, col)
					    &&  qrCode.isDark(row + 3, col)
					    &&  qrCode.isDark(row + 4, col)
					    && !qrCode.isDark(row + 5, col)
					    &&  qrCode.isDark(row + 6, col) ) {
				    lostPoint += 40;
			    }
		    }
	    }

	    // LEVEL4
	    
	    var darkCount = 0;

	    for (var col = 0; col < moduleCount; col++) {
		    for (var row = 0; row < moduleCount; row++) {
			    if (qrCode.isDark(row, col) ) {
				    darkCount++;
			    }
		    }
	    }
	    
	    var ratio = Math.abs(100 * darkCount / moduleCount / moduleCount - 50) / 5;
	    lostPoint += ratio * 10;

	    return lostPoint;		
    }
};

module.exports = QRUtil;


/***/ }),

/***/ "./node_modules/qrcode.react/lib/index.js":
/*!************************************************!*\
  !*** ./node_modules/qrcode.react/lib/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = __webpack_require__(/*! react */ "react");

var PropTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"); // qr.js doesn't handle error level of zero (M) so we need to do it right,
// thus the deep require.


var QRCodeImpl = __webpack_require__(/*! qr.js/lib/QRCode */ "./node_modules/qr.js/lib/QRCode.js");

var ErrorCorrectLevel = __webpack_require__(/*! qr.js/lib/ErrorCorrectLevel */ "./node_modules/qr.js/lib/ErrorCorrectLevel.js"); // TODO: pull this off of the QRCode class type so it matches.


// Convert from UTF-16, forcing the use of byte-mode encoding in our QR Code.
// This allows us to encode Hanji, Kanji, emoji, etc. Ideally we'd do more
// detection and not resort to byte-mode if possible, but we're trading off
// a smaller library for a smaller amount of data we can potentially encode.
// Based on http://jonisalonen.com/2012/from-utf-16-to-utf-8-in-javascript/
function convertStr(str) {
  var out = '';

  for (var i = 0; i < str.length; i++) {
    var charcode = str.charCodeAt(i);

    if (charcode < 0x0080) {
      out += String.fromCharCode(charcode);
    } else if (charcode < 0x0800) {
      out += String.fromCharCode(0xc0 | charcode >> 6);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else if (charcode < 0xd800 || charcode >= 0xe000) {
      out += String.fromCharCode(0xe0 | charcode >> 12);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    } else {
      // This is a surrogate pair, so we'll reconsitute the pieces and work
      // from that
      i++;
      charcode = 0x10000 + ((charcode & 0x3ff) << 10 | str.charCodeAt(i) & 0x3ff);
      out += String.fromCharCode(0xf0 | charcode >> 18);
      out += String.fromCharCode(0x80 | charcode >> 12 & 0x3f);
      out += String.fromCharCode(0x80 | charcode >> 6 & 0x3f);
      out += String.fromCharCode(0x80 | charcode & 0x3f);
    }
  }

  return out;
}

var DEFAULT_PROPS = {
  size: 128,
  level: 'L',
  bgColor: '#FFFFFF',
  fgColor: '#000000',
  includeMargin: false
};
var PROP_TYPES =  false ? undefined : {};
var MARGIN_SIZE = 4; // This is *very* rough estimate of max amount of QRCode allowed to be covered.
// It is "wrong" in a lot of ways (area is a terrible way to estimate, it
// really should be number of modules covered), but if for some reason we don't
// get an explicit height or width, I'd rather default to something than throw.

var DEFAULT_IMG_SCALE = 0.1;

function generatePath(modules) {
  var margin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var ops = [];
  modules.forEach(function (row, y) {
    var start = null;
    row.forEach(function (cell, x) {
      if (!cell && start !== null) {
        // M0 0h7v1H0z injects the space with the move and drops the comma,
        // saving a char per operation
        ops.push("M".concat(start + margin, " ").concat(y + margin, "h").concat(x - start, "v1H").concat(start + margin, "z"));
        start = null;
        return;
      } // end of row, clean up or skip


      if (x === row.length - 1) {
        if (!cell) {
          // We would have closed the op above already so this can only mean
          // 2+ light modules in a row.
          return;
        }

        if (start === null) {
          // Just a single dark module.
          ops.push("M".concat(x + margin, ",").concat(y + margin, " h1v1H").concat(x + margin, "z"));
        } else {
          // Otherwise finish the current line.
          ops.push("M".concat(start + margin, ",").concat(y + margin, " h").concat(x + 1 - start, "v1H").concat(start + margin, "z"));
        }

        return;
      }

      if (cell && start === null) {
        start = x;
      }
    });
  });
  return ops.join('');
} // We could just do this in generatePath, except that we want to support
// non-Path2D canvas, so we need to keep it an explicit step.


function excavateModules(modules, excavation) {
  return modules.slice().map(function (row, y) {
    if (y < excavation.y || y >= excavation.y + excavation.h) {
      return row;
    }

    return row.map(function (cell, x) {
      if (x < excavation.x || x >= excavation.x + excavation.w) {
        return cell;
      }

      return false;
    });
  });
}

function getImageSettings(props, cells) {
  var imageSettings = props.imageSettings,
      size = props.size,
      includeMargin = props.includeMargin;

  if (imageSettings == null) {
    return null;
  }

  var margin = includeMargin ? MARGIN_SIZE : 0;
  var numCells = cells.length + margin * 2;
  var defaultSize = Math.floor(size * DEFAULT_IMG_SCALE);
  var scale = numCells / size;
  var w = (imageSettings.width || defaultSize) * scale;
  var h = (imageSettings.height || defaultSize) * scale;
  var x = imageSettings.x == null ? cells.length / 2 - w / 2 : imageSettings.x * scale;
  var y = imageSettings.y == null ? cells.length / 2 - h / 2 : imageSettings.y * scale;
  var excavation = null;

  if (imageSettings.excavate) {
    var floorX = Math.floor(x);
    var floorY = Math.floor(y);
    var ceilW = Math.ceil(w + x - floorX);
    var ceilH = Math.ceil(h + y - floorY);
    excavation = {
      x: floorX,
      y: floorY,
      w: ceilW,
      h: ceilH
    };
  }

  return {
    x: x,
    y: y,
    h: h,
    w: w,
    excavation: excavation
  };
} // For canvas we're going to switch our drawing mode based on whether or not
// the environment supports Path2D. We only need the constructor to be
// supported, but Edge doesn't actually support the path (string) type
// argument. Luckily it also doesn't support the addPath() method. We can
// treat that as the same thing.


var SUPPORTS_PATH2D = function () {
  try {
    new Path2D().addPath(new Path2D());
  } catch (e) {
    return false;
  }

  return true;
}();

var QRCodeCanvas =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(QRCodeCanvas, _React$PureComponent);

  function QRCodeCanvas() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, QRCodeCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(QRCodeCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_canvas", void 0);

    _defineProperty(_assertThisInitialized(_this), "_image", void 0);

    _defineProperty(_assertThisInitialized(_this), "state", {
      imgLoaded: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleImageLoad", function () {
      _this.setState({
        imgLoaded: true
      });
    });

    return _this;
  }

  _createClass(QRCodeCanvas, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.update();
    }
  }, {
    key: "update",
    value: function update() {
      var _this$props = this.props,
          value = _this$props.value,
          size = _this$props.size,
          level = _this$props.level,
          bgColor = _this$props.bgColor,
          fgColor = _this$props.fgColor,
          includeMargin = _this$props.includeMargin,
          imageSettings = _this$props.imageSettings; // We'll use type===-1 to force QRCode to automatically pick the best type

      var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();

      if (this._canvas != null) {
        var canvas = this._canvas;
        var ctx = canvas.getContext('2d');

        if (!ctx) {
          return;
        }

        var cells = qrcode.modules;

        if (cells === null) {
          return;
        }

        var margin = includeMargin ? MARGIN_SIZE : 0;
        var numCells = cells.length + margin * 2;
        var calculatedImageSettings = getImageSettings(this.props, cells);

        if (imageSettings != null && calculatedImageSettings != null) {
          if (calculatedImageSettings.excavation != null) {
            cells = excavateModules(cells, calculatedImageSettings.excavation);
          }
        } // We're going to scale this so that the number of drawable units
        // matches the number of cells. This avoids rounding issues, but does
        // result in some potentially unwanted single pixel issues between
        // blocks, only in environments that don't support Path2D.


        var pixelRatio = window.devicePixelRatio || 1;
        canvas.height = canvas.width = size * pixelRatio;
        var scale = size / numCells * pixelRatio;
        ctx.scale(scale, scale); // Draw solid background, only paint dark modules.

        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, numCells, numCells);
        ctx.fillStyle = fgColor;

        if (SUPPORTS_PATH2D) {
          // $FlowFixMe: Path2D c'tor doesn't support args yet.
          ctx.fill(new Path2D(generatePath(cells, margin)));
        } else {
          cells.forEach(function (row, rdx) {
            row.forEach(function (cell, cdx) {
              if (cell) {
                ctx.fillRect(cdx + margin, rdx + margin, 1, 1);
              }
            });
          });
        }

        if (this.state.imgLoaded && this._image && calculatedImageSettings != null) {
          ctx.drawImage(this._image, calculatedImageSettings.x + margin, calculatedImageSettings.y + margin, calculatedImageSettings.w, calculatedImageSettings.h);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          value = _this$props2.value,
          size = _this$props2.size,
          level = _this$props2.level,
          bgColor = _this$props2.bgColor,
          fgColor = _this$props2.fgColor,
          style = _this$props2.style,
          includeMargin = _this$props2.includeMargin,
          imageSettings = _this$props2.imageSettings,
          otherProps = _objectWithoutProperties(_this$props2, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin", "imageSettings"]);

      var canvasStyle = _objectSpread({
        height: size,
        width: size
      }, style);

      var img = null;
      var imgSrc = imageSettings && imageSettings.src;

      if (imageSettings != null && imgSrc != null) {
        img = React.createElement("img", {
          src: imgSrc,
          style: {
            display: 'none'
          },
          onLoad: this.handleImageLoad,
          ref: function ref(_ref) {
            return _this2._image = _ref;
          }
        });
      }

      return React.createElement(React.Fragment, null, React.createElement("canvas", _extends({
        style: canvasStyle,
        height: size,
        width: size,
        ref: function ref(_ref2) {
          return _this2._canvas = _ref2;
        }
      }, otherProps)), img);
    }
  }]);

  return QRCodeCanvas;
}(React.PureComponent);

_defineProperty(QRCodeCanvas, "defaultProps", DEFAULT_PROPS);

if (false) {}

var QRCodeSVG =
/*#__PURE__*/
function (_React$PureComponent2) {
  _inherits(QRCodeSVG, _React$PureComponent2);

  function QRCodeSVG() {
    _classCallCheck(this, QRCodeSVG);

    return _possibleConstructorReturn(this, _getPrototypeOf(QRCodeSVG).apply(this, arguments));
  }

  _createClass(QRCodeSVG, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          size = _this$props3.size,
          level = _this$props3.level,
          bgColor = _this$props3.bgColor,
          fgColor = _this$props3.fgColor,
          includeMargin = _this$props3.includeMargin,
          imageSettings = _this$props3.imageSettings,
          otherProps = _objectWithoutProperties(_this$props3, ["value", "size", "level", "bgColor", "fgColor", "includeMargin", "imageSettings"]); // We'll use type===-1 to force QRCode to automatically pick the best type


      var qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
      qrcode.addData(convertStr(value));
      qrcode.make();
      var cells = qrcode.modules;

      if (cells === null) {
        return null;
      }

      var margin = includeMargin ? MARGIN_SIZE : 0;
      var numCells = cells.length + margin * 2;
      var calculatedImageSettings = getImageSettings(this.props, cells);
      var image = null;

      if (imageSettings != null && calculatedImageSettings != null) {
        if (calculatedImageSettings.excavation != null) {
          cells = excavateModules(cells, calculatedImageSettings.excavation);
        }

        image = React.createElement("image", {
          xlinkHref: imageSettings.src,
          height: calculatedImageSettings.h,
          width: calculatedImageSettings.w,
          x: calculatedImageSettings.x + margin,
          y: calculatedImageSettings.y + margin,
          preserveAspectRatio: "none"
        });
      } // Drawing strategy: instead of a rect per module, we're going to create a
      // single path for the dark modules and layer that on top of a light rect,
      // for a total of 2 DOM nodes. We pay a bit more in string concat but that's
      // way faster than DOM ops.
      // For level 1, 441 nodes -> 2
      // For level 40, 31329 -> 2


      var fgPath = generatePath(cells, margin);
      return React.createElement("svg", _extends({
        shapeRendering: "crispEdges",
        height: size,
        width: size,
        viewBox: "0 0 ".concat(numCells, " ").concat(numCells)
      }, otherProps), React.createElement("path", {
        fill: bgColor,
        d: "M0,0 h".concat(numCells, "v").concat(numCells, "H0z")
      }), React.createElement("path", {
        fill: fgColor,
        d: fgPath
      }), image);
    }
  }]);

  return QRCodeSVG;
}(React.PureComponent);

_defineProperty(QRCodeSVG, "defaultProps", DEFAULT_PROPS);

if (false) {}

var QRCode = function QRCode(props) {
  var renderAs = props.renderAs,
      otherProps = _objectWithoutProperties(props, ["renderAs"]);

  var Component = renderAs === 'svg' ? QRCodeSVG : QRCodeCanvas;
  return React.createElement(Component, otherProps);
};

QRCode.defaultProps = _objectSpread({
  renderAs: 'canvas'
}, DEFAULT_PROPS);
module.exports = QRCode;

/***/ }),

/***/ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js":
/*!**************************************************************************!*\
  !*** ./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _lodashThrottle = __webpack_require__(/*! lodash.throttle */ "./node_modules/lodash.throttle/index.js");

var _lodashThrottle2 = _interopRequireDefault(_lodashThrottle);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var ScrollAnimation = (function (_Component) {
  _inherits(ScrollAnimation, _Component);

  function ScrollAnimation(props) {
    _classCallCheck(this, ScrollAnimation);

    _get(Object.getPrototypeOf(ScrollAnimation.prototype), "constructor", this).call(this, props);
    this.serverSide = typeof window === "undefined";
    this.listener = (0, _lodashThrottle2["default"])(this.handleScroll.bind(this), 50);
    this.visibility = {
      onScreen: false,
      inViewport: false
    };

    this.state = {
      classes: "animated",
      style: {
        animationDuration: this.props.duration + "s",
        opacity: this.props.initiallyVisible ? 1 : 0
      }
    };
  }

  _createClass(ScrollAnimation, [{
    key: "getElementTop",
    value: function getElementTop(elm) {
      var yPos = 0;
      while (elm && elm.offsetTop !== undefined && elm.clientTop !== undefined) {
        yPos += elm.offsetTop + elm.clientTop;
        elm = elm.offsetParent;
      }
      return yPos;
    }
  }, {
    key: "getScrollPos",
    value: function getScrollPos() {
      if (this.scrollableParent.pageYOffset !== undefined) {
        return this.scrollableParent.pageYOffset;
      }
      return this.scrollableParent.scrollTop;
    }
  }, {
    key: "getScrollableParentHeight",
    value: function getScrollableParentHeight() {
      if (this.scrollableParent.innerHeight !== undefined) {
        return this.scrollableParent.innerHeight;
      }
      return this.scrollableParent.clientHeight;
    }
  }, {
    key: "getViewportTop",
    value: function getViewportTop() {
      return this.getScrollPos() + this.props.offset;
    }
  }, {
    key: "getViewportBottom",
    value: function getViewportBottom() {
      return this.getScrollPos() + this.getScrollableParentHeight() - this.props.offset;
    }
  }, {
    key: "isInViewport",
    value: function isInViewport(y) {
      return y >= this.getViewportTop() && y <= this.getViewportBottom();
    }
  }, {
    key: "isAboveViewport",
    value: function isAboveViewport(y) {
      return y < this.getViewportTop();
    }
  }, {
    key: "isBelowViewport",
    value: function isBelowViewport(y) {
      return y > this.getViewportBottom();
    }
  }, {
    key: "inViewport",
    value: function inViewport(elementTop, elementBottom) {
      return this.isInViewport(elementTop) || this.isInViewport(elementBottom) || this.isAboveViewport(elementTop) && this.isBelowViewport(elementBottom);
    }
  }, {
    key: "onScreen",
    value: function onScreen(elementTop, elementBottom) {
      return !this.isAboveScreen(elementBottom) && !this.isBelowScreen(elementTop);
    }
  }, {
    key: "isAboveScreen",
    value: function isAboveScreen(y) {
      return y < this.getScrollPos();
    }
  }, {
    key: "isBelowScreen",
    value: function isBelowScreen(y) {
      return y > this.getScrollPos() + this.getScrollableParentHeight();
    }
  }, {
    key: "getVisibility",
    value: function getVisibility() {
      var elementTop = this.getElementTop(this.node) - this.getElementTop(this.scrollableParent);
      var elementBottom = elementTop + this.node.clientHeight;
      return {
        inViewport: this.inViewport(elementTop, elementBottom),
        onScreen: this.onScreen(elementTop, elementBottom)
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.serverSide) {
        var parentSelector = this.props.scrollableParentSelector;
        this.scrollableParent = parentSelector ? document.querySelector(parentSelector) : window;
        if (this.scrollableParent && this.scrollableParent.addEventListener) {
          this.scrollableParent.addEventListener("scroll", this.listener);
        } else {
          console.warn("Cannot find element by locator: " + this.props.scrollableParentSelector);
        }
        if (this.props.animatePreScroll) {
          this.handleScroll();
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.delayedAnimationTimeout);
      clearTimeout(this.callbackTimeout);
      if (window && window.removeEventListener) {
        window.removeEventListener("scroll", this.listener);
      }
    }
  }, {
    key: "visibilityHasChanged",
    value: function visibilityHasChanged(previousVis, currentVis) {
      return previousVis.inViewport !== currentVis.inViewport || previousVis.onScreen !== currentVis.onScreen;
    }
  }, {
    key: "animate",
    value: function animate(animation, callback) {
      var _this = this;

      this.delayedAnimationTimeout = setTimeout(function () {
        _this.animating = true;
        _this.setState({
          classes: "animated " + animation,
          style: {
            animationDuration: _this.props.duration + "s"
          }
        });
        _this.callbackTimeout = setTimeout(callback, _this.props.duration * 1000);
      }, this.props.delay);
    }
  }, {
    key: "animateIn",
    value: function animateIn(callback) {
      var _this2 = this;

      this.animate(this.props.animateIn, function () {
        if (!_this2.props.animateOnce) {
          _this2.setState({
            style: {
              animationDuration: _this2.props.duration + "s",
              opacity: 1
            }
          });
          _this2.animating = false;
        }
        var vis = _this2.getVisibility();
        if (callback) {
          callback(vis);
        }
      });
    }
  }, {
    key: "animateOut",
    value: function animateOut(callback) {
      var _this3 = this;

      this.animate(this.props.animateOut, function () {
        _this3.setState({
          classes: "animated",
          style: {
            animationDuration: _this3.props.duration + "s",
            opacity: 0
          }
        });
        var vis = _this3.getVisibility();
        if (vis.inViewport && _this3.props.animateIn) {
          _this3.animateIn(_this3.props.afterAnimatedIn);
        } else {
          _this3.animating = false;
        }

        if (callback) {
          callback(vis);
        }
      });
    }
  }, {
    key: "handleScroll",
    value: function handleScroll() {
      if (!this.animating) {
        var currentVis = this.getVisibility();
        if (this.visibilityHasChanged(this.visibility, currentVis)) {
          clearTimeout(this.delayedAnimationTimeout);
          if (!currentVis.onScreen) {
            this.setState({
              classes: "animated",
              style: {
                animationDuration: this.props.duration + "s",
                opacity: this.props.initiallyVisible ? 1 : 0
              }
            });
          } else if (currentVis.inViewport && this.props.animateIn) {
            this.animateIn(this.props.afterAnimatedIn);
          } else if (currentVis.onScreen && this.visibility.inViewport && this.props.animateOut && this.state.style.opacity === 1) {
            this.animateOut(this.props.afterAnimatedOut);
          }
          this.visibility = currentVis;
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var classes = this.props.className ? this.props.className + " " + this.state.classes : this.state.classes;
      return _react2["default"].createElement(
        "div",
        { ref: function (node) {
            _this4.node = node;
          }, className: classes, style: Object.assign({}, this.state.style, this.props.style) },
        this.props.children
      );
    }
  }]);

  return ScrollAnimation;
})(_react.Component);

exports["default"] = ScrollAnimation;

ScrollAnimation.defaultProps = {
  offset: 150,
  duration: 1,
  initiallyVisible: false,
  delay: 0,
  animateOnce: false,
  animatePreScroll: true
};

ScrollAnimation.propTypes = {
  animateIn: _propTypes2["default"].string,
  animateOut: _propTypes2["default"].string,
  offset: _propTypes2["default"].number,
  duration: _propTypes2["default"].number,
  delay: _propTypes2["default"].number,
  initiallyVisible: _propTypes2["default"].bool,
  animateOnce: _propTypes2["default"].bool,
  style: _propTypes2["default"].object,
  scrollableParentSelector: _propTypes2["default"].string,
  className: _propTypes2["default"].string,
  animatePreScroll: _propTypes2["default"].bool
};
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-collapsible/dist/Collapsible.js":
/*!************************************************************!*\
  !*** ./node_modules/react-collapsible/dist/Collapsible.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapsible = function (_Component) {
  _inherits(Collapsible, _Component);

  function Collapsible(props) {
    _classCallCheck(this, Collapsible);

    var _this = _possibleConstructorReturn(this, (Collapsible.__proto__ || Object.getPrototypeOf(Collapsible)).call(this, props));

    _this.timeout = undefined;

    // Bind class methods
    _this.handleTriggerClick = _this.handleTriggerClick.bind(_this);
    _this.handleTransitionEnd = _this.handleTransitionEnd.bind(_this);
    _this.continueOpenCollapsible = _this.continueOpenCollapsible.bind(_this);
    _this.setInnerRef = _this.setInnerRef.bind(_this);

    // Defaults the dropdown to be closed
    if (props.open) {
      _this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: 'auto',
        transition: 'none',
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false
      };
    } else {
      _this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: 'height ' + props.transitionTime + 'ms ' + props.easing,
        hasBeenOpened: false,
        overflow: 'hidden',
        inTransition: false
      };
    }
    return _this;
  }

  _createClass(Collapsible, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      if (this.state.shouldOpenOnNextCycle) {
        this.continueOpenCollapsible();
      }

      if (prevState.height === 'auto' && this.state.shouldSwitchAutoOnNextCycle === true) {
        window.clearTimeout(this.timeout);
        this.timeout = window.setTimeout(function () {
          // Set small timeout to ensure a true re-render
          _this2.setState({
            height: 0,
            overflow: 'hidden',
            isClosed: true,
            shouldSwitchAutoOnNextCycle: false
          });
        }, 50);
      }

      // If there has been a change in the open prop (controlled by accordion)
      if (prevProps.open !== this.props.open) {
        if (this.props.open === true) {
          this.openCollapsible();
          this.props.onOpening();
        } else {
          this.closeCollapsible();
          this.props.onClosing();
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.clearTimeout(this.timeout);
    }
  }, {
    key: 'closeCollapsible',
    value: function closeCollapsible() {
      this.setState({
        shouldSwitchAutoOnNextCycle: true,
        height: this.innerRef.scrollHeight,
        transition: 'height ' + (this.props.transitionCloseTime ? this.props.transitionCloseTime : this.props.transitionTime) + 'ms ' + this.props.easing,
        inTransition: true
      });
    }
  }, {
    key: 'openCollapsible',
    value: function openCollapsible() {
      this.setState({
        inTransition: true,
        shouldOpenOnNextCycle: true
      });
    }
  }, {
    key: 'continueOpenCollapsible',
    value: function continueOpenCollapsible() {
      this.setState({
        height: this.innerRef.scrollHeight,
        transition: 'height ' + this.props.transitionTime + 'ms ' + this.props.easing,
        isClosed: false,
        hasBeenOpened: true,
        inTransition: true,
        shouldOpenOnNextCycle: false
      });
    }
  }, {
    key: 'handleTriggerClick',
    value: function handleTriggerClick(event) {
      if (this.props.triggerDisabled || this.state.inTransition) {
        return;
      }

      event.preventDefault();

      if (this.props.handleTriggerClick) {
        this.props.handleTriggerClick(this.props.accordionPosition);
      } else {
        if (this.state.isClosed === true) {
          this.openCollapsible();
          this.props.onOpening();
          this.props.onTriggerOpening();
        } else {
          this.closeCollapsible();
          this.props.onClosing();
          this.props.onTriggerClosing();
        }
      }
    }
  }, {
    key: 'renderNonClickableTriggerElement',
    value: function renderNonClickableTriggerElement() {
      if (this.props.triggerSibling && typeof this.props.triggerSibling === 'string') {
        return _react2.default.createElement(
          'span',
          { className: this.props.classParentString + '__trigger-sibling' },
          this.props.triggerSibling
        );
      } else if (this.props.triggerSibling && typeof this.props.triggerSibling === 'function') {
        return this.props.triggerSibling();
      } else if (this.props.triggerSibling) {
        return _react2.default.createElement(this.props.triggerSibling, null);
      }

      return null;
    }
  }, {
    key: 'handleTransitionEnd',
    value: function handleTransitionEnd(e) {
      // only handle transitions that origin from the container of this component
      if (e.target !== this.innerRef) {
        return;
      }
      // Switch to height auto to make the container responsive
      if (!this.state.isClosed) {
        this.setState({ height: 'auto', overflow: this.props.overflowWhenOpen, inTransition: false });
        this.props.onOpen();
      } else {
        this.setState({ inTransition: false });
        this.props.onClose();
      }
    }
  }, {
    key: 'setInnerRef',
    value: function setInnerRef(ref) {
      this.innerRef = ref;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var dropdownStyle = {
        height: this.state.height,
        WebkitTransition: this.state.transition,
        msTransition: this.state.transition,
        transition: this.state.transition,
        overflow: this.state.overflow
      };

      var openClass = this.state.isClosed ? 'is-closed' : 'is-open';
      var disabledClass = this.props.triggerDisabled ? 'is-disabled' : '';

      //If user wants different text when tray is open
      var trigger = this.state.isClosed === false && this.props.triggerWhenOpen !== undefined ? this.props.triggerWhenOpen : this.props.trigger;

      var ContentContainerElement = this.props.contentContainerTagName;

      // If user wants a trigger wrapping element different than 'span'
      var TriggerElement = this.props.triggerTagName;

      // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
      var children = this.props.lazyRender && !this.state.hasBeenOpened && this.state.isClosed && !this.state.inTransition ? null : this.props.children;

      // Construct CSS classes strings
      var triggerClassString = this.props.classParentString + '__trigger ' + openClass + ' ' + disabledClass + ' ' + (this.state.isClosed ? this.props.triggerClassName : this.props.triggerOpenedClassName);
      var parentClassString = this.props.classParentString + ' ' + (this.state.isClosed ? this.props.className : this.props.openedClassName);
      var outerClassString = this.props.classParentString + '__contentOuter ' + this.props.contentOuterClassName;
      var innerClassString = this.props.classParentString + '__contentInner ' + this.props.contentInnerClassName;

      return _react2.default.createElement(
        ContentContainerElement,
        _extends({ className: parentClassString.trim() }, this.props.containerElementProps),
        _react2.default.createElement(
          TriggerElement,
          _extends({
            className: triggerClassString.trim(),
            onClick: this.handleTriggerClick,
            style: this.props.triggerStyle && this.props.triggerStyle,
            onKeyPress: function onKeyPress(event) {
              var key = event.key;

              if (key === ' ' && _this3.props.triggerTagName.toLowerCase() !== 'button' || key === 'Enter') {
                _this3.handleTriggerClick(event);
              }
            },
            tabIndex: this.props.tabIndex && this.props.tabIndex
          }, this.props.triggerElementProps),
          trigger
        ),
        this.renderNonClickableTriggerElement(),
        _react2.default.createElement(
          'div',
          {
            className: outerClassString.trim(),
            style: dropdownStyle,
            onTransitionEnd: this.handleTransitionEnd,
            ref: this.setInnerRef,
            hidden: this.props.contentHiddenWhenClosed && this.state.isClosed && !this.state.inTransition
          },
          _react2.default.createElement(
            'div',
            {
              className: innerClassString.trim()
            },
            children
          )
        )
      );
    }
  }]);

  return Collapsible;
}(_react.Component);

Collapsible.propTypes = {
  transitionTime: _propTypes2.default.number,
  transitionCloseTime: _propTypes2.default.number,
  triggerTagName: _propTypes2.default.string,
  easing: _propTypes2.default.string,
  open: _propTypes2.default.bool,
  containerElementProps: _propTypes2.default.object,
  triggerElementProps: _propTypes2.default.object,
  classParentString: _propTypes2.default.string,
  openedClassName: _propTypes2.default.string,
  triggerStyle: _propTypes2.default.object,
  triggerClassName: _propTypes2.default.string,
  triggerOpenedClassName: _propTypes2.default.string,
  contentOuterClassName: _propTypes2.default.string,
  contentInnerClassName: _propTypes2.default.string,
  accordionPosition: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  handleTriggerClick: _propTypes2.default.func,
  onOpen: _propTypes2.default.func,
  onClose: _propTypes2.default.func,
  onOpening: _propTypes2.default.func,
  onClosing: _propTypes2.default.func,
  onTriggerOpening: _propTypes2.default.func,
  onTriggerClosing: _propTypes2.default.func,
  trigger: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  triggerWhenOpen: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.element]),
  triggerDisabled: _propTypes2.default.bool,
  lazyRender: _propTypes2.default.bool,
  overflowWhenOpen: _propTypes2.default.oneOf(['hidden', 'visible', 'auto', 'scroll', 'inherit', 'initial', 'unset']),
  contentHiddenWhenClosed: _propTypes2.default.bool,
  triggerSibling: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func]),
  tabIndex: _propTypes2.default.number,
  contentContainerTagName: _propTypes2.default.string
};

Collapsible.defaultProps = {
  transitionTime: 400,
  transitionCloseTime: null,
  triggerTagName: 'span',
  easing: 'linear',
  open: false,
  classParentString: 'Collapsible',
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: 'hidden',
  contentHiddenWhenClosed: false,
  openedClassName: '',
  triggerStyle: null,
  triggerClassName: '',
  triggerOpenedClassName: '',
  contentOuterClassName: '',
  contentInnerClassName: '',
  className: '',
  triggerSibling: null,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  onOpening: function onOpening() {},
  onClosing: function onClosing() {},
  onTriggerOpening: function onTriggerOpening() {},
  onTriggerClosing: function onTriggerClosing() {},
  tabIndex: null,
  contentContainerTagName: 'div'
};

exports.default = Collapsible;



/***/ }),

/***/ "./node_modules/react-day-picker/build/Caption.js":
/*!********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Caption.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _LocaleUtils = __webpack_require__(/*! ./LocaleUtils */ "./node_modules/react-day-picker/build/LocaleUtils.js");

var _LocaleUtils2 = _interopRequireDefault(_LocaleUtils);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Caption = function (_Component) {
  _inherits(Caption, _Component);

  function Caption(props) {
    _classCallCheck(this, Caption);

    var _this = _possibleConstructorReturn(this, (Caption.__proto__ || Object.getPrototypeOf(Caption)).call(this, props));

    _this.handleKeyUp = _this.handleKeyUp.bind(_this);
    return _this;
  }

  _createClass(Caption, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.locale !== this.props.locale || nextProps.classNames !== this.props.classNames || nextProps.date.getMonth() !== this.props.date.getMonth() || nextProps.date.getFullYear() !== this.props.date.getFullYear();
    }
  }, {
    key: 'handleKeyUp',
    value: function handleKeyUp(e) {
      if (e.keyCode === _keys.ENTER) {
        this.props.onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          date = _props.date,
          months = _props.months,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          onClick = _props.onClick;

      return _react2.default.createElement(
        'div',
        { className: classNames.caption, role: 'heading' },
        _react2.default.createElement(
          'div',
          { onClick: onClick, onKeyUp: this.handleKeyUp },
          months ? months[date.getMonth()] + ' ' + date.getFullYear() : localeUtils.formatMonthTitle(date, locale)
        )
      );
    }
  }]);

  return Caption;
}(_react.Component);

Caption.propTypes = {
  date: _propTypes2.default.instanceOf(Date),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  classNames: _propTypes2.default.shape({
    caption: _propTypes2.default.string.isRequired
  }).isRequired
};
Caption.defaultProps = {
  localeUtils: _LocaleUtils2.default
};
exports.default = Caption;
//# sourceMappingURL=Caption.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/DateUtils.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-day-picker/build/DateUtils.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clone = clone;
exports.isDate = isDate;
exports.addMonths = addMonths;
exports.isSameDay = isSameDay;
exports.isSameMonth = isSameMonth;
exports.isDayBefore = isDayBefore;
exports.isDayAfter = isDayAfter;
exports.isPastDay = isPastDay;
exports.isFutureDay = isFutureDay;
exports.isDayBetween = isDayBetween;
exports.addDayToRange = addDayToRange;
exports.isDayInRange = isDayInRange;
exports.getWeekNumber = getWeekNumber;
/**
 * Clone a date object.
 *
 * @export
 * @param  {Date} d The date to clone
 * @return {Date} The cloned date
 */
function clone(d) {
  return new Date(d.getTime());
}

/**
 * Return `true` if the passed value is a valid JavaScript Date object.
 *
 * @export
 * @param {any} value
 * @returns {Boolean}
 */
function isDate(value) {
  return value instanceof Date && !isNaN(value.valueOf());
}

/**
 * Return `d` as a new date with `n` months added.
 *
 * @export
 * @param {Date} d
 * @param {number} n
 */
function addMonths(d, n) {
  var newDate = clone(d);
  newDate.setMonth(d.getMonth() + n);
  return newDate;
}

/**
 * Return `true` if two dates are the same day, ignoring the time.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameDay(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Return `true` if two dates fall in the same month.
 *
 * @export
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isSameMonth(d1, d2) {
  if (!d1 || !d2) {
    return false;
  }
  return d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear();
}

/**
 * Returns `true` if the first day is before the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayBefore(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 < day2;
}

/**
 * Returns `true` if the first day is after the second day.
 *
 * @export
 * @param {Date} d1
 * @param {Date} d2
 * @returns {Boolean}
 */
function isDayAfter(d1, d2) {
  var day1 = clone(d1).setHours(0, 0, 0, 0);
  var day2 = clone(d2).setHours(0, 0, 0, 0);
  return day1 > day2;
}

/**
 * Return `true` if a day is in the past, e.g. yesterday or any day
 * before yesterday.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isPastDay(d) {
  var today = new Date();
  today.setHours(0, 0, 0, 0);
  return isDayBefore(d, today);
}

/**
 * Return `true` if a day is in the future, e.g. tomorrow or any day
 * after tomorrow.
 *
 * @export
 * @param  {Date}  d
 * @return {Boolean}
 */
function isFutureDay(d) {
  var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  tomorrow.setHours(0, 0, 0, 0);
  return d >= tomorrow;
}

/**
 * Return `true` if day `d` is between days `d1` and `d2`,
 * without including them.
 *
 * @export
 * @param  {Date}  d
 * @param  {Date}  d1
 * @param  {Date}  d2
 * @return {Boolean}
 */
function isDayBetween(d, d1, d2) {
  var date = clone(d);
  date.setHours(0, 0, 0, 0);
  return isDayAfter(date, d1) && isDayBefore(date, d2) || isDayAfter(date, d2) && isDayBefore(date, d1);
}

/**
 * Add a day to a range and return a new range. A range is an object with
 * `from` and `to` days.
 *
 * @export
 * @param {Date} day
 * @param {Object} range
 * @return {Object} Returns a new range object
 */
function addDayToRange(day) {
  var range = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { from: null, to: null };
  var from = range.from,
      to = range.to;

  if (!from) {
    from = day;
  } else if (from && to && isSameDay(from, to) && isSameDay(day, from)) {
    from = null;
    to = null;
  } else if (to && isDayBefore(day, from)) {
    from = day;
  } else if (to && isSameDay(day, to)) {
    from = day;
    to = day;
  } else {
    to = day;
    if (isDayBefore(to, from)) {
      to = from;
      from = day;
    }
  }

  return { from: from, to: to };
}

/**
 * Return `true` if a day is included in a range of days.
 *
 * @export
 * @param  {Date}  day
 * @param  {Object}  range
 * @return {Boolean}
 */
function isDayInRange(day, range) {
  var from = range.from,
      to = range.to;

  return from && isSameDay(day, from) || to && isSameDay(day, to) || from && to && isDayBetween(day, from, to);
}

/**
 * Return the year's week number (as per ISO, i.e. with the week starting from monday)
 * for the given day.
 *
 * @export
 * @param {Date} day
 * @returns {Number}
 */
function getWeekNumber(day) {
  var date = clone(day);
  date.setHours(0, 0, 0);
  date.setDate(date.getDate() + 4 - (date.getDay() || 7));
  return Math.ceil(((date - new Date(date.getFullYear(), 0, 1)) / 8.64e7 + 1) / 7);
}

exports.default = {
  addDayToRange: addDayToRange,
  addMonths: addMonths,
  clone: clone,
  getWeekNumber: getWeekNumber,
  isDate: isDate,
  isDayAfter: isDayAfter,
  isDayBefore: isDayBefore,
  isDayBetween: isDayBetween,
  isDayInRange: isDayInRange,
  isFutureDay: isFutureDay,
  isPastDay: isPastDay,
  isSameDay: isSameDay,
  isSameMonth: isSameMonth
};
//# sourceMappingURL=DateUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Day.js":
/*!****************************************************!*\
  !*** ./node_modules/react-day-picker/build/Day.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable jsx-a11y/no-static-element-interactions, react/forbid-prop-types */

function handleEvent(handler, day, modifiers) {
  if (!handler) {
    return undefined;
  }
  return function (e) {
    e.persist();
    handler(day, modifiers, e);
  };
}

var Day = function (_Component) {
  _inherits(Day, _Component);

  function Day() {
    _classCallCheck(this, Day);

    return _possibleConstructorReturn(this, (Day.__proto__ || Object.getPrototypeOf(Day)).apply(this, arguments));
  }

  _createClass(Day, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      var _this2 = this;

      var propNames = Object.keys(this.props);
      var nextPropNames = Object.keys(nextProps);
      if (propNames.length !== nextPropNames.length) {
        return true;
      }
      return propNames.some(function (name) {
        if (name === 'modifiers' || name === 'modifiersStyles' || name === 'classNames') {
          var prop = _this2.props[name];
          var nextProp = nextProps[name];
          var modifiers = Object.keys(prop);
          var nextModifiers = Object.keys(nextProp);
          if (modifiers.length !== nextModifiers.length) {
            return true;
          }
          return modifiers.some(function (mod) {
            return !(0, _Helpers.hasOwnProp)(nextProp, mod) || prop[mod] !== nextProp[mod];
          });
        }
        if (name === 'day') {
          return !(0, _DateUtils.isSameDay)(_this2.props[name], nextProps[name]);
        }
        return !(0, _Helpers.hasOwnProp)(nextProps, name) || _this2.props[name] !== nextProps[name];
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          modifiersStyles = _props.modifiersStyles,
          day = _props.day,
          tabIndex = _props.tabIndex,
          empty = _props.empty,
          modifiers = _props.modifiers,
          onMouseEnter = _props.onMouseEnter,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onMouseDown = _props.onMouseDown,
          onClick = _props.onClick,
          onKeyDown = _props.onKeyDown,
          onTouchStart = _props.onTouchStart,
          onTouchEnd = _props.onTouchEnd,
          onFocus = _props.onFocus,
          ariaLabel = _props.ariaLabel,
          ariaDisabled = _props.ariaDisabled,
          ariaSelected = _props.ariaSelected,
          children = _props.children;


      var className = classNames.day;
      if (classNames !== _classNames2.default) {
        // When using CSS modules prefix the modifier as required by the BEM syntax
        className += ' ' + Object.keys(modifiers).join(' ');
      } else {
        className += Object.keys(modifiers).map(function (modifier) {
          return ' ' + className + '--' + modifier;
        }).join('');
      }

      var style = void 0;
      if (modifiersStyles) {
        Object.keys(modifiers).filter(function (modifier) {
          return !!modifiersStyles[modifier];
        }).forEach(function (modifier) {
          style = _extends({}, style, modifiersStyles[modifier]);
        });
      }

      if (empty) {
        return _react2.default.createElement('div', { 'aria-disabled': true, className: className, style: style });
      }
      return _react2.default.createElement(
        'div',
        {
          className: className,
          tabIndex: tabIndex,
          style: style,
          role: 'gridcell',
          'aria-label': ariaLabel,
          'aria-disabled': ariaDisabled,
          'aria-selected': ariaSelected,
          onClick: handleEvent(onClick, day, modifiers),
          onKeyDown: handleEvent(onKeyDown, day, modifiers),
          onMouseEnter: handleEvent(onMouseEnter, day, modifiers),
          onMouseLeave: handleEvent(onMouseLeave, day, modifiers),
          onMouseUp: handleEvent(onMouseUp, day, modifiers),
          onMouseDown: handleEvent(onMouseDown, day, modifiers),
          onTouchEnd: handleEvent(onTouchEnd, day, modifiers),
          onTouchStart: handleEvent(onTouchStart, day, modifiers),
          onFocus: handleEvent(onFocus, day, modifiers)
        },
        children
      );
    }
  }]);

  return Day;
}(_react.Component);

Day.propTypes = {
  classNames: _propTypes2.default.shape({
    day: _propTypes2.default.string.isRequired
  }).isRequired,

  day: _propTypes2.default.instanceOf(Date).isRequired,
  children: _propTypes2.default.node.isRequired,

  ariaDisabled: _propTypes2.default.bool,
  ariaLabel: _propTypes2.default.string,
  ariaSelected: _propTypes2.default.bool,
  empty: _propTypes2.default.bool,
  modifiers: _propTypes2.default.object,
  modifiersStyles: _propTypes2.default.object,
  onClick: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  tabIndex: _propTypes2.default.number
};
Day.defaultProps = {
  tabIndex: -1
};
Day.defaultProps = {
  modifiers: {},
  modifiersStyles: {},
  empty: false
};
exports.default = Day;
//# sourceMappingURL=Day.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/DayPicker.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-day-picker/build/DayPicker.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModifiersUtils = exports.LocaleUtils = exports.DateUtils = exports.DayPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Caption = __webpack_require__(/*! ./Caption */ "./node_modules/react-day-picker/build/Caption.js");

var _Caption2 = _interopRequireDefault(_Caption);

var _Navbar = __webpack_require__(/*! ./Navbar */ "./node_modules/react-day-picker/build/Navbar.js");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Month = __webpack_require__(/*! ./Month */ "./node_modules/react-day-picker/build/Month.js");

var _Month2 = _interopRequireDefault(_Month);

var _Weekday = __webpack_require__(/*! ./Weekday */ "./node_modules/react-day-picker/build/Weekday.js");

var _Weekday2 = _interopRequireDefault(_Weekday);

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var DateUtils = _interopRequireWildcard(_DateUtils);

var _LocaleUtils = __webpack_require__(/*! ./LocaleUtils */ "./node_modules/react-day-picker/build/LocaleUtils.js");

var LocaleUtils = _interopRequireWildcard(_LocaleUtils);

var _ModifiersUtils = __webpack_require__(/*! ./ModifiersUtils */ "./node_modules/react-day-picker/build/ModifiersUtils.js");

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DayPicker = exports.DayPicker = function (_Component) {
  _inherits(DayPicker, _Component);

  function DayPicker(props) {
    _classCallCheck(this, DayPicker);

    var _this = _possibleConstructorReturn(this, (DayPicker.__proto__ || Object.getPrototypeOf(DayPicker)).call(this, props));

    _this.dayPicker = null;

    _this.showNextMonth = function (callback) {
      if (!_this.allowNextMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var nextMonth = DateUtils.addMonths(_this.state.currentMonth, deltaMonths);
      _this.showMonth(nextMonth, callback);
    };

    _this.showPreviousMonth = function (callback) {
      if (!_this.allowPreviousMonth()) {
        return;
      }
      var deltaMonths = _this.props.pagedNavigation ? _this.props.numberOfMonths : 1;
      var previousMonth = DateUtils.addMonths(_this.state.currentMonth, -deltaMonths);
      _this.showMonth(previousMonth, callback);
    };

    _this.handleKeyDown = function (e) {
      e.persist();

      switch (e.keyCode) {
        case _keys.LEFT:
          if (_this.props.dir === 'rtl') {
            _this.showNextMonth();
          } else {
            _this.showPreviousMonth();
          }
          Helpers.cancelEvent(e);
          break;
        case _keys.RIGHT:
          if (_this.props.dir === 'rtl') {
            _this.showPreviousMonth();
          } else {
            _this.showNextMonth();
          }
          Helpers.cancelEvent(e);
          break;
        case _keys.UP:
          _this.showPreviousYear();
          Helpers.cancelEvent(e);
          break;
        case _keys.DOWN:
          _this.showNextYear();
          Helpers.cancelEvent(e);
          break;
        default:
          break;
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(e);
      }
    };

    _this.handleDayKeyDown = function (day, modifiers, e) {
      e.persist();

      switch (e.keyCode) {
        case _keys.LEFT:
          Helpers.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusNextDay(e.target);
          } else {
            _this.focusPreviousDay(e.target);
          }
          break;
        case _keys.RIGHT:
          Helpers.cancelEvent(e);
          if (_this.props.dir === 'rtl') {
            _this.focusPreviousDay(e.target);
          } else {
            _this.focusNextDay(e.target);
          }
          break;
        case _keys.UP:
          Helpers.cancelEvent(e);
          _this.focusPreviousWeek(e.target);
          break;
        case _keys.DOWN:
          Helpers.cancelEvent(e);
          _this.focusNextWeek(e.target);
          break;
        case _keys.ENTER:
        case _keys.SPACE:
          Helpers.cancelEvent(e);
          if (_this.props.onDayClick) {
            _this.handleDayClick(day, modifiers, e);
          }
          break;
        default:
          break;
      }
      if (_this.props.onDayKeyDown) {
        _this.props.onDayKeyDown(day, modifiers, e);
      }
    };

    _this.handleDayClick = function (day, modifiers, e) {
      e.persist();

      if (modifiers[_this.props.classNames.outside] && _this.props.enableOutsideDaysClick) {
        _this.handleOutsideDayClick(day);
      }
      if (_this.props.onDayClick) {
        _this.props.onDayClick(day, modifiers, e);
      }
    };

    _this.handleTodayButtonClick = function (e) {
      var today = new Date();
      var month = new Date(today.getFullYear(), today.getMonth());
      _this.showMonth(month);
      e.target.blur();
      if (_this.props.onTodayButtonClick) {
        e.persist();
        _this.props.onTodayButtonClick(new Date(today.getFullYear(), today.getMonth(), today.getDate()), ModifiersUtils.getModifiersForDay(today, _this.props.modifiers), e);
      }
    };

    var currentMonth = _this.getCurrentMonthFromProps(props);
    _this.state = { currentMonth: currentMonth };
    return _this;
  }

  _createClass(DayPicker, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      // Changing the `month` props means changing the current displayed month
      if (prevProps.month !== this.props.month && !DateUtils.isSameMonth(prevProps.month, this.props.month)) {
        var currentMonth = this.getCurrentMonthFromProps(this.props);
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ currentMonth: currentMonth });
      }
    }
  }, {
    key: 'getCurrentMonthFromProps',


    /**
     * Return the month to be shown in the calendar based on the component props.
     *
     * @param {Object} props
     * @returns Date
     * @memberof DayPicker
     * @private
     */
    value: function getCurrentMonthFromProps(props) {
      var initialMonth = Helpers.startOfMonth(props.month || props.initialMonth || new Date());
      var currentMonth = initialMonth;

      if (props.pagedNavigation && props.numberOfMonths > 1 && props.fromMonth) {
        var fromMonth = Helpers.startOfMonth(props.fromMonth);
        var diffInMonths = Helpers.getMonthsDiff(fromMonth, currentMonth);
        currentMonth = DateUtils.addMonths(fromMonth, Math.floor(diffInMonths / props.numberOfMonths) * props.numberOfMonths);
      } else if (props.toMonth && props.numberOfMonths > 1 && Helpers.getMonthsDiff(currentMonth, props.toMonth) <= 0) {
        currentMonth = DateUtils.addMonths(Helpers.startOfMonth(props.toMonth), 1 - this.props.numberOfMonths);
      }
      return currentMonth;
    }
  }, {
    key: 'getNextNavigableMonth',
    value: function getNextNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
    }
  }, {
    key: 'getPreviousNavigableMonth',
    value: function getPreviousNavigableMonth() {
      return DateUtils.addMonths(this.state.currentMonth, -1);
    }
  }, {
    key: 'allowPreviousMonth',
    value: function allowPreviousMonth() {
      var previousMonth = DateUtils.addMonths(this.state.currentMonth, -1);
      return this.allowMonth(previousMonth);
    }
  }, {
    key: 'allowNextMonth',
    value: function allowNextMonth() {
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, this.props.numberOfMonths);
      return this.allowMonth(nextMonth);
    }
  }, {
    key: 'allowMonth',
    value: function allowMonth(d) {
      var _props = this.props,
          fromMonth = _props.fromMonth,
          toMonth = _props.toMonth,
          canChangeMonth = _props.canChangeMonth;

      if (!canChangeMonth || fromMonth && Helpers.getMonthsDiff(fromMonth, d) < 0 || toMonth && Helpers.getMonthsDiff(toMonth, d) > 0) {
        return false;
      }
      return true;
    }
  }, {
    key: 'allowYearChange',
    value: function allowYearChange() {
      return this.props.canChangeMonth;
    }
  }, {
    key: 'showMonth',
    value: function showMonth(d, callback) {
      var _this2 = this;

      if (!this.allowMonth(d)) {
        return;
      }
      this.setState({ currentMonth: Helpers.startOfMonth(d) }, function () {
        if (callback) {
          callback();
        }
        if (_this2.props.onMonthChange) {
          _this2.props.onMonthChange(_this2.state.currentMonth);
        }
      });
    }
  }, {
    key: 'showNextYear',
    value: function showNextYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, 12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'showPreviousYear',
    value: function showPreviousYear() {
      if (!this.allowYearChange()) {
        return;
      }
      var nextMonth = DateUtils.addMonths(this.state.currentMonth, -12);
      this.showMonth(nextMonth);
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.wrapper.focus();
    }
  }, {
    key: 'focusFirstDayOfMonth',
    value: function focusFirstDayOfMonth() {
      Helpers.getDayNodes(this.dayPicker, this.props.classNames)[0].focus();
    }
  }, {
    key: 'focusLastDayOfMonth',
    value: function focusLastDayOfMonth() {
      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      dayNodes[dayNodes.length - 1].focus();
    }
  }, {
    key: 'focusPreviousDay',
    value: function focusPreviousDay(dayNode) {
      var _this3 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === 0) {
        this.showPreviousMonth(function () {
          return _this3.focusLastDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex - 1].focus();
      }
    }
  }, {
    key: 'focusNextDay',
    value: function focusNextDay(dayNode) {
      var _this4 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      if (dayNodeIndex === -1) return;
      if (dayNodeIndex === dayNodes.length - 1) {
        this.showNextMonth(function () {
          return _this4.focusFirstDayOfMonth();
        });
      } else {
        dayNodes[dayNodeIndex + 1].focus();
      }
    }
  }, {
    key: 'focusNextWeek',
    value: function focusNextWeek(dayNode) {
      var _this5 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInLastWeekOfMonth = dayNodeIndex > dayNodes.length - 8;

      if (isInLastWeekOfMonth) {
        this.showNextMonth(function () {
          var daysAfterIndex = dayNodes.length - dayNodeIndex;
          var nextMonthDayNodeIndex = 7 - daysAfterIndex;
          Helpers.getDayNodes(_this5.dayPicker, _this5.props.classNames)[nextMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex + 7].focus();
      }
    }
  }, {
    key: 'focusPreviousWeek',
    value: function focusPreviousWeek(dayNode) {
      var _this6 = this;

      var dayNodes = Helpers.getDayNodes(this.dayPicker, this.props.classNames);
      var dayNodeIndex = Helpers.nodeListToArray(dayNodes).indexOf(dayNode);
      var isInFirstWeekOfMonth = dayNodeIndex <= 6;

      if (isInFirstWeekOfMonth) {
        this.showPreviousMonth(function () {
          var previousMonthDayNodes = Helpers.getDayNodes(_this6.dayPicker, _this6.props.classNames);
          var startOfLastWeekOfMonth = previousMonthDayNodes.length - 7;
          var previousMonthDayNodeIndex = startOfLastWeekOfMonth + dayNodeIndex;
          previousMonthDayNodes[previousMonthDayNodeIndex].focus();
        });
      } else {
        dayNodes[dayNodeIndex - 7].focus();
      }
    }

    // Event handlers

  }, {
    key: 'handleOutsideDayClick',
    value: function handleOutsideDayClick(day) {
      var currentMonth = this.state.currentMonth;
      var numberOfMonths = this.props.numberOfMonths;

      var diffInMonths = Helpers.getMonthsDiff(currentMonth, day);
      if (diffInMonths > 0 && diffInMonths >= numberOfMonths) {
        this.showNextMonth();
      } else if (diffInMonths < 0) {
        this.showPreviousMonth();
      }
    }
  }, {
    key: 'renderNavbar',
    value: function renderNavbar() {
      var _props2 = this.props,
          labels = _props2.labels,
          locale = _props2.locale,
          localeUtils = _props2.localeUtils,
          canChangeMonth = _props2.canChangeMonth,
          navbarElement = _props2.navbarElement,
          attributes = _objectWithoutProperties(_props2, ['labels', 'locale', 'localeUtils', 'canChangeMonth', 'navbarElement']);

      if (!canChangeMonth) return null;

      var props = {
        month: this.state.currentMonth,
        classNames: this.props.classNames,
        className: this.props.classNames.navBar,
        nextMonth: this.getNextNavigableMonth(),
        previousMonth: this.getPreviousNavigableMonth(),
        showPreviousButton: this.allowPreviousMonth(),
        showNextButton: this.allowNextMonth(),
        onNextClick: this.showNextMonth,
        onPreviousClick: this.showPreviousMonth,
        dir: attributes.dir,
        labels: labels,
        locale: locale,
        localeUtils: localeUtils
      };
      return _react2.default.isValidElement(navbarElement) ? _react2.default.cloneElement(navbarElement, props) : _react2.default.createElement(navbarElement, props);
    }
  }, {
    key: 'renderMonths',
    value: function renderMonths() {
      var months = [];
      var firstDayOfWeek = Helpers.getFirstDayOfWeekFromProps(this.props);
      for (var i = 0; i < this.props.numberOfMonths; i += 1) {
        var month = DateUtils.addMonths(this.state.currentMonth, i);
        months.push(_react2.default.createElement(_Month2.default, _extends({
          key: i
        }, this.props, {
          month: month,
          firstDayOfWeek: firstDayOfWeek,
          onDayKeyDown: this.handleDayKeyDown,
          onDayClick: this.handleDayClick
        })));
      }

      if (this.props.reverseMonths) {
        months.reverse();
      }
      return months;
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      if (this.props.todayButton) {
        return _react2.default.createElement(
          'div',
          { className: this.props.classNames.footer },
          this.renderTodayButton()
        );
      }
      return null;
    }
  }, {
    key: 'renderTodayButton',
    value: function renderTodayButton() {
      return _react2.default.createElement(
        'button',
        {
          type: 'button',
          tabIndex: 0,
          className: this.props.classNames.todayButton,
          'aria-label': this.props.todayButton,
          onClick: this.handleTodayButtonClick
        },
        this.props.todayButton
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var className = this.props.classNames.container;

      if (!this.props.onDayClick) {
        className = className + ' ' + this.props.classNames.interactionDisabled;
      }
      if (this.props.className) {
        className = className + ' ' + this.props.className;
      }
      return _react2.default.createElement(
        'div',
        _extends({}, this.props.containerProps, {
          className: className,
          ref: function ref(el) {
            return _this7.dayPicker = el;
          },
          lang: this.props.locale
        }),
        _react2.default.createElement(
          'div',
          {
            className: this.props.classNames.wrapper,
            ref: function ref(el) {
              return _this7.wrapper = el;
            },
            tabIndex: this.props.canChangeMonth && typeof this.props.tabIndex !== 'undefined' ? this.props.tabIndex : -1,
            onKeyDown: this.handleKeyDown,
            onFocus: this.props.onFocus,
            onBlur: this.props.onBlur
          },
          this.renderNavbar(),
          _react2.default.createElement(
            'div',
            { className: this.props.classNames.months },
            this.renderMonths()
          ),
          this.renderFooter()
        )
      );
    }
  }]);

  return DayPicker;
}(_react.Component);

DayPicker.propTypes = {
  // Rendering months
  initialMonth: _propTypes2.default.instanceOf(Date),
  month: _propTypes2.default.instanceOf(Date),
  numberOfMonths: _propTypes2.default.number,
  fromMonth: _propTypes2.default.instanceOf(Date),
  toMonth: _propTypes2.default.instanceOf(Date),
  canChangeMonth: _propTypes2.default.bool,
  reverseMonths: _propTypes2.default.bool,
  pagedNavigation: _propTypes2.default.bool,
  todayButton: _propTypes2.default.string,
  showWeekNumbers: _propTypes2.default.bool,
  showWeekDays: _propTypes2.default.bool,

  // Modifiers
  selectedDays: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.array]),
  disabledDays: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.func, _propTypes2.default.array]),

  modifiers: _propTypes2.default.object,
  modifiersStyles: _propTypes2.default.object,

  // Localization
  dir: _propTypes2.default.string,
  firstDayOfWeek: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5, 6]),
  labels: _propTypes2.default.shape({
    nextMonth: _propTypes2.default.string.isRequired,
    previousMonth: _propTypes2.default.string.isRequired
  }),
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.shape({
    formatMonthTitle: _propTypes2.default.func,
    formatWeekdayShort: _propTypes2.default.func,
    formatWeekdayLong: _propTypes2.default.func,
    getFirstDayOfWeek: _propTypes2.default.func
  }),
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),

  // Customization
  showOutsideDays: _propTypes2.default.bool,
  enableOutsideDaysClick: _propTypes2.default.bool,
  fixedWeeks: _propTypes2.default.bool,

  // CSS and HTML
  classNames: _propTypes2.default.shape({
    body: _propTypes2.default.string,
    container: _propTypes2.default.string,
    day: _propTypes2.default.string.isRequired,
    disabled: _propTypes2.default.string.isRequired,
    footer: _propTypes2.default.string,
    interactionDisabled: _propTypes2.default.string,
    months: _propTypes2.default.string,
    month: _propTypes2.default.string,
    navBar: _propTypes2.default.string,
    outside: _propTypes2.default.string.isRequired,
    selected: _propTypes2.default.string.isRequired,
    today: _propTypes2.default.string.isRequired,
    todayButton: _propTypes2.default.string,
    week: _propTypes2.default.string,
    wrapper: _propTypes2.default.string
  }),
  className: _propTypes2.default.string,
  containerProps: _propTypes2.default.object,
  tabIndex: _propTypes2.default.number,

  // Custom elements
  renderDay: _propTypes2.default.func,
  renderWeek: _propTypes2.default.func,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),
  navbarElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),
  captionElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react.Component)]),

  // Events
  onBlur: _propTypes2.default.func,
  onFocus: _propTypes2.default.func,
  onKeyDown: _propTypes2.default.func,
  onDayClick: _propTypes2.default.func,
  onDayKeyDown: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  onDayMouseDown: _propTypes2.default.func,
  onDayMouseUp: _propTypes2.default.func,
  onDayTouchStart: _propTypes2.default.func,
  onDayTouchEnd: _propTypes2.default.func,
  onDayFocus: _propTypes2.default.func,
  onMonthChange: _propTypes2.default.func,
  onCaptionClick: _propTypes2.default.func,
  onWeekClick: _propTypes2.default.func,
  onTodayButtonClick: _propTypes2.default.func
};
DayPicker.defaultProps = {
  classNames: _classNames2.default,
  tabIndex: 0,
  numberOfMonths: 1,
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  locale: 'en',
  localeUtils: LocaleUtils,
  showOutsideDays: false,
  enableOutsideDaysClick: true,
  fixedWeeks: false,
  canChangeMonth: true,
  reverseMonths: false,
  pagedNavigation: false,
  showWeekNumbers: false,
  showWeekDays: true,
  renderDay: function renderDay(day) {
    return day.getDate();
  },
  renderWeek: function renderWeek(weekNumber) {
    return weekNumber;
  },
  weekdayElement: _react2.default.createElement(_Weekday2.default, null),
  navbarElement: _react2.default.createElement(_Navbar2.default, { classNames: _classNames2.default }),
  captionElement: _react2.default.createElement(_Caption2.default, { classNames: _classNames2.default })
};
DayPicker.VERSION = '7.4.8';


DayPicker.DateUtils = DateUtils;
DayPicker.LocaleUtils = LocaleUtils;
DayPicker.ModifiersUtils = ModifiersUtils;

exports.DateUtils = DateUtils;
exports.LocaleUtils = LocaleUtils;
exports.ModifiersUtils = ModifiersUtils;
exports.default = DayPicker;
//# sourceMappingURL=DayPicker.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Helpers.js":
/*!********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Helpers.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.cancelEvent = cancelEvent;
exports.getFirstDayOfMonth = getFirstDayOfMonth;
exports.getDaysInMonth = getDaysInMonth;
exports.getModifiersFromProps = getModifiersFromProps;
exports.getFirstDayOfWeekFromProps = getFirstDayOfWeekFromProps;
exports.isRangeOfDates = isRangeOfDates;
exports.getMonthsDiff = getMonthsDiff;
exports.getWeekArray = getWeekArray;
exports.startOfMonth = startOfMonth;
exports.getDayNodes = getDayNodes;
exports.nodeListToArray = nodeListToArray;
exports.hasOwnProp = hasOwnProp;

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var _LocaleUtils = __webpack_require__(/*! ./LocaleUtils */ "./node_modules/react-day-picker/build/LocaleUtils.js");

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function cancelEvent(e) {
  e.preventDefault();
  e.stopPropagation();
}

function getFirstDayOfMonth(d) {
  return new Date(d.getFullYear(), d.getMonth(), 1, 12);
}

function getDaysInMonth(d) {
  var resultDate = getFirstDayOfMonth(d);

  resultDate.setMonth(resultDate.getMonth() + 1);
  resultDate.setDate(resultDate.getDate() - 1);

  return resultDate.getDate();
}

function getModifiersFromProps(props) {
  var modifiers = _extends({}, props.modifiers);
  if (props.selectedDays) {
    modifiers[props.classNames.selected] = props.selectedDays;
  }
  if (props.disabledDays) {
    modifiers[props.classNames.disabled] = props.disabledDays;
  }
  return modifiers;
}

function getFirstDayOfWeekFromProps(props) {
  var firstDayOfWeek = props.firstDayOfWeek,
      _props$locale = props.locale,
      locale = _props$locale === undefined ? 'en' : _props$locale,
      _props$localeUtils = props.localeUtils,
      localeUtils = _props$localeUtils === undefined ? {} : _props$localeUtils;

  if (!isNaN(firstDayOfWeek)) {
    return firstDayOfWeek;
  }
  if (localeUtils.getFirstDayOfWeek) {
    return localeUtils.getFirstDayOfWeek(locale);
  }
  return 0;
}

function isRangeOfDates(value) {
  return !!(value && value.from && value.to);
}

function getMonthsDiff(d1, d2) {
  return d2.getMonth() - d1.getMonth() + 12 * (d2.getFullYear() - d1.getFullYear());
}

function getWeekArray(d) {
  var firstDayOfWeek = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (0, _LocaleUtils.getFirstDayOfWeek)();
  var fixedWeeks = arguments[2];

  var daysInMonth = getDaysInMonth(d);
  var dayArray = [];

  var week = [];
  var weekArray = [];

  for (var i = 1; i <= daysInMonth; i += 1) {
    dayArray.push(new Date(d.getFullYear(), d.getMonth(), i, 12));
  }

  dayArray.forEach(function (day) {
    if (week.length > 0 && day.getDay() === firstDayOfWeek) {
      weekArray.push(week);
      week = [];
    }
    week.push(day);
    if (dayArray.indexOf(day) === dayArray.length - 1) {
      weekArray.push(week);
    }
  });

  // unshift days to start the first week
  var firstWeek = weekArray[0];
  for (var _i = 7 - firstWeek.length; _i > 0; _i -= 1) {
    var outsideDate = (0, _DateUtils.clone)(firstWeek[0]);
    outsideDate.setDate(firstWeek[0].getDate() - 1);
    firstWeek.unshift(outsideDate);
  }

  // push days until the end of the last week
  var lastWeek = weekArray[weekArray.length - 1];
  for (var _i2 = lastWeek.length; _i2 < 7; _i2 += 1) {
    var _outsideDate = (0, _DateUtils.clone)(lastWeek[lastWeek.length - 1]);
    _outsideDate.setDate(lastWeek[lastWeek.length - 1].getDate() + 1);
    lastWeek.push(_outsideDate);
  }

  // add extra weeks to reach 6 weeks
  if (fixedWeeks && weekArray.length < 6) {
    var lastExtraWeek = void 0;

    for (var _i3 = weekArray.length; _i3 < 6; _i3 += 1) {
      lastExtraWeek = weekArray[weekArray.length - 1];
      var lastDay = lastExtraWeek[lastExtraWeek.length - 1];
      var extraWeek = [];

      for (var j = 0; j < 7; j += 1) {
        var _outsideDate2 = (0, _DateUtils.clone)(lastDay);
        _outsideDate2.setDate(lastDay.getDate() + j + 1);
        extraWeek.push(_outsideDate2);
      }

      weekArray.push(extraWeek);
    }
  }

  return weekArray;
}

function startOfMonth(d) {
  var newDate = (0, _DateUtils.clone)(d);
  newDate.setDate(1);
  newDate.setHours(12, 0, 0, 0); // always set noon to avoid time zone issues
  return newDate;
}

function getDayNodes(node, classNames) {
  var outsideClassName = void 0;
  if (classNames === _classNames2.default) {
    // When using CSS modules prefix the modifier as required by the BEM syntax
    outsideClassName = classNames.day + '--' + classNames.outside;
  } else {
    outsideClassName = '' + classNames.outside;
  }
  var dayQuery = classNames.day.replace(/ /g, '.');
  var outsideDayQuery = outsideClassName.replace(/ /g, '.');
  var selector = '.' + dayQuery + ':not(.' + outsideDayQuery + ')';
  return node.querySelectorAll(selector);
}

function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList, 0);
}

function hasOwnProp(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}
//# sourceMappingURL=Helpers.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/LocaleUtils.js":
/*!************************************************************!*\
  !*** ./node_modules/react-day-picker/build/LocaleUtils.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDay = formatDay;
exports.formatMonthTitle = formatMonthTitle;
exports.formatWeekdayShort = formatWeekdayShort;
exports.formatWeekdayLong = formatWeekdayLong;
exports.getFirstDayOfWeek = getFirstDayOfWeek;
exports.getMonths = getMonths;
var WEEKDAYS_LONG = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var WEEKDAYS_SHORT = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function formatDay(day) {
  return day.toDateString();
}

function formatMonthTitle(d) {
  return MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

function formatWeekdayShort(i) {
  return WEEKDAYS_SHORT[i];
}

function formatWeekdayLong(i) {
  return WEEKDAYS_LONG[i];
}

function getFirstDayOfWeek() {
  return 0;
}

function getMonths() {
  return MONTHS;
}

exports.default = {
  formatDay: formatDay,
  formatMonthTitle: formatMonthTitle,
  formatWeekdayShort: formatWeekdayShort,
  formatWeekdayLong: formatWeekdayLong,
  getFirstDayOfWeek: getFirstDayOfWeek,
  getMonths: getMonths
};
//# sourceMappingURL=LocaleUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/ModifiersUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-day-picker/build/ModifiersUtils.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dayMatchesModifier = dayMatchesModifier;
exports.getModifiersForDay = getModifiersForDay;

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

/**
 * Return `true` if a date matches the specified modifier.
 *
 * @export
 * @param {Date} day
 * @param {Any} modifier
 * @return {Boolean}
 */
function dayMatchesModifier(day, modifier) {
  if (!modifier) {
    return false;
  }
  var arr = Array.isArray(modifier) ? modifier : [modifier];
  return arr.some(function (mod) {
    if (!mod) {
      return false;
    }
    if (mod instanceof Date) {
      return (0, _DateUtils.isSameDay)(day, mod);
    }
    if ((0, _Helpers.isRangeOfDates)(mod)) {
      return (0, _DateUtils.isDayInRange)(day, mod);
    }
    if (mod.after && mod.before && (0, _DateUtils.isDayAfter)(mod.before, mod.after)) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) && (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after && mod.before && ((0, _DateUtils.isDayAfter)(mod.after, mod.before) || (0, _DateUtils.isSameDay)(mod.after, mod.before))) {
      return (0, _DateUtils.isDayAfter)(day, mod.after) || (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.after) {
      return (0, _DateUtils.isDayAfter)(day, mod.after);
    }
    if (mod.before) {
      return (0, _DateUtils.isDayBefore)(day, mod.before);
    }
    if (mod.daysOfWeek) {
      return mod.daysOfWeek.some(function (dayOfWeek) {
        return day.getDay() === dayOfWeek;
      });
    }
    if (typeof mod === 'function') {
      return mod(day);
    }
    return false;
  });
}

/**
 * Return the modifiers matching the given day for the given
 * object of modifiers.
 *
 * @export
 * @param {Date} day
 * @param {Object} [modifiersObj={}]
 * @return {Array}
 */
function getModifiersForDay(day) {
  var modifiersObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return Object.keys(modifiersObj).reduce(function (modifiers, modifierName) {
    var value = modifiersObj[modifierName];
    if (dayMatchesModifier(day, value)) {
      modifiers.push(modifierName);
    }
    return modifiers;
  }, []);
}

exports.default = { dayMatchesModifier: dayMatchesModifier, getModifiersForDay: getModifiersForDay };
//# sourceMappingURL=ModifiersUtils.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Month.js":
/*!******************************************************!*\
  !*** ./node_modules/react-day-picker/build/Month.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Weekdays = __webpack_require__(/*! ./Weekdays */ "./node_modules/react-day-picker/build/Weekdays.js");

var _Weekdays2 = _interopRequireDefault(_Weekdays);

var _Day = __webpack_require__(/*! ./Day */ "./node_modules/react-day-picker/build/Day.js");

var _Day2 = _interopRequireDefault(_Day);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

var _ModifiersUtils = __webpack_require__(/*! ./ModifiersUtils */ "./node_modules/react-day-picker/build/ModifiersUtils.js");

var ModifiersUtils = _interopRequireWildcard(_ModifiersUtils);

var _Helpers = __webpack_require__(/*! ./Helpers */ "./node_modules/react-day-picker/build/Helpers.js");

var Helpers = _interopRequireWildcard(_Helpers);

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

var DateUtils = _interopRequireWildcard(_DateUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Month = function (_Component) {
  _inherits(Month, _Component);

  function Month() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Month);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Month.__proto__ || Object.getPrototypeOf(Month)).call.apply(_ref, [this].concat(args))), _this), _this.renderDay = function (day) {
      var monthNumber = _this.props.month.getMonth();
      var propModifiers = Helpers.getModifiersFromProps(_this.props);
      var dayModifiers = ModifiersUtils.getModifiersForDay(day, propModifiers);
      if (DateUtils.isSameDay(day, new Date()) && !Object.prototype.hasOwnProperty.call(propModifiers, _this.props.classNames.today)) {
        dayModifiers.push(_this.props.classNames.today);
      }
      if (day.getMonth() !== monthNumber) {
        dayModifiers.push(_this.props.classNames.outside);
      }

      var isOutside = day.getMonth() !== monthNumber;
      var tabIndex = -1;
      // Focus on the first day of the month
      if (_this.props.onDayClick && !isOutside && day.getDate() === 1) {
        tabIndex = _this.props.tabIndex; // eslint-disable-line prefer-destructuring
      }
      var key = '' + day.getFullYear() + day.getMonth() + day.getDate();
      var modifiers = {};
      dayModifiers.forEach(function (modifier) {
        modifiers[modifier] = true;
      });

      return _react2.default.createElement(
        _Day2.default,
        {
          key: '' + (isOutside ? 'outside-' : '') + key,
          classNames: _this.props.classNames,
          day: day,
          modifiers: modifiers,
          modifiersStyles: _this.props.modifiersStyles,
          empty: isOutside && !_this.props.showOutsideDays && !_this.props.fixedWeeks,
          tabIndex: tabIndex,
          ariaLabel: _this.props.localeUtils.formatDay(day, _this.props.locale),
          ariaDisabled: isOutside || dayModifiers.indexOf(_this.props.classNames.disabled) > -1,
          ariaSelected: dayModifiers.indexOf(_this.props.classNames.selected) > -1,
          onClick: _this.props.onDayClick,
          onFocus: _this.props.onDayFocus,
          onKeyDown: _this.props.onDayKeyDown,
          onMouseEnter: _this.props.onDayMouseEnter,
          onMouseLeave: _this.props.onDayMouseLeave,
          onMouseDown: _this.props.onDayMouseDown,
          onMouseUp: _this.props.onDayMouseUp,
          onTouchEnd: _this.props.onDayTouchEnd,
          onTouchStart: _this.props.onDayTouchStart
        },
        _this.props.renderDay(day, modifiers)
      );
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Month, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          classNames = _props.classNames,
          month = _props.month,
          months = _props.months,
          fixedWeeks = _props.fixedWeeks,
          captionElement = _props.captionElement,
          weekdayElement = _props.weekdayElement,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          firstDayOfWeek = _props.firstDayOfWeek,
          onCaptionClick = _props.onCaptionClick,
          showWeekNumbers = _props.showWeekNumbers,
          showWeekDays = _props.showWeekDays,
          onWeekClick = _props.onWeekClick;


      var captionProps = {
        date: month,
        classNames: classNames,
        months: months,
        localeUtils: localeUtils,
        locale: locale,
        onClick: onCaptionClick ? function (e) {
          return onCaptionClick(month, e);
        } : undefined
      };
      var caption = _react2.default.isValidElement(captionElement) ? _react2.default.cloneElement(captionElement, captionProps) : _react2.default.createElement(captionElement, captionProps);

      var weeks = Helpers.getWeekArray(month, firstDayOfWeek, fixedWeeks);
      return _react2.default.createElement(
        'div',
        { className: classNames.month, role: 'grid' },
        caption,
        showWeekDays && _react2.default.createElement(_Weekdays2.default, {
          classNames: classNames,
          weekdaysShort: weekdaysShort,
          weekdaysLong: weekdaysLong,
          firstDayOfWeek: firstDayOfWeek,
          showWeekNumbers: showWeekNumbers,
          locale: locale,
          localeUtils: localeUtils,
          weekdayElement: weekdayElement
        }),
        _react2.default.createElement(
          'div',
          { className: classNames.body, role: 'rowgroup' },
          weeks.map(function (week) {
            var weekNumber = void 0;
            if (showWeekNumbers) {
              weekNumber = DateUtils.getWeekNumber(week[6]);
            }
            return _react2.default.createElement(
              'div',
              {
                key: week[0].getTime(),
                className: classNames.week,
                role: 'row'
              },
              showWeekNumbers && _react2.default.createElement(
                'div',
                {
                  className: classNames.weekNumber,
                  tabIndex: onWeekClick ? 0 : -1,
                  role: 'gridcell',
                  onClick: onWeekClick ? function (e) {
                    return onWeekClick(weekNumber, week, e);
                  } : undefined,
                  onKeyUp: onWeekClick ? function (e) {
                    return e.keyCode === _keys.ENTER && onWeekClick(weekNumber, week, e);
                  } : undefined
                },
                _this2.props.renderWeek(weekNumber, week, month)
              ),
              week.map(_this2.renderDay)
            );
          })
        )
      );
    }
  }]);

  return Month;
}(_react.Component);

Month.propTypes = {
  classNames: _propTypes2.default.shape({
    body: _propTypes2.default.string.isRequired,
    month: _propTypes2.default.string.isRequired,
    outside: _propTypes2.default.string.isRequired,
    today: _propTypes2.default.string.isRequired,
    week: _propTypes2.default.string.isRequired,
    weekNumber: _propTypes2.default.string.isRequired,
    disabled: _propTypes2.default.string.isRequired,
    selected: _propTypes2.default.string.isRequired
  }).isRequired,
  tabIndex: _propTypes2.default.number,

  month: _propTypes2.default.instanceOf(Date).isRequired,
  months: _propTypes2.default.arrayOf(_propTypes2.default.string),

  modifiersStyles: _propTypes2.default.object,

  showWeekDays: _propTypes2.default.bool,
  showOutsideDays: _propTypes2.default.bool,

  renderDay: _propTypes2.default.func.isRequired,
  renderWeek: _propTypes2.default.func.isRequired,

  captionElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)]).isRequired,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)]),

  fixedWeeks: _propTypes2.default.bool,
  showWeekNumbers: _propTypes2.default.bool,

  locale: _propTypes2.default.string.isRequired,
  localeUtils: _propTypes2.default.object.isRequired,
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),
  firstDayOfWeek: _propTypes2.default.number.isRequired,

  onCaptionClick: _propTypes2.default.func,
  onDayClick: _propTypes2.default.func,
  onDayFocus: _propTypes2.default.func,
  onDayKeyDown: _propTypes2.default.func,
  onDayMouseEnter: _propTypes2.default.func,
  onDayMouseLeave: _propTypes2.default.func,
  onDayMouseDown: _propTypes2.default.func,
  onDayMouseUp: _propTypes2.default.func,
  onDayTouchEnd: _propTypes2.default.func,
  onDayTouchStart: _propTypes2.default.func,
  onWeekClick: _propTypes2.default.func
};
exports.default = Month;
//# sourceMappingURL=Month.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Navbar.js":
/*!*******************************************************!*\
  !*** ./node_modules/react-day-picker/build/Navbar.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classNames = __webpack_require__(/*! ./classNames */ "./node_modules/react-day-picker/build/classNames.js");

var _classNames2 = _interopRequireDefault(_classNames);

var _keys = __webpack_require__(/*! ./keys */ "./node_modules/react-day-picker/build/keys.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Navbar = function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Navbar.__proto__ || Object.getPrototypeOf(Navbar)).call.apply(_ref, [this].concat(args))), _this), _this.handleNextClick = function () {
      if (_this.props.onNextClick) {
        _this.props.onNextClick();
      }
    }, _this.handlePreviousClick = function () {
      if (_this.props.onPreviousClick) {
        _this.props.onPreviousClick();
      }
    }, _this.handleNextKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handleNextClick();
    }, _this.handlePreviousKeyDown = function (e) {
      if (e.keyCode !== _keys.ENTER && e.keyCode !== _keys.SPACE) {
        return;
      }
      e.preventDefault();
      _this.handlePreviousClick();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Navbar, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return nextProps.labels !== this.props.labels || nextProps.dir !== this.props.dir || this.props.showPreviousButton !== nextProps.showPreviousButton || this.props.showNextButton !== nextProps.showNextButton;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          className = _props.className,
          showPreviousButton = _props.showPreviousButton,
          showNextButton = _props.showNextButton,
          labels = _props.labels,
          dir = _props.dir;


      var previousClickHandler = void 0;
      var nextClickHandler = void 0;
      var previousKeyDownHandler = void 0;
      var nextKeyDownHandler = void 0;
      var shouldShowPrevious = void 0;
      var shouldShowNext = void 0;

      if (dir === 'rtl') {
        previousClickHandler = this.handleNextClick;
        nextClickHandler = this.handlePreviousClick;
        previousKeyDownHandler = this.handleNextKeyDown;
        nextKeyDownHandler = this.handlePreviousKeyDown;
        shouldShowNext = showPreviousButton;
        shouldShowPrevious = showNextButton;
      } else {
        previousClickHandler = this.handlePreviousClick;
        nextClickHandler = this.handleNextClick;
        previousKeyDownHandler = this.handlePreviousKeyDown;
        nextKeyDownHandler = this.handleNextKeyDown;
        shouldShowNext = showNextButton;
        shouldShowPrevious = showPreviousButton;
      }

      var previousClassName = shouldShowPrevious ? classNames.navButtonPrev : classNames.navButtonPrev + ' ' + classNames.navButtonInteractionDisabled;

      var nextClassName = shouldShowNext ? classNames.navButtonNext : classNames.navButtonNext + ' ' + classNames.navButtonInteractionDisabled;

      var previousButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.previousMonth,
        key: 'previous',
        className: previousClassName,
        onKeyDown: shouldShowPrevious ? previousKeyDownHandler : undefined,
        onClick: shouldShowPrevious ? previousClickHandler : undefined
      });

      var nextButton = _react2.default.createElement('span', {
        tabIndex: '0',
        role: 'button',
        'aria-label': labels.nextMonth,
        key: 'right',
        className: nextClassName,
        onKeyDown: shouldShowNext ? nextKeyDownHandler : undefined,
        onClick: shouldShowNext ? nextClickHandler : undefined
      });

      return _react2.default.createElement(
        'div',
        { className: className || classNames.navBar },
        dir === 'rtl' ? [nextButton, previousButton] : [previousButton, nextButton]
      );
    }
  }]);

  return Navbar;
}(_react.Component);

Navbar.propTypes = {
  classNames: _propTypes2.default.shape({
    navBar: _propTypes2.default.string.isRequired,
    navButtonPrev: _propTypes2.default.string.isRequired,
    navButtonNext: _propTypes2.default.string.isRequired,
    navButtonInteractionDisabled: _propTypes2.default.string.isRequired
  }),
  className: _propTypes2.default.string,
  showPreviousButton: _propTypes2.default.bool,
  showNextButton: _propTypes2.default.bool,
  onPreviousClick: _propTypes2.default.func,
  onNextClick: _propTypes2.default.func,
  dir: _propTypes2.default.string,
  labels: _propTypes2.default.shape({
    previousMonth: _propTypes2.default.string.isRequired,
    nextMonth: _propTypes2.default.string.isRequired
  })
};
Navbar.defaultProps = {
  classNames: _classNames2.default,
  dir: 'ltr',
  labels: {
    previousMonth: 'Previous Month',
    nextMonth: 'Next Month'
  },
  showPreviousButton: true,
  showNextButton: true
};
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Weekday.js":
/*!********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Weekday.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekday = function (_Component) {
  _inherits(Weekday, _Component);

  function Weekday() {
    _classCallCheck(this, Weekday);

    return _possibleConstructorReturn(this, (Weekday.__proto__ || Object.getPrototypeOf(Weekday)).apply(this, arguments));
  }

  _createClass(Weekday, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          weekday = _props.weekday,
          className = _props.className,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          localeUtils = _props.localeUtils,
          locale = _props.locale;

      var title = void 0;
      if (weekdaysLong) {
        title = weekdaysLong[weekday];
      } else {
        title = localeUtils.formatWeekdayLong(weekday, locale);
      }
      var content = void 0;
      if (weekdaysShort) {
        content = weekdaysShort[weekday];
      } else {
        content = localeUtils.formatWeekdayShort(weekday, locale);
      }

      return _react2.default.createElement(
        'div',
        { className: className, role: 'columnheader' },
        _react2.default.createElement(
          'abbr',
          { title: title },
          content
        )
      );
    }
  }]);

  return Weekday;
}(_react.Component);

Weekday.propTypes = {
  weekday: _propTypes2.default.number,
  className: _propTypes2.default.string,
  locale: _propTypes2.default.string,
  localeUtils: _propTypes2.default.object,

  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string)
};
exports.default = Weekday;
//# sourceMappingURL=Weekday.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/Weekdays.js":
/*!*********************************************************!*\
  !*** ./node_modules/react-day-picker/build/Weekdays.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Weekdays = function (_Component) {
  _inherits(Weekdays, _Component);

  function Weekdays() {
    _classCallCheck(this, Weekdays);

    return _possibleConstructorReturn(this, (Weekdays.__proto__ || Object.getPrototypeOf(Weekdays)).apply(this, arguments));
  }

  _createClass(Weekdays, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return this.props !== nextProps;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          classNames = _props.classNames,
          firstDayOfWeek = _props.firstDayOfWeek,
          showWeekNumbers = _props.showWeekNumbers,
          weekdaysLong = _props.weekdaysLong,
          weekdaysShort = _props.weekdaysShort,
          locale = _props.locale,
          localeUtils = _props.localeUtils,
          weekdayElement = _props.weekdayElement;

      var days = [];
      for (var i = 0; i < 7; i += 1) {
        var weekday = (i + firstDayOfWeek) % 7;
        var elementProps = {
          key: i,
          className: classNames.weekday,
          weekday: weekday,
          weekdaysLong: weekdaysLong,
          weekdaysShort: weekdaysShort,
          localeUtils: localeUtils,
          locale: locale
        };
        var element = _react2.default.isValidElement(weekdayElement) ? _react2.default.cloneElement(weekdayElement, elementProps) : _react2.default.createElement(weekdayElement, elementProps);
        days.push(element);
      }

      return _react2.default.createElement(
        'div',
        { className: classNames.weekdays, role: 'rowgroup' },
        _react2.default.createElement(
          'div',
          { className: classNames.weekdaysRow, role: 'row' },
          showWeekNumbers && _react2.default.createElement('div', { className: classNames.weekday }),
          days
        )
      );
    }
  }]);

  return Weekdays;
}(_react.Component);

Weekdays.propTypes = {
  classNames: _propTypes2.default.shape({
    weekday: _propTypes2.default.string.isRequired,
    weekdays: _propTypes2.default.string.isRequired,
    weekdaysRow: _propTypes2.default.string.isRequired
  }).isRequired,

  firstDayOfWeek: _propTypes2.default.number.isRequired,
  weekdaysLong: _propTypes2.default.arrayOf(_propTypes2.default.string),
  weekdaysShort: _propTypes2.default.arrayOf(_propTypes2.default.string),
  showWeekNumbers: _propTypes2.default.bool,
  locale: _propTypes2.default.string.isRequired,
  localeUtils: _propTypes2.default.object.isRequired,
  weekdayElement: _propTypes2.default.oneOfType([_propTypes2.default.element, _propTypes2.default.func, _propTypes2.default.instanceOf(_react2.default.Component)])
};
exports.default = Weekdays;
//# sourceMappingURL=Weekdays.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/classNames.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-day-picker/build/classNames.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Proxy object to map classnames when css modules are not used

exports.default = {
  container: 'DayPicker',
  wrapper: 'DayPicker-wrapper',
  interactionDisabled: 'DayPicker--interactionDisabled',
  months: 'DayPicker-Months',
  month: 'DayPicker-Month',

  navBar: 'DayPicker-NavBar',
  navButtonPrev: 'DayPicker-NavButton DayPicker-NavButton--prev',
  navButtonNext: 'DayPicker-NavButton DayPicker-NavButton--next',
  navButtonInteractionDisabled: 'DayPicker-NavButton--interactionDisabled',

  caption: 'DayPicker-Caption',
  weekdays: 'DayPicker-Weekdays',
  weekdaysRow: 'DayPicker-WeekdaysRow',
  weekday: 'DayPicker-Weekday',
  body: 'DayPicker-Body',
  week: 'DayPicker-Week',
  weekNumber: 'DayPicker-WeekNumber',
  day: 'DayPicker-Day',
  footer: 'DayPicker-Footer',
  todayButton: 'DayPicker-TodayButton',

  // default modifiers
  today: 'today',
  selected: 'selected',
  disabled: 'disabled',
  outside: 'outside'
};
//# sourceMappingURL=classNames.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-day-picker/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _DayPicker = __webpack_require__(/*! ./DayPicker */ "./node_modules/react-day-picker/build/DayPicker.js");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DayPicker).default;
  }
});

var _DateUtils = __webpack_require__(/*! ./DateUtils */ "./node_modules/react-day-picker/build/DateUtils.js");

Object.defineProperty(exports, 'DateUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_DateUtils).default;
  }
});

var _LocaleUtils = __webpack_require__(/*! ./LocaleUtils */ "./node_modules/react-day-picker/build/LocaleUtils.js");

Object.defineProperty(exports, 'LocaleUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LocaleUtils).default;
  }
});

var _ModifiersUtils = __webpack_require__(/*! ./ModifiersUtils */ "./node_modules/react-day-picker/build/ModifiersUtils.js");

Object.defineProperty(exports, 'ModifiersUtils', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ModifiersUtils).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/build/keys.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/build/keys.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LEFT = exports.LEFT = 37;
var UP = exports.UP = 38;
var RIGHT = exports.RIGHT = 39;
var DOWN = exports.DOWN = 40;
var ENTER = exports.ENTER = 13;
var SPACE = exports.SPACE = 32;
var ESC = exports.ESC = 27;
var TAB = exports.TAB = 9;
//# sourceMappingURL=keys.js.map

/***/ }),

/***/ "./node_modules/react-day-picker/lib/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-day-picker/lib/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-dom/cjs/react-dom.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-dom/cjs/react-dom.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(/*! react */ "react"),n=__webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js"),r=__webpack_require__(/*! scheduler */ "./node_modules/scheduler/index.js");function u(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(u(227));
function ba(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(m){this.onError(m)}}var da=!1,ea=null,fa=!1,ha=null,ia={onError:function(a){da=!0;ea=a}};function ja(a,b,c,d,e,f,g,h,k){da=!1;ea=null;ba.apply(ia,arguments)}function ka(a,b,c,d,e,f,g,h,k){ja.apply(this,arguments);if(da){if(da){var l=ea;da=!1;ea=null}else throw Error(u(198));fa||(fa=!0,ha=l)}}var la=null,ma=null,na=null;
function oa(a,b,c){var d=a.type||"unknown-event";a.currentTarget=na(c);ka(d,b,void 0,a);a.currentTarget=null}var pa=null,qa={};
function ra(){if(pa)for(var a in qa){var b=qa[a],c=pa.indexOf(a);if(!(-1<c))throw Error(u(96,a));if(!sa[c]){if(!b.extractEvents)throw Error(u(97,a));sa[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ta.hasOwnProperty(h))throw Error(u(99,h));ta[h]=f;var k=f.phasedRegistrationNames;if(k){for(e in k)k.hasOwnProperty(e)&&ua(k[e],g,h);e=!0}else f.registrationName?(ua(f.registrationName,g,h),e=!0):e=!1;if(!e)throw Error(u(98,d,a));}}}}
function ua(a,b,c){if(va[a])throw Error(u(100,a));va[a]=b;wa[a]=b.eventTypes[c].dependencies}var sa=[],ta={},va={},wa={};function xa(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!qa.hasOwnProperty(c)||qa[c]!==d){if(qa[c])throw Error(u(102,c));qa[c]=d;b=!0}}b&&ra()}var ya=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),za=null,Aa=null,Ba=null;
function Ca(a){if(a=ma(a)){if("function"!==typeof za)throw Error(u(280));var b=a.stateNode;b&&(b=la(b),za(a.stateNode,a.type,b))}}function Da(a){Aa?Ba?Ba.push(a):Ba=[a]:Aa=a}function Ea(){if(Aa){var a=Aa,b=Ba;Ba=Aa=null;Ca(a);if(b)for(a=0;a<b.length;a++)Ca(b[a])}}function Fa(a,b){return a(b)}function Ga(a,b,c,d,e){return a(b,c,d,e)}function Ha(){}var Ia=Fa,Ja=!1,Ka=!1;function La(){if(null!==Aa||null!==Ba)Ha(),Ea()}
function Ma(a,b,c){if(Ka)return a(b,c);Ka=!0;try{return Ia(a,b,c)}finally{Ka=!1,La()}}var Na=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Oa=Object.prototype.hasOwnProperty,Pa={},Qa={};
function Ra(a){if(Oa.call(Qa,a))return!0;if(Oa.call(Pa,a))return!1;if(Na.test(a))return Qa[a]=!0;Pa[a]=!0;return!1}function Sa(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function Ta(a,b,c,d){if(null===b||"undefined"===typeof b||Sa(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function v(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f}var C={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){C[a]=new v(a,0,!1,a,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];C[b]=new v(b,1,!1,a[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){C[a]=new v(a,2,!1,a.toLowerCase(),null,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){C[a]=new v(a,2,!1,a,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){C[a]=new v(a,3,!1,a.toLowerCase(),null,!1)});
["checked","multiple","muted","selected"].forEach(function(a){C[a]=new v(a,3,!0,a,null,!1)});["capture","download"].forEach(function(a){C[a]=new v(a,4,!1,a,null,!1)});["cols","rows","size","span"].forEach(function(a){C[a]=new v(a,6,!1,a,null,!1)});["rowSpan","start"].forEach(function(a){C[a]=new v(a,5,!1,a.toLowerCase(),null,!1)});var Ua=/[\-:]([a-z])/g;function Va(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(Ua,
Va);C[b]=new v(b,1,!1,a,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(Ua,Va);C[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!1)});
C.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){C[a]=new v(a,1,!1,a.toLowerCase(),null,!0)});var Wa=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Wa.hasOwnProperty("ReactCurrentDispatcher")||(Wa.ReactCurrentDispatcher={current:null});Wa.hasOwnProperty("ReactCurrentBatchConfig")||(Wa.ReactCurrentBatchConfig={suspense:null});
function Xa(a,b,c,d){var e=C.hasOwnProperty(b)?C[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(Ta(b,c,e,d)&&(c=null),d||null===e?Ra(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var Ya=/^(.*)[\\\/]/,E="function"===typeof Symbol&&Symbol.for,Za=E?Symbol.for("react.element"):60103,$a=E?Symbol.for("react.portal"):60106,ab=E?Symbol.for("react.fragment"):60107,bb=E?Symbol.for("react.strict_mode"):60108,cb=E?Symbol.for("react.profiler"):60114,db=E?Symbol.for("react.provider"):60109,eb=E?Symbol.for("react.context"):60110,fb=E?Symbol.for("react.concurrent_mode"):60111,gb=E?Symbol.for("react.forward_ref"):60112,hb=E?Symbol.for("react.suspense"):60113,ib=E?Symbol.for("react.suspense_list"):
60120,jb=E?Symbol.for("react.memo"):60115,kb=E?Symbol.for("react.lazy"):60116,lb=E?Symbol.for("react.block"):60121,mb="function"===typeof Symbol&&Symbol.iterator;function nb(a){if(null===a||"object"!==typeof a)return null;a=mb&&a[mb]||a["@@iterator"];return"function"===typeof a?a:null}function ob(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}}
function pb(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ab:return"Fragment";case $a:return"Portal";case cb:return"Profiler";case bb:return"StrictMode";case hb:return"Suspense";case ib:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case eb:return"Context.Consumer";case db:return"Context.Provider";case gb:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":
"ForwardRef");case jb:return pb(a.type);case lb:return pb(a.render);case kb:if(a=1===a._status?a._result:null)return pb(a)}return null}function qb(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=pb(a.type);c=null;d&&(c=pb(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(Ya,"")+":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f}b+=c;a=a.return}while(a);return b}
function rb(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function sb(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function tb(a){var b=sb(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function xb(a){a._valueTracker||(a._valueTracker=tb(a))}function yb(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=sb(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function zb(a,b){var c=b.checked;return n({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}
function Ab(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=rb(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function Bb(a,b){b=b.checked;null!=b&&Xa(a,"checked",b,!1)}
function Cb(a,b){Bb(a,b);var c=rb(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Db(a,b.type,c):b.hasOwnProperty("defaultValue")&&Db(a,b.type,rb(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function Eb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function Db(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function Fb(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Gb(a,b){a=n({children:void 0},b);if(b=Fb(b.children))a.children=b;return a}
function Hb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+rb(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function Ib(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(u(91));return n({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function Jb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(u(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(u(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:rb(c)}}
function Kb(a,b){var c=rb(b.value),d=rb(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function Lb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var Mb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function Nb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ob(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var Pb,Qb=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==Mb.svg||"innerHTML"in a)a.innerHTML=b;else{Pb=Pb||document.createElement("div");Pb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=Pb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function Rb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}function Sb(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Tb={animationend:Sb("Animation","AnimationEnd"),animationiteration:Sb("Animation","AnimationIteration"),animationstart:Sb("Animation","AnimationStart"),transitionend:Sb("Transition","TransitionEnd")},Ub={},Vb={};
ya&&(Vb=document.createElement("div").style,"AnimationEvent"in window||(delete Tb.animationend.animation,delete Tb.animationiteration.animation,delete Tb.animationstart.animation),"TransitionEvent"in window||delete Tb.transitionend.transition);function Wb(a){if(Ub[a])return Ub[a];if(!Tb[a])return a;var b=Tb[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Vb)return Ub[a]=b[c];return a}
var Xb=Wb("animationend"),Yb=Wb("animationiteration"),Zb=Wb("animationstart"),$b=Wb("transitionend"),ac="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bc=new ("function"===typeof WeakMap?WeakMap:Map);function cc(a){var b=bc.get(a);void 0===b&&(b=new Map,bc.set(a,b));return b}
function dc(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function ec(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function fc(a){if(dc(a)!==a)throw Error(u(188));}
function gc(a){var b=a.alternate;if(!b){b=dc(a);if(null===b)throw Error(u(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return fc(e),a;if(f===d)return fc(e),b;f=f.sibling}throw Error(u(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(u(189));}}if(c.alternate!==d)throw Error(u(190));}if(3!==c.tag)throw Error(u(188));return c.stateNode.current===c?a:b}function hc(a){a=gc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function ic(a,b){if(null==b)throw Error(u(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function jc(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}var kc=null;
function lc(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)oa(a,b[d],c[d]);else b&&oa(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}}function mc(a){null!==a&&(kc=ic(kc,a));a=kc;kc=null;if(a){jc(a,lc);if(kc)throw Error(u(95));if(fa)throw a=ha,fa=!1,ha=null,a;}}
function nc(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function oc(a){if(!ya)return!1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}var pc=[];function qc(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>pc.length&&pc.push(a)}
function rc(a,b,c,d){if(pc.length){var e=pc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return{topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}
function sc(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else{for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=tc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=nc(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,k=0;k<sa.length;k++){var l=sa[k];l&&(l=l.extractEvents(d,b,f,e,g))&&(h=
ic(h,l))}mc(h)}}function uc(a,b,c){if(!c.has(a)){switch(a){case "scroll":vc(b,"scroll",!0);break;case "focus":case "blur":vc(b,"focus",!0);vc(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":oc(a)&&vc(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===ac.indexOf(a)&&F(a,b)}c.set(a,null)}}
var wc,xc,yc,zc=!1,Ac=[],Bc=null,Cc=null,Dc=null,Ec=new Map,Fc=new Map,Gc=[],Hc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),Ic="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");
function Jc(a,b){var c=cc(b);Hc.forEach(function(a){uc(a,b,c)});Ic.forEach(function(a){uc(a,b,c)})}function Kc(a,b,c,d,e){return{blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,container:d}}
function Lc(a,b){switch(a){case "focus":case "blur":Bc=null;break;case "dragenter":case "dragleave":Cc=null;break;case "mouseover":case "mouseout":Dc=null;break;case "pointerover":case "pointerout":Ec.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fc.delete(b.pointerId)}}function Mc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Kc(b,c,d,e,f),null!==b&&(b=Nc(b),null!==b&&xc(b)),a;a.eventSystemFlags|=d;return a}
function Oc(a,b,c,d,e){switch(b){case "focus":return Bc=Mc(Bc,a,b,c,d,e),!0;case "dragenter":return Cc=Mc(Cc,a,b,c,d,e),!0;case "mouseover":return Dc=Mc(Dc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Ec.set(f,Mc(Ec.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,Fc.set(f,Mc(Fc.get(f)||null,a,b,c,d,e)),!0}return!1}
function Pc(a){var b=tc(a.target);if(null!==b){var c=dc(b);if(null!==c)if(b=c.tag,13===b){if(b=ec(c),null!==b){a.blockedOn=b;r.unstable_runWithPriority(a.priority,function(){yc(c)});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}function Qc(a){if(null!==a.blockedOn)return!1;var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Nc(b);null!==c&&xc(c);a.blockedOn=b;return!1}return!0}
function Sc(a,b,c){Qc(a)&&c.delete(b)}function Tc(){for(zc=!1;0<Ac.length;){var a=Ac[0];if(null!==a.blockedOn){a=Nc(a.blockedOn);null!==a&&wc(a);break}var b=Rc(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:Ac.shift()}null!==Bc&&Qc(Bc)&&(Bc=null);null!==Cc&&Qc(Cc)&&(Cc=null);null!==Dc&&Qc(Dc)&&(Dc=null);Ec.forEach(Sc);Fc.forEach(Sc)}function Uc(a,b){a.blockedOn===b&&(a.blockedOn=null,zc||(zc=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Tc)))}
function Vc(a){function b(b){return Uc(b,a)}if(0<Ac.length){Uc(Ac[0],a);for(var c=1;c<Ac.length;c++){var d=Ac[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==Bc&&Uc(Bc,a);null!==Cc&&Uc(Cc,a);null!==Dc&&Uc(Dc,a);Ec.forEach(b);Fc.forEach(b);for(c=0;c<Gc.length;c++)d=Gc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Gc.length&&(c=Gc[0],null===c.blockedOn);)Pc(c),null===c.blockedOn&&Gc.shift()}
var Wc={},Yc=new Map,Zc=new Map,$c=["abort","abort",Xb,"animationEnd",Yb,"animationIteration",Zb,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking",
"seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",$b,"transitionEnd","waiting","waiting"];function ad(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Zc.set(d,b);Yc.set(d,f);Wc[e]=f}}
ad("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);
ad("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);ad($c,2);for(var bd="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),cd=0;cd<bd.length;cd++)Zc.set(bd[cd],0);
var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function F(a,b){vc(b,a,!1)}function vc(a,b,c){var d=Zc.get(b);switch(void 0===d?2:d){case 0:d=gd.bind(null,b,1,a);break;case 1:d=hd.bind(null,b,1,a);break;default:d=id.bind(null,b,1,a)}c?a.addEventListener(b,d,!0):a.addEventListener(b,d,!1)}function gd(a,b,c,d){Ja||Ha();var e=id,f=Ja;Ja=!0;try{Ga(e,a,b,c,d)}finally{(Ja=f)||La()}}function hd(a,b,c,d){ed(dd,id.bind(null,a,b,c,d))}
function id(a,b,c,d){if(fd)if(0<Ac.length&&-1<Hc.indexOf(a))a=Kc(null,a,b,c,d),Ac.push(a);else{var e=Rc(a,b,c,d);if(null===e)Lc(a,d);else if(-1<Hc.indexOf(a))a=Kc(e,a,b,c,d),Ac.push(a);else if(!Oc(e,a,b,c,d)){Lc(a,d);a=rc(a,d,null,b);try{Ma(sc,a)}finally{qc(a)}}}}
function Rc(a,b,c,d){c=nc(d);c=tc(c);if(null!==c){var e=dc(c);if(null===e)c=null;else{var f=e.tag;if(13===f){c=ec(e);if(null!==c)return c;c=null}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null}else e!==c&&(c=null)}}a=rc(a,d,c,b);try{Ma(sc,a)}finally{qc(a)}return null}
var jd={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},kd=["Webkit","ms","Moz","O"];Object.keys(jd).forEach(function(a){kd.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);jd[b]=jd[a]})});function ld(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||jd.hasOwnProperty(a)&&jd[a]?(""+b).trim():b+"px"}
function md(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=ld(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var nd=n({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function od(a,b){if(b){if(nd[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(u(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(u(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(u(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(u(62,""));}}
function pd(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}var qd=Mb.html;function rd(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=cc(a);b=wa[b];for(var d=0;d<b.length;d++)uc(b[d],a,c)}function sd(){}
function td(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function ud(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function vd(a,b){var c=ud(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=ud(c)}}
function wd(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?wd(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function xd(){for(var a=window,b=td();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=td(a.document)}return b}
function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}var zd="$",Ad="/$",Bd="$?",Cd="$!",Dd=null,Ed=null;function Fd(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function Gd(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var Hd="function"===typeof setTimeout?setTimeout:void 0,Id="function"===typeof clearTimeout?clearTimeout:void 0;function Jd(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}
function Kd(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===zd||c===Cd||c===Bd){if(0===b)return a;b--}else c===Ad&&b++}a=a.previousSibling}return null}var Ld=Math.random().toString(36).slice(2),Md="__reactInternalInstance$"+Ld,Nd="__reactEventHandlers$"+Ld,Od="__reactContainere$"+Ld;
function tc(a){var b=a[Md];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Od]||c[Md]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Kd(a);null!==a;){if(c=a[Md])return c;a=Kd(a)}return b}a=c;c=a.parentNode}return null}function Nc(a){a=a[Md]||a[Od];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pd(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(u(33));}function Qd(a){return a[Nd]||null}
function Rd(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}
function Sd(a,b){var c=a.stateNode;if(!c)return null;var d=la(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==typeof c)throw Error(u(231,
b,typeof c));return c}function Td(a,b,c){if(b=Sd(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a)}function Ud(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=Rd(b);for(b=c.length;0<b--;)Td(c[b],"captured",a);for(b=0;b<c.length;b++)Td(c[b],"bubbled",a)}}
function Vd(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Sd(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=ic(c._dispatchListeners,b),c._dispatchInstances=ic(c._dispatchInstances,a))}function Wd(a){a&&a.dispatchConfig.registrationName&&Vd(a._targetInst,null,a)}function Xd(a){jc(a,Ud)}var Yd=null,Zd=null,$d=null;
function ae(){if($d)return $d;var a,b=Zd,c=b.length,d,e="value"in Yd?Yd.value:Yd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return $d=e.slice(a,1<d?1-d:void 0)}function be(){return!0}function ce(){return!1}
function G(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?be:ce;this.isPropagationStopped=ce;return this}
n(G.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=be)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=be)},persist:function(){this.isPersistent=be},isPersistent:ce,destructor:function(){var a=this.constructor.Interface,
b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=ce;this._dispatchInstances=this._dispatchListeners=null}});G.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};
G.extend=function(a){function b(){}function c(){return d.apply(this,arguments)}var d=this;b.prototype=d.prototype;var e=new b;n(e,c.prototype);c.prototype=e;c.prototype.constructor=c;c.Interface=n({},d.Interface,a);c.extend=d.extend;de(c);return c};de(G);function ee(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}
function fe(a){if(!(a instanceof this))throw Error(u(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function de(a){a.eventPool=[];a.getPooled=ee;a.release=fe}var ge=G.extend({data:null}),he=G.extend({data:null}),ie=[9,13,27,32],je=ya&&"CompositionEvent"in window,ke=null;ya&&"documentMode"in document&&(ke=document.documentMode);
var le=ya&&"TextEvent"in window&&!ke,me=ya&&(!je||ke&&8<ke&&11>=ke),ne=String.fromCharCode(32),oe={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",
captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},pe=!1;
function qe(a,b){switch(a){case "keyup":return-1!==ie.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return!0;default:return!1}}function re(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var se=!1;function te(a,b){switch(a){case "compositionend":return re(b);case "keypress":if(32!==b.which)return null;pe=!0;return ne;case "textInput":return a=b.data,a===ne&&pe?null:a;default:return null}}
function ue(a,b){if(se)return"compositionend"===a||!je&&qe(a,b)?(a=ae(),$d=Zd=Yd=null,se=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return me&&"ko"!==b.locale?null:b.data;default:return null}}
var ve={eventTypes:oe,extractEvents:function(a,b,c,d){var e;if(je)b:{switch(a){case "compositionstart":var f=oe.compositionStart;break b;case "compositionend":f=oe.compositionEnd;break b;case "compositionupdate":f=oe.compositionUpdate;break b}f=void 0}else se?qe(a,c)&&(f=oe.compositionEnd):"keydown"===a&&229===c.keyCode&&(f=oe.compositionStart);f?(me&&"ko"!==c.locale&&(se||f!==oe.compositionStart?f===oe.compositionEnd&&se&&(e=ae()):(Yd=d,Zd="value"in Yd?Yd.value:Yd.textContent,se=!0)),f=ge.getPooled(f,
b,c,d),e?f.data=e:(e=re(c),null!==e&&(f.data=e)),Xd(f),e=f):e=null;(a=le?te(a,c):ue(a,c))?(b=he.getPooled(oe.beforeInput,b,c,d),b.data=a,Xd(b)):b=null;return null===e?b:null===b?e:[e,b]}},we={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!we[a.type]:"textarea"===b?!0:!1}
var ye={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function ze(a,b,c){a=G.getPooled(ye.change,a,b,c);a.type="change";Da(c);Xd(a);return a}var Ae=null,Be=null;function Ce(a){mc(a)}function De(a){var b=Pd(a);if(yb(b))return a}function Ee(a,b){if("change"===a)return b}var Fe=!1;ya&&(Fe=oc("input")&&(!document.documentMode||9<document.documentMode));
function Ge(){Ae&&(Ae.detachEvent("onpropertychange",He),Be=Ae=null)}function He(a){if("value"===a.propertyName&&De(Be))if(a=ze(Be,a,nc(a)),Ja)mc(a);else{Ja=!0;try{Fa(Ce,a)}finally{Ja=!1,La()}}}function Ie(a,b,c){"focus"===a?(Ge(),Ae=b,Be=c,Ae.attachEvent("onpropertychange",He)):"blur"===a&&Ge()}function Je(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return De(Be)}function Ke(a,b){if("click"===a)return De(b)}function Le(a,b){if("input"===a||"change"===a)return De(b)}
var Me={eventTypes:ye,_isInputEventSupported:Fe,extractEvents:function(a,b,c,d){var e=b?Pd(b):window,f=e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Ee;else if(xe(e))if(Fe)g=Le;else{g=Je;var h=Ie}else(f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Ke);if(g&&(g=g(a,b)))return ze(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Db(e,"number",e.value)}},Ne=G.extend({view:null,detail:null}),
Oe={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pe(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Oe[a])?!!b[a]:!1}function Qe(){return Pe}
var Re=0,Se=0,Te=!1,Ue=!1,Ve=Ne.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Qe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=Re;Re=a.screenX;return Te?"mousemove"===a.type?a.screenX-b:0:(Te=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;
var b=Se;Se=a.screenY;return Ue?"mousemove"===a.type?a.screenY-b:0:(Ue=!0,0)}}),We=Ve.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Xe={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",
dependencies:["pointerout","pointerover"]}},Ye={eventTypes:Xe,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?tc(b):null,null!==b){var h=dc(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===
a){var k=Ve;var l=Xe.mouseLeave;var m=Xe.mouseEnter;var p="mouse"}else if("pointerout"===a||"pointerover"===a)k=We,l=Xe.pointerLeave,m=Xe.pointerEnter,p="pointer";a=null==g?f:Pd(g);f=null==b?f:Pd(b);l=k.getPooled(l,g,c,d);l.type=p+"leave";l.target=a;l.relatedTarget=f;c=k.getPooled(m,b,c,d);c.type=p+"enter";c.target=f;c.relatedTarget=a;d=g;p=b;if(d&&p)a:{k=d;m=p;g=0;for(a=k;a;a=Rd(a))g++;a=0;for(b=m;b;b=Rd(b))a++;for(;0<g-a;)k=Rd(k),g--;for(;0<a-g;)m=Rd(m),a--;for(;g--;){if(k===m||k===m.alternate)break a;
k=Rd(k);m=Rd(m)}k=null}else k=null;m=k;for(k=[];d&&d!==m;){g=d.alternate;if(null!==g&&g===m)break;k.push(d);d=Rd(d)}for(d=[];p&&p!==m;){g=p.alternate;if(null!==g&&g===m)break;d.push(p);p=Rd(p)}for(p=0;p<k.length;p++)Vd(k[p],"bubbled",l);for(p=d.length;0<p--;)Vd(d[p],"captured",c);return 0===(e&64)?[l]:[l,c]}};function Ze(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var $e="function"===typeof Object.is?Object.is:Ze,af=Object.prototype.hasOwnProperty;
function bf(a,b){if($e(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!af.call(b,c[d])||!$e(a[c[d]],b[c[d]]))return!1;return!0}
var cf=ya&&"documentMode"in document&&11>=document.documentMode,df={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},ef=null,ff=null,gf=null,hf=!1;
function jf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(hf||null==ef||ef!==td(c))return null;c=ef;"selectionStart"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return gf&&bf(gf,c)?null:(gf=c,a=G.getPooled(df.select,ff,a,b),a.type="select",a.target=ef,Xd(a),a)}
var kf={eventTypes:df,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=cc(e);f=wa.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0}f=!e}if(f)return null;e=b?Pd(b):window;switch(a){case "focus":if(xe(e)||"true"===e.contentEditable)ef=e,ff=b,gf=null;break;case "blur":gf=ff=ef=null;break;case "mousedown":hf=!0;break;case "contextmenu":case "mouseup":case "dragend":return hf=!1,jf(c,d);case "selectionchange":if(cf)break;
case "keydown":case "keyup":return jf(c,d)}return null}},lf=G.extend({animationName:null,elapsedTime:null,pseudoElement:null}),mf=G.extend({clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),nf=Ne.extend({relatedTarget:null});function of(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}
var pf={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qf={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",
116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rf=Ne.extend({key:function(a){if(a.key){var b=pf[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=of(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?qf[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Qe,charCode:function(a){return"keypress"===
a.type?of(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===a.type?of(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),sf=Ve.extend({dataTransfer:null}),tf=Ne.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Qe}),uf=G.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),vf=Ve.extend({deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in
a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),wf={eventTypes:Wc,extractEvents:function(a,b,c,d){var e=Yc.get(a);if(!e)return null;switch(a){case "keypress":if(0===of(c))return null;case "keydown":case "keyup":a=rf;break;case "blur":case "focus":a=nf;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=
Ve;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=sf;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=tf;break;case Xb:case Yb:case Zb:a=lf;break;case $b:a=uf;break;case "scroll":a=Ne;break;case "wheel":a=vf;break;case "copy":case "cut":case "paste":a=mf;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=
We;break;default:a=G}b=a.getPooled(e,b,c,d);Xd(b);return b}};if(pa)throw Error(u(101));pa=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));ra();var xf=Nc;la=Qd;ma=xf;na=Pd;xa({SimpleEventPlugin:wf,EnterLeaveEventPlugin:Ye,ChangeEventPlugin:Me,SelectEventPlugin:kf,BeforeInputEventPlugin:ve});var yf=[],zf=-1;function H(a){0>zf||(a.current=yf[zf],yf[zf]=null,zf--)}
function I(a,b){zf++;yf[zf]=a.current;a.current=b}var Af={},J={current:Af},K={current:!1},Bf=Af;function Cf(a,b){var c=a.type.contextTypes;if(!c)return Af;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function L(a){a=a.childContextTypes;return null!==a&&void 0!==a}
function Df(){H(K);H(J)}function Ef(a,b,c){if(J.current!==Af)throw Error(u(168));I(J,b);I(K,c)}function Ff(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(u(108,pb(b)||"Unknown",e));return n({},c,{},d)}function Gf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Af;Bf=J.current;I(J,a);I(K,K.current);return!0}
function Hf(a,b,c){var d=a.stateNode;if(!d)throw Error(u(169));c?(a=Ff(a,b,Bf),d.__reactInternalMemoizedMergedChildContext=a,H(K),H(J),I(J,a)):H(K);I(K,c)}
var If=r.unstable_runWithPriority,Jf=r.unstable_scheduleCallback,Kf=r.unstable_cancelCallback,Lf=r.unstable_requestPaint,Mf=r.unstable_now,Nf=r.unstable_getCurrentPriorityLevel,Of=r.unstable_ImmediatePriority,Pf=r.unstable_UserBlockingPriority,Qf=r.unstable_NormalPriority,Rf=r.unstable_LowPriority,Sf=r.unstable_IdlePriority,Tf={},Uf=r.unstable_shouldYield,Vf=void 0!==Lf?Lf:function(){},Wf=null,Xf=null,Yf=!1,Zf=Mf(),$f=1E4>Zf?Mf:function(){return Mf()-Zf};
function ag(){switch(Nf()){case Of:return 99;case Pf:return 98;case Qf:return 97;case Rf:return 96;case Sf:return 95;default:throw Error(u(332));}}function bg(a){switch(a){case 99:return Of;case 98:return Pf;case 97:return Qf;case 96:return Rf;case 95:return Sf;default:throw Error(u(332));}}function cg(a,b){a=bg(a);return If(a,b)}function dg(a,b,c){a=bg(a);return Jf(a,b,c)}function eg(a){null===Wf?(Wf=[a],Xf=Jf(Of,fg)):Wf.push(a);return Tf}function gg(){if(null!==Xf){var a=Xf;Xf=null;Kf(a)}fg()}
function fg(){if(!Yf&&null!==Wf){Yf=!0;var a=0;try{var b=Wf;cg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});Wf=null}catch(c){throw null!==Wf&&(Wf=Wf.slice(a+1)),Jf(Of,gg),c;}finally{Yf=!1}}}function hg(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function ig(a,b){if(a&&a.defaultProps){b=n({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}var jg={current:null},kg=null,lg=null,mg=null;function ng(){mg=lg=kg=null}
function og(a){var b=jg.current;H(jg);a.type._context._currentValue=b}function pg(a,b){for(;null!==a;){var c=a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return}}function qg(a,b){kg=a;mg=lg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(rg=!0),a.firstContext=null)}
function sg(a,b){if(mg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)mg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===lg){if(null===kg)throw Error(u(308));lg=b;kg.dependencies={expirationTime:0,firstContext:b,responders:null}}else lg=lg.next=b}return a._currentValue}var tg=!1;function ug(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}
function vg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects})}function wg(a,b){a={expirationTime:a,suspenseConfig:b,tag:0,payload:null,callback:null,next:null};return a.next=a}function xg(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function yg(a,b){var c=a.alternate;null!==c&&vg(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b)}
function zg(a,b,c,d){var e=a.updateQueue;tg=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&(h.baseQueue=g))}if(null!==f){h=f.next;var k=e.baseState,l=0,m=null,p=null,x=null;if(null!==h){var z=h;do{g=z.expirationTime;if(g<d){var ca={expirationTime:z.expirationTime,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null};null===x?(p=x=
ca,m=k):x=x.next=ca;g>l&&(l=g)}else{null!==x&&(x=x.next={expirationTime:1073741823,suspenseConfig:z.suspenseConfig,tag:z.tag,payload:z.payload,callback:z.callback,next:null});Ag(g,z.suspenseConfig);a:{var D=a,t=z;g=b;ca=c;switch(t.tag){case 1:D=t.payload;if("function"===typeof D){k=D.call(ca,k,g);break a}k=D;break a;case 3:D.effectTag=D.effectTag&-4097|64;case 0:D=t.payload;g="function"===typeof D?D.call(ca,k,g):D;if(null===g||void 0===g)break a;k=n({},k,g);break a;case 2:tg=!0}}null!==z.callback&&
(a.effectTag|=32,g=e.effects,null===g?e.effects=[z]:g.push(z))}z=z.next;if(null===z||z===h)if(g=e.shared.pending,null===g)break;else z=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null}while(1)}null===x?m=k:x.next=p;e.baseState=m;e.baseQueue=x;Bg(l);a.expirationTime=l;a.memoizedState=k}}
function Cg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(u(191,d));d.call(e)}}}var Dg=Wa.ReactCurrentBatchConfig,Eg=(new aa.Component).refs;function Fg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:n({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c)}
var Jg={isMounted:function(a){return(a=a._reactInternalFiber)?dc(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e=wg(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);xg(a,e);Ig(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=Gg(),d=Dg.suspense;
c=Hg(c,a,d);d=wg(c,d);d.tag=2;void 0!==b&&null!==b&&(d.callback=b);xg(a,d);Ig(a,c)}};function Kg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!bf(c,d)||!bf(e,f):!0}
function Lg(a,b,c){var d=!1,e=Af;var f=b.contextType;"object"===typeof f&&null!==f?f=sg(f):(e=L(b)?Bf:J.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Cf(a,e):Af);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Jg;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Mg(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Jg.enqueueReplaceState(b,b.state,null)}
function Ng(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Eg;ug(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=sg(f):(f=L(b)?Bf:J.current,e.context=Cf(a,f));zg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Fg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Jg.enqueueReplaceState(e,e.state,null),zg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.effectTag|=4)}var Og=Array.isArray;
function Pg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(u(309));var d=c.stateNode}if(!d)throw Error(u(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Eg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(u(284));if(!c._owner)throw Error(u(290,a));}return a}
function Qg(a,b){if("textarea"!==a.type)throw Error(u(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}
function Rg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Sg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=
2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Tg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Pg(a,b,c),d.return=a,d;d=Ug(c.type,c.key,c.props,null,a.mode,d);d.ref=Pg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==
c.implementation)return b=Vg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Wg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function p(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Tg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case Za:return c=Ug(b.type,b.key,b.props,null,a.mode,c),c.ref=Pg(a,null,b),c.return=a,c;case $a:return b=Vg(b,a.mode,c),b.return=a,b}if(Og(b)||
nb(b))return b=Wg(b,a.mode,c,null),b.return=a,b;Qg(a,b)}return null}function x(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Za:return c.key===e?c.type===ab?m(a,b,c.props.children,d,e):k(a,b,c,d):null;case $a:return c.key===e?l(a,b,c,d):null}if(Og(c)||nb(c))return null!==e?null:m(a,b,c,d,null);Qg(a,c)}return null}function z(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=
a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Za:return a=a.get(null===d.key?c:d.key)||null,d.type===ab?m(b,a,d.props.children,e,d.key):k(b,a,d,e);case $a:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Og(d)||nb(d))return a=a.get(c)||null,m(b,a,d,e,null);Qg(b,d)}return null}function ca(e,g,h,k){for(var l=null,t=null,m=g,y=g=0,A=null;null!==m&&y<h.length;y++){m.index>y?(A=m,m=null):A=m.sibling;var q=x(e,m,h[y],k);if(null===q){null===m&&(m=A);break}a&&
m&&null===q.alternate&&b(e,m);g=f(q,g,y);null===t?l=q:t.sibling=q;t=q;m=A}if(y===h.length)return c(e,m),l;if(null===m){for(;y<h.length;y++)m=p(e,h[y],k),null!==m&&(g=f(m,g,y),null===t?l=m:t.sibling=m,t=m);return l}for(m=d(e,m);y<h.length;y++)A=z(m,e,y,h[y],k),null!==A&&(a&&null!==A.alternate&&m.delete(null===A.key?y:A.key),g=f(A,g,y),null===t?l=A:t.sibling=A,t=A);a&&m.forEach(function(a){return b(e,a)});return l}function D(e,g,h,l){var k=nb(h);if("function"!==typeof k)throw Error(u(150));h=k.call(h);
if(null==h)throw Error(u(151));for(var m=k=null,t=g,y=g=0,A=null,q=h.next();null!==t&&!q.done;y++,q=h.next()){t.index>y?(A=t,t=null):A=t.sibling;var D=x(e,t,q.value,l);if(null===D){null===t&&(t=A);break}a&&t&&null===D.alternate&&b(e,t);g=f(D,g,y);null===m?k=D:m.sibling=D;m=D;t=A}if(q.done)return c(e,t),k;if(null===t){for(;!q.done;y++,q=h.next())q=p(e,q.value,l),null!==q&&(g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);return k}for(t=d(e,t);!q.done;y++,q=h.next())q=z(t,e,y,q.value,l),null!==q&&(a&&null!==
q.alternate&&t.delete(null===q.key?y:q.key),g=f(q,g,y),null===m?k=q:m.sibling=q,m=q);a&&t.forEach(function(a){return b(e,a)});return k}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ab&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Za:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ab){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,
k.sibling);d=e(k,f.props);d.ref=Pg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ab?(d=Wg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Ug(f.type,f.key,f.props,null,a.mode,h),h.ref=Pg(a,d,f),h.return=a,a=h)}return g(a);case $a:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=
d.sibling}d=Vg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Tg(f,a.mode,h),d.return=a,a=d),g(a);if(Og(f))return ca(a,d,f,h);if(nb(f))return D(a,d,f,h);l&&Qg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 0:throw a=a.type,Error(u(152,a.displayName||a.name||"Component"));}return c(a,d)}}var Xg=Rg(!0),Yg=Rg(!1),Zg={},$g={current:Zg},ah={current:Zg},bh={current:Zg};
function ch(a){if(a===Zg)throw Error(u(174));return a}function dh(a,b){I(bh,b);I(ah,a);I($g,Zg);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Ob(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Ob(b,a)}H($g);I($g,b)}function eh(){H($g);H(ah);H(bh)}function fh(a){ch(bh.current);var b=ch($g.current);var c=Ob(b,a.type);b!==c&&(I(ah,a),I($g,c))}function gh(a){ah.current===a&&(H($g),H(ah))}var M={current:0};
function hh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===Bd||c.data===Cd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}function ih(a,b){return{responder:a,props:b}}
var jh=Wa.ReactCurrentDispatcher,kh=Wa.ReactCurrentBatchConfig,lh=0,N=null,O=null,P=null,mh=!1;function Q(){throw Error(u(321));}function nh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!$e(a[c],b[c]))return!1;return!0}
function oh(a,b,c,d,e,f){lh=f;N=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;jh.current=null===a||null===a.memoizedState?ph:qh;a=c(d,e);if(b.expirationTime===lh){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(u(301));f+=1;P=O=null;b.updateQueue=null;jh.current=rh;a=c(d,e)}while(b.expirationTime===lh)}jh.current=sh;b=null!==O&&null!==O.next;lh=0;P=O=N=null;mh=!1;if(b)throw Error(u(300));return a}
function th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P?N.memoizedState=P=a:P=P.next=a;return P}function uh(){if(null===O){var a=N.alternate;a=null!==a?a.memoizedState:null}else a=O.next;var b=null===P?N.memoizedState:P.next;if(null!==b)P=b,O=a;else{if(null===a)throw Error(u(310));O=a;a={memoizedState:O.memoizedState,baseState:O.baseState,baseQueue:O.baseQueue,queue:O.queue,next:null};null===P?N.memoizedState=P=a:P=P.next=a}return P}
function vh(a,b){return"function"===typeof b?b(a):b}
function wh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=O,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.expirationTime;if(l<lh){var m={expirationTime:k.expirationTime,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null};null===h?(g=h=m,f=d):h=h.next=m;l>N.expirationTime&&
(N.expirationTime=l,Bg(l))}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:k.suspenseConfig,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),Ag(l,k.suspenseConfig),d=k.eagerReducer===a?k.eagerState:a(d,k.action);k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;$e(d,b.memoizedState)||(rg=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function xh(a){var b=uh(),c=b.queue;if(null===c)throw Error(u(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);$e(f,b.memoizedState)||(rg=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function yh(a){var b=th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:vh,lastRenderedState:a};a=a.dispatch=zh.bind(null,N,a);return[b.memoizedState,a]}function Ah(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N.updateQueue;null===b?(b={lastEffect:null},N.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}
function Bh(){return uh().memoizedState}function Ch(a,b,c,d){var e=th();N.effectTag|=a;e.memoizedState=Ah(1|b,c,void 0,void 0===d?null:d)}function Dh(a,b,c,d){var e=uh();d=void 0===d?null:d;var f=void 0;if(null!==O){var g=O.memoizedState;f=g.destroy;if(null!==d&&nh(d,g.deps)){Ah(b,c,f,d);return}}N.effectTag|=a;e.memoizedState=Ah(1|b,c,f,d)}function Eh(a,b){return Ch(516,4,a,b)}function Fh(a,b){return Dh(516,4,a,b)}function Gh(a,b){return Dh(4,2,a,b)}
function Hh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function Ih(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Dh(4,2,Hh.bind(null,b,a),c)}function Jh(){}function Kh(a,b){th().memoizedState=[a,void 0===b?null:b];return a}function Lh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Mh(a,b){var c=uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&nh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Nh(a,b,c){var d=ag();cg(98>d?98:d,function(){a(!0)});cg(97<d?97:d,function(){var d=kh.suspense;kh.suspense=void 0===b?null:b;try{a(!1),c()}finally{kh.suspense=d}})}
function zh(a,b,c){var d=Gg(),e=Dg.suspense;d=Hg(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===N||null!==f&&f===N)mh=!0,e.expirationTime=lh,N.expirationTime=lh;else{if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.eagerReducer=f;e.eagerState=h;if($e(h,g))return}catch(k){}finally{}Ig(a,
d)}}
var sh={readContext:sg,useCallback:Q,useContext:Q,useEffect:Q,useImperativeHandle:Q,useLayoutEffect:Q,useMemo:Q,useReducer:Q,useRef:Q,useState:Q,useDebugValue:Q,useResponder:Q,useDeferredValue:Q,useTransition:Q},ph={readContext:sg,useCallback:Kh,useContext:sg,useEffect:Eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Ch(4,2,Hh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Ch(4,2,a,b)},useMemo:function(a,b){var c=th();b=void 0===b?null:b;a=a();c.memoizedState=[a,
b];return a},useReducer:function(a,b,c){var d=th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=zh.bind(null,N,a);return[d.memoizedState,a]},useRef:function(a){var b=th();a={current:a};return b.memoizedState=a},useState:yh,useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=yh(a),d=c[0],e=c[1];Eh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=
c}},[a,b]);return d},useTransition:function(a){var b=yh(!1),c=b[0];b=b[1];return[Kh(Nh.bind(null,b,a),[b,a]),c]}},qh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:wh,useRef:Bh,useState:function(){return wh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=wh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=
wh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,b,a),[b,a]),c]}},rh={readContext:sg,useCallback:Lh,useContext:sg,useEffect:Fh,useImperativeHandle:Ih,useLayoutEffect:Gh,useMemo:Mh,useReducer:xh,useRef:Bh,useState:function(){return xh(vh)},useDebugValue:Jh,useResponder:ih,useDeferredValue:function(a,b){var c=xh(vh),d=c[0],e=c[1];Fh(function(){var c=kh.suspense;kh.suspense=void 0===b?null:b;try{e(a)}finally{kh.suspense=c}},[a,b]);return d},useTransition:function(a){var b=xh(vh),c=b[0];b=b[1];return[Lh(Nh.bind(null,
b,a),[b,a]),c]}},Oh=null,Ph=null,Qh=!1;function Rh(a,b){var c=Sh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}
function Th(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function Uh(a){if(Qh){var b=Ph;if(b){var c=b;if(!Th(a,b)){b=Jd(c.nextSibling);if(!b||!Th(a,b)){a.effectTag=a.effectTag&-1025|2;Qh=!1;Oh=a;return}Rh(Oh,c)}Oh=a;Ph=Jd(b.firstChild)}else a.effectTag=a.effectTag&-1025|2,Qh=!1,Oh=a}}function Vh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;Oh=a}
function Wh(a){if(a!==Oh)return!1;if(!Qh)return Vh(a),Qh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!Gd(b,a.memoizedProps))for(b=Ph;b;)Rh(a,b),b=Jd(b.nextSibling);Vh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(u(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===Ad){if(0===b){Ph=Jd(a.nextSibling);break a}b--}else c!==zd&&c!==Cd&&c!==Bd||b++}a=a.nextSibling}Ph=null}}else Ph=Oh?Jd(a.stateNode.nextSibling):null;return!0}
function Xh(){Ph=Oh=null;Qh=!1}var Yh=Wa.ReactCurrentOwner,rg=!1;function R(a,b,c,d){b.child=null===a?Yg(b,null,c,d):Xg(b,a.child,c,d)}function Zh(a,b,c,d,e){c=c.render;var f=b.ref;qg(b,e);d=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,d,e);return b.child}
function ai(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!bi(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ci(a,b,g,d,e,f);a=Ug(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:bf,c(e,d)&&a.ref===b.ref))return $h(a,b,f);b.effectTag|=1;a=Sg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ci(a,b,c,d,e,f){return null!==a&&bf(a.memoizedProps,d)&&a.ref===b.ref&&(rg=!1,e<f)?(b.expirationTime=a.expirationTime,$h(a,b,f)):di(a,b,c,d,f)}function ei(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function di(a,b,c,d,e){var f=L(c)?Bf:J.current;f=Cf(b,f);qg(b,e);c=oh(a,b,c,d,f,e);if(null!==a&&!rg)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),$h(a,b,e);b.effectTag|=1;R(a,b,c,e);return b.child}
function fi(a,b,c,d,e){if(L(c)){var f=!0;Gf(b)}else f=!1;qg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Lg(b,c,d),Ng(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l));var m=c.getDerivedStateFromProps,p="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;p||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l);tg=!1;var x=b.memoizedState;g.state=x;zg(b,d,g,e);k=b.memoizedState;h!==d||x!==k||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),k=b.memoizedState),(h=tg||Kg(b,c,h,d,x,k,l))?(p||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,vg(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:ig(b.type,h),k=g.context,l=c.contextType,"object"===typeof l&&null!==l?l=sg(l):(l=L(c)?Bf:J.current,l=Cf(b,l)),m=c.getDerivedStateFromProps,(p="function"===typeof m||"function"===
typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Mg(b,g,d,l),tg=!1,k=b.memoizedState,g.state=k,zg(b,d,g,e),x=b.memoizedState,h!==d||k!==x||K.current||tg?("function"===typeof m&&(Fg(b,c,m,d),x=b.memoizedState),(m=tg||Kg(b,c,h,d,k,x,l))?(p||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,l),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,l)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=l,d=m):
("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&k===a.memoizedState||(b.effectTag|=256),d=!1);return gi(a,b,c,d,f,e)}
function gi(a,b,c,d,e,f){ei(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hf(b,c,!1),$h(a,b,f);d=b.stateNode;Yh.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=Xg(b,a.child,null,f),b.child=Xg(b,null,h,f)):R(a,b,h,f);b.memoizedState=d.state;e&&Hf(b,c,!0);return b.child}function hi(a){var b=a.stateNode;b.pendingContext?Ef(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Ef(a,b.context,!1);dh(a,b.containerInfo)}
var ii={dehydrated:null,retryTime:0};
function ji(a,b,c){var d=b.mode,e=b.pendingProps,f=M.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);I(M,f&1);if(null===a){void 0!==e.fallback&&Uh(b);if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=
b;e.sibling=c;b.memoizedState=ii;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Yg(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;c=Sg(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sg(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=ii;b.child=c;return d}c=Xg(b,a.child,e.children,c);b.memoizedState=null;return b.child=
c}a=a.child;if(g){g=e.fallback;e=Wg(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Wg(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=ii;b.child=e;return c}b.memoizedState=null;return b.child=Xg(b,a,e.children,c)}
function ki(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);pg(a.return,b)}function li(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f)}
function mi(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;R(a,b,d.children,c);d=M.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else{if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&ki(a,c);else if(19===a.tag)ki(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(M,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===hh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);li(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===hh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}li(b,!0,c,null,f,b.lastEffect);break;case "together":li(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function $h(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Bg(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(u(153));if(null!==b.child){a=b.child;c=Sg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}var ni,oi,pi,qi;
ni=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};oi=function(){};
pi=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;ch($g.current);a=null;switch(c){case "input":f=zb(g,f);d=zb(g,d);a=[];break;case "option":f=Gb(g,f);d=Gb(g,d);a=[];break;case "select":f=n({},f,{value:void 0});d=n({},d,{value:void 0});a=[];break;case "textarea":f=Ib(g,f);d=Ib(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=sd)}od(c,d);var h,k;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===
h)for(k in g=f[h],g)g.hasOwnProperty(k)&&(c||(c={}),c[k]="");else"dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(va.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var l=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&l!==g&&(null!=l||null!=g))if("style"===h)if(g){for(k in g)!g.hasOwnProperty(k)||l&&l.hasOwnProperty(k)||(c||(c={}),c[k]="");for(k in l)l.hasOwnProperty(k)&&g[k]!==l[k]&&(c||(c={}),
c[k]=l[k])}else c||(a||(a=[]),a.push(h,c)),c=l;else"dangerouslySetInnerHTML"===h?(l=l?l.__html:void 0,g=g?g.__html:void 0,null!=l&&g!==l&&(a=a||[]).push(h,l)):"children"===h?g===l||"string"!==typeof l&&"number"!==typeof l||(a=a||[]).push(h,""+l):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(va.hasOwnProperty(h)?(null!=l&&rd(e,h),a||g===l||(a=[])):(a=a||[]).push(h,l))}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4}};
qi=function(a,b,c,d){c!==d&&(b.effectTag|=4)};function ri(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function si(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return L(b.type)&&Df(),null;case 3:return eh(),H(K),H(J),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Wh(b)||(b.effectTag|=4),oi(b),null;case 5:gh(b);c=ch(bh.current);var e=b.type;if(null!==a&&null!=b.stateNode)pi(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else{if(!d){if(null===b.stateNode)throw Error(u(166));
return null}a=ch($g.current);if(Wh(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Md]=b;d[Nd]=f;switch(e){case "iframe":case "object":case "embed":F("load",d);break;case "video":case "audio":for(a=0;a<ac.length;a++)F(ac[a],d);break;case "source":F("error",d);break;case "img":case "image":case "link":F("error",d);F("load",d);break;case "form":F("reset",d);F("submit",d);break;case "details":F("toggle",d);break;case "input":Ab(d,f);F("invalid",d);rd(c,"onChange");break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};F("invalid",d);rd(c,"onChange");break;case "textarea":Jb(d,f),F("invalid",d),rd(c,"onChange")}od(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):va.hasOwnProperty(g)&&null!=h&&rd(c,g)}switch(e){case "input":xb(d);Eb(d,f,!0);break;case "textarea":xb(d);Lb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&
(d.onclick=sd)}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4)}else{g=9===c.nodeType?c:c.ownerDocument;a===qd&&(a=Nb(e));a===qd?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Md]=b;a[Nd]=d;ni(a,b,!1,!1);b.stateNode=a;g=pd(e,d);switch(e){case "iframe":case "object":case "embed":F("load",
a);h=d;break;case "video":case "audio":for(h=0;h<ac.length;h++)F(ac[h],a);h=d;break;case "source":F("error",a);h=d;break;case "img":case "image":case "link":F("error",a);F("load",a);h=d;break;case "form":F("reset",a);F("submit",a);h=d;break;case "details":F("toggle",a);h=d;break;case "input":Ab(a,d);h=zb(a,d);F("invalid",a);rd(c,"onChange");break;case "option":h=Gb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=n({},d,{value:void 0});F("invalid",a);rd(c,"onChange");break;case "textarea":Jb(a,
d);h=Ib(a,d);F("invalid",a);rd(c,"onChange");break;default:h=d}od(e,h);var k=h;for(f in k)if(k.hasOwnProperty(f)){var l=k[f];"style"===f?md(a,l):"dangerouslySetInnerHTML"===f?(l=l?l.__html:void 0,null!=l&&Qb(a,l)):"children"===f?"string"===typeof l?("textarea"!==e||""!==l)&&Rb(a,l):"number"===typeof l&&Rb(a,""+l):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(va.hasOwnProperty(f)?null!=l&&rd(c,f):null!=l&&Xa(a,f,l,g))}switch(e){case "input":xb(a);Eb(a,d,!1);
break;case "textarea":xb(a);Lb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+rb(d.value));break;case "select":a.multiple=!!d.multiple;c=d.value;null!=c?Hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&Hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=sd)}Fd(e,d)&&(b.effectTag|=4)}null!==b.ref&&(b.effectTag|=128)}return null;case 6:if(a&&null!=b.stateNode)qi(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(u(166));
c=ch(bh.current);ch($g.current);Wh(b)?(c=b.stateNode,d=b.memoizedProps,c[Md]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),c[Md]=b,b.stateNode=c)}return null;case 13:H(M);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Wh(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=
e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(M.current&1))S===ti&&(S=ui);else{if(S===ti||S===ui)S=vi;0!==wi&&null!==T&&(xi(T,U),yi(T,wi))}if(c||d)b.effectTag|=4;return null;case 4:return eh(),oi(b),null;case 10:return og(b),null;case 17:return L(b.type)&&Df(),null;case 19:H(M);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)ri(d,!1);else{if(S!==ti||null!==a&&0!==(a.effectTag&
64))for(f=b.child;null!==f;){a=hh(f);if(null!==a){b.effectTag|=64;ri(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,
e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;I(M,M.current&1|2);return b.child}f=f.sibling}}else{if(!e)if(a=hh(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),ri(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=
b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*$f()-d.renderingStartTime>d.tailExpiration&&1<c&&(b.effectTag|=64,e=!0,ri(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f)}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=$f()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=$f(),c.sibling=null,b=M.current,I(M,e?b&1|2:b&1),c):null}throw Error(u(156,
b.tag));}function zi(a){switch(a.tag){case 1:L(a.type)&&Df();var b=a.effectTag;return b&4096?(a.effectTag=b&-4097|64,a):null;case 3:eh();H(K);H(J);b=a.effectTag;if(0!==(b&64))throw Error(u(285));a.effectTag=b&-4097|64;return a;case 5:return gh(a),null;case 13:return H(M),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return H(M),null;case 4:return eh(),null;case 10:return og(a),null;default:return null}}function Ai(a,b){return{value:a,source:b,stack:qb(b)}}
var Bi="function"===typeof WeakSet?WeakSet:Set;function Ci(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qb(c));null!==c&&pb(c.type);b=b.value;null!==a&&1===a.tag&&pb(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Di(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(c){Ei(a,c)}}function Fi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Ei(a,c)}else b.current=null}
function Gi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:ig(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(u(163));}
function Hi(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d()}c=c.next}while(c!==b)}}function Ii(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d()}c=c.next}while(c!==b)}}
function Ji(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:Ii(3,c);return;case 1:a=c.stateNode;if(c.effectTag&4)if(null===b)a.componentDidMount();else{var d=c.elementType===c.type?b.memoizedProps:ig(c.type,b.memoizedProps);a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}b=c.updateQueue;null!==b&&Cg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Cg(c,b,a)}return;
case 5:a=c.stateNode;null===b&&c.effectTag&4&&Fd(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Vc(c))));return;case 19:case 17:case 20:case 21:return}throw Error(u(163));}
function Ki(a,b,c){"function"===typeof Li&&Li(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;cg(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c()}catch(h){Ei(g,h)}}a=a.next}while(a!==d)})}break;case 1:Fi(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&Di(b,c);break;case 5:Fi(b);break;case 4:Mi(a,b,c)}}
function Ni(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Ni(b)}function Oi(a){return 5===a.tag||3===a.tag||4===a.tag}
function Pi(a){a:{for(var b=a.return;null!==b;){if(Oi(b)){var c=b;break a}b=b.return}throw Error(u(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(u(161));}c.effectTag&16&&(Rb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Oi(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;
if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Qi(a,c,b):Ri(a,c,b)}
function Qi(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=sd));else if(4!==d&&(a=a.child,null!==a))for(Qi(a,b,c),a=a.sibling;null!==a;)Qi(a,b,c),a=a.sibling}
function Ri(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Ri(a,b,c),a=a.sibling;null!==a;)Ri(a,b,c),a=a.sibling}
function Mi(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(u(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return}e=!0}if(5===d.tag||6===d.tag){a:for(var h=a,k=d,l=c,m=k;;)if(Ki(h,m,l),null!==m.child&&4!==m.tag)m.child.return=m,m=m.child;else{if(m===k)break a;for(;null===m.sibling;){if(null===m.return||m.return===k)break a;m=m.return}m.sibling.return=m.return;m=m.sibling}g?(h=
f,k=d.stateNode,8===h.nodeType?h.parentNode.removeChild(k):h.removeChild(k)):f.removeChild(d.stateNode)}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ki(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1)}d.sibling.return=d.return;d=d.sibling}}
function Si(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Hi(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[Nd]=d;"input"===a&&"radio"===d.type&&null!=d.name&&Bb(c,d);pd(a,e);b=pd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],h=f[e+1];"style"===g?md(c,h):"dangerouslySetInnerHTML"===g?Qb(c,h):"children"===g?Rb(c,h):Xa(c,g,h,b)}switch(a){case "input":Cb(c,d);break;
case "textarea":Kb(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?Hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?Hb(c,!!d.multiple,d.defaultValue,!0):Hb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(u(162));b.stateNode.nodeValue=b.memoizedProps;return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,Vc(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?
d=!1:(d=!0,c=b.child,Ti=$f());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=ld("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=
f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}Ui(b);return;case 19:Ui(b);return;case 17:return}throw Error(u(163));}function Ui(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Bi);b.forEach(function(b){var d=Vi.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
var Wi="function"===typeof WeakMap?WeakMap:Map;function Xi(a,b,c){c=wg(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Yi||(Yi=!0,Zi=d);Ci(a,b)};return c}
function $i(a,b,c){c=wg(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ci(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===aj?aj=new Set([this]):aj.add(this),Ci(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}
var bj=Math.ceil,cj=Wa.ReactCurrentDispatcher,dj=Wa.ReactCurrentOwner,V=0,ej=8,fj=16,gj=32,ti=0,hj=1,ij=2,ui=3,vi=4,jj=5,W=V,T=null,X=null,U=0,S=ti,kj=null,lj=1073741823,mj=1073741823,nj=null,wi=0,oj=!1,Ti=0,pj=500,Y=null,Yi=!1,Zi=null,aj=null,qj=!1,rj=null,sj=90,tj=null,uj=0,vj=null,wj=0;function Gg(){return(W&(fj|gj))!==V?1073741821-($f()/10|0):0!==wj?wj:wj=1073741821-($f()/10|0)}
function Hg(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=ag();if(0===(b&4))return 99===d?1073741823:1073741822;if((W&fj)!==V)return U;if(null!==c)a=hg(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=hg(a,150,100);break;case 97:case 96:a=hg(a,5E3,250);break;case 95:a=2;break;default:throw Error(u(326));}null!==T&&a===U&&--a;return a}
function Ig(a,b){if(50<uj)throw uj=0,vj=null,Error(u(185));a=xj(a,b);if(null!==a){var c=ag();1073741823===b?(W&ej)!==V&&(W&(fj|gj))===V?yj(a):(Z(a),W===V&&gg()):Z(a);(W&4)===V||98!==c&&99!==c||(null===tj?tj=new Map([[a,b]]):(c=tj.get(a),(void 0===c||c>b)&&tj.set(a,b)))}}
function xj(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}null!==e&&(T===e&&(Bg(b),S===vi&&xi(e,U)),yi(e,b));return e}
function zj(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Aj(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}
function Z(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=eg(yj.bind(null,a));else{var b=zj(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else{var d=Gg();1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Tf&&Kf(c)}a.callbackExpirationTime=
b;a.callbackPriority=d;b=1073741823===b?eg(yj.bind(null,a)):dg(d,Bj.bind(null,a),{timeout:10*(1073741821-b)-$f()});a.callbackNode=b}}}
function Bj(a,b){wj=0;if(b)return b=Gg(),Cj(a,b),Z(a),null;var c=zj(a);if(0!==c){b=a.callbackNode;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&c===U||Ej(a,c);if(null!==X){var d=W;W|=fj;var e=Fj();do try{Gj();break}catch(h){Hj(a,h)}while(1);ng();W=d;cj.current=e;if(S===hj)throw b=kj,Ej(a,c),xi(a,c),Z(a),b;if(null===X)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=S,T=null,d){case ti:case hj:throw Error(u(345));case ij:Cj(a,2<c?2:c);break;case ui:xi(a,c);d=a.lastSuspendedTime;
c===d&&(a.nextKnownPendingLevel=Ij(e));if(1073741823===lj&&(e=Ti+pj-$f(),10<e)){if(oj){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=c;Ej(a,c);break}}f=zj(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=Hd(Jj.bind(null,a),e);break}Jj(a);break;case vi:xi(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ij(e));if(oj&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;Ej(a,c);break}e=zj(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=
d;break}1073741823!==mj?d=10*(1073741821-mj)-$f():1073741823===lj?d=0:(d=10*(1073741821-lj)-5E3,e=$f(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*bj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=Hd(Jj.bind(null,a),d);break}Jj(a);break;case jj:if(1073741823!==lj&&null!==nj){f=lj;var g=nj;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=$f()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){xi(a,c);a.timeoutHandle=
Hd(Jj.bind(null,a),d);break}}Jj(a);break;default:throw Error(u(329));}Z(a);if(a.callbackNode===b)return Bj.bind(null,a)}}return null}
function yj(a){var b=a.lastExpiredTime;b=0!==b?b:1073741823;if((W&(fj|gj))!==V)throw Error(u(327));Dj();a===T&&b===U||Ej(a,b);if(null!==X){var c=W;W|=fj;var d=Fj();do try{Kj();break}catch(e){Hj(a,e)}while(1);ng();W=c;cj.current=d;if(S===hj)throw c=kj,Ej(a,b),xi(a,b),Z(a),c;if(null!==X)throw Error(u(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;T=null;Jj(a);Z(a)}return null}function Lj(){if(null!==tj){var a=tj;tj=null;a.forEach(function(a,c){Cj(c,a);Z(c)});gg()}}
function Mj(a,b){var c=W;W|=1;try{return a(b)}finally{W=c,W===V&&gg()}}function Nj(a,b){var c=W;W&=-2;W|=ej;try{return a(b)}finally{W=c,W===V&&gg()}}
function Ej(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Id(c));if(null!==X)for(c=X.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Df();break;case 3:eh();H(K);H(J);break;case 5:gh(d);break;case 4:eh();break;case 13:H(M);break;case 19:H(M);break;case 10:og(d)}c=c.return}T=a;X=Sg(a.current,null);U=b;S=ti;kj=null;mj=lj=1073741823;nj=null;wi=0;oj=!1}
function Hj(a,b){do{try{ng();jh.current=sh;if(mh)for(var c=N.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next}lh=0;P=O=N=null;mh=!1;if(null===X||null===X.return)return S=hj,kj=b,X=null;a:{var e=a,f=X.return,g=X,h=b;b=U;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var k=h;if(0===(g.mode&2)){var l=g.alternate;l?(g.updateQueue=l.updateQueue,g.memoizedState=l.memoizedState,g.expirationTime=l.expirationTime):(g.updateQueue=
null,g.memoizedState=null)}var m=0!==(M.current&1),p=f;do{var x;if(x=13===p.tag){var z=p.memoizedState;if(null!==z)x=null!==z.dehydrated?!0:!1;else{var ca=p.memoizedProps;x=void 0===ca.fallback?!1:!0!==ca.unstable_avoidThisFallback?!0:m?!1:!0}}if(x){var D=p.updateQueue;if(null===D){var t=new Set;t.add(k);p.updateQueue=t}else D.add(k);if(0===(p.mode&2)){p.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else{var y=wg(1073741823,null);y.tag=2;xg(g,y)}g.expirationTime=1073741823;
break a}h=void 0;g=b;var A=e.pingCache;null===A?(A=e.pingCache=new Wi,h=new Set,A.set(k,h)):(h=A.get(k),void 0===h&&(h=new Set,A.set(k,h)));if(!h.has(g)){h.add(g);var q=Oj.bind(null,e,k,g);k.then(q,q)}p.effectTag|=4096;p.expirationTime=b;break a}p=p.return}while(null!==p);h=Error((pb(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+qb(g))}S!==
jj&&(S=ij);h=Ai(h,g);p=f;do{switch(p.tag){case 3:k=h;p.effectTag|=4096;p.expirationTime=b;var B=Xi(p,k,b);yg(p,B);break a;case 1:k=h;var w=p.type,ub=p.stateNode;if(0===(p.effectTag&64)&&("function"===typeof w.getDerivedStateFromError||null!==ub&&"function"===typeof ub.componentDidCatch&&(null===aj||!aj.has(ub)))){p.effectTag|=4096;p.expirationTime=b;var vb=$i(p,k,b);yg(p,vb);break a}}p=p.return}while(null!==p)}X=Pj(X)}catch(Xc){b=Xc;continue}break}while(1)}
function Fj(){var a=cj.current;cj.current=sh;return null===a?sh:a}function Ag(a,b){a<lj&&2<a&&(lj=a);null!==b&&a<mj&&2<a&&(mj=a,nj=b)}function Bg(a){a>wi&&(wi=a)}function Kj(){for(;null!==X;)X=Qj(X)}function Gj(){for(;null!==X&&!Uf();)X=Qj(X)}function Qj(a){var b=Rj(a.alternate,a,U);a.memoizedProps=a.pendingProps;null===b&&(b=Pj(a));dj.current=null;return b}
function Pj(a){X=a;do{var b=X.alternate;a=X.return;if(0===(X.effectTag&2048)){b=si(b,X,U);if(1===U||1!==X.childExpirationTime){for(var c=0,d=X.child;null!==d;){var e=d.expirationTime,f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling}X.childExpirationTime=c}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=X.firstEffect),null!==X.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=X.firstEffect),a.lastEffect=X.lastEffect),1<X.effectTag&&(null!==
a.lastEffect?a.lastEffect.nextEffect=X:a.firstEffect=X,a.lastEffect=X))}else{b=zi(X);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=2048)}b=X.sibling;if(null!==b)return b;X=a}while(null!==X);S===ti&&(S=jj);return null}function Ij(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function Jj(a){var b=ag();cg(99,Sj.bind(null,a,b));return null}
function Sj(a,b){do Dj();while(null!==rj);if((W&(fj|gj))!==V)throw Error(u(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(u(177));a.callbackNode=null;a.callbackExpirationTime=0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ij(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=
d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===T&&(X=T=null,U=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=W;W|=gj;dj.current=null;Dd=fd;var g=xd();if(yd(g)){if("selectionStart"in g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var k=h.getSelection&&h.getSelection();if(k&&0!==k.rangeCount){h=k.anchorNode;var l=k.anchorOffset,
m=k.focusNode;k=k.focusOffset;try{h.nodeType,m.nodeType}catch(wb){h=null;break a}var p=0,x=-1,z=-1,ca=0,D=0,t=g,y=null;b:for(;;){for(var A;;){t!==h||0!==l&&3!==t.nodeType||(x=p+l);t!==m||0!==k&&3!==t.nodeType||(z=p+k);3===t.nodeType&&(p+=t.nodeValue.length);if(null===(A=t.firstChild))break;y=t;t=A}for(;;){if(t===g)break b;y===h&&++ca===l&&(x=p);y===m&&++D===k&&(z=p);if(null!==(A=t.nextSibling))break;t=y;y=t.parentNode}t=A}h=-1===x||-1===z?null:{start:x,end:z}}else h=null}h=h||{start:0,end:0}}else h=
null;Ed={activeElementDetached:null,focusedElem:g,selectionRange:h};fd=!1;Y=e;do try{Tj()}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=e;do try{for(g=a,h=b;null!==Y;){var q=Y.effectTag;q&16&&Rb(Y.stateNode,"");if(q&128){var B=Y.alternate;if(null!==B){var w=B.ref;null!==w&&("function"===typeof w?w(null):w.current=null)}}switch(q&1038){case 2:Pi(Y);Y.effectTag&=-3;break;case 6:Pi(Y);Y.effectTag&=-3;Si(Y.alternate,Y);break;case 1024:Y.effectTag&=-1025;break;case 1028:Y.effectTag&=
-1025;Si(Y.alternate,Y);break;case 4:Si(Y.alternate,Y);break;case 8:l=Y,Mi(g,l,h),Ni(l)}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);w=Ed;B=xd();q=w.focusedElem;h=w.selectionRange;if(B!==q&&q&&q.ownerDocument&&wd(q.ownerDocument.documentElement,q)){null!==h&&yd(q)&&(B=h.start,w=h.end,void 0===w&&(w=B),"selectionStart"in q?(q.selectionStart=B,q.selectionEnd=Math.min(w,q.value.length)):(w=(B=q.ownerDocument||document)&&B.defaultView||window,w.getSelection&&
(w=w.getSelection(),l=q.textContent.length,g=Math.min(h.start,l),h=void 0===h.end?g:Math.min(h.end,l),!w.extend&&g>h&&(l=h,h=g,g=l),l=vd(q,g),m=vd(q,h),l&&m&&(1!==w.rangeCount||w.anchorNode!==l.node||w.anchorOffset!==l.offset||w.focusNode!==m.node||w.focusOffset!==m.offset)&&(B=B.createRange(),B.setStart(l.node,l.offset),w.removeAllRanges(),g>h?(w.addRange(B),w.extend(m.node,m.offset)):(B.setEnd(m.node,m.offset),w.addRange(B))))));B=[];for(w=q;w=w.parentNode;)1===w.nodeType&&B.push({element:w,left:w.scrollLeft,
top:w.scrollTop});"function"===typeof q.focus&&q.focus();for(q=0;q<B.length;q++)w=B[q],w.element.scrollLeft=w.left,w.element.scrollTop=w.top}fd=!!Dd;Ed=Dd=null;a.current=c;Y=e;do try{for(q=a;null!==Y;){var ub=Y.effectTag;ub&36&&Ji(q,Y.alternate,Y);if(ub&128){B=void 0;var vb=Y.ref;if(null!==vb){var Xc=Y.stateNode;switch(Y.tag){case 5:B=Xc;break;default:B=Xc}"function"===typeof vb?vb(B):vb.current=B}}Y=Y.nextEffect}}catch(wb){if(null===Y)throw Error(u(330));Ei(Y,wb);Y=Y.nextEffect}while(null!==Y);Y=
null;Vf();W=f}else a.current=c;if(qj)qj=!1,rj=a,sj=b;else for(Y=e;null!==Y;)b=Y.nextEffect,Y.nextEffect=null,Y=b;b=a.firstPendingTime;0===b&&(aj=null);1073741823===b?a===vj?uj++:(uj=0,vj=a):uj=0;"function"===typeof Uj&&Uj(c.stateNode,d);Z(a);if(Yi)throw Yi=!1,a=Zi,Zi=null,a;if((W&ej)!==V)return null;gg();return null}function Tj(){for(;null!==Y;){var a=Y.effectTag;0!==(a&256)&&Gi(Y.alternate,Y);0===(a&512)||qj||(qj=!0,dg(97,function(){Dj();return null}));Y=Y.nextEffect}}
function Dj(){if(90!==sj){var a=97<sj?97:sj;sj=90;return cg(a,Vj)}}function Vj(){if(null===rj)return!1;var a=rj;rj=null;if((W&(fj|gj))!==V)throw Error(u(331));var b=W;W|=gj;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Hi(5,c),Ii(5,c)}}catch(d){if(null===a)throw Error(u(330));Ei(a,d)}c=a.nextEffect;a.nextEffect=null;a=c}W=b;gg();return!0}
function Wj(a,b,c){b=Ai(c,b);b=Xi(a,b,1073741823);xg(a,b);a=xj(a,1073741823);null!==a&&Z(a)}function Ei(a,b){if(3===a.tag)Wj(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Wj(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===aj||!aj.has(d))){a=Ai(b,a);a=$i(c,a,1073741823);xg(c,a);c=xj(c,1073741823);null!==c&&Z(c);break}}c=c.return}}
function Oj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);T===a&&U===c?S===vi||S===ui&&1073741823===lj&&$f()-Ti<pj?Ej(a,U):oj=!0:Aj(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,Z(a)))}function Vi(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=Gg(),b=Hg(b,a,null));a=xj(a,b);null!==a&&Z(a)}var Rj;
Rj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||K.current)rg=!0;else{if(d<c){rg=!1;switch(b.tag){case 3:hi(b);Xh();break;case 5:fh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:L(b.type)&&Gf(b);break;case 4:dh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;I(jg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return ji(a,b,c);I(M,M.current&1);b=$h(a,b,c);return null!==b?b.sibling:null}I(M,M.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return mi(a,b,c);b.effectTag|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);I(M,M.current);if(!d)return null}return $h(a,b,c)}rg=!1}}else rg=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=Cf(b,J.current);qg(b,c);e=oh(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(L(d)){var f=!0;Gf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ug(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Fg(b,d,g,a);e.updater=Jg;b.stateNode=e;e._reactInternalFiber=b;Ng(b,d,a,c);b=gi(null,b,d,!0,f,c)}else b.tag=0,R(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ob(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Xj(e);a=ig(e,a);switch(f){case 0:b=di(null,b,e,a,c);break a;case 1:b=fi(null,b,e,a,c);break a;case 11:b=Zh(null,b,e,a,c);break a;case 14:b=ai(null,b,e,ig(e.type,a),d,c);break a}throw Error(u(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),di(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),fi(a,b,d,e,c);
case 3:hi(b);d=b.updateQueue;if(null===a||null===d)throw Error(u(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;vg(a,b);zg(b,d,null,c);d=b.memoizedState.element;if(d===e)Xh(),b=$h(a,b,c);else{if(e=b.stateNode.hydrate)Ph=Jd(b.stateNode.containerInfo.firstChild),Oh=b,e=Qh=!0;if(e)for(c=Yg(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else R(a,b,d,c),Xh();b=b.child}return b;case 5:return fh(b),null===a&&Uh(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),ei(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(R(a,b,g,c),b=b.child),b;case 6:return null===a&&Uh(b),null;case 13:return ji(a,b,c);case 4:return dh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Xg(b,null,d,c):R(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),Zh(a,b,d,e,c);case 7:return R(a,b,b.pendingProps,c),b.child;case 8:return R(a,
b,b.pendingProps.children,c),b.child;case 12:return R(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(jg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=$e(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!K.current){b=$h(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==
k){g=h.child;for(var l=k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=wg(c,null),l.tag=2,xg(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);pg(h.return,c);k.expirationTime<c&&(k.expirationTime=c);break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=
g}R(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,qg(b,c),e=sg(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,R(a,b,d,c),b.child;case 14:return e=b.type,f=ig(e,b.pendingProps),f=ig(e.type,f),ai(a,b,e,f,d,c);case 15:return ci(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:ig(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,L(d)?(a=!0,Gf(b)):a=!1,qg(b,c),Lg(b,d,e),Ng(b,d,e,c),gi(null,
b,d,!0,a,c);case 19:return mi(a,b,c)}throw Error(u(156,b.tag));};var Uj=null,Li=null;function Yj(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Uj=function(a){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64))}catch(e){}};Li=function(a){try{b.onCommitFiberUnmount(c,a)}catch(e){}}}catch(d){}return!0}
function Zj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Sh(a,b,c,d){return new Zj(a,b,c,d)}
function bi(a){a=a.prototype;return!(!a||!a.isReactComponent)}function Xj(a){if("function"===typeof a)return bi(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===gb)return 11;if(a===jb)return 14}return 2}
function Sg(a,b){var c=a.alternate;null===c?(c=Sh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,
firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Ug(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bi(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ab:return Wg(c.children,e,f,b);case fb:g=8;e|=7;break;case bb:g=8;e|=1;break;case cb:return a=Sh(12,c,b,e|8),a.elementType=cb,a.type=cb,a.expirationTime=f,a;case hb:return a=Sh(13,c,b,e),a.type=hb,a.elementType=hb,a.expirationTime=f,a;case ib:return a=Sh(19,c,b,e),a.elementType=ib,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case db:g=
10;break a;case eb:g=9;break a;case gb:g=11;break a;case jb:g=14;break a;case kb:g=16;d=null;break a;case lb:g=22;break a}throw Error(u(130,null==a?a:typeof a,""));}b=Sh(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Wg(a,b,c,d){a=Sh(7,a,d,b);a.expirationTime=c;return a}function Tg(a,b,c){a=Sh(6,a,null,b);a.expirationTime=c;return a}
function Vg(a,b,c){b=Sh(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function ak(a,b,c){this.tag=b;this.current=null;this.containerInfo=a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}
function Aj(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function xi(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0)}
function yi(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b))}function Cj(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b}
function bk(a,b,c,d){var e=b.current,f=Gg(),g=Dg.suspense;f=Hg(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(dc(c)!==c||1!==c.tag)throw Error(u(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(L(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(u(171));}if(1===c.tag){var k=c.type;if(L(k)){c=Ff(c,k,h);break a}}c=h}else c=Af;null===b.context?b.context=c:b.pendingContext=c;b=wg(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);xg(e,b);Ig(e,f);return f}function ck(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function dk(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b)}function ek(a,b){dk(a,b);(a=a.alternate)&&dk(a,b)}
function fk(a,b,c){c=null!=c&&!0===c.hydrate;var d=new ak(a,b,c),e=Sh(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ug(e);a[Od]=d.current;c&&0!==b&&Jc(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d}fk.prototype.render=function(a){bk(a,this._internalRoot,null,null)};fk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;bk(null,a,null,function(){b[Od]=null})};
function gk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function hk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new fk(a,0,b?{hydrate:!0}:void 0)}
function ik(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=ck(g);h.call(a)}}bk(b,g,a,e)}else{f=c._reactRootContainer=hk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=ck(g);k.call(a)}}Nj(function(){bk(b,g,a,e)})}return ck(g)}function jk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:$a,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
wc=function(a){if(13===a.tag){var b=hg(Gg(),150,100);Ig(a,b);ek(a,b)}};xc=function(a){13===a.tag&&(Ig(a,3),ek(a,3))};yc=function(a){if(13===a.tag){var b=Gg();b=Hg(b,a,null);Ig(a,b);ek(a,b)}};
za=function(a,b,c){switch(b){case "input":Cb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Qd(d);if(!e)throw Error(u(90));yb(d);Cb(d,e)}}}break;case "textarea":Kb(a,c);break;case "select":b=c.value,null!=b&&Hb(a,!!c.multiple,b,!1)}};Fa=Mj;
Ga=function(a,b,c,d,e){var f=W;W|=4;try{return cg(98,a.bind(null,b,c,d,e))}finally{W=f,W===V&&gg()}};Ha=function(){(W&(1|fj|gj))===V&&(Lj(),Dj())};Ia=function(a,b){var c=W;W|=2;try{return a(b)}finally{W=c,W===V&&gg()}};function kk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!gk(b))throw Error(u(200));return jk(a,b,null,c)}var lk={Events:[Nc,Pd,Qd,xa,ta,Xd,function(a){jc(a,Wd)},Da,Ea,id,mc,Dj,{current:!1}]};
(function(a){var b=a.findFiberByHostInstance;return Yj(n({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wa.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=hc(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:tc,bundleType:0,version:"16.13.1",
rendererPackageName:"react-dom"});exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lk;exports.createPortal=kk;exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===b){if("function"===typeof a.render)throw Error(u(188));throw Error(u(268,Object.keys(a)));}a=hc(b);a=null===a?null:a.stateNode;return a};
exports.flushSync=function(a,b){if((W&(fj|gj))!==V)throw Error(u(187));var c=W;W|=1;try{return cg(99,a.bind(null,b))}finally{W=c,gg()}};exports.hydrate=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!0,c)};exports.render=function(a,b,c){if(!gk(b))throw Error(u(200));return ik(null,a,b,!1,c)};
exports.unmountComponentAtNode=function(a){if(!gk(a))throw Error(u(40));return a._reactRootContainer?(Nj(function(){ik(null,null,a,!1,function(){a._reactRootContainer=null;a[Od]=null})}),!0):!1};exports.unstable_batchedUpdates=Mj;exports.unstable_createPortal=function(a,b){return kk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!gk(c))throw Error(u(200));if(null==a||void 0===a._reactInternalFiber)throw Error(u(38));return ik(a,b,c,!1,d)};exports.version="16.13.1";


/***/ }),

/***/ "./node_modules/react-dom/index.js":
/*!*****************************************!*\
  !*** ./node_modules/react-dom/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(/*! ./cjs/react-dom.production.min.js */ "./node_modules/react-dom/cjs/react-dom.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-hot-loader/root.js":
/*!***********************************************!*\
  !*** ./node_modules/react-hot-loader/root.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) { var parent, cache, hot; } else {
  // prod mode
  fallbackHot();
}

function fallbackHot() {
  exports.hot = function (a) {
    return a;
  };
}


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.production.min.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.production.min.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-is.production.min.js */ "./node_modules/react-is/cjs/react-is.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/react-reveal/Fade.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/Fade.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(o){return o&&o.__esModule?o:{default:o}}function _objectWithoutProperties(o,e){var r={};for(var t in o)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(o,t)&&(r[t]=o[t]);return r}function make(o,e){var r=e.distance,t=e.left,p=e.right,a=e.up,l=e.down,i=e.top,u=e.bottom,n=e.big,s=e.mirror,d=e.opposite,_=(r?r.toString():0)+((t?1:0)|(p?2:0)|(i||l?4:0)|(u||a?8:0)|(s?16:0)|(d?32:0)|(o?64:0)|(n?128:0));if(lookup.hasOwnProperty(_))return lookup[_];var f=t||p||a||l||i||u,y=void 0,b=void 0;if(f){if(!s!=!(o&&d)){var v=[p,t,u,i,l,a];t=v[0],p=v[1],i=v[2],u=v[3],a=v[4],l=v[5]}var c=r||(n?"2000px":"100%");y=t?"-"+c:p?c:"0",b=l||i?"-"+c:a||u?c:"0"}return lookup[_]=(0,_globals.animation)((o?"to":"from")+" {opacity: 0;"+(f?" transform: translate3d("+y+", "+b+", 0);":"")+"}\n     "+(o?"from":"to")+" {opacity: 1;transform: none;} "),lookup[_]}function Fade(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_globals.defaults,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=o.children,t=(o.out,o.forever),p=o.timeout,a=o.duration,l=void 0===a?_globals.defaults.duration:a,i=o.delay,u=void 0===i?_globals.defaults.delay:i,n=o.count,s=void 0===n?_globals.defaults.count:n,d=_objectWithoutProperties(o,["children","out","forever","timeout","duration","delay","count"]),_={make:make,duration:void 0===p?l:p,delay:u,forever:t,count:s,style:{animationFillMode:"both"},reverse:d.left};return e?(0,_wrap2.default)(d,_,_,r):_}Object.defineProperty(exports,"__esModule",{value:!0});var _propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),_wrap=__webpack_require__(/*! ./wrap */ "./node_modules/react-reveal/wrap.js"),_wrap2=_interopRequireDefault(_wrap),propTypes={out:_propTypes.bool,left:_propTypes.bool,right:_propTypes.bool,top:_propTypes.bool,bottom:_propTypes.bool,big:_propTypes.bool,mirror:_propTypes.bool,opposite:_propTypes.bool,duration:_propTypes.number,timeout:_propTypes.number,distance:_propTypes.string,delay:_propTypes.number,count:_propTypes.number,forever:_propTypes.bool},lookup={};Fade.propTypes=propTypes,exports.default=Fade,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/RevealBase.js":
/*!*************************************************!*\
  !*** ./node_modules/react-reveal/RevealBase.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _defineProperty(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_slicedToArray=function(){function e(e,t){var i=[],s=!0,o=!1,n=void 0;try{for(var r,a=e[Symbol.iterator]();!(s=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);s=!0);}catch(e){o=!0,n=e}finally{try{!s&&a.return&&a.return()}finally{if(o)throw n}}return i}return function(t,i){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s])}return e},_createClass=function(){function e(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}return function(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}}(),_react=__webpack_require__(/*! react */ "react"),_react2=_interopRequireDefault(_react),_propTypes=__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),_globals=__webpack_require__(/*! ./globals */ "./node_modules/react-reveal/globals.js"),inOut=(0,_propTypes.shape)({make:_propTypes.func,duration:_propTypes.number.isRequired,delay:_propTypes.number.isRequired,forever:_propTypes.bool,count:_propTypes.number.isRequired,style:_propTypes.object.isRequired,reverse:_propTypes.bool}),propTypes={collapse:_propTypes.bool,collapseEl:_propTypes.element,cascade:_propTypes.bool,wait:_propTypes.number,force:_propTypes.bool,disabled:_propTypes.bool,appear:_propTypes.bool,enter:_propTypes.bool,exit:_propTypes.bool,fraction:_propTypes.number,refProp:_propTypes.string,innerRef:_propTypes.func,onReveal:_propTypes.func,unmountOnExit:_propTypes.bool,mountOnEnter:_propTypes.bool,inEffect:inOut.isRequired,outEffect:(0,_propTypes.oneOfType)([inOut,(0,_propTypes.oneOf)([!1])]).isRequired,ssrReveal:_propTypes.bool,collapseOnly:_propTypes.bool,ssrFadeout:_propTypes.bool},defaultProps={fraction:.2,refProp:"ref"},contextTypes={transitionGroup:_propTypes.object},RevealBase=function(e){function t(e,i){_classCallCheck(this,t);var s=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return s.isOn=void 0===e.when||!!e.when,s.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:s.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},s.savedChild=!1,s.isShown=!1,_globals.observerMode?s.handleObserve=s.handleObserve.bind(s):(s.revealHandler=s.makeHandler(s.reveal),s.resizeHandler=s.makeHandler(s.resize)),s.saveRef=s.saveRef.bind(s),s}return _inherits(t,e),_createClass(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?_extends({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!_globals.observerMode&&this.props.collapse&&window.document.dispatchEvent(_globals.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var s=this,o=i.forever,n=i.count,r=i.delay,a=i.duration;if(!o){var l=function(){s&&s.el&&(s.animationEndTimeout=void 0,e.call(s))};this.animationEndTimeout=window.setTimeout(l,r+(a+(t?a:0)*n))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var s=i.duration+(t.cascade?i.duration:0),o=this.isOn?this.getDimensionValue():0,n=void 0,r=void 0;if(t.collapseOnly)n=i.duration/3,r=i.delay;else{var a=s>>2,l=a>>1;n=a,r=i.delay+(this.isOn?0:s-a-l),e.style.animationDuration=s-a+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?a-l:0)+"ms"}return e.collapse={height:o,transition:"height "+n+"ms ease "+r+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],s="style"in i&&i.style.animationName||void 0,o=void 0;e.collapseOnly?o={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(s=i.make),o={hasAppeared:!0,hasExited:!1,collapse:void 0,style:_extends({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:s}),className:i.className}),this.setState(e.collapse?this.collapse(o,e,i):o),t?(this.savedChild=_react2.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),_globals.ssr&&(0,_globals.disableSsr)()}},{key:"handleObserve",value:function(e,t){_slicedToArray(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&_globals.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];_globals.globalHide||(0,_globals.hideAll)(),this&&this.el&&(e||(e=this.props),_globals.ssr&&(0,_globals.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):_globals.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,s=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!s||_globals.ssr&&!_globals.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):_globals.ssr&&(_globals.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return _react2.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):_react2.default.Children.toArray(e);var s=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=s.duration,n=s.reverse,r=i.length,a=2*o;this.props.collapse&&(a=parseInt(this.state.style.animationDuration,10),o=a/2);var l=n?r:0;return i=i.map(function(e){return"object"===(void 0===e?"undefined":_typeof(e))&&e?_react2.default.cloneElement(e,{style:_extends({},e.props.style,t.state.style,{animationDuration:Math.round((0,_globals.cascade)(n?l--:l++,0,r,o,a))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){if(void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit)return void e.onExited();e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===_typeof(this.props.children)){var e=_react2.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:_react2.default.createElement("div",null,e)}return _react2.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e=void 0;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,s=t.props,o=s.style,n=s.className,r=s.children,a=this.props.disabled?n:(this.props.outEffect?_globals.namespace:"")+(this.state.className?" "+this.state.className:"")+(n?" "+n:"")||void 0,l=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),l=_extends({},o,{opacity:1})):l=this.props.disabled?o:_extends({},o,this.state.style);var p=_extends({},this.props.props,_defineProperty({className:a,style:l},this.props.refProp,this.saveRef)),h=_react2.default.cloneElement(t,p,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?_react2.default.cloneElement(this.props.collapseEl,{style:_extends({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):_react2.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,_globals.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,s=window.pageYOffset-t.getTop(this.el),o=Math.min(i,window.innerHeight)*(_globals.globalHide?e.fraction:0);return s>o-window.innerHeight&&s<i-o}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){_globals.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!_globals.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(_react2.default.Component);RevealBase.propTypes=propTypes,RevealBase.defaultProps=defaultProps,RevealBase.contextTypes=contextTypes,RevealBase.displayName="RevealBase",exports.default=RevealBase,module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-reveal/globals.js":
/*!**********************************************!*\
  !*** ./node_modules/react-reveal/globals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function insertRule(e){try{return sheet.insertRule(e,sheet.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function cascade(e,n,t,o,r){var s=Math.log(o),i=Math.log(r),a=(i-s)/(t-n);return Math.exp(s+a*(e-n))}function animation(e){if(!sheet)return"";var n="@keyframes "+(name+counter)+"{"+e+"}",t=effectMap[e];return t?""+name+t:(sheet.insertRule(n,sheet.cssRules.length),effectMap[e]=counter,""+name+counter++)}function hideAll(){globalHide||(exports.globalHide=globalHide=!0,window.removeEventListener("scroll",hideAll,!0),insertRule("."+namespace+" { opacity: 0; }"),window.removeEventListener("orientationchange",hideAll,!0),window.document.removeEventListener("visibilitychange",hideAll))}function config(e){var n=e.ssrFadeout;exports.fadeOutEnabled=fadeOutEnabled=n}Object.defineProperty(exports,"__esModule",{value:!0}),exports.insertRule=insertRule,exports.cascade=cascade,exports.animation=animation,exports.hideAll=hideAll,exports.default=config;var namespace=exports.namespace="react-reveal",defaults=exports.defaults={duration:1e3,delay:0,count:1},ssr=exports.ssr=!0,observerMode=exports.observerMode=!1,raf=exports.raf=function(e){return window.setTimeout(e,66)},disableSsr=exports.disableSsr=function(){return exports.ssr=ssr=!1},fadeOutEnabled=exports.fadeOutEnabled=!1,ssrFadeout=exports.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return exports.fadeOutEnabled=fadeOutEnabled=e},globalHide=exports.globalHide=!1,ie10=exports.ie10=!1,collapseend=exports.collapseend=void 0,counter=1,effectMap={},sheet=!1,name=namespace+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){exports.observerMode=observerMode="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),exports.raf=raf=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||raf,exports.ssr=ssr=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(exports.ie10=ie10=!0),ssr&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(exports.ssr=ssr=!1),ssr&&window.setTimeout(disableSsr,1500),observerMode||(exports.collapseend=collapseend=document.createEvent("Event"),collapseend.initEvent("collapseend",!0,!0));var element=document.createElement("style");document.head.appendChild(element),element.sheet&&element.sheet.cssRules&&element.sheet.insertRule&&(sheet=element.sheet,window.addEventListener("scroll",hideAll,!0),window.addEventListener("orientationchange",hideAll,!0),window.document.addEventListener("visibilitychange",hideAll))}

/***/ }),

/***/ "./node_modules/react-reveal/wrap.js":
/*!*******************************************!*\
  !*** ./node_modules/react-reveal/wrap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function wrap(e,t,a,r){return"in"in e&&(e.when=e.in),_react2.default.Children.count(r)<2?_react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r})):(r=_react2.default.Children.map(r,function(r){return _react2.default.createElement(_RevealBase2.default,_extends({},e,{inEffect:t,outEffect:a,children:r}))}),"Fragment"in _react2.default?_react2.default.createElement(_react2.default.Fragment,null,r):_react2.default.createElement("span",null,r))}Object.defineProperty(exports,"__esModule",{value:!0});var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e};exports.default=wrap;var _react=__webpack_require__(/*! react */ "react"),_react2=_interopRequireDefault(_react),_RevealBase=__webpack_require__(/*! ./RevealBase */ "./node_modules/react-reveal/RevealBase.js"),_RevealBase2=_interopRequireDefault(_RevealBase);module.exports=exports.default;

/***/ }),

/***/ "./node_modules/react-scroll-up/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-scroll-up/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author  Milos Janda
 * @licence MIT
 */



Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _tweenFunctions = __webpack_require__(/*! tween-functions */ "./node_modules/tween-functions/index.js");

var _tweenFunctions2 = _interopRequireDefault(_tweenFunctions);

var _detectPassiveEvents = __webpack_require__(/*! detect-passive-events */ "./node_modules/detect-passive-events/lib/index.js");

var _detectPassiveEvents2 = _interopRequireDefault(_detectPassiveEvents);

var _objectAssign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollUp = function (_React$Component) {
    _inherits(ScrollUp, _React$Component);

    function ScrollUp(props) {
        _classCallCheck(this, ScrollUp);

        // set default state
        var _this = _possibleConstructorReturn(this, (ScrollUp.__proto__ || Object.getPrototypeOf(ScrollUp)).call(this, props));

        _this.state = { show: false };

        // default property `data`
        _this.data = {
            startValue: 0,
            currentTime: 0, // store current time of animation
            startTime: null,
            rafId: null
        };

        // bind
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleScroll = _this.handleScroll.bind(_this);
        _this.scrollStep = _this.scrollStep.bind(_this);
        _this.stopScrolling = _this.stopScrolling.bind(_this);
        return _this;
    }

    _createClass(ScrollUp, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps, nextState) {
            return nextState.show !== this.state.show;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.handleScroll(); // initialize state

            // Add all listeners which can start scroll
            window.addEventListener('scroll', this.handleScroll);
            window.addEventListener("wheel", this.stopScrolling, _detectPassiveEvents2.default.hasSupport ? { passive: true } : false);
            window.addEventListener("touchstart", this.stopScrolling, _detectPassiveEvents2.default.hasSupport ? { passive: true } : false);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // Remove all listeners which was registered
            window.removeEventListener('scroll', this.handleScroll);
            window.removeEventListener("wheel", this.stopScrolling, false);
            window.removeEventListener("touchstart", this.stopScrolling, false);
        }

        /**
         * Evaluate show/hide this component, depend on new position
         */

    }, {
        key: 'handleScroll',
        value: function handleScroll() {
            if (window.pageYOffset > this.props.showUnder) {
                if (!this.state.show) {
                    this.setState({ show: true });
                }
            } else {
                if (this.state.show) {
                    this.setState({ show: false });
                }
            }
        }

        /**
         * Handle click on the button
         */

    }, {
        key: 'handleClick',
        value: function handleClick() {
            this.stopScrolling();
            this.data.startValue = window.pageYOffset;
            this.data.currentTime = 0;
            this.data.startTime = null;
            this.data.rafId = window.requestAnimationFrame(this.scrollStep);
        }

        /**
         * Calculate new position
         * and scroll screen to new position or stop scrolling
         * @param timestamp
         */

    }, {
        key: 'scrollStep',
        value: function scrollStep(timestamp) {
            if (!this.data.startTime) {
                this.data.startTime = timestamp;
            }

            this.data.currentTime = timestamp - this.data.startTime;

            var position = _tweenFunctions2.default[this.props.easing](this.data.currentTime, this.data.startValue, this.props.topPosition, this.props.duration);

            if (window.pageYOffset <= this.props.topPosition) {
                this.stopScrolling();
            } else {
                window.scrollTo(window.pageYOffset, position);
                this.data.rafId = window.requestAnimationFrame(this.scrollStep);
            }
        }

        /**
         * Stop Animation Frame
         */

    }, {
        key: 'stopScrolling',
        value: function stopScrolling() {
            window.cancelAnimationFrame(this.data.rafId);
        }

        /**
         * Render component
         */

    }, {
        key: 'render',
        value: function render() {

            var propStyle = this.props.style;
            var element = _react2.default.createElement(
                'div',
                { style: propStyle, onClick: this.handleClick },
                this.props.children
            );

            var style = (0, _objectAssign2.default)({}, ScrollUp.defaultProps.style);
            style = (0, _objectAssign2.default)(style, propStyle);
            style.opacity = this.state.show ? 1 : 0;
            style.visibility = this.state.show ? 'visible' : 'hidden';
            style.transitionProperty = 'opacity, visibility';

            return _react2.default.cloneElement(element, { style: style });
        }
    }]);

    return ScrollUp;
}(_react2.default.Component);

// Set default props


exports.default = ScrollUp;
ScrollUp.defaultProps = {
    duration: 250,
    easing: 'easeOutCubic',
    style: {
        position: 'fixed',
        bottom: 50,
        right: 30,
        cursor: 'pointer',
        transitionDuration: '0.2s',
        transitionTimingFunction: 'linear',
        transitionDelay: '0s'
    },
    topPosition: 0
};

// Set validation property types
ScrollUp.propTypes = {
    topPosition: _propTypes2.default.number,
    showUnder: _propTypes2.default.number.isRequired, // show button under this position,
    easing: _propTypes2.default.oneOf(['linear', 'easeInQuad', 'easeOutQuad', 'easeInOutQuad', 'easeInCubic', 'easeOutCubic', 'easeInOutCubic', 'easeInQuart', 'easeOutQuart', 'easeInOutQuart', 'easeInQuint', 'easeOutQuint', 'easeInOutQuint', 'easeInSine', 'easeOutSine', 'easeInOutSine', 'easeInExpo', 'easeOutExpo', 'easeInOutExpo', 'easeInCirc', 'easeOutCirc', 'easeInOutCirc', 'easeInElastic', 'easeOutElastic', 'easeInOutElastic', 'easeInBack', 'easeOutBack', 'easeInOutBack', 'easeInBounce', 'easeOutBounce', 'easeInOutBounce']),
    duration: _propTypes2.default.number, // seconds
    style: _propTypes2.default.object
};


/***/ }),

/***/ "./node_modules/reactjs-popup/reactjs-popup.es.js":
/*!********************************************************!*\
  !*** ./node_modules/reactjs-popup/reactjs-popup.es.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/*!
 * reactjs-popup v1.5.0
 * (c) 2019-present Youssouf EL AZIZI <youssoufelazizi@gmail.com>
 * Released under the MIT License.
 */


function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/* Algo to calculate position
  1. center position for popup content : the center of the trigger will be the center of the content content
      so the popup content position will be like this :
      top => the y of the center for the trigger element : trigger.top + trigger.height/2
      left => the x of the center for the trigger element : trigger.left + trigger.width/2

  2. translate position according to the first  position attribute  passed  in the function argument
      for example :
        position = 'left top'
        we need to handle the first argument in the position: 'left' => that's mean we need to translate the popup content according to the X axis by - content.width/2

  3.translate position according to the first  position attribute  passed  in the function argument
    for example :
      position = 'left top'
      the second argument 'top' => translate popup content by + content.height*4/5

  4. check if calculated position is going out of bounds of wrapper box or not. If yes repeat 1-3 for next position enum. By default wrapper box is window element
*/
function getCoordinatesForPosition(triggerBounding, ContentBounding, position, arrow, _ref) {
  var offsetX = _ref.offsetX,
      offsetY = _ref.offsetY;
  var margin = arrow ? 8 : 0;
  var args = position.split(' '); // the step N 1 : center the popup content => ok

  var CenterTop = triggerBounding.top + triggerBounding.height / 2;
  var CenterLeft = triggerBounding.left + triggerBounding.width / 2;
  var height = ContentBounding.height,
      width = ContentBounding.width;
  var top = CenterTop - height / 2;
  var left = CenterLeft - width / 2;
  var transform = '';
  var arrowTop = '0%';
  var arrowLeft = '0%'; // the  step N 2 : => ok

  switch (args[0]) {
    case 'top':
      top -= height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(45deg)";
      arrowTop = '100%';
      arrowLeft = '50%';
      break;

    case 'bottom':
      top += height / 2 + triggerBounding.height / 2 + margin;
      transform = "rotate(225deg)";
      arrowLeft = '50%';
      break;

    case 'left':
      left -= width / 2 + triggerBounding.width / 2 + margin;
      transform = " rotate(-45deg)";
      arrowLeft = '100%';
      arrowTop = '50%';
      break;

    case 'right':
      left += width / 2 + triggerBounding.width / 2 + margin;
      transform = "rotate(135deg)";
      arrowTop = '50%';
      break;

    default:
  }

  switch (args[1]) {
    case 'top':
      top = triggerBounding.top;
      arrowTop = "".concat(triggerBounding.height / 2, "px");
      break;

    case 'bottom':
      top = triggerBounding.top - height + triggerBounding.height;
      arrowTop = "".concat(height - triggerBounding.height / 2, "px");
      break;

    case 'left':
      left = triggerBounding.left;
      arrowLeft = "".concat(triggerBounding.width / 2, "px");
      break;

    case 'right':
      left = triggerBounding.left - width + triggerBounding.width;
      arrowLeft = "".concat(width - triggerBounding.width / 2, "px");
      break;

    default:
  }

  top = args[0] === 'top' ? top - offsetY : top + offsetY;
  left = args[0] === 'left' ? left - offsetX : left + offsetX;
  return {
    top: top,
    left: left,
    transform: transform,
    arrowLeft: arrowLeft,
    arrowTop: arrowTop
  };
}

function calculatePosition(triggerBounding, ContentBounding, positions, arrow, _ref2, wrapperBox) {
  var offsetX = _ref2.offsetX,
      offsetY = _ref2.offsetY;
  var bestCoords;
  var i = 0;

  while (i < positions.length) {
    bestCoords = getCoordinatesForPosition(triggerBounding, ContentBounding, positions[i], arrow, {
      offsetX: offsetX,
      offsetY: offsetY
    });
    var contentBox = {
      top: bestCoords.top,
      left: bestCoords.left,
      width: ContentBounding.width,
      height: ContentBounding.height
    };

    if (contentBox.top <= wrapperBox.top || contentBox.left <= wrapperBox.left || contentBox.top + contentBox.height >= wrapperBox.top + wrapperBox.height || contentBox.left + contentBox.width >= wrapperBox.left + wrapperBox.width) {
      i++;
    } else {
      break;
    }
  }

  return bestCoords;
}

var styles = {
  popupContent: {
    tooltip: {
      position: 'absolute',
      zIndex: '2',
      width: '200px',
      background: "rgb(255, 255, 255)",
      border: "1px solid rgb(187, 187, 187)",
      boxShadow: "rgba(0, 0, 0, 0.2) 0px 1px 3px",
      padding: '5px'
    },
    modal: {
      position: 'relative',
      background: "rgb(255, 255, 255)",
      width: '50%',
      margin: 'auto',
      border: "1px solid rgb(187, 187, 187)",
      padding: '5px'
    }
  },
  popupArrow: {
    height: '10px',
    width: '10px',
    position: 'absolute',
    background: 'rgb(255, 255, 255)',
    transform: 'rotate(45deg)',
    margin: '-5px',
    zIndex: '-1',
    boxShadow: 'rgba(0, 0, 0, 0.2) 1px 1px 1px'
  },
  overlay: {
    tooltip: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0'
    },
    modal: {
      position: 'fixed',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      background: "rgba(0, 0, 0,0.5)",
      display: 'flex',
      zIndex: '999'
    }
  }
};

var POSITION_TYPES = ['top left', 'top center', 'top right', 'right top', 'right center', 'right bottom', 'bottom left', 'bottom center', 'bottom right', 'left top', 'left center', 'left bottom', 'center center'];

var Popup =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Popup, _React$PureComponent);

  function Popup(props) {
    var _this;

    _classCallCheck(this, Popup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popup).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "repositionOnResize", function () {
      _this.setPosition();
    });

    _defineProperty(_assertThisInitialized(_this), "onEscape", function (e) {
      if (e.key === 'Escape') _this.closePopup();
    });

    _defineProperty(_assertThisInitialized(_this), "lockScroll", function () {
      var lockScroll = _this.props.lockScroll;
      var modal = _this.state.modal;
      if (modal && lockScroll)
        /* eslint-disable-next-line no-undef */
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    });

    _defineProperty(_assertThisInitialized(_this), "resetScroll", function () {
      var lockScroll = _this.props.lockScroll;
      var modal = _this.state.modal;
      if (modal && lockScroll)
        /* eslint-disable-next-line no-undef */
        document.getElementsByTagName('body')[0].style.overflow = 'auto';
    });

    _defineProperty(_assertThisInitialized(_this), "togglePopup", function (e) {
      // https://reactjs.org/docs/events.html#event-pooling
      e.persist();
      if (_this.state.isOpen) _this.closePopup(e);else _this.openPopup(e);
    });

    _defineProperty(_assertThisInitialized(_this), "openPopup", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onOpen = _this$props.onOpen;
      var isOpen = _this.state.isOpen;
      if (isOpen || disabled) return;
      onOpen(e);

      _this.setState({
        isOpen: true
      }, function () {
        _this.setPosition();

        _this.lockScroll();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closePopup", function (e) {
      var onClose = _this.props.onClose;
      var isOpen = _this.state.isOpen;
      if (!isOpen) return;
      onClose(e);

      _this.setState({
        isOpen: false
      }, function () {
        _this.resetScroll();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseEnter", function () {
      clearTimeout(_this.timeOut);
      var mouseEnterDelay = _this.props.mouseEnterDelay;
      _this.timeOut = setTimeout(function () {
        return _this.openPopup();
      }, mouseEnterDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function () {
      clearTimeout(_this.timeOut);
      var mouseLeaveDelay = _this.props.mouseLeaveDelay;
      _this.timeOut = setTimeout(function () {
        return _this.closePopup();
      }, mouseLeaveDelay);
    });

    _defineProperty(_assertThisInitialized(_this), "getTooltipBoundary", function () {
      var keepTooltipInside = _this.props.keepTooltipInside;
      var boundingBox = {
        top: 0,
        left: 0,

        /* eslint-disable-next-line no-undef */
        width: window.innerWidth,

        /* eslint-disable-next-line no-undef */
        height: window.innerHeight
      };

      if (typeof keepTooltipInside === 'string') {
        /* eslint-disable-next-line no-undef */
        var selector = document.querySelector(keepTooltipInside);

        if (false) {}

        boundingBox = selector.getBoundingClientRect();
      }

      return boundingBox;
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function () {
      var _this$state = _this.state,
          modal = _this$state.modal,
          isOpen = _this$state.isOpen;
      if (modal || !isOpen) return;
      var _this$props2 = _this.props,
          arrow = _this$props2.arrow,
          position = _this$props2.position,
          offsetX = _this$props2.offsetX,
          offsetY = _this$props2.offsetY,
          keepTooltipInside = _this$props2.keepTooltipInside,
          arrowStyle = _this$props2.arrowStyle,
          className = _this$props2.className;

      var helper = _this.HelperEl.getBoundingClientRect();

      var trigger = _this.TriggerEl.getBoundingClientRect();

      var content = _this.ContentEl.getBoundingClientRect();

      var boundingBox = _this.getTooltipBoundary();

      var positions = Array.isArray(position) ? position : [position]; // keepTooltipInside would be activated if the  keepTooltipInside exist or the position is Array

      if (keepTooltipInside || Array.isArray(position)) positions = [].concat(_toConsumableArray(positions), POSITION_TYPES);
      var cords = calculatePosition(trigger, content, positions, arrow, {
        offsetX: offsetX,
        offsetY: offsetY
      }, boundingBox);
      _this.ContentEl.style.top = "".concat(cords.top - helper.top, "px");
      _this.ContentEl.style.left = "".concat(cords.left - helper.left, "px");

      if (arrow) {
        _this.ArrowEl.style.transform = cords.transform;
        _this.ArrowEl.style['-ms-transform'] = cords.transform;
        _this.ArrowEl.style['-webkit-transform'] = cords.transform;
        _this.ArrowEl.style.top = arrowStyle.top || cords.arrowTop;
        _this.ArrowEl.style.left = arrowStyle.left || cords.arrowLeft;

        _this.ArrowEl.classList.add("popup-arrow");

        if (className !== '') {
          _this.ArrowEl.classList.add("".concat(className, "-arrow"));
        }
      }

      if (
      /* eslint-disable-next-line no-undef */
      window.getComputedStyle(_this.TriggerEl, null).getPropertyValue('position') === 'static' ||
      /* eslint-disable-next-line no-undef */
      window.getComputedStyle(_this.TriggerEl, null).getPropertyValue('position') === '') _this.TriggerEl.style.position = 'relative';
    });

    _defineProperty(_assertThisInitialized(_this), "addWarperAction", function () {
      var _this$props3 = _this.props,
          contentStyle = _this$props3.contentStyle,
          className = _this$props3.className,
          on = _this$props3.on;
      var modal = _this.state.modal;
      var popupContentStyle = modal ? styles.popupContent.modal : styles.popupContent.tooltip;
      var childrenElementProps = {
        className: "popup-content ".concat(className !== '' ? "".concat(className, "-content") : ''),
        style: Object.assign({}, popupContentStyle, contentStyle),
        ref: _this.setContentRef,
        onClick: function onClick(e) {
          e.stopPropagation();
        }
      };

      if (!modal && on.indexOf('hover') >= 0) {
        childrenElementProps.onMouseEnter = _this.onMouseEnter;
        childrenElementProps.onMouseLeave = _this.onMouseLeave;
      }

      return childrenElementProps;
    });

    _defineProperty(_assertThisInitialized(_this), "renderTrigger", function () {
      var triggerProps = {
        key: 'T',
        ref: _this.setTriggerRef
      };
      var _this$props4 = _this.props,
          on = _this$props4.on,
          trigger = _this$props4.trigger;
      var isOpen = _this.state.isOpen;
      var onAsArray = Array.isArray(on) ? on : [on];

      for (var i = 0, len = onAsArray.length; i < len; i++) {
        switch (onAsArray[i]) {
          case 'click':
            triggerProps.onClick = _this.togglePopup;
            break;

          case 'hover':
            triggerProps.onMouseEnter = _this.onMouseEnter;
            triggerProps.onMouseLeave = _this.onMouseLeave;
            break;

          case 'focus':
            triggerProps.onFocus = _this.onMouseEnter;
            break;

          default:
        }
      }

      if (typeof trigger === 'function') return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(trigger(isOpen), triggerProps);
      return !!trigger && react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(trigger, triggerProps);
    });

    _defineProperty(_assertThisInitialized(_this), "renderContent", function () {
      var _this$props5 = _this.props,
          arrow = _this$props5.arrow,
          arrowStyle = _this$props5.arrowStyle,
          children = _this$props5.children;
      var _this$state2 = _this.state,
          modal = _this$state2.modal,
          isOpen = _this$state2.isOpen;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({}, _this.addWarperAction(), {
        key: "C"
      }), arrow && !modal && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        ref: _this.setArrowRef,
        style: Object.assign({}, styles.popupArrow, arrowStyle)
      }), typeof children === 'function' ? children(_this.closePopup, isOpen) : children);
    });

    _this.setTriggerRef = function (r) {
      return _this.TriggerEl = r;
    };

    _this.setContentRef = function (r) {
      return _this.ContentEl = r;
    };

    _this.setArrowRef = function (r) {
      return _this.ArrowEl = r;
    };

    _this.setHelperRef = function (r) {
      return _this.HelperEl = r;
    };

    _this.timeOut = 0;
    var open = props.open,
        _modal = props.modal,
        defaultOpen = props.defaultOpen,
        _trigger = props.trigger;
    _this.state = {
      isOpen: open || defaultOpen,
      modal: _modal ? true : !_trigger // we create this modal state because the popup can't be a tooltip if the trigger prop doesn't exist

    };
    return _this;
  }

  _createClass(Popup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props6 = this.props,
          closeOnEscape = _this$props6.closeOnEscape,
          defaultOpen = _this$props6.defaultOpen,
          repositionOnResize = _this$props6.repositionOnResize;
      if (defaultOpen) this.setPosition();

      if (closeOnEscape) {
        /* eslint-disable-next-line no-undef */
        window.addEventListener('keyup', this.onEscape);
      }

      if (repositionOnResize) {
        /* eslint-disable-next-line no-undef */
        window.addEventListener('resize', this.repositionOnResize);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props7 = this.props,
          open = _this$props7.open,
          disabled = _this$props7.disabled;
      var isOpen = this.state.isOpen;

      if (prevProps.open !== open) {
        if (open) this.openPopup();else this.closePopup(undefined, true);
      }

      if (prevProps.disabled !== disabled && disabled && isOpen) {
        this.closePopup();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // kill any function to execute if the component is unmounted
      clearTimeout(this.timeOut);
      var _this$props8 = this.props,
          closeOnEscape = _this$props8.closeOnEscape,
          repositionOnResize = _this$props8.repositionOnResize; // remove events listeners

      if (closeOnEscape) {
        /* eslint-disable-next-line no-undef */
        window.removeEventListener('keyup', this.onEscape);
      }

      if (repositionOnResize) {
        /* eslint-disable-next-line no-undef */
        window.removeEventListener('resize', this.repositionOnResize);
      }

      this.resetScroll();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props9 = this.props,
          overlayStyle = _this$props9.overlayStyle,
          closeOnDocumentClick = _this$props9.closeOnDocumentClick,
          className = _this$props9.className,
          on = _this$props9.on,
          trigger = _this$props9.trigger;
      var _this$state3 = this.state,
          modal = _this$state3.modal,
          isOpen = _this$state3.isOpen;
      var overlay = isOpen && !(on.indexOf('hover') >= 0);
      var ovStyle = modal ? styles.overlay.modal : styles.overlay.tooltip;
      return [this.renderTrigger(), isOpen && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "H",
        style: {
          position: 'absolute',
          top: '0px',
          left: '0px'
        },
        ref: this.setHelperRef
      }), overlay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: "O",
        className: "popup-overlay ".concat(className !== '' ? "".concat(className, "-overlay") : ''),
        style: Object.assign({}, ovStyle, overlayStyle),
        onClick: closeOnDocumentClick ? this.closePopup : undefined
      }, modal && this.renderContent()), isOpen && !modal && this.renderContent()];
    }
  }]);

  return Popup;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent);

_defineProperty(Popup, "defaultProps", {
  trigger: null,
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  defaultOpen: false,
  open: false,
  disabled: false,
  closeOnDocumentClick: true,
  repositionOnResize: true,
  closeOnEscape: true,
  on: ['click'],
  contentStyle: {},
  arrowStyle: {},
  overlayStyle: {},
  className: '',
  position: 'bottom center',
  modal: false,
  lockScroll: false,
  arrow: true,
  offsetX: 0,
  offsetY: 0,
  mouseEnterDelay: 100,
  mouseLeaveDelay: 100,
  keepTooltipInside: false
});

if (false) { var TRIGGER_TYPES, PropTypes; }

/* harmony default export */ __webpack_exports__["default"] = (Popup);


/***/ }),

/***/ "./node_modules/scheduler/cjs/scheduler.production.min.js":
/*!****************************************************************!*\
  !*** ./node_modules/scheduler/cjs/scheduler.production.min.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),

/***/ "./node_modules/scheduler/index.js":
/*!*****************************************!*\
  !*** ./node_modules/scheduler/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/scheduler.production.min.js */ "./node_modules/scheduler/cjs/scheduler.production.min.js");
} else {}


/***/ }),

/***/ "./node_modules/shallowequal/index.js":
/*!********************************************!*\
  !*** ./node_modules/shallowequal/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ "./node_modules/styled-components/dist/styled-components.esm.js":
/*!**********************************************************************!*\
  !*** ./node_modules/styled-components/dist/styled-components.esm.js ***!
  \**********************************************************************/
/*! exports provided: default, ServerStyleSheet, StyleSheetConsumer, StyleSheetContext, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, __PRIVATE__, createGlobalStyle, css, isStyledComponent, keyframes, useTheme, version, withTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerStyleSheet", function() { return ServerStyleSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetConsumer", function() { return StyleSheetConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetContext", function() { return StyleSheetContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleSheetManager", function() { return StyleSheetManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeConsumer", function() { return ThemeConsumer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return ThemeProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__PRIVATE__", function() { return __PRIVATE__; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createGlobalStyle", function() { return createGlobalStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "css", function() { return css; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStyledComponent", function() { return isStyledComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keyframes", function() { return keyframes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTheme", function() { return useTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withTheme", function() { return withTheme; });
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! shallowequal */ "./node_modules/shallowequal/index.js");
/* harmony import */ var shallowequal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(shallowequal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/stylis */ "./node_modules/@emotion/stylis/dist/stylis.esm.js");
/* harmony import */ var _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/unitless */ "./node_modules/@emotion/unitless/dist/unitless.esm.js");
/* harmony import */ var _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/is-prop-valid */ "./node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6__);








function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

// 
var interleave = (function (strings, interpolations) {
  var result = [strings[0]];

  for (var i = 0, len = interpolations.length; i < len; i += 1) {
    result.push(interpolations[i], strings[i + 1]);
  }

  return result;
});

// 
var isPlainObject = (function (x) {
  return x !== null && typeof x === 'object' && (x.toString ? x.toString() : Object.prototype.toString.call(x)) === '[object Object]' && !Object(react_is__WEBPACK_IMPORTED_MODULE_0__["typeOf"])(x);
});

// 
var EMPTY_ARRAY = Object.freeze([]);
var EMPTY_OBJECT = Object.freeze({});

// 
function isFunction(test) {
  return typeof test === 'function';
}

// 
function getComponentName(target) {
  return ( false) || // $FlowFixMe
  target.displayName || // $FlowFixMe
  target.name || 'Component';
}

// 
function isStatelessFunction(test) {
  return typeof test === 'function' && !(test.prototype && test.prototype.isReactComponent);
}

// 
function isStyledComponent(target) {
  return target && typeof target.styledComponentId === 'string';
}

// 
var SC_ATTR = typeof process !== 'undefined' && (({}).REACT_APP_SC_ATTR || ({}).SC_ATTR) || 'data-styled';
var SC_ATTR_ACTIVE = 'active';
var SC_ATTR_VERSION = 'data-styled-version';
var SC_VERSION = "5.1.1";
var SPLITTER = '/*!sc*/\n';
var IS_BROWSER = typeof window !== 'undefined' && 'HTMLElement' in window;
var DISABLE_SPEEDY = typeof SC_DISABLE_SPEEDY === 'boolean' && SC_DISABLE_SPEEDY || typeof process !== 'undefined' && (({}).REACT_APP_SC_DISABLE_SPEEDY || ({}).SC_DISABLE_SPEEDY) || "production" !== 'production'; // Shared empty execution context when generating static styles

var STATIC_EXECUTION_CONTEXT = {};

// 

/* eslint-disable camelcase, no-undef */
var getNonce = function getNonce() {
  return  true ? __webpack_require__.nc : undefined;
};

var errorMap = {
  "1": "Cannot create styled-component for component: %s.\n\n",
  "2": "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
  "3": "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
  "4": "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
  "5": "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
  "6": "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
  "7": "ThemeProvider: Please return an object from your \"theme\" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n",
  "8": "ThemeProvider: Please make your \"theme\" prop an object.\n\n",
  "9": "Missing document `<head>`\n\n",
  "10": "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
  "11": "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
  "12": "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
  "13": "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
  "14": "ThemeProvider: \"theme\" prop is required.\n\n",
  "15": "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
  "16": "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
  "17": "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
};

// 
var ERRORS =  false ? undefined : {};
/**
 * super basic version of sprintf
 */

function format() {
  var a = arguments.length <= 0 ? undefined : arguments[0];
  var b = [];

  for (var c = 1, len = arguments.length; c < len; c += 1) {
    b.push(c < 0 || arguments.length <= c ? undefined : arguments[c]);
  }

  b.forEach(function (d) {
    a = a.replace(/%[a-z]/, d);
  });
  return a;
}
/**
 * Create an error file out of errors.md for development and a simple web link to the full errors
 * in production mode.
 */


function throwStyledComponentsError(code) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (true) {
    throw new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/master/packages/styled-components/src/utils/errors.md#" + code + " for more information." + (interpolations.length > 0 ? " Additional arguments: " + interpolations.join(', ') : ''));
  } else {}
}

// 
var ELEMENT_TYPE = 1;
/* Node.ELEMENT_TYPE */

/** Find last style element if any inside target */

var findLastStyleTag = function findLastStyleTag(target) {
  var childNodes = target.childNodes;

  for (var i = childNodes.length; i >= 0; i--) {
    var child = childNodes[i];

    if (child && child.nodeType === ELEMENT_TYPE && child.hasAttribute(SC_ATTR)) {
      return child;
    }
  }

  return undefined;
};
/** Create a style element inside `target` or <head> after the last */


var makeStyleTag = function makeStyleTag(target) {
  var head = document.head;
  var parent = target || head;
  var style = document.createElement('style');
  var prevStyle = findLastStyleTag(parent);
  var nextSibling = prevStyle !== undefined ? prevStyle.nextSibling : null;
  style.setAttribute(SC_ATTR, SC_ATTR_ACTIVE);
  style.setAttribute(SC_ATTR_VERSION, SC_VERSION);
  var nonce = getNonce();
  if (nonce) style.setAttribute('nonce', nonce);
  parent.insertBefore(style, nextSibling);
  return style;
};
/** Get the CSSStyleSheet instance for a given style element */

var getSheet = function getSheet(tag) {
  if (tag.sheet) {
    return tag.sheet;
  } // Avoid Firefox quirk where the style element might not have a sheet property


  var _document = document,
      styleSheets = _document.styleSheets;

  for (var i = 0, l = styleSheets.length; i < l; i++) {
    var sheet = styleSheets[i];

    if (sheet.ownerNode === tag) {
      return sheet;
    }
  }

  throwStyledComponentsError(17);
  return undefined;
};

// 
/** Create a CSSStyleSheet-like tag depending on the environment */

var makeTag = function makeTag(_ref) {
  var isServer = _ref.isServer,
      useCSSOMInjection = _ref.useCSSOMInjection,
      target = _ref.target;

  if (isServer) {
    return new VirtualTag(target);
  } else if (useCSSOMInjection) {
    return new CSSOMTag(target);
  } else {
    return new TextTag(target);
  }
};
var CSSOMTag = /*#__PURE__*/function () {
  function CSSOMTag(target) {
    var element = this.element = makeStyleTag(target); // Avoid Edge bug where empty style elements don't create sheets

    element.appendChild(document.createTextNode(''));
    this.sheet = getSheet(element);
    this.length = 0;
  }

  var _proto = CSSOMTag.prototype;

  _proto.insertRule = function insertRule(index, rule) {
    try {
      this.sheet.insertRule(rule, index);
      this.length++;
      return true;
    } catch (_error) {
      return false;
    }
  };

  _proto.deleteRule = function deleteRule(index) {
    this.sheet.deleteRule(index);
    this.length--;
  };

  _proto.getRule = function getRule(index) {
    var rule = this.sheet.cssRules[index]; // Avoid IE11 quirk where cssText is inaccessible on some invalid rules

    if (rule !== undefined && typeof rule.cssText === 'string') {
      return rule.cssText;
    } else {
      return '';
    }
  };

  return CSSOMTag;
}();
/** A Tag that emulates the CSSStyleSheet API but uses text nodes */

var TextTag = /*#__PURE__*/function () {
  function TextTag(target) {
    var element = this.element = makeStyleTag(target);
    this.nodes = element.childNodes;
    this.length = 0;
  }

  var _proto2 = TextTag.prototype;

  _proto2.insertRule = function insertRule(index, rule) {
    if (index <= this.length && index >= 0) {
      var node = document.createTextNode(rule);
      var refNode = this.nodes[index];
      this.element.insertBefore(node, refNode || null);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto2.deleteRule = function deleteRule(index) {
    this.element.removeChild(this.nodes[index]);
    this.length--;
  };

  _proto2.getRule = function getRule(index) {
    if (index < this.length) {
      return this.nodes[index].textContent;
    } else {
      return '';
    }
  };

  return TextTag;
}();
/** A completely virtual (server-side) Tag that doesn't manipulate the DOM */

var VirtualTag = /*#__PURE__*/function () {
  function VirtualTag(_target) {
    this.rules = [];
    this.length = 0;
  }

  var _proto3 = VirtualTag.prototype;

  _proto3.insertRule = function insertRule(index, rule) {
    if (index <= this.length) {
      this.rules.splice(index, 0, rule);
      this.length++;
      return true;
    } else {
      return false;
    }
  };

  _proto3.deleteRule = function deleteRule(index) {
    this.rules.splice(index, 1);
    this.length--;
  };

  _proto3.getRule = function getRule(index) {
    if (index < this.length) {
      return this.rules[index];
    } else {
      return '';
    }
  };

  return VirtualTag;
}();

// 
/** Create a GroupedTag with an underlying Tag implementation */

var makeGroupedTag = function makeGroupedTag(tag) {
  return new DefaultGroupedTag(tag);
};
var BASE_SIZE = 1 << 9;

var DefaultGroupedTag = /*#__PURE__*/function () {
  function DefaultGroupedTag(tag) {
    this.groupSizes = new Uint32Array(BASE_SIZE);
    this.length = BASE_SIZE;
    this.tag = tag;
  }

  var _proto = DefaultGroupedTag.prototype;

  _proto.indexOfGroup = function indexOfGroup(group) {
    var index = 0;

    for (var i = 0; i < group; i++) {
      index += this.groupSizes[i];
    }

    return index;
  };

  _proto.insertRules = function insertRules(group, rules) {
    if (group >= this.groupSizes.length) {
      var oldBuffer = this.groupSizes;
      var oldSize = oldBuffer.length;
      var newSize = oldSize;

      while (group >= newSize) {
        newSize <<= 1;

        if (newSize < 0) {
          throwStyledComponentsError(16, "" + group);
        }
      }

      this.groupSizes = new Uint32Array(newSize);
      this.groupSizes.set(oldBuffer);
      this.length = newSize;

      for (var i = oldSize; i < newSize; i++) {
        this.groupSizes[i] = 0;
      }
    }

    var ruleIndex = this.indexOfGroup(group + 1);

    for (var _i = 0, l = rules.length; _i < l; _i++) {
      if (this.tag.insertRule(ruleIndex, rules[_i])) {
        this.groupSizes[group]++;
        ruleIndex++;
      }
    }
  };

  _proto.clearGroup = function clearGroup(group) {
    if (group < this.length) {
      var length = this.groupSizes[group];
      var startIndex = this.indexOfGroup(group);
      var endIndex = startIndex + length;
      this.groupSizes[group] = 0;

      for (var i = startIndex; i < endIndex; i++) {
        this.tag.deleteRule(startIndex);
      }
    }
  };

  _proto.getGroup = function getGroup(group) {
    var css = '';

    if (group >= this.length || this.groupSizes[group] === 0) {
      return css;
    }

    var length = this.groupSizes[group];
    var startIndex = this.indexOfGroup(group);
    var endIndex = startIndex + length;

    for (var i = startIndex; i < endIndex; i++) {
      css += "" + this.tag.getRule(i) + SPLITTER;
    }

    return css;
  };

  return DefaultGroupedTag;
}();

// 
var MAX_SMI = 1 << 31 - 1;
var groupIDRegister = new Map();
var reverseRegister = new Map();
var nextFreeGroup = 1;
var getGroupForId = function getGroupForId(id) {
  if (groupIDRegister.has(id)) {
    return groupIDRegister.get(id);
  }

  var group = nextFreeGroup++;

  if (false) {}

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
  return group;
};
var getIdForGroup = function getIdForGroup(group) {
  return reverseRegister.get(group);
};
var setGroupForId = function setGroupForId(id, group) {
  if (group >= nextFreeGroup) {
    nextFreeGroup = group + 1;
  }

  groupIDRegister.set(id, group);
  reverseRegister.set(group, id);
};

// 
var SELECTOR = "style[" + SC_ATTR + "][" + SC_ATTR_VERSION + "=\"" + SC_VERSION + "\"]";
var MARKER_RE = new RegExp("^" + SC_ATTR + "\\.g(\\d+)\\[id=\"([\\w\\d-]+)\"\\].*?\"([^\"]*)");
var outputSheet = function outputSheet(sheet) {
  var tag = sheet.getTag();
  var length = tag.length;
  var css = '';

  for (var group = 0; group < length; group++) {
    var id = getIdForGroup(group);
    if (id === undefined) continue;
    var names = sheet.names.get(id);
    var rules = tag.getGroup(group);
    if (names === undefined || rules.length === 0) continue;
    var selector = SC_ATTR + ".g" + group + "[id=\"" + id + "\"]";
    var content = '';

    if (names !== undefined) {
      names.forEach(function (name) {
        if (name.length > 0) {
          content += name + ",";
        }
      });
    } // NOTE: It's easier to collect rules and have the marker
    // after the actual rules to simplify the rehydration


    css += "" + rules + selector + "{content:\"" + content + "\"}" + SPLITTER;
  }

  return css;
};

var rehydrateNamesFromContent = function rehydrateNamesFromContent(sheet, id, content) {
  var names = content.split(',');
  var name;

  for (var i = 0, l = names.length; i < l; i++) {
    // eslint-disable-next-line
    if (name = names[i]) {
      sheet.registerName(id, name);
    }
  }
};

var rehydrateSheetFromTag = function rehydrateSheetFromTag(sheet, style) {
  var parts = style.innerHTML.split(SPLITTER);
  var rules = [];

  for (var i = 0, l = parts.length; i < l; i++) {
    var part = parts[i].trim();
    if (!part) continue;
    var marker = part.match(MARKER_RE);

    if (marker) {
      var group = parseInt(marker[1], 10) | 0;
      var id = marker[2];

      if (group !== 0) {
        // Rehydrate componentId to group index mapping
        setGroupForId(id, group); // Rehydrate names and rules
        // looks like: data-styled.g11[id="idA"]{content:"nameA,"}

        rehydrateNamesFromContent(sheet, id, marker[3]);
        sheet.getTag().insertRules(group, rules);
      }

      rules.length = 0;
    } else {
      rules.push(part);
    }
  }
};

var rehydrateSheet = function rehydrateSheet(sheet) {
  var nodes = document.querySelectorAll(SELECTOR);

  for (var i = 0, l = nodes.length; i < l; i++) {
    var node = nodes[i];

    if (node && node.getAttribute(SC_ATTR) !== SC_ATTR_ACTIVE) {
      rehydrateSheetFromTag(sheet, node);

      if (node.parentNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
};

var SHOULD_REHYDRATE = IS_BROWSER;
var defaultOptions = {
  isServer: !IS_BROWSER,
  useCSSOMInjection: !DISABLE_SPEEDY
};
/** Contains the main stylesheet logic for stringification and caching */

var StyleSheet = /*#__PURE__*/function () {
  /** Register a group ID to give it an index */
  StyleSheet.registerId = function registerId(id) {
    return getGroupForId(id);
  };

  function StyleSheet(options, globalStyles, names) {
    if (options === void 0) {
      options = defaultOptions;
    }

    if (globalStyles === void 0) {
      globalStyles = {};
    }

    this.options = _extends({}, defaultOptions, {}, options);
    this.gs = globalStyles;
    this.names = new Map(names); // We rehydrate only once and use the sheet that is created first

    if (!this.options.isServer && IS_BROWSER && SHOULD_REHYDRATE) {
      SHOULD_REHYDRATE = false;
      rehydrateSheet(this);
    }
  }

  var _proto = StyleSheet.prototype;

  _proto.reconstructWithOptions = function reconstructWithOptions(options) {
    return new StyleSheet(_extends({}, this.options, {}, options), this.gs, this.names);
  };

  _proto.allocateGSInstance = function allocateGSInstance(id) {
    return this.gs[id] = (this.gs[id] || 0) + 1;
  }
  /** Lazily initialises a GroupedTag for when it's actually needed */
  ;

  _proto.getTag = function getTag() {
    return this.tag || (this.tag = makeGroupedTag(makeTag(this.options)));
  }
  /** Check whether a name is known for caching */
  ;

  _proto.hasNameForId = function hasNameForId(id, name) {
    return this.names.has(id) && this.names.get(id).has(name);
  }
  /** Mark a group's name as known for caching */
  ;

  _proto.registerName = function registerName(id, name) {
    getGroupForId(id);

    if (!this.names.has(id)) {
      var groupNames = new Set();
      groupNames.add(name);
      this.names.set(id, groupNames);
    } else {
      this.names.get(id).add(name);
    }
  }
  /** Insert new rules which also marks the name as known */
  ;

  _proto.insertRules = function insertRules(id, name, rules) {
    this.registerName(id, name);
    this.getTag().insertRules(getGroupForId(id), rules);
  }
  /** Clears all cached names for a given group ID */
  ;

  _proto.clearNames = function clearNames(id) {
    if (this.names.has(id)) {
      this.names.get(id).clear();
    }
  }
  /** Clears all rules for a given group ID */
  ;

  _proto.clearRules = function clearRules(id) {
    this.getTag().clearGroup(getGroupForId(id));
    this.clearNames(id);
  }
  /** Clears the entire tag which deletes all rules but not its names */
  ;

  _proto.clearTag = function clearTag() {
    // NOTE: This does not clear the names, since it's only used during SSR
    // so that we can continuously output only new rules
    this.tag = undefined;
  }
  /** Outputs the current sheet as a CSS string with markers for SSR */
  ;

  _proto.toString = function toString() {
    return outputSheet(this);
  };

  return StyleSheet;
}();

// 

/* eslint-disable */
var SEED = 5381; // When we have separate strings it's useful to run a progressive
// version of djb2 where we pretend that we're still looping over
// the same string

var phash = function phash(h, x) {
  var i = x.length;

  while (i) {
    h = h * 33 ^ x.charCodeAt(--i);
  }

  return h;
}; // This is a djb2 hashing function

var hash = function hash(x) {
  return phash(SEED, x);
};

/**
 * MIT License
 *
 * Copyright (c) 2016 Sultan Tarimo
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR
 * IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* eslint-disable */
function insertRulePlugin (insertRule) {
  var delimiter = '/*|*/';
  var needle = delimiter + "}";

  function toSheet(block) {
    if (block) {
      try {
        insertRule(block + "}");
      } catch (e) {}
    }
  }

  return function ruleSheet(context, content, selectors, parents, line, column, length, ns, depth, at) {
    switch (context) {
      // property
      case 1:
        // @import
        if (depth === 0 && content.charCodeAt(0) === 64) return insertRule(content + ";"), '';
        break;
      // selector

      case 2:
        if (ns === 0) return content + delimiter;
        break;
      // at-rule

      case 3:
        switch (ns) {
          // @font-face, @page
          case 102:
          case 112:
            return insertRule(selectors[0] + content), '';

          default:
            return content + (at === 0 ? delimiter : '');
        }

      case -2:
        content.split(needle).forEach(toSheet);
    }
  };
}

var COMMENT_REGEX = /^\s*\/\/.*$/gm;
function createStylisInstance(_temp) {
  var _ref = _temp === void 0 ? EMPTY_OBJECT : _temp,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? EMPTY_OBJECT : _ref$options,
      _ref$plugins = _ref.plugins,
      plugins = _ref$plugins === void 0 ? EMPTY_ARRAY : _ref$plugins;

  var stylis = new _emotion_stylis__WEBPACK_IMPORTED_MODULE_3__["default"](options); // Wrap `insertRulePlugin to build a list of rules,
  // and then make our own plugin to return the rules. This
  // makes it easier to hook into the existing SSR architecture

  var parsingRules = []; // eslint-disable-next-line consistent-return

  var returnRulesPlugin = function returnRulesPlugin(context) {
    if (context === -2) {
      var parsedRules = parsingRules;
      parsingRules = [];
      return parsedRules;
    }
  };

  var parseRulesPlugin = insertRulePlugin(function (rule) {
    parsingRules.push(rule);
  });

  var _componentId;

  var _selector;

  var _selectorRegexp;

  var selfReferenceReplacer = function selfReferenceReplacer(match, offset, string) {
    if ( // the first self-ref is always untouched
    offset > 0 && // there should be at least two self-refs to do a replacement (.b > .b)
    string.slice(0, offset).indexOf(_selector) !== -1 && // no consecutive self refs (.b.b); that is a precedence boost and treated differently
    string.slice(offset - _selector.length, offset) !== _selector) {
      return "." + _componentId;
    }

    return match;
  };
  /**
   * When writing a style like
   *
   * & + & {
   *   color: red;
   * }
   *
   * The second ampersand should be a reference to the static component class. stylis
   * has no knowledge of static class so we have to intelligently replace the base selector.
   *
   * https://github.com/thysultan/stylis.js#plugins <- more info about the context phase values
   * "2" means this plugin is taking effect at the very end after all other processing is complete
   */


  var selfReferenceReplacementPlugin = function selfReferenceReplacementPlugin(context, _, selectors) {
    if (context === 2 && selectors.length && selectors[0].lastIndexOf(_selector) > 0) {
      // eslint-disable-next-line no-param-reassign
      selectors[0] = selectors[0].replace(_selectorRegexp, selfReferenceReplacer);
    }
  };

  stylis.use([].concat(plugins, [selfReferenceReplacementPlugin, parseRulesPlugin, returnRulesPlugin]));

  function stringifyRules(css, selector, prefix, componentId) {
    if (componentId === void 0) {
      componentId = '&';
    }

    var flatCSS = css.replace(COMMENT_REGEX, '');
    var cssStr = selector && prefix ? prefix + " " + selector + " { " + flatCSS + " }" : flatCSS; // stylis has no concept of state to be passed to plugins
    // but since JS is single=threaded, we can rely on that to ensure
    // these properties stay in sync with the current stylis run

    _componentId = componentId;
    _selector = selector;
    _selectorRegexp = new RegExp("\\" + _selector + "\\b", 'g');
    return stylis(prefix || !selector ? '' : selector, cssStr);
  }

  stringifyRules.hash = plugins.length ? plugins.reduce(function (acc, plugin) {
    if (!plugin.name) {
      throwStyledComponentsError(15);
    }

    return phash(acc, plugin.name);
  }, SEED).toString() : '';
  return stringifyRules;
}

// 
var StyleSheetContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StyleSheetConsumer = StyleSheetContext.Consumer;
var StylisContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var StylisConsumer = StylisContext.Consumer;
var masterSheet = new StyleSheet();
var masterStylis = createStylisInstance();
function useStyleSheet() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StyleSheetContext) || masterSheet;
}
function useStylis() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(StylisContext) || masterStylis;
}
function StyleSheetManager(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(props.stylisPlugins),
      plugins = _useState[0],
      setPlugins = _useState[1];

  var contextStyleSheet = useStyleSheet();
  var styleSheet = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    var sheet = contextStyleSheet;

    if (props.sheet) {
      // eslint-disable-next-line prefer-destructuring
      sheet = props.sheet;
    } else if (props.target) {
      sheet = sheet.reconstructWithOptions({
        target: props.target
      });
    }

    if (props.disableCSSOMInjection) {
      sheet = sheet.reconstructWithOptions({
        useCSSOMInjection: false
      });
    }

    return sheet;
  }, [props.disableCSSOMInjection, props.sheet, props.target]);
  var stylis = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return createStylisInstance({
      options: {
        prefix: !props.disableVendorPrefixes
      },
      plugins: plugins
    });
  }, [props.disableVendorPrefixes, plugins]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (!shallowequal__WEBPACK_IMPORTED_MODULE_2___default()(plugins, props.stylisPlugins)) setPlugins(props.stylisPlugins);
  }, [props.stylisPlugins]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetContext.Provider, {
    value: styleSheet
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StylisContext.Provider, {
    value: stylis
  },  false ? undefined : props.children));
}

// 

var Keyframes = /*#__PURE__*/function () {
  function Keyframes(name, stringifyArgs) {
    var _this = this;

    this.inject = function (styleSheet) {
      if (!styleSheet.hasNameForId(_this.id, _this.name)) {
        styleSheet.insertRules(_this.id, _this.name, masterStylis.apply(void 0, _this.stringifyArgs));
      }
    };

    this.toString = function () {
      return throwStyledComponentsError(12, String(_this.name));
    };

    this.name = name;
    this.id = "sc-keyframes-" + name;
    this.stringifyArgs = stringifyArgs;
  }

  var _proto = Keyframes.prototype;

  _proto.getName = function getName() {
    return this.name;
  };

  return Keyframes;
}();

// 

/**
 * inlined version of
 * https://github.com/facebook/fbjs/blob/master/packages/fbjs/src/core/hyphenateStyleName.js
 */
var uppercasePattern = /([A-Z])/g;
var msPattern = /^ms-/;
/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */

function hyphenateStyleName(string) {
  return string.replace(uppercasePattern, '-$1').toLowerCase().replace(msPattern, '-ms-');
}

// 

function addUnitIfNeeded(name, value) {
  // https://github.com/amilajack/eslint-plugin-flowtype-errors/issues/133
  // $FlowFixMe
  if (value == null || typeof value === 'boolean' || value === '') {
    return '';
  }

  if (typeof value === 'number' && value !== 0 && !(name in _emotion_unitless__WEBPACK_IMPORTED_MODULE_4__["default"])) {
    return value + "px"; // Presumes implicit 'px' suffix for unitless numbers
  }

  return String(value).trim();
}

// 
/**
 * It's falsish not falsy because 0 is allowed.
 */

var isFalsish = function isFalsish(chunk) {
  return chunk === undefined || chunk === null || chunk === false || chunk === '';
};

var objToCssArray = function objToCssArray(obj, prevKey) {
  var rules = [];
  var keys = Object.keys(obj);
  keys.forEach(function (key) {
    if (!isFalsish(obj[key])) {
      if (isPlainObject(obj[key])) {
        rules.push.apply(rules, objToCssArray(obj[key], key));
        return rules;
      } else if (isFunction(obj[key])) {
        rules.push(hyphenateStyleName(key) + ":", obj[key], ';');
        return rules;
      }

      rules.push(hyphenateStyleName(key) + ": " + addUnitIfNeeded(key, obj[key]) + ";");
    }

    return rules;
  });
  return prevKey ? [prevKey + " {"].concat(rules, ['}']) : rules;
};
function flatten(chunk, executionContext, styleSheet) {
  if (Array.isArray(chunk)) {
    var ruleSet = [];

    for (var i = 0, len = chunk.length, result; i < len; i += 1) {
      result = flatten(chunk[i], executionContext, styleSheet);
      if (result === '') continue;else if (Array.isArray(result)) ruleSet.push.apply(ruleSet, result);else ruleSet.push(result);
    }

    return ruleSet;
  }

  if (isFalsish(chunk)) {
    return '';
  }
  /* Handle other components */


  if (isStyledComponent(chunk)) {
    return "." + chunk.styledComponentId;
  }
  /* Either execute or defer the function */


  if (isFunction(chunk)) {
    if (isStatelessFunction(chunk) && executionContext) {
      var _result = chunk(executionContext);

      if (false) {}

      return flatten(_result, executionContext, styleSheet);
    } else return chunk;
  }

  if (chunk instanceof Keyframes) {
    if (styleSheet) {
      chunk.inject(styleSheet);
      return chunk.getName();
    } else return chunk;
  }
  /* Handle objects */


  return isPlainObject(chunk) ? objToCssArray(chunk) : chunk.toString();
}

// 
function css(styles) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  if (isFunction(styles) || isPlainObject(styles)) {
    // $FlowFixMe
    return flatten(interleave(EMPTY_ARRAY, [styles].concat(interpolations)));
  }

  if (interpolations.length === 0 && styles.length === 1 && typeof styles[0] === "string") {
    // $FlowFixMe
    return styles;
  } // $FlowFixMe


  return flatten(interleave(styles, interpolations));
}

function constructWithOptions(componentConstructor, tag, options) {
  if (options === void 0) {
    options = EMPTY_OBJECT;
  }

  if (!Object(react_is__WEBPACK_IMPORTED_MODULE_0__["isValidElementType"])(tag)) {
    return throwStyledComponentsError(1, String(tag));
  }
  /* This is callable directly as a template function */
  // $FlowFixMe: Not typed to avoid destructuring arguments


  var templateFunction = function templateFunction() {
    return componentConstructor(tag, options, css.apply(void 0, arguments));
  };
  /* If config methods are called, wrap up a new template function and merge options */


  templateFunction.withConfig = function (config) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {}, config));
  };
  /* Modify/inject new props at runtime */


  templateFunction.attrs = function (attrs) {
    return constructWithOptions(componentConstructor, tag, _extends({}, options, {
      attrs: Array.prototype.concat(options.attrs, attrs).filter(Boolean)
    }));
  };

  return templateFunction;
}

/* eslint-disable */

/**
  mixin-deep; https://github.com/jonschlinkert/mixin-deep
  Inlined such that it will be consistently transpiled to an IE-compatible syntax.

  The MIT License (MIT)

  Copyright (c) 2014-present, Jon Schlinkert.

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var isObject = function isObject(val) {
  return typeof val === 'function' || typeof val === 'object' && val !== null && !Array.isArray(val);
};

var isValidKey = function isValidKey(key) {
  return key !== '__proto__' && key !== 'constructor' && key !== 'prototype';
};

function mixin(target, val, key) {
  var obj = target[key];

  if (isObject(val) && isObject(obj)) {
    mixinDeep(obj, val);
  } else {
    target[key] = val;
  }
}

function mixinDeep(target) {
  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    rest[_key - 1] = arguments[_key];
  }

  for (var _i = 0, _rest = rest; _i < _rest.length; _i++) {
    var obj = _rest[_i];

    if (isObject(obj)) {
      for (var key in obj) {
        if (isValidKey(key)) {
          mixin(target, obj[key], key);
        }
      }
    }
  }

  return target;
}

// 

/* eslint-disable no-bitwise */
var AD_REPLACER_R = /(a)(d)/gi;
/* This is the "capacity" of our alphabet i.e. 2x26 for all letters plus their capitalised
 * counterparts */

var charsLength = 52;
/* start at 75 for 'a' until 'z' (25) and then start at 65 for capitalised letters */

var getAlphabeticChar = function getAlphabeticChar(code) {
  return String.fromCharCode(code + (code > 25 ? 39 : 97));
};
/* input a number, usually a hash and convert it to base-52 */


function generateAlphabeticName(code) {
  var name = '';
  var x;
  /* get a char and divide by alphabet-length */

  for (x = Math.abs(code); x > charsLength; x = x / charsLength | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(AD_REPLACER_R, '$1-$2');
}

// 
function isStaticRules(rules) {
  for (var i = 0; i < rules.length; i += 1) {
    var rule = rules[i];

    if (isFunction(rule) && !isStyledComponent(rule)) {
      // functions are allowed to be static if they're just being
      // used to get the classname of a nested styled component
      return false;
    }
  }

  return true;
}

// 
/*
 ComponentStyle is all the CSS-specific stuff, not
 the React-specific stuff.
 */

var ComponentStyle = /*#__PURE__*/function () {
  function ComponentStyle(rules, componentId) {
    this.rules = rules;
    this.staticRulesId = '';
    this.isStatic =  true && isStaticRules(rules);
    this.componentId = componentId;
    this.baseHash = hash(componentId); // NOTE: This registers the componentId, which ensures a consistent order
    // for this component's styles compared to others

    StyleSheet.registerId(componentId);
  }
  /*
   * Flattens a rule set into valid CSS
   * Hashes it, wraps the whole chunk in a .hash1234 {}
   * Returns the hash to be injected on render()
   * */


  var _proto = ComponentStyle.prototype;

  _proto.generateAndInjectStyles = function generateAndInjectStyles(executionContext, styleSheet, stylis) {
    var componentId = this.componentId; // force dynamic classnames if user-supplied stylis plugins are in use

    if (this.isStatic && !stylis.hash) {
      if (this.staticRulesId && styleSheet.hasNameForId(componentId, this.staticRulesId)) {
        return this.staticRulesId;
      }

      var cssStatic = flatten(this.rules, executionContext, styleSheet).join('');
      var name = generateAlphabeticName(phash(this.baseHash, cssStatic.length) >>> 0);

      if (!styleSheet.hasNameForId(componentId, name)) {
        var cssStaticFormatted = stylis(cssStatic, "." + name, undefined, componentId);
        styleSheet.insertRules(componentId, name, cssStaticFormatted);
      }

      this.staticRulesId = name;
      return name;
    } else {
      var length = this.rules.length;
      var dynamicHash = phash(this.baseHash, stylis.hash);
      var css = '';

      for (var i = 0; i < length; i++) {
        var partRule = this.rules[i];

        if (typeof partRule === 'string') {
          css += partRule;
          if (false) {}
        } else {
          var partChunk = flatten(partRule, executionContext, styleSheet);
          var partString = Array.isArray(partChunk) ? partChunk.join('') : partChunk;
          dynamicHash = phash(dynamicHash, partString + i);
          css += partString;
        }
      }

      var _name = generateAlphabeticName(dynamicHash >>> 0);

      if (!styleSheet.hasNameForId(componentId, _name)) {
        var cssFormatted = stylis(css, "." + _name, undefined, componentId);
        styleSheet.insertRules(componentId, _name, cssFormatted);
      }

      return _name;
    }
  };

  return ComponentStyle;
}();

// 
var LIMIT = 200;
var createWarnTooManyClasses = (function (displayName, componentId) {
  var generatedClasses = {};
  var warningSeen = false;
  return function (className) {
    if (!warningSeen) {
      generatedClasses[className] = true;

      if (Object.keys(generatedClasses).length >= LIMIT) {
        // Unable to find latestRule in test environment.

        /* eslint-disable no-console, prefer-template */
        var parsedIdString = componentId ? " with the id of \"" + componentId + "\"" : '';
        console.warn("Over " + LIMIT + " classes were generated for component " + displayName + parsedIdString + ".\n" + 'Consider using the attrs method, together with a style object for frequently changed styles.\n' + 'Example:\n' + '  const Component = styled.div.attrs(props => ({\n' + '    style: {\n' + '      background: props.background,\n' + '    },\n' + '  }))`width: 100%;`\n\n' + '  <Component />');
        warningSeen = true;
        generatedClasses = {};
      }
    }
  };
});

// 
var invalidHookCallRe = /invalid hook call/i;
var seen = new Set();
var checkDynamicCreation = function checkDynamicCreation(displayName, componentId) {
  if (false) { var message, parsedIdString; }
};

// 
var determineTheme = (function (props, providedTheme, defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = EMPTY_OBJECT;
  }

  return props.theme !== defaultProps.theme && props.theme || providedTheme || defaultProps.theme;
});

// 
// Source: https://www.w3.org/TR/cssom-1/#serialize-an-identifier
// Control characters and non-letter first symbols are not supported
var escapeRegex = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g;
var dashesAtEnds = /(^-|-$)/g;
/**
 * TODO: Explore using CSS.escape when it becomes more available
 * in evergreen browsers.
 */

function escape(str) {
  return str // Replace all possible CSS selectors
  .replace(escapeRegex, '-') // Remove extraneous hyphens at the start and end
  .replace(dashesAtEnds, '');
}

// 
function isTag(target) {
  return typeof target === 'string' && ( false ? undefined : true);
}

// 
function generateDisplayName(target) {
  // $FlowFixMe
  return isTag(target) ? "styled." + target : "Styled(" + getComponentName(target) + ")";
}

// 
var generateComponentId = (function (str) {
  return generateAlphabeticName(hash(str) >>> 0);
});

/**
 * Convenience function for joining strings to form className chains
 */
function joinStrings(a, b) {
  return a && b ? a + " " + b : a || b;
}

var ThemeContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();
var ThemeConsumer = ThemeContext.Consumer;

function mergeTheme(theme, outerTheme) {
  if (!theme) {
    return throwStyledComponentsError(14);
  }

  if (isFunction(theme)) {
    var mergedTheme = theme(outerTheme);

    if (false) {}

    return mergedTheme;
  }

  if (Array.isArray(theme) || typeof theme !== 'object') {
    return throwStyledComponentsError(8);
  }

  return outerTheme ? _extends({}, outerTheme, {}, theme) : theme;
}
/**
 * Provide a theme to an entire react component tree via context
 */


function ThemeProvider(props) {
  var outerTheme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
  var themeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(function () {
    return mergeTheme(props.theme, outerTheme);
  }, [props.theme, outerTheme]);

  if (!props.children) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ThemeContext.Provider, {
    value: themeContext
  }, props.children);
}

/* global $Call */

var identifiers = {};
/* We depend on components having unique IDs */

function generateId(displayName, parentComponentId) {
  var name = typeof displayName !== 'string' ? 'sc' : escape(displayName); // Ensure that no displayName can lead to duplicate componentIds

  identifiers[name] = (identifiers[name] || 0) + 1;
  var componentId = name + "-" + generateComponentId(name + identifiers[name]);
  return parentComponentId ? parentComponentId + "-" + componentId : componentId;
}

function useResolvedAttrs(theme, props, attrs) {
  if (theme === void 0) {
    theme = EMPTY_OBJECT;
  }

  // NOTE: can't memoize this
  // returns [context, resolvedAttrs]
  // where resolvedAttrs is only the things injected by the attrs themselves
  var context = _extends({}, props, {
    theme: theme
  });

  var resolvedAttrs = {};
  attrs.forEach(function (attrDef) {
    var resolvedAttrDef = attrDef;
    var key;

    if (isFunction(resolvedAttrDef)) {
      resolvedAttrDef = resolvedAttrDef(context);
    }
    /* eslint-disable guard-for-in */


    for (key in resolvedAttrDef) {
      context[key] = resolvedAttrs[key] = key === 'className' ? joinStrings(resolvedAttrs[key], resolvedAttrDef[key]) : resolvedAttrDef[key];
    }
    /* eslint-enable guard-for-in */

  });
  return [context, resolvedAttrs];
}

function useInjectedStyle(componentStyle, hasAttrs, resolvedAttrs, warnTooManyClasses) {
  var styleSheet = useStyleSheet();
  var stylis = useStylis(); // statically styled-components don't need to build an execution context object,
  // and shouldn't be increasing the number of class names

  var isStatic = componentStyle.isStatic && !hasAttrs;
  var className = isStatic ? componentStyle.generateAndInjectStyles(EMPTY_OBJECT, styleSheet, stylis) : componentStyle.generateAndInjectStyles(resolvedAttrs, styleSheet, stylis);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(className);

  if (false) {}

  return className;
}

function useStyledComponentImpl(forwardedComponent, props, forwardedRef) {
  var componentAttrs = forwardedComponent.attrs,
      componentStyle = forwardedComponent.componentStyle,
      defaultProps = forwardedComponent.defaultProps,
      foldedComponentIds = forwardedComponent.foldedComponentIds,
      shouldForwardProp = forwardedComponent.shouldForwardProp,
      styledComponentId = forwardedComponent.styledComponentId,
      target = forwardedComponent.target;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useDebugValue"])(styledComponentId); // NOTE: the non-hooks version only subscribes to this when !componentStyle.isStatic,
  // but that'd be against the rules-of-hooks. We could be naughty and do it anyway as it
  // should be an immutable value, but behave for now.

  var theme = determineTheme(props, Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext), defaultProps);

  var _useResolvedAttrs = useResolvedAttrs(theme || EMPTY_OBJECT, props, componentAttrs),
      context = _useResolvedAttrs[0],
      attrs = _useResolvedAttrs[1];

  var generatedClassName = useInjectedStyle(componentStyle, componentAttrs.length > 0, context,  false ? undefined : undefined);
  var refToForward = forwardedRef;
  var elementToBeCreated = attrs.$as || props.$as || attrs.as || props.as || target;
  var isTargetTag = isTag(elementToBeCreated);
  var computedProps = attrs !== props ? _extends({}, props, {}, attrs) : props;
  var propFilterFn = shouldForwardProp || isTargetTag && _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"];
  var propsForElement = {}; // eslint-disable-next-line guard-for-in

  for (var key in computedProps) {
    if (key[0] === '$' || key === 'as') continue;else if (key === 'forwardedAs') {
      propsForElement.as = computedProps[key];
    } else if (!propFilterFn || propFilterFn(key, _emotion_is_prop_valid__WEBPACK_IMPORTED_MODULE_5__["default"])) {
      // Don't pass through non HTML tags through to HTML elements
      propsForElement[key] = computedProps[key];
    }
  }

  if (props.style && attrs.style !== props.style) {
    propsForElement.style = _extends({}, props.style, {}, attrs.style);
  }

  propsForElement.className = Array.prototype.concat(foldedComponentIds, styledComponentId, generatedClassName !== styledComponentId ? generatedClassName : null, props.className, attrs.className).filter(Boolean).join(' ');
  propsForElement.ref = refToForward;
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["createElement"])(elementToBeCreated, propsForElement);
}

function createStyledComponent(target, options, rules) {
  var isTargetStyledComp = isStyledComponent(target);
  var isCompositeComponent = !isTag(target);
  var _options$displayName = options.displayName,
      displayName = _options$displayName === void 0 ? generateDisplayName(target) : _options$displayName,
      _options$componentId = options.componentId,
      componentId = _options$componentId === void 0 ? generateId(options.displayName, options.parentComponentId) : _options$componentId,
      _options$attrs = options.attrs,
      attrs = _options$attrs === void 0 ? EMPTY_ARRAY : _options$attrs;
  var styledComponentId = options.displayName && options.componentId ? escape(options.displayName) + "-" + options.componentId : options.componentId || componentId; // fold the underlying StyledComponent attrs up (implicit extend)

  var finalAttrs = // $FlowFixMe
  isTargetStyledComp && target.attrs ? Array.prototype.concat(target.attrs, attrs).filter(Boolean) : attrs; // eslint-disable-next-line prefer-destructuring

  var shouldForwardProp = options.shouldForwardProp; // $FlowFixMe

  if (isTargetStyledComp && target.shouldForwardProp) {
    if (shouldForwardProp) {
      // compose nested shouldForwardProp calls
      shouldForwardProp = function shouldForwardProp(prop, filterFn) {
        return (// $FlowFixMe
          target.shouldForwardProp(prop, filterFn) && options.shouldForwardProp(prop, filterFn)
        );
      };
    } else {
      // eslint-disable-next-line prefer-destructuring
      shouldForwardProp = target.shouldForwardProp;
    }
  }

  var componentStyle = new ComponentStyle(isTargetStyledComp ? // fold the underlying StyledComponent rules up (implicit extend)
  // $FlowFixMe
  target.componentStyle.rules.concat(rules) : rules, styledComponentId);
  /**
   * forwardRef creates a new interim component, which we'll take advantage of
   * instead of extending ParentComponent to create _another_ interim class
   */

  var WrappedStyledComponent; // eslint-disable-next-line react-hooks/rules-of-hooks

  var forwardRef = function forwardRef(props, ref) {
    return useStyledComponentImpl(WrappedStyledComponent, props, ref);
  };

  forwardRef.displayName = displayName; // $FlowFixMe this is a forced cast to merge it StyledComponentWrapperProperties

  WrappedStyledComponent = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(forwardRef);
  WrappedStyledComponent.attrs = finalAttrs;
  WrappedStyledComponent.componentStyle = componentStyle;
  WrappedStyledComponent.displayName = displayName;
  WrappedStyledComponent.shouldForwardProp = shouldForwardProp; // this static is used to preserve the cascade of static classes for component selector
  // purposes; this is especially important with usage of the css prop

  WrappedStyledComponent.foldedComponentIds = isTargetStyledComp ? // $FlowFixMe
  Array.prototype.concat(target.foldedComponentIds, target.styledComponentId) : EMPTY_ARRAY;
  WrappedStyledComponent.styledComponentId = styledComponentId; // fold the underlying StyledComponent target up since we folded the styles

  WrappedStyledComponent.target = isTargetStyledComp ? // $FlowFixMe
  target.target : target; // $FlowFixMe

  WrappedStyledComponent.withComponent = function withComponent(tag) {
    var previousComponentId = options.componentId,
        optionsToCopy = _objectWithoutPropertiesLoose(options, ["componentId"]);

    var newComponentId = previousComponentId && previousComponentId + "-" + (isTag(tag) ? tag : escape(getComponentName(tag)));

    var newOptions = _extends({}, optionsToCopy, {
      attrs: finalAttrs,
      componentId: newComponentId
    });

    return createStyledComponent(tag, newOptions, rules);
  }; // $FlowFixMe


  Object.defineProperty(WrappedStyledComponent, 'defaultProps', {
    get: function get() {
      return this._foldedDefaultProps;
    },
    set: function set(obj) {
      // $FlowFixMe
      this._foldedDefaultProps = isTargetStyledComp ? mixinDeep({}, target.defaultProps, obj) : obj;
    }
  });

  if (false) {} // $FlowFixMe


  WrappedStyledComponent.toString = function () {
    return "." + WrappedStyledComponent.styledComponentId;
  };

  if (isCompositeComponent) {
    hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WrappedStyledComponent, target, {
      // all SC-specific things should not be hoisted
      attrs: true,
      componentStyle: true,
      displayName: true,
      foldedComponentIds: true,
      shouldForwardProp: true,
      self: true,
      styledComponentId: true,
      target: true,
      withComponent: true
    });
  }

  return WrappedStyledComponent;
}

// 
// Thanks to ReactDOMFactories for this handy list!
var domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];

// 

var styled = function styled(tag) {
  return constructWithOptions(createStyledComponent, tag);
}; // Shorthands for all valid HTML Elements


domElements.forEach(function (domElement) {
  styled[domElement] = styled(domElement);
});

// 

var GlobalStyle = /*#__PURE__*/function () {
  function GlobalStyle(rules, componentId) {
    this.rules = rules;
    this.componentId = componentId;
    this.isStatic = isStaticRules(rules);
  }

  var _proto = GlobalStyle.prototype;

  _proto.createStyles = function createStyles(instance, executionContext, styleSheet, stylis) {
    var flatCSS = flatten(this.rules, executionContext, styleSheet);
    var css = stylis(flatCSS.join(''), '');
    var id = this.componentId + instance; // NOTE: We use the id as a name as well, since these rules never change

    styleSheet.insertRules(id, id, css);
  };

  _proto.removeStyles = function removeStyles(instance, styleSheet) {
    styleSheet.clearRules(this.componentId + instance);
  };

  _proto.renderStyles = function renderStyles(instance, executionContext, styleSheet, stylis) {
    StyleSheet.registerId(this.componentId + instance); // NOTE: Remove old styles, then inject the new ones

    this.removeStyles(instance, styleSheet);
    this.createStyles(instance, executionContext, styleSheet, stylis);
  };

  return GlobalStyle;
}();

function createGlobalStyle(strings) {
  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations));
  var styledComponentId = "sc-global-" + generateComponentId(JSON.stringify(rules));
  var globalStyle = new GlobalStyle(rules, styledComponentId);

  if (false) {}

  function GlobalStyleComponent(props) {
    var styleSheet = useStyleSheet();
    var stylis = useStylis();
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
    var instanceRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

    if (instanceRef.current === null) {
      instanceRef.current = styleSheet.allocateGSInstance(styledComponentId);
    }

    var instance = instanceRef.current;

    if (false) {}

    if (false) {}

    if (globalStyle.isStatic) {
      globalStyle.renderStyles(instance, STATIC_EXECUTION_CONTEXT, styleSheet, stylis);
    } else {
      var context = _extends({}, props, {
        theme: determineTheme(props, theme, GlobalStyleComponent.defaultProps)
      });

      globalStyle.renderStyles(instance, context, styleSheet, stylis);
    }

    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      return function () {
        return globalStyle.removeStyles(instance, styleSheet);
      };
    }, EMPTY_ARRAY);
    return null;
  } // $FlowFixMe


  return react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(GlobalStyleComponent);
}

// 
function keyframes(strings) {
  /* Warning if you've used keyframes on React Native */
  if (false) {}

  for (var _len = arguments.length, interpolations = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    interpolations[_key - 1] = arguments[_key];
  }

  var rules = css.apply(void 0, [strings].concat(interpolations)).join('');
  var name = generateComponentId(rules);
  return new Keyframes(name, [rules, name, '@keyframes']);
}

var CLOSING_TAG_R = /^\s*<\/[a-z]/i;

var ServerStyleSheet = /*#__PURE__*/function () {
  function ServerStyleSheet() {
    var _this = this;

    this._emitSheetCSS = function () {
      var css = _this.instance.toString();

      var nonce = getNonce();
      var attrs = [nonce && "nonce=\"" + nonce + "\"", SC_ATTR + "=\"true\"", SC_ATTR_VERSION + "=\"" + SC_VERSION + "\""];
      var htmlAttr = attrs.filter(Boolean).join(' ');
      return "<style " + htmlAttr + ">" + css + "</style>";
    };

    this.getStyleTags = function () {
      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      return _this._emitSheetCSS();
    };

    this.getStyleElement = function () {
      var _props;

      if (_this.sealed) {
        return throwStyledComponentsError(2);
      }

      var props = (_props = {}, _props[SC_ATTR] = '', _props[SC_ATTR_VERSION] = SC_VERSION, _props.dangerouslySetInnerHTML = {
        __html: _this.instance.toString()
      }, _props);
      var nonce = getNonce();

      if (nonce) {
        props.nonce = nonce;
      } // v4 returned an array for this fn, so we'll do the same for v5 for backward compat


      return [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", _extends({}, props, {
        key: "sc-0-0"
      }))];
    };

    this.seal = function () {
      _this.sealed = true;
    };

    this.instance = new StyleSheet({
      isServer: true
    });
    this.sealed = false;
  }

  var _proto = ServerStyleSheet.prototype;

  _proto.collectStyles = function collectStyles(children) {
    if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyleSheetManager, {
      sheet: this.instance
    }, children);
  };

  // eslint-disable-next-line consistent-return
  _proto.interleaveWithNodeStream = function interleaveWithNodeStream(input) {
    if ( IS_BROWSER) {
      return throwStyledComponentsError(3);
    } else if (this.sealed) {
      return throwStyledComponentsError(2);
    }

    {
      this.seal(); // eslint-disable-next-line global-require

      var _require = __webpack_require__(/*! stream */ "stream"),
          Readable = _require.Readable,
          Transform = _require.Transform;

      var readableStream = input;
      var sheet = this.instance,
          _emitSheetCSS = this._emitSheetCSS;
      var transformer = new Transform({
        transform: function appendStyleChunks(chunk,
        /* encoding */
        _, callback) {
          // Get the chunk and retrieve the sheet's CSS as an HTML chunk,
          // then reset its rules so we get only new ones for the next chunk
          var renderedHtml = chunk.toString();

          var html = _emitSheetCSS();

          sheet.clearTag(); // prepend style html to chunk, unless the start of the chunk is a
          // closing tag in which case append right after that

          if (CLOSING_TAG_R.test(renderedHtml)) {
            var endOfClosingTag = renderedHtml.indexOf('>') + 1;
            var before = renderedHtml.slice(0, endOfClosingTag);
            var after = renderedHtml.slice(endOfClosingTag);
            this.push(before + html + after);
          } else {
            this.push(html + renderedHtml);
          }

          callback();
        }
      });
      readableStream.on('error', function (err) {
        // forward the error to the transform stream
        transformer.emit('error', err);
      });
      return readableStream.pipe(transformer);
    }
  };

  return ServerStyleSheet;
}();

// export default <Config: { theme?: any }, Instance>(
//  Component: AbstractComponent<Config, Instance>
// ): AbstractComponent<$Diff<Config, { theme?: any }> & { theme?: any }, Instance>
//
// but the old build system tooling doesn't support the syntax

var withTheme = (function (Component) {
  // $FlowFixMe This should be React.forwardRef<Config, Instance>
  var WithTheme = react__WEBPACK_IMPORTED_MODULE_1___default.a.forwardRef(function (props, ref) {
    var theme = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext); // $FlowFixMe defaultProps isn't declared so it can be inferrable

    var defaultProps = Component.defaultProps;
    var themeProp = determineTheme(props, theme, defaultProps);

    if (false) {}

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, _extends({}, props, {
      theme: themeProp,
      ref: ref
    }));
  });
  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_6___default()(WithTheme, Component);
  WithTheme.displayName = "WithTheme(" + getComponentName(Component) + ")";
  return WithTheme;
});

// 

var useTheme = function useTheme() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(ThemeContext);
};

// 
var __PRIVATE__ = {
  StyleSheet: StyleSheet,
  masterSheet: masterSheet
};

// 
/* Define bundle version for export */

var version = "5.1.1";
/* Warning if you've imported this file on React Native */

if (false) {}
/* Warning if there are several instances of styled-components */


if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (styled);

//# sourceMappingURL=styled-components.esm.js.map


/***/ }),

/***/ "./node_modules/tween-functions/index.js":
/*!***********************************************!*\
  !*** ./node_modules/tween-functions/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// t: current time, b: beginning value, _c: final value, d: total duration
var tweenFunctions = {
  linear: function(t, b, _c, d) {
    var c = _c - b;
    return c * t / d + b;
  },
  easeInQuad: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t + b;
  },
  easeOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (t /= d) * (t - 2) + b;
  },
  easeInOutQuad: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t + b;
    } else {
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    }
  },
  easeInCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t + b;
  },
  easeOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t + 1) + b;
  },
  easeInOutCubic: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  },
  easeInQuart: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t + b;
  },
  easeOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    return -c * ((t = t / d - 1) * t * t * t - 1) + b;
  },
  easeInOutQuart: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t + b;
    } else {
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    }
  },
  easeInQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * (t /= d) * t * t * t * t + b;
  },
  easeOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
  },
  easeInOutQuint: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return c / 2 * t * t * t * t * t + b;
    } else {
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    }
  },
  easeInSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
  },
  easeOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sin(t / d * (Math.PI / 2)) + b;
  },
  easeInOutSine: function(t, b, _c, d) {
    var c = _c - b;
    return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
  },
  easeInExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
  },
  easeOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
  },
  easeInOutExpo: function(t, b, _c, d) {
    var c = _c - b;
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    } else {
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
  },
  easeInCirc: function(t, b, _c, d) {
    var c = _c - b;
    return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
  },
  easeOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
  },
  easeInOutCirc: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d / 2) < 1) {
      return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
    } else {
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    }
  },
  easeInElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
  },
  easeOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d) === 1) {
      return b + c;
    }
    if (!p) {
      p = d * 0.3;
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
  },
  easeInOutElastic: function(t, b, _c, d) {
    var c = _c - b;
    var a, p, s;
    s = 1.70158;
    p = 0;
    a = c;
    if (t === 0) {
      return b;
    } else if ((t /= d / 2) === 2) {
      return b + c;
    }
    if (!p) {
      p = d * (0.3 * 1.5);
    }
    if (a < Math.abs(c)) {
      a = c;
      s = p / 4;
    } else {
      s = p / (2 * Math.PI) * Math.asin(c / a);
    }
    if (t < 1) {
      return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    } else {
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b;
    }
  },
  easeInBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * (t /= d) * t * ((s + 1) * t - s) + b;
  },
  easeOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
  },
  easeInOutBack: function(t, b, _c, d, s) {
    var c = _c - b;
    if (s === void 0) {
      s = 1.70158;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + b;
    } else {
      return c / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + b;
    }
  },
  easeInBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    v = tweenFunctions.easeOutBounce(d - t, 0, c, d);
    return c - v + b;
  },
  easeOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    if ((t /= d) < 1 / 2.75) {
      return c * (7.5625 * t * t) + b;
    } else if (t < 2 / 2.75) {
      return c * (7.5625 * (t -= 1.5 / 2.75) * t + 0.75) + b;
    } else if (t < 2.5 / 2.75) {
      return c * (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375) + b;
    } else {
      return c * (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375) + b;
    }
  },
  easeInOutBounce: function(t, b, _c, d) {
    var c = _c - b;
    var v;
    if (t < d / 2) {
      v = tweenFunctions.easeInBounce(t * 2, 0, c, d);
      return v * 0.5 + b;
    } else {
      v = tweenFunctions.easeOutBounce(t * 2 - d, 0, c, d);
      return v * 0.5 + c * 0.5 + b;
    }
  }
};

module.exports = tweenFunctions;


/***/ }),

/***/ "./public/page-data/sq/d/949210366.json":
/*!**********************************************!*\
  !*** ./public/page-data/sq/d/949210366.json ***!
  \**********************************************/
/*! exports provided: data, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"data\":{\"Test\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIFAQT/xAAVAQEBAAAAAAAAAAAAAAAAAAACA//aAAwDAQACEAMQAAABpovPN0TBH//EABkQAAMBAQEAAAAAAAAAAAAAAAECAwAEEv/aAAgBAQABBQKhIEmLLuhvMuepoo3/xAAVEQEBAAAAAAAAAAAAAAAAAAAQQf/aAAgBAwEBPwGH/8QAFREBAQAAAAAAAAAAAAAAAAAAEEH/2gAIAQIBAT8Bp//EABkQAAEFAAAAAAAAAAAAAAAAABAAAREhIv/aAAgBAQAGPwKlovI//8QAGRABAQEBAQEAAAAAAAAAAAAAAQARMSFB/9oACAEBAAE/ITOsX7NHrYlZCac+XF//2gAMAwEAAgADAAAAEMz/AP/EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/EIP/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPxCj/8QAHBABAAIDAAMAAAAAAAAAAAAAAQARMUFRIXHB/9oACAEBAAE/EDYkNLHqY6iBqrCYQRivdb+Q5LVquMXhP//Z\",\"aspectRatio\":1.5,\"src\":\"/static/d16d00e02ce9c408ba2515d024095d3c/e2fb1/test.jpg\",\"srcSet\":\"/static/d16d00e02ce9c408ba2515d024095d3c/b1920/test.jpg 363w,\\n/static/d16d00e02ce9c408ba2515d024095d3c/b17db/test.jpg 725w,\\n/static/d16d00e02ce9c408ba2515d024095d3c/e2fb1/test.jpg 1450w,\\n/static/d16d00e02ce9c408ba2515d024095d3c/69755/test.jpg 2048w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"ResearchPlan\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFgEBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAHcVhQv/8QAFhAAAwAAAAAAAAAAAAAAAAAAARAg/9oACAEBAAEFAoC//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFBABAAAAAAAAAAAAAAAAAAAAIP/aAAgBAQAGPwJf/8QAGhAAAwADAQAAAAAAAAAAAAAAAAEhEBFh0f/aAAgBAQABPyFt03V6Lg1GJLcf/9oADAMBAAIAAwAAABAM7//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESExEEFRYZH/2gAIAQEAAT8QAa4cZdfJ6FJflEJasmsUXsmFaxpeP//Z\",\"aspectRatio\":1.5,\"src\":\"/static/5d930dba626c8c00462ababf4d4d2812/e2fb1/researchPlan.jpg\",\"srcSet\":\"/static/5d930dba626c8c00462ababf4d4d2812/b1920/researchPlan.jpg 363w,\\n/static/5d930dba626c8c00462ababf4d4d2812/b17db/researchPlan.jpg 725w,\\n/static/5d930dba626c8c00462ababf4d4d2812/e2fb1/researchPlan.jpg 1450w,\\n/static/5d930dba626c8c00462ababf4d4d2812/8df61/researchPlan.jpg 2175w,\\n/static/5d930dba626c8c00462ababf4d4d2812/5e496/researchPlan.jpg 2900w,\\n/static/5d930dba626c8c00462ababf4d4d2812/26f50/researchPlan.jpg 5688w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"Surveying\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUE/8QAFQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAbbJPluCX//EABoQAAICAwAAAAAAAAAAAAAAAAABAgQQERL/2gAIAQEAAQUCYliwtkJvo//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABURAQEAAAAAAAAAAAAAAAAAAAEQ/9oACAECAQE/ASf/xAAaEAACAgMAAAAAAAAAAAAAAAABEAARITFR/9oACAEBAAY/AmKNQZOur//EABgQAAMBAQAAAAAAAAAAAAAAAAERIQAQ/9oACAEBAAE/IQerwgOozMTEfD//2gAMAwEAAgADAAAAEL/v/8QAFxEBAAMAAAAAAAAAAAAAAAAAARARIf/aAAgBAwEBPxBMsj//xAAWEQADAAAAAAAAAAAAAAAAAAABEEH/2gAIAQIBAT8QKL//xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhEDFBUf/aAAgBAQABPxBSQWYgFGD7xSzWwx16HeSObXZLY6fuPef/2Q==\",\"aspectRatio\":1.5,\"src\":\"/static/7576b870dcfc1461d4f29465cbcd7b29/e2fb1/surveying.jpg\",\"srcSet\":\"/static/7576b870dcfc1461d4f29465cbcd7b29/b1920/surveying.jpg 363w,\\n/static/7576b870dcfc1461d4f29465cbcd7b29/b17db/surveying.jpg 725w,\\n/static/7576b870dcfc1461d4f29465cbcd7b29/e2fb1/surveying.jpg 1450w,\\n/static/7576b870dcfc1461d4f29465cbcd7b29/8df61/surveying.jpg 2175w,\\n/static/7576b870dcfc1461d4f29465cbcd7b29/7447d/surveying.jpg 2261w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"TestMockup\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAABQABBP/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/9oADAMBAAIQAxAAAAEnqxwS5il//8QAGxAAAgMAAwAAAAAAAAAAAAAAAQIAAwQQERT/2gAIAQEAAQUC7i5WYeQzPWDa1atx/8QAFhEBAQEAAAAAAAAAAAAAAAAAABEB/9oACAEDAQE/AZqP/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8Bqv/EABoQAQACAwEAAAAAAAAAAAAAAAEAEAISIcH/2gAIAQEABj8CmygNYj0SeV//xAAbEAADAQADAQAAAAAAAAAAAAAAAREhMVGBYf/aAAgBAQABPyHar9QqdhBI536maag4RLYvBJiP/9oADAMBAAIAAwAAABBgH//EABcRAAMBAAAAAAAAAAAAAAAAAAABESH/2gAIAQMBAT8QpqIP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAERIf/aAAgBAgEBPxCFhR//xAAbEAEAAwEBAQEAAAAAAAAAAAABABEhMbFxgf/aAAgBAQABPxDL3VoelZ8JV/xFW08cl8PvBhX7AddLVSekU7vLeYAgYT//2Q==\",\"aspectRatio\":1.5,\"src\":\"/static/d15e55d43c30579566b13f9a09d463e6/e2fb1/testMockup.jpg\",\"srcSet\":\"/static/d15e55d43c30579566b13f9a09d463e6/b1920/testMockup.jpg 363w,\\n/static/d15e55d43c30579566b13f9a09d463e6/b17db/testMockup.jpg 725w,\\n/static/d15e55d43c30579566b13f9a09d463e6/e2fb1/testMockup.jpg 1450w,\\n/static/d15e55d43c30579566b13f9a09d463e6/8df61/testMockup.jpg 2175w,\\n/static/d15e55d43c30579566b13f9a09d463e6/89cb4/testMockup.jpg 2802w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"TestHai\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAwAB/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAW0nm3hkP//EABoQAAIDAQEAAAAAAAAAAAAAAAECAxESACH/2gAIAQEAAQUCEhCpBl/erDs5UC6//8QAFhEAAwAAAAAAAAAAAAAAAAAAARBR/9oACAEDAQE/ATV//8QAFhEBAQEAAAAAAAAAAAAAAAAAIQEQ/9oACAECAQE/AYGf/8QAGhAAAgMBAQAAAAAAAAAAAAAAAAECEUExYf/aAAgBAQAGPwKTgrFKktOlLUNeGH//xAAbEAACAgMBAAAAAAAAAAAAAAAAAREhMUFxkf/aAAgBAQABPyFUhlFM9lDA3Okjg+xL1BkY3kPRpVo//9oADAMBAAIAAwAAABDsP//EABYRAQEBAAAAAAAAAAAAAAAAAAEAEf/aAAgBAwEBPxBaotv/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QCBWX/8QAHRABAQACAgMBAAAAAAAAAAAAAREAITFRQWFx4f/aAAgBAQABPxAuvykJvJhVVsqTYd7ecqeouAZ4H5qX7jFVyXIy8b7w42gBW6Puf//Z\",\"aspectRatio\":1.5,\"src\":\"/static/062b0a03898e6e807f02e29e2585cbb5/e2fb1/testHai.jpg\",\"srcSet\":\"/static/062b0a03898e6e807f02e29e2585cbb5/b1920/testHai.jpg 363w,\\n/static/062b0a03898e6e807f02e29e2585cbb5/b17db/testHai.jpg 725w,\\n/static/062b0a03898e6e807f02e29e2585cbb5/e2fb1/testHai.jpg 1450w,\\n/static/062b0a03898e6e807f02e29e2585cbb5/8df61/testHai.jpg 2175w,\\n/static/062b0a03898e6e807f02e29e2585cbb5/85047/testHai.jpg 2389w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"InterviewAgrid\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQAG/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwAB/9oADAMBAAIQAxAAAAE5M3TZCSkaf//EABoQAAIDAQEAAAAAAAAAAAAAAAADAQIEERL/2gAIAQEAAQUCSuWFEWLZK+s08eSf/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQMBAT8BJ//EABYRAQEBAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwGtv//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhIhEGFxgf/aAAgBAQAGPwIxI4jJo8VuITd1n//EABkQAQACAwAAAAAAAAAAAAAAAAEAESExQf/aAAgBAQABPyFahTrsM7U3jcQlR5iUWrtaDiJvc//aAAwDAQACAAMAAAAQaA//xAAXEQADAQAAAAAAAAAAAAAAAAAAARFB/9oACAEDAQE/EG0lP//EABgRAAMBAQAAAAAAAAAAAAAAAAABESFB/9oACAECAQE/EE4Qsh//xAAcEAEAAgMAAwAAAAAAAAAAAAABABEhUWExQaH/2gAIAQEAAT8QJj8dbfYzGuVcnTxuPJi7Cr7HpgzGkjYGD1yFdKf/2Q==\",\"aspectRatio\":1.5,\"src\":\"/static/5a788f64d2b91cfbfdfb5801e53376cd/e2fb1/interviewAgrid.jpg\",\"srcSet\":\"/static/5a788f64d2b91cfbfdfb5801e53376cd/b1920/interviewAgrid.jpg 363w,\\n/static/5a788f64d2b91cfbfdfb5801e53376cd/b17db/interviewAgrid.jpg 725w,\\n/static/5a788f64d2b91cfbfdfb5801e53376cd/e2fb1/interviewAgrid.jpg 1450w,\\n/static/5a788f64d2b91cfbfdfb5801e53376cd/8df61/interviewAgrid.jpg 2175w,\\n/static/5a788f64d2b91cfbfdfb5801e53376cd/5e496/interviewAgrid.jpg 2900w,\\n/static/5a788f64d2b91cfbfdfb5801e53376cd/d2452/interviewAgrid.jpg 4000w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"PrototypeProduct\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAEEA//EABYBAQEBAAAAAAAAAAAAAAAAAAMAAv/aAAwDAQACEAMQAAABe6lPdxCSf//EABoQAAICAwAAAAAAAAAAAAAAAAEDABICESP/2gAIAQEAAQUCfdIvzDdRjYGZA3M//8QAGBEAAgMAAAAAAAAAAAAAAAAAAAECAxP/2gAIAQMBAT8BVbMZH//EABcRAQADAAAAAAAAAAAAAAAAAAACERL/2gAIAQIBAT8BqLT/xAAdEAACAgEFAAAAAAAAAAAAAAAAAQIRITEycYGR/9oACAEBAAY/AovfyKcUZr0caRqYpdH/xAAdEAABBAIDAAAAAAAAAAAAAAABABEhQVFxYYGR/9oACAEBAAE/IS0ITQoHNHzSYNN0RJDblGh048QoPUE//9oADAMBAAIAAwAAABBr/wD/xAAWEQEBAQAAAAAAAAAAAAAAAAABAGH/2gAIAQMBAT8QUmxlf//EABcRAAMBAAAAAAAAAAAAAAAAAAABETH/2gAIAQIBAT8QdKlhB//EAB0QAQABBQADAAAAAAAAAAAAAAERACExQWFRkaH/2gAIAQEAAT8QHiLFdNc3ynkkUSwe5aGQi2yPYpkLzkw9VO6pcYfdNfau09S2C+b1/9k=\",\"aspectRatio\":1.5,\"src\":\"/static/fe78b92404c8c1a6e35b495473e2ad15/e2fb1/prototypeProduct.jpg\",\"srcSet\":\"/static/fe78b92404c8c1a6e35b495473e2ad15/b1920/prototypeProduct.jpg 363w,\\n/static/fe78b92404c8c1a6e35b495473e2ad15/b17db/prototypeProduct.jpg 725w,\\n/static/fe78b92404c8c1a6e35b495473e2ad15/e2fb1/prototypeProduct.jpg 1450w,\\n/static/fe78b92404c8c1a6e35b495473e2ad15/8df61/prototypeProduct.jpg 2175w,\\n/static/fe78b92404c8c1a6e35b495473e2ad15/83aec/prototypeProduct.jpg 2279w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"PrototypeThesis\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAHuNRCl/8QAGBAAAgMAAAAAAAAAAAAAAAAAABEBEEH/2gAIAQEAAQUCMpQj/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPwE//8QAFxAAAwEAAAAAAAAAAAAAAAAAABARQf/aAAgBAQAGPwIrmL//xAAaEAADAAMBAAAAAAAAAAAAAAAAAREhMUFx/9oACAEBAAE/IV3Oi2WmqLROjdg8EmEf/9oADAMBAAIAAwAAABD/AA//xAAVEQEBAAAAAAAAAAAAAAAAAAAQIf/aAAgBAwEBPxCn/8QAFREBAQAAAAAAAAAAAAAAAAAAECH/2gAIAQIBAT8Qh//EABkQAQEBAQEBAAAAAAAAAAAAAAERIQAxUf/aAAgBAQABPxDD7eniVoDXz3tBtpc4NwVPeUs0RjJwSYB3/9k=\",\"aspectRatio\":1.5,\"src\":\"/static/340f6261464fb2d25ee138f3150d34be/e2fb1/prototypeThesis.jpg\",\"srcSet\":\"/static/340f6261464fb2d25ee138f3150d34be/b1920/prototypeThesis.jpg 363w,\\n/static/340f6261464fb2d25ee138f3150d34be/b17db/prototypeThesis.jpg 725w,\\n/static/340f6261464fb2d25ee138f3150d34be/e2fb1/prototypeThesis.jpg 1450w,\\n/static/340f6261464fb2d25ee138f3150d34be/8df61/prototypeThesis.jpg 2175w,\\n/static/340f6261464fb2d25ee138f3150d34be/02e0c/prototypeThesis.jpg 2442w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"WorkshopBDW\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAQCAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAABZiZotlBOv//EABsQAAIDAAMAAAAAAAAAAAAAAAECAxITESIy/9oACAEBAAEFAtTxqxaLSs/WNDcp5//EABYRAQEBAAAAAAAAAAAAAAAAAAABEv/aAAgBAwEBPwGMP//EABYRAQEBAAAAAAAAAAAAAAAAAAABEv/aAAgBAgEBPwGtP//EAB8QAAEDAwUAAAAAAAAAAAAAAAEAAiEDEDERElFSof/aAAgBAQAGPwKqNTmCtrevql8lOdyVVOIt/8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFBYf/aAAgBAQABPyF49+b9xZpH3EEupfdMKypp75vmSlu//9oADAMBAAIAAwAAABB8P//EABgRAAIDAAAAAAAAAAAAAAAAAAABEUFR/9oACAEDAQE/EGVkNP/EABgRAAIDAAAAAAAAAAAAAAAAAAABESFR/9oACAECAQE/EEsnh//EABwQAQACAgMBAAAAAAAAAAAAAAERIQAxQVGR4f/aAAgBAQABPxDS5BejYB6rH0EphLSmeMXjFt3QX5m/8KPIwPmJKKcU2Qfcm0F3n//Z\",\"aspectRatio\":1.5,\"src\":\"/static/1c818103c0b4615389309f11aa3a1bc2/9e240/workshopBDW.jpg\",\"srcSet\":\"/static/1c818103c0b4615389309f11aa3a1bc2/b1920/workshopBDW.jpg 363w,\\n/static/1c818103c0b4615389309f11aa3a1bc2/b17db/workshopBDW.jpg 725w,\\n/static/1c818103c0b4615389309f11aa3a1bc2/9e240/workshopBDW.jpg 752w\",\"sizes\":\"(max-width: 752px) 100vw, 752px\"}}},\"WorkshopNATSA\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAQFAgb/xAAVAQEBAAAAAAAAAAAAAAAAAAACAf/aAAwDAQACEAMQAAABmvKdAbPMgX//xAAZEAADAQEBAAAAAAAAAAAAAAABAgMRABL/2gAIAQEAAQUC9kiMmPSVSsjjOclNQJ//xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAwEBPwFX/8QAFREBAQAAAAAAAAAAAAAAAAAAABH/2gAIAQIBAT8BR//EABsQAAIDAAMAAAAAAAAAAAAAAAERACExAhAy/9oACAEBAAY/AlyZlilPLR0dODbvZ//EABoQAQADAAMAAAAAAAAAAAAAAAEAETEhUWH/2gAIAQEAAT8hukBhCorORZSuFGz2zqXK5jSZYj//2gAMAwEAAgADAAAAEIQv/8QAGBEAAgMAAAAAAAAAAAAAAAAAAAERQVH/2gAIAQMBAT8QVEsR/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARUf/aAAgBAgEBPxBcGx1v/8QAHBABAAICAwEAAAAAAAAAAAAAAREhADFBUXGB/9oACAEBAAE/EAyhC19xGihUqHVx1NawnnRQi+e4OtSC1T2nORkrEzUkTimC4QAq6rP/2Q==\",\"aspectRatio\":1.5,\"src\":\"/static/22942bbac4e234addbe1f282ceee13eb/e2fb1/workshopNATSA.jpg\",\"srcSet\":\"/static/22942bbac4e234addbe1f282ceee13eb/b1920/workshopNATSA.jpg 363w,\\n/static/22942bbac4e234addbe1f282ceee13eb/b17db/workshopNATSA.jpg 725w,\\n/static/22942bbac4e234addbe1f282ceee13eb/e2fb1/workshopNATSA.jpg 1450w,\\n/static/22942bbac4e234addbe1f282ceee13eb/8df61/workshopNATSA.jpg 2175w,\\n/static/22942bbac4e234addbe1f282ceee13eb/5e496/workshopNATSA.jpg 2900w,\\n/static/22942bbac4e234addbe1f282ceee13eb/687fa/workshopNATSA.jpg 3769w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"WorkshopNTU\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIQAxAAAAGhO0yKAV//xAAYEAADAQEAAAAAAAAAAAAAAAABAgMTNf/aAAgBAQABBQJrqtK5F30LHoOF0pMhv//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAEDAQE/AYf/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAcEAACAgIDAAAAAAAAAAAAAAAAARESAiEiQYL/2gAIAQEABj8Cp3EkO9syUeRNraOObSez/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAITFBocH/2gAIAQEAAT8hFy8E1CKAUZWgrSghaFtyFvtALjBiRmf/2gAMAwEAAgADAAAAEFvP/8QAFhEAAwAAAAAAAAAAAAAAAAAAAAER/9oACAEDAQE/EFREf//EABURAQEAAAAAAAAAAAAAAAAAAAAh/9oACAECAQE/EFf/xAAdEAEAAgICAwAAAAAAAAAAAAABABEhMUFRcYGR/9oACAEBAAE/EHbVJImmjywtE3LIN16y/I1kBZVlQaIrvBjnlKWr0Ee2ZTCireZ//9k=\",\"aspectRatio\":1.5,\"src\":\"/static/b8902e96bdd59bec6e0aa26f106b2db2/e2fb1/workshopNTU.jpg\",\"srcSet\":\"/static/b8902e96bdd59bec6e0aa26f106b2db2/b1920/workshopNTU.jpg 363w,\\n/static/b8902e96bdd59bec6e0aa26f106b2db2/b17db/workshopNTU.jpg 725w,\\n/static/b8902e96bdd59bec6e0aa26f106b2db2/e2fb1/workshopNTU.jpg 1450w,\\n/static/b8902e96bdd59bec6e0aa26f106b2db2/9f7ff/workshopNTU.jpg 1904w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"Synthesis\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUCAwT/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAgP/2gAMAwEAAhADEAAAAdlTCE4rBiH/xAAcEAABBAMBAAAAAAAAAAAAAAABAAIDEQQSEyH/2gAIAQEAAQUCk2v1OJBdFa4I4zSf/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQACEv/aAAgBAwEBPwFy3Df/xAAVEQEBAAAAAAAAAAAAAAAAAAAAEf/aAAgBAgEBPwGI/8QAGxAAAgEFAAAAAAAAAAAAAAAAAAECECExMqH/2gAIAQEABj8Ccq7GeF2f/8QAGhABAQEAAwEAAAAAAAAAAAAAAREAITFxgf/aAAgBAQABPyEqqgzzRFNK3JZwFvWAE0gU+b//2gAMAwEAAgADAAAAEJTf/8QAFhEBAQEAAAAAAAAAAAAAAAAAARAR/9oACAEDAQE/EFOkP//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAgEBPxBtSj//xAAbEAEAAgMBAQAAAAAAAAAAAAABABEhMUFh4f/aAAgBAQABPxDIxtDYGCqNZ3XNx/eUcgF1xBm3xbzMBH1+pZlrogE//9k=\",\"aspectRatio\":1.5,\"src\":\"/static/7b09c22719b9c9a40a308951c49f489d/e2fb1/synthesis.jpg\",\"srcSet\":\"/static/7b09c22719b9c9a40a308951c49f489d/b1920/synthesis.jpg 363w,\\n/static/7b09c22719b9c9a40a308951c49f489d/b17db/synthesis.jpg 725w,\\n/static/7b09c22719b9c9a40a308951c49f489d/e2fb1/synthesis.jpg 1450w,\\n/static/7b09c22719b9c9a40a308951c49f489d/8df61/synthesis.jpg 2175w,\\n/static/7b09c22719b9c9a40a308951c49f489d/5e496/synthesis.jpg 2900w,\\n/static/7b09c22719b9c9a40a308951c49f489d/26f50/synthesis.jpg 5688w\",\"sizes\":\"(max-width: 1450px) 100vw, 1450px\"}}},\"SynthesisAgrid\":{\"childImageSharp\":{\"fluid\":{\"base64\":\"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB7apGhAn/xAAXEAADAQAAAAAAAAAAAAAAAAAAARAh/9oACAEBAAEFAmKPL//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABYQAAMAAAAAAAAAAAAAAAAAAAEQIP/aAAgBAQAGPwKAv//EABwQAQACAQUAAAAAAAAAAAAAAAEAEUEQITFRYf/aAAgBAQABPyEXd5OILSzR0H2O1u2Kjif/2gAMAwEAAgADAAAAELzf/8QAFxEBAAMAAAAAAAAAAAAAAAAAABEhQf/aAAgBAwEBPxC8S//EABcRAQADAAAAAAAAAAAAAAAAAAEQESH/2gAIAQIBAT8QNKj/xAAgEAEAAgECBwAAAAAAAAAAAAABESEAMUEQUXGBweHw/9oACAEBAAE/ECqsQbvtcuUpaql3FbcHB5COrHnGGCUQl0nIoPce8//Z\",\"aspectRatio\":1.5,\"src\":\"/static/c5fcbb1b61509a1f9281d092a5be1910/605ca/synthesisAgrid.jpg\",\"srcSet\":\"/static/c5fcbb1b61509a1f9281d092a5be1910/b1920/synthesisAgrid.jpg 363w,\\n/static/c5fcbb1b61509a1f9281d092a5be1910/b17db/synthesisAgrid.jpg 725w,\\n/static/c5fcbb1b61509a1f9281d092a5be1910/605ca/synthesisAgrid.jpg 1284w\",\"sizes\":\"(max-width: 1284px) 100vw, 1284px\"}}}}}");

/***/ }),

/***/ "./src/components/About/highlight/index.js":
/*!*************************************************!*\
  !*** ./src/components/About/highlight/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
//import { useCVHighlightQuery } from '../query/highlightquery';
var Highlight=function Highlight(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HighlightBox,null,props.data.allCvHighLightJson.edges.filter(function(fortype){return fortype.node.type===props.selectType;}).map(function(_ref){var node=_ref.node,i=_ref.i;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{key:i},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sum,null,node.sum),node.span?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LsIntro,null,node.span):'',node.list?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LsSubIntro,null,node.list):'');}));};/* harmony default export */ __webpack_exports__["default"] = (Highlight);var HighlightBox=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"highlight__HighlightBox",componentId:"vwhjyi-0"})(["margin:10px 0;padding:10px 0;@media (max-width:","){display:none;}"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].screen.md);var Sum=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"highlight__Sum",componentId:"vwhjyi-1"})(["color:",";",";margin:10px 0;"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSize.lg);var LsIntro=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"highlight__LsIntro",componentId:"vwhjyi-2"})(["",";::before{color:",";padding-right:5px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayscale.S800);var LsSubIntro=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"highlight__LsSubIntro",componentId:"vwhjyi-3"})(["",";color:",";::before{content:\"\u2043\";padding-right:5px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayscale.S700);

/***/ }),

/***/ "./src/components/About/item/index.js":
/*!********************************************!*\
  !*** ./src/components/About/item/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
//import { useCVItemQuery } from '../query/itemquery';
var Item=function Item(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ItemBox,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_3__["H3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,props.title)),props.data.allCvJson.edges.filter(function(fortype){return fortype.node.type===props.selectType;}).map(function(_ref){var node=_ref.node,i=_ref.i;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bloc,{key:i,className:"bloc"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title,null,node.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Org,null,node.org),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Location,null,node.yrStart?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,node.yrStart," - ",node.yrEnd," | ",node.location):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,node.yrEnd," | ",node.location)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Desc,null,node.desc.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(LsDesc,{key:i},item,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null));}))));}));};/* harmony default export */ __webpack_exports__["default"] = (Item);var ItemBox=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"item__ItemBox",componentId:"tslgdz-0"})([""]);var Bloc=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"item__Bloc",componentId:"tslgdz-1"})(["margin:10px 0;padding:7px 0 17px 0;border-bottom:1px solid ",";:last-of-type{border-bottom:none;}"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayscale.S400);var Title=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"item__Title",componentId:"tslgdz-2"})(["",";font-family:",";font-weight:bold;"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSize.base,_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].font.primary);var Org=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"item__Org",componentId:"tslgdz-3"})(["",";margin-bottom:5px;"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSize.base);var Location=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"item__Location",componentId:"tslgdz-4"})(["",";color:",";"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayscale.S800);var Desc=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"item__Desc",componentId:"tslgdz-5"})(["margin:0;"]);var LsDesc=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"item__LsDesc",componentId:"tslgdz-6"})(["",";color:",";::before{content:\"\u2043 \";}"],_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_2__["default"].color.grayscale.S800);

/***/ }),

/***/ "./src/components/Adsense/index.js":
/*!*****************************************!*\
  !*** ./src/components/Adsense/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var Adsense=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Adsense,_React$Component);function Adsense(){return _React$Component.apply(this,arguments)||this;}var _proto=Adsense.prototype;_proto.componentDidMount=function componentDidMount(){var clientId=this.props.clientId;if(clientId){;(window.adsbygoogle=window.adsbygoogle||[]).push({});}};_proto.render=function render(){var _this$props=this.props,clientId=_this$props.clientId,slotId=_this$props.slotId,format=_this$props.format;return clientId?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"ad"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ins",{className:"adsbygoogle",style:{display:'block'},"data-ad-client":clientId,"data-ad-slot":slotId,"data-ad-format":format})):'';};return Adsense;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Adsense);

/***/ }),

/***/ "./src/components/Channelling/index.js":
/*!*********************************************!*\
  !*** ./src/components/Channelling/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
var Channelling=function Channelling(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_1__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_1__["Section"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_1__["H3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("b",null,"I'm open to full-time positions and creative opportunities")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,"Contact me at imyentsen@gmail.com. Please also explore my writing on ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://medium.com/@imyentsen/",target:"blank"},"Medium")," and check my ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://www.linkedin.com/in/yentsenliu/",target:"blank"},"Linkedin"),".")));};/* harmony default export */ __webpack_exports__["default"] = (Channelling);

/***/ }),

/***/ "./src/components/Footer/index.js":
/*!****************************************!*\
  !*** ./src/components/Footer/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var components_Icon_IconExternal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Icon/IconExternal */ "./src/components/Icon/IconExternal.js");
var Footer=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Footer,_React$Component);function Footer(){return _React$Component.apply(this,arguments)||this;}var _proto=Footer.prototype;_proto.render=function render(){var title=this.props.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterBG,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_3__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_3__["Section"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_3__["H3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b",null,title))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FooterGrid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/about"},"About"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/how"},"How"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://medium.com/@imyentsen/",target:"blank"},"Medium")," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Icon_IconExternal__WEBPACK_IMPORTED_MODULE_6__["IconExternal"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"https://www.linkedin.com/in/yentsenliu/",target:"blank"},"Linkedin")," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Icon_IconExternal__WEBPACK_IMPORTED_MODULE_6__["IconExternal"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:"mailto:imyentsen@gmail.com"},"imyentsen@gmail.com"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CopyRight,null,"\xA9 2020 Ansin Lau. All Rights Reserved"))))));};return Footer;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Footer);var FooterBG=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"Footer__FooterBG",componentId:"fandn7-0"})(["background-color:",";color:",";a{color:"," !important;}"],_style_theme__WEBPACK_IMPORTED_MODULE_5__["default"].color.secondary.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_5__["default"].color.white,_style_theme__WEBPACK_IMPORTED_MODULE_5__["default"].color.white);var FooterGrid=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"Footer__FooterGrid",componentId:"fandn7-1"})(["display:grid;grid-template-columns:1fr 2fr 2fr;grid-gap:15px;",";@media (max-width:","){grid-template-columns:1fr;}"],_style_theme__WEBPACK_IMPORTED_MODULE_5__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_5__["default"].screen.md);var CopyRight=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"Footer__CopyRight",componentId:"fandn7-2"})(["color:",";"],_style_theme__WEBPACK_IMPORTED_MODULE_5__["default"].color.grayscale.S600);

/***/ }),

/***/ "./src/components/How/HowSection.js":
/*!******************************************!*\
  !*** ./src/components/How/HowSection.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-reveal/Fade */ "./node_modules/react-reveal/Fade.js");
/* harmony import */ var react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
var HowSection=function HowSection(_ref){var title=_ref.title,desc=_ref.desc,children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HowContainer,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_reveal_Fade__WEBPACK_IMPORTED_MODULE_2___default.a,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title,null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p",null,desc)),children);};var HowContainer=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"HowSection__HowContainer",componentId:"a494e0-0"})(["padding:20px 0;border-top:1px solid ",";@media (max-width:","){margin:30px 0;padding:15px 0 0 0;grid-template-columns:1fr 1fr;grid-gap:0px;}:first-of-type{margin:0;padding-top:0;border-top:none;}:last-of-type{margin:0 0 5px 0;border-bottom:none;}"],_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.grayscale.S400,_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].screen.md);var Title=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"HowSection__Title",componentId:"a494e0-1"})(["margin-bottom:5px;",";font-weight:bold;"],_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSize.regular);/* harmony default export */ __webpack_exports__["default"] = (HowSection);

/***/ }),

/***/ "./src/components/Icon/IconClose.js":
/*!******************************************!*\
  !*** ./src/components/Icon/IconClose.js ***!
  \******************************************/
/*! exports provided: IconClose */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconClose", function() { return IconClose; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function IconClose(props){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{focusable:"false",width:"2em",height:"2em",viewBox:"0 0 50 50"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M37.304 11.282l1.414 1.414l-26.022 26.02l-1.414-1.413z",fill:"currentColor"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M12.696 11.282l26.022 26.02l-1.414 1.415l-26.022-26.02z",fill:"currentColor"}));}

/***/ }),

/***/ "./src/components/Icon/IconDownload.js":
/*!*********************************************!*\
  !*** ./src/components/Icon/IconDownload.js ***!
  \*********************************************/
/*! exports provided: IconDownload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconDownload", function() { return IconDownload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function IconDownload(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",role:"img",class:"iconify iconify--carbon",width:"1.05em",height:"1.05em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 32 32"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M26 15l-1.41-1.41L17 21.17V2h-2v19.17l-7.59-7.58L6 15l10 10l10-10z",fill:"currentColor"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4z",fill:"currentColor"}));}

/***/ }),

/***/ "./src/components/Icon/IconExternal.js":
/*!*********************************************!*\
  !*** ./src/components/Icon/IconExternal.js ***!
  \*********************************************/
/*! exports provided: IconExternal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconExternal", function() { return IconExternal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function IconExternal(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{focusable:"false",width:"1em",height:"1em",viewBox:"0 0 16 16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g",{fill:"currentColor"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"})));}

/***/ }),

/***/ "./src/components/Icon/IconToTop.js":
/*!******************************************!*\
  !*** ./src/components/Icon/IconToTop.js ***!
  \******************************************/
/*! exports provided: IconToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconToTop", function() { return IconToTop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function IconToTop(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{focusable:"false",width:"2em",height:"2em",viewBox:"0 0 16 16"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g",{fill:"currentColor"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.854 7l-5-5h-.707l-5 5l.707.707L8 3.561V14h1V3.56l4.146 4.147l.708-.707z"})));}

/***/ }),

/***/ "./src/components/Landing/Masthead/index.js":
/*!**************************************************!*\
  !*** ./src/components/Landing/Masthead/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
var Masthead=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Masthead,_React$Component);function Masthead(){return _React$Component.apply(this,arguments)||this;}var _proto=Masthead.prototype;_proto.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MastheadBox,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Display,null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_3__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Display,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Hi, I'm Ansin,")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subline,null,"a startup-minded designer and researcher specializing in UI, UX, front-end development, & data visualization")));};return Masthead;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Masthead);var MastheadBox=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"Masthead__MastheadBox",componentId:"sc-1xsfus5-0"})(["overflow:show;margin:0 0 30px 0;@media (max-width:","){.masthead{height:auto;padding:30px 0;}}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].screen.lg);var Display=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"Masthead__Display",componentId:"sc-1xsfus5-1"})(["overflow:visible;object-fit:fill;color:",";p{",";padding:100px 0 0 0;font-family:",";font-weight:bold;}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.secondary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize.xxl,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].font.display);var Subline=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"Masthead__Subline",componentId:"sc-1xsfus5-2"})(["color:"," !important;",";font-family:",";font-weight:bold;margin-top:20px;"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S950,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize.lg,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].font.primary);

/***/ }),

/***/ "./src/components/Landing/Preview/index.js":
/*!*************************************************!*\
  !*** ./src/components/Landing/Preview/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var components_Icon_IconExternal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Icon/IconExternal */ "./src/components/Icon/IconExternal.js");
var Preview=/*#__PURE__*/function(_Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Preview,_Component);function Preview(){return _Component.apply(this,arguments)||this;}var _proto=Preview.prototype;_proto.render=function render(){var listRole=this.props.role.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LsRole,{key:i},item);});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PreviewBloc,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgSlide,null,this.props.img?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a,{fluid:this.props.img}):''),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_4__["H3"],null,this.props.title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Desc,null,this.props.desc),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleRole,null,"Roles"),listRole),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BtnGroup,null,this.props.visit?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:this.props.visit,target:"blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_4__["Button"],null,"Visit Work\u2009",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Icon_IconExternal__WEBPACK_IMPORTED_MODULE_7__["IconExternal"],null))):'',this.props.hideStory?'':/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:this.props.path},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_4__["Button"],{Tertiary:true},"Read Story")))));};return Preview;}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (Preview);var PreviewBloc=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Preview__PreviewBloc",componentId:"sc-1f7w5h6-0"})(["display:grid;height:100% !important;grid-template-columns:4fr 2fr;padding:0 !important;margin:0 !important;@media (max-width:","){grid-template-columns:unset !important;height:auto !important;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.lg);var Info=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Preview__Info",componentId:"sc-1f7w5h6-1"})(["padding:40px 100px 50px 20px;height:100% !important;overflow:scroll;background:",";color:",";@media (max-width:","){padding:25px 16px 0 16px;}","{font-weight:bold;font-size:1.25em !important;line-height:1.72em !important;@media (min-width:","){margin-bottom:5px;}}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.white,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.lg,_style_global__WEBPACK_IMPORTED_MODULE_4__["H3"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.lg);var ImgSlide=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Preview__ImgSlide",componentId:"sc-1f7w5h6-2"})(["@media (max-width:","){order:-1;height:200px;object-fit:cover;}div{height:100% !important;}img{object-fit:cover;object-position:50% 50%;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.lg);var Desc=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].p.withConfig({displayName:"Preview__Desc",componentId:"sc-1f7w5h6-3"})(["@media (max-width:","){",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.lg,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].fontSize.sm);var TitleRole=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Preview__TitleRole",componentId:"sc-1f7w5h6-4"})(["font-family:",";",";font-weight:bold;margin:5px 0;"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].fontSize.xs);var LsRole=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].span.withConfig({displayName:"Preview__LsRole",componentId:"sc-1f7w5h6-5"})(["",";::after{content:' / ';}:last-of-type::after{content:'';}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].fontSize.sm);var BtnGroup=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Preview__BtnGroup",componentId:"sc-1f7w5h6-6"})(["margin:35px 0;@media (max-width:","){margin:25px 0;}div{margin-left:10px;}div:first-of-type{margin-left:0px !important;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.lg);

/***/ }),

/***/ "./src/components/Landing/Project/index.js":
/*!*************************************************!*\
  !*** ./src/components/Landing/Project/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_Landing_Preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Landing/Preview */ "./src/components/Landing/Preview/index.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var components_Icon_IconClose__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Icon/IconClose */ "./src/components/Icon/IconClose.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10__);
//https://ibaslogic.com/instant-post-switching-in-a-gatsbyjs-site/
var getCategories=function getCategories(items){var categoryItems=items.map(function(item){return item.post.frontmatter.category;});var flatCategories=categoryItems.reduce(function(categoryItems,val){return categoryItems.concat(val);},[]);var uniqueCategories=new Set(flatCategories);var categories=Array.from(uniqueCategories);categories=['All'].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(categories));return categories;};var PopUpPrev=function PopUpPrev(_ref){var children=_ref.children,item=_ref.item;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(StyledPopup,{trigger:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,children),modal:true,closeOnDocumentClick:true},function(close){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Close,{onClick:close},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Icon_IconClose__WEBPACK_IMPORTED_MODULE_9__["IconClose"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Landing_Preview__WEBPACK_IMPORTED_MODULE_4__["default"],{title:item.post.frontmatter.title,desc:item.post.frontmatter.description,date:item.post.frontmatter.date,img:item.post.frontmatter.image.childImageSharp.fluid,role:item.post.frontmatter.role,category:item.post.frontmatter.category,path:item.post.frontmatter.path,visit:item.post.frontmatter.visit,hideStory:item.post.frontmatter.hideStory}));});};var ProjectItems=/*#__PURE__*/function(_Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ProjectItems,_Component);function ProjectItems(){var _this;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}_this=_Component.call.apply(_Component,[this].concat(args))||this;_this.state={items:_this.props.items.remark.posts,blogPostItems:_this.props.items.remark.posts,categories:getCategories(_this.props.items.remark.posts)};_this.handleItems=function(category){if(category==='All'){_this.setState({blogPostItems:Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.items)});}else{_this.setState({blogPostItems:Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_this.state.items.filter(function(item){return item.post.frontmatter.category.includes(category);}))});}};return _this;}var _proto=ProjectItems.prototype;_proto.render=function render(){var _this2=this;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,this.state.categories.map(function(category,index){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BtnCategory,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button",{type:"button",key:index,onClick:function onClick(){return _this2.handleItems(category);}},category));})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ProjectGrid,null,this.state.blogPostItems.map(function(item){var gridStyle={gridArea:""+item.post.frontmatter.grid};var listCategory=item.post.frontmatter.category.map(function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ListCategory,{key:i},item);});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ProjCard,{key:item.post.frontmatter.path,style:gridStyle},item.post.frontmatter.infoShow?'':/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InfoWrapper,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PopUpPrev,{item:item},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image,{infoShow:item.post.frontmatter.infoShow},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_10___default.a,{animateIn:"fadeIn",offset:0,animateOnce:"true"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_3___default.a,{fluid:item.post.frontmatter.image.childImageSharp.fluid})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(CategoryDate,null,listCategory,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("time",{dateTime:item.post.frontmatter.date},item.post.frontmatter.date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PopUpPrev,{item:item},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["H3"],null,item.post.frontmatter.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Brief,null,item.post.frontmatter.brief)),item.post.frontmatter.infoShow?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Quote,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["H3"],null,item.post.frontmatter.quote)):'');})));};return ProjectItems;}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);/* harmony default export */ __webpack_exports__["default"] = (ProjectItems);var ProjectGrid=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({displayName:"Project__ProjectGrid",componentId:"sc-4lqfw-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:30px;margin:68px 0 72px 0;@media (max-width:","){width:100%;justify-content:start;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));div{grid-area:auto / auto / auto / auto !important;}}@media (max-width:","){grid-gap:24px;grid-template-areas:auto / auto / auto / auto;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].screen.lg,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].screen.sm);var BtnCategory=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({displayName:"Project__BtnCategory",componentId:"sc-4lqfw-1"})(["button{text-transform:Uppercase;font-family:",";",";letter-spacing:1px;font-weight:bold;background:",";border:1px solid ",";border-radius:100px;color:",";margin:0 4px 6px 0;padding:6px 12px;}button:hover{color:",";background:linear-gradient(to bottom,",",",");}"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].fontSize.xs,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.grayscale.S100,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S800D,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S900);var ProjCard=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({displayName:"Project__ProjCard",componentId:"sc-4lqfw-2"})(["color:",";"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.grayscale.S900);var InfoWrapper=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({displayName:"Project__InfoWrapper",componentId:"sc-4lqfw-3"})(["","{margin:5px 0 10px 0;cursor:pointer;color:",";font-weight:bold;:hover{text-decoration:underline;}}"],_style_global__WEBPACK_IMPORTED_MODULE_5__["H3"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S900D);var Image=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({displayName:"Project__Image",componentId:"sc-4lqfw-4"})(["display:block;width:100%;margin:13px 0;cursor:pointer;img{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.1s ease-in-out !important;transition:0.1s ease-in-out !important;}:hover img{-webkit-transform:scale(1.1);transform:scale(1.1);}display:",";"],function(props){return props.infoShow;});var CategoryDate=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({displayName:"Project__CategoryDate",componentId:"sc-4lqfw-5"})(["color:",";",";font-family:",";"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.grayscale.S900,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].fontSize.xxs,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].font.primary);var ListCategory=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].span.withConfig({displayName:"Project__ListCategory",componentId:"sc-4lqfw-6"})(["::after{content:',   ';}:last-of-type{::after{content:'\u30FB';}}"]);var Brief=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({displayName:"Project__Brief",componentId:"sc-4lqfw-7"})(["",";color:",";"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.grayscale.S900);var Quote=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({displayName:"Project__Quote",componentId:"sc-4lqfw-8"})(["margin-top:15px;width:100%;padding:50px 25px;border:1px solid ",";color:",";@media (max-width:","){margin-top:15px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S900D,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].screen.md);var StyledPopup=Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["default"])(reactjs_popup__WEBPACK_IMPORTED_MODULE_8__["default"]).withConfig({displayName:"Project__StyledPopup",componentId:"sc-4lqfw-9"})(["&-overlay{background:rgba( 255,255,255,0.25) !important;z-index:99 !important;-webkit-animation:anvil 0.3s cubic-bezier(0.38,0.1,0.36,0.9) forwards;}&-content{background:rgba(0,0,0,0) !important;border:none !important;width:auto !important;height:auto !important;margin:70px !important;padding:0px !important;display:grid;align-content:center;justify-content:center;@media (max-width:","){margin:0px !important;align-content:flex-start;}}@keyframes anvil{0%{transform:translateY(0px);opacity:0;box-shadow:0 0 0 rgba(241,241,241,0);}1%{transform:translateY(10px);opacity:0;box-shadow:0 0 0 rgba(241,241,241,0);}100%{transform:=translateY(0px);opacity:1;box-shadow:0 0 500px rgba(241,241,241,0);}}"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].screen.md);var Close=styled_components__WEBPACK_IMPORTED_MODULE_6__["default"].div.withConfig({displayName:"Project__Close",componentId:"sc-4lqfw-10"})(["position:absolute;cursor:pointer;display:block;float:right;top:10px;right:5px;z-index:10;color:",";@media (max-width:","){padding:13px;z-index:999;top:170px;left:auto;right:0;position:fixed;background-color:",";}svg{transition:0.3s;}svg:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg);}"],_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_7__["default"].color.white);

/***/ }),

/***/ "./src/components/Layout/index.js":
/*!****************************************!*\
  !*** ./src/components/Layout/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var emergence_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emergence.js */ "./node_modules/emergence.js/src/emergence.js");
/* harmony import */ var emergence_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emergence_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Navi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Navi */ "./src/components/Navi/index.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Footer */ "./src/components/Footer/index.js");
/* harmony import */ var _gatsby_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../gatsby-config */ "./gatsby-config.js");
/* harmony import */ var _gatsby_config__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_gatsby_config__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! modern-normalize/modern-normalize.css */ "./node_modules/modern-normalize/modern-normalize.css");
/* harmony import */ var modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(modern_normalize_modern_normalize_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/themes/prism.css */ "./node_modules/prismjs/themes/prism.css");
/* harmony import */ var prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var scss_gatstrap_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! scss/gatstrap.scss */ "./src/scss/gatstrap.scss");
/* harmony import */ var scss_gatstrap_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(scss_gatstrap_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__);
var Layout=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Layout,_React$Component);function Layout(){return _React$Component.apply(this,arguments)||this;}var _proto=Layout.prototype;_proto.componentDidMount=function componentDidMount(){emergence_js__WEBPACK_IMPORTED_MODULE_2___default.a.init();};_proto.componentDidUpdate=function componentDidUpdate(){emergence_js__WEBPACK_IMPORTED_MODULE_2___default.a.init();};_proto.render=function render(){var children=this.props.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Navi__WEBPACK_IMPORTED_MODULE_3__["default"],Object.assign({title:_gatsby_config__WEBPACK_IMPORTED_MODULE_5__["siteMetadata"].title},this.props)),children,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"],Object.assign({title:_gatsby_config__WEBPACK_IMPORTED_MODULE_5__["siteMetadata"].title},this.props)));};return Layout;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/components/Meta/index.js":
/*!**************************************!*\
  !*** ./src/components/Meta/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_2__);
var Meta=function Meta(_ref){var site=_ref.site,title=_ref.title,desc=_ref.desc,ogimg=_ref.ogimg;var siteTitle=lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(site,'title');title=title?title+" | "+siteTitle:"Ansin";desc=desc?""+desc:"Ansin's portfolio";ogimg=ogimg?""+ogimg:"https://yentsenliu.com/img/og-image.jpg";return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1___default.a,{title:title,meta:[{name:'twitter:card',content:"Ansin's portfolio"},{name:'twitter:site',content:"@"+lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(site,'twitter')},{property:'og:title',content:title},{property:'og:type',content:'website'},{property:'og:description',content:desc},{property:'og:url',content:""+lodash_get__WEBPACK_IMPORTED_MODULE_2___default()(site,'siteUrl')},{property:'og:image',content:ogimg}]});};/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "./src/components/Navi/index.js":
/*!**************************************!*\
  !*** ./src/components/Navi/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css/animate.min.css */ "./node_modules/animate.css/animate.min.css");
/* harmony import */ var animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animate-on-scroll */ "./node_modules/react-animate-on-scroll/dist/scrollAnimation.min.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
var Navi=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Navi,_React$Component);function Navi(){return _React$Component.apply(this,arguments)||this;}var _proto=Navi.prototype;_proto.render=function render(){var _this$props=this.props,location=_this$props.location,title=_this$props.title;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Nav,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default.a,{animateIn:"fadeIn",animateOut:"fadeOut",offset:0,duration:0.3},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Brand,null,title))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default.a,{animateIn:"fadeIn",animateOut:"fadeOut",offset:0,duration:0.3},location.pathname==='/about/'?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/about/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,{focus:true},"About")):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/about/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,{normal:true},"About"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default.a,{animateIn:"fadeIn",animateOut:"fadeOut",offset:0,duration:0.3},location.pathname==='/how/'?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/how/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,{focus:true},"How")):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/how/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NavLink,{normal:true},"How"))));};return Navi;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Navi);var Nav=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Navi__Nav",componentId:"xkujxp-0"})(["position:fixed;font-family:",";width:100%;padding:5px 0;@media (max-width:","){display:grid;grid-template-columns:repeat(auto-fill,100px);}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.md);var Brand=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Navi__Brand",componentId:"xkujxp-1"})(["padding:10px 20px;font-weight:bold;",";@media (max-width:","){padding:10px 15px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].fontSize.lg,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.md);var NavLink=styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].div.withConfig({displayName:"Navi__NavLink",componentId:"xkujxp-2"})(["text-decoration:none;float:left;display:block;padding:0px 20px;font-weight:bold;width:100%;",";color:",";@media (max-width:","){padding:14px 15px;display:inline-block;}"," ",""],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.grayscale.S950,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.md,function(props){return props.normal&&Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])([":before{content:'';padding-left:0;overflow:hidden;transition:0.2s padding;}:hover{color:",";:before{padding:0 3px;}}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.grayscale.S950);},function(props){return props.focus&&Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["css"])(["color:",";:before{content:'\u2043';margin-right:5px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.primary.S400);});

/***/ }),

/***/ "./src/components/Updates/index.js":
/*!*****************************************!*\
  !*** ./src/components/Updates/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/components/Updates/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
var Sheety=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Sheety,_React$Component);function Sheety(){var _this;_this=_React$Component.call(this)||this;_this.state={error:null,isLoaded:false,type:[],time:[],content:[],link:[]};return _this;}var _proto=Sheety.prototype;_proto.componentDidMount=function componentDidMount(){var _this2=this;fetch('https://api.sheety.co/0f98464e-5ae2-4720-9d78-a69acc8eb83c').then(function(res){return res.json();}).then(function(result){_this2.setState({isLoaded:true,items:result});},// Note: it's important to handle errors here
// instead of a catch() block so that we don't swallow
// exceptions from actual bugs in components.
function(error){_this2.setState({isLoaded:true,error:error});});};_proto.render=function render(){var _this$state=this.state,error=_this$state.error,isLoaded=_this$state.isLoaded,items=_this$state.items;if(error){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,"Error: ",error.message);}else if(!isLoaded){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{class:"spinner"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{class:"double-bounce1"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{class:"double-bounce2"}));}else{return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"container"},items.map(function(item){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row pl-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"col-11  pl-0 pt-3 pb-1 text-white"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small",null,item.type," \xA0|\xA0 ",item.time)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"col-11  pl-0"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a",{href:'https://'+item.link,target:"blank"},item.content),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br",null))));}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"row pl-0 mt-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"col-11  pl-0 text-white"})));}};return Sheety;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (Sheety);

/***/ }),

/***/ "./src/components/Updates/style.scss":
/*!*******************************************!*\
  !*** ./src/components/Updates/style.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var scss_gatstrap_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! scss/gatstrap.scss */ "./src/scss/gatstrap.scss");
/* harmony import */ var scss_gatstrap_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(scss_gatstrap_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! animate.css/animate.css */ "./node_modules/animate.css/animate.css");
/* harmony import */ var animate_css_animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(animate_css_animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prismjs/themes/prism-okaidia.css */ "./node_modules/prismjs/themes/prism-okaidia.css");
/* harmony import */ var prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prismjs_themes_prism_okaidia_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! font-awesome/css/font-awesome.css */ "./node_modules/font-awesome/css/font-awesome.css");
/* harmony import */ var font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(font_awesome_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__);
var HTML=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HTML,_React$Component);function HTML(){return _React$Component.apply(this,arguments)||this;}var _proto=HTML.prototype;_proto.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html",{lang:"en"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{charSet:"utf-8"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{httpEquiv:"X-UA-Compatible",content:"IE=edge"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),this.props.headComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link",{href:"/img/apple-touch-icon.png",rel:"apple-touch-icon",sizes:"180x180"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link",{href:"/img/favicon.ico",rel:"icon",type:"image/x-icon"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{id:"___gatsby",dangerouslySetInnerHTML:{__html:this.props.body}}),this.props.postBodyComponents,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script",{async:true,src:"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"})));};return HTML;}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var components_Channelling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Channelling */ "./src/components/Channelling/index.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Meta */ "./src/components/Meta/index.js");
/* harmony import */ var components_About_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/About/item */ "./src/components/About/item/index.js");
/* harmony import */ var components_Icon_IconDownload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Icon/IconDownload */ "./src/components/Icon/IconDownload.js");
/* harmony import */ var components_About_highlight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/About/highlight */ "./src/components/About/highlight/index.js");
//import ScrollAnimation from 'react-animate-on-scroll'
var About=function About(_ref){var data=_ref.data,location=_ref.location;console.log({data:data});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],{location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Meta__WEBPACK_IMPORTED_MODULE_6__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CV,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Mas,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["H2"],null,"Ansin Lau"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["H3"],null,"Startup-minded designer and researcher with a 3-year working experience at two fast-paced startups specializing in UI, UX, front-end development, and data visualization")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{className:"img-heptagon",src:"/img/profile.jpg",alt:"Card cap"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactDownload,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["H3"],null,"Contact"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"mailto:imyentsen@gmail.com"},"imyentsen@gmail.com"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContactDownload,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["H3"],null,"Curriculum Vitae"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a",{href:"https://drive.google.com/uc?export=download&id=1CRuJkXFarZLSiNBqyRTc-g3rHXZhNjep",target:"blank"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span",null,"Download PDF")," ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Icon_IconDownload__WEBPACK_IMPORTED_MODULE_8__["IconDownload"],null)))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_About_item__WEBPACK_IMPORTED_MODULE_7__["default"],{title:"Work Experience",selectType:"work",data:data}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_About_highlight__WEBPACK_IMPORTED_MODULE_9__["default"],{selectType:"work",data:data}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_About_item__WEBPACK_IMPORTED_MODULE_7__["default"],{title:"Education",selectType:"education",data:data}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_About_highlight__WEBPACK_IMPORTED_MODULE_9__["default"],{selectType:"education",data:data}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_About_item__WEBPACK_IMPORTED_MODULE_7__["default"],{title:"Activities",selectType:"activity",data:data}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_About_highlight__WEBPACK_IMPORTED_MODULE_9__["default"],{selectType:"activity",data:data})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Channelling__WEBPACK_IMPORTED_MODULE_3__["default"],null));};/* harmony default export */ __webpack_exports__["default"] = (About);var pageQuery="1102326114";var CV=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"about__CV",componentId:"sc-14y8aaa-0"})(["padding:20px 0 35px 0;background-color:",";",",","{font-weight:bold;}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.primary.S100D,_style_global__WEBPACK_IMPORTED_MODULE_5__["H2"],_style_global__WEBPACK_IMPORTED_MODULE_5__["H3"]);var Mas=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"about__Mas",componentId:"sc-14y8aaa-1"})(["display:grid;grid-template-columns:4fr 2fr;grid-gap:42px;margin:100px 0 0 0;@media (max-width:","){display:flex;flex-direction:column-reverse;margin:30px 0;}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].screen.md);var Info=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"about__Info",componentId:"sc-14y8aaa-2"})(["padding-right:25%;@media (max-width:","){padding-right:0%;margin-top:30px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].screen.md);var ContactDownload=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"about__ContactDownload",componentId:"sc-14y8aaa-3"})(["display:grid;grid-template-columns:2fr 1fr;grid-gap:42px;padding:20px 0 0 0;border-top:1px solid ",";@media (max-width:","){margin:30px 0;padding:15px 0 0 0;grid-template-columns:1fr 1fr;grid-gap:0px;}:first-of-type{margin:30px 0 0 0;}:last-of-type{margin:0 0 60px 0;border-bottom:1px solid ",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S400,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S400);var Grid=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"about__Grid",componentId:"sc-14y8aaa-4"})(["display:grid;grid-template-columns:4fr 2fr;grid-gap:42px;@media (max-width:","){grid-template-columns:1fr;}.GridTitle{font-size:",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize.lg);

/***/ }),

/***/ "./src/pages/fakeindex.js":
/*!********************************!*\
  !*** ./src/pages/fakeindex.js ***!
  \********************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var templates_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! templates/Post */ "./src/templates/Post/index.js");
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Meta */ "./src/components/Meta/index.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
var BlogIndex=function BlogIndex(_ref){var data=_ref.data,location=_ref.location;var posts=lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data,'remark.posts');return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"],{location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"],{site:lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data,'site.meta')}),posts.map(function(_ref2,i){var post=_ref2.post;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(templates_Post__WEBPACK_IMPORTED_MODULE_2__["default"],{data:post,options:{isIndex:true},key:i});}));};/* harmony default export */ __webpack_exports__["default"] = (BlogIndex);var pageQuery="1259997473";

/***/ }),

/***/ "./src/pages/how.js":
/*!**************************!*\
  !*** ./src/pages/how.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _public_page_data_sq_d_949210366_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../public/page-data/sq/d/949210366.json */ "./public/page-data/sq/d/949210366.json");
var _public_page_data_sq_d_949210366_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../public/page-data/sq/d/949210366.json */ "./public/page-data/sq/d/949210366.json", 1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var reactjs_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reactjs-popup */ "./node_modules/reactjs-popup/reactjs-popup.es.js");
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Meta */ "./src/components/Meta/index.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/How/HowSection */ "./src/components/How/HowSection.js");
/* harmony import */ var components_Channelling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/Channelling */ "./src/components/Channelling/index.js");
/* harmony import */ var components_Icon_IconClose__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/Icon/IconClose */ "./src/components/Icon/IconClose.js");
var PopUpImg=function PopUpImg(_ref){var children=_ref.children,caption=_ref.caption,link=_ref.link;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledPopup,{trigger:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Art,null,children),modal:true,closeOnDocumentClick:true},function(close){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopHover,null,children,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Caption,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Close,{onClick:close},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Icon_IconClose__WEBPACK_IMPORTED_MODULE_12__["IconClose"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,caption),link?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["ButtonArrow"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:link},"Learn more")):'')));});};var How=function How(_ref2){var data=_ref2.data,location=_ref2.location;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["StaticQuery"],{query:"949210366",render:function render(data){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"],{location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Meta__WEBPACK_IMPORTED_MODULE_7__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HowPage,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Info,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["H2"],null,"How I work"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["H3"],null,"I placed ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Blue,null,"design")," and ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Green,null,"research")," at the center of each other")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(InfoImg,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img",{src:"/img/how.svg",alt:"How Graph"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HowSecNum,{num:"1"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["H3"],null,"Framing"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"I embed research within the overall process of design throughout iterated design process.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HowSecBox,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Communication",desc:"Communicate with the key stakeholders of the projects to frame the scope, to identify the requirements and practicalities (e.g. timeframe, scope, budget), and to gather feedback"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Research Design",desc:"Develop the research plan for further activities of data collection, prototyping, and so on"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgGrid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"The plan for the five-month design research project in coordination with the team of Work Ahead Oy, Finland",link:"/masters-thesis"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.ResearchPlan.childImageSharp.fluid})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HowSecNum,{num:"2",className:"bg"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["H3"],null,"Design & Research"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p",null,"Both design and research are the constructive activities to me. I design based on research, while I also place design as the core of my research activities.")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HowSecBox,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Data Collection",desc:"Employ qualitative and quantitative methods, which include interview, field observation, questionnaire, ethnography study, content analysis, etc."},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgGrid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Interview for early idea validation with the draft of design provided",link:"/espoo-business-services"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.InterviewAgrid.childImageSharp.fluid})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Online survey, which could be distributed on social networks and Amazon MTurk",link:"/hai"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.Surveying.childImageSharp.fluid})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Co-creation",desc:"Open up a platform of stakeholder participation for novel ideas, new connections, and consensus made by the participants"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgGrid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Live-action role play (LARP) workshop, which enabled the participants to establish connections and embody the future design potential through playing fictional charactors within a designed socio-economic system",link:"/performing-unreal-economies"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.WorkshopBDW.childImageSharp.fluid})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Co-creation workshop for insight gathering and feedback collection from the key stakeholders of design",link:"/ntu-all-gender-restroom/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.WorkshopNTU.childImageSharp.fluid})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Hand-on workshop for the participants to learn and acquire the operational experience in the new skills"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.WorkshopNATSA.childImageSharp.fluid})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Prototyping",desc:"Create mockups from low to high fidelity, which can be used for design validation and further test"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgGrid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Physical design mockup for form exploration and idea validation",link:"/hai"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.PrototypeProduct.childImageSharp.fluid})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Experiencable mockup of user interface made with the modern prototyping tools and front-end frameworks",link:"/masters-thesis"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.PrototypeThesis.childImageSharp.fluid})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Test",desc:"Test the prototypes with the key stakeholders with the technique such as behaviour tracking and A/B test"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgGrid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"User interface test conducted with video recording and user behaviour tracking",link:"/masters-thesis"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.TestMockup.childImageSharp.fluid})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Engineering validation test developed and conducted based on pre-determined specifications and design goals",link:"/rearia-hai"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.TestHai.childImageSharp.fluid})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Data Synthesis",desc:"Synthesize and analyze the data collected in the previous steps"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ImgGrid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Data synthesis for the information from multiple various sources with visualized methods, such as affinity diagram, categorization, mental model mapping, and so on. The results of synthesis could be easily communicated with the other stakeholders of design.",link:"/masters-thesis"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.Synthesis.childImageSharp.fluid})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PopUpImg,{caption:"Network diagram of the key stakeholders for identifying and clarifying the opportunities for design intervention",link:"/espoo-business-services"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_5___default.a,{class:"cursorImg",fluid:data.SynthesisAgrid.childImageSharp.fluid})))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Grid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HowSecNum,{num:"3"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["H3"],null,"Deliver")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HowSecBox,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_How_HowSection__WEBPACK_IMPORTED_MODULE_10__["default"],{title:"Bring design to life",desc:"I am experienced and keen to apply cross-disciplinary techniques in design and front-end engineering collabortively for outstanding final outcome. My skills and tech stack are broad, and I have a positive and can-do attitude to learn new things."},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_9__["ButtonArrow"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__["Link"],{to:"/about"},"Check my CV for more details"))))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Channelling__WEBPACK_IMPORTED_MODULE_11__["default"],null));},data:_public_page_data_sq_d_949210366_json__WEBPACK_IMPORTED_MODULE_0__});};/* harmony default export */ __webpack_exports__["default"] = (How);var HowPage=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__HowPage",componentId:"sc-1epqfzr-0"})(["padding:20px 0 35px 0;background-color:",";",",","{font-weight:bold;}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.primary.S100D,_style_global__WEBPACK_IMPORTED_MODULE_9__["H2"],_style_global__WEBPACK_IMPORTED_MODULE_9__["H3"]);var HowSecNum=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__HowSecNum",componentId:"sc-1epqfzr-1"})(["::before{content:'","';}"],function(props){return props.num;});var HowSecBox=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__HowSecBox",componentId:"sc-1epqfzr-2"})([""]);var Grid=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__Grid",componentId:"sc-1epqfzr-3"})(["display:grid;grid-template-columns:2fr 4fr;grid-gap:42px;margin:100px 0 0 0;@media (max-width:","){margin:30px 0;grid-template-columns:1fr;grid-gap:15px;}.bg{background-image:url(\"/img/howCircle.svg\");background-repeat:no-repeat;background-position:right 1%;background-size:40% auto;}","{@media (max-width:","){padding-top:40px;}","{line-height:0;padding-bottom:10px;@media (max-width:","){",";padding-bottom:0px;}}::before{position:relative;left:-15px;top:-10px;height:0;",";@media (max-width:","){left:-10px;}}}","{padding-top:10px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md,HowSecNum,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md,_style_global__WEBPACK_IMPORTED_MODULE_9__["H3"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSize.lg,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md,HowSecBox);var Green=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({displayName:"how__Green",componentId:"sc-1epqfzr-4"})([""]);var Blue=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].span.withConfig({displayName:"how__Blue",componentId:"sc-1epqfzr-5"})([""]);var Info=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__Info",componentId:"sc-1epqfzr-6"})(["padding-right:25%;","{color:",";}","{color:",";}@media (max-width:","){padding-right:0%;margin-top:30px;}"],Blue,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.primary.S500,Green,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.secondary.S500,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md);var InfoImg=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__InfoImg",componentId:"sc-1epqfzr-7"})(["padding-right:25%;@media (max-width:","){padding-right:0%;}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md);var Art=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].figure.withConfig({displayName:"how__Art",componentId:"sc-1epqfzr-8"})(["margin:0;max-width:1380px;width:100%;img{width:100%;mix-blend-mode:luminosity;}background:linear-gradient(270deg,#92CEEF,#04664E);background-size:400% 400%;-webkit-animation:AnimationName 5s ease infinite;-moz-animation:AnimationName 5s ease infinite;animation:AnimationName 5s ease infinite;@-webkit-keyframes AnimationName{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@-moz-keyframes AnimationName{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}@keyframes AnimationName{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}"]);var ImgGrid=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__ImgGrid",componentId:"sc-1epqfzr-9"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;overflow:hidden;grid-gap:15px;text-align:left;align-items:center;justify-items:center;height:50px;transition:all 0.5s;:hover{height:100px;}@media (max-width:","){grid-template-columns:1fr 1fr;margin-bottom:96px;grid-gap:15px;&:last-child{margin-bottom:0px;}}> ","{cursor:pointer;img{object-fit:none;object-position:center;}}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md,Art);var Close=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__Close",componentId:"sc-1epqfzr-10"})(["position:relative;cursor:pointer;display:block;left:-5px;z-index:10;color:",";background-color:",";@media (max-width:","){padding:16px;z-index:999;top:0px;left:auto;right:0;position:fixed;color:",";}svg{transition:0.3s;}svg:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg);}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.white,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.lg,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.primary.S1000D);var StyledPopup=Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["default"])(reactjs_popup__WEBPACK_IMPORTED_MODULE_6__["default"]).withConfig({displayName:"how__StyledPopup",componentId:"sc-1epqfzr-11"})(["&-overlay{background:rgba( 255,255,255,0.15) !important;z-index:99 !important;-webkit-animation:anvil 0.3s cubic-bezier(0.38,0.1,0.36,0.9) forwards;@media (max-width:","){border:7px solid ",";background:rgba( 255,255,255,1) !important;}}&-content{background:rgba(0,0,0,0) !important;border:none !important;width:auto !important;height:auto !important;margin:70px !important;padding:0px !important;display:grid;align-content:center;justify-content:center;@media (max-width:","){margin:0px !important;align-content:flex-start;}}@keyframes anvil{0%{transform:translateY(0px);opacity:0;box-shadow:0 0 0 rgba(241,241,241,0);}1%{transform:translateY(10px);opacity:0;box-shadow:0 0 0 rgba(241,241,241,0);}100%{transform:=translateY(0px);opacity:1;box-shadow:0 0 500px rgba(241,241,241,0);}}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.lg);var PopHover=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__PopHover",componentId:"sc-1epqfzr-12"})(["display:grid;height:100% !important;grid-template-columns:3fr 1fr;padding:0 !important;margin:0 !important;@media (max-width:","){grid-template-columns:unset !important;height:auto !important;}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.lg);var Caption=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"how__Caption",componentId:"sc-1epqfzr-13"})(["margin:0;padding:20px 0 40px 15px;display:flex;flex-direction:column;justify-content:space-between;background:",";@media (max-width:","){padding:10px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].color.white,_style_theme__WEBPACK_IMPORTED_MODULE_8__["default"].screen.md);

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Meta */ "./src/components/Meta/index.js");
/* harmony import */ var components_Landing_Masthead__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Landing/Masthead */ "./src/components/Landing/Masthead/index.js");
/* harmony import */ var components_Channelling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Channelling */ "./src/components/Channelling/index.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var components_Landing_Project__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/Landing/Project */ "./src/components/Landing/Project/index.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
var Landingpage=function Landingpage(_ref){var data=_ref.data,location=_ref.location;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_5__["default"],{location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Meta__WEBPACK_IMPORTED_MODULE_2__["default"],{site:lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data,'site.meta')}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Landing_Masthead__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Container"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Landing_Project__WEBPACK_IMPORTED_MODULE_6__["default"],{items:data})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Channelling__WEBPACK_IMPORTED_MODULE_4__["default"],null));};/* harmony default export */ __webpack_exports__["default"] = (Landingpage);var pageQuery="192225336";

/***/ }),

/***/ "./src/pages/project/thur_soc/components/calendar/index.js":
/*!*****************************************************************!*\
  !*** ./src/pages/project/thur_soc/components/calendar/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Calendar; });
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-day-picker */ "./node_modules/react-day-picker/build/index.js");
/* harmony import */ var react_day_picker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_day_picker__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7__);
var Calendar=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Calendar,_React$Component);function Calendar(props){var _this;_this=_React$Component.call(this,props)||this;_this.state={selectedDay:null,time:null};_this.handleChange=_this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));_this.handleDayClick=_this.handleDayClick.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));return _this;}var _proto=Calendar.prototype;_proto.handleDayClick=function handleDayClick(day,_ref){var selected=_ref.selected;this.setState({selectedDay:selected?undefined:day});};_proto.handleChange=function handleChange(event){var _this$setState;var target=event.target;var value=target.value;var name=target.name;this.setState((_this$setState={},_this$setState[name]=value,_this$setState));this.props.parentCallback(this.state);event.preventDefault();};_proto.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"date",value:this.state.selectedDay?this.state.selectedDay.toLocaleDateString():'Please select a day'}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_day_picker__WEBPACK_IMPORTED_MODULE_6___default.a,{selectedDays:this.state.selectedDay,onDayClick:this.handleDayClick}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_5__["Grid2_3"],null,"Start at",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select",{name:"time",onBlur:this.handleChange,value:this.state.time},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"13:00"},"12:30"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"13:00"},"13:00"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"13:30"},"13:30"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"14:00"},"14:00"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"14:30"},"14:30"))));};return Calendar;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);var InputItem=styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({displayName:"calendar__InputItem",componentId:"sc-17nzs1q-0"})(["position:relative;background:",";max-width:300px;","{background:",";padding-left:20px;border-top:1px solid "," !important;border-bottom:1px solid "," !important;align-items:center;}select{height:30px;}input{border-bottom:1px solid ",";",";color:",";padding:0 10px;::placeholder{",";}height:30px;}input:focus{border-bottom:1px solid ",";}.DayPicker-Caption{",";}.DayPicker-Weekdays,.DayPicker-Body{",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.white,_style_global__WEBPACK_IMPORTED_MODULE_5__["Grid2_3"],_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S100,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S300,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S500,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S500,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].color.primary.S400,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_4__["default"].fontSize.xs);

/***/ }),

/***/ "./src/pages/project/thur_soc/components/collapse/collapse.js":
/*!********************************************************************!*\
  !*** ./src/pages/project/thur_soc/components/collapse/collapse.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-collapsible */ "./node_modules/react-collapsible/dist/Collapsible.js");
/* harmony import */ var react_collapsible__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_collapsible__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
var Collapse=function Collapse(_ref){var title=_ref.title,children=_ref.children;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Wrapper,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_collapsible__WEBPACK_IMPORTED_MODULE_1___default.a,{className:"faq",openedClassName:"faq active",triggerClassName:"faq-title",triggerOpenedClassName:"faq-title active",triggerTagName:"button",contentInnerClassName:"faq-content",trigger:title,transitionTime:300,easing:"ease-out"},children,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SpaceSpan,null)));};/* harmony default export */ __webpack_exports__["default"] = (Collapse);var Wrapper=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"collapse__Wrapper",componentId:"sc-129a6gz-0"})(["&:hover{cursor:pointer;}.faq{border-bottom:1px solid ",";}.faq-title{",";color:",";border:none;background:none;outline:none;width:100%;text-align:left;cursor:pointer;font-weight:bold;padding:12px 72px 12px 0;position:relative;&::after{content:'';display:block;width:10px;height:10px;border-left:2px solid  ",";border-bottom:2px solid  ",";position:absolute;top:15px;right:24px;transform:rotate(-45deg);transition:transform 0.3s ease-in-out;}&.active{&::after{transform:rotate(135deg);}}}.faq-content{padding:0;line-height:26px;",";color:",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_3__["default"].color.grayscale.S1000);var SpaceSpan=styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({displayName:"collapse__SpaceSpan",componentId:"sc-129a6gz-1"})(["height:15px;width:100%;"]);

/***/ }),

/***/ "./src/pages/project/thur_soc/components/collapse/index.js":
/*!*****************************************************************!*\
  !*** ./src/pages/project/thur_soc/components/collapse/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./collapse */ "./src/pages/project/thur_soc/components/collapse/collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _collapse__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./src/pages/project/thur_soc/components/poster/index.js":
/*!***************************************************************!*\
  !*** ./src/pages/project/thur_soc/components/poster/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var _src_classroom_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/classroom.jpg */ "./src/pages/project/thur_soc/components/poster/src/classroom.jpg");
/* harmony import */ var _src_classroom_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_src_classroom_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _src_PicTopLeft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./src/PicTopLeft */ "./src/pages/project/thur_soc/components/poster/src/PicTopLeft.js");
/* harmony import */ var _src_PicTopRight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./src/PicTopRight */ "./src/pages/project/thur_soc/components/poster/src/PicTopRight.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! qrcode.react */ "./node_modules/qrcode.react/lib/index.js");
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-day-picker/lib/style.css */ "./node_modules/react-day-picker/lib/style.css");
/* harmony import */ var react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_day_picker_lib_style_css__WEBPACK_IMPORTED_MODULE_7__);
var Poster=function Poster(_ref){var title=_ref.title,subTitle=_ref.subTitle,speakerName=_ref.speakerName,speakerInfo=_ref.speakerInfo,hostName=_ref.hostName,hostInfo=_ref.hostInfo,commentatorName=_ref.commentatorName,commentatorInfo=_ref.commentatorInfo,abtTalk=_ref.abtTalk,abtSpeaker=_ref.abtSpeaker,date=_ref.date,time=_ref.time,place=_ref.place,organizer=_ref.organizer,coOrganizer=_ref.coOrganizer,url=_ref.url,pictures=_ref.pictures;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Frame,null,pictures?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BookCover,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:pictures,alt:"Error, please upload again."})):"",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Canvas,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoShapeL,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_PicTopLeft__WEBPACK_IMPORTED_MODULE_4__["default"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoShapeR,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_PicTopRight__WEBPACK_IMPORTED_MODULE_5__["default"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoTxtR,null,"Thursday Sociology"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoTxtL,null,"Sociology Talks ",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"Department of Sociology",/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"National Taiwan University"),pictures?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DecoBg,null):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img",{src:_src_classroom_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,alt:"top of poster"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box,{className:"first"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Title"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title,null,title?title:"請輸入演講標題"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubTitle,null,subTitle?subTitle:"請輸入演講副標題")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_2__["Grid5_4"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Speaker"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H1,null,speakerName?speakerName:"講者 名稱"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3,null,speakerInfo?speakerInfo:"講者任職單位 職稱"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),hostName?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Host"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2,null,hostName),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3,null,hostInfo)):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Host"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2,null,"\u4E3B\u6301\u4EBA \u59D3\u540D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3,null,"\u4E3B\u6301\u4EBA\u4EFB\u8077\u55AE\u4F4D \u8077\u7A31")),commentatorName?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Commentator"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2,null,commentatorName),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3,null,commentatorInfo)):""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Talk Info"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Abt_P,null,abtTalk?abtTalk:"請填入內容以取代此示例文字：代謝運動源於1950年代，由一批年輕的日本建築師及設計師聯手推行的建築設計運動，黑川紀章設計的中銀膠囊塔是其中一個代表作品。其理念是建築物由一些可拆換的模塊組成，透過逐漸拆換模塊在多年後也許整棟建築都由新模塊組成，而達成一種動態更新。"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Speaker Info"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Abt_P,null,abtSpeaker?abtSpeaker:"Please complete the form to replace this desciption: Generative design is an iterative design process that involves a program that will generate a certain number of outputs that meet certain constraints, and a designer that will fine tune the feasible region by selecting specific output or changing input values, ranges and distribution. The designer doesn't need to be a human, it can be a test program in a testing environment or an artificial intelligence, for example a generative adversarial network. The designer learns to refine the program (usually involving algorithms) with each iteration as their design goals become better defined over time."))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_2__["Grid5_4"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Time & Place"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_2__["Grid3_3_1"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time,null,time?time:"13:00",date?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date,null,date.toLocaleDateString()):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date,null,"Feb 30")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time,null,place?place:"Room 800"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Box,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Grid_Org,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Org,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Organizer"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3,null,organizer?organizer:"國立臺灣大學社會學系"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H3,null,coOrganizer?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"Co-organizer"),coOrganizer):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment,null))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Org,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Caption,null,"More"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(QR,null,url?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_6___default.a,{value:url}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(qrcode_react__WEBPACK_IMPORTED_MODULE_6___default.a,{value:"https://www.google.com"}))))))));};/* harmony default export */ __webpack_exports__["default"] = (Poster);var posterTheme={font:{display:"'Noto Sans TC', sans-serif",primary:"'Pragati Narrow', sans-serif",secondary:"'Kameron', serif"},fontSize:{xxxs:'font-size: 0.4rem !important; line-height: 0.75rem',xxs:'font-size: 0.7rem !important; line-height: 1.1rem',xs:'font-size: 0.8rem !important; line-height: 1.2rem',sm:'font-size: 0.9rem !important; line-height: 1.3rem',base:'font-size: 1rem !important; line-height: 1.9rem',lg:'font-size: 1.2rem !important; line-height: 2.0rem',xl:'font-size: 2rem !important; line-height: 3.2rem',xxl:'font-size: 3.3rem !important; line-height: 4.6rem',xxxl:'font-size: 5rem !important; line-height: 6.5rem'},color:{white:'#FFFFFF',black:'#000000',primary:{S100:'#E3FCFF',S200:'#C2ECF9',S300:'#92CEEF',S400:'#2A92DD',S500:'#0064C1',S600:'#09468E',S700:'#042B66',S800:'#012249',S900:'#000928',S1000:'#000212',S100D:'#F7FAFA',S200D:'#F2F7F8',S300D:'#EAEFF2',S400D:'#D2DCE4',S500D:'#B9C4CD',S600D:'#78818C',S700D:'#565C65',S800D:'#353D46',S900D:'#181A22',S1000D:'#0A0B10'},secondary:{S100:'#E4FFE3',S200:'#C2F9CB',S300:'#92EFAC',S400:'#2ADD87',S500:'#00C17C',S600:'#098E5E',S700:'#04664E',S800:'#01493B',S900:'#002820',S1000:'#001211',S100D:'#F8FFF8',S200D:'#F1FBF3',S300D:'#E4F3E8',S400D:'#D9E8E1',S500D:'#B1C2BC',S600D:'#899892',S700D:'#5A6865',S800D:'#3D4745',S900D:'#232928',S1000D:'#0D1111'},supplementary:{S100:'#FFFBE9',S200:'#FFF4BB',S300:'#FFEA92',S400:'#FFDF5A',S500:'#FFD00D',S600:'#FFBC00',S700:'#F29B00',S800:'#ED8100',S900:'#D16800',S1000:'#BB4F00'},grayscale:{S100:'#FAFAFA',S200:'#F5F5F5',S300:'#EEEEEE',S400:'#E0E0E0',S500:'#BDBDBD',S600:'#9E9E9E',S700:'#757575',S800:'#616161',S900:'#424242',S1000:'#212121'},decorative:{Orange:'#FE8B25',SkyBlue:'#DAEEFE',Yellow:'#FEF37C',Green:'#3D7551',Prune:'#742723'}},screen:{xs:'575px',sm:'767px',md:'991px',lg:'1199px',xl:'2000px',xxl:'3000px'}};var Frame=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Frame",componentId:"sc-1eyvpe-0"})(["position:relative;height:100%;width:100%;top:0;left:0;@media only screen and (max-width:","){min-height:500px;}@media print{background:",";width:100%;height:100%;position:absolute;top:0px;bottom:0px;margin:auto;margin-top:0px !important;}"],posterTheme.screen.md,posterTheme.color.primary.S100D);var Canvas=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Canvas",componentId:"sc-1eyvpe-1"})(["position:relative;background:",";overflow:hidden;height:20%;width:100%;img{float:right;right:0;width:70%;}@media only screen and (min-width:","){height:25%;}@media print{height:30%;}"],posterTheme.color.primary.S1000,posterTheme.screen.xxl);var Info=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Info",componentId:"sc-1eyvpe-2"})(["position:absolute;top:20%;bottom:0;height:auto;width:100%;z-index:10;margin:0%;padding:10px;background:",";font-family:",";color:",";.first{border-top:none !important;margin-top:0px !important;margin-bottom:10px !important;}@media only screen and (max-width:","){min-height:900px;}@media only screen and (max-width:","){min-height:700px;padding:0px 10px;}@media only screen and (max-width:","){padding:5px 10px;}@media only screen and (min-width:","){top:25%;}@media print{top:30%;padding:40px;height:100%;.first{margin-bottom:20px !important;}}@media print and (max-width:30cm){padding:20px;}"],posterTheme.color.primary.S100D,posterTheme.font.display,posterTheme.color.primary.S1000,posterTheme.screen.md,posterTheme.screen.lg,posterTheme.screen.xl,posterTheme.screen.xxl);var Box=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Box",componentId:"sc-1eyvpe-3"})(["position:relative;padding:5px 10px;margin-top:10px;border-top:1px solid #ccc;@media only screen and (max-width:","){margin-top:5px;padding:3px 6px;}@media print{position:relative;padding:20px;margin-top:10px;}@media print and (max-width:30cm){padding:8px;margin-top:4px;}"],posterTheme.screen.xl);var DecoTheme={all:'position: absolute;top: 0;bottom: 0;height: 100%;',left:'left: 0;@keyframes L {0%{width: 30%;}50%{width: 55%;}100% {width:30%;}};',right:'right: 0;@keyframes R {0%{width: 70%;}50%{width: 45%;}100% {width:70%;}};',colorA:'@keyframes TxtSvgA {0%{color:#003108;}12.5%{color:#303030;}25%{color:#360D00;}37.5%{color:#001E4A;}50%{color:#3A004E;}62.5%{color:#003108;}75%{color:#281600;}87.5%{color:#272625;}100%{color:#003108;}};@keyframes BgA {0%{background-color:#003108;}12.5%{background-color:#303030;}25%{background-color:#360D00;}37.5%{background-color:#001E4A;}50%{background-color:#3A004E;}62.5% {background-color:#003108;}75%{background-color:#281600;}87.5%{background-color:#272625;}100%{background-color:#003108;}};',colorB:'@keyframes TxtSvgB {0%{color:#6DAA77;}12.5%{color:#A7A7A7;}25%{color:#9C6756;}37.5%{color:#2B578B;}50%{color:#9675A2;}62.5%{color:#318B70;}75%{color:#AFDB77}87.5%{color:#DBBF77;}100%{color:#6DAA77;}};',colorC:'@keyframes TxtSvgC {0%{color:#ECDA9A;}12.5%{color:#F59D89;}25%{color:#EA6D51;}37.5%{color:#E6F4AE;}50%{color:#FFCFE3;}62.5% {color:#ECDA9A;}75%{color:#A3D3CB}87.5%{color:#C5D2A9;}100%{color:#E1CE8B;}};@keyframes BgC {0%{background-color:#ECDA9A;}12.5%{background-color:#F59D89;}25%{background-color:#EA6D51;}37.5%{background-color:#E6F4AE;}50%{background-color:#FFCFE3;}62.5% {background-color:#ECDA9A;}75%{background-color:#A3D3CB}87.5%{background-color:#C5D2A9;}100%{background-color:#E1CE8B;}};'};var DecoTxtL=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__DecoTxtL",componentId:"sc-1eyvpe-4"})([""," "," animation:L 8s infinite;z-index:4;font-family:",";color:",";font-size:0.5rem;line-height:0.6rem;text-align:right;padding:5px;@media print{top:10px;",";}"],DecoTheme.all,DecoTheme.left,posterTheme.font.secondary,posterTheme.color.white,posterTheme.fontSize.base);var DecoShapeL=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__DecoShapeL",componentId:"sc-1eyvpe-5"})([""," "," "," "," animation:L 8s infinite,TxtSvgC 6s infinite,BgA 6s infinite;z-index:2;color:",";"],DecoTheme.all,DecoTheme.left,DecoTheme.colorA,DecoTheme.colorC,posterTheme.color.grayscale.S600);var DecoTxtR=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__DecoTxtR",componentId:"sc-1eyvpe-6"})([""," "," "," animation:R 8s infinite,TxtSvgA 6s infinite;z-index:3;font-family:",";color:",";font-size:30px;line-height:20px;padding:5px;@media print{font-size:140px;line-height:100px;}@media print and (max-width:30cm){font-size:80px;line-height:60px;}"],DecoTheme.all,DecoTheme.right,DecoTheme.colorA,posterTheme.font.secondary,posterTheme.color.primary.S800);var DecoShapeR=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__DecoShapeR",componentId:"sc-1eyvpe-7"})([""," "," color:white;opacity:0.5;animation:R 8s infinite;z-index:2;"],DecoTheme.all,DecoTheme.right);var DecoBg=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__DecoBg",componentId:"sc-1eyvpe-8"})(["width:100%;height:1000px;",";animation:BgC 6s infinite;"],DecoTheme.colorC);var BookCover=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__BookCover",componentId:"sc-1eyvpe-9"})(["position:absolute;bottom:80%;left:56.5%;z-index:12;width:320px;height:auto;max-height:100px;img{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);border:1px solid white;max-height:20vh;}@media only screen and (max-width:","){bottom:40%;}@media only screen and (max-width:","){bottom:80%;}@media print{height:auto;}@media print and (max-width:30cm){min-}"],posterTheme.screen.lg,posterTheme.screen.xl);var Caption=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Caption",componentId:"sc-1eyvpe-10"})(["postion:relative;width:auto;left:0;right:0;margin:15px 0 0 0;font-family:",";",";",";animation:TxtSvgB 6s infinite;@media only screen and (max-width:","){",";margin:5px 0 0 0;}@media print{margin:20px 0px 10px 0;",";}@media print and (max-width:30cm){",";margin:10px 0px 4px 0;}"],posterTheme.font.secondary,posterTheme.fontSize.xxs,DecoTheme.colorB,posterTheme.screen.xl,posterTheme.fontSize.xxxs,posterTheme.fontSize.xs,posterTheme.fontSize.xxs);var Title=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Title",componentId:"sc-1eyvpe-11"})(["@media only screen and (max-width:","){font-size:1.8rem !important;line-height:2.7rem;}@media only screen and (min-width:","){",";}@media print{",";}@media print and (max-width:30cm){",";}"],posterTheme.screen.xl,posterTheme.screen.xl,posterTheme.fontSize.xxl,posterTheme.fontSize.xxxl,posterTheme.fontSize.xxl);var SubTitle=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__SubTitle",componentId:"sc-1eyvpe-12"})(["",";@media print{",";margin:20px 0;}@media print and (max-width:30cm){",";margin:10px 0;}"],posterTheme.fontSize.lg,posterTheme.fontSize.xxl,posterTheme.fontSize.xl);var H1=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__H1",componentId:"sc-1eyvpe-13"})(["",";@media only screen and (max-width:","){font-size:1.4rem !important;line-height:2.0rem;}@media only screen and (max-width:","){font-size:1rem !important;line-height:1.5rem;}@media print{font-size:4rem !important;line-height:5rem;}@media print and (max-width:30cm){",";}"],posterTheme.fontSize.xl,posterTheme.screen.xl,posterTheme.screen.lg,posterTheme.fontSize.xl);var H2=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__H2",componentId:"sc-1eyvpe-14"})(["@media only screen and (min-width:","){",";}@media only screen and (max-width:","){",";}@media print{",";}@media print and (max-width:30cm){",";}"],posterTheme.screen.xl,posterTheme.fontSize.lg,posterTheme.screen.lg,posterTheme.fontSize.sm,posterTheme.fontSize.xxl,posterTheme.fontSize.lg);var H3=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__H3",componentId:"sc-1eyvpe-15"})(["",";@media only screen and (max-width:","){",";}@media only screen and (max-width:","){",";}@media print{",";}@media print and (max-width:30cm){",";}"],posterTheme.fontSize.sm,posterTheme.screen.xl,posterTheme.fontSize.xs,posterTheme.screen.lg,posterTheme.fontSize.xxs,posterTheme.fontSize.xl,posterTheme.fontSize.base);var Abt_P=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Abt_P",componentId:"sc-1eyvpe-16"})(["@media only screen and (max-width:","){",";}@media only screen and (min-width:","){",";}@media print{",";}@media print and (max-width:30cm){",";}"],posterTheme.screen.xl,posterTheme.fontSize.xxxs,posterTheme.screen.xl,posterTheme.fontSize.xxs,posterTheme.fontSize.lg,posterTheme.fontSize.sm);var Date=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({displayName:"poster__Date",componentId:"sc-1eyvpe-17"})(["margin-left:15px;@media print{margin-left:20px;}"]);var Time=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Time",componentId:"sc-1eyvpe-18"})(["",";font-family:",";@media print{font-size:2.4rem !important;line-height:2rem;}@media print and (max-width:30cm){",";}"],posterTheme.fontSize.base,posterTheme.font.secondary,posterTheme.fontSize.lg);var Grid_Org=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Grid_Org",componentId:"sc-1eyvpe-19"})(["position:relative;display:grid;grid-template-columns:minmax(0,1fr) 50px;grid-gap:5px;@media only screen and (min-width:","){grid-template-columns:minmax(0,1fr) 100px;}@media print{grid-template-columns:minmax(0,1fr) 200px;grid-gap:10px;}@media print and (max-width:30cm){grid-template-columns:minmax(0,1fr) 100px;}"],posterTheme.screen.xl);var Org=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__Org",componentId:"sc-1eyvpe-20"})(["position:relative;min-width:0;"]);var QR=styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({displayName:"poster__QR",componentId:"sc-1eyvpe-21"})(["postion:relative;canvas{width:100%;height:100%;max-width:100%;max-height:50px;object-fit:contain;}@media only screen and (min-width:","){canvas{max-height:100px;}}@media print{canvas{max-height:none;}}@media print and (max-width:30cm){canvas{max-height:100px;}}"],posterTheme.screen.xl);

/***/ }),

/***/ "./src/pages/project/thur_soc/components/poster/src/PicTopLeft.js":
/*!************************************************************************!*\
  !*** ./src/pages/project/thur_soc/components/poster/src/PicTopLeft.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var PicTopLeft=function PicTopLeft(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{focusable:"false",width:"100%",height:"100%",viewBox:"0 0 761.8 478.2",preserveAspectRatio:"none",fill:"currentColor",x:"0px",y:"0px"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M491.1,2c12.1,9.6,24.5,24,36.9,42.8c11.7,17.7,23.3,39.5,34.7,64.6c10.5,23.3,20.8,49.6,30.5,78.3 c18.9,56.1,34.1,113.3,45.6,171.4c-1.5-6.8-3-13.6-4.7-20.6c-6.6-27.7-14.5-55.9-23.4-83.7c-9.4-29.3-19.8-57.6-31-84.2 c-11.1-26.7-23.7-52.7-37.8-78C527.7,67.4,513,45.4,498,27.4c-8-9.8-16.7-18.9-26.1-27.4h-43.1c1.9,1,3.7,2.1,5.6,3.3 c14.6,9.1,29.4,22.7,44,40.3c14,16.8,27.9,37.5,41.3,61.4c13.6,24.4,25.8,49.6,36.5,75.3c3.3,7.9,6.6,15.9,9.7,24.1 c-6.5-15.1-13.4-29.9-20.6-44.2c-13.1-26.2-27.9-51.5-44.3-75.8c-16.6-24.2-33.9-45.3-51.5-62.5c-7.9-7.8-16.3-15.2-25.1-22H0 c32.4,0,64.7,3.2,96.4,9.7c30.8,6.3,60.8,15.6,89.7,27.9c28.4,12,55.6,26.8,81.2,44.1c25.4,17.2,49.1,36.7,70.8,58.4 c21.7,21.7,41.2,45.4,58.4,70.8c17.3,25.6,32,52.8,44.1,81.2c12.2,28.9,21.6,59,27.9,89.7c6.5,31.7,9.7,64,9.7,96.4h197.5 c0-14.9-1.5-33.8-4.3-56.1s-7-46.9-12.3-73.1c-5.5-27.4-12-55.3-19.4-83c-7.9-29.7-16.5-58.4-25.7-85.4 c-10-29.2-20.5-56.2-31.3-80.2c-11.8-26.2-24-49-36.3-67.6c-7.5-11.6-16-22.6-25.4-32.8h-32.5C489.3,0.7,490.2,1.3,491.1,2z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M547.9,0.7c9.8,10.2,19.8,25.5,29.8,45.4c9.4,18.6,18.8,41.5,27.9,67.9c8.4,24.2,16.7,51.5,24.5,81.2 c13.7,51.7,26.4,111.1,35.6,167.2c8.2,49.5,13,92.8,13,115.8h18.3c0-11.8-1.2-28.8-3.5-49.1c-2.3-20.5-5.7-44.7-9.8-69.7 c-9.3-56.7-22.1-116.7-36-168.9c-8-30.1-16.4-57.8-25-82.4c-9.4-27.1-19.1-50.7-28.9-70.1c-7.5-15-15.2-27.7-22.9-37.9h-24 L547.9,0.7z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M627.8,47.8c7,19.5,14.1,43.5,21.1,71.1c6.3,25,12.5,53.3,18.5,84c10.1,52.1,19.6,112,26.8,168.7c6,47.9,9.8,88.7,9.8,106.7 h14.8c0-36.1-14.3-162.4-36.8-278.1c-12.9-66-26.4-119-40.2-157.3c-6.2-17.3-12.6-31.7-18.9-42.8h-17.3 C612.8,10.9,620.3,27,627.8,47.8z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M678.1,49.8c9,39,17.9,93.2,26.5,161C719.8,331,729,455.5,729,478.2h11.2c0-22.9-9.3-148.1-24.5-268.8 c-8.6-68.2-17.6-122.8-26.7-162.1c-4.5-19.6-9-35.4-13.6-47.3h-12.1C668.2,11.6,673.2,28.3,678.1,49.8z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M722,4c2.5,13.6,5,32.7,7.5,56.8c4.3,41.1,8.6,96.9,12.8,165.8c7.2,118.7,11.8,240,11.8,251.6h7.7 c0-12.3-4.8-138.1-12.2-259.7c-4.3-70.5-8.8-126.7-13.3-167.2c-2.4-21.7-4.8-38.9-7.2-51.3h-7.8C721.5,1.3,721.7,2.6,722,4z"}));};/* harmony default export */ __webpack_exports__["default"] = (PicTopLeft);

/***/ }),

/***/ "./src/pages/project/thur_soc/components/poster/src/PicTopRight.js":
/*!*************************************************************************!*\
  !*** ./src/pages/project/thur_soc/components/poster/src/PicTopRight.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var PicTopRight=function PicTopRight(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg",{focusable:"false",width:"100%",height:"100%",viewBox:"0 0 617.87 478.18",preserveAspectRatio:"none",fill:"currentColor",x:"0px",y:"0px"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M388.8,11.1c-21.7,13-42.1,28.1-60.8,45.1c-20.3,18.4-39,38.6-55.8,60.3c-18,23.3-34.1,48-48.1,73.9 c-14.9,27.6-27.5,56.4-37.8,86c-10.8,31.4-19.1,63.7-24.6,96.4c-5.9,34.8-8.8,70-8.8,105.3h7.3c0-34.9,2.9-69.7,8.7-104.1 c5.5-32.4,13.6-64.2,24.4-95.2c10.1-29.3,22.6-57.7,37.3-84.9c13.8-25.6,29.7-50,47.5-72.9C321.9,64.7,373.9,22.8,426.6,0h-17.3 C402.4,3.4,395.6,7.1,388.8,11.1z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M425,11.8c-23.4,12.9-45.4,28.1-65.8,45.4c-21.6,18.3-41.6,38.6-59.5,60.5c-19,23.2-36,47.9-50.8,74 c-15.6,27.5-28.8,56.2-39.5,85.9c-11.3,31.2-19.8,63.3-25.6,96c-6.1,34.5-9.1,69.5-9.1,104.5h6.4c0-34.7,3-69.3,9-103.4 c5.7-32.3,14.2-64.1,25.3-95c10.6-29.3,23.6-57.7,39-84.9c14.6-25.8,31.4-50.2,50.2-73.1c17.8-21.6,37.4-41.6,58.8-59.6 c20-17,41.7-32,64.6-44.7c12-6.6,24.3-12.4,37-17.5h-16.4C440.7,3.6,432.8,7.5,425,11.8z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M352.6,10.5c-20,13.1-38.7,28.1-55.9,44.9c-19,18.5-36.4,38.6-52.1,60.1c-17.1,23.4-32.3,48.1-45.4,73.8 c-14.2,27.7-26.2,56.4-36,86c-21.5,65.5-32.4,134-32.3,202.9h8.2c-0.2-68,10.6-135.7,31.8-200.3c9.6-29.2,21.5-57.6,35.5-84.9 c13-25.4,28-49.7,44.8-72.7c15.4-21.1,32.5-40.8,51.2-59c16.7-16.4,35-31.1,54.6-43.9c9.9-6.5,20.3-12.3,31-17.4h-18 C364.3,3.2,358.5,6.7,352.6,10.5z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M316.4,9.9c-35.2,25.2-69.5,61.2-99.2,104.5c-16.1,23.5-30.4,48.1-42.8,73.7c-13.5,27.8-25,56.6-34.3,86.1 c-20.7,66-31.2,134.8-31,204h9.2c-0.1-68.3,10.2-136.1,30.6-201.3c9.2-29.1,20.4-57.4,33.7-84.9c12.2-25.2,26.3-49.4,42.1-72.5 c29.1-42.4,62.6-77.7,97-102.2c8.9-6.4,18.1-12.1,27.7-17.3h-18.3C326.3,3,321.4,6.3,316.4,9.9z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M533.2,14c-28.3,12.7-55.2,28.1-80.5,46.1c-25.5,18.1-49.1,38.6-70.7,61.2c-21.9,22.9-41.5,47.8-58.8,74.3 c-35.6,54.9-60.4,116.1-73,180.4c-6.6,33.7-9.9,67.9-9.9,102.2h3.7c0-34.1,3.3-68,9.9-101.4c12.6-63.8,37.2-124.5,72.5-179.1 c17.1-26.4,36.6-51.1,58.3-73.8c21.4-22.4,44.9-42.8,70.2-60.7c25.1-17.8,51.8-33.2,79.9-45.8C549.4,10.8,564.5,5,579.8,0h-11.4 C556.5,4.2,544.7,8.8,533.2,14z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M461.1,12.6c-25,12.8-48.7,28.1-70.7,45.6c-22.9,18.3-44.1,38.6-63.3,60.8c-20,23.1-37.9,47.9-53.5,74.1 c-16.2,27.3-30,56-41.2,85.8c-11.7,31-20.5,63-26.5,95.6c-6.3,34.2-9.4,68.9-9.4,103.7h5.5c0-34.5,3.1-68.9,9.3-102.8 c5.9-32.3,14.7-64,26.2-94.7c11.1-29.4,24.7-57.8,40.8-84.9c15.4-26,33.1-50.5,52.9-73.3c19-21.9,39.9-42,62.5-60 c21.7-17.3,45.1-32.4,69.8-45c12.9-6.6,26.2-12.4,39.8-17.5h-15.1C479.1,3.8,470.1,8,461.1,12.6z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M569.2,14.8C382.9,93.3,261.8,276,262,478.2h2.8c0-33.9,3.5-67.6,10.2-100.8c13.1-64,38.6-124.7,75.2-178.9 c54.3-80.4,130.7-143.4,220.1-181.2C585.8,10.7,601.7,5,617.9,0h-9.1C595.4,4.4,582.2,9.3,569.2,14.8z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M497.1,13.3c-26.7,12.7-52,28.1-75.6,45.9c-24.2,18.2-46.6,38.6-67,61c-20.9,23-39.7,47.8-56.1,74.2 c-16.9,27.2-31.3,55.8-42.9,85.6c-12.1,30.8-21.3,62.7-27.5,95.2c-6.4,34-9.7,68.4-9.7,103h4.6c0-34.3,3.2-68.4,9.6-102.1 c6.1-32.2,15.2-63.9,27.2-94.4c11.6-29.5,25.8-58,42.6-84.9c16.3-26.2,34.9-50.8,55.6-73.6c20.2-22.2,42.4-42.4,66.4-60.4 c23.4-17.6,48.5-32.8,74.9-45.4c13.8-6.6,28-12.4,42.5-17.4h-13.4C517.7,4,507.4,8.4,497.1,13.3z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M280.1,9.3c-31.8,25.3-63,61.3-90.4,104c-15,23.6-28.4,48.1-40.1,73.5c-12.8,27.9-23.7,56.7-32.5,86.2 c-19.9,66.6-29.9,135.7-29.8,205.2h10.1c-0.1-68.5,9.8-136.6,29.4-202.2c8.7-29,19.4-57.4,32-84.9c11.4-25,24.6-49.2,39.4-72.3 c26.8-41.8,57.3-76.9,88.2-101.5c7.8-6.2,15.9-12,24.4-17.2h-18.4C288.4,2.9,284.3,6,280.1,9.3z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M243.8,8.8c-14.8,13.6-28.5,28.3-40.9,44.1c-14.9,18.8-28.5,38.7-40.7,59.3c-14,23.6-26.5,48.2-37.4,73.4 c-12.1,28.1-22.4,56.9-30.8,86.3C75,339,65.4,408.4,65.5,478.2h11c-0.1-68.7,9.4-137.1,28.1-203.2c8.2-28.9,18.4-57.3,30.3-84.9 c10.7-24.8,23-48.9,36.7-72.1c12-20.2,25.3-39.7,39.9-58.1c12-15.3,25.3-29.6,39.6-42.8c6.7-6.1,13.7-11.8,21-17H254 C250.6,2.8,247.2,5.7,243.8,8.8z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M207.4,8.4c-12.9,13.7-24.9,28.4-35.8,43.8c-13.5,18.9-25.8,38.7-36.9,59c-13,23.7-24.5,48.2-34.6,73.2 c-11.4,28.2-21.1,57-29,86.3c-18.2,67.6-27.4,137.4-27.3,207.4h11.9c-0.1-69,9-137.7,26.9-204.3c7.8-28.8,17.3-57.2,28.5-84.9 c9.9-24.6,21.3-48.7,34.1-72c10.9-20,23-39.3,36.1-57.8c10.6-15,22.2-29.2,34.8-42.5c5.5-5.8,11.3-11.4,17.4-16.6h-17.7 C212.6,3,209.8,5.9,207.4,8.4z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M170.8,8.2c-11,13.9-21.2,28.4-30.7,43.4c-11.6,18.3-22.7,38-33.1,58.7c-11.9,23.8-22.5,48.2-31.9,73.1 c-10.7,28.3-19.8,57.1-27.2,86.4c-17.4,68.1-26.1,138.2-26.1,208.5h12.8c0-68.5,8.4-136.7,25.1-203.1C73.3,221.3,92.5,169,117,119.2 c10-20.3,20.8-39.7,32.1-57.7c9.2-14.8,19.1-29.1,29.8-42.8c5.5-7,10.9-13.3,15.9-18.7h-17.2C175.4,2.6,173.1,5.3,170.8,8.2z"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path",{d:"M134.3,8.1C125.6,21.6,117,36,108.8,51c-10.3,18.8-20.2,38.4-29.2,58.4C56.3,160.6,38,213.9,24.9,268.6 C18.3,296,12.9,324,8.9,351.9V0H4.8v385.4C1.6,416.2,0,447.2,0,478.2h13.7c0-125.1,26.6-248.7,78.1-362.6 c15.5-34.5,33.5-67.8,53.8-99.6c3.9-6,7.4-11.4,10.6-15.9h-16.6C137.9,2.5,136.1,5.2,134.3,8.1z"}));};/* harmony default export */ __webpack_exports__["default"] = (PicTopRight);

/***/ }),

/***/ "./src/pages/project/thur_soc/components/poster/src/classroom.jpg":
/*!************************************************************************!*\
  !*** ./src/pages/project/thur_soc/components/poster/src/classroom.jpg ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/classroom-8c756f5b9e2980739990a67869082c92.jpg";

/***/ }),

/***/ "./src/pages/project/thur_soc/index.js":
/*!*********************************************!*\
  !*** ./src/pages/project/thur_soc/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/gatsby/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Meta */ "./src/components/Meta/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var _components_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/collapse */ "./src/pages/project/thur_soc/components/collapse/index.js");
/* harmony import */ var _components_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/calendar */ "./src/pages/project/thur_soc/components/calendar/index.js");
/* harmony import */ var _components_poster__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/poster */ "./src/pages/project/thur_soc/components/poster/index.js");
//import ImageUploader from 'react-images-upload';
var Info=/*#__PURE__*/function(_React$Component){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Info,_React$Component);function Info(props){var _this;_this=_React$Component.call(this,props)||this;_this.handleCallback=function(childData){_this.setState({date:childData.selectedDay,time:childData.time});console.log("Calendar data is called:"+_this.state.date+_this.state.time);};_this.coverCallback=function(childData){_this.setState({pictures:childData.preview});console.log("Image data is called:"+_this.state.pictures);};_this.state={title:null,subTitle:null,speakerName:null,speakerInfo:null,hostName:null,hostInfo:null,commentatorName:null,commentatorInfo:null,abtTalk:null,abtSpeaker:null,date:null,time:null,place:null,organizer:null,coOrganizer:null,url:null,pictures:[]};_this.handleChange=_this.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));_this.handleSubmit=_this.handleSubmit.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));_this.coverCallback=_this.coverCallback.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this));return _this;}var _proto=Info.prototype;_proto.handleChange=function handleChange(event){var _this$setState;var target=event.target;var value=target.value;var name=target.name;this.setState((_this$setState={},_this$setState[name]=value,_this$setState));console.log(this.state);};_proto.handleSubmit=function handleSubmit(event){this.props.parentCallback(this.state);event.preventDefault();};_proto.onPrint=function onPrint(e){e.preventDefault();window.print();};_proto.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"],{site:lodash_get__WEBPACK_IMPORTED_MODULE_5___default()(data,'site.meta'),title:"\u9031\u56DB\u793E\u6703\u5B78\u6D77\u5831\u7522\u751F\u5668",desc:"\u9031\u56DB\u793E\u6703\u5B78\u7CFB\u5217\u8B1B\u5EA7\u6D77\u5831\u7522\u751F\u5668"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["H3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("b",null,"Poster Creator"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("br",null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("small",null,"Department of Sociology, NTU")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Form"],{onSubmit:this.handleSubmit},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputBox,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_collapse__WEBPACK_IMPORTED_MODULE_8__["default"],{title:"\u8B1B\u5EA7\u4E3B\u984C",key:"Topic",open:"true"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"title"},"\u6A19\u984C"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{id:"title",type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Title"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"subTitle"},"\u526F\u6A19\u984C"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{id:"subTitle",type:"text",name:"subTitle",value:this.state.subtitle,onChange:this.handleChange,placeholder:"Sub-title"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_collapse__WEBPACK_IMPORTED_MODULE_8__["default"],{title:"\u8B1B\u8005\u8207\u4E3B\u6301",key:"Speaker & Host"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"speaker"},"\u8B1B\u8005"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Grid2_3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"speakerName",value:this.state.speakerName,onChange:this.handleChange,placeholder:"Name"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"speakerInfo",value:this.state.speakerInfo,onChange:this.handleChange,placeholder:"Info"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"host"},"\u4E3B\u6301"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Grid2_3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"hostName",value:this.state.hostName,onChange:this.handleChange,placeholder:"Name"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"hostInfo",value:this.state.hostInfo,onChange:this.handleChange,"aria-label":"Host Info",placeholder:"Info"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_collapse__WEBPACK_IMPORTED_MODULE_8__["default"],{title:"\u8207\u8AC7\u4EBA",key:"Commentator"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"Commentator"},"\u8207\u8AC7\u4EBA"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Grid2_3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"commentatorName",value:this.state.commentatorName,onChange:this.handleChange,placeholder:"Name (Optional)"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"commentatorInfo",value:this.state.commentatorInfo,onChange:this.handleChange,"aria-label":"Commentator Info",placeholder:"Info (Optional)"})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_collapse__WEBPACK_IMPORTED_MODULE_8__["default"],{title:"\u95DC\u65BC",key:"About"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"abtTalk"},"\u8B1B\u5EA7\u4ECB\u7D39"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"abtTalk",value:this.state.abtTalk,onChange:this.handleChange,placeholder:"Desciption about the talk (Optional)"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"abtSpeaker"},"\u8B1B\u8005\u4ECB\u7D39"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"abtSpeaker",value:this.state.abtSpeaker,onChange:this.handleChange,placeholder:"Desciption about the speaker (Optional)"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_collapse__WEBPACK_IMPORTED_MODULE_8__["default"],{title:"\u6642\u9593\u8207\u5730\u9EDE",key:"Time & Place",overflowWhenOpen:"visible"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"time"},"\u6642\u9593"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Grid2_3"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_calendar__WEBPACK_IMPORTED_MODULE_9__["default"],{parentCallback:this.handleCallback}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"place"},"\u5730\u9EDE"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("select",{name:"place",onBlur:this.handleChange,value:this.state.place,placeholder:"Please select a place"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"Room 401"},"Room 401"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"Room 101"},"Room 101"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"Room 319"},"Room 319"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("option",{value:"Room 318B"},"Room 318B")))))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_collapse__WEBPACK_IMPORTED_MODULE_8__["default"],{title:"\u4E3B\u8FA6\u55AE\u4F4D",key:"Organizer"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"Org"},"\u4E3B\u8FA6\u55AE\u4F4D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"organizer",value:this.state.organizer,onChange:this.handleChange,placeholder:"Organizer"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"coOrg"},"\u5354\u8FA6\u55AE\u4F4D"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"text",name:"coOrganizer",value:this.state.coOrganizer,onChange:this.handleChange,placeholder:"Co-organizer (Optional)"}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_collapse__WEBPACK_IMPORTED_MODULE_8__["default"],{title:"\u66F8\u5C01\u4E0A\u50B3\u8207 QR Code",key:"Other"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"qr"},"QR Code"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"url",name:"url",value:this.state.url,onChange:this.handleChange,placeholder:"Please enter a URL (Optional)"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputItem,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"book"},"\u66F8\u5C01"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ImgUpload,{parentCallback:this.coverCallback})))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Button"],{Tertiary:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"submit",value:"Preview"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Button"],{TertiaryDark:true,onClick:this.onPrint},"Print")));};return Info;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);var ImgUpload=/*#__PURE__*/function(_React$Component2){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ImgUpload,_React$Component2);function ImgUpload(props){var _this2;_this2=_React$Component2.call(this,props)||this;_this2.state={preview:null};_this2.handleChange=_this2.handleChange.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2));return _this2;}var _proto2=ImgUpload.prototype;_proto2.handleChange=function handleChange(event){var target=event.target;var files=target.files;this.setState({preview:URL.createObjectURL(files[0])});this.props.parentCallback(this.state);event.preventDefault();console.log(this.state.preview);};_proto2.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label",{htmlFor:"upload-button"},this.state.preview?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img",{src:this.state.preview,alt:"dummy",width:"300",height:"300"}):""),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input",{type:"file",id:"upload-button",onChange:this.handleChange}));};return ImgUpload;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);var Generator=/*#__PURE__*/function(_React$Component3){Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Generator,_React$Component3);function Generator(props){var _this3;_this3=_React$Component3.call(this,props)||this;_this3.handleCallback=function(childData){_this3.setState({title:childData.title,subTitle:childData.subTitle,speakerName:childData.speakerName,speakerInfo:childData.speakerInfo,hostName:childData.hostName,hostInfo:childData.hostInfo,commentatorName:childData.commentatorName,commentatorInfo:childData.commentatorInfo,abtTalk:childData.abtTalk,abtSpeaker:childData.abtSpeaker,date:childData.date,time:childData.time,place:childData.place,organizer:childData.organizer,coOrganizer:childData.coOrganizer,url:childData.url,pictures:childData.pictures});};_this3.state={title:null,subTitle:null,speakerName:null,speakerInfo:null,hostName:null,hostInfo:null,commentatorName:null,commentatorInfo:null,abtTalk:null,abtSpeaker:null,date:null,time:null,place:null,organizer:null,coOrganizer:null,url:null,pictures:null};return _this3;}var _proto3=Generator.prototype;_proto3.render=function render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Grid,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Input,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Info,{parentCallback:this.handleCallback})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Output,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LifeView,{data:this.state})));};return Generator;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);var LifeView=function LifeView(_ref){var data=_ref.data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LifeViewBox,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_poster__WEBPACK_IMPORTED_MODULE_10__["default"],{title:data.title,subTitle:data.subTitle,speakerName:data.speakerName,speakerInfo:data.speakerInfo,hostName:data.hostName,hostInfo:data.hostInfo,commentatorName:data.commentatorName,commentatorInfo:data.commentatorInfo,abtTalk:data.abtTalk,abtSpeaker:data.abtSpeaker,date:data.date,time:data.time,place:data.place,organizer:data.organizer,coOrganizer:data.coOrganizer,url:data.url,pictures:data.pictures}));};/* harmony default export */ __webpack_exports__["default"] = (Generator);var Grid=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"thur_soc__Grid",componentId:"sc-1j6k1rl-0"})(["position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;background:",";@media print{background:",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.primary.S700D,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.white);var Input=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"thur_soc__Input",componentId:"sc-1j6k1rl-1"})(["position:fixed;top:0;bottom:0;left:0;width:50%;padding:50px;background:",";overflow:auto;@media (max-width:","){position:relative;width:100%;}@media print{display:none;width:0%;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.primary.S300D,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.md);var Output=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"thur_soc__Output",componentId:"sc-1j6k1rl-2"})(["position:absolute;top:0;bottom:0;right:0;width:50%;background:",";overflow:hidden;@media (max-width:","){position:relative;width:100%;height:auto;}@media print{width:100%;height:100%;position:absolute;top:0px;bottom:0px;margin:auto;margin-top:0px !important;border:1px solid;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.primary.S700D,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.md);var InputBox=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"thur_soc__InputBox",componentId:"sc-1j6k1rl-3"})(["margin-bottom:30px;"]);var InputItem=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"thur_soc__InputItem",componentId:"sc-1j6k1rl-4"})(["position:relative;margin-bottom:25px;display:grid;grid-template-columns:1fr 4fr;grid-gap:10px;label{color:",";}input{border-bottom:1px solid ",";",";color:",";padding:0 10px;::placeholder{",";}}input:focus{border-bottom:1px solid ",";}select{border:none;padding:0 10px;max-height:30px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.grayscale.S500,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.grayscale.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].color.primary.S400);var LifeViewBox=styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({displayName:"thur_soc__LifeViewBox",componentId:"sc-1j6k1rl-5"})(["position:absolute;top:0;bottom:0;right:0;left:0;margin:30px 50px;@media (max-width:","){position:relative;overflow:show;height:auto;margin:2% 3%;}@media only screen and (max-width:","){margin:3% 4%;}@media only screen and (max-width:","){margin:3% 4%;}@media only screen and (max-width:","){max-width:1200px;margin:3% 4%;}@media only screen and (min-width:","){max-width:1200px;margin:5% 10%;}@media print{width:100%;height:100%;position:absolute;top:0px;bottom:0px;margin:auto;margin-top:0px !important;border:1px solid;}"],_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.lg,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.xl,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.xxl,_style_theme__WEBPACK_IMPORTED_MODULE_6__["default"].screen.xxl);

/***/ }),

/***/ "./src/pages/updates.js":
/*!******************************!*\
  !*** ./src/pages/updates.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var components_Updates__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/Updates */ "./src/components/Updates/index.js");
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Meta */ "./src/components/Meta/index.js");
/* harmony default export */ __webpack_exports__["default"] = (function(_ref){var data=_ref.data,location=_ref.location;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"],{location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"],null),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"cv bg-dark"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col mt-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1",{className:"title bloc text-white"},"Updates"))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"row"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{className:"col mt-2 mb-5 pb-lg-5"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Updates__WEBPACK_IMPORTED_MODULE_2__["default"],null))))));});

/***/ }),

/***/ "./src/scss/gatstrap.scss":
/*!********************************!*\
  !*** ./src/scss/gatstrap.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/style/global.js":
/*!*****************************!*\
  !*** ./src/style/global.js ***!
  \*****************************/
/*! exports provided: Container, Section, Grid1_1, Grid2_3, Grid5_4, Grid1_1_1, Grid3_3_1, H1, H2, H3, Button, ButtonArrow, Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid1_1", function() { return Grid1_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid2_3", function() { return Grid2_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid5_4", function() { return Grid5_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid1_1_1", function() { return Grid1_1_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Grid3_3_1", function() { return Grid3_3_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H1", function() { return H1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H2", function() { return H2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H3", function() { return H3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonArrow", function() { return ButtonArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
var Container=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({displayName:"global__Container",componentId:"sc-1v906q-0"})(["text-rendering:optimizeLegibility !important;-webkit-font-smoothing:antialiased;max-width:2000px;width:100%;margin:0 auto;padding:0 16px;@media (min-width:","){max-width:540px;}@media (min-width:","){max-width:720px;}@media (min-width:","){max-width:960px;}@media (min-width:","){max-width:1200px;}@media (min-width:","){max-width:2000px;}",";"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.xs,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.sm,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.lg,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.xl,function(props){return props.fluid&&"\n    max-width: 2000px !important;\n  ";});var Section=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({displayName:"global__Section",componentId:"sc-1v906q-1"})(["padding:90px 0;overflow:hidden;a{transition:color .4s ease-out;position:relative;:hover{color:",";right:0;text-decoration:none;}:before{border-bottom:0.3em solid ",";content:\"\";position:absolute;z-index:-1;right:100%;bottom:.14em;left:0;right:0;transition:all .4s cubic-bezier(0,.5,0,1),border-color .4s ease-out;}:hover:before{border-bottom:1em solid;border-color:",";}:hover:after{right:0;}}small{",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.secondary.S900,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.supplementary.S300,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.supplementary.S400,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.xs);var Grid1_1=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({displayName:"global__Grid1_1",componentId:"sc-1v906q-2"})(["display:grid;grid-template-columns:1fr 1fr;grid-gap:10px;@media (max-width:","){}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.lg);var Grid2_3=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({displayName:"global__Grid2_3",componentId:"sc-1v906q-3"})(["display:grid;grid-template-columns:2fr 3fr;grid-gap:10px;@media (max-width:","){}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.lg);var Grid5_4=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({displayName:"global__Grid5_4",componentId:"sc-1v906q-4"})(["display:grid;grid-template-columns:5fr 4fr;grid-gap:10px;@media (max-width:","){}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.lg);var Grid1_1_1=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({displayName:"global__Grid1_1_1",componentId:"sc-1v906q-5"})(["display:grid;grid-template-columns:1fr 1fr 1fr;grid-gap:10px;@media (max-width:","){}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.lg);var Grid3_3_1=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({displayName:"global__Grid3_3_1",componentId:"sc-1v906q-6"})(["display:grid;grid-template-columns:3fr 3fr 1fr;grid-gap:10px;@media (max-width:","){}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.lg);var H1=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({displayName:"global__H1",componentId:"sc-1v906q-7"})(["",";font-family:",";@media (max-width:","){",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.xxl,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.xl);var H2=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({displayName:"global__H2",componentId:"sc-1v906q-8"})(["",";font-family:",";@media (max-width:","){",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.xl,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.lg);var H3=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({displayName:"global__H3",componentId:"sc-1v906q-9"})(["",";font-family:",";@media (max-width:","){",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.lg,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.base);var Button=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({displayName:"global__Button",componentId:"sc-1v906q-10"})(["display:inline-block;padding:9px 25px;margin:0 10px 10px 0;width:auto;background:"," !important;color:"," !important;border:1px solid;border-image-slice:1;border-width:1px;border-image-source:linear-gradient(135deg,#0064C1,#0064C1 5%,#fff 5%,#fff 95%,#0064C1 95%,#000);transition:0.4s all;font-family:",";",";cursor:pointer;:hover{background:"," !important;}a:hover{text-decoration:none !important;}",";",";",";",";input[type=submit]{border:none;border-radius:0px;background:none;}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].fontSize.sm,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S300D,function(props){return props.Light&&Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:",";color:"," !important;border:1px solid ",";:hover{background:"," !important;}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S700,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S200D);},function(props){return props.Tertiary&&Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["border:1px solid;border-image-slice:1;border-width:1px;border-image-source:linear-gradient(135deg,#444,#444 5%,#fff 5%,#fff 95%,#444 95%,#444);:hover{background:"," !important;}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S200D);},function(props){return props.TertiaryDark&&Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["border:1px solid;border-image-slice:1;border-width:1px;border-image-source:linear-gradient(135deg,#444,#444 5%,#fff 5%,#fff 95%,#444 95%,#444);background:"," !important;color:"," !important;:hover{background:"," !important;}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S800D);},function(props){return props.tertiaryLight&&Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["background:",";color:"," !important;border:1px solid ",";:hover{background:"," !important;color:"," !important;border:1px solid ",";}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S1000D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S1000,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D,_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S1000);});var ButtonArrow=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({displayName:"global__ButtonArrow",componentId:"sc-1v906q-11"})(["display:inline-block;padding:9px 0px;margin:0 10px 10px 0;width:auto;:after{content:\">\";margin-left:10px;transition:all 0.5s;}:hover:after{margin-left:15px;}"]);var Form=styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].form.withConfig({displayName:"global__Form",componentId:"sc-1v906q-12"})(["label{pointer-event:none;}input{border:0;width:100%;background:none;}input[type=text],input[type=url]{background:",";}input:focus{border:none;outline:none;}input[type=submit]:focus{border:none;outline:none;}input[type=file],{border:none;outline:none;}input [type=button]{color:white !important;}input[type=file]{border:none;border-radius:0px;background:none;padding:0;}"],_style_theme__WEBPACK_IMPORTED_MODULE_1__["default"].color.primary.S100D);

/***/ }),

/***/ "./src/style/theme.js":
/*!****************************!*\
  !*** ./src/style/theme.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var theme={font:{display:"Sora, sans-serif",primary:"'Sora', sans-serif",secondary:"'PT Serif' , serif"},fontSize:{xxs:'font-size: 0.7rem !important; line-height: 1.2rem',xs:'font-size: 0.8rem !important; line-height: 1.2rem',sm:'font-size: 0.9rem !important; line-height: 1.4rem',base:'font-size: 1rem !important; line-height: 1.5rem',lg:'font-size: 1.2rem !important; line-height: 1.7rem',xl:'font-size: 2rem !important; line-height: 2.2rem',xxl:'font-size: 3.3rem !important; line-height: 3.6rem',xxxl:'font-size: 5rem !important; line-height: 5rem',xxxxl:'font-size: 7rem !important; line-height: 7rem'},color:{white:'#FFFFFF',black:'#000000',primary:{S100:'#E3FCFF',S200:'#C2ECF9',S300:'#92CEEF',S400:'#2A92DD',S500:'#0064C1',S600:'#09468E',S700:'#042B66',S800:'#012249',S900:'#000928',S1000:'#000212',S100D:'#F7FAFA',S200D:'#F2F7F8',S300D:'#EAEFF2',S400D:'#D2DCE4',S500D:'#B9C4CD',S600D:'#78818C',S700D:'#565C65',S800D:'#353D46',S900D:'#181A22',S1000D:'#0A0B10'},secondary:{S100:'#E4FFE3',S200:'#C2F9CB',S300:'#92EFAC',S400:'#2ADD87',S500:'#00C17C',S600:'#098E5E',S700:'#04664E',S800:'#01493B',S900:'#002820',S1000:'#001211',S100D:'#F8FFF8',S200D:'#F1FBF3',S300D:'#E4F3E8',S400D:'#D9E8E1',S500D:'#B1C2BC',S600D:'#899892',S700D:'#5A6865',S800D:'#3D4745',S900D:'#232928',S1000D:'#0D1111'},supplementary:{S100:'#FFFBE9',S200:'#FFF4BB',S300:'#FFEA92',S400:'#FFDF5A',S500:'#FFD00D',S600:'#FFBC00',S700:'#F29B00',S800:'#ED8100',S900:'#D16800',S1000:'#BB4F00'},grayscale:{S100:'#FAFAFA',S200:'#F5F5F5',S300:'#EEEEEE',S400:'#E0E0E0',S500:'#BDBDBD',S600:'#9E9E9E',S700:'#757575',S800:'#616161',S900:'#424242',S1000:'#212121'},decorative:{Orange:'#FE8B25',SkyBlue:'#DAEEFE',Yellow:'#FEF37C',Green:'#3D7551',Prune:'#742723'}},screen:{xs:'575px',sm:'767px',md:'991px',lg:'1199px',xl:'2000px',xxl:'3000px'}};/* harmony default export */ __webpack_exports__["default"] = (theme);

/***/ }),

/***/ "./src/templates/Page/index.js":
/*!*************************************!*\
  !*** ./src/templates/Page/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/templates/Page/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var Page=function Page(_ref){var data=_ref.data;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",{dangerouslySetInnerHTML:{__html:data.post.html}});};/* harmony default export */ __webpack_exports__["default"] = (Page);

/***/ }),

/***/ "./src/templates/Page/style.scss":
/*!***************************************!*\
  !*** ./src/templates/Page/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/templates/Post/index.js":
/*!*************************************!*\
  !*** ./src/templates/Post/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/map */ "lodash/map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! gatsby-image */ "./node_modules/gatsby-image/index.js");
/* harmony import */ var gatsby_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(gatsby_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Adsense__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Adsense */ "./src/components/Adsense/index.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.scss */ "./src/templates/Post/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _style_global__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @style/global */ "./src/style/global.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.esm.js");
/* harmony import */ var components_Icon_IconToTop__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Icon/IconToTop */ "./src/components/Icon/IconToTop.js");
/* harmony import */ var _style_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @style/theme */ "./src/style/theme.js");
/* harmony import */ var react_scroll_up__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-scroll-up */ "./node_modules/react-scroll-up/index.js");
/* harmony import */ var react_scroll_up__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll_up__WEBPACK_IMPORTED_MODULE_11__);
var getAd=function getAd(isIndex,adsense){return!isIndex?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Adsense__WEBPACK_IMPORTED_MODULE_5__["default"],{clientId:adsense,slotId:"",format:"auto"}):'';};var getDescription=function getDescription(body){body=body.replace(/<blockquote>/g,'<blockquote class="blockquote">');if(body.match('<!--more-->')){body=body.split('<!--more-->');if(typeof body[0]!=='undefined'){return body[0];}}return body;};var Button=function Button(_ref){var path=_ref.path,label=_ref.label,primary=_ref.primary;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{className:"readmore",to:path},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span",{className:"btn btn-outline-primary btn-block "+(primary?'btn-outline-primary':'btn-outline-secondary')},label));};var Role=function Role(_ref2){var items=_ref2.items;return lodash_map__WEBPACK_IMPORTED_MODULE_3___default()(items,function(item,i){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LsRole,{key:i},item);});};var Post=function Post(_ref3){var data=_ref3.data,options=_ref3.options;var _data$frontmatter=data.frontmatter,role=_data$frontmatter.role,description=_data$frontmatter.description,title=_data$frontmatter.title,path=_data$frontmatter.path,date=_data$frontmatter.date,image=_data$frontmatter.image;var isIndex=options.isIndex,adsense=options.adsense;var html=lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(data,'html');var isMore=isIndex&&!!html.match('<!--more-->');var fluid=lodash_get__WEBPACK_IMPORTED_MODULE_1___default()(image,'childImageSharp.fluid');return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Container"],{key:path},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Mas,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MasInfo,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleInfo,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{to:"/"},"Work")),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["H2"],null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p",null,description)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MasInfo,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleInfo,null,"Year"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Info,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("time",{dateTime:date},date)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TitleInfo,null,"Responsibilities"),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Info,null,Role({items:role}))),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MasImg,null,fluid?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby_image__WEBPACK_IMPORTED_MODULE_4___default.a,{fluid:fluid,style:{display:'block',margin:'0 auto'}}):'')),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Content,{dangerouslySetInnerHTML:{__html:isMore?getDescription(html):html}}),isMore?Button({path:path,label:'MORE',primary:true}):'',getAd(isIndex,adsense),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_scroll_up__WEBPACK_IMPORTED_MODULE_11___default.a,{showUnder:360},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Icon_IconToTop__WEBPACK_IMPORTED_MODULE_9__["IconToTop"],null)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_style_global__WEBPACK_IMPORTED_MODULE_7__["Section"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Back,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(gatsby__WEBPACK_IMPORTED_MODULE_0__["Link"],{className:"text-center",to:"/"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h4",null,"Back to Index")))));};/* harmony default export */ __webpack_exports__["default"] = (Post);var Mas=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__Mas",componentId:"sc-1bcd9ot-0"})(["padding-top:20vh;padding-bottom:15vh;display:grid;grid-template-columns:3fr 2fr 2fr;grid-gap:70px;border-bottom:solid 1px ",";@media (max-width:","){grid-template-columns:unset;grid-gap:20px;padding-bottom:5vh;margin-top:0;padding-top:100px;border-bottom:none;}@media (max-width:","){border-bottom:solid 1px ",";padding-top:40px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.grayscale.S500,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.lg,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.grayscale.S500);var MasInfo=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__MasInfo",componentId:"sc-1bcd9ot-1"})(["","{font-weight:bold;}"],_style_global__WEBPACK_IMPORTED_MODULE_7__["H2"]);var MasImg=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__MasImg",componentId:"sc-1bcd9ot-2"})(["@media (max-width:","){order:-1;}@media (mix-width:","),(max-width:","){margin-top:20px;}"],_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.lg);var TitleInfo=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__TitleInfo",componentId:"sc-1bcd9ot-3"})(["font-family:",";",";font-weight:bold;margin:20px 0 10px 0;"],_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].font.primary,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].fontSize.xs);var Info=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__Info",componentId:"sc-1bcd9ot-4"})(["",";"],_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].fontSize.sm);var LsRole=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__LsRole",componentId:"sc-1bcd9ot-5"})(["::before{content:'\u2043 ';}"]);var Back=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__Back",componentId:"sc-1bcd9ot-6"})(["border-top:1px solid ",";padding-top:100px;"],_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.grayscale.S400);var Content=styled_components__WEBPACK_IMPORTED_MODULE_8__["default"].div.withConfig({displayName:"Post__Content",componentId:"sc-1bcd9ot-7"})(["padding-top:50px;width:720px;@media (max-width:","){width:90%;}@media (max-width:","){width:100%;}h1,h2,h3,h4,h5,h6{padding-top:10px;margin:20px 0 20px 0;}p,ul,ol{margin:20px 0 20px 0;}a{transition:color .4s ease-out;position:relative;:hover{color:",";right:0;text-decoration:none;}:before{border-bottom:0.3em solid ",";content:\"\";position:absolute;z-index:-1;right:100%;bottom:.14em;left:0;right:0;transition:all .4s cubic-bezier(0,.5,0,1),border-color .4s ease-out;}:hover:before{border-bottom:1em solid;border-color:",";}:hover:after{right:0;}}blockquote{border-left:5px solid ",";padding:0.45em 1.5em 1.4em 1.5em;a{display:block;word-break:break-word;}}hr{padding:10px 0;border-top:none !important;@media (max-width:","){padding:5px 0;}}a:hover img{animation:pulse 0.5s;}figcaption::before{content:\"\uD83D\uDC46 \";",";}figcaption{",";color:",";margin-bottom:20px;margin-top:-5px;@media (max-width:","){margin-bottom:5px;}}"],_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.lg,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.secondary.S900,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.supplementary.S300,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.supplementary.S400,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.grayscale.S600,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.md,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].fontSize.base,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].fontSize.xs,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].color.grayscale.S800,_style_theme__WEBPACK_IMPORTED_MODULE_10__["default"].screen.lg);

/***/ }),

/***/ "./src/templates/Post/style.scss":
/*!***************************************!*\
  !*** ./src/templates/Post/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/templates/index.js":
/*!********************************!*\
  !*** ./src/templates/index.js ***!
  \********************************/
/*! exports provided: default, pageQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pageQuery", function() { return pageQuery; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/get */ "lodash/get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var templates_Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! templates/Post */ "./src/templates/Post/index.js");
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/Meta */ "./src/components/Meta/index.js");
/* harmony import */ var components_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/Layout */ "./src/components/Layout/index.js");
/* harmony import */ var templates_Page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! templates/Page */ "./src/templates/Page/index.js");
var _this=undefined;var Template=function Template(_ref){var data=_ref.data,location=_ref.location;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Layout__WEBPACK_IMPORTED_MODULE_4__["default"],{location:location},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Meta__WEBPACK_IMPORTED_MODULE_3__["default"],{title:lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data,'post.frontmatter.title'),site:lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data,'site.meta'),desc:lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data,'post.frontmatter.description'),ogimg:lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data,'post.frontmatter.image')}),lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data,'post.frontmatter.layout')!=='page'?/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(templates_Post__WEBPACK_IMPORTED_MODULE_2__["default"],{data:lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data,'post'),options:{isIndex:false,adsense:lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(data,'site.meta.adsense')}}):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(templates_Page__WEBPACK_IMPORTED_MODULE_5__["default"],_this.props)));};/* harmony default export */ __webpack_exports__["default"] = (Template);var pageQuery="1772480394";

/***/ }),

/***/ "@reach/router":
/*!**************************************************************************************************!*\
  !*** external "/Users/ansinlau/Dropbox/website/current/dev/node_modules/@reach/router/index.js" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!****************************************************************************************************************!*\
  !*** external "/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/lodash.js" ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "lodash/get":
/*!*************************************************************************************************************!*\
  !*** external "/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/get.js" ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_get__;

/***/ }),

/***/ "lodash/map":
/*!*************************************************************************************************************!*\
  !*** external "/Users/ansinlau/Dropbox/website/current/dev/node_modules/gatsby/node_modules/lodash/map.js" ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash_map__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("stream");

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map