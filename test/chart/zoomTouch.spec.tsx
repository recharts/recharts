import * as React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, Tooltip, XAxis, YAxis, ZoomAndPan } from '../../src';
import type { ZoomAndPanProps, ZoomViewport } from '../../src';

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

function touchTap(target: Element, clientX: number, clientY: number): void {
  fireEvent.touchStart(target, { touches: [{ clientX, clientY }] });
  fireEvent.touchEnd(target, { touches: [] });
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

  it('does not render axis touch blockers when touch is disabled', () => {
    const originalMatchMedia = window.matchMedia;
    window.matchMedia = vi.fn().mockReturnValue({
      matches: true,
      media: '(any-pointer: coarse)',
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    });

    try {
      const { container, wrapper } = renderChart({ axis: 'xy', touch: false });
      expect(container.querySelector('[data-recharts-zoom-axis-target]')).toBeNull();
      expect(
        fireEvent.touchStart(wrapper, {
          cancelable: true,
          touches: [{ clientX: 200, clientY: 296 }],
        }),
      ).toBe(true);
    } finally {
      window.matchMedia = originalMatchMedia;
    }
  });

  it('leaves touch axis pan and pinch disabled when axisInteractions is false', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({
      axis: 'xy',
      axisInteractions: false,
      initialZoom: { x: { start: 0.2, end: 0.6 } },
      onZoomChange,
    });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();
    const xAxis = wrapper.querySelector('.recharts-xAxis');
    if (xAxis == null) {
      throw new Error('Expected an x axis');
    }

    expect(
      fireEvent.touchStart(xAxis, {
        cancelable: true,
        touches: [{ clientX: 180, clientY: 290 }],
      }),
    ).toBe(true);
    fireEvent.touchMove(xAxis, { cancelable: true, touches: [{ clientX: 230, clientY: 290 }] });
    fireEvent.touchEnd(xAxis, { touches: [] });

    expect(
      fireEvent.touchStart(xAxis, {
        cancelable: true,
        touches: [
          { clientX: 150, clientY: 290 },
          { clientX: 250, clientY: 290 },
        ],
      }),
    ).toBe(true);
    fireEvent.touchMove(xAxis, {
      cancelable: true,
      touches: [
        { clientX: 100, clientY: 290 },
        { clientX: 300, clientY: 290 },
      ],
    });
    fireEvent.touchEnd(xAxis, { touches: [] });
    flushRaf();

    expect(onZoomChange).not.toHaveBeenCalled();
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
    const onZoomChange = vi.fn<(viewport: Required<ZoomViewport>) => void>();
    const onTouchSelect = vi.fn<(selection: ZoomViewport) => void>();
    const { wrapper } = renderChart({ axis: 'xy', touchDoubleTapDrag: 'select', onTouchSelect, onZoomChange });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 220, clientY: 100 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });

    await waitFor(() => expect(onTouchSelect).toHaveBeenCalled());
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const selected = onTouchSelect.mock.calls.at(-1)?.[0];
    expect(selected).toMatchObject({
      x: expect.objectContaining({ start: expect.any(Number), end: expect.any(Number) }),
      y: expect.objectContaining({ start: expect.any(Number), end: expect.any(Number) }),
    });
    const last = onZoomChange.mock.calls.at(-1)?.[0];
    if (selected?.x == null || selected.y == null || last == null) {
      throw new Error('Expected both the selected and applied x/y viewports');
    }
    expect(selected.x.start).toBeCloseTo(last.x.start);
    expect(selected.x.end).toBeCloseTo(last.x.end);
    expect(selected.y.start).toBeCloseTo(last.y.start);
    expect(selected.y.end).toBeCloseTo(last.y.end);
    expect(last.x.end - last.x.start).toBeLessThan(1);
    expect(last.y.end - last.y.start).toBeLessThan(1);
  });

  it('keeps a stationary finger over the same data while the other finger pinches', async () => {
    const onZoomChange = vi.fn<(viewport: Required<ZoomViewport>) => void>();
    const initialX = { start: 0.2, end: 0.8 };
    const { wrapper } = renderChart({
      axis: 'x',
      initialZoom: { x: initialX },
      onZoomChange,
      pinchThreshold: 0,
      scrollbars: false,
    });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    const axisLine = wrapper.querySelector<SVGLineElement>('.recharts-xAxis .recharts-cartesian-axis-line');
    if (axisLine == null) {
      throw new Error('Expected an x-axis line');
    }
    const plotStart = Number(axisLine.getAttribute('x1'));
    const plotEnd = Number(axisLine.getAttribute('x2'));
    const plotWidth = plotEnd - plotStart;
    const stationaryFraction = 0.25;
    const stationaryX = plotStart + plotWidth * stationaryFraction;
    const movingStartX = plotStart + plotWidth * 0.5;
    const movingEndX = plotStart + plotWidth * 0.75;
    const y = 150;

    fireEvent.touchStart(wrapper, {
      cancelable: true,
      touches: [
        { clientX: stationaryX, clientY: y },
        { clientX: movingStartX, clientY: y },
      ],
    });
    fireEvent.touchMove(wrapper, {
      cancelable: true,
      touches: [
        { clientX: stationaryX, clientY: y },
        { clientX: movingEndX, clientY: y },
      ],
    });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const next = onZoomChange.mock.calls.at(-1)?.[0];
    if (next == null) {
      throw new Error('Expected the pinch to update the viewport');
    }
    const dataAtStationaryFinger = initialX.start + stationaryFraction * (initialX.end - initialX.start);
    const dataAfterPinch = next.x.start + stationaryFraction * (next.x.end - next.x.start);
    expect(dataAfterPinch).toBeCloseTo(dataAtStationaryFinger);
  });

  it('does not route an accepted two-finger gesture through the tooltip touch handler', async () => {
    const onZoomChange = vi.fn<(viewport: Required<ZoomViewport>) => void>();
    const onTouchMove: NonNullable<React.ComponentProps<typeof LineChart>['onTouchMove']> = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data} onTouchMove={onTouchMove}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip isAnimationActive={false} />
        <Line type="monotone" dataKey="uv" isAnimationActive={false} />
        <ZoomAndPan axis="x" onZoomChange={onZoomChange} pinchThreshold={0} scrollbars={false} />
      </LineChart>,
    );
    const wrapper = container.querySelector<HTMLElement>('.recharts-wrapper');
    const tooltip = container.querySelector<HTMLElement>('.recharts-tooltip-wrapper');
    if (wrapper == null || tooltip == null) {
      throw new Error('Expected the chart wrapper and tooltip wrapper');
    }

    fireEvent.touchStart(wrapper, {
      cancelable: true,
      touches: [
        { clientX: 140, clientY: 150 },
        { clientX: 220, clientY: 150 },
      ],
    });
    fireEvent.touchMove(wrapper, {
      cancelable: true,
      touches: [
        { clientX: 120, clientY: 150 },
        { clientX: 240, clientY: 150 },
      ],
    });
    flushRaf();

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    expect(onTouchMove).toHaveBeenCalledTimes(1);
    expect(tooltip).toHaveTextContent('');
  });

  it('cancels a pending one-finger Tooltip update when a pinch claims the gesture', async () => {
    const onZoomChange = vi.fn<(viewport: Required<ZoomViewport>) => void>();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip isAnimationActive={false} />
        <Line type="monotone" dataKey="uv" isAnimationActive={false} />
        <ZoomAndPan axis="x" onZoomChange={onZoomChange} pinchThreshold={0} scrollbars={false} />
      </LineChart>,
    );
    const wrapper = container.querySelector<HTMLElement>('.recharts-wrapper');
    const tooltip = container.querySelector<HTMLElement>('.recharts-tooltip-wrapper');
    if (wrapper == null || tooltip == null) {
      throw new Error('Expected the chart wrapper and tooltip wrapper');
    }

    fireEvent.touchStart(wrapper, { cancelable: true, touches: [{ clientX: 200, clientY: 150 }] });
    // This unclaimed move schedules the Tooltip middleware's animation-frame work.
    fireEvent.touchMove(wrapper, { cancelable: true, touches: [{ clientX: 202, clientY: 150 }] });

    fireEvent.touchStart(wrapper, {
      cancelable: true,
      touches: [
        { clientX: 202, clientY: 150 },
        { clientX: 220, clientY: 150 },
      ],
    });
    fireEvent.touchMove(wrapper, {
      cancelable: true,
      touches: [
        { clientX: 190, clientY: 150 },
        { clientX: 240, clientY: 150 },
      ],
    });
    flushRaf();

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    expect(tooltip).toHaveTextContent('');
  });

  it('continues routing an unclaimed one-finger touch move to the tooltip', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip isAnimationActive={false} />
        <Line type="monotone" dataKey="uv" isAnimationActive={false} />
        <ZoomAndPan axis="x" scrollbars={false} />
      </LineChart>,
    );
    const wrapper = container.querySelector<HTMLElement>('.recharts-wrapper');
    const tooltip = container.querySelector<HTMLElement>('.recharts-tooltip-wrapper');
    if (wrapper == null || tooltip == null) {
      throw new Error('Expected the chart wrapper and tooltip wrapper');
    }

    fireEvent.touchStart(wrapper, { touches: [{ clientX: 200, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 210, clientY: 150 }] });
    flushRaf();

    await waitFor(() => expect(tooltip.textContent).not.toBe(''));
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

  it('does not combine spatially distant taps', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    touchTap(wrapper, 120, 120);
    touchTap(wrapper, 320, 120);
    flushRaf();

    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('does not register a panning touch as the first tap', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({
      axis: 'x',
      touchDrag: 'pan',
      initialZoom: { x: { start: 0.2, end: 0.6 } },
      onZoomChange,
    });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { cancelable: true, touches: [{ clientX: 210, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    touchTap(wrapper, 210, 150);
    flushRaf();

    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('invalidates a tap candidate on axis, pinch, and touchcancel sequences', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();
    const xAxis = wrapper.querySelector('.recharts-xAxis');
    if (xAxis == null) {
      throw new Error('Expected an x axis');
    }

    touchTap(wrapper, 150, 150);
    fireEvent.touchStart(xAxis, { cancelable: true, touches: [{ clientX: 150, clientY: 290 }] });
    fireEvent.touchEnd(xAxis, { touches: [] });
    touchTap(wrapper, 150, 150);

    fireEvent.touchStart(wrapper, {
      cancelable: true,
      touches: [
        { clientX: 130, clientY: 150 },
        { clientX: 170, clientY: 150 },
      ],
    });
    fireEvent.touchEnd(wrapper, { touches: [] });
    touchTap(wrapper, 150, 150);

    fireEvent.touchCancel(wrapper, { touches: [] });
    touchTap(wrapper, 150, 150);
    flushRaf();

    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('leaves outside touches to the page and keeps them out of double-tap and pinch state', async () => {
    const onZoomChange = vi.fn();
    const { wrapper } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, onZoomChange });
    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    onZoomChange.mockClear();

    touchTap(wrapper, 150, 150);
    expect(
      fireEvent.touchStart(wrapper, {
        cancelable: true,
        touches: [
          { clientX: 130, clientY: 290 },
          { clientX: 170, clientY: 290 },
        ],
      }),
    ).toBe(true);
    expect(
      fireEvent.touchMove(wrapper, {
        cancelable: true,
        touches: [
          { clientX: 100, clientY: 290 },
          { clientX: 200, clientY: 290 },
        ],
      }),
    ).toBe(true);
    fireEvent.touchEnd(wrapper, { touches: [] });
    touchTap(wrapper, 150, 150);
    flushRaf();

    expect(onZoomChange).not.toHaveBeenCalled();
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

    flushRaf();
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

    flushRaf();
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
    flushRaf();
    expect(onZoomChange).not.toHaveBeenCalled();
  });
});
