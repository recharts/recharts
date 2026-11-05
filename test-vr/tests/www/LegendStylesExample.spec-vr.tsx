import { expect, testWithThemes } from '../fixtures';

testWithThemes('LegendStylesExample', async ({ mountStory }) => {
  const component = await mountStory('www/LegendStylesExample/LegendStylesExample');
  await expect(component).toHaveScreenshot();
});
