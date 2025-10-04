import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { TreemapExample } from '../../../www/src/docs/apiExamples/Treemap';

test('TreemapExample', async ({ mount }) => {
  const component = await mount(<TreemapExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
