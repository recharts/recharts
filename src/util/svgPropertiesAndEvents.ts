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
