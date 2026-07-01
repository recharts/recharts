import * as React from 'react';
import { render, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

function renderChart(zoom: any) {
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

  it('does not render scrollbars when disabled', async () => {
    const { container } = renderChart({ axis: 'x', initialZoom: { x: { start: 0.2, end: 0.6 } }, scrollbars: false });
    await new Promise(resolve => {
      setTimeout(resolve, 0);
    });
    expect(container.querySelector('.recharts-zoom-scrollbar-x')).toBeNull();
  });
});
