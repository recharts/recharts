import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import LegendStylesExample from '../../../www/src/docs/exampleComponents/Legend/LegendStylesExample';

test('LegendStylesExample', async ({ mount }) => {
  const component = await mount(<LegendStylesExample />);
  await expect(component).toHaveScreenshot();
});
