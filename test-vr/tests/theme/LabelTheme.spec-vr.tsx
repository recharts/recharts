import { expect, test } from '../fixtures';

test('Label theme', async ({ mountStory }) => {
  const component = await mountStory('theme/LabelTheme/LabelThemeExamples');
  await expect(component).toHaveScreenshot();
});
