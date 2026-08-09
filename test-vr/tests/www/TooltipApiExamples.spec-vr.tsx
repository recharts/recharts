import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import CustomContentOfTooltip from '../../../www/src/docs/exampleComponents/Tooltip/CustomContentOfTooltip';
import { testWithDarkTheme, testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('CustomContentOfTooltip', async ({ mount }) => {
  const component = await mount(<CustomContentOfTooltip isAnimationActive={false} defaultIndex="3" />);
  await expect(component).toHaveScreenshot();
});

testWithDarkTheme('CustomContentOfTooltip dark theme', async ({ mount }) => {
  const component = await mount(<CustomContentOfTooltip isAnimationActive={false} defaultIndex="3" />);
  await expect(component).toHaveScreenshot();
});
