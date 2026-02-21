import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { DotProps, Line, LineChart, ReferenceDot, getRelativeCoordinate } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('ReferenceDot with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render ReferenceDot with implicit coordinate types', () => {
      const { container } = rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="value" />
          <ReferenceDot x={0} y={100} />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-reference-dot-dot')).toHaveLength(1);
    });
  });

  describe('with explicit ReferenceDot type parameters', () => {
    it('should allow matching explicit coordinate types', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="value" />
          <ReferenceDot<number, number> x={0} y={100} />
        </LineChart>,
      );
    });

    it('should show errors when explicit coordinate types do not match', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="value" />
          {/* @ts-expect-error TypeScript is correct here - x should be number */}
          <ReferenceDot<number, number> x="a" y={100} />
          {/* @ts-expect-error TypeScript is correct here - y should be number */}
          <ReferenceDot<number, number> x={0} y="a" />
        </LineChart>,
      );
    });
  });
});

describe('ReferenceDot event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <LineChart width={100} height={100}>
        <ReferenceDot
          x={10}
          y={10}
          onClick={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onMouseDown={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onMouseUp={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onMouseMove={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onMouseLeave={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onMouseOver={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onMouseOut={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onMouseEnter={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onTouchStart={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onTouchMove={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
          onTouchEnd={(_dotProps: DotProps, e) => getRelativeCoordinate(e)}
        />
      </LineChart>
    );
  });
});
