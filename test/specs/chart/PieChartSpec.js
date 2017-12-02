import React from 'react';
import { expect } from 'chai';
import { PieChart, Pie, Sector, Legend, Tooltip, Cell } from 'recharts';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<PieChart />', () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  it('Renders 6 sectors circles in simple PieChart', () => {
    const wrapper = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
      </PieChart>
    );

    expect(wrapper.find('.recharts-pie-sector').length).to.equal(data.length);
  });

  it('Renders 6 sectors circles when add Cell to specified props of eact slice', () => {
    const wrapper = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" isAnimationActive={false} cx={200} cy={200} outerRadius={80} fill="#ff7300" label>
          {
            data.map((entry, index) => (
              <Cell {...entry} key={`cell-${index}`} strokeWidth={index + 1} />
            ))
          }
        </Pie>
      </PieChart>
    );

    expect(wrapper.find('.recharts-pie-sector').length).to.equal(6);
  });

  it('Renders legend when all the values are 0', () => {
    const emptyData = [
      { name: 'Group A', value: 0 },
      { name: 'Group B', value: 0 },
      { name: 'Group C', value: 0 },
      { name: 'Group D', value: 0 },
      { name: 'Group E', value: 0 },
      { name: 'Group F', value: 0 },
    ];
    const wrapper = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={emptyData} isAnimationActive={false} cx={200} cy={200} outerRadius={80} />
        <Legend />
      </PieChart>
    );

    expect(wrapper.find('.recharts-legend-item').length).to.equal(emptyData.length);
  });

  it('Don\'t renders any sectors when width or height is smaller than 0', () => {
    const wrapper = render(
      <PieChart width={0} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
      </PieChart>
    );
    expect(wrapper.find('.recharts-pie-sector').length).to.equal(0);
  });

  it('Renders 6 legend item when add a Legend element', () => {
    const wrapper = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
        <Legend />
      </PieChart>
    );

    expect(wrapper.find('.recharts-legend-wrapper').length).to.equal(1);
    expect(wrapper.find('.recharts-legend-item').length).to.equal(6);
  });

  // it('Renders tooltip when add a Tooltip element', () => {
  //   const wrapper = mount(
  //     <PieChart width={800} height={400}>
  //       <Pie isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label/>
  //       <Tooltip/>
  //     </PieChart>
  //   );
  //   wrapper.setState({
  //     isTooltipActive: true,
  //     activeTooltipCoord: {
  //       x: 95,
  //       y: 21,
  //     },
  //     activeTooltipLabel: 'test',
  //     activeTooltipPayload: [{name: 'test', value: 1}],
  //   });
  //   expect(wrapper.find('.recharts-tooltip-wrapper').length).to.equal(1);
  //   expect(wrapper.find('.recharts-default-tooltip').length).to.equal(1);
  // });

  it('click on Sector should invoke onClick callback', () => {
    const onClick = sinon.spy();
    const onMouseEnter = sinon.spy();
    const onMouseLeave = sinon.spy();

    const wrapper = mount(
      <PieChart
        width={800}
        height={400}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <Pie dataKey="value" isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label />
      </PieChart>
    );
    const sectors = wrapper.find(Sector);
    const se = sectors.at(2);

    se.simulate('click');
    expect(onClick.calledOnce).to.equal(true);

    /*
    se.simulate('mouseEnter');
    expect(onMouseEnter.calledOnce).to.equal(true);

    se.simulate('mouseLeave');
    expect(onMouseLeave.calledOnce).to.equal(true);
    */
  });
});
