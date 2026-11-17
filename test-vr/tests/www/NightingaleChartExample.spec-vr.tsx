import type { NightingaleChart } from './NightingaleChartExample.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('NightingaleChart', async ({ mountStory }) => {
  const component = await mountStory<typeof NightingaleChart>('www/NightingaleChartExample/NightingaleChart', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
