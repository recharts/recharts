import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { SankeyCustomNodeExample } from '../../../www/src/docs/apiExamples/SankeyChart';

test('SankeyCustomNodeExample', async ({ mount }) => {
  const component = await mount(<SankeyCustomNodeExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
