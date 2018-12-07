import React, { Children } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { isNumber } from './DataUtils';
import { shallowEqual } from './PureRender';

export const PRESENTATION_ATTRIBUTES = {
  alignmentBaseline: PropTypes.string,
  angle: PropTypes.number,
  baselineShift: PropTypes.string,
  clip: PropTypes.string,
  clipPath: PropTypes.string,
  clipRule: PropTypes.string,
  color: PropTypes.string,
  colorInterpolation: PropTypes.string,
  colorInterpolationFilters: PropTypes.string,
  colorProfile: PropTypes.string,
  colorRendering: PropTypes.string,
  cursor: PropTypes.string,
  direction: PropTypes.oneOf(['ltr', 'rtl', 'inherit']),
  display: PropTypes.string,
  dominantBaseline: PropTypes.string,
  enableBackground: PropTypes.string,
  fill: PropTypes.string,
  fillOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fillRule: PropTypes.oneOf(['nonzero', 'evenodd', 'inherit']),
  filter: PropTypes.string,
  floodColor: PropTypes.string,
  floodOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  font: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontSizeAdjust: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fontStretch: PropTypes.oneOf([
    'normal', 'wider', 'narrower', 'ultra-condensed', 'extra-condensed',
    'condensed', 'semi-condensed', 'semi-expanded', 'expanded',
    'extra-expanded', 'ultra-expanded', 'inherit',
  ]),
  fontStyle: PropTypes.oneOf(['normal', 'italic', 'oblique', 'inherit']),
  fontVariant: PropTypes.oneOf(['normal', 'small-caps', 'inherit']),
  fontWeight: PropTypes.oneOf([
    'normal', 'bold', 'bolder', 'lighter',
    100, 200, 300, 400, 500, 600, 700, 800, 900, 'inherit',
  ]),
  glyphOrientationHorizontal: PropTypes.string,
  glyphOrientationVertical: PropTypes.string,
  imageRendering: PropTypes.oneOf([
    'auto', 'optimizeSpeed', 'optimizeQuality', 'inherit',
  ]),
  kerning: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  letterSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lightingColor: PropTypes.string,
  lineHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  markerEnd: PropTypes.string,
  markerMid: PropTypes.string,
  markerStart: PropTypes.string,
  mask: PropTypes.string,
  opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  overflow: PropTypes.oneOf(['visible', 'hidden', 'scroll', 'auto', 'inherit']),
  pointerEvents: PropTypes.oneOf([
    'visiblePainted', 'visibleFill', 'visibleStroke', 'visible', 'painted',
    'fill', 'stroke', 'all', 'none', 'inherit',
  ]),
  shapeRendering: PropTypes.oneOf([
    'auto', 'optimizeSpeed', 'crispEdges', 'geometricPrecision', 'inherit',
  ]),
  stopColor: PropTypes.string,
  stopOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stroke: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeDasharray: PropTypes.string,
  strokeDashoffset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeLinecap: PropTypes.oneOf(['butt', 'round', 'square', 'inherit']),
  strokeLinejoin: PropTypes.oneOf(['miter', 'round', 'bevel', 'inherit']),
  strokeMiterlimit: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeOpacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  strokeWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textAnchor: PropTypes.oneOf(['start', 'middle', 'end', 'inherit']),
  textDecoration: PropTypes.oneOf([
    'none', 'underline', 'overline', 'line-through', 'blink', 'inherit',
  ]),
  textRendering: PropTypes.oneOf([
    'auto', 'optimizeSpeed', 'optimizeLegibility', 'geometricPrecision',
    'inherit',
  ]),
  unicodeBidi: PropTypes.oneOf(['normal', 'embed', 'bidi-override', 'inherit']),
  visibility: PropTypes.oneOf(['visible', 'hidden', 'collapse', 'inherit']),
  wordSpacing: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  writingMode: PropTypes.oneOf([
    'lr-tb', 'rl-tb', 'tb-rl', 'lr', 'rl', 'tb', 'inherit',
  ]),
  transform: PropTypes.string,
  style: PropTypes.object,

  width: PropTypes.number,
  height: PropTypes.number,
  dx: PropTypes.number,
  dy: PropTypes.number,
  x: PropTypes.number,
  y: PropTypes.number,
  r: PropTypes.number,
  // The radius of Rectangle
  radius: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
};

