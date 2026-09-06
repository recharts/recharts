import { expect, test } from './fixtures';

test('Area > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/AreaImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Area > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/AreaExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Bar > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/BarImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Bar > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/BarExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Line > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/LineImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Line > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/LineExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Scatter > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/ScatterImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Scatter > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/ScatterExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Pie > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/PieImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Pie > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/PieExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Radar > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadarImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Radar > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadarExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('RadialBar > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadialBarImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('RadialBar > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/RadialBarExplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Funnel > implicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/FunnelImplicitLabelList');
  await expect(component).toHaveScreenshot();
});

test('Funnel > explicit LabelList', async ({ mountStory }) => {
  const component = await mountStory('LabelList/FunnelExplicitLabelList');
  await expect(component).toHaveScreenshot();
});
