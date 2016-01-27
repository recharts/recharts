import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, CartesianAxis } from 'recharts';

describe('<CartesianAxis />', () => {
  let ticks = [
      {value: 10, coord: 50},
      {value: 1000, coord: 100},
      {value: 20, coord: 150},
      {value: 40, coord: 200},
      {value: 90, coord: 250}];

  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={500} height={500}>
      <CartesianAxis orientation='bottom' y={100} width={400} height={50} viewBox={{x: 0, y: 0, width: 500, height: 500}} ticks={ticks} />
    </Surface>
  );

  it('renders 5 ticks in simple CartesianAxis', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'axis-tick');
    expect(wrapper.length).to.equal(5);
  });
});