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
import { expect, testWithThemes } from '../fixtures';

testWithThemes('CandlestickExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CandlestickExample>('www/BarChartApiExamples/CandlestickExample', {
    defaultIndex: '50',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('BoxPlotExample', async ({ mountStory }) => {
  const component = await mountStory<typeof BoxPlotExample>('www/BarChartApiExamples/BoxPlotExample', {
    defaultIndex: '2',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('TimelineExample', async ({ mountStory }) => {
  /*
   * This shows a bug where defaultIndex highlights all items in the row
   * but mouse hover only highlights one item in the stack.
   */
  const component = await mountStory<typeof TimelineExample>('www/BarChartApiExamples/TimelineExample', {
    defaultIndex: 3,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('PopulationPyramidExample', async ({ mountStory }) => {
  const component = await mountStory<typeof PopulationPyramidExample>(
    'www/BarChartApiExamples/PopulationPyramidExample',
    {
      defaultIndex: 4,
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartNavExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartWithMultiXAxis', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartWithMultiXAxis');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartHasBackground', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartHasBackground>('www/BarChartApiExamples/BarChartHasBackground', {
    defaultIndex: 1,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('BiaxialBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BiaxialBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartStackedBySign', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartStackedBySign');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartWithMinHeight', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartWithMinHeight');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartWithCustomizedEvent', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BarChartWithCustomizedEvent');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BrushBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/BrushBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('PositiveAndNegativeBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/PositiveAndNegativeBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomShapeBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/CustomShapeBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('MixBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/MixBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('StackedBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/StackedBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SimpleBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/SimpleBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('TinyBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/BarChartApiExamples/TinyBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BarChartRangeExample', async ({ mountStory }) => {
  const component = await mountStory<typeof BarChartRangeExample>('www/BarChartApiExamples/BarChartRangeExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('RangedStackedBarChart', async ({ mountStory }) => {
  const component = await mountStory<typeof RangedStackedBarChart>('www/BarChartApiExamples/RangedStackedBarChart', {
    isAnimationActive: false,
    defaultIndex: '1',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('AnimatedBarWidthExample', async ({ mountStory }) => {
  const component = await mountStory<typeof AnimatedBarWidthExample>(
    'www/BarChartApiExamples/AnimatedBarWidthExample',
    {
      isAnimationActive: false,
      defaultIndex: '2',
    },
  );
  await expect(component).toHaveScreenshot();
});
