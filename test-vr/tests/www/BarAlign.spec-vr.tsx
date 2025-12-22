import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import CustomBandScaleExample from '../../../www/src/components/GuideView/BarAlign/CustomBandScaleExample';

test('CustomBandScaleExample', async ({ mount }) => {
  const component = await mount(
    <CustomBandScaleExample align={0.2} barGap={0.2} barCategoryGap={0.1} paddingInner={0.2} paddingOuter={0.2} />,
  );
  await expect(component).toHaveScreenshot();
});

test('CustomBandScaleExample - left aligned', async ({ mount }) => {
  const component = await mount(
    <CustomBandScaleExample align={0.1} barGap={0.01} barCategoryGap={0.01} paddingInner={0} paddingOuter={10} />,
  );
  await expect(component).toHaveScreenshot();
});
