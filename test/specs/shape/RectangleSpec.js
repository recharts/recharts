import React from 'react';
import { expect } from 'chai';
import { Surface, Rectangle } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Rectangle />', () => {
  it('Render 1 rectangle in simple Rectangle', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Rectangle x={50} y={50} width={80} height={100} radius={[5, 10, 8, 15]} fill="#ff7300"/>
      </Surface>
    );

    expect(wrapper.find('.recharts-rectangle').length).to.equal(1);
  });
});
