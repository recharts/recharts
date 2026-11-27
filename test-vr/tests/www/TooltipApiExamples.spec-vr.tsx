import type { CustomContentOfTooltip } from './TooltipApiExamples.story';
import { expect, testWithThemes } from '../fixtures';

testWithThemes('CustomContentOfTooltip', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomContentOfTooltip>('www/TooltipApiExamples/CustomContentOfTooltip', {
    isAnimationActive: false,
    defaultIndex: '3',
  });
  await expect(component).toHaveScreenshot();
});
