"use strict";var p=function(a,i){return function(){return i||a((i={exports:{}}).exports,i),i.exports}};var f=p(function(E,h){
var w=require('@stdlib/assert-is-array-like-object/dist'),m=require('@stdlib/assert-is-nonnegative-integer/dist').isPrimitive,c=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),g=require('@stdlib/error-tools-fmtprodmsg/dist');function d(a,i,o){var s,l,r,u,n,v,e,t;if(!w(a))throw new TypeError(g('0id2O',a));if(!m(i))throw new TypeError(g('0id3X',i));if(!m(o))throw new TypeError(g('0id2m',o));if(s=a.length,s===0)throw new RangeError(g('0id0a'));if(n=i+o,s%n!==0)throw new RangeError(g('0idD0'));for(l=[],r=[],v=2*n,t=2*i,e=0;e<=v;e++)e===0?e===t?r.push("() => ("):r.push("("):e===v?e===t?r.push(") => ()"):r.push(")"):e===t?r.push(") => ("):e%2===1?r.push(""):r.push(", ");for(e=0;e<s;e++)u=c(a[e]),u===null&&(u=a[e]),t=e%n,r[2*t+1]=u,t===n-1&&l.push(r.join(""));return l}h.exports=d
});var b=f();module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map