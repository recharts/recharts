import React from 'react';
import { expect } from 'chai';
import { Surface, CartesianAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<CartesianAxis />', () => {
  const ticks = [
    { value: 10, coordinate: 50 },
    { value: 1000, coordinate: 100 },
    { value: 20, coordinate: 150 },
    { value: 40, coordinate: 200 },
    { value: 90, coordinate: 250 },
  ];

  it('Renders 5 ticks in simple CartesianAxis', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Renders no ticks in simple CartesianAxis', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={[]}
          label="test"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(0);
  });

  it('Renders ticks when interval="preserveStartEnd"', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
          interval="preserveStartEnd"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
  });

  it('Renders ticks when interval="preserveStart"', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="test"
          interval="preserveStart"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
  });

  it('Renders 5 ticks in a CartesianAxis which has orientation top', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="top"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="top"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Renders 5 ticks in a CartesianAxis which has orientation left', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="left"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="left"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Renders 5 ticks in a CartesianAxis which has orientation right', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="right"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label="right"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });


  it('Renders label when label is a function', () => {
    const renderLabel = (props) => {
      const { x, y, width, height } = props;

      return <text className="customized-label" x={x} y={y}>test</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="left"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label={renderLabel}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
    expect(wrapper.find('.customized-label').length).to.equal(1);
  });

  it('Renders label when label is a react element', () => {
    const Label = (props) => {
      const { x, y, width, height } = props;

      return <text className="customized-label" x={x} y={y}>test</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="right"
          y={100}
          width={50}
          height={400}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          label={<Label />}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(5);
  });

  it('Render customized ticks when tick is set to be a ReactElement', () => {
    const CustomizedTick = ({ x, y }) =>
      <text x={x} y={y} className="customized-tick">test</text>
    ;
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          tick={<CustomizedTick />}
          interval={0}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-tick').length).to.equal(ticks.length);
  });

  it('Render customized ticks when ticks is an array of strings and interval is 0', () => {
    const CustomizedTick = ({ x, y }) =>
      <text x={x} y={y} className="customized-tick">test</text>
    ;
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={['tick 1', 'tick 2', 'tick 3']}
          tick={<CustomizedTick />}
          interval={0}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-tick').length).to.equal(3);
  });

  it('Render customized ticks when tick is set to be a function', () => {
    const renderCustomizedTick = ({ x, y }) =>
      <text x={x} y={y} className="customized-tick">test</text>
    ;
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          ticks={ticks}
          tick={renderCustomizedTick}
          interval={0}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-tick').length).to.equal(ticks.length);
  });

  it('Renders no ticks when tick is set to false', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis
          orientation="bottom"
          y={100}
          width={400}
          height={50}
          viewBox={{ x: 0, y: 0, width: 500, height: 500 }}
          tick={false}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-cartesian-axis-tick').length).to.equal(0);
  });

});
