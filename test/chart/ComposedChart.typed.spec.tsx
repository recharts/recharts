import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { ComposedChart, Line } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('ComposedChart with strong typing', () => {
  it('should allow implicit chart typing', () => {
    rechartsTestRender(
      <ComposedChart data={data} width={400} height={400}>
        <Line dataKey="value" isAnimationActive={false} />
      </ComposedChart>,
    );
  });

  it('should allow explicit chart typing', () => {
    rechartsTestRender(
      <ComposedChart<ExampleDataPoint> data={data} width={400} height={400}>
        <Line dataKey="value" isAnimationActive={false} />
      </ComposedChart>,
    );
  });

  it('should show error when chart data shape does not match explicit generic type', () => {
    const invalidChart = (
      // @ts-expect-error TypeScript is correct here - chart data does not match explicit generic type
      <ComposedChart<ExampleDataPoint> data={{ wrong: 1 }} width={400} height={400}>
        <Line dataKey="value" isAnimationActive={false} />
      </ComposedChart>
    );
    expect(invalidChart).toBeDefined();
  });
});
