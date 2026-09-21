import { expect, testWithThemes } from '../fixtures';

testWithThemes('MassBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChart', {
    defaultIndex: 0,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartCategoricalY', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCategoricalY', {
    defaultIndex: 0,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartCustomYDomain', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCustomYDomain', {
    defaultIndex: 0,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartLogScale', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartLogScale', {
    defaultIndex: 0,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('MassBarChartCustomTicks', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCustomTicks', {
    defaultIndex: 0,
  });
  await expect(component).toHaveScreenshot();
});
