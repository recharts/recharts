/**
 * @fileOverview https://github.com/recharts/recharts/issues/7245
 */
import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Bar, BarChart, BarStack, CartesianGrid, Legend, XAxis, YAxis } from '../../src';

const data = [
  { name: 'Page A', pv: 2400, uv: 4000 },
  { name: 'Page B', pv: 1398, uv: 3000 },
  { name: 'Page C', pv: 9800, uv: 2000 },
  { name: 'Page D', pv: 3908, uv: 2780 },
  { name: 'Page E', pv: 4800, uv: 1890 },
];

/*
 * SVG strokes are centered on the outline, so half of each stroke paints outside the bar.
 * The stack clip path used to be the exact union of the stack rectangles, which cut
 * that outer half away. The full stroke must be visible around the whole stack.
 */
test('BarStack with stroked bars and rounded corners', async ({ mount }) => {
  const component = await mount(
    <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <BarStack radius={8}>
        <Bar dataKey="pv" fill="#8884d8" stroke="#3b3477" strokeWidth={4} isAnimationActive={false} />
        <Bar dataKey="uv" fill="#82ca9d" stroke="#2f7a52" strokeWidth={4} isAnimationActive={false} />
      </BarStack>
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

/*
 * The clip path applies to every BarStack, not only rounded ones: strokes must survive
 * with the default radius too, and the corners must stay square.
 */
test('BarStack with stroked bars and square corners', async ({ mount }) => {
  const component = await mount(
    <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <BarStack>
        <Bar dataKey="pv" fill="#8884d8" stroke="#3b3477" strokeWidth={4} isAnimationActive={false} />
        <Bar dataKey="uv" fill="#82ca9d" stroke="#2f7a52" strokeWidth={4} isAnimationActive={false} />
      </BarStack>
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

/*
 * Without strokes the clip path must not grow: this chart is the control and must render
 * exactly as it did before the clip inflation existed.
 */
test('BarStack with rounded corners and no stroke', async ({ mount }) => {
  const component = await mount(
    <BarChart width={500} height={300} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Legend />
      <BarStack radius={8}>
        <Bar dataKey="pv" fill="#8884d8" isAnimationActive={false} />
        <Bar dataKey="uv" fill="#82ca9d" isAnimationActive={false} />
      </BarStack>
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});
