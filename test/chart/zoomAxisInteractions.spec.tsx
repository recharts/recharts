import * as React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';
import type { ZoomAndPanProps } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function renderChart(zoom: ZoomAndPanProps) {
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

function flushRaf(): void {
  act(() => {
    vi.runOnlyPendingTimers();
  });
}

describe('axis interactions', () => {
  it('wheel over the x-axis band (below the plot) zooms only x', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', onZoomChange });
    const xAxis = wrapper.querySelector('.recharts-xAxis');
    if (xAxis == null) {
      throw new Error('Expected an x axis');
    }
    fireEvent.wheel(xAxis, { deltaY: -100, clientX: 200, clientY: 296 });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.end - last.x.start).toBeLessThan(1);
    expect(last.y).toEqual({ start: 0, end: 1 });
  });

  it('Shift + wheel over the plot pans instead of zooming', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.3, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();
    // Plot centre, with Shift held: pans x rather than zooming.
    fireEvent.wheel(wrapper, { deltaY: 100, clientX: 200, clientY: 150, shiftKey: true });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.end - last.x.start).toBeCloseTo(0.3, 5);
    expect(last.x.start).not.toBeCloseTo(0.3, 3);
  });

  it('Ctrl + Shift + wheel pans y, while Ctrl + wheel without Shift still zooms', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({
      axis: 'xy',
      initialZoom: { x: { start: 0.2, end: 0.6 }, y: { start: 0.3, end: 0.7 } },
      onZoomChange,
    });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    fireEvent.wheel(wrapper, {
      deltaY: 100,
      clientX: 200,
      clientY: 150,
      ctrlKey: true,
      shiftKey: true,
    });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const afterPan = onZoomChange.mock.calls.at(-1)![0];
    expect(afterPan.x).toEqual({ start: 0.2, end: 0.6 });
    expect(afterPan.y.end - afterPan.y.start).toBeCloseTo(0.4, 5);
    expect(afterPan.y.start).not.toBeCloseTo(0.3, 3);

    onZoomChange.mockClear();
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150, ctrlKey: true });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const afterZoom = onZoomChange.mock.calls.at(-1)![0];
    expect(afterZoom.x.end - afterZoom.x.start).toBeLessThan(0.4);
    expect(afterZoom.y.end - afterZoom.y.start).toBeLessThan(0.4);
  });

  it('does nothing over an axis when axisInteractions is off', () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', axisInteractions: false, onZoomChange });
    const xAxis = wrapper.querySelector('.recharts-xAxis');
    if (xAxis == null) {
      throw new Error('Expected an x axis');
    }
    fireEvent.wheel(xAxis, { deltaY: -100, clientX: 200, clientY: 296 });
    flushRaf();
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('suppresses native text selection only while an axis drag is active', () => {
    const { wrapper } = renderChart({ axis: 'xy' });
    const xAxis = wrapper.querySelector('.recharts-xAxis');
    if (xAxis == null) {
      throw new Error('Expected an x axis');
    }

    const beforeDrag = new Event('selectstart', { bubbles: true, cancelable: true });
    document.dispatchEvent(beforeDrag);
    expect(beforeDrag.defaultPrevented).toBe(false);

    fireEvent.pointerDown(xAxis, { button: 0, pointerType: 'mouse', clientX: 200, clientY: 290 });
    const duringDrag = new Event('selectstart', { bubbles: true, cancelable: true });
    document.dispatchEvent(duringDrag);
    expect(duringDrag.defaultPrevented).toBe(true);

    fireEvent.pointerUp(window, { pointerType: 'mouse', clientX: 220, clientY: 290 });
    const afterDrag = new Event('selectstart', { bubbles: true, cancelable: true });
    document.dispatchEvent(afterDrag);
    expect(afterDrag.defaultPrevented).toBe(false);
  });

  it('does not treat an unrelated chart margin as an axis', () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', onZoomChange });

    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 296 });
    flushRaf();

    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
