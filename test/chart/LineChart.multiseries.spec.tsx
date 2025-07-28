import React from 'react';
import { describe, it, test, expect } from 'vitest';
import { createSelectorTestCase } from '../helper/createSelectorTestCase';
import { Line, LineChart, Tooltip, useActiveTooltipDataPoints } from '../../src';
import { expectLastCalledWith } from '../helper/expectLastCalledWith';

const data1 = [
  { numberIndex: 1, date: new Date('2024-10-01'), uv: 4000, amt: undefined },
  { numberIndex: 2, date: new Date('2024-10-02'), uv: 3000, amt: 2210 },
  { numberIndex: 3, date: new Date('2024-10-03'), uv: 2000, amt: 2290 },
  { numberIndex: 4, date: new Date('2024-10-04'), uv: 2780, amt: 2000 },
  { numberIndex: 5, date: new Date('2024-10-05'), uv: 1890, amt: 2181 },
];

const data2 = [
  { numberIndex: 2, date: new Date('2024-10-02'), amt: 2210 },
  { numberIndex: 3, date: new Date('2024-10-03'), amt: 2290 },
  { numberIndex: 4, date: new Date('2024-10-04'), amt: 2000 },
  { numberIndex: 5, date: new Date('2024-10-05'), amt: 2181 },
];

describe('LineChart with multiple data series', () => {
  // https://github.com/recharts/recharts/issues/3797
  const renderTestCase = createSelectorTestCase(({ children }) => (
    <LineChart width={500} height={300}>
      <Line data={data1} dataKey="uv" activeDot={{ r: 1 }} fill="red" />
      <Line data={data2} dataKey="amt" activeDot={{ r: 2 }} fill="green" />
      <Tooltip defaultIndex={1} />
      {children}
    </LineChart>
  ));

  test('useActiveTooltipDataPoints', () => {
    const { spy } = renderTestCase(useActiveTooltipDataPoints);
    expectLastCalledWith(spy, [data1[1], data2[1]]);
  });

  it('should activate dots on both lines when hovering over the chart', () => {
    const { container } = renderTestCase();
    const allActiveDots = container.querySelectorAll('.recharts-active-dot circle');
    expect(allActiveDots.length).toBe(2);
  });
});
