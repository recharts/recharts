import { expect, testWithThemes } from '../fixtures';

testWithThemes('ChartWithoutSize', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/ChartWithoutSize');
  // chart without size does not render anything so we can't take a screenshot of it!
  await expect(component).toBeEmpty();
});

testWithThemes('StaticDimensionChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/StaticDimensionChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SizeInPercentChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/SizeInPercentChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SizeInStyleChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/SizeInStyleChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ResponsiveChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/ResponsiveChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('ResponsiveContainerResponsiveChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/ResponsiveContainerResponsiveChart');
  await expect(component).toHaveScreenshot();
});
