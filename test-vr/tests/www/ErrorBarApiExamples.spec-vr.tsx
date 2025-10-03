import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { ErrorBarExample } from '../../../www/src/docs/apiExamples/ErrorBar';

test('ErrorBarExample', async ({ mount }) => {
  const component = await mount(<ErrorBarExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
