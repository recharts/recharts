import { expect, testWithThemes } from '../fixtures';

testWithThemes('Reference elements theme', async ({ mountStory }) => {
  const component = await mountStory('theme/ReferenceTheme/ReferenceThemeComparison');

  await expect(component).toHaveScreenshot();
});
