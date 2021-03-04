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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
var react_1 = __importStar(require("react"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var Curve_1 = require("../shape/Curve");
var Dot_1 = require("../shape/Dot");
var Layer_1 = require("../container/Layer");
var LabelList_1 = require("../component/LabelList");
var ErrorBar_1 = require("./ErrorBar");
var DataUtils_1 = require("../util/DataUtils");
var ReactUtils_1 = require("../util/ReactUtils");
var Global_1 = require("../util/Global");
var ChartUtils_1 = require("../util/ChartUtils");
var types_1 = require("../util/types");
var Line = (function (_super) {
    __extends(Line, _super);
    function Line() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isAnimationFinished: true,
            totalLength: 0,
        };
        _this.getStrokeDasharray = function (length, totalLength, lines) {
            var lineLength = lines.reduce(function (pre, next) { return pre + next; });
            var count = Math.floor(length / lineLength);
            var remainLength = length % lineLength;
            var restLength = totalLength - length;
            var remainLines = [];
            for (var i = 0, sum = 0;; sum += lines[i], ++i) {
                if (sum + lines[i] > remainLength) {
                    remainLines = __spreadArray(__spreadArray([], lines.slice(0, i)), [remainLength - sum]);
                    break;
                }
            }
            var emptyLines = remainLines.length % 2 === 0 ? [0, restLength] : [restLength];
            return __spreadArray(__spreadArray(__spreadArray([], Line.repeat(lines, count)), remainLines), emptyLines).map(function (line) { return line + "px"; }).join(', ');
        };
        _this.id = DataUtils_1.uniqueId('recharts-line-');
        _this.pathRef = function (node) {
            _this.mainCurve = node;
        };
        _this.handleAnimationEnd = function () {
            _this.setState({ isAnimationFinished: true });
            if (_this.props.onAnimationEnd) {
                _this.props.onAnimationEnd();
            }
        };
        _this.handleAnimationStart = function () {
            _this.setState({ isAnimationFinished: false });
            if (_this.props.onAnimationStart) {
                _this.props.onAnimationStart();
            }
        };
        return _this;
    }
    Line.prototype.componentDidMount = function () {
        if (!this.props.isAnimationActive) {
            return;
        }
        var totalLength = this.getTotalLength();
        this.setState({ totalLength: totalLength });
    };
    Line.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.animationId !== prevState.prevAnimationId) {
            return {
                prevAnimationId: nextProps.animationId,
                curPoints: nextProps.points,
                prevPoints: prevState.curPoints,
            };
        }
        if (nextProps.points !== prevState.curPoints) {
            return {
                curPoints: nextProps.points,
            };
        }
        return null;
    };
    Line.prototype.getTotalLength = function () {
        var curveDom = this.mainCurve;
        try {
            return (curveDom && curveDom.getTotalLength && curveDom.getTotalLength()) || 0;
        }
        catch (err) {
            return 0;
        }
    };
    Line.repeat = function (lines, count) {
        var linesUnit = lines.length % 2 !== 0 ? __spreadArray(__spreadArray([], lines), [0]) : lines;
        var result = [];
        for (var i = 0; i < count; ++i) {
            result = __spreadArray(__spreadArray([], result), linesUnit);
        }
        return result;
    };
    Line.prototype.renderErrorBar = function () {
        if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
            return null;
        }
        var _a = this.props, points = _a.points, xAxis = _a.xAxis, yAxis = _a.yAxis, layout = _a.layout, children = _a.children;
        var errorBarItems = ReactUtils_1.findAllByType(children, ErrorBar_1.ErrorBar.displayName);
        if (!errorBarItems) {
            return null;
        }
        function dataPointFormatter(dataPoint, dataKey) {
            return {
                x: dataPoint.x,
                y: dataPoint.y,
                value: dataPoint.value,
                errorVal: ChartUtils_1.getValueByDataKey(dataPoint.payload, dataKey),
            };
        }
        return errorBarItems.map(function (item, i) {
            return react_1.default.cloneElement(item, {
                key: "bar-" + i,
                data: points,
                xAxis: xAxis,
                yAxis: yAxis,
                layout: layout,
                dataPointFormatter: dataPointFormatter,
            });
        });
    };
    Line.renderDotItem = function (option, props) {
        var dotItem;
        if (react_1.default.isValidElement(option)) {
            dotItem = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            dotItem = option(props);
        }
        else {
            var className = classnames_1.default('recharts-line-dot', option ? option.className : '');
            dotItem = react_1.default.createElement(Dot_1.Dot, __assign({}, props, { className: className }));
        }
        return dotItem;
    };
    Line.prototype.renderDots = function (needClip, clipPathId) {
        var isAnimationActive = this.props.isAnimationActive;
        if (isAnimationActive && !this.state.isAnimationFinished) {
            return null;
        }
        var _a = this.props, dot = _a.dot, points = _a.points, dataKey = _a.dataKey;
        var lineProps = types_1.filterProps(this.props);
        var customDotProps = types_1.filterProps(dot, true);
        var dots = points.map(function (entry, i) {
            var dotProps = __assign(__assign(__assign({ key: "dot-" + i, r: 3 }, lineProps), customDotProps), { value: entry.value, dataKey: dataKey, cx: entry.x, cy: entry.y, index: i, payload: entry.payload });
            return Line.renderDotItem(dot, dotProps);
        });
        var dotsProps = {
            clipPath: needClip ? "url(#clipPath-" + clipPathId + ")" : null,
        };
        return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-line-dots", key: "dots" }, dotsProps), dots));
    };
    Line.prototype.renderCurveStatically = function (points, needClip, clipPathId, props) {
        var _a = this.props, type = _a.type, layout = _a.layout, connectNulls = _a.connectNulls, ref = _a.ref, others = __rest(_a, ["type", "layout", "connectNulls", "ref"]);
        var curveProps = __assign(__assign(__assign(__assign({}, types_1.filterProps(others, true)), { fill: 'none', className: 'recharts-line-curve', clipPath: needClip ? "url(#clipPath-" + clipPathId + ")" : null, points: points }), props), { type: type,
            layout: layout,
            connectNulls: connectNulls });
        return react_1.default.createElement(Curve_1.Curve, __assign({}, curveProps, { pathRef: this.pathRef }));
    };
    Line.prototype.renderCurveWithAnimation = function (needClip, clipPathId) {
        var _this = this;
        var _a = this.props, points = _a.points, strokeDasharray = _a.strokeDasharray, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId, animateNewValues = _a.animateNewValues, width = _a.width, height = _a.height;
        var _b = this.state, prevPoints = _b.prevPoints, totalLength = _b.totalLength;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "line-" + animationId, onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function (_a) {
            var t = _a.t;
            if (prevPoints) {
                var prevPointsDiffFactor_1 = prevPoints.length / points.length;
                var stepData = points.map(function (entry, index) {
                    var prevPointIndex = Math.floor(index * prevPointsDiffFactor_1);
                    if (prevPoints[prevPointIndex]) {
                        var prev = prevPoints[prevPointIndex];
                        var interpolatorX = DataUtils_1.interpolateNumber(prev.x, entry.x);
                        var interpolatorY = DataUtils_1.interpolateNumber(prev.y, entry.y);
                        return __assign(__assign({}, entry), { x: interpolatorX(t), y: interpolatorY(t) });
                    }
                    if (animateNewValues) {
                        var interpolatorX = DataUtils_1.interpolateNumber(width * 2, entry.x);
                        var interpolatorY = DataUtils_1.interpolateNumber(height / 2, entry.y);
                        return __assign(__assign({}, entry), { x: interpolatorX(t), y: interpolatorY(t) });
                    }
                    return __assign(__assign({}, entry), { x: entry.x, y: entry.y });
                });
                return _this.renderCurveStatically(stepData, needClip, clipPathId);
            }
            var interpolator = DataUtils_1.interpolateNumber(0, totalLength);
            var curLength = interpolator(t);
            var currentStrokeDasharray;
            if (strokeDasharray) {
                var lines = ("" + strokeDasharray).split(/[,\s]+/gim).map(function (num) { return parseFloat(num); });
                currentStrokeDasharray = _this.getStrokeDasharray(curLength, totalLength, lines);
            }
            else {
                currentStrokeDasharray = curLength + "px " + (totalLength - curLength) + "px";
            }
            return _this.renderCurveStatically(points, needClip, clipPathId, {
                strokeDasharray: currentStrokeDasharray,
            });
        }));
    };
    Line.prototype.renderCurve = function (needClip, clipPathId) {
        var _a = this.props, points = _a.points, isAnimationActive = _a.isAnimationActive;
        var _b = this.state, prevPoints = _b.prevPoints, totalLength = _b.totalLength;
        if (isAnimationActive &&
            points &&
            points.length &&
            ((!prevPoints && totalLength > 0) || !lodash_1.default.isEqual(prevPoints, points))) {
            return this.renderCurveWithAnimation(needClip, clipPathId);
        }
        return this.renderCurveStatically(points, needClip, clipPathId);
    };
    Line.prototype.render = function () {
        var _a = this.props, hide = _a.hide, dot = _a.dot, points = _a.points, className = _a.className, xAxis = _a.xAxis, yAxis = _a.yAxis, top = _a.top, left = _a.left, width = _a.width, height = _a.height, isAnimationActive = _a.isAnimationActive, id = _a.id;
        if (hide || !points || !points.length) {
            return null;
        }
        var isAnimationFinished = this.state.isAnimationFinished;
        var hasSinglePoint = points.length === 1;
        var layerClass = classnames_1.default('recharts-line', className);
        var needClipX = xAxis && xAxis.allowDataOverflow;
        var needClipY = yAxis && yAxis.allowDataOverflow;
        var needClip = needClipX || needClipY;
        var clipPathId = lodash_1.default.isNil(id) ? this.id : id;
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass },
            needClip ? (react_1.default.createElement("defs", null,
                react_1.default.createElement("clipPath", { id: "clipPath-" + clipPathId },
                    react_1.default.createElement("rect", { x: left, y: top, width: needClipX ? width : width * 2, height: needClipY ? height : height * 2 })))) : null,
            !hasSinglePoint && this.renderCurve(needClip, clipPathId),
            this.renderErrorBar(),
            (hasSinglePoint || dot) && this.renderDots(needClip, clipPathId),
            (!isAnimationActive || isAnimationFinished) && LabelList_1.LabelList.renderCallByParent(this.props, points)));
    };
    Line.displayName = 'Line';
    Line.defaultProps = {
        xAxisId: 0,
        yAxisId: 0,
        connectNulls: false,
        activeDot: true,
        dot: true,
        legendType: 'line',
        stroke: '#3182bd',
        strokeWidth: 1,
        fill: '#fff',
        points: [],
        isAnimationActive: !Global_1.Global.isSsr,
        animateNewValues: true,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
        hide: false,
    };
    Line.getComposedData = function (_a) {
        var props = _a.props, xAxis = _a.xAxis, yAxis = _a.yAxis, xAxisTicks = _a.xAxisTicks, yAxisTicks = _a.yAxisTicks, dataKey = _a.dataKey, bandSize = _a.bandSize, displayedData = _a.displayedData, offset = _a.offset;
        var layout = props.layout;
        var points = displayedData.map(function (entry, index) {
            var value = ChartUtils_1.getValueByDataKey(entry, dataKey);
            if (layout === 'horizontal') {
                return {
                    x: ChartUtils_1.getCateCoordinateOfLine({ axis: xAxis, ticks: xAxisTicks, bandSize: bandSize, entry: entry, index: index }),
                    y: lodash_1.default.isNil(value) ? null : yAxis.scale(value),
                    value: value,
                    payload: entry,
                };
            }
            return {
                x: lodash_1.default.isNil(value) ? null : xAxis.scale(value),
                y: ChartUtils_1.getCateCoordinateOfLine({ axis: yAxis, ticks: yAxisTicks, bandSize: bandSize, entry: entry, index: index }),
                value: value,
                payload: entry,
            };
        });
        return __assign({ points: points, layout: layout }, offset);
    };
    return Line;
}(react_1.PureComponent));
exports.Line = Line;
//# sourceMappingURL=Line.js.map