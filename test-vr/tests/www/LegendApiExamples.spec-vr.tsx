import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { LegendExample } from '../../../www/src/docs/apiExamples/Legend';

test('LegendExample', async ({ mount }) => {
  const component = await mount(<LegendExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
