import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { LegendExample } from '../../../www/src/docs/apiExamples/Legend';

test('LegendExample', async ({ mount }) => {
  const component = await mount(<LegendExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
