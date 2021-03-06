import React, { Children, ReactNode } from 'react';
import _ from 'lodash';
import { isFragment } from 'react-is';

import { isNumber } from './DataUtils';
import { shallowEqual } from './ShallowEqual';

const REACT_BROWSER_EVENT_MAP: any = {
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

export const LEGEND_TYPES = [
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

export const TOOLTIP_TYPES = ['none'];

/**
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
export const getDisplayName = (Comp: any) => {
  if (typeof Comp === 'string') {
    return Comp;
  }
  if (!Comp) {
    return '';
  }
  return Comp.displayName || Comp.name || 'Component';
};

// `toArray` gets called multiple times during the render
// so we can memoize last invocation (since reference to `children` is the same)
let lastChildren: ReactNode | null = null;
let lastResult: ReactNode[] | null = null;

export const toArray = <T extends ReactNode>(children: T | T[]): T[] => {
  if (children === lastChildren && _.isArray(lastResult)) {
    return lastResult as T[];
  }
  let result: T[] = [];
  Children.forEach(children, child => {
    if (_.isNil(child)) return;
    if (isFragment(child)) {
      result = result.concat(toArray(child.props.children));
    } else {
      result.push(child);
    }
  });
  lastResult = result;
  lastChildren = children;
  return result;
};

/*
 * Find and return all matched children by type. `type` can be a React element class or
 * string
 */
export const findAllByType = (
  children: ReactNode,
  type: string | string[],
): React.DetailedReactHTMLElement<any, HTMLElement>[] => {
  const result: React.DetailedReactHTMLElement<any, HTMLElement>[] = [];
  let types: string[] = [];

  if (_.isArray(type)) {
    types = type.map(t => getDisplayName(t));
  } else {
    types = [getDisplayName(type)];
  }

  toArray(children).forEach((child: React.DetailedReactHTMLElement<any, HTMLElement>) => {
    const childType = _.get(child, 'type.displayName') || _.get(child, 'type.name');
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
export const findChildByType = (
  children: ReactNode[],
  type: string,
): React.DetailedReactHTMLElement<any, HTMLElement> => {
  const result = findAllByType(children, type);

  return result && result[0];
};

/*
 * Create a new array of children excluding the ones matched the type
 */
export const withoutType = (children: ReactNode, type: string) => {
  const newChildren: ReactNode[] = [];
  let types: string[];

  if (_.isArray(type)) {
    types = type.map(t => getDisplayName(t));
  } else {
    types = [getDisplayName(type)];
  }

  toArray(children).forEach(child => {
    const displayName = _.get(child, 'type.displayName');

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
export const validateWidthHeight = (el: any): boolean => {
  if (!el || !el.props) {
    return false;
  }
  const { width, height } = el.props;

  if (!isNumber(width) || width <= 0 || !isNumber(height) || height <= 0) {
    return false;
  }

  return true;
};

const SVG_TAGS: string[] = [
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

const isSvgElement = (child: any) => child && child.type && _.isString(child.type) && SVG_TAGS.indexOf(child.type) >= 0;

/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */
export const filterSvgElements = (children: React.ReactElement[]): React.ReactElement[] => {
  const svgElements = [] as React.ReactElement[];

  toArray(children).forEach((entry: React.ReactElement) => {
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
export const isChildrenEqual = (nextChildren: React.ReactElement[], prevChildren: React.ReactElement[]): boolean => {
  if (nextChildren === prevChildren) {
    return true;
  }

  const count = Children.count(nextChildren);
  if (count !== Children.count(prevChildren)) {
    return false;
  }

  if (count === 0) {
    return true;
  }
  if (count === 1) {
    // eslint-disable-next-line no-use-before-define,@typescript-eslint/no-use-before-define
    return isSingleChildEqual(
      _.isArray(nextChildren) ? nextChildren[0] : nextChildren,
      _.isArray(prevChildren) ? prevChildren[0] : prevChildren,
    );
  }

  for (let i = 0; i < count; i++) {
    const nextChild: any = nextChildren[i];
    const prevChild: any = prevChildren[i];

    if (_.isArray(nextChild) || _.isArray(prevChild)) {
      if (!isChildrenEqual(nextChild, prevChild)) {
        return false;
      }
      // eslint-disable-next-line no-use-before-define,@typescript-eslint/no-use-before-define
    } else if (!isSingleChildEqual(nextChild, prevChild)) {
      return false;
    }
  }

  return true;
};

export const isSingleChildEqual = (nextChild: React.ReactElement, prevChild: React.ReactElement): boolean => {
  if (_.isNil(nextChild) && _.isNil(prevChild)) {
    return true;
  }
  if (!_.isNil(nextChild) && !_.isNil(prevChild)) {
    const { children: nextChildren, ...nextProps } = nextChild.props || {};
    const { children: prevChildren, ...prevProps } = prevChild.props || {};

    if (nextChildren && prevChildren) {
      // eslint-disable-next-line no-use-before-define
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }
    if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }

    return false;
  }

  return false;
};

export const renderByOrder = (children: React.ReactElement[], renderMap: any) => {
  const elements: React.ReactElement[] = [];
  const record: Record<string, boolean> = {};

  toArray(children).forEach((child, index) => {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child) {
      const displayName = getDisplayName(child.type);
      const { handler, once } = renderMap[displayName] || {};

      if (handler && (!once || !record[displayName])) {
        const results = handler(child, displayName, index);

        elements.push(results);
        record[displayName] = true;
      }
    }
  });

  return elements;
};

export const getReactEventByType = (e: any) => {
  const type = e && e.type;

  if (type && REACT_BROWSER_EVENT_MAP[type]) {
    return REACT_BROWSER_EVENT_MAP[type];
  }

  return null;
};

export const parseChildIndex = (child: any, children: any[]) => {
  return toArray(children).indexOf(child);
};
