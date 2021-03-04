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
exports.Surface = void 0;
var react_1 = __importDefault(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var types_1 = require("../util/types");
function Surface(props) {
    var children = props.children, width = props.width, height = props.height, viewBox = props.viewBox, className = props.className, style = props.style, others = __rest(props, ["children", "width", "height", "viewBox", "className", "style"]);
    var svgView = viewBox || { width: width, height: height, x: 0, y: 0 };
    var layerClass = classnames_1.default('recharts-surface', className);
    return (react_1.default.createElement("svg", __assign({}, types_1.filterProps(others, true, true), { className: layerClass, width: width, height: height, style: style, viewBox: svgView.x + " " + svgView.y + " " + svgView.width + " " + svgView.height, version: "1.1" }), children));
}
exports.Surface = Surface;
//# sourceMappingURL=Surface.js.map