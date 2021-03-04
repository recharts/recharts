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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolarGrid = void 0;
var react_1 = __importStar(require("react"));
var PolarUtils_1 = require("../util/PolarUtils");
var types_1 = require("../util/types");
var PolarGrid = (function (_super) {
    __extends(PolarGrid, _super);
    function PolarGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PolarGrid.prototype.getPolygonPath = function (radius) {
        var _a = this.props, cx = _a.cx, cy = _a.cy, polarAngles = _a.polarAngles;
        var path = '';
        polarAngles.forEach(function (angle, i) {
            var point = PolarUtils_1.polarToCartesian(cx, cy, radius, angle);
            if (i) {
                path += "L " + point.x + "," + point.y;
            }
            else {
                path += "M " + point.x + "," + point.y;
            }
        });
        path += 'Z';
        return path;
    };
    PolarGrid.prototype.renderPolarAngles = function () {
        var _a = this.props, cx = _a.cx, cy = _a.cy, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, polarAngles = _a.polarAngles, radialLines = _a.radialLines;
        if (!polarAngles || !polarAngles.length || !radialLines) {
            return null;
        }
        var props = __assign({ stroke: '#ccc' }, types_1.filterProps(this.props));
        return (react_1.default.createElement("g", { className: "recharts-polar-grid-angle" }, polarAngles.map(function (entry, i) {
            var start = PolarUtils_1.polarToCartesian(cx, cy, innerRadius, entry);
            var end = PolarUtils_1.polarToCartesian(cx, cy, outerRadius, entry);
            return (react_1.default.createElement("line", __assign({}, props, { key: "line-" + i, x1: start.x, y1: start.y, x2: end.x, y2: end.y })));
        })));
    };
    PolarGrid.prototype.renderConcentricCircle = function (radius, index, extraProps) {
        var _a = this.props, cx = _a.cx, cy = _a.cy;
        var props = __assign(__assign(__assign({ stroke: '#ccc' }, types_1.filterProps(this.props)), { fill: 'none' }), extraProps);
        return (react_1.default.createElement("circle", __assign({}, props, { className: "recharts-polar-grid-concentric-circle", key: "circle-" + index, cx: cx, cy: cy, r: radius })));
    };
    PolarGrid.prototype.renderConcentricPolygon = function (radius, index, extraProps) {
        var props = __assign(__assign(__assign({ stroke: '#ccc' }, types_1.filterProps(this.props)), { fill: 'none' }), extraProps);
        return (react_1.default.createElement("path", __assign({}, props, { className: "recharts-polar-grid-concentric-polygon", key: "path-" + index, d: this.getPolygonPath(radius) })));
    };
    PolarGrid.prototype.renderConcentricPath = function () {
        var _this = this;
        var _a = this.props, polarRadius = _a.polarRadius, gridType = _a.gridType;
        if (!polarRadius || !polarRadius.length) {
            return null;
        }
        return (react_1.default.createElement("g", { className: "recharts-polar-grid-concentric" }, polarRadius.map(function (entry, i) {
            return gridType === 'circle' ? _this.renderConcentricCircle(entry, i) : _this.renderConcentricPolygon(entry, i);
        })));
    };
    PolarGrid.prototype.render = function () {
        var outerRadius = this.props.outerRadius;
        if (outerRadius <= 0) {
            return null;
        }
        return (react_1.default.createElement("g", { className: "recharts-polar-grid" },
            this.renderPolarAngles(),
            this.renderConcentricPath()));
    };
    PolarGrid.displayName = 'PolarGrid';
    PolarGrid.defaultProps = {
        cx: 0,
        cy: 0,
        innerRadius: 0,
        outerRadius: 0,
        gridType: 'polygon',
        radialLines: true,
    };
    return PolarGrid;
}(react_1.PureComponent));
exports.PolarGrid = PolarGrid;
//# sourceMappingURL=PolarGrid.js.map