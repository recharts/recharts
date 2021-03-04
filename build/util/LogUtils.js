"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warn = void 0;
var isDev = process.env.NODE_ENV !== 'production';
var warn = function (condition, format) {
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    if (isDev && typeof console !== 'undefined' && console.warn) {
        if (format === undefined) {
            console.warn('LogUtils requires an error message argument');
        }
        if (!condition) {
            if (format === undefined) {
                console.warn('Minified exception occurred; use the non-minified dev environment ' +
                    'for the full error message and additional helpful warnings.');
            }
            else {
                var argIndex_1 = 0;
                console.warn(format.replace(/%s/g, function () { return args[argIndex_1++]; }));
            }
        }
    }
};
exports.warn = warn;
//# sourceMappingURL=LogUtils.js.map