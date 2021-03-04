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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTooltipItem = exports.parseDomainOfCategoryAxis = exports.getBandSizeOfAxis = exports.parseSpecifiedDomain = exports.MAX_VALUE_REG = exports.MIN_VALUE_REG = exports.getDomainOfStackGroups = exports.getStackedDataOfItem = exports.getBaseValueOfBar = exports.getCateCoordinateOfBar = exports.getCateCoordinateOfLine = exports.getTicksOfScale = exports.calculateDomainOfTicks = exports.getStackGroupsByAxisId = exports.getStackedData = exports.offsetPositive = exports.offsetSign = exports.truncateByDomain = exports.findPositionOfBar = exports.checkDomainOfScale = exports.parseScale = exports.combineEventHandlers = exports.getTicksOfAxis = exports.getCoordinatesOfGrid = exports.isCategoricalAxis = exports.getDomainOfItemsWithSameAxis = exports.parseErrorBarsOfAxis = exports.getDomainOfErrorBars = exports.appendOffsetOfLegend = exports.getBarPosition = exports.getBarSizeList = exports.getLegendProps = exports.getMainColorOfGraphicItem = exports.calculateActiveTickIndex = exports.getDomainOfDataByKey = exports.getValueByDataKey = void 0;
var lodash_1 = __importDefault(require("lodash"));
var recharts_scale_1 = require("recharts-scale");
var d3Scales = __importStar(require("d3-scale"));
var d3_shape_1 = require("d3-shape");
var DataUtils_1 = require("./DataUtils");
var Legend_1 = require("../component/Legend");
var ReactUtils_1 = require("./ReactUtils");
var types_1 = require("./types");
function getValueByDataKey(obj, dataKey, defaultValue) {
    if (lodash_1.default.isNil(obj) || lodash_1.default.isNil(dataKey)) {
        return defaultValue;
    }
    if (DataUtils_1.isNumOrStr(dataKey)) {
        return lodash_1.default.get(obj, dataKey, defaultValue);
    }
    if (lodash_1.default.isFunction(dataKey)) {
        return dataKey(obj);
    }
    return defaultValue;
}
exports.getValueByDataKey = getValueByDataKey;
function getDomainOfDataByKey(data, key, type, filterNil) {
    var flattenData = lodash_1.default.flatMap(data, function (entry) { return getValueByDataKey(entry, key); });
    if (type === 'number') {
        var domain = flattenData.filter(function (entry) { return DataUtils_1.isNumber(entry) || parseFloat(entry); });
        return domain.length ? [lodash_1.default.min(domain), lodash_1.default.max(domain)] : [Infinity, -Infinity];
    }
    var validateData = filterNil ? flattenData.filter(function (entry) { return !lodash_1.default.isNil(entry); }) : flattenData;
    return validateData.map(function (entry) { return (DataUtils_1.isNumOrStr(entry) || entry instanceof Date ? entry : ''); });
}
exports.getDomainOfDataByKey = getDomainOfDataByKey;
var calculateActiveTickIndex = function (coordinate, ticks, unsortedTicks, axis) {
    var _a;
    if (ticks === void 0) { ticks = []; }
    var index = -1;
    var len = (_a = ticks === null || ticks === void 0 ? void 0 : ticks.length) !== null && _a !== void 0 ? _a : 0;
    if (len > 1) {
        if (axis && axis.axisType === 'angleAxis' && Math.abs(Math.abs(axis.range[1] - axis.range[0]) - 360) <= 1e-6) {
            var range = axis.range;
            for (var i = 0; i < len; i++) {
                var before = i > 0 ? unsortedTicks[i - 1].coordinate : unsortedTicks[len - 1].coordinate;
                var cur = unsortedTicks[i].coordinate;
                var after = i >= len - 1 ? unsortedTicks[0].coordinate : unsortedTicks[i + 1].coordinate;
                var sameDirectionCoord = void 0;
                if (DataUtils_1.mathSign(cur - before) !== DataUtils_1.mathSign(after - cur)) {
                    var diffInterval = [];
                    if (DataUtils_1.mathSign(after - cur) === DataUtils_1.mathSign(range[1] - range[0])) {
                        sameDirectionCoord = after;
                        var curInRange = cur + range[1] - range[0];
                        diffInterval[0] = Math.min(curInRange, (curInRange + before) / 2);
                        diffInterval[1] = Math.max(curInRange, (curInRange + before) / 2);
                    }
                    else {
                        sameDirectionCoord = before;
                        var afterInRange = after + range[1] - range[0];
                        diffInterval[0] = Math.min(cur, (afterInRange + cur) / 2);
                        diffInterval[1] = Math.max(cur, (afterInRange + cur) / 2);
                    }
                    var sameInterval = [
                        Math.min(cur, (sameDirectionCoord + cur) / 2),
                        Math.max(cur, (sameDirectionCoord + cur) / 2),
                    ];
                    if ((coordinate > sameInterval[0] && coordinate <= sameInterval[1]) ||
                        (coordinate >= diffInterval[0] && coordinate <= diffInterval[1])) {
                        (index = unsortedTicks[i].index);
                        break;
                    }
                }
                else {
                    var min = Math.min(before, after);
                    var max = Math.max(before, after);
                    if (coordinate > (min + cur) / 2 && coordinate <= (max + cur) / 2) {
                        (index = unsortedTicks[i].index);
                        break;
                    }
                }
            }
        }
        else {
            for (var i = 0; i < len; i++) {
                if ((i === 0 && coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2) ||
                    (i > 0 &&
                        i < len - 1 &&
                        coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2 &&
                        coordinate <= (ticks[i].coordinate + ticks[i + 1].coordinate) / 2) ||
                    (i === len - 1 && coordinate > (ticks[i].coordinate + ticks[i - 1].coordinate) / 2)) {
                    (index = ticks[i].index);
                    break;
                }
            }
        }
    }
    else {
        index = 0;
    }
    return index;
};
exports.calculateActiveTickIndex = calculateActiveTickIndex;
var getMainColorOfGraphicItem = function (item) {
    var displayName = item.type.displayName;
    var _a = item.props, stroke = _a.stroke, fill = _a.fill;
    var result;
    switch (displayName) {
        case 'Line':
            result = stroke;
            break;
        case 'Area':
        case 'Radar':
            result = stroke && stroke !== 'none' ? stroke : fill;
            break;
        default:
            result = fill;
            break;
    }
    return result;
};
exports.getMainColorOfGraphicItem = getMainColorOfGraphicItem;
var getLegendProps = function (_a) {
    var children = _a.children, formatedGraphicalItems = _a.formatedGraphicalItems, legendWidth = _a.legendWidth, legendContent = _a.legendContent;
    var legendItem = ReactUtils_1.findChildByType(children, Legend_1.Legend.displayName);
    if (!legendItem) {
        return null;
    }
    var legendData;
    if (legendItem.props && legendItem.props.payload) {
        legendData = legendItem.props && legendItem.props.payload;
    }
    else if (legendContent === 'children') {
        legendData = (formatedGraphicalItems || []).reduce(function (result, _a) {
            var item = _a.item, props = _a.props;
            var data = props.sectors || props.data || [];
            return result.concat(data.map(function (entry) { return ({
                type: legendItem.props.iconType || item.props.legendType,
                value: entry.name,
                color: entry.fill,
                payload: entry,
            }); }));
        }, []);
    }
    else {
        legendData = (formatedGraphicalItems || []).map(function (_a) {
            var item = _a.item;
            var _b = item.props, dataKey = _b.dataKey, name = _b.name, legendType = _b.legendType, hide = _b.hide;
            return {
                inactive: hide,
                dataKey: dataKey,
                type: legendItem.props.iconType || legendType || 'square',
                color: exports.getMainColorOfGraphicItem(item),
                value: name || dataKey,
                payload: item.props,
            };
        });
    }
    return __assign(__assign(__assign({}, legendItem.props), Legend_1.Legend.getWithHeight(legendItem, legendWidth)), { payload: legendData, item: legendItem });
};
exports.getLegendProps = getLegendProps;
var getBarSizeList = function (_a) {
    var globalSize = _a.barSize, _b = _a.stackGroups, stackGroups = _b === void 0 ? {} : _b;
    if (!stackGroups) {
        return {};
    }
    var result = {};
    var numericAxisIds = Object.keys(stackGroups);
    for (var i = 0, len = numericAxisIds.length; i < len; i++) {
        var sgs = stackGroups[numericAxisIds[i]].stackGroups;
        var stackIds = Object.keys(sgs);
        for (var j = 0, sLen = stackIds.length; j < sLen; j++) {
            var _c = sgs[stackIds[j]], items = _c.items, cateAxisId = _c.cateAxisId;
            var barItems = items.filter(function (item) { return ReactUtils_1.getDisplayName(item.type).indexOf('Bar') >= 0; });
            if (barItems && barItems.length) {
                var selfSize = barItems[0].props.barSize;
                var cateId = barItems[0].props[cateAxisId];
                if (!result[cateId]) {
                    result[cateId] = [];
                }
                result[cateId].push({
                    item: barItems[0],
                    stackList: barItems.slice(1),
                    barSize: lodash_1.default.isNil(selfSize) ? globalSize : selfSize,
                });
            }
        }
    }
    return result;
};
exports.getBarSizeList = getBarSizeList;
var getBarPosition = function (_a) {
    var barGap = _a.barGap, barCategoryGap = _a.barCategoryGap, bandSize = _a.bandSize, _b = _a.sizeList, sizeList = _b === void 0 ? [] : _b, maxBarSize = _a.maxBarSize;
    var len = sizeList.length;
    if (len < 1)
        return null;
    var realBarGap = DataUtils_1.getPercentValue(barGap, bandSize, 0, true);
    var result;
    if (sizeList[0].barSize === +sizeList[0].barSize) {
        var useFull_1 = false;
        var fullBarSize_1 = bandSize / len;
        var sum = sizeList.reduce(function (res, entry) { return res + entry.barSize || 0; }, 0);
        sum += (len - 1) * realBarGap;
        if (sum >= bandSize) {
            sum -= (len - 1) * realBarGap;
            realBarGap = 0;
        }
        if (sum >= bandSize && fullBarSize_1 > 0) {
            useFull_1 = true;
            fullBarSize_1 *= 0.9;
            sum = len * fullBarSize_1;
        }
        var offset = ((bandSize - sum) / 2) >> 0;
        var prev_1 = { offset: offset - realBarGap, size: 0 };
        result = sizeList.reduce(function (res, entry) {
            var newRes = __spreadArray(__spreadArray([], res), [
                {
                    item: entry.item,
                    position: {
                        offset: prev_1.offset + prev_1.size + realBarGap,
                        size: useFull_1 ? fullBarSize_1 : entry.barSize,
                    },
                },
            ]);
            prev_1 = newRes[newRes.length - 1].position;
            if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function (item) {
                    newRes.push({ item: item, position: prev_1 });
                });
            }
            return newRes;
        }, []);
    }
    else {
        var offset_1 = DataUtils_1.getPercentValue(barCategoryGap, bandSize, 0, true);
        if (bandSize - 2 * offset_1 - (len - 1) * realBarGap <= 0) {
            realBarGap = 0;
        }
        var originalSize_1 = (bandSize - 2 * offset_1 - (len - 1) * realBarGap) / len;
        if (originalSize_1 > 1) {
            originalSize_1 >>= 0;
        }
        var size_1 = maxBarSize === +maxBarSize ? Math.min(originalSize_1, maxBarSize) : originalSize_1;
        result = sizeList.reduce(function (res, entry, i) {
            var newRes = __spreadArray(__spreadArray([], res), [
                {
                    item: entry.item,
                    position: {
                        offset: offset_1 + (originalSize_1 + realBarGap) * i + (originalSize_1 - size_1) / 2,
                        size: size_1,
                    },
                },
            ]);
            if (entry.stackList && entry.stackList.length) {
                entry.stackList.forEach(function (item) {
                    newRes.push({ item: item, position: newRes[newRes.length - 1].position });
                });
            }
            return newRes;
        }, []);
    }
    return result;
};
exports.getBarPosition = getBarPosition;
var appendOffsetOfLegend = function (offset, items, props, legendBox) {
    var _a, _b;
    var children = props.children, width = props.width, margin = props.margin;
    var legendWidth = width - (margin.left || 0) - (margin.right || 0);
    var legendProps = exports.getLegendProps({ children: children, legendWidth: legendWidth });
    var newOffset = offset;
    if (legendProps) {
        var box = legendBox || {};
        var align = legendProps.align, verticalAlign = legendProps.verticalAlign, layout = legendProps.layout;
        if ((layout === 'vertical' || (layout === 'horizontal' && verticalAlign === 'center')) && DataUtils_1.isNumber(offset[align])) {
            newOffset = __assign(__assign({}, offset), (_a = {}, _a[align] = newOffset[align] + (box.width || 0), _a));
        }
        if ((layout === 'horizontal' || (layout === 'vertical' && align === 'center')) && DataUtils_1.isNumber(offset[verticalAlign])) {
            newOffset = __assign(__assign({}, offset), (_b = {}, _b[verticalAlign] = newOffset[verticalAlign] + (box.height || 0), _b));
        }
    }
    return newOffset;
};
exports.appendOffsetOfLegend = appendOffsetOfLegend;
var getDomainOfErrorBars = function (data, item, dataKey, axisType) {
    var children = item.props.children;
    var errorBars = ReactUtils_1.findAllByType(children, 'ErrorBar').filter(function (errorBarChild) {
        var direction = errorBarChild.props.direction;
        return lodash_1.default.isNil(direction) || lodash_1.default.isNil(axisType) ? true : axisType.indexOf(direction) >= 0;
    });
    if (errorBars && errorBars.length) {
        var keys_1 = errorBars.map(function (errorBarChild) { return errorBarChild.props.dataKey; });
        return data.reduce(function (result, entry) {
            var entryValue = getValueByDataKey(entry, dataKey, 0);
            var mainValue = lodash_1.default.isArray(entryValue) ? [lodash_1.default.min(entryValue), lodash_1.default.max(entryValue)] : [entryValue, entryValue];
            var errorDomain = keys_1.reduce(function (prevErrorArr, k) {
                var errorValue = getValueByDataKey(entry, k, 0);
                var lowerValue = mainValue[0] - Math.abs(lodash_1.default.isArray(errorValue) ? errorValue[0] : errorValue);
                var upperValue = mainValue[1] + Math.abs(lodash_1.default.isArray(errorValue) ? errorValue[1] : errorValue);
                return [Math.min(lowerValue, prevErrorArr[0]), Math.max(upperValue, prevErrorArr[1])];
            }, [Infinity, -Infinity]);
            return [Math.min(errorDomain[0], result[0]), Math.max(errorDomain[1], result[1])];
        }, [Infinity, -Infinity]);
    }
    return null;
};
exports.getDomainOfErrorBars = getDomainOfErrorBars;
var parseErrorBarsOfAxis = function (data, items, dataKey, axisType) {
    var domains = items
        .map(function (item) { return exports.getDomainOfErrorBars(data, item, dataKey, axisType); })
        .filter(function (entry) { return !lodash_1.default.isNil(entry); });
    if (domains && domains.length) {
        return domains.reduce(function (result, entry) { return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])]; }, [
            Infinity,
            -Infinity,
        ]);
    }
    return null;
};
exports.parseErrorBarsOfAxis = parseErrorBarsOfAxis;
var getDomainOfItemsWithSameAxis = function (data, items, type, filterNil) {
    var domains = items.map(function (item) {
        var dataKey = item.props.dataKey;
        if (type === 'number' && dataKey) {
            return exports.getDomainOfErrorBars(data, item, dataKey) || getDomainOfDataByKey(data, dataKey, type, filterNil);
        }
        return getDomainOfDataByKey(data, dataKey, type, filterNil);
    });
    if (type === 'number') {
        return domains.reduce(function (result, entry) { return [Math.min(result[0], entry[0]), Math.max(result[1], entry[1])]; }, [
            Infinity,
            -Infinity,
        ]);
    }
    var tag = {};
    return domains.reduce(function (result, entry) {
        for (var i = 0, len = entry.length; i < len; i++) {
            if (!tag[entry[i]]) {
                tag[entry[i]] = true;
                result.push(entry[i]);
            }
        }
        return result;
    }, []);
};
exports.getDomainOfItemsWithSameAxis = getDomainOfItemsWithSameAxis;
var isCategoricalAxis = function (layout, axisType) {
    return (layout === 'horizontal' && axisType === 'xAxis') ||
        (layout === 'vertical' && axisType === 'yAxis') ||
        (layout === 'centric' && axisType === 'angleAxis') ||
        (layout === 'radial' && axisType === 'radiusAxis');
};
exports.isCategoricalAxis = isCategoricalAxis;
var getCoordinatesOfGrid = function (ticks, min, max) {
    var hasMin, hasMax;
    var values = ticks.map(function (entry) {
        if (entry.coordinate === min) {
            hasMin = true;
        }
        if (entry.coordinate === max) {
            hasMax = true;
        }
        return entry.coordinate;
    });
    if (!hasMin) {
        values.push(min);
    }
    if (!hasMax) {
        values.push(max);
    }
    return values;
};
exports.getCoordinatesOfGrid = getCoordinatesOfGrid;
var getTicksOfAxis = function (axis, isGrid, isAll) {
    if (!axis)
        return null;
    var scale = axis.scale;
    var duplicateDomain = axis.duplicateDomain, type = axis.type, range = axis.range;
    var offset = (isGrid || isAll) && type === 'category' && scale.bandwidth ? scale.bandwidth() / 2 : 0;
    offset = axis.axisType === 'angleAxis' ? DataUtils_1.mathSign(range[0] - range[1]) * 2 * offset : offset;
    if (isGrid && (axis.ticks || axis.niceTicks)) {
        return (axis.ticks || axis.niceTicks).map(function (entry) {
            var scaleContent = duplicateDomain ? duplicateDomain.indexOf(entry) : entry;
            return {
                coordinate: scale(scaleContent) + offset,
                value: entry,
                offset: offset,
            };
        });
    }
    if (axis.isCategorical && axis.categoricalDomain) {
        return axis.categoricalDomain.map(function (entry, index) { return ({
            coordinate: scale(entry) + offset,
            value: entry,
            index: index,
            offset: offset,
        }); });
    }
    if (scale.ticks && !isAll) {
        return scale
            .ticks(axis.tickCount)
            .map(function (entry) { return ({ coordinate: scale(entry) + offset, value: entry, offset: offset }); });
    }
    return scale.domain().map(function (entry, index) { return ({
        coordinate: scale(entry) + offset,
        value: duplicateDomain ? duplicateDomain[entry] : entry,
        index: index,
        offset: offset,
    }); });
};
exports.getTicksOfAxis = getTicksOfAxis;
var combineEventHandlers = function (defaultHandler, parentHandler, childHandler) {
    var customizedHandler;
    if (lodash_1.default.isFunction(childHandler)) {
        customizedHandler = childHandler;
    }
    else if (lodash_1.default.isFunction(parentHandler)) {
        customizedHandler = parentHandler;
    }
    if (lodash_1.default.isFunction(defaultHandler) || customizedHandler) {
        return function (arg1, arg2, arg3, arg4) {
            if (lodash_1.default.isFunction(defaultHandler)) {
                defaultHandler(arg1, arg2, arg3, arg4);
            }
            if (lodash_1.default.isFunction(customizedHandler)) {
                customizedHandler(arg1, arg2, arg3, arg4);
            }
        };
    }
    return null;
};
exports.combineEventHandlers = combineEventHandlers;
var parseScale = function (axis, chartType, hasBar) {
    var scale = axis.scale, type = axis.type, layout = axis.layout, axisType = axis.axisType;
    if (scale === 'auto') {
        if (layout === 'radial' && axisType === 'radiusAxis') {
            return { scale: d3Scales.scaleBand(), realScaleType: 'band' };
        }
        if (layout === 'radial' && axisType === 'angleAxis') {
            return { scale: d3Scales.scaleLinear(), realScaleType: 'linear' };
        }
        if (type === 'category' &&
            chartType &&
            (chartType.indexOf('LineChart') >= 0 ||
                chartType.indexOf('AreaChart') >= 0 ||
                (chartType.indexOf('ComposedChart') >= 0 && !hasBar))) {
            return { scale: d3Scales.scalePoint(), realScaleType: 'point' };
        }
        if (type === 'category') {
            return { scale: d3Scales.scaleBand(), realScaleType: 'band' };
        }
        return { scale: d3Scales.scaleLinear(), realScaleType: 'linear' };
    }
    if (lodash_1.default.isString(scale)) {
        var name_1 = "scale" + lodash_1.default.upperFirst(scale);
        return {
            scale: (d3Scales[name_1] || d3Scales.scalePoint)(),
            realScaleType: d3Scales[name_1] ? name_1 : 'point',
        };
    }
    return lodash_1.default.isFunction(scale) ? { scale: scale } : { scale: d3Scales.scalePoint(), realScaleType: 'point' };
};
exports.parseScale = parseScale;
var EPS = 1e-4;
var checkDomainOfScale = function (scale) {
    var domain = scale.domain();
    if (!domain || domain.length <= 2) {
        return;
    }
    var len = domain.length;
    var range = scale.range();
    var min = Math.min(range[0], range[1]) - EPS;
    var max = Math.max(range[0], range[1]) + EPS;
    var first = scale(domain[0]);
    var last = scale(domain[len - 1]);
    if (first < min || first > max || last < min || last > max) {
        scale.domain([domain[0], domain[len - 1]]);
    }
};
exports.checkDomainOfScale = checkDomainOfScale;
var findPositionOfBar = function (barPosition, child) {
    if (!barPosition) {
        return null;
    }
    for (var i = 0, len = barPosition.length; i < len; i++) {
        if (barPosition[i].item === child) {
            return barPosition[i].position;
        }
    }
    return null;
};
exports.findPositionOfBar = findPositionOfBar;
var truncateByDomain = function (value, domain) {
    if (!domain || domain.length !== 2 || !DataUtils_1.isNumber(domain[0]) || !DataUtils_1.isNumber(domain[1])) {
        return value;
    }
    var min = Math.min(domain[0], domain[1]);
    var max = Math.max(domain[0], domain[1]);
    var result = [value[0], value[1]];
    if (!DataUtils_1.isNumber(value[0]) || value[0] < min) {
        result[0] = min;
    }
    if (!DataUtils_1.isNumber(value[1]) || value[1] > max) {
        result[1] = max;
    }
    if (result[0] > max) {
        result[0] = max;
    }
    if (result[1] < min) {
        result[1] = min;
    }
    return result;
};
exports.truncateByDomain = truncateByDomain;
var offsetSign = function (series) {
    var n = series.length;
    if (n <= 0) {
        return;
    }
    for (var j = 0, m = series[0].length; j < m; ++j) {
        var positive = 0;
        var negative = 0;
        for (var i = 0; i < n; ++i) {
            var value = lodash_1.default.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
            if (value >= 0) {
                series[i][j][0] = positive;
                series[i][j][1] = positive + value;
                positive = series[i][j][1];
            }
            else {
                series[i][j][0] = negative;
                series[i][j][1] = negative + value;
                negative = series[i][j][1];
            }
        }
    }
};
exports.offsetSign = offsetSign;
var offsetPositive = function (series) {
    var n = series.length;
    if (n <= 0) {
        return;
    }
    for (var j = 0, m = series[0].length; j < m; ++j) {
        var positive = 0;
        for (var i = 0; i < n; ++i) {
            var value = lodash_1.default.isNaN(series[i][j][1]) ? series[i][j][0] : series[i][j][1];
            if (value >= 0) {
                series[i][j][0] = positive;
                series[i][j][1] = positive + value;
                positive = series[i][j][1];
            }
            else {
                series[i][j][0] = 0;
                series[i][j][1] = 0;
            }
        }
    }
};
exports.offsetPositive = offsetPositive;
var STACK_OFFSET_MAP = {
    sign: exports.offsetSign,
    expand: d3_shape_1.stackOffsetExpand,
    none: d3_shape_1.stackOffsetNone,
    silhouette: d3_shape_1.stackOffsetSilhouette,
    wiggle: d3_shape_1.stackOffsetWiggle,
    positive: exports.offsetPositive,
};
var getStackedData = function (data, stackItems, offsetType) {
    var dataKeys = stackItems.map(function (item) { return item.props.dataKey; });
    var stack = d3_shape_1.stack()
        .keys(dataKeys)
        .value(function (d, key) { return +getValueByDataKey(d, key, 0); })
        .order(d3_shape_1.stackOrderNone)
        .offset(STACK_OFFSET_MAP[offsetType]);
    return stack(data);
};
exports.getStackedData = getStackedData;
var getStackGroupsByAxisId = function (data, _items, numericAxisId, cateAxisId, offsetType, reverseStackOrder) {
    if (!data) {
        return null;
    }
    var items = reverseStackOrder ? _items.reverse() : _items;
    var stackGroups = items.reduce(function (result, item) {
        var _a;
        var _b = item.props, stackId = _b.stackId, hide = _b.hide;
        if (hide) {
            return result;
        }
        var axisId = item.props[numericAxisId];
        var parentGroup = result[axisId] || { hasStack: false, stackGroups: {} };
        if (DataUtils_1.isNumOrStr(stackId)) {
            var childGroup = parentGroup.stackGroups[stackId] || {
                numericAxisId: numericAxisId,
                cateAxisId: cateAxisId,
                items: [],
            };
            childGroup.items.push(item);
            parentGroup.hasStack = true;
            parentGroup.stackGroups[stackId] = childGroup;
        }
        else {
            parentGroup.stackGroups[DataUtils_1.uniqueId('_stackId_')] = {
                numericAxisId: numericAxisId,
                cateAxisId: cateAxisId,
                items: [item],
            };
        }
        return __assign(__assign({}, result), (_a = {}, _a[axisId] = parentGroup, _a));
    }, {});
    return Object.keys(stackGroups).reduce(function (result, axisId) {
        var _a;
        var group = stackGroups[axisId];
        if (group.hasStack) {
            group.stackGroups = Object.keys(group.stackGroups).reduce(function (res, stackId) {
                var _a;
                var g = group.stackGroups[stackId];
                return __assign(__assign({}, res), (_a = {}, _a[stackId] = {
                    numericAxisId: numericAxisId,
                    cateAxisId: cateAxisId,
                    items: g.items,
                    stackedData: exports.getStackedData(data, g.items, offsetType),
                }, _a));
            }, {});
        }
        return __assign(__assign({}, result), (_a = {}, _a[axisId] = group, _a));
    }, {});
};
exports.getStackGroupsByAxisId = getStackGroupsByAxisId;
var calculateDomainOfTicks = function (ticks, type) {
    if (type === 'number') {
        return [lodash_1.default.min(ticks), lodash_1.default.max(ticks)];
    }
    return ticks;
};
exports.calculateDomainOfTicks = calculateDomainOfTicks;
var getTicksOfScale = function (scale, opts) {
    var realScaleType = opts.realScaleType, type = opts.type, tickCount = opts.tickCount, originalDomain = opts.originalDomain, allowDecimals = opts.allowDecimals;
    var scaleType = realScaleType || opts.scale;
    if (scaleType !== 'auto' && scaleType !== 'linear') {
        return null;
    }
    if (tickCount &&
        type === 'number' &&
        originalDomain &&
        (originalDomain[0] === 'auto' || originalDomain[1] === 'auto')) {
        var domain = scale.domain();
        if (!domain.length) {
            return null;
        }
        var tickValues = recharts_scale_1.getNiceTickValues(domain, tickCount, allowDecimals);
        scale.domain(exports.calculateDomainOfTicks(tickValues, type));
        return { niceTicks: tickValues };
    }
    if (tickCount && type === 'number') {
        var domain = scale.domain();
        var tickValues = recharts_scale_1.getTickValuesFixedDomain(domain, tickCount, allowDecimals);
        return { niceTicks: tickValues };
    }
    return null;
};
exports.getTicksOfScale = getTicksOfScale;
var getCateCoordinateOfLine = function (_a) {
    var axis = _a.axis, ticks = _a.ticks, bandSize = _a.bandSize, entry = _a.entry, index = _a.index, dataKey = _a.dataKey;
    if (axis.type === 'category') {
        if (!axis.allowDuplicatedCategory && axis.dataKey && !lodash_1.default.isNil(entry[axis.dataKey])) {
            var matchedTick = DataUtils_1.findEntryInArray(ticks, 'value', entry[axis.dataKey]);
            if (matchedTick) {
                return matchedTick.coordinate + bandSize / 2;
            }
        }
        return ticks[index] ? ticks[index].coordinate + bandSize / 2 : null;
    }
    var value = getValueByDataKey(entry, !lodash_1.default.isNil(dataKey) ? dataKey : axis.dataKey);
    return !lodash_1.default.isNil(value) ? axis.scale(value) : null;
};
exports.getCateCoordinateOfLine = getCateCoordinateOfLine;
var getCateCoordinateOfBar = function (_a) {
    var axis = _a.axis, ticks = _a.ticks, offset = _a.offset, bandSize = _a.bandSize, entry = _a.entry, index = _a.index;
    if (axis.type === 'category') {
        return ticks[index] ? ticks[index].coordinate + offset : null;
    }
    var value = getValueByDataKey(entry, axis.dataKey, axis.domain[index]);
    return !lodash_1.default.isNil(value) ? axis.scale(value) - bandSize / 2 + offset : null;
};
exports.getCateCoordinateOfBar = getCateCoordinateOfBar;
var getBaseValueOfBar = function (_a) {
    var numericAxis = _a.numericAxis;
    var domain = numericAxis.scale.domain();
    if (numericAxis.type === 'number') {
        var min = Math.min(domain[0], domain[1]);
        var max = Math.max(domain[0], domain[1]);
        if (min <= 0 && max >= 0) {
            return 0;
        }
        if (max < 0) {
            return max;
        }
        return min;
    }
    return domain[0];
};
exports.getBaseValueOfBar = getBaseValueOfBar;
var getStackedDataOfItem = function (item, stackGroups) {
    var stackId = item.props.stackId;
    if (DataUtils_1.isNumOrStr(stackId)) {
        var group = stackGroups[stackId];
        if (group && group.items.length) {
            var itemIndex = -1;
            for (var i = 0, len = group.items.length; i < len; i++) {
                if (group.items[i] === item) {
                    itemIndex = i;
                    break;
                }
            }
            return itemIndex >= 0 ? group.stackedData[itemIndex] : null;
        }
    }
    return null;
};
exports.getStackedDataOfItem = getStackedDataOfItem;
var getDomainOfSingle = function (data) {
    return data.reduce(function (result, entry) { return [
        lodash_1.default.min(entry.concat([result[0]]).filter(DataUtils_1.isNumber)),
        lodash_1.default.max(entry.concat([result[1]]).filter(DataUtils_1.isNumber)),
    ]; }, [Infinity, -Infinity]);
};
var getDomainOfStackGroups = function (stackGroups, startIndex, endIndex) {
    return Object.keys(stackGroups)
        .reduce(function (result, stackId) {
        var group = stackGroups[stackId];
        var stackedData = group.stackedData;
        var domain = stackedData.reduce(function (res, entry) {
            var s = getDomainOfSingle(entry.slice(startIndex, endIndex + 1));
            return [Math.min(res[0], s[0]), Math.max(res[1], s[1])];
        }, [Infinity, -Infinity]);
        return [Math.min(domain[0], result[0]), Math.max(domain[1], result[1])];
    }, [Infinity, -Infinity])
        .map(function (result) { return (result === Infinity || result === -Infinity ? 0 : result); });
};
exports.getDomainOfStackGroups = getDomainOfStackGroups;
exports.MIN_VALUE_REG = /^dataMin[\s]*-[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
exports.MAX_VALUE_REG = /^dataMax[\s]*\+[\s]*([0-9]+([.]{1}[0-9]+){0,1})$/;
var parseSpecifiedDomain = function (specifiedDomain, dataDomain, allowDataOverflow) {
    if (!lodash_1.default.isArray(specifiedDomain)) {
        return dataDomain;
    }
    var domain = [];
    if (DataUtils_1.isNumber(specifiedDomain[0])) {
        domain[0] = allowDataOverflow ? specifiedDomain[0] : Math.min(specifiedDomain[0], dataDomain[0]);
    }
    else if (exports.MIN_VALUE_REG.test(specifiedDomain[0])) {
        var value = +exports.MIN_VALUE_REG.exec(specifiedDomain[0])[1];
        domain[0] = dataDomain[0] - value;
    }
    else if (lodash_1.default.isFunction(specifiedDomain[0])) {
        domain[0] = specifiedDomain[0](dataDomain[0]);
    }
    else {
        domain[0] = dataDomain[0];
    }
    if (DataUtils_1.isNumber(specifiedDomain[1])) {
        domain[1] = allowDataOverflow ? specifiedDomain[1] : Math.max(specifiedDomain[1], dataDomain[1]);
    }
    else if (exports.MAX_VALUE_REG.test(specifiedDomain[1])) {
        var value = +exports.MAX_VALUE_REG.exec(specifiedDomain[1])[1];
        domain[1] = dataDomain[1] + value;
    }
    else if (lodash_1.default.isFunction(specifiedDomain[1])) {
        domain[1] = specifiedDomain[1](dataDomain[1]);
    }
    else {
        domain[1] = dataDomain[1];
    }
    return domain;
};
exports.parseSpecifiedDomain = parseSpecifiedDomain;
var getBandSizeOfAxis = function (axis, ticks, isBar) {
    if (axis && axis.scale && axis.scale.bandwidth) {
        var bandWidth = axis.scale.bandwidth();
        if (!isBar || bandWidth > 0) {
            return bandWidth;
        }
    }
    if (axis && ticks && ticks.length >= 2) {
        var orderedTicks = lodash_1.default.sortBy(ticks, function (o) { return o.coordinate; });
        var bandSize = Infinity;
        for (var i = 1, len = orderedTicks.length; i < len; i++) {
            var cur = orderedTicks[i];
            var prev = orderedTicks[i - 1];
            bandSize = Math.min((cur.coordinate || 0) - (prev.coordinate || 0), bandSize);
        }
        return bandSize === Infinity ? 0 : bandSize;
    }
    return 0;
};
exports.getBandSizeOfAxis = getBandSizeOfAxis;
var parseDomainOfCategoryAxis = function (specifiedDomain, calculatedDomain, axisChild) {
    if (!specifiedDomain || !specifiedDomain.length) {
        return calculatedDomain;
    }
    if (lodash_1.default.isEqual(specifiedDomain, lodash_1.default.get(axisChild, 'type.defaultProps.domain'))) {
        return calculatedDomain;
    }
    return specifiedDomain;
};
exports.parseDomainOfCategoryAxis = parseDomainOfCategoryAxis;
var getTooltipItem = function (graphicalItem, payload) {
    var _a = graphicalItem.props, dataKey = _a.dataKey, name = _a.name, unit = _a.unit, formatter = _a.formatter, tooltipType = _a.tooltipType;
    return __assign(__assign({}, types_1.filterProps(graphicalItem)), { dataKey: dataKey,
        unit: unit,
        formatter: formatter, name: name || dataKey, color: exports.getMainColorOfGraphicItem(graphicalItem), value: getValueByDataKey(payload, dataKey), type: tooltipType, payload: payload });
};
exports.getTooltipItem = getTooltipItem;
//# sourceMappingURL=ChartUtils.js.map