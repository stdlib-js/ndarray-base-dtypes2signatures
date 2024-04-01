// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,e;t=this,e=function(){"use strict";var t=Math.floor;function e(e){return t(e)===e}var r=4294967295,n="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function o(t){return"number"==typeof t}function u(t){var e,r="";for(e=0;e<t;e++)r+="0";return r}function a(t,e,r){var n=!1,i=e-t.length;return i<0||(function(t){return"-"===t[0]}(t)&&(n=!0,t=t.substr(1)),t=r?t+u(i):u(i)+t,n&&(t="-"+t)),t}var c=String.prototype.toLowerCase,l=String.prototype.toUpperCase;function f(t){var e,r,n;switch(t.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(r=t.arg,n=parseInt(r,10),!isFinite(n)){if(!o(r))throw new Error("invalid integer. Value: "+r);n=0}return n<0&&("u"===t.specifier||10!==e)&&(n=4294967295+n+1),n<0?(r=(-n).toString(e),t.precision&&(r=a(r,t.precision,t.padRight)),r="-"+r):(r=n.toString(e),n||t.precision?t.precision&&(r=a(r,t.precision,t.padRight)):r="",t.sign&&(r=t.sign+r)),16===e&&(t.alternate&&(r="0x"+r),r=t.specifier===l.call(t.specifier)?l.call(r):c.call(r)),8===e&&t.alternate&&"0"!==r.charAt(0)&&(r="0"+r),r}var s=Math.abs,p=String.prototype.toLowerCase,g=String.prototype.toUpperCase,y=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,b=/^(\d+)$/,v=/^(\d+)e/,m=/\.0$/,w=/\.0*e/,j=/(\..*[^0])0*e/;function _(t){var e,r,n=parseFloat(t.arg);if(!isFinite(n)){if(!o(t.arg))throw new Error("invalid floating-point number. Value: "+r);n=t.arg}switch(t.specifier){case"e":case"E":r=n.toExponential(t.precision);break;case"f":case"F":r=n.toFixed(t.precision);break;case"g":case"G":s(n)<1e-4?((e=t.precision)>0&&(e-=1),r=n.toExponential(e)):r=n.toPrecision(t.precision),t.alternate||(r=y.call(r,j,"$1e"),r=y.call(r,w,"e"),r=y.call(r,m,""));break;default:throw new Error("invalid double notation. Value: "+t.specifier)}return r=y.call(r,d,"e+0$1"),r=y.call(r,h,"e-0$1"),t.alternate&&(r=y.call(r,b,"$1."),r=y.call(r,v,"$1.e")),n>=0&&t.sign&&(r=t.sign+r),r=t.specifier===g.call(t.specifier)?g.call(r):p.call(r)}function x(t){var e,r="";for(e=0;e<t;e++)r+=" ";return r}var O=String.fromCharCode,E=isNaN,S=Array.isArray;function T(t){var e={};return e.specifier=t.specifier,e.precision=void 0===t.precision?1:t.precision,e.width=t.width,e.flags=t.flags||"",e.mapping=t.mapping,e}function k(t){var e,r,n,i,o,u,c,l,s,p,g,y,d;if(!S(t))throw new TypeError("invalid argument. First argument must be an array. Value: `"+t+"`.");for(u="",c=1,l=0;l<t.length;l++)if("string"==typeof(n=t[l]))u+=n;else{if(e=void 0!==n.precision,!(n=T(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),r=n.flags,s=0;s<r.length;s++)switch(i=r.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=r.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,E(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=f(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):O(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=_(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=a(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,d=void 0,(d=g-p.length)<0?p:p=y?p+x(d):x(d)+p)),u+=n.arg||"",c+=1}return u}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function P(t){var e={mapping:t[1]?parseInt(t[1],10):void 0,flags:t[2],width:t[3],precision:t[5],specifier:t[6]};return"."===t[4]&&void 0===t[5]&&(e.precision="1"),e}function V(t){var e,r,n,i;for(r=[],i=0,n=I.exec(t);n;)(e=t.slice(i,I.lastIndex-n[0].length)).length&&r.push(e),r.push(P(n)),i=I.lastIndex,n=I.exec(t);return(e=t.slice(i)).length&&r.push(e),r}function A(t){var e,r;if("string"!=typeof t)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",t));for(e=[V(t)],r=1;r<arguments.length;r++)e.push(arguments[r]);return k.apply(null,e)}var F,N=Object.prototype,C=N.toString,R=N.__defineGetter__,$=N.__defineSetter__,B=N.__lookupGetter__,L=N.__lookupSetter__;F=function(){try{return n({},"x",{}),!0}catch(t){return!1}}()?i:function(t,e,r){var n,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===C.call(t))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",t));if("object"!=typeof r||null===r||"[object Array]"===C.call(r))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",r));if((i="value"in r)&&(B.call(t,e)||L.call(t,e)?(n=t.__proto__,t.__proto__=N,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),o="get"in r,u="set"in r,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&R&&R.call(t,e,r.get),u&&$&&$.call(t,e,r.set),t};var G=F;function W(t,e,r){G(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function X(t){return"number"==typeof t}var Z="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return Z&&"symbol"==typeof Symbol.toStringTag}var U=Object.prototype.toString,Y=Object.prototype.hasOwnProperty;function D(t,e){return null!=t&&Y.call(t,e)}var H="function"==typeof Symbol?Symbol:void 0,z="function"==typeof H?H.toStringTag:"",q=M()?function(t){var e,r,n;if(null==t)return U.call(t);r=t[z],e=D(t,z);try{t[z]=void 0}catch(e){return U.call(t)}return n=U.call(t),e?t[z]=r:delete t[z],n}:function(t){return U.call(t)},J=Number,K=J.prototype.toString,Q=M();function tt(t){return"object"==typeof t&&(t instanceof J||(Q?function(t){try{return K.call(t),!0}catch(t){return!1}}(t):"[object Number]"===q(t)))}function et(t){return X(t)||tt(t)}W(et,"isPrimitive",X),W(et,"isObject",tt);var rt=Number.POSITIVE_INFINITY,nt=J.NEGATIVE_INFINITY;function it(t){return t<rt&&t>nt&&e(t)}function ot(t){return X(t)&&it(t)}function ut(t){return tt(t)&&it(t.valueOf())}function at(t){return ot(t)||ut(t)}function ct(t){return ot(t)&&t>=0}function lt(t){return ut(t)&&t.valueOf()>=0}function ft(t){return ct(t)||lt(t)}function st(t){return Object.keys(Object(t))}W(at,"isPrimitive",ot),W(at,"isObject",ut),W(ft,"isPrimitive",ct),W(ft,"isObject",lt);var pt,gt=void 0!==Object.keys;function yt(t){return"[object Arguments]"===q(t)}pt=function(){return yt(arguments)}();var dt=pt;function ht(t){return"string"==typeof t}var bt=String.prototype.valueOf,vt=M();function mt(t){return"object"==typeof t&&(t instanceof String||(vt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object String]"===q(t)))}function wt(t){return ht(t)||mt(t)}function jt(t){return t!=t}function _t(t){return X(t)&&jt(t)}function xt(t){return tt(t)&&jt(t.valueOf())}function Ot(t){return _t(t)||xt(t)}W(wt,"isPrimitive",ht),W(wt,"isObject",mt),W(Ot,"isPrimitive",_t),W(Ot,"isObject",xt);var Et=Object.prototype.propertyIsEnumerable,St=!Et.call("beep","0");function Tt(t,e){var r;return null!=t&&(!(r=Et.call(t,e))&&St&&wt(t)?!_t(e=+e)&&ot(e)&&e>=0&&e<t.length:r)}var kt=Array.isArray?Array.isArray:function(t){return"[object Array]"===q(t)},It=dt?yt:function(t){return null!==t&&"object"==typeof t&&!kt(t)&&"number"==typeof t.length&&e(t.length)&&t.length>=0&&t.length<=4294967295&&D(t,"callee")&&!Tt(t,"callee")},Pt=Array.prototype.slice;function Vt(t){return null!==t&&"object"==typeof t}W(Vt,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",t));return function(e){var r,n;if(!kt(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(Vt));var At=Tt((function(){}),"prototype"),Ft=!Tt({toString:null},"toString"),Nt=9007199254740991;function Ct(t,r,n){var i,o,u;if(!("object"==typeof(u=t)&&null!==u&&"number"==typeof u.length&&e(u.length)&&u.length>=0&&u.length<=Nt||ht(t)))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",t));if(0===(i=t.length))return-1;if(3===arguments.length){if(!ot(n))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=i)return-1;o=n}else(o=i+n)<0&&(o=0)}else o=0;if(Ot(r)){for(;o<i;o++)if(Ot(t[o]))return o}else for(;o<i;o++)if(t[o]===r)return o;return-1}var Rt=/./;function $t(t){return"boolean"==typeof t}var Bt=Boolean,Lt=Boolean.prototype.toString,Gt=M();function Wt(t){return"object"==typeof t&&(t instanceof Bt||(Gt?function(t){try{return Lt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===q(t)))}function Xt(t){return $t(t)||Wt(t)}W(Xt,"isPrimitive",$t),W(Xt,"isObject",Wt);var Zt="object"==typeof self?self:null,Mt="object"==typeof window?window:null,Ut="object"==typeof globalThis?globalThis:null,Yt=function(t){if(arguments.length){if(!$t(t))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",t));if(t)return new Function("return this;")()}if(Ut)return Ut;if(Zt)return Zt;if(Mt)return Mt;throw new Error("unexpected error. Unable to resolve global object.")}(),Dt=Yt.document&&Yt.document.childNodes,Ht=Int8Array;function zt(){return/^\s*function\s*([^(]*)/i}var qt=/^\s*function\s*([^(]*)/i;function Jt(t){var e,r,n,i;if(("Object"===(r=q(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=qt.exec(n.toString()))return e[1]}return Vt(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":r}W(zt,"REGEXP",qt);var Kt="function"==typeof Rt||"object"==typeof Ht||"function"==typeof Dt?function(t){return Jt(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"==(e=typeof t)?Jt(t).toLowerCase():e};function Qt(t){return t.constructor&&t.constructor.prototype===t}var te,ee=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],re="undefined"==typeof window?void 0:window,ne=function(){var t;if("undefined"===Kt(re))return!1;for(t in re)try{-1===Ct(ee,t)&&D(re,t)&&null!==re[t]&&"object"===Kt(re[t])&&Qt(re[t])}catch(t){return!0}return!1}(),ie="undefined"!=typeof window,oe=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];te=gt?function(){return 2!==(st(arguments)||"").length}(1,2)?function(t){return It(t)?st(Pt.call(t)):st(t)}:st:function(t){var e,r,n,i,o,u,a;if(i=[],It(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!D(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(0==(n="function"==typeof t)&&!Vt(t))return i;r=At&&n}for(o in t)r&&"prototype"===o||!D(t,o)||i.push(String(o));if(Ft)for(e=function(t){if(!1===ie&&!ne)return Qt(t);try{return Qt(t)}catch(t){return!1}}(t),a=0;a<oe.length;a++)u=oe[a],e&&"constructor"===u||!D(t,u)||i.push(String(u));return i};var ue=te;function ae(t){return"function"===Kt(t)}var ce,le=Object,fe=Object.getPrototypeOf;ce=ae(Object.getPrototypeOf)?fe:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===q(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var se=ce,pe=Object.prototype;function ge(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!kt(t)}(t)&&(e=function(t){return null==t?null:(t=le(t),se(t))}(t),!e||!D(t,"constructor")&&D(e,"constructor")&&ae(e.constructor)&&"[object Function]"===q(e.constructor)&&D(e,"isPrototypeOf")&&ae(e.isPrototypeOf)&&(e===pe||function(t){var e;for(e in t)if(!D(t,e))return!1;return!0}(t)))}var ye={all:["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"],typed:["binary","complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],floating_point:["complex64","complex128","float32","float64"],real_floating_point:["float32","float64"],complex_floating_point:["complex64","complex128"],integer:["int16","int32","int8","uint16","uint32","uint8","uint8c"],signed_integer:["int16","int32","int8"],unsigned_integer:["uint16","uint32","uint8","uint8c"],real:["float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"],numeric:["complex64","complex128","float32","float64","int16","int32","int8","uint16","uint32","uint8","uint8c"]};function de(){var t;return 0===arguments.length?ye.all.slice():(t=ye[arguments[0]])?t.slice():[]}function he(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function be(t,e,r){G(t,e,{configurable:!1,enumerable:!0,writable:!1,value:r})}W(de,"enum",he),function(t,e){var r,n,i;for(r=ue(e),i=0;i<r.length;i++)be(t,n=r[i],e[n])}(de,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var ve=function(t,e){var r,n,i,o,u,a,c,l=!0;if(!Vt(t))throw new TypeError(A("invalid argument. First argument must be an object (except null). Value: `%s`.",t));if(arguments.length>1){if(!ge(e))throw new TypeError(A("invalid argument. Options argument must be an object. Value: `%s`.",e));if(D(e,"duplicates")&&!$t(l=e.duplicates))throw new TypeError(A("invalid option. `%s` option must be a boolean. Option: `%s`.","duplicates",l))}if(n=(r=ue(t)).length,u={},l)for(c=0;c<n;c++)D(u,o=t[i=r[c]])?(a=u[o],kt(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(c=0;c<n;c++)u[t[i=r[c]]]=i;return u}({bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256},{duplicates:!1}),me={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function we(t){var e=typeof t;return"string"===e?null===function(t){var e=me[t];return"number"==typeof e?e:null}(t)?null:t:"number"===e?function(t){var e=ve[t];return"string"==typeof e?e:null}(t):null}function je(){var t,e=arguments,r="https://stdlib.io/e/"+e[0]+"?";for(t=1;t<e.length;t++)r+="&arg[]="+encodeURIComponent(e[t]);return r}return function(t,n,i){var o,u,a,c,l,f,s,p,g;if(!("object"==typeof(g=t)&&null!==g&&"number"==typeof g.length&&e(g.length)&&g.length>=0&&g.length<=r))throw new TypeError(je("0id2O",t));if(!ct(n))throw new TypeError(je("0id3X",n));if(!ct(i))throw new TypeError(je("0id2m",i));if(0===(o=t.length))throw new RangeError(je("0id0a"));if(o%(l=n+i)!=0)throw new RangeError(je("0idD0"));for(u=[],a=[],f=2*l,p=2*n,s=0;s<=f;s++)0===s?s===p?a.push("() => ("):a.push("("):s===f?s===p?a.push(") => ()"):a.push(")"):s===p?a.push(") => ("):s%2==1?a.push(""):a.push(", ");for(s=0;s<o;s++)null===(c=we(t[s]))&&(c=t[s]),a[2*(p=s%l)+1]=c,p===l-1&&u.push(a.join(""));return u}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).dtypes2signatures=e();
//# sourceMappingURL=browser.js.map