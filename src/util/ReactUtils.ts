import get from 'es-toolkit/compat/get';

import * as React from 'react';
import { Children, Component, FunctionComponent, isValidElement, ReactNode } from 'react';
import { isFragment } from 'react-is';
import { isNullish } from './DataUtils';
import { FilteredSvgElementType, FilteredElementKeyMap, SVGElementPropKeys, EventKeys, ActiveDotType } from './types';

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

/**
 * @deprecated instead find another approach that does not depend on displayName.
 * Get the display name of a component
 * @param  {Object} Comp Specified Component
 * @return {String}      Display name of Component
 */
export const getDisplayName = (Comp: React.ComponentType | string) => {
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

/**
 * @deprecated instead find another approach that does not require reading React Elements from DOM.
 *
 * @param children do not use
 * @return deprecated do not use
 */
export const toArray = <T extends ReactNode>(children: T | T[]): T[] => {
  if (children === lastChildren && Array.isArray(lastResult)) {
    return lastResult as T[];
  }
  let result: T[] = [];
  Children.forEach(children, child => {
    if (isNullish(child)) return;
    if (isFragment(child)) {
      result = result.concat(toArray(child.props.children));
    } else {
      // @ts-expect-error this could still be Iterable<ReactNode> and TS does not like that
      result.push(child);
    }
  });
  lastResult = result;
  lastChildren = children;
  return result;
};

/**
 * @deprecated instead find another approach that does not require reading React Elements from DOM.
 *
 * Find and return all matched children by type.
 * `type` must be a React.ComponentType
 *
 * @param children do not use
 * @param type do not use
 * @return deprecated do not use
 */
export function findAllByType<
  ComponentType extends React.ComponentType,
  DetailedElement = React.DetailedReactHTMLElement<React.ComponentProps<ComponentType>, HTMLElement>,
>(children: ReactNode, type: ComponentType | ComponentType[]): DetailedElement[] {
  const result: DetailedElement[] = [];
  let types: string[] = [];

  if (Array.isArray(type)) {
    types = type.map(t => getDisplayName(t));
  } else {
    types = [getDisplayName(type)];
  }

  toArray(children).forEach(child => {
    const childType = get(child, 'type.displayName') || get(child, 'type.name');
    // ts-expect-error toArray and lodash.get are not compatible. Let's get rid of the whole findAllByType function
    if (types.indexOf(childType) !== -1) {
      result.push(child as DetailedElement);
    }
  });

  return result;
}

export const isClipDot = (dot: ActiveDotType): boolean => {
  if (dot && typeof dot === 'object' && 'clipDot' in dot) {
    return Boolean(dot.clipDot);
  }
  return true;
};

/**
 * Checks if the property is valid to spread onto an SVG element or onto a specific component
 * @param {unknown} property property value currently being compared
 * @param {string} key property key currently being compared
 * @param {boolean} includeEvents if events are included in spreadable props
 * @param {boolean} svgElementType checks against map of SVG element types to attributes
 * @returns {boolean} is prop valid
 */
export const isValidSpreadableProp = (
  property: unknown,
  key: string,
  includeEvents?: boolean,
  svgElementType?: FilteredSvgElementType,
) => {
  /**
   * If the svg element type is explicitly included, check against the filtered element key map
   * to determine if there are attributes that should only exist on that element type.
   * @todo Add an internal cjs version of https://github.com/wooorm/svg-element-attributes for full coverage.
   */
  const matchingElementTypeKeys = (svgElementType && FilteredElementKeyMap?.[svgElementType]) ?? [];

  return (
    key.startsWith('data-') ||
    (typeof property !== 'function' &&
      ((svgElementType && matchingElementTypeKeys.includes(key)) || SVGElementPropKeys.includes(key))) ||
    (includeEvents && EventKeys.includes(key))
  );
};

export const filterProps = (
  props: Record<string, any> | Component | FunctionComponent | boolean | unknown,
  includeEvents: boolean,
  svgElementType?: FilteredSvgElementType,
) => {
  if (!props || typeof props === 'function' || typeof props === 'boolean') {
    return null;
  }

  let inputProps = props as Record<string, any>;

  if (isValidElement(props)) {
    inputProps = props.props as Record<string, any>;
  }

  if (typeof inputProps !== 'object' && typeof inputProps !== 'function') {
    return null;
  }

  const out: Record<string, any> = {};

  /**
   * Props are blindly spread onto SVG elements. This loop filters out properties that we don't want to spread.
   * Items filtered out are as follows:
   *   - functions in properties that are SVG attributes (functions are included when includeEvents is true)
   *   - props that are SVG attributes but don't matched the passed svgElementType
   *   - any prop that is not in SVGElementPropKeys (or in EventKeys if includeEvents is true)
   */
  Object.keys(inputProps).forEach(key => {
    if (isValidSpreadableProp(inputProps?.[key], key, includeEvents, svgElementType)) {
      out[key] = inputProps[key];
    }
  });

  return out;
};
