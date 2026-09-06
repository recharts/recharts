import { expect, test } from '../fixtures';

test('Funnel theme', async ({ mountStory }) => {
  const component = await mountStory('theme/FunnelTheme/FunnelThemeComparison');

  await expect(component).toHaveScreenshot();
});
