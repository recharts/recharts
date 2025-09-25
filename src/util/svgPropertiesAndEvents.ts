import { isValidElement, SVGProps } from 'react';
import { EventKeysType, isEventKey } from './excludeEventProps';
import {
  DataAttributeKeyType,
  isDataAttribute,
  isSvgElementPropKey,
  SVGElementPropKeysType,
} from './svgPropertiesNoEvents';

type SVGElementPropsAndEventsType = SVGElementPropKeysType | EventKeysType | DataAttributeKeyType;

type SVGPropsAndEvents<T> = Pick<T, Extract<keyof T, SVGElementPropsAndEventsType>>;

/**
 * Filters an object to only include SVG properties, data attributes, and event handlers.
 * @param obj - The object to filter.
 * @returns A new object containing only valid SVG properties, data attributes, and event handlers.
 */
export function svgPropertiesAndEvents<T extends Record<PropertyKey, any>>(obj: T): SVGPropsAndEvents<T> {
  const filteredEntries = Object.entries(obj).filter(
    ([key]) => isSvgElementPropKey(key) || isDataAttribute(key) || isEventKey(key),
  );
  return Object.fromEntries(filteredEntries) as SVGPropsAndEvents<T>;
}

/**
 * Function to filter SVG properties from various input types.
 * The input types can be:
 * - A record of string keys to any values, in which case it returns a record of only SVG properties
 * - A React element, in which case it returns the props of the element filtered to only SVG properties
 * - Anything else, in which case it returns null
 *
 * This function has a wide-open return type, because it will read and filter the props of an arbitrary React element.
 * This can be SVG, HTML, whatnot, with arbitrary values, so we can't type it more specifically.
 *
 * If you wish to have a type-safe version, use svgPropertiesNoEvents directly with a typed object.
 *
 * @param input - The input to filter, which can be a record, a React element, or other types.
 * @returns A record of SVG properties if the input is a record or React element, otherwise null.
 */
export function svgPropertiesAndEventsFromUnknown(input: unknown): SVGProps<unknown> | null {
  if (input == null) {
    return null;
  }

  if (isValidElement(input)) {
    return svgPropertiesAndEvents(input.props);
  }

  if (typeof input === 'object' && !Array.isArray(input)) {
    return svgPropertiesAndEvents(input);
  }

  return null;
}
