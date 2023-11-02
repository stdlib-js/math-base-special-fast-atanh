// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function r(n){return n!=n}var o,e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,f=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol:void 0,a="function"==typeof u?u.toStringTag:"",y=e&&"symbol"==typeof Symbol.toStringTag?function(n){var t,r,o,e,u;if(null==n)return i.call(n);r=n[a],u=a,t=null!=(e=n)&&f.call(e,u);try{n[a]=void 0}catch(t){return i.call(n)}return o=i.call(n),t?n[a]=r:delete n[a],o}:function(n){return i.call(n)},c="function"==typeof Uint32Array,l="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var n,t,r;if("function"!=typeof l)return!1;try{t=new l(t=[1,3.14,-3.14,4294967296,4294967297]),r=t,n=(c&&r instanceof Uint32Array||"[object Uint32Array]"===y(r))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?p:function(){throw new Error("not implemented")};var A,b=o,d="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,U="function"==typeof Float64Array?Float64Array:void 0;A=function(){var n,t,r;if("function"!=typeof v)return!1;try{t=new v([1,3.14,-3.14,NaN]),r=t,n=(d&&r instanceof Float64Array||"[object Float64Array]"===y(r))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n}()?U:function(){throw new Error("not implemented")};var m,w=A,s="function"==typeof Uint8Array,h="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;m=function(){var n,t,r;if("function"!=typeof h)return!1;try{t=new h(t=[1,3.14,-3.14,256,257]),r=t,n=(s&&r instanceof Uint8Array||"[object Uint8Array]"===y(r))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?N:function(){throw new Error("not implemented")};var F,I=m,S="function"==typeof Uint16Array,T="function"==typeof Uint16Array?Uint16Array:null,g="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,t,r;if("function"!=typeof T)return!1;try{t=new T(t=[1,3.14,-3.14,65536,65537]),r=t,n=(S&&r instanceof Uint16Array||"[object Uint16Array]"===y(r))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n}()?g:function(){throw new Error("not implemented")};var j,E={uint16:F,uint8:I};(j=new E.uint16(1))[0]=4660;var O=52===new E.uint8(j.buffer)[0],x=!0===O?1:0,P=new w(1),V=new b(P.buffer);function Y(n){return P[0]=n,V[x]}var _=!0===O?1:0,G=new w(1),k=new b(G.buffer),q=.6931471803691238,z=1.9082149292705877e-10,B=1048575;function C(n){var o,e,i,f,u,a,y,c,l,p,A,b;return 0===n?t:r(n)||n<0?NaN:(u=0,(e=Y(n))<1048576&&(u-=54,e=Y(n*=0x40000000000000)),e>=2146435072?n+n:(u+=(e>>20)-1023|0,u+=(c=614244+(e&=B)&1048576|0)>>20|0,y=(n=function(n,t){return G[0]=n,k[_]=t>>>0,G[0]}(n,e|1072693248^c))-1,(B&2+e)<3?0===y?0===u?0:u*q+u*z:(a=y*y*(.5-.3333333333333333*y),0===u?y-a:u*q-(a-u*z-y)):(c=e-398458|0,l=440401-e|0,f=(A=(b=(p=y/(2+y))*p)*b)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(A),i=b*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(A),a=i+f,(c|=l)>0?(o=.5*y*y,0===u?y-(o-p*(o+a)):u*q-(o-(p*(o+a)+u*z)-y)):0===u?y-p*(y-a):u*q-(p*(y-a)-u*z-y))))}return function(o){return 0===o?o:r(o)||function(r){return r===n||r===t}(o)?NaN:.5*C((1+o)/(1-o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).atanh=t();
//# sourceMappingURL=browser.js.map
