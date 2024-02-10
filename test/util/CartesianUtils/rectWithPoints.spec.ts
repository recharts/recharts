import { describe, it, expect } from 'vitest';
import { rectWithPoints } from '../../../src/util/CartesianUtils';

describe('rectWithPoints', () => {
  it('should convert two points into a starting point + width + height', () => {
    expect(rectWithPoints({ x: 1, y: 1 }, { x: 3, y: 3 })).toEqual({
      x: 1,
      y: 1,
      width: 2,
      height: 2,
    });
    expect(rectWithPoints({ x: 3, y: 3 }, { x: 1, y: 1 })).toEqual({
      x: 1,
      y: 1,
      width: 2,
      height: 2,
    });
    expect(rectWithPoints({ x: 1, y: 3 }, { x: 3, y: 1 })).toEqual({
      x: 1,
      y: 1,
      width: 2,
      height: 2,
    });
    expect(rectWithPoints({ x: 3, y: 1 }, { x: 1, y: 3 })).toEqual({
      x: 1,
      y: 1,
      width: 2,
      height: 2,
    });
  });

  it('should convert rectangles with negative coordinates', () => {
    expect(rectWithPoints({ x: -8, y: -1 }, { x: -12, y: -4 })).toEqual({
      x: -12,
      y: -4,
      width: 4,
      height: 3,
    });
    expect(rectWithPoints({ x: -5, y: 1 }, { x: 1, y: -3 })).toEqual({
      x: -5,
      y: -3,
      width: 6,
      height: 4,
    });
  });
});
