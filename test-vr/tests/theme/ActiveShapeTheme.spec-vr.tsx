import { expect, testWithThemes } from '../fixtures';

testWithThemes('Bar active shape', async ({ mountStory }) => {
  const component = await mountStory('theme/ActiveShapeTheme/BarActiveShape');

  await expect(component.locator('.recharts-active-bar')).toHaveCount(1);
  await expect(component).toHaveScreenshot();
});

testWithThemes('Scatter active shape', async ({ mountStory }) => {
  const component = await mountStory('theme/ActiveShapeTheme/ScatterActiveShape');

  await expect(component.locator('.recharts-active-shape')).toHaveCount(1);
  await expect(component).toHaveScreenshot();
});

testWithThemes('Pie active shape', async ({ mountStory }) => {
  const component = await mountStory('theme/ActiveShapeTheme/PieActiveShape');

  await expect(component.locator('.recharts-active-shape')).toHaveCount(1);
  await expect(component).toHaveScreenshot();
});

testWithThemes('RadialBar active shape', async ({ mountStory }) => {
  const component = await mountStory('theme/ActiveShapeTheme/RadialBarActiveShape');

  await expect(component.locator('.recharts-active-shape')).toHaveCount(1);
  await expect(component).toHaveScreenshot();
});

/*
 * Funnel does not read the Tooltip defaultIndex, so it needs a real pointer interaction.
 * https://github.com/recharts/recharts/issues/7945
 */
testWithThemes('Funnel active shape', async ({ mountStory }) => {
  const component = await mountStory('theme/ActiveShapeTheme/FunnelActiveShape');

  await component.locator('.recharts-funnel-trapezoid').nth(1).hover();
  await expect(component.locator('.recharts-active-shape')).toHaveCount(1);
  await expect(component).toHaveScreenshot();
});
