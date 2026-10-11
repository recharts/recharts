import { expect, testWithThemes } from '../fixtures';

testWithThemes('Radar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/RadarTheme/RadarThemeComparison');

  await expect(component).toHaveScreenshot();
});
