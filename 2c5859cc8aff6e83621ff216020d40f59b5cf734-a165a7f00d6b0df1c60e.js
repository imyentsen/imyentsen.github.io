(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/pWc":function(e,t,n){},"0qDF":function(e,t,n){var i;void 0===(i=function(){return function(e){"use strict";var t,n,i,a,o,r,s,l,c,u,p={},m=function(){},f=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|playbook|silk/i.test(navigator.userAgent)},d=function(e){var t=e.offsetWidth,n=e.offsetHeight,i=0,a=0;do{isNaN(e.offsetTop)||(i+=e.offsetTop),isNaN(e.offsetLeft)||(a+=e.offsetLeft)}while(null!==(e=e.offsetParent));return{width:t,height:n,top:i,left:a}},h=function(e){if(function(e){return null===e.offsetParent}(e))return!1;var t,i,a,o,p,m,f,h,g=d(e),v=function(e){var t,n;return e!==window?(t=e.clientWidth,n=e.clientHeight):(t=window.innerWidth||document.documentElement.clientWidth,n=window.innerHeight||document.documentElement.clientHeight),{width:t,height:n}}(n),y=function(e){return e!==window?{x:e.scrollLeft+d(e).left,y:e.scrollTop+d(e).top}:{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}}(n),b=g.width,w=g.height,E=g.top,k=g.left;return t=E+w*r,i=k+b-b*r,a=E+w-w*r,o=k+b*r,p=y.y+s,m=y.x-l+v.width,f=y.y-c+v.height,h=y.x+u,t<f&&a>p&&o<m&&i>h},g=function(){t||(clearTimeout(t),t=setTimeout((function(){p.engage(),t=null}),i))};return p.init=function(e){var t,p,d=function(e,t){return parseInt(e||t,10)};n=(e=e||{}).container||window,a=void 0===e.reset||e.reset,o=void 0===e.handheld||e.handheld,i=d(e.throttle,250),t=e.elemCushion,p=.15,r=parseFloat(t||p),s=d(e.offsetTop,0),l=d(e.offsetRight,0),c=d(e.offsetBottom,0),u=d(e.offsetLeft,0),m=e.callback||m,"querySelectorAll"in document?(f()&&o||!f())&&(document.documentElement.className+=" emergence",window.addEventListener?(window.addEventListener("load",g,!1),n.addEventListener("scroll",g,!1),n.addEventListener("resize",g,!1)):(document.attachEvent("onreadystatechange",(function(){"complete"===document.readyState&&g()})),n.attachEvent("onscroll",g),n.attachEvent("onresize",g))):console.log("Emergence.js is not supported in this browser.")},p.engage=function(){for(var e,t=document.querySelectorAll("[data-emergence]"),n=t.length,i=0;i<n;i++)e=t[i],h(e)?(e.setAttribute("data-emergence","visible"),e.className=e.className,m(e,"visible")):!0===a?(e.setAttribute("data-emergence","hidden"),e.className=e.className,m(e,"reset")):!1===a&&m(e,"noreset");n||p.disengage()},p.disengage=function(){window.removeEventListener?(n.removeEventListener("scroll",g,!1),n.removeEventListener("resize",g,!1)):(n.detachEvent("onscroll",g),n.detachEvent("onresize",g)),clearTimeout(t)},p}()}.call(t,n,t,e))||(e.exports=i)},HXEV:function(e,t,n){},NGwb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function a(e){return e&&e.__esModule?e:{default:e}}var o=n("q1tI"),r=a(o),s=a(n("hKI/")),l=a(n("17x9")),c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t,n){for(var i=!0;i;){var a=e,o=t,r=n;i=!1,null===a&&(a=Function.prototype);var s=Object.getOwnPropertyDescriptor(a,o);if(void 0!==s){if("value"in s)return s.value;var l=s.get;if(void 0===l)return;return l.call(r)}var c=Object.getPrototypeOf(a);if(null===c)return;e=c,t=o,n=r,i=!0,s=c=void 0}}(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.serverSide="undefined"==typeof window,this.listener=(0,s.default)(this.handleScroll.bind(this),50),this.visibility={onScreen:!1,inViewport:!1},this.state={classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"getElementTop",value:function(e){for(var t=0;e&&void 0!==e.offsetTop&&void 0!==e.clientTop;)t+=e.offsetTop+e.clientTop,e=e.offsetParent;return t}},{key:"getScrollPos",value:function(){return void 0!==this.scrollableParent.pageYOffset?this.scrollableParent.pageYOffset:this.scrollableParent.scrollTop}},{key:"getScrollableParentHeight",value:function(){return void 0!==this.scrollableParent.innerHeight?this.scrollableParent.innerHeight:this.scrollableParent.clientHeight}},{key:"getViewportTop",value:function(){return this.getScrollPos()+this.props.offset}},{key:"getViewportBottom",value:function(){return this.getScrollPos()+this.getScrollableParentHeight()-this.props.offset}},{key:"isInViewport",value:function(e){return e>=this.getViewportTop()&&e<=this.getViewportBottom()}},{key:"isAboveViewport",value:function(e){return e<this.getViewportTop()}},{key:"isBelowViewport",value:function(e){return e>this.getViewportBottom()}},{key:"inViewport",value:function(e,t){return this.isInViewport(e)||this.isInViewport(t)||this.isAboveViewport(e)&&this.isBelowViewport(t)}},{key:"onScreen",value:function(e,t){return!this.isAboveScreen(t)&&!this.isBelowScreen(e)}},{key:"isAboveScreen",value:function(e){return e<this.getScrollPos()}},{key:"isBelowScreen",value:function(e){return e>this.getScrollPos()+this.getScrollableParentHeight()}},{key:"getVisibility",value:function(){var e=this.getElementTop(this.node)-this.getElementTop(this.scrollableParent),t=e+this.node.clientHeight;return{inViewport:this.inViewport(e,t),onScreen:this.onScreen(e,t)}}},{key:"componentDidMount",value:function(){if(!this.serverSide){var e=this.props.scrollableParentSelector;this.scrollableParent=e?document.querySelector(e):window,this.scrollableParent&&this.scrollableParent.addEventListener?this.scrollableParent.addEventListener("scroll",this.listener):console.warn("Cannot find element by locator: "+this.props.scrollableParentSelector),this.props.animatePreScroll&&this.handleScroll()}}},{key:"componentWillUnmount",value:function(){clearTimeout(this.delayedAnimationTimeout),clearTimeout(this.callbackTimeout),window&&window.removeEventListener&&window.removeEventListener("scroll",this.listener)}},{key:"visibilityHasChanged",value:function(e,t){return e.inViewport!==t.inViewport||e.onScreen!==t.onScreen}},{key:"animate",value:function(e,t){var n=this;this.delayedAnimationTimeout=setTimeout((function(){n.animating=!0,n.setState({classes:"animated "+e,style:{animationDuration:n.props.duration+"s"}}),n.callbackTimeout=setTimeout(t,1e3*n.props.duration)}),this.props.delay)}},{key:"animateIn",value:function(e){var t=this;this.animate(this.props.animateIn,(function(){t.props.animateOnce||(t.setState({style:{animationDuration:t.props.duration+"s",opacity:1}}),t.animating=!1);var n=t.getVisibility();e&&e(n)}))}},{key:"animateOut",value:function(e){var t=this;this.animate(this.props.animateOut,(function(){t.setState({classes:"animated",style:{animationDuration:t.props.duration+"s",opacity:0}});var n=t.getVisibility();n.inViewport&&t.props.animateIn?t.animateIn(t.props.afterAnimatedIn):t.animating=!1,e&&e(n)}))}},{key:"handleScroll",value:function(){if(!this.animating){var e=this.getVisibility();this.visibilityHasChanged(this.visibility,e)&&(clearTimeout(this.delayedAnimationTimeout),e.onScreen?e.inViewport&&this.props.animateIn?this.animateIn(this.props.afterAnimatedIn):e.onScreen&&this.visibility.inViewport&&this.props.animateOut&&1===this.state.style.opacity&&this.animateOut(this.props.afterAnimatedOut):this.setState({classes:"animated",style:{animationDuration:this.props.duration+"s",opacity:this.props.initiallyVisible?1:0}}),this.visibility=e)}}},{key:"render",value:function(){var e=this,t=this.props.className?this.props.className+" "+this.state.classes:this.state.classes;return r.default.createElement("div",{ref:function(t){e.node=t},className:t,style:Object.assign({},this.state.style,this.props.style)},this.props.children)}}]),t}(o.Component);t.default=c,c.defaultProps={offset:150,duration:1,initiallyVisible:!1,delay:0,animateOnce:!1,animatePreScroll:!0},c.propTypes={animateIn:l.default.string,animateOut:l.default.string,offset:l.default.number,duration:l.default.number,delay:l.default.number,initiallyVisible:l.default.bool,animateOnce:l.default.bool,style:l.default.object,scrollableParentSelector:l.default.string,className:l.default.string,animatePreScroll:l.default.bool},e.exports=t.default},Szx7:function(e,t,n){},Zttt:function(e,t,n){"use strict";var i=n("dI71"),a=n("q1tI"),o=n.n(a),r=n("0qDF"),s=n.n(r),l=n("Wbzz"),c=(n("gR2x"),n("Szx7"),n("NGwb")),u=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.location,n=e.title;return o.a.createElement("nav",{className:"navbar navbar-expand bg-transparent fixed-top px-md-4 px-sm-3 px-xs-0"},o.a.createElement(l.Link,{className:"text-center",to:"/"},o.a.createElement("h2",{className:"navbar-brand mt-2"},n))," ",o.a.createElement("br",null),o.a.createElement(u.a,{animateIn:"fadeIn",animateOut:"fadeOut",offset:0,duration:.3},o.a.createElement("ul",{className:"navbar-nav mr-auto"},o.a.createElement("li",{className:"/about/"===t.pathname?"nav-item active":"nav-item no-show"},o.a.createElement(l.Link,{to:"/about/",className:"nav-link"},"About")),o.a.createElement("li",{className:"/updates/"===t.pathname?"nav-item active":"nav-item no-show"},o.a.createElement(l.Link,{to:"/about/",className:"nav-link"},"Updates")),o.a.createElement("li",{className:"/"===t.pathname?"nav-item home":"nav-item no-show"},o.a.createElement(l.Link,{to:"/about/",className:"nav-link"},"About")),o.a.createElement("li",{className:"/"===t.pathname?"nav-item home":"nav-item no-show"},o.a.createElement("a",{className:"nav-link link-cv",href:"https://drive.google.com/uc?export=download&id=1R8BOBuMuS7ur56i1OkCF4FN9SkZs9kR-"},"CV")),o.a.createElement("li",{className:"/"===t.pathname?"nav-item home":"nav-item no-show"},o.a.createElement(l.Link,{to:"/updates/",className:"nav-link"},"Updates")))))},t}(o.a.Component),m=(n("HXEV"),function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e=this.props.title;return o.a.createElement("div",{className:"footer text-white"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-3 col-12"},o.a.createElement(l.Link,{className:"",to:"/"},o.a.createElement("h3",{className:"brand"},e))),o.a.createElement("div",{className:"col-md-5 col email"},o.a.createElement("p",null,"imyentsen[at]gmail.com",o.a.createElement("br",null),"© 2020 Yentsen Liu. All Rights Reserved")))))},t}(o.a.Component)),f=n("jFb6"),d=(n("ewTs"),n("qHiR"),n("/pWc"),n("fxB9"),function(e){function t(){return e.apply(this,arguments)||this}Object(i.a)(t,e);var n=t.prototype;return n.componentDidMount=function(){s.a.init()},n.componentDidUpdate=function(){s.a.init()},n.render=function(){var e=this.props.children;return o.a.createElement("div",null,o.a.createElement(p,Object.assign({title:f.siteMetadata.title},this.props)),e,o.a.createElement(m,Object.assign({title:f.siteMetadata.title},this.props)))},t}(o.a.Component));t.a=d},ewTs:function(e,t,n){},fxB9:function(e,t,n){},gR2x:function(e,t,n){},"hKI/":function(e,t,n){(function(t){var n=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,o=/^0o[0-7]+$/i,r=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,p=Math.max,m=Math.min,f=function(){return c.Date.now()};function d(e,t,n){var i,a,o,r,s,l,c=0,u=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=a;return i=a=void 0,c=t,r=e.apply(o,n)}function b(e){return c=e,s=setTimeout(E,t),u?y(e):r}function w(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=o}function E(){var e=f();if(w(e))return k(e);s=setTimeout(E,function(e){var n=t-(e-l);return d?m(n,o-(e-c)):n}(e))}function k(e){return s=void 0,v&&i?y(e):(i=a=void 0,r)}function S(){var e=f(),n=w(e);if(i=arguments,a=this,l=e,n){if(void 0===s)return b(l);if(d)return s=setTimeout(E,t),y(l)}return void 0===s&&(s=setTimeout(E,t)),r}return t=g(t)||0,h(n)&&(u=!!n.leading,o=(d="maxWait"in n)?p(g(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),S.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=a=s=void 0},S.flush=function(){return void 0===s?r:k(f())},S}function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function g(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=a.test(e);return s||o.test(e)?r(e.slice(2),s?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return h(n)&&(i="leading"in n?!!n.leading:i,a="trailing"in n?!!n.trailing:a),d(e,t,{leading:i,maxWait:t,trailing:a})}}).call(this,n("yLpj"))},jFb6:function(e,t){(function(t){e.exports={siteMetadata:{title:"Ansin",description:"Ansin's portfolio",siteUrl:"https://yentsenliu.com",author:"Ansinlau",twitter:"Ansinlau",adsense:"",image:"/img/og-image.jpg"},pathPrefix:"/",plugins:["gatsby-transformer-sharp","gatsby-plugin-sharp",{resolve:"gatsby-transformer-remark",options:{plugins:[{resolve:"gatsby-remark-images-grid",options:{className:"grid-image",gridGap:"15px",margin:"15px auto",showCaptions:"true"}},{resolve:"gatsby-remark-images",options:{maxWidth:2e3,linkImagesToOriginal:!1,wrapperStyle:"margin-bottom: 1.0725rem;"}},{resolve:"gatsby-remark-responsive-iframe",options:{wrapperStyle:"margin-bottom: 1.0725rem; margin-top: 1.0725rem;"}},"gatsby-remark-prismjs","gatsby-remark-copy-linked-files","gatsby-remark-smartypants",{resolve:"gatsby-plugin-alias-imports",options:{alias:{"@style":t+"/src/style"}}}]}},{resolve:"gatsby-source-filesystem",options:{path:"./src/data/"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/images/",name:"images"}},{resolve:"gatsby-source-filesystem",options:{path:t+"/content/posts/",name:"posts"}},"gatsby-transformer-json",{resolve:"gatsby-plugin-manifest",options:{name:"Yentsen Liu",short_name:"Yentsen Liu",description:"Interface/Strategic/Democracy Design Portfolio of Yentsen Liu",homepage_url:"https://yentsenliu.com",start_url:"/",background_color:"#fff",theme_color:"#ff786e",display:"standalone",icons:[{src:"/img/android-chrome-192x192.png",sizes:"192x192",type:"image/png"},{src:"/img/android-chrome-512x512.png",sizes:"512x512",type:"image/png"}]}},{resolve:"@wyze/gatsby-plugin-google-analytics",options:{trackingId:"UA-130617271-1"}},{resolve:"gatsby-plugin-netlify",options:{mergeSecurityHeaders:!0,mergeLinkHeaders:!0,mergeCachingHeaders:!0}},{resolve:"gatsby-plugin-google-fonts",options:{fonts:["Markazi+Text:400,500","karla:400,700"]}},"gatsby-plugin-catch-links","gatsby-plugin-offline","gatsby-plugin-react-helmet","gatsby-plugin-react-next","gatsby-plugin-sass","gatsby-plugin-sitemap","gatsby-plugin-twitter","gatsby-plugin-styled-components"]}}).call(this,"/")},qHiR:function(e,t,n){}}]);
//# sourceMappingURL=2c5859cc8aff6e83621ff216020d40f59b5cf734-a165a7f00d6b0df1c60e.js.map