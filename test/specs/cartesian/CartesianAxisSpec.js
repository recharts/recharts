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
    expect(wrapper.find('.recharts-cartesian-axis-label').length).to.equal(1);
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
    expect(wrapper.find('.recharts-cartesian-axis-label').length).to.equal(1);
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
    expect(wrapper.find('.recharts-cartesian-axis-label').length).to.equal(1);
  });

  it('Renders 5 ticks in a CartesianAxis which has orientation left', () => {
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
    expect(wrapper.find('.recharts-cartesian-axis-label').length).to.equal(1);
  });


  it('Renders 5 ticks in a CartesianAxis which has orientation left', () => {
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

  it('Renders 5 ticks in a CartesianAxis which has orientation right', () => {
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
});
