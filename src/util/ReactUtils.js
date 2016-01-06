/* eslint no-unused-expressions: 0 */
import React from 'react';
const PRESENTATION_ATTRIBUTES = [
  'alignmentBaseline', 'baselineShift', 'clip', 'clipPath',
  'clipRule', 'color', 'colorInterpolation', 'colorInterpolationFilters',
  'colorProfile', 'colorRendering', 'cursor', 'direction',
  'display', 'dominantBaseline', 'enableBackground', 'fill',
  'fillOpacity', 'fillRule', 'filter', 'floodColor',
  'floodOpacity', 'fontFamily', 'fontSize', 'fontSizeAdjust',
  'fontStretch', 'fontStyle', 'fontVariant', 'fontWeight',
  'glyphOrientationHorizontal', 'glyphOrientationVertical',
  'imageRendering', 'kerning', 'letterSpacing', 'lightingColor',
  'markerEnd', 'markerMid', 'markerStart', 'mask', 'opacity',
  'overflow', 'pointerEvents', 'shapeRendering', 'stopColor', 'stopOpacity',
  'stroke', 'strokeDasharray', 'strokeDashoffset', 'strokeLinecap',
  'strokeLinejoin', 'strokeMiterlimit', 'strokeOpacity', 'strokeWidth',
  'textAnchor', 'textDecoration', 'textRendering', 'unicodeBidi',
  'visibility', 'wordSpacing', 'writingMode',
];

export default {
  /*
   * Find and return all matched children by type. `type` can be a React element class or
   * string
   */
  findAllByType(children, type) {
    const result = [];
    let childType = type;

    if (type && type.displayName) {
      childType = type.displayName;
    }

    React.Children.forEach(children, child => {
      if (child && child.type && child.type.displayName === childType) {
        result.push(child);
      }
    });

    return result;
  },

  /*
   * Return the first matched child by type, return null otherwise.
   * `type` can be a React element class or string.
   */
  findChildByType(children, type) {
    const result = this.findAllByType(children, type);

    return result && result[0];
  },

  /*
   * Create a new array of children excluding the ones matched the type
   */
  withoutType(children) {
    const newChildren = [];
    let types = [].slice.call(arguments, 1);

    types = types.map(type => {
      if (type && type.displayName) { return type.displayName; }
      return type;
    });

    React.Children.forEach(children, child => {
      if (child && child.type && child.type.displayName && types.indexOf(child.type.displayName) !== -1) {
        return;
      }
      newChildren.push(child);
    });

    return newChildren;
  },
  /**
   * get all the attribute of svg element
   * @param  {Object} el An react element
   * @return {Object}    attributes or null
   */
  getPresentationAttributes(el) {
    if (!el || !el.props) {return null;}
    const props = el.props;
    let result = null;

    for (const key in props) {
      if (props.hasOwnProperty(key) && PRESENTATION_ATTRIBUTES.indexOf(key) >= 0) {
        if (!result) {result = {};}
        result[key] = props[key];
      }
    }

    return result;
  },
};
