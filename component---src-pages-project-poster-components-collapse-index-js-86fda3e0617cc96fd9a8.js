(window.webpackJsonp=window.webpackJsonp||[]).push([[21,20],{"5ClE":function(e,t,n){"use strict";n.r(t);var i=n("9XZU");n.d(t,"default",(function(){return i.default}))},"9XZU":function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),s=n.n(i),r=n("BtEH"),o=n.n(r),a=n("vOnD"),l=n("sxwA");t.default=function(e){var t=e.title,n=e.children;return s.a.createElement(p,null,s.a.createElement(o.a,{className:"faq",openedClassName:"faq active",triggerClassName:"faq-title",triggerOpenedClassName:"faq-title active",triggerTagName:"button",contentInnerClassName:"faq-content",trigger:t,transitionTime:300,easing:"ease-out"},n,s.a.createElement(g,null)))};var p=a.b.div.withConfig({displayName:"collapse__Wrapper",componentId:"hd059w-0"})(["&:hover{cursor:pointer;}.faq{border-bottom:1px solid ",";}.faq-title{",";color:",";border:none;background:none;outline:none;width:100%;text-align:left;cursor:pointer;font-weight:bold;padding:12px 72px 12px 0;position:relative;&::after{content:'';display:block;width:10px;height:10px;border-left:2px solid  ",";border-bottom:2px solid  ",";position:absolute;top:15px;right:24px;transform:rotate(-45deg);transition:transform 0.3s ease-in-out;}&.active{&::after{transform:rotate(135deg);}}}.faq-content{padding:0;line-height:26px;",";color:",";}"],l.a.color.grayscale.S1000,l.a.fontSize.sm,l.a.color.grayscale.S1000,l.a.color.grayscale.S1000,l.a.color.grayscale.S1000,l.a.fontSize.sm,l.a.color.grayscale.S1000),g=a.b.div.withConfig({displayName:"collapse__SpaceSpan",componentId:"hd059w-1"})(["height:15px;width:100%;"])},BtEH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),r=n("q1tI"),o=l(r),a=l(n("17x9"));function l(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=void 0,n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||this.state.inTransition||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening(),this.props.onTriggerOpening()):(this.closeCollapsible(),this.props.onClosing(),this.props.onTriggerClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?o.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?o.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(e){e.target===this.innerRef&&(this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen()))}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",s=this.props.triggerDisabled?"is-disabled":"",r=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,a=this.props.contentContainerTagName,l=this.props.triggerTagName,p=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,g=this.props.classParentString+"__trigger "+n+" "+s+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),h=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),u=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,d=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return o.default.createElement(a,i({className:h.trim()},this.props.containerElementProps),o.default.createElement(l,i({className:g.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),r),this.renderNonClickableTriggerElement(),o.default.createElement("div",{className:u.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},o.default.createElement("div",{className:d.trim()},p)))}}]),t}(r.Component);p.propTypes={transitionTime:a.default.number,transitionCloseTime:a.default.number,triggerTagName:a.default.string,easing:a.default.string,open:a.default.bool,containerElementProps:a.default.object,triggerElementProps:a.default.object,classParentString:a.default.string,openedClassName:a.default.string,triggerStyle:a.default.object,triggerClassName:a.default.string,triggerOpenedClassName:a.default.string,contentOuterClassName:a.default.string,contentInnerClassName:a.default.string,accordionPosition:a.default.oneOfType([a.default.string,a.default.number]),handleTriggerClick:a.default.func,onOpen:a.default.func,onClose:a.default.func,onOpening:a.default.func,onClosing:a.default.func,onTriggerOpening:a.default.func,onTriggerClosing:a.default.func,trigger:a.default.oneOfType([a.default.string,a.default.element]),triggerWhenOpen:a.default.oneOfType([a.default.string,a.default.element]),triggerDisabled:a.default.bool,lazyRender:a.default.bool,overflowWhenOpen:a.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:a.default.bool,triggerSibling:a.default.oneOfType([a.default.element,a.default.func]),tabIndex:a.default.number,contentContainerTagName:a.default.string},p.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=p},sxwA:function(e,t,n){"use strict";t.a={font:{display:"Sora, sans-serif",primary:"'Sora', sans-serif",secondary:"'PT Serif' , serif"},fontSize:{xxs:"font-size: 0.7rem !important; line-height: 1.2rem",xs:"font-size: 0.8rem !important; line-height: 1.2rem",sm:"font-size: 0.9rem !important; line-height: 1.4rem",base:"font-size: 1rem !important; line-height: 1.5rem",lg:"font-size: 1.2rem !important; line-height: 1.7rem",xl:"font-size: 2rem !important; line-height: 2.2rem",xxl:"font-size: 3.3rem !important; line-height: 3.6rem",xxxl:"font-size: 5rem !important; line-height: 5rem",xxxxl:"font-size: 7rem !important; line-height: 7rem"},color:{white:"#FFFFFF",black:"#000000",primary:{S100:"#E3FCFF",S200:"#C2ECF9",S300:"#92CEEF",S400:"#2A92DD",S500:"#0064C1",S600:"#09468E",S700:"#042B66",S800:"#012249",S900:"#000928",S1000:"#000212",S100D:"#F7FAFA",S200D:"#F2F7F8",S300D:"#EAEFF2",S400D:"#D2DCE4",S500D:"#B9C4CD",S600D:"#78818C",S700D:"#565C65",S800D:"#353D46",S900D:"#181A22",S1000D:"#0A0B10"},secondary:{S100:"#E4FFE3",S200:"#C2F9CB",S300:"#92EFAC",S400:"#2ADD87",S500:"#00C17C",S600:"#098E5E",S700:"#04664E",S800:"#01493B",S900:"#002820",S1000:"#001211",S100D:"#F8FFF8",S200D:"#F1FBF3",S300D:"#E4F3E8",S400D:"#D9E8E1",S500D:"#B1C2BC",S600D:"#899892",S700D:"#5A6865",S800D:"#3D4745",S900D:"#232928",S1000D:"#0D1111"},supplementary:{S100:"#FFFBE9",S200:"#FFF4BB",S300:"#FFEA92",S400:"#FFDF5A",S500:"#FFD00D",S600:"#FFBC00",S700:"#F29B00",S800:"#ED8100",S900:"#D16800",S1000:"#BB4F00",S300D:"#ebe7dd"},grayscale:{S100:"#FAFAFA",S200:"#F5F5F5",S300:"#EEEEEE",S400:"#E0E0E0",S500:"#BDBDBD",S600:"#9E9E9E",S700:"#757575",S800:"#616161",S900:"#424242",S1000:"#212121"},decorative:{Orange:"#FE8B25",SkyBlue:"#DAEEFE",Yellow:"#FEF37C",Green:"#3D7551",Prune:"#742723"}},screen:{xs:"575px",sm:"767px",md:"991px",lg:"1199px",xl:"2000px",xxl:"3000px"}}}}]);
//# sourceMappingURL=component---src-pages-project-poster-components-collapse-index-js-86fda3e0617cc96fd9a8.js.map