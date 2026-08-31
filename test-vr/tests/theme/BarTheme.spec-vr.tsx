import { expect, test } from '../fixtures';

test('Bar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/BarTheme/BarThemeComparison');

  await expect(component).toHaveScreenshot();
});
