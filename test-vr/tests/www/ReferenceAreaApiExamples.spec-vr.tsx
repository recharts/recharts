import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { ReferenceAreaExample } from '../../../www/src/docs/apiExamples/ReferenceArea';

test('ReferenceAreaExample', async ({ mount }) => {
  const component = await mount(<ReferenceAreaExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
