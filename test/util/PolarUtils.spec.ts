import { degreeToRadian, polarToCartesian, radianToDegree } from '../../src/util/PolarUtils';

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
});
