(window.webpackJsonp=window.webpackJsonp||[]).push([[32,23],{"2TIv":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("kD0k"),l=n.n(a),i=(n("ls82"),n("/S4K")),o=n("uRdJ"),r=n("9Hrx"),s=n("q1tI"),p=n.n(s),c=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleChange=function(){var e=Object(i.a)(l.a.mark((function e(t){var n,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.target,a=n.files,e.next=4,this.setState({preview:URL.createObjectURL(a[0])});case 4:return e.next=6,this.props.parentCallback(this.state);case 6:return e.next=8,t.preventDefault();case 8:return e.next=10,console.log(this.state.preview);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),n.state={preview:null},n.handleChange=n.handleChange.bind(Object(o.a)(n)),n}return Object(r.a)(t,e),t.prototype.render=function(){return p.a.createElement("div",null,p.a.createElement("label",{htmlFor:"upload-button"},this.state.preview?p.a.createElement("img",{src:this.state.preview,alt:"dummy",width:"300",height:"auto"}):""),p.a.createElement("input",{type:"file",id:"upload-button",onChange:this.handleChange}))},t}(p.a.Component)},"5ClE":function(e,t,n){"use strict";n.r(t);var a=n("9XZU");n.d(t,"default",(function(){return a.default}))},"9XZU":function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),i=n("BtEH"),o=n.n(i),r=n("vOnD"),s=n("sxwA");t.default=function(e){var t=e.title,n=e.children;return l.a.createElement(p,null,l.a.createElement(o.a,{className:"faq",openedClassName:"faq active",triggerClassName:"faq-title",triggerOpenedClassName:"faq-title active",triggerTagName:"button",contentInnerClassName:"faq-content",trigger:t,transitionTime:300,easing:"ease-out"},n,l.a.createElement(c,null)))};var p=r.b.div.withConfig({displayName:"collapse__Wrapper",componentId:"hd059w-0"})(["&:hover{cursor:pointer;}.faq{border-bottom:1px solid ",";}.faq-title{",";color:",";border:none;background:none;outline:none;width:100%;text-align:left;cursor:pointer;font-weight:bold;padding:12px 72px 12px 0;position:relative;&::after{content:'';display:block;width:10px;height:10px;border-left:2px solid  ",";border-bottom:2px solid  ",";position:absolute;top:15px;right:24px;transform:rotate(-45deg);transition:transform 0.3s ease-in-out;}&.active{&::after{transform:rotate(135deg);}}}.faq-content{padding:0;line-height:26px;",";color:",";}"],s.a.color.grayscale.S1000,s.a.fontSize.sm,s.a.color.grayscale.S1000,s.a.color.grayscale.S1000,s.a.color.grayscale.S1000,s.a.fontSize.sm,s.a.color.grayscale.S1000),c=r.b.div.withConfig({displayName:"collapse__SpaceSpan",componentId:"hd059w-1"})(["height:15px;width:100%;"])},BtEH:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("q1tI"),o=s(i),r=s(n("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.timeout=void 0,n.handleTriggerClick=n.handleTriggerClick.bind(n),n.handleTransitionEnd=n.handleTransitionEnd.bind(n),n.continueOpenCollapsible=n.continueOpenCollapsible.bind(n),n.setInnerRef=n.setInnerRef.bind(n),e.open?n.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:n.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidUpdate",value:function(e,t){var n=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){n.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||this.state.inTransition||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening(),this.props.onTriggerOpening()):(this.closeCollapsible(),this.props.onClosing(),this.props.onTriggerClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?o.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?o.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(e){e.target===this.innerRef&&(this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen()))}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},n=this.state.isClosed?"is-closed":"is-open",l=this.props.triggerDisabled?"is-disabled":"",i=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,r=this.props.contentContainerTagName,s=this.props.triggerTagName,p=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,c=this.props.classParentString+"__trigger "+n+" "+l+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),u=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),h=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,m=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return o.default.createElement(r,a({className:u.trim()},this.props.containerElementProps),o.default.createElement(s,a({className:c.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var n=t.key;(" "===n&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===n)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),i),this.renderNonClickableTriggerElement(),o.default.createElement("div",{className:h.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},o.default.createElement("div",{className:m.trim()},p)))}}]),t}(i.Component);p.propTypes={transitionTime:r.default.number,transitionCloseTime:r.default.number,triggerTagName:r.default.string,easing:r.default.string,open:r.default.bool,containerElementProps:r.default.object,triggerElementProps:r.default.object,classParentString:r.default.string,openedClassName:r.default.string,triggerStyle:r.default.object,triggerClassName:r.default.string,triggerOpenedClassName:r.default.string,contentOuterClassName:r.default.string,contentInnerClassName:r.default.string,accordionPosition:r.default.oneOfType([r.default.string,r.default.number]),handleTriggerClick:r.default.func,onOpen:r.default.func,onClose:r.default.func,onOpening:r.default.func,onClosing:r.default.func,onTriggerOpening:r.default.func,onTriggerClosing:r.default.func,trigger:r.default.oneOfType([r.default.string,r.default.element]),triggerWhenOpen:r.default.oneOfType([r.default.string,r.default.element]),triggerDisabled:r.default.bool,lazyRender:r.default.bool,overflowWhenOpen:r.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:r.default.bool,triggerSibling:r.default.oneOfType([r.default.element,r.default.func]),tabIndex:r.default.number,contentContainerTagName:r.default.string},p.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=p},Jg1O:function(e,t,n){"use strict";n.r(t);var a=n("uRdJ"),l=n("9Hrx"),i=n("q1tI"),o=n.n(i),r=n("v1X+"),s=n("vOnD"),p=n("sxwA"),c=n("AMwC"),u=n("5ClE"),h=n("ReXd"),m=n("2TIv"),d=n("jdF3"),g=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleCallback=function(e){n.setState({date:e.selectedDay,time:e.time})},n.coverCallback=function(e){n.setState({pictures:e.preview}),console.log("Image data is called:"+n.state.pictures)},n.state={title:null,subTitle:null,speakerName:null,speakerInfo:null,hostName:null,hostInfo:null,commentatorName:null,commentatorInfo:null,abtTalk:null,abtSpeaker:null,date:null,time:null,place:null,organizer:null,coOrganizer:null,url:null,pictures:null},n.handleChange=n.handleChange.bind(Object(a.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(a.a)(n)),n.coverCallback=n.coverCallback.bind(Object(a.a)(n)),n}Object(l.a)(t,e);var n=t.prototype;return n.handleChange=function(e){var t,n=e.target,a=n.value,l=n.name;this.setState(((t={})[l]=a,t)),console.log(this.state)},n.handleSubmit=function(e){this.props.parentCallback(this.state),e.preventDefault(),console.log("The current state is"+this.state.pictures)},n.onPrint=function(e){e.preventDefault(),window.print()},n.render=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{title:"週四社會學海報產生器",desc:"週四社會學系列講座海報產生器"}),o.a.createElement(c.j,null,o.a.createElement("b",null,"Poster Creator"),o.a.createElement("br",null),o.a.createElement("small",null,"Department of Sociology, NTU")),o.a.createElement(c.d,{onSubmit:this.handleSubmit},o.a.createElement(E,null,o.a.createElement(u.default,{title:"講座主題",key:"Topic",open:"true"},o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"title"},"標題"),o.a.createElement("input",{id:"title",type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Title"})),o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"subTitle"},"副標題"),o.a.createElement("input",{id:"subTitle",type:"text",name:"subTitle",value:this.state.subtitle,onChange:this.handleChange,placeholder:"Sub-title"}))),o.a.createElement(u.default,{title:"講者與主持",key:"Speaker & Host"},o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"speaker"},"講者"),o.a.createElement(c.f,null,o.a.createElement("input",{type:"text",name:"speakerName",value:this.state.speakerName,onChange:this.handleChange,placeholder:"Name"}),o.a.createElement("input",{type:"text",name:"speakerInfo",value:this.state.speakerInfo,onChange:this.handleChange,placeholder:"Info"}))),o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"host"},"主持"),o.a.createElement(c.f,null,o.a.createElement("input",{type:"text",name:"hostName",value:this.state.hostName,onChange:this.handleChange,placeholder:"Name"}),o.a.createElement("input",{type:"text",name:"hostInfo",value:this.state.hostInfo,onChange:this.handleChange,"aria-label":"Host Info",placeholder:"Info"})))),o.a.createElement(u.default,{title:"與談人",key:"Commentator"},o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"Commentator"},"與談人"),o.a.createElement(c.f,null,o.a.createElement("input",{type:"text",name:"commentatorName",value:this.state.commentatorName,onChange:this.handleChange,placeholder:"Name (Optional)"}),o.a.createElement("input",{type:"text",name:"commentatorInfo",value:this.state.commentatorInfo,onChange:this.handleChange,"aria-label":"Commentator Info",placeholder:"Info (Optional)"})))),o.a.createElement(u.default,{title:"關於",key:"About"},o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"abtTalk"},"講座介紹"),o.a.createElement("input",{type:"text",name:"abtTalk",value:this.state.abtTalk,onChange:this.handleChange,placeholder:"Desciption about the talk (Optional)"})),o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"abtSpeaker"},"講者介紹"),o.a.createElement("input",{type:"text",name:"abtSpeaker",value:this.state.abtSpeaker,onChange:this.handleChange,placeholder:"Desciption about the speaker (Optional)"}))),o.a.createElement(u.default,{title:"時間與地點",key:"Time & Place",overflowWhenOpen:"visible"},o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"time"},"時間"),o.a.createElement(c.f,null,o.a.createElement(h.default,{parentCallback:this.handleCallback}),o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"place"},"地點"),o.a.createElement("select",{name:"place",onBlur:this.handleChange,value:this.state.place,placeholder:"Please select a place"},o.a.createElement("option",{value:"Room 401"},"Room 401"),o.a.createElement("option",{value:"Room 101"},"Room 101"),o.a.createElement("option",{value:"Room 319"},"Room 319"),o.a.createElement("option",{value:"Room 318B"},"Room 318B")))))),o.a.createElement(u.default,{title:"主辦單位",key:"Organizer"},o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"Org"},"主辦單位"),o.a.createElement("input",{type:"text",name:"organizer",value:this.state.organizer,onChange:this.handleChange,placeholder:"Organizer"})),o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"coOrg"},"協辦單位"),o.a.createElement("input",{type:"text",name:"coOrganizer",value:this.state.coOrganizer,onChange:this.handleChange,placeholder:"Co-organizer (Optional)"}))),o.a.createElement(u.default,{title:"書封上傳與 QR Code",key:"Other"},o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"qr"},"QR Code"),o.a.createElement("input",{type:"url",name:"url",value:this.state.url,onChange:this.handleChange,placeholder:"Please enter a URL (Optional)"})),o.a.createElement(k,null,o.a.createElement("label",{htmlFor:"book"},"書封"),o.a.createElement(m.default,{parentCallback:this.coverCallback})))),o.a.createElement(c.a,{BorderlessLight:!0},o.a.createElement("input",{type:"submit",value:"Preview"})),o.a.createElement(c.a,{BorderlessDark:!0,onClick:this.onPrint},"Print")))},t}(o.a.Component),f=function(e){function t(t){var n;return(n=e.call(this,t)||this).handleCallback=function(e){n.setState({title:e.title,subTitle:e.subTitle,speakerName:e.speakerName,speakerInfo:e.speakerInfo,hostName:e.hostName,hostInfo:e.hostInfo,commentatorName:e.commentatorName,commentatorInfo:e.commentatorInfo,abtTalk:e.abtTalk,abtSpeaker:e.abtSpeaker,date:e.date,time:e.time,place:e.place,organizer:e.organizer,coOrganizer:e.coOrganizer,url:e.url,pictures:e.pictures})},n.state={title:null,subTitle:null,speakerName:null,speakerInfo:null,hostName:null,hostInfo:null,commentatorName:null,commentatorInfo:null,abtTalk:null,abtSpeaker:null,date:null,time:null,place:null,organizer:null,coOrganizer:null,url:null,pictures:null},n}return Object(l.a)(t,e),t.prototype.render=function(){return o.a.createElement(C,null,o.a.createElement(v,null,o.a.createElement(g,{parentCallback:this.handleCallback})),o.a.createElement(y,null,o.a.createElement(b,{data:this.state})))},t}(o.a.Component),b=function(e){var t=e.data;return o.a.createElement(O,null,o.a.createElement(d.default,{title:t.title,subTitle:t.subTitle,speakerName:t.speakerName,speakerInfo:t.speakerInfo,hostName:t.hostName,hostInfo:t.hostInfo,commentatorName:t.commentatorName,commentatorInfo:t.commentatorInfo,abtTalk:t.abtTalk,abtSpeaker:t.abtSpeaker,date:t.date,time:t.time,place:t.place,organizer:t.organizer,coOrganizer:t.coOrganizer,url:t.url,pictures:t.pictures}))};t.default=f;var C=s.b.div.withConfig({displayName:"ntusoc__Grid",componentId:"sc-1clot8a-0"})(["position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;background:",";@media print{background:",";}"],p.a.color.primary.S700D,p.a.color.white),v=s.b.div.withConfig({displayName:"ntusoc__Input",componentId:"sc-1clot8a-1"})(["position:fixed;top:0;bottom:0;left:0;width:50%;padding:50px;background:",";overflow:auto;@media (max-width:","){position:relative;width:100%;}@media print{display:none;width:0%;}"],p.a.color.primary.S300D,p.a.screen.md),y=s.b.div.withConfig({displayName:"ntusoc__Output",componentId:"sc-1clot8a-2"})(["position:absolute;top:0;bottom:0;right:0;width:50%;background:",";overflow:hidden;@media (max-width:","){position:relative;width:100%;height:auto;}@media print{width:100%;height:100%;position:absolute;top:0px;bottom:0px;margin:auto;margin-top:0px !important;border:1px solid;}"],p.a.color.primary.S700D,p.a.screen.md),E=s.b.div.withConfig({displayName:"ntusoc__InputBox",componentId:"sc-1clot8a-3"})(["margin-bottom:30px;"]),k=s.b.div.withConfig({displayName:"ntusoc__InputItem",componentId:"sc-1clot8a-4"})(["position:relative;margin-bottom:25px;display:grid;grid-template-columns:1fr 4fr;grid-gap:10px;label{color:",";}input{border-bottom:1px solid ",";",";color:",";padding:0 10px;::placeholder{",";}}input:focus{border-bottom:1px solid ",";}select{border:none;padding:0 10px;max-height:30px;}"],p.a.color.grayscale.S1000,p.a.color.grayscale.S500,p.a.fontSize.sm,p.a.color.grayscale.S1000,p.a.fontSize.sm,p.a.color.primary.S400),O=s.b.div.withConfig({displayName:"ntusoc__LifeViewBox",componentId:"sc-1clot8a-5"})(["position:absolute;top:0;bottom:0;right:0;left:0;margin:30px 50px;@media (max-width:","){position:relative;overflow:show;height:auto;margin:2% 3%;}@media only screen and (max-width:","){margin:3% 4%;}@media only screen and (max-width:","){margin:3% 4%;}@media only screen and (max-width:","){max-width:1200px;margin:3% 4%;}@media only screen and (min-width:","){max-width:1200px;margin:5% 10%;}@media print{width:100%;height:100%;position:absolute;top:0px;bottom:0px;margin:auto;margin-top:0px !important;border:1px solid;}"],p.a.screen.md,p.a.screen.lg,p.a.screen.xl,p.a.screen.xxl,p.a.screen.xxl)}}]);
//# sourceMappingURL=component---src-pages-project-poster-ntusoc-index-js-368d82318e0195f8e241.js.map