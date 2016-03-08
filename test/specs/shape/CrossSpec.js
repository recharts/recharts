import React from 'react';
import { expect } from 'chai';
import { Surface, Cross } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Cross />', () => {

  it('Render 1 path in Cross', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Cross top={50} left={50} x={150} y={180} width={200} height={200} stroke="#000" fill="none" />
      </Surface>
    );

    expect(wrapper.find('.recharts-cross').length).to.equal(1);
  });

  it('Don\'t render any path when props is invalid', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Cross top={50} left={50} x="x" y={180} width={200} height={200} stroke="#000" fill="none" />
      </Surface>
    );

    expect(wrapper.find('.recharts-cross').length).to.equal(0);
  });
});
