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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inRangeOfSector = exports.formatAngleOfSector = exports.getAngleOfPoint = exports.distanceBetweenPoints = exports.formatAxisMap = exports.getMaxRadius = exports.polarToCartesian = exports.radianToDegree = exports.degreeToRadian = exports.RADIAN = void 0;
var lodash_1 = __importDefault(require("lodash"));
var DataUtils_1 = require("./DataUtils");
var ChartUtils_1 = require("./ChartUtils");
exports.RADIAN = Math.PI / 180;
var degreeToRadian = function (angle) { return (angle * Math.PI) / 180; };
exports.degreeToRadian = degreeToRadian;
var radianToDegree = function (angleInRadian) { return (angleInRadian * 180) / Math.PI; };
exports.radianToDegree = radianToDegree;
var polarToCartesian = function (cx, cy, radius, angle) { return ({
    x: cx + Math.cos(-exports.RADIAN * angle) * radius,
    y: cy + Math.sin(-exports.RADIAN * angle) * radius,
}); };
exports.polarToCartesian = polarToCartesian;
var getMaxRadius = function (width, height, offset) {
    if (offset === void 0) { offset = {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }; }
    return Math.min(Math.abs(width - (offset.left || 0) - (offset.right || 0)), Math.abs(height - (offset.top || 0) - (offset.bottom || 0))) / 2;
};
exports.getMaxRadius = getMaxRadius;
var formatAxisMap = function (props, axisMap, offset, axisType, chartName) {
    var width = props.width, height = props.height;
    var startAngle = props.startAngle, endAngle = props.endAngle;
    var cx = DataUtils_1.getPercentValue(props.cx, width, width / 2);
    var cy = DataUtils_1.getPercentValue(props.cy, height, height / 2);
    var maxRadius = exports.getMaxRadius(width, height, offset);
    var innerRadius = DataUtils_1.getPercentValue(props.innerRadius, maxRadius, 0);
    var outerRadius = DataUtils_1.getPercentValue(props.outerRadius, maxRadius, maxRadius * 0.8);
    var ids = Object.keys(axisMap);
    return ids.reduce(function (result, id) {
        var _a;
        var axis = axisMap[id];
        var domain = axis.domain, reversed = axis.reversed;
        var range;
        if (lodash_1.default.isNil(axis.range)) {
            if (axisType === 'angleAxis') {
                range = [startAngle, endAngle];
            }
            else if (axisType === 'radiusAxis') {
                range = [innerRadius, outerRadius];
            }
            if (reversed) {
                range = [range[1], range[0]];
            }
        }
        else {
            (range = axis.range);
            startAngle = range[0], endAngle = range[1];
        }
        var _b = ChartUtils_1.parseScale(axis, chartName), realScaleType = _b.realScaleType, scale = _b.scale;
        scale.domain(domain).range(range);
        ChartUtils_1.checkDomainOfScale(scale);
        var ticks = ChartUtils_1.getTicksOfScale(scale, __assign(__assign({}, axis), { realScaleType: realScaleType }));
        var finalAxis = __assign(__assign(__assign({}, axis), ticks), { range: range, radius: outerRadius, realScaleType: realScaleType,
            scale: scale,
            cx: cx,
            cy: cy,
            innerRadius: innerRadius,
            outerRadius: outerRadius,
            startAngle: startAngle,
            endAngle: endAngle });
        return __assign(__assign({}, result), (_a = {}, _a[id] = finalAxis, _a));
    }, {});
};
exports.formatAxisMap = formatAxisMap;
var distanceBetweenPoints = function (point, anotherPoint) {
    var x1 = point.x, y1 = point.y;
    var x2 = anotherPoint.x, y2 = anotherPoint.y;
    return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
};
exports.distanceBetweenPoints = distanceBetweenPoints;
var getAngleOfPoint = function (_a, _b) {
    var x = _a.x, y = _a.y;
    var cx = _b.cx, cy = _b.cy;
    var radius = exports.distanceBetweenPoints({ x: x, y: y }, { x: cx, y: cy });
    if (radius <= 0) {
        return { radius: radius };
    }
    var cos = (x - cx) / radius;
    var angleInRadian = Math.acos(cos);
    if (y > cy) {
        angleInRadian = 2 * Math.PI - angleInRadian;
    }
    return { radius: radius, angle: exports.radianToDegree(angleInRadian), angleInRadian: angleInRadian };
};
exports.getAngleOfPoint = getAngleOfPoint;
var formatAngleOfSector = function (_a) {
    var startAngle = _a.startAngle, endAngle = _a.endAngle;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min = Math.min(startCnt, endCnt);
    return {
        startAngle: startAngle - min * 360,
        endAngle: endAngle - min * 360,
    };
};
exports.formatAngleOfSector = formatAngleOfSector;
var reverseFormatAngleOfSetor = function (angle, _a) {
    var startAngle = _a.startAngle, endAngle = _a.endAngle;
    var startCnt = Math.floor(startAngle / 360);
    var endCnt = Math.floor(endAngle / 360);
    var min = Math.min(startCnt, endCnt);
    return angle + min * 360;
};
var inRangeOfSector = function (_a, sector) {
    var x = _a.x, y = _a.y;
    var _b = exports.getAngleOfPoint({ x: x, y: y }, sector), radius = _b.radius, angle = _b.angle;
    var innerRadius = sector.innerRadius, outerRadius = sector.outerRadius;
    if (radius < innerRadius || radius > outerRadius) {
        return false;
    }
    if (radius === 0) {
        return true;
    }
    var _c = exports.formatAngleOfSector(sector), startAngle = _c.startAngle, endAngle = _c.endAngle;
    var formatAngle = angle;
    var inRange;
    if (startAngle <= endAngle) {
        while (formatAngle > endAngle) {
            formatAngle -= 360;
        }
        while (formatAngle < startAngle) {
            formatAngle += 360;
        }
        inRange = formatAngle >= startAngle && formatAngle <= endAngle;
    }
    else {
        while (formatAngle > startAngle) {
            formatAngle -= 360;
        }
        while (formatAngle < endAngle) {
            formatAngle += 360;
        }
        inRange = formatAngle >= endAngle && formatAngle <= startAngle;
    }
    if (inRange) {
        return __assign(__assign({}, sector), { radius: radius, angle: reverseFormatAngleOfSetor(formatAngle, sector) });
    }
    return null;
};
exports.inRangeOfSector = inRangeOfSector;
//# sourceMappingURL=PolarUtils.js.map