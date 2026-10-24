/**
 * @fileOverview https://github.com/recharts/recharts/issues/1972
 */
import { expect, testWithThemes } from './fixtures';

testWithThemes('Pie keeps rounded corners on slices too narrow for the cornerRadius', async ({ mountStory }) => {
  const component = await mountStory('Pie.1972/PieWithCornerRadiusAndSmallSlices');
  await expect(component).toHaveScreenshot();
});
