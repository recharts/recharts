import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Line, LineChart, TickItem, YAxis, getRelativeCoordinate } from '../../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('YAxis with strong typing', () => {
  it('should allow implicit dataKey typing', () => {
    rechartsTestRender(
      <LineChart data={data} width={400} height={400}>
        <YAxis dataKey="value" />
        <Line dataKey="value" />
      </LineChart>,
    );
  });

  it('should allow explicit dataKey typing and reject invalid values', () => {
    rechartsTestRender(
      <LineChart data={data} width={400} height={400}>
        <YAxis<ExampleDataPoint, number> dataKey="value" />
        <YAxis<ExampleDataPoint, number> dataKey={(entry: ExampleDataPoint) => entry.value} />
        {/* @ts-expect-error TypeScript is correct here - name is not number-valued */}
        <YAxis<ExampleDataPoint, number> dataKey="name" />
        <Line dataKey="value" />
      </LineChart>,
    );
  });
});

describe('YAxis event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <LineChart width={100} height={100}>
        <YAxis
          onClick={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseDown={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseUp={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseMove={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseLeave={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseOver={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseOut={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseEnter={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchStart={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchMove={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchEnd={(_tick: TickItem, _i: number, e) => getRelativeCoordinate(e)}
        />
      </LineChart>
    );
  });
});
