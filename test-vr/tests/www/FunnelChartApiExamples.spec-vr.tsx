import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import FunnelChartExample from '../../../www/src/docs/exampleComponents/FunnelChart/FunnelChartExample';

test('FunnelChartExample', async ({ mount }) => {
  const component = await mount(<FunnelChartExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
