import { expect, testWithThemes } from '../fixtures';

testWithThemes('Index Line Chart', async ({ mountStory }) => {
  const component = await mountStory('www/IndexView/IndexLineChart');
  await expect(component).toHaveScreenshot();
});
