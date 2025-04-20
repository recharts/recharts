import { describe, it, expect } from 'vitest';
import { resolveDefaultProps } from '../../src/util/resolveDefaultProps';

type MyExampleType = Record<string, unknown>;

const valuesThatShouldBeKept: ReadonlyArray<unknown> = [null, false, 0, '0', NaN, '', []];

describe('resolveDefaultProps', () => {
  it('should return original object if all properties are already defined', () => {
    const original: MyExampleType = { a: 1, b: 2, c: 3 };
    const defaults: MyExampleType = { a: 0, b: 0, c: 0 };
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual(original);
  });

  it('should replace undefined with default', () => {
    const original: MyExampleType = { a: undefined, b: 2, c: undefined };
    const defaults: MyExampleType = { a: 1, b: 0, c: 3 };
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it.each(valuesThatShouldBeKept)('should keep %s', val => {
    const original: MyExampleType = { a: val, b: 2, c: val };
    const defaults: MyExampleType = { a: 1, b: 0, c: 3 };
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual({ a: val, b: 2, c: val });
  });

  it('should return an empty object if both original and defaults are empty', () => {
    const original: MyExampleType = {};
    const defaults: MyExampleType = {};
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual({});
  });

  it('should return the default object if original is empty', () => {
    const original: MyExampleType = {};
    const defaults: MyExampleType = { a: 1, b: 2 };
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual(defaults);
  });

  it('should return the original object if defaults are empty', () => {
    const original: MyExampleType = { a: 1, b: 2 };
    const defaults: MyExampleType = {};
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual(original);
  });

  it('should not replace properties of nested objects', () => {
    const original: MyExampleType = { a: { x: undefined }, b: 2 };
    const defaults: MyExampleType = { a: { x: 1 }, b: 0 };
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual({ a: { x: undefined }, b: 2 });
  });

  it('should not replace nested array items', () => {
    const original: MyExampleType = { a: [undefined], b: 2 };
    const defaults: MyExampleType = { a: [1], b: 0 };
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual({ a: [undefined], b: 2 });
  });

  it('should return original object if defaults are not defined', () => {
    const original: MyExampleType = { a: undefined, b: 2 };
    const defaults: MyExampleType = {};
    const result = resolveDefaultProps(original, defaults);
    expect(result).toEqual(original);
  });
});

describe('ES6 destructuring with default values demonstration - good behaviour', () => {
  /*
   * This too is acceptable to use in case you do not want to import the `resolveDefaultProps`.
   * But it's a lot of extra typing, and it's easy to forget to add the default value to the destructuring.
   */
  function fn({ param = 1 }: { param: unknown }) {
    /*
     * So an even simpler version would look like this:
     * function fn(param: unknown = 1) {
     *   return param;
     * }
     * And it would be acceptable to use as it behaves as we want but functional components never accept primitives,
     * they always accept an object of props.
     */
    return param;
  }
  it('should resolve undefined to the default', () => {
    const result = fn({ param: undefined });
    expect(result).toEqual(1);
  });

  it.each(valuesThatShouldBeKept)('should keep %s', value => {
    const result = fn({ param: value });
    expect(result).toEqual(value);
  });
});

describe('ES6 destructuring with default values demonstration - bad behaviour', () => {
  /*
   * Do not use this to resolve default props - this is different from the class defaultProps
   * and will not work as expected.
   */
  function fn(props: MyExampleType = { param: 1 }) {
    return props.param;
  }
  /*
   * This is an example of bad behaviour - the default value should be set to 1, but it is not
   * because the descriptor sees the object as defined and does not visit individual properties.
   */
  it.fails('should resolve undefined to the default', () => {
    const result = fn({ param: undefined });
    expect(result).toEqual(1);
  });

  it.each(valuesThatShouldBeKept)('should keep %s', value => {
    const result = fn({ param: value });
    expect(result).toEqual(value);
  });
});
