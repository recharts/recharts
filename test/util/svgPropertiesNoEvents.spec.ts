import { CSSProperties } from 'react';
import { describe, it, expect } from 'vitest';
import { svgPropertiesNoEvents } from '../../src/util/svgPropertiesNoEvents';

describe('svgPropertiesNoEvents', () => {
  it('should allow only SVG properties and exclude event handlers', () => {
    const input = {
      'aria-label': 'test',
      className: 'svg-class',
      color: 'red',
      height: '100px',
      id: 'svg-id',
      lang: 'en',
      max: 10,
      media: 'all',
      method: 'get',
      min: 0,
      name: 'svg-name',
      style: { fill: 'blue' },
      // event handlers are valid SVG properties, but this function should exclude them too
      onClick: () => {},
      onMouseOver: () => {},
      // Non-SVG properties
      custom: 'not-a-svg-prop',
    };

    const output = svgPropertiesNoEvents(input);

    expect(output).toEqual({
      'aria-label': 'test',
      className: 'svg-class',
      color: 'red',
      height: '100px',
      id: 'svg-id',
      lang: 'en',
      max: 10,
      media: 'all',
      method: 'get',
      min: 0,
      name: 'svg-name',
      style: { fill: 'blue' },
    });
  });

  it('should return an empty object when no SVG properties are present', () => {
    const input = {
      onClick: () => {},
      onMouseOver: () => {},
      custom: 'not-a-svg-prop',
    };

    const output = svgPropertiesNoEvents(input);

    expect(output).toEqual({});
  });

  it('should handle an empty object', () => {
    const input = {};
    const output = svgPropertiesNoEvents(input);
    expect(output).toEqual({});
  });

  it('should refine the type to only allow SVG properties', () => {
    type InputType = {
      'aria-label'?: string;
      className?: string;
      color?: string;
      height?: string;
      id?: string;
      lang?: string;
      max?: number;
      media?: string;
      method?: string;
      min?: number;
      name?: string;
      style?: CSSProperties;
      // Non-SVG properties
      onClick?: () => void;
      onMouseOver?: () => void;
      custom?: string;
    };
    const input: InputType = {
      'aria-label': 'test',
      className: 'svg-class',
      color: 'red',
      height: '100px',
      id: 'svg-id',
      lang: 'en',
      max: 10,
      media: 'all',
      method: 'get',
      min: 0,
      name: 'svg-name',
      style: { fill: 'blue' },
      // Non-SVG properties
      onClick: () => {},
      onMouseOver: () => {},
      custom: 'not-a-svg-prop',
    };
    type ExpectedOutputType = {
      'aria-label'?: string;
      className?: string;
      color?: string;
      height?: string;
      id?: string;
      lang?: string;
      max?: number;
      media?: string;
      method?: string;
      min?: number;
      name?: string;
      style?: CSSProperties;
    };
    // @ts-expect-error this should be a type error because `width` is not in the input, so it should not be in the output either
    const w = svgPropertiesNoEvents(input).width;
    expect(w).toBeUndefined(); // width is not in the input, so it should not be in the output

    const output: ExpectedOutputType = svgPropertiesNoEvents(input);
    expect(output).toEqual({
      'aria-label': 'test',
      className: 'svg-class',
      color: 'red',
      height: '100px',
      id: 'svg-id',
      lang: 'en',
      max: 10,
      media: 'all',
      method: 'get',
      min: 0,
      name: 'svg-name',
      style: { fill: 'blue' },
    });
  });
});
