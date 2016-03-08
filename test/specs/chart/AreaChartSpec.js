import React from 'react';
import { expect } from 'chai';
import { AreaChart, Area, XAxis, YAxis } from 'recharts';
import { mount, render, spy } from 'enzyme';
import sinon from 'sinon';

describe('<AreaChart />', () => {
  const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 300, pv: 4567, amt: 2400},
    {name: 'Page C', uv: 300, pv: 1398, amt: 2400},
    {name: 'Page D', uv: 200, pv: 9800, amt: 2400},
    {name: 'Page E', uv: 278, pv: 3908, amt: 2400},
    {name: 'Page F', uv: 189, pv: 4800, amt: 2400}];

  it('Renders 2 path in simple AreaChart', () => {
    let wrapper = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
      </AreaChart>
    );
    expect(wrapper.find('.recharts-area-area').length).to.equal(1);
    expect(wrapper.find('.recharts-area-curve').length).to.equal(1);
  });

  it('Renders 4 path in a stacked AreaChart', () => {
    let wrapper = render(
      <AreaChart width={100} height={50} data={data}>
        <Area type='monotone' dataKey='uv' stackId="test" stroke='#ff7300' fill='#ff7300'/>
        <Area type='monotone' dataKey='pv' stackId="test" stroke='#ff7300' fill='#ff7300'/>
      </AreaChart>
    );
    expect(wrapper.find('.recharts-area-area').length).to.equal(2);
    expect(wrapper.find('.recharts-area-curve').length).to.equal(2);
  });

  it('Renders 4 path in a vertical AreaChart', () => {
    let wrapper = render(
      <AreaChart width={100} height={50} data={data} layout="vertical">
        <XAxis type="number"/>
        <YAxis dataKey="name" type="category"/>
        <Area type='monotone' dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
      </AreaChart>
    );
    expect(wrapper.find('.recharts-area-area').length).to.equal(1);
    expect(wrapper.find('.recharts-area-curve').length).to.equal(1);
  });

  it('Renders dots and labels when dot is setted to true', () => {
    let wrapper = render(
      <AreaChart width={100} height={50} data={data}>
        <Area isAnimationActive={false} type='monotone' dot label dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
      </AreaChart>
    );
    expect(wrapper.find('.recharts-area-dots').length).to.equal(1);
    expect(wrapper.find('.recharts-area-dot').length).to.equal(6);
    expect(wrapper.find('.recharts-area-labels').length).to.equal(1);
    expect(wrapper.find('.recharts-area-label').length).to.equal(6);
  });

  it('Render empty when data is empty', () => {
    let wrapper = render(
      <AreaChart width={100} height={50} data={[]}>
        <Area type='monotone' dot label dataKey='uv' stroke='#ff7300' fill='#ff7300'/>
      </AreaChart>
    );
    expect(wrapper.find('.recharts-area').length).to.equal(0);
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
