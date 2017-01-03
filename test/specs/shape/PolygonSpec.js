import React from 'react';
import { expect } from 'chai';
import { Surface, Polygon } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Polygon />', () => {
  const points = [
    { x: 100, y: 300 },
    { x: 300, y: 300 },
    { x: 200, y: 50 },
  ];

  it('Render 1 path in simple Polygon', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Polygon points={points} fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-polygon').length).to.equal(1);
  });

  it('Dno\'t render any path when points is empty or null', () => {
    const wrapper = render(
      <Surface width={400} height={400}>
        <Polygon points={[]} fill="#ff7300" />
        <Polygon fill="#ff7300" />
      </Surface>
    );

    expect(wrapper.find('.recharts-polygon').length).to.equal(0);
  });
});
