import _ from 'lodash';
import React, { Children, ComponentClass, FunctionComponent, ReactElement, ReactNode } from 'react';
import { isFragment } from 'react-is';
import { isNumber } from './DataUtils';
import { shallowEqual } from './ShallowEqual';

const REACT_BROWSER_EVENT_MAP: Record<string, string> = {
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
export const getDisplayName = (Comp: string | ComponentClass | FunctionComponent): string => {
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
  type: string | string[] | ComponentClass | FunctionComponent,
): React.ReactElement[] => {
  const result: React.ReactElement[] = [];
  let types: string[] = [];

  if (_.isArray(type)) {
    types = type.map(t => getDisplayName(t));
  } else {
    types = [getDisplayName(type)];
  }

  toArray(children).forEach(child => {
    if (typeof child === 'object' && child && 'type' in child && typeof child.type !== 'string') {
      const childType = (child.type as FunctionComponent).displayName || child.type.name;

      if (types.includes(childType)) {
        result.push(child);
      }
    }
  });

  return result;
};
/*
 * Return the first matched child by type, return null otherwise.
 * `type` can be a React element class or string.
 */
export const findChildByType = (children: ReactNode, type: string): React.ReactElement => {
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
export const validateWidthHeight = (el: { props: { width?: number; height?: number } }): boolean => {
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

const isSvgElement = (child: ReactNode) =>
  child &&
  typeof child === 'object' &&
  'type' in child &&
  child.type &&
  _.isString(child.type) &&
  SVG_TAGS.indexOf(child.type) >= 0;

/**
 * Filter all the svg elements of children
 * @param  {Array} children The children of a react element
 * @return {Array}          All the svg elements
 */
export const filterSvgElements = (children: ReactNode): React.ReactElement[] => {
  const svgElements = [] as React.ReactElement[];

  toArray(children).forEach(entry => {
    if (typeof entry === 'object' && entry && 'type' in entry && isSvgElement(entry)) {
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
export const isChildrenEqual = (nextChildren: ReactNode, prevChildren: ReactNode): boolean => {
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

  if (!_.isArray(nextChildren) || !_.isArray(prevChildren)) {
    return false;
  }

  for (let i = 0; i < count; i++) {
    const nextChild: ReactNode = nextChildren[i];
    const prevChild: ReactNode = prevChildren[i];

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

export const isSingleChildEqual = (nextChild: ReactNode, prevChild: ReactNode): boolean => {
  if (_.isNil(nextChild) && _.isNil(prevChild)) {
    return true;
  }

  if (nextChild === prevChild) {
    return true;
  }

  if (typeof nextChild !== 'object' || typeof prevChild !== 'object') {
    return false;
  }

  if (!_.isNil(nextChild) && !_.isNil(prevChild) && 'props' in nextChild && 'props' in prevChild) {
    const { children: nextChildren, ...nextProps } = nextChild.props || {};
    const { children: prevChildren, ...prevProps } = prevChild.props || {};

    if (nextChildren && prevChildren) {
      return shallowEqual(nextProps, prevProps) && isChildrenEqual(nextChildren, prevChildren);
    }
    if (!nextChildren && !prevChildren) {
      return shallowEqual(nextProps, prevProps);
    }

    return false;
  }

  return false;
};

export const renderByOrder = (
  children: ReactNode,
  renderMap: Record<
    string,
    {
      handler: (element: ReactElement, displayName: string, index: number) => ReactElement | ReactElement[];
      once?: boolean;
    }
  >,
) => {
  const elements: ReactNode[] = [];
  const record: Record<string, boolean> = {};

  toArray(children).forEach((child, index) => {
    if (isSvgElement(child)) {
      elements.push(child);
    } else if (child && typeof child === 'object' && 'type' in child) {
      const displayName = getDisplayName(child.type);
      const { handler, once } = renderMap[displayName] || {};

      if (handler && (!once || !record[displayName])) {
        const results = handler(child, displayName, index);

        if (Array.isArray(results)) {
          elements.push(...results);
        } else {
          elements.push(results);
        }

        record[displayName] = true;
      }
    }
  });

  return elements;
};

export const getReactEventByType = (eventType: string) => {
  return REACT_BROWSER_EVENT_MAP[eventType] ?? null;
};

export const parseChildIndex = (child: ReactNode, children: ReactNode) => {
  return toArray(children).indexOf(child);
};
