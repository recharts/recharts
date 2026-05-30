/**
 * @fileOverview https://github.com/recharts/recharts/issues/7362
 */
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Line, LineChart, XAxis, YAxis } from '../../../src';
import { ExpectAxisDomain, expectYAxisTicks } from '../../helper/expectAxisTicks';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

type Datum = {
  name: string;
  value: number | null;
};

const explicitDomain = [0, 100] as const;
const explicitTicks = [0, 25, 50, 75, 100] as const;

const allNullData: ReadonlyArray<Datum> = [
  { name: 'Page A', value: null },
  { name: 'Page B', value: null },
  { name: 'Page C', value: null },
  { name: 'Page D', value: null },
];

const partlyNumericData: ReadonlyArray<Datum> = [
  { name: 'Page A', value: null },
  { name: 'Page B', value: 25 },
  { name: 'Page C', value: null },
  { name: 'Page D', value: 75 },
];

function renderIssue7362Chart({
  data,
  ticks,
  tickCount,
}: {
  data: ReadonlyArray<Datum>;
  ticks?: ReadonlyArray<number>;
  tickCount?: number;
}) {
  const axisDomainSpy = vi.fn();

  const renderResult = render(
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        domain={explicitDomain}
        allowDataOverflow
        {...(ticks != null ? { ticks } : {})}
        {...(tickCount != null ? { tickCount } : {})}
      />
      <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} connectNulls />
      <ExpectAxisDomain assert={axisDomainSpy} axisType="yAxis" />
    </LineChart>,
  );

  return {
    ...renderResult,
    axisDomainSpy,
  };
}

describe('YAxis issue 7362 current behavior', () => {
  it('renders the explicit tick ladder for all-null series data when ticks are supplied', () => {
    const { container, axisDomainSpy } = renderIssue7362Chart({
      data: allNullData,
      ticks: explicitTicks,
    });

    // Current main resolves the explicit numeric scale from the YAxis config even though every series value is null.
    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expect(container.querySelectorAll('.recharts-yAxis .recharts-cartesian-axis-line')).toHaveLength(1);
    expect(container.querySelectorAll('.recharts-yAxis .recharts-cartesian-axis-tick')).toHaveLength(5);
    expectYAxisTicks(container, [
      { textContent: '0', x: '57', y: '265' },
      { textContent: '25', x: '57', y: '200' },
      { textContent: '50', x: '57', y: '135' },
      { textContent: '75', x: '57', y: '70' },
      { textContent: '100', x: '57', y: '5' },
    ]);
  });

  it('renders the computed tick ladder for all-null series data when tickCount is supplied', () => {
    const { container, axisDomainSpy } = renderIssue7362Chart({
      data: allNullData,
      tickCount: 5,
    });

    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expect(container.querySelectorAll('.recharts-yAxis .recharts-cartesian-axis-tick')).toHaveLength(5);
    expectYAxisTicks(container, [
      { textContent: '0', x: '57', y: '265' },
      { textContent: '25', x: '57', y: '200' },
      { textContent: '50', x: '57', y: '135' },
      { textContent: '75', x: '57', y: '70' },
      { textContent: '100', x: '57', y: '5' },
    ]);
  });

  it('renders the explicit tick ladder for empty data when the Y axis is fully specified', () => {
    const { container, axisDomainSpy } = renderIssue7362Chart({
      data: [],
      ticks: explicitTicks,
    });

    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expect(container.querySelectorAll('.recharts-yAxis .recharts-cartesian-axis-tick')).toHaveLength(5);
    expectYAxisTicks(container, [
      { textContent: '0', x: '57', y: '265' },
      { textContent: '25', x: '57', y: '200' },
      { textContent: '50', x: '57', y: '135' },
      { textContent: '75', x: '57', y: '70' },
      { textContent: '100', x: '57', y: '5' },
    ]);
  });

  it('renders the explicit tick ladder again as soon as the series contains numeric values', () => {
    const { container, axisDomainSpy } = renderIssue7362Chart({
      data: partlyNumericData,
      ticks: explicitTicks,
    });

    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expectYAxisTicks(container, [
      { textContent: '0', x: '57', y: '265' },
      { textContent: '25', x: '57', y: '200' },
      { textContent: '50', x: '57', y: '135' },
      { textContent: '75', x: '57', y: '70' },
      { textContent: '100', x: '57', y: '5' },
    ]);
  });
});
