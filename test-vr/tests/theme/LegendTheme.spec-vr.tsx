import { expect, test } from '../fixtures';

test('Legend theme', async ({ mountStory }) => {
  const component = await mountStory('theme/LegendTheme/LegendThemeExamples');
  await expect(component).toHaveScreenshot();
});
