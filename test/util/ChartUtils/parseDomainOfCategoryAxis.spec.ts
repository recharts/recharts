import { ReactElement } from 'react';
import { parseDomainOfCategoryAxis } from '../../../src/util/ChartUtils';

function getChild(domain?: Array<unknown>): ReactElement {
  return {
    type: {
      // @ts-expect-error this is not the correct shape of ReactElement but I do not want to mock the whole thing
      defaultProps: {
        domain,
      },
    },
  };
}

describe('parseDomainOfCategoryAxis', () => {
  it('should not modify the domains', () => {
    const specifiedDomain = [7];
    const calculatedDomain = [1, 2, 3];
    const axisElement = getChild();
    parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisElement);
    expect(specifiedDomain).toEqual([7]);
    expect(calculatedDomain).toEqual([1, 2, 3]);
  });

  it('should return calculatedDomain if specifiedDomain is undefined', () => {
    const specifiedDomain: Array<number> | undefined = undefined;
    const calculatedDomain = [1, 2, 3];
    const axisElement = getChild();
    const result = parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisElement);
    expect(result).toBe(calculatedDomain);
  });

  it('should return calculatedDomain if specifiedDomain is empty', () => {
    const specifiedDomain: Array<number> = [];
    const calculatedDomain = [1, 2, 3];
    const axisElement = getChild();
    const result = parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisElement);
    expect(result).toBe(calculatedDomain);
  });

  it('should return specified domain if it has at least one element', () => {
    const specifiedDomain = [7];
    const calculatedDomain = [1, 2, 3];
    const axisElement = getChild();
    expect(parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisElement)).toBe(specifiedDomain);
  });

  it('should return specified domain if it has at least one element, even if it is unhappy element', () => {
    const specifiedDomain = [NaN];
    const calculatedDomain = [1, 2, 3];
    const axisElement = getChild();
    const result = parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisElement);
    expect(result).toBe(specifiedDomain);
  });

  /**
   * This is a weird case. This code path is checking for defaultProps of an Axis.
   * There are two big problems with this:
   * 1. It always assumes that React will expose the defaultProps on property `type.defaultProps.x`, and
   * 2. It assumes that we never switch from defaultProps to, say, hooks, or default argument values.
   *
   * And third, smaller problem:
   * 3. No axis in recharts actually has a default domain defined, and AFAIK users cannot set defaultProps.
   *
   * So, can we remove the check for `type.defaultProps.domain` completely?
   */
  test('if the specified domain is same as a default of an axis, then return calculated domain', () => {
    const specifiedDomain = [NaN];
    const calculatedDomain = [1, 2, 3];
    const axisElement = getChild(specifiedDomain);
    const result = parseDomainOfCategoryAxis(specifiedDomain, calculatedDomain, axisElement);
    expect(result).toBe(calculatedDomain);
  });
});
