import { expect, testWithThemes } from './fixtures';

testWithThemes('Sankey align justify', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyAlignJustify');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Sankey align left', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyAlignLeft');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Sankey verticalAlign justify', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyVerticalAlignJustify');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Sankey verticalAlign top', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyVerticalAlignTop');
  await expect(component).toHaveScreenshot();
});

testWithThemes('Sankey should keep intermediate nodes out of skipped-depth links', async ({ mountStory }) => {
  const component = await mountStory('SankeyChart/SankeyKeepIntermediateNodesOutOfSkippedDepthLinks');
  await expect(component).toHaveScreenshot();
});
