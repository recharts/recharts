import { describe, it, expect } from 'vitest';
import { setZoomAxis, setZoomLimits, ZoomSettingsState, zoomSettingsReducer } from '../../src/state/zoomSettingsSlice';
import { ZoomAxis } from '../../src/util/zoom/ZoomOptions';

const initialState: ZoomSettingsState = {
  limits: null,
  axis: null,
};

describe('zoomSettingsSlice', () => {
  it('starts without shared zoom settings', () => {
    expect(zoomSettingsReducer(undefined, { type: '@@INIT' })).toEqual(initialState);
  });

  describe('setZoomLimits', () => {
    it('updates the shared zoom limits', () => {
      const firstLimits = { minZoom: 1, maxZoom: 25 };
      const nextLimits = { minZoom: 2, maxZoom: 10 };

      const state = zoomSettingsReducer(initialState, setZoomLimits(firstLimits));
      expect(state.limits).toEqual(firstLimits);

      const updated = zoomSettingsReducer(state, setZoomLimits(nextLimits));
      expect(updated.limits).toEqual(nextLimits);
    });

    it('clears the shared zoom limits', () => {
      const state = zoomSettingsReducer(initialState, setZoomLimits({ minZoom: 1, maxZoom: 25 }));

      expect(zoomSettingsReducer(state, setZoomLimits(null))).toEqual(initialState);
    });

    it('does not change state for redundant limits', () => {
      const limits = { minZoom: 1, maxZoom: 25 };
      const state = zoomSettingsReducer(initialState, setZoomLimits(limits));

      const repeated = zoomSettingsReducer(state, setZoomLimits({ ...limits }));

      expect(repeated).toBe(state);
    });
  });

  describe('setZoomAxis', () => {
    it('updates the shared zoom axis', () => {
      let state = initialState;
      const axes: ZoomAxis[] = ['x', 'y', 'xy'];

      axes.forEach(axis => {
        state = zoomSettingsReducer(state, setZoomAxis(axis));
        expect(state.axis).toBe(axis);
      });
    });

    it('clears the shared zoom axis', () => {
      const state = zoomSettingsReducer(initialState, setZoomAxis('xy'));

      expect(zoomSettingsReducer(state, setZoomAxis(null))).toEqual(initialState);
    });
  });
});
