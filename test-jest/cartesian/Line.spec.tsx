import React from 'react';
import { render } from '@testing-library/react';
import { Surface, Line } from '../../src';

describe('<Line />', () => {
  const data = [
    { x: 10, y: 50, value: 100 },
    { x: 50, y: 50, value: 100 },
    { x: 90, y: 50, value: 100 },
    { x: 130, y: 50, value: 100 },
    { x: 170, y: 50, value: 100 },
  ];

  it('Render a path in a simple Line', () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line isAnimationActive={false} points={data} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
  });

  it("Don't render any path when data is empty", () => {
    const { container } = render(
      <Surface width={500} height={500}>
        <Line points={[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(0);
  });
});
