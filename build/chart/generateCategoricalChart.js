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
exports.generateCategoricalChart = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importStar(require("lodash"));
var Surface_1 = require("../container/Surface");
var Layer_1 = require("../container/Layer");
var Tooltip_1 = require("../component/Tooltip");
var Legend_1 = require("../component/Legend");
var Curve_1 = require("../shape/Curve");
var Cross_1 = require("../shape/Cross");
var Sector_1 = require("../shape/Sector");
var Dot_1 = require("../shape/Dot");
var Rectangle_1 = require("../shape/Rectangle");
var ReactUtils_1 = require("../util/ReactUtils");
var CartesianAxis_1 = require("../cartesian/CartesianAxis");
var Brush_1 = require("../cartesian/Brush");
var DOMUtils_1 = require("../util/DOMUtils");
var DataUtils_1 = require("../util/DataUtils");
var ChartUtils_1 = require("../util/ChartUtils");
var DetectReferenceElementsDomain_1 = require("../util/DetectReferenceElementsDomain");
var PolarUtils_1 = require("../util/PolarUtils");
var ShallowEqual_1 = require("../util/ShallowEqual");
var Events_1 = require("../util/Events");
var types_1 = require("../util/types");
var ORIENT_MAP = {
    xAxis: ['bottom', 'top'],
    yAxis: ['left', 'right'],
};
var originCoordinate = { x: 0, y: 0 };
var isFinit = Number.isFinite ? Number.isFinite : isFinite;
var defer = typeof requestAnimationFrame === 'function'
    ? requestAnimationFrame
    : typeof setImmediate === 'function'
        ? setImmediate
        : setTimeout;
var deferClear = typeof cancelAnimationFrame === 'function'
    ? cancelAnimationFrame
    : typeof clearImmediate === 'function'
        ? clearImmediate
        : clearTimeout;
