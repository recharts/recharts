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
exports.PolarAngleAxis = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var Layer_1 = require("../container/Layer");
var Dot_1 = require("../shape/Dot");
var Polygon_1 = require("../shape/Polygon");
var Text_1 = require("../component/Text");
var types_1 = require("../util/types");
var PolarUtils_1 = require("../util/PolarUtils");
var RADIAN = Math.PI / 180;
var eps = 1e-5;
var PolarAngleAxis = (function (_super) {
    __extends(PolarAngleAxis, _super);
    function PolarAngleAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarAngleAxis.prototype.getTickLineCoord = function (data) {
        var _a = this.props, cx = _a.cx, cy = _a.cy, radius = _a.radius, orientation = _a.orientation, tickSize = _a.tickSize;
        var tickLineSize = tickSize || 8;
        var p1 = PolarUtils_1.polarToCartesian(cx, cy, radius, data.coordinate);
        var p2 = PolarUtils_1.polarToCartesian(cx, cy, radius + (orientation === 'inner' ? -1 : 1) * tickLineSize, data.coordinate);
        return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
    };
    PolarAngleAxis.prototype.getTickTextAnchor = function (data) {
        var orientation = this.props.orientation;
        var cos = Math.cos(-data.coordinate * RADIAN);
        var textAnchor;
        if (cos > eps) {
            textAnchor = orientation === 'outer' ? 'start' : 'end';
        }
        else if (cos < -eps) {
            textAnchor = orientation === 'outer' ? 'end' : 'start';
        }
        else {
            textAnchor = 'middle';
        }
        return textAnchor;
    };
    PolarAngleAxis.prototype.renderAxisLine = function () {
        var _a = this.props, cx = _a.cx, cy = _a.cy, radius = _a.radius, axisLine = _a.axisLine, axisLineType = _a.axisLineType;
        var props = __assign(__assign(__assign({}, types_1.filterProps(this.props)), { fill: 'none' }), types_1.filterProps(axisLine));
        if (axisLineType === 'circle') {
            return react_1.default.createElement(Dot_1.Dot, __assign({ className: "recharts-polar-angle-axis-line" }, props, { cx: cx, cy: cy, r: radius }));
        }
        var ticks = this.props.ticks;
        var points = ticks.map(function (entry) { return PolarUtils_1.polarToCartesian(cx, cy, radius, entry.coordinate); });
        return react_1.default.createElement(Polygon_1.Polygon, __assign({ className: "recharts-polar-angle-axis-line" }, props, { points: points }));
    };
    PolarAngleAxis.renderTickItem = function (option, props, value) {
        var tickItem;
        if (react_1.default.isValidElement(option)) {
            tickItem = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            tickItem = option(props);
        }
        else {
            tickItem = (react_1.default.createElement(Text_1.Text, __assign({}, props, { className: "recharts-polar-angle-axis-tick-value" }), value));
        }
        return tickItem;
    };
    PolarAngleAxis.prototype.renderTicks = function () {
        var _this = this;
        var _a = this.props, ticks = _a.ticks, tick = _a.tick, tickLine = _a.tickLine, tickFormatter = _a.tickFormatter, stroke = _a.stroke;
        var axisProps = types_1.filterProps(this.props);
        var customTickProps = types_1.filterProps(tick);
        var tickLineProps = __assign(__assign(__assign({}, axisProps), { fill: 'none' }), types_1.filterProps(tickLine));
        var items = ticks.map(function (entry, i) {
            var lineCoord = _this.getTickLineCoord(entry);
            var textAnchor = _this.getTickTextAnchor(entry);
            var tickProps = __assign(__assign(__assign(__assign({ textAnchor: textAnchor }, axisProps), { stroke: 'none', fill: stroke }), customTickProps), { index: i, payload: entry, x: lineCoord.x2, y: lineCoord.y2 });
            return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-polar-angle-axis-tick", key: "tick-" + i }, types_1.adaptEventsOfChild(_this.props, entry, i)),
                tickLine && react_1.default.createElement("line", __assign({ className: "recharts-polar-angle-axis-tick-line" }, tickLineProps, lineCoord)),
                tick &&
                    PolarAngleAxis.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value)));
        });
        return react_1.default.createElement(Layer_1.Layer, { className: "recharts-polar-angle-axis-ticks" }, items);
    };
    PolarAngleAxis.prototype.render = function () {
        var _a = this.props, ticks = _a.ticks, radius = _a.radius, axisLine = _a.axisLine;
        if (radius <= 0 || !ticks || !ticks.length) {
            return null;
        }
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-polar-angle-axis" },
            axisLine && this.renderAxisLine(),
            this.renderTicks()));
    };
    PolarAngleAxis.displayName = 'PolarAngleAxis';
    PolarAngleAxis.axisType = 'angleAxis';
    PolarAngleAxis.defaultProps = {
        type: 'category',
        angleAxisId: 0,
        scale: 'auto',
        cx: 0,
        cy: 0,
        domain: [0, 'auto'],
        orientation: 'outer',
        axisLine: true,
        tickLine: true,
        tickSize: 8,
        tick: true,
        hide: false,
        allowDuplicatedCategory: true,
    };
    return PolarAngleAxis;
}(react_1.PureComponent));
exports.PolarAngleAxis = PolarAngleAxis;
//# sourceMappingURL=PolarAngleAxis.js.map