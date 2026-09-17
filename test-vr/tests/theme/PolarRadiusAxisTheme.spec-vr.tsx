import { expect, testWithThemes } from '../fixtures';

testWithThemes('PolarRadiusAxis theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PolarRadiusAxisTheme/PolarRadiusAxisThemeComparison');

  await expect(component).toHaveScreenshot();
});
