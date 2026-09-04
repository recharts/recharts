import type {
  CustomActiveShapePieChart,
  PieChartNavExample,
  PieChartWithCustomizedLabel,
  PieChartWithNeedle,
  PieChartWithPaddingAngle,
  PieWithGradient,
  StraightAnglePieChart,
  TwoLevelPieChart,
} from './PieChartApiExamples.story';
import { expect, test } from '../fixtures';

test('PieChartNavExample', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartNavExample>('www/PieChartApiExamples/PieChartNavExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

// The grid test is wild, it's failing in firefox in CI but passing on local. And timing out in Chrome and Safari - even though in real browser it looks just fine.
// test('PieChartInGrid', async ({ mountStory }) => {
//   const component = await mountStory('www/PieChartApiExamples/PieChartInGrid');
//   await expect(component).toHaveScreenshot();
// });

test('PieChartInFlexbox', async ({ mountStory }) => {
  const component = await mountStory('www/PieChartApiExamples/PieChartInFlexbox', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('PieChartWithNeedle', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartWithNeedle>('www/PieChartApiExamples/PieChartWithNeedle', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('PieChartWithPaddingAngle', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartWithPaddingAngle>(
    'www/PieChartApiExamples/PieChartWithPaddingAngle',
    {
      testTheme: 'light',
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});

test('PieChartWithCustomizedLabel', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartWithCustomizedLabel>(
    'www/PieChartApiExamples/PieChartWithCustomizedLabel',
    {
      testTheme: 'light',
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});

test('CustomActiveShapePieChart', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomActiveShapePieChart>(
    'www/PieChartApiExamples/CustomActiveShapePieChart',
    {
      testTheme: 'light',
      isAnimationActive: false,
      defaultIndex: '0',
    },
  );
  await expect(component).toHaveScreenshot();
});

test('StraightAnglePieChart', async ({ mountStory }) => {
  const component = await mountStory<typeof StraightAnglePieChart>('www/PieChartApiExamples/StraightAnglePieChart', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('TwoLevelPieChart', async ({ mountStory }) => {
  const component = await mountStory<typeof TwoLevelPieChart>('www/PieChartApiExamples/TwoLevelPieChart', {
    testTheme: 'light',
    isAnimationActive: false,
    defaultIndex: '1',
  });
  await expect(component).toHaveScreenshot();
});

test('PieWithGradient', async ({ mountStory }) => {
  const component = await mountStory<typeof PieWithGradient>('www/PieChartApiExamples/PieWithGradient', {
    testTheme: 'light',
    isAnimationActive: false,
    defaultIndex: '1',
  });
  await expect(component).toHaveScreenshot();
});
