import React from 'react';
import { describe, expect, it } from 'vitest';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { Funnel, FunnelChart, FunnelTrapezoidItem, getRelativeCoordinate } from '../../src';

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

describe('Funnel with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render Funnel with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel dataKey="value" isAnimationActive={false} />
        </FunnelChart>,
      );
      expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
    });

    it('should allow using incorrect type dataKey', () => {
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel dataKey="name" isAnimationActive={false} />
        </FunnelChart>,
      );
    });

    it('should allow using non-existent dataKey', () => {
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel dataKey="foo" isAnimationActive={false} />
        </FunnelChart>,
      );
    });

    it('should allow using dataKey function that returns wrong value', () => {
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel dataKey={entry => entry.name} isAnimationActive={false} />
        </FunnelChart>,
      );
    });

    it('should allow using dataKey function that accesses non-existent property', () => {
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel dataKey={entry => entry.foo} isAnimationActive={false} />
        </FunnelChart>,
      );
    });

    it('should allow when Funnel data is matching Funnel dataKey as string', () => {
      const { container } = rechartsTestRender(
        <FunnelChart width={400} height={400}>
          <Funnel data={data} dataKey="value" isAnimationActive={false} />
        </FunnelChart>,
      );
      expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
    });

    it('should allow when Funnel data is matching Funnel dataKey as function', () => {
      const { container } = rechartsTestRender(
        <FunnelChart width={400} height={400}>
          <Funnel data={data} dataKey={entry => entry.value} isAnimationActive={false} />
        </FunnelChart>,
      );
      expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
    });

    it('should allow when Funnel data is not matching Funnel dataKey', () => {
      rechartsTestRender(
        <FunnelChart width={400} height={400}>
          <Funnel data={data} dataKey="foo" isAnimationActive={false} />
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Funnel data={data} dataKey={entry => entry.foo} isAnimationActive={false} />
        </FunnelChart>,
      );
    });
  });

  describe('with explicit Funnel type parameters', () => {
    it('should allow correct dataKey when I type the Funnel to my data type', () => {
      const { container } = rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel<ExampleDataPoint> dataKey="value" isAnimationActive={false} />
        </FunnelChart>,
      );
      expect(container.getElementsByClassName('recharts-funnel-trapezoid')).toHaveLength(data.length);
    });

    it('should allow correct dataKey function when I inline type the dataKey function', () => {
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel<ExampleDataPoint> dataKey={(entry: ExampleDataPoint) => entry.value} isAnimationActive={false} />
        </FunnelChart>,
      );
    });

    it('should allow correct dataKey function when I type the dataKey function', () => {
      const dataKey = (entry: ExampleDataPoint) => entry.value;
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel<ExampleDataPoint> dataKey={dataKey} isAnimationActive={false} />
        </FunnelChart>,
      );
    });

    it('should show error if I type the Funnel explicitly but use wrong dataKey', () => {
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <Funnel<ExampleDataPoint, number> dataKey="name" isAnimationActive={false} />
        </FunnelChart>,
      );
    });

    it('should show error when dataKey is inline typed to return wrong value', () => {
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          <Funnel<ExampleDataPoint, number>
            /* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */
            dataKey={(entry: ExampleDataPoint) => entry.name}
            isAnimationActive={false}
          />
        </FunnelChart>,
      );
    });

    it('should show error when dataKey is const typed to return wrong value', () => {
      const dataKey = (entry: ExampleDataPoint) => entry.name;
      rechartsTestRender(
        <FunnelChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey return type does not match and this should be an error */}
          <Funnel<ExampleDataPoint, number> dataKey={dataKey} isAnimationActive={false} />
        </FunnelChart>,
      );
    });
  });
});

describe('Funnel event handlers', () => {
  it('should allow calling getRelativeCoordinate with the type provided by Recharts event handler', () => {
    return (
      <FunnelChart width={100} height={100}>
        <Funnel
          dataKey="foo"
          onClick={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseDown={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseUp={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseMove={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseLeave={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOver={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseOut={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onMouseEnter={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchStart={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchMove={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
          onTouchEnd={(_data: FunnelTrapezoidItem, _i: number, e) => {
            getRelativeCoordinate(e);
          }}
        />
      </FunnelChart>
    );
  });
});
