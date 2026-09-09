/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react")

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` })
  setHeadComponents([
    <link
      key="google-fonts-preconnect"
      rel="preconnect"
      href="https://fonts.googleapis.com"
    />,
    <link
      key="google-fonts-preconnect-gstatic"
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />,
    <link
      key="noto-sans-tc"
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&display=swap"
    />,
    // Leadfeeder（前 Dealfront）訪客公司識別追蹤碼
    <script
      key="leadfeeder-tracker"
      dangerouslySetInnerHTML={{
        __html: `
(function(ss,ex){
  window.ldfdr=window.ldfdr||function(){(ldfdr._q=ldfdr._q||[]).push([].slice.call(arguments));};
  (function(d,s){
    fs=d.getElementsByTagName(s)[0];
    function ce(src){
      var cs=d.createElement(s);
      cs.src=src;
      cs.async=1;
      fs.parentNode.insertBefore(cs,fs);
    };
    ce('https://sc.lfeeder.com/lftracker_v1_'+ss+(ex?'_'+ex:'')+'.js');
  })(document,'script');
})('YEgkB8lJGjw4ep3Z');
        `,
      }}
    />,
    // Microsoft Clarity 錄影 / 熱圖追蹤碼
    <script
      key="ms-clarity-tracker"
      dangerouslySetInnerHTML={{
        __html: `
(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xozmvimvvi");
        `,
      }}
    />,
  ])
}
