import { expect, test } from '../fixtures';

test('SankeyCustomNodeExample', async ({ mountStory }) => {
  const component = await mountStory('www/SankeyApiExamples/SankeyCustomNodeExample');
  await expect(component).toHaveScreenshot();
});
