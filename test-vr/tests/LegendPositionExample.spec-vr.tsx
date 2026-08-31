import type { LegendPositionExample as LegendPositionExampleStory } from './LegendPositionExample.story';
import { expect, test } from './fixtures';

const positions = [
  'top',
  'left',
  'right',
  'bottom',
  'center',
  'insideLeft',
  'insideRight',
  'insideTop',
  'insideBottom',
  'insideTopLeft',
  'insideBottomLeft',
  'insideTopRight',
  'insideBottomRight',
] as const;

for (const position of positions) {
  test(`LegendPositionExample - ${position}`, async ({ mountStory }) => {
    const component = await mountStory<typeof LegendPositionExampleStory>(
      'LegendPositionExample/LegendPositionExample',
      {
        position,
      },
    );
    await expect(component).toHaveScreenshot();
  });
}
