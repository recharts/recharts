import { expect, test } from '../fixtures';

test('RadarChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/RadarChartApiExamples/RadarChartNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SpecifiedDomainRadarChart', async ({ mountStory }) => {
  const component = await mountStory('www/RadarChartApiExamples/SpecifiedDomainRadarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SimpleRadarChart', async ({ mountStory }) => {
  const component = await mountStory('www/RadarChartApiExamples/SimpleRadarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
