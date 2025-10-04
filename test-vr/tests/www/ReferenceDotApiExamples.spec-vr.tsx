import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { ReferenceDotExample } from '../../../www/src/docs/apiExamples/ReferenceDot';

test('ReferenceDotExample', async ({ mount }) => {
  const component = await mount(<ReferenceDotExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
