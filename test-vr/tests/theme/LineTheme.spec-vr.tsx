import { expect, testWithThemes } from '../fixtures';

testWithThemes('Line theme', async ({ mountStory }) => {
  const component = await mountStory('theme/LineTheme/LineThemeComparison');

  await expect(component).toHaveScreenshot();
});
