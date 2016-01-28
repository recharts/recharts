import React from 'react';
import { expect } from 'chai';
import { Surface, PolarAngleAxis } from 'recharts';
import { render } from 'enzyme';

describe('<PolarAngleAxis />', () => {
  let ticks = [
    {value: '100', radius: 50},
    {value: '200', radius: 100},
    {value: '300', radius: 150},
    {value: '400', radius: 200},
    {value: '500', radius: 250},
    {value: '600', radius: 300}
  ];

  it('renders 6 axis-tick in simple PolarAngleAxis', () => {
    let wrapper = render(
      <Surface width={500} height={500}>
        <PolarAngleAxis
          cx={250}
          cy={250}
          outerRadius={200}
          ticks={ticks}/>
      </Surface>
    );

    expect(wrapper.find('.axis-tick').length).to.equal(6);
  });
});