import { vi } from 'vitest';

import { RADIAN } from '../../../src/util/PolarUtils';
import { getCursorPoints } from '../../../src/util/cursor/getCursorPoints';
import { ChartOffsetInternal, Coordinate, PolarCoordinate } from '../../../src/util/types';
import { getRadialCursorPoints } from '../../../src/util/cursor/getRadialCursorPoints';
import { emptyOffset, makeChartOffset } from '../../helper/offsetHelpers';

vi.mock('../../../src/util/cursor/getRadialCursorPoints');

const spy = vi.mocked(getRadialCursorPoints);

const polarCoordinate: PolarCoordinate = {
  clockWise: false,
  endAngle: 0,
  radius: 0,
  startAngle: 0,
  cx: 18,
  cy: 99,
  innerRadius: 7,
  outerRadius: 9,
  angle: RADIAN / 4,
  x: 0,
  y: 0,
};

describe('getCursorPoints', () => {
  describe('horizontal layout', () => {
    it('should return coordinates based on X dimension', () => {
      const activeCoordinate: Coordinate = {
        x: 18,
        y: 0,
      };
      const offset: ChartOffsetInternal = makeChartOffset({
        top: 12,
        height: 10,
      });
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
      const activeCoordinate: Coordinate = {
        x: 18,
        y: 99,
      };
      const offset: ChartOffsetInternal = makeChartOffset({
        left: 42,
        width: 60,
      });
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
    it('should return undefined if cx or cy is not defined', () => {
      const activeCoordinate: Coordinate = {
        x: 1,
        y: 1,
      };
      const offset: ChartOffsetInternal = makeChartOffset({});
      const result = getCursorPoints('centric', activeCoordinate, offset);
      expect(result).toEqual(undefined);
    });
    it('should return cartesian coordinates', () => {
      const result = getCursorPoints('centric', polarCoordinate, emptyOffset);
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
      const fullOffset: ChartOffsetInternal = {
        bottom: 87,
        brushBottom: 23,
        height: 35,
        left: 1,
        right: 9,
        top: 43,
        width: 4573,
      };
      const resultWithoutOffset = getCursorPoints('centric', polarCoordinate, emptyOffset);
      const resultWithOffset = getCursorPoints('centric', polarCoordinate, fullOffset);

      expect(resultWithoutOffset).toEqual(resultWithOffset);
    });
  });
  describe('radial layout', () => {
    it('should return undefineds if cx or cy is not defined', () => {
      const activeCoordinate: Coordinate = {
        x: 1,
        y: 1,
      };
      const result = getCursorPoints('radial', activeCoordinate, emptyOffset);
      expect(result).toEqual(undefined);
    });
    it('should call getRadialCursorPoints', () => {
      const offset: ChartOffsetInternal = makeChartOffset({
        left: 42,
        width: 60,
      });
      getCursorPoints('radial', polarCoordinate, offset);
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(polarCoordinate);
    });
  });
});
