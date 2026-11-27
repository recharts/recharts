import { expect, testWithThemes } from './fixtures';

testWithThemes('Line with every dot symbol and matching legend icons', async ({ mountStory }) => {
  const component = await mountStory('DotSymbols/LineChartWithDotSymbols');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Line with resized dot and activeDot symbols', async ({ mountStory }) => {
  const component = await mountStory('DotSymbols/LineChartWithResizedDotSymbols');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Area with dot symbols', async ({ mountStory }) => {
  const component = await mountStory('DotSymbols/AreaChartWithDotSymbols');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Radar with dot symbols in the legend', async ({ mountStory }) => {
  const component = await mountStory('DotSymbols/RadarChartWithDotSymbols');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Scatter with shape in the legend', async ({ mountStory }) => {
  const component = await mountStory('DotSymbols/ScatterChartWithShapeLegend');
  await expect(component).toHaveScreenshot();
});
