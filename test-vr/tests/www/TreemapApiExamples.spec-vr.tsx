import type { BundleSizeTreemap } from './TreemapApiExamples.story';
import { expect, test } from '../fixtures';

test('TreeMapNavExample', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/TreeMapNavExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('CustomContentTreemap', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/CustomContentTreemap', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('SimpleTreemap', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/SimpleTreemap', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('TreemapWithPaddingAndGaps', async ({ mountStory }) => {
  const component = await mountStory('www/TreemapApiExamples/TreemapWithPaddingAndGaps', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('BundleSizeTreemap', async ({ mountStory }) => {
  const component = await mountStory<typeof BundleSizeTreemap>('www/TreemapApiExamples/BundleSizeTreemap', {
    testTheme: 'light',
    forceFallbackData: true,
  });
  await expect(component).toHaveScreenshot();
});
