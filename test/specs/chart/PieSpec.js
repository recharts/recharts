import React from 'react';
import { expect } from 'chai';
import { PieChart, Pie, Sector } from 'recharts';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<ScatterChart />', () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  it('renders 6 sectors circles in simple PieChart', () => {
    const wrapper = render(
      <PieChart width={800} height={400}>
        <Pie isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label/>
      </PieChart>
    );

    expect(wrapper.find('.recharts-pie-sector').length).to.equal(6);
  });

  it('click on Sector should invoke onClick callback', () => {
    const onClick = sinon.spy();
    const wrapper = mount(
      <PieChart width={800} height={400}>
        <Pie onClick={onClick} isAnimationActive={false} data={data} cx={200} cy={200} outerRadius={80} fill="#ff7300" label/>
      </PieChart>
    );
    const sectors = wrapper.find(Sector);
    const firstSector = sectors.first(); // you can also use sectors.at(0) to get the wrapper node.
    firstSector.simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
