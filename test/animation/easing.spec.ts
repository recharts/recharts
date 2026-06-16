import { describe, it, expect } from 'vitest';
import { configBezier, createEasingFunction, createSpringEasing } from '../../src/animation/easing';
import { assertNotNull } from '../helper/assertNotNull';

describe('configBezier', () => {
  it('should return a cubic-bezier function when given four numbers', () => {
    const bezier = configBezier(0.42, 0, 0.58, 1);
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBe(0);
    expect(bezier(0.25)).toBeCloseTo(0.13, 1);
    expect(bezier(0.5)).toBeCloseTo(0.5, 1);
    expect(bezier(0.75)).toBeCloseTo(0.87, 1);
    expect(bezier(1)).toBe(1);
  });

  it('should create bezier function from string input', () => {
    const bezier = configBezier('cubic-bezier(0.42,0,0.58,1)');
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBe(0);
    expect(bezier(0.25)).toBeCloseTo(0.13, 1);
    expect(bezier(0.5)).toBeCloseTo(0.5, 1);
    expect(bezier(0.75)).toBeCloseTo(0.87, 1);
    expect(bezier(1)).toBe(1);
  });

  it('should create bezier function from string input with spaces', () => {
    const bezier = configBezier('cubic-bezier( 0.42 , 0 , 0.58 , 1 )');
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBe(0);
    expect(bezier(0.25)).toBeCloseTo(0.13, 1);
    expect(bezier(0.5)).toBeCloseTo(0.5, 1);
    expect(bezier(0.75)).toBeCloseTo(0.87, 1);
    expect(bezier(1)).toBe(1);
  });

  it('should create linear bezier function', () => {
    const bezier = configBezier('linear');
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBe(0);
    expect(bezier(0.25)).toBeCloseTo(0.25, 4);
    expect(bezier(0.5)).toBeCloseTo(0.5, 4);
    expect(bezier(0.75)).toBeCloseTo(0.75, 4);
    expect(bezier(1)).toBe(1);
  });

  it('should create ease bezier function', () => {
    const bezier = configBezier('ease');
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBe(0);
    expect(bezier(0.25)).toBeCloseTo(0.4, 1);
    expect(bezier(0.5)).toBeCloseTo(0.8, 1);
    expect(bezier(0.75)).toBeCloseTo(0.96, 1);
    expect(bezier(1)).toBe(1);
  });

  it('should create ease-in bezier function', () => {
    const bezier = configBezier('ease-in');
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBeCloseTo(0, 4);
    expect(bezier(0.25)).toBeCloseTo(0.09, 1);
    expect(bezier(0.5)).toBeCloseTo(0.31, 1);
    expect(bezier(0.75)).toBeCloseTo(0.62, 1);
    expect(bezier(1)).toBe(1);
  });

  it('should create ease-out bezier function', () => {
    const bezier = configBezier('ease-out');
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBeCloseTo(0, 4);
    expect(bezier(0.25)).toBeCloseTo(0.13, 1);
    expect(bezier(0.5)).toBeCloseTo(0.5, 1);
    expect(bezier(0.75)).toBeCloseTo(0.91, 1);
    expect(bezier(1)).toBe(1);
  });

  it('should create ease-in-out bezier function', () => {
    const bezier = configBezier('ease-in-out');
    expect(typeof bezier).toBe('function');
    expect(bezier(0)).toBeCloseTo(0, 4);
    expect(bezier(0.25)).toBeCloseTo(0.37, 1);
    expect(bezier(0.5)).toBeCloseTo(0.68, 1);
    expect(bezier(0.75)).toBeCloseTo(0.9, 1);
    expect(bezier(1)).toBe(1);
  });

  it('should handle extreme bezier curves requiring value clamping', () => {
    // This curve has extreme control points that may cause Newton's method to
    // temporarily go outside [0,1] range during calculations
    const bezier = configBezier(0.1, 2.8, 0.9, -1.5);

    expect(bezier(0)).toBeCloseTo(0);
    expect(bezier(0.5)).toBeCloseTo(0.61, 1);
    expect(bezier(1)).toBeCloseTo(1);
  });

  it('should handle bezier curves with numerical instability requiring value clamping', () => {
    // This curve creates a situation where Newton's method will produce values outside [0,1]
    const bezier = configBezier(0.01, 5.0, 0.99, -3.0);

    // Test multiple points to increase chance of hitting boundary conditions
    expect(bezier(0)).toBeCloseTo(0, 2);
    expect(bezier(0.1)).toBeCloseTo(1.62, 2);
    expect(bezier(0.3)).toBeCloseTo(1.5, 1);
    expect(bezier(0.5)).toBeCloseTo(0.875, 2);
    expect(bezier(0.7)).toBeCloseTo(0.19, 2);
    expect(bezier(0.9)).toBeCloseTo(-0.15, 2);
    expect(bezier(1)).toBeCloseTo(1, 2);
  });

  it('should handle bezier curves with negative values during calculation', () => {
    // This bezier curve will cause Newton's method to produce negative values
    // The extreme difference between control points pushes iterations to negative territory
    const bezier = configBezier(0.99, -0.1, 0.01, 1.5);

    // Test at specific points that are likely to trigger negative rangeValue clamping
    expect(bezier(0)).toBeCloseTo(0);
    expect(bezier(0.2)).toBeCloseTo(0.01, 1);
    expect(bezier(0.4)).toBeCloseTo(0.13, 1);
    expect(bezier(0.6)).toBeCloseTo(1.1, 1);
    expect(bezier(0.8)).toBeCloseTo(1.1, 1);
    expect(bezier(1)).toBeCloseTo(1);
  });

  it('should return linear easing function if the input is not a known function', () => {
    // @ts-expect-error typescript correctly highlights that the input is invalid
    const bezier = configBezier('invalid');
    expect(bezier).toBeInstanceOf(Function);
    expect(bezier(0)).toBe(0);
    expect(bezier(0.25)).toBeCloseTo(0.25, 4);
    expect(bezier(0.5)).toBeCloseTo(0.5, 4);
    expect(bezier(0.75)).toBeCloseTo(0.75, 4);
    expect(bezier(1)).toBe(1);
  });
});

