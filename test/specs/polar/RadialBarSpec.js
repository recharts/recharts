import React from 'react';
import { expect } from 'chai';
import { Surface, RadialBar, Sector } from 'recharts';
import { mount, render } from 'enzyme';

describe('<RadialBar />', () => {
  const data = [
    { cx: 250, cy: 250, innerRadius: 0, outerRadius: 0, startAngle: 0, endAngle: 60, value: 50 },
    { cx: 250, cy: 250, innerRadius: 30, outerRadius: 40, startAngle: 0, endAngle: 60, value: 50 },
    { cx: 250, cy: 250, innerRadius: 50, outerRadius: 60, startAngle: 0, endAngle: 60, value: 50 },
    { cx: 250, cy: 250, innerRadius: 70, outerRadius: 80, startAngle: 0, endAngle: 60, value: 50 },
  ];

  it('Render 5 sectors', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <RadialBar
          isAnimationActive={false}
          cx={250}
          cy={250}
          data={data}
          label
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-radial-bar-sector').length).to.equal(data.length);
  });

  it('Don\'t render any sector when data is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <RadialBar
          data={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-pie').length).to.equal(0);
  });

  it('Render 5 sectors', () => {
    const wrapper = mount(
      <Surface width={500} height={500}>
        <RadialBar
          isAnimationActive={false}
          cx={250}
          cy={250}
          data={data}
        />
      </Surface>
    );

    const se = wrapper.find(Sector).first();

    se.simulate('mouseEnter');
    se.simulate('mouseLeave');
    se.simulate('click');
  });

});
