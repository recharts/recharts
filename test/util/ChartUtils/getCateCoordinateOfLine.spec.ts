import { describe, it, expect } from 'vitest';
import { getCateCoordinateOfLine } from '../../../src/util/ChartUtils';
import { RechartsScale } from '../../../src/util/scale/RechartsScale';

// @ts-expect-error incomplete mock data
const mockScale: RechartsScale = { map: (v: number) => v * 2 };

describe('getCateCoordinateOfLine', () => {
  describe('numerical axis', () => {
    it('should return null when passed empty params', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { scale: mockScale },
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
        axis: { type: 'category', scale: mockScale },
        ticks: [],
      });
      expect(actual).toBeNull();
    });

    it('should return first tick coordinate with half of bandSize added, if axis.dataKey is undefined', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { type: 'category', scale: mockScale },
        bandSize: 2,
        index: 0,
        ticks: [{ coordinate: 8, index: 0, value: 'foo' }],
      });
      expect(actual).toBe(9);
    });

    it('should follow axis.dataKey -> ticks.value -> tick.coordinate and return that', () => {
      // @ts-expect-error incomplete mock data
      const actual = getCateCoordinateOfLine({
        axis: { type: 'category', dataKey: 'foo', scale: mockScale },
        bandSize: 4,
        entry: { foo: 'bar' },
        ticks: [
          { coordinate: 8, index: 0, value: 'foo' },
          { coordinate: 16, index: 1, value: 'bar' },
        ],
      });
      expect(actual).toBe(18);
    });

    const categoryAxis = {
      type: 'category',
      dataKey: 'name',
      allowDuplicatedCategory: true,
      scale: mockScale,
    } as const;

    describe('when an earlier entry has no category', () => {
      const ticks = [
        { coordinate: 8, index: 0, value: 'A' },
        { coordinate: 16, index: 1, value: 'C' },
      ];

      it('should return the tick of the entry category, not the tick at the entry index', () => {
        const actual = getCateCoordinateOfLine({
          axis: categoryAxis,
          bandSize: 4,
          entry: { name: 'C' },
          index: 2,
          ticks,
        });
        expect(actual).toBe(18);
      });

      it('should return null for the entry without a category', () => {
        const entryWithoutCategory: { name?: string; value: number } = { value: 20 };
        const actual = getCateCoordinateOfLine({
          axis: categoryAxis,
          bandSize: 4,
          entry: entryWithoutCategory,
          index: 1,
          ticks,
        });
        expect(actual).toBeNull();
      });
    });

    it('should return the tick at the entry index when categories repeat', () => {
      const actual = getCateCoordinateOfLine({
        axis: categoryAxis,
        bandSize: 4,
        entry: { name: 'A' },
        index: 1,
        ticks: [
          { coordinate: 8, index: 0, value: 'A' },
          { coordinate: 16, index: 1, value: 'A' },
        ],
      });
      expect(actual).toBe(18);
    });
  });
});
