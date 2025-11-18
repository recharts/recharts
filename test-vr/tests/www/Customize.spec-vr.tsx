import * as React from 'react';
import { test, expect } from '@playwright/experimental-ct-react';
import CustomizeLabels from '../../../www/src/components/GuideView/Customize/CustomizeLabels';
import CustomizeBarShape from '../../../www/src/components/GuideView/Customize/CustomizeBarShape';
import CustomizeTooltipContent from '../../../www/src/components/GuideView/Customize/CustomizeTooltipContent';
import CustomizeSizeAndStroke from '../../../www/src/components/GuideView/Customize/CustomizeSizeAndStroke';
import CustomizeLegendAndTooltipStyle from '../../../www/src/components/GuideView/Customize/CustomizeLegendAndTooltipStyle';

test('CustomizeLabels', async ({ mount }) => {
  const component = await mount(<CustomizeLabels />);
  await expect(component).toHaveScreenshot();
});

test('CustomizeBarShape', async ({ mount }) => {
  const component = await mount(<CustomizeBarShape />);
  await expect(component).toHaveScreenshot();
});

test('CustomizeTooltipContent', async ({ mount }) => {
  const component = await mount(<CustomizeTooltipContent />);
  await expect(component).toHaveScreenshot();
});

test('CustomizeSizeAndStroke', async ({ mount }) => {
  const component = await mount(<CustomizeSizeAndStroke />);
  await expect(component).toHaveScreenshot();
});

test('CustomizeLegendAndTooltipStyle', async ({ mount }) => {
  const component = await mount(<CustomizeLegendAndTooltipStyle />);
  await expect(component).toHaveScreenshot();
});
