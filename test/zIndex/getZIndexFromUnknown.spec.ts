import { describe, it, expect } from 'vitest';
import { DefaultZIndexes } from '../../src/zIndex/DefaultZIndexes';
import { getZIndexFromUnknown } from '../../src/zIndex/getZIndexFromUnknown';

describe('getZIndexFromUnknown', () => {
  it.each([undefined, null, true, false, 'invalid', 42, { fill: '#000' }] as const)(
    'should return default zIndex when input is %p',
    input => {
      const randomNumber = Math.floor(Math.random() * 1000);
      const result = getZIndexFromUnknown(input, randomNumber);
      expect(result).toBe(randomNumber);
    },
  );

  it('should return custom zIndex for object with numeric zIndex', () => {
    const customZIndex = 999;
    const result = getZIndexFromUnknown({ fill: '#000', zIndex: customZIndex }, 100);
    expect(result).toBe(customZIndex);
  });

  it('should return custom zIndex of 0 when explicitly set', () => {
    const randomNumber = Math.floor(Math.random() * 1000);
    const result = getZIndexFromUnknown({ zIndex: randomNumber }, 100);
    expect(result).toBe(randomNumber);
  });

  it.each(['100', null, undefined, NaN, Infinity, -Infinity, () => {}, [], Symbol.for('100')] as const)(
    'should return default zIndex for input={zIndex: %s}',
    zIndex => {
      const randomNumber = Math.floor(Math.random() * 1000);
      const result = getZIndexFromUnknown({ zIndex }, randomNumber);
      expect(result).toBe(randomNumber);
    },
  );

  it.each([0, -0, -100, 5000, 123.456, Math.PI, DefaultZIndexes.barBackground] as const)(
    'should handle edge case zIndex values: %p',
    zIndex => {
      const randomNumber = Math.floor(Math.random() * 1000);
      const result = getZIndexFromUnknown({ zIndex }, randomNumber);
      expect(result).toBe(zIndex);
    },
  );
});
