/**
 * @fileOverview https://github.com/recharts/recharts/issues/2774
 */
import { expect, test } from './fixtures';

// The chart-level clamp and the equivalent per-Bar clamp resolve through the same
// childMaxBarSize branch of combineAllBarPositions and must render identically.
const MAX_BAR_SIZE_ON_CHART_OR_PER_BAR_EQUIVALENT = 'BarChart-maxBarSize-chart-or-perBar-equivalent.png';
test('BarChart with barGap and a maxBarSize that does not clamp', async ({ mountStory }) => {
  const component = await mountStory('Bar.2774/BarChartWithBarGapAndNonClampingMaxBarSize');
  await expect(component).toHaveScreenshot();
});

test('BarChart with barGap and a maxBarSize that clamps', async ({ mountStory }) => {
  const component = await mountStory('Bar.2774/BarChartWithBarGapAndClampingMaxBarSize');
  await expect(component).toHaveScreenshot(MAX_BAR_SIZE_ON_CHART_OR_PER_BAR_EQUIVALENT);
});

test('BarChart with barGap and a clamping maxBarSize set on each Bar', async ({ mountStory }) => {
  const component = await mountStory('Bar.2774/BarChartWithBarGapAndPerBarClampingMaxBarSize');
  await expect(component).toHaveScreenshot(MAX_BAR_SIZE_ON_CHART_OR_PER_BAR_EQUIVALENT);
});
