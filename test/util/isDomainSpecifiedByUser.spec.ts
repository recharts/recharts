import {
  isDomainSpecifiedByUser,
  numericalDomainSpecifiedWithoutRequiringData,
  parseNumericalUserDomain,
} from '../../src/util/isDomainSpecifiedByUser';
import { AxisDomain, NumberDomain } from '../../src/util/types';

// I need to add object wrapper because Jest likes to sometimes auto-flatten arrays of arrays
type MyTestCases = ReadonlyArray<{ domain: AxisDomain; expected?: NumberDomain }>;

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

describe('parsing axis domain provided by user', () => {
  // These are valid domains without any further questions
  const validCases: MyTestCases = [
    { domain: [-100, 100], expected: [-100, 100] },
    { domain: [() => 1, () => 2], expected: [1, 2] },
    { domain: () => [3, 4], expected: [3, 4] },
    { domain: [-5, 0], expected: [-5, 0] },
    { domain: [0, 100], expected: [0, 100] },
    { domain: [100, 100], expected: [100, 100] },
    { domain: [() => 1, 9], expected: [1, 9] },
    /*
     * I am surprised, but in Recharts it is valid to have domain where first element is larger than the second!
     * This also makes the axis reversed.
     */
    { domain: [2, 1], expected: [2, 1] },
  ];

  const casesThatDefaultToDataMinDataMax: MyTestCases = [
    { domain: [NaN, NaN] },
    // sorry no string parsing. Although we could allow that, why not? Perhaps an opportunity for an improvement
    { domain: ['20', '30'] },
    { domain: ['', ''] },
    // no percents in dataMin or dataMax, possible feature request perhaps
    { domain: ['dataMin - 10%', 'dataMax + 5%'] },
    /*
     * This is interesting - Recharts allows dataMin to get smaller and dataMax to get bigger,
     * but doesn't allow dataMin to get bigger and dataMax to get smaller!
     * Even with allowDataOverflow = true.
     */
    { domain: ['dataMin + 11.2', 'dataMax - 7.3'], expected: [-100, 100] },
  ];

  // These are always invalid domains
  const invalidCases: MyTestCases = [
    { domain: [] },
    { domain: [0] },
    { domain: [100, 150, 200] },
    { domain: [0, Infinity] },
    { domain: [Infinity, 9] },
    { domain: [() => '1', 9] },
    // @ts-expect-error typescript is correct here, but I want a test anyway
    { domain: () => ['1', 9] },
    // @ts-expect-error typescript is correct here, but I want a test anyway
    { domain: () => [1, 2, 3] },
    // toFixed returns a string and strings are not allowed
    { domain: [(min: number) => min.toFixed(3), (max: number) => max.toFixed(3)] },
  ];

  const numericalDataDomain: NumberDomain = [-100, 100];

  /**
   * These are valid - but only when the calculated chart data is present.
   */
  const casesValidOnlyWhenDataDomainIsGiven: MyTestCases = [
    { domain: [100, NaN], expected: [100, 100] },
    { domain: [NaN, 200], expected: [-100, 200] },
    { domain: [11, 'auto'], expected: [11, 100] },
    { domain: ['auto', 1], expected: [-100, 1] },
    { domain: [0, 'dataMax'], expected: [0, 100] },
    { domain: ['dataMin', 'dataMax'], expected: [-100, 100] },
    { domain: ['auto', 'auto'], expected: [-100, 100] },
    { domain: ['dataMin - 11.2', 'dataMax + 7.3'], expected: [-111.2, 107.3] },
    { domain: d => [Math.min(...d), 999], expected: [-100, 999] },
    { domain: d => [d[0] - 21, d[1] + 23], expected: [-121, 123] },
    { domain: [(min: number) => min.valueOf() - 17, (max: number) => max / 2], expected: [-117, 50] },
  ];

  /**
   * These are valid - but the prop allowDataOverflow = false means that
   * recharts should ignore what user returned, and use the data domain instead.
   */
  const casesWithDomainSmallerThanData: MyTestCases = [
    { domain: [11, 200], expected: [-100, 200] },
    { domain: [11, 'auto'], expected: [-100, 100] },
    { domain: ['auto', 1], expected: [-100, 100] },
    { domain: [0, 'dataMax'], expected: [-100, 100] },
    { domain: d => [Math.min(...d), 0], expected: [-100, 100] },
    { domain: [(min: number) => min.valueOf() + 17, (max: number) => max / 2], expected: [-100, 100] },
  ];

  describe('numericalDomainSpecifiedWithoutRequiringData', () => {
    it.each([true, false])(
      'should return undefined when user input is undefined and allowDataOverflow = %s',
      allowDataOverflow => {
        expect(numericalDomainSpecifiedWithoutRequiringData(undefined, allowDataOverflow)).toBeUndefined();
        expect(numericalDomainSpecifiedWithoutRequiringData(undefined, allowDataOverflow)).toBeUndefined();
      },
    );

    it.each(validCases)(
      'should return $expected when domain = $domain and allowDataOverflow = true',
      ({ domain, expected }) => {
        expect(numericalDomainSpecifiedWithoutRequiringData(domain, true)).toEqual(expected);
      },
    );

    it.each(validCases)('should return undefined when domain = $domain and allowDataOverflow = false', ({ domain }) => {
      expect(numericalDomainSpecifiedWithoutRequiringData(domain, false)).toEqual(undefined);
    });

    it.each(invalidCases)('should return undefined when domain = $domain', ({ domain }) => {
      expect(numericalDomainSpecifiedWithoutRequiringData(domain, true)).toEqual(undefined);
      expect(numericalDomainSpecifiedWithoutRequiringData(domain, false)).toEqual(undefined);
    });

    it.each(casesThatDefaultToDataMinDataMax)('should return undefined when domain = $domain', ({ domain }) => {
      expect(numericalDomainSpecifiedWithoutRequiringData(domain, true)).toEqual(undefined);
      expect(numericalDomainSpecifiedWithoutRequiringData(domain, false)).toEqual(undefined);
    });

    it.each(casesValidOnlyWhenDataDomainIsGiven)(
      'should return undefined when domain = $domain but data domain is undefined',
      ({ domain }) => {
        expect(numericalDomainSpecifiedWithoutRequiringData(domain, true)).toBeUndefined();
        expect(numericalDomainSpecifiedWithoutRequiringData(domain, false)).toBeUndefined();
      },
    );
  });

  describe('parseNumericalUserDomain', () => {
    it.each([true, false])(
      'should return undefined when user input is undefined and allowDataOverflow = %s',
      allowDataOverflow => {
        expect(parseNumericalUserDomain(undefined, numericalDataDomain, allowDataOverflow)).toBeUndefined();
        expect(parseNumericalUserDomain(undefined, numericalDataDomain, allowDataOverflow)).toBeUndefined();
      },
    );

    it.each(validCases)(
      'should return $expected when domain = $domain and allowDataOverflow = true',
      ({ domain, expected }) => {
        expect(parseNumericalUserDomain(domain, undefined, true)).toEqual(expected);
      },
    );

    it.each(casesValidOnlyWhenDataDomainIsGiven)(
      'should return $expected when domain = $domain',
      ({ domain, expected }) => {
        expect(parseNumericalUserDomain(domain, numericalDataDomain, true)).toEqual(expected);
      },
    );

    it.each(casesValidOnlyWhenDataDomainIsGiven)(
      'should return undefined when domain = $domain and data is undefined',
      ({ domain }) => {
        expect(parseNumericalUserDomain(domain, undefined, true)).toEqual(undefined);
        expect(parseNumericalUserDomain(domain, undefined, false)).toEqual(undefined);
      },
    );

    it.each(casesWithDomainSmallerThanData)(
      'should extend the domain to $expected when domain = $domain and allowDataOverflow = false',
      ({ domain, expected }) => {
        expect(parseNumericalUserDomain(domain, numericalDataDomain, false)).toEqual(expected);
      },
    );

    it.each(invalidCases)('should return undefined when domain = $domain', ({ domain }) => {
      expect(parseNumericalUserDomain(domain, numericalDataDomain, true)).toBeUndefined();
      expect(parseNumericalUserDomain(domain, numericalDataDomain, false)).toBeUndefined();
      expect(parseNumericalUserDomain(domain, undefined, true)).toBeUndefined();
      expect(parseNumericalUserDomain(domain, undefined, false)).toBeUndefined();
    });

    it.each(casesThatDefaultToDataMinDataMax)(
      'should return data min, data max when domain = $domain',
      ({ domain }) => {
        expect(parseNumericalUserDomain(domain, numericalDataDomain, true)).toEqual([-100, 100]);
        expect(parseNumericalUserDomain(domain, numericalDataDomain, false)).toEqual([-100, 100]);
        expect(parseNumericalUserDomain(domain, undefined, true)).toBeUndefined();
        expect(parseNumericalUserDomain(domain, undefined, false)).toBeUndefined();
      },
    );
  });
});
