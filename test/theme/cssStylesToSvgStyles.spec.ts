import { describe, it, expect } from 'vitest';
import { cssStylesToSvgStyles } from '../../src/theme/cssStylesToSvgStyles';

describe('cssStylesToSvgStyles', () => {
  it('should return empty object when given empty object', () => {
    expect(cssStylesToSvgStyles({})).toEqual({});
  });

  it('should return CSS styles if they only have fill', () => {
    expect(cssStylesToSvgStyles({ fill: 'red' })).toEqual({ fill: 'red' });
  });

  it('should translate color CSS property to fill in case the input has no fill', () => {
    expect(cssStylesToSvgStyles({ color: 'red' })).toEqual({ color: 'red', fill: 'red' });
  });

  it('should keep both color and fill in case the input has both color and fill', () => {
    expect(cssStylesToSvgStyles({ color: 'red', fill: 'blue' })).toEqual({ color: 'red', fill: 'blue' });
  });
});
