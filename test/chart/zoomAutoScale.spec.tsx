import * as React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { AutoScaleAxis, Line, LineChart, MouseWheelZoom, XAxis, YAxis, useZoom } from '../../src';
import type { UseZoomResult } from '../../src';

// y grows with x, so a sub-range of x has a distinct, narrower y extent.
const data = Array.from({ length: 20 }, (_, i) => ({ name: i, uv: i * 10 }));

let zoomApi: UseZoomResult;

function Capture() {
  zoomApi = useZoom();
  return null;
}

function renderChart(node: React.ReactNode) {
  return render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" type="number" />
      <YAxis />
      <Line dataKey="uv" isAnimationActive={false} />
      {node}
      <Capture />
    </LineChart>,
  );
}

describe('<AutoScaleAxis />', () => {
  it('fits the y window to the data visible in the zoomed x window', async () => {
    renderChart(
      <>
        <MouseWheelZoom axis="x" />
        <AutoScaleAxis axis="y" />
      </>,
    );

    // Zoom x into the upper portion of the data (high x -> high y).
    act(() => {
      zoomApi.setViewport({ x: { start: 0.7, end: 1 } });
    });

    // Auto-scale should pull the y window up to the visible (high) values, away from the full [0, 1].
    await waitFor(() => {
      expect(zoomApi.viewport.y.start).toBeGreaterThan(0.3);
      expect(zoomApi.viewport.y.end - zoomApi.viewport.y.start).toBeLessThan(1);
    });
  });

  it('leaves y untouched when not mounted', async () => {
    renderChart(<MouseWheelZoom axis="x" />);
    act(() => {
      zoomApi.setViewport({ x: { start: 0.7, end: 1 } });
    });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(zoomApi.viewport.y).toEqual({ start: 0, end: 1 });
  });
});
