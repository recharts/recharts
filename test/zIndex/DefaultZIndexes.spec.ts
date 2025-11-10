import { describe, it, expect } from 'vitest';
import { DefaultZIndexes } from '../../src/zIndex/DefaultZIndexes';

describe('DefaultZIndexes', () => {
  describe('zIndex ordering', () => {
    it('should have barBackground below grid', () => {
      expect(DefaultZIndexes.barBackground).toBeGreaterThan(DefaultZIndexes.grid);
    });

    it('should have barBackground below all other elements', () => {
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.area);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.cursorRectangle);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.bar);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.line);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.axis);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.scatter);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.label);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.activeBar);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.activeDot);
    });

    it('should maintain correct ordering of all zIndex values', () => {
      expect(DefaultZIndexes.grid).toBeLessThan(DefaultZIndexes.barBackground);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.area);
      expect(DefaultZIndexes.area).toBeLessThan(DefaultZIndexes.cursorRectangle);
      expect(DefaultZIndexes.cursorRectangle).toBeLessThan(DefaultZIndexes.bar);
      expect(DefaultZIndexes.bar).toBeLessThan(DefaultZIndexes.line);
      expect(DefaultZIndexes.line).toBeLessThan(DefaultZIndexes.axis);
      expect(DefaultZIndexes.axis).toBeLessThan(DefaultZIndexes.scatter);
      expect(DefaultZIndexes.scatter).toBeLessThan(DefaultZIndexes.label);
      expect(DefaultZIndexes.activeBar).toBeLessThan(DefaultZIndexes.label);
      expect(DefaultZIndexes.activeBar).toBeLessThan(DefaultZIndexes.activeDot);
    });
  });

  describe('value types', () => {
    it('should have all values as numbers', () => {
      Object.values(DefaultZIndexes).forEach(value => {
        expect(typeof value).toBe('number');
        expect(Number.isFinite(value)).toBe(true);
      });
    });

    it('should not have any NaN values', () => {
      Object.values(DefaultZIndexes).forEach(value => {
        expect(Number.isNaN(value)).toBe(false);
      });
    });

    it('should have integer values only', () => {
      Object.values(DefaultZIndexes).forEach(value => {
        expect(Number.isInteger(value)).toBe(true);
      });
    });
  });

  describe('specific use cases', () => {
    it('should provide appropriate zIndex for Bar and RadialBar backgrounds', () => {
      // Background should be behind bars but visible
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.bar);
      // Background should be visible (not too far back)
      expect(DefaultZIndexes.barBackground).toBeGreaterThan(-100);
    });

    it('should ensure active elements appear on top', () => {
      expect(DefaultZIndexes.activeBar).toBeGreaterThan(DefaultZIndexes.bar);
      expect(DefaultZIndexes.activeDot).toBeGreaterThan(DefaultZIndexes.scatter);
    });

    it('should ensure grid appears behind all chart elements', () => {
      const nonGridValues = Object.entries(DefaultZIndexes)
        .filter(([key]) => key !== 'grid')
        .map(([, value]) => value);

      nonGridValues.forEach(value => {
        expect(DefaultZIndexes.grid).toBeLessThan(value);
      });
    });
  });
});
