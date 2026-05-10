import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import {
  AreaRangeViaBaseValueDataMax,
  AreaRangeViaBaseValueDataMin,
  AreaRangeViaBaseValueNumber,
  AreaRangeViaChartBaseValueDataMax,
  AreaRangeViaChartBaseValueNumber,
} from './RangedAreaTemplate';

test('Area range via baseValue number', async ({ mount }) => {
  const component = await mount(<AreaRangeViaBaseValueNumber />);
  await expect(component).toHaveScreenshot();
});

test('Area range via baseValue dataMin', async ({ mount }) => {
  const component = await mount(<AreaRangeViaBaseValueDataMin />);
  await expect(component).toHaveScreenshot();
});

test('Area range via baseValue dataMax', async ({ mount }) => {
  const component = await mount(<AreaRangeViaBaseValueDataMax />);
  await expect(component).toHaveScreenshot();
});

test('Area range via chart baseValue number', async ({ mount }) => {
  const component = await mount(<AreaRangeViaChartBaseValueNumber />);
  await expect(component).toHaveScreenshot();
});

test('Area range via chart baseValue dataMax', async ({ mount }) => {
  const component = await mount(<AreaRangeViaChartBaseValueDataMax />);
  await expect(component).toHaveScreenshot();
});
