import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { Surface, Cell } from 'recharts';

describe('<Cell />', () => {
  it('Render empty dom', () => {
    const wrapper = mount(
      <Cell />
    );
    expect(wrapper.props().children).to.be.undefined;
  });
});
