import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
// eslint-disable-next-line import/no-relative-packages
import { ResponsiveContainerExample } from '../../../www/src/docs/apiExamples/ResponsiveContainer';

test('ResponsiveContainerExample', async ({ mount }) => {
  const component = await mount(<ResponsiveContainerExample locale="en-US" isAnimationActive={false} />);
  await expect(component).toHaveScreenshot();
});
