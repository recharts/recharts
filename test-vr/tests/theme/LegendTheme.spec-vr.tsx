import { expect, testWithThemes } from '../fixtures';

testWithThemes('Legend theme', async ({ mountStory }) => {
  const component = await mountStory('theme/LegendTheme/LegendThemeExamples');
  await expect(component).toHaveScreenshot();
});
