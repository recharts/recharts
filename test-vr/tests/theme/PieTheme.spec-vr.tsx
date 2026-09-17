import { expect, testWithThemes } from '../fixtures';

testWithThemes('Pie theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PieTheme/PieThemeComparison');

  await expect(component).toHaveScreenshot();
});
