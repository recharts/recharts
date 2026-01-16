import React from 'react';
import { rechartsTestRender } from '../helper/createSelectorTestCase';
import { Bar, BarChart } from '../../src';
import { expectBars } from '../helper/expectBars';

type ExampleDataPoint = {
  x: number;
  y: number;
  value: number;
  name: string;
};

const data: Array<ExampleDataPoint> = [
  { x: 10, y: 50, value: 100, name: 'a' },
  { x: 50, y: 50, value: 100, name: 'b' },
  { x: 90, y: 50, value: 100, name: 'c' },
  { x: 130, y: 50, value: 100, name: 'd' },
  { x: 170, y: 50, value: 100, name: 'e' },
];

describe('Bar with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render Bar with correct data and correct dataKey', () => {
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey="value" />
        </BarChart>,
      );
      // We expect bars to be rendered. We don't strictly check position here as this is a type test mainly.
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
    });

    it('should allow using incorrect type dataKey', () => {
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey="name" />
        </BarChart>,
      );
      // name is string, so it won't render bars usually (unless scale handles it, but here it's implicit)
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
    });

    it('should allow using non-existent dataKey', () => {
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar dataKey="foo" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
    });

    it('should allow when Bar data is matching Bar dataKey as string', () => {
      const { container } = rechartsTestRender(
        <BarChart width={400} height={400}>
          <Bar data={data} dataKey="value" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
    });

    it('should error when Bar data is not matching Bar dataKey', () => {
      const { container } = rechartsTestRender(
        <BarChart width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here */}
          <Bar data={data} dataKey="foo" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
    });
  });

  describe('with explicit Bar type parameters', () => {
    it('should allow correct dataKey when I type the Bar to my data type', () => {
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          <Bar<ExampleDataPoint> dataKey="value" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(data.length);
    });

    it('should show error if I type the Bar to my type explicitly but use wrong dataKey', () => {
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here */}
          <Bar<ExampleDataPoint, number> dataKey="name" />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
    });

    it('should show error when dataKey is inline typed to return wrong value', () => {
      const { container } = rechartsTestRender(
        <BarChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here */}
          <Bar<ExampleDataPoint, number> dataKey={(entry: ExampleDataPoint) => entry.name} />
        </BarChart>,
      );
      expect(container.querySelectorAll('.recharts-bar-rectangle')).toHaveLength(0);
    });
  });
});
