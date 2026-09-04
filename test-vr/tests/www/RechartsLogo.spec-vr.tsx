import { expect, test } from '../fixtures';

test('RechartsLogo', async ({ mountStory }) => {
  const component = await mountStory('www/RechartsLogo/RechartsLogo');
  await expect(component).toHaveScreenshot();
});
