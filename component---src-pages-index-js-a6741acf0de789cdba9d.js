(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{RXBc:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",(function(){return Q}));var r=a("q1tI"),o=a.n(r),n=a("mwIZ"),i=a.n(n),l=a("v1X+"),m=a("9Hrx"),p=a("vOnD"),c=a("AMwC"),s=a("sxwA"),d=function(t){function e(){return t.apply(this,arguments)||this}return Object(m.a)(e,t),e.prototype.render=function(){return o.a.createElement(f,null,o.a.createElement(g,null),o.a.createElement(c.c,null,o.a.createElement(g,null,o.a.createElement("p",null,"Hi, I'm Ansin,")),o.a.createElement(u,null,"a startup-minded designer and researcher specializing in UI, UX, front-end development, & data visualization")))},e}(o.a.Component),f=p.b.div.withConfig({displayName:"Masthead__MastheadBox",componentId:"sc-1xsfus5-0"})(["overflow:show;margin:0 0 30px 0;@media (max-width:","){.masthead{height:auto;padding:30px 0;}}"],s.a.screen.lg),g=p.b.div.withConfig({displayName:"Masthead__Display",componentId:"sc-1xsfus5-1"})(["overflow:visible;object-fit:fill;color:",";p{",";padding:100px 0 0 0;font-family:",";font-weight:bold;}"],s.a.color.secondary.S1000D,s.a.fontSize.xxl,s.a.font.display),u=p.b.div.withConfig({displayName:"Masthead__Subline",componentId:"sc-1xsfus5-2"})(["color:"," !important;",";font-family:",";font-weight:bold;margin-top:20px;"],s.a.color.grayscale.S950,s.a.fontSize.lg,s.a.font.primary),h=a("m12I"),w=a("Zttt"),y=a("t8Zj"),x=a("9eSz"),b=a.n(x),v=a("Wbzz"),E=a("7CyM"),S=function(t){function e(){return t.apply(this,arguments)||this}return Object(m.a)(e,t),e.prototype.render=function(){var t=this.props.role.map((function(t,e){return o.a.createElement(P,{key:e},t)}));return o.a.createElement(_,null,o.a.createElement(C,null,this.props.img?o.a.createElement(b.a,{fluid:this.props.img}):""),o.a.createElement(I,null,o.a.createElement(c.j,null,this.props.title),o.a.createElement(j,null,this.props.desc),o.a.createElement("p",null,o.a.createElement(k,null,"Roles"),t),o.a.createElement(N,null,this.props.visit?o.a.createElement(v.Link,{to:this.props.visit,target:"blank"},o.a.createElement(c.a,null,"Visit Work ",o.a.createElement(E.a,null))):"",this.props.hideStory?"":o.a.createElement(v.Link,{to:this.props.path},o.a.createElement(c.a,{Tertiary:!0},"Read Story")))))},e}(r.Component),_=p.b.div.withConfig({displayName:"Preview__PreviewBloc",componentId:"sc-1f7w5h6-0"})(["display:grid;height:100% !important;grid-template-columns:4fr 2fr;padding:0 !important;margin:0 !important;@media (max-width:","){grid-template-columns:unset !important;height:auto !important;}"],s.a.screen.lg),I=p.b.div.withConfig({displayName:"Preview__Info",componentId:"sc-1f7w5h6-1"})(["padding:40px 100px 50px 20px;height:100% !important;overflow:scroll;background:",";color:",";@media (max-width:","){padding:25px 16px 0 16px;}","{font-weight:bold;font-size:1.25em !important;line-height:1.72em !important;@media (min-width:","){margin-bottom:5px;}}"],s.a.color.white,s.a.color.primary.S1000D,s.a.screen.lg,c.j,s.a.screen.lg),C=p.b.div.withConfig({displayName:"Preview__ImgSlide",componentId:"sc-1f7w5h6-2"})(["@media (max-width:","){order:-1;height:200px;object-fit:cover;}div{height:100% !important;}img{object-fit:cover;object-position:50% 50%;}"],s.a.screen.lg),j=p.b.p.withConfig({displayName:"Preview__Desc",componentId:"sc-1f7w5h6-3"})(["@media (max-width:","){",";}"],s.a.screen.lg,s.a.fontSize.sm),k=p.b.div.withConfig({displayName:"Preview__TitleRole",componentId:"sc-1f7w5h6-4"})(["font-family:",";",";font-weight:bold;margin:5px 0;"],s.a.font.primary,s.a.fontSize.xs),P=p.b.span.withConfig({displayName:"Preview__LsRole",componentId:"sc-1f7w5h6-5"})(["",";::after{content:' / ';}:last-of-type::after{content:'';}"],s.a.fontSize.sm),N=p.b.div.withConfig({displayName:"Preview__BtnGroup",componentId:"sc-1f7w5h6-6"})(["margin:35px 0;@media (max-width:","){margin:25px 0;}div{margin-left:10px;}div:first-of-type{margin-left:0px !important;}"],s.a.screen.lg),z=a("zPhz"),D=a("NGP5"),q=a("NGwb"),O=a.n(q),A=function(t){var e=t.map((function(t){return t.post.frontmatter.category})).reduce((function(t,e){return t.concat(e)}),[]),a=new Set(e),r=Array.from(a);return r=["All"].concat(Object(y.a)(r))},B=function(t){var e=t.children,a=t.item;return o.a.createElement(H,{trigger:o.a.createElement("div",null,e),modal:!0,closeOnDocumentClick:!0},(function(t){return o.a.createElement("div",null,o.a.createElement(J,{onClick:t},o.a.createElement(D.a,null)),o.a.createElement(S,{title:a.post.frontmatter.title,desc:a.post.frontmatter.description,date:a.post.frontmatter.date,img:a.post.frontmatter.image.childImageSharp.fluid,role:a.post.frontmatter.role,category:a.post.frontmatter.category,path:a.post.frontmatter.path,visit:a.post.frontmatter.visit,hideStory:a.post.frontmatter.hideStory}))}))},M=function(t){function e(){for(var e,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))||this).state={items:e.props.items.remark.posts,blogPostItems:e.props.items.remark.posts,categories:A(e.props.items.remark.posts)},e.handleItems=function(t){"All"===t?e.setState({blogPostItems:Object(y.a)(e.state.items)}):e.setState({blogPostItems:Object(y.a)(e.state.items.filter((function(e){return e.post.frontmatter.category.includes(t)})))})},e}return Object(m.a)(e,t),e.prototype.render=function(){var t=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,this.state.categories.map((function(e,a){return o.a.createElement(G,null,o.a.createElement("button",{type:"button",key:a,onClick:function(){return t.handleItems(e)}},e))}))),o.a.createElement(R,null,this.state.blogPostItems.map((function(t){var e={gridArea:""+t.post.frontmatter.grid},a=t.post.frontmatter.category.map((function(t,e){return o.a.createElement(X,{key:e},t)}));return o.a.createElement(L,{key:t.post.frontmatter.path,style:e},t.post.frontmatter.infoShow?"":o.a.createElement(T,null,o.a.createElement(B,{item:t},o.a.createElement(U,{infoShow:t.post.frontmatter.infoShow},o.a.createElement(O.a,{animateIn:"fadeIn",offset:0,animateOnce:"true"},o.a.createElement(b.a,{fluid:t.post.frontmatter.image.childImageSharp.fluid})))),o.a.createElement(W,null,a,o.a.createElement("time",{dateTime:t.post.frontmatter.date},t.post.frontmatter.date)),o.a.createElement(B,{item:t},o.a.createElement(c.j,null,t.post.frontmatter.title)),o.a.createElement(Y,null,t.post.frontmatter.brief)),t.post.frontmatter.infoShow?o.a.createElement(Z,null,o.a.createElement(c.j,null,t.post.frontmatter.quote)):"")}))))},e}(r.Component),R=p.b.div.withConfig({displayName:"Project__ProjectGrid",componentId:"sc-4lqfw-0"})(["display:grid;grid-template-columns:1fr 1fr 1fr 1fr;grid-gap:30px;margin:68px 0 72px 0;@media (max-width:","){width:100%;justify-content:start;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));div{grid-area:auto / auto / auto / auto !important;}}@media (max-width:","){grid-gap:24px;grid-template-areas:auto / auto / auto / auto;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));}"],s.a.screen.lg,s.a.screen.sm),G=p.b.span.withConfig({displayName:"Project__BtnCategory",componentId:"sc-4lqfw-1"})(["button{text-transform:Uppercase;font-family:",";",";letter-spacing:1px;font-weight:bold;background:",";border:1px solid ",";border-radius:100px;color:",";margin:0 4px 6px 0;padding:6px 12px;}button:hover{color:",";background:linear-gradient(to bottom,",",",");}"],s.a.font.primary,s.a.fontSize.xs,s.a.color.grayscale.S100,s.a.color.primary.S800D,s.a.color.primary.S1000D,s.a.color.primary.S100D,s.a.color.primary.S1000D,s.a.color.primary.S900),L=p.b.div.withConfig({displayName:"Project__ProjCard",componentId:"sc-4lqfw-2"})(["color:",";"],s.a.color.grayscale.S900),T=p.b.div.withConfig({displayName:"Project__InfoWrapper",componentId:"sc-4lqfw-3"})(["","{margin:5px 0 10px 0;cursor:pointer;color:",";font-weight:bold;:hover{text-decoration:underline;}}"],c.j,s.a.color.primary.S900D),U=p.b.div.withConfig({displayName:"Project__Image",componentId:"sc-4lqfw-4"})(["display:block;width:100%;margin:13px 0;cursor:pointer;img{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:0.1s ease-in-out !important;transition:0.1s ease-in-out !important;}:hover img{-webkit-transform:scale(1.1);transform:scale(1.1);}display:",";"],(function(t){return t.infoShow})),W=p.b.span.withConfig({displayName:"Project__CategoryDate",componentId:"sc-4lqfw-5"})(["color:",";",";font-family:",";"],s.a.color.grayscale.S900,s.a.fontSize.xxs,s.a.font.primary),X=p.b.span.withConfig({displayName:"Project__ListCategory",componentId:"sc-4lqfw-6"})(["::after{content:',   ';}:last-of-type{::after{content:'・';}}"]),Y=p.b.div.withConfig({displayName:"Project__Brief",componentId:"sc-4lqfw-7"})(["",";color:",";"],s.a.fontSize.sm,s.a.color.grayscale.S900),Z=p.b.div.withConfig({displayName:"Project__Quote",componentId:"sc-4lqfw-8"})(["margin-top:15px;width:100%;padding:50px 25px;border:1px solid ",";color:",";@media (max-width:","){margin-top:15px;}"],s.a.color.primary.S900D,s.a.color.primary.S1000,s.a.screen.md),H=Object(p.b)(z.a).withConfig({displayName:"Project__StyledPopup",componentId:"sc-4lqfw-9"})(["&-overlay{background:rgba( 255,255,255,0.25) !important;z-index:99 !important;-webkit-animation:anvil 0.3s cubic-bezier(0.38,0.1,0.36,0.9) forwards;}&-content{background:rgba(0,0,0,0) !important;border:none !important;width:auto !important;height:auto !important;margin:70px !important;padding:0px !important;display:grid;align-content:center;justify-content:center;@media (max-width:","){margin:0px !important;align-content:flex-start;}}@keyframes anvil{0%{transform:translateY(0px);opacity:0;box-shadow:0 0 0 rgba(241,241,241,0);}1%{transform:translateY(10px);opacity:0;box-shadow:0 0 0 rgba(241,241,241,0);}100%{transform:=translateY(0px);opacity:1;box-shadow:0 0 500px rgba(241,241,241,0);}}"],s.a.screen.md),J=p.b.div.withConfig({displayName:"Project__Close",componentId:"sc-4lqfw-10"})(["position:absolute;cursor:pointer;display:block;float:right;top:10px;right:5px;z-index:10;color:",";@media (max-width:","){padding:13px;z-index:999;top:170px;left:auto;right:0;position:fixed;background-color:",";}svg{transition:0.3s;}svg:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg);}"],s.a.color.primary.S1000D,s.a.screen.md,s.a.color.white),Q=(e.default=function(t){var e=t.data,a=t.location;return o.a.createElement(w.a,{location:a},o.a.createElement(l.a,{site:i()(e,"site.meta")}),o.a.createElement(d,null),o.a.createElement(c.c,null,o.a.createElement(M,{items:e})),o.a.createElement(h.a,null))},"192225336")}}]);
//# sourceMappingURL=component---src-pages-index-js-a6741acf0de789cdba9d.js.map