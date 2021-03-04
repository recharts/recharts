"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
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
exports.Area = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var lodash_1 = __importDefault(require("lodash"));
var Curve_1 = require("../shape/Curve");
var Dot_1 = require("../shape/Dot");
var Layer_1 = require("../container/Layer");
var LabelList_1 = require("../component/LabelList");
var Global_1 = require("../util/Global");
var DataUtils_1 = require("../util/DataUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var types_1 = require("../util/types");
var Area = (function (_super) {
    __extends(Area, _super);
    function Area() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isAnimationFinished: true,
        };
        _this.id = DataUtils_1.uniqueId('recharts-area-');
        _this.handleAnimationEnd = function () {
            var onAnimationEnd = _this.props.onAnimationEnd;
            _this.setState({ isAnimationFinished: true });
            if (lodash_1.default.isFunction(onAnimationEnd)) {
                onAnimationEnd();
            }
        };
        _this.handleAnimationStart = function () {
            var onAnimationStart = _this.props.onAnimationStart;
            _this.setState({ isAnimationFinished: false });
            if (lodash_1.default.isFunction(onAnimationStart)) {
                onAnimationStart();
            }
        };
        return _this;
    }
    Area.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.animationId !== prevState.prevAnimationId) {
            return {
                prevAnimationId: nextProps.animationId,
                curPoints: nextProps.points,
                curBaseLine: nextProps.baseLine,
                prevPoints: prevState.curPoints,
                prevBaseLine: prevState.curBaseLine,
            };
        }
        if (nextProps.points !== prevState.curPoints || nextProps.baseLine !== prevState.curBaseLine) {
            return {
                curPoints: nextProps.points,
                curBaseLine: nextProps.baseLine,
            };
        }
        return null;
    };
    Area.prototype.renderDots = function (needClip, clipPathId) {
        var isAnimationActive = this.props.isAnimationActive;
        var isAnimationFinished = this.state.isAnimationFinished;
        if (isAnimationActive && !isAnimationFinished) {
            return null;
        }
        var _a = this.props, dot = _a.dot, points = _a.points, dataKey = _a.dataKey;
        var areaProps = types_1.filterProps(this.props);
        var customDotProps = types_1.filterProps(dot, true);
        var dots = points.map(function (entry, i) {
            var dotProps = __assign(__assign(__assign({ key: "dot-" + i, r: 3 }, areaProps), customDotProps), { dataKey: dataKey, cx: entry.x, cy: entry.y, index: i, value: entry.value, payload: entry.payload });
            return Area.renderDotItem(dot, dotProps);
        });
        var dotsProps = {
            clipPath: needClip ? "url(#clipPath-" + clipPathId + ")" : null,
        };
        return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-area-dots" }, dotsProps), dots));
    };
    Area.prototype.renderHorizontalRect = function (alpha) {
        var _a = this.props, baseLine = _a.baseLine, points = _a.points, strokeWidth = _a.strokeWidth;
        var startX = points[0].x;
        var endX = points[points.length - 1].x;
        var width = alpha * Math.abs(startX - endX);
        var maxY = lodash_1.default.max(points.map(function (entry) { return entry.y || 0; }));
        if (DataUtils_1.isNumber(baseLine) && typeof baseLine === 'number') {
            maxY = Math.max(baseLine, maxY);
        }
        else if (baseLine && lodash_1.default.isArray(baseLine) && baseLine.length) {
            maxY = Math.max(lodash_1.default.max(baseLine.map(function (entry) { return entry.y || 0; })), maxY);
        }
        if (DataUtils_1.isNumber(maxY)) {
            return (react_1.default.createElement("rect", { x: startX < endX ? startX : startX - width, y: 0, width: width, height: Math.floor(maxY + (strokeWidth ? parseInt("" + strokeWidth, 10) : 1)) }));
        }
        return null;
    };
    Area.prototype.renderVerticalRect = function (alpha) {
        var _a = this.props, baseLine = _a.baseLine, points = _a.points, strokeWidth = _a.strokeWidth;
        var startY = points[0].y;
        var endY = points[points.length - 1].y;
        var height = alpha * Math.abs(startY - endY);
        var maxX = lodash_1.default.max(points.map(function (entry) { return entry.x || 0; }));
        if (DataUtils_1.isNumber(baseLine) && typeof baseLine === 'number') {
            maxX = Math.max(baseLine, maxX);
        }
        else if (baseLine && lodash_1.default.isArray(baseLine) && baseLine.length) {
            maxX = Math.max(lodash_1.default.max(baseLine.map(function (entry) { return entry.x || 0; })), maxX);
        }
        if (DataUtils_1.isNumber(maxX)) {
            return (react_1.default.createElement("rect", { x: 0, y: startY < endY ? startY : startY - height, width: maxX + (strokeWidth ? parseInt("" + strokeWidth, 10) : 1), height: Math.floor(height) }));
        }
        return null;
    };
    Area.prototype.renderClipRect = function (alpha) {
        var layout = this.props.layout;
        if (layout === 'vertical') {
            return this.renderVerticalRect(alpha);
        }
        return this.renderHorizontalRect(alpha);
    };
    Area.prototype.renderAreaStatically = function (points, baseLine, needClip, clipPathId) {
        var _a = this.props, layout = _a.layout, type = _a.type, stroke = _a.stroke, connectNulls = _a.connectNulls, isRange = _a.isRange, ref = _a.ref, others = __rest(_a, ["layout", "type", "stroke", "connectNulls", "isRange", "ref"]);
        return (react_1.default.createElement(Layer_1.Layer, { clipPath: needClip ? "url(#clipPath-" + clipPathId + ")" : null },
            react_1.default.createElement(Curve_1.Curve, __assign({}, types_1.filterProps(others, true), { points: points, connectNulls: connectNulls, type: type, baseLine: baseLine, layout: layout, stroke: "none", className: "recharts-area-area" })),
            stroke !== 'none' && (react_1.default.createElement(Curve_1.Curve, __assign({}, types_1.filterProps(this.props), { className: "recharts-area-curve", layout: layout, type: type, connectNulls: connectNulls, fill: "none", points: points }))),
            stroke !== 'none' && isRange && (react_1.default.createElement(Curve_1.Curve, __assign({}, types_1.filterProps(this.props), { className: "recharts-area-curve", layout: layout, type: type, connectNulls: connectNulls, fill: "none", points: baseLine })))));
    };
    Area.prototype.renderAreaWithAnimation = function (needClip, clipPathId) {
        var _this = this;
        var _a = this.props, points = _a.points, baseLine = _a.baseLine, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId;
        var _b = this.state, prevPoints = _b.prevPoints, prevBaseLine = _b.prevBaseLine;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "area-" + animationId, onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function (_a) {
            var t = _a.t;
            if (prevPoints) {
                var prevPointsDiffFactor_1 = prevPoints.length / points.length;
                var stepPoints = points.map(function (entry, index) {
                    var prevPointIndex = Math.floor(index * prevPointsDiffFactor_1);
                    if (prevPoints[prevPointIndex]) {
                        var prev = prevPoints[prevPointIndex];
                        var interpolatorX = DataUtils_1.interpolateNumber(prev.x, entry.x);
                        var interpolatorY = DataUtils_1.interpolateNumber(prev.y, entry.y);
                        return __assign(__assign({}, entry), { x: interpolatorX(t), y: interpolatorY(t) });
                    }
                    return entry;
                });
                var stepBaseLine = void 0;
                if (DataUtils_1.isNumber(baseLine) && typeof baseLine === 'number') {
                    var interpolator = DataUtils_1.interpolateNumber(prevBaseLine, baseLine);
                    stepBaseLine = interpolator(t);
                }
                else if (lodash_1.default.isNil(baseLine) || lodash_1.default.isNaN(baseLine)) {
                    var interpolator = DataUtils_1.interpolateNumber(prevBaseLine, 0);
                    stepBaseLine = interpolator(t);
                }
                else {
                    stepBaseLine = baseLine.map(function (entry, index) {
                        var prevPointIndex = Math.floor(index * prevPointsDiffFactor_1);
                        if (prevBaseLine[prevPointIndex]) {
                            var prev = prevBaseLine[prevPointIndex];
                            var interpolatorX = DataUtils_1.interpolateNumber(prev.x, entry.x);
                            var interpolatorY = DataUtils_1.interpolateNumber(prev.y, entry.y);
                            return __assign(__assign({}, entry), { x: interpolatorX(t), y: interpolatorY(t) });
                        }
                        return entry;
                    });
                }
                return _this.renderAreaStatically(stepPoints, stepBaseLine, needClip, clipPathId);
            }
            return (react_1.default.createElement(Layer_1.Layer, null,
                react_1.default.createElement("defs", null,
                    react_1.default.createElement("clipPath", { id: "animationClipPath-" + clipPathId }, _this.renderClipRect(t))),
                react_1.default.createElement(Layer_1.Layer, { clipPath: "url(#animationClipPath-" + clipPathId + ")" }, _this.renderAreaStatically(points, baseLine, needClip, clipPathId))));
        }));
    };
    Area.prototype.renderArea = function (needClip, clipPathId) {
        var _a = this.props, points = _a.points, baseLine = _a.baseLine, isAnimationActive = _a.isAnimationActive;
        var _b = this.state, prevPoints = _b.prevPoints, prevBaseLine = _b.prevBaseLine, totalLength = _b.totalLength;
        if (isAnimationActive &&
            points &&
            points.length &&
            ((!prevPoints && totalLength > 0) || !lodash_1.default.isEqual(prevPoints, points) || !lodash_1.default.isEqual(prevBaseLine, baseLine))) {
            return this.renderAreaWithAnimation(needClip, clipPathId);
        }
        return this.renderAreaStatically(points, baseLine, needClip, clipPathId);
    };
    Area.prototype.render = function () {
        var _a = this.props, hide = _a.hide, dot = _a.dot, points = _a.points, className = _a.className, top = _a.top, left = _a.left, xAxis = _a.xAxis, yAxis = _a.yAxis, width = _a.width, height = _a.height, isAnimationActive = _a.isAnimationActive, id = _a.id;
        if (hide || !points || !points.length) {
            return null;
        }
        var isAnimationFinished = this.state.isAnimationFinished;
        var hasSinglePoint = points.length === 1;
        var layerClass = classnames_1.default('recharts-area', className);
        var needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);
        var clipPathId = lodash_1.default.isNil(id) ? this.id : id;
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass },
            needClip ? (react_1.default.createElement("defs", null,
                react_1.default.createElement("clipPath", { id: "clipPath-" + clipPathId },
                    react_1.default.createElement("rect", { x: left, y: top, width: width, height: Math.floor(height) })))) : null,
            !hasSinglePoint ? this.renderArea(needClip, clipPathId) : null,
            (dot || hasSinglePoint) && this.renderDots(needClip, clipPathId),
            (!isAnimationActive || isAnimationFinished) && LabelList_1.LabelList.renderCallByParent(this.props, points)));
    };
    Area.displayName = 'Area';
    Area.defaultProps = {
        stroke: '#3182bd',
        fill: '#3182bd',
        fillOpacity: 0.6,
        xAxisId: 0,
        yAxisId: 0,
        legendType: 'line',
        connectNulls: false,
        points: [],
        dot: false,
        activeDot: true,
        hide: false,
        isAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
    };
    Area.getBaseValue = function (props, xAxis, yAxis) {
        var layout = props.layout, baseValue = props.baseValue;
        if (DataUtils_1.isNumber(baseValue) && typeof baseValue === 'number') {
            return baseValue;
        }
        var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
        var domain = numericAxis.scale.domain();
        if (numericAxis.type === 'number') {
            var max = Math.max(domain[0], domain[1]);
            var min = Math.min(domain[0], domain[1]);
            if (baseValue === 'dataMin') {
                return min;
            }
            if (baseValue === 'dataMax') {
                return max;
            }
            return max < 0 ? max : Math.max(Math.min(domain[0], domain[1]), 0);
        }
        if (baseValue === 'dataMin') {
            return domain[0];
        }
        if (baseValue === 'dataMax') {
            return domain[1];
        }
        return domain[0];
    };
    Area.getComposedData = function (_a) {
        var props = _a.props, xAxis = _a.xAxis, yAxis = _a.yAxis, xAxisTicks = _a.xAxisTicks, yAxisTicks = _a.yAxisTicks, bandSize = _a.bandSize, dataKey = _a.dataKey, stackedData = _a.stackedData, dataStartIndex = _a.dataStartIndex, displayedData = _a.displayedData, offset = _a.offset;
        var layout = props.layout;
        var hasStack = stackedData && stackedData.length;
        var baseValue = Area.getBaseValue(props, xAxis, yAxis);
        var isRange = false;
        var points = displayedData.map(function (entry, index) {
            var originalValue = ChartUtils_1.getValueByDataKey(entry, dataKey);
            var value;
            if (hasStack) {
                value = stackedData[dataStartIndex + index];
            }
            else {
                value = originalValue;
                if (!lodash_1.default.isArray(value)) {
                    value = [baseValue, value];
                }
                else {
                    isRange = true;
                }
            }
            var isBreakPoint = lodash_1.default.isNil(value[1]) || (hasStack && lodash_1.default.isNil(originalValue));
            if (layout === 'horizontal') {
                return {
                    x: ChartUtils_1.getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize: bandSize, entry: entry, index: index }),
                    y: isBreakPoint ? null : yAxis.scale(value[1]),
                    value: value,
                    payload: entry,
                };
            }
            return {
                x: isBreakPoint ? null : xAxis.scale(value[1]),
                y: ChartUtils_1.getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize: bandSize, entry: entry, index: index }),
                value: value,
                payload: entry,
            };
        });
        var baseLine;
        if (hasStack || isRange) {
            baseLine = points.map(function (entry) {
                if (layout === 'horizontal') {
                    return {
                        x: entry.x,
                        y: !lodash_1.default.isNil(lodash_1.default.get(entry, 'value[0]')) && !lodash_1.default.isNil(lodash_1.default.get(entry, 'y'))
                            ? yAxis.scale(lodash_1.default.get(entry, 'value[0]'))
                            : null,
                    };
                }
                return {
                    x: !lodash_1.default.isNil(lodash_1.default.get(entry, 'value[0]')) ? xAxis.scale(lodash_1.default.get(entry, 'value[0]')) : null,
                    y: entry.y,
                };
            });
        }
        else if (layout === 'horizontal') {
            baseLine = yAxis.scale(baseValue);
        }
        else {
            baseLine = xAxis.scale(baseValue);
        }
        return __assign({ points: points, baseLine: baseLine, layout: layout, isRange: isRange }, offset);
    };
    Area.renderDotItem = function (option, props) {
        var dotItem;
        if (react_1.default.isValidElement(option)) {
            dotItem = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            dotItem = option(props);
        }
        else {
            dotItem = react_1.default.createElement(Dot_1.Dot, __assign({}, props, { className: "recharts-area-dot" }));
        }
        return dotItem;
    };
    return Area;
}(react_1.PureComponent));
exports.Area = Area;
//# sourceMappingURL=Area.js.map