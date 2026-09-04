import { expect, test } from '../fixtures';

test('Pie theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PieTheme/PieThemeComparison');

  await expect(component).toHaveScreenshot();
});
