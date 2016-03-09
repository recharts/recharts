import React from 'react';
import { expect } from 'chai';
import { Surface, Line } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Line />', () => {
  const data = [
    { x: 10, y: 50, value: 100 },
    { x: 50, y: 50, value: 100 },
    { x: 90, y: 50, value: 100 },
    { x: 130, y: 50, value: 100 },
    { x: 170, y: 50, value: 100 },
  ];

  it('Render a path in a simple Line', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Line
          isAnimationActive={false}
          points={data}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-line-curve').length).to.equal(1);
  });

  it('Don\'t render any path when data is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Line
          points={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-line-curve').length).to.equal(0);
  });
});
