import ReactDOM from 'react-dom';
import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';
import { Surface, Legend } from 'recharts';

describe('<Legend />', () => {
  const data = [
    { value: 'Apple', color: '#ff7300' },
    { value: 'Samsung', color: '#bb7300' },
    { value: 'Huawei', color: '#887300' },
    { value: 'Sony', color: '#667300' },
  ];

  const component = ReactTestUtils.renderIntoDocument(
    <Legend width={500} height={30} data={data} />
  );

  it('renders 4 legend items in simple Legend', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'legend-item');
  });
});
