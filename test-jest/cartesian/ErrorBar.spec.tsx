import React from 'react';
import { render } from '@testing-library/react';
import { Bar, BarChart, Line, LineChart, ErrorBar } from '../../src';

describe('<ErrorBar />', () => {
  const barData = [
    { name: 'food', uv: 2000, pv: 2013, time: 1, uvError: [100, 50], pvError: [110, 20] },
    { name: 'cosmetic', uv: 3300, pv: 2000, time: 2, uvError: 120, pvError: 50 },
    { name: 'storage', uv: 3200, pv: 1398, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'digital', uv: 2800, pv: 2800, time: 4, uvError: 100, pvError: 30 },
  ];

  test('Renders Error Bars in Bar', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500} layout="vertical">
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-errorBar')).toHaveLength(4);
  });

  test('Renders Multiple Error Bars in Bar', () => {
    const { container } = render(
      <BarChart data={barData} width={500} height={500} layout="vertical">
        <Bar isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
          <ErrorBar dataKey="pvError" />
        </Bar>
      </BarChart>,
    );

    expect(container.querySelectorAll('.recharts-errorBar')).toHaveLength(8);
  });

  const lineData = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20], pvError: [90, 40] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40], pvError: [75, 20] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40, pvError: 20 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20, pvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28, pvError: 40 },
  ];

  test('Renders Error Bars in Line', () => {
    const { container } = render(
      <LineChart data={lineData} width={500} height={500}>
        <Line isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
        </Line>
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-errorBar')).toHaveLength(5);
  });

  test('Renders Multiple Error Bars in Line', () => {
    const { container } = render(
      <LineChart data={lineData} width={500} height={500}>
        <Line isAnimationActive={false} dataKey="uv">
          <ErrorBar dataKey="uvError" />
          <ErrorBar dataKey="pvError" />
        </Line>
      </LineChart>,
    );

    expect(container.querySelectorAll('.recharts-errorBar')).toHaveLength(10);
  });
});
