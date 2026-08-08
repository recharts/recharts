import { describe, it, expect } from 'vitest';
import { resetZoom, setAxisViewport, setZoom, zoomReducer, ZoomState } from '../../src/state/zoomSlice';
import { FULL_VIEWPORT, MIN_VIEWPORT_WIDTH, getViewportWidth } from '../../src/util/zoom/viewport';

const initialState: ZoomState = { x: FULL_VIEWPORT, y: FULL_VIEWPORT };

describe('zoomSlice', () => {
  it('starts fully zoomed out', () => {
    expect(zoomReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  describe('setAxisViewport', () => {
    it('updates a single dimension and leaves the other untouched', () => {
      const state = zoomReducer(
        initialState,
        setAxisViewport({ dimension: 'x', viewport: { startRatio: 0.2, endRatio: 0.6 } }),
      );
      expect(state.x).toEqual({ startRatio: 0.2, endRatio: 0.6 });
      expect(state.y).toEqual(FULL_VIEWPORT);
    });

    it('normalizes the incoming viewport', () => {
      const state = zoomReducer(
        initialState,
        setAxisViewport({ dimension: 'y', viewport: { startRatio: 0.9, endRatio: 0.1 } }),
      );
      // reversed ratios get swapped
      expect(state.y).toEqual({ startRatio: 0.1, endRatio: 0.9 });
    });

    it('clamps an out-of-range viewport', () => {
      const state = zoomReducer(
        initialState,
        setAxisViewport({ dimension: 'x', viewport: { startRatio: -1, endRatio: 2 } }),
      );
      expect(state.x).toEqual(FULL_VIEWPORT);
    });
  });

  describe('setZoom', () => {
    it('replaces both viewports', () => {
      const state = zoomReducer(
        initialState,
        setZoom({ x: { startRatio: 0.1, endRatio: 0.4 }, y: { startRatio: 0.3, endRatio: 0.5 } }),
      );
      expect(state).toEqual({ x: { startRatio: 0.1, endRatio: 0.4 }, y: { startRatio: 0.3, endRatio: 0.5 } });
    });

    it('normalizes both viewports', () => {
      const state = zoomReducer(
        initialState,
        setZoom({ x: { startRatio: 0.5, endRatio: 0.5 }, y: { startRatio: 2, endRatio: -1 } }),
      );
      expect(getViewportWidth(state.x)).toBeCloseTo(MIN_VIEWPORT_WIDTH);
      expect(state.y).toEqual(FULL_VIEWPORT);
    });
  });

  describe('resetZoom', () => {
    it('restores the full viewport', () => {
      const zoomed = zoomReducer(
        initialState,
        setZoom({ x: { startRatio: 0.1, endRatio: 0.4 }, y: { startRatio: 0.3, endRatio: 0.5 } }),
      );
      expect(zoomReducer(zoomed, resetZoom())).toEqual(initialState);
    });
  });
});
