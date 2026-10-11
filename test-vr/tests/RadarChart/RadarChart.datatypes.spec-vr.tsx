import { expect, testWithThemes } from '../fixtures';

testWithThemes('number angle type with explicit domain', async ({ mountStory }) => {
  const component = await mountStory('RadarChart/RadarChart.datatypes/NumberAngleTypeWithExplicitDomain');
  await expect(component).toHaveScreenshot();
});

testWithThemes('number angle type with default domain', async ({ mountStory }) => {
  const component = await mountStory('RadarChart/RadarChart.datatypes/NumberAngleTypeWithDefaultDomain');
  await expect(component).toHaveScreenshot();
});

testWithThemes('category angle type', async ({ mountStory }) => {
  const component = await mountStory('RadarChart/RadarChart.datatypes/CategoryAngleType');
  await expect(component).toHaveScreenshot();
});

testWithThemes('should be correct angle with odd number of points', async ({ mountStory }) => {
  const component = await mountStory('RadarChart/RadarChart.datatypes/CorrectAngleWithOddNumberOfPoints');
  await expect(component).toHaveScreenshot();
});
