import { expect, test } from '../fixtures';

test('Treemap theme', async ({ mountStory }) => {
  const component = await mountStory('theme/TreemapTheme/TreemapThemeComparison');

  await expect(component).toHaveScreenshot();
});
