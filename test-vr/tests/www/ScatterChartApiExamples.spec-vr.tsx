import type {
  BubbleChart,
  JointLineScatterChart,
  ScatterChartExample,
  ScatterChartWithLabels,
  ThreeDimScatterChart,
} from './ScatterChartApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('ScatterChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/ScatterChartApiExamples/ScatterChartNavExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ScatterChartWithCells', async ({ mountStory }) => {
  const component = await mountStory('www/ScatterChartApiExamples/ScatterChartWithCells');
  await expect(component).toHaveScreenshot();
});

testWithThemes('MultipleYAxesScatterChart', async ({ mountStory }) => {
  const component = await mountStory('www/ScatterChartApiExamples/MultipleYAxesScatterChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ScatterChartWithLabels', async ({ mountStory }) => {
  const component = await mountStory<typeof ScatterChartWithLabels>(
    'www/ScatterChartApiExamples/ScatterChartWithLabels',
    {
      defaultIndex: '2',
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('BubbleChart', async ({ mountStory }) => {
  const component = await mountStory<typeof BubbleChart>('www/ScatterChartApiExamples/BubbleChart', {
    defaultIndex: '7',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('JointLineScatterChart', async ({ mountStory }) => {
  const component = await mountStory<typeof JointLineScatterChart>(
    'www/ScatterChartApiExamples/JointLineScatterChart',
    {
      defaultIndex: '2',
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('ThreeDimScatterChart', async ({ mountStory }) => {
  const component = await mountStory<typeof ThreeDimScatterChart>('www/ScatterChartApiExamples/ThreeDimScatterChart', {
    defaultIndex: '3',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('ScatterChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ScatterChartExample>('www/ScatterChartApiExamples/ScatterChartExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
