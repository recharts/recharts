import { expect, test } from '../fixtures';

test('AreaChartNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('AreaChartFillByValue', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartFillByValue', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('TinyAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/TinyAreaChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SynchronizedAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/SynchronizedAreaChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('PercentAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/PercentAreaChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CardinalAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/CardinalAreaChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('AreaChartConnectNulls', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartConnectNulls', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('AreaChartConnectNulls dark mode', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartConnectNulls', { testTheme: 'dark' });
  await expect(component).toHaveScreenshot();
});

test('StackedAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/StackedAreaChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SimpleAreaChart', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/SimpleAreaChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('AreaChartExample', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('AreaChartRangeExample', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/AreaChartRangeExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('CrosshairExample', async ({ mountStory }) => {
  const component = await mountStory('www/AreaChartApiExamples/CrosshairExample', {
    testTheme: 'light',
    initialPointers: [{ relativeX: 100, relativeY: 100 }],
  });
  await expect(component).toHaveScreenshot();
});
