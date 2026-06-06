import { describe, it, expect } from 'vitest';
import { panDimension, selectDimension, zoomDimension, ZoomLimits } from '../../../src/util/zoom/zoomActions';
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
