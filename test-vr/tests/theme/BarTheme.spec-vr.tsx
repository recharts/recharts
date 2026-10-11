import { expect, testWithThemes } from '../fixtures';

testWithThemes('Bar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/BarTheme/BarThemeComparison');

  await expect(component).toHaveScreenshot();
});
