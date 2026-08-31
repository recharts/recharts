import { expect, test } from '../fixtures';

test('CartesianAxis Multiple Axes', async ({ mountStory }) => {
  const component = await mountStory('CartesianAxis/CartesianAxis.multi/CartesianAxisMultipleAxes');
  await expect(component).toHaveScreenshot();
});
