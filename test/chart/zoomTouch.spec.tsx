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
  it('renders stable touch targets for top x-axes and right y-axes on coarse-capable devices', async () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: query.includes('any-pointer') || query.includes('pointer: coarse'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));

    try {
      const { container } = render(
        <LineChart width={400} height={300} data={data}>
          <XAxis xAxisId="top" orientation="top" dataKey="name" />
          <YAxis yAxisId="right" orientation="right" />
          <Line xAxisId="top" yAxisId="right" type="monotone" dataKey="uv" isAnimationActive={false} />
          <ZoomAndPan axis="xy" />
        </LineChart>,
      );

      await waitFor(() => {
        expect(container.querySelectorAll('[data-recharts-zoom-axis-target="x"]')).toHaveLength(1);
        expect(container.querySelectorAll('[data-recharts-zoom-axis-target="y"]')).toHaveLength(1);
      });
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });

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

  it('double-tap then drag zooms into the selected region when configured', async () => {
    const onZoomChange = vi.fn();
    const onTouchSelect = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', touchDoubleTapDrag: 'select', onTouchSelect, onZoomChange });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 220, clientY: 100 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });

    await waitFor(() => expect(onTouchSelect).toHaveBeenCalled());
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    expect(onTouchSelect.mock.calls.at(-1)![0]).toMatchObject({
      x: expect.objectContaining({ start: expect.any(Number), end: expect.any(Number) }),
      y: expect.objectContaining({ start: expect.any(Number), end: expect.any(Number) }),
    });
    const last = onZoomChange.mock.calls.at(-1)![0];
    expect(last.x.end - last.x.start).toBeLessThan(1);
    expect(last.y.end - last.y.start).toBeLessThan(1);
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

  it('does not reset when a pending double-tap is cancelled', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    const tap = { touches: [{ clientX: 150, clientY: 150 }] };
    fireEvent.touchStart(wrapper, tap);
    fireEvent.touchEnd(wrapper, { touches: [] });
    fireEvent.touchStart(wrapper, tap);
    fireEvent.touchCancel(wrapper, { touches: [] });

    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('does not commit a double-tap-drag selection when cancelled', async () => {
    const onZoomChange = vi.fn();
    const onTouchSelect = vi.fn();
    const { wrapper } = renderChart({ axis: 'xy', touchDoubleTapDrag: 'select', onTouchSelect, onZoomChange });

    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 220, clientY: 100 }] });
    fireEvent.touchCancel(wrapper, { touches: [] });

    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onTouchSelect).not.toHaveBeenCalled();
    expect(onZoomChange).not.toHaveBeenCalled();
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
