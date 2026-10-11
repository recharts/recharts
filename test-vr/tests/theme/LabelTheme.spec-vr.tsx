import { expect, testWithThemes } from '../fixtures';

testWithThemes('Label theme', async ({ mountStory }) => {
  const component = await mountStory('theme/LabelTheme/LabelThemeExamples');
  await expect(component).toHaveScreenshot();
});
