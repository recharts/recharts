import * as React from 'react';
import { expect } from '@playwright/experimental-ct-react';
import CustomizeLabels from '../../../www/src/components/GuideView/Customize/CustomizeLabels';
import CustomizeBarShape from '../../../www/src/components/GuideView/Customize/CustomizeBarShape';
import CustomizeTooltipContent from '../../../www/src/components/GuideView/Customize/CustomizeTooltipContent';
import CustomizeSizeAndStroke from '../../../www/src/components/GuideView/Customize/CustomizeSizeAndStroke';
import CustomizeLegendAndTooltipStyle from '../../../www/src/components/GuideView/Customize/CustomizeLegendAndTooltipStyle';
import CustomizeCustomElement from '../../../www/src/components/GuideView/Customize/CustomizeCustomElement';
import { testWithLightTheme } from './fixtures';

testWithLightTheme('CustomizeLabels', async ({ mount }) => {
  const component = await mount(<CustomizeLabels />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomizeBarShape', async ({ mount }) => {
  const component = await mount(<CustomizeBarShape />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomizeTooltipContent', async ({ mount }) => {
  const component = await mount(<CustomizeTooltipContent />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomizeSizeAndStroke', async ({ mount }) => {
  const component = await mount(<CustomizeSizeAndStroke />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomizeLegendAndTooltipStyle', async ({ mount }) => {
  const component = await mount(<CustomizeLegendAndTooltipStyle />);
  await expect(component).toHaveScreenshot();
});

testWithLightTheme('CustomizeCustomElement', async ({ mount }) => {
  const component = await mount(<CustomizeCustomElement />);
  await expect(component).toHaveScreenshot();
});
