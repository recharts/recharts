import type { TargetPriceChart } from './ComposedChartApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('TargetPriceChart', async ({ mountStory }) => {
  const component = await mountStory<typeof TargetPriceChart>('www/ComposedChartApiExamples/TargetPriceChart', {
    isAnimationActive: false,
    defaultIndex: 50,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('ComposedChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/ComposedChartNavExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BandedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/BandedChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ScatterAndLineOfBestFit', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/ScatterAndLineOfBestFit');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ComposedChartWithAxisLabels', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/ComposedChartWithAxisLabels');
  await expect(component).toHaveScreenshot();
});

testWithThemes('VerticalComposedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/VerticalComposedChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SameDataComposedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/SameDataComposedChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LineBarAreaComposedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/LineBarAreaComposedChart');
  await expect(component).toHaveScreenshot();
});
