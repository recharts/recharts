import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { LegendAlignVRTest } from './LegendPositionComponents';

test('Legend.align', async ({ mount }) => {
  const component = await mount(<LegendAlignVRTest />);
  await expect(component).toHaveScreenshot();
});
