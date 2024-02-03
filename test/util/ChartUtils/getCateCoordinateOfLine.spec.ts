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

  describe('category axis', () => {
    it('should return null if there are no ticks', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { type: 'category' },
        ticks: [],
      });
      expect(actual).toBeNull();
    });

    it('should return first tick coordinate with half of bandSize added, if axis.dataKey is undefined', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { type: 'category' },
        ticks: [{ coordinate: 8 }],
        index: 0,
        bandSize: 2,
      });
      expect(actual).toBe(9);
    });

    it('should follow axis.dataKey -> ticks.value -> tick.coordinate and return that', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { type: 'category', dataKey: 'foo' },
        entry: { foo: 'bar' },
        ticks: [{ coordinate: 8 }, { coordinate: 16, value: 'bar' }],
        bandSize: 4,
      });
      expect(actual).toBe(18);
    });
  });
});
