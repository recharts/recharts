import ReactDOM from 'react-dom';
import React from 'react';
import LineChart from '../../demo/component/LineChart';
import ReactTestUtils from 'react-addons-test-utils';
import { expect } from 'chai';

describe('LineChart', () => {
  let component;

  beforeEach(() => {
    component = ReactTestUtils.renderIntoDocument(<LineChart />);
  });


  it('should render 4 line charts without error', () => {
    const wrapper = ReactTestUtils.scryRenderedDOMComponentsWithClass(component, 'line-chart-wrapper');
    expect(wrapper.length).to.equal(4);
  });
});
