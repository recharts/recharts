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
exports.Trapezoid = void 0;
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var react_smooth_1 = __importDefault(require("react-smooth"));
var types_1 = require("../util/types");
var getTrapezoidPath = function (x, y, upperWidth, lowerWidth, height) {
    var widthGap = upperWidth - lowerWidth;
    var path;
    path = "M " + x + "," + y;
    path += "L " + (x + upperWidth) + "," + y;
    path += "L " + (x + upperWidth - widthGap / 2) + "," + (y + height);
    path += "L " + (x + upperWidth - widthGap / 2 - lowerWidth) + "," + (y + height);
    path += "L " + x + "," + y + " Z";
    return path;
};
var Trapezoid = (function (_super) {
    __extends(Trapezoid, _super);
    function Trapezoid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            totalLength: -1,
        };
        return _this;
    }
    Trapezoid.prototype.componentDidMount = function () {
        if (this.node && this.node.getTotalLength) {
            try {
                var totalLength = this.node.getTotalLength();
                if (totalLength) {
                    this.setState({
                        totalLength: totalLength,
                    });
                }
            }
            catch (err) {
            }
        }
    };
    Trapezoid.prototype.render = function () {
        var _this = this;
        var _a = this.props, x = _a.x, y = _a.y, upperWidth = _a.upperWidth, lowerWidth = _a.lowerWidth, height = _a.height, className = _a.className;
        var totalLength = this.state.totalLength;
        var _b = this.props, animationEasing = _b.animationEasing, animationDuration = _b.animationDuration, animationBegin = _b.animationBegin, isUpdateAnimationActive = _b.isUpdateAnimationActive;
        if (x !== +x ||
            y !== +y ||
            upperWidth !== +upperWidth ||
            lowerWidth !== +lowerWidth ||
            height !== +height ||
            (upperWidth === 0 && lowerWidth === 0) ||
            height === 0) {
            return null;
        }
        var layerClass = classnames_1.default('recharts-trapezoid', className);
        if (!isUpdateAnimationActive) {
            return (react_1.default.createElement("g", null,
                react_1.default.createElement("path", __assign({}, types_1.filterProps(this.props, true), { className: layerClass, d: getTrapezoidPath(x, y, upperWidth, lowerWidth, height) }))));
        }
        return (react_1.default.createElement(react_smooth_1.default, { canBegin: totalLength > 0, from: { upperWidth: 0, lowerWidth: 0, height: height, x: x, y: y }, to: { upperWidth: upperWidth, lowerWidth: lowerWidth, height: height, x: x, y: y }, duration: animationDuration, animationEasing: animationEasing, isActive: isUpdateAnimationActive }, function (_a) {
            var currUpperWidth = _a.upperWidth, currLowerWidth = _a.lowerWidth, currHeight = _a.height, currX = _a.x, currY = _a.y;
            return (react_1.default.createElement(react_smooth_1.default, { canBegin: totalLength > 0, from: "0px " + (totalLength === -1 ? 1 : totalLength) + "px", to: totalLength + "px 0px", attributeName: "strokeDasharray", begin: animationBegin, duration: animationDuration, easing: animationEasing },
                react_1.default.createElement("path", __assign({}, types_1.filterProps(_this.props, true), { className: layerClass, d: getTrapezoidPath(currX, currY, currUpperWidth, currLowerWidth, currHeight), ref: function (node) {
                        _this.node = node;
                    } }))));
        }));
    };
    Trapezoid.defaultProps = {
        x: 0,
        y: 0,
        upperWidth: 0,
        lowerWidth: 0,
        height: 0,
        isUpdateAnimationActive: false,
        animationBegin: 0,
        animationDuration: 1500,
        animationEasing: 'ease',
    };
    return Trapezoid;
}(react_1.PureComponent));
exports.Trapezoid = Trapezoid;
//# sourceMappingURL=Trapezoid.js.map