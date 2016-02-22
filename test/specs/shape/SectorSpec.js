import React from 'react';
import { expect } from 'chai';
import { Surface, Sector } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Sector />', () => {
  it('renders 1 sector in simple Sector', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Sector fill="#ff7902" cx={200} cy={300} innerRadius={150} outerRadius={200} endAngle={90} />
      </Surface>
    );

    expect(wrapper.find('.recharts-sector').length).to.equal(1);
  });
});
