"use strict";var p=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(n){throw r=0,n}}};var f=p(function(E,h){"use strict";var w=require("@stdlib/assert-is-array-like-object"),m=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,c=require("@stdlib/ndarray-base-dtype-resolve-str"),g=require("@stdlib/string-format");function d(a,r,n){var u,l,i,o,s,v,e,t;if(!w(a))throw new TypeError(g("invalid argument. First argument must be an array-like object. Value: `%s`.",a));if(!m(r))throw new TypeError(g("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",r));if(!m(n))throw new TypeError(g("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",n));if(u=a.length,u===0)throw new RangeError("invalid argument. First argument must contain at least one element.");if(s=r+n,u%s!==0)throw new RangeError("invalid arguments. Length of the first argument is incompatible with the second and third arguments.");for(l=[],i=[],v=2*s,t=2*r,e=0;e<=v;e++)e===0?e===t?i.push("() => ("):i.push("("):e===v?e===t?i.push(") => ()"):i.push(")"):e===t?i.push(") => ("):e%2===1?i.push(""):i.push(", ");for(e=0;e<u;e++)o=c(a[e]),o===null&&(o=a[e]),t=e%s,i[2*t+1]=o,t===s-1&&l.push(i.join(""));return l}h.exports=d});var b=f();module.exports=b;
/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
