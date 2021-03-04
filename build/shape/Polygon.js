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
exports.Polygon = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var types_1 = require("../util/types");
var isValidatePoint = function (point) {
    return point && point.x === +point.x && point.y === +point.y;
};
var getParsedPoints = function (points) {
    if (points === void 0) { points = []; }
    var segmentPoints = [[]];
    points.forEach(function (entry) {
        if (isValidatePoint(entry)) {
            segmentPoints[segmentPoints.length - 1].push(entry);
        }
        else if (segmentPoints[segmentPoints.length - 1].length > 0) {
            segmentPoints.push([]);
        }
    });
    if (isValidatePoint(points[0])) {
        segmentPoints[segmentPoints.length - 1].push(points[0]);
    }
    if (segmentPoints[segmentPoints.length - 1].length <= 0) {
        segmentPoints = segmentPoints.slice(0, -1);
    }
    return segmentPoints;
};
var getSinglePolygonPath = function (points, connectNulls) {
    var segmentPoints = getParsedPoints(points);
    if (connectNulls) {
        segmentPoints = [
            segmentPoints.reduce(function (res, segPoints) {
                return __spreadArray(__spreadArray([], res), segPoints);
            }, []),
        ];
    }
    var polygonPath = segmentPoints
        .map(function (segPoints) {
        return segPoints.reduce(function (path, point, index) {
            return "" + path + (index === 0 ? 'M' : 'L') + point.x + "," + point.y;
        }, '');
    })
        .join('');
    return segmentPoints.length === 1 ? polygonPath + "Z" : polygonPath;
};
var getRanglePath = function (points, baseLinePoints, connectNulls) {
    var outerPath = getSinglePolygonPath(points, connectNulls);
    return (outerPath.slice(-1) === 'Z' ? outerPath.slice(0, -1) : outerPath) + "L" + getSinglePolygonPath(baseLinePoints.reverse(), connectNulls).slice(1);
};
var Polygon = (function (_super) {
    __extends(Polygon, _super);
    function Polygon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Polygon.prototype.render = function () {
        var _a = this.props, points = _a.points, className = _a.className, baseLinePoints = _a.baseLinePoints, connectNulls = _a.connectNulls, others = __rest(_a, ["points", "className", "baseLinePoints", "connectNulls"]);
        if (!points || !points.length) {
            return null;
        }
        var layerClass = classnames_1.default('recharts-polygon', className);
        if (baseLinePoints && baseLinePoints.length) {
            var hasStroke = others.stroke && others.stroke !== 'none';
            var rangePath = getRanglePath(points, baseLinePoints, connectNulls);
            return (react_1.default.createElement("g", { className: layerClass },
                react_1.default.createElement("path", __assign({}, types_1.filterProps(others, true), { fill: rangePath.slice(-1) === 'Z' ? others.fill : 'none', stroke: "none", d: rangePath })),
                hasStroke ? (react_1.default.createElement("path", __assign({}, types_1.filterProps(others, true), { fill: "none", d: getSinglePolygonPath(points, connectNulls) }))) : null,
                hasStroke ? (react_1.default.createElement("path", __assign({}, types_1.filterProps(others, true), { fill: "none", d: getSinglePolygonPath(baseLinePoints, connectNulls) }))) : null));
        }
        var singlePath = getSinglePolygonPath(points, connectNulls);
        return (react_1.default.createElement("path", __assign({}, types_1.filterProps(others, true), { fill: singlePath.slice(-1) === 'Z' ? others.fill : 'none', className: layerClass, d: singlePath })));
    };
    return Polygon;
}(react_1.PureComponent));
exports.Polygon = Polygon;
//# sourceMappingURL=Polygon.js.map