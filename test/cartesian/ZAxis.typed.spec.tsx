import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { Scatter, ScatterChart, ZAxis } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('ZAxis with strong typing', () => {
  it('should allow implicit dataKey typing', () => {
    rechartsTestRender(
      <ScatterChart data={data} width={400} height={400}>
        <ZAxis dataKey="foo" />
        <Scatter dataKey="value" isAnimationActive={false} />
      </ScatterChart>,
    );
  });

  it('should allow explicit dataKey typing and reject invalid values', () => {
    rechartsTestRender(
      <ScatterChart data={data} width={400} height={400}>
        <ZAxis<ExampleDataPoint, number> dataKey="value" />
        {/* @ts-expect-error TypeScript is correct here - name is not number-valued */}
        <ZAxis<ExampleDataPoint, number> dataKey="name" />
        <Scatter dataKey="value" isAnimationActive={false} />
      </ScatterChart>,
    );
  });
});
