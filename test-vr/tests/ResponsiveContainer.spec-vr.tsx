import { expect, test } from './fixtures';

test('ResponsiveContainer with hardcoded width and height', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/ResponsiveContainerWithHardcodedWidthAndHeight');
  await expect(component).toHaveScreenshot();
});

test('should render at 100% width and height of a fixed-size parent', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/RenderAt100PercentWidthAndHeightOfFixedSizeParent');
  await expect(component).toHaveScreenshot();
});

test('should render at 50% width and height of a fixed-size parent', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/RenderAt50PercentWidthAndHeightOfFixedSizeParent');
  await expect(component).toHaveScreenshot();
});

test('should respect dimensions of a flexbox parent', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/RespectDimensionsOfFlexboxParent');
  await expect(component).toHaveScreenshot();
});

test('should respect dimensions of a grid parent', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/RespectDimensionsOfGridParent');
  await expect(component).toHaveScreenshot();
});

test('should handle mixed fixed and percentage sizing', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/HandleMixedFixedAndPercentageSizing');
  await expect(component).toHaveScreenshot();
});

test('should calculate height based on aspect ratio', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/CalculateHeightBasedOnAspectRatio');
  await expect(component).toHaveScreenshot();
});

test('should respect width in a tall container when aspect is set', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/RespectWidthInTallContainerWhenAspectIsSet');
  await expect(component).toHaveScreenshot();
});

test('aspect ratio should be overridden by maxHeight', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/AspectRatioOverriddenByMaxHeight');
  await expect(component).toHaveScreenshot();
});

test('should respect minWidth with aspect ratio', async ({ mountStory }) => {
  const component = await mountStory('ResponsiveContainer/RespectMinWidthWithAspectRatio');
  await expect(component).toHaveScreenshot();
});

test('should create a square chart that overflows a wide screen', async ({ mountStory, page }) => {
  // Set a wide viewport to test the landscape scenario
  await page.setViewportSize({ width: 800, height: 400 });

  const component = await mountStory('ResponsiveContainer/CreateSquareChartThatOverflowsWideScreen');
  await expect(component).toHaveScreenshot();
});

test('should create a square chart without width or height specified', async ({ mountStory, page }) => {
  // Set a tall viewport to test the no-dimensions scenario
  await page.setViewportSize({ width: 200, height: 500 });

  // This scenario unfortunately doesn't work well still - the chart has 0x0 and overlaps the text below it.
  const component = await mountStory('ResponsiveContainer/CreateSquareChartWithoutWidthOrHeight');
  await expect(component).toHaveScreenshot();
});
