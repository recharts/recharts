import type { FunnelChartExample } from './FunnelChartApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('FunnelChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof FunnelChartExample>('www/FunnelChartApiExamples/FunnelChartExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
