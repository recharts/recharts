import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, PolarRadiusAxis } from 'recharts';

describe('<PolarRadiusAxis />', () => {
  let ticks = [
    {value: '100', radius: 50},
    {value: '200', radius: 100},
    {value: '300', radius: 150},
    {value: '400', radius: 200},
    {value: '500', radius: 250},
    {value: '600', radius: 300}
  ];

  let component = ReactTestUtils.renderIntoDocument(
    <Surface width={1000} height={1000}>
      <PolarRadiusAxis
        cx={500}
        cy={500}
        angle={120}
        ticks={ticks}/>
    </Surface>
  );

  it('renders 6 axis-tick in simple PolarRadiusAxis', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'axis-tick');
    expect(wrapper.length).to.equal(6);
  });
});