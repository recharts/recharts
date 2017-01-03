import React from 'react';
import { expect } from 'chai';
import { AreaChart, Area, Tooltip } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Tooltip />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page C', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
  ];

  it('Render 1 default tooltip', () => {
    const wrapper = mount(
      <AreaChart width={100} height={50} data={data}>
        <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300" />
        <Tooltip />
      </AreaChart>
    );

    // I simulate to hover on the AreaChart, then the tooltip should show!
    wrapper.setState({
      isTooltipActive: true,
      chartX: 86,
      chartY: 21,
      activeTooltipIndex: 4,
      activeTooltipLabel: 4,
      activeTooltipCoord: {
        x: 95,
        y: 21,
      },
    });

    expect(wrapper.find(Tooltip).length).to.equal(1);
  });

  // it('Render customized tooltip when content is set to be a react element', () => {
  //   const Customized = () => {
  //     return <div className="customized"/>
  //   };
  //   const wrapper = mount(
  //     <AreaChart width={100} height={50} data={data}>
  //       <Area type="monotone" dataKey="uv" stroke="#ff7300" fill="#ff7300"/>
  //       <Tooltip content={<Customized/>}/>
  //     </AreaChart>
  //   );

  //   // I simulate to hover on the AreaChart, then the tooltip should show!
  //   wrapper.setState({
  //     isTooltipActive: true,
  //     activeTooltipIndex: 0,
  //     activeTooltipLabel: 4,
  //     activeTooltipCoord: {
  //       x: 95,
  //       y: 21,
  //     },
  //   });

  //   expect(wrapper.find('.customized').length).to.equal(1);
  // });
});
