"use strict";var p=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var f=p(function(E,h){"use strict";var w=require("@stdlib/assert-is-array-like-object"),m=require("@stdlib/assert-is-nonnegative-integer").isPrimitive,c=require("@stdlib/ndarray-base-dtype-resolve-str"),g=require("@stdlib/string-format");function d(a,i,o){var s,l,r,u,n,v,e,t;if(!w(a))throw new TypeError(g("invalid argument. First argument must be an array-like object. Value: `%s`.",a));if(!m(i))throw new TypeError(g("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",i));if(!m(o))throw new TypeError(g("invalid argument. Third argument must be a nonnegative integer. Value: `%s`.",o));if(s=a.length,s===0)throw new RangeError("invalid argument. First argument must contain at least one element.");if(n=i+o,s%n!==0)throw new RangeError("invalid arguments. Length of the first argument is incompatible with the second and third arguments.");for(l=[],r=[],v=2*n,t=2*i,e=0;e<=v;e++)e===0?e===t?r.push("() => ("):r.push("("):e===v?e===t?r.push(") => ()"):r.push(")"):e===t?r.push(") => ("):e%2===1?r.push(""):r.push(", ");for(e=0;e<s;e++)u=c(a[e]),u===null&&(u=a[e]),t=e%n,r[2*t+1]=u,t===n-1&&l.push(r.join(""));return l}h.exports=d});var b=f();module.exports=b;
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
