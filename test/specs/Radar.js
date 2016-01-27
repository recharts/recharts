import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, Radar } from 'recharts';

describe('<Radar />', () => {
  const data = [
    {name: 'iphone4', value: 120, max: 800, min: 0, angle: 30},
    {name: 'iphone4s', value: 500, max: 800, min: 0, angle: 150},
    {name: 'iphone5', value: 600, max: 800, min: 0, angle: 250}];
  
  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={500} height={1000}>
      <Radar orientation='outer' cx={250} cy={250} concentricPathType='circle' outerRadius={160} data={data} />
    </Surface>
  );

  it('renders 3 data line and 3 tick line in simple Radar', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'line');
    expect(wrapper.length).to.equal(6);
  });

  it('renders 2 circles in simple Radar', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'circle');
    expect(wrapper.length).to.equal(2);
  });

  it('renders 1 polygon in simple Radar', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithTag(component, 'polygon');
    expect(wrapper.length).to.equal(1);
  });
});