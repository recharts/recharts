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
exports.CartesianAxis = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var classnames_1 = __importDefault(require("classnames"));
var ShallowEqual_1 = require("../util/ShallowEqual");
var DOMUtils_1 = require("../util/DOMUtils");
var Layer_1 = require("../container/Layer");
var Text_1 = require("../component/Text");
var Label_1 = require("../component/Label");
var Global_1 = require("../util/Global");
var DataUtils_1 = require("../util/DataUtils");
var types_1 = require("../util/types");
var CartesianAxis = (function (_super) {
    __extends(CartesianAxis, _super);
    function CartesianAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianAxis.getTicks = function (props) {
        var tick = props.tick, ticks = props.ticks, viewBox = props.viewBox, minTickGap = props.minTickGap, orientation = props.orientation, interval = props.interval, tickFormatter = props.tickFormatter, unit = props.unit;
        if (!ticks || !ticks.length || !tick) {
            return [];
        }
        if (DataUtils_1.isNumber(interval) || Global_1.Global.isSsr) {
            return CartesianAxis.getNumberIntervalTicks(ticks, typeof interval === 'number' && DataUtils_1.isNumber(interval) ? interval : 0);
        }
        if (interval === 'preserveStartEnd') {
            return CartesianAxis.getTicksStart({
                ticks: ticks,
                tickFormatter: tickFormatter,
                viewBox: viewBox,
                orientation: orientation,
                minTickGap: minTickGap,
                unit: unit,
            }, true);
        }
        if (interval === 'preserveStart') {
            return CartesianAxis.getTicksStart({
                ticks: ticks,
                tickFormatter: tickFormatter,
                viewBox: viewBox,
                orientation: orientation,
                minTickGap: minTickGap,
                unit: unit,
            });
        }
        return CartesianAxis.getTicksEnd({
            ticks: ticks,
            tickFormatter: tickFormatter,
            viewBox: viewBox,
            orientation: orientation,
            minTickGap: minTickGap,
            unit: unit,
        });
    };
    CartesianAxis.getNumberIntervalTicks = function (ticks, interval) {
        return ticks.filter(function (entry, i) { return i % (interval + 1) === 0; });
    };
    CartesianAxis.getTicksStart = function (_a, preserveEnd) {
        var ticks = _a.ticks, tickFormatter = _a.tickFormatter, viewBox = _a.viewBox, orientation = _a.orientation, minTickGap = _a.minTickGap, unit = _a.unit;
        var x = viewBox.x, y = viewBox.y, width = viewBox.width, height = viewBox.height;
        var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
        var result = (ticks || []).slice();
        var unitSize = unit && sizeKey === 'width' ? DOMUtils_1.getStringSize(unit)[sizeKey] : 0;
        var len = result.length;
        var sign = len >= 2 ? DataUtils_1.mathSign(result[1].coordinate - result[0].coordinate) : 1;
        var start, end;
        if (sign === 1) {
            start = sizeKey === 'width' ? x : y;
            end = sizeKey === 'width' ? x + width : y + height;
        }
        else {
            start = sizeKey === 'width' ? x + width : y + height;
            end = sizeKey === 'width' ? x : y;
        }
        if (preserveEnd) {
            var tail = ticks[len - 1];
            var tailContent = lodash_1.default.isFunction(tickFormatter) ? tickFormatter(tail.value, len - 1) : tail.value;
            var tailSize = DOMUtils_1.getStringSize(tailContent)[sizeKey] + unitSize;
            var tailGap = sign * (tail.coordinate + (sign * tailSize) / 2 - end);
            result[len - 1] = tail = __assign(__assign({}, tail), { tickCoord: tailGap > 0 ? tail.coordinate - tailGap * sign : tail.coordinate });
            var isTailShow = sign * (tail.tickCoord - (sign * tailSize) / 2 - start) >= 0 &&
                sign * (tail.tickCoord + (sign * tailSize) / 2 - end) <= 0;
            if (isTailShow) {
                end = tail.tickCoord - sign * (tailSize / 2 + minTickGap);
                result[len - 1] = __assign(__assign({}, tail), { isShow: true });
            }
        }
        var count = preserveEnd ? len - 1 : len;
        for (var i = 0; i < count; i++) {
            var entry = result[i];
            var content = lodash_1.default.isFunction(tickFormatter) ? tickFormatter(entry.value, i) : entry.value;
            var size = DOMUtils_1.getStringSize(content)[sizeKey] + unitSize;
            if (i === 0) {
                var gap = sign * (entry.coordinate - (sign * size) / 2 - start);
                result[i] = entry = __assign(__assign({}, entry), { tickCoord: gap < 0 ? entry.coordinate - gap * sign : entry.coordinate });
            }
            else {
                result[i] = entry = __assign(__assign({}, entry), { tickCoord: entry.coordinate });
            }
            var isShow = sign * (entry.tickCoord - (sign * size) / 2 - start) >= 0 &&
                sign * (entry.tickCoord + (sign * size) / 2 - end) <= 0;
            if (isShow) {
                start = entry.tickCoord + sign * (size / 2 + minTickGap);
                result[i] = __assign(__assign({}, entry), { isShow: true });
            }
        }
        return result.filter(function (entry) { return entry.isShow; });
    };
    CartesianAxis.getTicksEnd = function (_a) {
        var ticks = _a.ticks, tickFormatter = _a.tickFormatter, viewBox = _a.viewBox, orientation = _a.orientation, minTickGap = _a.minTickGap, unit = _a.unit;
        var x = viewBox.x, y = viewBox.y, width = viewBox.width, height = viewBox.height;
        var sizeKey = orientation === 'top' || orientation === 'bottom' ? 'width' : 'height';
        var unitSize = unit && sizeKey === 'width' ? DOMUtils_1.getStringSize(unit)[sizeKey] : 0;
        var result = (ticks || []).slice();
        var len = result.length;
        var sign = len >= 2 ? DataUtils_1.mathSign(result[1].coordinate - result[0].coordinate) : 1;
        var start, end;
        if (sign === 1) {
            start = sizeKey === 'width' ? x : y;
            end = sizeKey === 'width' ? x + width : y + height;
        }
        else {
            start = sizeKey === 'width' ? x + width : y + height;
            end = sizeKey === 'width' ? x : y;
        }
        for (var i = len - 1; i >= 0; i--) {
            var entry = result[i];
            var content = lodash_1.default.isFunction(tickFormatter) ? tickFormatter(entry.value, len - i - 1) : entry.value;
            var size = DOMUtils_1.getStringSize(content)[sizeKey] + unitSize;
            if (i === len - 1) {
                var gap = sign * (entry.coordinate + (sign * size) / 2 - end);
                result[i] = entry = __assign(__assign({}, entry), { tickCoord: gap > 0 ? entry.coordinate - gap * sign : entry.coordinate });
            }
            else {
                result[i] = entry = __assign(__assign({}, entry), { tickCoord: entry.coordinate });
            }
            var isShow = sign * (entry.tickCoord - (sign * size) / 2 - start) >= 0 &&
                sign * (entry.tickCoord + (sign * size) / 2 - end) <= 0;
            if (isShow) {
                end = entry.tickCoord - sign * (size / 2 + minTickGap);
                result[i] = __assign(__assign({}, entry), { isShow: true });
            }
        }
        return result.filter(function (entry) { return entry.isShow; });
    };
    CartesianAxis.prototype.shouldComponentUpdate = function (_a) {
        var viewBox = _a.viewBox, restProps = __rest(_a, ["viewBox"]);
        var _b = this.props, viewBoxOld = _b.viewBox, restPropsOld = __rest(_b, ["viewBox"]);
        return !ShallowEqual_1.shallowEqual(viewBox, viewBoxOld) || !ShallowEqual_1.shallowEqual(restProps, restPropsOld);
    };
    CartesianAxis.prototype.getTickLineCoord = function (data) {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, orientation = _a.orientation, tickSize = _a.tickSize, mirror = _a.mirror, tickMargin = _a.tickMargin;
        var x1, x2, y1, y2, tx, ty;
        var sign = mirror ? -1 : 1;
        var finalTickSize = data.tickSize || tickSize;
        var tickCoord = DataUtils_1.isNumber(data.tickCoord) ? data.tickCoord : data.coordinate;
        switch (orientation) {
            case 'top':
                x1 = x2 = data.coordinate;
                y2 = y + +!mirror * height;
                y1 = y2 - sign * finalTickSize;
                ty = y1 - sign * tickMargin;
                tx = tickCoord;
                break;
            case 'left':
                y1 = y2 = data.coordinate;
                x2 = x + +!mirror * width;
                x1 = x2 - sign * finalTickSize;
                tx = x1 - sign * tickMargin;
                ty = tickCoord;
                break;
            case 'right':
                y1 = y2 = data.coordinate;
                x2 = x + +mirror * width;
                x1 = x2 + sign * finalTickSize;
                tx = x1 + sign * tickMargin;
                ty = tickCoord;
                break;
            default:
                x1 = x2 = data.coordinate;
                y2 = y + +mirror * height;
                y1 = y2 + sign * finalTickSize;
                ty = y1 + sign * tickMargin;
                tx = tickCoord;
                break;
        }
        return { line: { x1: x1, y1: y1, x2: x2, y2: y2 }, tick: { x: tx, y: ty } };
    };
    CartesianAxis.prototype.getTickTextAnchor = function () {
        var _a = this.props, orientation = _a.orientation, mirror = _a.mirror;
        var textAnchor;
        switch (orientation) {
            case 'left':
                textAnchor = mirror ? 'start' : 'end';
                break;
            case 'right':
                textAnchor = mirror ? 'end' : 'start';
                break;
            default:
                textAnchor = 'middle';
                break;
        }
        return textAnchor;
    };
    CartesianAxis.prototype.getTickVerticalAnchor = function () {
        var _a = this.props, orientation = _a.orientation, mirror = _a.mirror;
        var verticalAnchor = 'end';
        switch (orientation) {
            case 'left':
            case 'right':
                verticalAnchor = 'middle';
                break;
            case 'top':
                verticalAnchor = mirror ? 'start' : 'end';
                break;
            default:
                verticalAnchor = mirror ? 'end' : 'start';
                break;
        }
        return verticalAnchor;
    };
    CartesianAxis.prototype.renderAxisLine = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, orientation = _a.orientation, mirror = _a.mirror, axisLine = _a.axisLine;
        var props = __assign(__assign(__assign({}, types_1.filterProps(this.props)), types_1.filterProps(axisLine)), { fill: 'none' });
        if (orientation === 'top' || orientation === 'bottom') {
            var needHeight = +((orientation === 'top' && !mirror) || (orientation === 'bottom' && mirror));
            props = __assign(__assign({}, props), { x1: x, y1: y + needHeight * height, x2: x + width, y2: y + needHeight * height });
        }
        else {
            var needWidth = +((orientation === 'left' && !mirror) || (orientation === 'right' && mirror));
            props = __assign(__assign({}, props), { x1: x + needWidth * width, y1: y, x2: x + needWidth * width, y2: y + height });
        }
        return react_1.default.createElement("line", __assign({}, props, { className: classnames_1.default('recharts-cartesian-axis-line', lodash_1.default.get(axisLine, 'className')) }));
    };
    CartesianAxis.renderTickItem = function (option, props, value) {
        var tickItem;
        if (react_1.default.isValidElement(option)) {
            tickItem = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            tickItem = option(props);
        }
        else {
            tickItem = (react_1.default.createElement(Text_1.Text, __assign({}, props, { className: "recharts-cartesian-axis-tick-value" }), value));
        }
        return tickItem;
    };
    CartesianAxis.prototype.renderTicks = function (ticks) {
        var _this = this;
        var _a = this.props, tickLine = _a.tickLine, stroke = _a.stroke, tick = _a.tick, tickFormatter = _a.tickFormatter, unit = _a.unit;
        var finalTicks = CartesianAxis.getTicks(__assign(__assign({}, this.props), { ticks: ticks }));
        var textAnchor = this.getTickTextAnchor();
        var verticalAnchor = this.getTickVerticalAnchor();
        var axisProps = types_1.filterProps(this.props);
        var customTickProps = types_1.filterProps(tick);
        var tickLineProps = __assign(__assign(__assign({}, axisProps), { fill: 'none' }), types_1.filterProps(tickLine));
        var items = finalTicks.map(function (entry, i) {
            var _a = _this.getTickLineCoord(entry), lineCoord = _a.line, tickCoord = _a.tick;
            var tickProps = __assign(__assign(__assign(__assign(__assign({ textAnchor: textAnchor,
                verticalAnchor: verticalAnchor }, axisProps), { stroke: 'none', fill: stroke }), customTickProps), tickCoord), { index: i, payload: entry, visibleTicksCount: finalTicks.length, tickFormatter: tickFormatter });
            return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-cartesian-axis-tick", key: "tick-" + i }, types_1.adaptEventsOfChild(_this.props, entry, i)),
                tickLine && (react_1.default.createElement("line", __assign({}, tickLineProps, lineCoord, { className: classnames_1.default('recharts-cartesian-axis-tick-line', lodash_1.default.get(tickLine, 'className')) }))),
                tick &&
                    CartesianAxis.renderTickItem(tick, tickProps, "" + (lodash_1.default.isFunction(tickFormatter) ? tickFormatter(entry.value, i) : entry.value) + (unit || ''))));
        });
        return react_1.default.createElement("g", { className: "recharts-cartesian-axis-ticks" }, items);
    };
    CartesianAxis.prototype.render = function () {
        var _a = this.props, axisLine = _a.axisLine, width = _a.width, height = _a.height, ticksGenerator = _a.ticksGenerator, className = _a.className, hide = _a.hide;
        if (hide) {
            return null;
        }
        var _b = this.props, ticks = _b.ticks, noTicksProps = __rest(_b, ["ticks"]);
        var finalTicks = ticks;
        if (lodash_1.default.isFunction(ticksGenerator)) {
            finalTicks = ticks && ticks.length > 0 ? ticksGenerator(this.props) : ticksGenerator(noTicksProps);
        }
        if (width <= 0 || height <= 0 || !finalTicks || !finalTicks.length) {
            return null;
        }
        return (react_1.default.createElement(Layer_1.Layer, { className: classnames_1.default('recharts-cartesian-axis', className) },
            axisLine && this.renderAxisLine(),
            this.renderTicks(finalTicks),
            Label_1.Label.renderCallByParent(this.props)));
    };
    CartesianAxis.displayName = 'CartesianAxis';
    CartesianAxis.defaultProps = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        viewBox: { x: 0, y: 0, width: 0, height: 0 },
        orientation: 'bottom',
        ticks: [],
        stroke: '#666',
        tickLine: true,
        axisLine: true,
        tick: true,
        mirror: false,
        minTickGap: 5,
        tickSize: 6,
        tickMargin: 2,
        interval: 'preserveEnd',
    };
    return CartesianAxis;
}(react_1.Component));
exports.CartesianAxis = CartesianAxis;
//# sourceMappingURL=CartesianAxis.js.map