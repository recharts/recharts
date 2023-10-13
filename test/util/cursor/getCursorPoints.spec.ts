import { RADIAN } from '../../../src/util/PolarUtils';
import { getCursorPoints } from '../../../src/util/cursor/getCursorPoints';
import { ChartCoordinate, ChartOffset, Coordinate } from '../../../src/util/types';
import { getRadialCursorPoints } from '../../../src/util/cursor/getRadialCursorPoints';

jest.mock('../../../src/util/cursor/getRadialCursorPoints');

const spy = jest.mocked(getRadialCursorPoints);

describe('getCursorPoints', () => {
  describe('horizontal layout', () => {
    it('should return coordinates based on X dimension', () => {
      const activeCoordinate: ChartCoordinate = {
        x: 18,
        y: 0,
      };
      const offset: ChartOffset = {
        top: 12,
        height: 10,
      };
      const result = getCursorPoints('horizontal', activeCoordinate, offset);
      const expected: [Coordinate, Coordinate] = [
        {
          x: 18,
          y: 12,
        },
        {
          x: 18,
          y: 22,
        },
      ];
      expect(result).toEqual(expected);
    });
  });

  describe('vertical layout', () => {
    it('should return coordinates based on Y dimension', () => {
      const activeCoordinate: ChartCoordinate = {
        x: 18,
        y: 99,
      };
      const offset: ChartOffset = {
        left: 42,
        width: 60,
      };
      const result = getCursorPoints('vertical', activeCoordinate, offset);
      const expected: [Coordinate, Coordinate] = [
        {
          x: 42,
          y: 99,
        },
        {
          x: 102,
          y: 99,
        },
      ];
      expect(result).toEqual(expected);
    });
  });
  describe('centric layout', () => {
    it('should return undefineds if cx or cy is not defined', () => {
      const activeCoordinate: ChartCoordinate = {
        x: 1,
        y: 1,
      };
      const offset: ChartOffset = {};
      const result = getCursorPoints('centric', activeCoordinate, offset);
      const expected: object[] = [
        {
          x: undefined,
          y: undefined,
        },
        {
          x: undefined,
          y: undefined,
        },
      ];
      expect(result).toEqual(expected);
    });
    it('should return cartesian coordinates', () => {
      const activeCoordinate: ChartCoordinate = {
        cx: 18,
        cy: 99,
        innerRadius: 7,
        outerRadius: 9,
        angle: RADIAN / 4,
        x: 0,
        y: 0,
      };
      const offset: ChartOffset = {};
      const result = getCursorPoints('centric', activeCoordinate, offset);
      const expected: [Coordinate, Coordinate] = [
        {
          x: 24.999999979701798,
          y: 98.99946691951588,
        },
        {
          x: 26.999999973902312,
          y: 98.99931461080614,
        },
      ];
      expect(result).toEqual(expected);
    });
    it('should ignore offset', () => {
      const activeCoordinate: ChartCoordinate = {
        cx: 18,
        cy: 99,
        innerRadius: 7,
        outerRadius: 9,
        angle: RADIAN / 4,
        x: 0,
        y: 0,
      };
      const emptyOffset: ChartOffset = {};
      const fullOffset: ChartOffset = {
        bottom: 87,
        brushBottom: 23,
        height: 35,
        left: 1,
        right: 9,
        top: 43,
        width: 4573,
      };
      const resultWithoutOffset = getCursorPoints('centric', activeCoordinate, emptyOffset);
      const resultWithOffset = getCursorPoints('centric', activeCoordinate, fullOffset);

      expect(resultWithoutOffset).toEqual(resultWithOffset);
    });
  });
  describe('radial layout', () => {
    it('should return undefineds if cx or cy is not defined', () => {
      const activeCoordinate: ChartCoordinate = {
        x: 1,
        y: 1,
      };
      const offset: ChartOffset = {};
      const result = getCursorPoints('radial', activeCoordinate, offset);
      const expected: object[] = [
        {
          x: undefined,
          y: undefined,
        },
        {
          x: undefined,
          y: undefined,
        },
      ];
      expect(result).toEqual(expected);
    });
    it('should call getRadialCursorPoints', () => {
      const activeCoordinate: ChartCoordinate = {
        cx: 18,
        cy: 99,
        innerRadius: 7,
        outerRadius: 9,
        angle: RADIAN / 4,
        x: 0,
        y: 0,
      };
      const offset: ChartOffset = {
        left: 42,
        width: 60,
      };
      getCursorPoints('radial', activeCoordinate, offset);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(activeCoordinate);
    });
  });
});
