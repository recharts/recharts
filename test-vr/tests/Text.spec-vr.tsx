import { expect, test } from './fixtures';

test('Text with default props', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithDefaultProps');
  await expect(component).toHaveScreenshot();
});

test('Text with verticalAnchor', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithVerticalAnchor');
  await expect(component).toHaveScreenshot();
});

test('Text with maxLines', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithMaxLines');
  await expect(component).toHaveScreenshot();
});

test('Text with maxLines + width', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithMaxLinesAndWidth');
  await expect(component).toHaveScreenshot();
});

test('Text with width + verticalAnchor', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithWidthAndVerticalAnchor');
  await expect(component).toHaveScreenshot();
});

test('Text with scaleToFit and width', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithScaleToFitAndWidth');
  await expect(component).toHaveScreenshot();
});

test('Text with scaleToFit without width (no effect)', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithScaleToFitWithoutWidth');
  await expect(component).toHaveScreenshot();
});

test('Text with angle rotation around pivot point', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithAngleRotationAroundPivotPoint');
  await expect(component).toHaveScreenshot();
});

test('Text with maxLines without width (no effect)', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithMaxLinesWithoutWidth');
  await expect(component).toHaveScreenshot();
});

test('Text with scaleToFit bypassing maxLines', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithScaleToFitBypassingMaxLines');
  await expect(component).toHaveScreenshot();
});

test('Text with ellipsis truncation', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithEllipsisTruncation');
  await expect(component).toHaveScreenshot();
});

test('Text with breakAll character breaking', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithBreakAllCharacterBreaking');
  await expect(component).toHaveScreenshot();
});

test('Text with different textAnchor alignments', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithDifferentTextAnchorAlignments');
  await expect(component).toHaveScreenshot();
});

test('Text with undefined and null children', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithUndefinedAndNullChildren');
  await expect(component).toHaveScreenshot();
});

test('Text with numeric children', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithNumericChildren');
  await expect(component).toHaveScreenshot();
});

test('Text with complex style and lineHeight combinations', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithComplexStyleAndLineHeightCombinations');
  await expect(component).toHaveScreenshot();
});

test('Text with angle and textAnchor combinations', async ({ mountStory, page }) => {
  const component = await mountStory('Text/TextWithAngleAndTextAnchorCombinations');
  await page.waitForTimeout(500);
  await expect(component).toHaveScreenshot();
});

test('Text with scaleToFit and angle combination', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithScaleToFitAndAngleCombination');
  await expect(component).toHaveScreenshot();
});

test('Text with width + verticalAnchor + scaleToFit combination', async ({ mountStory }) => {
  const component = await mountStory('Text/TextWithWidthVerticalAnchorAndScaleToFitCombination');
  await expect(component).toHaveScreenshot();
});
