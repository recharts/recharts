import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { CurveProps, Line, LineChart, getRelativeCoordinate } from '../../src';

type ExampleDataPoint = {
  x: number;
  y: number;
  value: number;
  name: string;
};

const data: ReadonlyArray<ExampleDataPoint> = [
  { x: 10, y: 50, value: 100, name: 'a' },
  { x: 50, y: 50, value: 100, name: 'b' },
  { x: 90, y: 50, value: 100, name: 'c' },
  { x: 130, y: 50, value: 100, name: 'd' },
  { x: 170, y: 50, value: 100, name: 'e' },
];

describe('Line with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render Line with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="value" isAnimationActive={false} />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    });

    it('should allow using incorrect type dataKey', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="name" isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should allow using non-existent dataKey', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey="foo" isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should allow using dataKey function that returns wrong value', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey={entry => entry.name} isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should allow using dataKey function that accesses non-existent property', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line dataKey={entry => entry.foo} isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should allow when Line data is matching Line dataKey as string', () => {
      const { container } = rechartsTestRender(
        <LineChart width={400} height={400}>
          <Line data={data} dataKey="value" isAnimationActive={false} />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    });

    it('should allow when Line data is matching Line dataKey as function', () => {
      const { container } = rechartsTestRender(
        <LineChart width={400} height={400}>
          <Line data={data} dataKey={entry => entry.value} isAnimationActive={false} />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    });

    it('should allow when Line data is not matching Line dataKey', () => {
      rechartsTestRender(
        <LineChart width={400} height={400}>
          <Line data={data} dataKey="foo" isAnimationActive={false} />
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Line data={data} dataKey={entry => entry.foo} isAnimationActive={false} />
        </LineChart>,
      );
    });
  });

  describe('with explicit Line type parameters', () => {
    it('should allow correct dataKey when I type the Line to my data type', () => {
      const { container } = rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line<ExampleDataPoint> dataKey="value" isAnimationActive={false} />
        </LineChart>,
      );
      expect(container.querySelectorAll('.recharts-line-curve')).toHaveLength(1);
    });

    it('should allow correct dataKey function when I inline type the dataKey function', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line<ExampleDataPoint> dataKey={(entry: ExampleDataPoint) => entry.value} isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should allow correct dataKey function when I type the dataKey function', () => {
      const dataKey = (entry: ExampleDataPoint) => entry.value;
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          <Line<ExampleDataPoint> dataKey={dataKey} isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should show error if I type the Line explicitly but use wrong dataKey', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Line<ExampleDataPoint, number> dataKey="name" isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should show error when dataKey is inline typed to return wrong value', () => {
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Line<ExampleDataPoint, number> dataKey={(entry: ExampleDataPoint) => entry.name} isAnimationActive={false} />
        </LineChart>,
      );
    });

    it('should show error when dataKey is const typed to return wrong value', () => {
      const dataKey = (entry: ExampleDataPoint) => entry.name;
      rechartsTestRender(
        <LineChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Line<ExampleDataPoint, number> dataKey={dataKey} isAnimationActive={false} />
        </LineChart>,
      );
    });
  });
});

describe('Line event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <LineChart width={100} height={100}>
        <Line
          dataKey="foo"
          onClick={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: CurveProps, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </LineChart>
    );
  });
});
