import type { BundleSizeTreemap } from './TreemapApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('TreeMapNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/TreeMapNavExample');
  await expect(component).toHaveScreenshot();
});

testWithThemes('CustomContentTreemap', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/CustomContentTreemap');
  await expect(component).toHaveScreenshot();
});

testWithThemes('SimpleTreemap', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/SimpleTreemap');
  await expect(component).toHaveScreenshot();
});

testWithThemes('TreemapWithPaddingAndGaps', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/TreemapWithPaddingAndGaps');
  await expect(component).toHaveScreenshot();
});

testWithThemes('BundleSizeTreemap', async ({ mountStory }) => {
  const component = await mountStory<typeof BundleSizeTreemap>('www/TreemapApiExamples/BundleSizeTreemap', {
    forceFallbackData: true,
  });
  await expect(component).toHaveScreenshot();
});
