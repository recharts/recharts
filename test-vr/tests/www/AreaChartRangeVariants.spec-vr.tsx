import { expect, test } from '../fixtures';

test('Area range via baseValue number', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaBaseValueNumber');
  await expect(component).toHaveScreenshot();
});

test('Area range via baseValue dataMin', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaBaseValueDataMin');
  await expect(component).toHaveScreenshot();
});

test('Area range via baseValue dataMax', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaBaseValueDataMax');
  await expect(component).toHaveScreenshot();
});

test('Area range via chart baseValue number', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaChartBaseValueNumber');
  await expect(component).toHaveScreenshot();
});

test('Area range via chart baseValue dataMax', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartRangeVariants/AreaRangeViaChartBaseValueDataMax');
  await expect(component).toHaveScreenshot();
});
