import React from 'react';
import { render } from '@testing-library/react';

import { Surface, Polygon } from '../../src';

describe('<Polygon />', () => {
  const points = [
    { x: 100, y: 300 },
    { x: 300, y: 300 },
    { x: 200, y: 50 },
  ];

  test('Render 1 path in simple Polygon', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Polygon points={points} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polygon')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test("Don't render any path when points is empty or null", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Polygon points={[]} fill="#ff7300" />
        <Polygon fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-polygon')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});
