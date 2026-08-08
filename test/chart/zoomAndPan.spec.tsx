import * as React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';
import type { ZoomAndPanProps } from '../../src';
import { assertNotNull } from '../helper/assertNotNull';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function flushRaf(): void {
  act(() => {
    vi.runOnlyPendingTimers();
  });
}

function renderChart(zoomProps: ZoomAndPanProps = {}) {
  const utils = render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="uv" isAnimationActive={false} />
      <ZoomAndPan {...zoomProps} />
    </LineChart>,
  );
  const wrapper = utils.container.querySelector('.recharts-wrapper');
  assertNotNull(wrapper);
  return { ...utils, wrapper };
}

describe('<ZoomAndPan />', () => {
  it('removes its touch decoration stylesheet when the chart unmounts', () => {
    const stylesheetsBefore = document.styleSheets.length;
    const { unmount } = renderChart();
    expect(document.styleSheets.length).toBe(stylesheetsBefore + 1);

    unmount();

    expect(document.styleSheets.length).toBe(stylesheetsBefore);
  });

  it('turns on wheel zoom out of the box', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ onZoomChange });
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.lastCall?.[0];
    assertNotNull(last);
    expect(last.x.end - last.x.start).toBeLessThan(1);
  });

  it('honours the axis prop (x only)', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', onZoomChange });
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.lastCall?.[0];
    assertNotNull(last);
    expect(last.x.end - last.x.start).toBeLessThan(1);
    expect(last.y).toEqual({ start: 0, end: 1 });
  });

  it('does not zoom on wheel when wheel is disabled', () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ wheel: false, onZoomChange });
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    flushRaf();
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
    flushRaf();

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

describe('zoom limits', () => {
  it('minZoom > 1 applies on mount: the chart starts at the most zoomed-out allowed view', async () => {
    const onZoomChange = vi.fn();
    renderChart({ minZoom: 2, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.lastCall?.[0];
    assertNotNull(last);
    expect(last.x.end - last.x.start).toBeCloseTo(0.5, 5);
    expect(last.y.end - last.y.start).toBeCloseTo(0.5, 5);
  });

  it('minZoom > 1 clamps initialZoom and keeps double-click reset at the allowed floor', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({
      minZoom: 2,
      // Wider than 1/minZoom: must be clamped on mount.
      initialZoom: { x: { start: 0.1, end: 0.9 } },
      onZoomChange,
    });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const mounted = onZoomChange.mock.lastCall?.[0];
    assertNotNull(mounted);
    expect(mounted.x.end - mounted.x.start).toBeCloseTo(0.5, 5);

    // Zoom further in, then reset: it must land back on the floor (width 1/minZoom), not full view.
    fireEvent.wheel(wrapper, { deltaY: -240, clientX: 200, clientY: 150 });
    await waitFor(() => {
      const zoomed = onZoomChange.mock.lastCall?.[0];
      assertNotNull(zoomed);
      expect(zoomed.x.end - zoomed.x.start).toBeLessThan(0.5);
    });
    onZoomChange.mockClear();
    fireEvent.doubleClick(wrapper, { clientX: 200, clientY: 150 });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const reset = onZoomChange.mock.lastCall?.[0];
    assertNotNull(reset);
    expect(reset.x.end - reset.x.start).toBeCloseTo(0.5, 5);
  });
});

describe('the zoom prop shorthand', () => {
  function renderWithZoomProp(zoom: boolean | 'x' | 'y' | 'xy' | ZoomAndPanProps) {
    const utils = render(
      <LineChart width={400} height={300} data={data} zoom={zoom}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" isAnimationActive={false} />
      </LineChart>,
    );
    const wrapper = utils.container.querySelector('.recharts-wrapper');
    assertNotNull(wrapper);
    return { ...utils, wrapper };
  }

  it('zoom={true} mounts the default interactions (wheel zooms)', async () => {
    const { wrapper, container } = renderWithZoomProp(true);
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    // The scrollbar only renders while zoomed, so it is a good "the chart is zoomed" marker.
    await waitFor(() => expect(container.querySelector('.recharts-zoom-scrollbar-x')).not.toBeNull());
  });

  it('accepts a full options object', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data} zoom={{ axis: 'x', onZoomChange }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" isAnimationActive={false} />
      </LineChart>,
    );
    const wrapper = container.querySelector('.recharts-wrapper');
    assertNotNull(wrapper);
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const last = onZoomChange.mock.lastCall?.[0];
    assertNotNull(last);
    expect(last.x.end - last.x.start).toBeLessThan(1);
    expect(last.y).toEqual({ start: 0, end: 1 });
  });

  it('renders nothing zoom-related when the prop is absent', () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="uv" isAnimationActive={false} />
      </LineChart>,
    );
    expect(container.querySelector('.recharts-zoom-scrollbar-x')).toBeNull();
  });
});
