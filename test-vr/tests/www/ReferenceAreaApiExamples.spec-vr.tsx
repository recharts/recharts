import type { ReferenceAreaExample } from './ReferenceAreaApiExamples.story';
import { expect, test } from '../fixtures';

test('ReferenceAreaExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceAreaExample>('www/ReferenceAreaApiExamples/ReferenceAreaExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
