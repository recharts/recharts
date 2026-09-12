import * as React from 'react';
import { act, render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, it, vi } from 'vitest';
import { ZoomStateSync } from '../../src/chart/ZoomStateSync';
import { createRechartsStore, RechartsRootState } from '../../src/state/store';
import { RechartsReduxContext } from '../../src/state/RechartsReduxContext';
import { PanoramaContextProvider } from '../../src/context/PanoramaContext';
import { setZoom } from '../../src/state/zoomSlice';
import { resolveZoomOptions, ZoomOptions, ZoomViewport } from '../../src/util/zoom/ZoomOptions';
import { FULL_VIEWPORT } from '../../src/util/zoom/viewport';

const HALF: ZoomViewport = { x: { start: 0, end: 0.5 }, y: { start: 0, end: 1 } };
const QUARTER: ZoomViewport = { x: { start: 0, end: 0.25 }, y: { start: 0, end: 1 } };
const CENTERED_QUARTER: ZoomViewport = { x: { start: 0.375, end: 0.625 }, y: { start: 0, end: 1 } };

function renderSync(zoom: ZoomOptions, { panorama = false }: { panorama?: boolean } = {}) {
  const store = createRechartsStore();
  const Sync = ({ options }: { options: ZoomOptions }): React.ReactElement => {
    const body = <ZoomStateSync options={resolveZoomOptions(options)} />;
    return panorama ? <PanoramaContextProvider>{body}</PanoramaContextProvider> : body;
  };
  const wrap = (options: ZoomOptions): React.ReactElement => (
    // @ts-expect-error React-Redux types demand that the context internal value is not null, but we have that as default.
    <Provider context={RechartsReduxContext} store={store}>
      <Sync options={options} />
    </Provider>
  );
  const view = render(wrap(zoom));
  return {
    store,
    zoomState: () => (store.getState() as RechartsRootState).zoom,
    settings: () => (store.getState() as RechartsRootState).zoomSettings,
    setProps: (options: ZoomOptions) => act(() => view.rerender(wrap(options))),
    unmount: view.unmount,
  };
}

