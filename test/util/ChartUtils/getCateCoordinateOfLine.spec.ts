import { describe, it, expect } from 'vitest';
import { getCateCoordinateOfLine } from '../../../src/util/ChartUtils';

const mockScale = (v: number) => v * 2;

describe('getCateCoordinateOfLine', () => {
  describe('numerical axis', () => {
    it('should return null when passed empty params', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: {},
      });
      expect(actual).toBeNull();
    });

    it('should return scaled value', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { scale: mockScale },
        entry: { x: 1 },
        dataKey: 'x',
      });
      expect(actual).toBe(2);
    });

    it('should use axis.dataKey if the root dataKey is undefined', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { scale: mockScale, dataKey: 'x' },
        entry: { x: 1 },
      });
      expect(actual).toBe(2);
    });

    it('should use root dataKey if two dataKeys are defined', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { scale: mockScale, dataKey: 'x' },
        entry: { x: 1, y: 3 },
        dataKey: 'y',
      });
      expect(actual).toBe(6);
    });
  });
});
