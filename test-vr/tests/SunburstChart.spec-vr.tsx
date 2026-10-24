import { expect, testWithThemes } from './fixtures';

testWithThemes('Sunburst without colors in data', async ({ mountStory }) => {
  const component = await mountStory('SunburstChart/SunburstWithoutColors');
  await expect(component).toHaveScreenshot();
});
