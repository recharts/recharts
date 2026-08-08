import * as React from 'react';
import { act, render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan, useZoom } from '../../src';
import type { UseZoomResult, ZoomAndPanProps, ZoomViewport } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

let zoomApi: UseZoomResult;

function Capture() {
  zoomApi = useZoom();
  return null;
}

function TestChart({ zoom }: { zoom: ZoomAndPanProps }) {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" isAnimationActive={false} />
      <ZoomAndPan {...zoom} />
      <Capture />
    </LineChart>
  );
}

function renderChart(zoom: ZoomAndPanProps) {
  const utils = render(<TestChart zoom={zoom} />);
  return {
    ...utils,
    rerenderChart: (nextZoom: ZoomAndPanProps) => utils.rerender(<TestChart zoom={nextZoom} />),
  };
}

function AcceptingControlledChart({ onProposal }: { onProposal: (viewport: Required<ZoomViewport>) => void }) {
  const [viewport, setViewport] = React.useState<ZoomViewport>({ x: { start: 0.2, end: 0.8 } });
  const onZoomChange = (proposal: Required<ZoomViewport>) => {
    onProposal(proposal);
    setViewport(proposal);
  };
  return <TestChart zoom={{ viewport, onZoomChange }} />;
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

  it('applies a controlled viewport without reporting the prop as a proposal', async () => {
    const onZoomChange = vi.fn();
    renderChart({ viewport: { x: { start: 0.3, end: 0.7 } }, onZoomChange });

    await waitFor(() => expect(zoomApi.viewport.x).toEqual({ start: 0.3, end: 0.7 }));
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('applies an external controlled prop update without reporting it as a proposal', async () => {
    const onZoomChange = vi.fn();
    const rendered = renderChart({ viewport: { x: { start: 0.2, end: 0.8 } }, onZoomChange });
    await waitFor(() => expect(zoomApi.viewport.x).toEqual({ start: 0.2, end: 0.8 }));

    rendered.rerenderChart({ viewport: { x: { start: 0.35, end: 0.65 } }, onZoomChange });

    await waitFor(() => expect(zoomApi.viewport.x).toEqual({ start: 0.35, end: 0.65 }));
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('reports a rejected proposal exactly once and keeps the controlled viewport authoritative', async () => {
    const fixedViewport = { x: { start: 0.2, end: 0.8 } };
    const onZoomChange = vi.fn();
    renderChart({ viewport: fixedViewport, onZoomChange });

    await waitFor(() => expect(zoomApi.viewport.x).toEqual(fixedViewport.x));
    const proposal = { x: { start: 0.3, end: 0.7 }, y: { start: 0.1, end: 0.9 } };

    act(() => zoomApi.setViewport(proposal));

    await waitFor(() => expect(onZoomChange).toHaveBeenCalledTimes(1));
    expect(onZoomChange).toHaveBeenLastCalledWith(proposal);
    await waitFor(() => expect(zoomApi.viewport.x).toEqual(fixedViewport.x));
    expect(zoomApi.viewport.y).toEqual({ start: 0, end: 1 });
    expect(onZoomChange).toHaveBeenCalledTimes(1);
  });

  it('reports an accepted proposal exactly once without reporting the temporary rollback', async () => {
    const onProposal = vi.fn();
    render(<AcceptingControlledChart onProposal={onProposal} />);
    await waitFor(() => expect(zoomApi.viewport.x).toEqual({ start: 0.2, end: 0.8 }));
    const proposal = { x: { start: 0.3, end: 0.7 }, y: { start: 0.1, end: 0.9 } };

    act(() => zoomApi.setViewport(proposal));

    await waitFor(() => expect(zoomApi.viewport).toEqual(proposal));
    expect(onProposal).toHaveBeenCalledTimes(1);
    expect(onProposal).toHaveBeenLastCalledWith(proposal);
  });

  it('does not call onZoomChange when left at the default (un-zoomed) state', () => {
    const onZoomChange = vi.fn();
    renderChart({ onZoomChange });
    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
