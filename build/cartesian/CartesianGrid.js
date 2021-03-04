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
exports.CartesianGrid = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var DataUtils_1 = require("../util/DataUtils");
var types_1 = require("../util/types");
var CartesianGrid = (function (_super) {
    __extends(CartesianGrid, _super);
    function CartesianGrid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CartesianGrid.renderLineItem = function (option, props) {
        var lineItem;
        if (react_1.default.isValidElement(option)) {
            lineItem = react_1.default.cloneElement(option, props);
        }
        else if (lodash_1.default.isFunction(option)) {
            lineItem = option(props);
        }
        else {
            var x1 = props.x1, y1 = props.y1, x2 = props.x2, y2 = props.y2, key = props.key, others = __rest(props, ["x1", "y1", "x2", "y2", "key"]);
            lineItem = react_1.default.createElement("line", __assign({}, types_1.filterProps(others), { x1: x1, y1: y1, x2: x2, y2: y2, fill: "none", key: key }));
        }
        return lineItem;
    };
    CartesianGrid.prototype.renderHorizontal = function (horizontalPoints) {
        var _this = this;
        var _a = this.props, x = _a.x, width = _a.width, horizontal = _a.horizontal;
        if (!horizontalPoints || !horizontalPoints.length) {
            return null;
        }
        var items = horizontalPoints.map(function (entry, i) {
            var props = __assign(__assign({}, _this.props), { x1: x, y1: entry, x2: x + width, y2: entry, key: "line-" + i, index: i });
            return CartesianGrid.renderLineItem(horizontal, props);
        });
        return react_1.default.createElement("g", { className: "recharts-cartesian-grid-horizontal" }, items);
    };
    CartesianGrid.prototype.renderVertical = function (verticalPoints) {
        var _this = this;
        var _a = this.props, y = _a.y, height = _a.height, vertical = _a.vertical;
        if (!verticalPoints || !verticalPoints.length) {
            return null;
        }
        var items = verticalPoints.map(function (entry, i) {
            var props = __assign(__assign({}, _this.props), { x1: entry, y1: y, x2: entry, y2: y + height, key: "line-" + i, index: i });
            return CartesianGrid.renderLineItem(vertical, props);
        });
        return react_1.default.createElement("g", { className: "recharts-cartesian-grid-vertical" }, items);
    };
    CartesianGrid.prototype.renderVerticalStripes = function (verticalPoints) {
        var verticalFill = this.props.verticalFill;
        if (!verticalFill || !verticalFill.length) {
            return null;
        }
        var _a = this.props, fillOpacity = _a.fillOpacity, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var verticalPointsUpdated = verticalPoints.slice().sort(function (a, b) { return a - b; });
        if (x !== verticalPointsUpdated[0]) {
            verticalPointsUpdated.unshift(0);
        }
        var items = verticalPointsUpdated.map(function (entry, i) {
            var lineWidth = verticalPointsUpdated[i + 1] ? verticalPointsUpdated[i + 1] - entry : x + width - entry;
            if (lineWidth <= 0) {
                return null;
            }
            var colorIndex = i % verticalFill.length;
            return (react_1.default.createElement("rect", { key: "react-" + i, x: Math.round(entry + x - x), y: y, width: lineWidth, height: height, stroke: "none", fill: verticalFill[colorIndex], fillOpacity: fillOpacity, className: "recharts-cartesian-grid-bg" }));
        });
        return react_1.default.createElement("g", { className: "recharts-cartesian-gridstripes-vertical" }, items);
    };
    CartesianGrid.prototype.renderHorizontalStripes = function (horizontalPoints) {
        var horizontalFill = this.props.horizontalFill;
        if (!horizontalFill || !horizontalFill.length) {
            return null;
        }
        var _a = this.props, fillOpacity = _a.fillOpacity, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        var horizontalPointsUpdated = horizontalPoints.slice().sort(function (a, b) { return a - b; });
        if (y !== horizontalPointsUpdated[0]) {
            horizontalPointsUpdated.unshift(0);
        }
        var items = horizontalPointsUpdated.map(function (entry, i) {
            var lineHeight = horizontalPointsUpdated[i + 1] ? horizontalPointsUpdated[i + 1] - entry : y + height - entry;
            if (lineHeight <= 0) {
                return null;
            }
            var colorIndex = i % horizontalFill.length;
            return (react_1.default.createElement("rect", { key: "react-" + i, y: Math.round(entry + y - y), x: x, height: lineHeight, width: width, stroke: "none", fill: horizontalFill[colorIndex], fillOpacity: fillOpacity, className: "recharts-cartesian-grid-bg" }));
        });
        return react_1.default.createElement("g", { className: "recharts-cartesian-gridstripes-horizontal" }, items);
    };
    CartesianGrid.prototype.renderBackground = function () {
        var fill = this.props.fill;
        if (!fill || fill === 'none') {
            return null;
        }
        var _a = this.props, fillOpacity = _a.fillOpacity, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        return (react_1.default.createElement("rect", { x: x, y: y, width: width, height: height, stroke: "none", fill: fill, fillOpacity: fillOpacity, className: "recharts-cartesian-grid-bg" }));
    };
    CartesianGrid.prototype.render = function () {
        var _a = this.props, x = _a.x, y = _a.y, width = _a.width, height = _a.height, horizontal = _a.horizontal, vertical = _a.vertical, horizontalCoordinatesGenerator = _a.horizontalCoordinatesGenerator, verticalCoordinatesGenerator = _a.verticalCoordinatesGenerator, xAxis = _a.xAxis, yAxis = _a.yAxis, offset = _a.offset, chartWidth = _a.chartWidth, chartHeight = _a.chartHeight;
        if (!DataUtils_1.isNumber(width) ||
            width <= 0 ||
            !DataUtils_1.isNumber(height) ||
            height <= 0 ||
            !DataUtils_1.isNumber(x) ||
            x !== +x ||
            !DataUtils_1.isNumber(y) ||
            y !== +y) {
            return null;
        }
        var _b = this.props, horizontalPoints = _b.horizontalPoints, verticalPoints = _b.verticalPoints;
        if ((!horizontalPoints || !horizontalPoints.length) && lodash_1.default.isFunction(horizontalCoordinatesGenerator)) {
            horizontalPoints = horizontalCoordinatesGenerator({ yAxis: yAxis, width: chartWidth, height: chartHeight, offset: offset });
        }
        if ((!verticalPoints || !verticalPoints.length) && lodash_1.default.isFunction(verticalCoordinatesGenerator)) {
            verticalPoints = verticalCoordinatesGenerator({ xAxis: xAxis, width: chartWidth, height: chartHeight, offset: offset });
        }
        return (react_1.default.createElement("g", { className: "recharts-cartesian-grid" },
            this.renderBackground(),
            horizontal && this.renderHorizontal(horizontalPoints),
            vertical && this.renderVertical(verticalPoints),
            horizontal && this.renderHorizontalStripes(horizontalPoints),
            vertical && this.renderVerticalStripes(verticalPoints)));
    };
    CartesianGrid.displayName = 'CartesianGrid';
    CartesianGrid.defaultProps = {
        horizontal: true,
        vertical: true,
        horizontalPoints: [],
        verticalPoints: [],
        stroke: '#ccc',
        fill: 'none',
        verticalFill: [],
        horizontalFill: [],
    };
    return CartesianGrid;
}(react_1.PureComponent));
exports.CartesianGrid = CartesianGrid;
//# sourceMappingURL=CartesianGrid.js.map