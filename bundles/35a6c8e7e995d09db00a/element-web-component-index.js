(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{1453:function(e,t,r){"use strict";r.r(t),r.d(t,"components",(function(){return f}));var a=r(225),o=r.n(a),n=r(754),l=r(325),c=r.n(l),s=r(84);class d extends n.a{translate(e){return e=(e=c()(Object(s.a)(e))).replace(/\[matrix\]/,'<a href="https://matrix.org" target="_blank" rel="noreferrer noopener"><img width="79" height="34" alt="Matrix" style="padding-left: 1px;vertical-align: middle" src="welcome/images/matrix.svg"/></a>')}}o()(d,"replaces","EmbeddedPage");var i=r(82),u=r.n(i),g=r(94);const m=()=>{const e=g.a.get().branding;let t=[{text:"About",url:"https://schildi.chat"},{text:"GitHub",url:"https://github.com/SchildiChat/schildichat-desktop"}];e&&e.authFooterLinks&&(t=e.authFooterLinks);const r=[];for(const e of t)r.push(u.a.createElement("a",{href:e.url,key:e.text,target:"_blank",rel:"noreferrer noopener"},e.text));return u.a.createElement("div",{className:"mx_AuthFooter"},r,u.a.createElement("a",{href:"https://matrix.org",target:"_blank",rel:"noreferrer noopener"},Object(s.a)("Powered by Matrix")))};m.replaces="AuthFooter";var h=m,p=r(86),k=r.n(p);class b extends u.a.PureComponent{render(){const e=g.a.get().branding;let t="themes/element/img/logos/element-logo.svg";return e&&e.authHeaderLogoUrl&&(t=e.authHeaderLogoUrl),u.a.createElement("div",{className:"mx_AuthHeaderLogo"},u.a.createElement("img",{src:t,alt:"SchildiChat"}))}}o()(b,"replaces","AuthHeaderLogo"),o()(b,"propTypes",{icon:k.a.string});var x=r(87);class w extends u.a.PureComponent{static getWelcomeBackgroundUrl(){if(w.welcomeBackgroundUrl)return w.welcomeBackgroundUrl;const e=g.a.get().branding;if(w.welcomeBackgroundUrl="themes/element/img/backgrounds/ocean.jpg",e&&e.welcomeBackgroundUrl)if(Array.isArray(e.welcomeBackgroundUrl)){const t=Math.floor(Math.random()*e.welcomeBackgroundUrl.length);w.welcomeBackgroundUrl=e.welcomeBackgroundUrl[t]}else w.welcomeBackgroundUrl=e.welcomeBackgroundUrl;return w.welcomeBackgroundUrl}render(){const e=x.getComponent("auth.AuthFooter"),t={background:`center/cover fixed url(${w.getWelcomeBackgroundUrl()})`},r={position:"absolute",top:0,right:0,bottom:0,left:0,filter:"blur(40px)",background:t.background};return u.a.createElement("div",{className:"mx_AuthPage",style:t},u.a.createElement("div",{className:"mx_AuthPage_modal",style:{position:"relative",background:"initial"}},u.a.createElement("div",{className:"mx_AuthPage_modalBlur",style:r}),u.a.createElement("div",{className:"mx_AuthPage_modalContent",style:{display:"flex",zIndex:1,background:"rgba(255, 255, 255, 0.59)",borderRadius:"3px"}},this.props.children)),u.a.createElement(e,null))}}o()(w,"replaces","AuthPage"),o()(w,"welcomeBackgroundUrl",void 0);let f={};d&&(f["structures.VectorEmbeddedPage"]=d),h&&(f["views.auth.VectorAuthFooter"]=h),b&&(f["views.auth.VectorAuthHeaderLogo"]=b),w&&(f["views.auth.VectorAuthPage"]=w)}}]);
//# sourceMappingURL=element-web-component-index.js.map