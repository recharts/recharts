import { expect, testWithThemes } from '../fixtures';

testWithThemes('GettingStarted Step1', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step1');
  await expect(component).toHaveScreenshot();
});

testWithThemes('GettingStarted Step2', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step2');
  await expect(component).toHaveScreenshot();
});

testWithThemes('GettingStarted Step3', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step3');
  await expect(component).toHaveScreenshot();
});

testWithThemes('GettingStarted Step4', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step4');
  await expect(component).toHaveScreenshot();
});

testWithThemes('GettingStarted Step5', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step5');
  await expect(component).toHaveScreenshot();
});
