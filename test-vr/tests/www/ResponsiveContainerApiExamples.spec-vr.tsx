import type { ResponsiveContainerExample } from './ResponsiveContainerApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('ResponsiveContainerExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ResponsiveContainerExample>(
    'www/ResponsiveContainerApiExamples/ResponsiveContainerExample',
    {
      isAnimationActive: false,
    },
  );
  await expect(component).toHaveScreenshot();
});
