import type { CustomContentOfTooltip } from './TooltipApiExamples.story';
import { expect, test } from '../fixtures';

test('CustomContentOfTooltip', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomContentOfTooltip>('www/TooltipApiExamples/CustomContentOfTooltip', {
    testTheme: 'light',
    isAnimationActive: false,
    defaultIndex: '3',
  });
  await expect(component).toHaveScreenshot();
});

test('CustomContentOfTooltip dark theme', async ({ mountStory }) => {
  const component = await mountStory<typeof CustomContentOfTooltip>('www/TooltipApiExamples/CustomContentOfTooltip', {
    testTheme: 'dark',
    isAnimationActive: false,
    defaultIndex: '3',
  });
  await expect(component).toHaveScreenshot();
});
