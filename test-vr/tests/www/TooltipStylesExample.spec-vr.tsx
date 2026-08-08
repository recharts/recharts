import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import TooltipStylesExample from '../../../www/src/docs/exampleComponents/Tooltip/TooltipStylesExample';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('TooltipStylesExample', async ({ mount }) => {
  const component = await mount(<TooltipStylesExample />);
  await expect(component).toHaveScreenshot();
});
