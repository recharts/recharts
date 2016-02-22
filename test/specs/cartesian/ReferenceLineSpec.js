import React from 'react';
import { expect } from 'chai';
import { BarChart, ReferenceLine, XAxis, YAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<ReferenceLine />', () => {
  const data = [
    { name: '201102', uv: -6.11, pv: 0 },
    { name: '201103', uv: 0.39, pv: 0 },
    { name: '201104', uv: -1.37, pv: 0 },
    { name: '201105', uv: 1.16, pv: 0 },
    { name: '201106', uv: 1.29, pv: 0 },
    { name: '201107', uv: 0.09, pv: 0 },
    { name: '201108', uv: 0.53, pv: 0 },
    { name: '201109', uv: 2.52, pv: 0 },
    { name: '201110', uv: 0.79, pv: 0 },
    { name: '201111', uv: 2.94, pv: 0 },
    { name: '201112', uv: 4.3, pv: 0 },
  ];

  it('renders 1 line in simple ReferenceLine', () => {
    const wrapper = render(
      <BarChart width={1100} height={250} barGap={2} barSize={6} data={data} margin={{ top: 20, right: 60, bottom: 0, left: 20 }}>
        <XAxis dataKey="name"/>
        <YAxis tickCount={7}/>
        <ReferenceLine x={0} stroke="#666"/>
        <ReferenceLine y='201102' stroke="#666"/>
      </BarChart>
    );
    expect(wrapper.find('.recharts-reference-line-line').length).to.equal(2);
  });
});
