import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, Triangle } from 'recharts';

describe('<Triangle />', () => {
  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={400} height={400}>
      <Triangle points={[{x: 100, y: 300}, {x: 300, y: 300}, {x: 200, y : 50}]} fill='#ff7300'/>
    </Surface>
  );

  it('renders 1 triangle in simple Triangle', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'recharts-triangle');
    expect(wrapper.length).to.equal(1);
  });
});