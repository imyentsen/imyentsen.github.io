(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/pWc":function(e,t,n){},"0qDF":function(e,t,n){var i;void 0===(i=function(){return function(e){"use strict";var t,n,i,o,a,r,s,l,c,u,p={},f=function(){},m=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},d=function(e){var t=e.offsetWidth,n=e.offsetHeight,i=0,o=0;do{isNaN(e.offsetTop)||(i+=e.offsetTop),isNaN(e.offsetLeft)||(o+=e.offsetLeft)}while(null!==(e=e.offsetParent));return{width:t,height:n,top:i,left:o}},h=function(e){if(function(e){return null===e.offsetParent}(e))return!1;var t,i,o,a,p,f,m,h,g=d(e),y=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}}(n),v=function(e){return e!==window?{x:e.scrollLeft+d(e).left,y:e.scrollTop+d(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}}(n),b=g.width,w=g.height,E=g.top,k=g.left;return t=E+w*r,i=k+b-b*r,o=E+w-w*r,a=k+b*r,p=v.y+s,f=v.x-l+y.width,m=v.y-c+y.height,h=v.x+u,t<m&&o>p&&a<f&&i>h},g=function(){t||(clearTimeout(t),t=setTimeout((function(){p.engage(),t=null}),i))};return p.init=function(e){var t,p,d=function(e,t){return parseInt(e||t,10)};n=(e=e||{}).container||window,o=void 0===e.reset||e.reset,a=void 0===e.handheld||e.handheld,i=d(e.throttle,250),t=e.elemCushion,p=.15,r=parseFloat(t||p),s=d(e.offsetTop,0),l=d(e.offsetRight,0),c=d(e.offsetBottom,0),u=d(e.offsetLeft,0),f=e.callback||f,"querySelectorAll"in document?(m()&&a||!m())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",g,!1),n.addEventListener("scroll",g,!1),n.addEventListener("resize",g,!1)):(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&g()})),n.attachEvent("onscroll",g),n.attachEvent("onresize",g))):console.log("Emergence.js is not supported in this browser.")},p.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,i=0;i<n;i++)e=t[i],h(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,f(e,"visible")):!0===o?(e.setAttribute("data-emergence","hidden"),e.className=e.className,f(e,"reset")):!1===o&&f(e,"noreset");n||p.disengage()},p.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",g,!1),n.removeEventListener("resize",g,!1)):(n.detachEvent("onscroll",g),n.detachEvent("onresize",g)),clearTimeout(t)},p}()}.call(t,n,t,e))||(e.exports=i)},"7CyM":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var i=n("q1tI"),o=n.n(i);function a(){return o.a.createElement("svg",{focusable:"false",width:"1em",height:"1em",viewBox:"0 0 16 16"},o.a.createElement("g",{fill:"currentColor"},o.a.createElement("path",{d:"M1.5 1H6v1H2v12h12v-4h1v4.5l-.5.5h-13l-.5-.5v-13l.5-.5z"}),o.a.createElement("path",{d:"M15 1.5V8h-1V2.707L7.243 9.465l-.707-.708L13.293 2H8V1h6.5l.5.5z"})))}},NGwb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function o(e){return e&&e.__esModule?e:{default:e}}var a=n("q1tI"),r=o(a),s=o(n("hKI/")),l=o(n("17x9")),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var i=!0;i;){var o=e,a=t,r=n;i=!1,null===o&&(o=Function.prototype);var s=Object.getOwnPropertyDescriptor(o,a);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(r)}var c=Object.getPrototypeOf(o);if(null===c)return;e=c,t=a,n=r,i=!0,s=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return r.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(a.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:l.default.string,animateOut:l.default.string,offset:l.default.number,duration:l.default.number,delay:l.default.number,initiallyVisible:l.default.bool,animateOnce:l.default.bool,style:l.default.object,scrollableParentSelector:l.default.string,className:l.default.string,animatePreScroll:l.default.bool},e.exports=t.default},Szx7:function(e,t,n){},Zttt:function(e,t,n){"use strict";var i=n("9Hrx"),o=n("q1tI"),a=n.n(o),r=n("0qDF"),s=n.n(r),l=n("Wbzz"),c=(n("Szx7"),n("NGwb")),u=n.n(c),p=n("vOnD"),f=n("sxwA"),m=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title;return a.a.createElement(d,null,a.a.createElement(u.a,{animateIn:"fadeIn",animateOut:"fadeOut",offset:0,duration:.3},a.a.createElement(l.Link,{to:"/"},a.a.createElement(h,null,n))),a.a.createElement(u.a,{animateIn:"fadeIn",animateOut:"fadeOut",offset:0,duration:.3},"/about/"===t.pathname?a.a.createElement(l.Link,{to:"/about/"},a.a.createElement(g,{focus:!0},"About")):a.a.createElement(l.Link,{to:"/about/"},a.a.createElement(g,{normal:!0},"About"))),a.a.createElement(u.a,{animateIn:"fadeIn",animateOut:"fadeOut",offset:0,duration:.3},"/how/"===t.pathname?a.a.createElement(l.Link,{to:"/how/"},a.a.createElement(g,{focus:!0},"How")):a.a.createElement(l.Link,{to:"/how/"},a.a.createElement(g,{normal:!0},"How"))))},t}(a.a.Component),d=p.b.div.withConfig({displayName:"Navi__Nav",componentId:"xkujxp-0"})(["position:fixed;font-family:",";width:100%;padding:5px 0;@media (max-width:","){display:grid;grid-template-columns:repeat(auto-fill,100px);}@media print{display:none;}"],f.a.font.primary,f.a.screen.md),h=p.b.div.withConfig({displayName:"Navi__Brand",componentId:"xkujxp-1"})(["padding:10px 20px;font-weight:bold;",";@media (max-width:","){padding:10px 15px;}"],f.a.fontSize.lg,f.a.screen.md),g=p.b.div.withConfig({displayName:"Navi__NavLink",componentId:"xkujxp-2"})(["text-decoration:none;float:left;display:block;padding:0px 20px;font-weight:bold;width:100%;",";color:",";@media (max-width:","){padding:14px 15px;display:inline-block;}"," ",""],f.a.fontSize.sm,f.a.color.grayscale.S950,f.a.screen.md,(function(e){return e.normal&&Object(p.a)([":before{content:'';padding-left:0;overflow:hidden;transition:0.2s padding;}:hover{color:",";:before{padding:0 3px;}}"],f.a.color.grayscale.S950)}),(function(e){return e.focus&&Object(p.a)(["color:",";:before{content:'⁃';margin-right:5px;}"],f.a.color.primary.S400)})),y=n("AMwC"),v=n("7CyM"),b=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.title;return a.a.createElement(w,null,a.a.createElement(y.c,null,a.a.createElement(y.k,null,a.a.createElement(l.Link,{to:"/"},a.a.createElement(y.j,null,a.a.createElement("b",null,e))),a.a.createElement(E,null,a.a.createElement("div",null,a.a.createElement(l.Link,{to:"/about"},"About"),a.a.createElement("br",null),a.a.createElement(l.Link,{to:"/how"},"How"),a.a.createElement("br",null)),a.a.createElement("div",null,a.a.createElement("a",{href:"https://medium.com/@imyentsen/",target:"blank"},"Medium")," ",a.a.createElement(v.a,null),a.a.createElement("br",null),a.a.createElement("a",{href:"https://www.linkedin.com/in/yentsenliu/",target:"blank"},"Linkedin")," ",a.a.createElement(v.a,null)),a.a.createElement("div",null,a.a.createElement("a",{href:"mailto:imyentsen@gmail.com"},"imyentsen@gmail.com"),a.a.createElement("br",null),a.a.createElement(k,null,"© 2021 Ansin Lau. All Rights Reserved"))))))},t}(a.a.Component),w=p.b.div.withConfig({displayName:"Footer__FooterBG",componentId:"fandn7-0"})(["background-color:",";color:",";a{color:"," !important;}@media print{display:none;}"],f.a.color.secondary.S1000,f.a.color.white,f.a.color.white),E=p.b.div.withConfig({displayName:"Footer__FooterGrid",componentId:"fandn7-1"})(["display:grid;grid-template-columns:1fr 2fr 2fr;grid-gap:15px;",";@media (max-width:","){grid-template-columns:1fr;}"],f.a.fontSize.sm,f.a.screen.md),k=p.b.div.withConfig({displayName:"Footer__CopyRight",componentId:"fandn7-2"})(["color:",";"],f.a.color.grayscale.S600),S=n("jFb6"),x=(n("ewTs"),n("qHiR"),n("/pWc"),n("fxB9"),function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){s.a.init()},n.componentDidUpdate=function(){s.a.init()},n.render=function(){var e=this.props.children;return a.a.createElement("div",null,a.a.createElement(m,Object.assign({title:S.siteMetadata.title},this.props)),e,a.a.createElement(b,Object.assign({title:S.siteMetadata.title},this.props)))},t}(a.a.Component));t.a=x},ewTs:function(e,t,n){},fxB9:function(e,t,n){},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,r=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,p=Math.max,f=Math.min,m=function(){return c.Date.now()};function d(e,t,n){var i,o,a,r,s,l,c=0,u=!1,d=!1,y=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,a=o;return i=o=void 0,c=t,r=e.apply(a,n)}function b(e){return c=e,s=setTimeout(E,t),u?v(e):r}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function E(){var e=m();if(w(e))return k(e);s=setTimeout(E,function(e){var n=t-(e-l);return d?f(n,a-(e-c)):n}(e))}function k(e){return s=void 0,y&&i?v(e):(i=o=void 0,r)}function S(){var e=m(),n=w(e);if(i=arguments,o=this,l=e,n){if(void 0===s)return b(l);if(d)return s=setTimeout(E,t),v(l)}return void 0===s&&(s=setTimeout(E,t)),r}return t=g(t)||0,h(n)&&(u=!!n.leading,a=(d="maxWait"in n)?p(g(n.maxWait)||0,t):a,y="trailing"in n?!!n.trailing:y),S.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=o=s=void 0},S.flush=function(){return void 0===s?r:k(m())},S}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=o.test(e);return s||a.test(e)?r(e.slice(2),s?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),d(e,t,{leading:i,maxWait:t,trailing:o})}}).call(this,n("yLpj"))},jFb6:function(e,t){(function(t){e.exports={siteMetadata:{title:"Ansin",description:"Ansin's portfolio",siteUrl:"https://imyentsen.github.io",author:"Ansinlau",twitter:"Ansinlau",adsense:"",image:"/img/og-image.jpg"},pathPrefix:"/",plugins:["gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images-grid",options:{className:"grid-image",gridGap:"15px",margin:"15px auto",showCaptions:"true"}},{resolve:"gatsby-remark-images",options:{maxWidth:2e3,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem; margin-top: 1.0725rem;"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants",{resolve:"gatsby-plugin-alias-imports",options:{alias:{"@style":t+"/src/style"}}}]}},{resolve:"gatsby-source-filesystem",options:{path:"./src/data/"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/images/",name:"images"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},"gatsby-transformer-json",{resolve:"gatsby-plugin-manifest",options:{name:"Ansin Lau",short_name:"Ansin",description:"Portfolio of Ansin Lau",homepage_url:"https://imyentsen.github.io",start_url:"/",background_color:"#fff",theme_color:"#ff786e",display:"standalone",icons:[{src:"/img/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"@wyze/gatsby-plugin-google-analytics",options:{trackingId:"UA-130617271-1"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-plugin-google-fonts",options:{fonts:["Sora:400,700","Noto Sans TC:700","Noto Serif TC:400,700","Kameron:700","Pragati Narrow:700","Cormorant Garamond:700"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-plugin-styled-components"]}}).call(this,"/")},qHiR:function(e,t,n){}}]);
//# sourceMappingURL=c8f84d015646e98357532caff3e06945500e7e89-07c9356b8be6b24e0302.js.map