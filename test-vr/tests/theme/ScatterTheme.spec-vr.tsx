import { expect, testWithThemes } from '../fixtures';

testWithThemes('Scatter theme', async ({ mountStory }) => {
  const component = await mountStory('theme/ScatterTheme/ScatterThemeComparison');

  await expect(component).toHaveScreenshot();
});
