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
exports.RadialBar = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var lodash_1 = __importDefault(require("lodash"));
var Sector_1 = require("../shape/Sector");
var Layer_1 = require("../container/Layer");
var ReactUtils_1 = require("../util/ReactUtils");
var Global_1 = require("../util/Global");
var LabelList_1 = require("../component/LabelList");
var Cell_1 = require("../component/Cell");
var DataUtils_1 = require("../util/DataUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var types_1 = require("../util/types");
var PolarUtils_1 = require("../util/PolarUtils");
var RadialBar = (function (_super) {
    __extends(RadialBar, _super);
    function RadialBar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isAnimationFinished: false,
        };
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
    RadialBar.getDerivedStateFromProps = function (nextProps, prevState) {
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
    RadialBar.prototype.getDeltaAngle = function () {
        var _a = this.props, startAngle = _a.startAngle, endAngle = _a.endAngle;
        var sign = DataUtils_1.mathSign(endAngle - startAngle);
        var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
        return sign * deltaAngle;
    };
    RadialBar.renderSectorShape = function (shape, props) {
        var sectorShape;
        if (react_1.default.isValidElement(shape)) {
            sectorShape = react_1.default.cloneElement(shape, props);
        }
        else if (lodash_1.default.isFunction(shape)) {
            sectorShape = shape(props);
        }
        else {
            sectorShape = react_1.default.createElement(Sector_1.Sector, props);
        }
        return sectorShape;
    };
    RadialBar.prototype.renderSectorsStatically = function (sectors) {
        var _this = this;
        var _a = this.props, shape = _a.shape, activeShape = _a.activeShape, activeIndex = _a.activeIndex, cornerRadius = _a.cornerRadius, others = __rest(_a, ["shape", "activeShape", "activeIndex", "cornerRadius"]);
        var baseProps = types_1.filterProps(others);
        return sectors.map(function (entry, i) {
            var props = __assign(__assign(__assign(__assign(__assign({}, baseProps), { cornerRadius: cornerRadius }), entry), types_1.adaptEventsOfChild(_this.props, entry, i)), { key: "sector-" + i, className: 'recharts-radial-bar-sector', forceCornerRadius: others.forceCornerRadius, cornerIsExternal: others.cornerIsExternal });
            return RadialBar.renderSectorShape(i === activeIndex ? activeShape : shape, props);
        });
    };
    RadialBar.prototype.renderSectorsWithAnimation = function () {
        var _this = this;
        var _a = this.props, data = _a.data, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId;
        var prevData = this.state.prevData;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "radialBar-" + animationId, onAnimationStart: this.handleAnimationStart, onAnimationEnd: this.handleAnimationEnd }, function (_a) {
            var t = _a.t;
            var stepData = data.map(function (entry, index) {
                var prev = prevData && prevData[index];
                if (prev) {
                    var interpolatorStartAngle = DataUtils_1.interpolateNumber(prev.startAngle, entry.startAngle);
                    var interpolatorEndAngle = DataUtils_1.interpolateNumber(prev.endAngle, entry.endAngle);
                    return __assign(__assign({}, entry), { startAngle: interpolatorStartAngle(t), endAngle: interpolatorEndAngle(t) });
                }
                var endAngle = entry.endAngle, startAngle = entry.startAngle;
                var interpolator = DataUtils_1.interpolateNumber(startAngle, endAngle);
                return __assign(__assign({}, entry), { endAngle: interpolator(t) });
            });
            return react_1.default.createElement(Layer_1.Layer, null, _this.renderSectorsStatically(stepData));
        }));
    };
    RadialBar.prototype.renderSectors = function () {
        var _a = this.props, data = _a.data, isAnimationActive = _a.isAnimationActive;
        var prevData = this.state.prevData;
        if (isAnimationActive && data && data.length && (!prevData || !lodash_1.default.isEqual(prevData, data))) {
            return this.renderSectorsWithAnimation();
        }
        return this.renderSectorsStatically(data);
    };
    RadialBar.prototype.renderBackground = function (sectors) {
        var _this = this;
        var cornerRadius = this.props.cornerRadius;
        var backgroundProps = types_1.filterProps(this.props.background);
        return sectors.map(function (entry, i) {
            var value = entry.value, background = entry.background, rest = __rest(entry, ["value", "background"]);
            if (!background) {
                return null;
            }
            var props = __assign(__assign(__assign(__assign(__assign(__assign({ cornerRadius: cornerRadius }, rest), { fill: '#eee' }), background), backgroundProps), types_1.adaptEventsOfChild(_this.props, entry, i)), { index: i, key: "sector-" + i, className: 'recharts-radial-bar-background-sector' });
            return RadialBar.renderSectorShape(background, props);
        });
    };
    RadialBar.prototype.render = function () {
        var _a = this.props, hide = _a.hide, data = _a.data, className = _a.className, background = _a.background, isAnimationActive = _a.isAnimationActive;
        if (hide || !data || !data.length) {
            return null;
        }
        var isAnimationFinished = this.state.isAnimationFinished;
        var layerClass = classnames_1.default('recharts-area', className);
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass },
            background && react_1.default.createElement(Layer_1.Layer, { className: "recharts-radial-bar-background" }, this.renderBackground(data)),
            react_1.default.createElement(Layer_1.Layer, { className: "recharts-radial-bar-sectors" }, this.renderSectors()),
            (!isAnimationActive || isAnimationFinished) &&
                LabelList_1.LabelList.renderCallByParent(__assign(__assign({}, this.props), { clockWise: this.getDeltaAngle() < 0 }), data)));
    };
    RadialBar.displayName = 'RadialBar';
    RadialBar.defaultProps = {
        angleAxisId: 0,
        radiusAxisId: 0,
        minPointSize: 0,
        hide: false,
        legendType: 'rect',
        data: [],
        isAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
        forceCornerRadius: false,
        cornerIsExternal: false,
    };
    RadialBar.getComposedData = function (_a) {
        var item = _a.item, props = _a.props, radiusAxis = _a.radiusAxis, radiusAxisTicks = _a.radiusAxisTicks, angleAxis = _a.angleAxis, angleAxisTicks = _a.angleAxisTicks, displayedData = _a.displayedData, dataKey = _a.dataKey, stackedData = _a.stackedData, barPosition = _a.barPosition, bandSize = _a.bandSize, dataStartIndex = _a.dataStartIndex;
        var pos = ChartUtils_1.findPositionOfBar(barPosition, item);
        if (!pos) {
            return null;
        }
        var cx = angleAxis.cx, cy = angleAxis.cy;
        var layout = props.layout;
        var _b = item.props, children = _b.children, minPointSize = _b.minPointSize;
        var numericAxis = layout === 'radial' ? angleAxis : radiusAxis;
        var stackedDomain = stackedData ? numericAxis.scale.domain() : null;
        var baseValue = ChartUtils_1.getBaseValueOfBar({ numericAxis: numericAxis });
        var cells = ReactUtils_1.findAllByType(children, Cell_1.Cell.displayName);
        var sectors = displayedData.map(function (entry, index) {
            var value, innerRadius, outerRadius, startAngle, endAngle, backgroundSector;
            if (stackedData) {
                value = ChartUtils_1.truncateByDomain(stackedData[dataStartIndex + index], stackedDomain);
            }
            else {
                value = ChartUtils_1.getValueByDataKey(entry, dataKey);
                if (!lodash_1.default.isArray(value)) {
                    value = [baseValue, value];
                }
            }
            if (layout === 'radial') {
                innerRadius = ChartUtils_1.getCateCoordinateOfBar({
                    axis: radiusAxis,
                    ticks: radiusAxisTicks,
                    bandSize: bandSize,
                    offset: pos.offset,
                    entry: entry,
                    index: index,
                });
                endAngle = angleAxis.scale(value[1]);
                startAngle = angleAxis.scale(value[0]);
                outerRadius = innerRadius + pos.size;
                var deltaAngle = endAngle - startAngle;
                if (Math.abs(minPointSize) > 0 && Math.abs(deltaAngle) < Math.abs(minPointSize)) {
                    var delta = DataUtils_1.mathSign(deltaAngle || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaAngle));
                    endAngle += delta;
                }
                backgroundSector = {
                    background: {
                        cx: cx,
                        cy: cy,
                        innerRadius: innerRadius,
                        outerRadius: outerRadius,
                        startAngle: props.startAngle,
                        endAngle: props.endAngle,
                    },
                };
            }
            else {
                innerRadius = radiusAxis.scale(value[0]);
                outerRadius = radiusAxis.scale(value[1]);
                startAngle = ChartUtils_1.getCateCoordinateOfBar({
                    axis: angleAxis,
                    ticks: angleAxisTicks,
                    bandSize: bandSize,
                    offset: pos.offset,
                    entry: entry,
                    index: index,
                });
                endAngle = startAngle + pos.size;
                var deltaRadius = outerRadius - innerRadius;
                if (Math.abs(minPointSize) > 0 && Math.abs(deltaRadius) < Math.abs(minPointSize)) {
                    var delta = DataUtils_1.mathSign(deltaRadius || minPointSize) * (Math.abs(minPointSize) - Math.abs(deltaRadius));
                    outerRadius += delta;
                }
            }
            return __assign(__assign(__assign(__assign(__assign({}, entry), backgroundSector), { payload: entry, value: stackedData ? value : value[1], cx: cx,
                cy: cy,
                innerRadius: innerRadius,
                outerRadius: outerRadius,
                startAngle: startAngle,
                endAngle: endAngle }), (cells && cells[index] && cells[index].props)), { tooltipPayload: [ChartUtils_1.getTooltipItem(item, entry)], tooltipPosition: PolarUtils_1.polarToCartesian(cx, cy, (innerRadius + outerRadius) / 2, (startAngle + endAngle) / 2) });
        });
        return { data: sectors, layout: layout };
    };
    return RadialBar;
}(react_1.PureComponent));
exports.RadialBar = RadialBar;
//# sourceMappingURL=RadialBar.js.map