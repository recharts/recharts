import { expect, testWithThemes } from './fixtures';

testWithThemes('PolarGrid with percentage polarRadius', async ({ mountStory }) => {
  const component = await mountStory('PolarGrid.percentRadius/PolarGridPercentRadius');

  await expect(component).toHaveScreenshot();
});
