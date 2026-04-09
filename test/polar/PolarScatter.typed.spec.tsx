import React from 'react';
import { describe, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import {
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarScatter,
  PolarScatterChart,
  PolarScatterPointItem,
  getRelativeCoordinate,
} from '../../src';

type ExampleDataPoint = {
  theta: number;
  radius: number;
  label: string;
};

const data: ReadonlyArray<ExampleDataPoint> = [
  { theta: 0, radius: 50, label: 'east' },
  { theta: 90, radius: 100, label: 'north' },
];

describe('PolarScatter with strong typing', () => {
  it('should allow correct dataKey when typed explicitly', () => {
    rechartsTestRender(
      <PolarScatterChart data={data} width={300} height={300}>
        <PolarAngleAxis dataKey="theta" type="number" />
        <PolarRadiusAxis type="number" />
        <PolarScatter<ExampleDataPoint, number> dataKey="radius" isAnimationActive={false} />
        <PolarScatter<ExampleDataPoint, number>
          dataKey={(entry: ExampleDataPoint) => entry.radius}
          isAnimationActive={false}
        />
      </PolarScatterChart>,
    );
  });

  it('should show errors when dataKey does not match explicit typing', () => {
    rechartsTestRender(
      <PolarScatterChart data={data} width={300} height={300}>
        <PolarAngleAxis dataKey="theta" type="number" />
        <PolarRadiusAxis type="number" />
        {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
        <PolarScatter<ExampleDataPoint, number> dataKey="label" isAnimationActive={false} />
        <PolarScatter<ExampleDataPoint, number>
          /* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */
          dataKey={(entry: ExampleDataPoint) => entry.label}
          isAnimationActive={false}
        />
      </PolarScatterChart>,
    );
  });
});

describe('PolarScatter event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <PolarScatterChart width={100} height={100}>
        <PolarAngleAxis dataKey="theta" type="number" />
        <PolarRadiusAxis type="number" />
        <PolarScatter
          dataKey="radius"
          onClick={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseDown={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseUp={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseMove={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseLeave={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseOver={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseOut={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onMouseEnter={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onTouchStart={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onTouchMove={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
          onTouchEnd={(_point: PolarScatterPointItem, _index: number, e) => getRelativeCoordinate(e)}
        />
      </PolarScatterChart>
    );
  });
});
