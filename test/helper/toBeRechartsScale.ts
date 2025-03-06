import { expect } from 'vitest';
import { ExpectedScale, expectScale } from './expectScale';
import { RechartsScale } from '../../src/util/ChartUtils';

function rechartsScaleMatcher(received: unknown, expected: ExpectedScale) {
  try {
    expectScale(received, expected);
    return {
      pass: true,
      message: () => 'Expected scale to not be a scale function',
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
  toBeRechartsScale: rechartsScaleMatcher,
});

interface CustomMatchers {
  /**
   * This matcher will check that the received object is a Recharts scale object
   * with the expected domain and range.
   *
   * If you arrived here because you see a cryptic error failure message, you are in the right place.
   *
   * The test failure will usually say something entirely unhelpful like:
   * AssertionError: expected last "spy" call to have been called with [ { allowDataOverflow: false, …(14) } ]
   * - Expected
   * + Received
   * -     "scale": scaleFunction<>,
   * +     "scale": [Function scale],
   *
   * See? Disaster.
   *
   * GOOD NEWS!
   * If you want to see the actual error message, please place a debugger on the line that catches the error in the function above.
   *
   * That way you will see the actual error message, like:
   * "domain error: expected [0, 1000] to equal [0, 2000]"
   *
   * Unfortunately I cannot figure out how to make the actual error message display in the test output.
   * If you know how to, please improve.
   *
   * @param expectedScale expected domain and range
   */
  toBeRechartsScale: (expectedScale: ExpectedScale) => RechartsScale;
}

declare module 'vitest' {
  // this is what the documentation tells me to do https://vitest.dev/guide/extending-matchers
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface AsymmetricMatchersContaining extends CustomMatchers {}
}
