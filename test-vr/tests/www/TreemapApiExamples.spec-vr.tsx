import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import SimpleTreemap from '../../../www/src/docs/exampleComponents/TreeMap/SimpleTreemap';
import BundleSizeTreemap from '../../../www/src/docs/exampleComponents/TreeMap/BundleSizeTreemap';
import CustomContentTreemap from '../../../www/src/docs/exampleComponents/TreeMap/CustomContentTreemap';
import TreeMapNavExample from '../../../www/src/docs/exampleComponents/TreeMap/TreeMapNavExample';
import TreemapWithPaddingAndGaps from '../../../www/src/docs/exampleComponents/TreeMap/TreemapWithPaddingAndGaps';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('TreeMapNavExample', async ({ mount }) => {
  const component = await mount(<TreeMapNavExample />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomContentTreemap', async ({ mount }) => {
  const component = await mount(<CustomContentTreemap />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('SimpleTreemap', async ({ mount }) => {
  const component = await mount(<SimpleTreemap />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('TreemapWithPaddingAndGaps', async ({ mount }) => {
  const component = await mount(<TreemapWithPaddingAndGaps />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('BundleSizeTreemap', async ({ mount }) => {
  const component = await mount(<BundleSizeTreemap forceFallbackData />);
  await expect(component).toHaveScreenshot();
});
