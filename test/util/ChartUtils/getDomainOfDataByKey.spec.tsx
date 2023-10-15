import { getDomainOfDataByKey } from '../../../src/util/ChartUtils';

describe('getDomainOfDataByKey', () => {
  describe('number axis', () => {
    it('should return [Infinity, -Infinity] if data is empty array', () => {
      const result = getDomainOfDataByKey([], '', 'number');
      expect(result).toEqual([Infinity, -Infinity]);
    });

    it('should return [min,max] from dataKey array', () => {
      const data = [{ x: 4 }, { x: 2 }, { x: 8 }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([2, 8]);
    });

    it('should understand infinities', () => {
      const data = [{ x: 4 }, { x: -Infinity }, { x: 8 }, { x: Infinity }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([-Infinity, Infinity]);
    });

    it('should understand scientific notation', () => {
      const data = [{ x: 9 }, { x: 1e3 }, { x: 8e2 }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([9, 1000]);
    });

    it('when given positive and negative zeroes, should use the first one from the array as both min and max', () => {
      const data = [{ x: -0 }, { x: 0 }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([-0, -0]);

      const data2 = [{ x: 0 }, { x: -0 }];
      const result2 = getDomainOfDataByKey(data2, 'x', 'number');
      expect(result2).toEqual([0, 0]);
    });

    it('should flatten arrays of numbers', () => {
      const data = [{ x: [4, 1] }, { x: [2, 16] }, { x: [8, 3] }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([1, 16]);
    });

    it('should treat stringified numbers as strings', () => {
      const data = [{ x: '4' }, { x: '2' }, { x: '8' }, { x: '12' }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      /*
       * Even though 2 is smaller number than 12, '12' is smaller string than '2'.
       * This is 100% a bug but before we fix it let's talk about backwards compatibility
       */
      expect(result).toEqual(['12', '8']);
    });

    it('should ignore non-number values', () => {
      const data = [{ x: 'twelve' }, { x: 4 }, { x: 8 }, { x: '0' }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([4, 8]);
    });

    it('should return [Infinity, -Infinity] if none of the data points is a number', () => {
      const data = [{ x: 'yesterday' }, { x: 'today' }, { x: 'tomorrow' }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([Infinity, -Infinity]);
    });

    it('should return 0 if it is specified as a number', () => {
      const data = [{ x: 0 }, { x: 100 }, { x: 200 }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([0, 200]);
    });

    it('should ignore filterNil parameter', () => {
      const data = [{ x: 0 }, { x: 100 }, { x: 200 }];
      const resultWithTrue = getDomainOfDataByKey(data, 'x', 'number', true);
      const resultWithFalse = getDomainOfDataByKey(data, 'x', 'number', false);
      expect(resultWithTrue).toEqual(resultWithFalse);
    });

    it('should ignore 0 if it is specified as a string', () => {
      const data = [{ x: '0' }, { x: '100' }, { x: '200' }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual(['100', '200']);
    });

    it('should use the same number as both min and max if there is only one data point', () => {
      const data = [{ x: 7 }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([7, 7]);
    });

    it('should ignore NaN', () => {
      const data = [{ x: NaN }];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([Infinity, -Infinity]);
    });

    it('should remove other non-numeric and Date values', () => {
      const data: unknown[] = [
        { x: NaN },
        { x: {} },
        { x: [] },
        {
          x() {
            return 1;
          },
        },
        { x: false },
        { x: null },
        { x: undefined },
        { x: new Date(0) },
      ];
      const result = getDomainOfDataByKey(data, 'x', 'number');
      expect(result).toEqual([Infinity, -Infinity]);
    });
  });

  describe('category axis', () => {
    it('should return empty array if data is empty array', () => {
      const result = getDomainOfDataByKey([], '', 'category');
      expect(result).toEqual([]);
    });

    it('should filter away nulls and undefineds if filterNil is true', () => {
      const data: unknown[] = [{ x: null }, { x: undefined }];
      const result = getDomainOfDataByKey(data, 'x', 'category', true);
      expect(result).toEqual([]);
    });

    it('should flatten arrays', () => {
      const data: unknown[] = [{ x: [1, 2] }, { x: [3, 4] }, { x: [] }];
      const result = getDomainOfDataByKey(data, 'x', 'category', true);
      expect(result).toEqual([1, 2, 3, 4]);
    });

    test.each([
      NaN,
      {},
      function anon() {
        return 1;
      },
      true,
      false,
      null,
      undefined,
    ])('should turn %s into emptystring if filterNil is false', v => {
      const result = getDomainOfDataByKey([{ v }], 'v', 'category', false);
      expect(result).toEqual(['']);
    });

    test.each([
      NaN,
      {},
      function anon() {
        return 1;
      },
      true,
      false,
    ])('should turn %s into emptystring if filterNil is true', v => {
      const result = getDomainOfDataByKey([{ v }], 'v', 'category', true);
      expect(result).toEqual(['']);
    });

    it('should include strings, numbers, and Dates in the domain', () => {
      const data: unknown[] = [{ x: 1 }, { x: 'my string' }, { x: new Date(100) }];
      const result = getDomainOfDataByKey(data, 'x', 'category', false);
      expect(result).toEqual([1, 'my string', new Date(100)]);
    });
  });
});
