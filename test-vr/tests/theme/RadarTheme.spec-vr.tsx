import { expect, test } from '../fixtures';

test('Radar theme', async ({ mountStory }) => {
  const component = await mountStory('theme/RadarTheme/RadarThemeComparison');

  await expect(component).toHaveScreenshot();
});
