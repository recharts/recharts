import { expect, test } from '../fixtures';

test('MassBarChart', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChart');
  await expect(component).toHaveScreenshot();
});

test('MassBarChartCategoricalY', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCategoricalY');
  await expect(component).toHaveScreenshot();
});

test('MassBarChartCustomYDomain', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCustomYDomain');
  await expect(component).toHaveScreenshot();
});

test('MassBarChartLogScale', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartLogScale');
  await expect(component).toHaveScreenshot();
});

test('MassBarChartCustomTicks', async ({ mountStory }) => {
  const component = await mountStory('www/DomainAndTicks/MassBarChartCustomTicks');
  await expect(component).toHaveScreenshot();
});
