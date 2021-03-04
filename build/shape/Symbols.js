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
exports.Symbols = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var d3_shape_1 = require("d3-shape");
var classnames_1 = __importDefault(require("classnames"));
var types_1 = require("../util/types");
var symbolFactories = {
    symbolCircle: d3_shape_1.symbolCircle,
    symbolCross: d3_shape_1.symbolCross,
    symbolDiamond: d3_shape_1.symbolDiamond,
    symbolSquare: d3_shape_1.symbolSquare,
    symbolStar: d3_shape_1.symbolStar,
    symbolTriangle: d3_shape_1.symbolTriangle,
    symbolWye: d3_shape_1.symbolWye,
};
var RADIAN = Math.PI / 180;
var getSymbolFactory = function (type) {
    var name = "symbol" + lodash_1.default.upperFirst(type);
    return symbolFactories[name] || d3_shape_1.symbolCircle;
};
var calculateAreaSize = function (size, sizeType, type) {
    if (sizeType === 'area') {
        return size;
    }
    switch (type) {
        case 'cross':
            return (5 * size * size) / 9;
        case 'diamond':
            return (0.5 * size * size) / Math.sqrt(3);
        case 'square':
            return size * size;
        case 'star': {
            var angle = 18 * RADIAN;
            return 1.25 * size * size * (Math.tan(angle) - Math.tan(angle * 2) * Math.pow(Math.tan(angle), 2));
        }
        case 'triangle':
            return (Math.sqrt(3) * size * size) / 4;
        case 'wye':
            return ((21 - 10 * Math.sqrt(3)) * size * size) / 8;
        default:
            return (Math.PI * size * size) / 4;
    }
};
var Symbols = (function (_super) {
    __extends(Symbols, _super);
    function Symbols() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Symbols.prototype.getPath = function () {
        var _a = this.props, size = _a.size, sizeType = _a.sizeType, type = _a.type;
        var symbolFactory = getSymbolFactory(type);
        var symbol = d3_shape_1.symbol().type(symbolFactory).size(calculateAreaSize(size, sizeType, type));
        return symbol();
    };
    Symbols.prototype.render = function () {
        var _a = this.props, className = _a.className, cx = _a.cx, cy = _a.cy, size = _a.size;
        if (cx === +cx && cy === +cy && size === +size) {
            return (react_1.default.createElement("path", __assign({}, types_1.filterProps(this.props, true), { className: classnames_1.default('recharts-symbols', className), transform: "translate(" + cx + ", " + cy + ")", d: this.getPath() })));
        }
        return null;
    };
    Symbols.defaultProps = {
        type: 'circle',
        size: 64,
        sizeType: 'area',
    };
    Symbols.registerSymbol = function (key, factory) {
        symbolFactories["symbol" + lodash_1.default.upperFirst(key)] = factory;
    };
    return Symbols;
}(react_1.PureComponent));
exports.Symbols = Symbols;
//# sourceMappingURL=Symbols.js.map