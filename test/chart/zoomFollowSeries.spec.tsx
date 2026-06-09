import * as React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FollowSeries, Line, LineChart, MouseWheelZoom, XAxis, YAxis, useZoom } from '../../src';
import type { UseZoomResult } from '../../src';

// y grows with x, so following the series should move the y window up/down as x pans.
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

const center = () => (zoomApi.viewport.y.start + zoomApi.viewport.y.end) / 2;

describe('<FollowSeries />', () => {
  it('re-centres the y window on the followed series as x pans', async () => {
    renderChart(
      <>
        <MouseWheelZoom axis="x" />
        <FollowSeries dataKey="uv" span={0.4} />
      </>,
    );

    act(() => zoomApi.setViewport({ x: { start: 0, end: 0.3 } }));
    await waitFor(() => expect(center()).toBeLessThan(0.4));

    act(() => zoomApi.setViewport({ x: { start: 0.7, end: 1 } }));
    await waitFor(() => expect(center()).toBeGreaterThan(0.6));
  });

  it('keeps the configured span when not auto-scaling', async () => {
    renderChart(
      <>
        <MouseWheelZoom axis="x" />
        <FollowSeries dataKey="uv" span={0.4} />
      </>,
    );
    act(() => zoomApi.setViewport({ x: { start: 0.4, end: 0.6 } }));
    await waitFor(() => {
      const width = zoomApi.viewport.y.end - zoomApi.viewport.y.start;
      expect(width).toBeGreaterThan(0.3);
      expect(width).toBeLessThan(0.5);
    });
  });
});
