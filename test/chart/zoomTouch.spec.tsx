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

describe('touch zoom gestures', () => {
  it('double-tap then drag up zooms in (Google-Maps gesture)', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', onZoomChange });
    // First tap.
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    // Second tap, held, then dragged up.
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 150, clientY: 100 }] });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.end - last.x.start).toBeLessThan(1);
  });

  it('double-tap resets', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const tap = { touches: [{ clientX: 150, clientY: 150 }] };
    const release = { touches: [] };
    fireEvent.touchStart(wrapper, tap);
    fireEvent.touchEnd(wrapper, release);
    fireEvent.touchStart(wrapper, tap);
    fireEvent.touchEnd(wrapper, release);
    await waitFor(() => {
      const last = onZoomChange.mock.calls.at(-1)![0];
      expect(last.x).toEqual({ start: 0, end: 1 });
    });
  });

  it('does nothing when touch is disabled', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', touch: false, onZoomChange });
    fireEvent.touchStart(wrapper, {
      touches: [
        { clientX: 150, clientY: 150 },
        { clientX: 250, clientY: 150 },
      ],
    });
    fireEvent.touchMove(wrapper, {
      touches: [
        { clientX: 100, clientY: 150 },
        { clientX: 300, clientY: 150 },
      ],
    });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
