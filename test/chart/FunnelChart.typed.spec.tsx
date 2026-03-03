import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { FunnelChart, Funnel } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('FunnelChart with strong typing', () => {
  it('should allow implicit chart typing', () => {
    rechartsTestRender(
      <FunnelChart data={data} width={400} height={400}>
        <Funnel dataKey="value" isAnimationActive={false} />
      </FunnelChart>,
    );
  });

  it('should allow explicit chart typing', () => {
    rechartsTestRender(
      <FunnelChart<ExampleDataPoint> data={data} width={400} height={400}>
        <Funnel dataKey="value" isAnimationActive={false} />
      </FunnelChart>,
    );
  });

  it('should show error when chart data shape does not match explicit generic type', () => {
    const invalidChart = (
      // @ts-expect-error TypeScript is correct here - chart data does not match explicit generic type
      <FunnelChart<ExampleDataPoint> data={{ wrong: 1 }} width={400} height={400}>
        <Funnel dataKey="value" isAnimationActive={false} />
      </FunnelChart>
    );
    expect(invalidChart).toBeDefined();
  });
});
