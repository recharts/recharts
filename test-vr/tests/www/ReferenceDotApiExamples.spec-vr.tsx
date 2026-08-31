import type { ReferenceDotExample } from './ReferenceDotApiExamples.story';
import { expect, test } from '../fixtures';

test('ReferenceDotExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ReferenceDotExample>('www/ReferenceDotApiExamples/ReferenceDotExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
