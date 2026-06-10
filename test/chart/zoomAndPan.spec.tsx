import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';
import type { ZoomAndPanProps } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function renderChart(zoomProps: ZoomAndPanProps = {}) {
  const utils = render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="uv" isAnimationActive={false} />
      <ZoomAndPan {...zoomProps} />
    </LineChart>,
  );
  const wrapper = utils.container.querySelector('.recharts-wrapper') as HTMLElement;
  return { ...utils, wrapper };
}

describe('<ZoomAndPan />', () => {
  it('turns on wheel zoom out of the box', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ onZoomChange });
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.end - last.x.start).toBeLessThan(1);
  });

  it('honours the axis prop (x only)', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', onZoomChange });
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.end - last.x.start).toBeLessThan(1);
    expect(last.y).toEqual({ start: 0, end: 1 });
  });

  it('does not zoom on wheel when wheel is disabled', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ wheel: false, onZoomChange });
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('keeps one-finger touch drag for tooltip/cursor by default', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ initialZoom: { x: { start: 0.25, end: 0.75 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    fireEvent.touchStart(wrapper, { touches: [{ clientX: 200, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 240, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });

    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('can use one-finger touch drag to pan', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({
      initialZoom: { x: { start: 0.25, end: 0.75 } },
      touchDrag: 'pan',
      onZoomChange,
    });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    fireEvent.touchStart(wrapper, { touches: [{ clientX: 200, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 240, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
  });
});
