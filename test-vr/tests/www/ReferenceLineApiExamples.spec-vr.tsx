import type { ReferenceLineExample, ReferenceLinePositionExample } from './ReferenceLineApiExamples.story';
import { expect, test } from '../fixtures';

test('ReferenceLineExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceLineExample>('www/ReferenceLineApiExamples/ReferenceLineExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('ReferenceLinePositionExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceLinePositionExample>(
    'www/ReferenceLineApiExamples/ReferenceLinePositionExample',
    {
      testTheme: 'light',
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});
