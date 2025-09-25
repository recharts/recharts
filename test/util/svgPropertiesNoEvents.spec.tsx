import * as React from 'react';
import { CSSProperties, ReactElement, SVGProps } from 'react';
import { describe, expect, it } from 'vitest';
import { svgPropertiesNoEvents, svgPropertiesNoEventsFromUnknown } from '../../src/util/svgPropertiesNoEvents';

describe('svgPropertiesNoEvents', () => {
  it('should return an empty object when called with an empty object', () => {
    expect(svgPropertiesNoEvents({})).toEqual({});
  });

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
      max: number;
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
      // property that used to be required in the input type, continues being required
      max: number;
      media?: string;
      method?: string;
      min?: number;
      name?: string;
      style?: CSSProperties;
    };
    const output: ExpectedOutputType = svgPropertiesNoEvents(input);

    // @ts-expect-error this should be a type error because `width` is not in the input, so it should not be in the output either
    const w = output.width;
    expect(w).toBeUndefined(); // width is not in the input, so it should not be in the output

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

  it('should include data-* attributes', () => {
    const input = {
      'data-test': 'test-value',
      'data-id': '123',
      nonDataProp: 'value',
    };
    const result = svgPropertiesNoEvents(input);
    expect(result).toEqual({
      'data-test': 'test-value',
      'data-id': '123',
    });
  });

  it('should exclude symbols and numbers as keys', () => {
    const sym = Symbol('test');
    const input: { [key: PropertyKey]: any } = {
      [sym]: 'symbol-value',
      6: 'number-value',
      cx: 10,
    };
    const result = svgPropertiesNoEvents(input);
    expect(result).toEqual({ cx: 10 });
  });
});

describe('svgPropertiesNoEventsFromUnknown', () => {
  it('should filter element props if given a ReactElement', () => {
    type InputType = {
      'aria-label'?: string;
      className?: string;
      color?: string;
      height?: string;
      id?: string;
      lang?: string;
      max: number;
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
    const myProps: InputType = {
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
    const element: ReactElement<InputType> = <svg {...myProps} />;
    const result: SVGProps<unknown> = svgPropertiesNoEventsFromUnknown(element);
    expect(result).toEqual({
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

  it.each([null, undefined, true, false, [], 'string', 1, Symbol.for('key')] as const)(
    'should return null when passed %s',
    input => {
      const result: SVGProps<unknown> | null = svgPropertiesNoEventsFromUnknown(input);
      expect(result).toBeNull();
    },
  );

  describe('type matching ActiveDotType', () => {
    it('should return null type when passed a boolean', () => {
      const input = true;
      const result: SVGProps<unknown> | null = svgPropertiesNoEventsFromUnknown(input);
      expect(result).toBeNull();
    });

    it('should return null type when passed a function', () => {
      const input = () => {};
      const result: SVGProps<unknown> | null = svgPropertiesNoEventsFromUnknown(input);
      expect(result).toBeNull();
    });

    it('should return SVGProps type when passed a non-specific ReactElement', () => {
      const input = <circle cx={10} cy={10} r={5} />;
      const result: SVGProps<unknown> | null = svgPropertiesNoEventsFromUnknown(input);
      expect(result).toEqual({
        cx: 10,
        cy: 10,
        r: 5,
      });
    });

    it('should return SVGProps type when passed a non-specific ReactElement', () => {
      const input = <circle cx={10} cy={10} r={5} />;
      const result: SVGProps<unknown> | null = svgPropertiesNoEventsFromUnknown(input);
      expect(result).toEqual({
        cx: 10,
        cy: 10,
        r: 5,
      });
    });

    it('should return SVGProps type when passed an object', () => {
      type InputType = {
        cx: number;
        cy: number;
        r?: number;
        onClick?: () => void;
        custom?: string;
      };
      const input: InputType = { cx: 10, cy: 10, r: 5 };
      const result: SVGProps<unknown> | null = svgPropertiesNoEventsFromUnknown(input);
      expect(result).toEqual({ cx: 10, cy: 10, r: 5 });
    });

    it('should accept union types and return only SVG properties', () => {
      type InputType =
        | {
            cx: number;
            cy: number;
            r?: number;
            onClick?: () => void;
            custom?: string;
          }
        | boolean;
      function noInfer(i: InputType) {
        return svgPropertiesNoEventsFromUnknown(i);
      }
      const input1: InputType = { cx: 10, cy: 10, r: 5 };
      const result1: SVGProps<unknown> = noInfer(input1);
      expect(result1).toEqual({ cx: 10, cy: 10, r: 5 });

      const input2: InputType = true;
      const result2: SVGProps<unknown> = noInfer(input2);
      expect(result2).toBeNull();
    });
  });
});
