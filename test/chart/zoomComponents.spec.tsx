import * as React from 'react';
import { act, render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  MouseWheelZoom,
  PanOnDrag,
  DragToZoom,
  DragToSelect,
  AxisZoom,
  ZoomPanKeyboard,
  PinchZoom,
  DoubleClickReset,
  ZoomScrollbar,
  useZoom,
} from '../../src';
import type { UseZoomResult } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

let zoomApi: UseZoomResult;

function Capture() {
  zoomApi = useZoom();
  return null;
}

function chartWith(node: React.ReactNode) {
  return (
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="uv" isAnimationActive={false} />
      {node}
      <Capture />
    </LineChart>
  );
}

function renderWith(node: React.ReactNode) {
  const utils = render(chartWith(node));
  return { ...utils, wrapper: utils.container.querySelector('.recharts-wrapper') as HTMLElement };
}

describe('zoom interaction components', () => {
  it('<MouseWheelZoom/> zooms on a plot wheel', async () => {
    const { wrapper } = renderWith(<MouseWheelZoom />);
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(zoomApi.isZoomed).toBe(true));
  });

  it('<ZoomPanKeyboard/> zooms on "+"', async () => {
    const { wrapper } = renderWith(<ZoomPanKeyboard />);
    fireEvent.keyDown(wrapper, { key: '+' });
    await waitFor(() => expect(zoomApi.isZoomed).toBe(true));
  });

  it('<ZoomPanKeyboard axis="x" minZoom={2}/> reset preserves y and obeys minZoom', async () => {
    const { wrapper } = renderWith(<ZoomPanKeyboard axis="x" minZoom={2} />);
    act(() =>
      zoomApi.setViewport({
        x: { start: 0.1, end: 0.3 },
        y: { start: 0.25, end: 0.55 },
      }),
    );

    fireEvent.keyDown(wrapper, { key: '0' });

    await waitFor(() => expect(zoomApi.viewport.x.end - zoomApi.viewport.x.start).toBeCloseTo(0.5, 5));
    expect(zoomApi.viewport.y).toEqual({ start: 0.25, end: 0.55 });
  });

  it('<AxisZoom/> wheel on the x-axis zooms only x', async () => {
    const { wrapper } = renderWith(<AxisZoom />);
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 296 });
    await waitFor(() => expect(zoomApi.viewport.x.end - zoomApi.viewport.x.start).toBeLessThan(1));
    expect(zoomApi.viewport.y).toEqual({ start: 0, end: 1 });
  });

  it('<DoubleClickReset/> resets after a zoom', async () => {
    const { wrapper } = renderWith(
      <>
        <MouseWheelZoom />
        <DoubleClickReset />
      </>,
    );
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(zoomApi.isZoomed).toBe(true));
    fireEvent.doubleClick(wrapper, { clientX: 200, clientY: 150 });
    await waitFor(() => expect(zoomApi.isZoomed).toBe(false));
  });

  it('<DoubleClickReset/> ignores embedded controls', async () => {
    const { getByRole } = renderWith(
      <>
        <DoubleClickReset />
        <foreignObject>
          <button type="button">embedded control</button>
        </foreignObject>
      </>,
    );

    act(() => zoomApi.setViewport({ x: { start: 0.2, end: 0.6 } }));
    await waitFor(() => expect(zoomApi.isZoomed).toBe(true));
    fireEvent.doubleClick(getByRole('button', { name: 'embedded control' }), { clientX: 200, clientY: 150 });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(zoomApi.isZoomed).toBe(true);
  });

  it('<ZoomScrollbar/> renders for the zoomed axis only', async () => {
    const { wrapper, container } = renderWith(
      <>
        <MouseWheelZoom />
        <ZoomScrollbar axis="x" />
      </>,
    );
    expect(container.querySelector('.recharts-zoom-scrollbar-x')).toBeNull();
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    await waitFor(() => expect(container.querySelector('.recharts-zoom-scrollbar-x')).not.toBeNull());
  });

  it('<ZoomScrollbar/> applies custom thickness, class and style', async () => {
    const { wrapper, container } = renderWith(
      <>
        <MouseWheelZoom />
        <ZoomScrollbar
          axis="x"
          thickness={16}
          thumbClassName="my-thumb"
          thumbStyle={{ background: 'rgb(255, 0, 0)' }}
        />
      </>,
    );
    fireEvent.wheel(wrapper, { deltaY: -100, clientX: 200, clientY: 150 });
    const thumb = await waitFor(() => {
      const el = container.querySelector('.recharts-zoom-scrollbar-x .recharts-zoom-scrollbar-thumb') as HTMLElement;
      expect(el).not.toBeNull();
      return el;
    });
    expect(thumb.className).toContain('my-thumb');
    expect(thumb.style.background).toContain('255, 0, 0');
    // For a horizontal scrollbar the thumb height is the (custom) bar thickness.
    expect(thumb.style.height).toBe('16px');
  });

  it('<DragToSelect/> selects with mobile double-tap then drag', async () => {
    const onSelect = vi.fn();
    const { wrapper } = renderWith(<DragToSelect onSelect={onSelect} />);
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 220, clientY: 100 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });

    await waitFor(() => expect(onSelect).toHaveBeenCalled());
    expect(onSelect.mock.calls.at(-1)![0]).toMatchObject({
      x: expect.objectContaining({ start: expect.any(Number), end: expect.any(Number) }),
      y: expect.objectContaining({ start: expect.any(Number), end: expect.any(Number) }),
    });
  });

  it('<DragToSelect axis="x"/> omits y from diagonal touch selection callbacks', async () => {
    const onSelect = vi.fn();
    const { wrapper } = renderWith(<DragToSelect axis="x" onSelect={onSelect} />);

    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 240, clientY: 90 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });

    await waitFor(() => expect(onSelect).toHaveBeenCalled());
    expect(onSelect.mock.calls.at(-1)![0].x).toEqual(expect.objectContaining({ start: expect.any(Number) }));
    expect(onSelect.mock.calls.at(-1)![0].y).toBeUndefined();
  });

  it('<DragToSelect/> does not zoom on a two-finger pinch', async () => {
    const onSelect = vi.fn();
    const { wrapper } = renderWith(<DragToSelect onSelect={onSelect} />);

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
    fireEvent.touchEnd(wrapper, { touches: [] });

    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(zoomApi.isZoomed).toBe(false);
    expect(onSelect).not.toHaveBeenCalled();
  });

  it('keeps touch decoration ownership reference-counted without removing focus outlines', async () => {
    const { container, rerender } = renderWith(
      <>
        <DragToZoom />
        <PinchZoom />
      </>,
    );
    const wrapper = container.querySelector('.recharts-wrapper') as HTMLElement;
    await waitFor(() => expect(wrapper.classList.contains('recharts-zoom-touch-interactions')).toBe(true));
    expect(wrapper.style.outline).toBe('');

    rerender(chartWith(<PinchZoom />));
    await waitFor(() => expect(wrapper.classList.contains('recharts-zoom-touch-interactions')).toBe(true));

    rerender(chartWith(null));
    await waitFor(() => expect(wrapper.classList.contains('recharts-zoom-touch-interactions')).toBe(false));
  });

  it('<DragToZoom/> zooms into the selected region on mobile double-tap then drag release', async () => {
    const { wrapper } = renderWith(<DragToZoom />);
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchEnd(wrapper, { touches: [] });
    fireEvent.touchStart(wrapper, { touches: [{ clientX: 150, clientY: 150 }] });
    fireEvent.touchMove(wrapper, { touches: [{ clientX: 150, clientY: 100 }] });
    expect(zoomApi.isZoomed).toBe(false);
    fireEvent.touchEnd(wrapper, { touches: [] });

    await waitFor(() => expect(zoomApi.isZoomed).toBe(true));
  });

  it('all interaction components mount together without crashing', () => {
    const { container } = renderWith(
      <>
        <MouseWheelZoom />
        <PanOnDrag />
        <DragToZoom modifier="shift" />
        <DragToSelect onSelect={() => {}} />
        <AxisZoom />
        <ZoomPanKeyboard />
        <PinchZoom />
        <DoubleClickReset />
        <ZoomScrollbar axis="x" />
      </>,
    );
    expect(container.querySelector('.recharts-line')).not.toBeNull();
  });

  describe.each([
    ['wheel first', true],
    ['scrollbar first', false],
  ])('mixed <MouseWheelZoom/> and <ZoomScrollbar/> composition: %s', (_label, wheelFirst) => {
    it('routes a scrollbar wheel event to the scrollbar only', async () => {
      const components = wheelFirst ? (
        <>
          <MouseWheelZoom />
          <ZoomScrollbar axis="x" />
        </>
      ) : (
        <>
          <ZoomScrollbar axis="x" />
          <MouseWheelZoom />
        </>
      );
      const { container } = renderWith(components);

      act(() => zoomApi.setViewport({ x: { start: 0.2, end: 0.6 } }));
      const scrollbar = await waitFor(() => {
        const el = container.querySelector('.recharts-zoom-scrollbar-x') as HTMLElement;
        expect(el).not.toBeNull();
        return el;
      });

      fireEvent.wheel(scrollbar, { deltaY: 100, clientX: 200, clientY: 250 });

      await waitFor(() => expect(zoomApi.viewport.x.start).not.toBeCloseTo(0.2));
      expect(zoomApi.viewport.x.end - zoomApi.viewport.x.start).toBeCloseTo(0.4, 5);
      expect(zoomApi.viewport.y).toEqual({ start: 0, end: 1 });
    });
  });
});
