import React from 'react';
import { expect } from 'chai';
import { Surface, Rectangle } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Rectangle />', () => {
  const points = [
    { x: 10, y: 10 },
    { x: 25, y: 40 },
    { x: 40, y: 10 },
    { x: 55, y: 40 },
    { x: 70, y: 10 },
  ];

  const wrapper = render(
    <Surface width={400} height={400}>
      <Rectangle x={50} y={50} width={80} height={100} radius={[5, 10, 8, 15]} fill="#ff7300"/>
    </Surface>
  );

  it('renders 1 rectangle in simple Rectangle', () => {
    expect(wrapper.find('.recharts-rectangle').length).to.equal(1);
  });
});
