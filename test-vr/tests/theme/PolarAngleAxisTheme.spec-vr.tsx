import { expect, testWithThemes } from '../fixtures';

testWithThemes('PolarAngleAxis theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PolarAngleAxisTheme/PolarAngleAxisThemeComparison');

  await expect(component).toHaveScreenshot();
});
