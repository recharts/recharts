import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import LegendStylesExample from '../../../www/src/docs/exampleComponents/Legend/LegendStylesExample';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('LegendStylesExample', async ({ mount }) => {
  const component = await mount(<LegendStylesExample />);
  await expect(component).toHaveScreenshot();
});
