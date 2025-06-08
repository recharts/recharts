import { describe, it, expect } from 'vitest';
import {
  ACCURACY,
  BezierEasingFunction,
  configBezier,
  configEasing,
  configSpring,
  EasingFunction,
} from '../../src/animation/easing';

function assertIsBezierFunction(easing: EasingFunction): asserts easing is BezierEasingFunction {
  if (typeof easing !== 'function' || easing.isStepper) {
    throw new Error('Expected a Bezier easing function');
  }
}

function assertIsSpringFunction(easing: EasingFunction): asserts easing is EasingFunction & { isStepper: true } {
  if (typeof easing !== 'function' || !easing.isStepper) {
    throw new Error('Expected a Spring easing function');
  }
}

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
    expect(newX).toBeCloseTo(0, 3);
    expect(newV).toBeCloseTo(1.7, 3);

    const [midX, midV] = spring(0.1, 1, 0);
    expect(midX).toBeCloseTo(0.1, 3);
    expect(midV).toBeCloseTo(1.53, 3);

    const [finalX, finalV] = spring(0.5, 1, 0);
    expect(finalX).toBeCloseTo(0.5, 3);
    expect(finalV).toBeCloseTo(0.85, 3);
  });

  it('should handle custom config', () => {
    const customSpring = configSpring({ stiff: 200, damping: 10, dt: 20 });
    expect(customSpring.dt).toBe(20);

    // Test stepper with some inputs
    const [newX, newV] = customSpring(0, 1, 0);
    expect(newX).toBeCloseTo(0, 3);
    expect(newV).toBeCloseTo(4, 3);

    const [midX, midV] = customSpring(0.1, 1, 0);
    expect(midX).toBeCloseTo(0.1, 3);
    expect(midV).toBeCloseTo(3.6, 3);

    const [finalX, finalV] = customSpring(0.5, 1, 0);
    expect(finalX).toBeCloseTo(0.5, 3);
    expect(finalV).toBeCloseTo(2, 3);
  });

  it('should settle at destination with zero velocity', () => {
    const spring = configSpring();
    let x = 0;
    let v = 0;
    const destX = 1;

    // Run the spring simulation until it settles
    for (let i = 0; i < 100; i++) {
      [x, v] = spring(x, destX, v);
      // If settled, we should break early
      if (Math.abs(x - destX) < ACCURACY && Math.abs(v) < ACCURACY) {
        break;
      }
    }

    // The spring should have settled
    expect(x).toBeCloseTo(destX, 2);
    expect(v).toBeCloseTo(0, 1);
  });
});

describe('configEasing', () => {
  it('should return the correct bezier function for named easing', () => {
    const easing = configEasing('ease');
    expect(easing).toBeInstanceOf(Function);
  });

  it('should return stepper function', () => {
    const spring = configEasing('spring');
    expect(spring).toBeInstanceOf(Function);
    expect(spring.isStepper).toBe(true);
    assertIsSpringFunction(spring);
    expect(spring(0, 1, 0)).toEqual([0, 1.7]);
  });

  it('should handle cubic-bezier input', () => {
    const bezier = configEasing('cubic-bezier(0.42,0,0.58,1)');
    expect(bezier).toBeInstanceOf(Function);
    assertIsBezierFunction(bezier);
    expect(bezier.isStepper).toBe(false);
    expect(bezier(0.5)).toEqual(0.5);
  });

  it('should return null for invalid inputs', () => {
    // @ts-expect-error typescript correctly highlights that the input is invalid
    const result = configEasing('invalid');
    expect(result).toBeNull();
  });

  it('should handle function inputs', () => {
    const customFunc = () => 7;
    customFunc.isStepper = false as const; // Simulate a bezier function
    const result = configEasing(customFunc);
    expect(result).toBe(customFunc);
  });
});
