'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint no-console: 0 */
var isDev = process.env.NODE_ENV !== 'production';

var warn = exports.warn = function warn(condition, format, a, b, c, d, e, f) {
  if (isDev && typeof console !== 'undefined' && console.warn) {
    if (format === undefined) {
      console.warn('LogUtils requires an error message argument');
    }

    if (!condition) {
      if (format === undefined) {
        console.warn('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        (function () {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;

          console.warn(format.replace(/%s/g, function () {
            return args[argIndex++];
          }));
        })();
      }
    }
  }
};