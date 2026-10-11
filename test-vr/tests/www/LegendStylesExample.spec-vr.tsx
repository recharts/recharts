import { expect, test } from '../fixtures';

test('LegendStylesExample', async ({ mountStory }) => {
  const component = await mountStory('www/LegendStylesExample/LegendStylesExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
