import type {
  LabelBarChartExample,
  LabelFunnelPositions,
  LabelPiePositions,
  LabelRadialBarPositions,
} from './LabelApiExamples.story';
import { expect, test } from '../fixtures';

test('LabelCartesianPositions', async ({ mountStory }) => {
  const component = await mountStory('www/LabelApiExamples/LabelCartesianPositions', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LabelPiePositions', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelPiePositions>('www/LabelApiExamples/LabelPiePositions', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('LabelRadialBarPositions', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelRadialBarPositions>('www/LabelApiExamples/LabelRadialBarPositions', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('LabelBarChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelBarChartExample>('www/LabelApiExamples/LabelBarChartExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('LabelFunnelPositions', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelFunnelPositions>('www/LabelApiExamples/LabelFunnelPositions', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
