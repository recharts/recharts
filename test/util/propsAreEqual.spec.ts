import { describe, it, expect } from 'vitest';
import { propsAreEqual } from '../../src/util/propsAreEqual';

describe('propsAreEqual', () => {
  it('should return true for identical props', () => {
    const props1 = { a: 1, b: 'test', c: true };
    const props2 = { a: 1, b: 'test', c: true };
    expect(propsAreEqual(props1, props2)).toBe(true);
  });

  it('should return false for different props', () => {
    const props1 = { a: 1, b: 'test', c: true };
    const props2 = { a: 2, b: 'test', c: true };
    expect(propsAreEqual(props1, props2)).toBe(false);
  });

  it('should return false for different nested props', () => {
    const props1 = { a: 1, b: { x: 10, y: 20 } };
    const props2 = { a: 1, b: { x: 10, y: 30 } };
    expect(propsAreEqual(props1, props2)).toBe(false);
  });

  it('should return true for same reference nested props', () => {
    const nested = { x: 10, y: 20 };
    const props1 = { a: 1, b: nested };
    const props2 = { a: 1, b: nested };
    expect(propsAreEqual(props1, props2)).toBe(true);
  });

  it('should return true for same value, different reference, allowlisted nested props', () => {
    // dot is one of the special allowlisted props for shallow comparison
    const props1 = { a: 1, dot: { x: 10, y: 20 } };
    const props2 = { a: 1, dot: { x: 10, y: 20 } };
    expect(propsAreEqual(props1, props2)).toBe(true);
  });

  it('should return false for different value, different reference, allowlisted nested props', () => {
    /*
     * dot is one of the special allowlisted props for shallow comparison
     * but the values differ
     */
    const props1 = { a: 1, dot: { x: 10, y: 20 } };
    const props2 = { a: 1, dot: { x: 10, y: 30 } };
    expect(propsAreEqual(props1, props2)).toBe(false);
  });

  it('should treat undefined and null as if they were equal', () => {
    type TestProps = { a?: number | null; b?: number | null };
    const props1: TestProps = { a: undefined, b: null };
    const props2: TestProps = { a: null, b: undefined };
    expect(propsAreEqual(props1, props2)).toBe(true);
  });

  it('should treat positive and negative zero as equal', () => {
    const props1 = { a: 0 };
    const props2 = { a: -0 };
    expect(propsAreEqual(props1, props2)).toBe(true);
  });

  it('should treat NaN values as equal', () => {
    const props1 = { a: NaN };
    const props2 = { a: NaN };
    expect(propsAreEqual(props1, props2)).toBe(true);
  });

  it.each(['data', 'points'])('should not attempt to shallow compare prop %s', propName => {
    /*
     * Let's specifically test that these props are not shallowly compared because these should not be allowlisted!
     * We can receive large arrays/objects here that would be too costly to compare.
     */
    const props1 = { a: 1, [propName]: { x: 10, y: 20 } };
    const props2 = { a: 1, [propName]: { x: 10, y: 30 } };
    expect(propsAreEqual(props1, props2)).toBe(false);
  });
});
