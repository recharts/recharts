import * as React from 'react';
import { render, act, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Line, LineChart, XAxis, YAxis, useZoom, useZoomState } from '../../src';
import type { UseZoomResult } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

let api: UseZoomResult;

function Capture() {
  api = useZoom();
  return null;
}

function renderChart() {
  return render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="uv" isAnimationActive={false} />
      <Capture />
    </LineChart>,
  );
}

describe('useZoom', () => {
  it('starts un-zoomed at the full viewport', () => {
    renderChart();
    expect(api.isZoomed).toBe(false);
    expect(api.viewport.x).toEqual({ start: 0, end: 1 });
  });

  it('zoomIn narrows the window and flags isZoomed', () => {
    renderChart();
    act(() => api.zoomIn(2));
    expect(api.isZoomed).toBe(true);
    // factor 2 around the centre halves the visible window.
    expect(api.viewport.x.end - api.viewport.x.start).toBeCloseTo(0.5, 5);
  });

  it('setViewport applies a window and reset clears it', () => {
    renderChart();
    act(() => api.setViewport({ x: { start: 0.2, end: 0.6 } }));
    expect(api.viewport.x).toEqual({ start: 0.2, end: 0.6 });
    expect(api.isZoomed).toBe(true);

    act(() => api.reset());
    expect(api.isZoomed).toBe(false);
    expect(api.viewport.x).toEqual({ start: 0, end: 1 });
  });
});

describe('useZoomState', () => {
  it('returns a useState-shaped tuple over the shared viewport', async () => {
    let tuple: ReturnType<typeof useZoomState>;
    function CaptureTuple() {
      tuple = useZoomState();
      return null;
    }
    render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" isAnimationActive={false} />
        <CaptureTuple />
      </LineChart>,
    );
    const [initial, setZoom] = tuple!;
    expect(initial).toEqual({ x: { start: 0, end: 1 }, y: { start: 0, end: 1 } });
    act(() => setZoom({ x: { start: 0.2, end: 0.6 } }));
    await waitFor(() => expect(tuple![0].x).toEqual({ start: 0.2, end: 0.6 }));
  });
});
