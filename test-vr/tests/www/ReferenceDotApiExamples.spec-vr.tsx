import type { ReferenceDotExample } from './ReferenceDotApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('ReferenceDotExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceDotExample>('www/ReferenceDotApiExamples/ReferenceDotExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
