import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { LabelListChartExample } from '../../../www/src/docs/apiExamples/LabelList';

test('LabelListChartExample', async ({ mount }) => {
  const component = await mount(<LabelListChartExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
