!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=74)}({74:function(e,t){window.onmessage=function(e){e.origin===window.location.origin&&e.data.blob&&function(e){const t=e.data,n=document.createElement("span");n.id="img";const o=document.createElement("a");o.id="a",o.rel="noreferrer noopener",o.download=t.download,o.style=t.style,o.style.fontFamily="Arial, Helvetica, Sans-Serif",o.href=window.URL.createObjectURL(t.blob),o.appendChild(n),o.appendChild(document.createTextNode(t.textContent)),n.style=(t.imgStyle||"width: 12px; height: 12px;-webkit-mask-size: 12px;mask-size: 12px;-webkit-mask-position: center;mask-position: center;-webkit-mask-repeat: no-repeat;mask-repeat: no-repeat;display: inline-block;")+""+`-webkit-mask-image: url('${t.imgSrc}');`+`mask-image: url('${t.imgSrc}');`+`background-color: ${o.style.color};`;const r=document.body;r.style="margin: 0px; overflow: hidden",r.appendChild(o),e.data.auto&&o.click()}(e)}}});
//# sourceMappingURL=usercontent.js.map