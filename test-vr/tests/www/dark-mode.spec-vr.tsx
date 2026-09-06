import { expect, test } from '../fixtures';

test.use({
  colorScheme: 'dark',
});

test.beforeEach(async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
});

test('dark mode: examples list', async ({ mountStory }) => {
  const component = await mountStory('www/dark-mode/ExamplesIndexViewStory');

  await expect(component).toHaveScreenshot({ timeout: 20_000 });
});

test('dark mode: Simple Line Chart', async ({ mountStory }) => {
  const component = await mountStory('www/dark-mode/SimpleLineChartStory');
  await expect(component).toHaveScreenshot();
});
