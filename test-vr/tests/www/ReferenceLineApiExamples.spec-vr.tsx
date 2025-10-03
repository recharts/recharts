import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { ReferenceLineExample } from '../../../www/src/docs/apiExamples/ReferenceLine';

test('ReferenceLineExample', async ({ mount }) => {
  const component = await mount(<ReferenceLineExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
