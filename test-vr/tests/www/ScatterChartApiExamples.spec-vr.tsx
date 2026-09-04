import type {
  BubbleChart,
  JointLineScatterChart,
  ScatterChartExample,
  ScatterChartWithLabels,
  ThreeDimScatterChart,
} from './ScatterChartApiExamples.story';
import { expect, test } from '../fixtures';

test('ScatterChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/ScatterChartApiExamples/ScatterChartNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('ScatterChartWithCells', async ({ mountStory }) => {
  const component = await mountStory('www/ScatterChartApiExamples/ScatterChartWithCells', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('MultipleYAxesScatterChart', async ({ mountStory }) => {
  const component = await mountStory('www/ScatterChartApiExamples/MultipleYAxesScatterChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('ScatterChartWithLabels', async ({ mountStory }) => {
  const component = await mountStory<typeof ScatterChartWithLabels>(
    'www/ScatterChartApiExamples/ScatterChartWithLabels',
    {
      testTheme: 'light',
      defaultIndex: '2',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BubbleChart', async ({ mountStory }) => {
  const component = await mountStory<typeof BubbleChart>('www/ScatterChartApiExamples/BubbleChart', {
    testTheme: 'light',
    defaultIndex: '7',
  });
  await expect(component).toHaveScreenshot();
});

test('JointLineScatterChart', async ({ mountStory }) => {
  const component = await mountStory<typeof JointLineScatterChart>(
    'www/ScatterChartApiExamples/JointLineScatterChart',
    {
      testTheme: 'light',
      defaultIndex: '2',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('ThreeDimScatterChart', async ({ mountStory }) => {
  const component = await mountStory<typeof ThreeDimScatterChart>('www/ScatterChartApiExamples/ThreeDimScatterChart', {
    testTheme: 'light',
    defaultIndex: '3',
  });
  await expect(component).toHaveScreenshot();
});

test('ScatterChartExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ScatterChartExample>('www/ScatterChartApiExamples/ScatterChartExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
