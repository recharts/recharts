import { describe, it, expect } from 'vitest';
import {
  areNumbersApproximatelyEqual,
  areRenderedTicksEqual,
  areScalesApproximatelyEqual,
  propsAreEqual,
} from '../../src/util/propsAreEqual';
import type { RechartsScale } from '../../src/util/scale/RechartsScale';
import type { TickItem } from '../../src/util/types';

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

describe('approximate chart value equality', () => {
  describe('areNumbersApproximatelyEqual', () => {
    it('accepts values within the numeric tolerance', () => {
      expect(areNumbersApproximatelyEqual(10, 10 + 0.5e-6)).toBe(true);
      expect(areNumbersApproximatelyEqual(10, 10 + 2e-6)).toBe(false);
      expect(areNumbersApproximatelyEqual(undefined, undefined)).toBe(true);
      expect(areNumbersApproximatelyEqual(undefined, 10)).toBe(false);
    });

    it('treats NaN values as equal', () => {
      expect(areNumbersApproximatelyEqual(Number.NaN, Number.NaN)).toBe(true);
    });
  });

  describe('areRenderedTicksEqual', () => {
    const ticks: ReadonlyArray<TickItem> = [
      { value: 'A', coordinate: 10, offset: 2, index: 0 },
      { value: 'B', coordinate: 20, offset: 2, index: 1 },
    ];

    it('accepts rendered ticks with sub-pixel coordinate and offset changes', () => {
      expect(
        areRenderedTicksEqual(ticks, [
          { value: 'A', coordinate: 10 + 0.5e-6, offset: 2 - 0.5e-6, index: 0 },
          { value: 'B', coordinate: 20, offset: 2, index: 1 },
        ]),
      ).toBe(true);
    });

    it('rejects changed tick metadata, coordinates, offsets, and lengths', () => {
      expect(areRenderedTicksEqual(undefined, ticks)).toBe(false);
      expect(areRenderedTicksEqual(ticks, [{ ...ticks[0], value: 'changed' }, ticks[1]])).toBe(false);
      expect(areRenderedTicksEqual(ticks, [{ ...ticks[0], coordinate: 10.1 }, ticks[1]])).toBe(false);
      expect(areRenderedTicksEqual(ticks, [{ ...ticks[0], offset: 2.1 }, ticks[1]])).toBe(false);
      expect(areRenderedTicksEqual(ticks, [{ ...ticks[0], index: 2 }, ticks[1]])).toBe(false);
      expect(areRenderedTicksEqual(ticks, [ticks[0]])).toBe(false);
    });
  });

  describe('areScalesApproximatelyEqual', () => {
    function createScale(map: (input: unknown) => number): RechartsScale {
      return {
        domain: () => [0, 1],
        range: () => [0, 100],
        rangeMin: () => 0,
        rangeMax: () => 100,
        isInRange: () => true,
        bandwidth: () => 10,
        map,
      };
    }

    it('ignores mapped coordinates when scale metadata is equal', () => {
      const first = createScale(() => 10);
      const second = createScale(() => 90);

      expect(areScalesApproximatelyEqual(first, second)).toBe(true);
    });

    it('rejects scales with different observable metadata', () => {
      const first = createScale(() => 10);
      const second: RechartsScale = {
        ...createScale(() => 10),
        range: () => [0, 200],
        rangeMax: () => 200,
      };

      expect(areScalesApproximatelyEqual(first, second)).toBe(false);
      expect(areScalesApproximatelyEqual(first, undefined)).toBe(false);
    });
  });
});
