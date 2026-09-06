import type { LegendExample } from './LegendApiExamples.story';
import { expect, test } from '../fixtures';

test('LegendEffectOpacity', async ({ mountStory }) => {
  const component = await mountStory('www/LegendApiExamples/LegendEffectOpacity', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('LegendExample', async ({ mountStory }) => {
  const component = await mountStory<typeof LegendExample>('www/LegendApiExamples/LegendExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
