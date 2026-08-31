import { expect, test } from '../fixtures';

test('one chart four themes', async ({ mountStory }) => {
  const component = await mountStory('theme/OneChartFourThemes/OneChartFourThemes');
  await expect(component).toHaveScreenshot();
});
