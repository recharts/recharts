/**
 * @fileOverview https://github.com/recharts/recharts/issues/6192
 */
import { expect, testWithThemes } from './fixtures';

testWithThemes('ComposedChart with stacked Area and Bar', async ({ mountStory }) => {
  const component = await mountStory('Bar.6192/ComposedChartWithStackedAreaAndBar');
  await expect(component).toHaveScreenshot();
});
