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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLabeledScales = exports.ScaleHelper = exports.rectWithCoords = exports.rectWithPoints = exports.formatAxisMap = void 0;
var lodash_1 = __importDefault(require("lodash"));
var ChartUtils_1 = require("./ChartUtils");
var ReactUtils_1 = require("./ReactUtils");
var formatAxisMap = function (props, axisMap, offset, axisType, chartName) {
    var width = props.width, height = props.height, layout = props.layout, children = props.children;
    var ids = Object.keys(axisMap);
    var steps = {
        left: offset.left,
        leftMirror: offset.left,
        right: width - offset.right,
        rightMirror: width - offset.right,
        top: offset.top,
        topMirror: offset.top,
        bottom: height - offset.bottom,
        bottomMirror: height - offset.bottom,
    };
    var hasBar = !!ReactUtils_1.findChildByType(children, 'Bar');
    return ids.reduce(function (result, id) {
        var _a;
        var axis = axisMap[id];
        var orientation = axis.orientation, domain = axis.domain, _b = axis.padding, padding = _b === void 0 ? {} : _b, mirror = axis.mirror, reversed = axis.reversed;
        var offsetKey = "" + orientation + (mirror ? 'Mirror' : '');
        var range, x, y, needSpace;
        if (axisType === 'xAxis') {
            range = [offset.left + (padding.left || 0), offset.left + offset.width - (padding.right || 0)];
        }
        else if (axisType === 'yAxis') {
            range =
                layout === 'horizontal'
                    ? [offset.top + offset.height - (padding.bottom || 0), offset.top + (padding.top || 0)]
                    : [offset.top + (padding.top || 0), offset.top + offset.height - (padding.bottom || 0)];
        }
        else {
            (range = axis.range);
        }
        if (reversed) {
            range = [range[1], range[0]];
        }
        var _c = ChartUtils_1.parseScale(axis, chartName, hasBar), scale = _c.scale, realScaleType = _c.realScaleType;
        scale.domain(domain).range(range);
        ChartUtils_1.checkDomainOfScale(scale);
        var ticks = ChartUtils_1.getTicksOfScale(scale, __assign(__assign({}, axis), { realScaleType: realScaleType }));
        if (axisType === 'xAxis') {
            needSpace = (orientation === 'top' && !mirror) || (orientation === 'bottom' && mirror);
            x = offset.left;
            y = steps[offsetKey] - needSpace * axis.height;
        }
        else if (axisType === 'yAxis') {
            needSpace = (orientation === 'left' && !mirror) || (orientation === 'right' && mirror);
            x = steps[offsetKey] - needSpace * axis.width;
            y = offset.top;
        }
        var finalAxis = __assign(__assign(__assign({}, axis), ticks), { realScaleType: realScaleType,
            x: x,
            y: y,
            scale: scale, width: axisType === 'xAxis' ? offset.width : axis.width, height: axisType === 'yAxis' ? offset.height : axis.height });
        finalAxis.bandSize = ChartUtils_1.getBandSizeOfAxis(finalAxis, ticks);
        if (!axis.hide && axisType === 'xAxis') {
            steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.height;
        }
        else if (!axis.hide) {
            steps[offsetKey] += (needSpace ? -1 : 1) * finalAxis.width;
        }
        return __assign(__assign({}, result), (_a = {}, _a[id] = finalAxis, _a));
    }, {});
};
exports.formatAxisMap = formatAxisMap;
var rectWithPoints = function (_a, _b) {
    var x1 = _a.x, y1 = _a.y;
    var x2 = _b.x, y2 = _b.y;
    return ({
        x: Math.min(x1, x2),
        y: Math.min(y1, y2),
        width: Math.abs(x2 - x1),
        height: Math.abs(y2 - y1),
    });
};
exports.rectWithPoints = rectWithPoints;
var rectWithCoords = function (_a) {
    var x1 = _a.x1, y1 = _a.y1, x2 = _a.x2, y2 = _a.y2;
    return exports.rectWithPoints({ x: x1, y: y1 }, { x: x2, y: y2 });
};
exports.rectWithCoords = rectWithCoords;
var ScaleHelper = (function () {
    function ScaleHelper(scale) {
        this.scale = scale;
    }
    ScaleHelper.create = function (obj) {
        return new ScaleHelper(obj);
    };
    Object.defineProperty(ScaleHelper.prototype, "domain", {
        get: function () {
            return this.scale.domain;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScaleHelper.prototype, "range", {
        get: function () {
            return this.scale.range;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScaleHelper.prototype, "rangeMin", {
        get: function () {
            return this.range()[0];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScaleHelper.prototype, "rangeMax", {
        get: function () {
            return this.range()[1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ScaleHelper.prototype, "bandwidth", {
        get: function () {
            return this.scale.bandwidth;
        },
        enumerable: false,
        configurable: true
    });
    ScaleHelper.prototype.apply = function (value, _a) {
        var _b = _a === void 0 ? {} : _a, bandAware = _b.bandAware, position = _b.position;
        if (value === undefined) {
            return undefined;
        }
        if (position) {
            switch (position) {
                case 'start': {
                    return this.scale(value);
                }
                case 'middle': {
                    var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
                    return this.scale(value) + offset;
                }
                case 'end': {
                    var offset = this.bandwidth ? this.bandwidth() : 0;
                    return this.scale(value) + offset;
                }
                default: {
                    return this.scale(value);
                }
            }
        }
        if (bandAware) {
            var offset = this.bandwidth ? this.bandwidth() / 2 : 0;
            return this.scale(value) + offset;
        }
        return this.scale(value);
    };
    ScaleHelper.prototype.isInRange = function (value) {
        var range = this.range();
        var first = range[0];
        var last = range[range.length - 1];
        return first <= last ? value >= first && value <= last : value >= last && value <= first;
    };
    ScaleHelper.EPS = 1e-4;
    return ScaleHelper;
}());
exports.ScaleHelper = ScaleHelper;
var createLabeledScales = function (options) {
    var scales = Object.keys(options).reduce(function (res, key) {
        var _a;
        return (__assign(__assign({}, res), (_a = {}, _a[key] = ScaleHelper.create(options[key]), _a)));
    }, {});
    return __assign(__assign({}, scales), { apply: function (coord, _a) {
            var _b = _a === void 0 ? {} : _a, bandAware = _b.bandAware;
            return lodash_1.default.mapValues(coord, function (value, label) { return scales[label].apply(value, { bandAware: bandAware }); });
        },
        isInRange: function (coord) {
            return lodash_1.default.every(coord, function (value, label) { return scales[label].isInRange(value); });
        } });
};
exports.createLabeledScales = createLabeledScales;
//# sourceMappingURL=CartesianUtils.js.map