import { expect, testWithThemes } from '../fixtures';

testWithThemes('RadarChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/RadarChartApiExamples/RadarChartNavExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SpecifiedDomainRadarChart', async ({ mountStory }) => {
  const component = await mountStory('www/RadarChartApiExamples/SpecifiedDomainRadarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SimpleRadarChart', async ({ mountStory }) => {
  const component = await mountStory('www/RadarChartApiExamples/SimpleRadarChart');
  await expect(component).toHaveScreenshot();
});
