import { expect, testWithThemes } from '../fixtures';

testWithThemes('data on chart root', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/DataOnChartRoot');
  await expect(component).toHaveScreenshot();
});

testWithThemes('single data array', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/SingleDataArray');
  await expect(component).toHaveScreenshot();
});

testWithThemes('single data array without XAxis dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/SingleDataArrayWithoutXAxisDataKey');
  await expect(component).toHaveScreenshot();
});

testWithThemes('multiple data arrays, exclusive dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/MultipleDataArraysExclusiveDataKey');
  await expect(component).toHaveScreenshot();
});

testWithThemes('multiple data arrays, repeated dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/MultipleDataArraysRepeatedDataKey');
  await expect(component).toHaveScreenshot();
});

testWithThemes('multiple data arrays, repeated dataKey, without XAxis dataKey', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/MultipleDataArraysRepeatedDataKeyWithoutXAxisDataKey');
  await expect(component).toHaveScreenshot();
});

testWithThemes('dataKey on YAxis, multiple data arrays', async ({ mountStory }) => {
  const component = await mountStory('AreaChart/stacked/DataKeyOnYAxisMultipleDataArrays');
  await expect(component).toHaveScreenshot();
});
