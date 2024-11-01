import { Mock } from 'vitest';
import { AxisDomain } from '../../src/util/types';
import { RechartsScale } from '../../src/util/ChartUtils';

export function expectScale(
  angleAxisScaleSpy: Mock<(scale: RechartsScale) => unknown>,
  expected: { domain: AxisDomain; range: [number, number]; bandwidth?: number },
) {
  expect(angleAxisScaleSpy).toHaveBeenCalled();
  const lastKnownScale = angleAxisScaleSpy.mock.calls[angleAxisScaleSpy.mock.calls.length - 1][0];
  expect(lastKnownScale).toBeInstanceOf(Function);
  expect(lastKnownScale.domain()).toEqual(expected.domain);
  expect(lastKnownScale.range()).toEqual(expected.range);
  if ('bandwidth' in expected) {
    expect(lastKnownScale.bandwidth()).toEqual(expected.bandwidth);
  }
}
