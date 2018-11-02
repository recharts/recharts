import React from 'react';
import { expect } from 'chai';
import { Surface, Bar } from 'recharts';
import { mount, render } from 'enzyme';

describe('<Bar />', () => {
  const data = [
    { x: 10, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 50, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 90, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 130, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 170, y: 50, width: 20, height: 50, value: 100, label: 'test' },
  ];

  it('Render 5 rectangles in a simple Bar', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Bar
          isAnimationActive={false}
          data={data}
          label={{ label: 'test' }}
        />
      </Surface>
    );

    expect(wrapper.find('.recharts-bar-rectangle').length).to.equal(5);
  });

  it('Render 5 rectangles in a vertical Bar', () => {
    const wrapper = render(
      <Surface width={500} height={500}>
        <Bar
          isAnimationActive={false}
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

  describe('With background', () => {
    const composedDataWithBackground = [{
      x: 10,
      y: 50,
      width: 20,
      height: 20,
      value: 40,
      label: 'test',
      background: { x: 10, y: 50, width: 20, height: 50 },
    }, {
      x: 50,
      y: 50,
      width: 20,
      height: 50,
      value: 100,
      label: 'test',
      background: { x: 50, y: 50, width: 20, height: 50 },
    }];

    it('Will create a background Rectangle with the passed in props', () => {
      const wrapper = render(
        <Surface width={500} height={500}>
          <Bar data={composedDataWithBackground} background={{ fill: '#000' }} />
        </Surface>
      );

      expect(wrapper.find('.recharts-bar-background-rectangle').length).to.equal(2);
    });

    it('Will accept a function for the background prop', () => {
      const wrapper = render(
        <Surface width={500} height={500}>
          <Bar
            data={composedDataWithBackground}
            background={({ index }) => {
              return (index === 0) ? <div className='test-custom-background' /> : null;
            }}
          />
        </Surface>
      );

      expect(wrapper.find('.recharts-bar-background-rectangle').length).to.equal(0);
      expect(wrapper.find('.test-custom-background').length).to.equal(1);
    });
  });
});
