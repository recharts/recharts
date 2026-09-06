import { expect, test } from '../fixtures';

test('MultiXAxisExample', async ({ mountStory }) => {
  const component = await mountStory('www/XAxisApiExamples/MultiXAxisExample');
  await expect(component).toHaveScreenshot();
});
