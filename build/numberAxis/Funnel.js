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
exports.Funnel = void 0;
var react_1 = __importStar(require("react"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var Layer_1 = require("../container/Layer");
var Trapezoid_1 = require("../shape/Trapezoid");
var LabelList_1 = require("../component/LabelList");
var Cell_1 = require("../component/Cell");
var ReactUtils_1 = require("../util/ReactUtils");
var Global_1 = require("../util/Global");
var DataUtils_1 = require("../util/DataUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var types_1 = require("../util/types");
var Funnel = (function (_super) {
    __extends(Funnel, _super);
    function Funnel() {
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
        return _this;
    }
    Funnel.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.animationId !== prevState.prevAnimationId) {
            return {
                prevAnimationId: nextProps.animationId,
                curTrapezoids: nextProps.trapezoids,
                prevTrapezoids: prevState.curTrapezoids,
            };
        }
        if (nextProps.trapezoids !== prevState.curTrapezoids) {
            return {
                curTrapezoids: nextProps.trapezoids,
            };
        }
        return null;
    };
    Funnel.prototype.isActiveIndex = function (i) {
        var activeIndex = this.props.activeIndex;
        if (Array.isArray(activeIndex)) {
            return activeIndex.indexOf(i) !== -1;
        }
        return i === activeIndex;
    };
    Funnel.renderTrapezoidItem = function (option, props) {
        if (react_1.default.isValidElement(option)) {
            return react_1.default.cloneElement(option, props);
        }
        if (lodash_1.default.isFunction(option)) {
            return option(props);
        }
        if (lodash_1.default.isPlainObject(option)) {
            return react_1.default.createElement(Trapezoid_1.Trapezoid, __assign({}, props, option));
        }
        return react_1.default.createElement(Trapezoid_1.Trapezoid, __assign({}, props));
    };
    Funnel.prototype.renderTrapezoidsStatically = function (trapezoids) {
        var _this = this;
        var activeShape = this.props.activeShape;
        return trapezoids.map(function (entry, i) {
            var trapezoidOptions = _this.isActiveIndex(i) ? activeShape : null;
            var trapezoidProps = __assign(__assign({}, entry), { stroke: entry.stroke });
            return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-funnel-trapezoid" }, types_1.adaptEventsOfChild(_this.props, entry, i), { key: "trapezoid-" + i }), Funnel.renderTrapezoidItem(trapezoidOptions, trapezoidProps)));
        });
    };
    Funnel.prototype.renderTrapezoidsWithAnimation = function () {
        var _this = this;
        var _a = this.props, trapezoids = _a.trapezoids, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId;
        var prevTrapezoids = this.state.prevTrapezoids;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "funnel-" + animationId, onAnimationStart: this.handleAnimationStart, onAnimationEnd: this.handleAnimationEnd }, function (_a) {
            var t = _a.t;
            var stepData = trapezoids.map(function (entry, index) {
                var prev = prevTrapezoids && prevTrapezoids[index];
                if (prev) {
                    var interpolatorX_1 = DataUtils_1.interpolateNumber(prev.x, entry.x);
                    var interpolatorY_1 = DataUtils_1.interpolateNumber(prev.y, entry.y);
                    var interpolatorUpperWidth_1 = DataUtils_1.interpolateNumber(prev.upperWidth, entry.upperWidth);
                    var interpolatorLowerWidth_1 = DataUtils_1.interpolateNumber(prev.lowerWidth, entry.lowerWidth);
                    var interpolatorHeight_1 = DataUtils_1.interpolateNumber(prev.height, entry.height);
                    return __assign(__assign({}, entry), { x: interpolatorX_1(t), y: interpolatorY_1(t), upperWidth: interpolatorUpperWidth_1(t), lowerWidth: interpolatorLowerWidth_1(t), height: interpolatorHeight_1(t) });
                }
                var interpolatorX = DataUtils_1.interpolateNumber(entry.x + entry.upperWidth / 2, entry.x);
                var interpolatorY = DataUtils_1.interpolateNumber(entry.y + entry.height / 2, entry.y);
                var interpolatorUpperWidth = DataUtils_1.interpolateNumber(0, entry.upperWidth);
                var interpolatorLowerWidth = DataUtils_1.interpolateNumber(0, entry.lowerWidth);
                var interpolatorHeight = DataUtils_1.interpolateNumber(0, entry.height);
                return __assign(__assign({}, entry), { x: interpolatorX(t), y: interpolatorY(t), upperWidth: interpolatorUpperWidth(t), lowerWidth: interpolatorLowerWidth(t), height: interpolatorHeight(t) });
            });
            return react_1.default.createElement(Layer_1.Layer, null, _this.renderTrapezoidsStatically(stepData));
        }));
    };
    Funnel.prototype.renderTrapezoids = function () {
        var _a = this.props, trapezoids = _a.trapezoids, isAnimationActive = _a.isAnimationActive;
        var prevTrapezoids = this.state.prevTrapezoids;
        if (isAnimationActive &&
            trapezoids &&
            trapezoids.length &&
            (!prevTrapezoids || !lodash_1.default.isEqual(prevTrapezoids, trapezoids))) {
            return this.renderTrapezoidsWithAnimation();
        }
        return this.renderTrapezoidsStatically(trapezoids);
    };
    Funnel.prototype.render = function () {
        var _a = this.props, hide = _a.hide, trapezoids = _a.trapezoids, className = _a.className, isAnimationActive = _a.isAnimationActive;
        var isAnimationFinished = this.state.isAnimationFinished;
        if (hide || !trapezoids || !trapezoids.length) {
            return null;
        }
        var layerClass = classnames_1.default('recharts-trapezoids', className);
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass },
            this.renderTrapezoids(),
            (!isAnimationActive || isAnimationFinished) && LabelList_1.LabelList.renderCallByParent(this.props, trapezoids)));
    };
    Funnel.displayName = 'Funnel';
    Funnel.defaultProps = {
        stroke: '#fff',
        fill: '#808080',
        legendType: 'rect',
        labelLine: true,
        hide: false,
        isAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 400,
        animationDuration: 1500,
        animationEasing: 'ease',
        nameKey: 'name',
        lastShapeType: 'triangle',
    };
    Funnel.getRealFunnelData = function (item) {
        var _a = item.props, data = _a.data, children = _a.children;
        var presentationProps = types_1.filterProps(item.props);
        var cells = ReactUtils_1.findAllByType(children, Cell_1.Cell.displayName);
        if (data && data.length) {
            return data.map(function (entry, index) { return (__assign(__assign(__assign({ payload: entry }, presentationProps), entry), (cells && cells[index] && cells[index].props))); });
        }
        if (cells && cells.length) {
            return cells.map(function (cell) { return (__assign(__assign({}, presentationProps), cell.props)); });
        }
        return [];
    };
    Funnel.getRealWidthHeight = function (item, offset) {
        var customWidth = item.props.width;
        var width = offset.width, height = offset.height, left = offset.left, right = offset.right, top = offset.top, bottom = offset.bottom;
        var realHeight = height;
        var realWidth = width;
        if (lodash_1.default.isNumber(customWidth)) {
            realWidth = customWidth;
        }
        else if (lodash_1.default.isString(customWidth)) {
            realWidth = (realWidth * parseFloat(customWidth)) / 100;
        }
        return {
            realWidth: realWidth - left - right - 50,
            realHeight: realHeight - bottom - top,
            offsetX: (width - realWidth) / 2,
            offsetY: (height - realHeight) / 2,
        };
    };
    Funnel.getComposedData = function (_a) {
        var item = _a.item, offset = _a.offset;
        var funnelData = Funnel.getRealFunnelData(item);
        var _b = item.props, dataKey = _b.dataKey, nameKey = _b.nameKey, tooltipType = _b.tooltipType, lastShapeType = _b.lastShapeType, reversed = _b.reversed;
        var left = offset.left, top = offset.top;
        var _c = Funnel.getRealWidthHeight(item, offset), realHeight = _c.realHeight, realWidth = _c.realWidth, offsetX = _c.offsetX, offsetY = _c.offsetY;
        var maxValue = Math.max.apply(null, funnelData.map(function (entry) { return ChartUtils_1.getValueByDataKey(entry, dataKey, 0); }));
        var len = funnelData.length;
        var rowHeight = realHeight / len;
        var parentViewBox = { x: offset.left, y: offset.top, width: offset.width, height: offset.height };
        var trapezoids = funnelData.map(function (entry, i) {
            var _a;
            var rawVal = ChartUtils_1.getValueByDataKey(entry, dataKey, 0);
            var name = ChartUtils_1.getValueByDataKey(entry, nameKey, i);
            var val = rawVal;
            var nextVal;
            if (i !== len - 1) {
                nextVal = ChartUtils_1.getValueByDataKey(funnelData[i + 1], dataKey, 0);
                if (nextVal instanceof Array) {
                    _a = nextVal, nextVal = _a[0];
                }
            }
            else if (rawVal instanceof Array && rawVal.length === 2) {
                val = rawVal[0], nextVal = rawVal[1];
            }
            else if (lastShapeType === 'rectangle') {
                nextVal = val;
            }
            else {
                nextVal = 0;
            }
            var x = ((maxValue - val) * realWidth) / (2 * maxValue) + top + 25 + offsetX;
            var y = rowHeight * i + left + offsetY;
            var upperWidth = (val / maxValue) * realWidth;
            var lowerWidth = (nextVal / maxValue) * realWidth;
            var tooltipPayload = [{ name: name, value: val, payload: entry, dataKey: dataKey, type: tooltipType }];
            var tooltipPosition = {
                x: x + upperWidth / 2,
                y: y + rowHeight / 2,
            };
            return __assign(__assign({ x: x,
                y: y, width: Math.max(upperWidth, lowerWidth), upperWidth: upperWidth,
                lowerWidth: lowerWidth, height: rowHeight, name: name,
                val: val,
                tooltipPayload: tooltipPayload,
                tooltipPosition: tooltipPosition }, lodash_1.default.omit(entry, 'width')), { payload: entry, parentViewBox: parentViewBox, labelViewBox: {
                    x: x + (upperWidth - lowerWidth) / 4,
                    y: y,
                    width: Math.abs(upperWidth - lowerWidth) / 2 + Math.min(upperWidth, lowerWidth),
                    height: rowHeight,
                } });
        });
        if (reversed) {
            trapezoids = trapezoids.map(function (entry, index) {
                var newY = entry.y - index * rowHeight + (len - 1 - index) * rowHeight;
                return __assign(__assign({}, entry), { upperWidth: entry.lowerWidth, lowerWidth: entry.upperWidth, x: entry.x - (entry.lowerWidth - entry.upperWidth) / 2, y: entry.y - index * rowHeight + (len - 1 - index) * rowHeight, tooltipPosition: __assign(__assign({}, entry.tooltipPosition), { y: newY + rowHeight / 2 }), labelViewBox: __assign(__assign({}, entry.labelViewBox), { y: newY }) });
            });
        }
        return {
            trapezoids: trapezoids,
            data: funnelData,
        };
    };
    return Funnel;
}(react_1.PureComponent));
exports.Funnel = Funnel;
//# sourceMappingURL=Funnel.js.map