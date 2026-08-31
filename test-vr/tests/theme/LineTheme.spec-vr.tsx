import { expect, test } from '../fixtures';

test('Line theme', async ({ mountStory }) => {
  const component = await mountStory('theme/LineTheme/LineThemeComparison');

  await expect(component).toHaveScreenshot();
});
