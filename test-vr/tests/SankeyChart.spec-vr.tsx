import { expect, test } from './fixtures';

test('Sankey align justify', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyAlignJustify');
  await expect(component).toHaveScreenshot();
});

test('Sankey align left', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyAlignLeft');
  await expect(component).toHaveScreenshot();
});

test('Sankey verticalAlign justify', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyVerticalAlignJustify');
  await expect(component).toHaveScreenshot();
});

test('Sankey verticalAlign top', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyVerticalAlignTop');
  await expect(component).toHaveScreenshot();
});

test('Sankey should keep intermediate nodes out of skipped-depth links', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyKeepIntermediateNodesOutOfSkippedDepthLinks');
  await expect(component).toHaveScreenshot();
});
