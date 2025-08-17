import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import {
  AreaExplicitLabelListTest,
  AreaImplicitLabelListTest,
  BarExplicitLabelListTest,
  BarImplicitLabelListTest,
  LineExplicitLabelListTest,
  LineImplicitLabelListTest,
  ScatterExplicitLabelListTest,
  ScatterImplicitLabelListTest,
  PieExplicitLabelListTest,
  PieImplicitLabelListTest,
  RadarExplicitLabelListTest,
  RadarImplicitLabelListTest,
  RadialBarExplicitLabelListTest,
  RadialBarImplicitLabelListTest,
  FunnelImplicitLabelListTest,
} from './LabelListComponents';

test('Area > implicit LabelList', async ({ mount }) => {
  const component = await mount(<AreaImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Area > explicit LabelList', async ({ mount }) => {
  const component = await mount(<AreaExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Bar > implicit LabelList', async ({ mount }) => {
  const component = await mount(<BarImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Bar > explicit LabelList', async ({ mount }) => {
  const component = await mount(<BarExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Line > implicit LabelList', async ({ mount }) => {
  const component = await mount(<LineImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Line > explicit LabelList', async ({ mount }) => {
  const component = await mount(<LineExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Scatter > implicit LabelList', async ({ mount }) => {
  const component = await mount(<ScatterImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Scatter > explicit LabelList', async ({ mount }) => {
  const component = await mount(<ScatterExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Pie > implicit LabelList', async ({ mount }) => {
  const component = await mount(<PieImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Pie > explicit LabelList', async ({ mount }) => {
  const component = await mount(<PieExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Radar > implicit LabelList', async ({ mount }) => {
  const component = await mount(<RadarImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Radar > explicit LabelList', async ({ mount }) => {
  const component = await mount(<RadarExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('RadialBar > implicit LabelList', async ({ mount }) => {
  const component = await mount(<RadialBarImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('RadialBar > explicit LabelList', async ({ mount }) => {
  const component = await mount(<RadialBarExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Funnel > implicit LabelList', async ({ mount }) => {
  const component = await mount(<FunnelImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Funnel > explicit LabelList', async ({ mount }) => {
  const component = await mount(<FunnelImplicitLabelListTest />); // Funnel does not have explicit LabelList
  await expect(component).toHaveScreenshot();
});
