import React from 'react';
import { render } from '@testing-library/react';
import { Area, AreaChart, YAxis } from '../../src';

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

describe('YAxis with strong typing', () => {
  describe('with all implicit types', () => {
    it('should render YAxis with correct data and correct dataKey', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis dataKey="name" />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should allow using incorrect type dataKey', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis dataKey="value" />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should allow using non-existent dataKey', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis dataKey="foo" />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should error when using dataKey function that returns wrong value', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis dataKey={entry => entry.name} />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should error when using dataKey function that accesses non-existent property', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis dataKey={entry => entry.foo} />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });
  });

  describe('with explicit YAxis type parameters', () => {
    it('should allow correct dataKey when I type the YAxis to my data type', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis<ExampleDataPoint> dataKey="name" />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should allow correct dataKey function when I inline type the dataKey function to my data type', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis dataKey={(entry: ExampleDataPoint) => entry.name} />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should allow correct dataKey function when I type the dataKey function to my data type', () => {
      const dataKey = (entry: ExampleDataPoint) => entry.name;
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          <YAxis dataKey={dataKey} />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should show error if I type the YAxis to my type explicitly but use wrong dataKey', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey does not match and this should be an error */}
          <YAxis<ExampleDataPoint> dataKey="foo" />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });

    it('should show error when dataKey is inline typed to return wrong value', () => {
      const { container } = render(
        <AreaChart data={data} width={400} height={400}>
          {/* @ts-expect-error TypeScript is correct here - the dataKey property access is invalid */}
          <YAxis<ExampleDataPoint> dataKey={(entry: ExampleDataPoint) => entry.foo} />
          <Area dataKey="value" />
        </AreaChart>,
      );
      expect(container.querySelector('.recharts-yAxis')).toBeInTheDocument();
    });
  });
});
