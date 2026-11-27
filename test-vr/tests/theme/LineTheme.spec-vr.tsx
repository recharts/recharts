import { expect, testWithThemes } from '../fixtures';

testWithThemes('Line theme', async ({ mountStory }) => {
  const component = await mountStory('theme/LineTheme/LineThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Line fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/LineTheme/LineFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