describe('createSpringEasing', () => {
  it('should return a spring function with default config', () => {
    const spring = createSpringEasing();
    expect(spring).toBeInstanceOf(Function);

    // Test stepper with some inputs
    const t0 = spring(0);
    expect(t0).toBeCloseTo(0, 3);

    const t1 = spring(0.1);
    expect(t1).toBeCloseTo(1.1044, 3);

    // spring with basic settings settles quite fast
    const t2 = spring(0.5);
    expect(t2).toBeCloseTo(1.0028, 3);

    const t3 = spring(0.8);
    expect(t3).toBeCloseTo(1, 3);

    const t4 = spring(0.9);
    expect(t4).toBeCloseTo(1, 3);

    const tFinal = spring(1);
    expect(tFinal).toBe(1);
  });

  it('should handle custom config', () => {
    const customSpring = createSpringEasing({ stiff: 200, damping: 2 });

    const t0 = customSpring(0);
    expect(t0).toBeCloseTo(0, 3);

    // This custom config creates a much bouncier spring, so we expect it to overshoot significantly at the start
    const t1 = customSpring(0.1);
    expect(t1).toBeCloseTo(0.6967, 3);

    const t2 = customSpring(0.3);
    expect(t2).toBeCloseTo(1.0205, 3);

    // by the half of the animation done, even the more dynamic spring begins to settle
    const t3 = customSpring(0.5);
    expect(t3).toBeCloseTo(1.0089, 3);

    const t4 = customSpring(0.9);
    expect(t4).toBeCloseTo(0.9998, 3);

    const tFinal = customSpring(1);
    expect(tFinal).toBe(1);
  });
});

describe('configEasing', () => {
  it('should return the correct bezier function for named easing', () => {
    const easing = createEasingFunction('ease');
    expect(easing).toBeInstanceOf(Function);
  });

  it('should return spring function', () => {
    const spring = createEasingFunction('spring');
    assertNotNull(spring);
    expect(spring).toBeInstanceOf(Function);
    expect(spring(0.5)).toBeCloseTo(1.00289, 3);
  });

  it('should handle cubic-bezier input', () => {
    const bezier = createEasingFunction('cubic-bezier(0.42,0,0.58,1)');
    assertNotNull(bezier);
    expect(bezier).toBeInstanceOf(Function);
    expect(bezier(0.5)).toEqual(0.5);
  });

  it('should return null for invalid inputs', () => {
    // @ts-expect-error typescript correctly highlights that the input is invalid
    const result = createEasingFunction('invalid');
    expect(result).toBeNull();
  });

  it('should handle function inputs', () => {
    const customFunc = () => 7;
    const result = createEasingFunction(customFunc);
    expect(result).toBe(customFunc);
  });
});
