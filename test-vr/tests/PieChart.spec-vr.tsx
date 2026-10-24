import { expect, testWithThemes } from './fixtures';

testWithThemes('PieChart with paddingAngle and zero value should not double the gap', async ({ mountStory }) => {
  const component = await mountStory('PieChart/PieChartWithPaddingAngleAndZeroValue');
  await expect(component).toHaveScreenshot();
});
