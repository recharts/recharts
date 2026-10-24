import { expect, testWithThemes } from '../fixtures';

testWithThemes('SunburstChart data entry styles', async ({ mountStory }) => {
  const component = await mountStory('theme/SunburstChartTheme/SunburstChartEntryStyles');

  await expect(component).toHaveScreenshot();
});
