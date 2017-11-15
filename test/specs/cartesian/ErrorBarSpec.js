import React from 'react';
import { expect } from 'chai';
import { Bar, BarChart, Line, LineChart, ErrorBar } from 'recharts';
import { render } from 'enzyme';

describe('<ErrorBar />', () => {
  const barData = [
    { name: 'food', uv: 2000, pv: 2013, time: 1, uvError: [100, 50], pvError: [110, 20] },
    { name: 'cosmetic', uv: 3300, pv: 2000, time: 2, uvError: 120, pvError: 50 },
    { name: 'storage', uv: 3200, pv: 1398, time: 3, uvError: [120, 80], pvError: [200, 100] },
    { name: 'digital', uv: 2800, pv: 2800, time: 4, uvError: 100, pvError: 30 },
  ];

  it('Renders Error Bars in Bar', () => {
    const wrapper = render(
      <BarChart data={barData} width={500} height={500} layout="vertical">
        <Bar
          isAnimationActive={false}
          label={{ label: 'test' }}
          dataKey="uv"
        >
          <ErrorBar dataKey="uvError" />
        </Bar>
      </BarChart>,
    );

    expect(wrapper.find('.recharts-errorBar').length).to.equal(4);
  });

  it('Renders Multiple Error Bars in Bar', () => {
    const wrapper = render(
      <BarChart data={barData} width={500} height={500} layout="vertical">
        <Bar
          isAnimationActive={false}
          label={{ label: 'test' }}
          dataKey="uv"
        >
          <ErrorBar dataKey="uvError" />
          <ErrorBar dataKey="pvError" />
        </Bar>
      </BarChart>,
    );

    expect(wrapper.find('.recharts-errorBar').length).to.equal(8);
  });

  const lineData = [
    { name: 'Page A', uv: 1000, pv: 2400, amt: 2400, uvError: [75, 20], pvError: [90, 40] },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400, uvError: [90, 40], pvError: [75, 20] },
    { name: 'Page C', uv: 280, pv: 1398, amt: 2400, uvError: 40, pvError: 20 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400, uvError: 20, pvError: 28 },
    { name: 'Page I', uv: 189, pv: 4800, amt: 2400, uvError: 28, pvError: 40 },
  ];

  it('Renders Error Bars in Line', () => {
    const wrapper = render(
      <LineChart data={lineData} width={500} height={500}>
        <Line
          isAnimationActive={false}
          label={{ label: 'test' }}
          dataKey="uv"
        >
          <ErrorBar dataKey="uvError" />
        </Line>
      </LineChart>,
    );

    expect(wrapper.find('.recharts-errorBar').length).to.equal(5);
  });

  it('Renders Multiple Error Bars in Line', () => {
    const wrapper = render(
      <LineChart data={lineData} width={500} height={500}>
        <Line
          isAnimationActive={false}
          label={{ label: 'test' }}
          dataKey="uv"
        >
          <ErrorBar dataKey="uvError" />
          <ErrorBar dataKey="pvError" />
        </Line>
      </LineChart>,
    );

    expect(wrapper.find('.recharts-errorBar').length).to.equal(10);
  });
});
