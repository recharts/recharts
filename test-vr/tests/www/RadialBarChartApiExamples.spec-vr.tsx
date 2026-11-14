import { expect, testWithThemes } from '../fixtures';

testWithThemes('RadialBarChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/RadialBarChartApiExamples/RadialBarChartNavExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SimpleRadialBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/RadialBarChartApiExamples/SimpleRadialBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('RadialBarChartClickToFocusLegendExample', async ({ mountStory }) => {
  const component = await mountStory('www/RadialBarChartApiExamples/RadialBarChartClickToFocusLegendExample');
  await expect(component).toHaveScreenshot();
});
