import React from 'react';
import { describe, expect, it } from 'vitest';
import { BarChart, Bar, LineChart, PieChart } from '../../src';
import { rechartsTestRender } from '../helper/createSelectorTestCase';

type ExampleDataPoint = { value: number; name: string };
const data: ReadonlyArray<ExampleDataPoint> = [
  { value: 100, name: 'a' },
  { value: 80, name: 'b' },
];

describe('BarChart types', () => {
  it('should accept cursor prop on BarChart', () => {
    const { container } = rechartsTestRender(
      <BarChart width={400} height={300} data={data} cursor="pointer">
        <Bar dataKey="value" />
      </BarChart>,
    );
    expect(container.querySelector('.recharts-surface')).toHaveAttribute('cursor', 'pointer');
  });

  it('should accept cursor prop on LineChart', () => {
    const { container } = rechartsTestRender(<LineChart width={400} height={300} data={data} cursor="crosshair" />);
    expect(container.querySelector('.recharts-surface')).toHaveAttribute('cursor', 'crosshair');
  });

  it('should accept cursor prop on PieChart', () => {
    const { container } = rechartsTestRender(<PieChart width={400} height={300} cursor="default" />);
    expect(container.querySelector('.recharts-surface')).toHaveAttribute('cursor', 'default');
  });

  it('should allow implicit chart typing', () => {
    rechartsTestRender(
      <BarChart data={data} width={400} height={400}>
        <Bar dataKey="value" isAnimationActive={false} />
      </BarChart>,
    );
  });

  it('should allow explicit chart typing', () => {
    rechartsTestRender(
      <BarChart<ExampleDataPoint> data={data} width={400} height={400}>
        <Bar dataKey="value" isAnimationActive={false} />
      </BarChart>,
    );
  });

  it('should show error when chart data shape does not match explicit generic type', () => {
    const invalidChart = (
      // @ts-expect-error TypeScript is correct here - chart data does not match explicit generic type
      <BarChart<ExampleDataPoint> data={{ wrong: 1 }} width={400} height={400}>
        <Bar dataKey="value" isAnimationActive={false} />
      </BarChart>
    );
    expect(invalidChart).toBeDefined();
  });
});
