import React from 'react';
import { expect } from 'chai';
import { Surface, PolarAngleAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<PolarAngleAxis />', () => {
  const ticks = [
    { value: 10, angle: 30 },
    { value: 1000, angle: 90 },
    { value: 20, angle: 120 },
    { value: 40, angle: 200 },
    { value: 90, angle: 250 },
  ];

  it('Renders 5 ticks in when ticks is not empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          radus={50}
          ticks={ticks}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-angle-axis-tick').length).to.equal(ticks.length);
  });

  it('Renders 5 ticks in when tick is set to be a react element', () => {
    const Tick = (props) => {
      const { x, y } = props;
      return <text x={x} y={y} className="customized-tick">test</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          radus={50}
          tick={<Tick />}
          ticks={ticks}
        />
      </Surface>
    );

    expect(wrapper.find('.customized-tick').length).to.equal(ticks.length);
  });

  it('Renders 5 ticks in when tick is set to be a function', () => {
    const Tick = (props) => {
      const { x, y } = props;
      return <text x={x} y={y} className="customized-tick">test</text>;
    };
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          radus={50}
          tick={Tick}
          ticks={ticks}
          axisLineType="circle"
        />
      </Surface>
    );

    expect(wrapper.find('.customized-tick').length).to.equal(ticks.length);
  });

  it('Don\'t Renders any ticks in when ticks is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          radus={50}
          ticks={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-polar-angle-axis-tick').length).to.equal(0);
  });
});
