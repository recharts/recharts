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
exports.DefaultLegendContent = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var Surface_1 = require("../container/Surface");
var Symbols_1 = require("../shape/Symbols");
var types_1 = require("../util/types");
var SIZE = 32;
var DefaultLegendContent = (function (_super) {
    __extends(DefaultLegendContent, _super);
    function DefaultLegendContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultLegendContent.prototype.renderIcon = function (data) {
        var inactiveColor = this.props.inactiveColor;
        var halfSize = SIZE / 2;
        var sixthSize = SIZE / 6;
        var thirdSize = SIZE / 3;
        var color = data.inactive ? inactiveColor : data.color;
        if (data.type === 'plainline') {
            return (react_1.default.createElement("line", { strokeWidth: 4, fill: "none", stroke: color, strokeDasharray: data.payload.strokeDasharray, x1: 0, y1: halfSize, x2: SIZE, y2: halfSize, className: "recharts-legend-icon" }));
        }
        if (data.type === 'line') {
            return (react_1.default.createElement("path", { strokeWidth: 4, fill: "none", stroke: color, d: "M0," + halfSize + "h" + thirdSize + "\n            A" + sixthSize + "," + sixthSize + ",0,1,1," + 2 * thirdSize + "," + halfSize + "\n            H" + SIZE + "M" + 2 * thirdSize + "," + halfSize + "\n            A" + sixthSize + "," + sixthSize + ",0,1,1," + thirdSize + "," + halfSize, className: "recharts-legend-icon" }));
        }
        if (data.type === 'rect') {
            return (react_1.default.createElement("path", { stroke: "none", fill: color, d: "M0," + SIZE / 8 + "h" + SIZE + "v" + (SIZE * 3) / 4 + "h" + -SIZE + "z", className: "recharts-legend-icon" }));
        }
        if (react_1.default.isValidElement(data.legendIcon)) {
            var iconProps = __assign({}, data);
            delete iconProps.legendIcon;
            return react_1.default.cloneElement(data.legendIcon, iconProps);
        }
        return (react_1.default.createElement(Symbols_1.Symbols, { fill: color, cx: halfSize, cy: halfSize, size: SIZE, sizeType: "diameter", type: data.type }));
    };
    DefaultLegendContent.prototype.renderItems = function () {
        var _this = this;
        var _a = this.props, payload = _a.payload, iconSize = _a.iconSize, layout = _a.layout, formatter = _a.formatter, inactiveColor = _a.inactiveColor;
        var viewBox = { x: 0, y: 0, width: SIZE, height: SIZE };
        var itemStyle = {
            display: layout === 'horizontal' ? 'inline-block' : 'block',
            marginRight: 10,
        };
        var svgStyle = { display: 'inline-block', verticalAlign: 'middle', marginRight: 4 };
        return payload.map(function (entry, i) {
            var _a;
            var finalFormatter = entry.formatter || formatter;
            var className = classnames_1.default((_a = {
                    'recharts-legend-item': true
                },
                _a["legend-item-" + i] = true,
                _a.inactive = entry.inactive,
                _a));
            if (entry.type === 'none') {
                return null;
            }
            var color = entry.inactive ? inactiveColor : entry.color;
            return (react_1.default.createElement("li", __assign({ className: className, style: itemStyle, key: "legend-item-" + i }, types_1.adaptEventsOfChild(_this.props, entry, i)),
                react_1.default.createElement(Surface_1.Surface, { width: iconSize, height: iconSize, viewBox: viewBox, style: svgStyle }, _this.renderIcon(entry)),
                react_1.default.createElement("span", { className: "recharts-legend-item-text", style: { color: color } }, finalFormatter ? finalFormatter(entry.value, entry, i) : entry.value)));
        });
    };
    DefaultLegendContent.prototype.render = function () {
        var _a = this.props, payload = _a.payload, layout = _a.layout, align = _a.align;
        if (!payload || !payload.length) {
            return null;
        }
        var finalStyle = {
            padding: 0,
            margin: 0,
            textAlign: layout === 'horizontal' ? align : 'left',
        };
        return (react_1.default.createElement("ul", { className: "recharts-default-legend", style: finalStyle }, this.renderItems()));
    };
    DefaultLegendContent.displayName = 'Legend';
    DefaultLegendContent.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'middle',
        inactiveColor: '#ccc',
    };
    return DefaultLegendContent;
}(react_1.PureComponent));
exports.DefaultLegendContent = DefaultLegendContent;
//# sourceMappingURL=DefaultLegendContent.js.map