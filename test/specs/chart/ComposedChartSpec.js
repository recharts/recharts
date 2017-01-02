import React from 'react';
import { expect } from 'chai';
import { ComposedChart, Line, Bar, Area, XAxis, YAxis, Legend,
 CartesianGrid, Tooltip } from 'recharts';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<ComposedChart />', () => {
  const data = [{ name: 'Page A', uv: 590, pv: 800, amt: 1400 },
              { name: 'Page B', uv: 868, pv: 967, amt: 1506 },
              { name: 'Page C', uv: 1397, pv: 1098, amt: 989 },
              { name: 'Page D', uv: 1480, pv: 1200, amt: 1228 },
              { name: 'Page E', uv: 1520, pv: 1108, amt: 1100 },
              { name: 'Page F', uv: 1400, pv: 680, amt: 1700 }];

  it('Render 1 line, 1 area, 1bar in the ComposedChart', () => {
    const wrapper = render(
      <ComposedChart
        width={800} height={400} data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#f5f5f5" />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(1);
    expect(wrapper.find('.recharts-bar').length).to.equal(1);
    expect(wrapper.find('.recharts-area .recharts-area-area').length).to.equal(1);
  });

  it('Render 1 bar, 1 dot when data has only one element', () => {
    const singleData = [data[0]];
    const wrapper = render(
      <ComposedChart
        width={800} height={400} data={singleData}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="pv" orientation="left" yAxisId="left" />
        <YAxis dataKey="uv" orientation="right" yAxisId="right" />
        <CartesianGrid stroke="#f5f5f5" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" yAxisId="left" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId="right" />
      </ComposedChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-dot').length).to.equal(1);
    expect(wrapper.find('.recharts-bar .recharts-bar-rectangle').length).to.equal(1);
  });

  it('MouseEnter ComposedChart should show tooltip, active dot, and cursor', () => {
    const wrapper = mount(
      <ComposedChart
        width={800} height={400} data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis dataKey="name" />
        <YAxis />
        <Legend />
        <Tooltip />
        <CartesianGrid stroke="#f5f5f5" />
        <Area isAnimationActive={false} type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar isAnimationActive={false} dataKey="pv" barSize={20} fill="#413ea0" />
        <Line isAnimationActive={false} type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>
    );

    wrapper.setState({
      isTooltipActive: true,
      activeTooltipIndex: 1,
      activeTooltipLabel: 'test',
      activeTooltipCoord: {
        x: 100,
        y: 100,
      },
    });

    // expect(wrapper.find('.recharts-tooltip-cursor').length).to.equal(1);
    // expect(wrapper.find('.recharts-line-active-dot').length).to.equal(1);
  });

});
