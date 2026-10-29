import type { LabelListChartExample } from './LabelListApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('LabelListChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelListChartExample>('www/LabelListApiExamples/LabelListChartExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
