import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { RadialBar, RadialBarChart, RadialBarDataItem, getRelativeCoordinate } from '../../../src';

type ExampleDataPoint = {
  value: number;
  name: string;
};

const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
  { value: 60, name: 'c' },
  { value: 40, name: 'd' },
  { value: 20, name: 'e' },
];

describe('RadialBar with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render RadialBar with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <RadialBarChart data={data} width={400} height={400}>
          <RadialBar dataKey="value" isAnimationActive={false} />
        </RadialBarChart>,
      );
      expect(container.querySelectorAll('.recharts-radial-bar-sector').length).toBeGreaterThan(0);
    });

    it('should allow incorrect or non-existent dataKeys in implicit mode', () => {
      rechartsTestRender(
        <RadialBarChart data={data} width={400} height={400}>
          <RadialBar dataKey="name" isAnimationActive={false} />
          <RadialBar dataKey="foo" isAnimationActive={false} />
        </RadialBarChart>,
      );
    });
  });

  describe('with explicit RadialBar type parameters', () => {
    it('should allow correct dataKey when typed explicitly', () => {
      rechartsTestRender(
        <RadialBarChart data={data} width={400} height={400}>
          <RadialBar<ExampleDataPoint> dataKey="value" isAnimationActive={false} />
          <RadialBar<ExampleDataPoint> dataKey={(entry: ExampleDataPoint) => entry.value} isAnimationActive={false} />
        </RadialBarChart>,
      );
    });

    it('should show errors when dataKey does not match explicit typing', () => {
      rechartsTestRender(
        <RadialBarChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <RadialBar<ExampleDataPoint, number> dataKey="name" isAnimationActive={false} />
          <RadialBar<ExampleDataPoint, number>
            /* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */
            dataKey={(entry: ExampleDataPoint) => entry.name}
            isAnimationActive={false}
          />
        </RadialBarChart>,
      );
    });
  });
});

describe('RadialBar event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <RadialBarChart>
        <RadialBar
          dataKey="foo"
          onClick={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseDown={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseUp={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseMove={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseLeave={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseOver={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseOut={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseEnter={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchStart={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchMove={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchEnd={(_data: RadialBarDataItem, _i: number, e) => getRelativeCoordinate(e)}
        />
      </RadialBarChart>
    );
  });
});
