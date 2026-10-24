import { expect, testWithThemes } from '../fixtures';

testWithThemes('PolarGrid theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PolarGridTheme/PolarGridThemeComparison');

  await expect(component).toHaveScreenshot();
});
