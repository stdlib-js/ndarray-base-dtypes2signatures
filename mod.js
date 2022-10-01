// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t=Math.floor;function n(n){return t(n)===n}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,o=Object.defineProperty,i=Object.prototype,u=i.toString,c=i.__defineGetter__,f=i.__defineSetter__,l=i.__lookupGetter__,a=i.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?o:function(t,n,e){var r,o,p,s;if("object"!=typeof t||null===t||"[object Array]"===u.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===u.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((o="value"in e)&&(l.call(t,n)||a.call(t,n)?(r=t.__proto__,t.__proto__=i,delete t[n],t[n]=e.value,t.__proto__=r):t[n]=e.value),p="get"in e,s="set"in e,o&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&c&&c.call(t,n,e.get),s&&f&&f.call(t,n,e.set),t};var p=r;function s(t,n,e){p(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function y(t){return"number"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var m=Object.prototype.hasOwnProperty;function h(t,n){return null!=t&&m.call(t,n)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var w=g()?function(t){var n,e,r;if(null==t)return v.call(t);e=t[d],n=h(t,d);try{t[d]=void 0}catch(n){return v.call(t)}return r=v.call(t),n?t[d]=e:delete t[d],r}:function(t){return v.call(t)},j=Number,O=j.prototype.toString;var _=g();function E(t){return"object"==typeof t&&(t instanceof j||(_?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===w(t)))}function S(t){return y(t)||E(t)}s(S,"isPrimitive",y),s(S,"isObject",E);var x=Number.POSITIVE_INFINITY,P=j.NEGATIVE_INFINITY;function T(t){return t<x&&t>P&&n(t)}function I(t){return y(t)&&T(t)}function A(t){return E(t)&&T(t.valueOf())}function k(t){return I(t)||A(t)}function V(t){return I(t)&&t>=0}function N(t){return A(t)&&t.valueOf()>=0}function B(t){return V(t)||N(t)}function F(t){return Object.keys(Object(t))}s(k,"isPrimitive",I),s(k,"isObject",A),s(B,"isPrimitive",V),s(B,"isObject",N);var M=void 0!==Object.keys;function L(t){return"[object Arguments]"===w(t)}var C=function(){return L(arguments)}();function G(t){return"string"==typeof t}var R=String.prototype.valueOf;var Y=g();function X(t){return"object"==typeof t&&(t instanceof String||(Y?function(t){try{return R.call(t),!0}catch(t){return!1}}(t):"[object String]"===w(t)))}function H(t){return G(t)||X(t)}function U(t){return t!=t}function W(t){return y(t)&&U(t)}function D(t){return E(t)&&U(t.valueOf())}function q(t){return W(t)||D(t)}s(H,"isPrimitive",G),s(H,"isObject",X),s(q,"isPrimitive",W),s(q,"isObject",D);var z=Object.prototype.propertyIsEnumerable;var J=!z.call("beep","0");function K(t,n){var e;return null!=t&&(!(e=z.call(t,n))&&J&&H(t)?!W(n=+n)&&I(n)&&n>=0&&n<t.length:e)}var Q=Array.isArray?Array.isArray:function(t){return"[object Array]"===w(t)};var Z=C?L:function(t){return null!==t&&"object"==typeof t&&!Q(t)&&"number"==typeof t.length&&n(t.length)&&t.length>=0&&t.length<=4294967295&&h(t,"callee")&&!K(t,"callee")},$=Array.prototype.slice;function tt(t){return null!==t&&"object"==typeof t}s(tt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!Q(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(tt));var nt=K((function(){}),"prototype"),et=!K({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&n(t.length)&&t.length>=0&&t.length<=9007199254740991}function ot(t,n,e){var r,o;if(!rt(t)&&!G(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!I(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(q(n)){for(;o<r;o++)if(q(t[o]))return o}else for(;o<r;o++)if(t[o]===n)return o;return-1}var it=/./;function ut(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var ft=g();function lt(t){return"object"==typeof t&&(t instanceof Boolean||(ft?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===w(t)))}function at(t){return ut(t)||lt(t)}function pt(){return new Function("return this;")()}s(at,"isPrimitive",ut),s(at,"isObject",lt);var st="object"==typeof self?self:null,yt="object"==typeof window?window:null,bt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},gt="object"==typeof bt?bt:null;var vt=function(t){if(arguments.length){if(!ut(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(gt)return gt;throw new Error("unexpected error. Unable to resolve global object.")}(),mt=vt.document&&vt.document.childNodes,ht=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var wt=/^\s*function\s*([^(]*)/i;function jt(t){var n,e,r,o;if(("Object"===(e=w(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=wt.exec(r.toString()))return n[1]}return tt(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(dt,"REGEXP",wt);var Ot="function"==typeof it||"object"==typeof ht||"function"==typeof mt?function(t){return jt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?jt(t).toLowerCase():n};function _t(t){return t.constructor&&t.constructor.prototype===t}var Et=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],St="undefined"==typeof window?void 0:window;var xt=function(){var t;if("undefined"===Ot(St))return!1;for(t in St)try{-1===ot(Et,t)&&h(St,t)&&null!==St[t]&&"object"===Ot(St[t])&&_t(St[t])}catch(t){return!0}return!1}(),Pt="undefined"!=typeof window;var Tt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var It=M?function(){return 2!==(F(arguments)||"").length}(1,2)?function(t){return Z(t)?F($.call(t)):F(t)}:F:function(t){var n,e,r,o,i,u,c;if(o=[],Z(t)){for(c=0;c<t.length;c++)o.push(c.toString());return o}if("string"==typeof t){if(t.length>0&&!h(t,"0"))for(c=0;c<t.length;c++)o.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!tt(t))return o;e=nt&&r}for(i in t)e&&"prototype"===i||!h(t,i)||o.push(String(i));if(et)for(n=function(t){if(!1===Pt&&!xt)return _t(t);try{return _t(t)}catch(t){return!1}}(t),c=0;c<Tt.length;c++)u=Tt[c],n&&"constructor"===u||!h(t,u)||o.push(String(u));return o};function At(t){return"function"===Ot(t)}var kt,Vt=Object.getPrototypeOf;kt=At(Object.getPrototypeOf)?Vt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===w(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Nt=kt;var Bt=Object.prototype;function Ft(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!Q(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Nt(t))}(t),!n||!h(t,"constructor")&&h(n,"constructor")&&At(n.constructor)&&"[object Function]"===w(n.constructor)&&h(n,"isPrototypeOf")&&At(n.isPrototypeOf)&&(n===Bt||function(t){var n;for(n in t)if(!h(t,n))return!1;return!0}(t)))}var Mt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Mt.slice()}var Ct=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Gt(){return Ct.slice()}function Rt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Yt(t,n,e){p(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}s(Gt,"enum",Rt),function(t,n){var e,r,o;for(e=It(n),o=0;o<e.length;o++)Yt(t,r=e[o],n[r])}(Gt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Xt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ht(){return{bool:Xt.bool,int8:Xt.int8,uint8:Xt.uint8,uint8c:Xt.uint8c,int16:Xt.int16,uint16:Xt.uint16,int32:Xt.int32,uint32:Xt.uint32,int64:Xt.int64,uint64:Xt.uint64,float32:Xt.float32,float64:Xt.float64,complex64:Xt.complex64,complex128:Xt.complex128,binary:Xt.binary,generic:Xt.generic,notype:Xt.notype,userdefined_type:Xt.userdefined_type}}s(Lt,"enum",Ht),function(t,n){var e,r,o;for(e=It(n),o=0;o<e.length;o++)Yt(t,r=e[o],n[r])}(Lt,Ht());var Ut=function(t,n){var e,r,o,i,u,c,f,l=!0;if(!tt(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Ft(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(h(n,"duplicates")&&!ut(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=It(t)).length,u={},l)for(f=0;f<r;f++)h(u,i=t[o=e[f]])?(c=u[i],Q(c)?u[i].push(o):u[i]=[c,o]):u[i]=o;else for(f=0;f<r;f++)u[t[o=e[f]]]=o;return u}(Ht(),{duplicates:!1});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Dt(t){var n=typeof t;return"string"===n?null===function(t){var n=Wt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Ut[t];return"string"==typeof n?n:null}(t):null}function qt(){var t,n=arguments,e=n[0],r="https://stdlib.io/e/"+e+"?";for(t=1;t<n.length;t++)r+="&arg[]="+encodeURIComponent(n[t]);return r}function zt(t,e,r){var o,i,u,c,f,l,a,p,s;if(!("object"==typeof(s=t)&&null!==s&&"number"==typeof s.length&&n(s.length)&&s.length>=0&&s.length<=4294967295))throw new TypeError(qt("0ME2a",t));if(!V(e))throw new TypeError(qt("0ME3k",e));if(!V(r))throw new TypeError(qt("0ME2y",r));if(0===(o=t.length))throw new RangeError(qt("0ME0a"));if(o%(f=e+r)!=0)throw new RangeError("invalid arguments. Length of the first argument is incompatible with the second and third arguments.");for(i=[],u=[],l=2*f,p=2*e,a=0;a<=l;a++)0===a?a===p?u.push("() => ("):u.push("("):a===l?a===p?u.push(") => ()"):u.push(")"):a===p?u.push(") => ("):a%2==1?u.push(""):u.push(", ");for(a=0;a<o;a++)null===(c=Dt(t[a]))&&(c=t[a]),u[2*(p=a%f)+1]=c,p===f-1&&i.push(u.join(""));return i}export{zt as default};
//# sourceMappingURL=mod.js.map
