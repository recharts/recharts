import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import AxisTicksPlayground from '../../../www/src/components/GuideView/AxisTicks/NiceTicksPlayground';
import CustomAxisTicks from '../../../www/src/components/GuideView/AxisTicks/CustomAxisTicks';

test('AxisTicksPlayground with linear scale', async ({ mount }) => {
  const component = await mount(<AxisTicksPlayground niceTicks="snap125" scale="linear" tickCount={6} />);
  await expect(component).toHaveScreenshot();
});

test('AxisTicksPlayground with symlog scale', async ({ mount }) => {
  const component = await mount(<AxisTicksPlayground niceTicks="adaptive" scale="symlog" tickCount={4} />);
  await expect(component).toHaveScreenshot();
});

test('CustomAxisTicks', async ({ mount }) => {
  const component = await mount(<CustomAxisTicks scale="linear" />);
  await expect(component).toHaveScreenshot();
});
