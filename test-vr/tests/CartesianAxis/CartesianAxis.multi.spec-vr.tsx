import { expect, testWithThemes } from '../fixtures';

testWithThemes('CartesianAxis Multiple Axes', async ({ mountStory }) => {
  const component = await mountStory('CartesianAxis/CartesianAxis.multi/CartesianAxisMultipleAxes');
  await expect(component).toHaveScreenshot();
});
