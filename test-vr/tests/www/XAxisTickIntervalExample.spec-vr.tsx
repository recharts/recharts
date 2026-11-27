import { expect, testWithThemes } from '../fixtures';

testWithThemes('XAxisTickIntervalExample', async ({ mountStory }) => {
  const component = await mountStory('www/XAxisTickIntervalExample/XAxisTickIntervalExample');
  await expect(component).toHaveScreenshot();
});
