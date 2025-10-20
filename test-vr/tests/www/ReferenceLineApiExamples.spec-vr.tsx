import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import { ReferenceLineExample, ReferenceLinePositionExample } from '../../../www/src/docs/apiExamples/ReferenceLine';

test('ReferenceLineExample', async ({ mount }) => {
  const component = await mount(<ReferenceLineExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('ReferenceLinePositionExample', async ({ mount }) => {
  const component = await mount(<ReferenceLinePositionExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
