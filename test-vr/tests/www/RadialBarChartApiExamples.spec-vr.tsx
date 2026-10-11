import { expect, test } from '../fixtures';

test('RadialBarChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/RadialBarChartApiExamples/RadialBarChartNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SimpleRadialBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/RadialBarChartApiExamples/SimpleRadialBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SimpleRadialBarChart dark theme', async ({ mountStory }) => {
  const component = await mountStory('www/RadialBarChartApiExamples/SimpleRadialBarChart', { testTheme: 'dark' });
  await expect(component).toHaveScreenshot();
});

test('RadialBarChartClickToFocusLegendExample', async ({ mountStory }) => {
  const component = await mountStory('www/RadialBarChartApiExamples/RadialBarChartClickToFocusLegendExample', {
    testTheme: 'light',
  });
  await expect(component).toHaveScreenshot();
});
