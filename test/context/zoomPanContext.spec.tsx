import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { ZoomPanContainer } from '../../src/context/zoomPanContext';
import { zoomReducer } from '../../src/state/zoomSlice';

// minimal svg wrapper for events
function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <svg width={100} height={100}>
      {children}
    </svg>
  );
}

describe('ZoomPanContainer', () => {
  it('zooms with wheel event', () => {
    const store = configureStore({ reducer: { zoom: zoomReducer } });
    const { container } = render(
      <Provider store={store}>
        <Wrapper>
          <ZoomPanContainer config={{ mode: 'xy' }}>
            <g data-testid="content" />
          </ZoomPanContainer>
        </Wrapper>
      </Provider>,
    );
    const overlay = container.querySelector('rect') as SVGRectElement;
    overlay.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100 }) as DOMRect;
    fireEvent.wheel(overlay, { deltaY: -100, clientX: 50, clientY: 50 });
    expect(store.getState().zoom.scaleX).not.toBe(1);
  });

  it('resets on double click', () => {
    const store = configureStore({ reducer: { zoom: zoomReducer } });
    const { container } = render(
      <Provider store={store}>
        <Wrapper>
          <ZoomPanContainer config={{ mode: 'xy' }}>
            <g data-testid="content" />
          </ZoomPanContainer>
        </Wrapper>
      </Provider>,
    );
    const overlay = container.querySelector('rect') as SVGRectElement;
    overlay.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100 }) as DOMRect;
    fireEvent.wheel(overlay, { deltaY: -100, clientX: 50, clientY: 50 });
    fireEvent.dblClick(overlay);
    expect(store.getState().zoom.scaleX).toBe(1);
  });

  it('zooms with drag selection', () => {
    const store = configureStore({ reducer: { zoom: zoomReducer } });
    const { container } = render(
      <Provider store={store}>
        <Wrapper>
          <ZoomPanContainer config={{ mode: 'xy', dragToZoom: true }}>
            <g />
          </ZoomPanContainer>
        </Wrapper>
      </Provider>,
    );
    const overlay = container.querySelector('rect') as SVGRectElement;
    overlay.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 100, height: 100, right: 100, bottom: 100 }) as DOMRect;
    fireEvent.pointerDown(overlay, { clientX: 10, clientY: 10, pointerId: 1, shiftKey: true });
    fireEvent.pointerMove(overlay, { clientX: 90, clientY: 90, pointerId: 1 });
    fireEvent.pointerUp(overlay, { clientX: 90, clientY: 90, pointerId: 1 });
    expect(store.getState().zoom.scaleX).toBeGreaterThan(1);
  });
});
