import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { Area, Bar, BarChart, ComposedChart, XAxis, YAxis } from '../../../src';

const data = [0, 2, 4, 6, 8, 10].map(value => {
  return { x: value, name: `Item ${value}` };
});

test.describe('padding with Area', () => {
  test('default', async ({ mount }) => {
    const component = await mount(
      <ComposedChart width={600} height={500} data={data}>
        <Area dataKey="x" />
        <YAxis />
        <XAxis dataKey="name" />
      </ComposedChart>,
    );
    await expect(component).toHaveScreenshot();
  });

  test('no-gap', async ({ mount }) => {
    const component = await mount(
      <ComposedChart width={600} height={500} data={data}>
        <Area dataKey="x" />
        <YAxis padding="no-gap" />
        <XAxis dataKey="name" padding="no-gap" />
      </ComposedChart>,
    );
    await expect(component).toHaveScreenshot();
  });

  test('gap', async ({ mount }) => {
    const component = await mount(
      <ComposedChart width={600} height={500} data={data}>
        <Area dataKey="x" />
        <YAxis padding="gap" />
        <XAxis dataKey="name" padding="gap" />
      </ComposedChart>,
    );
    await expect(component).toHaveScreenshot();
  });

  test('custom padding', async ({ mount }) => {
    const component = await mount(
      <ComposedChart width={600} height={500} data={data}>
        <Area dataKey="x" />
        <YAxis padding={{ top: 30, bottom: 50 }} />
        <XAxis dataKey="name" padding={{ left: 20, right: 40 }} />
      </ComposedChart>,
    );
    await expect(component).toHaveScreenshot();
  });
});

test.describe('padding with Bar', () => {
  test('default', async ({ mount }) => {
    const component = await mount(
      <BarChart width={600} height={300} data={data}>
        <Bar dataKey="x" />
        <YAxis />
        <XAxis dataKey="name" />
      </BarChart>,
    );
    await expect(component).toHaveScreenshot();
  });

  test('no-gap', async ({ mount }) => {
    const component = await mount(
      <BarChart width={600} height={300} data={data}>
        <Bar dataKey="x" />
        <YAxis padding="no-gap" />
        <XAxis dataKey="name" padding="no-gap" />
      </BarChart>,
    );
    await expect(component).toHaveScreenshot();
  });

  test('gap', async ({ mount }) => {
    const component = await mount(
      <BarChart width={600} height={300} data={data}>
        <Bar dataKey="x" />
        <YAxis padding="gap" />
        <XAxis dataKey="name" padding="gap" />
      </BarChart>,
    );
    await expect(component).toHaveScreenshot();
  });

  test('custom padding', async ({ mount }) => {
    const component = await mount(
      <BarChart width={600} height={300} data={data}>
        <Bar dataKey="x" />
        <YAxis padding={{ top: 30, bottom: 50 }} />
        <XAxis dataKey="name" padding={{ left: 20, right: 40 }} />
      </BarChart>,
    );
    await expect(component).toHaveScreenshot();
  });
});
