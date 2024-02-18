import React from 'react';
import { describe, expect, it } from 'vitest';
import { render } from '@testing-library/react';
import { Surface, Curve } from '../../src';
import { getPath } from '../../src/shape/Curve';

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
    expect(container).toMatchSnapshot();
  });

  test('renders 1 vertical layout area', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={0} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test('renders 1 horizontal layout area', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={0} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test('renders 1 area', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={points} baseLine={points02} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(1);
    expect(container).toMatchSnapshot();
  });

  test('Not render when points is empty', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Curve stroke="#000" fill="none" type="monotone" points={[]} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-curve')).toHaveLength(0);
    expect(container).toMatchSnapshot();
  });
});

describe('getPath', () => {
  it('should return null when called without parameters', () => {
    const actual = getPath({});
    expect(actual).toBeNull();
  });

  it('should return null when points is an empty array', () => {
    const actual = getPath({
      points: [],
    });
    expect(actual).toBeNull();
  });

  it('should return path if points has some points in it', () => {
    const actual = getPath({
      points: [{ x: 1, y: 2 }],
    });
    expect(actual).toBe('M1,2Z');
  });

  it('should return same path for vertical layout', () => {
    const actual = getPath({
      layout: 'vertical',
      points: [{ x: 1, y: 2 }],
    });
    expect(actual).toBe('M1,2Z');
  });

  it('should return new path if baseLine is an array', () => {
    const actual = getPath({
      layout: 'horizontal',
      points: [{ x: 1, y: 2 }],
      baseLine: [{ x: 100, y: 200 }],
    });
    expect(actual).toBe('M1,2L1,200Z');
  });

  it('should return yet different path in vertical layout if baseLine is an array', () => {
    const actual = getPath({
      layout: 'vertical',
      points: [{ x: 1, y: 2 }],
      baseLine: [{ x: 100, y: 200 }],
    });
    expect(actual).toBe('M1,2L100,2Z');
  });

  it('should return path when baseLine is undefined', () => {
    const actual = getPath({
      type: 'linear',
      layout: 'horizontal',
      points: [{ x: 5, y: 5 }],
      baseLine: undefined,
    });
    expect(actual).toBe('M5,5Z');
  });

  it('should return null when point.y is null', () => {
    const actual = getPath({
      type: 'linear',
      layout: 'horizontal',
      // typescript type says not-null but when I try in sandbox I can see nulls coming here
      points: [{ x: 5, y: null }],
      baseLine: undefined,
    });
    expect(actual).toBeNull();
  });
});
