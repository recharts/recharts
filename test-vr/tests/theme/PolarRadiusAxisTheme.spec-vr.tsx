import { expect, test } from '../fixtures';

test('PolarRadiusAxis theme', async ({ mountStory }) => {
  const component = await mountStory('theme/PolarRadiusAxisTheme/PolarRadiusAxisThemeComparison');

  await expect(component).toHaveScreenshot();
});
