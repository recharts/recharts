import type { ReferenceAreaExample } from './ReferenceAreaApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('ReferenceAreaExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceAreaExample>('www/ReferenceAreaApiExamples/ReferenceAreaExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