var calculateTooltipPos = function (rangeObj, layout) {
    if (layout === 'horizontal') {
        return rangeObj.x;
    }
    if (layout === 'vertical') {
        return rangeObj.y;
    }
    if (layout === 'centric') {
        return rangeObj.angle;
    }
    return rangeObj.radius;
};
var getActiveCoordinate = function (layout, tooltipTicks, activeIndex, rangeObj) {
    var entry = tooltipTicks.find(function (tick) { return tick && tick.index === activeIndex; });
    if (entry) {
        if (layout === 'horizontal') {
            return { x: entry.coordinate, y: rangeObj.y };
        }
        if (layout === 'vertical') {
            return { x: rangeObj.x, y: entry.coordinate };
        }
        if (layout === 'centric') {
            var angle_1 = entry.coordinate;
            var radius_1 = rangeObj.radius;
            return __assign(__assign(__assign({}, rangeObj), PolarUtils_1.polarToCartesian(rangeObj.cx, rangeObj.cy, radius_1, angle_1)), { angle: angle_1,
                radius: radius_1 });
        }
        var radius = entry.coordinate;
        var angle = rangeObj.angle;
        return __assign(__assign(__assign({}, rangeObj), PolarUtils_1.polarToCartesian(rangeObj.cx, rangeObj.cy, radius, angle)), { angle: angle,
            radius: radius });
    }
    return originCoordinate;
};
var getDisplayedData = function (data, _a, item) {
    var graphicalItems = _a.graphicalItems, dataStartIndex = _a.dataStartIndex, dataEndIndex = _a.dataEndIndex;
    var itemsData = (graphicalItems || []).reduce(function (result, child) {
        var itemData = child.props.data;
        if (itemData && itemData.length) {
            return __spreadArray(__spreadArray([], result), itemData);
        }
        return result;
    }, []);
    if (itemsData && itemsData.length > 0) {
        return itemsData;
    }
    if (item && item.props && item.props.data && item.props.data.length > 0) {
        return item.props.data;
    }
    if (data && data.length && DataUtils_1.isNumber(dataStartIndex) && DataUtils_1.isNumber(dataEndIndex)) {
        return data.slice(dataStartIndex, dataEndIndex + 1);
    }
    return [];
};
var getTooltipContent = function (state, chartData, activeIndex, activeLabel) {
    var graphicalItems = state.graphicalItems, tooltipAxis = state.tooltipAxis;
    var displayedData = getDisplayedData(chartData, state);
    if (activeIndex < 0 || !graphicalItems || !graphicalItems.length || activeIndex >= displayedData.length) {
        return null;
    }
    return graphicalItems.reduce(function (result, child) {
        var hide = child.props.hide;
        if (hide) {
            return result;
        }
        var data = child.props.data;
        var payload;
        if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
            var entries = data === undefined ? displayedData : data;
            payload = DataUtils_1.findEntryInArray(entries, tooltipAxis.dataKey, activeLabel);
        }
        else {
            payload = (data && data[activeIndex]) || displayedData[activeIndex];
        }
        if (!payload) {
            return result;
        }
        return __spreadArray(__spreadArray([], result), [
            ChartUtils_1.getTooltipItem(child, payload),
        ]);
    }, []);
};
var getTooltipData = function (state, chartData, layout, rangeObj) {
    var rangeData = rangeObj || { x: state.chartX, y: state.chartY };
    var pos = calculateTooltipPos(rangeData, layout);
    var ticks = state.orderedTooltipTicks, axis = state.tooltipAxis, tooltipTicks = state.tooltipTicks;
    var activeIndex = ChartUtils_1.calculateActiveTickIndex(pos, ticks, tooltipTicks, axis);
    if (activeIndex >= 0 && tooltipTicks) {
        var activeLabel = tooltipTicks[activeIndex] && tooltipTicks[activeIndex].value;
        var activePayload = getTooltipContent(state, chartData, activeIndex, activeLabel);
        var activeCoordinate = getActiveCoordinate(layout, ticks, activeIndex, rangeData);
        return {
            activeTooltipIndex: activeIndex,
            activeLabel: activeLabel,
            activePayload: activePayload,
            activeCoordinate: activeCoordinate,
        };
    }
    return null;
};
var getAxisMapByAxes = function (props, _a) {
    var axes = _a.axes, graphicalItems = _a.graphicalItems, axisType = _a.axisType, axisIdKey = _a.axisIdKey, stackGroups = _a.stackGroups, dataStartIndex = _a.dataStartIndex, dataEndIndex = _a.dataEndIndex;
    var layout = props.layout, children = props.children, stackOffset = props.stackOffset;
    var isCategorical = ChartUtils_1.isCategoricalAxis(layout, axisType);
    var axisMap = axes.reduce(function (result, child) {
        var _a;
        var _b = child.props, type = _b.type, dataKey = _b.dataKey, allowDataOverflow = _b.allowDataOverflow, allowDuplicatedCategory = _b.allowDuplicatedCategory, scale = _b.scale, ticks = _b.ticks;
        var axisId = child.props[axisIdKey];
        var displayedData = getDisplayedData(props.data, {
            graphicalItems: graphicalItems.filter(function (item) { return item.props[axisIdKey] === axisId; }),
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
        });
        var len = displayedData.length;
        if (!result[axisId]) {
            var domain = void 0, duplicateDomain = void 0, categoricalDomain = void 0;
            if (dataKey) {
                domain = ChartUtils_1.getDomainOfDataByKey(displayedData, dataKey, type);
                if (type === 'category' && isCategorical) {
                    var duplicate = DataUtils_1.hasDuplicate(domain);
                    if (allowDuplicatedCategory && duplicate) {
                        duplicateDomain = domain;
                        domain = lodash_1.default.range(0, len);
                    }
                    else if (!allowDuplicatedCategory) {
                        domain = ChartUtils_1.parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
                            return finalDomain.indexOf(entry) >= 0 ? finalDomain : __spreadArray(__spreadArray([], finalDomain), [entry]);
                        }, []);
                    }
                }
                else if (type === 'category') {
                    if (!allowDuplicatedCategory) {
                        domain = ChartUtils_1.parseDomainOfCategoryAxis(child.props.domain, domain, child).reduce(function (finalDomain, entry) {
                            return finalDomain.indexOf(entry) >= 0 || entry === '' || lodash_1.default.isNil(entry)
                                ? finalDomain
                                : __spreadArray(__spreadArray([], finalDomain), [entry]);
                        }, []);
                    }
                    else {
                        domain = domain.filter(function (entry) { return entry !== '' && !lodash_1.default.isNil(entry); });
                    }
                }
                else if (type === 'number') {
                    var errorBarsDomain = ChartUtils_1.parseErrorBarsOfAxis(displayedData, graphicalItems.filter(function (item) { return item.props[axisIdKey] === axisId && !item.props.hide; }), dataKey, axisType);
                    if (errorBarsDomain) {
                        domain = errorBarsDomain;
                    }
                }
                if (isCategorical && (type === 'number' || scale !== 'auto')) {
                    categoricalDomain = ChartUtils_1.getDomainOfDataByKey(displayedData, dataKey, 'category');
                }
            }
            else if (isCategorical) {
                domain = lodash_1.default.range(0, len);
            }
            else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack && type === 'number') {
                domain =
                    stackOffset === 'expand'
                        ? [0, 1]
                        : ChartUtils_1.getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
            }
            else {
                domain = ChartUtils_1.getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) { return item.props[axisIdKey] === axisId && !item.props.hide; }), type, true);
            }
            if (type === 'number') {
                domain = DetectReferenceElementsDomain_1.detectReferenceElementsDomain(children, domain, axisId, axisType, ticks);
                if (child.props.domain) {
                    domain = ChartUtils_1.parseSpecifiedDomain(child.props.domain, domain, allowDataOverflow);
                }
            }
            else if (type === 'category' && child.props.domain) {
                var axisDomain_1 = child.props.domain;
                var isDomainValidate = domain.every(function (entry) { return axisDomain_1.indexOf(entry) >= 0; });
                if (isDomainValidate) {
                    domain = axisDomain_1;
                }
            }
            return __assign(__assign({}, result), (_a = {}, _a[axisId] = __assign(__assign({}, child.props), { axisType: axisType,
                domain: domain,
                categoricalDomain: categoricalDomain,
                duplicateDomain: duplicateDomain, originalDomain: child.props.domain, isCategorical: isCategorical,
                layout: layout }), _a));
        }
        return result;
    }, {});
    return axisMap;
};
var getAxisMapByItems = function (props, _a) {
    var graphicalItems = _a.graphicalItems, Axis = _a.Axis, axisType = _a.axisType, axisIdKey = _a.axisIdKey, stackGroups = _a.stackGroups, dataStartIndex = _a.dataStartIndex, dataEndIndex = _a.dataEndIndex;
    var layout = props.layout, children = props.children;
    var displayedData = getDisplayedData(props.data, {
        graphicalItems: graphicalItems,
        dataStartIndex: dataStartIndex,
        dataEndIndex: dataEndIndex,
    });
    var len = displayedData.length;
    var isCategorical = ChartUtils_1.isCategoricalAxis(layout, axisType);
    var index = -1;
    var axisMap = graphicalItems.reduce(function (result, child) {
        var _a;
        var axisId = child.props[axisIdKey];
        if (!result[axisId]) {
            index++;
            var domain = void 0;
            if (isCategorical) {
                domain = lodash_1.default.range(0, len);
            }
            else if (stackGroups && stackGroups[axisId] && stackGroups[axisId].hasStack) {
                domain = ChartUtils_1.getDomainOfStackGroups(stackGroups[axisId].stackGroups, dataStartIndex, dataEndIndex);
                domain = DetectReferenceElementsDomain_1.detectReferenceElementsDomain(children, domain, axisId, axisType);
            }
            else {
                domain = ChartUtils_1.parseSpecifiedDomain(Axis.defaultProps.domain, ChartUtils_1.getDomainOfItemsWithSameAxis(displayedData, graphicalItems.filter(function (item) { return item.props[axisIdKey] === axisId && !item.props.hide; }), 'number'), Axis.defaultProps.allowDataOverflow);
                domain = DetectReferenceElementsDomain_1.detectReferenceElementsDomain(children, domain, axisId, axisType);
            }
            return __assign(__assign({}, result), (_a = {}, _a[axisId] = __assign(__assign({ axisType: axisType }, Axis.defaultProps), { hide: true, orientation: lodash_1.default.get(ORIENT_MAP, axisType + "." + index % 2, null), domain: domain, originalDomain: Axis.defaultProps.domain, isCategorical: isCategorical,
                layout: layout }), _a));
        }
        return result;
    }, {});
    return axisMap;
};
var getAxisMap = function (props, _a) {
    var _b = _a.axisType, axisType = _b === void 0 ? 'xAxis' : _b, AxisComp = _a.AxisComp, graphicalItems = _a.graphicalItems, stackGroups = _a.stackGroups, dataStartIndex = _a.dataStartIndex, dataEndIndex = _a.dataEndIndex;
    var children = props.children;
    var axisIdKey = axisType + "Id";
    var axes = ReactUtils_1.findAllByType(children, AxisComp);
    var axisMap = {};
    if (axes && axes.length) {
        axisMap = getAxisMapByAxes(props, {
            axes: axes,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
        });
    }
    else if (graphicalItems && graphicalItems.length) {
        axisMap = getAxisMapByItems(props, {
            Axis: AxisComp,
            graphicalItems: graphicalItems,
            axisType: axisType,
            axisIdKey: axisIdKey,
            stackGroups: stackGroups,
            dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
        });
    }
    return axisMap;
};
var tooltipTicksGenerator = function (axisMap) {
    var axis = DataUtils_1.getAnyElementOfObject(axisMap);
    var tooltipTicks = ChartUtils_1.getTicksOfAxis(axis, false, true);
    return {
        tooltipTicks: tooltipTicks,
        orderedTooltipTicks: lodash_1.default.sortBy(tooltipTicks, function (o) { return o.coordinate; }),
        tooltipAxis: axis,
        tooltipAxisBandSize: ChartUtils_1.getBandSizeOfAxis(axis),
    };
};
var createDefaultState = function (props) {
    var children = props.children, defaultShowTooltip = props.defaultShowTooltip;
    var brushItem = ReactUtils_1.findChildByType(children, Brush_1.Brush.displayName);
    var startIndex = (brushItem && brushItem.props && brushItem.props.startIndex) || 0;
    var endIndex = (brushItem && brushItem.props && brushItem.props.endIndex) || (props.data && props.data.length - 1) || 0;
    return {
        chartX: 0,
        chartY: 0,
        dataStartIndex: startIndex,
        dataEndIndex: endIndex,
        activeTooltipIndex: -1,
        isTooltipActive: !lodash_1.default.isNil(defaultShowTooltip) ? defaultShowTooltip : false,
    };
};
var hasGraphicalBarItem = function (graphicalItems) {
    if (!graphicalItems || !graphicalItems.length) {
        return false;
    }
    return graphicalItems.some(function (item) {
        var name = ReactUtils_1.getDisplayName(item && item.type);
        return name && name.indexOf('Bar') >= 0;
    });
};
var getAxisNameByLayout = function (layout) {
    if (layout === 'horizontal') {
        return { numericAxisName: 'yAxis', cateAxisName: 'xAxis' };
    }
    if (layout === 'vertical') {
        return { numericAxisName: 'xAxis', cateAxisName: 'yAxis' };
    }
    if (layout === 'centric') {
        return { numericAxisName: 'radiusAxis', cateAxisName: 'angleAxis' };
    }
    return { numericAxisName: 'angleAxis', cateAxisName: 'radiusAxis' };
};
var calculateOffset = function (_a, prevLegendBBox) {
    var props = _a.props, graphicalItems = _a.graphicalItems, _b = _a.xAxisMap, xAxisMap = _b === void 0 ? {} : _b, _c = _a.yAxisMap, yAxisMap = _c === void 0 ? {} : _c;
    var width = props.width, height = props.height, children = props.children;
    var margin = props.margin || {};
    var brushItem = ReactUtils_1.findChildByType(children, Brush_1.Brush.displayName);
    var legendItem = ReactUtils_1.findChildByType(children, Legend_1.Legend.displayName);
    var offsetH = Object.keys(yAxisMap).reduce(function (result, id) {
        var _a;
        var entry = yAxisMap[id];
        var orientation = entry.orientation;
        if (!entry.mirror && !entry.hide) {
            return __assign(__assign({}, result), (_a = {}, _a[orientation] = result[orientation] + entry.width, _a));
        }
        return result;
    }, { left: margin.left || 0, right: margin.right || 0 });
    var offsetV = Object.keys(xAxisMap).reduce(function (result, id) {
        var _a;
        var entry = xAxisMap[id];
        var orientation = entry.orientation;
        if (!entry.mirror && !entry.hide) {
            return __assign(__assign({}, result), (_a = {}, _a[orientation] = lodash_1.default.get(result, "" + orientation) + entry.height, _a));
        }
        return result;
    }, { top: margin.top || 0, bottom: margin.bottom || 0 });
    var offset = __assign(__assign({}, offsetV), offsetH);
    var brushBottom = offset.bottom;
    if (brushItem) {
        offset.bottom += brushItem.props.height || Brush_1.Brush.defaultProps.height;
    }
    if (legendItem && prevLegendBBox) {
        offset = ChartUtils_1.appendOffsetOfLegend(offset, graphicalItems, props, prevLegendBBox);
    }
    return __assign(__assign({ brushBottom: brushBottom }, offset), { width: width - offset.left - offset.right, height: height - offset.top - offset.bottom });
};
var generateCategoricalChart = function (_a) {
    var _b;
    var chartName = _a.chartName, GraphicalChild = _a.GraphicalChild, _c = _a.defaultTooltipEventType, defaultTooltipEventType = _c === void 0 ? 'axis' : _c, _d = _a.validateTooltipEventTypes, validateTooltipEventTypes = _d === void 0 ? ['axis'] : _d, axisComponents = _a.axisComponents, legendContent = _a.legendContent, formatAxisMap = _a.formatAxisMap, defaultProps = _a.defaultProps;
    var getFormatItems = function (props, currentState) {
        var graphicalItems = currentState.graphicalItems, stackGroups = currentState.stackGroups, offset = currentState.offset, updateId = currentState.updateId, dataStartIndex = currentState.dataStartIndex, dataEndIndex = currentState.dataEndIndex;
        var barSize = props.barSize, layout = props.layout, barGap = props.barGap, barCategoryGap = props.barCategoryGap, globalMaxBarSize = props.maxBarSize;
        var _a = getAxisNameByLayout(layout), numericAxisName = _a.numericAxisName, cateAxisName = _a.cateAxisName;
        var hasBar = hasGraphicalBarItem(graphicalItems);
        var sizeList = hasBar && ChartUtils_1.getBarSizeList({ barSize: barSize, stackGroups: stackGroups });
        var formatedItems = [];
        graphicalItems.forEach(function (item, index) {
            var _a;
            var displayedData = getDisplayedData(props.data, { dataStartIndex: dataStartIndex, dataEndIndex: dataEndIndex }, item);
            var _b = item.props, dataKey = _b.dataKey, childMaxBarSize = _b.maxBarSize;
            var numericAxisId = item.props[numericAxisName + "Id"];
            var cateAxisId = item.props[cateAxisName + "Id"];
            var axisObj = axisComponents.reduce(function (result, entry) {
                var _a;
                var axisMap = currentState[entry.axisType + "Map"];
                var id = item.props[entry.axisType + "Id"];
                var axis = axisMap && axisMap[id];
                return __assign(__assign({}, result), (_a = {}, _a[entry.axisType] = axis, _a[entry.axisType + "Ticks"] = ChartUtils_1.getTicksOfAxis(axis), _a));
            }, {});
            var cateAxis = axisObj[cateAxisName];
            var cateTicks = axisObj[cateAxisName + "Ticks"];
            var stackedData = stackGroups &&
                stackGroups[numericAxisId] &&
                stackGroups[numericAxisId].hasStack &&
                ChartUtils_1.getStackedDataOfItem(item, stackGroups[numericAxisId].stackGroups);
            var itemIsBar = ReactUtils_1.getDisplayName(item.type).indexOf('Bar') >= 0;
            var bandSize = ChartUtils_1.getBandSizeOfAxis(cateAxis, cateTicks);
            var barPosition = [];
            if (itemIsBar) {
                var barBandSize_1 = ChartUtils_1.getBandSizeOfAxis(cateAxis, cateTicks, true);
                var maxBarSize = lodash_1.default.isNil(childMaxBarSize) ? globalMaxBarSize : childMaxBarSize;
                barPosition = ChartUtils_1.getBarPosition({
                    barGap: barGap,
                    barCategoryGap: barCategoryGap,
                    bandSize: barBandSize_1 !== bandSize ? barBandSize_1 : bandSize,
                    sizeList: sizeList[cateAxisId],
                    maxBarSize: maxBarSize,
                });
                if (barBandSize_1 !== bandSize) {
                    barPosition = barPosition.map(function (pos) { return (__assign(__assign({}, pos), { position: __assign(__assign({}, pos.position), { offset: pos.position.offset - barBandSize_1 / 2 }) })); });
                }
            }
            var componsedFn = item && item.type && item.type.getComposedData;
            if (componsedFn) {
                formatedItems.push({
                    props: __assign(__assign({}, componsedFn(__assign(__assign({}, axisObj), { displayedData: displayedData,
                        props: props,
                        dataKey: dataKey,
                        item: item,
                        bandSize: bandSize,
                        barPosition: barPosition,
                        offset: offset,
                        stackedData: stackedData,
                        layout: layout,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex }))), (_a = { key: item.key || "item-" + index }, _a[numericAxisName] = axisObj[numericAxisName], _a[cateAxisName] = axisObj[cateAxisName], _a.animationId = updateId, _a)),
                    childIndex: ReactUtils_1.parseChildIndex(item, props.children),
                    item: item,
                });
            }
        });
        return formatedItems;
    };
    var updateStateOfAxisMapsOffsetAndStackGroups = function (_a, prevState) {
        var props = _a.props, dataStartIndex = _a.dataStartIndex, dataEndIndex = _a.dataEndIndex, updateId = _a.updateId;
        if (!ReactUtils_1.validateWidthHeight({ props: props })) {
            return null;
        }
        var children = props.children, layout = props.layout, stackOffset = props.stackOffset, data = props.data, reverseStackOrder = props.reverseStackOrder;
        var _b = getAxisNameByLayout(layout), numericAxisName = _b.numericAxisName, cateAxisName = _b.cateAxisName;
        var graphicalItems = ReactUtils_1.findAllByType(children, GraphicalChild);
        var stackGroups = ChartUtils_1.getStackGroupsByAxisId(data, graphicalItems, numericAxisName + "Id", cateAxisName + "Id", stackOffset, reverseStackOrder);
        var axisObj = axisComponents.reduce(function (result, entry) {
            var _a;
            var name = entry.axisType + "Map";
            return __assign(__assign({}, result), (_a = {}, _a[name] = getAxisMap(props, __assign(__assign({}, entry), { graphicalItems: graphicalItems, stackGroups: entry.axisType === numericAxisName && stackGroups, dataStartIndex: dataStartIndex,
                dataEndIndex: dataEndIndex })), _a));
        }, {});
        var offset = calculateOffset(__assign(__assign({}, axisObj), { props: props, graphicalItems: graphicalItems }), prevState === null || prevState === void 0 ? void 0 : prevState.legendBBox);
        Object.keys(axisObj).forEach(function (key) {
            axisObj[key] = formatAxisMap(props, axisObj[key], offset, key.replace('Map', ''), chartName);
        });
        var cateAxisMap = axisObj[cateAxisName + "Map"];
        var ticksObj = tooltipTicksGenerator(cateAxisMap);
        var formatedGraphicalItems = getFormatItems(props, __assign(__assign({}, axisObj), { dataStartIndex: dataStartIndex,
            dataEndIndex: dataEndIndex,
            updateId: updateId,
            graphicalItems: graphicalItems,
            stackGroups: stackGroups,
            offset: offset }));
        return __assign(__assign({ formatedGraphicalItems: formatedGraphicalItems,
            graphicalItems: graphicalItems,
            offset: offset,
            stackGroups: stackGroups }, ticksObj), axisObj);
    };
    return _b = (function (_super) {
            __extends(CategoricalChartWrapper, _super);
            function CategoricalChartWrapper(props) {
                var _this = _super.call(this, props) || this;
                _this.clearDeferId = function () {
                    if (!lodash_1.isNil(_this.deferId) && deferClear) {
                        deferClear(_this.deferId);
                    }
                    _this.deferId = null;
                };
                _this.handleLegendBBoxUpdate = function (box) {
                    if (box && _this.legendInstance) {
                        var _a = _this.state, dataStartIndex = _a.dataStartIndex, dataEndIndex = _a.dataEndIndex, updateId = _a.updateId;
                        _this.setState(__assign({ legendBBox: box }, updateStateOfAxisMapsOffsetAndStackGroups({
                            props: _this.props,
                            dataStartIndex: dataStartIndex,
                            dataEndIndex: dataEndIndex,
                            updateId: updateId,
                        }, __assign(__assign({}, _this.state), { legendBBox: box }))));
                    }
                };
                _this.handleReceiveSyncEvent = function (cId, chartId, data) {
                    var syncId = _this.props.syncId;
                    if (syncId === cId && chartId !== _this.uniqueChartId) {
                        _this.clearDeferId();
                        _this.deferId = defer && defer(_this.applySyncEvent.bind(_this, data));
                    }
                };
                _this.handleBrushChange = function (_a) {
                    var startIndex = _a.startIndex, endIndex = _a.endIndex;
                    if (startIndex !== _this.state.dataStartIndex || endIndex !== _this.state.dataEndIndex) {
                        var updateId_1 = _this.state.updateId;
                        _this.setState(function () { return (__assign({ dataStartIndex: startIndex, dataEndIndex: endIndex }, updateStateOfAxisMapsOffsetAndStackGroups({
                            props: _this.props,
                            dataStartIndex: startIndex,
                            dataEndIndex: endIndex,
                            updateId: updateId_1,
                        }, _this.state))); });
                        _this.triggerSyncEvent({
                            dataStartIndex: startIndex,
                            dataEndIndex: endIndex,
                        });
                    }
                };
                _this.handleMouseEnter = function (e) {
                    var onMouseEnter = _this.props.onMouseEnter;
                    var mouse = _this.getMouseInfo(e);
                    if (mouse) {
                        var nextState = __assign(__assign({}, mouse), { isTooltipActive: true });
                        _this.setState(nextState);
                        _this.triggerSyncEvent(nextState);
                        if (lodash_1.default.isFunction(onMouseEnter)) {
                            onMouseEnter(nextState, e);
                        }
                    }
                };
                _this.triggeredAfterMouseMove = function (e) {
                    var onMouseMove = _this.props.onMouseMove;
                    var mouse = _this.getMouseInfo(e);
                    var nextState = mouse ? __assign(__assign({}, mouse), { isTooltipActive: true }) : { isTooltipActive: false };
                    _this.setState(nextState);
                    _this.triggerSyncEvent(nextState);
                    if (lodash_1.default.isFunction(onMouseMove)) {
                        onMouseMove(nextState, e);
                    }
                };
                _this.handleItemMouseEnter = function (el, index, e) {
                    _this.setState(function () { return ({
                        isTooltipActive: true,
                        activeItem: el,
                        activePayload: el.tooltipPayload,
                        activeCoordinate: el.tooltipPosition || { x: el.cx, y: el.cy },
                    }); });
                };
                _this.handleItemMouseLeave = function () {
                    _this.setState(function () { return ({
                        isTooltipActive: false,
                    }); });
                };
                _this.handleMouseMove = function (e) {
                    if (e && lodash_1.default.isFunction(e.persist)) {
                        e.persist();
                    }
                    _this.triggeredAfterMouseMove(e);
                };
                _this.handleMouseLeave = function (e) {
                    var onMouseLeave = _this.props.onMouseLeave;
                    var nextState = { isTooltipActive: false };
                    _this.setState(nextState);
                    _this.triggerSyncEvent(nextState);
                    if (lodash_1.default.isFunction(onMouseLeave)) {
                        onMouseLeave(nextState, e);
                    }
                    _this.cancelThrottledTriggerAfterMouseMove();
                };
                _this.handleOuterEvent = function (e) {
                    var eventName = ReactUtils_1.getReactEventByType(e);
                    var event = lodash_1.default.get(_this.props, "" + eventName);
                    if (eventName && lodash_1.default.isFunction(event)) {
                        var mouse = void 0;
                        if (/.*touch.*/i.test(eventName)) {
                            mouse = _this.getMouseInfo(e.changedTouches[0]);
                        }
                        else {
                            mouse = _this.getMouseInfo(e);
                        }
                        var handler = event;
                        handler(mouse, e);
                    }
                };
                _this.handleClick = function (e) {
                    var onClick = _this.props.onClick;
                    var mouse = _this.getMouseInfo(e);
                    if (mouse) {
                        var nextState = __assign(__assign({}, mouse), { isTooltipActive: true });
                        _this.setState(nextState);
                        _this.triggerSyncEvent(nextState);
                        if (lodash_1.default.isFunction(onClick)) {
                            onClick(nextState, e);
                        }
                    }
                };
                _this.handleMouseDown = function (e) {
                    var onMouseDown = _this.props.onMouseDown;
                    if (lodash_1.default.isFunction(onMouseDown)) {
                        var mouse = _this.getMouseInfo(e);
                        onMouseDown(mouse, e);
                    }
                };
                _this.handleMouseUp = function (e) {
                    var onMouseUp = _this.props.onMouseUp;
                    if (lodash_1.default.isFunction(onMouseUp)) {
                        var mouse = _this.getMouseInfo(e);
                        onMouseUp(mouse, e);
                    }
                };
                _this.handleTouchMove = function (e) {
                    if (e.changedTouches != null && e.changedTouches.length > 0) {
                        _this.handleMouseMove(e.changedTouches[0]);
                    }
                };
                _this.handleTouchStart = function (e) {
                    if (e.changedTouches != null && e.changedTouches.length > 0) {
                        _this.handleMouseDown(e.changedTouches[0]);
                    }
                };
                _this.handleTouchEnd = function (e) {
                    if (e.changedTouches != null && e.changedTouches.length > 0) {
                        _this.handleMouseUp(e.changedTouches[0]);
                    }
                };
                _this.verticalCoordinatesGenerator = function (_a) {
                    var xAxis = _a.xAxis, width = _a.width, height = _a.height, offset = _a.offset;
                    return ChartUtils_1.getCoordinatesOfGrid(CartesianAxis_1.CartesianAxis.getTicks(__assign(__assign(__assign({}, CartesianAxis_1.CartesianAxis.defaultProps), xAxis), { ticks: ChartUtils_1.getTicksOfAxis(xAxis, true), viewBox: { x: 0, y: 0, width: width, height: height } })), offset.left, offset.left + offset.width);
                };
                _this.horizontalCoordinatesGenerator = function (_a) {
                    var yAxis = _a.yAxis, width = _a.width, height = _a.height, offset = _a.offset;
                    return ChartUtils_1.getCoordinatesOfGrid(CartesianAxis_1.CartesianAxis.getTicks(__assign(__assign(__assign({}, CartesianAxis_1.CartesianAxis.defaultProps), yAxis), { ticks: ChartUtils_1.getTicksOfAxis(yAxis, true), viewBox: { x: 0, y: 0, width: width, height: height } })), offset.top, offset.top + offset.height);
                };
                _this.axesTicksGenerator = function (axis) { return ChartUtils_1.getTicksOfAxis(axis, true); };
                _this.renderCursor = function (element) {
                    var _a = _this.state, isTooltipActive = _a.isTooltipActive, activeCoordinate = _a.activeCoordinate, activePayload = _a.activePayload, offset = _a.offset, activeTooltipIndex = _a.activeTooltipIndex;
                    var tooltipEventType = _this.getTooltipEventType();
                    if (!element || !element.props.cursor || !isTooltipActive || !activeCoordinate || tooltipEventType !== 'axis') {
                        return null;
                    }
                    var layout = _this.props.layout;
                    var restProps;
                    var cursorComp = Curve_1.Curve;
                    if (chartName === 'ScatterChart') {
                        restProps = activeCoordinate;
                        cursorComp = Cross_1.Cross;
                    }
                    else if (chartName === 'BarChart') {
                        restProps = _this.getCursorRectangle();
                        cursorComp = Rectangle_1.Rectangle;
                    }
                    else if (layout === 'radial') {
                        var _b = _this.getCursorPoints(), cx = _b.cx, cy = _b.cy, radius = _b.radius, startAngle = _b.startAngle, endAngle = _b.endAngle;
                        restProps = {
                            cx: cx,
                            cy: cy,
                            startAngle: startAngle,
                            endAngle: endAngle,
                            innerRadius: radius,
                            outerRadius: radius,
                        };
                        cursorComp = Sector_1.Sector;
                    }
                    else {
                        restProps = { points: _this.getCursorPoints() };
                        cursorComp = Curve_1.Curve;
                    }
                    var key = element.key || '_recharts-cursor';
                    var cursorProps = __assign(__assign(__assign(__assign({ stroke: '#ccc', pointerEvents: 'none' }, offset), restProps), types_1.filterProps(element.props.cursor)), { payload: activePayload, payloadIndex: activeTooltipIndex, key: key, className: 'recharts-tooltip-cursor' });
                    return react_1.isValidElement(element.props.cursor)
                        ? react_1.cloneElement(element.props.cursor, cursorProps)
                        : react_1.createElement(cursorComp, cursorProps);
                };
                _this.renderPolarAxis = function (element, displayName, index) {
                    var axisType = lodash_1.default.get(element, 'type.axisType');
                    var axisMap = lodash_1.default.get(_this.state, axisType + "Map");
                    var axisOption = axisMap[element.props[axisType + "Id"]];
                    return react_1.cloneElement(element, __assign(__assign({}, axisOption), { className: axisType, key: element.key || displayName + "-" + index, ticks: ChartUtils_1.getTicksOfAxis(axisOption, true) }));
                };
                _this.renderXAxis = function (element, displayName, index) {
                    var xAxisMap = _this.state.xAxisMap;
                    var axisObj = xAxisMap[element.props.xAxisId];
                    return _this.renderAxis(axisObj, element, displayName, index);
                };
                _this.renderYAxis = function (element, displayName, index) {
                    var yAxisMap = _this.state.yAxisMap;
                    var axisObj = yAxisMap[element.props.yAxisId];
                    return _this.renderAxis(axisObj, element, displayName, index);
                };
                _this.renderGrid = function (element) {
                    var _a = _this.state, xAxisMap = _a.xAxisMap, yAxisMap = _a.yAxisMap, offset = _a.offset;
                    var _b = _this.props, width = _b.width, height = _b.height;
                    var xAxis = DataUtils_1.getAnyElementOfObject(xAxisMap);
                    var yAxisWithFiniteDomain = lodash_1.default.find(yAxisMap, function (axis) { return lodash_1.default.every(axis.domain, isFinit); });
                    var yAxis = yAxisWithFiniteDomain || DataUtils_1.getAnyElementOfObject(yAxisMap);
                    var props = element.props || {};
                    return react_1.cloneElement(element, {
                        key: element.key || 'grid',
                        x: DataUtils_1.isNumber(props.x) ? props.x : offset.left,
                        y: DataUtils_1.isNumber(props.y) ? props.y : offset.top,
                        width: DataUtils_1.isNumber(props.width) ? props.width : offset.width,
                        height: DataUtils_1.isNumber(props.height) ? props.height : offset.height,
                        xAxis: xAxis,
                        yAxis: yAxis,
                        offset: offset,
                        chartWidth: width,
                        chartHeight: height,
                        verticalCoordinatesGenerator: props.verticalCoordinatesGenerator || _this.verticalCoordinatesGenerator,
                        horizontalCoordinatesGenerator: props.horizontalCoordinatesGenerator || _this.horizontalCoordinatesGenerator,
                    });
                };
                _this.renderPolarGrid = function (element) {
                    var _a = element.props, radialLines = _a.radialLines, polarAngles = _a.polarAngles, polarRadius = _a.polarRadius;
                    var _b = _this.state, radiusAxisMap = _b.radiusAxisMap, angleAxisMap = _b.angleAxisMap;
                    var radiusAxis = DataUtils_1.getAnyElementOfObject(radiusAxisMap);
                    var angleAxis = DataUtils_1.getAnyElementOfObject(angleAxisMap);
                    var cx = angleAxis.cx, cy = angleAxis.cy, innerRadius = angleAxis.innerRadius, outerRadius = angleAxis.outerRadius;
                    var props = element.props || {};
                    return react_1.cloneElement(element, {
                        polarAngles: lodash_1.isArray(polarAngles) ? polarAngles : ChartUtils_1.getTicksOfAxis(angleAxis, true).map(function (entry) { return entry.coordinate; }),
                        polarRadius: lodash_1.isArray(polarRadius) ? polarRadius : ChartUtils_1.getTicksOfAxis(radiusAxis, true).map(function (entry) { return entry.coordinate; }),
                        cx: cx,
                        cy: cy,
                        innerRadius: innerRadius,
                        outerRadius: outerRadius,
                        key: element.key || 'polar-grid',
                        radialLines: radialLines,
                    });
                };
                _this.renderLegend = function () {
                    var formatedGraphicalItems = _this.state.formatedGraphicalItems;
                    var _a = _this.props, children = _a.children, width = _a.width, height = _a.height;
                    var margin = _this.props.margin || {};
                    var legendWidth = width - (margin.left || 0) - (margin.right || 0);
                    var props = ChartUtils_1.getLegendProps({
                        children: children,
                        formatedGraphicalItems: formatedGraphicalItems,
                        legendWidth: legendWidth,
                        legendContent: legendContent,
                    });
                    if (!props) {
                        return null;
                    }
                    var item = props.item, otherProps = __rest(props, ["item"]);
                    return react_1.cloneElement(item, __assign(__assign({}, otherProps), { chartWidth: width, chartHeight: height, margin: margin, ref: function (legend) {
                            _this.legendInstance = legend;
                        }, onBBoxUpdate: _this.handleLegendBBoxUpdate }));
                };
                _this.renderTooltip = function () {
                    var children = _this.props.children;
                    var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
                    if (!tooltipItem) {
                        return null;
                    }
                    var _a = _this.state, isTooltipActive = _a.isTooltipActive, activeCoordinate = _a.activeCoordinate, activePayload = _a.activePayload, activeLabel = _a.activeLabel, offset = _a.offset;
                    return react_1.cloneElement(tooltipItem, {
                        viewBox: __assign(__assign({}, offset), { x: offset.left, y: offset.top }),
                        active: isTooltipActive,
                        label: activeLabel,
                        payload: isTooltipActive ? activePayload : [],
                        coordinate: activeCoordinate,
                    });
                };
                _this.renderBrush = function (element) {
                    var _a = _this.props, margin = _a.margin, data = _a.data;
                    var _b = _this.state, offset = _b.offset, dataStartIndex = _b.dataStartIndex, dataEndIndex = _b.dataEndIndex, updateId = _b.updateId;
                    return react_1.cloneElement(element, {
                        key: element.key || '_recharts-brush',
                        onChange: ChartUtils_1.combineEventHandlers(_this.handleBrushChange, null, element.props.onChange),
                        data: data,
                        x: DataUtils_1.isNumber(element.props.x) ? element.props.x : offset.left,
                        y: DataUtils_1.isNumber(element.props.y)
                            ? element.props.y
                            : offset.top + offset.height + offset.brushBottom - (margin.bottom || 0),
                        width: DataUtils_1.isNumber(element.props.width) ? element.props.width : offset.width,
                        startIndex: dataStartIndex,
                        endIndex: dataEndIndex,
                        updateId: "brush-" + updateId,
                    });
                };
                _this.renderReferenceElement = function (element, displayName, index) {
                    if (!element) {
                        return null;
                    }
                    var clipPathId = _this.clipPathId;
                    var _a = _this.state, xAxisMap = _a.xAxisMap, yAxisMap = _a.yAxisMap, offset = _a.offset;
                    var _b = element.props, xAxisId = _b.xAxisId, yAxisId = _b.yAxisId;
                    return react_1.cloneElement(element, {
                        key: element.key || displayName + "-" + index,
                        xAxis: xAxisMap[xAxisId],
                        yAxis: yAxisMap[yAxisId],
                        viewBox: {
                            x: offset.left,
                            y: offset.top,
                            width: offset.width,
                            height: offset.height,
                        },
                        clipPathId: clipPathId,
                    });
                };
                _this.renderActivePoints = function (_a) {
                    var item = _a.item, activePoint = _a.activePoint, basePoint = _a.basePoint, childIndex = _a.childIndex, isRange = _a.isRange;
                    var result = [];
                    var key = item.props.key;
                    var _b = item.item.props, activeDot = _b.activeDot, dataKey = _b.dataKey;
                    var dotProps = __assign(__assign({ index: childIndex, dataKey: dataKey, cx: activePoint.x, cy: activePoint.y, r: 4, fill: ChartUtils_1.getMainColorOfGraphicItem(item.item), strokeWidth: 2, stroke: '#fff', payload: activePoint.payload, value: activePoint.value, key: key + "-activePoint-" + childIndex }, types_1.filterProps(activeDot)), types_1.adaptEventHandlers(activeDot));
                    result.push(CategoricalChartWrapper.renderActiveDot(activeDot, dotProps));
                    if (basePoint) {
                        result.push(CategoricalChartWrapper.renderActiveDot(activeDot, __assign(__assign({}, dotProps), { cx: basePoint.x, cy: basePoint.y, key: key + "-basePoint-" + childIndex })));
                    }
                    else if (isRange) {
                        result.push(null);
                    }
                    return result;
                };
                _this.renderGraphicChild = function (element, displayName, index) {
                    var item = _this.filterFormatItem(element, displayName, index);
                    if (!item) {
                        return null;
                    }
                    var tooltipEventType = _this.getTooltipEventType();
                    var _a = _this.state, isTooltipActive = _a.isTooltipActive, tooltipAxis = _a.tooltipAxis, activeTooltipIndex = _a.activeTooltipIndex, activeLabel = _a.activeLabel;
                    var children = _this.props.children;
                    var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
                    var _b = item.props, points = _b.points, isRange = _b.isRange, baseLine = _b.baseLine;
                    var _c = item.item.props, activeDot = _c.activeDot, hide = _c.hide;
                    var hasActive = !hide && isTooltipActive && tooltipItem && activeDot && activeTooltipIndex >= 0;
                    var itemEvents = {};
                    if (tooltipEventType !== 'axis' && tooltipItem && tooltipItem.props.trigger === 'click') {
                        itemEvents = {
                            onClick: ChartUtils_1.combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onCLick),
                        };
                    }
                    else if (tooltipEventType !== 'axis') {
                        itemEvents = {
                            onMouseLeave: ChartUtils_1.combineEventHandlers(_this.handleItemMouseLeave, null, element.props.onMouseLeave),
                            onMouseEnter: ChartUtils_1.combineEventHandlers(_this.handleItemMouseEnter, null, element.props.onMouseEnter),
                        };
                    }
                    var graphicalItem = react_1.cloneElement(element, __assign(__assign({}, item.props), itemEvents));
                    function findWithPayload(entry) {
                        return typeof tooltipAxis.dataKey === 'function' ? tooltipAxis.dataKey(entry.payload) : null;
                    }
                    if (hasActive) {
                        var activePoint = void 0, basePoint = void 0;
                        if (tooltipAxis.dataKey && !tooltipAxis.allowDuplicatedCategory) {
                            var specifiedKey = typeof tooltipAxis.dataKey === 'function'
                                ? findWithPayload
                                : 'payload.'.concat(tooltipAxis.dataKey.toString());
                            activePoint = DataUtils_1.findEntryInArray(points, specifiedKey, activeLabel);
                            basePoint = isRange && baseLine && DataUtils_1.findEntryInArray(baseLine, specifiedKey, activeLabel);
                        }
                        else {
                            activePoint = points[activeTooltipIndex];
                            basePoint = isRange && baseLine && baseLine[activeTooltipIndex];
                        }
                        if (!lodash_1.default.isNil(activePoint)) {
                            return __spreadArray([
                                graphicalItem
                            ], _this.renderActivePoints({
                                item: item,
                                activePoint: activePoint,
                                basePoint: basePoint,
                                childIndex: activeTooltipIndex,
                                isRange: isRange,
                            }));
                        }
                    }
                    if (isRange) {
                        return [graphicalItem, null, null];
                    }
                    return [graphicalItem, null];
                };
                _this.renderCustomized = function (element) {
                    return react_1.cloneElement(element, __assign(__assign({}, _this.props), _this.state));
                };
                _this.uniqueChartId = lodash_1.default.isNil(props.id) ? DataUtils_1.uniqueId('recharts') : props.id;
                _this.clipPathId = _this.uniqueChartId + "-clip";
                if (props.throttleDelay) {
                    _this.triggeredAfterMouseMove = lodash_1.default.throttle(_this.triggeredAfterMouseMove, props.throttleDelay);
                }
                _this.state = {};
                return _this;
            }
            CategoricalChartWrapper.prototype.componentDidMount = function () {
                if (!lodash_1.default.isNil(this.props.syncId)) {
                    this.addListener();
                }
            };
            CategoricalChartWrapper.prototype.componentDidUpdate = function (prevProps) {
                if (lodash_1.default.isNil(prevProps.syncId) && !lodash_1.default.isNil(this.props.syncId)) {
                    this.addListener();
                }
                if (!lodash_1.default.isNil(this.props.syncId) && lodash_1.default.isNil(prevProps.syncId)) {
                    this.removeListener();
                }
            };
            CategoricalChartWrapper.prototype.componentWillUnmount = function () {
                this.clearDeferId();
                if (!lodash_1.default.isNil(this.props.syncId)) {
                    this.removeListener();
                }
                this.cancelThrottledTriggerAfterMouseMove();
            };
            CategoricalChartWrapper.prototype.cancelThrottledTriggerAfterMouseMove = function () {
                if (typeof this.triggeredAfterMouseMove.cancel === 'function') {
                    this.triggeredAfterMouseMove.cancel();
                }
            };
            CategoricalChartWrapper.prototype.getTooltipEventType = function () {
                var tooltipItem = ReactUtils_1.findChildByType(this.props.children, Tooltip_1.Tooltip.displayName);
                if (tooltipItem && lodash_1.isBoolean(tooltipItem.props.shared)) {
                    var eventType = tooltipItem.props.shared ? 'axis' : 'item';
                    return validateTooltipEventTypes.indexOf(eventType) >= 0 ? eventType : defaultTooltipEventType;
                }
                return defaultTooltipEventType;
            };
            CategoricalChartWrapper.prototype.getMouseInfo = function (event) {
                if (!this.container) {
                    return null;
                }
                var containerOffset = DOMUtils_1.getOffset(this.container);
                var e = DOMUtils_1.calculateChartCoordinate(event, containerOffset);
                var rangeObj = this.inRange(e.chartX, e.chartY);
                if (!rangeObj) {
                    return null;
                }
                var _a = this.state, xAxisMap = _a.xAxisMap, yAxisMap = _a.yAxisMap;
                var tooltipEventType = this.getTooltipEventType();
                if (tooltipEventType !== 'axis' && xAxisMap && yAxisMap) {
                    var xScale = DataUtils_1.getAnyElementOfObject(xAxisMap).scale;
                    var yScale = DataUtils_1.getAnyElementOfObject(yAxisMap).scale;
                    var xValue = xScale && xScale.invert ? xScale.invert(e.chartX) : null;
                    var yValue = yScale && yScale.invert ? yScale.invert(e.chartY) : null;
                    return __assign(__assign({}, e), { xValue: xValue, yValue: yValue });
                }
                var toolTipData = getTooltipData(this.state, this.props.data, this.props.layout, rangeObj);
                if (toolTipData) {
                    return __assign(__assign({}, e), toolTipData);
                }
                return null;
            };
            CategoricalChartWrapper.prototype.getCursorRectangle = function () {
                var layout = this.props.layout;
                var _a = this.state, activeCoordinate = _a.activeCoordinate, offset = _a.offset, tooltipAxisBandSize = _a.tooltipAxisBandSize;
                var halfSize = tooltipAxisBandSize / 2;
                return {
                    stroke: 'none',
                    fill: '#ccc',
                    x: layout === 'horizontal' ? activeCoordinate.x - halfSize : offset.left + 0.5,
                    y: layout === 'horizontal' ? offset.top + 0.5 : activeCoordinate.y - halfSize,
                    width: layout === 'horizontal' ? tooltipAxisBandSize : offset.width - 1,
                    height: layout === 'horizontal' ? offset.height - 1 : tooltipAxisBandSize,
                };
            };
            CategoricalChartWrapper.prototype.getCursorPoints = function () {
                var layout = this.props.layout;
                var _a = this.state, activeCoordinate = _a.activeCoordinate, offset = _a.offset;
                var x1, y1, x2, y2;
                if (layout === 'horizontal') {
                    x1 = activeCoordinate.x;
                    x2 = x1;
                    y1 = offset.top;
                    y2 = offset.top + offset.height;
                }
                else if (layout === 'vertical') {
                    y1 = activeCoordinate.y;
                    y2 = y1;
                    x1 = offset.left;
                    x2 = offset.left + offset.width;
                }
                else if (!lodash_1.default.isNil(activeCoordinate.cx) || !lodash_1.default.isNil(activeCoordinate.cy)) {
                    if (layout === 'centric') {
                        var cx = activeCoordinate.cx, cy = activeCoordinate.cy, innerRadius = activeCoordinate.innerRadius, outerRadius = activeCoordinate.outerRadius, angle = activeCoordinate.angle;
                        var innerPoint = PolarUtils_1.polarToCartesian(cx, cy, innerRadius, angle);
                        var outerPoint = PolarUtils_1.polarToCartesian(cx, cy, outerRadius, angle);
                        x1 = innerPoint.x;
                        y1 = innerPoint.y;
                        x2 = outerPoint.x;
                        y2 = outerPoint.y;
                    }
                    else {
                        var cx = activeCoordinate.cx, cy = activeCoordinate.cy, radius = activeCoordinate.radius, startAngle = activeCoordinate.startAngle, endAngle = activeCoordinate.endAngle;
                        var startPoint = PolarUtils_1.polarToCartesian(cx, cy, radius, startAngle);
                        var endPoint = PolarUtils_1.polarToCartesian(cx, cy, radius, endAngle);
                        return {
                            points: [startPoint, endPoint],
                            cx: cx,
                            cy: cy,
                            radius: radius,
                            startAngle: startAngle,
                            endAngle: endAngle,
                        };
                    }
                }
                return [
                    { x: x1, y: y1 },
                    { x: x2, y: y2 },
                ];
            };
            CategoricalChartWrapper.prototype.inRange = function (x, y) {
                var layout = this.props.layout;
                if (layout === 'horizontal' || layout === 'vertical') {
                    var offset = this.state.offset;
                    var isInRange = x >= offset.left && x <= offset.left + offset.width && y >= offset.top && y <= offset.top + offset.height;
                    return isInRange ? { x: x, y: y } : null;
                }
                var _a = this.state, angleAxisMap = _a.angleAxisMap, radiusAxisMap = _a.radiusAxisMap;
                if (angleAxisMap && radiusAxisMap) {
                    var angleAxis = DataUtils_1.getAnyElementOfObject(angleAxisMap);
                    return PolarUtils_1.inRangeOfSector({ x: x, y: y }, angleAxis);
                }
                return null;
            };
            CategoricalChartWrapper.prototype.parseEventsOfWrapper = function () {
                var children = this.props.children;
                var tooltipEventType = this.getTooltipEventType();
                var tooltipItem = ReactUtils_1.findChildByType(children, Tooltip_1.Tooltip.displayName);
                var tooltipEvents = {};
                if (tooltipItem && tooltipEventType === 'axis') {
                    if (tooltipItem.props.trigger === 'click') {
                        tooltipEvents = {
                            onClick: this.handleClick,
                        };
                    }
                    else {
                        tooltipEvents = {
                            onMouseEnter: this.handleMouseEnter,
                            onMouseMove: this.handleMouseMove,
                            onMouseLeave: this.handleMouseLeave,
                            onTouchMove: this.handleTouchMove,
                            onTouchStart: this.handleTouchStart,
                            onTouchEnd: this.handleTouchEnd,
                        };
                    }
                }
                var outerEvents = types_1.adaptEventHandlers(this.props, this.handleOuterEvent);
                return __assign(__assign({}, outerEvents), tooltipEvents);
            };
            CategoricalChartWrapper.prototype.addListener = function () {
                Events_1.eventCenter.on(Events_1.SYNC_EVENT, this.handleReceiveSyncEvent);
                if (Events_1.eventCenter.setMaxListeners && Events_1.eventCenter._maxListeners) {
                    Events_1.eventCenter.setMaxListeners(Events_1.eventCenter._maxListeners + 1);
                }
            };
            CategoricalChartWrapper.prototype.removeListener = function () {
                Events_1.eventCenter.removeListener(Events_1.SYNC_EVENT, this.handleReceiveSyncEvent);
                if (Events_1.eventCenter.setMaxListeners && Events_1.eventCenter._maxListeners) {
                    Events_1.eventCenter.setMaxListeners(Events_1.eventCenter._maxListeners - 1);
                }
            };
            CategoricalChartWrapper.prototype.triggerSyncEvent = function (data) {
                var syncId = this.props.syncId;
                if (!lodash_1.default.isNil(syncId)) {
                    Events_1.eventCenter.emit(Events_1.SYNC_EVENT, syncId, this.uniqueChartId, data);
                }
            };
            CategoricalChartWrapper.prototype.applySyncEvent = function (data) {
                var _a = this.props, layout = _a.layout, syncMethod = _a.syncMethod;
                var updateId = this.state.updateId;
                var dataStartIndex = data.dataStartIndex, dataEndIndex = data.dataEndIndex;
                if (!lodash_1.default.isNil(data.dataStartIndex) || !lodash_1.default.isNil(data.dataEndIndex)) {
                    this.setState(__assign({ dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex }, updateStateOfAxisMapsOffsetAndStackGroups({
                        props: this.props,
                        dataStartIndex: dataStartIndex,
                        dataEndIndex: dataEndIndex,
                        updateId: updateId,
                    }, this.state)));
                }
                else if (!lodash_1.default.isNil(data.activeTooltipIndex)) {
                    var chartX = data.chartX, chartY = data.chartY;
                    var activeTooltipIndex = data.activeTooltipIndex;
                    var _b = this.state, offset = _b.offset, tooltipTicks = _b.tooltipTicks;
                    if (!offset) {
                        return;
                    }
                    if (typeof syncMethod === 'function') {
                        activeTooltipIndex = syncMethod(activeTooltipIndex, data);
                    }
                    else if (syncMethod === 'value') {
                        activeTooltipIndex = -1;
                        for (var i = 0; i < tooltipTicks.length; i++) {
                            if (tooltipTicks[i].value === data.activeLabel) {
                                activeTooltipIndex = i;
                                break;
                            }
                        }
                    }
                    var viewBox = __assign(__assign({}, offset), { x: offset.left, y: offset.top });
                    var validateChartX = Math.min(chartX, viewBox.x + viewBox.width);
                    var validateChartY = Math.min(chartY, viewBox.y + viewBox.height);
                    var activeLabel = tooltipTicks[activeTooltipIndex] && tooltipTicks[activeTooltipIndex].value;
                    var activePayload = getTooltipContent(this.state, this.props.data, activeTooltipIndex);
                    var activeCoordinate = tooltipTicks[activeTooltipIndex]
                        ? {
                            x: layout === 'horizontal' ? tooltipTicks[activeTooltipIndex].coordinate : validateChartX,
                            y: layout === 'horizontal' ? validateChartY : tooltipTicks[activeTooltipIndex].coordinate,
                        }
                        : originCoordinate;
                    this.setState(__assign(__assign({}, data), { activeLabel: activeLabel,
                        activeCoordinate: activeCoordinate,
                        activePayload: activePayload,
                        activeTooltipIndex: activeTooltipIndex }));
                }
                else {
                    this.setState(data);
                }
            };
            CategoricalChartWrapper.prototype.filterFormatItem = function (item, displayName, childIndex) {
                var formatedGraphicalItems = this.state.formatedGraphicalItems;
                for (var i = 0, len = formatedGraphicalItems.length; i < len; i++) {
                    var entry = formatedGraphicalItems[i];
                    if (entry.item === item ||
                        entry.props.key === item.key ||
                        (displayName === ReactUtils_1.getDisplayName(entry.item.type) && childIndex === entry.childIndex)) {
                        return entry;
                    }
                }
                return null;
            };
            CategoricalChartWrapper.prototype.renderAxis = function (axisOptions, element, displayName, index) {
                var _a = this.props, width = _a.width, height = _a.height;
                return (react_1.default.createElement(CartesianAxis_1.CartesianAxis, __assign({}, axisOptions, { className: "recharts-" + axisOptions.axisType + " " + axisOptions.axisType, key: element.key || displayName + "-" + index, viewBox: { x: 0, y: 0, width: width, height: height }, ticksGenerator: this.axesTicksGenerator })));
            };
            CategoricalChartWrapper.prototype.renderClipPath = function () {
                var clipPathId = this.clipPathId;
                var _a = this.state.offset, left = _a.left, top = _a.top, height = _a.height, width = _a.width;
                return (react_1.default.createElement("defs", null,
                    react_1.default.createElement("clipPath", { id: clipPathId },
                        react_1.default.createElement("rect", { x: left, y: top, height: height, width: width }))));
            };
            CategoricalChartWrapper.prototype.getXScales = function () {
                var xAxisMap = this.state.xAxisMap;
                return xAxisMap ? Object.entries(xAxisMap).reduce(function (res, _a) {
                    var _b;
                    var axisId = _a[0], axisProps = _a[1];
                    return __assign(__assign({}, res), (_b = {}, _b[axisId] = axisProps.scale, _b));
                }, {}) : null;
            };
            CategoricalChartWrapper.prototype.getYScales = function () {
                var yAxisMap = this.state.yAxisMap;
                return yAxisMap ? Object.entries(yAxisMap).reduce(function (res, _a) {
                    var _b;
                    var axisId = _a[0], axisProps = _a[1];
                    return __assign(__assign({}, res), (_b = {}, _b[axisId] = axisProps.scale, _b));
                }, {}) : null;
            };
            CategoricalChartWrapper.prototype.getXScaleByAxisId = function (axisId) {
                var _a, _b;
                return (_b = (_a = this.state.xAxisMap) === null || _a === void 0 ? void 0 : _a[axisId]) === null || _b === void 0 ? void 0 : _b.scale;
            };
            CategoricalChartWrapper.prototype.getYScaleByAxisId = function (axisId) {
                var _a, _b;
                return (_b = (_a = this.state.yAxisMap) === null || _a === void 0 ? void 0 : _a[axisId]) === null || _b === void 0 ? void 0 : _b.scale;
            };
            CategoricalChartWrapper.prototype.getItemByXY = function (chartXY) {
                var formatedGraphicalItems = this.state.formatedGraphicalItems;
                if (formatedGraphicalItems && formatedGraphicalItems.length) {
                    for (var i = 0, len = formatedGraphicalItems.length; i < len; i++) {
                        var graphicalItem = formatedGraphicalItems[i];
                        var props = graphicalItem.props, item = graphicalItem.item;
                        var itemDisplayName = ReactUtils_1.getDisplayName(item.type);
                        if (itemDisplayName === 'Bar') {
                            var activeBarItem = (props.data || []).find(function (entry) {
                                return Rectangle_1.isInRectangle(chartXY, entry);
                            });
                            if (activeBarItem) {
                                return { graphicalItem: graphicalItem, payload: activeBarItem };
                            }
                        }
                        else if (itemDisplayName === 'RadialBar') {
                            var activeBarItem = (props.data || []).find(function (entry) {
                                return PolarUtils_1.inRangeOfSector(chartXY, entry);
                            });
                            if (activeBarItem) {
                                return { graphicalItem: graphicalItem, payload: activeBarItem };
                            }
                        }
                    }
                }
                return null;
            };
            CategoricalChartWrapper.prototype.render = function () {
                var _this = this;
                if (!ReactUtils_1.validateWidthHeight(this)) {
                    return null;
                }
                var _a = this.props, children = _a.children, className = _a.className, width = _a.width, height = _a.height, style = _a.style, compact = _a.compact, others = __rest(_a, ["children", "className", "width", "height", "style", "compact"]);
                var attrs = types_1.filterProps(others);
                var map = {
                    CartesianGrid: { handler: this.renderGrid, once: true },
                    ReferenceArea: { handler: this.renderReferenceElement },
                    ReferenceLine: { handler: this.renderReferenceElement },
                    ReferenceDot: { handler: this.renderReferenceElement },
                    XAxis: { handler: this.renderXAxis },
                    YAxis: { handler: this.renderYAxis },
                    Brush: { handler: this.renderBrush, once: true },
                    Bar: { handler: this.renderGraphicChild },
                    Line: { handler: this.renderGraphicChild },
                    Area: { handler: this.renderGraphicChild },
                    Radar: { handler: this.renderGraphicChild },
                    RadialBar: { handler: this.renderGraphicChild },
                    Scatter: { handler: this.renderGraphicChild },
                    Pie: { handler: this.renderGraphicChild },
                    Funnel: { handler: this.renderGraphicChild },
                    Tooltip: { handler: this.renderCursor, once: true },
                    PolarGrid: { handler: this.renderPolarGrid, once: true },
                    PolarAngleAxis: { handler: this.renderPolarAxis },
                    PolarRadiusAxis: { handler: this.renderPolarAxis },
                    Customized: { handler: this.renderCustomized },
                };
                if (compact) {
                    return (react_1.default.createElement(Surface_1.Surface, __assign({}, attrs, { width: width, height: height }),
                        this.renderClipPath(),
                        ReactUtils_1.renderByOrder(children, map)));
                }
                var events = this.parseEventsOfWrapper();
                return (react_1.default.createElement("div", __assign({ className: classnames_1.default('recharts-wrapper', className), style: __assign({ position: 'relative', cursor: 'default', width: width, height: height }, style) }, events, { ref: function (node) {
                        _this.container = node;
                    } }),
                    react_1.default.createElement(Surface_1.Surface, __assign({}, attrs, { width: width, height: height }),
                        this.renderClipPath(),
                        ReactUtils_1.renderByOrder(children, map)),
                    this.renderLegend(),
                    this.renderTooltip()));
            };
            return CategoricalChartWrapper;
        }(react_1.Component)),
        _b.displayName = chartName,
        _b.defaultProps = __assign({ layout: 'horizontal', stackOffset: 'none', barCategoryGap: '10%', barGap: 4, margin: { top: 5, right: 5, bottom: 5, left: 5 }, reverseStackOrder: false, syncMethod: 'index' }, defaultProps),
        _b.getDerivedStateFromProps = function (nextProps, prevState) {
            var data = nextProps.data, children = nextProps.children, width = nextProps.width, height = nextProps.height, layout = nextProps.layout, stackOffset = nextProps.stackOffset, margin = nextProps.margin;
            if (lodash_1.default.isNil(prevState.updateId)) {
                var defaultState = createDefaultState(nextProps);
                return __assign(__assign(__assign(__assign({}, defaultState), { updateId: 0 }), updateStateOfAxisMapsOffsetAndStackGroups(__assign(__assign({ props: nextProps }, defaultState), { updateId: 0 }), prevState)), { prevData: data, prevWidth: width, prevHeight: height, prevLayout: layout, prevStackOffset: stackOffset, prevMargin: margin, prevChildren: children });
            }
            if (data !== prevState.prevData ||
                width !== prevState.prevWidth ||
                height !== prevState.prevHeight ||
                layout !== prevState.prevLayout ||
                stackOffset !== prevState.prevStackOffset ||
                !ShallowEqual_1.shallowEqual(margin, prevState.prevMargin)) {
                var defaultState = createDefaultState(nextProps);
                var keepFromPrevState = {
                    chartX: prevState.chartX,
                    chartY: prevState.chartY,
                    isTooltipActive: prevState.isTooltipActive,
                };
                var updatesToState = __assign(__assign({}, getTooltipData(prevState, data, layout)), { updateId: prevState.updateId + 1 });
                var newState = __assign(__assign(__assign({}, defaultState), keepFromPrevState), updatesToState);
                return __assign(__assign(__assign({}, newState), updateStateOfAxisMapsOffsetAndStackGroups(__assign({ props: nextProps }, newState), prevState)), { prevData: data, prevWidth: width, prevHeight: height, prevLayout: layout, prevStackOffset: stackOffset, prevMargin: margin, prevChildren: children });
            }
            if (!ReactUtils_1.isChildrenEqual(children, prevState.prevChildren)) {
                var hasGlobalData = !lodash_1.default.isNil(data);
                var newUpdateId = hasGlobalData ? prevState.updateId : prevState.updateId + 1;
                return __assign(__assign({ updateId: newUpdateId }, updateStateOfAxisMapsOffsetAndStackGroups(__assign(__assign({ props: nextProps }, prevState), { updateId: newUpdateId }), prevState)), { prevChildren: children });
            }
            return null;
        },
        _b.renderActiveDot = function (option, props) {
            var dot;
            if (react_1.isValidElement(option)) {
                dot = react_1.cloneElement(option, props);
            }
            else if (lodash_1.default.isFunction(option)) {
                dot = option(props);
            }
            else {
                dot = react_1.default.createElement(Dot_1.Dot, __assign({}, props));
            }
            return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-active-dot", key: props.key }, dot));
        },
        _b;
};
exports.generateCategoricalChart = generateCategoricalChart;
//# sourceMappingURL=generateCategoricalChart.js.map