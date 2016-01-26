import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import LineChart from '../../demo/component/LineChart';

describe('LineChart', () => {
  it('should render 4 line charts without error', () => {
    const wrapper = shallow(<LineChart />);
    expect(wrapper.find('.line-chart-wrapper')).to.have.length(4);
  });
});
