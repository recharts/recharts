import { describe, it, expect } from 'vitest';
import { scaleLinear, scaleBand } from 'victory-vendor/d3-scale';
import { getAngledRectangleWidth, normalizeAngle } from '../../../src/util/CartesianUtils';
import { rechartsScaleFactory } from '../../../src/util/scale/RechartsScale';
import { CartesianScaleHelperImpl } from '../../../src/util/scale/CartesianScaleHelper';

describe('ScaleHelper', () => {
  describe.each(['start', 'middle', 'end'] as const)('with linear scales and position %s', position => {
    const scale = new CartesianScaleHelperImpl<number, number>({
      x: rechartsScaleFactory<number>(scaleLinear().domain([0, 10]).range([10, 110])),
      y: rechartsScaleFactory<number>(scaleLinear().domain([0, 20]).range([10, 110])),
    });

    describe('map', () => {
      it('should map scaled value for both axes on position %s', () => {
        expect(scale.map({ x: 2, y: 4 }, { position })).toEqual({ x: 30, y: 30 });
      });

      it('should map values outside the domain, to outside the range', () => {
        expect(scale.map({ x: -5, y: 25 }, { position })).toEqual({ x: -40, y: 135 });
      });
    });

    describe('mapWithFallback', () => {
      it('should map scaled value for both axes', () => {
        expect(scale.mapWithFallback({ x: 2, y: 4 }, { position, fallback: 'rangeMin' })).toEqual({
          x: 30,
          y: 30,
        });
      });

      it('should use fallback for x when x is undefined', () => {
        expect(scale.mapWithFallback({ x: undefined, y: 4 }, { position, fallback: 'rangeMin' })).toEqual({
          x: 10,
          y: 30,
        });
      });

      it('should use fallback for y when y is undefined', () => {
        expect(scale.mapWithFallback({ x: 2, y: undefined }, { position, fallback: 'rangeMax' })).toEqual({
          x: 30,
          y: 110,
        });
      });

      it('should use both fallbacks if x and y are undefined', () => {
        expect(scale.mapWithFallback({ x: undefined, y: undefined }, { position, fallback: 'rangeMax' })).toEqual({
          x: 110,
          y: 110,
        });
      });

      it('should map values from outside of domain, to outside of range, and ignore fallback', () => {
        expect(scale.mapWithFallback({ x: -5, y: 25 }, { position, fallback: 'rangeMin' })).toEqual({
          x: -40,
          y: 135,
        });
      });
    });

    describe('isInRange', () => {
      it('should return true for a value in range', () => {
        expect(scale.isInRange({ x: 50, y: 50 })).toEqual(true);
      });

      it('should return false for a value out of range on x axis', () => {
        expect(scale.isInRange({ x: 5, y: 50 })).toEqual(false);
      });

      it('should return false for a value out of range on y axis', () => {
        expect(scale.isInRange({ x: 50, y: 5 })).toEqual(false);
      });

      it('should return false for a value out of range on both axes', () => {
        expect(scale.isInRange({ x: 5, y: 5 })).toEqual(false);
      });

      it('should return true if one coordinate is missing or null and the other is in range', () => {
        expect(scale.isInRange({ x: null, y: 50 })).toEqual(true);
        expect(scale.isInRange({ y: 50 })).toEqual(true);
        expect(scale.isInRange({ x: 50, y: undefined })).toEqual(true);
        expect(scale.isInRange({ x: 50 })).toEqual(true);
      });

      it('should return false if one coordinate is missing or null and the other is out of range', () => {
        expect(scale.isInRange({ x: null, y: 5 })).toEqual(false);
        expect(scale.isInRange({ y: 5 })).toEqual(false);
        expect(scale.isInRange({ x: 5, y: undefined })).toEqual(false);
        expect(scale.isInRange({ x: 5 })).toEqual(false);
        expect(scale.isInRange({})).toEqual(true);
      });
    });
  });

  describe('with band scales', () => {
    const scale = new CartesianScaleHelperImpl<string, string>({
      x: rechartsScaleFactory(scaleBand().domain(['A', 'B', 'C', 'D']).range([10, 110])),
      y: rechartsScaleFactory(scaleBand().domain(['0', '1', '2', '3']).range([10, 200])),
    });

    describe('map', () => {
      it('should map scaled value for both axes on position start', () => {
        expect(scale.map({ x: 'A', y: '2' }, { position: 'start' })).toEqual({ x: 10, y: 105 });
      });

      it('should map scaled value for both axes on position middle', () => {
        expect(scale.map({ x: 'A', y: '2' }, { position: 'middle' })).toEqual({ x: 22.5, y: 128.75 });
      });

      it('should map scaled value for both axes on position end', () => {
        expect(scale.map({ x: 'A', y: '2' }, { position: 'end' })).toEqual({ x: 35, y: 152.5 });
      });

      it('should return 0 for unmapped values', () => {
        expect(scale.map({ x: 'Z', y: '5' }, { position: 'middle' })).toEqual({ x: 0, y: 0 });
      });
    });

    describe('mapWithFallback', () => {
      it('should map scaled value for both axes', () => {
        expect(scale.mapWithFallback({ x: 'A', y: '2' }, { position: 'middle', fallback: 'rangeMin' })).toEqual({
          x: 22.5,
          y: 128.75,
        });
      });

      it('should use fallback for x when x is undefined', () => {
        expect(scale.mapWithFallback({ x: undefined, y: '2' }, { position: 'middle', fallback: 'rangeMin' })).toEqual({
          x: 10,
          y: 128.75,
        });
      });

      it('should use fallback for y when y is undefined', () => {
        expect(scale.mapWithFallback({ x: 'A', y: undefined }, { position: 'middle', fallback: 'rangeMax' })).toEqual({
          x: 10 + 25 / 2,
          y: 200,
        });
      });

      it('should use both fallbacks if x and y are undefined', () => {
        expect(
          scale.mapWithFallback({ x: undefined, y: undefined }, { position: 'middle', fallback: 'rangeMax' }),
        ).toEqual({
          x: 110,
          y: 200,
        });
      });

      it('should use fallback for unmapped values', () => {
        expect(scale.mapWithFallback({ x: 'Z', y: '5' }, { position: 'middle', fallback: 'rangeMin' })).toEqual({
          x: 10,
          y: 10,
        });
        expect(scale.mapWithFallback({ x: 'Z', y: '5' }, { position: 'middle', fallback: 'rangeMax' })).toEqual({
          x: 110,
          y: 200,
        });
      });
    });
  });
});

