import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { LineChart, Line } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('LineChart with strong typing', () => {
  it('should allow implicit chart typing', () => {
    rechartsTestRender(
      <LineChart data={data} width={400} height={400}>
        <Line dataKey="value" isAnimationActive={false} />
      </LineChart>,
    );
  });

  it('should allow explicit chart typing', () => {
    rechartsTestRender(
      <LineChart<ExampleDataPoint> data={data} width={400} height={400}>
        <Line dataKey="value" isAnimationActive={false} />
      </LineChart>,
    );
  });

  it('should show error when chart data shape does not match explicit generic type', () => {
    const invalidChart = (
      // @ts-expect-error TypeScript is correct here - chart data does not match explicit generic type
      <LineChart<ExampleDataPoint> data={{ wrong: 1 }} width={400} height={400}>
        <Line dataKey="value" isAnimationActive={false} />
      </LineChart>
    );
    expect(invalidChart).toBeDefined();
  });
});
