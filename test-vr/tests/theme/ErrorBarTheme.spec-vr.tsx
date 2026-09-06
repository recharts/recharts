import { expect, test } from '../fixtures';

test('ErrorBar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/ErrorBarTheme/ErrorBarThemeComponents');

  await expect(component).toHaveScreenshot();
});
