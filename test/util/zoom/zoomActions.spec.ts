import { describe, it, expect } from 'vitest';
import {
  clampDimensionToLimits,
  clampDimensionToLimitsAnchored,
  panDimension,
  resetDimensionWithLimits,
  selectDimension,
  zoomDimension,
  ZoomLimits,
} from '../../../src/util/zoom/zoomActions';
import { AxisViewport, FULL_VIEWPORT, getViewportWidth } from '../../../src/util/zoom/viewport';

const NO_LIMITS: ZoomLimits = { minZoom: 1, maxZoom: 1000 };

function expectViewportCloseTo(actual: AxisViewport, expected: AxisViewport) {
  expect(actual.startRatio).toBeCloseTo(expected.startRatio, 10);
  expect(actual.endRatio).toBeCloseTo(expected.endRatio, 10);
}

describe('zoomActions', () => {
  describe('zoomDimension', () => {
    it('zooms in around the centre', () => {
      expectViewportCloseTo(zoomDimension(FULL_VIEWPORT, 2, 0.5, NO_LIMITS), { startRatio: 0.25, endRatio: 0.75 });
    });

    it('keeps the focus point fixed when zooming a sub-window', () => {
      const current: AxisViewport = { startRatio: 0.2, endRatio: 0.6 }; // width 0.4
      // focus at the left edge of the window (plotFocus 0) should stay put
      const result = zoomDimension(current, 2, 0, NO_LIMITS);
      expect(result.startRatio).toBeCloseTo(0.2);
      expect(getViewportWidth(result)).toBeCloseTo(0.2);
    });

    it('clamps to maxZoom', () => {
      const result = zoomDimension(FULL_VIEWPORT, 1000, 0.5, { minZoom: 1, maxZoom: 4 });
      expect(getViewportWidth(result)).toBeCloseTo(0.25); // 1 / maxZoom
    });

    it('clamps to minZoom when zooming out', () => {
      const result = zoomDimension({ startRatio: 0.4, endRatio: 0.6 }, 0.001, 0.5, { minZoom: 1, maxZoom: 25 });
      expect(getViewportWidth(result)).toBeCloseTo(1); // cannot grow past the full axis
    });
  });

  describe('panDimension', () => {
    it('pans by a fraction of the visible window', () => {
      expectViewportCloseTo(panDimension({ startRatio: 0.2, endRatio: 0.5 }, 0.1), {
        startRatio: 0.23,
        endRatio: 0.53,
      });
    });

    it('cannot pan the full window', () => {
      expectViewportCloseTo(panDimension(FULL_VIEWPORT, 0.3), FULL_VIEWPORT);
    });
  });

  describe('selectDimension', () => {
    it('zooms into the selected fraction of the window', () => {
      expectViewportCloseTo(selectDimension(FULL_VIEWPORT, 0.25, 0.5, NO_LIMITS), { startRatio: 0.25, endRatio: 0.5 });
    });

    it('is order independent', () => {
      expectViewportCloseTo(selectDimension(FULL_VIEWPORT, 0.5, 0.25, NO_LIMITS), { startRatio: 0.25, endRatio: 0.5 });
    });

    it('maps the selection through the current window', () => {
      // window [0.2, 0.6] (width 0.4); select [0, 0.5] of it -> [0.2, 0.4]
      expectViewportCloseTo(selectDimension({ startRatio: 0.2, endRatio: 0.6 }, 0, 0.5, NO_LIMITS), {
        startRatio: 0.2,
        endRatio: 0.4,
      });
    });

    it('respects maxZoom for a tiny selection', () => {
      const result = selectDimension(FULL_VIEWPORT, 0.5, 0.5, { minZoom: 1, maxZoom: 4 });
      expect(getViewportWidth(result)).toBeCloseTo(0.25);
    });
  });
});

describe('clampDimensionToLimits', () => {
  const limits: ZoomLimits = { minZoom: 2, maxZoom: 10 };

  it('returns the viewport unchanged when already within the limits', () => {
    const viewport: AxisViewport = { startRatio: 0.2, endRatio: 0.5 };
    expect(clampDimensionToLimits(viewport, limits)).toBe(viewport);
  });

  it('shrinks an over-wide viewport around its centre', () => {
    const result = clampDimensionToLimits({ startRatio: 0.1, endRatio: 0.9 }, limits);
    expect(getViewportWidth(result)).toBeCloseTo(0.5);
    expect((result.startRatio + result.endRatio) / 2).toBeCloseTo(0.5);
  });

  it('grows an over-narrow viewport around its centre', () => {
    const result = clampDimensionToLimits({ startRatio: 0.49, endRatio: 0.51 }, limits);
    expect(getViewportWidth(result)).toBeCloseTo(0.1);
    expect((result.startRatio + result.endRatio) / 2).toBeCloseTo(0.5);
  });

  it('stays within [0, 1] when the centre sits near an edge', () => {
    const result = clampDimensionToLimits({ startRatio: 0, endRatio: 0.9 }, limits);
    expect(result.startRatio).toBeGreaterThanOrEqual(0);
    expect(getViewportWidth(result)).toBeCloseTo(0.5);
  });
});

describe('clampDimensionToLimitsAnchored', () => {
  const limits: ZoomLimits = { minZoom: 1, maxZoom: 4 };

  it('keeps the start edge when the end edge moved (traveller drag past maxZoom)', () => {
    const previous: AxisViewport = { startRatio: 0.2, endRatio: 0.6 };
    const next: AxisViewport = { startRatio: 0.2, endRatio: 0.3 }; // width 0.1 < 1/maxZoom
    const result = clampDimensionToLimitsAnchored(next, previous, limits);
    expect(result.startRatio).toBeCloseTo(0.2);
    expect(getViewportWidth(result)).toBeCloseTo(0.25);
  });

  it('keeps the end edge when the start edge moved', () => {
    const previous: AxisViewport = { startRatio: 0.2, endRatio: 0.6 };
    const next: AxisViewport = { startRatio: 0.55, endRatio: 0.6 };
    const result = clampDimensionToLimitsAnchored(next, previous, limits);
    expect(result.endRatio).toBeCloseTo(0.6);
    expect(getViewportWidth(result)).toBeCloseTo(0.25);
  });

  it('passes through a width-preserving move (slide) untouched', () => {
    const previous: AxisViewport = { startRatio: 0.2, endRatio: 0.6 };
    const next: AxisViewport = { startRatio: 0.3, endRatio: 0.7 };
    expect(clampDimensionToLimitsAnchored(next, previous, limits)).toBe(next);
  });
});

describe('resetDimensionWithLimits', () => {
  it('returns the full axis when minZoom allows it', () => {
    const result = resetDimensionWithLimits({ minZoom: 1, maxZoom: 25 });
    expect(result.startRatio).toBe(0);
    expect(result.endRatio).toBe(1);
  });

  it('returns a centered 1/minZoom window when the full view is not allowed', () => {
    const result = resetDimensionWithLimits({ minZoom: 4, maxZoom: 25 });
    expect(getViewportWidth(result)).toBeCloseTo(0.25);
    expect((result.startRatio + result.endRatio) / 2).toBeCloseTo(0.5);
  });
});
