import{g as R,e as q}from"./iframe-C7jIZL6o.js";import{r as w}from"./index-Bovuavvd.js";var D=w();const b=R(D);var s={exports:{}},c={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function g(){if(f)return c;f=1;var u=q();function d(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var p=typeof Object.is=="function"?Object.is:d,l=u.useState,m=u.useEffect,v=u.useLayoutEffect,E=u.useDebugValue;function h(e,t){var n=t(),a=l({inst:{value:n,getSnapshot:t}}),r=a[0].inst,i=a[1];return v(function(){r.value=n,r.getSnapshot=t,o(r)&&i({inst:r})},[e,n,t]),m(function(){return o(r)&&i({inst:r}),e(function(){o(r)&&i({inst:r})})},[e]),E(n),n}function o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!p(e,n)}catch{return!0}}function y(e,t){return t()}var x=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?y:h;return c.useSyncExternalStore=u.useSyncExternalStore!==void 0?u.useSyncExternalStore:x,c}var S;function O(){return S||(S=1,s.exports=g()),s.exports}export{b as R,O as a,D as r};
