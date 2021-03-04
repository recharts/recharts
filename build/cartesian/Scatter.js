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
exports.Scatter = void 0;
var react_1 = __importStar(require("react"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var Layer_1 = require("../container/Layer");
var LabelList_1 = require("../component/LabelList");
var ReactUtils_1 = require("../util/ReactUtils");
var Global_1 = require("../util/Global");
var ZAxis_1 = require("./ZAxis");
var Curve_1 = require("../shape/Curve");
var Symbols_1 = require("../shape/Symbols");
var ErrorBar_1 = require("./ErrorBar");
var Cell_1 = require("../component/Cell");
var DataUtils_1 = require("../util/DataUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var types_1 = require("../util/types");
var Scatter = (function (_super) {
    __extends(Scatter, _super);
    function Scatter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isAnimationFinished: false };
        _this.handleAnimationEnd = function () {
            _this.setState({ isAnimationFinished: true });
        };
        _this.handleAnimationStart = function () {
            _this.setState({ isAnimationFinished: false });
        };
        _this.id = DataUtils_1.uniqueId('recharts-scatter-');
        return _this;
    }
    Scatter.getDerivedStateFromProps = function (nextProps, prevState) {
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
    Scatter.renderSymbolItem = function (option, props) {
        var symbol;
        if (react_1.default.isValidElement(option)) {
            symbol = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            symbol = option(props);
        }
        else if (typeof option === 'string') {
            symbol = react_1.default.createElement(Symbols_1.Symbols, __assign({}, props, { type: option }));
        }
        return symbol;
    };
    Scatter.prototype.renderSymbolsStatically = function (points) {
        var _this = this;
        var _a = this.props, shape = _a.shape, activeShape = _a.activeShape, activeIndex = _a.activeIndex;
        var baseProps = types_1.filterProps(this.props);
        return points.map(function (entry, i) {
            var props = __assign(__assign({ key: "symbol-" + i }, baseProps), entry);
            return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-scatter-symbol" }, types_1.adaptEventsOfChild(_this.props, entry, i), { key: "symbol-" + i }), Scatter.renderSymbolItem(activeIndex === i ? activeShape : shape, props)));
        });
    };
    Scatter.prototype.renderSymbolsWithAnimation = function () {
        var _this = this;
        var _a = this.props, points = _a.points, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId;
        var prevPoints = this.state.prevPoints;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "pie-" + animationId, onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function (_a) {
            var t = _a.t;
            var stepData = points.map(function (entry, index) {
                var prev = prevPoints && prevPoints[index];
                if (prev) {
                    var interpolatorCx = DataUtils_1.interpolateNumber(prev.cx, entry.cx);
                    var interpolatorCy = DataUtils_1.interpolateNumber(prev.cy, entry.cy);
                    var interpolatorSize = DataUtils_1.interpolateNumber(prev.size, entry.size);
                    return __assign(__assign({}, entry), { cx: interpolatorCx(t), cy: interpolatorCy(t), size: interpolatorSize(t) });
                }
                var interpolator = DataUtils_1.interpolateNumber(0, entry.size);
                return __assign(__assign({}, entry), { size: interpolator(t) });
            });
            return react_1.default.createElement(Layer_1.Layer, null, _this.renderSymbolsStatically(stepData));
        }));
    };
    Scatter.prototype.renderSymbols = function () {
        var _a = this.props, points = _a.points, isAnimationActive = _a.isAnimationActive;
        var prevPoints = this.state.prevPoints;
        if (isAnimationActive && points && points.length && (!prevPoints || !lodash_1.default.isEqual(prevPoints, points))) {
            return this.renderSymbolsWithAnimation();
        }
        return this.renderSymbolsStatically(points);
    };
    Scatter.prototype.renderErrorBar = function () {
        var isAnimationActive = this.props.isAnimationActive;
        if (isAnimationActive && !this.state.isAnimationFinished) {
            return null;
        }
        var _a = this.props, points = _a.points, xAxis = _a.xAxis, yAxis = _a.yAxis, children = _a.children;
        var errorBarItems = ReactUtils_1.findAllByType(children, ErrorBar_1.ErrorBar.displayName);
        if (!errorBarItems) {
            return null;
        }
        function dataPointFormatterY(dataPoint, dataKey) {
            return {
                x: dataPoint.cx,
                y: dataPoint.cy,
                value: +dataPoint.node.y,
                errorVal: ChartUtils_1.getValueByDataKey(dataPoint, dataKey),
            };
        }
        function dataPointFormatterX(dataPoint, dataKey) {
            return {
                x: dataPoint.cx,
                y: dataPoint.cy,
                value: +dataPoint.node.x,
                errorVal: ChartUtils_1.getValueByDataKey(dataPoint, dataKey),
            };
        }
        return errorBarItems.map(function (item, i) {
            var direction = item.props.direction;
            return react_1.default.cloneElement(item, {
                key: i,
                data: points,
                xAxis: xAxis,
                yAxis: yAxis,
                layout: direction === 'x' ? 'vertical' : 'horizontal',
                dataPointFormatter: direction === 'x' ? dataPointFormatterX : dataPointFormatterY,
            });
        });
    };
    Scatter.prototype.renderLine = function () {
        var _a = this.props, points = _a.points, line = _a.line, lineType = _a.lineType, lineJointType = _a.lineJointType;
        var scatterProps = types_1.filterProps(this.props);
        var customLineProps = types_1.filterProps(line);
        var linePoints, lineItem;
        if (lineType === 'joint') {
            linePoints = points.map(function (entry) { return ({ x: entry.cx, y: entry.cy }); });
        }
        else if (lineType === 'fitting') {
            var _b = DataUtils_1.getLinearRegression(points), xmin = _b.xmin, xmax = _b.xmax, a_1 = _b.a, b_1 = _b.b;
            var linearExp = function (x) { return a_1 * x + b_1; };
            linePoints = [
                { x: xmin, y: linearExp(xmin) },
                { x: xmax, y: linearExp(xmax) },
            ];
        }
        var lineProps = __assign(__assign(__assign(__assign({}, scatterProps), { fill: 'none', stroke: scatterProps && scatterProps.fill }), customLineProps), { points: linePoints });
        if (react_1.default.isValidElement(line)) {
            lineItem = react_1.default.cloneElement(line, lineProps);
        }
        else if (lodash_1.default.isFunction(line)) {
            lineItem = line(lineProps);
        }
        else {
            lineItem = react_1.default.createElement(Curve_1.Curve, __assign({}, lineProps, { type: lineJointType }));
        }
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-scatter-line", key: "recharts-scatter-line" }, lineItem));
    };
    Scatter.prototype.render = function () {
        var _a = this.props, hide = _a.hide, points = _a.points, line = _a.line, className = _a.className, xAxis = _a.xAxis, yAxis = _a.yAxis, left = _a.left, top = _a.top, width = _a.width, height = _a.height, id = _a.id, isAnimationActive = _a.isAnimationActive;
        if (hide || !points || !points.length) {
            return null;
        }
        var isAnimationFinished = this.state.isAnimationFinished;
        var layerClass = classnames_1.default('recharts-scatter', className);
        var needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);
        var clipPathId = lodash_1.default.isNil(id) ? this.id : id;
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass, clipPath: needClip ? "url(#clipPath-" + clipPathId + ")" : null },
            needClip ? (react_1.default.createElement("defs", null,
                react_1.default.createElement("clipPath", { id: "clipPath-" + clipPathId },
                    react_1.default.createElement("rect", { x: left, y: top, width: width, height: height })))) : null,
            line && this.renderLine(),
            this.renderErrorBar(),
            react_1.default.createElement(Layer_1.Layer, { key: "recharts-scatter-symbols" }, this.renderSymbols()),
            (!isAnimationActive || isAnimationFinished) && LabelList_1.LabelList.renderCallByParent(this.props, points)));
    };
    Scatter.displayName = 'Scatter';
    Scatter.defaultProps = {
        xAxisId: 0,
        yAxisId: 0,
        zAxisId: 0,
        legendType: 'circle',
        lineType: 'joint',
        lineJointType: 'linear',
        data: [],
        shape: 'circle',
        hide: false,
        isAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: 'linear',
    };
    Scatter.getComposedData = function (_a) {
        var xAxis = _a.xAxis, yAxis = _a.yAxis, zAxis = _a.zAxis, item = _a.item, displayedData = _a.displayedData, xAxisTicks = _a.xAxisTicks, yAxisTicks = _a.yAxisTicks, offset = _a.offset;
        var tooltipType = item.props.tooltipType;
        var cells = ReactUtils_1.findAllByType(item.props.children, Cell_1.Cell.displayName);
        var xAxisDataKey = lodash_1.default.isNil(xAxis.dataKey) ? item.props.dataKey : xAxis.dataKey;
        var yAxisDataKey = lodash_1.default.isNil(yAxis.dataKey) ? item.props.dataKey : yAxis.dataKey;
        var zAxisDataKey = zAxis && zAxis.dataKey;
        var defaultRangeZ = zAxis ? zAxis.range : ZAxis_1.ZAxis.defaultProps.range;
        var defaultZ = defaultRangeZ && defaultRangeZ[0];
        var xBandSize = xAxis.scale.bandwidth ? xAxis.scale.bandwidth() : 0;
        var yBandSize = yAxis.scale.bandwidth ? yAxis.scale.bandwidth() : 0;
        var points = displayedData.map(function (entry, index) {
            var x = ChartUtils_1.getValueByDataKey(entry, xAxisDataKey);
            var y = ChartUtils_1.getValueByDataKey(entry, yAxisDataKey);
            var z = (!lodash_1.default.isNil(zAxisDataKey) && ChartUtils_1.getValueByDataKey(entry, zAxisDataKey)) || '-';
            var tooltipPayload = [
                {
                    name: lodash_1.default.isNil(xAxis.dataKey) ? item.props.name : xAxis.name || xAxis.dataKey,
                    unit: xAxis.unit || '',
                    value: x,
                    payload: entry,
                    dataKey: xAxisDataKey,
                    type: tooltipType,
                },
                {
                    name: lodash_1.default.isNil(yAxis.dataKey) ? item.props.name : yAxis.name || yAxis.dataKey,
                    unit: yAxis.unit || '',
                    value: y,
                    payload: entry,
                    dataKey: yAxisDataKey,
                    type: tooltipType,
                },
            ];
            if (z !== '-') {
                tooltipPayload.push({
                    name: zAxis.name || zAxis.dataKey,
                    unit: zAxis.unit || '',
                    value: z,
                    payload: entry,
                    dataKey: zAxisDataKey,
                    type: tooltipType,
                });
            }
            var cx = ChartUtils_1.getCateCoordinateOfLine({
                axis: xAxis,
                ticks: xAxisTicks,
                bandSize: xBandSize,
                entry: entry,
                index: index,
                dataKey: xAxisDataKey,
            });
            var cy = ChartUtils_1.getCateCoordinateOfLine({
                axis: yAxis,
                ticks: yAxisTicks,
                bandSize: yBandSize,
                entry: entry,
                index: index,
                dataKey: yAxisDataKey,
            });
            var size = z !== '-' ? zAxis.scale(z) : defaultZ;
            var radius = Math.sqrt(Math.max(size, 0) / Math.PI);
            return __assign(__assign(__assign({}, entry), { cx: cx,
                cy: cy, x: cx - radius, y: cy - radius, xAxis: xAxis,
                yAxis: yAxis,
                zAxis: zAxis, width: 2 * radius, height: 2 * radius, size: size, node: { x: x, y: y, z: z }, tooltipPayload: tooltipPayload, tooltipPosition: { x: cx, y: cy }, payload: entry }), (cells && cells[index] && cells[index].props));
        });
        return __assign({ points: points }, offset);
    };
    return Scatter;
}(react_1.PureComponent));
exports.Scatter = Scatter;
//# sourceMappingURL=Scatter.js.map