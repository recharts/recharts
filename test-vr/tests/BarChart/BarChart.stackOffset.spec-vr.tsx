import type { BarChartWithStackOffset, BarStackWithStackOffset } from './BarChart.stackOffset.story';
import { expect, test } from '../fixtures';

// stackOffset="none" is the documented default, for both BarChart and BarStack —
// each pair below asserts that leaving the prop unset renders identically to
// setting it explicitly.
const BAR_CHART_STACK_OFFSET_DEFAULT_EQUALS_NONE = 'BarChart-stackOffset-default-equals-none.png';
const BAR_STACK_STACK_OFFSET_DEFAULT_EQUALS_NONE = 'BarStack-stackOffset-default-equals-none.png';
test('BarChart with default stackOffset', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarChartWithStackOffset',
  );
  await expect(component).toHaveScreenshot(BAR_CHART_STACK_OFFSET_DEFAULT_EQUALS_NONE);
});

test('BarChart with stackOffset=expand', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarChartWithStackOffset',
    {
      stackOffset: 'expand',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=sign', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarChartWithStackOffset',
    {
      stackOffset: 'sign',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=none', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarChartWithStackOffset',
    {
      stackOffset: 'none',
    },
  );
  await expect(component).toHaveScreenshot(BAR_CHART_STACK_OFFSET_DEFAULT_EQUALS_NONE);
});

test('BarChart with stackOffset=wiggle', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarChartWithStackOffset',
    {
      stackOffset: 'wiggle',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=silhouette', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarChartWithStackOffset',
    {
      stackOffset: 'silhouette',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarChart with stackOffset=positive', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarChartWithStackOffset',
    {
      stackOffset: 'positive',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarStack with default stackOffset', async ({ mountStory }) => {
  const component = await mountStory<typeof BarStackWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarStackWithStackOffset',
  );
  await expect(component).toHaveScreenshot(BAR_STACK_STACK_OFFSET_DEFAULT_EQUALS_NONE);
});

test('BarStack with stackOffset=expand', async ({ mountStory }) => {
  const component = await mountStory<typeof BarStackWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarStackWithStackOffset',
    {
      stackOffset: 'expand',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarStack with stackOffset=sign', async ({ mountStory }) => {
  const component = await mountStory<typeof BarStackWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarStackWithStackOffset',
    {
      stackOffset: 'sign',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarStack with stackOffset=none', async ({ mountStory }) => {
  const component = await mountStory<typeof BarStackWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarStackWithStackOffset',
    {
      stackOffset: 'none',
    },
  );
  await expect(component).toHaveScreenshot(BAR_STACK_STACK_OFFSET_DEFAULT_EQUALS_NONE);
});

test('BarStack with stackOffset=wiggle', async ({ mountStory }) => {
  const component = await mountStory<typeof BarStackWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarStackWithStackOffset',
    {
      stackOffset: 'wiggle',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarStack with stackOffset=silhouette', async ({ mountStory }) => {
  const component = await mountStory<typeof BarStackWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarStackWithStackOffset',
    {
      stackOffset: 'silhouette',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarStack with stackOffset=positive', async ({ mountStory }) => {
  const component = await mountStory<typeof BarStackWithStackOffset>(
    'BarChart/BarChart.stackOffset/BarStackWithStackOffset',
    {
      stackOffset: 'positive',
    },
  );
  await expect(component).toHaveScreenshot();
});
