import { expect, testWithThemes } from './fixtures';

testWithThemes('Stacked RadialBar Chart', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/StackedRadialBarChart');
  await expect(component).toHaveScreenshot();
});

// Explicitly setting PolarAngleAxis/PolarRadiusAxis type resolves the same as
// letting them be inferred from the data key — asserted, not coincidental.
const RINGS_EXPLICIT_AXIS_TYPES_EQUAL_INFERRED = 'RadialBarChart-rings-explicit-axis-types-equal-inferred.png';
testWithThemes('Rings With Implicit Axes', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithImplicitAxes');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Rings With Default Axes', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithDefaultAxes');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Rings With Data Keys', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithDataKeys');
  await expect(component).toHaveScreenshot(RINGS_EXPLICIT_AXIS_TYPES_EQUAL_INFERRED);
});

testWithThemes('Rings With Types', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithTypes');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Rings With Data Keys And Types', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithDataKeysAndTypes');
  await expect(component).toHaveScreenshot(RINGS_EXPLICIT_AXIS_TYPES_EQUAL_INFERRED);
});

testWithThemes('Rings With Custom Domain', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithCustomDomain');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Rings With Radius Axis Vertically', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithRadiusAxisVertically');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Reversed Angle Axis', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ReversedAngleAxis');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Reversed Radius Axis', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ReversedRadiusAxis');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Reversed Both Axes', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ReversedBothAxes');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Angled', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/Angled');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Chart Reversed By Angles', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ChartReversedByAngles');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Chart Reversed By Both Angles And Reverse Axis', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ChartReversedByBothAnglesAndReverseAxis');
  await expect(component).toHaveScreenshot();
});
