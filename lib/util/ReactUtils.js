"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseChildIndex = exports.getReactEventByType = exports.renderByOrder = exports.isSingleChildEqual = exports.isChildrenEqual = exports.filterSvgElements = exports.validateWidthHeight = exports.withoutType = exports.findChildByType = exports.findAllByType = exports.getDisplayName = exports.TOOLTIP_TYPES = exports.LEGEND_TYPES = exports.SCALE_TYPES = void 0;

var _flatten2 = _interopRequireDefault(require("lodash/flatten"));

var _isNil2 = _interopRequireDefault(require("lodash/isNil"));

var _isString2 = _interopRequireDefault(require("lodash/isString"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isArray2 = _interopRequireDefault(require("lodash/isArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactIs = require("react-is");

var _DataUtils = require("./DataUtils");

var _ShallowEqual = require("./ShallowEqual");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
  touchstart: 'onTouchStart'
};
var SCALE_TYPES = ['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold'];
exports.SCALE_TYPES = SCALE_TYPES;
var LEGEND_TYPES = ['plainline', 'line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye', 'none'];
exports.LEGEND_TYPES = LEGEND_TYPES;
var TOOLTIP_TYPES = ['none'];
/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */

exports.TOOLTIP_TYPES = TOOLTIP_TYPES;

var getDisplayName = function getDisplayName(Comp) {
  if (typeof Comp === 'string') {
    return Comp;
  }

  if (!Comp) {
    return '';
  }

  return Comp.displayName || Comp.name || 'Component';
};
/*
 * Find and return all matched children by type. `type` can be a React element class or
 * string
 */


exports.getDisplayName = getDisplayName;

var findAllByType = function findAllByType(children, type) {
  var result = [];
  var types = [];

  if ((0, _isArray2["default"])(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }

  _react["default"].Children.forEach(children, function (child) {
    if ((0, _reactIs.isFragment)(child)) {
      result = result.concat(findAllByType(child.props.children, type));
    }

    var childType = (0, _get2["default"])(child, 'type.displayName') || (0, _get2["default"])(child, 'type.name');

    if (types.indexOf(childType) !== -1) {
      result.push(child);
    }
  });

  return result;
};
/*
 * Return the first matched child by type, return null otherwise.
 * `type` can be a React element class or string.
 */


exports.findAllByType = findAllByType;

var findChildByType = function findChildByType(children, type) {
  var result = findAllByType(children, type);
  return result && result[0];
};
/*
 * Create a new array of children excluding the ones matched the type
 */


exports.findChildByType = findChildByType;

var withoutType = function withoutType(children, type) {
  var newChildren = [];
  var types;

  if ((0, _isArray2["default"])(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }

  _react["default"].Children.forEach(children, function (child) {
    var displayName = (0, _get2["default"])(child, 'type.displayName');

    if (displayName && types.indexOf(displayName) !== -1) {
      return;
    }

    newChildren.push(child);
  });

  return newChildren;
};
/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */


exports.withoutType = withoutType;

var validateWidthHeight = function validateWidthHeight(el) {
  if (!el || !el.props) {
    return false;
  }

  var _el$props = el.props,
      width = _el$props.width,
      height = _el$props.height;

  if (!(0, _DataUtils.isNumber)(width) || width <= 0 || !(0, _DataUtils.isNumber)(height) || height <= 0) {
    return false;
  }

  return true;
};

exports.validateWidthHeight = validateWidthHeight;
var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];

var isSvgElement = function isSvgElement(child) {
  return child && child.type && (0, _isString2["default"])(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};
/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */


var filterSvgElements = function filterSvgElements(children) {
  var svgElements = [];

  _react["default"].Children.forEach(children, function (entry) {
    if (isSvgElement(entry)) {
      svgElements.push(entry);
    }
  });

  return svgElements;
};
/**
 * Wether props of children changed
 * @param  {Object} nextChildren The latest children
 * @param  {Object} prevChildren The prev children
 * @return {Boolean}             equal or not
 */


exports.filterSvgElements = filterSvgElements;

var isChildrenEqual = function isChildrenEqual(nextChildren, prevChildren) {
  if (nextChildren === prevChildren) {
    return true;
  }

  if (_react.Children.count(nextChildren) !== _react.Children.count(prevChildren)) {
    return false;
  }

  var count = _react.Children.count(nextChildren);

  if (count === 0) {
    return true;
  }

  if (count === 1) {
    // eslint-disable-next-line no-use-before-define,@typescript-eslint/no-use-before-define
    return isSingleChildEqual((0, _isArray2["default"])(nextChildren) ? nextChildren[0] : nextChildren, (0, _isArray2["default"])(prevChildren) ? prevChildren[0] : prevChildren);
  }

  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];

    if ((0, _isArray2["default"])(nextChild) || (0, _isArray2["default"])(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      } // eslint-disable-next-line no-use-before-define,@typescript-eslint/no-use-before-define

    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }

  return true;
};

exports.isChildrenEqual = isChildrenEqual;

var isSingleChildEqual = function isSingleChildEqual(nextChild, prevChild) {
  if ((0, _isNil2["default"])(nextChild) && (0, _isNil2["default"])(prevChild)) {
    return true;
  }

  if (!(0, _isNil2["default"])(nextChild) && !(0, _isNil2["default"])(prevChild)) {
    var _ref = nextChild.props || {},
        nextChildren = _ref.children,
        nextProps = _objectWithoutProperties(_ref, ["children"]);

    var _ref2 = prevChild.props || {},
        prevChildren = _ref2.children,
        prevProps = _objectWithoutProperties(_ref2, ["children"]);

    if (nextChildren && prevChildren) {
      // eslint-disable-next-line no-use-before-define
      return (0, _ShallowEqual.shallowEqual)(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }

    if (!nextChildren && !prevChildren) {
      return (0, _ShallowEqual.shallowEqual)(nextProps, prevProps);
    }

    return false;
  }

  return false;
};

exports.isSingleChildEqual = isSingleChildEqual;

var renderByOrder = function renderByOrder(children, renderMap) {
  var elements = [];
  var record = {};

  _react.Children.forEach(children, function (child, index) {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child) {
      var displayName = getDisplayName(child.type);

      var _ref3 = renderMap[displayName] || {},
          handler = _ref3.handler,
          once = _ref3.once;

      if (handler && (!once || !record[displayName])) {
        var results = handler(child, displayName, index);
        elements.push(results);
        record[displayName] = true;
      }
    }
  });

  return (0, _flatten2["default"])(elements).filter(function (element) {
    return !(0, _isNil2["default"])(element);
  });
};

exports.renderByOrder = renderByOrder;

var getReactEventByType = function getReactEventByType(e) {
  var type = e && e.type;

  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }

  return null;
};

exports.getReactEventByType = getReactEventByType;

var parseChildIndex = function parseChildIndex(child, children) {
  var result = -1;

  _react.Children.forEach(children, function (entry, index) {
    if (entry === child) {
      result = index;
    }
  });

  return result;
};

exports.parseChildIndex = parseChildIndex;