import { expect, testWithThemes } from './fixtures';

testWithThemes('XAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/XAxisLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('YAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/YAxisLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ReferenceArea > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/ReferenceAreaLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ReferenceDot > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/ReferenceDotLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ReferenceLine > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/ReferenceLineLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('RadarChart > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/RadarChartLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('PolarRadiusAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PolarRadiusAxisLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('PolarAngleAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PolarAngleAxisLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('PieChart > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PieChartLabel');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Pie > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PieLabel');
  await expect(component).toHaveScreenshot();
});
