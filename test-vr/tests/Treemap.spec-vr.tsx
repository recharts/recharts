import { expect, test } from './fixtures';

test('simple treemap', async ({ mountStory }) => {
  const component = await mountStory('Treemap/SimpleTreemap');
  await expect(component).toHaveScreenshot();
});

test('nested treemap', async ({ mountStory }) => {
  const component = await mountStory('Treemap/NestedTreemap');
  await expect(component).toHaveScreenshot();
});

test('custom aspect ratio', async ({ mountStory }) => {
  const component = await mountStory('Treemap/CustomAspectRatio');
  await expect(component).toHaveScreenshot();
});

test('custom content', async ({ mountStory }) => {
  const component = await mountStory('Treemap/CustomTreemapContent');
  await expect(component).toHaveScreenshot();
});
