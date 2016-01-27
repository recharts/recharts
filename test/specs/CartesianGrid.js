import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, CartesianGrid } from 'recharts';

describe('<CartesianGrid />', () => {
  let horizontalPoints = [10, 20, 30, 100, 400],
      verticalPoints = [100, 200, 300, 400];

  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={500} height={500}>
      <CartesianGrid
        width={500}
        height={500}
        verticalPoints={verticalPoints}
        horizontalPoints={horizontalPoints} />
    </Surface>
  );

  it('renders 5 horizontal lines and 4 vertical lines in simple CartesianGrid', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'line');
    expect(wrapper.length).to.equal(9);
  });
});