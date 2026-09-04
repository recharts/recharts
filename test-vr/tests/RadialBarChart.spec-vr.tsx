import { expect, test } from './fixtures';

test('Stacked RadialBar Chart', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/StackedRadialBarChart');
  await expect(component).toHaveScreenshot();
});

// Explicitly setting PolarAngleAxis/PolarRadiusAxis type resolves the same as
// letting them be inferred from the data key — asserted, not coincidental.
const RINGS_EXPLICIT_AXIS_TYPES_EQUAL_INFERRED = 'RadialBarChart-rings-explicit-axis-types-equal-inferred.png';
test('Rings With Implicit Axes', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithImplicitAxes');
  await expect(component).toHaveScreenshot();
});

test('Rings With Default Axes', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithDefaultAxes');
  await expect(component).toHaveScreenshot();
});

test('Rings With Data Keys', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithDataKeys');
  await expect(component).toHaveScreenshot(RINGS_EXPLICIT_AXIS_TYPES_EQUAL_INFERRED);
});

test('Rings With Types', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithTypes');
  await expect(component).toHaveScreenshot();
});

test('Rings With Data Keys And Types', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithDataKeysAndTypes');
  await expect(component).toHaveScreenshot(RINGS_EXPLICIT_AXIS_TYPES_EQUAL_INFERRED);
});

test('Rings With Custom Domain', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithCustomDomain');
  await expect(component).toHaveScreenshot();
});

test('Rings With Radius Axis Vertically', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/RingsWithRadiusAxisVertically');
  await expect(component).toHaveScreenshot();
});

test('Reversed Angle Axis', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ReversedAngleAxis');
  await expect(component).toHaveScreenshot();
});

test('Reversed Radius Axis', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ReversedRadiusAxis');
  await expect(component).toHaveScreenshot();
});

test('Reversed Both Axes', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ReversedBothAxes');
  await expect(component).toHaveScreenshot();
});

test('Angled', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/Angled');
  await expect(component).toHaveScreenshot();
});

test('Chart Reversed By Angles', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ChartReversedByAngles');
  await expect(component).toHaveScreenshot();
});

test('Chart Reversed By Both Angles And Reverse Axis', async ({ mountStory }) => {
  const component = await mountStory('RadialBarChart/ChartReversedByBothAnglesAndReverseAxis');
  await expect(component).toHaveScreenshot();
});
