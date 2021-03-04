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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var classnames_1 = __importDefault(require("classnames"));
var Text_1 = require("./Text");
var ReactUtils_1 = require("../util/ReactUtils");
var DataUtils_1 = require("../util/DataUtils");
var PolarUtils_1 = require("../util/PolarUtils");
var types_1 = require("../util/types");
var getLabel = function (props) {
    var value = props.value, formatter = props.formatter;
    var label = lodash_1.default.isNil(props.children) ? value : props.children;
    if (lodash_1.default.isFunction(formatter)) {
        return formatter(label);
    }
    return label;
};
var getDeltaAngle = function (startAngle, endAngle) {
    var sign = DataUtils_1.mathSign(endAngle - startAngle);
    var deltaAngle = Math.min(Math.abs(endAngle - startAngle), 360);
    return sign * deltaAngle;
};
var renderRadialLabel = function (labelProps, label, attrs) {
    var position = labelProps.position, viewBox = labelProps.viewBox, offset = labelProps.offset, className = labelProps.className;
    var _a = viewBox, cx = _a.cx, cy = _a.cy, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, startAngle = _a.startAngle, endAngle = _a.endAngle, clockWise = _a.clockWise;
    var radius = (innerRadius + outerRadius) / 2;
    var deltaAngle = getDeltaAngle(startAngle, endAngle);
    var sign = deltaAngle >= 0 ? 1 : -1;
    var labelAngle, direction;
    if (position === 'insideStart') {
        labelAngle = startAngle + sign * offset;
        direction = clockWise;
    }
    else if (position === 'insideEnd') {
        labelAngle = endAngle - sign * offset;
        direction = !clockWise;
    }
    else if (position === 'end') {
        labelAngle = endAngle + sign * offset;
        direction = clockWise;
    }
    direction = deltaAngle <= 0 ? direction : !direction;
    var startPoint = PolarUtils_1.polarToCartesian(cx, cy, radius, labelAngle);
    var endPoint = PolarUtils_1.polarToCartesian(cx, cy, radius, labelAngle + (direction ? 1 : -1) * 359);
    var path = "M" + startPoint.x + "," + startPoint.y + "\n    A" + radius + "," + radius + ",0,1," + (direction ? 0 : 1) + ",\n    " + endPoint.x + "," + endPoint.y;
    var id = lodash_1.default.isNil(labelProps.id) ? DataUtils_1.uniqueId('recharts-radial-line-') : labelProps.id;
    return (react_1.default.createElement("text", __assign({}, attrs, { dominantBaseline: "central", className: classnames_1.default('recharts-radial-bar-label', className) }),
        react_1.default.createElement("defs", null,
            react_1.default.createElement("path", { id: id, d: path })),
        react_1.default.createElement("textPath", { xlinkHref: "#" + id }, label)));
};
var getAttrsOfPolarLabel = function (props) {
    var viewBox = props.viewBox, offset = props.offset, position = props.position;
    var _a = viewBox, cx = _a.cx, cy = _a.cy, innerRadius = _a.innerRadius, outerRadius = _a.outerRadius, startAngle = _a.startAngle, endAngle = _a.endAngle;
    var midAngle = (startAngle + endAngle) / 2;
    if (position === 'outside') {
        var _b = PolarUtils_1.polarToCartesian(cx, cy, outerRadius + offset, midAngle), x_1 = _b.x, y_1 = _b.y;
        return {
            x: x_1,
            y: y_1,
            textAnchor: x_1 >= cx ? 'start' : 'end',
            verticalAnchor: 'middle',
        };
    }
    if (position === 'center') {
        return {
            x: cx,
            y: cy,
            textAnchor: 'middle',
            verticalAnchor: 'middle',
        };
    }
    if (position === 'centerTop') {
        return {
            x: cx,
            y: cy,
            textAnchor: 'middle',
            verticalAnchor: 'start',
        };
    }
    if (position === 'centerBottom') {
        return {
            x: cx,
            y: cy,
            textAnchor: 'middle',
            verticalAnchor: 'end',
        };
    }
    var r = (innerRadius + outerRadius) / 2;
    var _c = PolarUtils_1.polarToCartesian(cx, cy, r, midAngle), x = _c.x, y = _c.y;
    return {
        x: x,
        y: y,
        textAnchor: 'middle',
        verticalAnchor: 'middle',
    };
};
var getAttrsOfCartesianLabel = function (props) {
    var viewBox = props.viewBox, parentViewBox = props.parentViewBox, offset = props.offset, position = props.position;
    var _a = viewBox, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var verticalSign = height >= 0 ? 1 : -1;
    var verticalOffset = verticalSign * offset;
    var verticalEnd = verticalSign > 0 ? 'end' : 'start';
    var verticalStart = verticalSign > 0 ? 'start' : 'end';
    var horizontalSign = width >= 0 ? 1 : -1;
    var horizontalOffset = horizontalSign * offset;
    var horizontalEnd = horizontalSign > 0 ? 'end' : 'start';
    var horizontalStart = horizontalSign > 0 ? 'start' : 'end';
    if (position === 'top') {
        var attrs = {
            x: x + width / 2,
            y: y - verticalSign * offset,
            textAnchor: 'middle',
            verticalAnchor: verticalEnd,
        };
        return __assign(__assign({}, attrs), (parentViewBox
            ? {
                height: Math.max(y - parentViewBox.y, 0),
                width: width,
            }
            : {}));
    }
    if (position === 'bottom') {
        var attrs = {
            x: x + width / 2,
            y: y + height + verticalOffset,
            textAnchor: 'middle',
            verticalAnchor: verticalStart,
        };
        return __assign(__assign({}, attrs), (parentViewBox
            ? {
                height: Math.max(parentViewBox.y + parentViewBox.height - (y + height), 0),
                width: width,
            }
            : {}));
    }
    if (position === 'left') {
        var attrs = {
            x: x - horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalEnd,
            verticalAnchor: 'middle',
        };
        return __assign(__assign({}, attrs), (parentViewBox
            ? {
                width: Math.max(attrs.x - parentViewBox.x, 0),
                height: height,
            }
            : {}));
    }
    if (position === 'right') {
        var attrs = {
            x: x + width + horizontalOffset,
            y: y + height / 2,
            textAnchor: horizontalStart,
            verticalAnchor: 'middle',
        };
        return __assign(__assign({}, attrs), (parentViewBox
            ? {
                width: Math.max(parentViewBox.x + parentViewBox.width - attrs.x, 0),
                height: height,
            }
            : {}));
    }
    var sizeAttrs = parentViewBox ? { width: width, height: height } : {};
    if (position === 'insideLeft') {
        return __assign({ x: x + horizontalOffset, y: y + height / 2, textAnchor: horizontalStart, verticalAnchor: 'middle' }, sizeAttrs);
    }
    if (position === 'insideRight') {
        return __assign({ x: x + width - horizontalOffset, y: y + height / 2, textAnchor: horizontalEnd, verticalAnchor: 'middle' }, sizeAttrs);
    }
    if (position === 'insideTop') {
        return __assign({ x: x + width / 2, y: y + verticalOffset, textAnchor: 'middle', verticalAnchor: verticalStart }, sizeAttrs);
    }
    if (position === 'insideBottom') {
        return __assign({ x: x + width / 2, y: y + height - verticalOffset, textAnchor: 'middle', verticalAnchor: verticalEnd }, sizeAttrs);
    }
    if (position === 'insideTopLeft') {
        return __assign({ x: x + horizontalOffset, y: y + verticalOffset, textAnchor: horizontalStart, verticalAnchor: verticalStart }, sizeAttrs);
    }
    if (position === 'insideTopRight') {
        return __assign({ x: x + width - horizontalOffset, y: y + verticalOffset, textAnchor: horizontalEnd, verticalAnchor: verticalStart }, sizeAttrs);
    }
    if (position === 'insideBottomLeft') {
        return __assign({ x: x + horizontalOffset, y: y + height - verticalOffset, textAnchor: horizontalStart, verticalAnchor: verticalEnd }, sizeAttrs);
    }
    if (position === 'insideBottomRight') {
        return __assign({ x: x + width - horizontalOffset, y: y + height - verticalOffset, textAnchor: horizontalEnd, verticalAnchor: verticalEnd }, sizeAttrs);
    }
    if (lodash_1.default.isObject(position) &&
        (DataUtils_1.isNumber(position.x) || DataUtils_1.isPercent(position.x)) &&
        (DataUtils_1.isNumber(position.y) || DataUtils_1.isPercent(position.y))) {
        return __assign({ x: x + DataUtils_1.getPercentValue(position.x, width), y: y + DataUtils_1.getPercentValue(position.y, height), textAnchor: 'end', verticalAnchor: 'end' }, sizeAttrs);
    }
    return __assign({ x: x + width / 2, y: y + height / 2, textAnchor: 'middle', verticalAnchor: 'middle' }, sizeAttrs);
};
var isPolar = function (viewBox) { return DataUtils_1.isNumber(viewBox.cx); };
function Label(props) {
    var viewBox = props.viewBox, position = props.position, value = props.value, children = props.children, content = props.content, _a = props.className, className = _a === void 0 ? '' : _a, textBreakAll = props.textBreakAll;
    if (!viewBox || (lodash_1.default.isNil(value) && lodash_1.default.isNil(children) && !react_1.isValidElement(content) && !lodash_1.default.isFunction(content))) {
        return null;
    }
    if (react_1.isValidElement(content)) {
        return react_1.cloneElement(content, props);
    }
    var label;
    if (lodash_1.default.isFunction(content)) {
        label = react_1.createElement(content, props);
        if (react_1.isValidElement(label)) {
            return label;
        }
    }
    else {
        label = getLabel(props);
    }
    var isPolarLabel = isPolar(viewBox);
    var attrs = types_1.filterProps(props, true);
    if (isPolarLabel && (position === 'insideStart' || position === 'insideEnd' || position === 'end')) {
        return renderRadialLabel(props, label, attrs);
    }
    var positionAttrs = isPolarLabel ? getAttrsOfPolarLabel(props) : getAttrsOfCartesianLabel(props);
    return (react_1.default.createElement(Text_1.Text, __assign({ className: classnames_1.default('recharts-label', className) }, attrs, positionAttrs, { breakAll: textBreakAll }), label));
}
exports.Label = Label;
Label.displayName = 'Label';
Label.defaultProps = {
    offset: 5,
};
var parseViewBox = function (props) {
    var cx = props.cx, cy = props.cy, angle = props.angle, startAngle = props.startAngle, endAngle = props.endAngle, r = props.r, radius = props.radius, innerRadius = props.innerRadius, outerRadius = props.outerRadius, x = props.x, y = props.y, top = props.top, left = props.left, width = props.width, height = props.height, clockWise = props.clockWise, labelViewBox = props.labelViewBox;
    if (labelViewBox) {
        return labelViewBox;
    }
    if (DataUtils_1.isNumber(width) && DataUtils_1.isNumber(height)) {
        if (DataUtils_1.isNumber(x) && DataUtils_1.isNumber(y)) {
            return { x: x, y: y, width: width, height: height };
        }
        if (DataUtils_1.isNumber(top) && DataUtils_1.isNumber(left)) {
            return { x: top, y: left, width: width, height: height };
        }
    }
    if (DataUtils_1.isNumber(x) && DataUtils_1.isNumber(y)) {
        return { x: x, y: y, width: 0, height: 0 };
    }
    if (DataUtils_1.isNumber(cx) && DataUtils_1.isNumber(cy)) {
        return {
            cx: cx,
            cy: cy,
            startAngle: startAngle || angle || 0,
            endAngle: endAngle || angle || 0,
            innerRadius: innerRadius || 0,
            outerRadius: outerRadius || radius || r || 0,
            clockWise: clockWise,
        };
    }
    if (props.viewBox) {
        return props.viewBox;
    }
    return {};
};
var parseLabel = function (label, viewBox) {
    if (!label) {
        return null;
    }
    if (label === true) {
        return react_1.default.createElement(Label, { key: "label-implicit", viewBox: viewBox });
    }
    if (DataUtils_1.isNumOrStr(label)) {
        return react_1.default.createElement(Label, { key: "label-implicit", viewBox: viewBox, value: label });
    }
    if (react_1.isValidElement(label)) {
        if (label.type === Label) {
            return react_1.cloneElement(label, { key: 'label-implicit', viewBox: viewBox });
        }
        return react_1.default.createElement(Label, { key: "label-implicit", content: label, viewBox: viewBox });
    }
    if (lodash_1.default.isFunction(label)) {
        return react_1.default.createElement(Label, { key: "label-implicit", content: label, viewBox: viewBox });
    }
    if (lodash_1.default.isObject(label)) {
        return react_1.default.createElement(Label, __assign({ viewBox: viewBox }, label, { key: "label-implicit" }));
    }
    return null;
};
var renderCallByParent = function (parentProps, viewBox, checkPropsLabel) {
    if (checkPropsLabel === void 0) { checkPropsLabel = true; }
    if (!parentProps || (!parentProps.children && checkPropsLabel && !parentProps.label)) {
        return null;
    }
    var children = parentProps.children;
    var parentViewBox = parseViewBox(parentProps);
    var explicitChildren = ReactUtils_1.findAllByType(children, Label.displayName).map(function (child, index) {
        return react_1.cloneElement(child, {
            viewBox: viewBox || parentViewBox,
            key: "label-" + index,
        });
    });
    if (!checkPropsLabel) {
        return explicitChildren;
    }
    var implicitLabel = parseLabel(parentProps.label, viewBox || parentViewBox);
    return __spreadArray([implicitLabel], explicitChildren);
};
Label.parseViewBox = parseViewBox;
Label.renderCallByParent = renderCallByParent;
//# sourceMappingURL=Label.js.map