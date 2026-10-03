import type { BarChartWithLabelBackground } from './BarChartWithLabelBackground.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('BarChartWithLabelBackground', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithLabelBackground>(
    'www/BarChartWithLabelBackground/BarChartWithLabelBackground',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});
