import type {
  LabelBarChartExample,
  LabelFunnelPositions,
  LabelPiePositions,
  LabelRadialBarPositions,
} from './LabelApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('LabelCartesianPositions', async ({ mountStory }) => {
  const component = await mountStory('www/LabelApiExamples/LabelCartesianPositions');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LabelPiePositions', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelPiePositions>('www/LabelApiExamples/LabelPiePositions', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('LabelRadialBarPositions', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelRadialBarPositions>('www/LabelApiExamples/LabelRadialBarPositions', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('LabelBarChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelBarChartExample>('www/LabelApiExamples/LabelBarChartExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('LabelFunnelPositions', async ({ mountStory }) => {
  const component = await mountStory<typeof LabelFunnelPositions>('www/LabelApiExamples/LabelFunnelPositions', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
