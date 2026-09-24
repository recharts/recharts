import { expect, testWithThemes } from '../fixtures';

testWithThemes('CustomizeLabels', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeLabels');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomizeBarShape', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeBarShape');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomizeTooltipContent', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeTooltipContent');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomizeSizeAndStroke', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeSizeAndStroke');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomizeLegendAndTooltipStyle', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeLegendAndTooltipStyle');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomizeCustomElement', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeCustomElement');
  await expect(component).toHaveScreenshot();
});
