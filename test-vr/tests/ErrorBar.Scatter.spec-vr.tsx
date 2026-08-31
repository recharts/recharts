import { expect, test } from './fixtures';

/**
 * These filenames name equivalence claims, not test titles. Several tests below
 * share one snapshot on purpose: passing the same name to toHaveScreenshot()
 * *asserts* that different prop combinations render identically, rather than each
 * quietly accumulating its own baseline that happens to match its neighbours'. If
 * any of the props below ever stop being equivalent, the specific test that broke
 * fails against the shared baseline — instead of the divergence going unnoticed.
 */

// In a vertical layout the value axis is x, so implicit direction, explicit
// direction="x", and both x+y directions together (y has nothing to draw against a
// category axis) all resolve to the same value axis — and, separately, whether the
// data lives on the chart or the Scatter does not change layout. Six tests, one claim.
const SCATTER_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT =
  'ScatterChart-vertical-direction-and-data-source-equivalent.png';

// Default (horizontal) layout: the value axis is y, so implicit direction and
// explicit direction="y" resolve the same, independent of root vs item data.
const COMPOSED_DIRECTION_AND_DATA_SOURCE_EQUIVALENT = 'ComposedChart-direction-and-data-source-equivalent.png';

// Vertical layout: implicit direction and explicit direction="x" resolve the same,
// independent of root vs item data. Unlike ScatterChart above, adding a second,
// "both directions" ErrorBar is NOT part of this equivalence for ComposedChart — see
// COMPOSED_VERTICAL_BOTH_DIRECTIONS_DATA_SOURCE_EQUIVALENT below, which is its own,
// narrower claim. The two chart types do not behave symmetrically here.
const COMPOSED_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT =
  'ComposedChart-vertical-direction-and-data-source-equivalent.png';

// Root vs item data is a no-op here, same as everywhere else in this file — but this
// is its own group, not merged with the single-direction one above: for ComposedChart
// (unlike ScatterChart), adding the second ErrorBar direction does change the render.
const COMPOSED_VERTICAL_BOTH_DIRECTIONS_DATA_SOURCE_EQUIVALENT =
  'ComposedChart-vertical-bothDirections-data-source-equivalent.png';

// With both axes numeric, wrapping a Scatter in a ComposedChart renders identically
// to a bare ScatterChart — and, as above, root vs item data does not matter either.
const COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_BOTH_DIRECTIONS_EQUIVALENT =
  'ComposedChart-and-ScatterChart-vertical-numericYAxis-bothDirections-equivalent.png';

// Same ComposedChart-equals-ScatterChart claim as above, for implicit direction
// instead of both directions explicitly set.
const COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_IMPLICIT_DIRECTION_EQUIVALENT =
  'ComposedChart-and-ScatterChart-vertical-numericYAxis-implicitDirection-equivalent.png';

// Default (horizontal) layout, bare ScatterChart: implicit direction and explicit
// direction="y" resolve the same, independent of root vs item data.
const SCATTER_DIRECTION_AND_DATA_SOURCE_EQUIVALENT = 'ScatterChart-direction-and-data-source-equivalent.png';

// With a numeric XAxis, ComposedChart (root data only — there is no item-data variant
// of this one) renders the same as ScatterChart with explicit direction, for either
// data source on the ScatterChart side.
const COMPOSED_AND_SCATTER_NUMERIC_XAXIS_EXPLICIT_DIRECTION_EQUIVALENT =
  'ComposedChart-and-ScatterChart-numericXAxis-explicitDirection-equivalent.png';

// Same claim as above, for implicit direction.
const COMPOSED_AND_SCATTER_NUMERIC_XAXIS_IMPLICIT_DIRECTION_EQUIVALENT =
  'ComposedChart-and-ScatterChart-numericXAxis-implicitDirection-equivalent.png';

test('ComposedChart + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart + explicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartExplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart + implicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartImplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart + explicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartExplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart + numeric XAxis + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartNumericXAxisImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_NUMERIC_XAXIS_IMPLICIT_DIRECTION_EQUIVALENT);
});

