import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import ErrorBarExample from '../../../www/src/docs/exampleComponents/ErrorBar/ErrorBarExample';
import { testWithDarkTheme, testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('ErrorBarExample', async ({ mount }) => {
  const component = await mount(<ErrorBarExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithDarkTheme('ErrorBarExample dark mode', async ({ mount }) => {
  const component = await mount(<ErrorBarExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
