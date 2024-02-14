// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function r(t){return t!=t}function o(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var e=o(),i=Object.prototype.toString,f=Object.prototype.hasOwnProperty;function u(t,n){return null!=t&&f.call(t,n)}var a,c="function"==typeof Symbol?Symbol:void 0,l="function"==typeof c?c.toStringTag:"",y=e&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return i.call(t);r=t[l],n=u(t,l);try{t[l]=void 0}catch(n){return i.call(t)}return o=i.call(t),n?t[l]=r:delete t[l],o}:function(t){return i.call(t)},p="function"==typeof Uint32Array,b="function"==typeof Uint32Array?Uint32Array:null,m="function"==typeof Uint32Array?Uint32Array:void 0;a=function(){var t,n,r;if("function"!=typeof b)return!1;try{n=new b(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(p&&r instanceof Uint32Array||"[object Uint32Array]"===y(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?m:function(){throw new Error("not implemented")};var v,A=a,d=o(),S=Object.prototype.toString,g="function"==typeof Symbol?Symbol:void 0,w="function"==typeof g?g.toStringTag:"",U=d&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return S.call(t);r=t[w],n=u(t,w);try{t[w]=void 0}catch(n){return S.call(t)}return o=S.call(t),n?t[w]=r:delete t[w],o}:function(t){return S.call(t)},h="function"==typeof Float64Array,s="function"==typeof Float64Array?Float64Array:null,N="function"==typeof Float64Array?Float64Array:void 0;v=function(){var t,n,r;if("function"!=typeof s)return!1;try{n=new s([1,3.14,-3.14,NaN]),r=n,t=(h&&r instanceof Float64Array||"[object Float64Array]"===U(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?N:function(){throw new Error("not implemented")};var T,F=v,I=o(),j=Object.prototype.toString,E="function"==typeof Symbol?Symbol:void 0,O="function"==typeof E?E.toStringTag:"",x=I&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return j.call(t);r=t[O],n=u(t,O);try{t[O]=void 0}catch(n){return j.call(t)}return o=j.call(t),n?t[O]=r:delete t[O],o}:function(t){return j.call(t)},V="function"==typeof Uint8Array,Y="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;T=function(){var t,n,r;if("function"!=typeof Y)return!1;try{n=new Y(n=[1,3.14,-3.14,256,257]),r=n,t=(V&&r instanceof Uint8Array||"[object Uint8Array]"===x(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?_:function(){throw new Error("not implemented")};var G,P=T,k=o(),q=Object.prototype.toString,z="function"==typeof Symbol?Symbol:void 0,B="function"==typeof z?z.toStringTag:"",C=k&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return q.call(t);r=t[B],n=u(t,B);try{t[B]=void 0}catch(n){return q.call(t)}return o=q.call(t),n?t[B]=r:delete t[B],o}:function(t){return q.call(t)},D="function"==typeof Uint16Array,H="function"==typeof Uint16Array?Uint16Array:null,J="function"==typeof Uint16Array?Uint16Array:void 0;G=function(){var t,n,r;if("function"!=typeof H)return!1;try{n=new H(n=[1,3.14,-3.14,65536,65537]),r=n,t=(D&&r instanceof Uint16Array||"[object Uint16Array]"===C(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?J:function(){throw new Error("not implemented")};var K,L={uint16:G,uint8:P};(K=new L.uint16(1))[0]=4660;var M=52===new L.uint8(K.buffer)[0],Q=!0===M?1:0,R=new F(1),W=new A(R.buffer);function X(t){return R[0]=t,W[Q]}var Z,$=o(),tt=Object.prototype.toString,nt="function"==typeof Symbol?Symbol:void 0,rt="function"==typeof nt?nt.toStringTag:"",ot=$&&"symbol"==typeof Symbol.toStringTag?function(t){var n,r,o;if(null==t)return tt.call(t);r=t[rt],n=u(t,rt);try{t[rt]=void 0}catch(n){return tt.call(t)}return o=tt.call(t),n?t[rt]=r:delete t[rt],o}:function(t){return tt.call(t)},et="function"==typeof Float64Array,it="function"==typeof Float64Array?Float64Array:null,ft="function"==typeof Float64Array?Float64Array:void 0;Z=function(){var t,n,r;if("function"!=typeof it)return!1;try{n=new it([1,3.14,-3.14,NaN]),r=n,t=(et&&r instanceof Float64Array||"[object Float64Array]"===ot(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?ft:function(){throw new Error("not implemented")};var ut=!0===M?1:0,at=new Z(1),ct=new A(at.buffer),lt=Number.NEGATIVE_INFINITY,yt=.6931471803691238,pt=1.9082149292705877e-10,bt=1048575;function mt(t){var n,o,e,i,f,u,a,c,l,y,p,b;return 0===t?lt:r(t)||t<0?NaN:(f=0,(o=X(t))<1048576&&(f-=54,o=X(t*=0x40000000000000)),o>=2146435072?t+t:(f+=(o>>20)-1023|0,f+=(c=614244+(o&=bt)&1048576|0)>>20|0,a=(t=function(t,n){return at[0]=t,ct[ut]=n>>>0,at[0]}(t,o|1072693248^c))-1,(bt&2+o)<3?0===a?0===f?0:f*yt+f*pt:(u=a*a*(.5-.3333333333333333*a),0===f?a-u:f*yt-(u-f*pt-a)):(c=o-398458|0,l=440401-o|0,i=(p=(b=(y=a/(2+a))*y)*b)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(p),e=b*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(p),u=e+i,(c|=l)>0?(n=.5*a*a,0===f?a-(n-y*(n+u)):f*yt-(n-(y*(n+u)+f*pt)-a)):0===f?a-y*(a-u):f*yt-(y*(a-u)-f*pt-a))))}return function(o){return 0===o?o:r(o)||function(r){return r===t||r===n}(o)?NaN:.5*mt((1+o)/(1-o))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).atanh=n();
//# sourceMappingURL=browser.js.map
