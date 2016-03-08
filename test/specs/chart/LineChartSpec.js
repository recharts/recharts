import React from 'react';
import { expect } from 'chai';
import { LineChart, Line, Curve } from 'recharts';
import { mount, render } from 'enzyme';
import sinon from 'sinon';

describe('<LineChart />', () => {
  const data = [
    { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 300, pv: 4567, amt: 2400 },
    { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
    { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
    { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
    { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  ];

  it('Render 1 line in simple LineChart', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(1);
  });

  it('Render 1 line in simple LineChart', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line strokeDasharray="5 5" type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(1);
  });

  it('Renders 1 dot no line when the length of data is 1', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data.slice(0, 1)} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    expect(wrapper.find('.recharts-line .recharts-line-curve').length).to.equal(0);
    expect(wrapper.find('.recharts-line .recharts-line-dot').length).to.equal(1);
  });

  it('Renders 6 labels when label is setted to be true', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    expect(wrapper.find('.recharts-line-label').length).to.equal(6);
  });

  it('Renders 6 labels when label is setted to be a function', () => {
    const renderLabel = (props) => {
      const { x, y, key } = props;
      return <text className="customized-label" x={x} y={y} key={key}>test</text>
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={renderLabel} dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    const labels = wrapper.find('.customized-label');

    expect(labels.length).to.equal(6);
  });

  it('Renders 6 labels when label is setted to be a react element', () => {
    const CustomizedLabel = (props) => {
      const { x, y, key } = props;
      return <text className="customized-label" x={x} y={y} key={key}>test</text>
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} label={<CustomizedLabel />} dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    const labels = wrapper.find('.customized-label');

    expect(labels.length).to.equal(6);
  });

  it('Renders 6 dots when dot is setted to be true', () => {
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    expect(wrapper.find('.recharts-line-dot').length).to.equal(6);
  });

  it('Renders 6 dots when dot is setted to be a function', () => {
    const renderDot = (props) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10}/>
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={renderDot} type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    expect(wrapper.find('.customized-dot').length).to.equal(6);
  });

  it('Renders 6 dots when dot is setted to be a react element', () => {
    const Dot = (props) => {
      const { cx, cy, key } = props;

      return <circle className="customized-dot" key={key} cx={cx} cy={cy} r={10}/>
    };
    const wrapper = render(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line isAnimationActive={false} dot={<Dot />} type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    expect(wrapper.find('.customized-dot').length).to.equal(6);
  });

  it('click on Curve should invoke onClick callback', () => {
    const onClick = sinon.spy();
    const wrapper = mount(
      <LineChart width={400} height={400} data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <Line onClick={onClick} type="monotone" dataKey="uv" stroke="#ff7300"/>
      </LineChart>
    );
    const curve = wrapper.find(Curve);
    curve.simulate('click');
    expect(onClick.calledOnce).to.equal(true);
  });
});
