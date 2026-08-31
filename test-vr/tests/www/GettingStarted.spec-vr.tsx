import { expect, test } from '../fixtures';

test('GettingStarted Step1', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step1');
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step2', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step2');
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step3', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step3');
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step4', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step4');
  await expect(component).toHaveScreenshot();
});

test('GettingStarted Step5', async ({ mountStory }) => {
  const component = await mountStory('www/GettingStarted/Step5');
  await expect(component).toHaveScreenshot();
});
