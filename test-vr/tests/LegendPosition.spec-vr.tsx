import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { LegendAlignVRTest } from './LegendPositionComponents';

test('Legend.align without offset', async ({ mount }) => {
  const component = await mount(<LegendAlignVRTest />);
  await expect(component).toHaveScreenshot();
});

test('Legend.align with offset', async ({ mount }) => {
  /*
   * offset doesn't actually do anything because it's svg attribute, but Legend renders as HTML.
   * Test included for completeness anyway
   */
  const component = await mount(<LegendAlignVRTest offset={20} />);
  await expect(component).toHaveScreenshot();
});
