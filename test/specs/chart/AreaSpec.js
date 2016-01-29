import React from 'react';
import { expect } from 'chai';
import { AreaChart, Area } from 'recharts';
import { mount, render, spy } from 'enzyme';
import sinon from 'sinon';

describe('<AreaChart />', () => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 300, pv: 4567, amt: 2400},
    {name: 'Page C', uv: 300, pv: 1398, amt: 2400},
    {name: 'Page D', uv: 200, pv: 9800, amt: 2400},
    {name: 'Page E', uv: 278, pv: 3908, amt: 2400},
    {name: 'Page F', uv: 189, pv: 4800, amt: 2400}];

  it('renders 2 path in simple AreaChart', () => {
    let wrapper = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
      </AreaChart>
    );
    expect(wrapper.find('path').length).to.equal(2);
  });

  // @TODO wait for implements
  // it.only('simulate mouseEnter on AreaChart', () => {
  //   const onMouseEnter = sinon.spy();
  //   const wrapper = mount(
  //     <AreaChart onMouseEnter={onMouseEnter} width={100} height={50} data={data}>
  //       <Area type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
  //     </AreaChart>
  //   );
  //   const area = wrapper.find(Area);
  //   area.simulate('mouseEnter');
  //   expect(onMouseEnter.calledOnce).to.equal(true);
  // });
});