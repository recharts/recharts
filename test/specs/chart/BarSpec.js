import React from 'react';
import { expect } from 'chai';
import { BarChart, Bar } from 'recharts';
import { mount, render } from 'enzyme';

describe('<BarChart />', () => {
  const data = [
    {name: 'food', uv: 400, pv: 2400},
    {name: 'cosmetic', uv: 300, pv: 4567},
    {name: 'storage', uv: 300, pv: 1398},
    {name: 'digital', uv: 200, pv: 9800}
  ];

  it('renders 8 bars in simple BarChart', () => {
    let wrapper = render(
      <BarChart width={100} height={50} data={data}>
        <Bar dataKey='uv' fill='#ff7300'/>
        <Bar dataKey='pv' fill='#387908'/>
      </BarChart>
    );
      
    expect(wrapper.find('.recharts-rectangle').length).to.equal(8);
    //expect(wrapper[0].getAttribute('name')).to.equal('food');
  });
});