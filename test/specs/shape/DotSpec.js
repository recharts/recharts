import React from 'react';
import { expect } from 'chai';
import { Surface, Dot } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Dot />', () => {
  it('Render 1 circle in simple Dot', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Dot cx={100} cy={100} r={5} fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-dot').length).to.equal(1);
  });

  it("Don't Render any circle when cx is invalid", () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Dot cy={100} r={5} fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-dot').length).to.equal(0);
  });
});
