import { expect, test } from './fixtures';

test('YAxis with default width', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithDefaultWidth');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width={80}', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidth80');
  await expect(component).toHaveScreenshot();
});

// tick defaults to true, so leaving it unset and setting it explicitly must render
// the same.
const WIDTH_AUTO_TICK_DEFAULT_EQUALS_TRUE = 'YAxis-width-auto-tick-default-equals-true.png';
// At this font size the tick text already fits on one line, so maxLines={1} is a
// no-op here — asserted so a future change to the wrapping threshold that breaks
// this assumption is caught, rather than quietly producing two different-but-both-
// unread baselines.
const WIDTH_AUTO_LONG_TICKS_MAX_LINES_1_IS_NOOP_AT_THIS_SIZE =
  'YAxis-width-auto-longTicks-maxLines1-noop-at-this-size.png';
test('YAxis with width="auto"', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAuto');
  await expect(component).toHaveScreenshot(WIDTH_AUTO_TICK_DEFAULT_EQUALS_TRUE);
});

test('YAxis with width="auto" and long tick values', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAutoAndLongTickValues');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and tick=true', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAutoAndTickTrue');
  await expect(component).toHaveScreenshot(WIDTH_AUTO_TICK_DEFAULT_EQUALS_TRUE);
});

test('YAxis with width="auto" and smaller tick fontsize', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAutoAndSmallerTickFontsize');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and bigger tick fontsize', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAutoAndBiggerTickFontsize');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and tick textAnchor = start', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAutoAndTickTextAnchorStart');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and angled ticks', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAutoAndAngledTicks');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and two-line ticks', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithWidthAutoTwoLineTicks');
  await expect(component).toHaveScreenshot();
});

test('YAxis with default width and two-line ticks', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithTwoLineTicks');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and long ticks', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithLongTicksAndWidthAuto');
  await expect(component).toHaveScreenshot();
});

test('YAxis with width="auto" and long ticks and tick object', async ({ mountStory }) => {
  const component = await mountStory('YAxis/YAxisWithLongTicksAndTickObjectAndWidthAuto');
  await expect(component).toHaveScreenshot(WIDTH_AUTO_LONG_TICKS_MAX_LINES_1_IS_NOOP_AT_THIS_SIZE);
});

test('YAxis with width="auto" and long ticks and tick object and smaller font size and maxLines=1', async ({
  mountStory,
}) => {
  const component = await mountStory('YAxis/YAxisWithLongTicksAndMaxLines1');
  await expect(component).toHaveScreenshot(WIDTH_AUTO_LONG_TICKS_MAX_LINES_1_IS_NOOP_AT_THIS_SIZE);
});
