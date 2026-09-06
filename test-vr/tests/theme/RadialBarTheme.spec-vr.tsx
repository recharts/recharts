import { expect, test } from '../fixtures';

test('RadialBar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/RadialBarTheme/RadialBarThemeComparison');

  await expect(component).toHaveScreenshot();
});
