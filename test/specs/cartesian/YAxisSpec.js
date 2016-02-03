import React from 'react';
import { expect } from 'chai';
import { AreaChart, Area, XAxis, YAxis, CartesianAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<XAxis />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page C', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
  ];

  const wrapper = mount(
    <AreaChart width={600} height={400} data={data}>
      <YAxis type="number" yAxisId={0} stroke="#ff7300"/>
      <YAxis type="number" orient="right" yAxisId={1} stroke="#387908"/>
      <YAxis type="number" orient="right" yAxisId={2} stroke="#38abc8"/>
      <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" strokeWidth={2} yAxisId={0}/>
      <Area dataKey="pv" stroke="#387908" fill="#387908" strokeWidth={2} yAxisId={1}/>
      <Area dataKey="amt" stroke="#38abc8" fill="#38abc8" strokeWidth={2} yAxisId={2}/>
    </AreaChart>
  );

  it('renders 3 y-CartesianAxis in AreaChart', () => {
    expect(wrapper.find(CartesianAxis).length).to.equal(3);
  });
});
