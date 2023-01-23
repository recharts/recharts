import React from 'react';
import { render } from '@testing-library/react';
import { Surface, Curve } from '../../src';

describe('<Curve />', () => {
  const points = [
    { x: 10, y: 10 },
    { x: 25, y: 40 },
    { x: 40, y: 10 },
    { x: 55, y: 40 },
    { x: 70, y: 10 },
  ];

  const points02 = [
    { x: 10, y: 100 },
    { x: 25, y: 400 },
    { x: 40, y: 100 },
    { x: 55, y: 400 },
    { x: 70, y: 100 },
  ];

  test('renders 1 curve', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
  });

  test('renders 1 vertical layout area', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={0} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
  });

  test('renders 1 horizontal layout area', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={0} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
  });

  test('renders 1 area', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={points02} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
  });

  test('Not render when points is empty', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(0);
  });
});
