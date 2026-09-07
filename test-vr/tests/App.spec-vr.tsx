import { expect, testWithThemes } from './fixtures';

testWithThemes('LineChart', async ({ mountStory }) => {
  const component = await mountStory('App/LineChart');
  await expect(component).toHaveScreenshot();
});
