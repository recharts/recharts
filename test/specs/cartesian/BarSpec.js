import React from 'react';
import { expect } from 'chai';
import { Surface, Bar } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Bar />', () => {
  const data = [
    { x: 10, y: 50, width: 20, height: 50, value: 100 },
    { x: 50, y: 50, width: 20, height: 50, value: 100 },
    { x: 90, y: 50, width: 20, height: 50, value: 100 },
    { x: 130, y: 50, width: 20, height: 50, value: 100 },
    { x: 170, y: 50, width: 20, height: 50, value: 100 },
  ];

  it('Render 5 rectangles in a simple Bar', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Bar
          data={data}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-bar-rectangle').length).to.equal(5);
  });

  it('Render 5 rectangles in a vertical Bar', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Bar
          layout="vertical"
          data={data}
          label
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-bar-rectangle').length).to.equal(5);
  });

  it('Don\'t render any rectangle when data is empty', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Bar
          data={[]}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-bar-rectangle').length).to.equal(0);
  });
});
