import type {
  LineChartHasMultiSeries,
  VerticalLineChart,
  VerticalLineChartWithSpecifiedDomain,
} from './LineChartApiExamples.story';
import { expect, test } from '../fixtures';

test('LineChartNegativeValuesWithReferenceLines', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartNegativeValuesWithReferenceLines', {
    testTheme: 'light',
  });
  await expect(component).toHaveScreenshot();
});

test('LineChartAxisInterval', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartAxisInterval', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LineChartHasMultiSeries', async ({ mountStory }) => {
  const component = await mountStory<typeof LineChartHasMultiSeries>(
    'www/LineChartApiExamples/LineChartHasMultiSeries',
    {
      testTheme: 'light',
      defaultIndex: 2,
    },
  );
  await expect(component).toHaveScreenshot();
});

test('HighlightAndZoomLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/HighlightAndZoomLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SynchronizedLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/SynchronizedLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomizedLabelLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/CustomizedLabelLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomizedLabelLineChart dark mode', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/CustomizedLabelLineChart', { testTheme: 'dark' });
  await expect(component).toHaveScreenshot();
});

test('CustomizedDotLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/CustomizedDotLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LineChartWithReferenceLines', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartWithReferenceLines', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LineChartWithXAxisPadding', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartWithXAxisPadding', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LineChartConnectNulls', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartConnectNulls', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('VerticalLineChartWithSpecifiedDomain', async ({ mountStory }) => {
  const component = await mountStory<typeof VerticalLineChartWithSpecifiedDomain>(
    'www/LineChartApiExamples/VerticalLineChartWithSpecifiedDomain',
    {
      testTheme: 'light',
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});

test('BiaxialLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/BiaxialLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('VerticalLineChart', async ({ mountStory }) => {
  const component = await mountStory<typeof VerticalLineChart>('www/LineChartApiExamples/VerticalLineChart', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('DashedLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/DashedLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('TinyLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/TinyLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SimpleLineChart', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/SimpleLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LineChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/LineChartApiExamples/LineChartNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
