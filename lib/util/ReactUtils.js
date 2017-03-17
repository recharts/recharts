'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isChildrenEqual = exports.isSingleChildEqual = exports.filterSvgElements = exports.isSsr = exports.validateWidthHeight = exports.filterEventsOfChild = exports.filterEventAttributes = exports.getPresentationAttributes = exports.withoutType = exports.findChildByType = exports.findAllByType = exports.getDisplayName = exports.EVENT_ATTRIBUTES = exports.PRESENTATION_ATTRIBUTES = undefined;

var _isNil2 = require('lodash/isNil');

var _isNil3 = _interopRequireDefault(_isNil2);

var _isString2 = require('lodash/isString');

var _isString3 = _interopRequireDefault(_isString2);

var _isObject2 = require('lodash/isObject');

var _isObject3 = _interopRequireDefault(_isObject2);

var _isFunction2 = require('lodash/isFunction');

var _isFunction3 = _interopRequireDefault(_isFunction2);

var _isArray2 = require('lodash/isArray');

var _isArray3 = _interopRequireDefault(_isArray2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DataUtils = require('./DataUtils');

var _PureRender = require('./PureRender');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRESENTATION_ATTRIBUTES = exports.PRESENTATION_ATTRIBUTES = {
  alignmentBaseline: _react.PropTypes.string,
  angle: _react.PropTypes.number,
  baselineShift: _react.PropTypes.string,
  clip: _react.PropTypes.string,
  clipPath: _react.PropTypes.string,
  clipRule: _react.PropTypes.string,
  color: _react.PropTypes.string,
  colorInterpolation: _react.PropTypes.string,
  colorInterpolationFilters: _react.PropTypes.string,
  colorProfile: _react.PropTypes.string,
  colorRendering: _react.PropTypes.string,
  cursor: _react.PropTypes.string,
  direction: _react.PropTypes.oneOf(['ltr', 'rtl', 'inherit']),
  display: _react.PropTypes.string,
  dominantBaseline: _react.PropTypes.string,
  enableBackground: _react.PropTypes.string,
  fill: _react.PropTypes.string,
  fillOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  fillRule: _react.PropTypes.oneOf(['nonzero', 'evenodd', 'inherit']),
  filter: _react.PropTypes.string,
  floodColor: _react.PropTypes.string,
  floodOpacity: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  font: _react.PropTypes.string,
  fontFamily: _react.PropTypes.string,
  fontSize: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  fontSizeAdjust: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  fontStretch: _react.PropTypes.oneOf(['normal', 'wider', 'narrower', 'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', 'inherit']),
  fontStyle: _react.PropTypes.oneOf(['normal', 'italic', 'oblique', 'inherit']),
  fontVariant: _react.PropTypes.oneOf(['normal', 'small-caps', 'inherit']),
  fontWeight: _react.PropTypes.oneOf(['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit']),
  glyphOrientationHorizontal: _react.PropTypes.string,
  glyphOrientationVertical: _react.PropTypes.string,
  imageRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeQuality', 'inherit']),
  kerning: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  letterSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  lightingColor: _react.PropTypes.string,
  markerEnd: _react.PropTypes.string,
  markerMid: _react.PropTypes.string,
  markerStart: _react.PropTypes.string,
  mask: _react.PropTypes.string,
  opacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  overflow: _react.PropTypes.oneOf(['visible', 'hidden', 'scroll', 'auto', 'inherit']),
  pointerEvents: _react.PropTypes.oneOf(['visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none', 'inherit']),
  shapeRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit']),
  stopColor: _react.PropTypes.string,
  stopOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  stroke: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  strokeDasharray: _react.PropTypes.string,
  strokeDashoffset: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  strokeLinecap: _react.PropTypes.oneOf(['butt', 'round', 'square', 'inherit']),
  strokeLinejoin: _react.PropTypes.oneOf(['miter', 'round', 'bevel', 'inherit']),
  strokeMiterlimit: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  strokeOpacity: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  strokeWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  textAnchor: _react.PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
  textDecoration: _react.PropTypes.oneOf(['none', 'underline', 'overline', 'line-through', 'blink', 'inherit']),
  textRendering: _react.PropTypes.oneOf(['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision', 'inherit']),
  unicodeBidi: _react.PropTypes.oneOf(['normal', 'embed', 'bidi-override', 'inherit']),
  visibility: _react.PropTypes.oneOf(['visible', 'hidden', 'collapse', 'inherit']),
  wordSpacing: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  writingMode: _react.PropTypes.oneOf(['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit']),
  transform: _react.PropTypes.string,
  style: _react.PropTypes.object,

  width: _react.PropTypes.number,
  height: _react.PropTypes.number,
  dx: _react.PropTypes.number,
  dy: _react.PropTypes.number,
  x: _react.PropTypes.number,
  y: _react.PropTypes.number,
  r: _react.PropTypes.number
};

var EVENT_ATTRIBUTES = exports.EVENT_ATTRIBUTES = {
  onClick: _react.PropTypes.func,
  onMouseDown: _react.PropTypes.func,
  onMouseUp: _react.PropTypes.func,
  onMouseOver: _react.PropTypes.func,
  onMouseMove: _react.PropTypes.func,
  onMouseOut: _react.PropTypes.func,
  onMouseEnter: _react.PropTypes.func,
  onMouseLeave: _react.PropTypes.func
};
/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
var getDisplayName = exports.getDisplayName = function getDisplayName(Comp) {
  if (!Comp) {
    return '';
  }
  if (typeof Comp === 'string') {
    return Comp;
  }
  return Comp.displayName || Comp.name || 'Component';
};

/*
 * Find and return all matched children by type. `type` can be a React element class or
 * string
 */
var findAllByType = exports.findAllByType = function findAllByType(children, type) {
  var result = [];
  var types = [];

  if ((0, _isArray3.default)(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }

  _react2.default.Children.forEach(children, function (child) {
    var childType = child && child.type && (child.type.displayName || child.type.name);
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
var findChildByType = exports.findChildByType = function findChildByType(children, type) {
  var result = findAllByType(children, type);

  return result && result[0];
};

/*
 * Create a new array of children excluding the ones matched the type
 */
var withoutType = exports.withoutType = function withoutType(children, type) {
  var newChildren = [];
  var types = void 0;

  if ((0, _isArray3.default)(type)) {
    types = type.map(function (t) {
      return getDisplayName(t);
    });
  } else {
    types = [getDisplayName(type)];
  }

  _react2.default.Children.forEach(children, function (child) {
    if (child && child.type && child.type.displayName && types.indexOf(child.type.displayName) !== -1) {
      return;
    }
    newChildren.push(child);
  });

  return newChildren;
};

/**
 * get all the presentation attribute of svg element
 * @param  {Object} el A react element or the props of a react element
 * @return {Object}    attributes or null
 */
var getPresentationAttributes = exports.getPresentationAttributes = function getPresentationAttributes(el) {
  if (!el || (0, _isFunction3.default)(el)) {
    return null;
  }

  var props = _react2.default.isValidElement(el) ? el.props : el;

  if (!(0, _isObject3.default)(props)) {
    return null;
  }

  var out = null;
  // eslint-disable-next-line no-restricted-syntax
  for (var i in props) {
    if ({}.hasOwnProperty.call(props, i) && PRESENTATION_ATTRIBUTES[i]) {
      if (!out) out = {};
      out[i] = props[i];
    }
  }
  return out;
};

/**
 * get all the event attribute of svg element
 * @param  {Object} el A react element or the props of a react element
 * @return {Object}    attributes or null
 */
var filterEventAttributes = exports.filterEventAttributes = function filterEventAttributes(el) {
  if (!el || (0, _isFunction3.default)(el)) {
    return null;
  }

  var props = _react2.default.isValidElement(el) ? el.props : el;

  if (!(0, _isObject3.default)(props)) {
    return null;
  }

  var out = null;
  // eslint-disable-next-line no-restricted-syntax
  for (var i in props) {
    if ({}.hasOwnProperty.call(props, i) && EVENT_ATTRIBUTES[i]) {
      if (!out) out = {};
      out[i] = props[i];
    }
  }
  return out;
};

var getEventHandler = function getEventHandler(originalHandler, data, index) {
  return function (e) {
    originalHandler(data, index, e);

    return null;
  };
};

var filterEventsOfChild = exports.filterEventsOfChild = function filterEventsOfChild(props, data, index) {
  if (!(0, _isObject3.default)(props)) {
    return null;
  }

  var out = null;
  // eslint-disable-next-line no-restricted-syntax
  for (var i in props) {
    if ({}.hasOwnProperty.call(props, i) && EVENT_ATTRIBUTES[i] && (0, _isFunction3.default)(props[i])) {
      if (!out) out = {};
      out[i] = getEventHandler(props[i], data, index);
    }
  }
  return out;
};

/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */
var validateWidthHeight = exports.validateWidthHeight = function validateWidthHeight(el) {
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

var isSsr = exports.isSsr = function isSsr() {
  return !(typeof window !== 'undefined' && window.document && window.document.createElement && window.setTimeout);
};

var SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image', 'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script', 'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref', 'tspan', 'use', 'view', 'vkern'];
/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */
var filterSvgElements = exports.filterSvgElements = function filterSvgElements(children) {
  var svgElements = [];

  _react2.default.Children.forEach(children, function (entry) {
    if (entry && entry.type && (0, _isString3.default)(entry.type) && SVG_TAGS.indexOf(entry.type) >= 0) {
      svgElements.push(entry);
    }
  });

  return svgElements;
};

var isSingleChildEqual = exports.isSingleChildEqual = function isSingleChildEqual(nextChild, prevChild) {
  if ((0, _isNil3.default)(nextChild) && (0, _isNil3.default)(prevChild)) {
    return true;
  } else if (!(0, _isNil3.default)(nextChild) && !(0, _isNil3.default)(prevChild)) {
    return (0, _PureRender.shallowEqual)(nextChild.props, prevChild.props);
  }

  return false;
};
/**
 * Wether props of children changed
 * @param  {Object} nextChildren The latest children
 * @param  {Object} prevChildren The prev children
 * @return {Boolean}             equal or not
 */
var isChildrenEqual = exports.isChildrenEqual = function isChildrenEqual(nextChildren, prevChildren) {
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
    return isSingleChildEqual(nextChildren, prevChildren);
  }

  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];

    if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }

  return true;
};