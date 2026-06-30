import{e as E,R as s}from"./iframe-DNYOsiJO.js";var c={exports:{}},o={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x;function O(){if(x)return o;x=1;var e=E(),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),v=Object.prototype.hasOwnProperty,y=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function m(u,t,_){var n,i={},f=null,l=null;_!==void 0&&(f=""+_),t.key!==void 0&&(f=""+t.key),t.ref!==void 0&&(l=t.ref);for(n in t)v.call(t,n)&&!C.hasOwnProperty(n)&&(i[n]=t[n]);if(u&&u.defaultProps)for(n in t=u.defaultProps,t)i[n]===void 0&&(i[n]=t[n]);return{$$typeof:r,type:u,key:f,ref:l,props:i,_owner:y.current}}return o.Fragment=d,o.jsx=m,o.jsxs=m,o}var p;function P(){return p||(p=1,c.exports=O()),c.exports}var q=P();const a={},R=s.createContext(a);function h(e){const r=s.useContext(R);return s.useMemo(function(){return typeof e=="function"?e(r):{...r,...e}},[r,e])}function b(e){let r;return e.disableParentContext?r=typeof e.components=="function"?e.components(a):e.components||a:r=h(e.components),s.createElement(R.Provider,{value:r},e.children)}export{b as M,q as j,h as u};
