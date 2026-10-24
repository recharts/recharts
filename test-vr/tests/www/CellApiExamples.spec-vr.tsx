import type { CellBarExample, CellPieExample } from './CellApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('CellPieExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CellPieExample>('www/CellApiExamples/CellPieExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('CellBarExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CellBarExample>('www/CellApiExamples/CellBarExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
