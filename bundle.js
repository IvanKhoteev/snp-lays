!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),r={};function l(e,t,n){for(var o=0;o<t.length;o++){var i={css:t[o][1],media:t[o][2],sourceMap:t[o][3]};r[e][o]?r[e][o](i):r[e].push(m(i,n))}}function s(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var r=a(e.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}return t}var c,u=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function g(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=u(t,i);else{var a=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(a,r[t]):e.appendChild(a)}}function d(e,t,n){var o=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,p=0;function m(e,t){var n,o,i;if(t.singleton){var a=p++;n=f||(f=s(t)),o=g.bind(null,n,a,!1),i=g.bind(null,n,a,!0)}else n=s(t),o=d.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t,n){return(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=i()),e=n.base?e+n.base:e,t=t||[],r[e]||(r[e]=[]),l(e,t,n),function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){r[e]||(r[e]=[]),l(e,t,n);for(var o=t.length;o<r[e].length;o++)r[e][o]();r[e].length=t.length,0===r[e].length&&delete r[e]}}}},function(e,t,n){function o(e){e.keys().forEach(e)}o(n(2)),o(n(5)),o(n(34))},function(e,t,n){var o={"./common.js":3,"./toggle-button.js":4};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=2},function(e,t){document.querySelector(".page-main__promo").classList.add("page-main__promo--animated");for(var n=document.querySelectorAll(".promo-icon__item"),o=0;o<n.length;++o)n[o].classList.add("promo-icon__item--animated");var i=window.scrollY,a=document.querySelector(".page-header");window.addEventListener("scroll",(function(e){window.scrollY-i>50?(a.classList.add("page-header--hidden"),i=window.scrollY):i-window.scrollY>10&&(a.classList.remove("page-header--hidden"),i=window.scrollY)}))},function(e,t){var n=document.querySelector(".page-header"),o=n.querySelector(".page-header__menu-toggle"),i=o.querySelector(".toggle-button__line1"),a=o.querySelector(".toggle-button__line2"),r=o.querySelector(".toggle-button__line3"),l=document.querySelector(".page-header__nav").querySelectorAll(".main-nav__item-wrapper");n.querySelector(".main-nav__item-wrapper--close").addEventListener("click",(function(){!function(){i.classList.remove("toggle-button__line1--close"),a.classList.remove("toggle-button__line2--close"),r.classList.remove("toggle-button__line3--close");for(var e=0;e<l.length;++e)l[e].classList.remove("main-nav__item-wrapper-animated")}()})),o.addEventListener("click",(function(){!function(){i.classList.toggle("toggle-button__line1--close"),a.classList.toggle("toggle-button__line2--close"),r.classList.toggle("toggle-button__line3--close");for(var e=0;e<l.length;++e)l[e].classList.toggle("main-nav__item-wrapper-animated")}()}))},function(e,t,n){var o={"./about-main.scss":6,"./gallery-additional.scss":8,"./gallery-main.scss":10,"./goto-main.scss":12,"./html.scss":14,"./main-nav.scss":16,"./page-footer.scss":18,"./page-header.scss":20,"./page-main.scss":22,"./page.scss":24,"./promo-icon.scss":26,"./promo-text.scss":28,"./social.scss":30,"./toggle-button.scss":32};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=5},function(e,t,n){var o=n(0),i=n(7);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(9);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(11);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(13);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(15);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(17);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(19);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(21);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(23);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(25);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(27);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(29);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(31);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o=n(0),i=n(33);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1},r=(o(e.i,i,a),i.locals?i.locals:{});e.exports=r},function(e,t,n){},function(e,t,n){var o={"./about/about-additional-mobile.jpg":35,"./about/about-main-mobile.png":36,"./favicon.ico":37,"./gallery-additional/image-1.png":38,"./gallery-additional/image-2.png":39,"./gallery-additional/image-3.png":40,"./gallery-additional/image-4.png":41,"./gallery-additional/image-5.png":42,"./gallery-additional/image-6.png":43,"./gallery-additional/image-7.png":44,"./gallery-additional/image-8.png":45,"./gallery-additional/image-9.png":46,"./gallery/gallery-mobile.png":47,"./gallery/gallery-socials-mobile.png":48,"./goto/goto-additional-mobile.jpg":49,"./goto/goto-main-mobile.png":50,"./icons/camera.png":51,"./icons/map.png":52,"./icons/present.png":53,"./logo/logo-footer.jpg":54,"./logo/logo-header.png":55,"./promo/box.png":56,"./promo/heart.png":57,"./promo/photo.png":58,"./promo/promo-mobile.jpg":59,"./promo/promo.jpg":60,"./socials/facebook.jpeg":61,"./socials/mir.jpeg":62,"./socials/vkontakte.jpeg":63,"./socials/youtube.jpeg":64};function i(e){var t=a(e);return n(t)}function a(e){if(!n.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}i.keys=function(){return Object.keys(o)},i.resolve=a,e.exports=i,i.id=34},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/about/about-additional-mobile.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/about/about-main-mobile.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/favicon.ico"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-1.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-2.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-3.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-4.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-5.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-6.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-7.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-8.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery-additional/image-9.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery/gallery-mobile.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/gallery/gallery-socials-mobile.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/goto/goto-additional-mobile.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/goto/goto-main-mobile.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/icons/camera.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/icons/map.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/icons/present.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/logo/logo-footer.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/logo/logo-header.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/promo/box.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/promo/heart.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/promo/photo.png"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/promo/promo-mobile.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/promo/promo.jpg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/socials/facebook.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/socials/mir.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/socials/vkontakte.jpeg"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"images/socials/youtube.jpeg"}]);