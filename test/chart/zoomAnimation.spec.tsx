import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Line, LineChart, XAxis, YAxis, ZoomAndPan } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50 }));

describe('animation while zoomed', () => {
  it('renders the line at its final geometry when zoomed even with animation enabled', () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="linear" dataKey="uv" isAnimationActive />
        <ZoomAndPan axis="x" initialZoom={{ x: { start: 0.2, end: 0.6 } }} />
      </LineChart>,
    );
    const curve = container.querySelector('.recharts-line-curve');
    expect(curve).not.toBeNull();
    // Animation is suppressed while zoomed, so the path is drawn fully (several segments), not stuck
    // at an un-started animation frame.
    const d = curve?.getAttribute('d') ?? '';
    expect((d.match(/L/g) ?? []).length).toBeGreaterThan(1);
  });

  it('still renders a normal (un-zoomed) animated chart', () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="linear" dataKey="uv" isAnimationActive={false} />
        <ZoomAndPan axis="x" />
      </LineChart>,
    );
    expect(container.querySelector('.recharts-line-curve')).not.toBeNull();
  });
});
