import { expect, test } from './fixtures';

test('StackedBarChart with reverseStackOrder=false', async ({ mountStory }) => {
  const component = await mountStory('BarChart.reverseStackOrder/StackedBarChartWithReverseStackOrderFalse');
  await expect(component).toHaveScreenshot();
});

test('StackedBarChart with reverseStackOrder=true', async ({ mountStory }) => {
  const component = await mountStory('BarChart.reverseStackOrder/StackedBarChartWithReverseStackOrderTrue');
  await expect(component).toHaveScreenshot();
});
