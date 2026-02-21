import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { PolarAngleAxis, RadialBar, RadialBarChart, TickItem, getRelativeCoordinate } from '../../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('PolarAngleAxis with strong typing', () => {
  it('should allow implicit dataKey typing', () => {
    rechartsTestRender(
      <RadialBarChart data={data} width={400} height={400}>
        <PolarAngleAxis dataKey="name" />
        <RadialBar dataKey="value" />
      </RadialBarChart>,
    );
  });

  it('should allow explicit dataKey typing and reject invalid values', () => {
    rechartsTestRender(
      <RadialBarChart data={data} width={400} height={400}>
        <PolarAngleAxis<ExampleDataPoint, string> dataKey="name" />
        {/* @ts-expect-error TypeScript is correct here - value is not string-valued */}
        <PolarAngleAxis<ExampleDataPoint, string> dataKey="value" />
        <RadialBar dataKey="value" />
      </RadialBarChart>,
    );
  });
});

describe('PolarAngleAxis event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <RadialBarChart width={100} height={100}>
        <PolarAngleAxis
          onClick={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseDown={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseUp={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseMove={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseLeave={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseOver={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseOut={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseEnter={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onTouchStart={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onTouchMove={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
          onTouchEnd={(_axisProps: TickItem, _index: number, e) => getRelativeCoordinate(e)}
        />
      </RadialBarChart>
    );
  });
});
