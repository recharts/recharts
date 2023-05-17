import { scaleLinear, scaleBand } from 'victory-vendor/d3-scale';
import {
  ScaleHelper,
  createLabeledScales,
  getAngledRectangleWidth,
  normalizeAngle,
} from '../../src/util/CartesianUtils';

describe('ScaleHelper', () => {
  it('apply() should return the expected value', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(2)).toEqual(2);
  });

  it('apply() should return the expected value when bandAware = true', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(2, { bandAware: true })).toEqual(2);
  });

  it('apply() should return the expected value for band scale', () => {
    const scale = new ScaleHelper(scaleBand().domain(['0', '1', '2', '3']).range([0, 100]));
    expect(scale.apply('2')).toEqual(50);
  });

  it('apply() should return the expected value for band scale when bandAware = true', () => {
    const scale = new ScaleHelper(scaleBand().domain(['0', '1', '2', '3']).range([0, 100]));
    expect(scale.apply('2', { bandAware: true })).toEqual(50 + 25 / 2);
  });

  it('apply() should return undefined for undefined', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(undefined)).toEqual(undefined);
  });

  it('apply() should return undefined for undefined', () => {
    const scale = new ScaleHelper(scaleLinear());
    expect(scale.apply(undefined)).toEqual(undefined);
  });

  it('isInRange() should return true for a value in range', () => {
    const scale = new ScaleHelper(scaleLinear().domain([-200, 200]).range([0, 50]));
    expect(scale.isInRange(35)).toEqual(true);
  });

  it('isInRange() should return false for a value out of range', () => {
    const scale = new ScaleHelper(scaleLinear().domain([-200, 200]).range([0, 50]));
    expect(scale.isInRange(-10)).toEqual(false);
  });
});

describe('createLabeledScales', () => {
  it('apply() should return the expected values', () => {
    const scales = createLabeledScales({
      x: scaleBand().domain(['0', '1', '2', '3']).range([0, 100]),
      y: scaleLinear().domain([-200, 200]).range([0, 50]),
    });
    expect(scales.apply({ x: '2' }, { bandAware: true })).toEqual({ x: 50 + 25 / 2 });
    expect(scales.apply({ x: '2' }, { bandAware: true, position: 'start' })).toEqual({ x: 50 });
    expect(scales.apply({ x: '2' }, { bandAware: true, position: 'middle' })).toEqual({ x: 50 + 25 / 2.0 });
    expect(scales.apply({ x: '2' }, { bandAware: true, position: 'end' })).toEqual({ x: 50 + 25 });
    expect(scales.apply({ y: '100' }, { bandAware: true })).toEqual({ y: 37.5 });
  });

  it('isInRange() should return the expected values', () => {
    const scales = createLabeledScales({
      x: scaleBand().domain(['0', '1', '2', '3']).range([0, 100]),
      y: scaleLinear().domain([-200, 200]).range([0, 50]),
    });
    expect(scales.isInRange({ x: 50 })).toEqual(true);
    expect(scales.isInRange({ x: 50, y: 35 })).toEqual(true);
    expect(scales.isInRange({ y: 35 })).toEqual(true);
    expect(scales.isInRange({ y: 100 })).toEqual(false);
    expect(scales.isInRange({ x: 50, y: 100 })).toEqual(false);
    expect(scales.isInRange({})).toEqual(true);
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
