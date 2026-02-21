import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { Line, LineChart, ReferenceArea, getRelativeCoordinate } from '../../src';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('ReferenceArea with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render ReferenceArea with implicit coordinate types', () => {
      const { container } = rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="value" />
          <ReferenceArea x1={0} x2={1} y1={80} y2={120} />
        </LineChart>,
      );
      expect(container).toBeDefined();
    });
  });

  describe('with explicit ReferenceArea type parameters', () => {
    it('should allow matching explicit coordinate types', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="value" />
          <ReferenceArea<number, number> x1={0} x2={1} y1={80} y2={120} />
        </LineChart>,
      );
    });

    it('should show errors when explicit coordinate types do not match', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="value" />
          {/* @ts-expect-error TypeScript is correct here - x values should be numbers */}
          <ReferenceArea<number, number> x1="a" x2={1} y1={80} y2={120} />
          {/* @ts-expect-error TypeScript is correct here - y values should be numbers */}
          <ReferenceArea<number, number> x1={0} x2={1} y1="a" y2={120} />
        </LineChart>,
      );
    });
  });
});

describe('ReferenceArea event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <LineChart width={100} height={100}>
        <ReferenceArea
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
      </LineChart>
    );
  });
});
