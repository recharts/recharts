import { expect, test } from '../fixtures';

test('Area theme', async ({ mountStory }) => {
  const component = await mountStory('theme/AreaTheme/AreaThemeComparison');

  await expect(component).toHaveScreenshot();
});
