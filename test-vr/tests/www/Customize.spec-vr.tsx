import { expect, test } from '../fixtures';

test('CustomizeLabels', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeLabels', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomizeBarShape', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeBarShape', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomizeTooltipContent', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeTooltipContent', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomizeSizeAndStroke', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeSizeAndStroke', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomizeLegendAndTooltipStyle', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeLegendAndTooltipStyle', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomizeCustomElement', async ({ mountStory }) => {
  const component = await mountStory('www/Customize/CustomizeCustomElement', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
