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
exports.Curve = void 0;
var react_1 = __importStar(require("react"));
var d3_shape_1 = require("d3-shape");
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var types_1 = require("../util/types");
var DataUtils_1 = require("../util/DataUtils");
var CURVE_FACTORIES = {
    curveBasisClosed: d3_shape_1.curveBasisClosed,
    curveBasisOpen: d3_shape_1.curveBasisOpen,
    curveBasis: d3_shape_1.curveBasis,
    curveLinearClosed: d3_shape_1.curveLinearClosed,
    curveLinear: d3_shape_1.curveLinear,
    curveMonotoneX: d3_shape_1.curveMonotoneX,
    curveMonotoneY: d3_shape_1.curveMonotoneY,
    curveNatural: d3_shape_1.curveNatural,
    curveStep: d3_shape_1.curveStep,
    curveStepAfter: d3_shape_1.curveStepAfter,
    curveStepBefore: d3_shape_1.curveStepBefore,
};
var defined = function (p) { return p.x === +p.x && p.y === +p.y; };
var getX = function (p) { return p.x; };
var getY = function (p) { return p.y; };
var getCurveFactory = function (type, layout) {
    if (lodash_1.default.isFunction(type)) {
        return type;
    }
    var name = "curve" + lodash_1.default.upperFirst(type);
    if (name === 'curveMonotone' && layout) {
        return CURVE_FACTORIES["" + name + (layout === 'vertical' ? 'Y' : 'X')];
    }
    return CURVE_FACTORIES[name] || d3_shape_1.curveLinear;
};
var Curve = (function (_super) {
    __extends(Curve, _super);
    function Curve() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Curve.prototype.getPath = function () {
        var _a = this.props, type = _a.type, points = _a.points, baseLine = _a.baseLine, layout = _a.layout, connectNulls = _a.connectNulls;
        var curveFactory = getCurveFactory(type, layout);
        var formatPoints = connectNulls ? points.filter(function (entry) { return defined(entry); }) : points;
        var lineFunction;
        if (lodash_1.default.isArray(baseLine)) {
            var formatBaseLine_1 = connectNulls ? baseLine.filter(function (base) { return defined(base); }) : baseLine;
            var areaPoints = formatPoints.map(function (entry, index) { return (__assign(__assign({}, entry), { base: formatBaseLine_1[index] })); });
            if (layout === 'vertical') {
                lineFunction = d3_shape_1.area()
                    .y(getY)
                    .x1(getX)
                    .x0(function (d) { return d.base.x; });
            }
            else {
                lineFunction = d3_shape_1.area()
                    .x(getX)
                    .y1(getY)
                    .y0(function (d) { return d.base.y; });
            }
            lineFunction.defined(defined).curve(curveFactory);
            return lineFunction(areaPoints);
        }
        if (layout === 'vertical' && DataUtils_1.isNumber(baseLine)) {
            lineFunction = d3_shape_1.area().y(getY).x1(getX).x0(baseLine);
        }
        else if (DataUtils_1.isNumber(baseLine)) {
            lineFunction = d3_shape_1.area().x(getX).y1(getY).y0(baseLine);
        }
        else {
            lineFunction = d3_shape_1.line().x(getX).y(getY);
        }
        lineFunction.defined(defined).curve(curveFactory);
        return lineFunction(formatPoints);
    };
    Curve.prototype.render = function () {
        var _a = this.props, className = _a.className, points = _a.points, path = _a.path, pathRef = _a.pathRef;
        if ((!points || !points.length) && !path) {
            return null;
        }
        var realPath = points && points.length ? this.getPath() : path;
        return (react_1.default.createElement("path", __assign({}, types_1.filterProps(this.props), types_1.adaptEventHandlers(this.props), { className: classnames_1.default('recharts-curve', className), d: realPath, ref: pathRef })));
    };
    Curve.defaultProps = {
        type: 'linear',
        points: [],
        connectNulls: false,
    };
    return Curve;
}(react_1.PureComponent));
exports.Curve = Curve;
//# sourceMappingURL=Curve.js.map