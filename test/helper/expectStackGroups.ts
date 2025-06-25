import { SeriesPoint } from 'victory-vendor/d3-shape';
import { StackDataPoint, StackGroup } from '../../src/state/selectors/axisSelectors';

/*
 * Almost the same type as StackData, but with the data
 * being just an array of arrays of objects instead of a d3-stack object.
 */
type ExpectedStackedData = ReadonlyArray<ReadonlyArray<StackDataPoint>>;

function seriesPointToTuple(seriesPoint: SeriesPoint<unknown>): StackDataPoint {
  return [seriesPoint[0], seriesPoint[1]];
}

function seriesToArray(series: StackGroup['stackedData']): ExpectedStackedData {
  return series.map((s): ReadonlyArray<StackDataPoint> => {
    const array: Array<StackDataPoint> = [];
    s.forEach(item => {
      array.push(seriesPointToTuple(item));
    });
    return array;
  });
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

expect.extend({
  toBeRechartsStackedData: rechartsStackedDataMatcher,
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
  toBeRechartsStackedData: (expectedStackedData: ExpectedStackedData) => void;
}

declare module 'vitest' {
  // this is what the documentation tells me to do https://vitest.dev/guide/extending-matchers
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