describe('normalizeAngle', () => {
  test.each([
    [0, 0],
    [180, 0],
    [90, 90],
    [360, 0],
    [-1, 179],
    [-180, 0],
    [-720, 0],
    [720, 0],
    [45, 45],
  ])('normalizes angles correctly', (input, expected) => {
    expect(normalizeAngle(input)).toBeCloseTo(expected);
  });
});

describe('getAngledStringWidth', () => {
  test.each([[180], [0], [360], [540], [-180]])(
    'getAngledStringWidth returns width when angle is multiple of 180deg',
    angle => {
      expect(getAngledRectangleWidth({ width: 25, height: 17 }, angle)).toBeCloseTo(25);
    },
  );

  test.each([[90], [-90], [270], [450], [-450]])(
    'getAngledStringWidth returns height when angle is multiple of 90deg',
    angle => {
      expect(getAngledRectangleWidth({ width: 25, height: 17 }, angle)).toBeCloseTo(17);
    },
  );

  describe('when width is larger than height', () => {
    test.each([
      [10, 30],
      [10, 330],
      [10, 150],
      [10, 210],
      [10, -30],
      [5 / (Math.sqrt(3) / 2), 60],
    ])('should return %s when angle is %s', (expectedWidth, angle) => {
      expect(getAngledRectangleWidth({ width: 10, height: 5 }, angle)).toBeCloseTo(expectedWidth);
    });
  });

  describe('when width is smaller than height', () => {
    test.each([
      [10, 60],
      [10, 300],
      [10, 120],
      [10, 240],
      [10, -60],
      [5 / (Math.sqrt(2) / 2), 45],
    ])('should return %s when angle is %s and width is smaller than height', (expectedWidth, angle) => {
      expect(getAngledRectangleWidth({ width: 5, height: 20 }, angle)).toBeCloseTo(expectedWidth);
    });
  });
});
