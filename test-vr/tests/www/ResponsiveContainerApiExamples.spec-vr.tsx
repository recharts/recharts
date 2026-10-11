import type { ResponsiveContainerExample } from './ResponsiveContainerApiExamples.story';
import { expect, test } from '../fixtures';

test('ResponsiveContainerExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ResponsiveContainerExample>(
    'www/ResponsiveContainerApiExamples/ResponsiveContainerExample',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});
