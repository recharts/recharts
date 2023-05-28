import React from 'react';
import { render } from '@testing-library/react';

import { Surface, Dot } from '../../src';

describe('<Dot />', () => {
  test('Render 1 circle in simple Dot', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Dot cx={100} cy={100} r={5} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-dot')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test("Don't Render any circle when cx is invalid", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Dot cy={100} r={5} fill="#ff7300" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-dot')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});
