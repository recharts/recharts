/**
 * @fileOverview https://github.com/recharts/recharts/issues/6192
 */
import { expect, test } from './fixtures';

test('ComposedChart with stacked Area and Bar', async ({ mountStory }) => {
  const component = await mountStory('Bar.6192/ComposedChartWithStackedAreaAndBar');
  await expect(component).toHaveScreenshot();
});
