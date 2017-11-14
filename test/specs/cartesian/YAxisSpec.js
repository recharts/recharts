import React from 'react';
import { expect } from 'chai';
import { Surface, AreaChart, Area, XAxis, YAxis, CartesianAxis, Text } from 'recharts';
import { mount, render } from 'enzyme';

describe('<YAxis />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page C', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page D', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page E', uv: 189, pv: 4800, amt: 2400 },
  ];


  it('Render 3 y-CartesianAxis in AreaChart', () => {
    const wrapper = mount(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" yAxisId={0} stroke="#ff7300" />
        <YAxis type="number" orient="right" yAxisId={1} stroke="#387908" />
        <YAxis type="number" orient="right" yAxisId={2} stroke="#38abc8" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" strokeWidth={2} yAxisId={0} />
        <Area dataKey="pv" stroke="#387908" fill="#387908" strokeWidth={2} yAxisId={1} />
        <Area dataKey="amt" stroke="#38abc8" fill="#38abc8" strokeWidth={2} yAxisId={2} />
      </AreaChart>
    );

    expect(wrapper.find(CartesianAxis).length).to.equal(3);
  });

  it('Render 4 ticks', () => {
    const wrapper = mount(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>
    );
    const ticks = wrapper.find(Text);

    expect(ticks.length).to.equal(4);
    expect(ticks.first().props().y).to.equal(297.5);
  });

  it('Render 4 ticks', () => {
    const wrapper = mount(
      <AreaChart width={600} height={400} data={data}>
        <YAxis type="number" stroke="#ff7300" ticks={[0, 400, 800, 1200]} />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>
    );
    const ticks = wrapper.find(Text);

    expect(ticks.at(0).text()).to.equal('400');
    expect(ticks.at(1).text()).to.equal('800');
    expect(ticks.at(2).text()).to.equal('1200');
  });

  it('Render ticks reversed', () => {
    const wrapper = mount(
      <AreaChart width={600} height={400} data={data}>
        <YAxis reversed type="number" stroke="#ff7300" />
        <Area dataKey="uv" stroke="#ff7300" fill="#ff7300" />
      </AreaChart>
    );
    const ticks = wrapper.find(Text);

    expect(ticks.length).to.equal(4);
    expect(ticks.first().props().y).to.equal(102.5);
  });

  it("Don't render empty tick", () => {
    const areaData = [
      { day: '05-01', weather: 'sunny' },
      { day: '05-02' },
      { day: '05-03', weather: 'cloudy' },
      { day: '05-04', weather: 'rain' },
    ];
    const wrapper = render(
      <AreaChart
        width={400}
        height={400}
        data={areaData}
      >
        <XAxis dataKey="day" />
        <YAxis type="category" />
        <Area type="stepAfter" dataKey="weather" stroke="#0088FE" />
      </AreaChart>
    );

    const yAxisTicks = wrapper.find('.yAxis .recharts-cartesian-axis-tick-value tspan');

    expect(yAxisTicks.length).to.equal(3);
  });

  it('Don\'t render anything', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <YAxis dataKey={'x'} name="stature" unit="cm" />
      </Surface>
    );

    expect(wrapper.find('svg').children.length).to.equal(1);
    expect(wrapper.find('svg noscript').children.length).to.equal(1);
  });
});
