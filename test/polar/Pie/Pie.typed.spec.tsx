import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../../helper/createSelectorTestCase';
import { Pie, PieChart, PieSectorDataItem, getRelativeCoordinate } from '../../../src';

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

describe('Pie with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render Pie with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="value" isAnimationActive={false} />
        </PieChart>,
      );
      expect(container.querySelectorAll('.recharts-sector')).toHaveLength(data.length);
    });

    it('should allow incorrect or non-existent dataKeys in implicit mode', () => {
      rechartsTestRender(
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey="name" isAnimationActive={false} />
          <Pie data={data} dataKey="foo" isAnimationActive={false} />
        </PieChart>,
      );
    });
  });

  describe('with explicit Pie type parameters', () => {
    it('should allow correct dataKey when typed explicitly', () => {
      rechartsTestRender(
        <PieChart width={400} height={400}>
          <Pie<ExampleDataPoint> data={data} dataKey="value" isAnimationActive={false} />
          <Pie<ExampleDataPoint>
            data={data}
            dataKey={(entry: ExampleDataPoint) => entry.value}
            isAnimationActive={false}
          />
        </PieChart>,
      );
    });

    it('should show errors when dataKey does not match explicit typing', () => {
      rechartsTestRender(
        <PieChart width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Pie<ExampleDataPoint, number> data={data} dataKey="name" isAnimationActive={false} />
          <Pie<ExampleDataPoint, number>
            data={data}
            /* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */
            dataKey={(entry: ExampleDataPoint) => entry.name}
            isAnimationActive={false}
          />
        </PieChart>,
      );
    });
  });
});

describe('Pie event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <PieChart>
        <Pie
          onClick={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseDown={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseUp={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseMove={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseLeave={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseOver={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseOut={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onMouseEnter={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchStart={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchMove={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
          onTouchEnd={(_data: PieSectorDataItem, _i: number, e) => getRelativeCoordinate(e)}
        />
      </PieChart>
    );
  });
});
