import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { BarChart, Bar } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('BarChart with strong typing', () => {
  it('should allow implicit chart typing', () => {
    rechartsTestRender(
      <BarChart data={data} width={400} height={400}>
        <Bar dataKey="value" isAnimationActive={false} />
      </BarChart>,
    );
  });

  it('should allow explicit chart typing', () => {
    rechartsTestRender(
      <BarChart<ExampleDataPoint> data={data} width={400} height={400}>
        <Bar dataKey="value" isAnimationActive={false} />
      </BarChart>,
    );
  });

  it('should show error when chart data shape does not match explicit generic type', () => {
    const invalidChart = (
      // @ts-expect-error TypeScript is correct here - chart data does not match explicit generic type
      <BarChart<ExampleDataPoint> data={{ wrong: 1 }} width={400} height={400}>
        <Bar dataKey="value" isAnimationActive={false} />
      </BarChart>
    );
    expect(invalidChart).toBeDefined();
  });
});
