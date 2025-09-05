import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Line, LineChart, XAxis, YAxis } from '../../src';
import { pageData } from '../../storybook/stories/data';
import {
  YAxisWithLongTicksAndMaxLines1,
  YAxisWithLongTicksAndTickObjectAndWidthAuto,
  YAxisWithLongTicksAndWidthAuto,
  YAxisWithTwoLineTicks,
  YAxisWithWidthAutoTwoLineTicks,
} from './YAxisComponents';

test('YAxis with default width', async ({ mount }) => {
  const component = await mount(
    <LineChart width={200} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width={80}', async ({ mount }) => {
  const component = await mount(
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width={80} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto"', async ({ mount }) => {
  const component = await mount(
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and long tick values', async ({ mount }) => {
  const longTickData = pageData.map(entry => ({
    ...entry,
    uv: entry.uv * 1000,
  }));
  const component = await mount(
    <LineChart width={300} height={100} data={longTickData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and tick=true', async ({ mount }) => {
  const component = await mount(
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and smaller tick fontsize', async ({ mount }) => {
  const component = await mount(
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick={{ fill: 'red', fontSize: 9 }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and bigger tick fontsize', async ({ mount }) => {
  const component = await mount(
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick={{ fill: 'green', fontSize: 29 }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and tick textAnchor = start', async ({ mount }) => {
  const component = await mount(
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      <YAxis width="auto" tick={{ textAnchor: 'start' }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and angled ticks', async ({ mount }) => {
  const component = await mount(
    <LineChart width={300} height={100} data={pageData}>
      <XAxis dataKey="name" />
      {/* @ts-expect-error typescript says angle is invalid prop, but it does work */}
      <YAxis width="auto" tick={{ angle: -45, textAnchor: 'end', verticalAnchor: 'end' }} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    </LineChart>,
  );
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and two-line ticks', async ({ mount }) => {
  const component = await mount(<YAxisWithWidthAutoTwoLineTicks />);
  await expect(component).toHaveScreenshot();
});

test('YAxis with default width and two-line ticks', async ({ mount }) => {
  const component = await mount(<YAxisWithTwoLineTicks />);
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and long ticks', async ({ mount }) => {
  const component = await mount(<YAxisWithLongTicksAndWidthAuto />);
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and long ticks and tick object', async ({ mount }) => {
  const component = await mount(<YAxisWithLongTicksAndTickObjectAndWidthAuto />);
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and long ticks and tick object and smaller font size and maxLines=1', async ({
  mount,
}) => {
  const component = await mount(<YAxisWithLongTicksAndMaxLines1 />);
  await expect(component).toHaveScreenshot();
});
