import type { BundleSizeSunburst } from './SunburstChartExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('SunburstChartExample', async ({ mountStory }) => {
  const component = await mountStory('www/SunburstChartExamples/SunburstChartExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BundleSizeSunburst', async ({ mountStory }) => {
  const component = await mountStory<typeof BundleSizeSunburst>('www/SunburstChartExamples/BundleSizeSunburst', {
    forceFallbackData: true,
  });
  await expect(component).toHaveScreenshot();
});
