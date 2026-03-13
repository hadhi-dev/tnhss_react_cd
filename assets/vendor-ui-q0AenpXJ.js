import"./vendor-react-DfJ3n8_Z.js";var l={exports:{}},u={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p;function y(){if(p)return u;p=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function o(e,n,i){var f=null;if(i!==void 0&&(f=""+i),n.key!==void 0&&(f=""+n.key),"key"in n){i={};for(var a in n)a!=="key"&&(i[a]=n[a])}else i=n;return n=i.ref,{$$typeof:r,type:e,key:f,ref:n!==void 0?n:null,props:i}}return u.Fragment=t,u.jsx=o,u.jsxs=o,u}var m;function c(){return m||(m=1,l.exports=y()),l.exports}var b=c();function v(r){var t,o,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var n=r.length;for(t=0;t<n;t++)r[t]&&(o=v(r[t]))&&(e&&(e+=" "),e+=o)}else for(o in r)r[o]&&(e&&(e+=" "),e+=o);return e}function d(){for(var r,t,o=0,e="",n=arguments.length;o<n;o++)(r=arguments[o])&&(t=v(r))&&(e&&(e+=" "),e+=t);return e}function s(r){"@babel/helpers - typeof";return s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(r)}function x(r,t){if(s(r)!="object"||!r)return r;var o=r[Symbol.toPrimitive];if(o!==void 0){var e=o.call(r,t);if(s(e)!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}function E(r){var t=x(r,"string");return s(t)=="symbol"?t:t+""}export{s as _,d as c,b as j,E as t};
