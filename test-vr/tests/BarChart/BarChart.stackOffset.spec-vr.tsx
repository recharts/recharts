import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Bar, BarChart, XAxis, YAxis } from '../../../src';

const rangedStackedBarData = [
  { name: 'A', value1: -100, value2: -200, value3: 300 },
  { name: 'B', value1: -300, value2: 100, value3: 200 },
  { name: 'C', value1: 200, value2: 300, value3: -100 },
  { name: 'D', value1: 400, value2: -100, value3: -300 },
];

test('BarChart with default stackOffset', async ({ mount }) => {
  const component = await mount(
    <BarChart data={rangedStackedBarData} width={200} height={200}>
      <YAxis />
      <XAxis dataKey="name" />
      <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=expand', async ({ mount }) => {
  const component = await mount(
    <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset="expand">
      <YAxis />
      <XAxis dataKey="name" />
      <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=sign', async ({ mount }) => {
  const component = await mount(
    <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset="sign">
      <YAxis />
      <XAxis dataKey="name" />
      <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=none', async ({ mount }) => {
  const component = await mount(
    <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset="none">
      <YAxis />
      <XAxis dataKey="name" />
      <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=wiggle', async ({ mount }) => {
  const component = await mount(
    <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset="wiggle">
      <YAxis />
      <XAxis dataKey="name" />
      <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=silhouette', async ({ mount }) => {
  const component = await mount(
    <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset="silhouette">
      <YAxis />
      <XAxis dataKey="name" />
      <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=positive', async ({ mount }) => {
  const component = await mount(
    <BarChart data={rangedStackedBarData} width={200} height={200} stackOffset="positive">
      <YAxis />
      <XAxis dataKey="name" />
      <Bar dataKey="value1" stackId="a" isAnimationActive={false} fill="red" />
      <Bar dataKey="value2" stackId="a" isAnimationActive={false} fill="green" />
      <Bar dataKey="value3" stackId="a" isAnimationActive={false} fill="blue" />
    </BarChart>,
  );
  await expect(component).toHaveScreenshot();
});