export const EVENT_ATTRIBUTES = {
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onTouchEnd: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchStart: PropTypes.func,
  onTouchCancel: PropTypes.func,
};

const REACT_BROWSER_EVENT_MAP = {
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

export const SCALE_TYPES = [
  'auto', 'linear', 'pow', 'sqrt', 'log', 'identity', 'time', 'band', 'point',
  'ordinal', 'quantile', 'quantize', 'utc', 'sequential', 'threshold',
];

export const LEGEND_TYPES = [
  'plainline', 'line', 'square', 'rect', 'circle', 'cross',
  'diamond', 'star', 'triangle', 'wye', 'none',
];

/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
export const getDisplayName = (Comp) => {
  if (typeof Comp === 'string') {
    return Comp;
  }
  if (!Comp) { return ''; }
  return Comp.displayName || Comp.name || 'Component';
};

/*
 * Find and return all matched children by type. `type` can be a React element class or
 * string
 */
export const findAllByType = (children, type) => {
  const result = [];
  let types = [];

  if (_.isArray(type)) {
    types = type.map(t => getDisplayName(t));
  } else {
    types = [getDisplayName(type)];
  }

  React.Children.forEach(children, (child) => {
    const childType = child && child.type && (child.type.displayName || child.type.name);
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
export const findChildByType = (children, type) => {
  const result = findAllByType(children, type);

  return result && result[0];
};

/*
 * Create a new array of children excluding the ones matched the type
 */
export const withoutType = (children, type) => {
  const newChildren = [];
  let types;

  if (_.isArray(type)) {
    types = type.map(t => getDisplayName(t));
  } else {
    types = [getDisplayName(type)];
  }

  React.Children.forEach(children, (child) => {
    if (child && child.type && child.type.displayName &&
      types.indexOf(child.type.displayName) !== -1) {
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
export const getPresentationAttributes = (el) => {
  if (!el || _.isFunction(el)) { return null; }

  const props = React.isValidElement(el) ? el.props : el;

  if (!_.isObject(props)) { return null; }

  let out = null;
  // eslint-disable-next-line no-restricted-syntax
  for (const i in props) {
    if ({}.hasOwnProperty.call(props, i) && PRESENTATION_ATTRIBUTES[i]) {
      if (!out) out = {};
      out[i] = props[i];
    }
  }
  return out;
};

const getEventHandlerOfElement = (originalHandler, props) => (
  (e) => {
    originalHandler(props, e);

    return null;
  }
);
/**
 * get all the event attribute of svg element
 * @param  {Object}   el           A react element or the props of a react element
 * @param  {Function} newHandler   New handler of event
 * @param  {Boolean}  wrapCallback Wrap callback and return more parameters or not
 * @return {Object}                attributes or null
 */
export const filterEventAttributes = (el, newHandler, wrapCallback = false) => {
  if (!el || _.isFunction(el)) { return null; }

  const props = React.isValidElement(el) ? el.props : el;

  if (!_.isObject(props)) { return null; }

  let out = null;
  // eslint-disable-next-line no-restricted-syntax
  for (const i in props) {
    if ({}.hasOwnProperty.call(props, i) && EVENT_ATTRIBUTES[i]) {
      if (!out) out = {};
      out[i] = newHandler || (wrapCallback ? getEventHandlerOfElement(props[i], props) : props[i]);
    }
  }
  return out;
};

const getEventHandlerOfChild = (originalHandler, data, index) => (
  (e) => {
    originalHandler(data, index, e);

    return null;
  }
);

export const filterEventsOfChild = (props, data, index) => {
  if (!_.isObject(props)) { return null; }

  let out = null;
  // eslint-disable-next-line no-restricted-syntax
  for (const i in props) {
    if ({}.hasOwnProperty.call(props, i) && EVENT_ATTRIBUTES[i] && _.isFunction(props[i])) {
      if (!out) out = {};
      out[i] = getEventHandlerOfChild(props[i], data, index);
    }
  }
  return out;
};

/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */
export const validateWidthHeight = (el) => {
  if (!el || !el.props) { return false; }
  const { width, height } = el.props;

  if (!isNumber(width) || width <= 0 ||
    !isNumber(height) || height <= 0) {
    return false;
  }

  return true;
};

export const isSsr = () => (
  !(typeof window !== 'undefined' && window.document && window.document.createElement &&
    window.setTimeout)
);

const SVG_TAGS = ['a', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate',
  'animateColor', 'animateMotion', 'animateTransform', 'circle', 'clipPath',
  'color-profile', 'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColormatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting',
  'feDisplacementMap', 'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG',
  'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'filter', 'font', 'font-face', 'font-face-format', 'font-face-name',
  'font-face-url', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image',
  'line', 'lineGradient', 'marker', 'mask', 'metadata', 'missing-glyph', 'mpath',
  'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'script',
  'set', 'stop', 'style', 'svg', 'switch', 'symbol', 'text', 'textPath', 'title',
  'tref', 'tspan', 'use', 'view', 'vkern'];

const isSvgElement = child => (
  child && child.type && _.isString(child.type) && SVG_TAGS.indexOf(child.type) >= 0
);

/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */
export const filterSvgElements = (children) => {
  const svgElements = [];

  React.Children.forEach(children, (entry) => {
    if (entry && entry.type && _.isString(entry.type) &&
      SVG_TAGS.indexOf(entry.type) >= 0) {
      svgElements.push(entry);
    }
  });

  return svgElements;
};
export const isSingleChildEqual = (nextChild, prevChild) => {
  if (_.isNil(nextChild) && _.isNil(prevChild)) {
    return true;
  } if (!_.isNil(nextChild) && !_.isNil(prevChild)) {
    const { children: nextChildren, ...nextProps } = nextChild.props || {};
    const { children: prevChildren, ...prevProps } = prevChild.props || {};

    if (nextChildren && prevChildren) {
      // eslint-disable-next-line no-use-before-define
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    } if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }

    return false;
  }

  return false;
};
/**
 * Wether props of children changed
 * @param  {Object} nextChildren The latest children
 * @param  {Object} prevChildren The prev children
 * @return {Boolean}             equal or not
 */
export const isChildrenEqual = (nextChildren, prevChildren) => {
  if (nextChildren === prevChildren) { return true; }

  if (Children.count(nextChildren) !== Children.count(prevChildren)) { return false; }
  const count = Children.count(nextChildren);

  if (count === 0) { return true; }
  if (count === 1) {
    return isSingleChildEqual(
      _.isArray(nextChildren) ? nextChildren[0] : nextChildren,
      _.isArray(prevChildren) ? prevChildren[0] : prevChildren,
    );
  }

  for (let i = 0; i < count; i++) {
    const nextChild = nextChildren[i];
    const prevChild = prevChildren[i];

    if (_.isArray(nextChild) || _.isArray(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      }
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }

  return true;
};

export const renderByOrder = (children, renderMap) => {
  let elements = [];
  const record = {};

  Children.forEach(children, (child, index) => {
    if (child && isSvgElement(child)) {
      elements.push(child);
    } else if (child && renderMap[getDisplayName(child.type)]) {
      const displayName = getDisplayName(child.type);
      const { handler, once } = renderMap[displayName];

      if ((once && !record[displayName]) || !once) {
        const results = handler(child, displayName, index);

        if (_.isArray(results)) {
          elements = [elements, ...results];
        } else {
          elements.push(results);
        }

        record[displayName] = true;
      }
    }
  });

  return elements;
};

export const getReactEventByType = (e) => {
  const type = e && e.type;

  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }

  return null;
};

export const parseChildIndex = (child, children) => {
  let result = -1;
  Children.forEach(children, (entry, index) => {
    if (entry === child) {
      result = index;
    }
  });

  return result;
};
