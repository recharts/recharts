import type {
  AnimatedBarWidthExample,
  BarChartHasBackground,
  BarChartRangeExample,
  BoxPlotExample,
  CandlestickExample,
  PopulationPyramidExample,
  RangedStackedBarChart,
  TimelineExample,
} from './BarChartApiExamples.story';
import { expect, test } from '../fixtures';

test('CandlestickExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CandlestickExample>('www/BarChartApiExamples/CandlestickExample', {
    testTheme: 'light',
    defaultIndex: '50',
  });
  await expect(component).toHaveScreenshot();
});

test('BoxPlotExample', async ({ mountStory }) => {
  const component = await mountStory<typeof BoxPlotExample>('www/BarChartApiExamples/BoxPlotExample', {
    testTheme: 'light',
    defaultIndex: '2',
  });
  await expect(component).toHaveScreenshot();
});

test('BoxPlotExample dark', async ({ mountStory }) => {
  const component = await mountStory<typeof BoxPlotExample>('www/BarChartApiExamples/BoxPlotExample', {
    testTheme: 'dark',
    defaultIndex: '2',
  });
  await expect(component).toHaveScreenshot();
});

test('TimelineExample', async ({ mountStory }) => {
  /*
   * This shows a bug where defaultIndex highlights all items in the row
   * but mouse hover only highlights one item in the stack.
   */
  const component = await mountStory<typeof TimelineExample>('www/BarChartApiExamples/TimelineExample', {
    testTheme: 'light',
    defaultIndex: 3,
  });
  await expect(component).toHaveScreenshot();
});

test('PopulationPyramidExample', async ({ mountStory }) => {
  const component = await mountStory<typeof PopulationPyramidExample>(
    'www/BarChartApiExamples/PopulationPyramidExample',
    {
      testTheme: 'light',
      defaultIndex: 4,
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BarChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BarChartWithMultiXAxis', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartWithMultiXAxis', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BarChartHasBackground', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartHasBackground>('www/BarChartApiExamples/BarChartHasBackground', {
    testTheme: 'light',
    defaultIndex: 1,
  });
  await expect(component).toHaveScreenshot();
});

test('BarChartHasBackground dark theme', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartHasBackground>('www/BarChartApiExamples/BarChartHasBackground', {
    testTheme: 'dark',
    defaultIndex: 1,
  });
  await expect(component).toHaveScreenshot();
});

test('BiaxialBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BiaxialBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BarChartStackedBySign', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartStackedBySign', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BarChartWithMinHeight', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartWithMinHeight', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BarChartWithCustomizedEvent', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartWithCustomizedEvent', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BrushBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BrushBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('PositiveAndNegativeBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/PositiveAndNegativeBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomShapeBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/CustomShapeBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('MixBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/MixBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('StackedBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/StackedBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SimpleBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/SimpleBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('TinyBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/TinyBarChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BarChartRangeExample', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartRangeExample>('www/BarChartApiExamples/BarChartRangeExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('RangedStackedBarChart', async ({ mountStory }) => {
  const component = await mountStory<typeof RangedStackedBarChart>('www/BarChartApiExamples/RangedStackedBarChart', {
    testTheme: 'light',
    isAnimationActive: false,
    defaultIndex: '1',
  });
  await expect(component).toHaveScreenshot();
});

test('AnimatedBarWidthExample', async ({ mountStory }) => {
  const component = await mountStory<typeof AnimatedBarWidthExample>(
    'www/BarChartApiExamples/AnimatedBarWidthExample',
    {
      testTheme: 'light',
      isAnimationActive: false,
      defaultIndex: '2',
    },
  );
  await expect(component).toHaveScreenshot();
});
