!function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1)}([function(e,t,o){"use strict";var n,i=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var o=document.querySelector(t);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(e){o=null}e[t]=o}return e[t]}}(),r={};function s(e,t,o){for(var n=0;n<t.length;n++){var i={css:t[n][1],media:t[n][2],sourceMap:t[n][3]};r[e][n]?r[e][n](i):r[e].push(m(i,o))}}function l(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var i=o.nc;i&&(n.nonce=i)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var u,c=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function g(e,t,o,n){var i=o?"":n.css;if(e.styleSheet)e.styleSheet.cssText=c(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function d(e,t,o){var n=o.css,i=o.media,a=o.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,f=0;function m(e,t){var o,n,i;if(t.singleton){var a=f++;o=p||(p=l(t)),n=g.bind(null,o,a,!1),i=g.bind(null,o,a,!0)}else o=l(t),n=d.bind(null,o,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(o)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else i()}}e.exports=function(e,t,o){return(o=o||{}).singleton||"boolean"==typeof o.singleton||(o.singleton=i()),e=o.base?e+o.base:e,t=t||[],r[e]||(r[e]=[]),s(e,t,o),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){r[e]||(r[e]=[]),s(e,t,o);for(var n=t.length;n<r[e].length;n++)r[e][n]();r[e].length=t.length,0===r[e].length&&delete r[e]}}}},function(e,t,o){function n(e){e.keys().forEach(e)}n(o(2)),n(o(5)),n(o(34))},function(e,t,o){var n={"./common.js":3,"./toggle-button.js":4};function i(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=2},function(e,t){document.querySelector(".page-main__promo").classList.add("page-main__promo--animated");for(var o=document.querySelectorAll(".promo-icon__item"),n=0;n<o.length;++n)o[n].classList.add("promo-icon__item--animated");var i=window.scrollY,a=document.querySelector(".page-header");window.addEventListener("scroll",(function(e){window.scrollY-i>50?(a.classList.add("page-header--hidden"),i=window.scrollY):i-window.scrollY>10&&(a.classList.remove("page-header--hidden"),i=window.scrollY)}))},function(e,t){var o=document.querySelector(".page-header"),n=o.querySelector(".page-header__menu-toggle"),i=n.querySelector(".toggle-button__line1"),a=n.querySelector(".toggle-button__line2"),r=n.querySelector(".toggle-button__line3"),s=document.querySelector(".page-header__nav").querySelectorAll(".main-nav__item-wrapper");o.querySelector(".main-nav__item-wrapper--close").addEventListener("click",(function(){!function(){i.classList.remove("toggle-button__line1--close"),a.classList.remove("toggle-button__line2--close"),r.classList.remove("toggle-button__line3--close");for(var e=0;e<s.length;++e)s[e].classList.remove("main-nav__item-wrapper-animated")}()})),n.addEventListener("click",(function(){!function(){i.classList.toggle("toggle-button__line1--close"),a.classList.toggle("toggle-button__line2--close"),r.classList.toggle("toggle-button__line3--close");for(var e=0;e<s.length;++e)s[e].classList.toggle("main-nav__item-wrapper-animated")}()}))},function(e,t,o){var n={"./about-main.scss":6,"./gallery-additional.scss":8,"./gallery-main.scss":10,"./goto-main.scss":12,"./html.scss":14,"./main-nav.scss":16,"./page-footer.scss":18,"./page-header.scss":20,"./page-main.scss":22,"./page.scss":24,"./promo-icon.scss":26,"./promo-text.scss":28,"./social.scss":30,"./toggle-button.scss":32};function i(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=5},function(e,t,o){var n=o(0),i=o(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(17);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(19);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(21);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(23);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(25);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(27);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(29);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(31);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n=o(0),i=o(33);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(n(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,o){},function(e,t,o){var n={"./about/about-additional-desktop-1400.jpg":35,"./about/about-additional-mobile.jpg":36,"./about/about-main-arrow-desktop-1400.png":37,"./about/about-main-desktop-1400.png":38,"./about/about-main-icon-desktop-1400.png":39,"./about/about-main-mobile.png":40,"./favicon.ico":41,"./gallery-additional/image-1.png":42,"./gallery-additional/image-2.png":43,"./gallery-additional/image-3.png":44,"./gallery-additional/image-4.png":45,"./gallery-additional/image-5.png":46,"./gallery-additional/image-6.png":47,"./gallery-additional/image-7.png":48,"./gallery-additional/image-8.png":49,"./gallery-additional/image-9.png":50,"./gallery/gallery-desktop-1400.jpg":51,"./gallery/gallery-mobile.png":52,"./gallery/gallery-socials-desktop-1400.png":53,"./gallery/gallery-socials-mobile.png":54,"./goto/goto-additional-mobile.jpg":55,"./goto/goto-main-mobile.png":56,"./icons/camera.png":57,"./icons/map.png":58,"./icons/present.png":59,"./logo/logo-footer.jpg":60,"./logo/logo-header.png":61,"./promo/box.png":62,"./promo/heart.png":63,"./promo/photo.png":64,"./promo/promo-desktop-1400.jpg":65,"./promo/promo-mobile.jpg":66,"./promo/promo.jpg":67,"./socials/facebook.jpeg":68,"./socials/mir.jpeg":69,"./socials/vkontakte.jpeg":70,"./socials/youtube.jpeg":71};function i(e){var t=a(e);return o(t)}function a(e){if(!o.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=a,e.exports=i,i.id=34},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/about/about-additional-desktop-1400.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/about/about-additional-mobile.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/about/about-main-arrow-desktop-1400.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/about/about-main-desktop-1400.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/about/about-main-icon-desktop-1400.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/about/about-main-mobile.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/favicon.ico"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-1.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-2.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-3.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-4.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-5.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-6.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-7.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-8.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery-additional/image-9.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery/gallery-desktop-1400.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery/gallery-mobile.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery/gallery-socials-desktop-1400.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/gallery/gallery-socials-mobile.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/goto/goto-additional-mobile.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/goto/goto-main-mobile.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/icons/camera.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/icons/map.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/icons/present.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/logo/logo-footer.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/logo/logo-header.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/promo/box.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/promo/heart.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/promo/photo.png"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/promo/promo-desktop-1400.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/promo/promo-mobile.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/promo/promo.jpg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/socials/facebook.jpeg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/socials/mir.jpeg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/socials/vkontakte.jpeg"},function(e,t,o){"use strict";o.r(t),t.default=o.p+"images/socials/youtube.jpeg"}]);