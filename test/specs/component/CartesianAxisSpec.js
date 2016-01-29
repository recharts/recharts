import React from 'react';
import { expect } from 'chai';
import { Surface, CartesianAxis } from 'recharts';
import { mount, render } from 'enzyme';

describe('<CartesianAxis />', () => {
  const ticks = [
    { value: 10, coord: 50 },
    { value: 1000, coord: 100 },
    { value: 20, coord: 150 },
    { value: 40, coord: 200 },
    { value: 90, coord: 250 },
  ];

  it('renders 5 ticks in simple CartesianAxis', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <CartesianAxis orientation="bottom" y={100} width={400} height={50} viewBox={{ x: 0, y: 0, width: 500, height: 500 }} ticks={ticks} />
      </Surface>
    );

    expect(wrapper.find('.axis-tick').length).to.equal(5);
  });
});
