import type {
  LineChartHasMultiSeries,
  VerticalLineChart,
  VerticalLineChartWithSpecifiedDomain,
} from './LineChartApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('LineChartNegativeValuesWithReferenceLines', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartNegativeValuesWithReferenceLines');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LineChartAxisInterval', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartAxisInterval');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LineChartHasMultiSeries', async ({ mountStory }) => {
  const component = await mountStory<typeof LineChartHasMultiSeries>(
    'www/LineChartApiExamples/LineChartHasMultiSeries',
    {
      defaultIndex: 2,
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('HighlightAndZoomLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/HighlightAndZoomLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SynchronizedLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/SynchronizedLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomizedLabelLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/CustomizedLabelLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomizedDotLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/CustomizedDotLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LineChartWithReferenceLines', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartWithReferenceLines');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LineChartWithXAxisPadding', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartWithXAxisPadding');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LineChartConnectNulls', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartConnectNulls');
  await expect(component).toHaveScreenshot();
});

testWithThemes('VerticalLineChartWithSpecifiedDomain', async ({ mountStory }) => {
  const component = await mountStory<typeof VerticalLineChartWithSpecifiedDomain>(
    'www/LineChartApiExamples/VerticalLineChartWithSpecifiedDomain',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('BiaxialLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/BiaxialLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('VerticalLineChart', async ({ mountStory }) => {
  const component = await mountStory<typeof VerticalLineChart>('www/LineChartApiExamples/VerticalLineChart', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('DashedLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/DashedLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('TinyLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/TinyLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SimpleLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/SimpleLineChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LineChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartNavExample');
  await expect(component).toHaveScreenshot();
});
