import type { LabelListChartExample } from './LabelListApiExamples.story';
import { expect, test } from '../fixtures';

test('LabelListChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelListChartExample>('www/LabelListApiExamples/LabelListChartExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
