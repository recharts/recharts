/**
 * @fileOverview https://github.com/recharts/recharts/issues/7362
 *
 * TDD red test for the *function-domain* half of #7362.
 *
 * PR #7379 (YAxis.7362.spec.tsx) covers the LITERAL case: `type="number"` +
 * `domain={[0, 100]}` + `ticks` + `allowDataOverflow` already renders the
 * 0/25/50/75/100 ladder when every series value is null (or `data=[]`).
 *
 * This spec covers the case that does NOT work yet: a **function** `domain`.
 * A function bound already gets to decide its own value — e.g.
 * `[0, (dataMax) => (Number.isFinite(dataMax) && dataMax > 0 ? dataMax : 100)]`
 * returns a finite `100` when there is no data. The DESIRED behavior is that
 * recharts invokes that function even when the data domain is empty, so the
 * returned finite bounds resolve the scale and the explicit `ticks` render —
 * exactly like the literal case.
 *
 * Today recharts SKIPS function domains when there is no data domain
 * (`numericalDomainSpecifiedWithoutRequiringData` returns undefined for any
 * function; `parseNumericalUserDomain` only calls the function when
 * `dataDomain != null`), so these render zero ticks. See
 * src/util/isDomainSpecifiedByUser.ts.
 *
 * These cases use `it.fails` on purpose: each test asserts the DESIRED behavior
 * (the ladder renders), which currently throws — so `it.fails` passes and keeps
 * the suite green while documenting the gap. When recharts is changed to invoke
 * a function domain without data, the assertions will start passing and `it.fails`
 * will flip to FAILING — the signal to drop `.fails` and lock in the behavior.
 */
import React from 'react';
import { describe, it } from 'vitest';
import { render } from '@testing-library/react';
import { Line, LineChart, XAxis, YAxis } from '../../../src';
import { AxisDomain } from '../../../src/util/types';
import { expectYAxisTicks } from '../../helper/expectAxisTicks';

type Datum = {
  name: string;
  value: number | null;
};

const explicitTicks = [0, 25, 50, 75, 100];
const ladder = [
  { textContent: '0', x: '57', y: '265' },
  { textContent: '25', x: '57', y: '200' },
  { textContent: '50', x: '57', y: '135' },
  { textContent: '75', x: '57', y: '70' },
  { textContent: '100', x: '57', y: '5' },
];

const allNullData: ReadonlyArray<Datum> = [
  { name: 'Page A', value: null },
  { name: 'Page B', value: null },
  { name: 'Page C', value: null },
  { name: 'Page D', value: null },
];

function renderChart({ data, domain }: { data: ReadonlyArray<Datum>; domain: AxisDomain }) {
  return render(
    <LineChart width={500} height={300} data={data}>
      <XAxis dataKey="name" />
      <YAxis type="number" domain={domain} allowDataOverflow ticks={explicitTicks} />
      <Line type="monotone" dataKey="value" stroke="#8884d8" isAnimationActive={false} connectNulls />
    </LineChart>,
  );
}

// A function upper bound that resolves to a finite ceiling when there is no data.
const functionUpperBound: AxisDomain = [
  0,
  (dataMax: number) => (Number.isFinite(dataMax) && dataMax > 0 ? dataMax : 100),
];
// A whole-domain function that ignores the (absent) data extent entirely.
const wholeDomainFunction: AxisDomain = () => [0, 100];

describe('YAxis issue 7362 — function domain should render ticks when data is empty/all-null', () => {
  it.fails('renders the ladder for all-null data with a function upper-bound domain', () => {
    const { container } = renderChart({ data: allNullData, domain: functionUpperBound });
    expectYAxisTicks(container, ladder);
  });

  it.fails('renders the ladder for empty data with a function upper-bound domain', () => {
    const { container } = renderChart({ data: [], domain: functionUpperBound });
    expectYAxisTicks(container, ladder);
  });

  it.fails('renders the ladder for all-null data with a whole-domain function', () => {
    const { container } = renderChart({ data: allNullData, domain: wholeDomainFunction });
    expectYAxisTicks(container, ladder);
  });
});
