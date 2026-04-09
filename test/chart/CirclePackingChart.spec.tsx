import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { CirclePackingChart } from '../../src';

const hierarchyData = [
  {
    name: 'root-a',
    children: [
      { name: 'a1', value: 9 },
      { name: 'a2', value: 4 },
      { name: 'a3', value: 1 },
    ],
  },
  {
    name: 'root-b',
    children: [
      { name: 'b1', value: 16 },
      { name: 'b2', value: 9 },
    ],
  },
];

const siblingsData = [
  { name: 's1', radius: 40 },
  { name: 's2', radius: 40 },
  { name: 's3', radius: 20 },
  { name: 's4', radius: 10 },
];

describe('<CirclePackingChart />', () => {
  it('renders circles for hierarchy nodes', () => {
    const { container } = rechartsTestRender(
      <CirclePackingChart width={500} height={500} data={hierarchyData} dataKey="value" />,
    );

    const circles = container.querySelectorAll('.recharts-circle-packing-node');
    expect(circles.length).toBeGreaterThan(0);
  });

  it('supports siblings layout mode', () => {
    const { container } = rechartsTestRender(
      <CirclePackingChart
        width={500}
        height={500}
        data={siblingsData}
        layout="siblings"
        dataKey="radius"
        radiusKey="radius"
        showRoot={false}
      />,
    );

    const circles = container.querySelectorAll('.recharts-circle-packing-node');
    expect(circles).toHaveLength(siblingsData.length);
  });

  it('can render the enclosing circle in siblings mode', () => {
    const { container } = rechartsTestRender(
      <CirclePackingChart
        width={500}
        height={500}
        data={siblingsData}
        layout="siblings"
        dataKey="radius"
        radiusKey="radius"
        showRoot={false}
        includeEnclosingCircle
      />,
    );

    const circles = container.querySelectorAll('.recharts-circle-packing-node');
    expect(circles).toHaveLength(siblingsData.length + 1);
  });

  it('returns null for invalid dimensions', () => {
    const { container } = rechartsTestRender(
      <CirclePackingChart width={0} height={500} data={hierarchyData} dataKey="value" />,
    );

    expect(container.querySelector('svg')).toBeNull();
  });
});
