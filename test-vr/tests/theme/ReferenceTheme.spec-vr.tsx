import { expect, test } from '../fixtures';

test('Reference elements theme', async ({ mountStory }) => {
  const component = await mountStory('theme/ReferenceTheme/ReferenceThemeComparison');

  await expect(component).toHaveScreenshot();
});
