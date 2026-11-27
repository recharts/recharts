import { expect, testWithThemes } from '../fixtures';

testWithThemes('TooltipStylesExample', async ({ mountStory }) => {
  const component = await mountStory('www/TooltipStylesExample/TooltipStylesExample');
  await expect(component).toHaveScreenshot();
});
