import { expect, testWithThemes } from '../fixtures';

testWithThemes('RechartsLogo', async ({ mountStory }) => {
  const component = await mountStory('www/RechartsLogo/RechartsLogo');
  await expect(component).toHaveScreenshot();
});
