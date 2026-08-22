import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';

import ReferenceAreaExample from '../../../www/src/docs/exampleComponents/ReferenceArea/ReferenceAreaExample';
import { testWithLightTheme } from './fixtures.tsx';

testWithLightTheme('ReferenceAreaExample', async ({ mount }) => {
  const component = await mount(<ReferenceAreaExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
