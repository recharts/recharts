import { expect, testWithThemes } from '../fixtures';

testWithThemes('Scatter theme', async ({ mountStory }) => {
  const component = await mountStory('theme/ScatterTheme/ScatterThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Scatter fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/ScatterTheme/ScatterFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
