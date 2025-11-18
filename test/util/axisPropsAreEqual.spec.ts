import { describe, it, expect } from 'vitest';
import { axisPropsAreEqual } from '../../src/util/axisPropsAreEqual';
import { XAxisProps } from '../../src';

describe('axisPropsAreEqual', () => {
  it('should return true for identical props', () => {
    const props1 = { xAxisId: 1 };
    const props2 = { xAxisId: 1 };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should return false for different props', () => {
    const props1 = { width: 'auto' };
    const props2 = { width: 'auto', height: 'auto' };
    expect(axisPropsAreEqual(props1, props2)).toBe(false);
  });

  it('should return false for different nested props', () => {
    const props1 = { mirror: true, padding: { left: 0 } };
    const props2 = { mirror: true, padding: { left: 10 } };
    expect(axisPropsAreEqual(props1, props2)).toBe(false);
  });

  it('should return true for same reference nested props', () => {
    const nested = { left: 0 };
    const props1 = { minTickGap: 1, padding: nested };
    const props2 = { minTickGap: 1, padding: nested };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should return true for same value, different reference, allowlisted nested props', () => {
    // axisLine is one of the special allowlisted props for shallow comparison
    const props1 = { axisLine: { x: 10, y: 20 } };
    const props2 = { axisLine: { x: 10, y: 20 } };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should return false for different value, different reference, allowlisted nested props', () => {
    /*
     * axisLine is one of the special allowlisted props for shallow comparison
     * but the values differ
     */
    const props1 = { axisLine: { x: 10, y: 20 } };
    const props2 = { axisLine: { x: 10, y: 30 } };
    expect(axisPropsAreEqual(props1, props2)).toBe(false);
  });

  it('should treat undefined and null as if they were equal', () => {
    const props1: XAxisProps = { label: undefined };
    // @ts-expect-error typescript is correct but let's say that someone does this at runtime anyway
    const props2: XAxisProps = { label: null };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should treat positive and negative zero as equal', () => {
    const props1 = { tickMargin: 0 };
    const props2 = { tickMargin: -0 };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should treat NaN values as equal', () => {
    const props1 = { angle: NaN };
    const props2 = { angle: NaN };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should treat two equal domain arrays as equal', () => {
    const props1 = { domain: [0, 100] };
    const props2 = { domain: [0, 100] };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should treat two different domain arrays as different', () => {
    const props1 = { domain: [0, 100] };
    const props2 = { domain: [0, 200] };
    expect(axisPropsAreEqual(props1, props2)).toBe(false);
  });

  it('should treat two equal range arrays as equal', () => {
    const props1: XAxisProps = { range: [0, 500] };
    const props2: XAxisProps = { range: [0, 500] };
    expect(axisPropsAreEqual(props1, props2)).toBe(true);
  });

  it('should treat two different range arrays as different', () => {
    const props1: XAxisProps = { range: [0, 500] };
    const props2: XAxisProps = { range: [0, 600] };
    expect(axisPropsAreEqual(props1, props2)).toBe(false);
  });

  it('should treat two same categorical domains as different', () => {
    // these are arrays but not two-elements arrays, so we do not do deep comparison
    const props1 = { domain: ['a', 'b', 'c'] };
    const props2 = { domain: ['a', 'b', 'c'] };
    expect(axisPropsAreEqual(props1, props2)).toBe(false);
  });
});
