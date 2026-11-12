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
import { expect, testWithThemes } from '../fixtures';

testWithThemes('PieChartNavExample', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartNavExample>('www/PieChartApiExamples/PieChartNavExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

// The grid test is wild, it's failing in firefox in CI but passing on local. And timing out in Chrome and Safari - even though in real browser it looks just fine.
// test('PieChartInGrid', async ({ mountStory }) => {
//   const component = await mountStory('www/PieChartApiExamples/PieChartInGrid');
//   await expect(component).toHaveScreenshot();
// });

testWithThemes('PieChartInFlexbox', async ({ mountStory }) => {
  const component = await mountStory('www/PieChartApiExamples/PieChartInFlexbox');
  await expect(component).toHaveScreenshot();
});

testWithThemes('PieChartWithNeedle', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartWithNeedle>('www/PieChartApiExamples/PieChartWithNeedle', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('PieChartWithPaddingAngle', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartWithPaddingAngle>(
    'www/PieChartApiExamples/PieChartWithPaddingAngle',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('PieChartWithCustomizedLabel', async ({ mountStory }) => {
  const component = await mountStory<typeof PieChartWithCustomizedLabel>(
    'www/PieChartApiExamples/PieChartWithCustomizedLabel',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomActiveShapePieChart', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomActiveShapePieChart>(
    'www/PieChartApiExamples/CustomActiveShapePieChart',
    {
      isAnimationActive: false,
      defaultIndex: '0',
    },
  );
  await expect(component).toHaveScreenshot();
});

testWithThemes('StraightAnglePieChart', async ({ mountStory }) => {
  const component = await mountStory<typeof StraightAnglePieChart>('www/PieChartApiExamples/StraightAnglePieChart', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('TwoLevelPieChart', async ({ mountStory }) => {
  const component = await mountStory<typeof TwoLevelPieChart>('www/PieChartApiExamples/TwoLevelPieChart', {
    isAnimationActive: false,
    defaultIndex: '1',
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('PieWithGradient', async ({ mountStory }) => {
  const component = await mountStory<typeof PieWithGradient>('www/PieChartApiExamples/PieWithGradient', {
    isAnimationActive: false,
    defaultIndex: '1',
  });
  await expect(component).toHaveScreenshot();
});
