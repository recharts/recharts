import { expect, testWithThemes } from '../fixtures';

testWithThemes('Brush theme', async ({ mountStory }) => {
  const component = await mountStory('theme/BrushTheme/BrushThemeComparison');

  await expect(component).toHaveScreenshot();
});
