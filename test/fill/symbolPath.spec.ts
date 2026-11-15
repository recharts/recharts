import { describe, expect, it } from 'vitest';
import {
  symbol,
  symbolCircle,
  symbolCross,
  symbolDiamond,
  symbolSquare,
  symbolStar,
  symbolTriangle,
  symbolWye,
  SymbolType,
} from 'victory-vendor/d3-shape';
import { getSymbolPath } from '../../src/fill/symbolPath';
import { patterns } from '../../src';

describe('getSymbolPath', () => {
  it.each([
    ['cross', symbolCross],
    ['diamond', symbolDiamond],
    ['star', symbolStar],
    ['triangle', symbolTriangle],
    ['wye', symbolWye],
  ])('should draw the %s the same as d3 does, when centered at the origin', (_name, symbolType) => {
    expect(getSymbolPath(symbolType, 24, 0, 0)).toBe(symbol(symbolType, 24)());
  });

  it('should move every point by the center', () => {
    const atOrigin = getSymbolPath(symbolTriangle, 24, 0, 0);
    const moved = getSymbolPath(symbolTriangle, 24, 10, 20);
    const pointsAtOrigin = Array.from(atOrigin.matchAll(/(-?[\d.e-]+),(-?[\d.e-]+)/g));
    const movedPoints = Array.from(moved.matchAll(/(-?[\d.e-]+),(-?[\d.e-]+)/g));
    expect(movedPoints).toHaveLength(pointsAtOrigin.length);
    movedPoints.forEach((point, index) => {
      expect(Number(point[1])).toBeCloseTo(Number(pointsAtOrigin[index][1]) + 10);
      expect(Number(point[2])).toBeCloseTo(Number(pointsAtOrigin[index][2]) + 20);
    });
  });

  it('should draw the square as a rectangle around the center', () => {
    expect(getSymbolPath(symbolSquare, 16, 3, 3)).toBe('M1,1h4v4h-4Z');
  });

  it('should draw the circle as two half arcs that end where they start', () => {
    expect(getSymbolPath(symbolCircle, Math.PI * 4, 3, 3)).toBe('M5,3A2,2,0,1,1,1,3A2,2,0,1,1,5,3');
  });

  it('should draw partial arcs and curves from custom symbol types', () => {
    const custom: SymbolType = {
      draw(context) {
        context.moveTo(1, 0);
        context.arc(0, 0, 1, 0, Math.PI / 2);
        context.arc(0, 0, 1, Math.PI / 2, 0, true);
        context.quadraticCurveTo(1, 1, 2, 2);
        context.bezierCurveTo(1, 1, 2, 2, 3, 3);
        context.closePath();
      },
    };
    const path = getSymbolPath(custom, 1, 0, 0);
    expect(path).toBe('M1,0A1,1,0,0,1,0,1A1,1,0,0,0,1,0Q1,1,2,2C1,1,2,2,3,3Z');
  });

  it('should refuse canvas methods that no symbol uses', () => {
    const usesArcTo: SymbolType = { draw: context => context.arcTo(0, 0, 1, 1, 1) };
    const usesEllipse: SymbolType = { draw: context => context.ellipse(0, 0, 1, 1, 0, 0, 1) };
    expect(() => getSymbolPath(usesArcTo, 1, 0, 0)).toThrow('arcTo');
    expect(() => getSymbolPath(usesEllipse, 1, 0, 0)).toThrow('ellipse');
  });
});

describe('symbol patterns', () => {
  it.each([
    ['circle', symbolCircle],
    ['cross', symbolCross],
    ['diamond', symbolDiamond],
    ['square', symbolSquare],
    ['star', symbolStar],
    ['triangle', symbolTriangle],
    ['wye', symbolWye],
  ] as const)('should draw two filled %s symbols in staggered rows of a 12px tile', (name, symbolType) => {
    const value = patterns[name];
    expect(value.width).toBe(12);
    expect(value.height).toBe(12);
    expect(value).not.toHaveProperty('strokeWidth');
    expect(value.path).toEqual([getSymbolPath(symbolType, 24, 3, 3), getSymbolPath(symbolType, 24, 9, 9)]);
  });

  it('should make dots the same pattern as circle', () => {
    expect(patterns.dots).toBe(patterns.circle);
  });
});
