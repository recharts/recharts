import { expect, test } from '../fixtures';

test('Index Line Chart', async ({ mountStory }) => {
  const component = await mountStory('www/IndexView/IndexLineChart', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
