import React from 'react';
import { expect } from 'chai';
import { Surface, Curve } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Curve />', () => {
  const points = [
    { x: 10, y: 10 },
    { x: 25, y: 40 },
    { x: 40, y: 10 },
    { x: 55, y: 40 },
    { x: 70, y: 10 },
  ];

  const wrapper = render(
    <Surface width={400} height={400}>
      <Curve stroke="#000" fill="none" type="monotone" points={points} />
    </Surface>
  );

  it('renders 1 curve in simple Curve', () => {
    expect(wrapper.find('.recharts-curve').length).to.equal(1);
  });
});
