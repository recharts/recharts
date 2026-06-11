import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import {
  Line,
  LineChart,
  Minimap,
  MinimapDrag,
  MinimapKeyboard,
  MinimapPinch,
  MinimapWheel,
  ResponsiveContainer,
  XAxis,
  YAxis,
  ZoomAndPan,
} from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, value: i * 10 }));

describe('<Minimap />', () => {
  it('renders a panorama child and viewport overlay', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} />
        <Minimap x={0} y={0} width={120} height={60} axis="x">
          <LineChart>
            <Line dataKey="value" isAnimationActive={false} />
          </LineChart>
        </Minimap>
      </LineChart>,
    );

    await waitFor(() => expect(container.querySelector('.recharts-minimap')).not.toBeNull());
    await waitFor(() => expect(container.querySelector('.recharts-minimap .recharts-line')).not.toBeNull());
    expect(container.querySelector('.recharts-minimap-viewport')).not.toBeNull();
    expect(container.querySelectorAll('.recharts-minimap-shade').length).toBeGreaterThan(0);
  });

  it('renders in a z-index layer above chart series by default', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} />
        <Minimap x={0} y={0} width={120} height={60} axis="x" />
      </LineChart>,
    );

    await waitFor(() => {
      expect(container.querySelector('.recharts-zIndex-layer_2500 .recharts-minimap')).not.toBeNull();
    });
  });

  it.each(['x', 'y'] as const)('renders the full viewport window when controls are limited to %s', async axis => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="xy" initialZoom={{ x: { start: 0.2, end: 0.5 }, y: { start: 0.1, end: 0.4 } }} />
        <Minimap x={0} y={0} width={100} height={40} axis={axis} padding={{ top: 0, right: 0, bottom: 0, left: 0 }} />
      </LineChart>,
    );

    await waitFor(() => {
      const viewport = container.querySelector('.recharts-minimap-viewport') as SVGRectElement;
      expect(Number(viewport.getAttribute('x'))).toBeCloseTo(20, 5);
      expect(Number(viewport.getAttribute('width'))).toBeCloseTo(30, 5);
      expect(Number(viewport.getAttribute('y'))).toBeCloseTo(24, 5);
      expect(Number(viewport.getAttribute('height'))).toBeCloseTo(12, 5);
    });
  });

  it('drags the viewport to pan the shared zoom state', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} onZoomChange={onZoomChange} />
        <Minimap x={0} y={0} width={100} height={40} axis="x" padding={{ top: 0, right: 0, bottom: 0, left: 0 }} />
      </LineChart>,
    );

    const viewport = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-viewport') as SVGRectElement;
      expect(el.getAttribute('width')).toBe('30');
      return el;
    });
    expect(onZoomChange).toHaveBeenCalled();
    onZoomChange.mockClear();

    const overlay = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
    expect(viewport.getAttribute('x')).toBe('20');
    fireEvent.mouseDown(overlay, { button: 0, clientX: 30, clientY: 20 });
    fireEvent.mouseMove(overlay, { clientX: 40, clientY: 20 });
    fireEvent.mouseUp(overlay, { clientX: 40, clientY: 20 });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const next = onZoomChange.mock.calls.at(-1)![0];
    expect(next.x.start).toBeGreaterThan(0.2);
    expect(next.x.end - next.x.start).toBeCloseTo(0.3, 5);
  });

  it('supports one-finger touch drag', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} onZoomChange={onZoomChange} />
        <Minimap x={0} y={0} width={100} height={40} axis="x" padding={{ top: 0, right: 0, bottom: 0, left: 0 }} />
      </LineChart>,
    );

    const overlay = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
      expect(el).not.toBeNull();
      return el;
    });
    onZoomChange.mockClear();

    fireEvent.touchStart(overlay, { touches: [{ clientX: 30, clientY: 20 }] });
    fireEvent.touchMove(overlay, { touches: [{ clientX: 40, clientY: 20 }] });
    fireEvent.touchEnd(overlay);

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const next = onZoomChange.mock.calls.at(-1)![0];
    expect(next.x.start).toBeGreaterThan(0.2);
  });

  it('does not jump or pan on one-finger touch outside the viewport', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} onZoomChange={onZoomChange} />
        <Minimap x={0} y={0} width={100} height={40} axis="x" padding={{ top: 0, right: 0, bottom: 0, left: 0 }} />
      </LineChart>,
    );

    const overlay = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
      expect(el).not.toBeNull();
      return el;
    });
    onZoomChange.mockClear();

    fireEvent.touchStart(overlay, { touches: [{ clientX: 80, clientY: 20 }] });
    fireEvent.touchMove(overlay, { touches: [{ clientX: 90, clientY: 20 }] });
    fireEvent.touchEnd(overlay);

    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('does not jump from the touch pointerdown before a pinch starts', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} onZoomChange={onZoomChange} />
        <Minimap x={0} y={0} width={100} height={40} axis="x" padding={{ top: 0, right: 0, bottom: 0, left: 0 }} />
      </LineChart>,
    );

    const overlay = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
      expect(el).not.toBeNull();
      return el;
    });
    onZoomChange.mockClear();

    fireEvent.pointerDown(overlay, { pointerId: 1, pointerType: 'touch', clientX: 80, clientY: 20 });

    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('zooms from two-finger pinch on the minimap overlay', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" onZoomChange={onZoomChange} />
        <Minimap x={0} y={0} width={100} height={40} axis="x" padding={{ top: 0, right: 0, bottom: 0, left: 0 }} />
      </LineChart>,
    );

    const overlay = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
      expect(el).not.toBeNull();
      return el;
    });
    onZoomChange.mockClear();

    fireEvent.touchStart(overlay, {
      touches: [
        { clientX: 40, clientY: 20 },
        { clientX: 60, clientY: 20 },
      ],
    });
    fireEvent.touchMove(overlay, {
      touches: [
        { clientX: 30, clientY: 20 },
        { clientX: 70, clientY: 20 },
      ],
    });
    fireEvent.touchEnd(overlay);

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const next = onZoomChange.mock.calls.at(-1)![0];
    expect(next.x.end - next.x.start).toBeLessThan(1);
  });

  it('supports configurable minimap positions', async () => {
    const { container, rerender } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" />
        <Minimap position="top-left" width={100} height={40} axis="x" />
      </LineChart>,
    );

    const topLeft = await waitFor(() => {
      const frame = container.querySelector('.recharts-minimap > rect') as SVGRectElement;
      expect(frame).not.toBeNull();
      return { x: Number(frame.getAttribute('x')), y: Number(frame.getAttribute('y')) };
    });

    rerender(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" />
        <Minimap position="bottom-right" width={100} height={40} axis="x" />
      </LineChart>,
    );

    await waitFor(() => {
      const frame = container.querySelector('.recharts-minimap > rect') as SVGRectElement;
      expect(Number(frame.getAttribute('x'))).toBeGreaterThan(topLeft.x);
      expect(Number(frame.getAttribute('y'))).toBeGreaterThan(topLeft.y);
    });
  });

  it('zooms from keyboard interaction on the minimap overlay', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" onZoomChange={onZoomChange} />
        <Minimap x={0} y={0} width={100} height={40} axis="x" padding={{ top: 0, right: 0, bottom: 0, left: 0 }} />
      </LineChart>,
    );

    const overlay = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
      expect(el).not.toBeNull();
      return el;
    });
    onZoomChange.mockClear();

    fireEvent.keyDown(overlay, { key: '+' });

    await waitFor(() => expect(onZoomChange).toHaveBeenCalled());
    const next = onZoomChange.mock.calls.at(-1)![0];
    expect(next.x.end - next.x.start).toBeLessThan(1);
  });

  it('does not let wheel events zoom the parent chart when minimap wheel is disabled', async () => {
    const onZoomChange = vi.fn();
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" scrollbars={false} wheel onZoomChange={onZoomChange} />
        <Minimap
          x={0}
          y={0}
          width={100}
          height={40}
          axis="x"
          controls={
            <>
              <MinimapDrag />
              <MinimapWheel enabled={false} />
              <MinimapPinch />
              <MinimapKeyboard />
            </>
          }
          padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
        />
      </LineChart>,
    );

    const overlay = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
      expect(el).not.toBeNull();
      return el;
    });
    const parentWheelListener = vi.fn();
    container.addEventListener('wheel', parentWheelListener);
    onZoomChange.mockClear();

    fireEvent.wheel(overlay, { deltaY: -100, clientX: 50, clientY: 20 });

    expect(parentWheelListener).not.toHaveBeenCalled();
    expect(onZoomChange).not.toHaveBeenCalled();
  });

  it('keeps minimap cursors with custom controls', async () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line dataKey="value" isAnimationActive={false} />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} />
        <Minimap
          x={0}
          y={0}
          width={100}
          height={40}
          axis="x"
          controls={
            <>
              <MinimapDrag />
              <MinimapWheel />
              <MinimapPinch />
              <MinimapKeyboard />
            </>
          }
          padding={{ top: 0, right: 0, bottom: 0, left: 0 }}
        />
      </LineChart>,
    );

    const overlay = await waitFor(() => {
      const el = container.querySelector('.recharts-minimap-overlay') as SVGRectElement;
      expect(el).not.toBeNull();
      return el;
    });

    fireEvent.mouseMove(overlay, { clientX: 30, clientY: 20 });
    await waitFor(() => expect(overlay).toHaveStyle({ cursor: 'grab' }));

    fireEvent.mouseDown(overlay, { button: 0, clientX: 30, clientY: 20 });
    await waitFor(() => expect(overlay).toHaveStyle({ cursor: 'grabbing' }));

    fireEvent.mouseUp(overlay, { clientX: 30, clientY: 20 });
    await waitFor(() => expect(overlay).toHaveStyle({ cursor: 'grab' }));
  });

  it('renders correctly when parent chart is inside ResponsiveContainer', async () => {
    const { container } = render(
      <ResponsiveContainer width={400} height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="value" isAnimationActive={false} />
          <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.5 } }} />
          <Minimap x={0} y={0} width={120} height={60} axis="x">
            <LineChart>
              <Line dataKey="value" isAnimationActive={false} />
            </LineChart>
          </Minimap>
        </LineChart>
      </ResponsiveContainer>,
    );

    await waitFor(() => expect(container.querySelector('.recharts-minimap')).not.toBeNull());

    // Verify the minimap preview chart is rendered
    const minimapLines = container.querySelectorAll('.recharts-minimap .recharts-line');
    expect(minimapLines.length).toBeGreaterThan(0);

    // Verify the viewport and shading rectangles are present
    expect(container.querySelector('.recharts-minimap-viewport')).not.toBeNull();
    expect(container.querySelectorAll('.recharts-minimap-shade').length).toBeGreaterThan(0);
  });
});
