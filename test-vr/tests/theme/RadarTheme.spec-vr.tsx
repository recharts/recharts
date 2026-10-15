import { expect, testWithThemes } from '../fixtures';

testWithThemes('Radar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/RadarTheme/RadarThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Radar fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/RadarTheme/RadarFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
