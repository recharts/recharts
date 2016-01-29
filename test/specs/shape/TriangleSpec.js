import React from 'react';
import { expect } from 'chai';
import { Surface, Triangle } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Triangle />', () => {
  let wrapper = render(
    <Surface width={400} height={400}>
      <Triangle points={[{x: 100, y: 300}, {x: 300, y: 300}, {x: 200, y : 50}]} fill='#ff7300'/>
    </Surface>
  );

  it('renders 1 triangle in simple Triangle', () => {
    expect(wrapper.find('.recharts-triangle').length).to.equal(1);
  });
});