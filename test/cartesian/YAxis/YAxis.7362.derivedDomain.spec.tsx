/**
 * @fileOverview https://github.com/recharts/recharts/issues/7362
 *
 * Ticks-fallback for the derived/function-`domain` half of #7362.
 *
 * PR #7379 (YAxis.7362.spec.tsx) covers the LITERAL case: `type="number"` +
 * `domain={[0, 100]}` + `ticks` + `allowDataOverflow` already renders the ladder
 * on all-null/empty data, because a literal domain resolves without data.
 *
 * A NON-literal `domain` (a function bound, or 'auto'/'dataMin'/'dataMax') cannot
 * resolve without data, so today the scale never builds and the axis renders zero
 * ticks even when explicit `ticks` are supplied. The fix: when the domain cannot
 * be resolved without data, there is no data domain, `allowDataOverflow` is set,
 * and explicit numeric `ticks` are present, fall back to
 * `[min(ticks), max(ticks)]` so the explicit ladder still renders. See
 * `combineNumericalDomain` in src/state/selectors/axisSelectors.ts.
 *
 * Negative guards below pin the boundaries: a resolvable literal domain still
 * wins, data-present behavior is unchanged, and the fallback requires
 * `allowDataOverflow`.
 */
import React from 'react';
import { describe, expect, it, vi } from 'vitest';
import { render } from '@testing-library/react';
import { Line, LineChart, XAxis, YAxis } from '../../../src';
import { AxisDomain } from '../../../src/util/types';
import { ExpectAxisDomain, expectYAxisTicks } from '../../helper/expectAxisTicks';
import { expectLastCalledWith } from '../../helper/expectLastCalledWith';

type Datum = { name: string; value: number | null };

const explicitTicks = [0, 25, 50, 75, 100];
const ladder = [
  { textContent: '0', x: '57', y: '265' },
  { textContent: '25', x: '57', y: '200' },
  { textContent: '50', x: '57', y: '135' },
  { textContent: '75', x: '57', y: '70' },
  { textContent: '100', x: '57', y: '5' },
];

const allNullData: ReadonlyArray<Datum> = [
  { name: 'A', value: null },
  { name: 'B', value: null },
  { name: 'C', value: null },
  { name: 'D', value: null },
];

function renderChart({
  data,
  domain,
  ticks = explicitTicks,
  allowDataOverflow = true,
}: {
  data: ReadonlyArray<Datum>;
  domain: AxisDomain;
  ticks?: ReadonlyArray<number>;
  allowDataOverflow?: boolean;
}) {
  const axisDomainSpy = vi.fn();
  const renderResult = render(
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis type="number" domain={domain} allowDataOverflow={allowDataOverflow} ticks={[...ticks]} />
      <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} connectNulls />
      <ExpectAxisDomain assert={axisDomainSpy} axisType="yAxis" />
    </LineChart>,
  );
  return { ...renderResult, axisDomainSpy };
}

function yTickCount(container: Element): number {
  return container.querySelectorAll('.recharts-yAxis .recharts-cartesian-axis-tick').length;
}

// Flexible variant for edge cases: optional/non-numeric ticks, tickCount-only, and extra chart children.
function renderChartEx({
  data = allNullData,
  domain,
  ticks,
  tickCount,
  allowDataOverflow = true,
}: {
  data?: ReadonlyArray<Datum>;
  domain: AxisDomain;
  ticks?: ReadonlyArray<number | string>;
  tickCount?: number;
  allowDataOverflow?: boolean;
}) {
  const axisDomainSpy = vi.fn();
  const renderResult = render(
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis
        type="number"
        domain={domain}
        allowDataOverflow={allowDataOverflow}
        {...(ticks != null ? { ticks: [...ticks] as number[] } : {})}
        {...(tickCount != null ? { tickCount } : {})}
      />
      <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} connectNulls />
      <ExpectAxisDomain assert={axisDomainSpy} axisType="yAxis" />
    </LineChart>,
  );
  return { ...renderResult, axisDomainSpy };
}

