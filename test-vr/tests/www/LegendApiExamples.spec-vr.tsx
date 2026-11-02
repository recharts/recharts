import type { LegendExample } from './LegendApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('LegendEffectOpacity', async ({ mountStory }) => {
  const component = await mountStory('www/LegendApiExamples/LegendEffectOpacity');
  await expect(component).toHaveScreenshot();
});

testWithThemes('LegendExample', async ({ mountStory }) => {
  const component = await mountStory<typeof LegendExample>('www/LegendApiExamples/LegendExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
