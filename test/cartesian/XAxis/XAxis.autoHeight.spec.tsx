import React from 'react';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Bar, BarChart, XAxis } from '../../../src';
import { mockGetBoundingClientRect } from '../../helper/mockGetBoundingClientRect';
import { assertNotNull } from '../../helper/assertNotNull';
import { getCalculatedXAxisHeight } from '../../../src/util/XAxisUtils';

const data = [
  { name: 'Page A', amt: 2400 },
  { name: 'Page B', amt: 1398 },
  { name: 'Page C', amt: 9800 },
];

describe('<XAxis height="auto" />', () => {
  it('should render the x-axis with the given numeric height', () => {
    const xAxisHeight = 40;

    const { container } = render(
      <BarChart width={100} height={100} data={data}>
        <XAxis height={xAxisHeight} />
        <Bar dataKey="amt" />
      </BarChart>,
    );

    const xAxis = container.querySelector('.xAxis');
    assertNotNull(xAxis);
    const xAxisLine = xAxis.querySelector('line');

    expect(xAxis).toBeVisible();
    expect(xAxisLine).toHaveAttribute('height', String(xAxisHeight));
  });

  it('should render x-axis with dynamically calculated height when height="auto"', () => {
    // getBoundingClientRect returns 0 in jsdom, so mock a tick label height of 80px
    mockGetBoundingClientRect({ width: 30, height: 80 });

    const { container } = render(
      <BarChart width={400} height={300} data={data}>
        <XAxis dataKey="name" height="auto" />
        <Bar dataKey="amt" />
      </BarChart>,
    );

    // Get all tick elements from the rendered X-axis
    const tickElements = container.querySelectorAll('.recharts-cartesian-axis-tick-value');

    const xAxis = container.querySelector('.xAxis');
    assertNotNull(xAxis);
    const xAxisLine = xAxis.querySelector('line');

    const calculatedXAxisHeight = getCalculatedXAxisHeight({
      ticks: Array.from(tickElements),
      tickSize: 6,
      tickMargin: 2,
      label: undefined,
      labelGapWithTick: 5,
    });

    expect(calculatedXAxisHeight).toBe(88); // 80 height + 6 tick size + 2 tick margin
    expect(xAxisLine).toHaveAttribute('height', '88');
  });
});
