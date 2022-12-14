/* eslint-disable react/no-unused-state */
/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable no-return-assign */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { PieChart, Pie, Sector, Legend, Cell } from '../../../src';
import { render } from '@testing-library/react';

describe.only('<PieChart />', () => {
  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ];

  it('Renders 6 sectors circles in simple PieChart', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(data.length);
  });

  it('Renders 6 sectors circles when add Cell to specified props of eact slice', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" isAnimationActive={false} cx={200} cy={200} outerRadius={80} fill="#ff7300" label>
          {data.map((entry, index) => (
            <Cell {...entry} key={`cell-${index}`} strokeWidth={index + 1} />
          ))}
        </Pie>
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(6);
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
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie dataKey="value" data={emptyData} isAnimationActive={false} cx={200} cy={200} outerRadius={80} />
        <Legend />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-legend-item')).toHaveLength(emptyData.length);
  });

  it("Don't renders any sectors when width or height is smaller than 0", () => {
    const { container } = render(
      <PieChart width={0} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-pie-sector')).toHaveLength(0);
  });

  it('Renders 6 legend item when add a Legend element', () => {
    const { container } = render(
      <PieChart width={800} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
        <Legend />
      </PieChart>,
    );

    expect(container.querySelectorAll('.recharts-legend-wrapper')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-legend-item')).toHaveLength(6);
  });

  it.skip('click on Sector should invoke onClick callback', () => {
    const onClick = sinon.spy();
    const onMouseEnter = sinon.spy();
    const onMouseLeave = sinon.spy();

    const wrapper = mount(
      <PieChart width={800} height={400} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx={200}
          cy={200}
          outerRadius={80}
          fill="#ff7300"
          label
        />
      </PieChart>,
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
