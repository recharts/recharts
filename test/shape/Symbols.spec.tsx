import React from 'react';
import { render } from '@testing-library/react';
import { Surface, Symbols, LineChart, XAxis, Line, YAxis } from '../../src';
import { getSymbolHalfWidth } from '../../src/shape/Symbols';

describe('<Symbols />', () => {
  test('Render 1 symbol', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Symbols type="circle" cx={100} cy={100} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-symbols')).toHaveLength(1);
  });

  test('Render 1 symbol when type is wrong', () => {
    const { container } = render(
      <Surface width={400} height={400}>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore */}
        <Symbols cx={100} cy={100} type={undefined} />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-symbols')).toHaveLength(1);
  });

  test("Don't render any symbol when cx is invalid", () => {
    const { container } = render(
      <Surface width={400} height={400}>
        <Symbols cy={100} type="circle" />
      </Surface>,
    );

    expect(container.querySelectorAll('.recharts-symbols')).toHaveLength(0);
  });

  test('Expect no points attribute on path', () => {
    const { container } = render(
      <LineChart
        width={400}
        height={400}
        data={[
          { name: 'test', uv: 100 },
          { name: 'test2', uv: 120 },
          { name: 'test3', uv: 150 },
        ]}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      >
        <XAxis />
        <YAxis type="category" />
        <Line dataKey="uv" />
      </LineChart>,
    );

    const symbols = container.querySelectorAll('.recharts-line .recharts-line-curve');
    expect(symbols).toHaveLength(1);
    expect(symbols[0]).not.toHaveAttribute('points');
  });
});

describe('getSymbolHalfWidth', () => {
  test('returns the radius of a circle', () => {
    expect(getSymbolHalfWidth('circle', 20, 'diameter')).toBeCloseTo(10);
  });

  test('returns half of the side of a square', () => {
    expect(getSymbolHalfWidth('square', 20, 'diameter')).toBeCloseTo(10);
  });

  test('returns less than half of the size for diamond, which is narrower than it is tall', () => {
    expect(getSymbolHalfWidth('diamond', 20, 'diameter')).toBeCloseTo(5.774, 3);
  });

  test('scales with size', () => {
    expect(getSymbolHalfWidth('star', 40, 'diameter')).toBeCloseTo(2 * getSymbolHalfWidth('star', 20, 'diameter'));
  });
});
