/*! ie-buster v0.0.2 MIT by Qrac */!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);t(1);if(function(){var e=window.navigator.userAgent.toLowerCase();return-1!==e.indexOf("msie")||-1!==e.indexOf("trident")}()){var r=document.getElementsByTagName("body")[0],o=document.createElement("div");o.classList.add("ie-buster-alert"),o.innerHTML='<p class="ie-buster-alert-note">ご利用のインターネットブラウザは推奨環境ではありません。セキュリティリスクが高い状態ですので、最新の Google Chrome をご利用ください。</p>\n  <a class="ie-buster-alert-link" href="https://www.google.com/chrome/" target="_blank" rel="noopener noreferrer">ダウンロードページへ</a>',r.appendChild(o)}},function(e,n,t){var r=t(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(3)(!0)).push([e.i,'.ie-buster-alert {\n  position: fixed;\n  top: 16px;\n  left: 50%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: calc(100% - 32px);\n  max-width: 866px;\n  padding: 16px 20px;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px;\n  box-sizing: border-box;\n  font-family: "Segoe UI", SegoeUI, "Yu Gothic UI", "Meiryo UI", "Helvetica Neue", Helvetica, Arial, sans-serif;\n  -webkit-transform: translatex(-50%);\n          transform: translatex(-50%);\n  z-index: 999999; }\n\n.ie-buster-alert-note {\n  flex: 1 0 0%;\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5; }\n\n.ie-buster-alert-link {\n  flex: none;\n  display: inline-block;\n  height: 36px;\n  margin-left: 12px;\n  min-width: 80px;\n  padding: 0 16px;\n  background-color: #0078d4;\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 36px;\n  text-decoration: none;\n  white-space: nowrap; }\n  .ie-buster-alert-link:hover {\n    background-color: #106ebe; }\n',"",{version:3,sources:["/Users/qrac/github/ie-buster/src/style.scss"],names:[],mappings:"AAAA;EACE,gBAAe;EACf,UAAS;EACT,UAAS;EACT,cAAa;EACb,oBAAmB;EACnB,gBAAe;EACf,yBAAwB;EACxB,iBAAgB;EAChB,mBAAkB;EAClB,uBAAsB;EACtB,+CAA8C;EAC9C,uBAAsB;EACtB,8GACgD;EAChD,oCAA2B;UAA3B,4BAA2B;EAC3B,gBAAe,EAChB;;AAED;EACE,aAAY;EACZ,YAAW;EACX,gBAAe;EACf,iBAAgB;EAChB,iBAAgB,EACjB;;AAED;EACE,WAAU;EACV,sBAAqB;EACrB,aAAY;EACZ,kBAAiB;EACjB,gBAAe;EACf,gBAAe;EACf,0BAAkC;EAClC,uBAAsB;EACtB,YAAW;EACX,gBAAe;EACf,iBAAgB;EAChB,kBAAiB;EACjB,sBAAqB;EACrB,oBAAmB,EAIpB;EAlBD;IAgBI,0BAAmC,EACpC",file:"style.scss",sourcesContent:['.ie-buster-alert {\n  position: fixed;\n  top: 16px;\n  left: 50%;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  width: calc(100% - 32px);\n  max-width: 866px;\n  padding: 16px 20px;\n  background-color: #fff;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 0px 5px 0px;\n  box-sizing: border-box;\n  font-family: "Segoe UI", SegoeUI, "Yu Gothic UI", "Meiryo UI",\n    "Helvetica Neue", Helvetica, Arial, sans-serif;\n  transform: translatex(-50%);\n  z-index: 999999;\n}\n\n.ie-buster-alert-note {\n  flex: 1 0 0%;\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 1.5;\n}\n\n.ie-buster-alert-link {\n  flex: none;\n  display: inline-block;\n  height: 36px;\n  margin-left: 12px;\n  min-width: 80px;\n  padding: 0 16px;\n  background-color: rgb(0, 120, 212);\n  box-sizing: border-box;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 36px;\n  text-decoration: none;\n  white-space: nowrap;\n  &:hover {\n    background-color: rgb(16, 110, 190);\n  }\n}\n'],sourceRoot:""}])},function(e,n){e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(r),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r={},o=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),i=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),a=null,s=0,f=[],l=t(5);function c(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],n))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],n));r[o.id]={id:o.id,refs:1,parts:s}}}}function u(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):t.push(r[a]={id:a,parts:[s]})}return t}function p(e,n){var t=i(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),f.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(e.insertAt.before,t);t.insertBefore(n,o)}}function d(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=f.indexOf(e);n>=0&&f.splice(n,1)}function A(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return h(n,e.attrs),p(e,n),n}function h(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i=n.transform(e.css)))return function(){};e.css=i}if(n.singleton){var f=s++;t=a||(a=A(n)),r=x.bind(null,t,f,!1),o=x.bind(null,t,f,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(n,e.attrs),p(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=l(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),o=function(){d(t),t.href&&URL.revokeObjectURL(t.href)}):(t=A(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){d(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=u(e,n);return c(t,n),function(e){for(var o=[],i=0;i<t.length;i++){var a=t[i];(s=r[a.id]).refs--,o.push(s)}e&&c(u(e,n),n);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete r[s.id]}}}};var g=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function x(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}}]);