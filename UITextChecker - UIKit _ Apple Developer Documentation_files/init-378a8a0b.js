!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var r in n)("object"==typeof exports?exports:e)[r]=n[r]}}(this,function(){return webpackJsonp([4],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=new URLSearchParams(window.location.search).get("language");if(f.default.prefersObjC&&e!==c.default.occ.urlName&&e!==c.default.swift.shortName){var t=(0,o.loadInitData)(),n=t.diffVersion,r=t.variant;r&&window.location.replace((0,u.topicUrl)(r,{changes:n,language:c.default.occ.shortName}))}}var o=n(16),u=n(11),i=n(13),c=r(i),l=n(57),f=r(l);try{a()}catch(e){}},11:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=v.default,r=t[e]||e;return n+"/"+r}function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"https://www.apple.com";return t+"/wss/fonts?families="+e.join("|")}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).reduce(function(t,n){var r=e[n];return r?t.concat(encodeURIComponent(n)+"="+encodeURIComponent(r)):t},[]).join("&")}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.language,n=a(e,["language"]),r=h.default[t];if(r&&r.shortName===h.default.occ.shortName){var o=r.urlName||r.shortName;return Object.assign({},n,{language:o})}return n}function l(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i(c(t));return n.length>0?e+"?"+n:e}function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(e.language,a(e,["language"]));return l("/documentation",t)}function s(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n="#";if(e.url)n=e.url;else{var r=e.paths;if(r&&r.length>0){var a=encodeURI(r[0]);n="/"+a}}return l(n,t)}function d(e,t){return s(e,{changes:t.diffVersion,language:t.currentLanguage})}Object.defineProperty(t,"__esModule",{value:!0}),t.topicUrlWithContext=t.topicUrl=t.fontsUrl=t.collectionIndexUrl=t.buildUrl=t.assetUrl=void 0;var p=n(12),v=r(p),g=n(13),h=r(g);t.assetUrl=o,t.buildUrl=l,t.collectionIndexUrl=f,t.fontsUrl=u,t.topicUrl=s,t.topicUrlWithContext=d},12:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="/documentation/__assets";t.default=n},13:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={swift:{shortName:"swift",displayName:"Swift"},occ:{shortName:"occ",displayName:"Objective-C",urlName:"objc"},javascript:{shortName:"javascript",displayName:"JavaScript"}},r=[n.swift,n.occ,n.javascript];t.OrderedLanguages=r,t.default=n},16:function(e,t){"use strict";function n(){return r(u.bootstrap)}function r(e){return JSON.parse(document.getElementById(e).innerHTML)}function a(e){var t=e.querySelector('script[type="application/json"]');return JSON.parse(t.innerHTML)}function o(){return r(u.init)}Object.defineProperty(t,"__esModule",{value:!0});var u={init:"init-data",bootstrap:"bootstrap-data"};t.DataRef=u,t.loadBootstrapData=n,t.loadJSONData=r,t.loadJSONDataAtNode=a,t.loadInitData=o},57:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(13),i=r(u),c=n(58),l=r(c),f={preferredLanguage:"docs.setting.preferredLanguage"},s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new l.default;a(this,e),this.store=t}return o(e,[{key:"prefersObjC",get:function(){return this.preferredLanguage===i.default.occ}},{key:"preferredLanguage",get:function(){return i.default[this.store.getItem(f.preferredLanguage)]},set:function(e){this.store.setItem(f.preferredLanguage,e.shortName)}}]),e}(),d="undefined"==typeof window?new s:new s(window.localStorage);t.default=d},58:function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(){n(this,e),this.length=0}return r(e,[{key:"clear",value:function(){}},{key:"getItem",value:function(){return null}},{key:"key",value:function(){return null}},{key:"removeItem",value:function(){}},{key:"setItem",value:function(){}}]),e}();t.default=a}})});