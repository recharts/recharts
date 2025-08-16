import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import { AreaExplicitLabelListTest, AreaImplicitLabelListTest } from './LabelListComponents';

test('Area > implicit LabelList', async ({ mount }) => {
  const component = await mount(<AreaImplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});

test('Area > explicit LabelList', async ({ mount }) => {
  const component = await mount(<AreaExplicitLabelListTest />);
  await expect(component).toHaveScreenshot();
});
