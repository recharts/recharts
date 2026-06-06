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

  it('does nothing when keyboard is disabled', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', keyboard: false, onZoomChange });
    fireEvent.keyDown(wrapper, { key: '+' });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