test('ComposedChart + numeric XAxis + explicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartNumericXAxisExplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_NUMERIC_XAXIS_EXPLICIT_DIRECTION_EQUIVALENT);
});

test('ScatterChart + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(SCATTER_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart + explicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartExplicitDirectionRootData');
  await expect(component).toHaveScreenshot(SCATTER_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart + implicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartImplicitDirectionItemData');
  await expect(component).toHaveScreenshot(SCATTER_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart + explicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartExplicitDirectionItemData');
  await expect(component).toHaveScreenshot(SCATTER_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart + numeric XAxis + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartNumericXAxisImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_NUMERIC_XAXIS_IMPLICIT_DIRECTION_EQUIVALENT);
});

test('ScatterChart + numeric XAxis + explicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartNumericXAxisExplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_NUMERIC_XAXIS_EXPLICIT_DIRECTION_EQUIVALENT);
});

test('ScatterChart + numeric XAxis + explicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartNumericXAxisExplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_NUMERIC_XAXIS_EXPLICIT_DIRECTION_EQUIVALENT);
});

test('ScatterChart + numeric XAxis + implicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartNumericXAxisImplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_NUMERIC_XAXIS_IMPLICIT_DIRECTION_EQUIVALENT);
});

test('ComposedChart vertical + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart vertical + explicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalExplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart vertical + implicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalImplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart vertical + explicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalExplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart vertical + both directions + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalBothDirectionsRootData');
  await expect(component).toHaveScreenshot(COMPOSED_VERTICAL_BOTH_DIRECTIONS_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart vertical + both directions + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalBothDirectionsItemData');
  await expect(component).toHaveScreenshot(COMPOSED_VERTICAL_BOTH_DIRECTIONS_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart vertical + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(SCATTER_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart vertical + explicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalExplicitDirectionRootData');
  await expect(component).toHaveScreenshot(SCATTER_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart vertical + implicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalImplicitDirectionItemData');
  await expect(component).toHaveScreenshot(SCATTER_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart vertical + explicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalExplicitDirectionItemData');
  await expect(component).toHaveScreenshot(SCATTER_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart vertical + both directions + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalBothDirectionsRootData');
  await expect(component).toHaveScreenshot(SCATTER_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ScatterChart vertical + both directions + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalBothDirectionsItemData');
  await expect(component).toHaveScreenshot(SCATTER_VERTICAL_DIRECTION_AND_DATA_SOURCE_EQUIVALENT);
});

test('ComposedChart vertical + numeric YAxis + both directions + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalNumericYAxisBothDirectionsRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_BOTH_DIRECTIONS_EQUIVALENT);
});

test('ComposedChart vertical + numeric YAxis + both directions + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalNumericYAxisBothDirectionsItemData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_BOTH_DIRECTIONS_EQUIVALENT);
});

test('ScatterChart vertical + numeric YAxis + both directions + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalNumericYAxisBothDirectionsRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_BOTH_DIRECTIONS_EQUIVALENT);
});

test('ScatterChart vertical + numeric YAxis + both directions + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalNumericYAxisBothDirectionsItemData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_BOTH_DIRECTIONS_EQUIVALENT);
});

test('ComposedChart vertical + numeric YAxis + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalNumericYAxisImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_IMPLICIT_DIRECTION_EQUIVALENT);
});

test('ComposedChart vertical + numeric YAxis + implicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ComposedChartVerticalNumericYAxisImplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_IMPLICIT_DIRECTION_EQUIVALENT);
});

test('ScatterChart vertical + numeric YAxis + implicit direction + root data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalNumericYAxisImplicitDirectionRootData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_IMPLICIT_DIRECTION_EQUIVALENT);
});

test('ScatterChart vertical + numeric YAxis + implicit direction + item data', async ({ mountStory }) => {
  const component = await mountStory('ErrorBar.Scatter/ScatterChartVerticalNumericYAxisImplicitDirectionItemData');
  await expect(component).toHaveScreenshot(COMPOSED_AND_SCATTER_VERTICAL_NUMERIC_YAXIS_IMPLICIT_DIRECTION_EQUIVALENT);
});
