import { expect, test } from '../fixtures';

test('Scatter theme', async ({ mountStory }) => {
  const component = await mountStory('theme/ScatterTheme/ScatterThemeComparison');

  await expect(component).toHaveScreenshot();
});
