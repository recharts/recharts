import { expect, test } from '../fixtures';

test('data on chart root', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/DataOnChartRoot');
  await expect(component).toHaveScreenshot();
});

test('single data array', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/SingleDataArray');
  await expect(component).toHaveScreenshot();
});

test('single data array without XAxis dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/SingleDataArrayWithoutXAxisDataKey');
  await expect(component).toHaveScreenshot();
});

test('multiple data arrays, exclusive dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/MultipleDataArraysExclusiveDataKey');
  await expect(component).toHaveScreenshot();
});

test('multiple data arrays, repeated dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/MultipleDataArraysRepeatedDataKey');
  await expect(component).toHaveScreenshot();
});

test('multiple data arrays, repeated dataKey, without XAxis dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/MultipleDataArraysRepeatedDataKeyWithoutXAxisDataKey');
  await expect(component).toHaveScreenshot();
});

test('dataKey on YAxis, multiple data arrays', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/DataKeyOnYAxisMultipleDataArrays');
  await expect(component).toHaveScreenshot();
});
