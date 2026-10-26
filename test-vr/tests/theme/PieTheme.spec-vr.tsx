import { expect, testWithThemes } from '../fixtures';

testWithThemes('Pie theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PieTheme/PieThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Pie fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/PieTheme/PieFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Pie entry styles with labels', async ({ mountStory }) => {
  const component = await mountStory('theme/PieTheme/PieEntryStylesWithLabels');

  await expect(component).toHaveScreenshot();
});
