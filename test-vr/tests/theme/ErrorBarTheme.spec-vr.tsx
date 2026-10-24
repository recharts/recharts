import { expect, testWithThemes } from '../fixtures';

testWithThemes('ErrorBar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/ErrorBarTheme/ErrorBarThemeComponents');

  await expect(component).toHaveScreenshot();
});
