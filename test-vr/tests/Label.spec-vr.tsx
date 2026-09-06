import { expect, test } from './fixtures';

test('XAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/XAxisLabel');
  await expect(component).toHaveScreenshot();
});

test('YAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/YAxisLabel');
  await expect(component).toHaveScreenshot();
});

test('ReferenceArea > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/ReferenceAreaLabel');
  await expect(component).toHaveScreenshot();
});

test('ReferenceDot > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/ReferenceDotLabel');
  await expect(component).toHaveScreenshot();
});

test('ReferenceLine > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/ReferenceLineLabel');
  await expect(component).toHaveScreenshot();
});

test('RadarChart > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/RadarChartLabel');
  await expect(component).toHaveScreenshot();
});

test('PolarRadiusAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PolarRadiusAxisLabel');
  await expect(component).toHaveScreenshot();
});

test('PolarAngleAxis > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PolarAngleAxisLabel');
  await expect(component).toHaveScreenshot();
});

test('PieChart > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PieChartLabel');
  await expect(component).toHaveScreenshot();
});

test('Pie > Label', async ({ mountStory }) => {
  const component = await mountStory('Label/PieLabel');
  await expect(component).toHaveScreenshot();
});
