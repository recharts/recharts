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
exports.PolarRadiusAxis = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var Text_1 = require("../component/Text");
var Label_1 = require("../component/Label");
var Layer_1 = require("../container/Layer");
var PolarUtils_1 = require("../util/PolarUtils");
var types_1 = require("../util/types");
var PolarRadiusAxis = (function (_super) {
    __extends(PolarRadiusAxis, _super);
    function PolarRadiusAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarRadiusAxis.prototype.getTickValueCoord = function (_a) {
        var coordinate = _a.coordinate;
        var _b = this.props, angle = _b.angle, cx = _b.cx, cy = _b.cy;
        return PolarUtils_1.polarToCartesian(cx, cy, coordinate, angle);
    };
    PolarRadiusAxis.prototype.getTickTextAnchor = function () {
        var orientation = this.props.orientation;
        var textAnchor;
        switch (orientation) {
            case 'left':
                textAnchor = 'end';
                break;
            case 'right':
                textAnchor = 'start';
                break;
            default:
                textAnchor = 'middle';
                break;
        }
        return textAnchor;
    };
    PolarRadiusAxis.prototype.getViewBox = function () {
        var _a = this.props, cx = _a.cx, cy = _a.cy, angle = _a.angle, ticks = _a.ticks;
        var maxRadiusTick = lodash_1.default.maxBy(ticks, function (entry) { return entry.coordinate || 0; });
        var minRadiusTick = lodash_1.default.minBy(ticks, function (entry) { return entry.coordinate || 0; });
        return {
            cx: cx,
            cy: cy,
            startAngle: angle,
            endAngle: angle,
            innerRadius: minRadiusTick.coordinate || 0,
            outerRadius: maxRadiusTick.coordinate || 0,
        };
    };
    PolarRadiusAxis.prototype.renderAxisLine = function () {
        var _a = this.props, cx = _a.cx, cy = _a.cy, angle = _a.angle, ticks = _a.ticks, axisLine = _a.axisLine, others = __rest(_a, ["cx", "cy", "angle", "ticks", "axisLine"]);
        var extent = ticks.reduce(function (result, entry) { return [Math.min(result[0], entry.coordinate), Math.max(result[1], entry.coordinate)]; }, [Infinity, -Infinity]);
        var point0 = PolarUtils_1.polarToCartesian(cx, cy, extent[0], angle);
        var point1 = PolarUtils_1.polarToCartesian(cx, cy, extent[1], angle);
        var props = __assign(__assign(__assign(__assign({}, types_1.filterProps(others)), { fill: 'none' }), types_1.filterProps(axisLine)), { x1: point0.x, y1: point0.y, x2: point1.x, y2: point1.y });
        return react_1.default.createElement("line", __assign({ className: "recharts-polar-radius-axis-line" }, props));
    };
    PolarRadiusAxis.renderTickItem = function (option, props, value) {
        var tickItem;
        if (react_1.default.isValidElement(option)) {
            tickItem = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            tickItem = option(props);
        }
        else {
            tickItem = (react_1.default.createElement(Text_1.Text, __assign({}, props, { className: "recharts-polar-radius-axis-tick-value" }), value));
        }
        return tickItem;
    };
    PolarRadiusAxis.prototype.renderTicks = function () {
        var _this = this;
        var _a = this.props, ticks = _a.ticks, tick = _a.tick, angle = _a.angle, tickFormatter = _a.tickFormatter, stroke = _a.stroke, others = __rest(_a, ["ticks", "tick", "angle", "tickFormatter", "stroke"]);
        var textAnchor = this.getTickTextAnchor();
        var axisProps = types_1.filterProps(others);
        var customTickProps = types_1.filterProps(tick);
        var items = ticks.map(function (entry, i) {
            var coord = _this.getTickValueCoord(entry);
            var tickProps = __assign(__assign(__assign(__assign(__assign(__assign({ textAnchor: textAnchor, transform: "rotate(" + (90 - angle) + ", " + coord.x + ", " + coord.y + ")" }, axisProps), { stroke: 'none', fill: stroke }), customTickProps), { index: i }), coord), { payload: entry });
            return (react_1.default.createElement(Layer_1.Layer, __assign({ className: "recharts-polar-radius-axis-tick", key: "tick-" + i }, types_1.adaptEventsOfChild(_this.props, entry, i)), PolarRadiusAxis.renderTickItem(tick, tickProps, tickFormatter ? tickFormatter(entry.value, i) : entry.value)));
        });
        return react_1.default.createElement(Layer_1.Layer, { className: "recharts-polar-radius-axis-ticks" }, items);
    };
    PolarRadiusAxis.prototype.render = function () {
        var _a = this.props, ticks = _a.ticks, axisLine = _a.axisLine, tick = _a.tick;
        if (!ticks || !ticks.length) {
            return null;
        }
        return (react_1.default.createElement(Layer_1.Layer, { className: "recharts-polar-radius-axis" },
            axisLine && this.renderAxisLine(),
            tick && this.renderTicks(),
            Label_1.Label.renderCallByParent(this.props, this.getViewBox())));
    };
    PolarRadiusAxis.displayName = 'PolarRadiusAxis';
    PolarRadiusAxis.axisType = 'radiusAxis';
    PolarRadiusAxis.defaultProps = {
        type: 'number',
        radiusAxisId: 0,
        cx: 0,
        cy: 0,
        angle: 0,
        orientation: 'right',
        stroke: '#ccc',
        axisLine: true,
        tick: true,
        tickCount: 5,
        domain: [0, 'auto'],
        allowDataOverflow: false,
        scale: 'auto',
        allowDuplicatedCategory: true,
    };
    return PolarRadiusAxis;
}(react_1.PureComponent));
exports.PolarRadiusAxis = PolarRadiusAxis;
//# sourceMappingURL=PolarRadiusAxis.js.map