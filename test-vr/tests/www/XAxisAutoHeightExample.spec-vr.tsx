import { expect, testWithThemes } from '../fixtures';

testWithThemes('XAxisAutoHeightExample', async ({ mountStory }) => {
  const component = await mountStory('www/XAxisAutoHeightExample/XAxisAutoHeightExample');
  await expect(component).toHaveScreenshot();
});
