import type { ShadowDomExample } from './ZIndex.story';
import { expect, test } from '../fixtures';

test('ZIndex PrahaMetro', async ({ mountStory }) => {
  const component = await mountStory('www/ZIndex/PrahaMetro', { testTheme: 'light' });
  await expect(component).toHaveScreenshot();
});

test('ShadowDomExample', async ({ mountStory }) => {
  const component = await mountStory<typeof ShadowDomExample>('www/ZIndex/ShadowDomExample', {
    testTheme: 'light',
    isAnimationActive: false,
  });
  await expect(component).toHaveScreenshot();
});
