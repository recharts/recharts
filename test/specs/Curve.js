import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, Curve } from 'recharts';

describe('<Curve />', () => {
  let points = [{x: 10, y: 10}, {x: 25, y: 40}, {x: 40, y: 10}, {x: 55, y: 40}, {x: 70, y: 10}];
  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={400} height={400}>
      <Curve stroke='#000' fill='none' type='monotone' points={points} />
    </Surface>
  );

  it('renders 1 curve in simple Curve', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'recharts-curve');
    expect(wrapper.length).to.equal(1);
  });
});