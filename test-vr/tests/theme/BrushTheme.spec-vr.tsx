import { expect, test } from '../fixtures';

test('Brush theme', async ({ mountStory }) => {
  const component = await mountStory('theme/BrushTheme/BrushThemeComparison');

  await expect(component).toHaveScreenshot();
});
