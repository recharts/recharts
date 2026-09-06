import { expect, test } from '../fixtures';

test('Area theme', async ({ mountStory }) => {
  const component = await mountStory('theme/AreaTheme/AreaThemeComparison');

  await expect(component).toHaveScreenshot();
});

test('Unthemed Area with custom dot', async ({ mountStory }) => {
  const component = await mountStory('theme/AreaTheme/UnthemedAreaWithCustomDot');

  await expect(component).toHaveScreenshot();
});

test('Themed Area with custom dot', async ({ mountStory }) => {
  const component = await mountStory('theme/AreaTheme/ThemedAreaWithCustomDot');

  await expect(component).toHaveScreenshot();
});
