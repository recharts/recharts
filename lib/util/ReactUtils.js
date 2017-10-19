'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseChildIndex = exports.getReactEventByType = exports.renderByOrder = exports.isChildrenEqual = exports.isSingleChildEqual = exports.filterSvgElements = exports.isSsr = exports.validateWidthHeight = exports.filterEventsOfChild = exports.filterEventAttributes = exports.getPresentationAttributes = exports.withoutType = exports.findChildByType = exports.findAllByType = exports.getDisplayName = exports.LEGEND_TYPES = exports.SCALE_TYPES = exports.EVENT_ATTRIBUTES = exports.PRESENTATION_ATTRIBUTES = undefined;

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

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DataUtils = require('./DataUtils');

var _PureRender = require('./PureRender');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var PRESENTATION_ATTRIBUTES = exports.PRESENTATION_ATTRIBUTES = {
  alignmentBaseline: _propTypes2.default.string,
  angle: _propTypes2.default.number,
  baselineShift: _propTypes2.default.string,
  clip: _propTypes2.default.string,
  clipPath: _propTypes2.default.string,
  clipRule: _propTypes2.default.string,
  color: _propTypes2.default.string,
  colorInterpolation: _propTypes2.default.string,
  colorInterpolationFilters: _propTypes2.default.string,
  colorProfile: _propTypes2.default.string,
  colorRendering: _propTypes2.default.string,
  cursor: _propTypes2.default.string,
  direction: _propTypes2.default.oneOf(['ltr', 'rtl', 'inherit']),
  display: _propTypes2.default.string,
  dominantBaseline: _propTypes2.default.string,
  enableBackground: _propTypes2.default.string,
  fill: _propTypes2.default.string,
  fillOpacity: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  fillRule: _propTypes2.default.oneOf(['nonzero', 'evenodd', 'inherit']),
  filter: _propTypes2.default.string,
  floodColor: _propTypes2.default.string,
  floodOpacity: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  font: _propTypes2.default.string,
  fontFamily: _propTypes2.default.string,
  fontSize: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  fontSizeAdjust: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  fontStretch: _propTypes2.default.oneOf(['normal', 'wider', 'narrower', 'ultra-condensed', 'extra-condensed', 'condensed', 'semi-condensed', 'semi-expanded', 'expanded', 'extra-expanded', 'ultra-expanded', 'inherit']),
  fontStyle: _propTypes2.default.oneOf(['normal', 'italic', 'oblique', 'inherit']),
  fontVariant: _propTypes2.default.oneOf(['normal', 'small-caps', 'inherit']),
  fontWeight: _propTypes2.default.oneOf(['normal', 'bold', 'bolder', 'lighter', 100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit']),
  glyphOrientationHorizontal: _propTypes2.default.string,
  glyphOrientationVertical: _propTypes2.default.string,
  imageRendering: _propTypes2.default.oneOf(['auto', 'optimizeSpeed', 'optimizeQuality', 'inherit']),
  kerning: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  letterSpacing: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  lightingColor: _propTypes2.default.string,
  markerEnd: _propTypes2.default.string,
  markerMid: _propTypes2.default.string,
  markerStart: _propTypes2.default.string,
  mask: _propTypes2.default.string,
  opacity: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  overflow: _propTypes2.default.oneOf(['visible', 'hidden', 'scroll', 'auto', 'inherit']),
  pointerEvents: _propTypes2.default.oneOf(['visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted', 'fill', 'stroke', 'all', 'none', 'inherit']),
  shapeRendering: _propTypes2.default.oneOf(['auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit']),
  stopColor: _propTypes2.default.string,
  stopOpacity: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  stroke: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  strokeDasharray: _propTypes2.default.string,
  strokeDashoffset: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  strokeLinecap: _propTypes2.default.oneOf(['butt', 'round', 'square', 'inherit']),
  strokeLinejoin: _propTypes2.default.oneOf(['miter', 'round', 'bevel', 'inherit']),
  strokeMiterlimit: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  strokeOpacity: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  strokeWidth: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  textAnchor: _propTypes2.default.oneOf(['start', 'middle', 'end', 'inherit']),
  textDecoration: _propTypes2.default.oneOf(['none', 'underline', 'overline', 'line-through', 'blink', 'inherit']),
  textRendering: _propTypes2.default.oneOf(['auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision', 'inherit']),
  unicodeBidi: _propTypes2.default.oneOf(['normal', 'embed', 'bidi-override', 'inherit']),
  visibility: _propTypes2.default.oneOf(['visible', 'hidden', 'collapse', 'inherit']),
  wordSpacing: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
  writingMode: _propTypes2.default.oneOf(['lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit']),
  transform: _propTypes2.default.string,
  style: _propTypes2.default.object,

  width: _propTypes2.default.number,
  height: _propTypes2.default.number,
  dx: _propTypes2.default.number,
  dy: _propTypes2.default.number,
  x: _propTypes2.default.number,
  y: _propTypes2.default.number,
  r: _propTypes2.default.number
};

var EVENT_ATTRIBUTES = exports.EVENT_ATTRIBUTES = {
  onClick: _propTypes2.default.func,
  onMouseDown: _propTypes2.default.func,
  onMouseUp: _propTypes2.default.func,
  onMouseOver: _propTypes2.default.func,
  onMouseMove: _propTypes2.default.func,
  onMouseOut: _propTypes2.default.func,
  onMouseEnter: _propTypes2.default.func,
  onMouseLeave: _propTypes2.default.func,
  onTouchEnd: _propTypes2.default.func,
  onTouchMove: _propTypes2.default.func,
  onTouchStart: _propTypes2.default.func,
  onTouchCancel: _propTypes2.default.func
};

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

var SCALE_TYPES = exports.SCALE_TYPES = ['auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point', 'ordinal', 'quantile', 'quantize', 'utcTime', 'sequential', 'threshold'];

var LEGEND_TYPES = exports.LEGEND_TYPES = ['line', 'square', 'rect', 'circle', 'cross', 'diamond', 'star', 'triangle', 'wye', 'none'];

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
 * @param  {Object}   el         A react element or the props of a react element
 * @param  {Function} newHandler New handler of event
 * @return {Object}              attributes or null
 */
var filterEventAttributes = exports.filterEventAttributes = function filterEventAttributes(el, newHandler) {
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
      out[i] = newHandler || props[i];
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

var isSvgElement = function isSvgElement(child) {
  return child && child.type && (0, _isString3.default)(child.type) && SVG_TAGS.indexOf(child.type) >= 0;
};

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
    return isSingleChildEqual(_react.Children.only(nextChildren), _react.Children.only(prevChildren));
  }

  for (var i = 0; i < count; i++) {
    var nextChild = nextChildren[i];
    var prevChild = prevChildren[i];

    if ((0, _isArray3.default)(nextChild) || (0, _isArray3.default)(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      }
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }

  return true;
};

var renderByOrder = exports.renderByOrder = function renderByOrder(children, renderMap) {
  var elements = [];
  var record = {};

  _react.Children.forEach(children, function (child, index) {
    if (child && isSvgElement(child)) {
      elements.push(child);
    } else if (child && renderMap[getDisplayName(child.type)]) {
      var displayName = getDisplayName(child.type);
      var _renderMap$displayNam = renderMap[displayName],
          handler = _renderMap$displayNam.handler,
          once = _renderMap$displayNam.once;


      if (once && !record[displayName] || !once) {
        var results = handler(child, displayName, index);

        if ((0, _isArray3.default)(results)) {
          elements = [elements].concat(_toConsumableArray(results));
        } else {
          elements.push(results);
        }

        record[displayName] = true;
      }
    }
  });

  return elements;
};

var getReactEventByType = exports.getReactEventByType = function getReactEventByType(e) {
  var type = e && e.type;

  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }

  return null;
};

var parseChildIndex = exports.parseChildIndex = function parseChildIndex(child, children) {
  var result = -1;
  _react.Children.forEach(children, function (entry, index) {
    if (entry === child) {
      result = index;
    }
  });

  return result;
};