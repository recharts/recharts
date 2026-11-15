import type { ReferenceLineExample, ReferenceLinePositionExample } from './ReferenceLineApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('ReferenceLineExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceLineExample>('www/ReferenceLineApiExamples/ReferenceLineExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

testWithThemes('ReferenceLinePositionExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceLinePositionExample>(
    'www/ReferenceLineApiExamples/ReferenceLinePositionExample',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});
