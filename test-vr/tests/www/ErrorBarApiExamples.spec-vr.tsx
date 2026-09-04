import type { ErrorBarExample } from './ErrorBarApiExamples.story';
import { expect, test } from '../fixtures';

test('ErrorBarExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ErrorBarExample>('www/ErrorBarApiExamples/ErrorBarExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});

test('ErrorBarExample dark mode', async ({ mountStory }) => {
  const component = await mountStory<typeof ErrorBarExample>('www/ErrorBarApiExamples/ErrorBarExample', {
    testTheme: 'dark',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
