import React from 'react';
import { expect } from 'chai';
import { Surface, Symbols } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Symbols />', () => {
  it('Render 1 symbol', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Symbols cx={100} cy={100} size={100} fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-symbols').length).to.equal(1);
  });

  it('Render 1 symbol when type is wrong', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Symbols cx={100} cy={100} size={100} type="anything" fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-symbols').length).to.equal(1);
  });

  it("Don't render any symbol when cx is invalid", () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Symbols cy={100} size={100} fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-symbols').length).to.equal(0);
  });
});
