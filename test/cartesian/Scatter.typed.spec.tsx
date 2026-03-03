import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { Scatter, ScatterChart, ScatterPointItem, getRelativeCoordinate } from '../../src';

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

describe('Scatter with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render Scatter with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter dataKey="value" isAnimationActive={false} />
        </ScatterChart>,
      );
      expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(data.length);
    });

    it('should allow using incorrect type dataKey', () => {
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter dataKey="name" isAnimationActive={false} />
        </ScatterChart>,
      );
    });

    it('should allow using non-existent dataKey', () => {
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter dataKey="foo" isAnimationActive={false} />
        </ScatterChart>,
      );
    });

    it('should allow using dataKey function that returns wrong value', () => {
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter dataKey={entry => entry.name} isAnimationActive={false} />
        </ScatterChart>,
      );
    });

    it('should allow using dataKey function that accesses non-existent property', () => {
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter dataKey={entry => entry.foo} isAnimationActive={false} />
        </ScatterChart>,
      );
    });

    it('should allow when Scatter data is matching Scatter dataKey as string', () => {
      const { container } = rechartsTestRender(
        <ScatterChart width={400} height={400}>
          <Scatter data={data} dataKey="value" isAnimationActive={false} />
        </ScatterChart>,
      );
      expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(data.length);
    });

    it('should allow when Scatter data is matching Scatter dataKey as function', () => {
      const { container } = rechartsTestRender(
        <ScatterChart width={400} height={400}>
          <Scatter data={data} dataKey={entry => entry.value} isAnimationActive={false} />
        </ScatterChart>,
      );
      expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(data.length);
    });

    it('should allow when Scatter data is not matching Scatter dataKey', () => {
      rechartsTestRender(
        <ScatterChart width={400} height={400}>
          <Scatter data={data} dataKey="foo" isAnimationActive={false} />
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Scatter data={data} dataKey={entry => entry.foo} isAnimationActive={false} />
        </ScatterChart>,
      );
    });
  });

  describe('with explicit Scatter type parameters', () => {
    it('should allow correct dataKey when I type the Scatter to my data type', () => {
      const { container } = rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter<ExampleDataPoint> dataKey="value" isAnimationActive={false} />
        </ScatterChart>,
      );
      expect(container.querySelectorAll('.recharts-scatter-symbol')).toHaveLength(data.length);
    });

    it('should allow correct dataKey function when I inline type the dataKey function', () => {
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter<ExampleDataPoint> dataKey={(entry: ExampleDataPoint) => entry.value} isAnimationActive={false} />
        </ScatterChart>,
      );
    });

    it('should allow correct dataKey function when I type the dataKey function', () => {
      const dataKey = (entry: ExampleDataPoint) => entry.value;
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter<ExampleDataPoint> dataKey={dataKey} isAnimationActive={false} />
        </ScatterChart>,
      );
    });

    it('should show error if I type the Scatter explicitly but use wrong dataKey', () => {
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Scatter<ExampleDataPoint, number> dataKey="name" isAnimationActive={false} />
        </ScatterChart>,
      );
    });

    it('should show error when dataKey is inline typed to return wrong value', () => {
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          <Scatter<ExampleDataPoint, number>
            /* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */
            dataKey={(entry: ExampleDataPoint) => entry.name}
            isAnimationActive={false}
          />
        </ScatterChart>,
      );
    });

    it('should show error when dataKey is const typed to return wrong value', () => {
      const dataKey = (entry: ExampleDataPoint) => entry.name;
      rechartsTestRender(
        <ScatterChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Scatter<ExampleDataPoint, number> dataKey={dataKey} isAnimationActive={false} />
        </ScatterChart>,
      );
    });
  });
});

describe('Scatter event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <ScatterChart width={100} height={100}>
        <Scatter
          dataKey="foo"
          onClick={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: ScatterPointItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </ScatterChart>
    );
  });
});
