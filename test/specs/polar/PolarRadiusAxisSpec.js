import React from 'react';
import { expect } from 'chai';
import { Surface, PolarRadiusAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<PolarRadiusAxis />', () => {
  const ticks = [
    { value: 10, radius: 50 },
    { value: 1000, radius: 100 },
    { value: 20, radius: 150 },
    { value: 40, radius: 200 },
    { value: 90, radius: 250 },
  ];

  it('Renders 5 ticks when orientation is set to be middle', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="middle"
          cx={250}
          cy={250}
          ticks={ticks}
          label="test"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-radius-axis-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Renders 5 ticks when orientation is set to be left', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={ticks}
          label="test"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-radius-axis-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Renders 5 ticks when tick is set to be a function', () => {
    const renderTick = (props) => {
      const { payload, x, y, fill } = props;

      return <text x={x} y={y} className="customized-tick">{payload.value}</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={ticks}
          label="test"
          tick={renderTick}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Renders 5 ticks when tick is set to be a react element', () => {
    const Tick = (props) => {
      const { payload, x, y, fill } = props;

      return <text x={x} y={y} className="customized-tick">{payload.value}</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={ticks}
          label="test"
          tick={<Tick />}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-tick').length).to.equal(5);
    expect(wrapper.find('.recharts-label').length).to.equal(1);
  });

  it('Renders label when label is set to be a function', () => {
    const renderLabel = (props) => {
      const { x, y } = props;

      return <text x={x} y={y} className="customized-label">any</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={ticks}
          label={renderLabel}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(1);
  });

  it('Renders label when label is set to be a react element', () => {
    const Label = (props) => {
      const { x, y } = props;

      return <text x={x} y={y} className="customized-label">any</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={ticks}
          label={<Label />}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-label').length).to.equal(1);
  });


  it('Don\'t Renders any ticks in when ticks is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarRadiusAxis
          orientation="left"
          cx={250}
          cy={250}
          ticks={[]}
          label="test"
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-radius-axis-tick').length).to.equal(0);
    expect(wrapper.find('.recharts-label').length).to.equal(0);
  });
});
