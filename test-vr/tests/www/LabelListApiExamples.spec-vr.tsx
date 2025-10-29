import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import LabelListChartExample from '../../../www/src/docs/apiExamples/LabelList/LabelListChartExample';

test('LabelListChartExample', async ({ mount }) => {
  const component = await mount(<LabelListChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
