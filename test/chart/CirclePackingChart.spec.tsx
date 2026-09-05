import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { CirclePackingChart, Tooltip } from '../../src';
import { useChartHeight, useChartWidth, useMargin } from '../../src/context/chartLayoutContext';
import { getTooltip } from '../component/Tooltip/tooltipTestHelpers';
import { assertNotNull } from '../helper/assertNotNull';

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

  it('supports Tooltip interactions', async () => {
    const { container } = rechartsTestRender(
      <CirclePackingChart
        width={500}
        height={500}
        data={siblingsData}
        layout="siblings"
        dataKey="radius"
        radiusKey="radius"
        showRoot={false}
      >
        <Tooltip />
      </CirclePackingChart>,
    );

    const firstCircle = container.querySelector<SVGCircleElement>(
      '.recharts-circle-packing-depth-1 .recharts-circle-packing-node',
    );
    assertNotNull(firstCircle);
    fireEvent.mouseEnter(firstCircle, { clientX: 100, clientY: 100 });

    await waitFor(() => {
      expect(getTooltip(container)).toBeVisible();
    });
  });

  it('calls mouse and click handlers with node payload', () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const onClick = vi.fn();
    const { container } = rechartsTestRender(
      <CirclePackingChart
        width={500}
        height={500}
        data={siblingsData}
        layout="siblings"
        dataKey="radius"
        radiusKey="radius"
        showRoot={false}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />,
    );

    const firstCircle = container.querySelector<SVGCircleElement>(
      '.recharts-circle-packing-depth-1 .recharts-circle-packing-node',
    );
    assertNotNull(firstCircle);

    fireEvent.mouseEnter(firstCircle);
    fireEvent.click(firstCircle);
    fireEvent.mouseLeave(firstCircle);

    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
    expect(onMouseEnter.mock.calls[0][0]).toMatchObject({ name: 's1', value: 40, isLeaf: true });
  });

  it('reports chart dimensions and margin to hooks', () => {
    const HookProbe = () => {
      const width = useChartWidth();
      const height = useChartHeight();
      const margin = useMargin();
      return (
        <text data-testid="hook-probe">
          {`${width}-${height}-${margin.left}-${margin.right}-${margin.top}-${margin.bottom}`}
        </text>
      );
    };

    const { getByText } = rechartsTestRender(
      <CirclePackingChart width={320} height={240} data={hierarchyData} dataKey="value">
        <HookProbe />
      </CirclePackingChart>,
    );

    expect(getByText('320-240-0-0-0-0')).toBeInTheDocument();
  });

  it('adds aria labels to rendered circles', () => {
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

    const firstCircle = container.querySelector<SVGCircleElement>(
      '.recharts-circle-packing-depth-1 .recharts-circle-packing-node',
    );
    assertNotNull(firstCircle);
    expect(firstCircle).toHaveAttribute('aria-label', 's1: 40');
  });

  it('returns null for invalid dimensions', () => {
    const { container } = rechartsTestRender(
      <CirclePackingChart width={0} height={500} data={hierarchyData} dataKey="value" />,
    );

    expect(container.querySelector('svg')).toBeNull();
  });
});
