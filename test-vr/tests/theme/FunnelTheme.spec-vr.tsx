import { expect, testWithThemes } from '../fixtures';

testWithThemes('Funnel theme', async ({ mountStory }) => {
  const component = await mountStory('theme/FunnelTheme/FunnelThemeComparison');

  await expect(component).toHaveScreenshot();
});
