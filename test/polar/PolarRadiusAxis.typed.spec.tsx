import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { PolarRadiusAxis, RadialBar, RadialBarChart, getRelativeCoordinate } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('PolarRadiusAxis with strong typing', () => {
  it('should allow implicit dataKey typing', () => {
    rechartsTestRender(
      <RadialBarChart data={data} width={400} height={400}>
        <PolarRadiusAxis dataKey="value" />
        <RadialBar dataKey="value" />
      </RadialBarChart>,
    );
  });

  it('should allow explicit dataKey typing and reject invalid values', () => {
    rechartsTestRender(
      <RadialBarChart data={data} width={400} height={400}>
        <PolarRadiusAxis<ExampleDataPoint, number> dataKey="value" />
        {/* @ts-expect-error TypeScript is correct here - name is not number-valued */}
        <PolarRadiusAxis<ExampleDataPoint, number> dataKey="name" />
        <RadialBar dataKey="value" />
      </RadialBarChart>,
    );
  });
});

describe('PolarRadiusAxis event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <RadialBarChart width={100} height={100}>
        <PolarRadiusAxis
          onClick={e => getRelativeCoordinate(e)}
          onMouseDown={e => getRelativeCoordinate(e)}
          onMouseUp={e => getRelativeCoordinate(e)}
          onMouseMove={e => getRelativeCoordinate(e)}
          onMouseLeave={e => getRelativeCoordinate(e)}
          onMouseOver={e => getRelativeCoordinate(e)}
          onMouseOut={e => getRelativeCoordinate(e)}
          onMouseEnter={e => getRelativeCoordinate(e)}
          onTouchStart={e => getRelativeCoordinate(e)}
          onTouchMove={e => getRelativeCoordinate(e)}
          onTouchEnd={e => getRelativeCoordinate(e)}
        />
      </RadialBarChart>
    );
  });
});
