import { describe, it, expect, vi } from 'vitest';
import { svgPropertiesAndEvents } from '../../src/util/svgPropertiesAndEvents';

describe('svgPropertiesAndEvents', () => {
  it('should return an empty object when called with an empty object', () => {
    expect(svgPropertiesAndEvents({})).toEqual({});
  });

  it('should include SVG attributes', () => {
    const input = {
      cx: '50%',
      cy: '50%',
      fill: '#808080',
      stroke: '#fff',
      nonSvgProp: 'value',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      cx: '50%',
      cy: '50%',
      fill: '#808080',
      stroke: '#fff',
    });
  });

  it('should include data-* attributes', () => {
    const input = {
      'data-test': 'test-value',
      'data-id': '123',
      nonDataProp: 'value',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      'data-test': 'test-value',
      'data-id': '123',
    });
  });

  it('should include event handlers', () => {
    const onClick = vi.fn();
    const onMouseEnter = vi.fn();
    const input = {
      onClick,
      onMouseEnter,
      nonEventProp: 'value',
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      onClick,
      onMouseEnter,
    });
  });

  it('should include a mix of SVG attributes, data-* attributes, and event handlers', () => {
    const onClick = vi.fn();
    const input = {
      cx: '50%',
      'data-test': 'test-value',
      onClick,
      nonRelevantProp: 'value',
      width: 100,
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      cx: '50%',
      'data-test': 'test-value',
      onClick,
      width: 100,
    });
  });

  it('should refine the type of the returned object', () => {
    const onClick = vi.fn();
    type InputType = {
      cx: string;
      'data-test': string;
      onClick: () => void;
      nonRelevantProp: string;
      width: number;
    };
    const input: InputType = {
      cx: '50%',
      'data-test': 'test-value',
      onClick,
      nonRelevantProp: 'value',
      width: 100,
    };
    type ExpectedOutputType = {
      cx: string;
      'data-test': string;
      onClick: () => void;
      width: number;
    };
    const result: ExpectedOutputType = svgPropertiesAndEvents(input);
    // The following line should not produce a TypeScript error
    const myCx: string = result.cx;
    expect(myCx).toBe('50%');
    const dataTest: string = result['data-test'];
    const clickHandler: () => void = result.onClick;
    const myWidth: number = result.width;
    // The following line should produce a TypeScript error if uncommented
    // @ts-expect-error this should be a type error because `nonRelevant` is not in the input, so it should not be in the output either
    const nr: string = result.nonRelevantProp;
    expect(nr).toBeUndefined();
    expect(myCx).toBe('50%');
    expect(dataTest).toBe('test-value');
    expect(clickHandler).toBe(onClick);
    expect(myWidth).toBe(100);
  });

  it('should filter out function properties that are not event handlers', () => {
    const onClick = vi.fn();
    const customFunction = () => 'hello';
    const input = {
      cx: '50%',
      onClick,
      customFunction,
      width: 100,
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      cx: '50%',
      onClick,
      width: 100,
    });
  });

  it('should exclude symbols and numbers as keys', () => {
    const sym = Symbol('test');
    const input: { [key: PropertyKey]: unknown } = {
      [sym]: 'symbol-value',
      6: 'number-value',
      cx: 10,
      onClick: vi.fn(),
    };
    const result = svgPropertiesAndEvents(input);
    expect(result).toEqual({
      cx: 10,
      onClick: input.onClick,
    });
  });
});
