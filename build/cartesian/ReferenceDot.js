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
exports.ReferenceDot = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var classnames_1 = __importDefault(require("classnames"));
var Layer_1 = require("../container/Layer");
var Dot_1 = require("../shape/Dot");
var Label_1 = require("../component/Label");
var DataUtils_1 = require("../util/DataUtils");
var IfOverflowMatches_1 = require("../util/IfOverflowMatches");
var CartesianUtils_1 = require("../util/CartesianUtils");
var LogUtils_1 = require("../util/LogUtils");
var types_1 = require("../util/types");
var getCoordinate = function (props) {
    var x = props.x, y = props.y, xAxis = props.xAxis, yAxis = props.yAxis;
    var scales = CartesianUtils_1.createLabeledScales({ x: xAxis.scale, y: yAxis.scale });
    var result = scales.apply({ x: x, y: y }, { bandAware: true });
    if (IfOverflowMatches_1.ifOverflowMatches(props, 'discard') && !scales.isInRange(result)) {
        return null;
    }
    return result;
};
function ReferenceDot(props) {
    var x = props.x, y = props.y, r = props.r, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
    var isX = DataUtils_1.isNumOrStr(x);
    var isY = DataUtils_1.isNumOrStr(y);
    LogUtils_1.warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    if (!isX || !isY) {
        return null;
    }
    var coordinate = getCoordinate(props);
    if (!coordinate) {
        return null;
    }
    var cx = coordinate.x, cy = coordinate.y;
    var shape = props.shape, className = props.className;
    var clipPath = IfOverflowMatches_1.ifOverflowMatches(props, 'hidden') ? "url(#" + clipPathId + ")" : undefined;
    var dotProps = __assign(__assign({ clipPath: clipPath }, types_1.filterProps(props, true)), { cx: cx,
        cy: cy });
    return (react_1.default.createElement(Layer_1.Layer, { className: classnames_1.default('recharts-reference-dot', className) },
        ReferenceDot.renderDot(shape, dotProps),
        Label_1.Label.renderCallByParent(props, {
            x: cx - r,
            y: cy - r,
            width: 2 * r,
            height: 2 * r,
        })));
}
exports.ReferenceDot = ReferenceDot;
ReferenceDot.displayName = 'ReferenceDot';
ReferenceDot.defaultProps = {
    isFront: false,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#fff',
    stroke: '#ccc',
    fillOpacity: 1,
    strokeWidth: 1,
};
ReferenceDot.renderDot = function (option, props) {
    var dot;
    if (react_1.default.isValidElement(option)) {
        dot = react_1.default.cloneElement(option, props);
    }
    else if (lodash_1.default.isFunction(option)) {
        dot = option(props);
    }
    else {
        dot = react_1.default.createElement(Dot_1.Dot, __assign({}, props, { cx: props.cx, cy: props.cy, className: "recharts-reference-dot-dot" }));
    }
    return dot;
};
//# sourceMappingURL=ReferenceDot.js.map