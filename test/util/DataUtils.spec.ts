import {
  getPercentValue,
  getAnyElementOfObject,
  hasDuplicate,
  mathSign,
  isPercent,
  isNumber,
  isNumOrStr,
  interpolateNumber,
  getLinearRegression,
  findEntryInArray,
  uniqueId,
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
    should: string;
    value: Parameters<F>[0];
    result: ReturnType<F>;
  }

  describe('isPercent', () => {
    const tests: IsFunctionTestDefinition<typeof isPercent>[] = [
      { should: 'return true with 0%', value: '0%', result: true },
      { should: 'return true with 10%', value: '10%', result: true },
      { should: 'return false with invalid string', value: '0', result: false },
      // the case with only '%' character looks like a bug - we should probably change that? Is this a breaking change?
      { should: 'return true with %', value: '%', result: true },
      { should: 'return false with %%', value: '%%', result: false },
      { should: 'return false with 0%%', value: '0%%', result: false },
    ];

    tests.forEach(({ should, value, result }) => {
      it(should, () => {
        expect(isPercent(value)).toBe(result);
      });
    });
  });

  describe('isNumber', () => {
    const tests: IsFunctionTestDefinition<typeof isNumber>[] = [
      { should: 'return true with input number', value: 0, result: true },
      { should: 'return false with input string', value: '0', result: false },
      { should: 'return false with input object', value: {}, result: false },
      { should: 'return false with input array', value: [], result: false },
    ];

    tests.forEach(({ should, value, result }) => {
      it(should, () => {
        expect(isNumber(value)).toBe(result);
      });
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
      { should: 'return true with input number', value: 0, result: true },
      { should: 'return true with input string', value: '0', result: true },
      { should: 'return false with input object', value: {}, result: false },
      { should: 'return false with input array', value: [], result: false },
    ];

    tests.forEach(({ should, value, result }) => {
      it(should, () => {
        expect(isNumOrStr(value)).toBe(result);
      });
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

describe('getAnyElementOfObject', () => {
  it('should return null without input', () => {
    // @ts-expect-error this test requires to test the function call without parameter
    expect(getAnyElementOfObject()).toBe(null);
  });

  it('should return null with input {}', () => {
    expect(getAnyElementOfObject({})).toBe(null);
  });

  it('should return the first element if an array is supplied ', () => {
    expect(getAnyElementOfObject(['foo'])).toBe('foo');
  });

  it('should return the first key if an object is supplied', () => {
    expect(getAnyElementOfObject({ foo: 'foo', bar: 'bar' })).toBe('foo');
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

  it('should return null if first argument is null or undefined or empty array', () => {
    /** @see noteNeverCasting */
    expect(findEntryInArray(null as never, 0, '0')).toEqual(null);
    /** @see noteNeverCasting */
    expect(findEntryInArray(undefined as never, 0, '0')).toEqual(null);
    expect(findEntryInArray([], 0, '0')).toEqual(null);
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
