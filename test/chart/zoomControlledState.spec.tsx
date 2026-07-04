import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan, useZoom } from '../../src';
import type { UseZoomResult } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

let zoomApi: UseZoomResult;

function Capture() {
  zoomApi = useZoom();
  return null;
}

function renderChart(zoom: any) {
  const utils = render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" isAnimationActive={false} />
      <ZoomAndPan {...zoom} />
      <Capture />
    </LineChart>,
  );
  return { ...utils, wrapper: utils.container.querySelector('.recharts-wrapper') as HTMLElement };
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

  it('keeps a rejected controlled viewport authoritative after a gesture proposal', async () => {
    const fixedViewport = { x: { start: 0.2, end: 0.8 } };
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ viewport: fixedViewport, onZoomChange });

    await waitFor(() => expect(zoomApi.viewport.x).toEqual(fixedViewport.x));
    onZoomChange.mockClear();

    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    await waitFor(() => expect(zoomApi.viewport.x).toEqual(fixedViewport.x));
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
