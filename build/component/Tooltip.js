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
exports.Tooltip = void 0;
var react_1 = __importStar(require("react"));
var react_smooth_1 = require("react-smooth");
var lodash_1 = __importDefault(require("lodash"));
var classnames_1 = __importDefault(require("classnames"));
var DefaultTooltipContent_1 = require("./DefaultTooltipContent");
var Global_1 = require("../util/Global");
var DataUtils_1 = require("../util/DataUtils");
var CLS_PREFIX = 'recharts-tooltip-wrapper';
var EPS = 1;
function defaultUniqBy(entry) {
    return entry.dataKey;
}
function getUniqPayload(option, payload) {
    if (option === true) {
        return lodash_1.default.uniqBy(payload, defaultUniqBy);
    }
    if (lodash_1.default.isFunction(option)) {
        return lodash_1.default.uniqBy(payload, option);
    }
    return payload;
}
function renderContent(content, props) {
    if (react_1.default.isValidElement(content)) {
        return react_1.default.cloneElement(content, props);
    }
    if (lodash_1.default.isFunction(content)) {
        return react_1.default.createElement(content, props);
    }
    return react_1.default.createElement(DefaultTooltipContent_1.DefaultTooltipContent, __assign({}, props));
}
var Tooltip = (function (_super) {
    __extends(Tooltip, _super);
    function Tooltip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            boxWidth: -1,
            boxHeight: -1,
        };
        _this.getTranslate = function (_a) {
            var key = _a.key, tooltipDimension = _a.tooltipDimension, viewBoxDimension = _a.viewBoxDimension;
            var _b = _this.props, allowEscapeViewBox = _b.allowEscapeViewBox, coordinate = _b.coordinate, offset = _b.offset, position = _b.position, viewBox = _b.viewBox;
            if (position && DataUtils_1.isNumber(position[key])) {
                return position[key];
            }
            var restricted = coordinate[key] - tooltipDimension - offset;
            var unrestricted = coordinate[key] + offset;
            if (allowEscapeViewBox[key]) {
                return unrestricted;
            }
            var tooltipBoundary = coordinate[key] + tooltipDimension + offset;
            var viewBoxBoundary = viewBox[key] + viewBoxDimension;
            if (tooltipBoundary > viewBoxBoundary) {
                return Math.max(restricted, viewBox[key]);
            }
            return Math.max(unrestricted, viewBox[key]);
        };
        return _this;
    }
    Tooltip.prototype.componentDidMount = function () {
        this.updateBBox();
    };
    Tooltip.prototype.componentDidUpdate = function () {
        this.updateBBox();
    };
    Tooltip.prototype.updateBBox = function () {
        var _a = this.state, boxWidth = _a.boxWidth, boxHeight = _a.boxHeight;
        if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var box = this.wrapperNode.getBoundingClientRect();
            if (Math.abs(box.width - boxWidth) > EPS || Math.abs(box.height - boxHeight) > EPS) {
                this.setState({
                    boxWidth: box.width,
                    boxHeight: box.height,
                });
            }
        }
        else if (boxWidth !== -1 || boxHeight !== -1) {
            this.setState({
                boxWidth: -1,
                boxHeight: -1,
            });
        }
    };
    Tooltip.prototype.render = function () {
        var _a;
        var _this = this;
        var _b = this.props, payload = _b.payload, isAnimationActive = _b.isAnimationActive, animationDuration = _b.animationDuration, animationEasing = _b.animationEasing, filterNull = _b.filterNull, payloadUniqBy = _b.payloadUniqBy;
        var finalPayload = getUniqPayload(payloadUniqBy, filterNull && payload && payload.length ? payload.filter(function (entry) { return !lodash_1.default.isNil(entry.value); }) : payload);
        var hasPayload = finalPayload && finalPayload.length;
        var _c = this.props, content = _c.content, viewBox = _c.viewBox, coordinate = _c.coordinate, position = _c.position, active = _c.active, wrapperStyle = _c.wrapperStyle;
        var outerStyle = __assign({ pointerEvents: 'none', visibility: active && hasPayload ? 'visible' : 'hidden', position: 'absolute', top: 0, left: 0 }, wrapperStyle);
        var translateX, translateY;
        if (position && DataUtils_1.isNumber(position.x) && DataUtils_1.isNumber(position.y)) {
            translateX = position.x;
            translateY = position.y;
        }
        else {
            var _d = this.state, boxWidth = _d.boxWidth, boxHeight = _d.boxHeight;
            if (boxWidth > 0 && boxHeight > 0 && coordinate) {
                translateX = this.getTranslate({
                    key: 'x',
                    tooltipDimension: boxWidth,
                    viewBoxDimension: viewBox.width,
                });
                translateY = this.getTranslate({
                    key: 'y',
                    tooltipDimension: boxHeight,
                    viewBoxDimension: viewBox.height,
                });
            }
            else {
                outerStyle.visibility = 'hidden';
            }
        }
        outerStyle = __assign(__assign({}, react_smooth_1.translateStyle({
            transform: this.props.useTranslate3d
                ? "translate3d(" + translateX + "px, " + translateY + "px, 0)"
                : "translate(" + translateX + "px, " + translateY + "px)",
        })), outerStyle);
        if (isAnimationActive && active) {
            outerStyle = __assign(__assign({}, react_smooth_1.translateStyle({
                transition: "transform " + animationDuration + "ms " + animationEasing,
            })), outerStyle);
        }
        var cls = classnames_1.default(CLS_PREFIX, (_a = {},
            _a[CLS_PREFIX + "-right"] = DataUtils_1.isNumber(translateX) && coordinate && DataUtils_1.isNumber(coordinate.x) && translateX >= coordinate.x,
            _a[CLS_PREFIX + "-left"] = DataUtils_1.isNumber(translateX) && coordinate && DataUtils_1.isNumber(coordinate.x) && translateX < coordinate.x,
            _a[CLS_PREFIX + "-bottom"] = DataUtils_1.isNumber(translateY) && coordinate && DataUtils_1.isNumber(coordinate.y) && translateY >= coordinate.y,
            _a[CLS_PREFIX + "-top"] = DataUtils_1.isNumber(translateY) && coordinate && DataUtils_1.isNumber(coordinate.y) && translateY < coordinate.y,
            _a));
        return (react_1.default.createElement("div", { className: cls, style: outerStyle, ref: function (node) {
                _this.wrapperNode = node;
            } }, renderContent(content, __assign(__assign({}, this.props), { payload: finalPayload }))));
    };
    Tooltip.displayName = 'Tooltip';
    Tooltip.defaultProps = {
        active: false,
        allowEscapeViewBox: { x: false, y: false },
        offset: 10,
        viewBox: { x1: 0, x2: 0, y1: 0, y2: 0 },
        coordinate: { x: 0, y: 0 },
        cursorStyle: {},
        separator: ' : ',
        wrapperStyle: {},
        contentStyle: {},
        itemStyle: {},
        labelStyle: {},
        cursor: true,
        trigger: 'hover',
        isAnimationActive: !Global_1.Global.isSsr,
        animationEasing: 'ease',
        animationDuration: 400,
        filterNull: true,
        useTranslate3d: false,
    };
    return Tooltip;
}(react_1.PureComponent));
exports.Tooltip = Tooltip;
//# sourceMappingURL=Tooltip.js.map