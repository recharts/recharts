import { expect, testWithThemes } from '../fixtures';

testWithThemes('Treemap theme', async ({ mountStory }) => {
  const component = await mountStory('theme/TreemapTheme/TreemapThemeComparison');

  await expect(component).toHaveScreenshot();
});
