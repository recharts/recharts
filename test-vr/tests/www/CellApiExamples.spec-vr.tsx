import type { CellBarExample, CellPieExample } from './CellApiExamples.story';
import { expect, test } from '../fixtures';

test('CellPieExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CellPieExample>('www/CellApiExamples/CellPieExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('CellBarExample', async ({ mountStory }) => {
  const component = await mountStory<typeof CellBarExample>('www/CellApiExamples/CellBarExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
