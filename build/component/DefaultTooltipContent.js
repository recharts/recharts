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
exports.DefaultTooltipContent = void 0;
var lodash_1 = __importDefault(require("lodash"));
var react_1 = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var DataUtils_1 = require("../util/DataUtils");
function defaultFormatter(value) {
    return lodash_1.default.isArray(value) && DataUtils_1.isNumOrStr(value[0]) && DataUtils_1.isNumOrStr(value[1]) ? value.join(' ~ ') : value;
}
var DefaultTooltipContent = (function (_super) {
    __extends(DefaultTooltipContent, _super);
    function DefaultTooltipContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultTooltipContent.prototype.renderContent = function () {
        var _a = this.props, payload = _a.payload, separator = _a.separator, formatter = _a.formatter, itemStyle = _a.itemStyle, itemSorter = _a.itemSorter;
        if (payload && payload.length) {
            var listStyle = { padding: 0, margin: 0 };
            var items = (itemSorter ? lodash_1.default.sortBy(payload, itemSorter) : payload).map(function (entry, i) {
                if (entry.type === 'none') {
                    return null;
                }
                var finalItemStyle = __assign({ display: 'block', paddingTop: 4, paddingBottom: 4, color: entry.color || '#000' }, itemStyle);
                var finalFormatter = entry.formatter || formatter || defaultFormatter;
                var name = entry.name, value = entry.value;
                if (finalFormatter) {
                    var formatted = finalFormatter(value, name, entry, i, payload);
                    if (Array.isArray(formatted)) {
                        value = formatted[0], name = formatted[1];
                    }
                    else {
                        value = formatted;
                    }
                }
                return (react_1.default.createElement("li", { className: "recharts-tooltip-item", key: "tooltip-item-" + i, style: finalItemStyle },
                    DataUtils_1.isNumOrStr(name) ? react_1.default.createElement("span", { className: "recharts-tooltip-item-name" }, name) : null,
                    DataUtils_1.isNumOrStr(name) ? react_1.default.createElement("span", { className: "recharts-tooltip-item-separator" }, separator) : null,
                    react_1.default.createElement("span", { className: "recharts-tooltip-item-value" }, value),
                    react_1.default.createElement("span", { className: "recharts-tooltip-item-unit" }, entry.unit || '')));
            });
            return (react_1.default.createElement("ul", { className: "recharts-tooltip-item-list", style: listStyle }, items));
        }
        return null;
    };
    DefaultTooltipContent.prototype.render = function () {
        var _a = this.props, wrapperClassName = _a.wrapperClassName, contentStyle = _a.contentStyle, labelClassName = _a.labelClassName, labelStyle = _a.labelStyle, label = _a.label, labelFormatter = _a.labelFormatter, payload = _a.payload;
        var finalStyle = __assign({ margin: 0, padding: 10, backgroundColor: '#fff', border: '1px solid #ccc', whiteSpace: 'nowrap' }, contentStyle);
        var finalLabelStyle = __assign({ margin: 0 }, labelStyle);
        var hasLabel = !lodash_1.default.isNil(label);
        var finalLabel = hasLabel ? label : '';
        var wrapperCN = classnames_1.default('recharts-default-tooltip', wrapperClassName);
        var labelCN = classnames_1.default('recharts-tooltip-label', labelClassName);
        if (hasLabel && labelFormatter) {
            finalLabel = labelFormatter(label, payload);
        }
        return (react_1.default.createElement("div", { className: wrapperCN, style: finalStyle },
            react_1.default.createElement("p", { className: labelCN, style: finalLabelStyle }, react_1.default.isValidElement(finalLabel) ? finalLabel : "" + finalLabel),
            this.renderContent()));
    };
    DefaultTooltipContent.displayName = 'DefaultTooltipContent';
    DefaultTooltipContent.defaultProps = {
        separator: ' : ',
        contentStyle: {},
        itemStyle: {},
        labelStyle: {},
    };
    return DefaultTooltipContent;
}(react_1.PureComponent));
exports.DefaultTooltipContent = DefaultTooltipContent;
//# sourceMappingURL=DefaultTooltipContent.js.map