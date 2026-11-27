import { expect, testWithThemes } from '../fixtures';

testWithThemes('Bar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/BarTheme/BarThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Bar fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/BarTheme/BarFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
