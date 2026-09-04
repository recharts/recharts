import type { TargetPriceChart } from './ComposedChartApiExamples.story';
import { expect, test } from '../fixtures';

test('TargetPriceChart', async ({ mountStory }) => {
  const component = await mountStory<typeof TargetPriceChart>('www/ComposedChartApiExamples/TargetPriceChart', {
    testTheme: 'light',
    isAnimationActive: false,
    defaultIndex: 50,
  });
  await expect(component).toHaveScreenshot();
});

test('ComposedChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/ComposedChartNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BandedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/BandedChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('ScatterAndLineOfBestFit', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/ScatterAndLineOfBestFit', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('ComposedChartWithAxisLabels', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/ComposedChartWithAxisLabels', {
    testTheme: 'light',
  });
  await expect(component).toHaveScreenshot();
});

test('VerticalComposedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/VerticalComposedChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SameDataComposedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/SameDataComposedChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LineBarAreaComposedChart', async ({ mountStory }) => {
  const component = await mountStory('www/ComposedChartApiExamples/LineBarAreaComposedChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
