import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { pageData } from '../../storybook/stories/data';
import { Area, AreaChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from '../../src';

test('data on chart root', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={800} height={500} data={pageData}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis interval="preserveEnd" />
      <Legend />
      <Tooltip defaultIndex={3} />
      <Area dataKey="pv" stackId="a" stroke="#8884d8" fill="#8884d8" />
      <Area dataKey="uv" stackId="a" stroke="#82ca9d" fill="#82ca9d" />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

const dataMerged = [
  {
    name: 'a',
    value1: 5,
    value2: 10,
    value3: 23,
  },
  {
    name: 'b',
    value1: 25,
    value2: 10,
    value3: 13,
  },
];

test('single data array', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={500} height={400} data={dataMerged}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="sum" />
      <Legend />
      <Area dataKey="value1" stackId="1" stroke="red" fill="red" />
      <Area dataKey="value2" stackId="1" stroke="green" fill="green" />
      <Area dataKey="value3" stackId="1" stroke="blue" fill="blue" />
      <Tooltip defaultIndex={1} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('single data array without XAxis dataKey', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={500} height={400} data={dataMerged}>
      <XAxis allowDuplicatedCategory={false} />
      <YAxis dataKey="sum" />
      <Legend />
      <Area dataKey="value1" stackId="1" stroke="red" fill="red" />
      <Area dataKey="value2" stackId="1" stroke="green" fill="green" />
      <Area dataKey="value3" stackId="1" stroke="blue" fill="blue" />
      <Tooltip defaultIndex={1} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

const data1Value1 = [
  { name: 'a', value1: 5 },
  { name: 'b', value1: 25 },
];
const data2Value2 = [
  { name: 'a', value2: 10 },
  { name: 'b', value2: 10 },
];
const data3Value3 = [
  { name: 'a', value3: 23 },
  { name: 'b', value3: 13 },
];

test('multiple data arrays, exclusive dataKey', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={500} height={400}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="sum" />
      <Legend />
      <Area data={data1Value1} dataKey="value1" stackId="1" stroke="red" fill="red" />
      <Area data={data2Value2} dataKey="value2" stackId="1" stroke="green" fill="green" />
      <Area data={data3Value3} dataKey="value3" stackId="1" stroke="blue" fill="blue" />
      <Tooltip defaultIndex={1} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

const data1 = [
  { name: 'a', value: 5 },
  { name: 'b', value: 25 },
];
const data2 = [
  { name: 'a', value: 10 },
  { name: 'b', value: 10 },
];
const data3 = [
  { name: 'a', value: 23 },
  { name: 'b', value: 13 },
];

test('multiple data arrays, repeated dataKey', async ({ mount }) => {
  // https://github.com/recharts/recharts/issues/6073
  const component = await mount(
    <AreaChart width={500} height={400}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="value" />
      <Legend />
      <Area data={data1} dataKey="value" stackId="1" stroke="red" fill="rgba(255,0,0,0.5)" name="Area 1" id="area1" />
      <Area data={data2} dataKey="value" stackId="1" stroke="green" fill="rgba(0,128,0,0.5)" name="Area 2" />
      <Area data={data3} dataKey="value" stackId="1" stroke="blue" fill="rgba(0,0,255,0.5)" name="Area 3" />
      <Tooltip defaultIndex={1} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('multiple data arrays, repeated dataKey, without XAxis dataKey', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={500} height={400}>
      <XAxis allowDuplicatedCategory={false} />
      <YAxis dataKey="value" />
      <Legend />
      <Area data={data1} dataKey="value" stackId="1" stroke="red" fill="rgba(255,0,0,0.5)" name="Area 1" />
      <Area data={data2} dataKey="value" stackId="1" stroke="green" fill="rgba(0,128,0,0.5)" name="Area 2" />
      <Area data={data3} dataKey="value" stackId="1" stroke="blue" fill="rgba(0,0,255,0.5)" name="Area 3" />
      <Tooltip defaultIndex={1} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('dataKey on YAxis, multiple data arrays', async ({ mount }) => {
  const component = await mount(
    <AreaChart width={500} height={400}>
      <XAxis dataKey="name" allowDuplicatedCategory={false} />
      <YAxis dataKey="value" />
      <Legend />
      {/* @ts-expect-error looks like typescript is correct here, the chart does not render */}
      <Area data={data1} stackId="1" stroke="red" fill="red" />
      {/* @ts-expect-error looks like typescript is correct here, the chart does not render */}
      <Area data={data2} stackId="1" stroke="green" fill="green" />
      {/* @ts-expect-error looks like typescript is correct here, the chart does not render */}
      <Area data={data3} stackId="1" stroke="blue" fill="blue" />
      <Tooltip defaultIndex={1} />
    </AreaChart>,
  );
  await expect(component).toHaveScreenshot();
});
