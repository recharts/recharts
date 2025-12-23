import React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { LegendAlignVRTest, LegendPositionVRTest } from './LegendPositionComponents';

test('Legend.position with default offset', async ({ mount }) => {
  const component = await mount(<LegendPositionVRTest />);
  await expect(component).toHaveScreenshot();
});

test('Legend.position with custom offset', async ({ mount }) => {
  const component = await mount(<LegendPositionVRTest offset={30} />);
  await expect(component).toHaveScreenshot();
});

test('Legend.align without offset', async ({ mount }) => {
  const component = await mount(<LegendAlignVRTest />);
  await expect(component).toHaveScreenshot();
});
