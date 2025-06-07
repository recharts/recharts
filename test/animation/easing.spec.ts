import { describe, it, expect } from 'vitest';
import { configBezier, configEasing, configSpring } from '../../src/animation/easing';

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

  // perhaps this shouldn't return a function, but rather throw an error - the output is useless anyway
  it('should return bezier function that returns all NaNs if the input is not a known function', () => {
    // @ts-expect-error typescript correctly highlights that the input is invalid
    const bezier = configBezier('invalid');
    expect(bezier).toBeInstanceOf(Function);
    expect(bezier(0)).toBe(NaN);
    expect(bezier(0.25)).toBe(NaN);
    expect(bezier(0.5)).toBe(NaN);
    expect(bezier(0.75)).toBe(NaN);
    expect(bezier(1)).toBe(NaN);
  });
});

describe('configSpring', () => {
  it('should return a stepper function with default config', () => {
    const spring = configSpring();
    expect(typeof spring).toBe('function');
    expect(spring.isStepper).toBe(true);
    expect(spring.dt).toBe(17);

    // Test stepper with some inputs
    const [newX, newV] = spring(0, 1, 0);
    expect(newX).toBeDefined();
    expect(newV).toBeDefined();
  });

  it('should handle custom config', () => {
    const customSpring = configSpring({ stiff: 200, damping: 10, dt: 20 });
    expect(customSpring.dt).toBe(20);

    // Test stepper with some inputs
    const [newX, newV] = customSpring(0, 1, 0);
    expect(newX).toBeDefined();
    expect(newV).toBeDefined();
  });
});

describe('configEasing', () => {
  it('should return the correct bezier function for named easing', () => {
    const easing = configEasing('ease');
    expect(easing).toBeInstanceOf(Function);
  });

  it('should return the correct spring function', () => {
    const spring = configEasing('spring');
    expect(spring).toBeInstanceOf(Function);
    expect(spring.isStepper).toBe(true);
  });

  it('should handle cubic-bezier input', () => {
    const bezier = configEasing('cubic-bezier(0.42,0,0.58,1)');
    expect(bezier).toBeInstanceOf(Function);
    expect(bezier(0.5)).toEqual(0.5);
  });

  it('should return null for invalid inputs', () => {
    const result = configEasing('invalid');
    expect(result).toBeNull();
  });

  it('should handle function inputs', () => {
    const customFunc = () => {};
    const result = configEasing(customFunc);
    expect(result).toBe(customFunc);
  });
});
