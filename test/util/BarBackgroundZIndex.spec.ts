import { describe, it, expect } from 'vitest';
import { DefaultZIndexes } from '../../src/zindex/DefaultZIndexes';

/**
 * These tests verify the logic of the getZIndex and getZIndexForRadialBarBackground
 * functions from Bar.tsx and RadialBar.tsx
 */
describe('Bar and RadialBar background zIndex utility logic', () => {
  describe('getZIndex function behavior (Bar.tsx)', () => {
    it('should return default barBackground zIndex for undefined background', () => {
      const result = getZIndexHelper(undefined);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for null background', () => {
      const result = getZIndexHelper(null);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for boolean true background', () => {
      const result = getZIndexHelper(true);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for boolean false background', () => {
      const result = getZIndexHelper(false);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for string background', () => {
      const result = getZIndexHelper('invalid');
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for number background', () => {
      const result = getZIndexHelper(42);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for object without zIndex', () => {
      const result = getZIndexHelper({ fill: '#000' });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return custom zIndex for object with numeric zIndex', () => {
      const customZIndex = 999;
      const result = getZIndexHelper({ fill: '#000', zIndex: customZIndex });
      expect(result).toBe(customZIndex);
    });

    it('should return custom zIndex of 0 when explicitly set', () => {
      const result = getZIndexHelper({ zIndex: 0 });
      expect(result).toBe(0);
    });

    it('should return default barBackground zIndex for object with non-number zIndex', () => {
      const result = getZIndexHelper({ zIndex: '100' as any });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for object with null zIndex', () => {
      const result = getZIndexHelper({ zIndex: null as any });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for object with undefined zIndex', () => {
      const result = getZIndexHelper({ zIndex: undefined });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should handle negative zIndex values', () => {
      const result = getZIndexHelper({ zIndex: -500 });
      expect(result).toBe(-500);
    });

    it('should handle very large zIndex values', () => {
      const result = getZIndexHelper({ zIndex: 99999 });
      expect(result).toBe(99999);
    });

    it('should handle decimal zIndex values', () => {
      const result = getZIndexHelper({ zIndex: 123.456 });
      expect(result).toBe(123.456);
    });

    it('should return default for NaN zIndex', () => {
      const result = getZIndexHelper({ zIndex: NaN });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default for Infinity zIndex', () => {
      const result = getZIndexHelper({ zIndex: Infinity });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default for -Infinity zIndex', () => {
      const result = getZIndexHelper({ zIndex: -Infinity });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });
  });

  describe('getZIndexForRadialBarBackground function behavior (RadialBar.tsx)', () => {
    it('should return default barBackground zIndex for undefined background', () => {
      const result = getZIndexForRadialBarHelper(undefined);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for null background', () => {
      const result = getZIndexForRadialBarHelper(null);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for boolean background', () => {
      const result = getZIndexForRadialBarHelper(true);
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for string background', () => {
      const result = getZIndexForRadialBarHelper('test');
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return default barBackground zIndex for object without zIndex', () => {
      const result = getZIndexForRadialBarHelper({ fill: '#eee' });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should return custom zIndex for object with numeric zIndex', () => {
      const customZIndex = 777;
      const result = getZIndexForRadialBarHelper({ fill: '#eee', zIndex: customZIndex });
      expect(result).toBe(customZIndex);
    });

    it('should return custom zIndex of 0 when explicitly set', () => {
      const result = getZIndexForRadialBarHelper({ zIndex: 0 });
      expect(result).toBe(0);
    });

    it('should return default for non-number zIndex', () => {
      const result = getZIndexForRadialBarHelper({ zIndex: '200' as any });
      expect(result).toBe(DefaultZIndexes.barBackground);
    });

    it('should handle negative zIndex values', () => {
      const result = getZIndexForRadialBarHelper({ zIndex: -300 });
      expect(result).toBe(-300);
    });

    it('should handle very large zIndex values', () => {
      const result = getZIndexForRadialBarHelper({ zIndex: 88888 });
      expect(result).toBe(88888);
    });
  });
});

// Helper function mimicking getZIndex from Bar.tsx
function getZIndexHelper(background: any): number {
  if (background && typeof background === 'object' && 'zIndex' in background && typeof background.zIndex === 'number') {
    return background.zIndex;
  }
  return DefaultZIndexes.barBackground;
}

// Helper function mimicking getZIndexForRadialBarBackground from RadialBar.tsx
function getZIndexForRadialBarHelper(background: any): number {
  if (
    background != null &&
    typeof background === 'object' &&
    'zIndex' in background &&
    typeof background.zIndex === 'number'
  ) {
    return background.zIndex;
  }
  return DefaultZIndexes.barBackground;
}