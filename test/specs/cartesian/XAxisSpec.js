import React from 'react';
import { expect } from 'chai';
import { Surface, ScatterChart, Scatter, LineChart, Line, XAxis, YAxis, CartesianAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<XAxis />', () => {
  const data = [
    { x: 100, y: 200, z: 200 },
    { x: 120, y: 100, z: 260 },
    { x: 170, y: 300, z: 400 },
    { x: 140, y: 250, z: 280 },
    { x: 150, y: 400, z: 500 },
    { x: 110, y: 280, z: 200 },
  ];
  const lineData = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];


  it('Render 1 x-CartesianAxis and 1 y-CartesianAxis ticks in ScatterChart', () => {
    const wrapper = mount(
      <ScatterChart width={400} height={400} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis dataKey={'x'} name="stature" unit="cm" />
        <YAxis dataKey={'y'} name="weight" unit="kg" />
        <Scatter name="A school" data={data} fill="#ff7300" />
      </ScatterChart>
    );
    expect(wrapper.find(CartesianAxis).length).to.equal(2);
  });

  it('Don\'t render anything', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <XAxis dataKey={'x'} name="stature" unit="cm" />
      </Surface>
    );

    expect(wrapper.find('svg').children.length).to.equal(1);
    expect(wrapper.find('svg noscript').children.length).to.equal(1);
  });

  it('Don\'t render x-axis when hide is setted to be true', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis hide />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-x-axis').length).to.equal(0);
  });

  it('Render ticks of XAxis when specify ticks', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={lineData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <XAxis ticks={[0, 4]} />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </LineChart>
    );
    expect(wrapper.find('.recharts-x-axis .recharts-cartesian-axis-tick').length).to.equal(2);
  });

  it('Render duplicated ticks of XAxis', () => {
    const lineData = [
      {name: "03/07/2017", balance: 23126.11},
      {name: "03/02/2017", balance: 23137.39},
      {name: "03/01/2017", balance: 24609.55},
      {name: "03/01/2017", balance: 26827.66},
      {name: "02/24/2017", balance: 26807.66},
      {name: "02/21/2017", balance: 23835.62},
      {name: "02/16/2017", balance: 23829.62}
    ];

    const wrapper = render(
      <LineChart
        width={600}
        height={300}
        data={lineData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="name" interval={0} />
        <YAxis/>
        <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
    expect(wrapper.find('.recharts-x-axis .recharts-cartesian-axis-tick').length).to.equal(lineData.length);
  });

  it('Render duplicated ticks of XAxis', () => {
    const lineData = [
      {name: "03/07/2017", balance: 23126.11},
      {name: "03/02/2017", balance: 23137.39},
      {name: "03/01/2017", balance: 24609.55},
      {name: "03/01/2017", balance: 26827.66},
      {name: "02/24/2017", balance: 26807.66},
      {name: "02/21/2017", balance: 23835.62},
      {name: "02/16/2017", balance: 23829.62}
    ];

    const wrapper = render(
      <LineChart
        width={600}
        height={300}
        data={lineData}
        margin={{top: 5, right: 30, left: 20, bottom: 5}}
      >
        <XAxis dataKey="name" scale="time" interval={0} />
        <YAxis/>
        <Line type="monotone" dataKey="balance" stroke="#8884d8" activeDot={{r: 8}}/>
      </LineChart>
    );
    expect(wrapper.find('.recharts-x-axis .recharts-cartesian-axis-tick').length).to.equal(lineData.length);
  });
});
