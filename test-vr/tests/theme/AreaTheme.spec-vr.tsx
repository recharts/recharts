import { expect, testWithThemes } from '../fixtures';

testWithThemes('Area theme', async ({ mountStory }) => {
  const component = await mountStory('theme/AreaTheme/AreaThemeComparison');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Unthemed Area with custom dot', async ({ mountStory }) => {
  const component = await mountStory('theme/AreaTheme/UnthemedAreaWithCustomDot');

  await expect(component).toHaveScreenshot();
});

testWithThemes('Themed Area with custom dot', async ({ mountStory }) => {
  const component = await mountStory('theme/AreaTheme/ThemedAreaWithCustomDot');

  await expect(component).toHaveScreenshot();
});
