import { expect, test } from '../fixtures';

test('PolarGrid theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PolarGridTheme/PolarGridThemeComparison');

  await expect(component).toHaveScreenshot();
});
