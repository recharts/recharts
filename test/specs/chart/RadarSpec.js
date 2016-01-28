import React from 'react';
import { expect } from 'chai';
import { Surface, Radar } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Radar />', () => {
  const data = [
    {name: 'iphone4', value: 120, max: 800, min: 0, angle: 30},
    {name: 'iphone4s', value: 500, max: 800, min: 0, angle: 150},
    {name: 'iphone5', value: 600, max: 800, min: 0, angle: 250}];
  
  let wrapper = render(
    <Surface width={500} height={1000}>
      <Radar orientation='outer' cx={250} cy={250} concentricPathType='circle' outerRadius={160} data={data} />
    </Surface>
  );

  it('renders 3 data line and 3 tick line in simple Radar', () => {
    expect(wrapper.find('line').length).to.equal(6);
  });

  it('renders 2 circles in simple Radar', () => {
    expect(wrapper.find('circle').length).to.equal(2);
  });

  it('renders 1 polygon in simple Radar', () => {
    expect(wrapper.find('polygon').length).to.equal(1);
  });
});