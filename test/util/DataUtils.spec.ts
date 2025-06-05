import {
  getPercentValue,
  hasDuplicate,
  mathSign,
  isPercent,
  isNumber,
  isNumOrStr,
  interpolateNumber,
  getLinearRegression,
  findEntryInArray,
  uniqueId,
  isNullish,
  upperFirst,
  isNan,
  interpolate,
} from '../../src/util/DataUtils';

/**
 * @noteNeverCasting added casting to avoid ts error and to be able to test wrong error provided at runtime
 */

describe('mathSign', () => {
  it('(0)', () => {
    expect(mathSign(0)).toBe(0);
  });

  it('(-0)', () => {
    expect(mathSign(-0)).toBe(0);
  });

  it('(100)', () => {
    expect(mathSign(100)).toBe(1);
  });

  it('(-100)', () => {
    expect(mathSign(-100)).toBe(-1);
  });
});

describe('is functions', () => {
  interface IsFunctionTestDefinition<F extends (value: any) => any> {
    value: Parameters<F>[0];
    result: ReturnType<F>;
  }

  describe('isPercent', () => {
    const tests: IsFunctionTestDefinition<typeof isPercent>[] = [
      { value: '0%', result: true },
      { value: '10%', result: true },
      { value: '0', result: false },
      // the case with only '%' character looks like a bug - we should probably change that? Is this a breaking change?
      { value: '%', result: true },
      { value: '%%', result: false },
      { value: '0%%', result: false },
    ];

    test.each(tests)('should return $result with input $value', ({ value, result }) => {
      expect(isPercent(value)).toBe(result);
    });
  });

  describe('isNumber', () => {
    const tests: IsFunctionTestDefinition<typeof isNumber>[] = [
      { value: 0, result: true },
      { value: '0', result: false },
      { value: {}, result: false },
      { value: [], result: false },
    ];

    test.each(tests)('should return $result with input $value', ({ value, result }) => {
      expect(isNumber(value)).toBe(result);
    });

    it('should allow type refinement', () => {
      const arr: unknown[] = ['a', 1, false, NaN];
      // @ts-expect-error typescript should highlight this - invalid assignment
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const invalid: number[] = arr;
      const result: number[] = arr.filter(isNumber);
      expect(result).toEqual([1]);
    });
  });

  describe('isNumOrStr', () => {
    const tests: IsFunctionTestDefinition<typeof isNumOrStr>[] = [
      { value: 0, result: true },
      { value: '0', result: true },
      { value: {}, result: false },
      { value: [], result: false },
    ];

    test.each(tests)('should return $result with input $value', ({ value, result }) => {
      expect(isNumOrStr(value)).toBe(result);
    });
  });
});

describe('uniqueId', () => {
  test('should return unique ID independent of prefix', () => {
    expect(uniqueId()).toEqual('1');
    expect(uniqueId(undefined)).toEqual('2');
    expect(uniqueId('')).toEqual('3');
    expect(uniqueId('myprefix')).toEqual('myprefix4');
    expect(uniqueId()).toEqual('5');
  });
});

describe('getPercentValue', () => {
  it('getPercentValue("25%", 1) should return 0.25 ', () => {
    expect(getPercentValue('25%', 1)).toBe(0.25);
  });
  it('getPercentValue("25%", "a") should return 0 ', () => {
    /** @see noteNeverCasting */
    expect(getPercentValue('25%', 'a' as never)).toBe(0);
  });
  it('getPercentValue(1)) should return 1', () => {
    /** @see noteNeverCasting */
    expect(getPercentValue(1, undefined as never)).toBe(1);
  });
  it('getPercentValue("120%", 100)) should return 120', () => {
    expect(getPercentValue('120%', 100)).toBe(120);
  });

  it('getPercentValue("120%", 100, 0, true)) should return 100', () => {
    expect(getPercentValue('120%', 100, 0, true)).toBe(100);
  });

  it('should return defaultValue if percent is neither number not string', () => {
    /** @see noteNeverCasting */
    expect(getPercentValue(false as never, 0, 5)).toEqual(5);
  });
});

describe('hasDuplicate', () => {
  it('of an object should return false when input value is not an array', () => {
    /** @see noteNeverCasting */
    expect(hasDuplicate({} as never)).toBe(false);
  });

  it('of [12, 12] should return true', () => {
    expect(hasDuplicate([12, 12])).toBe(true);
  });

  it('["12", 12] should return true due to implicit cast', () => {
    expect(hasDuplicate(['12', 12])).toBe(true);
  });

  it('[1, 12] should return false', () => {
    expect(hasDuplicate([1, 12])).toBe(false);
  });
});

describe('interpolateNumber', () => {
  it('should always return a function', () => {
    expect(interpolateNumber(10, 10)).toBeInstanceOf(Function);
  });

  it('should provide interpolator function between two number', () => {
    const interpolateFn = interpolateNumber(0, 10);
    expect(interpolateFn(0.1)).toBe(1);
    expect(interpolateFn(0.2)).toBe(2);
  });

  it("should provide interpolator function that returns second value if first value isn't a number", () => {
    /** @see noteNeverCasting */
    const interpolateFn = interpolateNumber(null as never, 10);
    expect(interpolateFn(1)).toBe(10);
    expect(interpolateFn(2)).toBe(10);
  });
});

