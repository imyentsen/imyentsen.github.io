/*! For license information please see a24b81352cfcd84cc391edc6101ad3ea362eedae-cacd38cc13277c7479d5.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"+c4W":function(t,e,n){var r=n("711d"),o=n("4/ic"),a=n("9ggG"),i=n("9Nap");t.exports=function(t){return a(t)?r(i(t)):o(t)}},"03A+":function(t,e,n){var r=n("JTzB"),o=n("ExA7"),a=Object.prototype,i=a.hasOwnProperty,u=a.propertyIsEnumerable,c=r(function(){return arguments}())?r:function(t){return o(t)&&i.call(t,"callee")&&!u.call(t,"callee")};t.exports=c},"0Cz8":function(t,e,n){var r=n("Xi7e"),o=n("ebwN"),a=n("e4Nc");t.exports=function(t,e){var n=this.__data__;if(n instanceof r){var i=n.__data__;if(!o||i.length<199)return i.push([t,e]),this.size=++n.size,this;n=this.__data__=new a(i)}return n.set(t,e),this.size=n.size,this}},"0ycA":function(t,e){t.exports=function(){return[]}},"1hJj":function(t,e,n){var r=n("e4Nc"),o=n("ftKO"),a=n("3A9y");function i(t){var e=-1,n=null==t?0:t.length;for(this.__data__=new r;++e<n;)this.add(t[e])}i.prototype.add=i.prototype.push=o,i.prototype.has=a,t.exports=i},"3A9y":function(t,e){t.exports=function(t){return this.__data__.has(t)}},"3WF5":function(t,e,n){var r=n("eUgh"),o=n("ut/Y"),a=n("l9OW"),i=n("Z0cm");t.exports=function(t,e){return(i(t)?r:a)(t,o(e,3))}},"4/ic":function(t,e,n){var r=n("ZWtO");t.exports=function(t){return function(e){return r(e,t)}}},"4sDh":function(t,e,n){var r=n("4uTw"),o=n("03A+"),a=n("Z0cm"),i=n("wJg7"),u=n("shjB"),c=n("9Nap");t.exports=function(t,e,n){for(var s=-1,l=(e=r(e,t)).length,f=!1;++s<l;){var p=c(e[s]);if(!(f=null!=t&&n(t,p)))break;t=t[p]}return f||++s!=l?f:!!(l=null==t?0:t.length)&&u(l)&&i(p,l)&&(a(t)||o(t))}},"6sVZ":function(t,e){var n=Object.prototype;t.exports=function(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||n)}},"711d":function(t,e){t.exports=function(t){return function(e){return null==e?void 0:e[t]}}},"77Zs":function(t,e,n){var r=n("Xi7e");t.exports=function(){this.__data__=new r,this.size=0}},"7GkX":function(t,e,n){var r=n("b80T"),o=n("A90E"),a=n("MMmD");t.exports=function(t){return a(t)?r(t):o(t)}},"7fqy":function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t,r){n[++e]=[r,t]})),n}},"A/ap":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={update:function(){if("undefined"!=typeof window&&"function"==typeof window.addEventListener){var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}}),n=function(){};window.addEventListener("testPassiveEventSupport",n,e),window.removeEventListener("testPassiveEventSupport",n,e),r.hasSupport=t}}};r.update(),e.default=r},A90E:function(t,e,n){var r=n("6sVZ"),o=n("V6Ve"),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))a.call(t,n)&&"constructor"!=n&&e.push(n);return e}},B8du:function(t,e){t.exports=function(){return!1}},CH3K:function(t,e){t.exports=function(t,e){for(var n=-1,r=e.length,o=t.length;++n<r;)t[o+n]=e[n];return t}},CMye:function(t,e,n){var r=n("GoyQ");t.exports=function(t){return t==t&&!r(t)}},DSRE:function(t,e,n){(function(t){var r=n("Kz5y"),o=n("B8du"),a=e&&!e.nodeType&&e,i=a&&"object"==typeof t&&t&&!t.nodeType&&t,u=i&&i.exports===a?r.Buffer:void 0,c=(u?u.isBuffer:void 0)||o;t.exports=c}).call(this,n("YuTi")(t))},GDhZ:function(t,e,n){var r=n("wF/u"),o=n("mwIZ"),a=n("hgQt"),i=n("9ggG"),u=n("CMye"),c=n("IOzZ"),s=n("9Nap");t.exports=function(t,e){return i(t)&&u(e)?c(s(t),e):function(n){var i=o(n,t);return void 0===i&&i===e?a(n,t):r(e,i,3)}}},HDyB:function(t,e,n){var r=n("nmnc"),o=n("JHRd"),a=n("ljhN"),i=n("or5M"),u=n("7fqy"),c=n("rEGp"),s=r?r.prototype:void 0,l=s?s.valueOf:void 0;t.exports=function(t,e,n,r,s,f,p){switch(n){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!f(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return a(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var d=u;case"[object Set]":var h=1&r;if(d||(d=c),t.size!=e.size&&!h)return!1;var b=p.get(t);if(b)return b==e;r|=2,p.set(t,e);var m=i(d(t),d(e),r,s,f,p);return p.delete(t),m;case"[object Symbol]":if(l)return l.call(t)==l.call(e)}return!1}},HOxn:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Promise");t.exports=r},IOzZ:function(t,e){t.exports=function(t,e){return function(n){return null!=n&&(n[t]===e&&(void 0!==e||t in Object(n)))}}},JC6p:function(t,e,n){var r=n("cq/+"),o=n("7GkX");t.exports=function(t,e){return t&&r(t,e,o)}},JHRd:function(t,e,n){var r=n("Kz5y").Uint8Array;t.exports=r},JTzB:function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},Juji:function(t,e){t.exports=function(t,e){return null!=t&&e in Object(t)}},L8xA:function(t,e){t.exports=function(t){var e=this.__data__,n=e.delete(t);return this.size=e.size,n}},LXxW:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=0,a=[];++n<r;){var i=t[n];e(i,n,t)&&(a[o++]=i)}return a}},MMmD:function(t,e,n){var r=n("lSCD"),o=n("shjB");t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},MvSz:function(t,e,n){var r=n("LXxW"),o=n("0ycA"),a=Object.prototype.propertyIsEnumerable,i=Object.getOwnPropertySymbols,u=i?function(t){return null==t?[]:(t=Object(t),r(i(t),(function(e){return a.call(t,e)})))}:o;t.exports=u},O7RO:function(t,e,n){var r=n("CMye"),o=n("7GkX");t.exports=function(t){for(var e=o(t),n=e.length;n--;){var a=e[n],i=t[a];e[n]=[a,i,r(i)]}return e}},"Of+w":function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"WeakMap");t.exports=r},QoRX:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length;++n<r;)if(e(t[n],n,t))return!0;return!1}},QqLw:function(t,e,n){var r=n("tadb"),o=n("ebwN"),a=n("HOxn"),i=n("yGk4"),u=n("Of+w"),c=n("NykK"),s=n("3Fdi"),l=s(r),f=s(o),p=s(a),d=s(i),h=s(u),b=c;(r&&"[object DataView]"!=b(new r(new ArrayBuffer(1)))||o&&"[object Map]"!=b(new o)||a&&"[object Promise]"!=b(a.resolve())||i&&"[object Set]"!=b(new i)||u&&"[object WeakMap]"!=b(new u))&&(b=function(t){var e=c(t),n="[object Object]"==e?t.constructor:void 0,r=n?s(n):"";if(r)switch(r){case l:return"[object DataView]";case f:return"[object Map]";case p:return"[object Promise]";case d:return"[object Set]";case h:return"[object WeakMap]"}return e}),t.exports=b},SKAX:function(t,e,n){var r=n("JC6p"),o=n("lQqw")(r);t.exports=o},"UNi/":function(t,e){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},UpnW:function(t,e,n){"use strict";var r=n("Wbzz"),o=n("mwIZ"),a=n.n(o),i=n("q1tI"),u=n.n(i),c=n("3WF5"),s=n.n(c),l=n("9eSz"),f=n.n(l),p=n("9Hrx"),d=function(t){function e(){return t.apply(this,arguments)||this}Object(p.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){this.props.clientId&&(window.adsbygoogle=window.adsbygoogle||[]).push({})},n.render=function(){var t=this.props,e=t.clientId,n=t.slotId,r=t.format;return e?u.a.createElement("div",{className:"ad"},u.a.createElement("ins",{className:"adsbygoogle",style:{display:"block"},"data-ad-client":e,"data-ad-slot":n,"data-ad-format":r})):""},e}(u.a.Component),h=(n("iGG3"),n("AMwC")),b=n("vOnD");function m(){return u.a.createElement("svg",{focusable:"false",width:"2em",height:"2em",viewBox:"0 0 16 16"},u.a.createElement("g",{fill:"currentColor"},u.a.createElement("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M13.854 7l-5-5h-.707l-5 5l.707.707L8 3.561V14h1V3.56l4.146 4.147l.708-.707z"})))}var v=n("sxwA"),y=n("qrN4"),w=n.n(y),g=(e.a=function(t){var e,n,o=t.data,i=t.options,c=o.frontmatter,l=c.role,p=c.description,b=c.title,v=c.path,y=c.date,S=c.image,k=i.isIndex,C=i.adsense,A=a()(o,"html"),P=k&&!!A.match("\x3c!--more--\x3e"),z=a()(S,"childImageSharp.fluid");return u.a.createElement(h.c,{key:v},u.a.createElement(g,null,u.a.createElement(x,null,u.a.createElement(j,null,u.a.createElement(r.Link,{to:"/"},"Work")),u.a.createElement(h.h,null,b),u.a.createElement("p",null,p)),u.a.createElement(x,null,u.a.createElement(j,null,"Year"),u.a.createElement(_,null,u.a.createElement("time",{dateTime:y},y)),u.a.createElement(j,null,"Responsibilities"),u.a.createElement(_,null,(n={items:l}.items,s()(n,(function(t,e){return u.a.createElement(I,{key:e},t)}))))),u.a.createElement(O,null,z?u.a.createElement(f.a,{fluid:z,style:{display:"block",margin:"0 auto"}}):"")),u.a.createElement(M,{dangerouslySetInnerHTML:{__html:P?(e=A,(e=e.replace(/<blockquote>/g,'<blockquote class="blockquote">')).match("\x3c!--more--\x3e")&&void 0!==(e=e.split("\x3c!--more--\x3e"))[0]?e[0]:e):A}}),P?function(t){var e=t.path,n=t.label,o=t.primary;return u.a.createElement(r.Link,{className:"readmore",to:e},u.a.createElement("span",{className:"btn btn-outline-primary btn-block "+(o?"btn-outline-primary":"btn-outline-secondary")},n))}({path:v,label:"MORE",primary:!0}):"",function(t,e){return t?"":u.a.createElement(d,{clientId:e,slotId:"",format:"auto"})}(k,C),u.a.createElement(w.a,{showUnder:360},u.a.createElement(m,null)),u.a.createElement(h.j,null,u.a.createElement(E,null,u.a.createElement(r.Link,{className:"text-center",to:"/"},u.a.createElement("h4",null,"Back to Index")))))},b.b.div.withConfig({displayName:"Post__Mas",componentId:"sc-1bcd9ot-0"})(["padding-top:20vh;padding-bottom:15vh;display:grid;grid-template-columns:3fr 2fr 2fr;grid-gap:70px;border-bottom:solid 1px ",";@media (max-width:","){grid-template-columns:unset;grid-gap:20px;padding-bottom:5vh;margin-top:0;padding-top:100px;border-bottom:none;}@media (max-width:","){border-bottom:solid 1px ",";padding-top:40px;}"],v.a.color.grayscale.S500,v.a.screen.lg,v.a.screen.md,v.a.color.grayscale.S500)),x=b.b.div.withConfig({displayName:"Post__MasInfo",componentId:"sc-1bcd9ot-1"})(["","{font-weight:bold;}"],h.h),O=b.b.div.withConfig({displayName:"Post__MasImg",componentId:"sc-1bcd9ot-2"})(["@media (max-width:","){order:-1;}@media (mix-width:","),(max-width:","){margin-top:20px;}"],v.a.screen.md,v.a.screen.md,v.a.screen.lg),j=b.b.div.withConfig({displayName:"Post__TitleInfo",componentId:"sc-1bcd9ot-3"})(["font-family:",";",";font-weight:bold;margin:20px 0 10px 0;"],v.a.font.primary,v.a.fontSize.xs),_=b.b.div.withConfig({displayName:"Post__Info",componentId:"sc-1bcd9ot-4"})(["",";"],v.a.fontSize.sm),I=b.b.div.withConfig({displayName:"Post__LsRole",componentId:"sc-1bcd9ot-5"})(["::before{content:'⁃ ';}"]),E=b.b.div.withConfig({displayName:"Post__Back",componentId:"sc-1bcd9ot-6"})(["border-top:1px solid ",";padding-top:100px;"],v.a.color.grayscale.S400),M=b.b.div.withConfig({displayName:"Post__Content",componentId:"sc-1bcd9ot-7"})(["padding-top:50px;width:720px;@media (max-width:","){width:90%;}@media (max-width:","){width:100%;}h1,h2,h3,h4,h5,h6{padding-top:10px;margin:20px 0 20px 0;}p,ul,ol{margin:20px 0 20px 0;}a{transition:color .4s ease-out;position:relative;:hover{color:",";right:0;text-decoration:none;}:before{border-bottom:0.3em solid ",';content:"";position:absolute;z-index:-1;right:100%;bottom:.14em;left:0;right:0;transition:all .4s cubic-bezier(0,.5,0,1),border-color .4s ease-out;}:hover:before{border-bottom:1em solid;border-color:',";}:hover:after{right:0;}}blockquote{border-left:5px solid ",";padding:0.45em 1.5em 1.4em 1.5em;a{display:block;word-break:break-word;}}hr{padding:10px 0;border-top:none !important;@media (max-width:",'){padding:5px 0;}}a:hover img{animation:pulse 0.5s;}figcaption::before{content:"👆 ";',";}figcaption{",";color:",";margin-bottom:20px;margin-top:-5px;@media (max-width:","){margin-bottom:5px;}}"],v.a.screen.lg,v.a.screen.md,v.a.color.secondary.S900,v.a.color.supplementary.S300,v.a.color.supplementary.S400,v.a.color.grayscale.S600,v.a.screen.md,v.a.fontSize.base,v.a.fontSize.xs,v.a.color.grayscale.S800,v.a.screen.lg)},V6Ve:function(t,e,n){var r=n("kekF")(Object.keys,Object);t.exports=r},VaNO:function(t,e){t.exports=function(t){return this.__data__.has(t)}},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},ZCpW:function(t,e,n){var r=n("lm/5"),o=n("O7RO"),a=n("IOzZ");t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?a(e[0][0],e[0][1]):function(n){return n===t||r(n,t,e)}}},b80T:function(t,e,n){var r=n("UNi/"),o=n("03A+"),a=n("Z0cm"),i=n("DSRE"),u=n("wJg7"),c=n("c6wG"),s=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=a(t),l=!n&&o(t),f=!n&&!l&&i(t),p=!n&&!l&&!f&&c(t),d=n||l||f||p,h=d?r(t.length,String):[],b=h.length;for(var m in t)!e&&!s.call(t,m)||d&&("length"==m||f&&("offset"==m||"parent"==m)||p&&("buffer"==m||"byteLength"==m||"byteOffset"==m)||u(m,b))||h.push(m);return h}},c6wG:function(t,e,n){var r=n("dD9F"),o=n("sEf8"),a=n("mdPL"),i=a&&a.isTypedArray,u=i?o(i):r;t.exports=u},"cq/+":function(t,e,n){var r=n("mc0g")();t.exports=r},dD9F:function(t,e,n){var r=n("NykK"),o=n("shjB"),a=n("ExA7"),i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1,t.exports=function(t){return a(t)&&o(t.length)&&!!i[r(t)]}},e5cp:function(t,e,n){var r=n("fmRc"),o=n("or5M"),a=n("HDyB"),i=n("seXi"),u=n("QqLw"),c=n("Z0cm"),s=n("DSRE"),l=n("c6wG"),f="[object Object]",p=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,d,h,b){var m=c(t),v=c(e),y=m?"[object Array]":u(t),w=v?"[object Array]":u(e),g=(y="[object Arguments]"==y?f:y)==f,x=(w="[object Arguments]"==w?f:w)==f,O=y==w;if(O&&s(t)){if(!s(e))return!1;m=!0,g=!1}if(O&&!g)return b||(b=new r),m||l(t)?o(t,e,n,d,h,b):a(t,e,y,n,d,h,b);if(!(1&n)){var j=g&&p.call(t,"__wrapped__"),_=x&&p.call(e,"__wrapped__");if(j||_){var I=j?t.value():t,E=_?e.value():e;return b||(b=new r),h(I,E,n,d,b)}}return!!O&&(b||(b=new r),i(t,e,n,d,h,b))}},"fR/l":function(t,e,n){var r=n("CH3K"),o=n("Z0cm");t.exports=function(t,e,n){var a=e(t);return o(t)?a:r(a,n(t))}},fmRc:function(t,e,n){var r=n("Xi7e"),o=n("77Zs"),a=n("L8xA"),i=n("gCq4"),u=n("VaNO"),c=n("0Cz8");function s(t){var e=this.__data__=new r(t);this.size=e.size}s.prototype.clear=o,s.prototype.delete=a,s.prototype.get=i,s.prototype.has=u,s.prototype.set=c,t.exports=s},ftKO:function(t,e){t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},gCq4:function(t,e){t.exports=function(t){return this.__data__.get(t)}},hgQt:function(t,e,n){var r=n("Juji"),o=n("4sDh");t.exports=function(t,e){return null!=t&&o(t,e,r)}},iGG3:function(t,e,n){},kekF:function(t,e){t.exports=function(t,e){return function(n){return t(e(n))}}},l9OW:function(t,e,n){var r=n("SKAX"),o=n("MMmD");t.exports=function(t,e){var n=-1,a=o(t)?Array(t.length):[];return r(t,(function(t,r,o){a[++n]=e(t,r,o)})),a}},lQqw:function(t,e,n){var r=n("MMmD");t.exports=function(t,e){return function(n,o){if(null==n)return n;if(!r(n))return t(n,o);for(var a=n.length,i=e?a:-1,u=Object(n);(e?i--:++i<a)&&!1!==o(u[i],i,u););return n}}},"lm/5":function(t,e,n){var r=n("fmRc"),o=n("wF/u");t.exports=function(t,e,n,a){var i=n.length,u=i,c=!a;if(null==t)return!u;for(t=Object(t);i--;){var s=n[i];if(c&&s[2]?s[1]!==t[s[0]]:!(s[0]in t))return!1}for(;++i<u;){var l=(s=n[i])[0],f=t[l],p=s[1];if(c&&s[2]){if(void 0===f&&!(l in t))return!1}else{var d=new r;if(a)var h=a(f,p,l,t,e,d);if(!(void 0===h?o(p,f,3,a,d):h))return!1}}return!0}},mc0g:function(t,e){t.exports=function(t){return function(e,n,r){for(var o=-1,a=Object(e),i=r(e),u=i.length;u--;){var c=i[t?u:++o];if(!1===n(a[c],c,a))break}return e}}},mdPL:function(t,e,n){(function(t){var r=n("WFqU"),o=e&&!e.nodeType&&e,a=o&&"object"==typeof t&&t&&!t.nodeType&&t,i=a&&a.exports===o&&r.process,u=function(){try{var t=a&&a.require&&a.require("util").types;return t||i&&i.binding&&i.binding("util")}catch(e){}}();t.exports=u}).call(this,n("YuTi")(t))},or5M:function(t,e,n){var r=n("1hJj"),o=n("QoRX"),a=n("xYSL");t.exports=function(t,e,n,i,u,c){var s=1&n,l=t.length,f=e.length;if(l!=f&&!(s&&f>l))return!1;var p=c.get(t);if(p&&c.get(e))return p==e;var d=-1,h=!0,b=2&n?new r:void 0;for(c.set(t,e),c.set(e,t);++d<l;){var m=t[d],v=e[d];if(i)var y=s?i(v,m,d,e,t,c):i(m,v,d,t,e,c);if(void 0!==y){if(y)continue;h=!1;break}if(b){if(!o(e,(function(t,e){if(!a(b,e)&&(m===t||u(m,t,n,i,c)))return b.push(e)}))){h=!1;break}}else if(m!==v&&!u(m,v,n,i,c)){h=!1;break}}return c.delete(t),c.delete(e),h}},qZTm:function(t,e,n){var r=n("fR/l"),o=n("MvSz"),a=n("7GkX");t.exports=function(t){return r(t,a,o)}},qrN4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=s(n("q1tI")),a=s(n("17x9")),i=s(n("tQyb")),u=s(n("A/ap")),c=s(n("YVoz"));function s(t){return t&&t.__esModule?t:{default:t}}var l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={show:!1},n.data={startValue:0,currentTime:0,startTime:null,rafId:null},n.handleClick=n.handleClick.bind(n),n.handleScroll=n.handleScroll.bind(n),n.scrollStep=n.scrollStep.bind(n),n.stopScrolling=n.stopScrolling.bind(n),n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),r(e,[{key:"shouldComponentUpdate",value:function(t,e){return e.show!==this.state.show}},{key:"componentDidMount",value:function(){this.handleScroll(),window.addEventListener("scroll",this.handleScroll),window.addEventListener("wheel",this.stopScrolling,!!u.default.hasSupport&&{passive:!0}),window.addEventListener("touchstart",this.stopScrolling,!!u.default.hasSupport&&{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.handleScroll),window.removeEventListener("wheel",this.stopScrolling,!1),window.removeEventListener("touchstart",this.stopScrolling,!1)}},{key:"handleScroll",value:function(){window.pageYOffset>this.props.showUnder?this.state.show||this.setState({show:!0}):this.state.show&&this.setState({show:!1})}},{key:"handleClick",value:function(){this.stopScrolling(),this.data.startValue=window.pageYOffset,this.data.currentTime=0,this.data.startTime=null,this.data.rafId=window.requestAnimationFrame(this.scrollStep)}},{key:"scrollStep",value:function(t){this.data.startTime||(this.data.startTime=t),this.data.currentTime=t-this.data.startTime;var e=i.default[this.props.easing](this.data.currentTime,this.data.startValue,this.props.topPosition,this.props.duration);window.pageYOffset<=this.props.topPosition?this.stopScrolling():(window.scrollTo(window.pageYOffset,e),this.data.rafId=window.requestAnimationFrame(this.scrollStep))}},{key:"stopScrolling",value:function(){window.cancelAnimationFrame(this.data.rafId)}},{key:"render",value:function(){var t=this.props.style,n=o.default.createElement("div",{style:t,onClick:this.handleClick},this.props.children),r=(0,c.default)({},e.defaultProps.style);return(r=(0,c.default)(r,t)).opacity=this.state.show?1:0,r.visibility=this.state.show?"visible":"hidden",r.transitionProperty="opacity, visibility",o.default.cloneElement(n,{style:r})}}]),e}(o.default.Component);e.default=l,l.defaultProps={duration:250,easing:"easeOutCubic",style:{position:"fixed",bottom:50,right:30,cursor:"pointer",transitionDuration:"0.2s",transitionTimingFunction:"linear",transitionDelay:"0s"},topPosition:0},l.propTypes={topPosition:a.default.number,showUnder:a.default.number.isRequired,easing:a.default.oneOf(["linear","easeInQuad","easeOutQuad","easeInOutQuad","easeInCubic","easeOutCubic","easeInOutCubic","easeInQuart","easeOutQuart","easeInOutQuart","easeInQuint","easeOutQuint","easeInOutQuint","easeInSine","easeOutSine","easeInOutSine","easeInExpo","easeOutExpo","easeInOutExpo","easeInCirc","easeOutCirc","easeInOutCirc","easeInElastic","easeOutElastic","easeInOutElastic","easeInBack","easeOutBack","easeInOutBack","easeInBounce","easeOutBounce","easeInOutBounce"]),duration:a.default.number,style:a.default.object}},rEGp:function(t,e){t.exports=function(t){var e=-1,n=Array(t.size);return t.forEach((function(t){n[++e]=t})),n}},sEf8:function(t,e){t.exports=function(t){return function(e){return t(e)}}},seXi:function(t,e,n){var r=n("qZTm"),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n,a,i,u){var c=1&n,s=r(t),l=s.length;if(l!=r(e).length&&!c)return!1;for(var f=l;f--;){var p=s[f];if(!(c?p in e:o.call(e,p)))return!1}var d=u.get(t);if(d&&u.get(e))return d==e;var h=!0;u.set(t,e),u.set(e,t);for(var b=c;++f<l;){var m=t[p=s[f]],v=e[p];if(a)var y=c?a(v,m,p,e,t,u):a(m,v,p,t,e,u);if(!(void 0===y?m===v||i(m,v,n,a,u):y)){h=!1;break}b||(b="constructor"==p)}if(h&&!b){var w=t.constructor,g=e.constructor;w==g||!("constructor"in t)||!("constructor"in e)||"function"==typeof w&&w instanceof w&&"function"==typeof g&&g instanceof g||(h=!1)}return u.delete(t),u.delete(e),h}},shjB:function(t,e){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},tQyb:function(t,e,n){"use strict";var r={linear:function(t,e,n,r){return(n-e)*t/r+e},easeInQuad:function(t,e,n,r){return(n-e)*(t/=r)*t+e},easeOutQuad:function(t,e,n,r){return-(n-e)*(t/=r)*(t-2)+e},easeInOutQuad:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t+e:-o/2*(--t*(t-2)-1)+e},easeInCubic:function(t,e,n,r){return(n-e)*(t/=r)*t*t+e},easeOutCubic:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t+1)+e},easeInOutCubic:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t+e:o/2*((t-=2)*t*t+2)+e},easeInQuart:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t+e},easeOutQuart:function(t,e,n,r){return-(n-e)*((t=t/r-1)*t*t*t-1)+e},easeInOutQuart:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t*t+e:-o/2*((t-=2)*t*t*t-2)+e},easeInQuint:function(t,e,n,r){return(n-e)*(t/=r)*t*t*t*t+e},easeOutQuint:function(t,e,n,r){return(n-e)*((t=t/r-1)*t*t*t*t+1)+e},easeInOutQuint:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?o/2*t*t*t*t*t+e:o/2*((t-=2)*t*t*t*t+2)+e},easeInSine:function(t,e,n,r){var o=n-e;return-o*Math.cos(t/r*(Math.PI/2))+o+e},easeOutSine:function(t,e,n,r){return(n-e)*Math.sin(t/r*(Math.PI/2))+e},easeInOutSine:function(t,e,n,r){return-(n-e)/2*(Math.cos(Math.PI*t/r)-1)+e},easeInExpo:function(t,e,n,r){return 0==t?e:(n-e)*Math.pow(2,10*(t/r-1))+e},easeOutExpo:function(t,e,n,r){var o=n-e;return t==r?e+o:o*(1-Math.pow(2,-10*t/r))+e},easeInOutExpo:function(t,e,n,r){var o=n-e;return 0===t?e:t===r?e+o:(t/=r/2)<1?o/2*Math.pow(2,10*(t-1))+e:o/2*(2-Math.pow(2,-10*--t))+e},easeInCirc:function(t,e,n,r){return-(n-e)*(Math.sqrt(1-(t/=r)*t)-1)+e},easeOutCirc:function(t,e,n,r){return(n-e)*Math.sqrt(1-(t=t/r-1)*t)+e},easeInOutCirc:function(t,e,n,r){var o=n-e;return(t/=r/2)<1?-o/2*(Math.sqrt(1-t*t)-1)+e:o/2*(Math.sqrt(1-(t-=2)*t)+1)+e},easeInElastic:function(t,e,n,r){var o,a,i,u=n-e;return i=1.70158,0===t?e:1==(t/=r)?e+u:((a=0)||(a=.3*r),(o=u)<Math.abs(u)?(o=u,i=a/4):i=a/(2*Math.PI)*Math.asin(u/o),-o*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a)+e)},easeOutElastic:function(t,e,n,r){var o,a,i,u=n-e;return i=1.70158,0===t?e:1==(t/=r)?e+u:((a=0)||(a=.3*r),(o=u)<Math.abs(u)?(o=u,i=a/4):i=a/(2*Math.PI)*Math.asin(u/o),o*Math.pow(2,-10*t)*Math.sin((t*r-i)*(2*Math.PI)/a)+u+e)},easeInOutElastic:function(t,e,n,r){var o,a,i,u=n-e;return i=1.70158,0===t?e:2==(t/=r/2)?e+u:((a=0)||(a=r*(.3*1.5)),(o=u)<Math.abs(u)?(o=u,i=a/4):i=a/(2*Math.PI)*Math.asin(u/o),t<1?o*Math.pow(2,10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a)*-.5+e:o*Math.pow(2,-10*(t-=1))*Math.sin((t*r-i)*(2*Math.PI)/a)*.5+u+e)},easeInBack:function(t,e,n,r,o){return void 0===o&&(o=1.70158),(n-e)*(t/=r)*t*((o+1)*t-o)+e},easeOutBack:function(t,e,n,r,o){return void 0===o&&(o=1.70158),(n-e)*((t=t/r-1)*t*((o+1)*t+o)+1)+e},easeInOutBack:function(t,e,n,r,o){var a=n-e;return void 0===o&&(o=1.70158),(t/=r/2)<1?a/2*(t*t*((1+(o*=1.525))*t-o))+e:a/2*((t-=2)*t*((1+(o*=1.525))*t+o)+2)+e},easeInBounce:function(t,e,n,o){var a=n-e;return a-r.easeOutBounce(o-t,0,a,o)+e},easeOutBounce:function(t,e,n,r){var o=n-e;return(t/=r)<1/2.75?o*(7.5625*t*t)+e:t<2/2.75?o*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?o*(7.5625*(t-=2.25/2.75)*t+.9375)+e:o*(7.5625*(t-=2.625/2.75)*t+.984375)+e},easeInOutBounce:function(t,e,n,o){var a=n-e;return t<o/2?.5*r.easeInBounce(2*t,0,a,o)+e:.5*r.easeOutBounce(2*t-o,0,a,o)+.5*a+e}};t.exports=r},tadb:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"DataView");t.exports=r},"ut/Y":function(t,e,n){var r=n("ZCpW"),o=n("GDhZ"),a=n("zZ0H"),i=n("Z0cm"),u=n("+c4W");t.exports=function(t){return"function"==typeof t?t:null==t?a:"object"==typeof t?i(t)?o(t[0],t[1]):r(t):u(t)}},"wF/u":function(t,e,n){var r=n("e5cp"),o=n("ExA7");t.exports=function t(e,n,a,i,u){return e===n||(null==e||null==n||!o(e)&&!o(n)?e!=e&&n!=n:r(e,n,a,i,t,u))}},wJg7:function(t,e){var n=/^(?:0|[1-9]\d*)$/;t.exports=function(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&n.test(t))&&t>-1&&t%1==0&&t<e}},xYSL:function(t,e){t.exports=function(t,e){return t.has(e)}},yGk4:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Set");t.exports=r},zZ0H:function(t,e){t.exports=function(t){return t}}}]);
//# sourceMappingURL=a24b81352cfcd84cc391edc6101ad3ea362eedae-cacd38cc13277c7479d5.js.map