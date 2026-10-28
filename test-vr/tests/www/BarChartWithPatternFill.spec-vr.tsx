import type { BarChartWithPatternFill } from './BarChartWithPatternFill.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('BarChartWithPatternFill', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithPatternFill>(
    'www/BarChartWithPatternFill/BarChartWithPatternFill',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});
