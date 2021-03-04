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
exports.Bar = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var lodash_1 = __importDefault(require("lodash"));
var Rectangle_1 = require("../shape/Rectangle");
var Layer_1 = require("../container/Layer");
var ErrorBar_1 = require("./ErrorBar");
var Cell_1 = require("../component/Cell");
var LabelList_1 = require("../component/LabelList");
var DataUtils_1 = require("../util/DataUtils");
var ReactUtils_1 = require("../util/ReactUtils");
var Global_1 = require("../util/Global");
var ChartUtils_1 = require("../util/ChartUtils");
var types_1 = require("../util/types");
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isAnimationFinished: false };
        _this.id = DataUtils_1.uniqueId('recharts-bar-');
        _this.handleAnimationEnd = function () {
            var onAnimationEnd = _this.props.onAnimationEnd;
            _this.setState({ isAnimationFinished: true });
            if (onAnimationEnd) {
                onAnimationEnd();
            }
        };
        _this.handleAnimationStart = function () {
            var onAnimationStart = _this.props.onAnimationStart;
            _this.setState({ isAnimationFinished: false });
            if (onAnimationStart) {
                onAnimationStart();
            }
        };
        return _this;
    }
    Bar.getDerivedStateFromProps = function (nextProps, prevState) {
        if (nextProps.animationId !== prevState.prevAnimationId) {
            return {
                prevAnimationId: nextProps.animationId,
                curData: nextProps.data,
                prevData: prevState.curData,
            };
        }
        if (nextProps.data !== prevState.curData) {
            return {
                curData: nextProps.data,
            };
        }
        return null;
    };
    Bar.renderRectangle = function (option, props) {
        var rectangle;
        if (react_1.default.isValidElement(option)) {
            rectangle = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            rectangle = option(props);
        }
        else {
            rectangle = react_1.default.createElement(Rectangle_1.Rectangle, __assign({}, props));
        }
        return rectangle;
    };
    Bar.prototype.renderRectanglesStatically = function (data) {
        var _this = this;
        var shape = this.props.shape;
        var baseProps = types_1.filterProps(this.props);
        return (data &&
            data.map(function (entry, i) {
                var props = __assign(__assign(__assign({}, baseProps), entry), { index: i });
                return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-bar-rectangle" }, types_1.adaptEventsOfChild(_this.props, entry, i), { key: "rectangle-" + i }), Bar.renderRectangle(shape, props)));
            }));
    };
    Bar.prototype.renderRectanglesWithAnimation = function () {
        var _this = this;
        var _a = this.props, data = _a.data, layout = _a.layout, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId;
        var prevData = this.state.prevData;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "bar-" + animationId, onAnimationEnd: this.handleAnimationEnd, onAnimationStart: this.handleAnimationStart }, function (_a) {
            var t = _a.t;
            var stepData = data.map(function (entry, index) {
                var prev = prevData && prevData[index];
                if (prev) {
                    var interpolatorX = DataUtils_1.interpolateNumber(prev.x, entry.x);
                    var interpolatorY = DataUtils_1.interpolateNumber(prev.y, entry.y);
                    var interpolatorWidth = DataUtils_1.interpolateNumber(prev.width, entry.width);
                    var interpolatorHeight = DataUtils_1.interpolateNumber(prev.height, entry.height);
                    return __assign(__assign({}, entry), { x: interpolatorX(t), y: interpolatorY(t), width: interpolatorWidth(t), height: interpolatorHeight(t) });
                }
                if (layout === 'horizontal') {
                    var interpolatorHeight = DataUtils_1.interpolateNumber(0, entry.height);
                    var h = interpolatorHeight(t);
                    return __assign(__assign({}, entry), { y: entry.y + entry.height - h, height: h });
                }
                var interpolator = DataUtils_1.interpolateNumber(0, entry.width);
                var w = interpolator(t);
                return __assign(__assign({}, entry), { width: w });
            });
            return react_1.default.createElement(Layer_1.Layer, null, _this.renderRectanglesStatically(stepData));
        }));
    };
    Bar.prototype.renderRectangles = function () {
        var _a = this.props, data = _a.data, isAnimationActive = _a.isAnimationActive;
        var prevData = this.state.prevData;
        if (isAnimationActive && data && data.length && (!prevData || !lodash_1.default.isEqual(prevData, data))) {
            return this.renderRectanglesWithAnimation();
        }
        return this.renderRectanglesStatically(data);
    };
    Bar.prototype.renderBackground = function () {
        var _this = this;
        var data = this.props.data;
        var backgroundProps = types_1.filterProps(this.props.background);
        return data.map(function (entry, i) {
            var value = entry.value, background = entry.background, rest = __rest(entry, ["value", "background"]);
            if (!background) {
                return null;
            }
            var props = __assign(__assign(__assign(__assign(__assign(__assign({}, rest), { fill: '#eee' }), background), backgroundProps), types_1.adaptEventsOfChild(_this.props, entry, i)), { index: i, key: "background-bar-" + i, className: 'recharts-bar-background-rectangle' });
            return Bar.renderRectangle(_this.props.background, props);
        });
    };
    Bar.prototype.renderErrorBar = function () {
        if (this.props.isAnimationActive && !this.state.isAnimationFinished) {
            return null;
        }
        var _a = this.props, data = _a.data, xAxis = _a.xAxis, yAxis = _a.yAxis, layout = _a.layout, children = _a.children;
        var errorBarItems = ReactUtils_1.findAllByType(children, ErrorBar_1.ErrorBar.displayName);
        if (!errorBarItems) {
            return null;
        }
        var offset = layout === 'vertical' ? data[0].height / 2 : data[0].width / 2;
        function dataPointFormatter(dataPoint, dataKey) {
            return {
                x: dataPoint.x,
                y: dataPoint.y,
                value: dataPoint.value,
                errorVal: ChartUtils_1.getValueByDataKey(dataPoint, dataKey),
            };
        }
        return errorBarItems.map(function (item, i) {
            return react_1.default.cloneElement(item, {
                key: "error-bar-" + i,
                data: data,
                xAxis: xAxis,
                yAxis: yAxis,
                layout: layout,
                offset: offset,
                dataPointFormatter: dataPointFormatter,
            });
        });
    };
    Bar.prototype.render = function () {
        var _a = this.props, hide = _a.hide, data = _a.data, className = _a.className, xAxis = _a.xAxis, yAxis = _a.yAxis, left = _a.left, top = _a.top, width = _a.width, height = _a.height, isAnimationActive = _a.isAnimationActive, background = _a.background, id = _a.id;
        if (hide || !data || !data.length) {
            return null;
        }
        var isAnimationFinished = this.state.isAnimationFinished;
        var layerClass = classnames_1.default('recharts-bar', className);
        var needClip = (xAxis && xAxis.allowDataOverflow) || (yAxis && yAxis.allowDataOverflow);
        var clipPathId = lodash_1.default.isNil(id) ? this.id : id;
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass },
            needClip ? (react_1.default.createElement("defs", null,
                react_1.default.createElement("clipPath", { id: "clipPath-" + clipPathId },
                    react_1.default.createElement("rect", { x: left, y: top, width: width, height: height })))) : null,
            react_1.default.createElement(Layer_1.Layer, { className: "recharts-bar-rectangles", clipPath: needClip ? "url(#clipPath-" + clipPathId + ")" : null },
                background ? this.renderBackground() : null,
                this.renderRectangles()),
            this.renderErrorBar(),
            (!isAnimationActive || isAnimationFinished) && LabelList_1.LabelList.renderCallByParent(this.props, data)));
    };
    Bar.displayName = 'Bar';
    Bar.defaultProps = {
        xAxisId: 0,
        yAxisId: 0,
        legendType: 'rect',
        minPointSize: 0,
        hide: false,
        data: [],
        layout: 'vertical',
        isAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 0,
        animationDuration: 400,
        animationEasing: 'ease',
    };
    Bar.getComposedData = function (_a) {
        var props = _a.props, item = _a.item, barPosition = _a.barPosition, bandSize = _a.bandSize, xAxis = _a.xAxis, yAxis = _a.yAxis, xAxisTicks = _a.xAxisTicks, yAxisTicks = _a.yAxisTicks, stackedData = _a.stackedData, dataStartIndex = _a.dataStartIndex, displayedData = _a.displayedData, offset = _a.offset;
        var pos = ChartUtils_1.findPositionOfBar(barPosition, item);
        if (!pos) {
            return null;
        }
        var layout = props.layout;
        var _b = item.props, dataKey = _b.dataKey, children = _b.children, minPointSize = _b.minPointSize;
        var numericAxis = layout === 'horizontal' ? yAxis : xAxis;
        var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
        var baseValue = ChartUtils_1.getBaseValueOfBar({ numericAxis: numericAxis });
        var cells = ReactUtils_1.findAllByType(children, Cell_1.Cell.displayName);
        var rects = displayedData.map(function (entry, index) {
            var value, x, y, width, height, background;
            if (stackedData) {
                value = ChartUtils_1.truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
            }
            else {
                value = ChartUtils_1.getValueByDataKey(entry, dataKey);
                if (!lodash_1.default.isArray(value)) {
                    value = [baseValue, value];
                }
            }
            if (layout === 'horizontal') {
                x = ChartUtils_1.getCateCoordinateOfBar({
                    axis: xAxis,
                    ticks: xAxisTicks,
                    bandSize: bandSize,
                    offset: pos.offset,
                    entry: entry,
                    index: index,
                });
                y = yAxis.scale(value[1]);
                width = pos.size;
                height = yAxis.scale(value[0]) - yAxis.scale(value[1]);
                background = { x: x, y: yAxis.y, width: width, height: yAxis.height };
                if (Math.abs(minPointSize) > 0 && Math.abs(height) < Math.abs(minPointSize)) {
                    var delta = DataUtils_1.mathSign(height || minPointSize) * (Math.abs(minPointSize) - Math.abs(height));
                    y -= delta;
                    height += delta;
                }
            }
            else {
                x = xAxis.scale(value[0]);
                y = ChartUtils_1.getCateCoordinateOfBar({
                    axis: yAxis,
                    ticks: yAxisTicks,
                    bandSize: bandSize,
                    offset: pos.offset,
                    entry: entry,
                    index: index,
                });
                width = xAxis.scale(value[1]) - xAxis.scale(value[0]);
                height = pos.size;
                background = { x: xAxis.x, y: y, width: xAxis.width, height: height };
                if (Math.abs(minPointSize) > 0 && Math.abs(width) < Math.abs(minPointSize)) {
                    var delta = DataUtils_1.mathSign(width || minPointSize) * (Math.abs(minPointSize) - Math.abs(width));
                    width += delta;
                }
            }
            return __assign(__assign(__assign(__assign({}, entry), { x: x,
                y: y,
                width: width,
                height: height, value: stackedData ? value : value[1], payload: entry, background: background }), (cells && cells[index] && cells[index].props)), { tooltipPayload: [ChartUtils_1.getTooltipItem(item, entry)], tooltipPosition: { x: x + width / 2, y: y + height / 2 } });
        });
        return __assign({ data: rects, layout: layout }, offset);
    };
    return Bar;
}(react_1.PureComponent));
exports.Bar = Bar;
//# sourceMappingURL=Bar.js.map