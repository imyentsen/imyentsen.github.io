(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{"+v87":function(e,t,a){e.exports=a.p+"static/photo7-c7dee8bba041f3ef7334d4d8c3daa38c.jpg"},"1yzr":function(e,t,a){e.exports=a.p+"static/photo15-8374be9c41379d128b696d2d15b8cddf.jpg"},"5ClE":function(e,t,a){"use strict";a.r(t);var n=a("9XZU");a.d(t,"default",(function(){return n.default}))},"6GLq":function(e,t,a){e.exports=a.p+"static/photo12-615060aeb166703e3cea0f9ae7b04146.jpg"},"7N7Z":function(e,t,a){e.exports=a.p+"static/photo13-d73f283898c06284360f07f357e7bb17.jpg"},"9XZU":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),i=a("BtEH"),o=a.n(i),r=a("vOnD"),s=a("sxwA");t.default=function(e){var t=e.title,a=e.children;return l.a.createElement(c,null,l.a.createElement(o.a,{className:"faq",openedClassName:"faq active",triggerClassName:"faq-title",triggerOpenedClassName:"faq-title active",triggerTagName:"button",contentInnerClassName:"faq-content",trigger:t,transitionTime:300,easing:"ease-out"},a,l.a.createElement(p,null)))};var c=r.b.div.withConfig({displayName:"collapse__Wrapper",componentId:"hd059w-0"})(["&:hover{cursor:pointer;}.faq{border-bottom:1px solid ",";}.faq-title{",";color:",";border:none;background:none;outline:none;width:100%;text-align:left;cursor:pointer;font-weight:bold;padding:12px 72px 12px 0;position:relative;&::after{content:'';display:block;width:10px;height:10px;border-left:2px solid  ",";border-bottom:2px solid  ",";position:absolute;top:15px;right:24px;transform:rotate(-45deg);transition:transform 0.3s ease-in-out;}&.active{&::after{transform:rotate(135deg);}}}.faq-content{padding:0;line-height:26px;",";color:",";}"],s.a.color.grayscale.S1000,s.a.fontSize.sm,s.a.color.grayscale.S1000,s.a.color.grayscale.S1000,s.a.color.grayscale.S1000,s.a.fontSize.sm,s.a.color.grayscale.S1000),p=r.b.div.withConfig({displayName:"collapse__SpaceSpan",componentId:"hd059w-1"})(["height:15px;width:100%;"])},BtEH:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},l=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),i=a("q1tI"),o=s(i),r=s(a("17x9"));function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.timeout=void 0,a.handleTriggerClick=a.handleTriggerClick.bind(a),a.handleTransitionEnd=a.handleTransitionEnd.bind(a),a.continueOpenCollapsible=a.continueOpenCollapsible.bind(a),a.setInnerRef=a.setInnerRef.bind(a),e.open?a.state={isClosed:!1,shouldSwitchAutoOnNextCycle:!1,height:"auto",transition:"none",hasBeenOpened:!0,overflow:e.overflowWhenOpen,inTransition:!1}:a.state={isClosed:!0,shouldSwitchAutoOnNextCycle:!1,height:0,transition:"height "+e.transitionTime+"ms "+e.easing,hasBeenOpened:!1,overflow:"hidden",inTransition:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidUpdate",value:function(e,t){var a=this;this.state.shouldOpenOnNextCycle&&this.continueOpenCollapsible(),"auto"===t.height&&!0===this.state.shouldSwitchAutoOnNextCycle&&(window.clearTimeout(this.timeout),this.timeout=window.setTimeout((function(){a.setState({height:0,overflow:"hidden",isClosed:!0,shouldSwitchAutoOnNextCycle:!1})}),50)),e.open!==this.props.open&&(!0===this.props.open?(this.openCollapsible(),this.props.onOpening()):(this.closeCollapsible(),this.props.onClosing()))}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timeout)}},{key:"closeCollapsible",value:function(){this.setState({shouldSwitchAutoOnNextCycle:!0,height:this.innerRef.scrollHeight,transition:"height "+(this.props.transitionCloseTime?this.props.transitionCloseTime:this.props.transitionTime)+"ms "+this.props.easing,inTransition:!0})}},{key:"openCollapsible",value:function(){this.setState({inTransition:!0,shouldOpenOnNextCycle:!0})}},{key:"continueOpenCollapsible",value:function(){this.setState({height:this.innerRef.scrollHeight,transition:"height "+this.props.transitionTime+"ms "+this.props.easing,isClosed:!1,hasBeenOpened:!0,inTransition:!0,shouldOpenOnNextCycle:!1})}},{key:"handleTriggerClick",value:function(e){this.props.triggerDisabled||this.state.inTransition||(e.preventDefault(),this.props.handleTriggerClick?this.props.handleTriggerClick(this.props.accordionPosition):!0===this.state.isClosed?(this.openCollapsible(),this.props.onOpening(),this.props.onTriggerOpening()):(this.closeCollapsible(),this.props.onClosing(),this.props.onTriggerClosing()))}},{key:"renderNonClickableTriggerElement",value:function(){return this.props.triggerSibling&&"string"==typeof this.props.triggerSibling?o.default.createElement("span",{className:this.props.classParentString+"__trigger-sibling"},this.props.triggerSibling):this.props.triggerSibling&&"function"==typeof this.props.triggerSibling?this.props.triggerSibling():this.props.triggerSibling?o.default.createElement(this.props.triggerSibling,null):null}},{key:"handleTransitionEnd",value:function(e){e.target===this.innerRef&&(this.state.isClosed?(this.setState({inTransition:!1}),this.props.onClose()):(this.setState({height:"auto",overflow:this.props.overflowWhenOpen,inTransition:!1}),this.props.onOpen()))}},{key:"setInnerRef",value:function(e){this.innerRef=e}},{key:"render",value:function(){var e=this,t={height:this.state.height,WebkitTransition:this.state.transition,msTransition:this.state.transition,transition:this.state.transition,overflow:this.state.overflow},a=this.state.isClosed?"is-closed":"is-open",l=this.props.triggerDisabled?"is-disabled":"",i=!1===this.state.isClosed&&void 0!==this.props.triggerWhenOpen?this.props.triggerWhenOpen:this.props.trigger,r=this.props.contentContainerTagName,s=this.props.triggerTagName,c=this.props.lazyRender&&!this.state.hasBeenOpened&&this.state.isClosed&&!this.state.inTransition?null:this.props.children,p=this.props.classParentString+"__trigger "+a+" "+l+" "+(this.state.isClosed?this.props.triggerClassName:this.props.triggerOpenedClassName),u=this.props.classParentString+" "+(this.state.isClosed?this.props.className:this.props.openedClassName),h=this.props.classParentString+"__contentOuter "+this.props.contentOuterClassName,d=this.props.classParentString+"__contentInner "+this.props.contentInnerClassName;return o.default.createElement(r,n({className:u.trim()},this.props.containerElementProps),o.default.createElement(s,n({className:p.trim(),onClick:this.handleTriggerClick,style:this.props.triggerStyle&&this.props.triggerStyle,onKeyPress:function(t){var a=t.key;(" "===a&&"button"!==e.props.triggerTagName.toLowerCase()||"Enter"===a)&&e.handleTriggerClick(t)},tabIndex:this.props.tabIndex&&this.props.tabIndex},this.props.triggerElementProps),i),this.renderNonClickableTriggerElement(),o.default.createElement("div",{className:h.trim(),style:t,onTransitionEnd:this.handleTransitionEnd,ref:this.setInnerRef,hidden:this.props.contentHiddenWhenClosed&&this.state.isClosed&&!this.state.inTransition},o.default.createElement("div",{className:d.trim()},c)))}}]),t}(i.Component);c.propTypes={transitionTime:r.default.number,transitionCloseTime:r.default.number,triggerTagName:r.default.string,easing:r.default.string,open:r.default.bool,containerElementProps:r.default.object,triggerElementProps:r.default.object,classParentString:r.default.string,openedClassName:r.default.string,triggerStyle:r.default.object,triggerClassName:r.default.string,triggerOpenedClassName:r.default.string,contentOuterClassName:r.default.string,contentInnerClassName:r.default.string,accordionPosition:r.default.oneOfType([r.default.string,r.default.number]),handleTriggerClick:r.default.func,onOpen:r.default.func,onClose:r.default.func,onOpening:r.default.func,onClosing:r.default.func,onTriggerOpening:r.default.func,onTriggerClosing:r.default.func,trigger:r.default.oneOfType([r.default.string,r.default.element]),triggerWhenOpen:r.default.oneOfType([r.default.string,r.default.element]),triggerDisabled:r.default.bool,lazyRender:r.default.bool,overflowWhenOpen:r.default.oneOf(["hidden","visible","auto","scroll","inherit","initial","unset"]),contentHiddenWhenClosed:r.default.bool,triggerSibling:r.default.oneOfType([r.default.element,r.default.func]),tabIndex:r.default.number,contentContainerTagName:r.default.string},c.defaultProps={transitionTime:400,transitionCloseTime:null,triggerTagName:"span",easing:"linear",open:!1,classParentString:"Collapsible",triggerDisabled:!1,lazyRender:!1,overflowWhenOpen:"hidden",contentHiddenWhenClosed:!1,openedClassName:"",triggerStyle:null,triggerClassName:"",triggerOpenedClassName:"",contentOuterClassName:"",contentInnerClassName:"",className:"",triggerSibling:null,onOpen:function(){},onClose:function(){},onOpening:function(){},onClosing:function(){},onTriggerOpening:function(){},onTriggerClosing:function(){},tabIndex:null,contentContainerTagName:"div"},t.default=c},Gy4w:function(e,t,a){e.exports=a.p+"static/photo9-e912dc2426ab0b9b2ab0b90a65ef9ad2.jpg"},MxWU:function(e,t,a){"use strict";a.r(t);var n=a("uRdJ"),l=a("9Hrx"),i=a("q1tI"),o=a.n(i),r=a("Cs6D"),s=a("v1X+"),c=a("vOnD"),p=a("sxwA"),u=a("AMwC"),h=a("5ClE"),d=a("ReXd"),m=a("ZyVb"),g=a("UdF6"),f=a.n(g),b=a("Go8F"),C=a.n(b),v=a("QAE+"),E=a.n(v),k=a("YhcP"),x=a.n(k),y=a("qV1u"),N=a.n(y),O=a("ap8j"),T=a.n(O),w=a("fNsN"),S=a.n(w),I=a("iYXa"),P=a.n(I),j=a("zjTA"),z=a.n(j),_=a("+v87"),H=a.n(_),F=a("gpVm"),M=a.n(F),A=a("Gy4w"),R=a.n(A),D=a("gG5f"),q=a.n(D),W=a("kzqU"),B=a.n(W),Z=a("6GLq"),U=a.n(Z),G=a("7N7Z"),L=a.n(G),V=a("p/AM"),X=a.n(V),Y=a("1yzr"),Q=a.n(Y),J=a("wES3"),K=a.n(J),$=a("xjze"),ee=a.n($),te=a("RZ5m"),ae=a.n(te),ne=a("zd+6"),le=a.n(ne),ie=a("OmoZ"),oe=a.n(ie),re=a("N14y"),se=a.n(re),ce=a("T2Ah"),pe=a.n(ce),ue=a("tYe9"),he=a.n(ue),de=a("kZzk"),me=a.n(de),ge=[{value:f.a,label:"Pic1 -  社科院外大樹"},{value:C.a,label:"Pic2 -  小組討論"},{value:E.a,label:"Pic3 -  統計課"},{value:x.a,label:"Pic4 - 社科院三樓中庭"},{value:N.a,label:"Pic5 -  辜圖與社科院"},{value:T.a,label:"Pic6 - 辜圖外大樹"},{value:S.a,label:"Pic7 - 社會系門口"},{value:P.a,label:"Pic8 - 社會系門口外道路"},{value:z.a,label:"Pic9 - 介宙館"},{value:H.a,label:"Pic10 -  社科院外大樹與行人"},{value:M.a,label:"Pic11 - 辜圖俯眺"},{value:R.a,label:"Pic12 -  辜圖俯眺兩行人"},{value:q.a,label:"Pic13 - 辜圖蘑菇天頂"},{value:B.a,label:"Pic14 - 總圖鐘樓"},{value:U.a,label:"Pic15 - 辜圖一樓書庫"},{value:L.a,label:"Pic16 - 辜圖二樓討論區"},{value:X.a,label:"Pic17 - 社科院教室"},{value:Q.a,label:"Pic18 - 社科院大會議廳"},{value:K.a,label:"Pic19 - 辜圖外水池"},{value:ee.a,label:"Pic21 - 數學課"},{value:ae.a,label:"Pic22 - 課間討論"},{value:le.a,label:"Pic23 - 社會系外兩行人"},{value:oe.a,label:"Pic24 - 社會系外單車女"},{value:se.a,label:"Pic25 - 圓圈小組討論"},{value:pe.a,label:"Pic26 - 社科院講座"},{value:he.a,label:"Pic27 - 會議"},{value:me.a,label:"Pic28 - 腦力激盪"}],fe=[{value:"08",label:"08"},{value:"09",label:"09"},{value:"10",label:"10"},{value:"11",label:"11"},{value:"12",label:"12"},{value:"13",label:"13"},{value:"14",label:"14"},{value:"15",label:"15"},{value:"16",label:"16"},{value:"17",label:"17"}],be=[{value:"00",label:"00"},{value:"15",label:"15"},{value:"30",label:"30"},{value:"45",label:"45"}],Ce={control:function(e,t){return Object.assign({},e,{border:"0",borderRadius:"0",background:"#F7FAFA",borderBottom:"1px solid #aaaaaa",color:"#000"})},menu:function(e,t){return{border:"0",background:"#F7FAFA",borderBottom:"1px solid #aaaaaa",color:"#000"}}},ve=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleCallback=function(e){a.setState({date:e.selectedDay})},a.selectChange1=function(e){a.setState({picture1:e})},a.selectChange2=function(e){a.setState({picture2:e})},a.startChangeH=function(e){a.setState({startHour:e})},a.startChangeM=function(e){a.setState({startMinute:e})},a.endChangeH=function(e){a.setState({endHour:e})},a.endChangeM=function(e){a.setState({endMinute:e})},a.state={title:null,subTitle:null,speakerName1:null,speakerInfo1:null,speakerName2:null,speakerInfo2:null,hostName:null,hostInfo:null,commentatorName:null,commentatorInfo:null,abtTalk:null,abtSpeaker:null,date:null,startHour:null,startMinute:null,endHour:null,endMinute:null,place:null,organizer:null,coOrganizer:null,url:null,picture1:null,picture2:null},a.handleChange=a.handleChange.bind(Object(n.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(n.a)(a)),a}Object(l.a)(t,e);var a=t.prototype;return a.handleChange=function(e){var t,a=e.target,n=a.value,l=a.name;this.setState(((t={})[l]=n,t)),console.log(this.state)},a.handleSubmit=function(e){this.props.parentCallback(this.state),e.preventDefault()},a.onPrint=function(e){e.preventDefault(),window.print()},a.render=function(){var e=this.state.picture1,t=this.state.picture2,a=this.state.startHour,n=this.state.startMinute,l=this.state.endHour,i=this.state.endMinute;return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{title:"臺大社科院講座海報產生器",desc:"臺大社科院講座海報產生器"}),o.a.createElement(u.i,null,o.a.createElement("b",null,"Poster Creator"),o.a.createElement("br",null),o.a.createElement("small",null,"College of Social Sciences, NTU")),o.a.createElement(u.d,{onSubmit:this.handleSubmit},o.a.createElement(Oe,null,o.a.createElement(h.default,{title:"講座主題",key:"Topic",open:"true"},o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"title"},"標題"),o.a.createElement("textarea",{id:"title",type:"text",name:"title",value:this.state.title,onChange:this.handleChange,placeholder:"Title"})),o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"subTitle"},"副標題"),o.a.createElement("input",{id:"subTitle",type:"text",name:"subTitle",value:this.state.subtitle,onChange:this.handleChange,placeholder:"Sub-title"}))),o.a.createElement(h.default,{title:"講者與主持",key:"Speaker & Host"},o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"speaker1"},"講者一"),o.a.createElement(u.f,null,o.a.createElement("input",{type:"text",name:"speakerName1",value:this.state.speakerName1,onChange:this.handleChange,placeholder:"Name"}),o.a.createElement("textarea",{type:"text",name:"speakerInfo1",value:this.state.speakerInfo1,onChange:this.handleChange,placeholder:"Info"}))),o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"speaker2"},"講者二"),o.a.createElement(u.f,null,o.a.createElement("input",{type:"text",name:"speakerName2",value:this.state.speakerName2,onChange:this.handleChange,placeholder:"Name"}),o.a.createElement("textarea",{type:"text",name:"speakerInfo2",value:this.state.speakerInfo2,onChange:this.handleChange,placeholder:"Info"}))),o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"host"},"主持"),o.a.createElement(u.f,null,o.a.createElement("input",{type:"text",name:"hostName",value:this.state.hostName,onChange:this.handleChange,placeholder:"Name"}),o.a.createElement("textarea",{type:"text",name:"hostInfo",value:this.state.hostInfo,onChange:this.handleChange,"aria-label":"Host Info",placeholder:"Info"})))),o.a.createElement(h.default,{title:"關於",key:"About"},o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"abtTalk"},"講座介紹"),o.a.createElement("textarea",{name:"abtTalk",value:this.state.abtTalk,onChange:this.handleChange,placeholder:"Desciption about the talk (Optional)"}))),o.a.createElement(h.default,{title:"時間與地點",key:"Time & Place",overflowWhenOpen:"visible"},o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"time"},"日期"),o.a.createElement(u.f,null,o.a.createElement(d.default,{parentCallback:this.handleCallback,time:"false"}),o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"place"}," 起始時間"),o.a.createElement(u.e,null,o.a.createElement(r.a,{styles:Ce,value:a,onChange:this.startChangeH,options:fe}),o.a.createElement(r.a,{styles:Ce,value:n,onChange:this.startChangeM,options:be})),o.a.createElement("label",{htmlFor:"place"}," 結束時間"),o.a.createElement(u.e,null,o.a.createElement(r.a,{styles:Ce,value:l,onChange:this.endChangeH,options:fe}),o.a.createElement(r.a,{styles:Ce,value:i,onChange:this.endChangeM,options:be})),o.a.createElement("label",{htmlFor:"place"}," 地點"),o.a.createElement("input",{type:"text",name:"place",value:this.state.place,onChange:this.handleChange,placeholder:"Please enter a place"}))))),o.a.createElement(h.default,{title:"主辦單位",key:"Organizer"},o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"Org"},"主辦單位"),o.a.createElement("input",{type:"text",name:"organizer",value:this.state.organizer,onChange:this.handleChange,placeholder:"Organizer"})),o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"coOrg"},"協辦單位"),o.a.createElement("input",{type:"text",name:"coOrganizer",value:this.state.coOrganizer,onChange:this.handleChange,placeholder:"Co-organizer (Optional)"}))),o.a.createElement(h.default,{title:"照片選擇與 QR Code",key:"Other"},o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"book"},"右上照片"),o.a.createElement(r.a,{styles:Ce,value:e,onChange:this.selectChange1,options:ge})),o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"book"},"左下照片"),o.a.createElement(r.a,{styles:Ce,value:t,onChange:this.selectChange2,options:ge})),o.a.createElement(Te,null,o.a.createElement("label",{htmlFor:"qr"},"QR Code"),o.a.createElement("input",{type:"url",name:"url",value:this.state.url,onChange:this.handleChange,placeholder:"Please enter a URL (Optional)"})))),o.a.createElement(u.a,{BorderlessLight:!0},o.a.createElement("input",{type:"submit",value:"Preview"})),o.a.createElement(u.a,{BorderlessDark:!0,onClick:this.onPrint},"Print")),o.a.createElement("hr",null),o.a.createElement("b",null,o.a.createElement("small",null,"Readme")),o.a.createElement("p",null,o.a.createElement("small",null,"- 網頁預覽考量可閱讀性，僅供參考，以列印畫面為準",o.a.createElement("br",null),"- 列印背景（Background Graphics）請打勾",o.a.createElement("br",null),"- 紙張邊界（Margin）與頁首頁尾（Header & Footer）請選擇「無」",o.a.createElement("br",null),"- 列印請選擇另存（Save as PDF）成 A4 尺寸 PDF，送印刷時告知印成 A1 或 A2 即可",o.a.createElement("br",null))))},t}(o.a.Component),Ee=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleCallback=function(e){a.setState({title:e.title,subTitle:e.subTitle,speakerName1:e.speakerName1,speakerInfo1:e.speakerInfo1,speakerName2:e.speakerName2,speakerInfo2:e.speakerInfo2,hostName:e.hostName,hostInfo:e.hostInfo,commentatorName:e.commentatorName,commentatorInfo:e.commentatorInfo,abtTalk:e.abtTalk,abtSpeaker:e.abtSpeaker,date:e.date,startHour:e.startHour,startMinute:e.startMinute,endHour:e.endHour,endMinute:e.endMinute,place:e.place,organizer:e.organizer,coOrganizer:e.coOrganizer,url:e.url,picture1:e.picture1,picture2:e.picture2})},a.state={title:null,subTitle:null,speakerName1:null,speakerInfo1:null,speakerName2:null,speakerInfo2:null,hostName:null,hostInfo:null,commentatorName:null,commentatorInfo:null,abtTalk:null,abtSpeaker:null,date:null,startHour:null,startMinute:null,endHour:null,endMinute:null,place:null,organizer:null,coOrganizer:null,url:null,picture1:null,picture2:null},a}return Object(l.a)(t,e),t.prototype.render=function(){return o.a.createElement(xe,null,o.a.createElement(ye,null,o.a.createElement(ve,{parentCallback:this.handleCallback})),o.a.createElement(Ne,null,o.a.createElement(ke,{data:this.state})))},t}(o.a.Component),ke=function(e){var t=e.data;return o.a.createElement(we,null,o.a.createElement(m.default,{title:t.title,subTitle:t.subTitle,speakerName1:t.speakerName1,speakerInfo1:t.speakerInfo1,speakerName2:t.speakerName2,speakerInfo2:t.speakerInfo2,hostName:t.hostName,hostInfo:t.hostInfo,commentatorName:t.commentatorName,commentatorInfo:t.commentatorInfo,abtTalk:t.abtTalk,abtSpeaker:t.abtSpeaker,date:t.date,startHour:t.startHour,startMinute:t.startMinute,endHour:t.endHour,endMinute:t.endMinute,place:t.place,organizer:t.organizer,coOrganizer:t.coOrganizer,url:t.url,picture1:t.picture1,picture2:t.picture2}))};t.default=Ee;var xe=c.b.div.withConfig({displayName:"ntucsoc__Grid",componentId:"sc-730eok-0"})(["position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;background:",";@media print{background:",";}"],p.a.color.primary.S800D,p.a.color.white),ye=c.b.div.withConfig({displayName:"ntucsoc__Input",componentId:"sc-730eok-1"})(["position:fixed;top:0;bottom:0;left:0;width:50%;padding:50px;background:",";overflow:auto;@media (max-width:","){position:relative;width:100%;padding:15px;}@media print{display:none;width:0%;}"],p.a.color.supplementary.S300D,p.a.screen.md),Ne=c.b.div.withConfig({displayName:"ntucsoc__Output",componentId:"sc-730eok-2"})(["position:absolute;top:0;bottom:0;right:0;width:50%;background:",";overflow:hidden;@media (max-width:","){position:relative;width:100%;height:auto;}@media print{width:100%;height:100%;position:absolute;top:0px;bottom:0px;margin:auto;margin-top:0px !important;border:1px solid;}@page{size:A4;margin:0;}"],p.a.color.secondary.S900D,p.a.screen.md),Oe=c.b.div.withConfig({displayName:"ntucsoc__InputBox",componentId:"sc-730eok-3"})(["margin-bottom:30px;"]),Te=c.b.div.withConfig({displayName:"ntucsoc__InputItem",componentId:"sc-730eok-4"})(["position:relative;margin-bottom:25px;display:grid;grid-template-columns:1fr 4fr;grid-gap:10px;label{color:",";}select{border:none;padding:0 10px;max-height:30px;}"],p.a.color.grayscale.S1000),we=c.b.div.withConfig({displayName:"ntucsoc__LifeViewBox",componentId:"sc-730eok-5"})(["position:absolute;top:0;bottom:0;right:0;left:0;margin:30px 50px;@media (max-width:","){position:relative;overflow:show;height:auto;margin:2% 3%;}@media only screen and (max-width:","){margin:3% 4%;}@media only screen and (max-width:","){margin:3% 4%;}@media only screen and (max-width:","){max-width:1200px;margin:3% 4%;}@media only screen and (min-width:","){max-width:1200px;margin:5% 10%;}@media print{width:100%;height:100%;position:absolute;top:0px;bottom:0px;margin:auto;margin-top:0px !important;border:1px solid;}"],p.a.screen.md,p.a.screen.lg,p.a.screen.xl,p.a.screen.xxl,p.a.screen.xxl)},N14y:function(e,t,a){e.exports=a.p+"static/photo21-545f7d5466dd448835003f9c573cdf53.jpg"},OmoZ:function(e,t,a){e.exports=a.p+"static/photo20-70544697fb6a29b66b138009756a460e.jpg"},"QAE+":function(e,t,a){e.exports=a.p+"static/sample3-b287003a8c80fdd2c2f40319f35c4c71.jpg"},RZ5m:function(e,t,a){e.exports=a.p+"static/photo18-f05e0e89e81d64c9ce5c6bc17d8c6c40.jpg"},T2Ah:function(e,t,a){e.exports=a.p+"static/photo22-38be55bf8de40c3e4df1c78c814397e1.jpg"},YhcP:function(e,t,a){e.exports=a.p+"static/photo1-69bdbd46aec92c07c4ebe54c2cb96564.jpg"},ap8j:function(e,t,a){e.exports=a.p+"static/photo3-fcd4a8a9410570ba90d5703e570df266.jpg"},fNsN:function(e,t,a){e.exports=a.p+"static/photo4-8719e2c0e84463362d867e07fbde16bd.jpg"},gG5f:function(e,t,a){e.exports=a.p+"static/photo10-921f0cd5eff0f6896f8f49d77f02f7f6.jpg"},gpVm:function(e,t,a){e.exports=a.p+"static/photo8-69c52c7ff8fa902f87daee00fb79d131.jpg"},iYXa:function(e,t,a){e.exports=a.p+"static/photo5-cadb53572b09232bd28a0a9a23a3ce1f.jpg"},kZzk:function(e,t,a){e.exports=a.p+"static/photo24-5bacde66999fbcb7bab091b204170bce.jpg"},kzqU:function(e,t,a){e.exports=a.p+"static/photo11-156b2485a7fa62f59501f445ee0d20de.jpg"},"p/AM":function(e,t,a){e.exports=a.p+"static/photo14-442668fa93579b5d0e7fe873d9d82f94.jpg"},qV1u:function(e,t,a){e.exports=a.p+"static/photo2-c2c26e8dc65a41858d3c6e473ad26d7b.jpg"},tYe9:function(e,t,a){e.exports=a.p+"static/photo23-69d3c3ece411e70dd23e39df7a8eca67.jpg"},wES3:function(e,t,a){e.exports=a.p+"static/photo16-a1c20235699d1cef8acb02b6c5afe912.jpg"},xjze:function(e,t,a){e.exports=a.p+"static/photo17-59e7b5acba1d336666d1cbd69978f8f2.jpg"},"zd+6":function(e,t,a){e.exports=a.p+"static/photo19-65c7730d4557fd732e96b8515d9126da.jpg"},zjTA:function(e,t,a){e.exports=a.p+"static/photo6-0cba58eae3fda057ce1fbbfb89da23df.jpg"}}]);
//# sourceMappingURL=component---src-pages-project-poster-ntucsoc-index-js-1dc5d5b49faaf2bef9a5.js.map