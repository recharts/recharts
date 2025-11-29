import { describe, it, expect } from 'vitest';
import { round, roundTemplateLiteral } from '../../src/util/round';

describe('round', () => {
  it('should round a number to default precision of 4', () => {
    expect(round(1.23456789)).toBe(1.2346);
    expect(round(5.67891234)).toBe(5.6789);
  });

  it('should round a number to specified precision', () => {
    expect(round(1.23456789, 0)).toBe(1);
    expect(round(1.23456789, 1)).toBe(1.2);
    expect(round(1.23456789, 2)).toBe(1.23);
    expect(round(1.23456789, 3)).toBe(1.235);
    expect(round(1.23456789, 5)).toBe(1.23457);
  });

  it('should handle negative numbers', () => {
    expect(round(-1.23456789, 4)).toBe(-1.2346);
    expect(round(-5.6789, 2)).toBe(-5.68);
  });

  it('should convert -0 to 0', () => {
    expect(round(-0.0001, 3)).toBe(0);
    expect(Object.is(round(-0.0001, 3), -0)).toBe(false);
    expect(Object.is(round(-0.0001, 3), 0)).toBe(true);
  });

  it('should handle zero', () => {
    expect(round(0)).toBe(0);
    expect(round(0, 2)).toBe(0);
  });

  it('should handle integers', () => {
    expect(round(42)).toBe(42);
    expect(round(100, 2)).toBe(100);
  });

  it('should handle very small numbers', () => {
    expect(round(0.00001, 4)).toBe(0);
    expect(round(0.00001, 5)).toBe(0.00001);
    expect(round(0.00001, 6)).toBe(0.00001);
    expect(round(1e-15, 6)).toBe(0);
  });

  it('should handle very large numbers', () => {
    // eslint-disable-next-line no-loss-of-precision
    expect(round(123456789.123456789, 2)).toBe(123456789.12);
    expect(round(999999.999999, 4)).toBe(1000000);
  });

  it('should handle edge case rounding', () => {
    expect(round(1.5, 0)).toBe(2);
    expect(round(2.5, 0)).toBe(3);
    expect(round(-1.5, 0)).toBe(-1);
    expect(round(-2.5, 0)).toBe(-2);
  });
});

describe('roundTemplateLiteral', () => {
  it('should round values in template literal', () => {
    const result = roundTemplateLiteral`M${10.123456},${20.987654}L${30.555555},${40.444444}`;
    expect(result).toBe('M10.1235,20.9877L30.5556,40.4444');
  });

  it('should handle template with no values', () => {
    const result = roundTemplateLiteral`M10,20L30,40`;
    expect(result).toBe('M10,20L30,40');
  });

  it('should handle template with single value', () => {
    const result = roundTemplateLiteral`M${10.123456},20`;
    expect(result).toBe('M10.1235,20');
  });

  it('should handle negative values', () => {
    const result = roundTemplateLiteral`M${-10.123456},${-20.987654}`;
    expect(result).toBe('M-10.1235,-20.9877');
  });

  it('should handle zero values', () => {
    const result = roundTemplateLiteral`M${0},${0}L${0.0001},${-0.0001}`;
    expect(result).toBe('M0,0L0.0001,-0.0001');
  });

  it('should handle integers', () => {
    const result = roundTemplateLiteral`M${10},${20}L${30},${40}`;
    expect(result).toBe('M10,20L30,40');
  });

  it('should handle SVG path with multiple commands', () => {
    const result = roundTemplateLiteral`M${10.1111},${20.2222}L${30.3333},${40.4444}Q${50.5555},${60.6666},${70.7777},${80.8888}Z`;
    expect(result).toBe('M10.1111,20.2222L30.3333,40.4444Q50.5555,60.6666,70.7777,80.8888Z');
  });

  it('should handle empty string parts', () => {
    const x = 10.12345;
    const y = 20.6789;
    const result = roundTemplateLiteral`${x},${y}`;
    expect(result).toBe('10.1235,20.6789');
  });

  it('should preserve spacing and formatting', () => {
    const result = roundTemplateLiteral`M ${10.123456} ${20.987654} L ${30.555555} ${40.444444}`;
    expect(result).toBe('M 10.1235 20.9877 L 30.5556 40.4444');
  });

  it('should allow string values without rounding', () => {
    const result = roundTemplateLiteral`M${10.123456},${'20.987654'}L${'30.555555'},${40.444444}`;
    expect(result).toBe('M10.1235,20.987654L30.555555,40.4444');
  });
});
