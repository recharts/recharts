import type { BarChartWithThemePatterns } from './BarChartWithThemePatterns.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('BarChartWithThemePatterns', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithThemePatterns>(
    'www/BarChartWithThemePatterns/BarChartWithThemePatterns',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});
