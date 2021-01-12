(()=>{"use strict";var n,e,t,i={846:(n,e,t)=>{t.d(e,{Z:()=>o});var i=t(645),r=t.n(i)()((function(n){return n[1]}));r.push([n.id,"@media (min-width: 540.01px) {\n  header {\n    height: 60px;\n    background: #d00;\n  }\n  header nav {\n    display: grid;\n    grid-auto-flow: column;\n    grid-template-columns: repeat(auto-fit, 1fr);\n    place-items: center;\n    height: 100%;\n  }\n  header .menu-overlay {\n    display: none;\n  }\n  header .navitem {\n    font-size: 12px;\n    color: #eee;\n    height: 100%;\n    width: 100%;\n    border-right: 1px solid #4443;\n    display: grid;\n    place-items: center;\n    position: relative;\n  }\n  header .navitem:last-child {\n    border-right: none;\n  }\n  header .navitem h2,\nheader .navitem .menu-item {\n    text-shadow: 1px 1px 1px #555;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n  }\n  header .dropdown {\n    background: #eee;\n    font-size: 1.2em;\n    position: absolute;\n    top: 60px;\n    width: 150%;\n    border-top: none;\n    box-shadow: 0px 0px 0px #fff, 1px 0px 2px #0002, 0px 1px 2px #0002, 0px 0px 0px #fff;\n  }\n  header .item-wrapper {\n    max-height: 300px;\n    transition: max-height 0.1s ease;\n  }\n  header .dropdown-item {\n    height: 100%;\n    color: #444;\n    font-size: 20px;\n    letter-spacing: 1px;\n    text-align: center;\n    padding: 15px 20px;\n    border-bottom: 1px solid #8884;\n    transition-property: height, font-size, padding;\n    transition-duration: 0.05s;\n    transition-timing-function: ease-in;\n  }\n  header .dropdown-item:last-child {\n    border-bottom: none;\n  }\n  header .dropdown-item:hover {\n    background-color: #0002;\n  }\n  header .navitem:not(.navitem:last-child) .dropdown {\n    left: 0;\n  }\n  header .navitem:last-child .dropdown {\n    right: 0;\n  }\n\n  .display-off .item-wrapper {\n    max-height: 0;\n    transition: max-height 0.1s ease;\n  }\n  .display-off .item-wrapper > * {\n    padding: 0;\n    border: none;\n    box-shadow: none;\n    opacity: 0;\n    font-size: 0px;\n    transition-property: padding, opacity, font-size;\n    transition-duration: 0.1s;\n    transition-timing-function: ease;\n  }\n}\n@media (max-width: 540px) {\n  nav {\n    width: 100%;\n    height: 50px;\n    overflow-x: scroll;\n    white-space: nowrap;\n    scrollbar-width: none;\n    position: relative;\n    background: #d00;\n    color: #eee;\n  }\n\n  .navitem {\n    font-size: 12px;\n    text-shadow: 1px 1px 1px #555;\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    padding: 10px;\n    padding-top: 15px;\n    margin-right: -5.08334px;\n    display: inline-block;\n    position: relative;\n  }\n  .navitem:last-child {\n    margin-right: 30px;\n  }\n  .navitem .dropdown {\n    font-size: 20px;\n    color: black;\n    text-align: center;\n    display: block;\n    position: fixed;\n    top: 50px;\n    left: 0;\n    transition: top 0.3s cubic-bezier(0.375, 0.885, 0, 1.125);\n    width: 100%;\n  }\n  .navitem .dropdown .item-wrapper {\n    background-color: #ececec;\n  }\n  .navitem .dropdown-item {\n    padding: 10px 0;\n    padding-left: 2px;\n    border-bottom: 1px solid #0007;\n    width: 100%;\n    opacity: 100%;\n    transition: opacity 0.5s ease 1s;\n  }\n  .navitem .dropdown-item:last-child {\n    border: none;\n  }\n  .navitem .dropdown.display-off {\n    top: -500px;\n    left: 0;\n    transition: top 0.3s ease;\n  }\n  .navitem .dropdown.display-off .item-wrapper {\n    opacity: 0;\n  }\n  .navitem .dropdown.display-off .dropdown-item > * {\n    opacity: 0;\n    font-size: 2px;\n    border: none;\n    transition-property: opacity, font-size, border;\n    transition-delay: 0.2s;\n    transition-timing-function: ease;\n  }\n\n  .menu-overlay {\n    position: fixed;\n    top: 0;\n    right: 0;\n    height: 50px;\n    width: 10%;\n    background: linear-gradient(to right, #0000, #fff9);\n    z-index: 2;\n  }\n}\n.slider {\n  height: 400px;\n  width: 90%;\n  min-width: 350px;\n  max-width: 600px;\n  margin: 100px auto;\n  margin-bottom: 10px;\n  border-top: 6px solid #222;\n  border-bottom: 6px solid #222;\n  border-radius: 5px;\n  position: relative;\n  display: grid;\n  grid-template-columns: 50px 1fr 50px;\n}\n.slider .slides {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 100%);\n  grid-auto-flow: column;\n  overflow: hidden;\n}\n.slider .slide:not(.slide:first-child) {\n  display: none;\n  place-items: center;\n  max-height: 400px;\n}\n.slider .slide:first-child {\n  display: grid;\n  place-items: center;\n  max-height: 400px;\n}\n.slider .shift {\n  height: 100%;\n  background: #222;\n  position: relative;\n}\n.slider .shift:hover span {\n  background: #eee;\n}\n.slider .shift span {\n  position: absolute;\n  width: 52px;\n  height: 5px;\n  background: #888;\n  border-radius: 5px;\n}\n.slider .shift-left span {\n  left: -4px;\n}\n.slider .shift-left span:first-child {\n  transform: rotate(-60deg);\n  top: 42.7%;\n}\n.slider .shift-left span:last-child {\n  transform: rotate(60deg);\n  top: 53%;\n}\n.slider .shift-right span {\n  right: -4px;\n}\n.slider .shift-right span:first-child {\n  transform: rotate(60deg);\n  top: 42.7%;\n}\n.slider .shift-right span:last-child {\n  transform: rotate(-60deg);\n  top: 53%;\n}\n\n.slide-control-icons {\n  height: 40px;\n  max-width: 300px;\n  padding: 0 10px;\n  border: 2px solid #222;\n  border-radius: 25px;\n  margin: 0 auto;\n  display: grid;\n  grid-auto-flow: column;\n  place-items: center;\n}\n.slide-control-icons .icon {\n  height: 20px;\n  width: 20px;\n  border: 1px solid #222;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n}\n.slide-control-icons .icon-filler {\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n}\n.slide-control-icons .icon:first-child .icon-filler {\n  background: #222;\n}\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nnavitem {\n  z-index: 3;\n}\n\n.d-none {\n  display: none;\n}\n",""]);const o=r},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=n(e);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,i){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(i)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(r[a]=!0)}for(var d=0;d<n.length;d++){var s=[].concat(n[d]);i&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},379:(n,e,t)=>{var i,r=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),o=[];function a(n){for(var e=-1,t=0;t<o.length;t++)if(o[t].identifier===n){e=t;break}return e}function d(n,e){for(var t={},i=[],r=0;r<n.length;r++){var d=n[r],s=e.base?d[0]+e.base:d[0],l=t[s]||0,p="".concat(s," ").concat(l);t[s]=l+1;var c=a(p),h={css:d[1],media:d[2],sourceMap:d[3]};-1!==c?(o[c].references++,o[c].updater(h)):o.push({identifier:p,updater:m(h,e),references:1}),i.push(p)}return i}function s(n){var e=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(n){e.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(e);else{var a=r(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,p=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function c(n,e,t,i){var r=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=p(e,r);else{var o=document.createTextNode(r),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(o,a[e]):n.appendChild(o)}}function h(n,e,t){var i=t.css,r=t.media,o=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var f=null,u=0;function m(n,e){var t,i,r;if(e.singleton){var o=u++;t=f||(f=s(e)),i=c.bind(null,t,o,!1),r=c.bind(null,t,o,!0)}else t=s(e),i=h.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return i(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;i(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i));var t=d(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<t.length;i++){var r=a(t[i]);o[r].references--}for(var s=d(n,e),l=0;l<t.length;l++){var p=a(t[l]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}t=s}}}}},r={};function o(n){if(r[n])return r[n].exports;var e=r[n]={id:n,exports:{}};return i[n](e,e.exports,o),e.exports}o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),n=o(379),e=o.n(n),t=o(846),e()(t.Z,{insert:"head",singleton:!1}),t.Z.locals,(()=>{let n=0;const e=n=>document.querySelectorAll(n),t=n=>document.querySelector(n);function i(){if(9==n)return;const e=t(".slides");e.children[n].style.display="none",n+=1,e.children[n].style.display="grid"}function r(){if(0==n)return;const e=t(".slides");e.children[n].style.display="none",n-=1,e.children[n].style.display="grid"}function o(n,e){for(let t=0;t<n;t++)e()}[...e("navitem")].forEach((n=>{n.addEventListener("click",(()=>function(n){n.classList.toggle("display-off")}(n.childNodes[3]))),[...n.childNodes[3].children[0].children].forEach((n=>function(n){n.addEventListener("click",(()=>{}))}(n)))})),t(".shift-right").addEventListener("click",i),t(".shift-left").addEventListener("click",r),[...e(".icon")].forEach(((e,a)=>{e.addEventListener("click",(()=>{n!==a&&(function(n,e){const i=t(".slide-control-icons").children[n],r=t(".slide-control-icons").children[e];i.firstElementChild.style.background="none",r.firstElementChild.style.background="#222"}(n,a),n<=a?o(a-n,i):o(n-a,r))}))}))})()})();