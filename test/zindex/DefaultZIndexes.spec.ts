import { describe, it, expect } from 'vitest';
import { DefaultZIndexes } from '../../src/zindex/DefaultZIndexes';

describe('DefaultZIndexes', () => {
  describe('structure and values', () => {
    it('should define all required zIndex constants', () => {
      expect(DefaultZIndexes).toBeDefined();
      expect(typeof DefaultZIndexes).toBe('object');
    });

    it('should have grid zIndex as -100', () => {
      expect(DefaultZIndexes.grid).toBe(-100);
    });

    it('should have barBackground zIndex as -50', () => {
      expect(DefaultZIndexes.barBackground).toBe(-50);
    });

    it('should have area zIndex as 100', () => {
      expect(DefaultZIndexes.area).toBe(100);
    });

    it('should have cursor zIndex as 200', () => {
      expect(DefaultZIndexes.cursor).toBe(200);
    });

    it('should have bar zIndex as 300', () => {
      expect(DefaultZIndexes.bar).toBe(300);
    });

    it('should have line zIndex as 400', () => {
      expect(DefaultZIndexes.line).toBe(400);
    });

    it('should have axis zIndex as 500', () => {
      expect(DefaultZIndexes.axis).toBe(500);
    });

    it('should have scatter zIndex as 600', () => {
      expect(DefaultZIndexes.scatter).toBe(600);
    });

    it('should have label zIndex as 700', () => {
      expect(DefaultZIndexes.label).toBe(700);
    });

    it('should have activeBar zIndex as 1000', () => {
      expect(DefaultZIndexes.activeBar).toBe(1000);
    });

    it('should have activeDot zIndex as 1100', () => {
      expect(DefaultZIndexes.activeDot).toBe(1100);
    });
  });

  describe('zIndex ordering', () => {
    it('should have barBackground below grid', () => {
      expect(DefaultZIndexes.barBackground).toBeGreaterThan(DefaultZIndexes.grid);
    });

    it('should have barBackground below all other elements', () => {
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.area);
      expect(DefaultZIndexes.barBackground).toBeLessThan(DefaultZIndexes.cursor);
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
      expect(DefaultZIndexes.area).toBeLessThan(DefaultZIndexes.cursor);
      expect(DefaultZIndexes.cursor).toBeLessThan(DefaultZIndexes.bar);
      expect(DefaultZIndexes.bar).toBeLessThan(DefaultZIndexes.line);
      expect(DefaultZIndexes.line).toBeLessThan(DefaultZIndexes.axis);
      expect(DefaultZIndexes.axis).toBeLessThan(DefaultZIndexes.scatter);
      expect(DefaultZIndexes.scatter).toBeLessThan(DefaultZIndexes.label);
      expect(DefaultZIndexes.label).toBeLessThan(DefaultZIndexes.activeBar);
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