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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorBar = void 0;
var react_1 = __importDefault(require("react"));
var Layer_1 = require("../container/Layer");
var types_1 = require("../util/types");
function ErrorBar(props) {
    var offset = props.offset, layout = props.layout, width = props.width, dataKey = props.dataKey, data = props.data, dataPointFormatter = props.dataPointFormatter, xAxis = props.xAxis, yAxis = props.yAxis, others = __rest(props, ["offset", "layout", "width", "dataKey", "data", "dataPointFormatter", "xAxis", "yAxis"]);
    var svgProps = types_1.filterProps(others);
    var errorBars = data.map(function (entry, i) {
        var _a = dataPointFormatter(entry, dataKey), x = _a.x, y = _a.y, value = _a.value, errorVal = _a.errorVal;
        if (!errorVal) {
            return null;
        }
        var lineCoordinates = [];
        var lowBound, highBound;
        if (Array.isArray(errorVal)) {
            lowBound = errorVal[0], highBound = errorVal[1];
        }
        else {
            lowBound = highBound = errorVal;
        }
        if (layout === 'vertical') {
            var scale = xAxis.scale;
            var yMid = y + offset;
            var yMin = yMid + width;
            var yMax = yMid - width;
            var xMin = scale(value - lowBound);
            var xMax = scale(value + highBound);
            lineCoordinates.push({ x1: xMax, y1: yMin, x2: xMax, y2: yMax });
            lineCoordinates.push({ x1: xMin, y1: yMid, x2: xMax, y2: yMid });
            lineCoordinates.push({ x1: xMin, y1: yMin, x2: xMin, y2: yMax });
        }
        else if (layout === 'horizontal') {
            var scale = yAxis.scale;
            var xMid = x + offset;
            var xMin = xMid - width;
            var xMax = xMid + width;
            var yMin = scale(value - lowBound);
            var yMax = scale(value + highBound);
            lineCoordinates.push({ x1: xMin, y1: yMax, x2: xMax, y2: yMax });
            lineCoordinates.push({ x1: xMid, y1: yMin, x2: xMid, y2: yMax });
            lineCoordinates.push({ x1: xMin, y1: yMin, x2: xMax, y2: yMin });
        }
        return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-errorBar", key: "bar-" + i }, svgProps), lineCoordinates.map(function (coordinates, index) { return (react_1.default.createElement("line", __assign({}, coordinates, { key: "line-" + index }))); })));
    });
    return react_1.default.createElement(Layer_1.Layer, { className: "recharts-errorBars" }, errorBars);
}
exports.ErrorBar = ErrorBar;
ErrorBar.defaultProps = {
    stroke: 'black',
    strokeWidth: 1.5,
    width: 5,
    offset: 0,
    layout: 'horizontal',
};
ErrorBar.displayName = 'ErrorBar';
//# sourceMappingURL=ErrorBar.js.map