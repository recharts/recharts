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

  it('leaves y untouched when not mounted', () => {
    renderChart(<MouseWheelZoom axis="x" />);
    act(() => {
      zoomApi.setViewport({ x: { start: 0.7, end: 1 } });
    });
    expect(zoomApi.viewport.y).toEqual({ start: 0, end: 1 });
  });

  it('vertical layout: defaults to fitting the x (value) window from the zoomed y window', async () => {
    render(
      <LineChart width={400} height={300} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" />
        <Line dataKey="uv" isAnimationActive={false} />
        <MouseWheelZoom axis="y" />
        <AutoScaleAxis />
        <Capture />
      </LineChart>,
    );

    // Zoom y into the late categories (high index -> high uv values).
    act(() => {
      zoomApi.setViewport({ y: { start: 0.7, end: 1 } });
    });

    // Auto-scale should pull the x (value) window up to the visible high values.
    await waitFor(() => {
      expect(zoomApi.viewport.x.start).toBeGreaterThan(0.3);
      expect(zoomApi.viewport.x.end - zoomApi.viewport.x.start).toBeLessThan(1);
    });
  });

  it('uses the target scale transform when fitting a logarithmic axis', async () => {
    const logData = [
      { name: 0, uv: 1 },
      { name: 1, uv: 10 },
      { name: 2, uv: 100 },
      { name: 3, uv: 1000 },
    ];
    render(
      <LineChart width={400} height={300} data={logData}>
        <XAxis dataKey="name" type="number" domain={[0, 3]} />
        <YAxis type="number" scale="log" domain={[1, 1000]} />
        <Line dataKey="uv" isAnimationActive={false} />
        <AutoScaleAxis axis="y" padding={0} />
        <Capture />
      </LineChart>,
    );

    act(() => zoomApi.setViewport({ x: { start: 1 / 3, end: 2 / 3 } }));

    await waitFor(() => {
      expect(zoomApi.viewport.y.start).toBeCloseTo(1 / 3, 3);
      expect(zoomApi.viewport.y.end).toBeCloseTo(2 / 3, 3);
    });
  });

  it('reads series-level data and ignores null or blank values instead of fitting them as zero', async () => {
    const seriesData = [
      { name: 0, uv: null },
      { name: 1, uv: '' },
      { name: 2, uv: 80 },
      { name: 3, uv: 100 },
    ];
    render(
      <LineChart width={400} height={300}>
        <XAxis dataKey="name" type="number" domain={[0, 3]} />
        <YAxis type="number" domain={[0, 100]} />
        <Line data={seriesData} dataKey="uv" isAnimationActive={false} />
        <AutoScaleAxis axis="y" padding={0} />
        <Capture />
      </LineChart>,
    );

    await waitFor(() => {
      expect(zoomApi.viewport.y.start).toBeCloseTo(0.8, 3);
      expect(zoomApi.viewport.y.end).toBeCloseTo(1, 3);
    });
  });
});
