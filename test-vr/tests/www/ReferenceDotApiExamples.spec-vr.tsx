import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import ReferenceDotExample from '../../../www/src/docs/exampleComponents/ReferenceDot/ReferenceDotExample';

test('ReferenceDotExample', async ({ mount }) => {
  const component = await mount(<ReferenceDotExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
