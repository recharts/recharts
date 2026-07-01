import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function renderChart(zoom: any) {
  const utils = render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" isAnimationActive={false} />
      <ZoomAndPan {...zoom} />
    </LineChart>,
  );
  const wrapper = utils.container.querySelector('.recharts-wrapper') as HTMLElement;
  return { ...utils, wrapper };
}

describe('keyboard zoom gestures', () => {
  it('zooms in on "+"', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', onZoomChange });
    fireEvent.keyDown(wrapper, { key: '+' });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.end - last.x.start).toBeLessThan(1);
  });

  it('resets on "0"', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    fireEvent.keyDown(wrapper, { key: '0' });
    await waitFor(() => {
      const last = onZoomChange.mock.calls.at(-1)![0];
      expect(last.x).toEqual({ start: 0, end: 1 });
    });
  });

  it('pans with arrow keys when zoomed', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.3, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();
    fireEvent.keyDown(wrapper, { key: 'ArrowRight' });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    // The window keeps its width and shifts towards the end.
    expect(last.x.end - last.x.start).toBeCloseTo(0.3, 5);
    expect(last.x.start).toBeGreaterThan(0.3);
    expect(last.x.start).toBeLessThan(0.35);
  });

  it('pans faster with Shift+arrow', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.3, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();
    fireEvent.keyDown(wrapper, { key: 'ArrowRight', shiftKey: true });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    // Shift uses the larger step, so the window shifts further than a plain arrow.
    expect(last.x.start).toBeGreaterThan(0.35);
  });

  it('does nothing when keyboard is disabled', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', keyboard: false, onZoomChange });
    fireEvent.keyDown(wrapper, { key: '+' });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('preserves browser zoom shortcuts', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', onZoomChange });
    fireEvent.keyDown(wrapper, { key: '+', ctrlKey: true });
    fireEvent.keyDown(wrapper, { key: '-', metaKey: true });
    fireEvent.keyDown(wrapper, { key: '0', ctrlKey: true });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('ignores keyboard events from embedded controls', async () => {
    const onZoomChange = vi.fn();
    const utils = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="uv" isAnimationActive={false} />
        <foreignObject>
          <input aria-label="zoom test input" />
        </foreignObject>
        <ZoomAndPan axis="x" onZoomChange={onZoomChange} />
      </LineChart>,
    );
    const input = utils.getByLabelText('zoom test input');
    fireEvent.keyDown(input, { key: '+' });
    fireEvent.keyDown(input, { key: 'ArrowRight' });
    fireEvent.keyDown(input, { key: 'Escape' });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
