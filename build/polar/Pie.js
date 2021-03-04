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
exports.Pie = void 0;
var react_1 = __importStar(require("react"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var Layer_1 = require("../container/Layer");
var Sector_1 = require("../shape/Sector");
var Curve_1 = require("../shape/Curve");
var Text_1 = require("../component/Text");
var Label_1 = require("../component/Label");
var LabelList_1 = require("../component/LabelList");
var Cell_1 = require("../component/Cell");
var ReactUtils_1 = require("../util/ReactUtils");
var Global_1 = require("../util/Global");
var PolarUtils_1 = require("../util/PolarUtils");
var DataUtils_1 = require("../util/DataUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var LogUtils_1 = require("../util/LogUtils");
var types_1 = require("../util/types");
var Pie = (function (_super) {
    __extends(Pie, _super);
    function Pie(props) {
        var _this = _super.call(this, props) || this;
        _this.id = DataUtils_1.uniqueId('recharts-pie-');
        _this.handleAnimationEnd = function () {
            var onAnimationEnd = _this.props.onAnimationEnd;
            _this.setState({
                isAnimationFinished: true,
            });
            if (lodash_1.default.isFunction(onAnimationEnd)) {
                onAnimationEnd();
            }
        };
        _this.handleAnimationStart = function () {
            var onAnimationStart = _this.props.onAnimationStart;
            _this.setState({
                isAnimationFinished: false,
            });
            if (lodash_1.default.isFunction(onAnimationStart)) {
                onAnimationStart();
            }
        };
        _this.state = {
            isAnimationFinished: !props.isAnimationActive,
            prevIsAnimationActive: props.isAnimationActive,
            prevAnimationId: props.animationId,
        };
        return _this;
    }
    Pie.getDerivedStateFromProps = function (nextProps, prevState) {
        if (prevState.prevIsAnimationActive !== nextProps.isAnimationActive) {
            return {
                prevIsAnimationActive: nextProps.isAnimationActive,
                prevAnimationId: nextProps.animationId,
                curSectors: nextProps.sectors,
                prevSectors: [],
            };
        }
        if (nextProps.isAnimationActive && nextProps.animationId !== prevState.prevAnimationId) {
            return {
                prevAnimationId: nextProps.animationId,
                curSectors: nextProps.sectors,
                prevSectors: prevState.curSectors,
            };
        }
        if (nextProps.sectors !== prevState.curSectors) {
            return {
                curSectors: nextProps.sectors,
            };
        }
        return null;
    };
    Pie.getTextAnchor = function (x, cx) {
        if (x > cx) {
            return 'start';
        }
        if (x < cx) {
            return 'end';
        }
        return 'middle';
    };
    Pie.prototype.isActiveIndex = function (i) {
        var activeIndex = this.props.activeIndex;
        if (Array.isArray(activeIndex)) {
            return activeIndex.indexOf(i) !== -1;
        }
        return i === activeIndex;
    };
    Pie.renderLabelLineItem = function (option, props) {
        if (react_1.default.isValidElement(option)) {
            return react_1.default.cloneElement(option, props);
        }
        if (lodash_1.default.isFunction(option)) {
            return option(props);
        }
        return react_1.default.createElement(Curve_1.Curve, __assign({}, props, { type: "linear", className: "recharts-pie-label-line" }));
    };
    Pie.renderLabelItem = function (option, props, value) {
        if (react_1.default.isValidElement(option)) {
            return react_1.default.cloneElement(option, props);
        }
        var label = value;
        if (lodash_1.default.isFunction(option)) {
            label = option(props);
            if (react_1.default.isValidElement(label)) {
                return label;
            }
        }
        return (react_1.default.createElement(Text_1.Text, __assign({}, props, { alignmentBaseline: "middle", className: "recharts-pie-label-text" }), label));
    };
    Pie.prototype.renderLabels = function (sectors) {
        var isAnimationActive = this.props.isAnimationActive;
        if (isAnimationActive && !this.state.isAnimationFinished) {
            return null;
        }
        var _a = this.props, label = _a.label, labelLine = _a.labelLine, dataKey = _a.dataKey, valueKey = _a.valueKey;
        var pieProps = types_1.filterProps(this.props);
        var customLabelProps = types_1.filterProps(label);
        var customLabelLineProps = types_1.filterProps(labelLine);
        var offsetRadius = (label && label.offsetRadius) || 20;
        var labels = sectors.map(function (entry, i) {
            var midAngle = (entry.startAngle + entry.endAngle) / 2;
            var endPoint = PolarUtils_1.polarToCartesian(entry.cx, entry.cy, entry.outerRadius + offsetRadius, midAngle);
            var labelProps = __assign(__assign(__assign(__assign(__assign(__assign({}, pieProps), entry), { stroke: 'none' }), customLabelProps), { index: i, textAnchor: Pie.getTextAnchor(endPoint.x, entry.cx) }), endPoint);
            var lineProps = __assign(__assign(__assign(__assign(__assign({}, pieProps), entry), { fill: 'none', stroke: entry.fill }), customLabelLineProps), { index: i, points: [PolarUtils_1.polarToCartesian(entry.cx, entry.cy, entry.outerRadius, midAngle), endPoint], key: 'line' });
            var realDataKey = dataKey;
            if (lodash_1.default.isNil(dataKey) && lodash_1.default.isNil(valueKey)) {
                realDataKey = 'value';
            }
            else if (lodash_1.default.isNil(dataKey)) {
                realDataKey = valueKey;
            }
            return (react_1.default.createElement(Layer_1.Layer, { key: "label-" + i },
                labelLine && Pie.renderLabelLineItem(labelLine, lineProps),
                Pie.renderLabelItem(label, labelProps, ChartUtils_1.getValueByDataKey(entry, realDataKey))));
        });
        return react_1.default.createElement(Layer_1.Layer, { className: "recharts-pie-labels" }, labels);
    };
    Pie.renderSectorItem = function (option, props) {
        if (react_1.default.isValidElement(option)) {
            return react_1.default.cloneElement(option, props);
        }
        if (lodash_1.default.isFunction(option)) {
            return option(props);
        }
        if (lodash_1.default.isPlainObject(option)) {
            return react_1.default.createElement(Sector_1.Sector, __assign({}, props, option));
        }
        return react_1.default.createElement(Sector_1.Sector, __assign({}, props));
    };
    Pie.prototype.renderSectorsStatically = function (sectors) {
        var _this = this;
        var _a = this.props, activeShape = _a.activeShape, blendStroke = _a.blendStroke;
        return sectors.map(function (entry, i) {
            var sectorOptions = _this.isActiveIndex(i) ? activeShape : null;
            var sectorProps = __assign(__assign({}, entry), { stroke: blendStroke ? entry.fill : entry.stroke });
            return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-pie-sector" }, types_1.adaptEventsOfChild(_this.props, entry, i), { key: "sector-" + i }), Pie.renderSectorItem(sectorOptions, sectorProps)));
        });
    };
    Pie.prototype.renderSectorsWithAnimation = function () {
        var _this = this;
        var _a = this.props, sectors = _a.sectors, isAnimationActive = _a.isAnimationActive, animationBegin = _a.animationBegin, animationDuration = _a.animationDuration, animationEasing = _a.animationEasing, animationId = _a.animationId;
        var _b = this.state, prevSectors = _b.prevSectors, prevIsAnimationActive = _b.prevIsAnimationActive;
        return (react_1.default.createElement(react_smooth_1.default, { begin: animationBegin, duration: animationDuration, isActive: isAnimationActive, easing: animationEasing, from: { t: 0 }, to: { t: 1 }, key: "pie-" + animationId + "-" + prevIsAnimationActive, onAnimationStart: this.handleAnimationStart, onAnimationEnd: this.handleAnimationEnd }, function (_a) {
            var t = _a.t;
            var stepData = [];
            var first = sectors && sectors[0];
            var curAngle = first.startAngle;
            sectors.forEach(function (entry, index) {
                var prev = prevSectors && prevSectors[index];
                var paddingAngle = index > 0 ? lodash_1.default.get(entry, 'paddingAngle', 0) : 0;
                if (prev) {
                    var angleIp = DataUtils_1.interpolateNumber(prev.endAngle - prev.startAngle, entry.endAngle - entry.startAngle);
                    var latest = __assign(__assign({}, entry), { startAngle: curAngle + paddingAngle, endAngle: curAngle + angleIp(t) + paddingAngle });
                    stepData.push(latest);
                    curAngle = latest.endAngle;
                }
                else {
                    var endAngle = entry.endAngle, startAngle = entry.startAngle;
                    var interpolatorAngle = DataUtils_1.interpolateNumber(0, endAngle - startAngle);
                    var deltaAngle = interpolatorAngle(t);
                    var latest = __assign(__assign({}, entry), { startAngle: curAngle + paddingAngle, endAngle: curAngle + deltaAngle + paddingAngle });
                    stepData.push(latest);
                    curAngle = latest.endAngle;
                }
            });
            return react_1.default.createElement(Layer_1.Layer, null, _this.renderSectorsStatically(stepData));
        }));
    };
    Pie.prototype.renderSectors = function () {
        var _a = this.props, sectors = _a.sectors, isAnimationActive = _a.isAnimationActive;
        var prevSectors = this.state.prevSectors;
        if (isAnimationActive && sectors && sectors.length && (!prevSectors || !lodash_1.default.isEqual(prevSectors, sectors))) {
            return this.renderSectorsWithAnimation();
        }
        return this.renderSectorsStatically(sectors);
    };
    Pie.prototype.render = function () {
        var _a = this.props, hide = _a.hide, sectors = _a.sectors, className = _a.className, label = _a.label, cx = _a.cx, cy = _a.cy, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, isAnimationActive = _a.isAnimationActive;
        var isAnimationFinished = this.state.isAnimationFinished;
        if (hide ||
            !sectors ||
            !sectors.length ||
            !DataUtils_1.isNumber(cx) ||
            !DataUtils_1.isNumber(cy) ||
            !DataUtils_1.isNumber(innerRadius) ||
            !DataUtils_1.isNumber(outerRadius)) {
            return null;
        }
        var layerClass = classnames_1.default('recharts-pie', className);
        return (react_1.default.createElement(Layer_1.Layer, { className: layerClass },
            this.renderSectors(),
            label && this.renderLabels(sectors),
            Label_1.Label.renderCallByParent(this.props, null, false),
            (!isAnimationActive || isAnimationFinished) && LabelList_1.LabelList.renderCallByParent(this.props, sectors, false)));
    };
    Pie.displayName = 'Pie';
    Pie.defaultProps = {
        stroke: '#fff',
        fill: '#808080',
        legendType: 'rect',
        cx: '50%',
        cy: '50%',
        startAngle: 0,
        endAngle: 360,
        innerRadius: 0,
        outerRadius: '80%',
        paddingAngle: 0,
        labelLine: true,
        hide: false,
        minAngle: 0,
        isAnimationActive: !Global_1.Global.isSsr,
        animationBegin: 400,
        animationDuration: 1500,
        animationEasing: 'ease',
        nameKey: 'name',
        blendStroke: false,
    };
    Pie.parseDeltaAngle = function (startAngle, endAngle) {
        var sign = DataUtils_1.mathSign(endAngle - startAngle);
        var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
        return sign * deltaAngle;
    };
    Pie.getRealPieData = function (item) {
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
    Pie.parseCoordinateOfPie = function (item, offset) {
        var top = offset.top, left = offset.left, width = offset.width, height = offset.height;
        var maxPieRadius = PolarUtils_1.getMaxRadius(width, height);
        var cx = left + DataUtils_1.getPercentValue(item.props.cx, width, width / 2);
        var cy = top + DataUtils_1.getPercentValue(item.props.cy, height, height / 2);
        var innerRadius = DataUtils_1.getPercentValue(item.props.innerRadius, maxPieRadius, 0);
        var outerRadius = DataUtils_1.getPercentValue(item.props.outerRadius, maxPieRadius, maxPieRadius * 0.8);
        var maxRadius = item.props.maxRadius || Math.sqrt(width * width + height * height) / 2;
        return { cx: cx, cy: cy, innerRadius: innerRadius, outerRadius: outerRadius, maxRadius: maxRadius };
    };
    Pie.getComposedData = function (_a) {
        var item = _a.item, offset = _a.offset;
        var pieData = Pie.getRealPieData(item);
        if (!pieData || !pieData.length) {
            return null;
        }
        var _b = item.props, cornerRadius = _b.cornerRadius, startAngle = _b.startAngle, endAngle = _b.endAngle, paddingAngle = _b.paddingAngle, dataKey = _b.dataKey, nameKey = _b.nameKey, valueKey = _b.valueKey, tooltipType = _b.tooltipType;
        var minAngle = Math.abs(item.props.minAngle);
        var coordinate = Pie.parseCoordinateOfPie(item, offset);
        var deltaAngle = Pie.parseDeltaAngle(startAngle, endAngle);
        var absDeltaAngle = Math.abs(deltaAngle);
        var realDataKey = dataKey;
        if (lodash_1.default.isNil(dataKey) && lodash_1.default.isNil(valueKey)) {
            LogUtils_1.warn(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
            realDataKey = 'value';
        }
        else if (lodash_1.default.isNil(dataKey)) {
            LogUtils_1.warn(false, "Use \"dataKey\" to specify the value of pie,\n      the props \"valueKey\" will be deprecated in 1.1.0");
            realDataKey = valueKey;
        }
        var notZeroItemCount = pieData.filter(function (entry) { return ChartUtils_1.getValueByDataKey(entry, realDataKey, 0) !== 0; }).length;
        var totalPadingAngle = (absDeltaAngle >= 360 ? notZeroItemCount : notZeroItemCount - 1) * paddingAngle;
        var realTotalAngle = absDeltaAngle - notZeroItemCount * minAngle - totalPadingAngle;
        var sum = pieData.reduce(function (result, entry) {
            var val = ChartUtils_1.getValueByDataKey(entry, realDataKey, 0);
            return result + (DataUtils_1.isNumber(val) ? val : 0);
        }, 0);
        var sectors;
        if (sum > 0) {
            var prev_1;
            sectors = pieData.map(function (entry, i) {
                var val = ChartUtils_1.getValueByDataKey(entry, realDataKey, 0);
                var name = ChartUtils_1.getValueByDataKey(entry, nameKey, i);
                var percent = (DataUtils_1.isNumber(val) ? val : 0) / sum;
                var tempStartAngle;
                if (i) {
                    tempStartAngle = prev_1.endAngle + DataUtils_1.mathSign(deltaAngle) * paddingAngle * (val !== 0 ? 1 : 0);
                }
                else {
                    tempStartAngle = startAngle;
                }
                var tempEndAngle = tempStartAngle + DataUtils_1.mathSign(deltaAngle) * ((val !== 0 ? minAngle : 0) + percent * realTotalAngle);
                var midAngle = (tempStartAngle + tempEndAngle) / 2;
                var middleRadius = (coordinate.innerRadius + coordinate.outerRadius) / 2;
                var tooltipPayload = [
                    {
                        name: name,
                        value: val,
                        payload: entry,
                        dataKey: realDataKey,
                        type: tooltipType,
                    },
                ];
                var tooltipPosition = PolarUtils_1.polarToCartesian(coordinate.cx, coordinate.cy, middleRadius, midAngle);
                prev_1 = __assign(__assign(__assign({ percent: percent,
                    cornerRadius: cornerRadius,
                    name: name,
                    tooltipPayload: tooltipPayload,
                    midAngle: midAngle,
                    middleRadius: middleRadius,
                    tooltipPosition: tooltipPosition }, entry), coordinate), { value: ChartUtils_1.getValueByDataKey(entry, realDataKey), startAngle: tempStartAngle, endAngle: tempEndAngle, payload: entry, paddingAngle: DataUtils_1.mathSign(deltaAngle) * paddingAngle });
                return prev_1;
            });
        }
        return __assign(__assign({}, coordinate), { sectors: sectors, data: pieData });
    };
    return Pie;
}(react_1.PureComponent));
exports.Pie = Pie;
//# sourceMappingURL=Pie.js.map