import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import ResponsiveContainerExample from '../../../www/src/docs/apiExamples/ResponsiveContainer/ResponsiveContainerExample';

test('ResponsiveContainerExample', async ({ mount }) => {
  const component = await mount(<ResponsiveContainerExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
