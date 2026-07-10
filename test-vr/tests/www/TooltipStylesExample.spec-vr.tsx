import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import TooltipStylesExample from '../../../www/src/docs/exampleComponents/Tooltip/TooltipStylesExample';

test('TooltipStylesExample', async ({ mount }) => {
  const component = await mount(<TooltipStylesExample />);
  await expect(component).toHaveScreenshot();
});
