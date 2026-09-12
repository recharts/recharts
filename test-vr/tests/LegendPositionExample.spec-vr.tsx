import type { LegendPositionExample as LegendPositionExampleStory } from './LegendPositionExample.story';
import { expect, testWithThemes } from './fixtures';

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
  testWithThemes(`LegendPositionExample - ${position}`, async ({ mountStory, rechartsTheme }) => {
    const component = await mountStory<typeof LegendPositionExampleStory>(
      'LegendPositionExample/LegendPositionExample',
      {
        position,
      },
    );
    if (rechartsTheme === 'dark') {
      await expect(component.locator('.recharts-legend-wrapper')).not.toHaveCSS(
        'background-color',
        'rgb(255, 255, 255)',
      );
    }
    await expect(component).toHaveScreenshot();
  });
}
