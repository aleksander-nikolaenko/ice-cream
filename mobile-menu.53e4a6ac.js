parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"sByI":[function(require,module,exports) {
(()=>{const e=document.querySelector(".mobile-menu-wrapper"),t=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),c=document.querySelector(".js-close-menu"),n=document.querySelector(".js-close-menu-rewiews"),l=document.querySelector(".js-close-menu-about"),s=document.querySelector(".js-close-menu-products"),d=document.querySelector(".js-close-menu-contacts"),r=document.querySelector("html"),i=()=>{const c="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!c),t.classList.toggle("is-open"),e.classList.toggle("is-open"),r.classList.toggle("no-scroll"),bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",i),c.addEventListener("click",i),n.addEventListener("click",i),l.addEventListener("click",i),s.addEventListener("click",i),d.addEventListener("click",i),document.addEventListener("click",function(c){if(c.target===e){const c="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!c),t.classList.toggle("is-open"),e.classList.toggle("is-open"),r.classList.toggle("no-scroll"),bodyScrollLock[c?"enableBodyScroll":"disableBodyScroll"](document.body)}}),window.matchMedia("(min-width: 800px)").addEventListener("change",e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
},{}]},{},["sByI"], null)
//# sourceMappingURL=/TKdevelopers/mobile-menu.53e4a6ac.js.map