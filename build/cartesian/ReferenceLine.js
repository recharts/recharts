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
exports.ReferenceLine = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var classnames_1 = __importDefault(require("classnames"));
var Layer_1 = require("../container/Layer");
var Label_1 = require("../component/Label");
var IfOverflowMatches_1 = require("../util/IfOverflowMatches");
var DataUtils_1 = require("../util/DataUtils");
var CartesianUtils_1 = require("../util/CartesianUtils");
var LogUtils_1 = require("../util/LogUtils");
var types_1 = require("../util/types");
var renderLine = function (option, props) {
    var line;
    if (react_1.default.isValidElement(option)) {
        line = react_1.default.cloneElement(option, props);
    }
    else if (lodash_1.default.isFunction(option)) {
        line = option(props);
    }
    else {
        line = react_1.default.createElement("line", __assign({}, props, { className: "recharts-reference-line-line" }));
    }
    return line;
};
var getEndPoints = function (scales, isFixedX, isFixedY, isSegment, props) {
    var _a = props.viewBox, x = _a.x, y = _a.y, width = _a.width, height = _a.height, position = props.position;
    if (isFixedY) {
        var yCoord = props.y, orientation_1 = props.yAxis.orientation;
        var coord = scales.y.apply(yCoord, { position: position });
        if (IfOverflowMatches_1.ifOverflowMatches(props, 'discard') && !scales.y.isInRange(coord)) {
            return null;
        }
        var points = [
            { x: x + width, y: coord },
            { x: x, y: coord },
        ];
        return orientation_1 === 'left' ? points.reverse() : points;
    }
    if (isFixedX) {
        var xCoord = props.x, orientation_2 = props.xAxis.orientation;
        var coord = scales.x.apply(xCoord, { position: position });
        if (IfOverflowMatches_1.ifOverflowMatches(props, 'discard') && !scales.x.isInRange(coord)) {
            return null;
        }
        var points = [
            { x: coord, y: y + height },
            { x: coord, y: y },
        ];
        return orientation_2 === 'top' ? points.reverse() : points;
    }
    if (isSegment) {
        var segment = props.segment;
        var points = segment.map(function (p) { return scales.apply(p, { position: position }); });
        if (IfOverflowMatches_1.ifOverflowMatches(props, 'discard') && lodash_1.default.some(points, function (p) { return !scales.isInRange(p); })) {
            return null;
        }
        return points;
    }
    return null;
};
function ReferenceLine(props) {
    var fixedX = props.x, fixedY = props.y, segment = props.segment, xAxis = props.xAxis, yAxis = props.yAxis, shape = props.shape, className = props.className, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
    LogUtils_1.warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var scales = CartesianUtils_1.createLabeledScales({ x: xAxis.scale, y: yAxis.scale });
    var isX = DataUtils_1.isNumOrStr(fixedX);
    var isY = DataUtils_1.isNumOrStr(fixedY);
    var isSegment = segment && segment.length === 2;
    var endPoints = getEndPoints(scales, isX, isY, isSegment, props);
    if (!endPoints) {
        return null;
    }
    var _a = endPoints[0], x1 = _a.x, y1 = _a.y, _b = endPoints[1], x2 = _b.x, y2 = _b.y;
    var clipPath = IfOverflowMatches_1.ifOverflowMatches(props, 'hidden') ? "url(#" + clipPathId + ")" : undefined;
    var lineProps = __assign(__assign({ clipPath: clipPath }, types_1.filterProps(props, true)), { x1: x1,
        y1: y1,
        x2: x2,
        y2: y2 });
    return (react_1.default.createElement(Layer_1.Layer, { className: classnames_1.default('recharts-reference-line', className) },
        renderLine(shape, lineProps),
        Label_1.Label.renderCallByParent(props, CartesianUtils_1.rectWithCoords({ x1: x1, y1: y1, x2: x2, y2: y2 }))));
}
exports.ReferenceLine = ReferenceLine;
ReferenceLine.displayName = 'ReferenceLine';
ReferenceLine.defaultProps = {
    isFront: false,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    fill: 'none',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
    position: 'middle',
};
//# sourceMappingURL=ReferenceLine.js.map