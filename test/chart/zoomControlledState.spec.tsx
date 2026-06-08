import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function renderChart(zoom: any) {
  return render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" isAnimationActive={false} />
      <ZoomAndPan {...zoom} />
    </LineChart>,
  );
}

describe('controlled / uncontrolled zoom state', () => {
  it('applies initialZoom and reports it through onZoomChange', async () => {
    const onZoomChange = vi.fn();
    renderChart({ initialZoom: { x: { start: 0.2, end: 0.6 } }, onZoomChange });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.start).toBeCloseTo(0.2);
    expect(last.x.end).toBeCloseTo(0.6);
    expect(last.y).toEqual({ start: 0, end: 1 });
  });

  it('applies a controlled viewport', async () => {
    const onZoomChange = vi.fn();
    renderChart({ viewport: { x: { start: 0.3, end: 0.7 } }, onZoomChange });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.start).toBeCloseTo(0.3);
    expect(last.x.end).toBeCloseTo(0.7);
  });

  it('does not call onZoomChange when left at the default (un-zoomed) state', async () => {
    const onZoomChange = vi.fn();
    renderChart({ onZoomChange });
    // give effects a chance to run
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
