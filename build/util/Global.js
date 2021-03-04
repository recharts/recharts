"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var parseIsSsrByDefault = function () {
    return !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);
};
exports.Global = {
    isSsr: parseIsSsrByDefault(),
    get: function (key) {
        return exports.Global[key];
    },
    set: function (key, value) {
        if (typeof key === 'string') {
            exports.Global[key] = value;
        }
        else {
            var keys = Object.keys(key);
            if (keys && keys.length) {
                keys.forEach(function (k) {
                    exports.Global[k] = key[k];
                });
            }
        }
    },
};
//# sourceMappingURL=Global.js.map