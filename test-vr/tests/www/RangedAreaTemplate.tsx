/*
 * Workaround file for https://playwright.dev/docs/test-components#test-stories
 */
import * as React from 'react';
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from 'recharts';

type RangeDatum = {
  x: number;
  value: number;
  lowerBound: number;
};

const chartWidth = 640;
const chartHeight = 320;
const chartMargin = { top: 20, right: 20, bottom: 20, left: 20 };
const xDomain: [number, number] = [1, 6];
const yDomain: [number, number] = [0, 100];

const data: ReadonlyArray<RangeDatum> = [
  { x: 1, value: 62, lowerBound: 30 },
  { x: 2, value: 70, lowerBound: 34 },
  { x: 3, value: 65, lowerBound: 28 },
  { x: 4, value: 76, lowerBound: 39 },
  { x: 5, value: 72, lowerBound: 36 },
  { x: 6, value: 79, lowerBound: 42 },
];

function RangedAreaTemplate({ children }: { children: React.ReactNode }) {
  return (
    <AreaChart width={chartWidth} height={chartHeight} data={data} margin={chartMargin}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" domain={xDomain} ticks={data.map(entry => entry.x)} allowDecimals={false} />
      <YAxis width={40} domain={yDomain} />
      {children}
    </AreaChart>
  );
}

function RangedAreaTemplateWithChartBaseValue({
  baseValue,
  children,
}: {
  baseValue: number | 'dataMin' | 'dataMax';
  children: React.ReactNode;
}) {
  return (
    <AreaChart width={chartWidth} height={chartHeight} data={data} margin={chartMargin} baseValue={baseValue}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="x" domain={xDomain} ticks={data.map(entry => entry.x)} allowDecimals={false} />
      <YAxis width={40} domain={yDomain} />
      {children}
    </AreaChart>
  );
}

export function AreaRangeViaBaseValueNumber() {
  return (
    <RangedAreaTemplate>
      <Area
        type="linear"
        dataKey="value"
        baseValue={45}
        stroke="#ff7300"
        fill="#ff7300"
        fillOpacity={0.4}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </RangedAreaTemplate>
  );
}

export function AreaRangeViaChartBaseValueNumber() {
  return (
    <RangedAreaTemplateWithChartBaseValue baseValue={45}>
      <Area
        type="linear"
        dataKey="value"
        stroke="#a45bff"
        fill="#a45bff"
        fillOpacity={0.4}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </RangedAreaTemplateWithChartBaseValue>
  );
}

export function AreaRangeViaBaseValueDataMin() {
  return (
    <RangedAreaTemplate>
      <Area
        type="linear"
        dataKey="value"
        baseValue="dataMin"
        stroke="#00c49f"
        fill="#00c49f"
        fillOpacity={0.4}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </RangedAreaTemplate>
  );
}

export function AreaRangeViaChartBaseValueDataMax() {
  return (
    <RangedAreaTemplateWithChartBaseValue baseValue="dataMax">
      <Area
        type="linear"
        dataKey="value"
        stroke="#ff9f1c"
        fill="#ff9f1c"
        fillOpacity={0.4}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </RangedAreaTemplateWithChartBaseValue>
  );
}

export function AreaRangeViaBaseValueDataMax() {
  return (
    <RangedAreaTemplate>
      <Area
        type="linear"
        dataKey="value"
        baseValue="dataMax"
        stroke="#ffc658"
        fill="#ffc658"
        fillOpacity={0.4}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
    </RangedAreaTemplate>
  );
}
