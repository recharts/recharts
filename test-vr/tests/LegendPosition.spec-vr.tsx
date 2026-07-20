import React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { LegendAlignVRTest, LegendPositionVRTest, VeryLongLegendText } from './LegendPositionComponents';

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

test('VeryLongLegendText with position "bottom"', async ({ mount }) => {
  const component = await mount(<VeryLongLegendText position="bottom" />);
  await expect(component).toHaveScreenshot();
});

test('VeryLongLegendText with position "left"', async ({ mount }) => {
  const component = await mount(<VeryLongLegendText position="left" />);
  await expect(component).toHaveScreenshot();
});

test('VeryLongLegendText with position "insideRight"', async ({ mount }) => {
  const component = await mount(<VeryLongLegendText position="insideRight" />);
  await expect(component).toHaveScreenshot();
});
