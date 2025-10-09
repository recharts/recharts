import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { TreemapExample } from '../../../www/src/docs/apiExamples/Treemap';
import SimpleTreemap from '../../../www/src/docs/exampleComponents/TreeMap/SimpleTreemap';
import CustomContentTreemap from '../../../www/src/docs/exampleComponents/TreeMap/CustomContentTreemap';

test('CustomContentTreemap', async ({ mount }) => {
  const component = await mount(<CustomContentTreemap />);
  await expect(component).toHaveScreenshot();
});

test('SimpleTreemap', async ({ mount }) => {
  const component = await mount(<SimpleTreemap />);
  await expect(component).toHaveScreenshot();
});

test('TreemapExample', async ({ mount }) => {
  const component = await mount(<TreemapExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
