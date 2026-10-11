import { expect, testWithThemes } from '../fixtures';

testWithThemes('SunburstChartThemeColors', async ({ mountStory }) => {
  const component = await mountStory('www/SunburstChartExamples/SunburstChartThemeColors');
  await expect(component).toHaveScreenshot();
});
