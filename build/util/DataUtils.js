"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLinearRegression = exports.findEntryInArray = exports.interpolateNumber = exports.hasDuplicate = exports.getAnyElementOfObject = exports.getPercentValue = exports.uniqueId = exports.isNumOrStr = exports.isNumber = exports.isPercent = exports.mathSign = void 0;
var lodash_1 = __importDefault(require("lodash"));
var mathSign = function (value) {
    if (value === 0) {
        return 0;
    }
    if (value > 0) {
        return 1;
    }
    return -1;
};
exports.mathSign = mathSign;
var isPercent = function (value) { return lodash_1.default.isString(value) && value.indexOf('%') === value.length - 1; };
exports.isPercent = isPercent;
var isNumber = function (value) { return lodash_1.default.isNumber(value) && !lodash_1.default.isNaN(value); };
exports.isNumber = isNumber;
var isNumOrStr = function (value) { return exports.isNumber(value) || lodash_1.default.isString(value); };
exports.isNumOrStr = isNumOrStr;
var idCounter = 0;
var uniqueId = function (prefix) {
    var id = ++idCounter;
    return "" + (prefix || '') + id;
};
exports.uniqueId = uniqueId;
var getPercentValue = function (percent, totalValue, defaultValue, validate) {
    if (defaultValue === void 0) { defaultValue = 0; }
    if (validate === void 0) { validate = false; }
    if (!exports.isNumber(percent) && !lodash_1.default.isString(percent)) {
        return defaultValue;
    }
    var value;
    if (exports.isPercent(percent)) {
        var index = percent.indexOf('%');
        value = (totalValue * parseFloat(percent.slice(0, index))) / 100;
    }
    else {
        value = +percent;
    }
    if (lodash_1.default.isNaN(value)) {
        value = defaultValue;
    }
    if (validate && value > totalValue) {
        value = totalValue;
    }
    return value;
};
exports.getPercentValue = getPercentValue;
var getAnyElementOfObject = function (obj) {
    if (!obj) {
        return null;
    }
    var keys = Object.keys(obj);
    if (keys && keys.length) {
        return obj[keys[0]];
    }
    return null;
};
exports.getAnyElementOfObject = getAnyElementOfObject;
var hasDuplicate = function (ary) {
    if (!lodash_1.default.isArray(ary)) {
        return false;
    }
    var len = ary.length;
    var cache = {};
    for (var i = 0; i < len; i++) {
        if (!cache[ary[i]]) {
            cache[ary[i]] = true;
        }
        else {
            return true;
        }
    }
    return false;
};
exports.hasDuplicate = hasDuplicate;
var interpolateNumber = function (numberA, numberB) {
    if (exports.isNumber(numberA) && exports.isNumber(numberB)) {
        return function (t) { return numberA + t * (numberB - numberA); };
    }
    return function () { return numberB; };
};
exports.interpolateNumber = interpolateNumber;
function findEntryInArray(ary, specifiedKey, specifiedValue) {
    if (!ary || !ary.length) {
        return null;
    }
    return ary.find(function (entry) {
        return entry &&
            (typeof specifiedKey === 'function' ? specifiedKey(entry) : lodash_1.default.get(entry, specifiedKey)) === specifiedValue;
    });
}
exports.findEntryInArray = findEntryInArray;
var getLinearRegression = function (data) {
    if (!data || !data.length) {
        return null;
    }
    var len = data.length;
    var xsum = 0;
    var ysum = 0;
    var xysum = 0;
    var xxsum = 0;
    var xmin = Infinity;
    var xmax = -Infinity;
    for (var i = 0; i < len; i++) {
        xsum += data[i].cx;
        ysum += data[i].cy;
        xysum += data[i].cx * data[i].cy;
        xxsum += data[i].cx * data[i].cx;
        xmin = Math.min(xmin, data[i].cx);
        xmax = Math.max(xmax, data[i].cx);
    }
    var a = len * xxsum !== xsum * xsum ? (len * xysum - xsum * ysum) / (len * xxsum - xsum * xsum) : 0;
    return {
        xmin: xmin,
        xmax: xmax,
        a: a,
        b: (ysum - a * xsum) / len,
    };
};
exports.getLinearRegression = getLinearRegression;
//# sourceMappingURL=DataUtils.js.map