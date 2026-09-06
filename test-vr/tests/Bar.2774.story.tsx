/**
 * @fileOverview https://github.com/recharts/recharts/issues/2774
 */
import * as React from 'react';
import { Bar, BarChart, CartesianGrid, Legend, XAxis, YAxis } from '../../src';

const data = [
  { label: 'Page A', x: 40, y: 24, z: 18 },
  { label: 'Page B', x: 30, y: 13, z: 22 },
  { label: 'Page C', x: 20, y: 38, z: 12 },
  { label: 'Page D', x: 27, y: 39, z: 20 },
  { label: 'Page E', x: 18, y: 48, z: 29 },
];

const bars = (
  <>
    <Bar dataKey="x" fill="#12978f" isAnimationActive={false} />
    <Bar dataKey="y" fill="#804351" isAnimationActive={false} />
    <Bar dataKey="z" fill="#a16712" isAnimationActive={false} />
  </>
);

/*
 * The bars are wide enough here that `maxBarSize` does nothing, so this chart must look
 * exactly the same before and after the fix. It is the control for the two tests below.
 */
export const BarChartWithBarGapAndNonClampingMaxBarSize = () => {
  return (
    <BarChart width={600} height={370} data={data} barCategoryGap="10%" barGap={4} maxBarSize={1000}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Legend />
      {bars}
    </BarChart>
  );
};

/*
 * `maxBarSize` clamps the computed width here. Before the fix each bar kept the stride of the
 * *unclamped* layout, so the visible distance between bars in a category was
 * `barGap + (originalSize - size)` instead of `barGap`, and the group drifted right.
 */
export const BarChartWithBarGapAndClampingMaxBarSize = () => {
  return (
    <BarChart width={600} height={370} data={data} barCategoryGap="10%" barGap={4} maxBarSize={12}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Legend />
      {bars}
    </BarChart>
  );
};

/*
 * Same clamp applied per-Bar rather than on the chart, which resolves through the same
 * `childMaxBarSize` branch of combineAllBarPositions.
 */
export const BarChartWithBarGapAndPerBarClampingMaxBarSize = () => {
  return (
    <BarChart width={600} height={370} data={data} barCategoryGap="10%" barGap={4}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="label" />
      <YAxis />
      <Legend />
      <Bar dataKey="x" fill="#12978f" maxBarSize={12} isAnimationActive={false} />
      <Bar dataKey="y" fill="#804351" maxBarSize={12} isAnimationActive={false} />
      <Bar dataKey="z" fill="#a16712" maxBarSize={12} isAnimationActive={false} />
    </BarChart>
  );
};
