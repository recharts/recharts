import { describe, it, expect } from 'vitest';
import {
  AxisViewport,
  clampRatio,
  clampViewport,
  FULL_VIEWPORT,
  getViewportWidth,
  isFullViewport,
  MIN_VIEWPORT_WIDTH,
  panViewport,
  zoomViewportAround,
} from '../../../src/util/zoom/viewport';

function expectViewportCloseTo(actual: AxisViewport, expected: AxisViewport) {
  expect(actual.startRatio).toBeCloseTo(expected.startRatio, 10);
  expect(actual.endRatio).toBeCloseTo(expected.endRatio, 10);
}

describe('viewport math', () => {
  describe('FULL_VIEWPORT', () => {
    it('covers the whole axis', () => {
      expect(FULL_VIEWPORT).toEqual({ startRatio: 0, endRatio: 1 });
      expect(getViewportWidth(FULL_VIEWPORT)).toBe(1);
      expect(isFullViewport(FULL_VIEWPORT)).toBe(true);
    });
  });

  describe('clampRatio', () => {
    it('keeps values already inside [0, 1]', () => {
      expect(clampRatio(0)).toBe(0);
      expect(clampRatio(0.42)).toBe(0.42);
      expect(clampRatio(1)).toBe(1);
    });

    it('clamps values outside [0, 1]', () => {
      expect(clampRatio(-0.5)).toBe(0);
      expect(clampRatio(2)).toBe(1);
    });

    it('treats NaN as 0', () => {
      expect(clampRatio(Number.NaN)).toBe(0);
    });
  });

  describe('getViewportWidth', () => {
    it('returns the visible fraction', () => {
      expect(getViewportWidth({ startRatio: 0.25, endRatio: 0.75 })).toBeCloseTo(0.5);
    });
  });

  describe('isFullViewport', () => {
    it('is true for the full viewport, false once zoomed', () => {
      expect(isFullViewport({ startRatio: 0, endRatio: 1 })).toBe(true);
      expect(isFullViewport({ startRatio: 0.1, endRatio: 1 })).toBe(false);
      expect(isFullViewport({ startRatio: 0, endRatio: 0.9 })).toBe(false);
    });
  });

  describe('clampViewport', () => {
    it('leaves a valid viewport untouched', () => {
      const viewport: AxisViewport = { startRatio: 0.2, endRatio: 0.8 };
      expect(clampViewport(viewport)).toEqual(viewport);
    });

    it('clamps ratios into [0, 1]', () => {
      expect(clampViewport({ startRatio: -0.3, endRatio: 1.4 })).toEqual({ startRatio: 0, endRatio: 1 });
    });

    it('swaps reversed ratios', () => {
      expect(clampViewport({ startRatio: 0.8, endRatio: 0.2 })).toEqual({ startRatio: 0.2, endRatio: 0.8 });
    });

    it('enforces a minimum width', () => {
      const result = clampViewport({ startRatio: 0.5, endRatio: 0.5 });
      expect(getViewportWidth(result)).toBeCloseTo(MIN_VIEWPORT_WIDTH);
      expect(result.startRatio).toBeGreaterThanOrEqual(0);
      expect(result.endRatio).toBeLessThanOrEqual(1);
    });

    it('keeps the minimum-width window inside bounds when clamping near an edge', () => {
      const atEnd = clampViewport({ startRatio: 1, endRatio: 1 });
      expect(atEnd.endRatio).toBeLessThanOrEqual(1);
      expect(getViewportWidth(atEnd)).toBeCloseTo(MIN_VIEWPORT_WIDTH);

      const atStart = clampViewport({ startRatio: 0, endRatio: 0 });
      expect(atStart.startRatio).toBeGreaterThanOrEqual(0);
      expect(getViewportWidth(atStart)).toBeCloseTo(MIN_VIEWPORT_WIDTH);
    });
  });

  describe('panViewport', () => {
    it('slides the window while preserving its width', () => {
      const result = panViewport({ startRatio: 0.2, endRatio: 0.5 }, 0.1);
      expectViewportCloseTo(result, { startRatio: 0.3, endRatio: 0.6 });
      expect(getViewportWidth(result)).toBeCloseTo(0.3);
    });

    it('pans towards the start with a negative delta', () => {
      expectViewportCloseTo(panViewport({ startRatio: 0.4, endRatio: 0.6 }, -0.2), { startRatio: 0.2, endRatio: 0.4 });
    });

    it('stops at the end edge instead of revealing empty space', () => {
      const result = panViewport({ startRatio: 0.7, endRatio: 0.9 }, 0.5);
      expectViewportCloseTo(result, { startRatio: 0.8, endRatio: 1 });
    });

    it('stops at the start edge', () => {
      const result = panViewport({ startRatio: 0.1, endRatio: 0.3 }, -0.5);
      expectViewportCloseTo(result, { startRatio: 0, endRatio: 0.2 });
    });

    it('cannot pan a full viewport', () => {
      expect(panViewport(FULL_VIEWPORT, 0.3)).toEqual(FULL_VIEWPORT);
    });
  });

  describe('zoomViewportAround', () => {
    it('zooms in by shrinking the width', () => {
      const result = zoomViewportAround(FULL_VIEWPORT, 2, 0.5);
      expect(getViewportWidth(result)).toBeCloseTo(0.5);
      // Focused on the centre, so the window stays centred.
      expect(result).toEqual({ startRatio: 0.25, endRatio: 0.75 });
    });

    it('keeps the focus point visually fixed', () => {
      const focus = 0.25;
      const result = zoomViewportAround(FULL_VIEWPORT, 2, focus);
      // The focus point should map to the same relative position (25% of the window).
      const relative = (focus - result.startRatio) / getViewportWidth(result);
      expect(relative).toBeCloseTo(0.25);
    });

    it('zooms out by growing the width', () => {
      const zoomedIn: AxisViewport = { startRatio: 0.25, endRatio: 0.75 };
      const result = zoomViewportAround(zoomedIn, 0.5, 0.5);
      expect(getViewportWidth(result)).toBeCloseTo(1);
    });

    it('never grows past the full axis', () => {
      const result = zoomViewportAround({ startRatio: 0.4, endRatio: 0.6 }, 0.01, 0.5);
      expect(result).toEqual(FULL_VIEWPORT);
    });

    it('never shrinks below the minimum width', () => {
      const result = zoomViewportAround(FULL_VIEWPORT, 1e9, 0.5);
      expect(getViewportWidth(result)).toBeCloseTo(MIN_VIEWPORT_WIDTH);
    });

    it('ignores invalid factors', () => {
      const viewport: AxisViewport = { startRatio: 0.2, endRatio: 0.8 };
      expect(zoomViewportAround(viewport, 0, 0.5)).toBe(viewport);
      expect(zoomViewportAround(viewport, -1, 0.5)).toBe(viewport);
      expect(zoomViewportAround(viewport, Number.POSITIVE_INFINITY, 0.5)).toBe(viewport);
    });

    it('stays inside [0, 1] when focusing near an edge', () => {
      const result = zoomViewportAround(FULL_VIEWPORT, 2, 1);
      expect(result.endRatio).toBeLessThanOrEqual(1);
      expect(result.startRatio).toBeGreaterThanOrEqual(0);
      expect(getViewportWidth(result)).toBeCloseTo(0.5);
    });
  });
});
