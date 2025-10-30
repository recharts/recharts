import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';

import ReferenceLinePositionExample from '../../../www/src/docs/apiExamples/ReferenceLine/ReferenceLinePositionExample';
import ReferenceLineExample from '../../../www/src/docs/apiExamples/ReferenceLine/ReferenceLineExample';

test('ReferenceLineExample', async ({ mount }) => {
  const component = await mount(<ReferenceLineExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});

test('ReferenceLinePositionExample', async ({ mount }) => {
  const component = await mount(<ReferenceLinePositionExample isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
