import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import { testWithLightTheme } from './fixtures.tsx';

import ReferenceLinePositionExample from '../../../www/src/docs/exampleComponents/ReferenceLine/ReferenceLinePositionExample';
import ReferenceLineExample from '../../../www/src/docs/exampleComponents/ReferenceLine/ReferenceLineExample';

testWithLightTheme('ReferenceLineExample', async ({ mount }) => {
  const component = await mount(<ReferenceLineExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('ReferenceLinePositionExample', async ({ mount }) => {
  const component = await mount(<ReferenceLinePositionExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
