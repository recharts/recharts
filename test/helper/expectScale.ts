import { Mock, expect } from 'vitest';
import { AxisDomain } from '../../src/util/types';
import { RechartsScale } from '../../src/util/ChartUtils';

export type ExpectedScale = { domain: AxisDomain; range: [number, number]; bandwidth?: number };

/**
 * Good for comparing when you have a direct reference to the scale function.
 *
 * Note that the `actual` is meant to be a function with `domain` and `range` properties,
 * which are also functions.
 * The `expected` however is a result of calling the `domain` and `range` functions,
 * which I think makes it a bit easier to assert.
 *
 * @param actual object that you want to check
 * @param expected expected domain and range
 * @throws if the actual object does not match the expected object
 * @returns void
 */
export function expectScale(actual: unknown, expected: ExpectedScale) {
  const scale = actual as RechartsScale;
  expect(scale).toBeInstanceOf(Function);
  expect(scale.domain(), 'domain error').toEqual(expected.domain);
  expect(scale.range(), 'range error').toEqual(expected.range);
  if ('bandwidth' in expected) {
    expect(scale.bandwidth(), 'bandwidth error').toEqual(expected.bandwidth);
  }
}

/**
 * Good for comparing when you have a spy that you can call to get the scale function,
 * but you don't want to remember how to pull the reference from the mock calls.
 *
 * This function will verify that the last call to the spy was with the expected scale.
 *
 * Note that the actual scale parameter is meant to be a function with `domain` and `range` properties,
 * which are also functions.
 * The `expected` however is a result of calling the `domain` and `range` functions,
 * which I think makes it a bit easier to assert.
 *
 * @param spy function created by jest.fn() or vi.fn() that presumably was called with a scale function
 * @param expected expected domain and range
 * @throws if the last call to the spy was not with the expected scale
 * @returns void
 */
export function expectLastCalledWithScale(spy: Mock<(scale: RechartsScale) => unknown>, expected: ExpectedScale) {
  expect(spy).toHaveBeenCalled();
  const lastKnownScale = spy.mock.calls[spy.mock.calls.length - 1][0];
  expectScale(lastKnownScale, expected);
}
