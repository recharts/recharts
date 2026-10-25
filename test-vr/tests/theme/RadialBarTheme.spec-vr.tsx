import { expect, testWithThemes } from '../fixtures';

testWithThemes('RadialBar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/RadialBarTheme/RadialBarThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('RadialBar fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/RadialBarTheme/RadialBarFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
