import * as React from 'react';
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Bar, BarChart, CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from '../../src';

const data = Array.from({ length: 20 }, (_, i) => ({ name: `#${i}`, uv: 1000 + i * 50, pv: 800 + i * 30 }));

describe('cartesian chart with zoom prop', () => {
  it('renders a LineChart without crashing when zoom is enabled (boolean)', () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data} zoom>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line')).toHaveLength(1);
  });

  it('renders with an axis-constrained zoom options object', () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data} zoom={{ axis: 'x', maxZoom: 10, wheel: true, pan: false }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="uv" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line')).toHaveLength(1);
  });

  it('renders a BarChart with zoom enabled', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={data} zoom="x">
        <XAxis dataKey="name" />
        <YAxis />
        <Bar dataKey="uv" />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle').length).toBeGreaterThan(0);
  });

  it('does not change rendering when zoom is omitted', () => {
    const { container } = render(
      <LineChart width={400} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Line type="monotone" dataKey="uv" />
      </LineChart>,
    );
    expect(container.querySelectorAll('.recharts-line')).toHaveLength(1);
  });
});
