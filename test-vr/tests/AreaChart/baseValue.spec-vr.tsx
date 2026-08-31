import { expect, test } from '../fixtures';

// Setting baseValue on the chart root or on the individual Area resolves the same
// way here — asserted, not just left to coincide.
const BASE_VALUE_ON_ROOT_OR_AREA_EQUIVALENT = 'AreaChart-baseValue-root-or-Area-equivalent.png';
test('AreaChart with root baseValue', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/baseValue/AreaChartWithRootBaseValue');
  await expect(component).toHaveScreenshot(BASE_VALUE_ON_ROOT_OR_AREA_EQUIVALENT);
});

test('AreaChart with Area.baseValue', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/baseValue/AreaChartWithAreaBaseValue');
  await expect(component).toHaveScreenshot(BASE_VALUE_ON_ROOT_OR_AREA_EQUIVALENT);
});
