import { expect, testWithThemes } from '../fixtures';

testWithThemes('SankeyCustomNodeExample', async ({ mountStory }) => {
  const component = await mountStory('www/SankeyApiExamples/SankeyCustomNodeExample');
  await expect(component).toHaveScreenshot();
});
