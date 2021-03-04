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
exports.ResponsiveContainer = void 0;
var classnames_1 = __importDefault(require("classnames"));
var lodash_1 = __importDefault(require("lodash"));
var react_1 = __importStar(require("react"));
var react_resize_detector_1 = __importDefault(require("react-resize-detector"));
var DataUtils_1 = require("../util/DataUtils");
var LogUtils_1 = require("../util/LogUtils");
var ResponsiveContainer = (function (_super) {
    __extends(ResponsiveContainer, _super);
    function ResponsiveContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.updateDimensionsImmediate = function () {
            if (!_this.mounted) {
                return;
            }
            var newSize = _this.getContainerSize();
            if (newSize) {
                var _a = _this.state, oldWidth = _a.containerWidth, oldHeight = _a.containerHeight;
                var containerWidth = newSize.containerWidth, containerHeight = newSize.containerHeight;
                if (containerWidth !== oldWidth || containerHeight !== oldHeight) {
                    _this.setState({ containerWidth: containerWidth, containerHeight: containerHeight });
                }
            }
        };
        _this.state = {
            containerWidth: -1,
            containerHeight: -1,
        };
        _this.handleResize =
            props.debounce > 0 ? lodash_1.default.debounce(_this.updateDimensionsImmediate, props.debounce) : _this.updateDimensionsImmediate;
        _this.containerRef = react_1.default.createRef();
        return _this;
    }
    ResponsiveContainer.prototype.componentDidMount = function () {
        this.mounted = true;
        var size = this.getContainerSize();
        if (size) {
            this.setState(size);
        }
    };
    ResponsiveContainer.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    ResponsiveContainer.prototype.getContainerSize = function () {
        if (!this.containerRef.current) {
            return null;
        }
        return {
            containerWidth: this.containerRef.current.clientWidth,
            containerHeight: this.containerRef.current.clientHeight,
        };
    };
    ResponsiveContainer.prototype.renderChart = function () {
        var _a = this.state, containerWidth = _a.containerWidth, containerHeight = _a.containerHeight;
        if (containerWidth < 0 || containerHeight < 0) {
            return null;
        }
        var _b = this.props, aspect = _b.aspect, width = _b.width, height = _b.height, minWidth = _b.minWidth, minHeight = _b.minHeight, maxHeight = _b.maxHeight, children = _b.children;
        LogUtils_1.warn(DataUtils_1.isPercent(width) || DataUtils_1.isPercent(height), "The width(%s) and height(%s) are both fixed numbers,\n       maybe you don't need to use a ResponsiveContainer.", width, height);
        LogUtils_1.warn(!aspect || aspect > 0, 'The aspect(%s) must be greater than zero.', aspect);
        var calculatedWidth = DataUtils_1.isPercent(width) ? containerWidth : width;
        var calculatedHeight = DataUtils_1.isPercent(height) ? containerHeight : height;
        if (aspect && aspect > 0) {
            if (calculatedWidth) {
                calculatedHeight = calculatedWidth / aspect;
            }
            else if (calculatedHeight) {
                calculatedWidth = calculatedHeight * aspect;
            }
            if (maxHeight && calculatedHeight > maxHeight) {
                calculatedHeight = maxHeight;
            }
        }
        LogUtils_1.warn(calculatedWidth > 0 || calculatedHeight > 0, "The width(%s) and height(%s) of chart should be greater than 0,\n       please check the style of container, or the props width(%s) and height(%s),\n       or add a minWidth(%s) or minHeight(%s) or use aspect(%s) to control the\n       height and width.", calculatedWidth, calculatedHeight, width, height, minWidth, minHeight, aspect);
        return react_1.default.cloneElement(children, {
            width: calculatedWidth,
            height: calculatedHeight,
        });
    };
    ResponsiveContainer.prototype.render = function () {
        var _a = this.props, minWidth = _a.minWidth, minHeight = _a.minHeight, width = _a.width, height = _a.height, maxHeight = _a.maxHeight, id = _a.id, className = _a.className;
        var style = { width: width, height: height, minWidth: minWidth, minHeight: minHeight, maxHeight: maxHeight };
        return (react_1.default.createElement(react_resize_detector_1.default, { handleWidth: true, handleHeight: true, onResize: this.handleResize, targetRef: this.containerRef },
            react_1.default.createElement("div", __assign({}, (id != null ? { id: "" + id } : {}), { className: classnames_1.default('recharts-responsive-container', className), style: style, ref: this.containerRef }), this.renderChart())));
    };
    ResponsiveContainer.defaultProps = {
        width: '100%',
        height: '100%',
        debounce: 0,
    };
    return ResponsiveContainer;
}(react_1.Component));
exports.ResponsiveContainer = ResponsiveContainer;
//# sourceMappingURL=ResponsiveContainer.js.map