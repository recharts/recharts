import { describe, expect, it } from 'vitest';
import { configBezier } from '../../src/animation/easing';

describe('CSS named easing curves', () => {
  it.each([
    ['ease-out', [0, 0, 0.58, 1]],
    ['ease-in-out', [0.42, 0, 0.58, 1]],
  ] as const)('matches the explicit CSS control points for %s', (name, points) => {
    const named = configBezier(name);
    const explicit = configBezier(...points);
    for (const progress of [0.1, 0.25, 0.5, 0.75, 0.9]) {
      expect(named(progress)).toBeCloseTo(explicit(progress), 8);
    }
  });
});
