import camelCase from 'lodash/camelCase';

// @Types
import { SVGElementAttributeTypes } from './types';

/**
 * As React props are in camelCase this ensures that the svg elements and their attributes are in camelCase
 * @param {SVGElementAttributeTypes} svgElementAttributes - An object with svg elements and their attributes in kebab-case
 * @returns {SVGElementAttributeTypes} - An object with svg elements and their attributes in camelCase
 */
export const getSVGElementAttributesInCamelCase = (
  svgElementAttributes: SVGElementAttributeTypes,
): SVGElementAttributeTypes => {
  return Object.keys(svgElementAttributes).reduce((acc, key: keyof SVGElementAttributeTypes) => {
    acc[key] = svgElementAttributes[key].map(camelCase);

    return acc;
  }, {} as SVGElementAttributeTypes);
};

/**
 *
 * @param {SVGElementAttributeTypes} svgElementAttributes :An object that mapped svg elements to their respective attributes
 * @returns {string[]} - An array of svg element tags
 */
export const getSVGElementTags = (svgElementAttributes: SVGElementAttributeTypes) => {
  return Object.keys(svgElementAttributes).slice(1);
};
