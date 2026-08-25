import * as React from 'react';
import { fireEvent, render, waitFor } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';
import type { ZoomAndPanProps } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function renderChart(zoom: ZoomAndPanProps) {
  return render(
    <LineChart width={400} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" isAnimationActive={false} />
      <ZoomAndPan {...zoom} />
    </LineChart>,
  );
}

describe('zoom scrollbars', () => {
  it('shows a scrollbar for the zoomed axis and not when un-zoomed', async () => {
    const { container, rerender } = renderChart({ axis: 'x' });
    expect(container.querySelector('.recharts-zoom-scrollbar-x')).toBeNull();

    rerender(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="uv" isAnimationActive={false} />
        <ZoomAndPan axis="x" viewport={{ x: { start: 0.2, end: 0.6 } }} />
      </LineChart>,
    );
    await waitFor(() => expect(container.querySelector('.recharts-zoom-scrollbar-x')).not.toBeNull());
  });

  it('renders a thumb sized to the visible window', async () => {
    const { container } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.25, end: 0.5 } } });
    const thumb = await waitFor(() => {
      const el = container.querySelector('.recharts-zoom-scrollbar-x .recharts-zoom-scrollbar-thumb');
      expect(el).not.toBeNull();
      return el as HTMLElement;
    });
    // The thumb has a finite, positive width (its geometry is derived from the viewport).
    expect(thumb.style.width).toMatch(/px$/);
    expect(parseFloat(thumb.style.width)).toBeGreaterThan(0);
  });

  it('keeps a minimum-size thumb inside the track near the end of the viewport', async () => {
    const { container } = renderChart({
      axis: 'x',
      maxZoom: 100,
      initialZoom: { x: { start: 0.94, end: 0.95 } },
    });
    const track = await waitFor(() => {
      const el = container.querySelector('.recharts-zoom-scrollbar-x') as HTMLElement;
      expect(el).not.toBeNull();
      return el;
    });
    const thumb = track.querySelector('.recharts-zoom-scrollbar-thumb') as HTMLElement;

    const trackLength = parseFloat(track.style.width);
    const thumbStart = parseFloat(thumb.style.left);
    const thumbLength = parseFloat(thumb.style.width);
    expect(thumbStart + thumbLength).toBeLessThanOrEqual(trackLength + 0.001);
  });

  it('does not render scrollbars when disabled', () => {
    const { container } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, scrollbars: false });
    expect(container.querySelector('.recharts-zoom-scrollbar-x')).toBeNull();
  });

  it('exposes a named range control and supports keyboard panning', async () => {
    const { getByRole } = renderChart({
      axis: 'x',
      initialZoom: { x: { start: 0.2, end: 0.6 } },
      scrollbarAriaLabels: { x: 'Visible x range' },
    });
    const scrollbar = await waitFor(() => getByRole('slider', { name: 'Visible x range' }));

    expect(scrollbar).toHaveAttribute('aria-orientation', 'horizontal');
    expect(Number(scrollbar.getAttribute('aria-valuenow'))).toBeCloseTo(0.2);

    fireEvent.keyDown(scrollbar, { key: 'ArrowRight' });
    await waitFor(() => expect(Number(scrollbar.getAttribute('aria-valuenow'))).toBeCloseTo(0.24));

    fireEvent.keyDown(scrollbar, { key: 'End' });
    await waitFor(() => expect(Number(scrollbar.getAttribute('aria-valuenow'))).toBeCloseTo(0.6));

    fireEvent.keyDown(scrollbar, { key: 'Home' });
    await waitFor(() => expect(Number(scrollbar.getAttribute('aria-valuenow'))).toBeCloseTo(0));
  });

  it('reports the displayed thumb position for a flipped y-axis', async () => {
    const { getByRole } = renderChart({
      axis: 'y',
      initialZoom: { y: { start: 0.2, end: 0.6 } },
      scrollbarAriaLabels: { y: 'Visible y range' },
    });
    const scrollbar = await waitFor(() => getByRole('slider', { name: 'Visible y range' }));

    expect(scrollbar).toHaveAttribute('aria-orientation', 'vertical');
    expect(Number(scrollbar.getAttribute('aria-valuenow'))).toBeCloseTo(0.4);

    fireEvent.keyDown(scrollbar, { key: 'ArrowDown' });
    await waitFor(() => expect(Number(scrollbar.getAttribute('aria-valuenow'))).toBeCloseTo(0.44));
  });

  it('queries coarse-pointer media once instead of on every drag-frame render', async () => {
    const originalMatchMedia = Object.getOwnPropertyDescriptor(window, 'matchMedia');
    const matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }));
    Object.defineProperty(window, 'matchMedia', { configurable: true, value: matchMedia });

    try {
      const { container, unmount } = renderChart({
        axis: 'x',
        initialZoom: { x: { start: 0.2, end: 0.6 } },
      });
      const thumb = await waitFor(() => {
        const element = container.querySelector<HTMLElement>('.recharts-zoom-scrollbar-thumb');
        expect(element).not.toBeNull();
        return element;
      });
      const callsAfterMount = matchMedia.mock.calls.length;
      expect(callsAfterMount).toBeGreaterThan(0);

      if (thumb == null) {
        throw new Error('Expected a scrollbar thumb');
      }
      fireEvent.mouseEnter(thumb);
      await waitFor(() => expect(thumb.style.background).toBe('rgba(0, 0, 0, 0.55)'));
      expect(matchMedia).toHaveBeenCalledTimes(callsAfterMount);
      unmount();
    } finally {
      if (originalMatchMedia == null) {
        Reflect.deleteProperty(window, 'matchMedia');
      } else {
        Object.defineProperty(window, 'matchMedia', originalMatchMedia);
      }
    }
  });
});
