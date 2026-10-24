import type { PieChartDefaultIndex } from './ActiveIndex.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('PieChartDefaultIndex', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartDefaultIndex>('www/ActiveIndex/PieChartDefaultIndex', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartClickable', async ({ mountStory }) => {
  const component = await mountStory('www/ActiveIndex/BarChartClickable');
  await expect(component).toHaveScreenshot();
});
