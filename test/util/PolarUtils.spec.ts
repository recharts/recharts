import { RADIAN, degreeToRadian, getMaxRadius, polarToCartesian, radianToDegree } from '../../src/util/PolarUtils';

describe('degreeToRadian', () => {
  test.each([
    [0, 0],
    [180, Math.PI],
    [360, Math.PI * 2],
    [90, Math.PI / 2],
  ])('%d degrees should be %d rad', (deg: number, rad: number) => {
    expect(degreeToRadian(deg)).toEqual(rad);
    expect(radianToDegree(rad)).toEqual(deg);
  });
});

describe('polarToCartesian', () => {
  it('should convert zero', () => {
    expect(polarToCartesian(0, 0, 0, 0)).toEqual({ x: 0, y: 0 });
  });

  test.each([
    [0, 0, 1, RADIAN / 2, 1, 0],
    [0, 0, 1, RADIAN, 1, 0],
    [5, 7, 1, RADIAN, 6, 7],
    [0, 0, 15, 0, 15, 0],
  ])('should convert (%d, %d, %d, %d) => {x: %d, y: %d}', (cx, cy, radius, angle, x, y) => {
    const result = polarToCartesian(cx, cy, radius, angle);
    expect(result.x).toBeCloseTo(x, 3);
    expect(result.y).toBeCloseTo(y, 3);
  });
});

describe('getMaxRadius', () => {
  it('should return 0 in trivial case', () => {
    expect(getMaxRadius(0, 0)).toEqual(0);
  });

  test.each([
    [10, 10, 5],
    [4, 10, 2],
    [10, 6, 3],
    [-10, 10, 5],
    [-10, -10, 5],
  ])('w: %d h: %d => %d', (w, h, r) => {
    expect(getMaxRadius(w, h)).toEqual(r);
  });

  it('should include offset', () => {
    expect(getMaxRadius(10, 8, { top: 2, right: 2, bottom: 2, left: 2 })).toEqual(2);
  });
});
