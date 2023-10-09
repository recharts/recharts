import React, { ReactElement } from 'react';
import { BarPosition, BarSetup, getBarPosition } from '../../../src/util/ChartUtils';

describe('getBarPosition', () => {
  it('should return null if sizeList is empty array', () => {
    expect(getBarPosition({ barGap: 1, barCategoryGap: 1, bandSize: 1, maxBarSize: 1, sizeList: [] })).toBe(null);
  });

  describe('when barSize is a number', () => {
    const item: ReactElement = <p>mock item</p>;
    const stackList: ReadonlyArray<ReactElement> = [];
    it('should return one position for each item in sizeList', () => {
      const sizeList = [
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 1, barCategoryGap: 1, bandSize: 1, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 0, size: 0.3 },
        },
        {
          item,
          position: { offset: 0.3, size: 0.3 },
        },
        {
          item,
          position: { offset: 0.6, size: 0.3 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should increase offset as bandSize increases', () => {
      const sizeList = [
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 1, barCategoryGap: 1, bandSize: 100, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 47, size: 1 },
        },
        {
          item,
          position: { offset: 49, size: 1 },
        },
        {
          item,
          position: { offset: 51, size: 1 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should move offset when gap is increased', () => {
      const sizeList = [
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1, bandSize: 100, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 38, size: 1 },
        },
        {
          item,
          position: { offset: 49, size: 1 },
        },
        {
          item,
          position: { offset: 60, size: 1 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should allow specifying gap as percent string', () => {
      const sizeList = [
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: '20%', barCategoryGap: 1, bandSize: 100, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 28, size: 1 },
        },
        {
          item,
          position: { offset: 49, size: 1 },
        },
        {
          item,
          position: { offset: 70, size: 1 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should return sizes as defined in the sizeList', () => {
      const sizeList = [
        {
          item,
          barSize: 5,
          stackList,
        },
        {
          item,
          barSize: 20,
          stackList,
        },
        {
          item,
          barSize: 30,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1, bandSize: 100, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 12, size: 5 },
        },
        {
          item,
          position: { offset: 27, size: 20 },
        },
        {
          item,
          position: { offset: 57, size: 30 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should ignore barCategoryGap', () => {
      const sizeList = [
        {
          item,
          barSize: 5,
          stackList,
        },
        {
          item,
          barSize: 20,
          stackList,
        },
        {
          item,
          barSize: 30,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1000, bandSize: 100, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 12, size: 5 },
        },
        {
          item,
          position: { offset: 27, size: 20 },
        },
        {
          item,
          position: { offset: 57, size: 30 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should ignore maxBarSize', () => {
      const sizeList = [
        {
          item,
          barSize: 5,
          stackList,
        },
        {
          item,
          barSize: 20,
          stackList,
        },
        {
          item,
          barSize: 30,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1, bandSize: 100, maxBarSize: 100, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 12, size: 5 },
        },
        {
          item,
          position: { offset: 27, size: 20 },
        },
        {
          item,
          position: { offset: 57, size: 30 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should space bars evenly when size is zero', () => {
      const sizeList = [
        {
          item,
          barSize: 0,
          stackList,
        },
        {
          item,
          barSize: 0,
          stackList,
        },
        {
          item,
          barSize: 0,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1, bandSize: 100, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 40, size: 0 },
        },
        {
          item,
          position: { offset: 50, size: 0 },
        },
        {
          item,
          position: { offset: 60, size: 0 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should only consider the first item in sizeList', () => {
      const sizeList: ReadonlyArray<BarSetup> = [
        {
          item,
          barSize: 5,
          stackList,
        },
        {
          item,
          barSize: 'randomstring',
          stackList,
        },
        {
          item,
          barSize: 'badformatteddata',
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1, bandSize: 100, maxBarSize: 1, sizeList });
      const expected = [
        {
          item,
          position: { offset: 0, size: 5 },
        },
        {
          item,
          position: { offset: 15, size: 'randomstring' },
        },
        {
          item,
          position: { offset: '15randomstring10', size: 'badformatteddata' },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should shrink and unify sizes, and add 10% gap, if the sizeList sum is larger than bandSize', () => {
      const sizeList: ReadonlyArray<BarSetup> = [
        {
          item,
          barSize: 50,
          stackList,
        },
        {
          item,
          barSize: 200,
          stackList,
        },
        {
          item,
          barSize: 300,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1, bandSize: 150, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 7, size: 45 },
        },
        {
          item,
          position: { offset: 52, size: 45 },
        },
        {
          item,
          position: { offset: 97, size: 45 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should return negative offset if bandSize is negative', () => {
      const sizeList: ReadonlyArray<BarSetup> = [
        {
          item,
          barSize: 50,
          stackList,
        },
        {
          item,
          barSize: 200,
          stackList,
        },
        {
          item,
          barSize: 300,
          stackList,
        },
      ];
      const result = getBarPosition({ barGap: 10, barCategoryGap: 1, bandSize: -150, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: -350, size: 50 },
        },
        {
          item,
          position: { offset: -300, size: 200 },
        },
        {
          item,
          position: { offset: -100, size: 300 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should stack items from the stackList', () => {
      const stack1: ReactElement = <p>stack 1</p>;
      const stack2: ReactElement = <p>stack 2</p>;
      const stack3: ReactElement = <p>stack 3</p>;
      const sizeList = [
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList: [stack1, stack2, stack3],
        },
      ];
      const result = getBarPosition({ barGap: 1, barCategoryGap: 1, bandSize: 1, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 0, size: 0.3 },
        },
        {
          item,
          position: { offset: 0.3, size: 0.3 },
        },
        {
          item,
          position: { offset: 0.6, size: 0.3 },
        },
        {
          item: stack1,
          position: { offset: 0.6, size: 0.3 },
        },
        {
          item: stack2,
          position: { offset: 0.6, size: 0.3 },
        },
        {
          item: stack3,
          position: { offset: 0.6, size: 0.3 },
        },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('when the first barSize is not a number', () => {
    const item: ReactElement = <p>mock item</p>;
    const stackList: ReadonlyArray<ReactElement> = [];
    const sizeList: ReadonlyArray<BarSetup> = [
      {
        item,
        barSize: '',
        stackList,
      },
      {
        item,
        barSize: 7,
        stackList,
      },
      {
        item,
        barSize: NaN,
        stackList,
      },
    ];
    it('should return one position for each item in sizeList', () => {
      const result = getBarPosition({ barGap: 1, barCategoryGap: 1, bandSize: 9, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 1, size: 1 },
        },
        {
          item,
          position: { offset: 3, size: 1 },
        },
        {
          item,
          position: { offset: 5, size: 1 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should increase offset if barCategoryGap increases', () => {
      const result = getBarPosition({ barGap: 1, barCategoryGap: 5, bandSize: 90, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 17.5, size: 1 },
        },
        {
          item,
          position: { offset: 44.5, size: 1 },
        },
        {
          item,
          position: { offset: 71.5, size: 1 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should increase offset if barCategoryGap increases even when there is no space left', () => {
      const result = getBarPosition({ barGap: 1, barCategoryGap: 50, bandSize: 9, maxBarSize: 1, sizeList });
      // observe that "size: -3" does not really make sense - but that's what the function does.
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 9, size: -3 },
        },
        {
          item,
          position: { offset: 6, size: -3 },
        },
        {
          item,
          position: { offset: 3, size: -3 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should increase offset if barGap increases', () => {
      const result = getBarPosition({ barGap: 10, barCategoryGap: 5, bandSize: 90, maxBarSize: 1, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 14.5, size: 1 },
        },
        {
          item,
          position: { offset: 44.5, size: 1 },
        },
        {
          item,
          position: { offset: 74.5, size: 1 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should increase bar size up to maxBarSize', () => {
      const result = getBarPosition({ barGap: 10, barCategoryGap: 5, bandSize: 90, maxBarSize: 10, sizeList });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 10, size: 10 },
        },
        {
          item,
          position: { offset: 40, size: 10 },
        },
        {
          item,
          position: { offset: 70, size: 10 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should reduce gaps if there is no space left', () => {
      const resultWithGap40 = getBarPosition({ barGap: 40, barCategoryGap: 5, bandSize: 90, maxBarSize: 10, sizeList });
      const resultWithGap70 = getBarPosition({ barGap: 70, barCategoryGap: 5, bandSize: 90, maxBarSize: 10, sizeList });
      expect(resultWithGap40).toEqual(resultWithGap70);
    });

    it('should reduce sizes if there is no space left even without gaps', () => {
      const result = getBarPosition({
        barGap: 40,
        barCategoryGap: 5,
        bandSize: 90,
        maxBarSize: 100,
        sizeList,
      });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 5, size: 26 },
        },
        {
          item,
          position: { offset: 31, size: 26 },
        },
        {
          item,
          position: { offset: 57, size: 26 },
        },
      ];
      expect(result).toEqual(expected);
    });

    it('should stack items from the stackList', () => {
      const stack1: ReactElement = <p>stack 1</p>;
      const stack2: ReactElement = <p>stack 2</p>;
      const stack3: ReactElement = <p>stack 3</p>;
      const stackedSizeList = [
        {
          item,
          barSize: '',
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList,
        },
        {
          item,
          barSize: 1,
          stackList: [stack1, stack2, stack3],
        },
      ];
      const result = getBarPosition({
        barGap: 1,
        barCategoryGap: 5,
        bandSize: 90,
        maxBarSize: 10,
        sizeList: stackedSizeList,
      });
      const expected: ReadonlyArray<BarPosition> = [
        {
          item,
          position: { offset: 13, size: 10 },
        },
        {
          item,
          position: { offset: 40, size: 10 },
        },
        {
          item,
          position: { offset: 67, size: 10 },
        },
        {
          item: stack1,
          position: { offset: 67, size: 10 },
        },
        {
          item: stack2,
          position: { offset: 67, size: 10 },
        },
        {
          item: stack3,
          position: { offset: 67, size: 10 },
        },
      ];
      expect(result).toEqual(expected);
    });
  });
});
