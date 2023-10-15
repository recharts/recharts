import { isDomainSpecifiedByUser } from '../../src/util/isDomainSpecifiedByUser';
import { AxisDomain } from '../../src/util/types';

// I need to add object wrapper because Jest likes to sometimes auto-flatten arrays of arrays
type MyTestCases = ReadonlyArray<{ domain: AxisDomain }>;

describe('isDomainSpecifiedByUser', () => {
  const allVariousDomainDefinitions: MyTestCases = [
    { domain: ['a', 'b', 'c', 'd'] },
    { domain: [1, 2, 3, 4, 5, 6, 7] },
    { domain: [-100, 100] },
    { domain: ['auto', 'auto'] },
    { domain: [0, 'dataMin + 100'] },
    { domain: [0, 'dataMax'] },
    { domain: [0, 'auto'] },
    { domain: ['dataMin - 100', 'dataMax + 100'] },
    { domain: [(dataMin: number) => 0 - Math.abs(dataMin), (dataMax: number) => dataMax * 2] },
    { domain: [() => 1, () => 2] },
    {
      domain: ([dataMin, dataMax]) => {
        const absMax = Math.max(Math.abs(dataMin), Math.abs(dataMax));
        return [-absMax, absMax];
      },
    },
  ];
  test.each(allVariousDomainDefinitions)('should return false if axisType is not "number": %o', ({ domain }) => {
    expect(isDomainSpecifiedByUser(domain, true, 'category')).toBe(false);
    expect(isDomainSpecifiedByUser(domain, true, undefined)).toBe(false);
    expect(isDomainSpecifiedByUser(domain, false, 'category')).toBe(false);
    expect(isDomainSpecifiedByUser(domain, false, undefined)).toBe(false);
  });
  test.each(allVariousDomainDefinitions)('should return false if allowDataOverflow is false: %o', ({ domain }) => {
    expect(isDomainSpecifiedByUser(domain, false, 'number')).toBe(false);
    expect(isDomainSpecifiedByUser(domain, false, 'category')).toBe(false);
    expect(isDomainSpecifiedByUser(domain, false, undefined)).toBe(false);
  });
  it('should return false if domain is a function', () => {
    const fn = (): [number, number] => [1, 2];
    expect(isDomainSpecifiedByUser(fn, true, 'number')).toBe(false);
    expect(isDomainSpecifiedByUser(fn, true, 'category')).toBe(false);
    expect(isDomainSpecifiedByUser(fn, true, undefined)).toBe(false);
  });

  const invalidCases: MyTestCases = [
    { domain: [] },
    { domain: [0] },
    { domain: ['auto', 1] },
    { domain: [0, 'dataMax'] },
    { domain: ['0', '100'] },
    { domain: ['auto'] },
    { domain: [0, 'auto'] },
    { domain: [100, NaN] },
    { domain: [NaN, 100] },
    { domain: [NaN, NaN] },
  ];
  test.each(invalidCases)(
    'should return false if number is not a well formatted tuple of two numbers: %o',
    ({ domain }) => {
      expect(isDomainSpecifiedByUser(domain, true, 'number')).toBe(false);
    },
  );

  const validCases: MyTestCases = [{ domain: [-100, 100] }, { domain: [-100, 100, 200] }];
  test.each(validCases)('should return true if domain is an array of two or more numbers: %o', ({ domain }) => {
    expect(isDomainSpecifiedByUser(domain, true, 'number')).toBe(true);
  });

  const noIdeaWhyIsZeroInvalidCharacter: MyTestCases = [
    { domain: [0] },
    { domain: [-0] },
    { domain: [0, 100] },
    { domain: [-100, 0] },
    { domain: [0, 100, 200] },
    { domain: [-100, 0, 200] },
  ];
  test.each(noIdeaWhyIsZeroInvalidCharacter)(
    'should return false when first or second element of the array is zero: %o',
    ({ domain }) => {
      // Why is zero not allowed? It looks like a natural candidate for many charts?
      expect(isDomainSpecifiedByUser(domain, true, 'number')).toBe(false);
    },
  );

  it('should return false if domain is undefined', () => {
    expect(isDomainSpecifiedByUser(undefined as never, true, 'number')).toBe(false);
  });
});
