"use strict";
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
exports.parseChildIndex = exports.getReactEventByType = exports.renderByOrder = exports.isSingleChildEqual = exports.isChildrenEqual = exports.filterSvgElements = exports.validateWidthHeight = exports.withoutType = exports.findChildByType = exports.findAllByType = exports.getDisplayName = exports.TOOLTIP_TYPES = exports.LEGEND_TYPES = exports.SCALE_TYPES = void 0;
var react_1 = __importStar(require("react"));
var lodash_1 = __importDefault(require("lodash"));
var react_is_1 = require("react-is");
var DataUtils_1 = require("./DataUtils");
var ShallowEqual_1 = require("./ShallowEqual");
var REACT_BROWSER_EVENT_MAP = {
    click: 'onClick',
    mousedown: 'onMouseDown',
    mouseup: 'onMouseUp',
    mouseover: 'onMouseOver',
    mousemove: 'onMouseMove',
    mouseout: 'onMouseOut',
    mouseenter: 'onMouseEnter',
    mouseleave: 'onMouseLeave',
    touchcancel: 'onTouchCancel',
    touchend: 'onTouchEnd',
    touchmove: 'onTouchMove',
    touchstart: 'onTouchStart',
};
exports.SCALE_TYPES = [
    'auto',
    'linear',
    'pow',
    'sqrt',
    'log',
    'identity',
    'time',
    'band',
    'point',
    'ordinal',
    'quantile',
    'quantize',
    'utc',
    'sequential',
    'threshold',
];
exports.LEGEND_TYPES = [
    'plainline',
    'line',
    'square',
    'rect',
    'circle',
    'cross',
    'diamond',
    'star',
    'triangle',
    'wye',
    'none',
];
exports.TOOLTIP_TYPES = ['none'];
var getDisplayName = function (Comp) {
    if (typeof Comp === 'string') {
        return Comp;
    }
    if (!Comp) {
        return '';
    }
    return Comp.displayName || Comp.name || 'Component';
};
exports.getDisplayName = getDisplayName;
var findAllByType = function (children, type) {
    var result = [];
    var types = [];
    if (lodash_1.default.isArray(type)) {
        types = type.map(function (t) { return exports.getDisplayName(t); });
    }
    else {
        types = [exports.getDisplayName(type)];
    }
    react_1.default.Children.forEach(children, function (child) {
        if (react_is_1.isFragment(child)) {
            result = result.concat(exports.findAllByType(child.props.children, type));
        }
        var childType = lodash_1.default.get(child, 'type.displayName') || lodash_1.default.get(child, 'type.name');
        if (types.indexOf(childType) !== -1) {
            result.push(child);
        }
    });
    return result;
};
exports.findAllByType = findAllByType;
var findChildByType = function (children, type) {
    var result = exports.findAllByType(children, type);
    return result && result[0];
};
exports.findChildByType = findChildByType;
var withoutType = function (children, type) {
    var newChildren = [];
    var types;
    if (lodash_1.default.isArray(type)) {
        types = type.map(function (t) { return exports.getDisplayName(t); });
    }
    else {
        types = [exports.getDisplayName(type)];
    }
    react_1.default.Children.forEach(children, function (child) {
        var displayName = lodash_1.default.get(child, 'type.displayName');
        if (displayName && types.indexOf(displayName) !== -1) {
            return;
        }
        newChildren.push(child);
    });
    return newChildren;
};
exports.withoutType = withoutType;
var validateWidthHeight = function (el) {
    if (!el || !el.props) {
        return false;
    }
    var _a = el.props, width = _a.width, height = _a.height;
    if (!DataUtils_1.isNumber(width) || width <= 0 || !DataUtils_1.isNumber(height) || height <= 0) {
        return false;
    }
    return true;
};
exports.validateWidthHeight = validateWidthHeight;
var SVG_TAGS = [
    'a',
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColormatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-url',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'lineGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'script',
    'set',
    'stop',
    'style',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'title',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern',
];
var isSvgElement = function (child) { return child && child.type && lodash_1.default.isString(child.type) && SVG_TAGS.indexOf(child.type) >= 0; };
var filterSvgElements = function (children) {
    var svgElements = [];
    react_1.default.Children.forEach(children, function (entry) {
        if (isSvgElement(entry)) {
            svgElements.push(entry);
        }
    });
    return svgElements;
};
exports.filterSvgElements = filterSvgElements;
var isChildrenEqual = function (nextChildren, prevChildren) {
    if (nextChildren === prevChildren) {
        return true;
    }
    if (react_1.Children.count(nextChildren) !== react_1.Children.count(prevChildren)) {
        return false;
    }
    var count = react_1.Children.count(nextChildren);
    if (count === 0) {
        return true;
    }
    if (count === 1) {
        return exports.isSingleChildEqual(lodash_1.default.isArray(nextChildren) ? nextChildren[0] : nextChildren, lodash_1.default.isArray(prevChildren) ? prevChildren[0] : prevChildren);
    }
    for (var i = 0; i < count; i++) {
        var nextChild = nextChildren[i];
        var prevChild = prevChildren[i];
        if (lodash_1.default.isArray(nextChild) || lodash_1.default.isArray(prevChild)) {
            if (!exports.isChildrenEqual(nextChild, prevChild)) {
                return false;
            }
        }
        else if (!exports.isSingleChildEqual(nextChild, prevChild)) {
            return false;
        }
    }
    return true;
};
exports.isChildrenEqual = isChildrenEqual;
var isSingleChildEqual = function (nextChild, prevChild) {
    if (lodash_1.default.isNil(nextChild) && lodash_1.default.isNil(prevChild)) {
        return true;
    }
    if (!lodash_1.default.isNil(nextChild) && !lodash_1.default.isNil(prevChild)) {
        var _a = nextChild.props || {}, nextChildren = _a.children, nextProps = __rest(_a, ["children"]);
        var _b = prevChild.props || {}, prevChildren = _b.children, prevProps = __rest(_b, ["children"]);
        if (nextChildren && prevChildren) {
            return ShallowEqual_1.shallowEqual(nextProps, prevProps) && exports.isChildrenEqual(nextChildren, prevChildren);
        }
        if (!nextChildren && !prevChildren) {
            return ShallowEqual_1.shallowEqual(nextProps, prevProps);
        }
        return false;
    }
    return false;
};
exports.isSingleChildEqual = isSingleChildEqual;
var renderByOrder = function (children, renderMap) {
    var elements = [];
    var record = {};
    react_1.Children.forEach(children, function (child, index) {
        if (isSvgElement(child)) {
            elements.push(child);
        }
        else if (child) {
            var displayName = exports.getDisplayName(child.type);
            var _a = renderMap[displayName] || {}, handler = _a.handler, once = _a.once;
            if (handler && (!once || !record[displayName])) {
                var results = handler(child, displayName, index);
                elements.push(results);
                record[displayName] = true;
            }
        }
    });
    return lodash_1.default.flatten(elements).filter(function (element) { return !lodash_1.default.isNil(element); });
};
exports.renderByOrder = renderByOrder;
var getReactEventByType = function (e) {
    var type = e && e.type;
    if (type && REACT_BROWSER_EVENT_MAP[type]) {
        return REACT_BROWSER_EVENT_MAP[type];
    }
    return null;
};
exports.getReactEventByType = getReactEventByType;
var parseChildIndex = function (child, children) {
    var result = -1;
    react_1.Children.forEach(children, function (entry, index) {
        if (entry === child) {
            result = index;
        }
    });
    return result;
};
exports.parseChildIndex = parseChildIndex;
//# sourceMappingURL=ReactUtils.js.map