import { expect, test } from '../fixtures';

test('PolarAngleAxis theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PolarAngleAxisTheme/PolarAngleAxisThemeComparison');

  await expect(component).toHaveScreenshot();
});
