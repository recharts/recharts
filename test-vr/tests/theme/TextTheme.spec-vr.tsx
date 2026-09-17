import { expect, testWithThemes } from '../fixtures';

testWithThemes('Text theme', async ({ mountStory }) => {
  const component = await mountStory('theme/TextTheme/TextThemeExamples');
  await expect(component).toHaveScreenshot();
});
