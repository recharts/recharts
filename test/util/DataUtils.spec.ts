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
} from '../../src/util/DataUtils';

/**
 * @noteNeverCasting added casting to avoid ts error and to be able to test wrong error provided at runtime
 */

describe('mathSign', () => {
  it('(0)', () => {
    expect(mathSign(0)).toBe(0);
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
      { should: 'return true with valid string', value: '0%', result: true },
      { should: 'return false with invalid string', value: '0', result: false },
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
});
