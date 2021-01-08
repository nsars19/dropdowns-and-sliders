(()=>{"use strict";var n,e,t,r={846:(n,e,t)=>{t.d(e,{Z:()=>i});var r=t(645),o=t.n(r)()((function(n){return n[1]}));o.push([n.id,"header {\n  height: 60px;\n  background: #d00;\n}\nheader nav {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: repeat(4, 1fr);\n  place-items: center;\n  height: 100%;\n}\nheader .navitem {\n  font-size: 12px;\n  color: #eee;\n  height: 100%;\n  width: 100%;\n  border-right: 1px solid #4443;\n  display: grid;\n  place-items: center;\n  position: relative;\n}\nheader .navitem:last-child {\n  border-right: none;\n}\nheader .navitem h2,\nheader .navitem .menu-item {\n  text-shadow: 1px 1px 1px #555;\n  -moz-user-select: none;\n  -webkit-user-select: none;\n}\nheader .dropdown {\n  background: #eee;\n  font-size: 1.2em;\n  position: absolute;\n  top: 60px;\n  width: 150%;\n  border-top: none;\n  box-shadow: 0px 0px 0px #fff, 1px 0px 2px #0002, 0px 1px 2px #0002, 0px 0px 0px #fff;\n}\nheader .item-wrapper {\n  max-height: 300px;\n  transition: max-height 0.1s ease;\n}\nheader .dropdown-item {\n  height: 100%;\n  color: #444;\n  font-size: 20px;\n  letter-spacing: 1px;\n  text-align: center;\n  padding: 15px 20px;\n  border-bottom: 1px solid #8884;\n  transition-property: height, font-size, padding;\n  transition-duration: 0.05s;\n  transition-timing-function: ease-in;\n}\nheader .dropdown-item:last-child {\n  border-bottom: none;\n}\nheader .dropdown-item:hover {\n  background-color: #0002;\n}\nheader .navitem:not(.navitem:last-child) .dropdown {\n  left: 0;\n}\nheader .navitem:last-child .dropdown {\n  right: 0;\n}\n\n.display-off .item-wrapper {\n  max-height: 0;\n  transition: max-height 0.1s ease;\n}\n.display-off .item-wrapper > * {\n  padding: 0;\n  border: none;\n  box-shadow: none;\n  opacity: 0;\n  font-size: 0px;\n  transition-property: padding, opacity, font-size;\n  transition-duration: 0.1s;\n  transition-timing-function: ease;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n",""]);const i=o},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,r){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);r&&o[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var r,o=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function a(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},r=[],o=0;o<n.length;o++){var d=n[o],s=e.base?d[0]+e.base:d[0],c=t[s]||0,l="".concat(s," ").concat(c);t[s]=c+1;var p=a(l),f={css:d[1],media:d[2],sourceMap:d[3]};-1!==p?(i[p].references++,i[p].updater(f)):i.push({identifier:l,updater:m(f,e),references:1}),r.push(l)}return r}function s(n){var e=document.createElement("style"),r=n.attributes||{};if(void 0===r.nonce){var i=t.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(n){e.setAttribute(n,r[n])})),"function"==typeof n.insert)n.insert(e);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,l=(c=[],function(n,e){return c[n]=e,c.filter(Boolean).join("\n")});function p(n,e,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(n.styleSheet)n.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function f(n,e,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}var u=null,h=0;function m(n,e){var t,r,o;if(e.singleton){var i=h++;t=u||(u=s(e)),r=p.bind(null,t,i,!1),o=p.bind(null,t,i,!0)}else t=s(e),r=f.bind(null,t,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return r(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;r(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var r=0;r<t.length;r++){var o=a(t[r]);i[o].references--}for(var s=d(n,e),c=0;c<t.length;c++){var l=a(t[c]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}t=s}}}}},o={};function i(n){if(o[n])return o[n].exports;var e=o[n]={id:n,exports:{}};return r[n](e,e.exports,i),e.exports}i.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return i.d(e,{a:e}),e},i.d=(n,e)=>{for(var t in e)i.o(e,t)&&!i.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},i.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=i(379),e=i.n(n),t=i(846),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,[...document.querySelectorAll("navitem")].forEach((n=>{n.addEventListener("click",(()=>{n.childNodes[3].classList.toggle("display-off")})),[...n.childNodes[3].children[0].children].forEach((n=>function(n){n.addEventListener("click",(()=>{console.log(n)}))}(n)))}))})();