import { expect, testWithThemes } from './fixtures';

testWithThemes('simple treemap', async ({ mountStory }) => {
  const component = await mountStory('Treemap/SimpleTreemap');
  await expect(component).toHaveScreenshot();
});

testWithThemes('nested treemap', async ({ mountStory }) => {
  const component = await mountStory('Treemap/NestedTreemap');
  await expect(component).toHaveScreenshot();
});

testWithThemes('custom aspect ratio', async ({ mountStory }) => {
  const component = await mountStory('Treemap/CustomAspectRatio');
  await expect(component).toHaveScreenshot();
});

testWithThemes('custom content', async ({ mountStory }) => {
  const component = await mountStory('Treemap/CustomTreemapContent');
  await expect(component).toHaveScreenshot();
});
