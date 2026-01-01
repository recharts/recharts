import { expect } from 'vitest';

interface SyncExpectationResult {
  pass: boolean;
  message: () => string;
  actual?: any;
  expected?: any;
}

/**
 * Vitest test helper that allows us to expect a function to return a specific value given a set of arguments.
 *
 * Example usage:
 *
 * ```
 * expect(spy).toHaveBeenLastCalledWith({
 *   id: 'test-id',
 *   value: 42,
 *   callback: expect.functionReturning([
 *   ["input1", "output1"],
 *   ["input2", "output2"],
 *   ["input3", "output3"],
 *   ])
 * });
 * ```
 */
export function expectFunctionReturning<TArgs extends any[], TReturn>(
  actual: unknown,
  cases: Array<[...args: TArgs, returnValue: TReturn]>,
): SyncExpectationResult {
  if (typeof actual !== 'function') {
    return {
      pass: false,
      message: () => `Expected a function, but received ${typeof actual}`,
      actual,
      expected: 'function',
    };
  }

  for (const testCase of cases) {
    const args = testCase.slice(0, -1) as TArgs;
    const expectedReturnValue = testCase[testCase.length - 1] as TReturn;
    const actualReturnValue = actual(...args);
    expect(actualReturnValue, `when called with args [${args}] it should return`).toEqual(expectedReturnValue);
  }

  return {
    pass: true,
    message: () => 'Expected function to not return the expected values for all cases',
  };
}

expect.extend({
  functionReturning: expectFunctionReturning,
});

interface CustomMatchers {
  functionReturning: <TArgs extends any[], TReturn>(
    cases: Array<[...args: TArgs, returnValue: TReturn]>,
  ) => (...args: TArgs) => TReturn;
}

declare module 'vitest' {
  // this is what the documentation tells me to do https://vitest.dev/guide/extending-matchers
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
