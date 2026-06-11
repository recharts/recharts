import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Brush, BrushZoomControls, Line, LineChart, useZoom, XAxis, YAxis, ZoomAndPan } from '../../src';
import type { UseZoomResult } from '../../src';
import { useOffsetInternal } from '../../src/context/chartLayoutContext';
import type { ChartOffsetInternal } from '../../src/util/types';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, value: i * 10 }));

let zoomApi: UseZoomResult, chartOffset: ChartOffsetInternal;

function CaptureZoom() {
  zoomApi = useZoom();
  return null;
}

function CaptureOffset() {
  chartOffset = useOffsetInternal();
  return null;
}

describe('<Brush /> zoom mode', () => {
  it('uses the zoom viewport instead of slicing chart data in zoom mode', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush mode="zoom" x={0} y={250} width={200} height={40} />
        <CaptureZoom />
      </LineChart>,
    );

    expect(zoomApi.viewport.x).toEqual({ start: 0, end: 1 });
    const traveller = container.querySelector('.recharts-brush-traveller') as SVGGElement;
    fireEvent.mouseDown(traveller, { clientX: 0, clientY: 250, pageX: 0, pageY: 250 });
    fireEvent.mouseMove(traveller, { clientX: 50, clientY: 250, pageX: 50, pageY: 250 });
    fireEvent.mouseUp(traveller);

    await waitFor(() => expect(zoomApi.viewport.x.start).toBeGreaterThan(0));
    expect(zoomApi.viewport.x.end).toBe(1);
    expect(container.querySelectorAll('.recharts-line-dot')).toHaveLength(data.length);
  });

  it('updates the brush window size when wheel zoom changes the viewport', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush mode="zoom" x={0} y={250} width={200} height={40} />
        <CaptureZoom />
      </LineChart>,
    );

    const brush = container.querySelector('.recharts-brush') as SVGGElement;
    const initialSlide = container.querySelector('.recharts-brush-slide') as SVGRectElement;
    const initialWidth = Number(initialSlide.getAttribute('width'));

    fireEvent.wheel(brush, { deltaY: -100, clientX: 100, clientY: 260 });

    await waitFor(() => {
      const slide = container.querySelector('.recharts-brush-slide') as SVGRectElement;
      expect(Number(slide.getAttribute('width'))).toBeLessThan(initialWidth);
    });
  });

  it('uses the full brush rail length to focus wheel zoom', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush mode="zoom" x={0} y={250} width={200} height={40} />
        <CaptureZoom />
      </LineChart>,
    );

    const brush = container.querySelector('.recharts-brush') as SVGGElement;
    fireEvent.wheel(brush, { deltaY: -100, clientX: 97.5, clientY: 260 });

    await waitFor(() => expect(zoomApi.viewport.x.end - zoomApi.viewport.x.start).toBeLessThan(1));
    const expectedStart = (1 - 1 / 1.15) / 2;
    expect(zoomApi.viewport.x.start).toBeCloseTo(expectedStart, 4);
  });

  it('does not let wheel events zoom the parent chart when brush wheel is disabled', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" scrollbars={false} wheel />
        <Brush mode="zoom" x={0} y={250} width={200} height={40} controls={<BrushZoomControls wheel={false} />} />
        <CaptureZoom />
      </LineChart>,
    );

    const brush = container.querySelector('.recharts-brush') as SVGGElement;
    const parentWheelListener = vi.fn();
    container.addEventListener('wheel', parentWheelListener);

    fireEvent.wheel(brush, { deltaY: -100, clientX: 100, clientY: 260 });

    expect(parentWheelListener).not.toHaveBeenCalled();
    expect(zoomApi.viewport.x).toEqual({ start: 0, end: 1 });
  });

  it('zooms the viewport on two-finger pinch in zoom mode', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush mode="zoom" x={0} y={250} width={200} height={40} />
        <CaptureZoom />
      </LineChart>,
    );

    const brush = container.querySelector('.recharts-brush') as SVGGElement;
    fireEvent.touchStart(brush, {
      touches: [
        { clientX: 60, clientY: 260 },
        { clientX: 140, clientY: 260 },
      ],
    });
    fireEvent.touchMove(brush, {
      touches: [
        { clientX: 40, clientY: 260 },
        { clientX: 160, clientY: 260 },
      ],
    });

    await waitFor(() => expect(zoomApi.viewport.x.end - zoomApi.viewport.x.start).toBeLessThan(1));
  });

  it('does not let pinch events zoom the parent chart when brush pinch is disabled', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" scrollbars={false} pinch />
        <Brush mode="zoom" x={0} y={250} width={200} height={40} controls={<BrushZoomControls pinch={false} />} />
        <CaptureZoom />
      </LineChart>,
    );

    const brush = container.querySelector('.recharts-brush') as SVGGElement;
    const parentTouchStartListener = vi.fn();
    const parentTouchMoveListener = vi.fn();
    container.addEventListener('touchstart', parentTouchStartListener);
    container.addEventListener('touchmove', parentTouchMoveListener);

    fireEvent.touchStart(brush, {
      touches: [
        { clientX: 60, clientY: 260 },
        { clientX: 140, clientY: 260 },
      ],
    });
    fireEvent.touchMove(brush, {
      touches: [
        { clientX: 40, clientY: 260 },
        { clientX: 160, clientY: 260 },
      ],
    });

    expect(parentTouchStartListener).not.toHaveBeenCalled();
    expect(parentTouchMoveListener).not.toHaveBeenCalled();
    expect(zoomApi.viewport.x).toEqual({ start: 0, end: 1 });
  });

  it('supports vertical zoom brush interactions on the y viewport', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush layout="vertical" mode="zoom" axis="y" x={350} y={20} width={30} height={200} />
        <CaptureZoom />
      </LineChart>,
    );

    expect(zoomApi.viewport.y).toEqual({ start: 0, end: 1 });
    const traveller = container.querySelector('.recharts-brush-traveller') as SVGGElement;
    expect(traveller).toHaveStyle({ cursor: 'row-resize' });

    fireEvent.mouseDown(traveller, { clientX: 365, clientY: 20, pageX: 365, pageY: 20 });
    fireEvent.mouseMove(traveller, { clientX: 365, clientY: 70, pageX: 365, pageY: 70 });
    fireEvent.mouseUp(traveller);

    await waitFor(() => expect(zoomApi.viewport.y).not.toEqual({ start: 0, end: 1 }));
    expect(zoomApi.viewport.x).toEqual({ start: 0, end: 1 });
  });

  it('reserves right-side layout space for a default vertical brush', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush layout="vertical" mode="zoom" axis="y" />
        <CaptureOffset />
      </LineChart>,
    );

    await waitFor(() => expect(chartOffset.brushRight).toBeGreaterThan(0));
    const background = container.querySelector('.recharts-brush > rect') as SVGRectElement;
    expect(Number(background.getAttribute('width'))).toBe(64);
    expect(Number(background.getAttribute('x'))).toBeCloseTo(chartOffset.left + chartOffset.width + 8);
  });

  it('labels a vertical zoom brush from the y-axis domain', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis type="number" domain={[0, 200]} />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="y" initialZoom={{ y: { start: 0.25, end: 0.75 } }} />
        <Brush
          layout="vertical"
          mode="zoom"
          axis="y"
          alwaysShowText
          tickFormatter={value => `v:${Math.round(Number(value))}`}
        />
      </LineChart>,
    );

    await waitFor(() => {
      expect(container.textContent).toContain('v:150');
      expect(container.textContent).toContain('v:50');
    });
  });

  it('allows one horizontal and one vertical zoom brush in the same chart', async () => {
    const { container } = render(
      <LineChart width={400} height={320} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <Brush mode="zoom" axis="x" x={40} y={260} width={250} height={40} />
        <Brush layout="vertical" mode="zoom" axis="y" x={350} y={20} width={30} height={200} />
        <CaptureZoom />
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-brush')).toHaveLength(2);
    const travellers = container.querySelectorAll('.recharts-brush-traveller');
    const horizontalTraveller = travellers[0] as SVGGElement;
    const verticalTraveller = travellers[2] as SVGGElement;

    fireEvent.mouseDown(horizontalTraveller, { clientX: 40, clientY: 280, pageX: 40, pageY: 280 });
    fireEvent.mouseMove(horizontalTraveller, { clientX: 80, clientY: 280, pageX: 80, pageY: 280 });
    fireEvent.mouseUp(horizontalTraveller);
    await waitFor(() => expect(zoomApi.viewport.x).not.toEqual({ start: 0, end: 1 }));

    fireEvent.mouseDown(verticalTraveller, { clientX: 365, clientY: 20, pageX: 365, pageY: 20 });
    fireEvent.mouseMove(verticalTraveller, { clientX: 365, clientY: 60, pageX: 365, pageY: 60 });
    fireEvent.mouseUp(verticalTraveller);
    await waitFor(() => expect(zoomApi.viewport.y).not.toEqual({ start: 0, end: 1 }));
  });
});
