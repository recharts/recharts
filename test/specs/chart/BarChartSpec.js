import React from 'react';
import { expect } from 'chai';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { mount, render } from 'enzyme';

describe('<BarChart />', () => {
  const data = [
    { name: 'food', uv: 400, pv: 2400 },
    { name: 'cosmetic', uv: 300, pv: 4567 },
    { name: 'storage', uv: 300, pv: 1398 },
    { name: 'digital', uv: 200, pv: 9800 },
  ];

  it('Renders 8 bars in simple BarChart', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" fill="#ff7300"/>
        <Bar dataKey="pv" fill="#387908"/>
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(8);
  });

  it('Don\'t renders any bars when no Bar item is added', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(0);
  });

  it('Renders 8 bars in a vertical BarChart', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data} layout="vertical">
        <XAxis type="number"/>
        <YAxis type="category" dataKey="name"/>
        <Bar dataKey="uv" fill="#ff7300"/>
        <Bar dataKey="pv" fill="#387908"/>
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(8);
  });

  it('Renders 8 bars in a stacked BarChart', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" stackId="test" fill="#ff7300"/>
        <Bar dataKey="pv" stackId="test" fill="#387908"/>
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(8);
  });

  it('Renders tooltip when Tooltip item is added', () => {
    const wrapper = mount(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" stackId="test" fill="#ff7300"/>
        <Bar dataKey="pv" stackId="test" fill="#387908"/>
        <Tooltip/>
      </BarChart>
    );
    wrapper.setState({
      isTooltipActive: true,
      activeTooltipIndex: 3,
      activeTooltipLabel: 4,
      activeTooltipCoord: {
        x: 95,
        y: 21,
      },
    });

    expect(wrapper.find('.recharts-default-tooltip').length).to.equal(1);
    expect(wrapper.find('.recharts-tooltip-wrapper').length).to.equal(1);
  });

  it('renders 4 labels when label is setted to be true', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar isAnimationActive={false} dataKey="uv" label fill="#ff7300"/>
      </BarChart>
    );

    expect(wrapper.find('.recharts-bar-rectangle-labels').length).to.equal(1);
    expect(wrapper.find('.recharts-bar-label').length).to.equal(4);
  });

  it('renders empty when data is empty', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={[]}>
        <Bar dataKey="uv" label fill="#ff7300"/>
      </BarChart>
    );

    expect(wrapper.find('path').length).to.equal(0);
  });
});
