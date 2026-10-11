import type { BundleSizeSunburst } from './SunburstChartExamples.story';
import { expect, test } from '../fixtures';

test('SunburstChartExample', async ({ mountStory }) => {
  const component = await mountStory('www/SunburstChartExamples/SunburstChartExample');
  await expect(component).toHaveScreenshot();
});

test('BundleSizeSunburst', async ({ mountStory }) => {
  const component = await mountStory<typeof BundleSizeSunburst>('www/SunburstChartExamples/BundleSizeSunburst', {
    forceFallbackData: true,
  });
  await expect(component).toHaveScreenshot();
});
