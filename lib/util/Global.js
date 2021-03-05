"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Global = void 0;

var parseIsSsrByDefault = function parseIsSsrByDefault() {
  return !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);
};

var Global = {
  isSsr: parseIsSsrByDefault(),
  get: function get(key) {
    return Global[key];
  },
  set: function set(key, value) {
    if (typeof key === 'string') {
      Global[key] = value;
    } else {
      var keys = Object.keys(key);

      if (keys && keys.length) {
        keys.forEach(function (k) {
          Global[k] = key[k];
        });
      }
    }
  }
};
exports.Global = Global;