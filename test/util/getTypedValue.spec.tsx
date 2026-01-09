import { describe, it, expect, test } from 'vitest';
import { getTypedValue, TypedDataKey } from '../../src/util/getTypedValue';

describe('getTypedValue', () => {
  describe('when data is an object', () => {
    const data = {
      a: 1,
      b: 2,
      c: 3,
      1: 4,
      u: undefined,
      n: null,
      nested: { obj: { children: 7 } },
      arr: [{ x: 6 }, { y: 5 }],
      nan: NaN,
    };

    it('should call dataKey if it is a function', () => {
      const fn: TypedDataKey<typeof data> = entry => entry.a;
      expect(getTypedValue(data, fn)).toBe(1);
      expect(getTypedValue(data, fn, 9)).toBe(1);
    });

    it('should return data from object root', () => {
      expect(getTypedValue(data, 'a')).toEqual(1);
      expect(getTypedValue(data, 'a', 9)).toEqual(1);
    });

    it('should return data nested in the object', () => {
      expect(getTypedValue(data, 'nested.obj.children')).toEqual(7);
      expect(getTypedValue(data, 'nested.obj.children', 9)).toEqual(7);
    });

    it('should return data nested in the object inside array', () => {
      expect(getTypedValue(data, 'arr[1].y')).toEqual(5);
      expect(getTypedValue(data, 'arr[1].y', 9)).toEqual(5);
    });

    it('should read numeric keys', () => {
      expect(getTypedValue(data, 1)).toEqual(4);
      expect(getTypedValue(data, 1, 9)).toEqual(4);
      expect(getTypedValue(data, '1')).toEqual(4);
      expect(getTypedValue(data, '1', 9)).toEqual(4);
    });

    it('should return default value if the data object path is not defined', () => {
      expect(getTypedValue(data, 'foo', 0)).toBe(0);
      expect(getTypedValue(data, 'foo')).toBe(undefined);
    });

    it('should return default value if the data object path exists but contains undefined', () => {
      expect(getTypedValue(data, 'd', 0)).toBe(0);
      expect(getTypedValue(data, 'd')).toBe(undefined);
    });

    it('should return default value if the data object path exists but contains null', () => {
      expect(getTypedValue(data, 'd', 0)).toBe(0);
      expect(getTypedValue(data, 'd')).toBe(undefined);
    });

    it('should return NaN if the data object path exists and contains NaN', () => {
      expect(getTypedValue(data, 'nan', 0)).toBe(NaN);
      expect(getTypedValue(data, 'nan')).toBe(NaN);
    });

    it('should return defaultValue if dataKey is undefined', () => {
      expect(getTypedValue(data, undefined as never, 7)).toEqual(7);
    });

    it('should return undefined if both dataKey and defaultValue are undefined', () => {
      expect(getTypedValue(data, undefined as never, undefined)).toEqual(undefined);
    });

    test.each([null, undefined])('should return defaultValue if data object is %s', d => {
      expect(getTypedValue(d, () => 1, 7)).toEqual(7);
    });

    test.each([
      NaN,
      [],
      {},
      function anon() {
        return 8;
      },
    ])('should return result of function getter if data object is %s', d => {
      expect(getTypedValue(d, () => 1, 7)).toEqual(1);
    });

    // Type assertion tests (compile-time checks via runtime execution)
    describe('Type Inference', () => {
      type TestData = {
        name: string;
        value: number;
        nested: {
          deep: boolean;
        };
      };
      const testData: TestData = { name: 'test', value: 123, nested: { deep: true } };

      it('should infer string when key is a string literal', () => {
        // Direct usage infers type from keyof T
        const nameVal = getTypedValue(testData, 'name');
        const checkString: string = nameVal;
        expect(checkString).toBe('test');
      });

      it('should infer number when key is a string literal', () => {
        // Direct usage infers type from keyof T
        const nameVal = getTypedValue(testData, 'value');
        const checkString: number = nameVal;
        expect(checkString).toBe(123);
      });

      it('should infer correct types when key is an accessor function with explicit type', () => {
        // Direct usage infers type from function return
        const dataKey: TypedDataKey<TestData, boolean> = d => d.nested.deep;
        // no val is inferred as unknown - but I want boolean here
        const val = getTypedValue(testData, dataKey);
        const checkBool: boolean = val;
        expect(checkBool).toBe(true);
      });

      it('should infer correct types when key is an accessor function with implicit type', () => {
        // Direct usage infers type from function return
        const dataKey = (d: TestData) => d.nested.deep;
        // no val is inferred as boolean - this is correct
        const val = getTypedValue(testData, dataKey);
        const checkBool: boolean = val;
        expect(checkBool).toBe(true);
      });

      it('should support TypedDataKey type definition with explicit return type', () => {
        // Scenario: dataKey defined in a prop, passed down
        const dataKey: TypedDataKey<TestData> = 'name';

        // When using abstract TypedDataKey, we can enforce return type
        const result: string = getTypedValue<TestData, string>(testData, dataKey);

        expect(result).toBe('test');
      });

      it('should support TypedDataKey with function and explicit return type', () => {
        const dataKey: TypedDataKey<TestData, number> = d => d.value;

        const result: number = getTypedValue<TestData, number>(testData, dataKey);

        expect(result).toBe(123);
      });

      it('should support TypedDataKey with function and explicit return type but implicit call', () => {
        const dataKey: TypedDataKey<TestData, number> = d => d.value;

        const result: number = getTypedValue(testData, dataKey);

        expect(result).toBe(123);
      });

      it('should default to unknown when TypedDataKey is used without explicit return type', () => {
        const dataKey: TypedDataKey<TestData> = 'name';

        const result = getTypedValue(testData, dataKey);

        // result should be unknown here
        // casting to string because we know it's a string, but the type is unknown
        const checkString: string = result as string;

        expect(checkString).toBe('test');
      });
    });
  });

  describe('when data is an array', () => {
    const data = [10, 20, 30, { a: 40 }, [50, 60], undefined, null, NaN];

    it('should return data from array by numeric index', () => {
      expect(getTypedValue(data, 0)).toEqual(10);
      expect(getTypedValue(data, 0, 99)).toEqual(10);
      expect(getTypedValue(data, 3)).toEqual({ a: 40 });
      expect(getTypedValue(data, 3, 99)).toEqual({ a: 40 });
    });

    it('should return data nested in the array object', () => {
      expect(getTypedValue(data, '3.a')).toEqual(40);
      expect(getTypedValue(data, '3.a', 99)).toEqual(40);
    });

    it('should return data nested in the array inside another array', () => {
      expect(getTypedValue(data, '4[1]')).toEqual(60);
      expect(getTypedValue(data, '4[1]', 99)).toEqual(60);
    });

    it('should return default value if the array index is out of bounds', () => {
      expect(getTypedValue(data, 10, 0)).toBe(0);
      expect(getTypedValue(data, 10)).toBe(undefined);
    });

    it('should return default value if the array element is undefined', () => {
      expect(getTypedValue(data, 5, 0)).toBe(0);
      expect(getTypedValue(data, 5)).toBe(undefined);
    });

    it('should return null if the array element is null', () => {
      expect(getTypedValue(data, 6, 0)).toBe(null);
      expect(getTypedValue(data, 6)).toBe(null);
    });

    it('should return NaN if the array element is NaN', () => {
      expect(getTypedValue(data, 7, 0)).toBe(NaN);
      expect(getTypedValue(data, 7)).toBe(NaN);
    });

    describe('type inference', () => {
      const arrData = [10, 20, 30, [1, 2]];

      it('should infer correct type when accessing array elements', () => {
        const number0 = getTypedValue(arrData, 0);
        // This checks if the return type is correctly inferred as element of array
        // (number | number[]) because arrData is heterogeneous
        const checkNumber0: number | number[] = number0;
        expect(checkNumber0).toBe(10);

        const number1 = getTypedValue(arrData, '1');
        // here we test that string index also works
        const checkNumber1: number | number[] = number1;
        expect(checkNumber1).toBe(20);

        const arr1 = getTypedValue(arrData, 3);
        // here we test that nested array is inferred correctly
        // also that we can reduce the type to readonly array to make sure Recharts won't try to mutate it
        const checkArr1: number | ReadonlyArray<number> = arr1;
        expect(checkArr1).toEqual([1, 2]);
      });
    });
  });
});
