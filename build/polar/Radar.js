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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radar = void 0;
var react_1 = __importStar(require("react"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var DataUtils_1 = require("../util/DataUtils");
var Global_1 = require("../util/Global");
var PolarUtils_1 = require("../util/PolarUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var Polygon_1 = require("../shape/Polygon");
var Dot_1 = require("../shape/Dot");
var Layer_1 = require("../container/Layer");
var LabelList_1 = require("../component/LabelList");
var types_1 = require("../util/types");
var Radar = (function (_super) {
    __extends(Radar, _super);
    function Radar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isAnimationFinished: false };
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
        _this.handleMouseEnter = function (e) {
            var onMouseEnter = _this.props.onMouseEnter;
            if (onMouseEnter) {
                onMouseEnter(_this.props, e);
            }
        };
        _this.handleMouseLeave = function (e) {
            var onMouseLeave = _this.props.onMouseLeave;
            if (onMouseLeave) {
                onMouseLeave(_this.props, e);
            }
        };
        return _this;
    }
    Radar.getDerivedStateFromProps = function (nextProps, prevState) {
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
    Radar.renderDotItem = function (option, props) {
        var dotItem;
        if (react_1.default.isValidElement(option)) {
            dotItem = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            dotItem = option(props);
        }
        else {
            dotItem = react_1.default.createElement(Dot_1.Dot, __assign({}, props, { className: "recharts-radar-dot" }));
        }
        return dotItem;
    };
    Radar.prototype.renderDots = function (points) {
        var _a = this.props, dot = _a.dot, dataKey = _a.dataKey;
        var baseProps = types_1.filterProps(this.props);
        var customDotProps = types_1.filterProps(dot);
        var dots = points.map(function (entry, i) {
            var dotProps = __assign(__assign(__assign({ key: "dot-" + i, r: 3 }, baseProps), customDotProps), { dataKey: dataKey, cx: entry.x, cy: entry.y, index: i, payload: entry });
            return Radar.renderDotItem(dot, dotProps);
        });
        return react_1.default.createElement(Layer_1.Layer, { className: "recharts-radar-dots" }, dots);
    };
    Radar.prototype.renderPolygonStatically = function (points) {
        var _a = this.props, shape = _a.shape, dot = _a.dot, isRange = _a.isRange, baseLinePoints = _a.baseLinePoints, connectNulls = _a.connectNulls;
        var radar;
        if (react_1.default.isValidElement(shape)) {
            radar = react_1.default.cloneElement(shape, __assign(__assign({}, this.props), { points: points }));
        }
        else if (lodash_1.default.isFunction(shape)) {
            radar = shape(__assign(__assign({}, this.props), { points: points }));
        }
        else {
            radar = (react_1.default.createElement(Polygon_1.Polygon, __assign({}, types_1.filterProps(this.props, true), { onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, points: points, baseLinePoints: isRange ? baseLinePoints : null, connectNulls: connectNulls })));
        }
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-radar-polygon" },
            radar,
            dot ? this.renderDots(points) : null));
    };
    Radar.prototype.renderPolygonWithAnimation = function () {
        var _this = this;
        var _a = this.props, points = _a.points, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId;
        var prevPoints = this.state.prevPoints;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "radar-" + animationId, onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function (_a) {
            var t = _a.t;
            var prevPointsDiffFactor = prevPoints && prevPoints.length / points.length;
            var stepData = points.map(function (entry, index) {
                var prev = prevPoints && prevPoints[Math.floor(index * prevPointsDiffFactor)];
                if (prev) {
                    var interpolatorX_1 = DataUtils_1.interpolateNumber(prev.x, entry.x);
                    var interpolatorY_1 = DataUtils_1.interpolateNumber(prev.y, entry.y);
                    return __assign(__assign({}, entry), { x: interpolatorX_1(t), y: interpolatorY_1(t) });
                }
                var interpolatorX = DataUtils_1.interpolateNumber(entry.cx, entry.x);
                var interpolatorY = DataUtils_1.interpolateNumber(entry.cy, entry.y);
                return __assign(__assign({}, entry), { x: interpolatorX(t), y: interpolatorY(t) });
            });
            return _this.renderPolygonStatically(stepData);
        }));
    };
    Radar.prototype.renderPolygon = function () {
        var _a = this.props, points = _a.points, isAnimationActive = _a.isAnimationActive, isRange = _a.isRange;
        var prevPoints = this.state.prevPoints;
        if (isAnimationActive && points && points.length && !isRange && (!prevPoints || !lodash_1.default.isEqual(prevPoints, points))) {
            return this.renderPolygonWithAnimation();
        }
        return this.renderPolygonStatically(points);
    };
    Radar.prototype.render = function () {
        var _a = this.props, hide = _a.hide, className = _a.className, points = _a.points, isAnimationActive = _a.isAnimationActive;
        if (hide || !points || !points.length) {
            return null;
        }
        var isAnimationFinished = this.state.isAnimationFinished;
        var layerClass = classnames_1.default('recharts-radar', className);
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass },
            this.renderPolygon(),
            (!isAnimationActive || isAnimationFinished) && LabelList_1.LabelList.renderCallByParent(this.props, points)));
    };
    Radar.displayName = 'Radar';
    Radar.defaultProps = {
        angleAxisId: 0,
        radiusAxisId: 0,
        hide: false,
        activeDot: true,
        dot: false,
        legendType: 'rect',
        isAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
    };
    Radar.getComposedData = function (_a) {
        var radiusAxis = _a.radiusAxis, angleAxis = _a.angleAxis, displayedData = _a.displayedData, dataKey = _a.dataKey, bandSize = _a.bandSize;
        var cx = angleAxis.cx, cy = angleAxis.cy;
        var isRange = false;
        var points = [];
        displayedData.forEach(function (entry, i) {
            var name = ChartUtils_1.getValueByDataKey(entry, angleAxis.dataKey, i);
            var value = ChartUtils_1.getValueByDataKey(entry, dataKey);
            var angle = angleAxis.scale(name) + (bandSize || 0);
            var pointValue = lodash_1.default.isArray(value) ? lodash_1.default.last(value) : value;
            var radius = lodash_1.default.isNil(pointValue) ? undefined : radiusAxis.scale(pointValue);
            if (lodash_1.default.isArray(value) && value.length >= 2) {
                isRange = true;
            }
            points.push(__assign(__assign({}, PolarUtils_1.polarToCartesian(cx, cy, radius, angle)), { name: name,
                value: value,
                cx: cx,
                cy: cy,
                radius: radius,
                angle: angle, payload: entry }));
        });
        var baseLinePoints = [];
        if (isRange) {
            points.forEach(function (point) {
                if (lodash_1.default.isArray(point.value)) {
                    var baseValue = lodash_1.default.first(point.value);
                    var radius = lodash_1.default.isNil(baseValue) ? undefined : radiusAxis.scale(baseValue);
                    baseLinePoints.push(__assign(__assign(__assign({}, point), { radius: radius }), PolarUtils_1.polarToCartesian(cx, cy, radius, point.angle)));
                }
                else {
                    baseLinePoints.push(point);
                }
            });
        }
        return { points: points, isRange: isRange, baseLinePoints: baseLinePoints };
    };
    return Radar;
}(react_1.PureComponent));
exports.Radar = Radar;
//# sourceMappingURL=Radar.js.map