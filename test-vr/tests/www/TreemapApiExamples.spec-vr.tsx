import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { TreemapExample } from '../../../www/src/docs/apiExamples/Treemap';

test('TreemapExample', async ({ mount }) => {
  const component = await mount(<TreemapExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
