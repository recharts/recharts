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
    const { getByTestId } = render(
      <Provider store={store}>
        <Wrapper>
          <ZoomPanContainer config={{ mode: 'xy' }}>
            <g data-testid="content" />
          </ZoomPanContainer>
        </Wrapper>
      </Provider>,
    );
    const g = getByTestId('content').parentElement as SVGGElement;
    fireEvent.wheel(g, { deltaY: -100 });
    expect(store.getState().zoom.scaleX).not.toBe(1);
  });

  it('resets on double click', () => {
    const store = configureStore({ reducer: { zoom: zoomReducer } });
    const { getByTestId } = render(
      <Provider store={store}>
        <Wrapper>
          <ZoomPanContainer config={{ mode: 'xy' }}>
            <g data-testid="content" />
          </ZoomPanContainer>
        </Wrapper>
      </Provider>,
    );
    const g = getByTestId('content').parentElement as SVGGElement;
    fireEvent.wheel(g, { deltaY: -100 });
    fireEvent.dblClick(g);
    expect(store.getState().zoom.scaleX).toBe(1);
  });
});
