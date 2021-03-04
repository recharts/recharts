"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePrefixStyle = void 0;
var PREFIX_LIST = ['Webkit', 'Moz', 'O', 'ms'];
var generatePrefixStyle = function (name, value) {
    if (!name) {
        return null;
    }
    var camelName = name.replace(/(\w)/, function (v) { return v.toUpperCase(); });
    var result = PREFIX_LIST.reduce(function (res, entry) {
        var _a;
        return (__assign(__assign({}, res), (_a = {}, _a[entry + camelName] = value, _a)));
    }, {});
    result[name] = value;
    return result;
};
exports.generatePrefixStyle = generatePrefixStyle;
//# sourceMappingURL=CssPrefixUtils.js.map