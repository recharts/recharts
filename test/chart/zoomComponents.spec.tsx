import * as React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  MouseWheelZoom,
  PanOnDrag,
  DragToZoom,
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

  it('all interaction components mount together without crashing', () => {
    const { container } = renderWith(
      <>
        <MouseWheelZoom />
        <PanOnDrag />
        <DragToZoom />
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
