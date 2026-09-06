/**
 * @fileOverview https://github.com/recharts/recharts/issues/7245
 */
import { expect, test } from './fixtures';

test('BarStack with stroked bars and rounded corners', async ({ mountStory }) => {
  const component = await mountStory('Bar.7245/BarStackWithStrokedBarsAndRoundedCorners');
  await expect(component).toHaveScreenshot();
});

test('BarStack with stroked bars and square corners', async ({ mountStory }) => {
  const component = await mountStory('Bar.7245/BarStackWithStrokedBarsAndSquareCorners');
  await expect(component).toHaveScreenshot();
});

test('BarStack with rounded corners and no stroke', async ({ mountStory }) => {
  const component = await mountStory('Bar.7245/BarStackWithRoundedCornersAndNoStroke');
  await expect(component).toHaveScreenshot();
});