const functionUpperBound: AxisDomain = [
  0,
  (dataMax: number) => (Number.isFinite(dataMax) && dataMax > 0 ? dataMax : 100),
];
const wholeDomainFunction: AxisDomain = () => [0, 100];

describe('YAxis issue 7362 — ticks fallback for non-literal domains on empty/all-null data', () => {
  it('function upper-bound domain + all-null data renders the ladder from ticks', () => {
    const { container, axisDomainSpy } = renderChart({ data: allNullData, domain: functionUpperBound });
    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expectYAxisTicks(container, ladder);
  });

  it('function upper-bound domain + empty data renders the ladder from ticks', () => {
    const { container, axisDomainSpy } = renderChart({ data: [], domain: functionUpperBound });
    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expectYAxisTicks(container, ladder);
  });

  it('whole-domain function + all-null data renders the ladder from ticks', () => {
    const { container, axisDomainSpy } = renderChart({ data: allNullData, domain: wholeDomainFunction });
    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expectYAxisTicks(container, ladder);
  });

  it("['auto','auto'] domain + all-null data renders the ladder from ticks", () => {
    const { container, axisDomainSpy } = renderChart({ data: allNullData, domain: ['auto', 'auto'] });
    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expectYAxisTicks(container, ladder);
  });

  it("['dataMin','dataMax'] domain + all-null data renders the ladder from ticks", () => {
    const { container, axisDomainSpy } = renderChart({ data: allNullData, domain: ['dataMin', 'dataMax'] });
    expectLastCalledWith(axisDomainSpy, [0, 100]);
    expectYAxisTicks(container, ladder);
  });

  it('derives the domain from min/max of unsorted ticks', () => {
    const { axisDomainSpy } = renderChart({ data: allNullData, domain: ['auto', 'auto'], ticks: [100, 0, 50, 25, 75] });
    expectLastCalledWith(axisDomainSpy, [0, 100]);
  });

  // ---- Negative guards: the fallback must not engage here ----

  it('does NOT override a resolvable literal domain (literal wins over ticks extent)', () => {
    const { container, axisDomainSpy } = renderChart({ data: allNullData, domain: [0, 200] });
    expectLastCalledWith(axisDomainSpy, [0, 200]);
    expect(yTickCount(container)).toBe(5);
  });

  it('does NOT engage without allowDataOverflow', () => {
    const { container, axisDomainSpy } = renderChart({
      data: allNullData,
      domain: functionUpperBound,
      allowDataOverflow: false,
    });
    expectLastCalledWith(axisDomainSpy, undefined);
    expect(yTickCount(container)).toBe(0);
  });

  it('does NOT engage when data is present (function resolves from data)', () => {
    const data: ReadonlyArray<Datum> = [
      { name: 'A', value: 10 },
      { name: 'B', value: 40 },
    ];
    const { axisDomainSpy } = renderChart({ data, domain: [0, (dataMax: number) => dataMax] });
    expectLastCalledWith(axisDomainSpy, [0, 40]);
  });

  it('does NOT engage from tickCount alone (no explicit ticks array)', () => {
    const { container, axisDomainSpy } = renderChartEx({ domain: ['auto', 'auto'], tickCount: 5 });
    expectLastCalledWith(axisDomainSpy, undefined);
    expect(yTickCount(container)).toBe(0);
  });

  it('drops non-numeric ticks and derives the domain from the numeric ones', () => {
    const { axisDomainSpy } = renderChartEx({ domain: ['auto', 'auto'], ticks: [0, 'foo', NaN, 100] });
    expectLastCalledWith(axisDomainSpy, [0, 100]);
  });

  it('does NOT engage when no ticks are numeric', () => {
    const { container, axisDomainSpy } = renderChartEx({ domain: ['auto', 'auto'], ticks: ['foo', NaN] });
    expectLastCalledWith(axisDomainSpy, undefined);
    expect(yTickCount(container)).toBe(0);
  });

  it('handles a single tick without crashing', () => {
    const { container } = renderChartEx({ domain: ['auto', 'auto'], ticks: [50] });
    expect(yTickCount(container)).toBe(1);
  });
});
