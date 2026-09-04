import { expect, test } from './fixtures';

test('Scatter with type in data array', async ({ mountStory }) => {
  const component = await mountStory('Scatter/ScatterWithTypeInDataArray');
  await expect(component).toHaveScreenshot();
});

test('Scatter with shape prop', async ({ mountStory }) => {
  const component = await mountStory('Scatter/ScatterWithShapeProp');
  await expect(component).toHaveScreenshot();
});
