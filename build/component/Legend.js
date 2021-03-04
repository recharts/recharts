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
exports.Legend = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var DefaultLegendContent_1 = require("./DefaultLegendContent");
var DataUtils_1 = require("../util/DataUtils");
function defaultUniqBy(entry) {
    return entry.value;
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
    var ref = props.ref, otherProps = __rest(props, ["ref"]);
    return react_1.default.createElement(DefaultLegendContent_1.DefaultLegendContent, __assign({}, otherProps));
}
var EPS = 1;
var Legend = (function (_super) {
    __extends(Legend, _super);
    function Legend() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            boxWidth: -1,
            boxHeight: -1,
        };
        return _this;
    }
    Legend.getWithHeight = function (item, chartWidth) {
        var layout = item.props.layout;
        if (layout === 'vertical' && DataUtils_1.isNumber(item.props.height)) {
            return {
                height: item.props.height,
            };
        }
        if (layout === 'horizontal') {
            return {
                width: item.props.width || chartWidth,
            };
        }
        return null;
    };
    Legend.prototype.componentDidMount = function () {
        this.updateBBox();
    };
    Legend.prototype.componentDidUpdate = function () {
        this.updateBBox();
    };
    Legend.prototype.getBBox = function () {
        if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            return this.wrapperNode.getBoundingClientRect();
        }
        return null;
    };
    Legend.prototype.getBBoxSnapshot = function () {
        var _a = this.state, boxWidth = _a.boxWidth, boxHeight = _a.boxHeight;
        if (boxWidth >= 0 && boxHeight >= 0) {
            return { width: boxWidth, height: boxHeight };
        }
        return null;
    };
    Legend.prototype.getDefaultPosition = function (style) {
        var _a = this.props, layout = _a.layout, align = _a.align, verticalAlign = _a.verticalAlign, margin = _a.margin, chartWidth = _a.chartWidth, chartHeight = _a.chartHeight;
        var hPos, vPos;
        if (!style ||
            ((style.left === undefined || style.left === null) && (style.right === undefined || style.right === null))) {
            if (align === 'center' && layout === 'vertical') {
                var box = this.getBBoxSnapshot() || { width: 0 };
                hPos = { left: ((chartWidth || 0) - box.width) / 2 };
            }
            else {
                hPos = align === 'right' ? { right: (margin && margin.right) || 0 } : { left: (margin && margin.left) || 0 };
            }
        }
        if (!style ||
            ((style.top === undefined || style.top === null) && (style.bottom === undefined || style.bottom === null))) {
            if (verticalAlign === 'middle') {
                var box = this.getBBoxSnapshot() || { height: 0 };
                vPos = { top: ((chartHeight || 0) - box.height) / 2 };
            }
            else {
                vPos =
                    verticalAlign === 'bottom'
                        ? { bottom: (margin && margin.bottom) || 0 }
                        : { top: (margin && margin.top) || 0 };
            }
        }
        return __assign(__assign({}, hPos), vPos);
    };
    Legend.prototype.updateBBox = function () {
        var _a = this.state, boxWidth = _a.boxWidth, boxHeight = _a.boxHeight;
        var onBBoxUpdate = this.props.onBBoxUpdate;
        if (this.wrapperNode && this.wrapperNode.getBoundingClientRect) {
            var box_1 = this.wrapperNode.getBoundingClientRect();
            if (Math.abs(box_1.width - boxWidth) > EPS || Math.abs(box_1.height - boxHeight) > EPS) {
                this.setState({
                    boxWidth: box_1.width,
                    boxHeight: box_1.height,
                }, function () {
                    if (onBBoxUpdate) {
                        onBBoxUpdate(box_1);
                    }
                });
            }
        }
        else if (boxWidth !== -1 || boxHeight !== -1) {
            this.setState({
                boxWidth: -1,
                boxHeight: -1,
            }, function () {
                if (onBBoxUpdate) {
                    onBBoxUpdate(null);
                }
            });
        }
    };
    Legend.prototype.render = function () {
        var _this = this;
        var _a = this.props, content = _a.content, width = _a.width, height = _a.height, wrapperStyle = _a.wrapperStyle, payloadUniqBy = _a.payloadUniqBy, payload = _a.payload;
        var outerStyle = __assign(__assign({ position: 'absolute', width: width || 'auto', height: height || 'auto' }, this.getDefaultPosition(wrapperStyle)), wrapperStyle);
        return (react_1.default.createElement("div", { className: "recharts-legend-wrapper", style: outerStyle, ref: function (node) {
                _this.wrapperNode = node;
            } }, renderContent(content, __assign(__assign({}, this.props), { payload: getUniqPayload(payloadUniqBy, payload) }))));
    };
    Legend.displayName = 'Legend';
    Legend.defaultProps = {
        iconSize: 14,
        layout: 'horizontal',
        align: 'center',
        verticalAlign: 'bottom',
    };
    return Legend;
}(react_1.PureComponent));
exports.Legend = Legend;
//# sourceMappingURL=Legend.js.map