import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { AreaChart, Area } from 'recharts';

describe('<AreaChart />', () => {
  const data = [
    {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 300, pv: 1398, amt: 2400},
    {name: 'Page C', uv: 200, pv: 9800, amt: 2400},
    {name: 'Page D', uv: 278, pv: 3908, amt: 2400},
    {name: 'Page E', uv: 189, pv: 4800, amt: 2400}
  ];
  
  let component = ReactTestUtils.renderIntoDocument(
    <AreaChart width={100} height={50} data={data}>
      <Area type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
    </AreaChart>
  );

  it('renders 2 path in simple AreaChart', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'path');
    expect(wrapper.length).to.equal(2);
  });
});