describe('interpolate', () => {
  it('should return a number when called with two numbers', () => {
    expect(interpolate(10, 20, 0.5)).toBe(15);
    expect(interpolate(10, 20, 0)).toBe(10);
    expect(interpolate(10, 20, 1)).toBe(20);
    expect(interpolate(10, 20, 0.25)).toBe(12.5);
    expect(interpolate(10, 20, 0.75)).toBe(17.5);
    expect(interpolate(10, 20, 0.1)).toBe(11);
    expect(interpolate(20, 620, 0.8)).toBe(500);
  });

  it('should return second number if the first is null', () => {
    expect(interpolate(null, 20, 0.5)).toBe(20);
    expect(interpolate(null, 20, 0.3)).toBe(20);
    expect(interpolate(null, 20, 0.9)).toBe(20);
  });

  it('should return null if second number is null', () => {
    expect(interpolate(10, null, 0.5)).toBeNull();
    expect(interpolate(null, null, 0.5)).toBeNull();
  });
});

describe('findEntryInArray', () => {
  const dataList = [
    { name: 'a', address: { street: 'somewhere' } },
    { name: 'b', address: { street: 'over' } },
    { name: 'c', address: { street: 'here' } },
  ];

  it('should work with string key', () => {
    expect(findEntryInArray(dataList, 'name', 'a')).toStrictEqual(dataList[0]);
  });
  it('should work with string keypath', () => {
    expect(findEntryInArray(dataList, 'address.street', 'over')).toStrictEqual(dataList[1]);
  });
  it('should work with simple function', () => {
    expect(findEntryInArray(dataList, v => v.address.street, 'here')).toStrictEqual(dataList[2]);
  });

  it('should return undefined if first argument is null or undefined or empty array', () => {
    /** @see noteNeverCasting */
    expect(findEntryInArray(null as never, 0, '0')).toEqual(undefined);
    /** @see noteNeverCasting */
    expect(findEntryInArray(undefined as never, 0, '0')).toEqual(undefined);
    expect(findEntryInArray([], 0, '0')).toEqual(undefined);
  });
});

describe('getLinearRegression', () => {
  it('should return when a non-array is supplied', () => {
    /** @see noteNeverCasting */
    expect(getLinearRegression(null as never)).toBeNull();
  });
  it('should return when an empty array is supplied', () => {
    expect(getLinearRegression([])).toBeNull();
  });
  it('should return a linear progression with supplied data', () => {
    const data: Parameters<typeof getLinearRegression>[0] = [
      { cx: 100, cy: 200 },
      { cx: 120, cy: 100 },
      { cx: 170, cy: 300 },
      { cx: 140, cy: 250 },
      { cx: 150, cy: 400 },
      { cx: 110, cy: 280 },
    ];

    expect(getLinearRegression(data)).toStrictEqual({
      a: 2.110047846889952,
      b: -22.822966507177018,
      xmax: 170,
      xmin: 100,
    });
  });

  it('should return a linear progression without cx or cy in data', () => {
    const data: Parameters<typeof getLinearRegression>[0] = [
      { cx: 100 },
      { cx: 120, cy: 100 },
      { cx: 170, cy: 300 },
      { cy: 250 },
      { cx: 150 },
      { cx: 110, cy: 280 },
    ];

    expect(getLinearRegression(data)).toStrictEqual({
      a: -0.39752144899904673,
      b: 198.0648236415634,
      xmax: 170,
      xmin: 0,
    });
  });

  it('should return a linear progression with only cy', () => {
    const data: Parameters<typeof getLinearRegression>[0] = [
      { cy: 100 },
      { cy: 100 },
      { cy: 300 },
      { cy: 250 },
      { cy: 150 },
      { cy: 280 },
    ];

    expect(getLinearRegression(data)).toStrictEqual({
      a: 0,
      b: 196.66666666666666,
      xmax: 0,
      xmin: 0,
    });
  });
});

describe('isNullish', () => {
  it('should return true when value is null', () => {
    expect(isNullish(null)).toBe(true);
  });

  it('should return true when value is undefined', () => {
    expect(isNullish(undefined)).toBe(true);
  });

  it('should return false when value is not null or undefined', () => {
    expect(isNullish(0)).toBe(false);
    expect(isNullish('')).toBe(false);
    expect(isNullish('0')).toBe(false);
  });
});

describe('upperFirst', () => {
  it('should return null when value is null', () => {
    expect(upperFirst(null)).toBe(null);
  });

  it('should return undefined when value is undefined', () => {
    expect(upperFirst(undefined)).toBe(undefined);
  });

  it('should return empty string when value is empty string', () => {
    expect(upperFirst('')).toBe('');
  });

  it('should return the string with the first letter uppercased', () => {
    expect(upperFirst('hello')).toBe('Hello');
  });
});

describe('isNan', () => {
  it('should return true when value is NaN', () => {
    expect(isNan(NaN)).toBe(true);
  });

  it('should return false when value is undefined', () => {
    expect(isNan(undefined)).toBe(false);
  });

  it('should return false when value is null', () => {
    expect(isNan(null)).toBe(false);
  });

  it('should return false when value is empty string', () => {
    expect(isNan('')).toBe(false);
  });

  it('should return false when value is "0"', () => {
    expect(isNan('0')).toBe(false);
  });

  it('should return false when value is a number', () => {
    expect(isNan(1)).toBe(false);
  });
});
