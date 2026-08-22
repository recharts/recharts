import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import ReferenceDotExample from '../../../www/src/docs/exampleComponents/ReferenceDot/ReferenceDotExample';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('ReferenceDotExample', async ({ mount }) => {
  const component = await mount(<ReferenceDotExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
