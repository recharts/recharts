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
exports.ReferenceArea = void 0;
var react_1 = __importDefault(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var classnames_1 = __importDefault(require("classnames"));
var Layer_1 = require("../container/Layer");
var Label_1 = require("../component/Label");
var CartesianUtils_1 = require("../util/CartesianUtils");
var IfOverflowMatches_1 = require("../util/IfOverflowMatches");
var DataUtils_1 = require("../util/DataUtils");
var LogUtils_1 = require("../util/LogUtils");
var Rectangle_1 = require("../shape/Rectangle");
var types_1 = require("../util/types");
var getRect = function (hasX1, hasX2, hasY1, hasY2, props) {
    var xValue1 = props.x1, xValue2 = props.x2, yValue1 = props.y1, yValue2 = props.y2, xAxis = props.xAxis, yAxis = props.yAxis;
    var scales = CartesianUtils_1.createLabeledScales({ x: xAxis.scale, y: yAxis.scale });
    var p1 = {
        x: hasX1 ? scales.x.apply(xValue1, { position: 'start' }) : scales.x.rangeMin,
        y: hasY1 ? scales.y.apply(yValue1, { position: 'start' }) : scales.y.rangeMin,
    };
    var p2 = {
        x: hasX2 ? scales.x.apply(xValue2, { position: 'end' }) : scales.x.rangeMax,
        y: hasY2 ? scales.y.apply(yValue2, { position: 'end' }) : scales.y.rangeMax,
    };
    if (IfOverflowMatches_1.ifOverflowMatches(props, 'discard') && (!scales.isInRange(p1) || !scales.isInRange(p2))) {
        return null;
    }
    return CartesianUtils_1.rectWithPoints(p1, p2);
};
function ReferenceArea(props) {
    var x1 = props.x1, x2 = props.x2, y1 = props.y1, y2 = props.y2, className = props.className, alwaysShow = props.alwaysShow, clipPathId = props.clipPathId;
    LogUtils_1.warn(alwaysShow === undefined, 'The alwaysShow prop is deprecated. Please use ifOverflow="extendDomain" instead.');
    var hasX1 = DataUtils_1.isNumOrStr(x1);
    var hasX2 = DataUtils_1.isNumOrStr(x2);
    var hasY1 = DataUtils_1.isNumOrStr(y1);
    var hasY2 = DataUtils_1.isNumOrStr(y2);
    var shape = props.shape;
    if (!hasX1 && !hasX2 && !hasY1 && !hasY2 && !shape) {
        return null;
    }
    var rect = getRect(hasX1, hasX2, hasY1, hasY2, props);
    if (!rect && !shape) {
        return null;
    }
    var clipPath = IfOverflowMatches_1.ifOverflowMatches(props, 'hidden') ? "url(#" + clipPathId + ")" : undefined;
    return (react_1.default.createElement(Layer_1.Layer, { className: classnames_1.default('recharts-reference-area', className) },
        ReferenceArea.renderRect(shape, __assign(__assign({ clipPath: clipPath }, types_1.filterProps(props, true)), rect)),
        Label_1.Label.renderCallByParent(props, rect)));
}
exports.ReferenceArea = ReferenceArea;
ReferenceArea.displayName = 'ReferenceArea';
ReferenceArea.defaultProps = {
    isFront: false,
    ifOverflow: 'discard',
    xAxisId: 0,
    yAxisId: 0,
    r: 10,
    fill: '#ccc',
    fillOpacity: 0.5,
    stroke: 'none',
    strokeWidth: 1,
};
ReferenceArea.renderRect = function (option, props) {
    var rect;
    if (react_1.default.isValidElement(option)) {
        rect = react_1.default.cloneElement(option, props);
    }
    else if (lodash_1.default.isFunction(option)) {
        rect = option(props);
    }
    else {
        rect = react_1.default.createElement(Rectangle_1.Rectangle, __assign({}, props, { className: "recharts-reference-area-rect" }));
    }
    return rect;
};
//# sourceMappingURL=ReferenceArea.js.map