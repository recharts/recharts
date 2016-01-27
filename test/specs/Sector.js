import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, Sector } from 'recharts';

describe('<Sector />', () => {
  let points = [{x: 10, y: 10}, {x: 25, y: 40}, {x: 40, y: 10}, {x: 55, y: 40}, {x: 70, y: 10}];
  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={500} height={500}>
      <Sector fill='#ff7902' cx={200} cy={300} innerRadius={150} outerRadius={200} endAngle={90} />
    </Surface>
  );

  it('renders 1 sector in simple Sector', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'recharts-sector');
    expect(wrapper.length).to.equal(1);
  });
});