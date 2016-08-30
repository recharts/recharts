import React, { PropTypes } from 'react';
import _ from 'lodash';

export const PRESENTATION_ATTRIBUTES = {
  alignmentBaseline: PropTypes.string,
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
  fontSize: PropTypes.number,
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
};

const EVENT_ATTRIBUTES = {
  onClick: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseOver: PropTypes.func,
  onMouseMove: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
};
/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
export const getDisplayName = (Comp) => {
  if (!Comp) { return ''; }
  if (typeof Comp === 'string') {
    return Comp;
  }
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

  React.Children.forEach(children, child => {
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

  React.Children.forEach(children, child => {
    if (child && child.type && child.type.displayName
      && types.indexOf(child.type.displayName) !== -1) {
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

  const keys = Object.keys(props).filter(k => PRESENTATION_ATTRIBUTES[k]);

  return (keys && keys.length) ?
    keys.reduce((result, k) => ({ ...result, [k]: props[k] }), {}) :
    null;
};

/**
 * get all the event attribute of svg element
 * @param  {Object} el A react element or the props of a react element
 * @return {Object}    attributes or null
 */
export const filterEventAttributes = (el) => {
  if (!el || _.isFunction(el)) { return null; }

  const props = React.isValidElement(el) ? el.props : el;

  if (!_.isObject(props)) { return null; }

  const keys = Object.keys(props).filter(k => EVENT_ATTRIBUTES[k]);

  return (keys && keys.length) ?
    keys.reduce((result, k) => ({ ...result, [k]: props[k] }), {}) :
    null;
};

const getEventHandler = (originalHandler, data, index) => (
  (e) => {
    originalHandler(data, index, e);

    return null;
  }
);

export const filterEventsOfChild = (props, data, index) => {
  if (!_.isObject(props)) { return null; }

  const events = Object.keys(props).filter(k => (
    EVENT_ATTRIBUTES[k] && _.isFunction(props[k])
  ));

  return (events && events.length) ?
    events.reduce((result, e) => ({
      ...result, [e]: getEventHandler(props[e], data, index),
    }), {}) :
    null;
};

/**
 * validate the width and height props of a chart element
 * @param  {Object} el A chart element
 * @return {Boolean}   true If the props width and height are number, and greater than 0
 */
export const validateWidthHeight = (el) => {
  if (!el || !el.props) { return false; }
  const { width, height } = el.props;

  if (!_.isNumber(width) || width <= 0 ||
    !_.isNumber(height) || height <= 0) {
    return false;
  }

  return true;
};

export const isSsr = () => (typeof document === 'undefined');

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
/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */
export const filterSvgElements = (children) => {
  const svgElements = [];

  React.Children.forEach(children, entry => {
    if (entry && entry.type && _.isString(entry.type) &&
      SVG_TAGS.indexOf(entry.type) >= 0) {
      svgElements.push(entry);
    }
  });

  return svgElements;
};

