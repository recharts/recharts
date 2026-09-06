import type { PieChartDefaultIndex } from './ActiveIndex.story';
import { expect, test } from '../fixtures';

test('PieChartDefaultIndex', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartDefaultIndex>('www/ActiveIndex/PieChartDefaultIndex', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('BarChartClickable', async ({ mountStory }) => {
  const component = await mountStory('www/ActiveIndex/BarChartClickable');
  await expect(component).toHaveScreenshot();
});
