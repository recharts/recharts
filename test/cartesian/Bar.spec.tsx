import { render } from '@testing-library/react';
import * as _ from 'lodash';
import React from 'react';

import { Bar, Surface } from '../../src';

describe('<Bar />', () => {
  const data = [
    { x: 10, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 50, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 90, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 130, y: 50, width: 20, height: 50, value: 100, label: 'test' },
    { x: 170, y: 50, width: 20, height: 50, value: 100, label: 'test' },
  ];

  it(`Render ${data.length} rectangles in a simple Bar`, () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Bar isAnimationActive={false} layout="horizontal" data={data} dataKey="value" data-testid="customized-bar" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
  });

  it(`Render ${data.length} rectangles in a vertical Bar`, () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Bar isAnimationActive={false} layout="vertical" data={data} dataKey="value" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
  });

  it("Don't render any rectangle when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Bar data={[]} dataKey="value" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
  });

  describe('With background', () => {
    const composedDataWithBackground = [
      {
        x: 10,
        y: 50,
        width: 20,
        height: 20,
        value: 40,
        label: 'test',
        background: { x: 10, y: 50, width: 20, height: 50 },
      },
      {
        x: 50,
        y: 50,
        width: 20,
        height: 50,
        value: 100,
        label: 'test',
        background: { x: 50, y: 50, width: 20, height: 50 },
      },
    ];

    it('Will create a background Rectangle with the passed in props', () => {
      const { container } = render(
        <Surface width={500} height={500}>
          <Bar data={composedDataWithBackground} background={{ fill: '#000' }} dataKey="value" />
        </Surface>,
      );

      expect(container.querySelectorAll('.recharts-bar-background-rectangle')).toHaveLength(
        composedDataWithBackground.length,
      );
    });

    it('Will accept a function for the background prop', () => {
      const className = 'test-custom-background';
      const backgroundComponent = () => {
        return <div key={_.uniqueId()} className={className} />;
      };
      const { container } = render(
        <Surface width={500} height={500}>
          <Bar data={composedDataWithBackground} background={backgroundComponent} dataKey="value" />
        </Surface>,
      );

      expect(container.querySelectorAll(`.${className}`)).toHaveLength(composedDataWithBackground.length);
    });
  });
});
