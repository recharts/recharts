import { expect, testWithThemes } from './fixtures';

testWithThemes('Scatter with type in data array', async ({ mountStory }) => {
  const component = await mountStory('Scatter/ScatterWithTypeInDataArray');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Scatter with shape prop', async ({ mountStory }) => {
  const component = await mountStory('Scatter/ScatterWithShapeProp');
  await expect(component).toHaveScreenshot();
});
