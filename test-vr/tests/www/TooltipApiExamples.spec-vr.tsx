import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import CustomContentOfTooltip from '../../../www/src/docs/exampleComponents/Tooltip/CustomContentOfTooltip';

test('CustomContentOfTooltip', async ({ mount }) => {
  const component = await mount(<CustomContentOfTooltip isAnimationActive={false} defaultIndex="3" />);
  await expect(component).toHaveScreenshot();
});
