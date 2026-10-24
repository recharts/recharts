import { expect, testWithThemes } from '../fixtures';

testWithThemes('Tooltip theme', async ({ mountStory }) => {
  const component = await mountStory('theme/TooltipTheme/TooltipThemeComparison');

  await expect(component).toHaveScreenshot();
});
