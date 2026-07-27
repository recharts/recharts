import * as React from 'react';
import { expect, test } from '@playwright/experimental-ct-react';
import { LegendThemeExamples } from './LegendThemeComponents';

test('Legend theme', async ({ mount }) => {
  const component = await mount(<LegendThemeExamples />);
  await expect(component).toHaveScreenshot();
});
