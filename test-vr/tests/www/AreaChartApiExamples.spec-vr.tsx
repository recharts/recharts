import type { AreaChartExample, AreaChartRangeExample, CrosshairExample } from './AreaChartApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('AreaChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartNavExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('AreaChartFillByValue', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartFillByValue');
  await expect(component).toHaveScreenshot();
});

testWithThemes('TinyAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/TinyAreaChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SynchronizedAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/SynchronizedAreaChart');
  /*
   * Since Playwright 1.65, WebKit anti-aliases this chart's axis tick labels slightly differently
   * from run to run (up to ~200 pixels, all at text edges). Allow that much without hiding real changes.
   */
  await expect(component).toHaveScreenshot({ maxDiffPixels: 300 });
});

testWithThemes('PercentAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/PercentAreaChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CardinalAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/CardinalAreaChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('AreaChartConnectNulls', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartConnectNulls');
  await expect(component).toHaveScreenshot();
});

testWithThemes('StackedAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/StackedAreaChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SimpleAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/SimpleAreaChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('AreaChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof AreaChartExample>('www/AreaChartApiExamples/AreaChartExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('AreaChartRangeExample', async ({ mountStory }) => {
  const component = await mountStory<typeof AreaChartRangeExample>('www/AreaChartApiExamples/AreaChartRangeExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('CrosshairExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CrosshairExample>('www/AreaChartApiExamples/CrosshairExample', {
    initialPointers: [{ relativeX: 100, relativeY: 100 }],
  });
  await expect(component).toHaveScreenshot();
});
