import { getSVGElementAttributesInCamelCase, getSVGElementTags } from '../../../src/util/svgUtils/SVGUtils';

// @Types
import { SVGElementAttributeTypes } from '../../../src/util/svgUtils/types';

describe('getSVGElementAttributesInCamelCase', () => {
  it('should return svg element attributes in camel case', () => {
    const SVGElementAttributes = {
      a: ['alignment-baseline', 'baseline-shift', 'clip', 'clip-path', 'clip-rule', 'color'],
      altGlyph: ['alignment-baseline', 'baseline-shift', 'clip', 'clip-path'],
    } as unknown as SVGElementAttributeTypes;

    const expected = {
      a: ['alignmentBaseline', 'baselineShift', 'clip', 'clipPath', 'clipRule', 'color'],
      altGlyph: ['alignmentBaseline', 'baselineShift', 'clip', 'clipPath'],
    };

    expect(getSVGElementAttributesInCamelCase(SVGElementAttributes)).toEqual(expected);
  });
});

describe('getSVGElementTags', () => {
  it('should return SVGElementTags from the SVGElementAttributes', () => {
    const SVGElementAttributes = {
      '*': ['about', 'class', 'content'],
      a: ['alignment-baseline', 'baseline-shift', 'clip', 'clip-path', 'clip-rule', 'color'],
      altGlyph: ['alignment-baseline', 'baseline-shift', 'clip', 'clip-path'],
    } as unknown as SVGElementAttributeTypes;

    const expected = ['a', 'altGlyph'];

    expect(getSVGElementTags(SVGElementAttributes)).toEqual(expected);
  });
});
