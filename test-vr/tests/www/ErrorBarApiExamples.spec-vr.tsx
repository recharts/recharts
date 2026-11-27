import type { ErrorBarExample } from './ErrorBarApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('ErrorBarExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ErrorBarExample>('www/ErrorBarApiExamples/ErrorBarExample', {
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
