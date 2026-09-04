import { expect, test } from '../fixtures';

test('TooltipStylesExample', async ({ mountStory }) => {
  const component = await mountStory('www/TooltipStylesExample/TooltipStylesExample', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});
