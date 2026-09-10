import { expect, testWithThemes } from './fixtures';

testWithThemes('Area > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/AreaImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Area > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/AreaExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Bar > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/BarImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Bar > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/BarExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Line > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/LineImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Line > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/LineExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Scatter > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/ScatterImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Scatter > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/ScatterExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Pie > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/PieImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Pie > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/PieExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Radar > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadarImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Radar > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadarExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('RadialBar > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadialBarImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('RadialBar > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadialBarExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Funnel > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/FunnelImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Funnel > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/FunnelExplicitLabelList');
  await expect(component).toHaveScreenshot();
});
