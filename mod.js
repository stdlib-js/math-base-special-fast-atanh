// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY;function t(n){return n!=n}var o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var a=Object.prototype.hasOwnProperty;var i="function"==typeof Symbol?Symbol:void 0,f="function"==typeof i?i.toStringTag:"";var u=o&&"symbol"==typeof Symbol.toStringTag?function(n){var r,t,o,i,u;if(null==n)return e.call(n);t=n[f],u=f,r=null!=(i=n)&&a.call(i,u);try{n[f]=void 0}catch(r){return e.call(n)}return o=e.call(n),r?n[f]=t:delete n[f],o}:function(n){return e.call(n)},y="function"==typeof Uint32Array;var c="function"==typeof Uint32Array?Uint32Array:null;var l,v="function"==typeof Uint32Array?Uint32Array:void 0;l=function(){var n,r,t;if("function"!=typeof c)return!1;try{r=new c(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(y&&t instanceof Uint32Array||"[object Uint32Array]"===u(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?v:function(){throw new Error("not implemented")};var p=l,A="function"==typeof Float64Array;var U="function"==typeof Float64Array?Float64Array:null;var w,b="function"==typeof Float64Array?Float64Array:void 0;w=function(){var n,r,t;if("function"!=typeof U)return!1;try{r=new U([1,3.14,-3.14,NaN]),t=r,n=(A&&t instanceof Float64Array||"[object Float64Array]"===u(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?b:function(){throw new Error("not implemented")};var m=w,N="function"==typeof Uint8Array;var d="function"==typeof Uint8Array?Uint8Array:null;var h,F="function"==typeof Uint8Array?Uint8Array:void 0;h=function(){var n,r,t;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,256,257]),t=r,n=(N&&t instanceof Uint8Array||"[object Uint8Array]"===u(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?F:function(){throw new Error("not implemented")};var I=h,S="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var E,j="function"==typeof Uint16Array?Uint16Array:void 0;E=function(){var n,r,t;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,65536,65537]),t=r,n=(S&&t instanceof Uint16Array||"[object Uint16Array]"===u(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?j:function(){throw new Error("not implemented")};var T,g={uint16:E,uint8:I};(T=new g.uint16(1))[0]=4660;var O=52===new g.uint8(T.buffer)[0],x=!0===O?1:0,P=new m(1),V=new p(P.buffer);function Y(n){return P[0]=n,V[x]}var _=!0===O?1:0,G=new m(1),k=new p(G.buffer);var q=1023;var z=.6931471803691238,B=1.9082149292705877e-10,C=0x40000000000000,D=.3333333333333333,H=1048575,J=2146435072,K=1048576,L=1072693248;function M(n){var o,e,a,i,f,u,y,c,l,v,p,A;return 0===n?r:t(n)||n<0?NaN:(f=0,(e=Y(n))<K&&(f-=54,e=Y(n*=C)),e>=J?n+n:(f+=(e>>20)-q|0,f+=(c=(e&=H)+614244&1048576|0)>>20|0,y=(n=function(n,r){return G[0]=n,k[_]=r>>>0,G[0]}(n,e|c^L))-1,(H&2+e)<3?0===y?0===f?0:f*z+f*B:(u=y*y*(.5-D*y),0===f?y-u:f*z-(u-f*B-y)):(c=e-398458|0,l=440401-e|0,i=(p=(A=(v=y/(2+y))*v)*A)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(p),a=A*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(p),u=a+i,(c|=l)>0?(o=.5*y*y,0===f?y-(o-v*(o+u)):f*z-(o-(v*(o+u)+f*B)-y)):0===f?y-v*(y-u):f*z-(v*(y-u)-f*B-y))))}function Q(o){return 0===o?o:t(o)||function(t){return t===n||t===r}(o)?NaN:.5*M((1+o)/(1-o))}export{Q as default};
//# sourceMappingURL=mod.js.map
