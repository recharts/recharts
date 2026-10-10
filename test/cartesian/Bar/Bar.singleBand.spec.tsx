import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, XAxis, YAxis } from '../../../src';

const time = new Date('2025-01-01').getTime();

function getBarWidths(container: Element): number[] {
  return Array.from(container.querySelectorAll('.recharts-bar-rectangle path')).map(path => {
    const match = /^M\s*[-\d.]+,[-\d.]+\s*h\s*([-\d.]+)/.exec(path.getAttribute('d') ?? '');
    return Math.abs(Number(match?.[1]));
  });
}

describe('Bar with a single tick on a numeric axis', () => {
  it('renders one bar for a single datum on a time-scale number axis', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ interval: time, count: 10 }]}>
        <XAxis dataKey="interval" type="number" scale="time" domain={[time, time]} />
        <YAxis dataKey="count" type="number" />
        <Bar dataKey="count" isAnimationActive={false} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(1);
  });

  it('renders one bar for a single datum on a default number axis', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ x: 5, count: 10 }]}>
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" isAnimationActive={false} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(1);
    expect(getBarWidths(container)[0]).toBeGreaterThan(0);
  });

  it('still renders two bars for two data points', () => {
    const { container } = render(
      <BarChart
        width={400}
        height={300}
        data={[
          { x: 5, count: 10 },
          { x: 6, count: 4 },
        ]}
      >
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" isAnimationActive={false} />
      </BarChart>,
    );
    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(2);
  });

  it('lets an explicit barSize win over the axis span', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ x: 5, count: 10 }]}>
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" barSize={20} isAnimationActive={false} />
      </BarChart>,
    );
    expect(getBarWidths(container)).toEqual([20]);
  });

  it('lets maxBarSize cap the bar width', () => {
    const { container } = render(
      <BarChart width={400} height={300} data={[{ x: 5, count: 10 }]}>
        <XAxis dataKey="x" type="number" />
        <Bar dataKey="count" maxBarSize={30} isAnimationActive={false} />
      </BarChart>,
    );
    expect(getBarWidths(container)).toEqual([30]);
  });
});
