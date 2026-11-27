import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, LabelList, Pie, PieChart } from '../../src';

const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 30 },
  { name: 'C', value: 20 },
];

function getHalos(container: Element): Element[] {
  return Array.from(container.querySelectorAll('text')).filter(text => text.hasAttribute('stroke'));
}

describe('<LabelList /> halo', () => {
  it('renders one halo per label', () => {
    const { container } = render(
      <BarChart width={300} height={200} data={data}>
        <Bar dataKey="value" isAnimationActive={false}>
          <LabelList dataKey="name" position="inside" halo={{ stroke: 'gold' }} />
        </Bar>
      </BarChart>,
    );

    const halos = getHalos(container);
    expect(halos).toHaveLength(data.length);
    halos.forEach(text => {
      expect(text).toHaveAttribute('stroke', 'gold');
      expect(text.closest('.recharts-label-list')).not.toBeNull();
    });
  });

  it('does not render halos by default', () => {
    const { container } = render(
      <BarChart width={300} height={200} data={data}>
        <Bar dataKey="value" isAnimationActive={false}>
          <LabelList dataKey="name" position="inside" />
        </Bar>
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-label')).toHaveLength(data.length);
    expect(getHalos(container)).toHaveLength(0);
  });

  it('renders halos from the implicit label prop of a graphical item', () => {
    const { container } = render(
      <BarChart width={300} height={200} data={data}>
        <Bar dataKey="value" isAnimationActive={false} label={{ position: 'inside', halo: true }} />
      </BarChart>,
    );

    expect(getHalos(container)).toHaveLength(data.length);
  });

  it('renders halos in polar charts', () => {
    const { container } = render(
      <PieChart width={300} height={300}>
        <Pie data={data} dataKey="value" isAnimationActive={false}>
          <LabelList dataKey="name" position="inside" halo />
        </Pie>
      </PieChart>,
    );

    expect(getHalos(container)).toHaveLength(data.length);
  });
});
