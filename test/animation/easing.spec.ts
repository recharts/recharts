import { describe, it, expect } from 'vitest';
import { configBezier, configEasing, configSpring } from '../../src/animation/easing';

describe('configBezier', () => {
  it('should return a cubic-bezier function for valid arguments', () => {
    const bezier = configBezier(0.42, 0, 0.58, 1);
    expect(typeof bezier).toBe('function');
    expect(bezier(0.5)).toBeCloseTo(0.5, 4);
  });

  it('should handle named easing functions', () => {
    const ease = configBezier('ease');
    const linear = configBezier('linear');

    expect(ease).toBeInstanceOf(Function);
    expect(linear).toBeInstanceOf(Function);

    expect(ease(0.5)).toEqual(0.8024033875848569);
    expect(linear(0.5)).toBeCloseTo(0.5, 4);
  });

  it('should handle invalid inputs and default return bezier function', () => {
    const bezier = configBezier('invalid');
    expect(bezier).toBeInstanceOf(Function);
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
