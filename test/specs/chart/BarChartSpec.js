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
        <Bar dataKey="uv" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="pv" fill="#387908" isAnimationActive={false} />
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(8);
  });

  it('Render 4 labels when label is setted to be true', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar isAnimationActive={false} dataKey="uv" label fill="#ff7300" />
      </BarChart>
    );

    expect(wrapper.find('.recharts-label-list').length).to.equal(1);
    expect(wrapper.find('.recharts-label').length).to.equal(4);
  });

  it('Renders 4 bar labels when label is set to be a react element', () => {
    const Label = (props) => {
      const { x, y, index } = props;

      return <text key={`label-${index}`} x={x} y={y} className="customized-label">test</text>;
    };
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar isAnimationActive={false} dataKey="uv" fill="#ff7300" label={<Label />} />
      </BarChart>
    );

    expect(wrapper.find('.customized-label').length).to.equal(4);
  });

  it('Renders 4 bar labels when label is set to be a function', () => {
    const renderLabel = (props) => {
      const { x, y, index } = props;

      return <text key={`label-${index}`} x={x} y={y} className="customized-label">test</text>;
    };
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar isAnimationActive={false} dataKey="uv" fill="#ff7300" label={renderLabel} />
      </BarChart>
    );

    expect(wrapper.find('.customized-label').length).to.equal(4);
  });

  it('Don\'t renders any bars when no Bar item is added', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data} />
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(0);
  });

  it('Renders 8 bars in a vertical BarChart', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data} layout="vertical">
        <XAxis type="number" />
        <YAxis type="category" dataKey="name" />
        <Bar dataKey="uv" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="pv" fill="#387908" isAnimationActive={false} />
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(8);
  });

  it('Renders 8 bars in a stacked BarChart', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <YAxis />
        <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
        <Bar dataKey="pv" stackId="test" fill="#387908" isAnimationActive={false} />
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(8);
  });

  it('Renders 4 bars in a stacked BarChart which only have one Bar', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <YAxis />
        <Bar dataKey="uv" stackId="test" fill="#ff7300" isAnimationActive={false} />
      </BarChart>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(4);
  });

  // it('Renders tooltip when Tooltip item is added', () => {
  //   const wrapper = mount(
  //     <BarChart width={100} height={50} data={data}>
  //       <Bar dataKey="uv" stackId="test" fill="#ff7300" />
  //       <Bar dataKey="pv" stackId="test" fill="#387908" />
  //       <Tooltip />
  //     </BarChart>
  //   );
  //   wrapper.setState({
  //     isTooltipActive: true,
  //     activeTooltipIndex: 3,
  //     activeTooltipLabel: 4,
  //     activeTooltipCoord: {
  //       x: 95,
  //       y: 21,
  //     },
  //   });

  //   expect(wrapper.find('.recharts-default-tooltip').length).to.equal(1);
  //   expect(wrapper.find('.recharts-tooltip-wrapper').length).to.equal(1);
  // });

  it('Render empty when data is empty', () => {
    const wrapper = render(
      <BarChart width={100} height={50} data={[]}>
        <Bar dataKey="uv" label fill="#ff7300" />
      </BarChart>
    );
    expect(wrapper.find('path').length).to.equal(0);
  });

  it('Render customized shapem when shape is set to be a react element', () => {
    const Shape = (props) => {
      const { x, y, width, height } = props;

      return <circle className="customized-shape" cx={x} cy={y} r={8} />;
    };
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" label fill="#ff7300" shape={<Shape />} />
      </BarChart>
    );
    expect(wrapper.find('.customized-shape').length).to.equal(4);
  });

  it('Render customized shapem when shape is set to be a function', () => {
    const renderShape = (props) => {
      const { x, y, width, height } = props;

      return <circle className="customized-shape" cx={x} cy={y} r={8} />;
    };
    const wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey="uv" label fill="#ff7300" shape={renderShape} />
      </BarChart>
    );
    expect(wrapper.find('.customized-shape').length).to.equal(4);
  });

});
