import { expect, test } from '../fixtures';

test('Text theme', async ({ mountStory }) => {
  const component = await mountStory('theme/TextTheme/TextThemeExamples');
  await expect(component).toHaveScreenshot();
});
