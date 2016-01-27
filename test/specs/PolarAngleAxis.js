import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, PolarAngleAxis } from 'recharts';

describe('<PolarAngleAxis />', () => {
  let ticks = [
    {value: '100', radius: 50},
    {value: '200', radius: 100},
    {value: '300', radius: 150},
    {value: '400', radius: 200},
    {value: '500', radius: 250},
    {value: '600', radius: 300}
  ];

  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={500} height={500}>
      <PolarAngleAxis
        cx={250}
        cy={250}
        outerRadius={200}
        ticks={ticks}/>
    </Surface>
  );

  it('renders 6 axis-tick in simple PolarAngleAxis', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'axis-tick');
    expect(wrapper.length).to.equal(6);
  });
});