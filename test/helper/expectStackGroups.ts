import { expect } from 'vitest';
import { StackDataPoint, StackSeries } from '../../src/util/stacks/stackTypes';

import { MaybeStackedGraphicalItem } from '../../src/state/types/StackedGraphicalItem';

export type ExpectedStackedDataSeries = ReadonlyArray<StackDataPoint>;

/*
 * Almost the same type as StackData, but with the data
 * being just an array of arrays of objects instead of a d3-stack object.
 */
export type ExpectedStackedData = ReadonlyArray<ExpectedStackedDataSeries>;

function seriesPointToTuple(seriesPoint: ReadonlyArray<number>): StackDataPoint {
  return [seriesPoint[0], seriesPoint[1]];
}

const actualSeriesToExpectedSeries = (s: ReadonlyArray<StackDataPoint>): ExpectedStackedDataSeries => {
  const array: Array<StackDataPoint> = [];
  s.forEach(item => {
    array.push(seriesPointToTuple(item));
  });
  return array;
};

function seriesToArray(series: ReadonlyArray<ReadonlyArray<StackDataPoint>>): ExpectedStackedData {
  return series.map(actualSeriesToExpectedSeries);
}

/**
 * Comparing stack data for equality.
 * This is tricky because we use d3-stack to create the stack groups, and d3 likes to add static properties to arrays.
 * This is fine for JavaScript, but jest/vitest produce confusing output because if you do expect(stackGroup).toEqual(expectedArray),
 * you get a test failure that says "expected Array to equal Array", and it also says "serializes to the same string".
 * Entirely unhelpful.
 *
 * So here comes this function. This will compare the arrays as if they were plain arrays, ignoring any static properties.
 *
 * @param received the received value, which should be an array of arrays of objects
 * @param expected the expected value, which should be an array of arrays of objects
 * @throws Error if the received value is not an array
 * @throws Error if the received value does not match the expected value
 * @returns void
 */
export function expectStackedData(received: unknown, expected: ExpectedStackedData): void {
  if (!Array.isArray(received)) {
    throw new Error(`stackedData error: expected ${received} to be an array`);
  }
  expect(seriesToArray(received)).toEqual(expected);
}

export function expectStackedSeries(received: unknown, expected: ExpectedStackedDataSeries): void {
  if (!Array.isArray(received)) {
    throw new Error(`stackedSeries error: expected ${received} to be an array`);
  }
  expect(actualSeriesToExpectedSeries(received)).toEqual(expected);
}

function rechartsStackedDataMatcher(received: unknown, expected: ExpectedStackedData) {
  try {
    expectStackedData(received, expected);
    return {
      pass: true,
      message: () => 'Expected stack groups to not match',
    };
  } catch (e) {
    // Uncomment the `debugger` here to see the actual error message, or place a breakpoint in your IDE
    // debugger;
    return {
      pass: false,
      message: e.message,
    };
  }
}

function rechartsStackedSeriesMatcher(
  received: unknown,
  expected: ExpectedStackedDataSeries,
): { pass: boolean; message: () => string } {
  try {
    expectStackedSeries(received, expected);
    return {
      pass: true,
      message: () => 'Expected stack series to not match',
    };
  } catch (e) {
    // Uncomment the `debugger` here to see the actual error message, or place a breakpoint in your IDE
    // debugger;
    return {
      pass: false,
      message: e.message,
    };
  }
}

function rechartsStackedSeriesPointMatcher(
  received: unknown,
  expected: StackDataPoint,
): { pass: boolean; message: () => string } {
  try {
    if (!Array.isArray(received)) {
      throw new Error(`stackedSeriesPoint error: expected ${received} to be an array`);
    }
    expect(seriesPointToTuple(received)).toEqual(expected);
    return {
      pass: true,
      message: () => 'Expected stack series point to not match',
    };
  } catch (e) {
    // Uncomment the `debugger` here to see the actual error message, or place a breakpoint in your IDE
    // debugger;
    return {
      pass: false,
      message: e.message,
    };
  }
}

expect.extend({
  toBeRechartsStackedData: rechartsStackedDataMatcher,
  toBeRechartsStackedSeries: rechartsStackedSeriesMatcher,
  toBeRechartsStackedSeriesPoint: rechartsStackedSeriesPointMatcher,
});

interface CustomMatchers {
  /**
   * This matcher will check that the received object is a Recharts stacked data object
   * with the expected data.
   *
   * Unfortunately I cannot figure out how to make the actual error message display in the test output.
   * If you know how to, please improve.
   *
   * @param expectedStackedData expected stacked data
   */
  toBeRechartsStackedData: (expectedStackedData: ExpectedStackedData) => ReadonlyArray<StackSeries>;
  toBeRechartsStackedSeries: (expectedStackedSeries: ExpectedStackedDataSeries) => StackSeries;
  toBeRechartsStackedSeriesPoint: (expectedStackedSeriesPoint: StackDataPoint) => StackDataPoint;
}

declare module 'vitest' {
  // this is what the documentation tells me to do https://vitest.dev/guide/extending-matchers
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}

/**
 * Vitest helpers are typed to return `any` which disables type checking in the whole test if used.
 * @param expected the expected settings for the graphical item
 * @return the expected settings wrapped in an object containing matcher functions
 */
export function expectGraphicalItemSettings(expected: MaybeStackedGraphicalItem): MaybeStackedGraphicalItem {
  return expect.objectContaining(expected);
}
