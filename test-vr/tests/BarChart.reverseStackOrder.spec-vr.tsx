import { expect, testWithThemes } from './fixtures';

testWithThemes('StackedBarChart with reverseStackOrder=false', async ({ mountStory }) => {
  const component = await mountStory('BarChart.reverseStackOrder/StackedBarChartWithReverseStackOrderFalse');
  await expect(component).toHaveScreenshot();
});

testWithThemes('StackedBarChart with reverseStackOrder=true', async ({ mountStory }) => {
  const component = await mountStory('BarChart.reverseStackOrder/StackedBarChartWithReverseStackOrderTrue');
  await expect(component).toHaveScreenshot();
});
