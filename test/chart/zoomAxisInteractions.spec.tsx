import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function renderChart(zoom: any) {
  const utils = render(
    <LineChart width={400} height={300} data={data} zoom={zoom}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" isAnimationActive={false} />
    </LineChart>,
  );
  const wrapper = utils.container.querySelector('.recharts-wrapper') as HTMLElement;
  return { ...utils, wrapper };
}

describe('axis interactions', () => {
  it('wheel over the x-axis band (below the plot) zooms only x', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', onZoomChange });
    // Near the very bottom of a 300px-tall chart: the x-axis band, horizontally centred.
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 296 });
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

  it('does nothing over an axis when axisInteractions is off', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', axisInteractions: false, onZoomChange });
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 296 });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
