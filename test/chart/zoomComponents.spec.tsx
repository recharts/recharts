import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
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

function renderWith(node: React.ReactNode) {
  const utils = render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line dataKey="uv" isAnimationActive={false} />
      {node}
      <Capture />
    </LineChart>,
  );
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
});
