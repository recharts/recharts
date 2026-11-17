import { expect, testWithThemes } from '../fixtures';

testWithThemes('MultiXAxisExample', async ({ mountStory }) => {
  const component = await mountStory('www/XAxisApiExamples/MultiXAxisExample');
  await expect(component).toHaveScreenshot();
});