describe('ZoomStateSync', () => {
  describe('chart-level settings', () => {
    it('registers the limits and axis, and clears them on unmount', () => {
      const { settings, unmount } = renderSync({ axis: 'x', minZoom: 2, maxZoom: 8 });

      expect(settings()).toEqual({ limits: { minZoom: 2, maxZoom: 8 }, axis: 'x' });

      act(() => unmount());
      expect(settings()).toEqual({ limits: null, axis: null });
    });

    it('registers nothing inside a brush panorama', () => {
      const { settings } = renderSync({ axis: 'x', minZoom: 2 }, { panorama: true });

      expect(settings()).toEqual({ limits: null, axis: null });
    });
  });

  describe('initialZoom', () => {
    it('applies the initial viewport once on mount', () => {
      const { zoomState } = renderSync({ initialZoom: HALF });

      expect(zoomState().x).toEqual({ startRatio: 0, endRatio: 0.5 });
      expect(zoomState().y).toEqual(FULL_VIEWPORT);
    });

    it('does not reapply the initial viewport after a later change', () => {
      const { store, zoomState, setProps } = renderSync({ initialZoom: HALF });

      act(() => {
        store.dispatch(setZoom({ x: FULL_VIEWPORT, y: FULL_VIEWPORT }));
      });
      setProps({ initialZoom: QUARTER });

      expect(zoomState().x).toEqual(FULL_VIEWPORT);
    });

    it('clamps the initial viewport to maxZoom', () => {
      // A centered window of 0.25 is a 4x zoom, so the 2x limit widens it to 0.5 around its center.
      const { zoomState } = renderSync({ initialZoom: CENTERED_QUARTER, maxZoom: 2 });

      expect(zoomState().x).toEqual({ startRatio: 0.25, endRatio: 0.75 });
    });

    it('is ignored while the viewport is controlled', () => {
      const { zoomState } = renderSync({ initialZoom: QUARTER, viewport: HALF });

      expect(zoomState().x).toEqual({ startRatio: 0, endRatio: 0.5 });
    });

    it('starts at the most zoomed-out viewport the limits allow when minZoom is above 1', () => {
      const { zoomState } = renderSync({ minZoom: 2 });

      expect(zoomState().x.endRatio - zoomState().x.startRatio).toBeCloseTo(0.5);
    });

    it('leaves a dimension that does not zoom at the full view', () => {
      const { zoomState } = renderSync({ axis: 'x', minZoom: 2 });

      expect(zoomState().y).toEqual(FULL_VIEWPORT);
    });
  });

  describe('uncontrolled', () => {
    it('reports a store change through onZoomChange', () => {
      const onZoomChange = vi.fn();
      const { store } = renderSync({ onZoomChange });
      onZoomChange.mockClear();

      act(() => {
        store.dispatch(setZoom({ x: { startRatio: 0, endRatio: 0.5 }, y: FULL_VIEWPORT }));
      });

      expect(onZoomChange).toHaveBeenCalledWith({ x: { start: 0, end: 0.5 }, y: { start: 0, end: 1 } });
    });

    it('does not report the same viewport twice', () => {
      const onZoomChange = vi.fn();
      const { store } = renderSync({ onZoomChange });
      onZoomChange.mockClear();

      act(() => {
        store.dispatch(setZoom({ x: { startRatio: 0, endRatio: 0.5 }, y: FULL_VIEWPORT }));
      });
      act(() => {
        store.dispatch(setZoom({ x: { startRatio: 0, endRatio: 0.5 }, y: FULL_VIEWPORT }));
      });

      expect(onZoomChange).toHaveBeenCalledTimes(1);
    });

    it('reports the initial viewport as a change when initialZoom is set', () => {
      const onZoomChange = vi.fn();
      renderSync({ initialZoom: HALF, onZoomChange });

      expect(onZoomChange).toHaveBeenCalledWith({ x: { start: 0, end: 0.5 }, y: { start: 0, end: 1 } });
    });
  });

  describe('controlled', () => {
    it('applies the controlled viewport to the store', () => {
      const { zoomState } = renderSync({ viewport: HALF });

      expect(zoomState().x).toEqual({ startRatio: 0, endRatio: 0.5 });
    });

    it('follows a controlled viewport change', () => {
      const { zoomState, setProps } = renderSync({ viewport: HALF });
      setProps({ viewport: QUARTER });

      expect(zoomState().x).toEqual({ startRatio: 0, endRatio: 0.25 });
    });

    it('does not notify when the controlled prop itself changes', () => {
      const onZoomChange = vi.fn();
      const { setProps } = renderSync({ viewport: HALF, onZoomChange });
      onZoomChange.mockClear();

      setProps({ viewport: QUARTER, onZoomChange });

      expect(onZoomChange).not.toHaveBeenCalled();
    });

    it('reports a gesture as a proposal and rolls the store back to the prop', () => {
      const onZoomChange = vi.fn();
      const { store, zoomState } = renderSync({ viewport: HALF, onZoomChange });
      onZoomChange.mockClear();

      act(() => {
        store.dispatch(setZoom({ x: { startRatio: 0, endRatio: 0.25 }, y: FULL_VIEWPORT }));
      });

      expect(onZoomChange).toHaveBeenCalledWith({ x: { start: 0, end: 0.25 }, y: { start: 0, end: 1 } });
      // The parent has not accepted, so the rendered viewport stays authoritative.
      expect(zoomState().x).toEqual({ startRatio: 0, endRatio: 0.5 });
    });

    it('reports a rejected proposal only once', () => {
      const onZoomChange = vi.fn();
      const { store } = renderSync({ viewport: HALF, onZoomChange });
      onZoomChange.mockClear();

      act(() => {
        store.dispatch(setZoom({ x: { startRatio: 0, endRatio: 0.25 }, y: FULL_VIEWPORT }));
      });

      expect(onZoomChange).toHaveBeenCalledTimes(1);
    });

    it('keeps the accepted viewport when the parent adopts the proposal', () => {
      const onZoomChange = vi.fn();
      const { store, zoomState, setProps } = renderSync({ viewport: HALF, onZoomChange });
      onZoomChange.mockClear();

      act(() => {
        store.dispatch(setZoom({ x: { startRatio: 0, endRatio: 0.25 }, y: FULL_VIEWPORT }));
      });
      // The parent accepts by rendering the proposed viewport back down.
      setProps({ viewport: QUARTER, onZoomChange });

      expect(zoomState().x).toEqual({ startRatio: 0, endRatio: 0.25 });
      expect(onZoomChange).toHaveBeenCalledTimes(1);
    });

    it('does not touch the store inside a brush panorama', () => {
      const { zoomState } = renderSync({ viewport: HALF }, { panorama: true });

      expect(zoomState().x).toEqual(FULL_VIEWPORT);
    });
  });
});
