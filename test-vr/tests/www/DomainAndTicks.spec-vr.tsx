import { expect, testWithThemes } from '../fixtures';

testWithThemes('MassBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChart');
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartCategoricalY', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCategoricalY');
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartCustomYDomain', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCustomYDomain');
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartLogScale', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartLogScale');
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartCustomTicks', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCustomTicks');
  await expect(component).toHaveScreenshot();
});
