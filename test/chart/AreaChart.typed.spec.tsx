import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { AreaChart, Area } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('AreaChart with strong typing', () => {
  it('should allow implicit chart typing', () => {
    rechartsTestRender(
      <AreaChart data={data} width={400} height={400}>
        <Area dataKey="value" isAnimationActive={false} />
      </AreaChart>,
    );
  });

  it('should allow explicit chart typing', () => {
    rechartsTestRender(
      <AreaChart<ExampleDataPoint> data={data} width={400} height={400}>
        <Area dataKey="value" isAnimationActive={false} />
      </AreaChart>,
    );
  });

  it('should show error when chart data shape does not match explicit generic type', () => {
    const invalidChart = (
      // @ts-expect-error TypeScript is correct here - chart data does not match explicit generic type
      <AreaChart<ExampleDataPoint> data={{ wrong: 1 }} width={400} height={400}>
        <Area dataKey="value" isAnimationActive={false} />
      </AreaChart>
    );
    expect(invalidChart).toBeDefined();
  });
});
