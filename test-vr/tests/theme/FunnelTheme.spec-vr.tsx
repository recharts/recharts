import { expect, testWithThemes } from '../fixtures';

testWithThemes('Funnel theme', async ({ mountStory }) => {
  const component = await mountStory('theme/FunnelTheme/FunnelThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Funnel fill and stroke variants', async ({ mountStory }) => {
  const component = await mountStory('theme/FunnelTheme/FunnelFillStrokeVariants');

  await expect(component).toHaveScreenshot();
});
