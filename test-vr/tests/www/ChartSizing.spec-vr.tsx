import { expect, test } from '../fixtures';

test('ChartWithoutSize', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/ChartWithoutSize');
  // chart without size does not render anything so we can't take a screenshot of it!
  await expect(component).toBeEmpty();
});

test('StaticDimensionChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/StaticDimensionChart');
  await expect(component).toHaveScreenshot();
});

test('SizeInPercentChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/SizeInPercentChart');
  await expect(component).toHaveScreenshot();
});

test('SizeInStyleChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/SizeInStyleChart');
  await expect(component).toHaveScreenshot();
});

test('ResponsiveChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/ResponsiveChart');
  await expect(component).toHaveScreenshot();
});

test('ResponsiveContainerResponsiveChart', async ({ mountStory }) => {
  const component = await mountStory('www/ChartSizing/ResponsiveContainerResponsiveChart');
  await expect(component).toHaveScreenshot();
});
