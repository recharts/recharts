import React from 'react';
import { expect } from 'chai';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Surface, Trapezoid } from 'recharts';
import { render } from 'enzyme';

describe('<Trapezoid />', () => {
  it('Render 1 Trapezoid in simple Trapezoid', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Trapezoid
          fill="#f00"
          x={300}
          y={100}
          upperWidth={100}
          lowerWidth={0}
          height={50}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-trapezoid').length).to.equal(1);
  });

  it('Render 1 Trapezoid with animation in simple Trapezoid', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Trapezoid
          fill="#f00"
          x={300}
          y={100}
          upperWidth={100}
          lowerWidth={0}
          height={50}
          isUpdateAnimationActive
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-trapezoid').length).to.equal(1);
  });

  it('Don\'t render any Trapezoid when props is invalid', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Trapezoid
          fill="#f00"
          x={300}
          y={100}
          upperWidth={0}
          lowerWidth={0}
          height={50}
        />
        <Trapezoid
          fill="#f00"
          x={300}
          y={100}
          upperWidth={100}
          lowerWidth={0}
          height={0}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-trapezoid').length).to.equal(0);
  });
});
