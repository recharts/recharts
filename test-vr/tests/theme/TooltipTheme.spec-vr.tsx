import { expect, test } from '../fixtures';

test('Tooltip theme', async ({ mountStory }) => {
  const component = await mountStory('theme/TooltipTheme/TooltipThemeComparison');

  await expect(component).toHaveScreenshot();
});
