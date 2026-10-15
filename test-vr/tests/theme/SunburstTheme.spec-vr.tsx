import { expect, testWithThemes } from '../fixtures';

testWithThemes('Sunburst fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/SunburstTheme/SunburstFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
