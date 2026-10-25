import { expect, testWithThemes } from '../fixtures';

testWithThemes('Sankey fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/SankeyTheme/SankeyFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
