import type { FunnelChartExample } from './FunnelChartApiExamples.story';
import { expect, test } from '../fixtures';

test('FunnelChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof FunnelChartExample>('www/FunnelChartApiExamples/FunnelChartExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
