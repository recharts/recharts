import { describe, it, expect } from 'vitest';
import { createRechartsStore } from '../../../src/state/store';
import { setAxisViewport } from '../../../src/state/zoomSlice';
import { setZoomAxis, setZoomLimits } from '../../../src/state/zoomSettingsSlice';
import {
  selectAxisViewport,
  selectIsZoomed,
  selectSharedZoomAxis,
  selectSharedZoomLimits,
  selectZoom,
} from '../../../src/state/selectors/zoomSelectors';
import { FULL_VIEWPORT } from '../../../src/util/zoom/viewport';

describe('zoom selectors', () => {
  it('selectZoom returns the full viewport by default', () => {
    const store = createRechartsStore();
    expect(selectZoom(store.getState())).toEqual({ x: FULL_VIEWPORT, y: FULL_VIEWPORT });
  });

  it('selectAxisViewport returns the viewport for a single dimension', () => {
    const store = createRechartsStore();
    store.dispatch(setAxisViewport({ dimension: 'x', viewport: { startRatio: 0.2, endRatio: 0.6 } }));
    expect(selectAxisViewport(store.getState(), 'x')).toEqual({ startRatio: 0.2, endRatio: 0.6 });
    expect(selectAxisViewport(store.getState(), 'y')).toEqual(FULL_VIEWPORT);
  });

  it('selectSharedZoomLimits returns the chart-level zoom limits', () => {
    const store = createRechartsStore();
    const limits = { minZoom: 2, maxZoom: 10 };

    expect(selectSharedZoomLimits(store.getState())).toBeNull();

    store.dispatch(setZoomLimits(limits));

    expect(selectSharedZoomLimits(store.getState())).toEqual(limits);
  });

  it('selectSharedZoomAxis returns the chart-level zoom axis', () => {
    const store = createRechartsStore();

    expect(selectSharedZoomAxis(store.getState())).toBeNull();

    store.dispatch(setZoomAxis('x'));

    expect(selectSharedZoomAxis(store.getState())).toBe('x');
  });

  describe('selectIsZoomed', () => {
    it('is false when fully zoomed out', () => {
      const store = createRechartsStore();
      expect(selectIsZoomed(store.getState())).toBe(false);
    });

    it('is true when the x dimension is zoomed', () => {
      const store = createRechartsStore();
      store.dispatch(setAxisViewport({ dimension: 'x', viewport: { startRatio: 0.2, endRatio: 0.6 } }));
      expect(selectIsZoomed(store.getState())).toBe(true);
    });

    it('is true when the y dimension is zoomed', () => {
      const store = createRechartsStore();
      store.dispatch(setAxisViewport({ dimension: 'y', viewport: { startRatio: 0, endRatio: 0.5 } }));
      expect(selectIsZoomed(store.getState())).toBe(true);
    });
  });
});
