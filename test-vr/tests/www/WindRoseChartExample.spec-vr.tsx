import type { WindRoseChart } from './WindRoseChartExample.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('WindRoseChart', async ({ mountStory }) => {
  const component = await mountStory<typeof WindRoseChart>('www/WindRoseChartExample/WindRoseChart', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
